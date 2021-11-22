import { Grid } from '@mui/material';
import React from 'react';
import SkillItem from './SkillItem';
import { skills } from './skillsData';

const SkillPanel = () => {
  return (
    <Grid
      container
      sx={{ height: '100vh' }}
      spacing={3}
      justifyContent="space-around"
      alignItems="center"
    >
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          image={skill.image}
          name={skill.name}
          rating={skill.rating}
        />
      ))}
    </Grid>
  );
};

export default SkillPanel;
