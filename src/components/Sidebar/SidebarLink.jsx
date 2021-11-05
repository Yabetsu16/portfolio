// @ts-nocheck
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const SidebarLink = ({ linkName, linkTo, icon }) => {
  return (
    <>
      <ListItemButton component="a" button key={linkName} href={linkTo}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={linkName} />
      </ListItemButton>
    </>
  );
};

export default SidebarLink;
