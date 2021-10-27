import { Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import profilePicture from './profile.jpg';

const ProfilePanel = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      sx={{ height: '100vh' }}
      spacing={3}
      direction="row"
    >
      <Grid item sm={8} md={4} lg={3} xl={2}>
        <Card
          sx={{
            minWidth: 'auto',
            border: '10px solid',
            borderColor: theme.palette.mode === 'dark' ? 'white' : '#616060'
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: '100%'
            }}
            image={profilePicture}
            alt="Profile"
          />
          <Typography
            variant="h6"
            align="center"
            sx={{
              display: { sm: 'block', md: 'none' },
              backgroundColor:
                theme.palette.mode === 'dark' ? 'white' : '#616060',
              color: theme.palette.mode === 'dark' ? 'black' : 'white'
            }}
          >
            Jabez Joshua Bondoc
          </Typography>
        </Card>
      </Grid>
      <Grid item sm={10} md={7} lg={5} xl={4}>
        <Typography
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' }
          }}
          variant="h3"
        >
          Jabez Joshua Bondoc
        </Typography>
        <Typography paragraph mt={5}>
          I am a passionate IT Professional with a Bachelor's degree in
          Information Technology with a major in Web Development, looking for a
          company where I can design excellent web applications and enhance my
          skill set. I'm familiar with HTML, CSS, JavaScript, PHP, MySQL,
          Bootstrap UI, and the fundamentals of Vue and React. and I also have
          game development experience using Unity3D and C#.
        </Typography>
        <Typography
          sx={{
            display: { sm: 'block', md: 'none' }
          }}
          variant="h6"
          mt={5}
          align="center"
        >
          Education
        </Typography>
        <Typography
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' }
          }}
          variant="h4"
          mt={5}
        >
          Education
        </Typography>
        <Typography paragraph mt={5}>
          AMA Computer College / Bachelor of Science in Information Technology
          (Web Development) MAY 2015 - MAY 2019, Caloocan City
        </Typography>
        <Button
          variant="text"
          sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'primary' }}
        >
          See Projects
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfilePanel;
