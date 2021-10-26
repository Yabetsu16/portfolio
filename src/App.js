import { Box, createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

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
          <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
