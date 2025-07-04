import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <form>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;