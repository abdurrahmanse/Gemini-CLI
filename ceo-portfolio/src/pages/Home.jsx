import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          A showcase of my journey, projects, and vision as a leader in the industry.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button component={Link} to="/portfolio" variant="contained">
            View My Work
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;