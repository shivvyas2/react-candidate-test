import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // MUI

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemButton from '@mui/material/ListItemButton';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENT

import Menu from '@mui/icons-material/Menu'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import Scrollbar from '@/components/scrollbar';


import ChevronDown from '@/icons/ChevronDown'; // NAVIGATION LIST

import { PAGES_MENUS } from './menu/navigation'; // STYLED COMPONENT



// Main header container with responsive layout
const StyledRoot = styled('header')(({ theme }) => ({
  paddingBlock: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

// Desktop navigation container with flex layout
const StyledNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  fontSize: 14,
  fontWeight: 500,
  listStyle: 'none',
  alignItems: 'center',
  gap: theme.spacing(5)
}));

const StyledNavItem = styled(Link, {
  shouldForwardProp: prop => prop !== 'isDark' && prop !== 'isActive'
})(({ theme, isDark, isActive }) => ({
  color: isDark ? theme.palette.text.primary : 'white',
  transition: 'color 300ms',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  ':hover': {
    color: theme.palette.primary.main
  },
  ...(isActive && { color: theme.palette.primary.main })
}));


// Dropdown menu container positioned absolutely below nav items
const DropdownContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100%', 
  left: 0,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  zIndex: 10,
  minWidth: 150
}));


function DropdownNavItem({ menu, isDark }) {
  const [open, setOpen] = useState(false); // Controls dropdown visibility

  return (
    <Box
      onMouseEnter={() => setOpen(true)}    // Desktop hover interaction
      onMouseLeave={() => setOpen(false)}   // Close on mouse out
      sx={{ position: 'relative', display: 'inline-block' }}
    >
      <StyledNavItem
        href="#"
        isDark={isDark}
        onClick={(e) => e.preventDefault()}
      >
        {menu.title}
        <ChevronDown sx={{ ml: 0.5 }} />
      </StyledNavItem>
      {open && (
        <DropdownContainer>
          {menu.child.map(child => (
            <Box key={child.id} mb={1}>
              <Link
                href={child.href}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {child.title}
              </Link>
            </Box>
          ))}
        </DropdownContainer>
      )}
    </Box>
  );
}

export default function Navigation() {
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMedium = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isComponentsRoute = pathname.startsWith('/components');

  // Track collapsed state for each mobile menu item
  const [collapsedMenus, setCollapsedMenus] = useState({});
  const toggleCollapse = id => {
    setCollapsedMenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Auto-close drawer when resizing to desktop
  useEffect(() => {
    if (isMedium) setDrawerOpen(false);
  }, [isMedium]);

  // Large screen navigation
  const LARGE_DEVICE_CONTENT = (
    <StyledNav>
      <StyledNavItem
        href="/"
        isActive={pathname === '/'}
        isDark={isComponentsRoute}
      >
        Home
      </StyledNavItem>
      {PAGES_MENUS.map(menu => (
        <DropdownNavItem key={menu.id} menu={menu} isDark={isComponentsRoute} />
      ))}
      <StyledNavItem
        href="/components"
        isActive={pathname === '/components'}
        isDark={isComponentsRoute}
      >
        Components
      </StyledNavItem>
    </StyledNav>
  );

  // Mobile screen navigation 
  const SMALL_DEVICE_CONTENT = (
    <Fragment>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Scrollbar>
          <List disablePadding sx={{ minWidth: 260, height: '100%' }}>
            <ListItem sx={{ mb: 1 }}>
              <img src="/static/logo/logo-svg.svg" alt="logo" width={40} height={40} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/">
                Home
              </ListItemButton>
            </ListItem>
            {PAGES_MENUS.map(menu => (
              <ListItem
                key={menu.id}
                disablePadding
                sx={{ flexDirection: 'column', alignItems: 'start' }}
              >
                <ListItemButton
                  onClick={() => toggleCollapse(menu.id)}
                  sx={{ width: '100%', justifyContent: 'space-between' }}
                >
                  {menu.title}
                  <ChevronDown
                    sx={{
                      transform: collapsedMenus[menu.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 300ms'
                    }}
                  />
                </ListItemButton>
                <Collapse in={collapsedMenus[menu.id]} timeout="auto" unmountOnExit>
                  <Box px={2} py={1.5}>
                    {menu.child.map(child => (
                      <ListItemButton key={child.id} LinkComponent={Link} href={child.href}>
                        {child.title}
                      </ListItemButton>
                    ))}
                  </Box>
                </Collapse>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/components">
                Components
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton LinkComponent="a" href="http://essence-doc.vercel.app/">
                Documentation
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ mt: 1 }}>
              <Button fullWidth href="https://ui8.net/ui-lib/products/essence---ui-kit">
                Buy Now
              </Button>
            </ListItem>
          </List>
        </Scrollbar>
      </Drawer>
      <IconButton
        color="primary"
        onClick={() => setDrawerOpen(true)}
        sx={{ flexShrink: 0 }}
      >
        <Menu />
      </IconButton>
    </Fragment>
  );

  return (
    <StyledRoot>
      <Link href="/">
        <img src="/static/logo/logo-svg.svg" alt="logo" width={35} height={35} />
      </Link>
      {/* Conditional rendering based on screen size */}
      {isMedium ? LARGE_DEVICE_CONTENT : SMALL_DEVICE_CONTENT}
    </StyledRoot>
  );
}