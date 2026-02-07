import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const quickLinks = ['Home', 'About', 'Services', 'Contact'];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        backdropFilter: 'blur(6px)',
        background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)',
        color: '#fff',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4} sx={{ width: "40%"}}>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 1 }}>
              Global Traders
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', lineHeight: 1.8 }}>
              Professional IT services delivering tailored solutions and continuous support to help your business grow.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ width: "20%", marginLeft: "5%"}}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#00d4ff' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} sx={{ color: '#b0b0b0', textDecoration: 'none' }}>
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ width: "30%"}}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#00d4ff' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <EmailIcon sx={{ color: '#00d4ff' }} />
                <Link href="mailto:info.globaltraders.info@gmail.com" sx={{ color: '#b0b0b0', textDecoration: 'none' }}>
                  info.globaltraders.info@gmail.com
                </Link>
              </Box>

              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <LocationOnIcon sx={{ color: '#00d4ff' }} />
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                  M/S Global Traders, Building no-563, Third Floor, Shop No. T-40, Gali Bhel Sahib Mori Gate, Delhi 110006
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.04)', pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#808080' }}>
            © {currentYear} Global Traders. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
