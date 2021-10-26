import { Button, Typography } from '@mui/material';
import React from 'react';

const SidebarLink = ({ linkName, icon }) => {
  return (
    <>
      <Button
        sx={{ color: 'white', justifyContent: 'flex-start' }}
        size="large"
        variant="text"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        {icon}
        <Typography variant="h4">{linkName}</Typography>
      </Button>
    </>
  );
};

export default SidebarLink;
