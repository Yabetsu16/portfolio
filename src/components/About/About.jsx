import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import AboutPanel from './AboutPanel';
import ProfilePanel from './Profile/ProfilePanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const About = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div
        id="about"
        style={{
          padding: '60px',
          backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white'
        }}
      >
        <Typography
          sx={{
            color: theme.palette.mode === 'dark' ? 'white' : 'black'
          }}
          variant="h3"
          align="center"
        >
          ABOUT
        </Typography>
      </div>
      <Box
        sx={{
          width: '100%',
          color: theme.palette.mode === 'dark' ? 'white' : 'black',
          bgcolor: theme.palette.mode === 'dark' ? 'black' : 'white'
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="about tabs"
            centered
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Achievements" {...a11yProps(1)} />
            <Tab label="Skills" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <AboutPanel value={value} index={0}>
          <ProfilePanel />
        </AboutPanel>
        <AboutPanel value={value} index={1}>
          Item Two
        </AboutPanel>
        <AboutPanel value={value} index={2}>
          Item Three
        </AboutPanel>
      </Box>
    </>
  );
};

export default About;
