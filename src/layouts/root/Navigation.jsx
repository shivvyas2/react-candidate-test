import { Fragment, useEffect, useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom'; // MUI

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENT

import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'; // CUSTOM COMPONENTS

import CustomLink from '@/components/link';
import Scrollbar from '@/components/scrollbar';
import MegaMenu from './menu/MegaMenu';
import MegaMenuList from './menu/MegaMenuList';
import ApiMegaMenu from './menu/ApiMegaMenu'; // CUSTOM ICON COMPONENT

import ChevronDown from '@/icons/ChevronDown'; // NAVIGATION LIST

const PAGES_MENUS = [
  {
    id: 1,
    title: 'Dashboard',
    child: [
      { id: 1, title: 'Analytics', href: '/dashboard/analytics' },
      { id: 2, title: 'Analytics 2', href: '/dashboard/analytics-2' },
      { id: 3, title: 'Finance', href: '/dashboard/finance' },
      { id: 4, title: 'Ecommerce', href: '/dashboard/ecommerce' },
      { id: 5, title: 'CRM', href: '/dashboard/crm' },
      { id: 6, title: 'Marketing', href: '/dashboard/marketing' },
      { id: 7, title: 'Logistics', href: '/dashboard/logistics' },
      { id: 8, title: 'Sales', href: '/dashboard/sales' },
      { id: 9, title: 'LMS', href: '/dashboard/lms' },
      { id: 10, title: 'Job Management', href: '/dashboard/job-management' },
    ]
  }
]; // STYLED COMPONENT

const StyledRoot = styled('header')(({
  theme
}) => ({
  paddingBlock: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));
const StyledNav = styled('nav')(({
  theme
}) => ({
  display: 'flex',
  fontSize: 14,
  fontWeight: 500,
  listStyle: 'none',
  alignItems: 'center',
  gap: theme.spacing(5)
}));
const StyledNavItem = styled(CustomLink, {
  shouldForwardProp: prop => prop !== 'isDark' && prop !== 'isActive'
})(({
  theme,
  isDark,
  isActive
}) => ({
  color: 'white',
  transition: 'color 300ms',
  ':hover': {
    color: theme.palette.primary.main
  },
  ...(isDark && {
    color: theme.palette.text.primary
  }),
  ...(isActive && {
    color: theme.palette.primary.main
  })
}));
export default function Navigation() {
  const {
    pathname
  } = useLocation();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [pageCollapsed, setPageCollapsed] = useState(false);
  const [sessionCollapsed, setSessionCollapsed] = useState(false);
  const [apisCollapsed, setApisCollapsed] = useState(false);
  const [pagesCollapsed, setPagesCollapsed] = useState(false);
  const isMedium = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [apisAnchorEl, setApisAnchorEl] = useState(null);

  const isActive = path => pathname === path;

  const isComponentsRoute = pathname.startsWith('/components');

  const handleApisClick = (event) => {
    setApisAnchorEl(event.currentTarget);
  };

  const handleApisClose = () => {
    setApisAnchorEl(null);
  };

  useEffect(() => {
    if (isMedium) setOpen(false);
  }, [isMedium]); // FOR LARGE SCREEN DEVICE

  const LARGE_DEVICE_CONTENT = <StyledNav>
      <StyledNavItem href="/" isDark={isComponentsRoute} isActive={isActive('/')}>
        Home
      </StyledNavItem>

      {/* PAGES MEGA MENU */}
      <MegaMenu isDark={isComponentsRoute} />

      {/* APIS MEGA MENU */}
      <Box sx={{ position: 'relative' }}>
        <StyledNavItem
          onClick={handleApisClick}
          sx={{ 
            cursor: 'pointer',
            color: isComponentsRoute ? 'text.primary' : 'white',
            '&:hover': {
              color: 'primary.main'
            },
            display: 'flex',
            alignItems: 'center'
          }}
        >
          APIs
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', ml: 0.3 }}>
            <KeyboardArrowDown
              sx={{
                width: 20,
                height: 20,
                transform: Boolean(apisAnchorEl) ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease'
              }}
            />
          </Box>
        </StyledNavItem>
        <Menu
          anchorEl={apisAnchorEl}
          open={Boolean(apisAnchorEl)}
          onClose={handleApisClose}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 2,
              minWidth: 180,
              boxShadow: 3
            }
          }}
        >
          <MenuItem component={RouterLink} to="/dashboard/weather" onClick={handleApisClose}>
            Weather App
          </MenuItem>
          <MenuItem component={RouterLink} to="/dashboard/pokemon" onClick={handleApisClose}>
            Pokemon API
          </MenuItem>
          <MenuItem component={RouterLink} to="/dashboard/jsonplaceholder" onClick={handleApisClose}>
            JSONPlaceholder
          </MenuItem>
        </Menu>
      </Box>

      <StyledNavItem href="/components" isDark={isComponentsRoute} isActive={isActive('/components')}>
        Components
      </StyledNavItem>
    </StyledNav>; // FOR SMALL AND MEDIUM SCREEN DEVICE

  const SMALL_DEVICE_CONTENT = (
    <Fragment>
      <Box sx={{ display: { md: 'none' } }}>
        <IconButton 
          onClick={() => setOpen(true)}
          sx={{
            color: isComponentsRoute ? 'text.primary' : 'white',
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
            },
            padding: '8px',
          }}
        >
          <MenuIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </Box>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ 
          sx: { 
            width: 280,
            backgroundColor: (theme) => theme.palette.background.paper,
            boxShadow: (theme) => theme.shadows[8],
            borderRadius: '16px 0 0 16px'
          } 
        }}
      >
        <Box p={2}>
          <CustomLink href="/">
            <img src="/static/logo/logo-svg.svg" alt="logo" width={35} height={35} />
          </CustomLink>
        </Box>

        <Scrollbar>
          <List sx={{ px: 2 }}>
            <ListItem disablePadding>
              <ListItemButton component={CustomLink} href="/">
                Home
              </ListItemButton>
            </ListItem>

            {/* Pages Section */}
            <ListItem>
              <Box sx={{ width: '100%' }}>
                <ListItemButton
                  onClick={() => setPageCollapsed(!pageCollapsed)}
                  sx={{
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    typography: 'body1',
                    fontWeight: 500
                  }}
                >
                  <span>Pages</span>
                  <ChevronDown
                    sx={{
                      transform: pageCollapsed ? 'rotate(0deg)' : 'rotate(-90deg)',
                      transition: 'transform 0.3s'
                    }}
                  />
                </ListItemButton>

                <Collapse in={pageCollapsed}>
                  <List sx={{ pl: 2 }}>
                    {/* Dashboard Section */}
                    <ListItem>
                      <Box sx={{ width: '100%' }}>
                        <ListItemButton
                          onClick={() => setCollapsed(!collapsed)}
                          sx={{
                            padding: 0,
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            typography: 'body1',
                            fontWeight: 500
                          }}
                        >
                          <span>Dashboard</span>
                          <ChevronDown
                            sx={{
                              transform: collapsed ? 'rotate(0deg)' : 'rotate(-90deg)',
                              transition: 'transform 0.3s'
                            }}
                          />
                        </ListItemButton>

                        <Collapse in={collapsed}>
                          <List sx={{ pl: 2 }}>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/dashboard/analytics">
                                Analytics
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/dashboard/analytics-2">
                                Analytics 2
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/dashboard/finance">
                                Finance
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/dashboard/ecommerce">
                                Ecommerce
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/dashboard/crm">
                                CRM
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/dashboard/marketing">
                                Marketing
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/dashboard/logistics">
                                Logistics
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/dashboard/sales">
                                Sales
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/dashboard/lms">
                                LMS
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/dashboard/job-management">
                                Job Management
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </Collapse>
                      </Box>
                    </ListItem>

                    {/* Pages Section */}
                    <ListItem>
                      <Box sx={{ width: '100%' }}>
                        <ListItemButton
                          onClick={() => setPagesCollapsed(!pagesCollapsed)}
                          sx={{
                            padding: 0,
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            typography: 'body1',
                            fontWeight: 500
                          }}
                        >
                          <span>Pages</span>
                          <ChevronDown
                            sx={{
                              transform: pagesCollapsed ? 'rotate(0deg)' : 'rotate(-90deg)',
                              transition: 'transform 0.3s'
                            }}
                          />
                        </ListItemButton>

                        <Collapse in={pagesCollapsed}>
                          <List sx={{ pl: 2 }}>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/about-us">
                                About Us
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/contact-us">
                                Contact Us
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/faqs">
                                FAQs
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/pricing">
                                Pricing
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/career">
                                Career
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/job-details">
                                Job Details
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/apply-job">
                                Apply Job
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/shop">
                                Shop
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/checkout">
                                Checkout
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/cart">
                                Cart
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </Collapse>
                      </Box>
                    </ListItem>

                    {/* Session Section */}
                    <ListItem>
                      <Box sx={{ width: '100%' }}>
                        <ListItemButton
                          onClick={() => setSessionCollapsed(!sessionCollapsed)}
                          sx={{
                            padding: 0,
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            typography: 'body1',
                            fontWeight: 500
                          }}
                        >
                          <span>Session</span>
                          <ChevronDown
                            sx={{
                              transform: sessionCollapsed ? 'rotate(0deg)' : 'rotate(-90deg)',
                              transition: 'transform 0.3s'
                            }}
                          />
                        </ListItemButton>

                        <Collapse in={sessionCollapsed}>
                          <List sx={{ pl: 2 }}>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/login">
                                Login
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/register">
                                Register
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/forget-password">
                                Forget Password
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/verify-otp">
                                Verify OTP Code
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/404">
                                Not Found
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/coming-soon">
                                Coming Soon
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component={RouterLink} to="/maintenance">
                                Maintenance
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </Collapse>
                      </Box>
                    </ListItem>
                  </List>
                </Collapse>
              </Box>
            </ListItem>

            {/* APIs Section */}
            <ListItem>
              <Box sx={{ width: '100%' }}>
                <ListItemButton
                  onClick={() => setApisCollapsed(!apisCollapsed)}
                  sx={{
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    typography: 'body1',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  <span>APIs</span>
                  <KeyboardArrowDown
                    sx={{
                      transform: apisCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}
                  />
                </ListItemButton>

                <Collapse in={apisCollapsed}>
                  <List sx={{ pl: 2 }}>
                    <ListItem disablePadding>
                      <ListItemButton component={RouterLink} to="/dashboard/weather">
                        Weather App
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component={RouterLink} to="/dashboard/pokemon">
                        Pokemon API
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component={RouterLink} to="/dashboard/jsonplaceholder">
                        JSONPlaceholder
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Collapse>
              </Box>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={CustomLink} href="/components">
                Components
              </ListItemButton>
            </ListItem>
          </List>
        </Scrollbar>
      </Drawer>
    </Fragment>
  );
  return <StyledRoot>
      {
      /* ESSENCE LOGO */
    }
      <CustomLink href="/">
        <img src="/static/logo/logo-svg.svg" alt="logo" width={35} height={35} />
      </CustomLink>

      {isMedium ? LARGE_DEVICE_CONTENT : SMALL_DEVICE_CONTENT}
    </StyledRoot>;
}