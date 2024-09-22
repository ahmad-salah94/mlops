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
  // ... (keep your existing theme configuration)
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
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, ml: '240px' }}>
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