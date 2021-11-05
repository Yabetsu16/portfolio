import React from 'react';
import { Divider, Drawer, IconButton, List } from '@mui/material';
import SidebarLink from './SidebarLink';
import {
  ChevronLeft,
  ChevronRight,
  ContactMail,
  Home,
  Info,
  Web
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const Sidebar = ({ open, handleDrawerClose, DrawerHeader }) => {
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
          <SidebarLink linkName="HOME" icon={<Home />} linkTo={'#'} />
          <SidebarLink linkName="ABOUT" icon={<Info />} linkTo={'#about'} />
          <SidebarLink
            linkName="PROJECTS"
            icon={<Web />}
            linkTo={'#projects'}
          />
          <SidebarLink
            linkName="CONTACT"
            icon={<ContactMail />}
            linkTo={'#contact'}
          />
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
