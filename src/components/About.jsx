import React from 'react';
import { Box, Container, Typography, Grid, Card } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: '2.6rem', color: '#00d4ff' }} />,
    title: 'Custom Development',
    description:
      'Tailored software solutions designed to meet your unique business requirements.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: '2.6rem', color: '#00d4ff' }} />,
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions to protect your digital assets and data.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: '2.6rem', color: '#00d4ff' }} />,
    title: 'Performance & Reliability',
    description: 'Optimized systems that ensure maximum uptime and operational efficiency.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: '2.6rem', color: '#00d4ff' }} />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to ensure your operations never stop.',
  },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              letterSpacing: '-0.01em',
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
              height: '6px',
              background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
              width: '120px',
              margin: '0 auto',
              borderRadius: '3px',
            }}
          />
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: '700', color: '#fff', mb: 2 }}>
              Who We Are
            </Typography>
            <Typography variant="body1" sx={{ color: '#a0a0a0', lineHeight: 1.8, mb: 2 }}>
              Global Traders is a premier IT services company with over 15 years of industry experience. We specialize
              in delivering comprehensive technology solutions that empower businesses to thrive in the digital age.
            </Typography>

            <Typography variant="body1" sx={{ color: '#a0a0a0', lineHeight: 1.8, mb: 2 }}>
              Our team of expert professionals is dedicated to understanding your unique business challenges and delivering
              innovative solutions that drive sustainable growth and competitive advantage.
            </Typography>

            <Typography variant="body1" sx={{ color: '#a0a0a0', lineHeight: 1.8 }}>
              We pride ourselves on our commitment to excellence, customer satisfaction, and continuous innovation.
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: '700', color: '#fff', mb: 1 }}>
              Our Mission
            </Typography>
            <Box sx={{ background: 'rgba(0, 212, 255, 0.04)', borderRadius: 2, p: 3, mb: 3 }}>
              <Typography variant="body1" sx={{ color: '#a0a0a0', lineHeight: 1.8 }}>
                To provide cutting-edge IT solutions that transform businesses and enable our clients to achieve their digital
                transformation goals with confidence and success.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, color: '#fff', mb: 1 }}
          >
            Our Services
          </Typography>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    background: 'rgba(0, 212, 255, 0.03)',
                    border: '1px solid rgba(0, 212, 255, 0.08)',
                    p: 3,
                    textAlign: 'center',
                    transition: 'all 0.25s ease',
                    '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 8px 30px rgba(0,0,0,0.4)' },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#a0a0a0', lineHeight: 1.6 }}>
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
