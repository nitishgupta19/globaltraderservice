import React from 'react';
import { Box, Container, Grid, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import homepageImage from '../assets/Homepage.jpg';
import backgroundImage from '../assets/background-image.jpg';

const Home = ({ onNavigate }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        py: 8,
        backgroundImage: `linear-gradient(135deg, rgba(15, 15, 30, 0.85) 0%, rgba(26, 26, 46, 0.85) 50%, rgba(22, 33, 62, 0.85) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
                fontWeight: 700,
                color: '#00d4ff',
                mb: 2,
                lineHeight: 1.05,
              }}
            >
              Welcome to Global Traders
            </Typography>

            <Typography sx={{ color: '#b0b0b0', mb: 3, maxWidth: '600px' }}>
              Professional IT Services & Solutions — delivering tailored technology
              strategies to help organizations grow, secure, and scale.
            </Typography>

            <Typography variant="body1" sx={{ color: '#a0a0a0', mb: 4, maxWidth: '600px' }}>
              We help organizations transform their digital infrastructure and achieve sustainable growth through
              cutting-edge technology and expert support.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                onClick={() => onNavigate('Contact')}
                sx={{
                  background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                  color: '#000',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Get Started
              </Button>

              <Button variant="outlined" onClick={() => onNavigate('About')} sx={{ color: '#00d4ff', borderColor: '#00d4ff' }}>
                Learn More
              </Button>
            </Box>

            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={6} sm={3}>
                <Box>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#00d4ff' }}>500+</Typography>
                  <Typography sx={{ color: '#7a8a9a', fontSize: '0.85rem' }}>Clients Served</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#00d4ff' }}>15+</Typography>
                  <Typography sx={{ color: '#7a8a9a', fontSize: '0.85rem' }}>Years Experience</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#00d4ff' }}>100+</Typography>
                  <Typography sx={{ color: '#7a8a9a', fontSize: '0.85rem' }}>Team Members</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#00d4ff' }}>99%</Typography>
                  <Typography sx={{ color: '#7a8a9a', fontSize: '0.85rem' }}>Satisfaction</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ position: 'relative', width: '100%', maxWidth: '800px' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    // top: -30,
                    // right: -30,
                    // width: "400px",
                    // height: "400px",
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0,
                  }}
                />
                <img
                  src={homepageImage}
                  alt="Global Traders"
                  style={{ width: '100%', borderRadius: 12, boxShadow: '0 10px 40px rgba(0, 212, 255, 0.15)', position: 'relative', zIndex: 1 }}
                />
              </Box>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
