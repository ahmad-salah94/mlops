import React, { useState } from 'react';
import { Typography, Grid, Box, Card, CardContent, Modal, Avatar } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { componentsData } from '../data'; // Import componentsData

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled components
const MainContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  animation: `${fadeIn} 1s ease-out`,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
}));

const MotionCard = motion(StyledCard);

const Components = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('');

  const handleOpenModal = (component) => {
    setSelectedComponent(component);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const getIconComponent = (iconName) => {
    const icons = {
      StorageIcon: require('@mui/icons-material/Storage').default,
      DataObjectIcon: require('@mui/icons-material/DataObject').default,
      AnalyticsIcon: require('@mui/icons-material/Analytics').default,
      ScienceIcon: require('@mui/icons-material/Science').default,
      ExtensionIcon: require('@mui/icons-material/Extension').default,
      CodeIcon: require('@mui/icons-material/Code').default,
      AccountTreeIcon: require('@mui/icons-material/AccountTree').default,
      CloudQueueIcon: require('@mui/icons-material/CloudQueue').default,
      MonitorHeartIcon: require('@mui/icons-material/MonitorHeart').default,
      CategoryIcon: require('@mui/icons-material/Category').default,
    };
    return icons[iconName] || null;
  };

  return (
    <MainContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom align="center" sx={{ color: '#3498db', marginBottom: 4, fontWeight: 'bold' }}>
          MLOps Components
        </Typography>
      </motion.div>

      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img src="/mlops_components.png" alt="MLOps Components" style={{ width: '100%', maxWidth: 600, display: 'block', margin: 'auto' }} />
      </Box>

      <Grid container spacing={3}>
        {Object.entries(componentsData).map(([component, { icon, description }], index) => {
          const IconComponent = getIconComponent(icon);
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionCard
                elevation={2}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleOpenModal(component)}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Avatar sx={{ bgcolor: '#3498db', mb: 2, width: 56, height: 56 }}>
                    {IconComponent && <IconComponent />}
                  </Avatar>
                  <Typography variant="h6" component="div" align="center" sx={{ color: '#2c3e50' }}>
                    {component}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          );
        })}
      </Grid>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 600,
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflow: 'auto',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom sx={{ color: '#3498db' }}>
            {selectedComponent}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: '#34495e' }}>
            {componentsData[selectedComponent]?.description}
          </Typography>
        </Box>
      </Modal>
    </MainContainer>
  );
};

export default Components;