import React from 'react';
import { Box, easing, Grid, IconButton, Slide, Stack } from '@mui/material';
import SidebarLink from './SidebarLink';
import {
  Close,
  ContactMail,
  Description,
  Home,
  Info,
  Web
} from '@mui/icons-material';

const Sidebar = ({ handleClick, isOpen }) => {
  return (
    <>
      <Slide
        direction="left"
        in={isOpen}
        easing={{ enter: easing.easeInOut, exit: easing.easeInOut }}
        timeout={{
          appear: 800,
          enter: 500,
          exit: 800
        }}
      >
        <Grid container justifyContent="flex-end">
          <Box
            sx={{
              display: 'flex',
              backgroundColor: 'black',
              width: '500px',
              height: '700px'
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Stack spacing={5}>
              <SidebarLink
                linkName="HOME"
                icon={<Home sx={{ fontSize: '40px', marginRight: '5px' }} />}
              />
              <SidebarLink
                linkName="ABOUT"
                icon={<Info sx={{ fontSize: '40px', marginRight: '5px' }} />}
              />
              <SidebarLink
                linkName="PROJECTS"
                icon={<Web sx={{ fontSize: '40px', marginRight: '5px' }} />}
              />
              <SidebarLink
                linkName="RESUME"
                icon={
                  <Description sx={{ fontSize: '40px', marginRight: '5px' }} />
                }
              />
              <SidebarLink
                linkName="CONTACT"
                icon={
                  <ContactMail sx={{ fontSize: '40px', marginRight: '5px' }} />
                }
              />
            </Stack>
            <IconButton
              aria-label="close"
              sx={{
                border: '0.5px white solid',
                color: 'white',
                fontSize: '40px',
                marginLeft: '50px'
              }}
              onClick={(e) => handleClick(e)}
            >
              <Close />
            </IconButton>
          </Box>
        </Grid>
      </Slide>
    </>
  );
};

export default Sidebar;
