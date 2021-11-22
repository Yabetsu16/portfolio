import { Grid } from '@mui/material';
import React from 'react';
import AchievementItem from './AchievementItem';
import { achievements } from './achievementsData';

const AchievementsPanel = () => {
  return (
    <Grid
      container
      justifyContent="space-around"
      sx={{ height: '100vh' }}
      direction="row"
      spacing={3}
    >
      {achievements.map((achievement, index) => (
        <AchievementItem
          key={index}
          label={achievement.label}
          title={achievement.title}
          image={achievement.image}
          issuedBy={achievement.issuedBy}
          issuedDate={achievement.issuedDate}
          subheader={achievement.subheader}
          link={achievement.link}
        />
      ))}
    </Grid>
  );
};

export default AchievementsPanel;
