import { Box, Container, Typography } from '@mui/material';
import Weather from '@/components/Weather';

export default function WeatherPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Weather</Typography>
      <Weather />
    </Container>
  );
}
