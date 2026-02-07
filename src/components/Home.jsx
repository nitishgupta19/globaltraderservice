import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import homepageImage from '../assets/Homepage.jpg';

const Home = ({ onNavigate }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 6,
        background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4} 
          alignItems="center"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          {/* Left side - Content */}
          <Box>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Welcome to Global Traders
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: '#b0b0b0',
                  mb: 3,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  lineHeight: 1.6,
                }}
              >
                Professional IT Services & Solutions
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#a0a0a0',
                  mb: 4,
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  maxWidth: '500px',
                }}
              >
                We are a leading IT services company committed to delivering
                innovative solutions tailored to your business needs. With years
                of expertise, we help organizations transform their digital
                infrastructure and achieve sustainable growth through cutting-edge
                technology.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  onClick={() => onNavigate('Contact')}
                  sx={{
                    background:
                      'linear-gradient(135deg, #00d4ff, #0099ff)',
                    color: '#000',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    border: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0099ff, #0077dd)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0, 212, 255, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => onNavigate('About')}
                  sx={{
                    color: '#00d4ff',
                    borderColor: '#00d4ff',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 212, 255, 0.1)',
                      borderColor: '#00d4ff',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More
                </Button>
              </Box>

              {/* Stats */}
              <Grid container spacing={2} sx={{ mt: 4 }}>
                <Grid item xs={6} sm={3}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#00d4ff',
                      }}
                    >
                      500+
                    </Typography>
                    <Typography sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                      Clients Served
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#00d4ff',
                      }}
                    >
                      15+
                    </Typography>
                    <Typography sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                      Years Experience
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#00d4ff',
                      }}
                    >
                      100+
                    </Typography>
                    <Typography sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                      Team Members
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#00d4ff',
                      }}
                    >
                      99%
                    </Typography>
                    <Typography sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                      Satisfaction
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Right side - Image */}
          {!isMobile && (
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '500px',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -30,
                      right: -30,
                      width: '280px',
                      height: '300px',
                      background:
                        'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
                      borderRadius: '50%',
                      zIndex: 0,
                    }}
                  />
                  <img
                    src={homepageImage}
                    alt="Global Traders"
                    style={{
                      width: '90%',
                      borderRadius: '10px',
                      boxShadow: '0 10px 40px rgba(0, 212, 255, 0.2)',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
