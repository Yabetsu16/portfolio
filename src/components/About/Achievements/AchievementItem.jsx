import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const AchievementItem = ({
  label,
  letter,
  title,
  subheader,
  image,
  issuedBy,
  issuedDate,
  link
}) => {
  const theme = useTheme();
  return (
    <Grid
      item
      sm={6}
      md={6}
      lg={4}
      xl={3}
      sx={{ display: 'flex' }}
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: theme.palette.mode === 'dark' ? '#FFF' : '#000'
              }}
              aria-label={label}
            >
              {letter}
            </Avatar>
          }
          title={title}
          subheader={subheader}
        />
        <CardMedia component="img" height="auto" image={image} alt={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="center">
            Issued By: {issuedBy}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Issued Date: {issuedDate}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button variant="text" href={link} target="_blank">
            See Credential
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AchievementItem;
