import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: <EmailIcon sx={{ fontSize: '2.5rem', color: '#00d4ff' }} />,
      title: 'Email',
      value: 'info.globaltraders.info@gmail.com',
      link: 'mailto:info.globaltraders.info@gmail.com',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: '2.5rem', color: '#00d4ff' }} />,
      title: 'Address',
      value: 'M/S Global Traders, Building no-563, Third Floor, Shop No. T-40, Gali Bhel Sahib Mori Gate, Delhi 110006',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: '2.5rem', color: '#00d4ff' }} />,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #0a0e27 0%, #0f1729 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
        //   bottom: '-50%',
        //   right: '-10%',
          width: '100%',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="100%">
        {/* Section Title */}
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
            Get In Touch
          </Typography>
          <Box
            sx={{
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
              width: '100px',
              margin: '0 auto',
              borderRadius: '2px',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)',
            }}
          />
        </Box>

        <Grid container spacing={2} sx={{ mb: 6, justifyContent: 'center', width: '100%' }}>
          {/* Contact Information */}
          <Grid item xs={12} md={5} sx={{ width: '30%' }}>
            <Typography
              variant="h5"
              sx={{
                fontStyle: 'bold',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#fff',
                mb: 4,
              }}
            >
              Contact Information
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  sx={{
                    background: 'rgba(0, 212, 255, 0.08)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    p: 3,
                    display: 'flex',
                    gap: 2,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      background: 'rgba(0, 212, 255, 0.15)',
                      border: '1px solid rgba(0, 212, 255, 0.4)',
                      transform: 'translateX(8px)',
                      boxShadow: '0 8px 24px rgba(0, 212, 255, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ flexShrink: 0 }}>{method.icon}</Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontStyle: 'bold',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                        color: '#fff',
                        mb: 0.5,
                      }}
                    >
                      {method.title}
                    </Typography>
                    {method.link ? (
                      <Typography
                        component="a"
                        href={method.link}
                        sx={{
                          color: '#00d4ff',
                          textDecoration: 'none',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {method.value}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          color: '#b0b0c0',
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {method.value}
                      </Typography>
                    )}
                  </Box>
                </Card>
              ))}
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={5} sx={{ width: '50%' }}>
            <Card
              sx={{
                background: 'rgba(0, 212, 255, 0.08)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                backdropFilter: 'blur(15px)',
                p: 4,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontStyle: 'bold',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: '#fff',
                  mb: 3,
                }}
              >
                Send Us a Message
              </Typography>

              {submitted && (
                <Alert
                  severity="success"
                  sx={{
                    mb: 3,
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    color: '#4CAF50',
                    border: '1px solid rgba(76, 175, 80, 0.3)',
                    borderRadius: '10px',
                  }}
                >
                  Thank you for your message! We will get back to you soon.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(0, 212, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 212, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00d4ff',
                        },
                      },
                      '& .MuiOutlinedInput-input::placeholder': {
                        color: '#606060',
                        opacity: 1,
                      },
                      '& .MuiInputBase-input': {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        borderRadius: '4px',
                      },
                      '& .MuiInputLabel-root': {
                        color: '#a0a0a0',
                        '&.Mui-focused': {
                          color: '#00d4ff',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(0, 212, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 212, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00d4ff',
                        },
                      },
                      '& .MuiOutlinedInput-input::placeholder': {
                        color: '#606060',
                        opacity: 1,
                      },
                      '& .MuiInputBase-input': {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        borderRadius: '4px',
                      },
                      '& .MuiInputLabel-root': {
                        color: '#a0a0a0',
                        '&.Mui-focused': {
                          color: '#00d4ff',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(0, 212, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 212, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00d4ff',
                        },
                      },
                      '& .MuiOutlinedInput-input::placeholder': {
                        color: '#606060',
                        opacity: 1,
                      },
                      '& .MuiInputBase-input': {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        borderRadius: '4px',
                      },
                      '& .MuiInputLabel-root': {
                        color: '#a0a0a0',
                        '&.Mui-focused': {
                          color: '#00d4ff',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(0, 212, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 212, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00d4ff',
                        },
                      },
                      '& .MuiOutlinedInput-input::placeholder': {
                        color: '#606060',
                        opacity: 1,
                      },
                      '& .MuiInputBase-input': {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        borderRadius: '4px',
                      },
                      '& .MuiInputLabel-root': {
                        color: '#a0a0a0',
                        '&.Mui-focused': {
                          color: '#00d4ff',
                        },
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      background:
                        'linear-gradient(135deg, #00d4ff, #0099ff)',
                      color: '#000',
                      fontWeight: 'bold',
                      py: 1.5,
                      fontSize: '1rem',
                      mt: 1,
                      '&:hover': {
                        background:
                          'linear-gradient(135deg, #0099ff, #0077dd)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(0, 212, 255, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    endIcon={<SendIcon />}
                  >
                    Send Message
                  </Button>
                </Box>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
