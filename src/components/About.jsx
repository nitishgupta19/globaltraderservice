import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  useTheme,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const About = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: '3rem', color: '#00d4ff' }} />,
      title: 'Custom Development',
      description:
        'Tailored software solutions designed to meet your unique business requirements.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: '3rem', color: '#00d4ff' }} />,
      title: 'Cybersecurity',
      description:
        'Comprehensive security solutions to protect your digital assets and data.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: '3rem', color: '#00d4ff' }} />,
      title: 'Performance',
      description:
        'Optimized systems that ensure maximum uptime and operational efficiency.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: '3rem', color: '#00d4ff' }} />,
      title: '24/7 Support',
      description:
        'Round-the-clock customer support to ensure your operations never stop.',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            About Global Traders
          </Typography>
          <Box
            sx={{
              height: '4px',
              background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
              width: '100px',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </Box>

        {/* About Content */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: '#fff',
                mb: 3,
              }}
            >
              Who We Are
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#a0a0a0',
                lineHeight: 1.8,
                mb: 2,
                fontSize: '1rem',
              }}
            >
              Global Traders is a premier IT services company with over 15 years
              of industry experience. We specialize in delivering comprehensive
              technology solutions that empower businesses to thrive in the
              digital age.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#a0a0a0',
                lineHeight: 1.8,
                mb: 2,
                fontSize: '1rem',
              }}
            >
              Our team of expert professionals is dedicated to understanding your
              unique business challenges and delivering innovative solutions that
              drive sustainable growth and competitive advantage.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#a0a0a0',
                lineHeight: 1.8,
                fontSize: '1rem',
              }}
            >
              We pride ourselves on our commitment to excellence, customer
              satisfaction, and continuous innovation in the rapidly evolving
              technology landscape.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: '#fff',
                mb: 3,
              }}
            >
              Our Mission
            </Typography>
            <Box
              sx={{
                background: 'rgba(0, 212, 255, 0.05)',
                border: '2px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '8px',
                p: 3,
                mb: 3,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#a0a0a0',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                }}
              >
                To provide cutting-edge IT solutions that transform businesses
                and enable our clients to achieve their digital transformation
                goals with confidence and success.
              </Typography>
            </Box>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: '#fff',
                mb: 2,
              }}
            >
              Our Values
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                'Innovation & Excellence',
                'Customer-Centric Approach',
                'Integrity & Transparency',
                'Continuous Improvement',
              ].map((value) => (
                <Box
                  key={value}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                    }}
                  />
                  <Typography sx={{ color: '#a0a0a0' }}>{value}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Services Grid */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: '#fff',
              mb: 4,
              textAlign: 'center',
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    background: 'rgba(0, 212, 255, 0.05)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    p: 3,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      background: 'rgba(0, 212, 255, 0.1)',
                      border: '1px solid rgba(0, 212, 255, 0.4)',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 10px 30px rgba(0, 212, 255, 0.2)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#fff',
                      mb: 1.5,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#a0a0a0',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
