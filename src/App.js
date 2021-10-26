import { Box, createTheme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { styled } from '@mui/material/styles';

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
          primary: {
            main: '#0d47a1'
          },
          secondary: {
            main: '#1a237e'
          }
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
        <Box sx={{ display: 'flex' }}>
          <Navbar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            ColorModeContext={ColorModeContext}
          />
          <Home open={open} DrawerHeader={DrawerHeader} />
          <Sidebar
            open={open}
            handleDrawerClose={handleDrawerClose}
            DrawerHeader={DrawerHeader}
          />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
