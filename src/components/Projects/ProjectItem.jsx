import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Box
} from '@mui/material';
import React from 'react';

const ProjectItem = ({
  image,
  name,
  description,
  link,
  color,
  buttonDescription,
  skills
}) => {
  return (
    <Grid
      item
      sm={6}
      md={6}
      lg={4}
      xl={4}
      sx={{ display: 'flex' }}
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ maxWidth: 550 }}>
        <CardMedia component="img" height="auto" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            {skills.map((skill) => (
              <Chip label={skill} variant="outlined" sx={{ mr: 3 }} />
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small" href={link} color={color} target="_blank">
            {buttonDescription}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectItem;
