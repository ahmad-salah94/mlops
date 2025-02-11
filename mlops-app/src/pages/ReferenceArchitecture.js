import { 
  Typography, 
  Box, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Link,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import React from 'react';
import { referenceArchitectureData } from '../data';

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

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 'bold',
  color: '#2c3e50',
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.7)',
  marginBottom: theme.spacing(2),
  borderRadius: '10px !important',
  '&:before': {
    display: 'none',
  },
}));

const StyledList = styled(List)(({ theme }) => ({
  padding: theme.spacing(2),
  '& .MuiListItem-root': {
    marginBottom: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '8px',
    padding: theme.spacing(2),
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
}));

const ReferenceArchitecture = () => {
  const { overview, implementationStrategy, keyComponents, actors, conclusion } = referenceArchitectureData;

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
          Reference Architecture
        </Typography>
      </motion.div>
      
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2980b9' }}>
          Overview
        </Typography>
        {overview.map((paragraph, index) => (
          <Typography paragraph key={index}>
            {paragraph}
          </Typography>
        ))}
      </StyledPaper>

      <Box sx={{ marginBottom: 4 }}>
        <SectionTitle variant="h5" gutterBottom>
          Architecture Diagram
        </SectionTitle>
        <StyledPaper elevation={3} sx={{ textAlign: 'center' }}>
          <img src="/referenzarchitektur.jpg" alt="MLOps Lifecycle" style={{ width: '100%', maxWidth: 800, display: 'block', margin: 'auto' }} /> 
        </StyledPaper>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <SectionTitle variant="h4" gutterBottom>
          Implementation Strategy
        </SectionTitle>

        {implementationStrategy.map((strategy, index) => (
          <StyledAccordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ color: '#34495e' }}>{strategy.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Array.isArray(strategy.content) ? (
                <StyledList>
                  {strategy.content.map((item, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={<Typography>{typeof item === 'string' ? item : `${item.activity}: ${item.component} - ${item.description}`}</Typography>} />
                    </ListItem>
                  ))}
                </StyledList>
              ) : (
                strategy.content
              )}
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <SectionTitle variant="h4" gutterBottom>
          Key Components
        </SectionTitle>
        <StyledPaper elevation={3}>
          <Table sx={{ marginBottom: 4 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Component</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {keyComponents.map((component, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}>
                  <TableCell>{component.component}</TableCell>
                  <TableCell>{component.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledPaper>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <SectionTitle variant="h4" gutterBottom>
          Actors in the MLOps Process
        </SectionTitle>
        <StyledPaper elevation={3}>
          <Table sx={{ marginBottom: 4 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Actor</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {actors.map((actor, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}>
                  <TableCell>{actor.actor}</TableCell>
                  <TableCell>{actor.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledPaper>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <SectionTitle variant="h4" gutterBottom>
          Conclusion
        </SectionTitle>
        <StyledPaper>
          {conclusion.map((item, index) => (
            <Typography paragraph key={index}>
              {typeof item === 'string' ? item : <Link href={item.link}>{item.text}</Link>}
            </Typography>
          ))}
        </StyledPaper>
      </Box>
    </MainContainer>
  );
};

export default ReferenceArchitecture;