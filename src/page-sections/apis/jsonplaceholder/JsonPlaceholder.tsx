import { useState, useEffect, useTransition } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Grid,
  Avatar,
  Chip,
  IconButton,
  TextField,
  CircularProgress,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Button,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Tooltip,
  Badge,
  LinearProgress,
  Alert,
  Fade
} from '@mui/material';
import {
  Comment as CommentIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Language as LanguageIcon,
  Business as BusinessIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Sort as SortIcon,
  Refresh as RefreshIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import { Post, Comment, User } from './types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

const JsonPlaceholder = () => {
  const [isPending, startTransition] = useTransition();
  const [tabValue, setTabValue] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [comments, setComments] = useState<{ [key: number]: Comment[] }>({});
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [loadingComments, setLoadingComments] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // Pagination states
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortField, setSortField] = useState<'title' | 'name'>('title');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postsResponse, usersResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users')
      ]);

      if (!postsResponse.ok || !usersResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const postsData = await postsResponse.json();
      const usersData = await usersResponse.json();

      startTransition(() => {
        setPosts(postsData);
        setUsers(usersData);
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    startTransition(() => {
      setPage(value);
    });
  };

  const handleItemsPerPageChange = (event: any) => {
    startTransition(() => {
      setItemsPerPage(event.target.value);
      setPage(1);
    });
  };

  const handleSortOrderChange = () => {
    startTransition(() => {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    });
  };

  const sortItems = (items: any[], field: string) => {
    return [...items].sort((a, b) => {
      const aValue = a[field].toLowerCase();
      const bValue = b[field].toLowerCase();
      return sortOrder === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
  };

  // Filter and sort items
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPosts = sortItems(filteredPosts, 'title');
  const sortedUsers = sortItems(filteredUsers, 'name');

  // Paginate items
  const paginatedPosts = sortedPosts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const paginatedUsers = sortedUsers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(
    (tabValue === 0 ? filteredPosts.length : filteredUsers.length) / itemsPerPage
  );

  const fetchComments = async (postId: number) => {
    if (comments[postId]) return;
    
    setLoadingComments(postId);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      startTransition(() => {
        setComments(prev => ({ ...prev, [postId]: data }));
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch comments');
    } finally {
      setLoadingComments(null);
    }
  };

  const handlePostClick = async (postId: number) => {
    if (expandedPost === postId) {
      setExpandedPost(null);
      return;
    }

    setExpandedPost(postId);
    if (!comments[postId]) {
      setLoadingComments(postId);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const commentsData = await response.json();
        startTransition(() => {
          setComments(prev => ({ ...prev, [postId]: commentsData }));
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch comments');
      } finally {
        setLoadingComments(null);
      }
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchData();
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh data');
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 4, p: 2 }}>
      <Card sx={{ 
        borderRadius: 2, 
        boxShadow: 3,
        bgcolor: 'background.paper',
        transition: 'all 0.3s'
      }}>
        <CardContent>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 3
          }}>
            <Typography variant="h5">
              JSONPlaceholder API Demo
            </Typography>
            <Tooltip title="Refresh data">
              <IconButton 
                onClick={handleRefresh}
                disabled={refreshing}
              >
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          </Box>

          {error && (
            <Fade in>
              <Alert 
                severity="error" 
                sx={{ mb: 2 }}
                onClose={() => setError(null)}
              >
                {error}
              </Alert>
            </Fade>
          )}

          <Tabs
            value={tabValue}
            onChange={(_, newValue) => {
              setTabValue(newValue);
              setPage(1);
              setSearchTerm('');
            }}
            sx={{ 
              mb: 2,
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                minWidth: 100,
                fontWeight: 'medium'
              }
            }}
          >
            <Tab 
              label={
                <Badge 
                  badgeContent={filteredPosts.length} 
                  color="primary"
                  max={999}
                >
                  Posts
                </Badge>
              } 
            />
            <Tab 
              label={
                <Badge 
                  badgeContent={filteredUsers.length} 
                  color="primary"
                  max={999}
                >
                  Users
                </Badge>
              } 
            />
          </Tabs>

          <Box sx={{ 
            mb: 3, 
            display: 'flex', 
            gap: 2, 
            flexWrap: 'wrap',
            alignItems: 'flex-start'
          }}>
            <TextField
              sx={{ flexGrow: 1 }}
              variant="outlined"
              placeholder={`Search ${tabValue === 0 ? 'posts' : 'users'}...`}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              InputProps={{
                startAdornment: (
                  <Box sx={{ color: 'text.secondary', mr: 1 }}>
                    {tabValue === 0 ? '🔍' : '👤'}
                  </Box>
                )
              }}
            />
            
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Per page</InputLabel>
              <Select
                value={itemsPerPage}
                label="Per page"
                onChange={handleItemsPerPageChange}
                size="small"
              >
                <MenuItem value={5}>5 items</MenuItem>
                <MenuItem value={10}>10 items</MenuItem>
                <MenuItem value={20}>20 items</MenuItem>
              </Select>
            </FormControl>

            <Tooltip title={`Sort ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}>
              <Button
                variant="outlined"
                startIcon={<SortIcon />}
                onClick={handleSortOrderChange}
                size="small"
              >
                Sort {sortOrder === 'asc' ? '↑' : '↓'}
              </Button>
            </Tooltip>
          </Box>

          {loading ? (
            <Box sx={{ width: '100%', mt: 2 }}>
              <LinearProgress />
              <Typography 
                variant="body2" 
                color="text.secondary"
                align="center"
                sx={{ mt: 1 }}
              >
                Loading data...
              </Typography>
            </Box>
          ) : (
            <>
              <TabPanel value={tabValue} index={0}>
                <List>
                  {paginatedPosts.map(post => (
                    <Box key={post.id}>
                      <ListItem
                        alignItems="flex-start"
                        sx={{
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          '&:hover': { 
                            bgcolor: 'action.hover',
                            transform: 'translateX(4px)'
                          }
                        }}
                        onClick={() => handlePostClick(post.id)}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant="subtitle1"
                              sx={{ 
                                fontWeight: 'medium',
                                color: 'primary.main'
                              }}
                            >
                              {post.title}
                            </Typography>
                          }
                          secondary={
                            <Box>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                  display: '-webkit-box',
                                  WebkitLineClamp: expandedPost === post.id ? 'none' : 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                  mt: 0.5
                                }}
                              >
                                {post.body}
                              </Typography>
                              <Box sx={{ 
                                mt: 1, 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: 1,
                                flexWrap: 'wrap'
                              }}>
                                <Chip
                                  size="small"
                                  icon={<PersonIcon />}
                                  label={users.find(u => u.id === post.userId)?.name || 'Unknown'}
                                  color="primary"
                                  variant="outlined"
                                />
                                {comments[post.id] && (
                                  <Chip
                                    size="small"
                                    icon={<CommentIcon />}
                                    label={`${comments[post.id].length} comments`}
                                    variant="outlined"
                                  />
                                )}
                                <IconButton
                                  size="small"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePostClick(post.id);
                                  }}
                                >
                                  {expandedPost === post.id ? (
                                    <ExpandLessIcon />
                                  ) : (
                                    <ExpandMoreIcon />
                                  )}
                                </IconButton>
                              </Box>
                            </Box>
                          }
                        />
                      </ListItem>

                      <Collapse in={expandedPost === post.id}>
                        <Box sx={{ pl: 2, pr: 2, pb: 2 }}>
                          <Typography 
                            variant="h6" 
                            gutterBottom
                            sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: 1 
                            }}
                          >
                            <CommentIcon color="primary" />
                            Comments
                          </Typography>
                          {loadingComments === post.id ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                              <CircularProgress size={24} />
                            </Box>
                          ) : (
                            <List>
                              {comments[post.id]?.map(comment => (
                                <ListItem key={comment.id} alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'primary.light' }}>
                                      <CommentIcon />
                                    </Avatar>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={
                                      <Box sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: 1,
                                        flexWrap: 'wrap'
                                      }}>
                                        <Typography variant="subtitle2">
                                          {comment.name}
                                        </Typography>
                                        <Chip
                                          size="small"
                                          icon={<EmailIcon />}
                                          label={comment.email}
                                          variant="outlined"
                                          sx={{ fontSize: '0.75rem' }}
                                        />
                                      </Box>
                                    }
                                    secondary={
                                      <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mt: 0.5 }}
                                      >
                                        {comment.body}
                                      </Typography>
                                    }
                                  />
                                </ListItem>
                              ))}
                            </List>
                          )}
                        </Box>
                      </Collapse>
                      <Divider />
                    </Box>
                  ))}
                </List>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <Grid container spacing={3}>
                  {paginatedUsers.map(user => (
                    <Grid item xs={12} sm={6} key={user.id}>
                      <Card 
                        variant="outlined"
                        sx={{
                          transition: 'all 0.2s',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: 2
                          }
                        }}
                      >
                        <CardContent>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 2 
                          }}>
                            <Avatar 
                              sx={{ 
                                bgcolor: 'primary.main', 
                                mr: 2,
                                width: 56,
                                height: 56
                              }}
                            >
                              {user.name.charAt(0)}
                            </Avatar>
                            <Box>
                              <Typography variant="h6">{user.name}</Typography>
                              <Typography 
                                variant="body2" 
                                color="text.secondary"
                              >
                                @{user.username}
                              </Typography>
                            </Box>
                          </Box>

                          <List dense>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar sx={{ bgcolor: 'primary.light' }}>
                                  <EmailIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText 
                                primary="Email"
                                secondary={user.email}
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemAvatar>
                                <Avatar sx={{ bgcolor: 'primary.light' }}>
                                  <PhoneIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText 
                                primary="Phone"
                                secondary={user.phone}
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemAvatar>
                                <Avatar sx={{ bgcolor: 'primary.light' }}>
                                  <LanguageIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText 
                                primary="Website"
                                secondary={user.website}
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemAvatar>
                                <Avatar sx={{ bgcolor: 'primary.light' }}>
                                  <LocationIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText 
                                primary="Address"
                                secondary={`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemAvatar>
                                <Avatar sx={{ bgcolor: 'primary.light' }}>
                                  <BusinessIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={user.company.name}
                                secondary={user.company.catchPhrase}
                              />
                            </ListItem>
                          </List>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              <Box sx={{ 
                mt: 3, 
                display: 'flex', 
                justifyContent: 'center',
                borderTop: '1px solid',
                borderColor: 'divider',
                pt: 3
              }}>
                <Stack spacing={2} alignItems="center">
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    showFirstButton
                    showLastButton
                    size="large"
                  />
                  <Typography 
                    variant="caption" 
                    color="text.secondary"
                  >
                    Showing {((page - 1) * itemsPerPage) + 1} to {Math.min(page * itemsPerPage, (tabValue === 0 ? filteredPosts : filteredUsers).length)} of {(tabValue === 0 ? filteredPosts : filteredUsers).length} items
                  </Typography>
                </Stack>
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default JsonPlaceholder;
