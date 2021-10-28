import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { KeyboardArrowDown } from '@mui/icons-material';
const drawerWidth = 240;

const Home = ({ open, DrawerHeader }) => {
  const theme = useTheme();
  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginRight: -drawerWidth,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      })
    })
  );
  return (
    <>
      <Main
        // @ts-ignore
        open={open}
        sx={{
          color: theme.palette.mode === 'dark' ? 'white' : 'black',
          bgcolor: theme.palette.mode === 'dark' ? 'black' : 'white'
        }}
      >
        <DrawerHeader />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: '100vh',
            width: '100vw',
            '@media screen and (max-width: 1280px)': {
              width: '95vw'
            },
            '@media screen and (max-width: 768px)': {
              width: '90vw'
            },
            '@media screen and (max-width: 280px)': {
              width: '80vw'
            }
          }}
        >
          <Grid item xs={12} textAlign="center">
            <Typography
              variant="h1"
              sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: '500' }}
            >
              Hi!
            </Typography>
            <Typography
              variant="h1"
              sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: '500' }}
            >
              I'm a{' '}
              <span
                style={{
                  color: '#1CC5FF',
                  // @ts-ignore
                  fontWeight: '800'
                }}
              >
                Web Developer
              </span>
            </Typography>
            <Typography
              variant="h1"
              sx={{ display: { xs: 'block', sm: 'none' }, fontWeight: '500' }}
            >
              Hi! I'm a
            </Typography>
            <Typography
              variant="h1"
              sx={{ display: { xs: 'block', sm: 'none' }, fontWeight: '500' }}
              color="#1CC5FF"
            >
              Web Developer
            </Typography>
          </Grid>
<<<<<<< HEAD
          <Grid item xs={12} textAlign="center">
=======
          {/* <Grid item xs={4}>
>>>>>>> 267db42e86263e221f9112341876caca4ec1a9d8
            <IconButton
              aria-label="about"
              sx={{
                mb: '10px'
              }}
              href="#about"
            >
              <KeyboardArrowDown />
            </IconButton>
<<<<<<< HEAD
=======
          </Grid>
          <Grid item xs={6}>
>>>>>>> 267db42e86263e221f9112341876caca4ec1a9d8
            <Typography paragraph align="center">
              Scroll Down
            </Typography>
          </Grid> */}
        </Grid>
      </Main>
    </>
  );
};

export default Home;
