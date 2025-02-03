import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  TextField,
  Typography,
  CircularProgress,
  IconButton,
  InputAdornment,
  Grid,
  Avatar,
  Divider,
  styled,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

const UserDetails = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search users by name..."
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />

      {filteredUsers.map((user) => (
        <StyledCard key={user.id}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: theme.palette.primary.main,
                  fontSize: '2rem',
                  mb: 2,
                }}
              >
                {user.name.charAt(0)}
              </Avatar>
              <Typography variant="h6" gutterBottom align="center">
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
                @{user.username}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <InfoItem>
                    <EmailIcon />
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography>{user.email}</Typography>
                    </Box>
                  </InfoItem>

                  <InfoItem>
                    <PhoneIcon />
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Phone
                      </Typography>
                      <Typography>{user.phone}</Typography>
                    </Box>
                  </InfoItem>

                  <InfoItem>
                    <LanguageIcon />
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Website
                      </Typography>
                      <Typography>{user.website}</Typography>
                    </Box>
                  </InfoItem>
                </Grid>

                <Grid item xs={12} md={6}>
                  <InfoItem>
                    <BusinessIcon />
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Company
                      </Typography>
                      <Typography>{user.company.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.company.catchPhrase}
                      </Typography>
                    </Box>
                  </InfoItem>

                  <InfoItem>
                    <LocationOnIcon />
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Address
                      </Typography>
                      <Typography>
                        {user.address.street}, {user.address.suite}
                      </Typography>
                      <Typography>
                        {user.address.city} {user.address.zipcode}
                      </Typography>
                    </Box>
                  </InfoItem>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledCard>
      ))}
    </Box>
  );
};

export default UserDetails;
