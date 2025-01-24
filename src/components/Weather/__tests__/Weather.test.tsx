import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import { Weather } from '../index';

// Mock weather and geocoding responses
const mockGeocodingResponse = {
  results: [
    {
      name: 'London',
      country: 'United Kingdom',
      latitude: 51.5074,
      longitude: -0.1278
    }
  ]
};

const mockWeatherResponse = {
  current: {
    temperature_2m: 20,
    relative_humidity_2m: 65,
    apparent_temperature: 19,
    weather_code: 1,
    wind_speed_10m: 15,
    wind_direction_10m: 180
  },
  hourly: {
    time: Array.from({ length: 24 }, (_, i) => new Date(Date.now() + i * 3600000).toISOString()),
    temperature_2m: Array.from({ length: 24 }, () => 20),
    weather_code: Array.from({ length: 24 }, () => 1)
  }
};

describe('Weather', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    jest.useFakeTimers();
    localStorage.clear();
  });

  afterEach(() => {
    jest.useRealTimers();
    localStorage.clear();
  });

  it('renders loading state initially', async () => {
    const geoPromise = new Promise(() => {}); // Never resolves to keep loading state
    (global.fetch as jest.Mock).mockImplementationOnce(() => geoPromise);

    render(<Weather />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders loading state', () => {
    render(<Weather />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('handles error state', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to fetch'))
    );

    render(<Weather />);
    await waitFor(() => {
      expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
    });
  });

  it('handles city search with debounce', async () => {
    const initialGeoPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockGeocodingResponse)
    });
    const initialWeatherPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockWeatherResponse)
    });

    const searchGeoPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: [{
          name: 'Paris',
          country: 'France',
          latitude: 48.8566,
          longitude: 2.3522
        }]
      })
    });

    (global.fetch as jest.Mock)
      .mockImplementationOnce(() => initialGeoPromise)
      .mockImplementationOnce(() => initialWeatherPromise)
      .mockImplementationOnce(() => searchGeoPromise);

    render(<Weather />);

    await act(async () => {
      await initialGeoPromise;
      await initialWeatherPromise;
    });

    const searchInput = screen.getByLabelText('Enter city');
    fireEvent.change(searchInput, { target: { value: 'Paris' } });

    // Fast-forward debounce timeout
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await act(async () => {
      await searchGeoPromise;
    });

    await waitFor(() => {
      expect(screen.getAllByText(/paris/i)[0]).toBeInTheDocument();
    });
  });

  it('handles empty API responses', async () => {
    const emptyGeoPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ results: [] })
    });

    (global.fetch as jest.Mock).mockImplementationOnce(() => emptyGeoPromise);

    render(<Weather />);

    await act(async () => {
      await emptyGeoPromise;
    });

    await waitFor(() => {
      expect(screen.getByText('City not found')).toBeInTheDocument();
    });
  });

  it('handles API errors gracefully', async () => {
    const errorPromise = Promise.reject(new Error('Failed to fetch weather data'));
    (global.fetch as jest.Mock).mockImplementationOnce(() => errorPromise);

    render(<Weather />);

    await act(async () => {
      try {
        await errorPromise;
      } catch (error) {
        // Error is expected
      }
    });

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch weather data/i)).toBeInTheDocument();
    });
  });
});
