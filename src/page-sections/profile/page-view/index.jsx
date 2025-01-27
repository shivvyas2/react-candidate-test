import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Avatar, 
  CircularProgress, 
  Alert,
  Chip,
  Divider,
  Card,
  CardContent,
  LinearProgress
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';

const Overview = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
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
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
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

  // Mock data for skills
  const skills = [
    { name: 'Management', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Technical', level: 75 },
    { name: 'Leadership', level: 88 }
  ];

  return (
    <Box>
      {/* Header Banner with Avatar */}
      <Paper 
        sx={{ 
          p: 4, 
          mb: 3, 
          background: 'linear-gradient(135deg, #6B46C1 0%, #4834d4 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)'
          }}
        />
        <Box display="flex" alignItems="center" gap={3} position="relative">
          <Avatar
            sx={{ 
              width: 100, 
              height: 100,
              bgcolor: '#fff',
              color: '#6B46C1',
              fontSize: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          >
            {userData.name[0]}
          </Avatar>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {userData.name}
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              @{userData.username}
            </Typography>
            <Box mt={2}>
              <Chip 
                icon={<WorkIcon />} 
                label={userData.company.name}
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.15)', 
                  color: 'white',
                  '& .MuiChip-icon': { color: 'white' }
                }}
              />
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Contact Information Cards */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Contact Details
              </Typography>
              <Box sx={{ '& > div': { mb: 2 } }}>
                <Box display="flex" alignItems="center" gap={2}>
                  <EmailIcon color="action" />
                  <Typography>{userData.email}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <PhoneIcon color="action" />
                  <Typography>{userData.phone}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <LanguageIcon color="action" />
                  <Typography>https://{userData.website}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Location & Company
              </Typography>
              <Box sx={{ '& > div': { mb: 2 } }}>
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <LocationOnIcon color="action" />
                  <Typography>
                    {userData.address.street}, {userData.address.suite}<br />
                    {userData.address.city}, {userData.address.zipcode}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <BusinessIcon color="action" />
                  <Typography>
                    <strong>{userData.company.name}</strong><br />
                    {userData.company.catchPhrase}<br />
                    <Typography color="text.secondary" fontSize="0.9rem">
                      {userData.company.bs}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Skills Section */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom color="primary">
            Professional Skills
          </Typography>
          <Grid container spacing={3}>
            {skills.map((skill) => (
              <Grid item xs={12} sm={6} key={skill.name}>
                <Box mb={2}>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="subtitle2">{skill.name}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: 'rgba(107, 70, 193, 0.2)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#6B46C1'
                      }
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Overview;