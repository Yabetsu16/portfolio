import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { KeyboardArrowDown } from '@mui/icons-material';
import ParticleContainer from '../ParticleContainer/ParticleContainer';

const drawerWidth = 240;

const Home = ({ open, DrawerHeader, mode }) => {
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
        <ParticleContainer theme={theme} />
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
                  color: theme.palette.mode === 'dark' ? '#03a9f4' : '#0d47a1',
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
          <Grid item xs={12} textAlign="center">
            <IconButton
              aria-label="about"
              sx={{
                mb: '10px'
              }}
              href="#about"
            >
              <KeyboardArrowDown />
            </IconButton>
            <Typography paragraph align="center">
              Scroll Down
            </Typography>
          </Grid>
        </Grid>
      </Main>
    </>
  );
};

export default Home;
