import { Box, createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const theme = createTheme({
    // @ts-ignore
    palette: {
      // @ts-ignore
      mode: 'dark',
      primary: {
        main: '#0d47a1'
      },
      secondary: {
        main: '#1a237e'
      }
    }
  });
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
