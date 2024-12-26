import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import ProjectItem from './ProjectItem';

import { projects } from './projectsData';

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
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              image={project.image}
              name={project.name}
              description={project.description}
              link={project.link}
              color={project.color}
              buttonDescription={project.buttonDescription}
              skills={project.skills}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
