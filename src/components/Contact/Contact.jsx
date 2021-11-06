import { GitHub, LinkedIn, Send } from '@mui/icons-material';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import emailApiKey from '../../emailkey';

const Contact = () => {
  const theme = useTheme();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailApiKey.SERVICE_ID,
        emailApiKey.TEMPLATE_ID,
        formRef.current,
        emailApiKey.USER_ID
      )
      .then(
        (result) => {
          alert('Message sent!');
          console.log(result.text);
        },
        (error) => {
          alert('An error occurred!');
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div
        id="contact"
        style={{
          padding: '60px',
          backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white'
        }}
      >
        <Typography
          sx={{
            color: theme.palette.mode === 'dark' ? 'white' : 'black'
          }}
          variant="h3"
          align="center"
        >
          CONTACT
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
        >
          If you have questions just email me on the following.
        </Typography>
        <Box sx={{ textAlign: 'center' }} mt="20px">
          <LinkedIn
            fontSize="large"
            color="primary"
            sx={{ marginRight: '5px' }}
          />
          <GitHub
            fontSize="large"
            sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
          />
        </Box>
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={5}
          sx={{
            backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white'
          }}
        >
          <Grid item xs={10} md={5} lg={5}>
            <TextField
              required
              id="firstname"
              name="firstname"
              label="First Name"
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={10} md={5} lg={5}>
            <TextField
              required
              id="lastname"
              name="lastname"
              label="Last Name"
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={10} md={5} lg={5}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={10} md={5} lg={5}>
            <TextField
              required
              id="subject"
              name="subject"
              label="Subject"
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={10} md={11}>
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              multiline
              rows={6}
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item md={12} lg={12} sx={{ textAlign: 'center' }} mb="40px">
            <Button
              type="submit"
              variant="contained"
              endIcon={<Send />}
              size="large"
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Contact;
