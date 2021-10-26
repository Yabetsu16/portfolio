import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
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
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100vh', width: '100vw' }}
        >
          <Grid item>
            <Stack spacing={3} textAlign="center">
              <Typography variant="h1" sx={{ fontWeight: '500' }}>
                Hi!
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: '500' }}>
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
            </Stack>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="delete"
              sx={{
                mb: '10px'
              }}
              href="#about"
            >
              <KeyboardArrowDown />
            </IconButton>
          </Grid>
          <Grid item>
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
