import React, { useState } from 'react';
import { Typography, Paper, Grid, Box, Card, CardContent, Modal } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);
const MotionCard = motion(Card);

const principlesData = {
  "Reproducibility": "Reproducibility is at the core of MLOps. It refers to the ability to repeat ML experiments or ML models under the same conditions with identical results. This is crucial for ensuring the reliability and fairness of ML systems. Reproducibility is achieved through consistent versioning and careful experiment management, facilitating debugging, model performance evaluation, and the transfer of models into production. A reproducible ML system promotes confidence in the results and in the decisions made based on these models. Furthermore, reproducibility forms the basis for scaling and automating workflows throughout the lifecycle of ML models.",
  "Versioning": "Versioning plays a crucial role in ML, ensuring the traceability and reliability of ML systems. Within MLOps practices, versioning refers to the careful documentation and management of changes in data, models, and code. This practice allows teams to effectively organize, track, and evaluate different iterations of datasets, model configurations, and algorithms. The goal is to create a reliable foundation for reproducibility and ensure a transparent development history. This makes it possible to easily revert to previous versions and clearly analyze and understand changes and their effects over time.",
  "Experiment Management": "Experiment management is a central process in MLOps. It ensures the methodical execution and documentation of ML experiments. This process is closely linked to versioning, as it facilitates the management and tracking of experiments. Details about the data used, the hyperparameters set, and the results achieved are recorded. Through the structured capture of this information, data scientists and ML engineers can specifically test hypotheses and develop models more precisely. Additionally, effective experiment management provides a clear overview of all experiments conducted and their results.",
  "ML Pipelines": "MLOps emphasizes the importance of transforming often unstructured ML code in notebooks into systematically structured ML pipelines. This transformation allows ML code to be effectively reproduced, validated, and monitored. By embedding the code in ML pipelines, a methodical and controllable environment is created in which data processing, feature extraction, model training, evaluation, and model deployment can run automatically. This systematic conversion not only promotes clarity and maintainability of the code but also ensures its reproducibility and scalability. This is essential for the reliable development and deployment of ML models.",
  "Automation and Orchestration": "MLOps increases the efficiency and reliability of ML processes through the automation and orchestration of specific ML pipelines, such as data acquisition, data processing, and model training. Automation minimizes manual errors and improves the speed of recurring processes, particularly increasing the efficiency of data acquisition, processing, and training pipelines. Orchestration ensures the correct sequence and integration of automated steps. It controls relationships and dependencies between tasks within the pipelines and ensures dynamic resource allocation. Through these combined approaches, scalable, repeatable, and maintainable ML workflows can be created that support rapid iterations and consistent results across the entire ML pipeline.",
  "Collaboration": "MLOps promotes collaboration and integration of various disciplines by providing common methods, tools, and platforms. This enables improved communication and coordination between key roles. The unification of workflows and the use of shared best practices increase transparency throughout the entire ML lifecycle. This ensures that all participants are synchronized, leading to accelerated development and increased quality of ML projects. The collaborative environment created by MLOps also facilitates the identification and resolution of challenges in real-time and supports continuous improvement of the development process.",
  "CI/CD in MLOps": "In MLOps, CI/CD are essential components that go beyond traditional code integration. They encompass end-to-end integration and validation that consider changes to both data and ML models and their dependencies. This holistic approach ensures continuous and automatic verification of each change to immediately identify inconsistencies or errors and promote the stability of the codebase. This involves extensive validation processes such as dataset checks, model validation tests, and code quality checks. This ensures that each innovation is technically correct, of high quality, and can be seamlessly integrated into the existing system. Thus, the integrity and performance of ML systems are continuously maintained. The integration of CI/CD in MLOps promotes a culture of continuous improvement and optimization. This is essential for the agile development and operation of ML models. Teams can react faster to changes, increase the efficiency of the development process, and continuously improve the reliability and performance of models deployed in production.",
  "Continuous Training": "Continuous Training is a fundamental aspect of MLOps. It ensures that ML models remain current and efficient. It is the automated process where ML models are regularly retrained with new or changed datasets to maintain their predictive accuracy and relevance. This practice is essential to proactively respond to changes such as data drift or changing market conditions. Through continuous adaptation of models to current data, steady optimization and ongoing improvement of model performance can be ensured. This is crucial for maintaining the validity and effectiveness of ML applications over time.",
  "Continuous Monitoring": "Continuous Monitoring is an essential component of MLOps. It involves the ongoing monitoring of model performance as well as the quality of incoming data. The purpose of this process is to ensure the continued functionality and effectiveness of ML systems. Monitoring plays a key role in the early detection of anomalies such as data drift. This lays the foundation for timely and automatic retraining of the model. Through continuous assessment of both the performance indicators of the models and the data quality, Continuous Monitoring enables teams to efficiently diagnose and immediately address any deterioration. This significantly contributes to maintaining the reliability, accuracy, and general performance of ML solutions in production."
};

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPrinciple, setSelectedPrinciple] = useState('');

  const handleOpenModal = (principle) => {
    setSelectedPrinciple(principle);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <img src="/sprinteins_logo.png" alt="Sprinteins Logo" height="50" />
        <img src="/reutlingen_hochschule_logo.png" alt="Reutlingen Hochschule Logo" height="50" />
      </Box>

      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#333' }}>
        Welcome to MLOps
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MotionPaper
            elevation={2}
            sx={{ p: 3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: '#3f51b5' }}>
              What is MLOps?
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              MLOps (Machine Learning Operations) is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently. It combines machine learning, DevOps, and data engineering to streamline the machine learning lifecycle.
            </Typography>
          </MotionPaper>
        </Grid>

        <Grid item xs={12}>
          <MotionPaper
            elevation={2}
            sx={{ p: 3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: '#3f51b5' }}>
              MLOps Lifecycle
            </Typography>
            <img src="/mlops_lifecycle.png" alt="MLOps Lifecycle" style={{ width: '100%', maxWidth: 600, display: 'block', margin: 'auto' }} />
          </MotionPaper>
        </Grid>

        <Grid item xs={12}>
          <MotionPaper
            elevation={2}
            sx={{ p: 3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: '#3f51b5' }}>
              Historical Development
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
              The evolution from traditional software development to MLOps has been driven by the unique challenges posed by machine learning systems.
            </Typography>
            <Grid container spacing={2}>
              {[
                { title: "ML Challenges", content: "ML systems face unique challenges such as data dependencies, experiment tracking, and model decay." },
                { title: "DevOps Limitations", content: "While DevOps improved software development, it didn't address ML-specific issues like data versioning and model monitoring." },
                { title: "Birth of MLOps", content: "MLOps emerged as a solution, combining ML, DevOps, and data engineering practices to address these challenges." }
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <MotionCard
                    elevation={1}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  >
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>{item.title}</Typography>
                      <Typography variant="body2">{item.content}</Typography>
                    </CardContent>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </MotionPaper>
        </Grid>

        <Grid item xs={12}>
        <Box sx={{ maxWidth: 1200, margin: 'auto' }}>
      {/* ... (previous code remains the same) ... */}

      <Grid item xs={12}>
        <MotionPaper
          elevation={2}
          sx={{ p: 3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: '#3f51b5' }}>
            MLOps Principles
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
            MLOps is guided by several key principles that ensure efficient and reliable machine learning operations:
          </Typography>
          <Grid container spacing={2}>
            {Object.keys(principlesData).map((principle, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionCard
                  elevation={1}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                  onClick={() => handleOpenModal(principle)}
                  sx={{ 
                    cursor: 'pointer', 
                    '&:hover': { 
                      backgroundColor: '#f0f0f0',
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease-in-out'
                    } 
                  }}
                >
                  <CardContent>
                    <Typography variant="subtitle1">{principle}</Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionPaper>
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
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            {selectedPrinciple}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {principlesData[selectedPrinciple]}
          </Typography>
        </Box>
      </Modal>
    </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;