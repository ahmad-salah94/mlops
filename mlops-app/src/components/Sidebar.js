import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Components', icon: <BuildIcon />, path: '/components' },
    { text: 'Roles', icon: <PeopleIcon />, path: '/roles' },
    { text: 'Tools', icon: <BarChartIcon />, path: '/tools' },
    { text: 'Maturity Model', icon: <SchoolIcon />, path: '/maturity-model' },
    { text: 'Reference Architecture', icon: <SchoolIcon />, path: '/reference-architecture' },
  ];

  return (
    <Box sx={{ width: 240, borderRight: '1px solid #e0e0e0', height: '100vh', position: 'fixed', bgcolor: '#f5f5f5' }}>
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
};

export default Sidebar;