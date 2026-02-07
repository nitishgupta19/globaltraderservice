import React, { useRef } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Create modern dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0e27',
      paper: '#0f1729',
    },
    primary: {
      main: '#00d4ff',
    },
    secondary: {
      main: '#00f0ff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0c0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 800,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '10px',
          fontSize: '1rem',
          fontWeight: 600,
          letterSpacing: '0.5px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
        },
        contained: {
          background: 'linear-gradient(135deg, #00d4ff, #00f0ff)',
          color: '#0a0e27',
          boxShadow: '0 8px 24px rgba(0, 212, 255, 0.3)',
          '&:hover': {
            boxShadow: '0 12px 32px rgba(0, 212, 255, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 23, 41, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 212, 255, 0.15)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            backgroundColor: 'rgba(15, 23, 41, 0.95)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            boxShadow: '0 12px 48px rgba(0, 212, 255, 0.2)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
  },
});

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavigation = (section) => {
    let ref;
    switch (section) {
      case 'Home':
        ref = homeRef;
        break;
      case 'About':
        ref = aboutRef;
        break;
      case 'Contact':
        ref = contactRef;
        break;
      default:
        ref = homeRef;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#0f0f1e',
          color: '#fff',
          width: '100%',
        }}
      >
        <Header onNavigate={handleNavigation} />

        <Box component="main" sx={{ flex: 1 }}>
          <div ref={homeRef}>
            <Home onNavigate={handleNavigation} />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
