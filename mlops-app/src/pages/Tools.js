import React, { useState } from 'react';
import { Typography, Grid, Box, Card, CardContent, Modal, Tabs, Tab, Button } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const toolsData = {
  "Specialized Open-Source MLOps Tools": {
    description: "These tools focus on specific functions within the ML lifecycle. While they don't offer the breadth of functionality that end-to-end platforms do, they are often more powerful in their specialized areas.",
    advantages: [
      "Flexibility and modularity",
      "Open-source cost efficiency",
      "Customization and transparency",
      "Active developer community support"
    ],
    disadvantages: [
      "Limited MLOps coverage",
      "Integration complexity",
      "Potential stability issues",
      "Higher maintenance and scalability challenges"
    ]
  },
  "Open-Source End-to-End MLOps Platforms": {
    description: "These platforms offer a comprehensive solution for managing the entire ML lifecycle, consolidating numerous MLOps functions under one roof.",
    advantages: [
      "Comprehensive MLOps coverage",
      "Open-source cost efficiency",
      "Flexibility and modularity",
      "Potential for on-premises hosting"
    ],
    disadvantages: [
      "Potential reliability and stability issues",
      "Steeper learning curve",
      "Higher initial configuration complexity",
      "Dependency on a single platform"
    ]
  },
  "Commercial End-to-End MLOps Platforms": {
    description: "These platforms offer a comprehensive, cloud-based solution covering all aspects of the MLOps lifecycle, simplifying the process of developing, deploying, and scaling ML models.",
    advantages: [
      "Comprehensive MLOps coverage",
      "High reliability and stability",
      "Professional support and SLAs",
      "Lower maintenance overhead and easier scalability"
    ],
    disadvantages: [
      "Higher costs compared to open-source solutions",
      "Potential vendor lock-in",
      "Limited flexibility for customization",
      "Potential data security concerns with cloud-based solutions"
    ]
  }
};

const Tools = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState('');
  const [currentTab, setCurrentTab] = useState(0);

  const handleOpenModal = (tool) => {
    setSelectedTool(tool);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#333' }}>
        MLOps Tools
      </Typography>

      {/* Placeholder for MLOps tools figure */}
      
        
        <img src="/mlops_tools.png" alt="MLOps Lifecycle" style={{ width: '100%', maxWidth: 600, display: 'block', margin: 'auto' }} />
        
      

      <Grid container spacing={3}>
        {Object.entries(toolsData).map(([category, data], index) => (
          <Grid item xs={12} md={4} key={index}>
            <MotionCard
              elevation={2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {category}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {data.description}
                </Typography>
                <Button variant="outlined" onClick={() => handleOpenModal(category)}>
                  Learn More
                </Button>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
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
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            {selectedTool}
          </Typography>
          <Tabs value={currentTab} onChange={handleChangeTab} sx={{ mb: 2 }}>
            <Tab label="Advantages" />
            <Tab label="Disadvantages" />
          </Tabs>
          {currentTab === 0 && (
            <ul>
              {toolsData[selectedTool]?.advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          )}
          {currentTab === 1 && (
            <ul>
              {toolsData[selectedTool]?.disadvantages.map((disadvantage, index) => (
                <li key={index}>{disadvantage}</li>
              ))}
            </ul>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Tools;