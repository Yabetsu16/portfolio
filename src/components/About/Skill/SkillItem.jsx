import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const labels = {
  0.5: 'Not learned',
  1: 'Still learning',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
};

const SkillItem = ({ image, skillName, rating }) => {
  return (
    <Grid item>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 'auto' }}
          image={image}
          alt={skillName}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 1 auto' }}>
            <Typography component="div" variant="h5">
              {skillName}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
            <Box sx={{ ml: 2 }}>{labels[rating]}</Box>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default SkillItem;
