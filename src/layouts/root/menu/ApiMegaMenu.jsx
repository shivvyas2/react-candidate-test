import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper, Popper, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ApiMegaMenu = ({ isDark }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: isDark ? 'common.white' : 'text.primary',
          fontWeight: 500,
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'primary.main',
          },
        }}
      >
        APIs
      </Button>

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal
        sx={{ width: 400, zIndex: 1200 }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 3,
            mt: 1.5,
            borderRadius: 1,
            bgcolor: 'background.paper',
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            display="grid"
            gap={3}
            sx={{ 
              '& a': { 
                color: 'text.primary',
                textDecoration: 'none',
                p: 2,
                borderRadius: 1,
                transition: 'all 0.2s',
                '&:hover': {
                  color: 'primary.main',
                  bgcolor: 'action.hover',
                }
              }
            }}
          >
            <Link to="/dashboard/weather">
              <Box>
                <Box sx={{ 
                  fontWeight: 600, 
                  fontSize: '1rem', 
                  mb: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  Weather App
                </Box>
                <Box sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                  Get real-time weather information for any city
                </Box>
              </Box>
            </Link>

            <Link to="/dashboard/pokemon">
              <Box>
                <Box sx={{ 
                  fontWeight: 600, 
                  fontSize: '1rem', 
                  mb: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  Pokemon API
                </Box>
                <Box sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                  Search and explore Pokemon information and statistics
                </Box>
              </Box>
            </Link>
          </Box>
        </Paper>
      </Popper>
    </Box>
  );
};

export default ApiMegaMenu;
