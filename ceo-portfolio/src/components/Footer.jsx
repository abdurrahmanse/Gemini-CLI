import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          CEO Name
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Leading with vision and innovation.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;