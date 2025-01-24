import { Fragment, useContext, useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// SITE SETTINGS CONTEXT FILE

import { SettingsContext } from '@/contexts/settingsContext'; // CUSTOM ICON COMPONENTS

import MenuIcon from '@/icons/Menu';
import MenuLeft from '@/icons/MenuLeft';
import ThemeIcon from '@/icons/ThemeIcon';
import Search from '@/icons/duotone/Search';
import MenuLeftRight from '@/icons/MenuLeftRight'; // LAYOUT BASED HOOK

import useLayout from '@/layouts/layout-1/context/useLayout'; // CUSTOM COMPONENTS

import SearchBar from '@/layouts/layout-parts/SearchBar';
import ProfilePopover from '@/layouts/layout-parts/popovers/ProfilePopover';
import ServicePopover from '@/layouts/layout-parts/popovers/ServicePopover';
import LanguagePopover from '@/layouts/layout-parts/popovers/LanguagePopover';
import NotificationsPopover from '@/layouts/layout-parts/popovers/NotificationsPopover';
import GitHubUsers from '@/components/GitHubUsers'; // STYLED COMPONENTS

import { DashboardHeaderRoot, StyledToolBar } from '@/layouts/layout-1/styles';

export default function DashboardHeader() {
  const {
    handleOpenMobileSidebar
  } = useLayout();
  const [openSearchBar, setSearchBar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openGitHubUsers, setOpenGitHubUsers] = useState(false);
  const {
    settings,
    saveSettings
  } = useContext(SettingsContext);
  const upSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const downMd = useMediaQuery(theme => theme.breakpoints.down(1200));

  const handleChangeDirection = value => {
    saveSettings({ ...settings,
      direction: value
    });
  };

  const handleChangeTheme = value => {
    saveSettings({ ...settings,
      theme: value
    });
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleGitHubUsersOpen = () => {
    setOpenGitHubUsers(true);
    handleMenuClose();
  };

  const handleGitHubUsersClose = () => {
    setOpenGitHubUsers(false);
  };

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          {downMd && (
            <IconButton onClick={handleOpenMobileSidebar} edge="start" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Dashboard
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          {/* SEARCH */}
          <ClickAwayListener onClickAway={() => setSearchBar(false)}>
            <Box>
              {!openSearchBar && (
                <IconButton onClick={() => setSearchBar(true)}>
                  <Search sx={{ color: 'grey.400', fontSize: 18 }} />
                </IconButton>
              )}
              <SearchBar open={openSearchBar} handleClose={() => setSearchBar(false)} />
            </Box>
          </ClickAwayListener>

          {/* FEATURES DROPDOWN */}
          <Button
            onClick={handleMenuClick}
            endIcon={<KeyboardArrowDownIcon />}
            color="inherit"
            sx={{
              minWidth: 120,
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            Features
          </Button>
          <MuiMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleGitHubUsersOpen}>
              <Typography>GitHub Users</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography>JSONPlaceholder Posts</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography>Weather API</Typography>
            </MenuItem>
          </MuiMenu>

          {/* THEME AND DIRECTION CONTROLS */}
          {settings.direction === 'rtl' ? (
            <IconButton onClick={() => handleChangeDirection('ltr')}>
              <MenuLeft sx={{ color: 'grey.400' }} />
            </IconButton>
          ) : (
            <IconButton onClick={() => handleChangeDirection('rtl')}>
              <MenuLeftRight sx={{ color: 'grey.400' }} />
            </IconButton>
          )}

          <IconButton onClick={() => handleChangeTheme(settings.theme === 'light' ? 'dark' : 'light')}>
            <ThemeIcon />
          </IconButton>

          {/* USER CONTROLS */}
          {upSm && (
            <Fragment>
              <LanguagePopover />
              <NotificationsPopover />
              <ServicePopover />
              <ProfilePopover />
            </Fragment>
          )}
        </Box>

        {/* GITHUB USERS DIALOG */}
        <Dialog
          open={openGitHubUsers}
          onClose={handleGitHubUsersClose}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <Typography variant="h6">GitHub Users</Typography>
          </DialogTitle>
          <DialogContent>
            <GitHubUsers />
          </DialogContent>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
}