import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const ErrorBoundary: React.FC = () => {
  const error = useRouteError();
  
  let errorMessage = 'An unexpected error occurred';
  
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || 'Page not found';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          gap: 2
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 64, color: 'error.main' }} />
        <Typography variant="h5" color="error" gutterBottom>
          Oops! Something went wrong
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {errorMessage}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorBoundary;
