import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the first project.',
    image: '/project1.jpg', // Replace with actual image path
  },
  {
    title: 'Project Two',
    description: 'A brief description of the second project.',
    image: '/project2.jpg', // Replace with actual image path
  },
  {
    title: 'Project Three',
    description: 'A brief description of the third project.',
    image: '/project3.jpg', // Replace with actual image path
  },
];

const Portfolio = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;