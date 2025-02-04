import { Fragment, useContext, useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link'; // SITE SETTINGS CONTEXT FILE

import { SettingsContext } from '@/contexts/settingsContext'; // CUSTOM ICON COMPONENTS

import MenuIcon from '@/icons/Menu';
import MenuLeft from '@/icons/MenuLeft';
import ThemeIcon from '@/icons/ThemeIcon';
import Search from '@/icons/duotone/Search';
import MenuLeftRight from '@/icons/MenuLeftRight';
import ApisIcon from '@/icons/ApisIcon'; // LAYOUT BASED HOOK

import useLayout from '@/layouts/layout-1/context/useLayout'; // CUSTOM COMPONENTS

import SearchBar from '@/layouts/layout-parts/SearchBar';
import ProfilePopover from '@/layouts/layout-parts/popovers/ProfilePopover';
import ServicePopover from '@/layouts/layout-parts/popovers/ServicePopover';
import LanguagePopover from '@/layouts/layout-parts/popovers/LanguagePopover';
import NotificationsPopover from '@/layouts/layout-parts/popovers/NotificationsPopover'; // STYLED COMPONENTS

import { DashboardHeaderRoot, StyledToolBar } from '@/layouts/layout-1/styles';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function DashboardHeader() {
  const {
    handleOpenMobileSidebar
  } = useLayout();
  const [openSearchBar, setSearchBar] = useState(false);
  const [apisEl, setApisEl] = useState(null);
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

  const HEADER_LINKS = [
    {
      title: "Weather App",
      path: "/dashboard/weather",
    },
    {
      title: "Pokemon API",
      path: "/dashboard/pokemon",
    },
    {
      title: "JSONPlaceholder API",
      path: "/dashboard/jsonplaceholder",
    },
  ];

  return <DashboardHeaderRoot position="sticky">
      <StyledToolBar>
        {
        /* SMALL DEVICE SIDE BAR OPEN BUTTON */
      }
        {downMd && <IconButton onClick={handleOpenMobileSidebar}>
            <MenuIcon />
          </IconButton>}

        {
        /* SEARCH ICON BUTTON */
      }
        <ClickAwayListener onClickAway={() => setSearchBar(false)}>
          <div>
            {!openSearchBar ? <IconButton onClick={() => setSearchBar(true)}>
                <Search sx={{
              color: 'grey.400',
              fontSize: 18
            }} />
              </IconButton> : null}

            <SearchBar open={openSearchBar} handleClose={() => setSearchBar(false)} />
          </div>
        </ClickAwayListener>

        <Box flexGrow={1} ml={1} />

        {
        /* TEXT DIRECTION SWITCH BUTTON */
      }
        {settings.direction === 'rtl' ? <IconButton onClick={() => handleChangeDirection('ltr')}>
            <MenuLeft sx={{
          color: 'grey.400'
        }} />
          </IconButton> : <IconButton onClick={() => handleChangeDirection('rtl')}>
            <MenuLeftRight sx={{
          color: 'grey.400'
        }} />
          </IconButton>}

        {
        /* THEME SWITCH BUTTON */
      }
        <IconButton onClick={() => handleChangeTheme(settings.theme === 'light' ? 'dark' : 'light')}>
          <ThemeIcon />
        </IconButton>

        {
        /* Add APIs Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography>Home</Typography>
          </RouterLink>

          <Box sx={{ position: 'relative' }}>
            <Typography
              onClick={(e) => setApisEl(e.currentTarget)}
              sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              APIs
            </Typography>
            <Menu
              anchorEl={apisEl}
              open={Boolean(apisEl)}
              onClose={() => setApisEl(null)}
            >
              {HEADER_LINKS.map((link, index) => (
                <MenuItem
                  key={index}
                  component={RouterLink}
                  to={link.path}
                  onClick={() => setApisEl(null)}
                >
                  {link.title}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography>Components</Typography>
        </Box>

        {upSm && <Fragment>
            <LanguagePopover />
            <NotificationsPopover />
            <ServicePopover />
          </Fragment>}

        <ProfilePopover />
      </StyledToolBar>
    </DashboardHeaderRoot>;
}