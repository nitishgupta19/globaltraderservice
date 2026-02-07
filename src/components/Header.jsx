import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import { useState } from 'react';

const Header = ({ onNavigate }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ['Home', 'About', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => {
                onNavigate(item);
                setMobileOpen(false);
              }}
              sx={{
                color: 'inherit',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #0f1729 100%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 212, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
            transition: 'all 0.3s ease',
          }}
        >
          <Box
            sx={{
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              fontStyle: 'bold',
              background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                filter: 'brightness(1.1)',
              },
            }}
            onClick={() => onNavigate('Home')}
          >
            <PublicIcon 
              sx={{ 
                fontSize: '1.8rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'rotate(20deg) scale(1.1)',
                },
              }} 
            />
            Global Traders
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                  sx: {
                    backgroundColor: '#0f1729',
                    backdropFilter: 'blur(10px)',
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, ml: 'auto' }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => onNavigate(item)}
                  sx={{
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.3px',
                    fontStyle: 'normal',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #00d4ff, #00f0ff)',
                      boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
