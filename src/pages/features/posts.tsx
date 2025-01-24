import { Box, Container, Typography } from '@mui/material';
import Posts from '@/components/Posts';

export default function PostsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box mb={3}>
        <Typography variant="h4" gutterBottom>
          JSONPlaceholder Posts
        </Typography>
        <Typography color="text.secondary">
          Sample posts from JSONPlaceholder API
        </Typography>
      </Box>
      
      <Posts />
    </Container>
  );
}
