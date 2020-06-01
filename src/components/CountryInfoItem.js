import React from 'react';
import { SvgIcon, Card, makeStyles, Typography, Grid } from '@material-ui/core';

const CountryInfoItem = ({ icon, title, info }) => {
  const useStyles = makeStyles({
    icon: {
      fontSize: '1.0rem',
      position: 'relative',
      top: 2,
    },
    item: {
      maxWidth: '24%',
    },
  });

  const classes = useStyles();

  return (
    <Grid item xs={3} className={classes.item}>
      <Card elevation={0}>
        <Typography variant="subtitle1">
          <SvgIcon className={classes.icon}>{icon}</SvgIcon>
          {title}
        </Typography>
        <Typography variant="body2">{info}</Typography>
      </Card>
    </Grid>
  );
};

export default CountryInfoItem;
