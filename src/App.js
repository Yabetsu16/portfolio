import { Box, createTheme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { styled } from '@mui/material/styles';
import About from './components/About/About';
import { grey, lightBlue } from '@mui/material/colors';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // @ts-ignore
          mode: mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                  main: '#0d47a1'
                },
                secondary: {
                  main: '#1a237e'
                },
                divider: 'rgba(0, 0, 0, 0.12)',
                text: {
                  primary: grey[900],
                  secondary: grey[800]
                }
              }
            : {
                // palette values for dark mode
                primary: lightBlue,
                divider: 'rgba(255, 255, 255, 0.12)',
                background: {
                  default: '#121212',
                  paper: '#121212'
                },
                text: {
                  primary: '#fff',
                  secondary: 'rgba(255, 255, 255, 0.7)'
                }
              })
        }
      }),
    [mode]
  );

  theme.typography.h1 = {
    '@media (min-width:600px)': {
      fontSize: '3rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '7rem'
    }
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  }));

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            ColorModeContext={ColorModeContext}
          />
          <Home open={open} DrawerHeader={DrawerHeader} mode={mode} />
          <Sidebar
            open={open}
            handleDrawerClose={handleDrawerClose}
            DrawerHeader={DrawerHeader}
          />
          <About />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
