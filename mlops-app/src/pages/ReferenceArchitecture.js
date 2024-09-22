import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  List, 
  ListItem, 
  ListItemText, 
  Divider, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Chip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MLOpsReferenceArchitecture = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        MLOps Reference Architecture
      </Typography>
      
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>
        <Typography paragraph>
          The proposed MLOps Reference Architecture covers the entire lifecycle of ML projects and is structured into four main areas. This structure allows for targeted approach to specific phases in the development and implementation of ML models, ensuring that all processes from project initiation to production deployment run efficiently and effectively.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Key Components
            </Typography>
            <List>
              {[
                'Git Repository', 
                'Central Data Repository', 
                'Feature Store', 
                'Model Registry', 
                'Model Serving', 
                'Model Monitoring', 
                'Workflow Orchestration'
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText primary={item} />
                  </ListItem>
                  {index < 6 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Central Data Repository
            </Typography>
            <Typography paragraph>
              The term 'Central Data Repository' represents a wide range of data management methods supported by various data storage and organization systems. This includes Data Warehouses, Data Lakes, Data Meshes, or direct data imports from business applications.
            </Typography>
            <Typography paragraph>
              This neutral designation reflects the goal of designing and adapting the architecture to be technology-neutral. The focus is on flexibility in handling business data, regardless of its specific format or structure.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Detailed Architecture Phases
        </Typography>

        {[
          {
            title: 'A. Project Initiation and Data Management',
            content: [
              'A1. Business Problem Identification and Goal Definition',
              'A2. Data Understanding and Acquisition',
              'A3. Architecture Preparation'
            ]
          },
          {
            title: 'B. Data Processing and Feature Engineering',
            content: [
              'B1. Data Preparation',
              'B2. Feature Engineering'
            ]
          },
          {
            title: 'C. Experimentation and Model Development',
            content: [
              'C1. Experimentation',
              'C2. Model Validation'
            ]
          },
          {
            title: 'D. Automated ML Workflow Pipeline',
            content: [
              'CI/CD Activation and Model Deployment',
              'Monitoring and Continuous Improvement'
            ]
          }
        ].map((phase, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{phase.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {phase.content.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Key Outcomes and Deliverables
        </Typography>
        <Grid container spacing={2}>
          {[
            'Clearly defined business goals and KPIs',
            'Comprehensive data acquisition and management plan',
            'Documented project structure',
            'Structured raw data in central data repository',
            'Processed data and features in Feature Store',
            'ML pipeline code for data processing in Git repository',
            'Experiment documentation with model details',
            'Selected models stored in Model Registry',
            'ML pipeline code for training and validation in Git',
            'Functioning CI/CD pipeline',
            'Deployed ML model in production environment',
            'Monitoring systems for model performance and data quality'
          ].map((outcome, index) => (
            <Grid item key={index}>
              <Chip label={outcome} color="primary" variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Conclusion
        </Typography>
        <Typography paragraph>
          The developed reference architecture addresses challenges such as lack of standardization and reproducibility with a systematic and modular approach. This approach improves collaboration and transparency. Careful implementation and continuous training are essential for the successful introduction of MLOps.
        </Typography>
        <Typography paragraph>
          MLOps enables iterative learning and process optimization. This architecture forms a solid foundation for current and future ML projects and supports organizations in achieving their goals efficiently and sustainably. Through continuous improvement of MLOps practices, companies can fully exploit the potential of their data and secure long-term business success.
        </Typography>
      </Box>
    </Box>
  );
};

export default MLOpsReferenceArchitecture;