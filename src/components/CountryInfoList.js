import React from 'react';
import {
  Grid,
  Card,
  Typography,
  SvgIcon,
  List,
  ListItem,
  makeStyles,
  ListItemText,
} from '@material-ui/core';

const CountryInfoList = ({ icon, title, info }) => {
  const useStyles = makeStyles({
    icon: {
      fontSize: '1.0rem',
      position: 'relative',
      top: 2,
    },
    item: {
      maxWidth: '25%',
    },
    list: {
      listStyleType: 'circle !important',
    },
  });

  const classes = useStyles();

  return (
    <Grid item xs={3} className={classes.item}>
      <Card elevation={0}>
        <List
          subheader={
            <Typography variant="subtitle1">
              <SvgIcon className={classes.icon}>{icon}</SvgIcon>
              {title}
            </Typography>
          }
        >
          {info.map((lan, id) => (
            <ListItem key={id} alignItems={'flex-start'}>
              <ListItemText
                primary={<Typography variant="body2">{lan.name}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </Grid>
  );
};

export default CountryInfoList;
