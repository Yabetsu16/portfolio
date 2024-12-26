import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material';
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
      {/* Image */}
      <Grid item xs={10} sm={6} md={3} lg={3} xl={2}>
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
      {/* Description */}
      <Grid item xs={12} sm={6} md={6} lg={5} xl={6}>
        {/* Name */}
        <Typography
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' }
          }}
          variant="h3"
        >
          Jabez Joshua Bondoc
        </Typography>
        {/* Objective */}
        <Typography paragraph mt={2}>
        Highly skilled Application Systems Engineer with 2 years of experience in designing, developing, and implementing 
        software systems. I deliver high-quality solutions on time, 
        with a focus on scalability, reliability, and maintainability. 
        I am skilled in debugging and troubleshooting code to ensure optimal performance and functionality. 
        I have used multiple programming languages and frameworks, including ASP.NET, VB.NET, PHP, and SQL. 
        I am constantly evolving my skills and staying up-to-date with emerging technologies to drive 
        continuous improvement and innovation.
        </Typography>
        {/* Education */}
        <Typography
          sx={{
            display: { sm: 'block', md: 'none' }
          }}
          variant="h6"
          align="center"
        >
          Education
        </Typography>
        <Typography
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' }
          }}
          variant="h4"
          mt={2}
        >
          Education
        </Typography>
        <Typography paragraph mt={2}>
          <span
            style={{
              // @ts-ignore
              fontWeight: '700'
            }}
          >
            AMA Computer College / Bachelor of Science in Information Technology
            (Web Development)
          </span>
        </Typography>
        <Typography paragraph>MAY 2015 - MAY 2019, Caloocan City</Typography>
        {/* Button for desktop */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
            textAlign: 'center'
          }}
        >
          <Button
            href="#projects"
            variant="outlined"
            sx={{
              color: theme.palette.mode === 'dark' ? 'white' : 'primary'
            }}
          >
            See Projects
          </Button>
          <Button
            variant="outlined"
            href="https://docs.google.com/document/d/e/2PACX-1vQjur-wwvYVry6RxhMUjxQZWZ25a5z2IUVU5qvjrw3CE2OTPru04Skt7KEcSv0DzUnX3yr7YDAMQo3N/pub"
            target="_blank"
            sx={{
              color: theme.palette.mode === 'dark' ? 'white' : 'primary',
              marginLeft: 5
            }}
          >
            See Resume
          </Button>
        </Box>
      </Grid>
      {/* Experience list for desktop */}
      <Grid
        item
        md={3}
        lg={2}
        sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      >
        <Typography variant="h4">Experience</Typography>
        <Typography paragraph mt={2}>
          <span
            style={{
              // @ts-ignore
              fontWeight: '700'
            }}
          >
            Freelance Web Developer
          </span>{' '}
        </Typography>
        <Typography paragraph>JUNE 2020 - PRESENT, Malabon City</Typography>
        {/* <Typography paragraph mt={2}>
          <span
            style={{
              // @ts-ignore
              fontWeight: '700'
            }}
          >
            Church in Malabon / Web Developer
          </span>{' '}
        </Typography>
        <Typography paragraph>AUGUST 2019 - MAR 2020, Malabon City</Typography> */}
        <Typography paragraph mt={2}>
          <span
            style={{
              // @ts-ignore
              fontWeight: '700'
            }}
          >
            SPEDI INC. / IT Internship
          </span>{' '}
        </Typography>
        <Typography paragraph>SEPT 2017 - FEB 2018, Quezon City</Typography>
      </Grid>
      {/* Experience list for mobile devices */}
      <Grid
        item
        xs={12}
        sm={12}
        sx={{ display: { sm: 'block', md: 'none' } }}
        textAlign="center"
      >
        <Typography variant="h6">Experience</Typography>
        <Typography paragraph mt={2}>
          <span
            style={{
              // @ts-ignore
              fontWeight: '700'
            }}
          >
            Freelance Web Developer
          </span>{' '}
        </Typography>
        <Typography paragraph>JUNE 2020 - PRESENT, Malabon City</Typography>
        {/* <Typography paragraph>
          <span
            style={{
              // @ts-ignore
              fontWeight: '700'
            }}
          >
            Church in Malabon / Web Developer
          </span>{' '}
        </Typography>
        <Typography paragraph>AUGUST 2019 - MAR 2020, Malabon City</Typography> */}
        <Typography paragraph>
          <span
            style={{
              // @ts-ignore
              fontWeight: '700'
            }}
          >
            SPEDI INC. / IT Internship
          </span>{' '}
        </Typography>
        <Typography paragraph>SEPT 2017 - FEB 2018, Quezon City</Typography>
        {/* Button for mobile */}
        <Box sx={{ display: { sm: 'block', md: 'none' }, textAlign: 'center' }}>
          <Button
            variant="outlined"
            href="#projects"
            sx={{
              color: theme.palette.mode === 'dark' ? 'white' : 'primary'
            }}
          >
            See Projects
          </Button>
          <Button
            variant="outlined"
            href="https://docs.google.com/document/d/e/2PACX-1vQjur-wwvYVry6RxhMUjxQZWZ25a5z2IUVU5qvjrw3CE2OTPru04Skt7KEcSv0DzUnX3yr7YDAMQo3N/pub"
            target="_blank"
            sx={{
              color: theme.palette.mode === 'dark' ? 'white' : 'primary',
              marginLeft: 5
            }}
          >
            See Resume
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfilePanel;
