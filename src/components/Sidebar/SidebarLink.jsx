import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const SidebarLink = ({ linkName, icon }) => {
  return (
    <>
      <ListItem button key={linkName}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={linkName} />
      </ListItem>
    </>
  );
};

export default SidebarLink;
