import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Components from './pages/Components';
import Roles from './pages/Roles';
import Tools from './pages/Tools';
import MaturityModel from './pages/MaturityModel';
import ReferenceArchitecture from './pages/ReferenceArchitecture';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8',  // Google blue
      light: '#4285f4',
      dark: '#1557b0'
    },
    secondary: {
      main: '#202124',  // Google grey
      light: '#5f6368',
      dark: '#000000'
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.5px'
    },
    h4: {
      fontWeight: 500
    },
    h5: {
      fontWeight: 500
    },
    h6: {
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.04)'
        }
      }
    }
  }
});

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: '#f5f7fa'
        }}>
          <Sidebar />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1,
              p: { xs: 2, md: 3 }, // Reduced padding
              width: { md: `calc(100% - 240px)` }, // Ensure correct width calculation
              ml: { md: '240px' },
              mt: { xs: 7, md: 0 },
              maxWidth: '1400px', // Add maximum width
              margin: '0 auto'    // Center content
            }}
          >
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/components" element={<PageWrapper><Components /></PageWrapper>} />
              <Route path="/roles" element={<PageWrapper><Roles /></PageWrapper>} />
              <Route path="/tools" element={<PageWrapper><Tools /></PageWrapper>} />
              <Route path="/maturity-model" element={<PageWrapper><MaturityModel /></PageWrapper>} />
              <Route path="/reference-architecture" element={<PageWrapper><ReferenceArchitecture /></PageWrapper>} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;