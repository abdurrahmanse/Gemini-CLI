import React from 'react';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Avatar
            alt="CEO Name"
            src="/ceo-image.jpg" // Replace with the actual image path
            sx={{ width: 200, height: 200, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sodales, urna eu vulputate el, nisl nunc varius nisl, vitae
            aliquam nisl nunc eget nisl. Donec euismod, nisl eget consectetur
            interdum, nisl nunc varius nisl, vitae aliquam nisl nunc eget
            nisl.
          </Typography>
          <Typography variant="body1" paragraph>
            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id
            elit.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;