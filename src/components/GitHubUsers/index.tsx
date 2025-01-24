import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Grid, 
  CircularProgress,
  TextField,
  IconButton,
  Button,
  Chip,
  Paper,
  Pagination,
  Skeleton,
  useTheme,
  Link,
  Tooltip,
  Divider
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
  Business as CompanyIcon,
  People as FollowersIcon,
  Code as ReposIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Link as LinkIcon
} from '@mui/icons-material';

interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  name: string | null;
  company: string | null;
  location: string | null;
  blog: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export const GitHubUsers = () => {
  const theme = useTheme();
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchDebounce, setSearchDebounce] = useState<NodeJS.Timeout>();
  const [loadingUser, setLoadingUser] = useState<{ [key: string]: boolean }>({});

  const usersPerPage = 9;

  const fetchUsers = async (query: string = '') => {
    setLoading(true);
    setError(null);
    try {
      let apiUrl = query
        ? `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=${usersPerPage}&page=${page}`
        : `https://api.github.com/users?per_page=${usersPerPage}&since=${(page - 1) * usersPerPage}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      const data = await response.json();
      const usersList = query ? data.items : data;
      setTotalUsers(query ? data.total_count : 1000); // GitHub API doesn't provide total count for /users endpoint

      // Fetch detailed information for each user
      const detailedUsers = await Promise.all(
        usersList.map(async (user: GitHubUser) => {
          setLoadingUser(prev => ({ ...prev, [user.login]: true }));
          try {
            const detailResponse = await fetch(`https://api.github.com/users/${user.login}`);
            const detailData = await detailResponse.json();
            setLoadingUser(prev => ({ ...prev, [user.login]: false }));
            return detailData;
          } catch (error) {
            setLoadingUser(prev => ({ ...prev, [user.login]: false }));
            return user;
          }
        })
      );

      setUsers(detailedUsers);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      if (searchDebounce) {
        clearTimeout(searchDebounce);
      }
      const timeout = setTimeout(() => {
        fetchUsers(searchQuery);
      }, 2000);
      setSearchDebounce(timeout);
    } else {
      fetchUsers();
    }
  }, [searchQuery, page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const UserSkeleton = () => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2} data-testid="loading-skeleton">
          <Skeleton variant="circular" width={60} height={60} />
          <Box ml={2} flex={1}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </Box>
        </Box>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>GitHub Users</Typography>
        <Grid container spacing={3}>
          {Array.from(new Array(9)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <UserSkeleton />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          GitHub Users
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Explore GitHub users and their profiles
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
          }}
          sx={{ mb: 2 }}
        />
      </Box>

      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card sx={{ 
              height: '100%',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: (theme) => theme.shadows[4],
              }
            }}>
              <CardContent>
                {loadingUser[user.login] ? (
                  <UserSkeleton />
                ) : (
                  <>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Avatar 
                        src={user.avatar_url} 
                        alt={user.login}
                        sx={{ 
                          width: 80, 
                          height: 80, 
                          mr: 2,
                          border: '2px solid',
                          borderColor: 'primary.main'
                        }} 
                      />
                      <Box>
                        <Link 
                          href={user.html_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          underline="hover"
                          color="inherit"
                        >
                          <Typography variant="h6">
                            {user.name || user.login}
                          </Typography>
                        </Link>
                        <Typography variant="body2" color="text.secondary">
                          @{user.login}
                        </Typography>
                      </Box>
                    </Box>

                    {user.bio && (
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {user.bio}
                      </Typography>
                    )}

                    <Grid container spacing={1} sx={{ mb: 2 }}>
                      {user.location && (
                        <Grid item xs={12}>
                          <Box display="flex" alignItems="center" gap={1}>
                            <LocationIcon fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {user.location}
                            </Typography>
                          </Box>
                        </Grid>
                      )}
                      {user.company && (
                        <Grid item xs={12}>
                          <Box display="flex" alignItems="center" gap={1}>
                            <CompanyIcon fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {user.company}
                            </Typography>
                          </Box>
                        </Grid>
                      )}
                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <Tooltip title="Repositories">
                          <Chip
                            icon={<ReposIcon />}
                            label={user.public_repos}
                            size="small"
                            variant="outlined"
                          />
                        </Tooltip>
                      </Grid>
                      <Grid item xs={4}>
                        <Tooltip title="Followers">
                          <Chip
                            icon={<FollowersIcon />}
                            label={user.followers}
                            size="small"
                            variant="outlined"
                          />
                        </Tooltip>
                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                          <IconButton 
                            size="small" 
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GitHubIcon fontSize="small" />
                          </IconButton>
                          {user.twitter_username && (
                            <IconButton 
                              size="small"
                              href={`https://twitter.com/${user.twitter_username}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <TwitterIcon fontSize="small" />
                            </IconButton>
                          )}
                          {user.blog && (
                            <IconButton 
                              size="small"
                              href={user.blog}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkIcon fontSize="small" />
                            </IconButton>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {users.length > 0 && (
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={Math.min(Math.ceil(totalUsers / usersPerPage), 100)} // GitHub API limits to 1000 results
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      )}

      {users.length === 0 && !loading && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No users found
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default GitHubUsers;
