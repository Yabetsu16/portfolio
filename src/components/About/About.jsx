import { Box, Typography, Tabs, Tab } from '@mui/material';
import React from 'react';
import AboutPanel from './AboutPanel';
import ProfilePanel from './ProfilePanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const About = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div id="about" style={{ margin: '60px' }}></div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
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
