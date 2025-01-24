import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GitHubUsers } from '../index';

const mockUsers = [
  {
    id: 1,
    login: 'testuser1',
    avatar_url: 'https://example.com/avatar1.jpg',
    html_url: 'https://github.com/testuser1',
    name: 'Test User 1',
    bio: 'Test bio 1',
    public_repos: 10,
    followers: 20,
    location: 'Test Location 1'
  },
  {
    id: 2,
    login: 'testuser2',
    avatar_url: 'https://example.com/avatar2.jpg',
    html_url: 'https://github.com/testuser2',
    name: 'Test User 2',
    bio: 'Test bio 2',
    public_repos: 15,
    followers: 25,
    location: 'Test Location 2'
  }
];

describe('GitHubUsers', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders loading state initially', async () => {
    const loadingPromise = new Promise(() => {}); // Never resolves to keep loading state
    (global.fetch as jest.Mock).mockImplementationOnce(() => loadingPromise);

    render(<GitHubUsers />);
    const skeletons = screen.getAllByTestId('loading-skeleton');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders users after successful fetch', async () => {
    const usersPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockUsers)
    });

    (global.fetch as jest.Mock).mockImplementationOnce(() => usersPromise);

    render(<GitHubUsers />);

    await act(async () => {
      await usersPromise;
    });

    await waitFor(() => {
      expect(screen.getByText('Test User 1')).toBeInTheDocument();
      expect(screen.getByText('@testuser1')).toBeInTheDocument();
      expect(screen.getByText('Test bio 1')).toBeInTheDocument();
    });
  });

  it('renders loading state', () => {
    render(<GitHubUsers />);
    const loadingSkeletons = screen.getAllByTestId('loading-skeleton');
    expect(loadingSkeletons).toHaveLength(9); // 9 skeleton cards are rendered
  });

  it('handles error state', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to fetch users'))
    );

    render(<GitHubUsers />);
    await waitFor(() => {
      expect(screen.getByText(/failed to fetch users/i)).toBeInTheDocument();
    });
  });

  it('handles empty search results', async () => {
    const emptyUsersPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve([])
    });

    (global.fetch as jest.Mock).mockImplementationOnce(() => emptyUsersPromise);

    render(<GitHubUsers />);

    await act(async () => {
      await emptyUsersPromise;
    });

    await waitFor(() => {
      expect(screen.getByText('No users found')).toBeInTheDocument();
    });
  });

  it('handles API errors gracefully', async () => {
    const errorPromise = Promise.reject(new Error('Failed to fetch users'));
    (global.fetch as jest.Mock).mockImplementationOnce(() => errorPromise);

    render(<GitHubUsers />);

    await act(async () => {
      try {
        await errorPromise;
      } catch (error) {
        // Error is expected
      }
    });

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch users/i)).toBeInTheDocument();
    });
  });
});
