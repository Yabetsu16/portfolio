import React from 'react';
import { Divider, Drawer, IconButton, List } from '@mui/material';
import SidebarLink from './SidebarLink';
import {
  ChevronLeft,
  ChevronRight,
  ContactMail,
  Description,
  Home,
  Info,
  Web
} from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}));

const Sidebar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth
          }
        }}
        variant="persistent"
        anchor="right"
        // @ts-ignore
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <SidebarLink linkName="HOME" icon={<Home />} />
          <SidebarLink linkName="ABOUT" icon={<Info />} />
          <SidebarLink linkName="PROJECTS" icon={<Web />} />
          <SidebarLink linkName="RESUME" icon={<Description />} />
          <SidebarLink linkName="CONTACT" icon={<ContactMail />} />
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
