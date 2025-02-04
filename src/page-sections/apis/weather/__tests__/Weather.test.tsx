import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from '../Weather';

// Mock fetch
global.fetch = jest.fn();

describe('Weather Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders weather search input', () => {
    render(<Weather />);
    expect(screen.getByLabelText(/enter city name/i)).toBeInTheDocument();
  });

  it('shows loading state when fetching weather data', async () => {
    // Mock the fetch implementation
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          location: {
            name: 'London',
            country: 'UK'
          },
          current: {
            temp_c: 20,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png'
            },
            humidity: 65,
            wind_kph: 15
          }
        })
      })
    );

    render(<Weather />);
    
    const input = screen.getByLabelText(/enter city name/i);
    const searchButton = screen.getByText(/search/i);

    // Type in a city name and click search
    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.click(searchButton);

    // Check if loading indicator appears
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    // Wait for the weather data to appear
    await waitFor(() => {
      expect(screen.getByText('London, UK')).toBeInTheDocument();
      expect(screen.getByText('20°C')).toBeInTheDocument();
      expect(screen.getByText('Sunny')).toBeInTheDocument();
    });
  });

  it('shows error message when API call fails', async () => {
    // Mock the fetch implementation to fail
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404
      })
    );

    render(<Weather />);
    
    const input = screen.getByLabelText(/enter city name/i);
    const searchButton = screen.getByText(/search/i);

    // Type in a city name and click search
    fireEvent.change(input, { target: { value: 'InvalidCity' } });
    fireEvent.click(searchButton);

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText('City not found')).toBeInTheDocument();
    });
  });
});
