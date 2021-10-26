import { Menu } from '@mui/icons-material';
import { IconButton, Toolbar, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import React from 'react';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
  // @ts-ignore
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  })
}));

const Navbar = ({ open, handleDrawerOpen }) => {
  return (
    <>
      <AppBar
        position="fixed"
        // @ts-ignore
        open={open}
      >
        <Toolbar>
          <img
            src="https://i.postimg.cc/qq13CgJd/Yabetsu-White.png"
            alt="Yabetsu"
            height="64px"
            width="64px"
          />
          <Typography variant="h4" noWrap sx={{ flexGrow: 1 }} component="div">
            Yabetsu
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
