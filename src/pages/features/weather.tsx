import { Box, Container, Typography } from '@mui/material';
import Weather from '@/components/Weather';

export default function WeatherPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box mb={3}>
        <Typography variant="h4" gutterBottom>
          Weather Information
        </Typography>
        <Typography color="text.secondary">
          Get real-time weather information for any city
        </Typography>
      </Box>
      
      <Weather />
    </Container>
  );
}
