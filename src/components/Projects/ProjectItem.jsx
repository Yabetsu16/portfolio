import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import React from 'react';

const ProjectItem = ({
  image,
  projectName,
  description,
  link,
  buttonDescription
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
        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt={projectName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small" href={link} target="_blank">
            {buttonDescription}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectItem;
