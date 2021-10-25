import { Menu } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navbar = ({ handleClick, isOpen }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center">
              <img
                src="https://i.postimg.cc/qq13CgJd/Yabetsu-White.png"
                alt="Yabetsu"
                height="64px"
                width="64px"
              />
              <Typography variant="h4">
                <strong>Yabetsu</strong>
              </Typography>
            </Box>
            {!isOpen && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={(e) => handleClick(e)}
              >
                <Menu />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
