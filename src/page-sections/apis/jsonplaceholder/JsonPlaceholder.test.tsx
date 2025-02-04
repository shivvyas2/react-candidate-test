import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JsonPlaceholder from './JsonPlaceholder';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, title: 'Test Post', body: 'Test Body', userId: 1 }]),
  })
) as jest.Mock;

describe('JsonPlaceholder Component', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('renders the component title', () => {
    render(<JsonPlaceholder />);
    expect(screen.getByText('JSONPlaceholder API Demo')).toBeInTheDocument();
  });

  it('displays loading state initially', () => {
    render(<JsonPlaceholder />);
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });

  it('displays tabs', () => {
    render(<JsonPlaceholder />);
    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
  });
});
