import { Box, Container, Typography } from '@mui/material';
import GitHubUsers from '@/components/GitHubUsers';

export default function GitHubUsersPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>GitHub Users</Typography>
      <GitHubUsers />
    </Container>
  );
}
