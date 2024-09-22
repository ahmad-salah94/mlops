import React from 'react';
import { Typography, Grid, Paper, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';

const MotionPaper = motion(Paper);

const roleData = [
  {
    title: "Stakeholder",
    description: "Defines business goals and is essential for the entire MLOps lifecycle. They bring deep business understanding and ensure ML solutions meet business goals and expectations.",
    icon: <BusinessIcon fontSize="large" />
  },
  {
    title: "Data Engineer",
    description: "Develops and maintains the data infrastructure needed for ML projects. Responsible for data preparation and management, ensuring high-quality data for effective ML model development.",
    icon: <StorageIcon fontSize="large" />
  },
  {
    title: "Data Scientist",
    description: "Responsible for developing and training ML models. They use statistical analyses and ML techniques to explore data, recognize patterns, and create predictive models.",
    icon: <CodeIcon fontSize="large" />
  },
  {
    title: "Software Engineer",
    description: "Focuses on integrating ML models into existing systems. They ensure compatibility between ML models and current software, maintaining system integrity and performance.",
    icon: <BuildIcon fontSize="large" />
  },
  {
    title: "MLOps Engineer",
    description: "Coordinates the overall MLOps process, bridging the gap between development and operations. They manage automated ML workflow pipelines and oversee model deployment and monitoring.",
    icon: <SettingsIcon fontSize="large" />
  }
];

const Roles = () => {
  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#333' }}>
        MLOps Roles
      </Typography>
      <Grid container spacing={4}>
        {roleData.map((role, index) => (
          <Grid item xs={12} md={6} key={index}>
            <MotionPaper
              elevation={2}
              sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#3f51b5', mr: 2 }}>
                  {role.icon}
                </Avatar>
                <Typography variant="h6" sx={{ color: '#3f51b5' }}>
                  {role.title}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: '#555', flexGrow: 1 }}>
                {role.description}
              </Typography>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Roles;