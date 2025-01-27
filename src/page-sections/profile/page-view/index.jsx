import { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Avatar, CircularProgress, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

const Overview = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
        if (!response.ok) throw new Error('Failed to fetch user data');
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={2}>
        <Alert severity="error">Error loading user data: {error}</Alert>
      </Box>
    );
  }

  if (!userData) return null;

  return (
    <Box>
      {/* Summary Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box display="flex" alignItems="flex-start" gap={2}>
          <Avatar
            sx={{ width: 64, height: 64 }}
          >
            {userData.name[0]}
          </Avatar>
          <Box>
            <Typography variant="h5" gutterBottom>
              {userData.name}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              @{userData.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userData.company.catchPhrase}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Contact Information */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <EmailIcon color="action" />
              <Typography>{userData.email}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <PhoneIcon color="action" />
              <Typography>{userData.phone}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LanguageIcon color="action" />
              <Typography>{userData.website}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="flex-start" gap={1} mb={2}>
              <LocationOnIcon color="action" />
              <Typography>
                {userData.address.street}, {userData.address.suite}<br />
                {userData.address.city}, {userData.address.zipcode}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <BusinessIcon color="action" />
              <Typography>{userData.company.name}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Overview;