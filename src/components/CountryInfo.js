import React from 'react';
import CountryInfoItem from 'src/components/CountryInfoItem';
import CountryInfoList from 'src/components/CountryInfoList';
import { MyLocation, Map, People, Public, Language } from '@material-ui/icons';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  makeStyles,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';

const CountryInfo = ({ selected }) => {
  const useStyles = makeStyles({
    root: {
      height: '100%',
      flexGrow: 1,
    },
    media: {
      height: 190,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {selected && (
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={selected.flag}
              title={`${selected.name} flag`}
            />
            <CardContent>
              <Typography gutterBottom variant={'h5'} component={'h2'}>
                {selected.name}
              </Typography>
              <Grid container spacing={2} direction="row">
                <CountryInfoItem
                  title={' Capital: '}
                  icon={<MyLocation />}
                  info={selected.capital}
                />
                <Divider orientation={'vertical'} flexItem />
                <CountryInfoItem
                  title={' Population: '}
                  icon={<People />}
                  info={`${selected.population} citizens`}
                />
                <Divider orientation={'vertical'} flexItem />
                <CountryInfoItem
                  title={' Region: '}
                  icon={<Public />}
                  info={selected.region}
                />
                <Divider orientation={'vertical'} flexItem />
                <CountryInfoItem
                  title={' Subregion: '}
                  icon={<Map />}
                  info={selected.subregion}
                />
              </Grid>
              <Grid container spacing={2} direction="row">
                <CountryInfoList
                  title={' Languages: '}
                  icon={<Language />}
                  info={selected.languages}
                />
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default CountryInfo;
