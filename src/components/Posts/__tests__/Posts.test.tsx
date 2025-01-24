import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import { Posts } from '../index';

const mockPosts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  userId: Math.floor(i / 2) + 1,
  title: `Test Post ${i + 1}`,
  body: `Content ${i + 1}`
}));

describe('Posts', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
    global.fetch = jest.fn();
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders loading state initially', async () => {
    const loadingPromise = new Promise(() => {}); // Never resolves to keep loading state
    (global.fetch as jest.Mock).mockImplementationOnce(() => loadingPromise);

    render(<Posts />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders posts after successful fetch', async () => {
    const postsPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPosts)
    });

    (global.fetch as jest.Mock).mockImplementationOnce(() => postsPromise);

    render(<Posts />);

    await act(async () => {
      await postsPromise;
    });

    await waitFor(() => {
      const firstPost = mockPosts[0];
      expect(screen.getByText(firstPost.title)).toBeInTheDocument();
      expect(screen.getByText(firstPost.body)).toBeInTheDocument();
      expect(screen.getAllByText(`User ${firstPost.userId}`)[0]).toBeInTheDocument();
    });
  });

  it('handles search functionality', async () => {
    const initialPostsPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPosts)
    });

    const searchPostsPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve([mockPosts[0]])
    });

    (global.fetch as jest.Mock)
      .mockImplementationOnce(() => initialPostsPromise)
      .mockImplementationOnce(() => searchPostsPromise);

    render(<Posts />);

    await act(async () => {
      await initialPostsPromise;
    });

    const searchInput = screen.getByPlaceholderText('Search posts...');
    fireEvent.change(searchInput, { target: { value: 'Test Post 1' } });

    await act(async () => {
      await searchPostsPromise;
    });

    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Post 2')).not.toBeInTheDocument();
    });
  });

  it('handles empty search results', async () => {
    const emptyPostsPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve([])
    });

    (global.fetch as jest.Mock).mockImplementationOnce(() => emptyPostsPromise);

    render(<Posts />);

    await act(async () => {
      await emptyPostsPromise;
    });

    await waitFor(() => {
      expect(screen.getByText(/no posts found matching your search/i)).toBeInTheDocument();
    });
  });

  it('handles pagination correctly', async () => {
    const postsPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPosts)
    });

    (global.fetch as jest.Mock).mockImplementationOnce(() => postsPromise);

    render(<Posts />);

    await act(async () => {
      await postsPromise;
    });

    // First page
    await waitFor(() => {
      const firstPagePosts = mockPosts.slice(0, 6);
      firstPagePosts.forEach(post => {
        expect(screen.getByText(post.title)).toBeInTheDocument();
      });
    });

    // Navigate to next page
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    await waitFor(() => {
      const secondPagePosts = mockPosts.slice(6, 12);
      secondPagePosts.forEach(post => {
        expect(screen.getByText(post.title)).toBeInTheDocument();
      });
    });
  });

  it('handles API errors gracefully', async () => {
    const errorPromise = Promise.reject(new Error('Failed to fetch posts'));
    (global.fetch as jest.Mock).mockImplementationOnce(() => errorPromise);

    render(<Posts />);

    await act(async () => {
      try {
        await errorPromise;
      } catch (error) {
        // Error is expected
      }
    });

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch posts/i)).toBeInTheDocument();
    });
  });
});
