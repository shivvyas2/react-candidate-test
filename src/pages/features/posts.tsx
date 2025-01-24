import { Box, Container, Typography } from '@mui/material';
import Posts from '@/components/Posts';

export default function PostsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Posts</Typography>
      <Posts />
    </Container>
  );
}
