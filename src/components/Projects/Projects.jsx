import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import ProjectItem from './ProjectItem';
import voyageToTheDeep from './voyage_to_the_deep.jpg';
import rrdnTruckingServices from './rrdntruckingservices.png';
import portfolio from './portfolio.png';
import cryptoverse from './cryptoverse.png';

const Projects = () => {
  const theme = useTheme();
  return (
    <>
      <div
        id="projects"
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
          PROJECTS
        </Typography>
      </div>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          color: theme.palette.mode === 'dark' ? 'white' : 'black',
          bgcolor: theme.palette.mode === 'dark' ? 'black' : 'white'
        }}
      >
        <Grid
          container
          justifyContent="space-around"
          sx={{ height: '100vh' }}
          direction="row"
          spacing={3}
        >
          <ProjectItem
            image={voyageToTheDeep}
            projectName={'Voyage to the Deep'}
            description={
              'Voyage to the Deep is a 2.5D metroidvania game ' +
              'for android a project for our capstone. ' +
              'We are a three member group and my role is ' +
              'gameplay programmer and my two other groupmates are for 2D and 3D art'
            }
            link={
              'https://play.google.com/store/apps/details?id=com.JJP.VoyagetotheDeep'
            }
            buttonDescription={'Go to Playstore'}
            skills={['C#', 'Unity']}
          />
          <ProjectItem
            image={rrdnTruckingServices}
            projectName={'RRDN Trucking Services'}
            description={
              'RRDN Trucking Services is a Quoting and Custom CMS Website. ' +
              'This project is my first project as a freelance web developer. ' +
              'I used PHP for backend, MySQL for database and Bootstrap 4 for the UI.'
            }
            link={'http://rrdntruckingservices.ph/'}
            buttonDescription={'Go to the Website'}
            skills={['PHP', 'MDBootstrap 4', 'MySQL']}
          />
          <ProjectItem
            image={portfolio}
            projectName={'Yabetsu Portfolio'}
            description={
              'Yabetsu Portfolio is a my self portfolio project. ' +
              'This project is my first project using ReactJS as frontend framework. ' +
              'I also used Material UI 5 as my UI framework.'
            }
            link={'#'}
            buttonDescription={'Go to the Website'}
            skills={['React JS', 'MUI 5']}
          />
          <ProjectItem
            image={cryptoverse}
            projectName={'Cryptoverse'}
            description={
              'Cryptoverse is a prototype project about crypto. ' +
              'I used ReactJS as frontend framework and Ant Design for the UI.' +
              'I also used the free version of coinranking api for the content of the project.'
            }
            link={'https://cryptoverse-project.netlify.app/'}
            buttonDescription={'Go to the Website'}
            skills={['React JS', 'AntDesign', 'Axios']}
          />
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
