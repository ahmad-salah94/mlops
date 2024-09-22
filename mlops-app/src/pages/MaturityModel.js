import React, { useState } from 'react';
import { Typography, Grid, Box, Card, CardContent, Modal } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const maturityModels = {
  "Google MLOps Maturity Model": {
    stages: [
      {
        name: "Stage 0: Manual Process",
        description: "Reflects a traditional approach in data science, heavily relying on manual, script-driven, and interactive processes. All steps from data analysis to model validation are performed manually."
      },
      {
        name: "Stage 1: ML Pipeline Automation",
        description: "Focus on automating the ML pipeline. This marks a fundamental transformation from manual to a systematic approach. Continuous Training (CT) is implemented, creating the foundation for rapid and iterative development cycles."
      },
      {
        name: "Stage 2: CI/CD Pipeline Automation",
        description: "Encompasses full automation of CI/CD processes. This stage marks the transition to a highly developed MLOps approach, where the entire ML pipeline from development through testing to production is automated."
      }
    ]
  },
  "Microsoft MLOps Maturity Model": {
    stages: [
      {
        name: "Stage 0: No MLOps",
        description: "No specialized data science teams. ML projects are rare and not integrated into the general business strategy. Data processing occurs in isolated silos, and there's a lack of integration of required data for ML."
      },
      {
        name: "Stage 1: DevOps but no MLOps",
        description: "Companies use automated DevOps pipelines to support software development. However, the ML model is still manually managed within applications."
      },
      {
        name: "Stage 2: Automated Training",
        description: "Establishment of centralized model management and automated training pipelines improves consistency and reuse of models. There's beginning coordination between data science and engineering teams."
      },
      {
        name: "Stage 3: Automated Model Deployment",
        description: "Model tests are automated and deployment to the production environment is enabled. This achieves closer integration between the ML model lifecycle and production processes."
      },
      {
        name: "Stage 4: Full MLOps Automated Operations",
        description: "All operations around ML models are fully automated. This includes initial and repeated training, deployment, and monitoring. Advanced monitoring mechanisms continuously check model performance."
      }
    ]
  }
};

const MaturityModel = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);

  const handleOpenModal = (model, stage) => {
    setSelectedStage(stage);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#333' }}>
        MLOps Maturity Models
      </Typography>

      <img src="/mlops_mat_model.png" alt="MLOps maturity Models" style={{ width: '100%', maxWidth: 600, display: 'block', margin: 'auto' }} />

      <Grid container spacing={4}>
        {Object.entries(maturityModels).map(([model, { stages }], index) => (
          <Grid item xs={12} md={6} key={index}>
            <Typography variant="h5" gutterBottom sx={{ color: '#3f51b5' }}>
              {model}
            </Typography>
            {stages.map((stage, stageIndex) => (
              <MotionCard
                key={stageIndex}
                elevation={2}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stageIndex * 0.1 }}
                sx={{ mb: 2, cursor: 'pointer' }}
                onClick={() => handleOpenModal(model, stage)}
              >
                <CardContent>
                  <Typography variant="h6">{stage.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stage.description.substring(0, 100)}...
                  </Typography>
                </CardContent>
              </MotionCard>
            ))}
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
            {selectedStage?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedStage?.description}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default MaturityModel;
