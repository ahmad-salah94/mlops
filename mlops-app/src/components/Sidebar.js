import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Typography,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Components', icon: <BuildIcon />, path: '/components' },
    { text: 'Tools', icon: <BarChartIcon />, path: '/tools' },
    { text: 'Maturity Model', icon: <SchoolIcon />, path: '/maturity-model' },
    { text: 'Reference Architecture', icon: <SchoolIcon />, path: '/reference-architecture' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ height: '100%', bgcolor: '#f5f5f5' }}>
      <Typography variant="h6" sx={{ p: 2, fontWeight: 'bold', color: '#333', borderBottom: '1px solid #e0e0e0' }}>
        MLOps App
      </Typography>
      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              onClick={() => isMobile && handleDrawerToggle()}
              sx={{
                bgcolor: isActive ? '#e3f2fd' : 'transparent',
                borderLeft: isActive ? '4px solid #2196f3' : '4px solid transparent',
                '&:hover': {
                  bgcolor: '#e3f2fd',
                },
                transition: 'all 0.3s',
              }}
            >
              <ListItemIcon sx={{ color: isActive ? '#2196f3' : '#757575' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  color: isActive ? '#2196f3' : '#333',
                  '& .MuiTypography-root': {
                    fontWeight: isActive ? 'bold' : 'normal',
                  },
                }} 
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ 
          mr: 2, 
          display: { md: 'none' }, 
          position: 'fixed', 
          left: 16,
          top: 16,
          zIndex: 1200,
          bgcolor: 'white',
          '&:hover': {
            bgcolor: '#f5f5f5',
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Box component="nav" sx={{ width: { md: 240 }, flexShrink: { md: 0 } }}>
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: 240 
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: 240,
                borderRight: '1px solid #e0e0e0'
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </>
  );
};

export default Sidebar;