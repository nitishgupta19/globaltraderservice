import React from 'react';
import { Box, Container, Grid, Typography, Link, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)',
        color: '#fff',
        py: 5,
        mt: 8,
        borderTop: '1px solid rgba(0, 212, 255, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Global Traders
            </Box>
            <Typography
              variant="body2"
              sx={{ color: '#b0b0b0', lineHeight: 1.8 }}
            >
              Professional IT Services Company providing comprehensive solutions
              for your business needs.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 'bold', color: '#00d4ff' }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'About Us', 'Contact Us'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: '#b0b0b0',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#00d4ff',
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 'bold', color: '#00d4ff' }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <EmailIcon
                  sx={{ color: '#00d4ff', mt: 0.5, flexShrink: 0 }}
                />
                <Box>
                  <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                    <Link
                      href="mailto:info.globaltraders.info@gmail.com"
                      sx={{
                        color: 'inherit',
                        textDecoration: 'none',
                        '&:hover': { color: '#00d4ff' },
                      }}
                    >
                      info.globaltraders.info@gmail.com
                    </Link>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <LocationOnIcon
                  sx={{ color: '#00d4ff', mt: 0.5, flexShrink: 0 }}
                />
                <Box>
                  <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                    M/S Global Traders, Building no-563, Third Floor, Shop No.
                    T-40, Gali Bhel Sahib Mori Gate, Delhi 110006
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            pt: 3,
            mt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#808080' }}>
            © {currentYear} Global Traders. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
