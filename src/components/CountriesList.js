import React from 'react';
import { List, MenuItem, ListItemText, Divider } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const CountriesList = ({ countries, name, callback }) => {
  const countryName = name.toLowerCase();
  const list = countries.filter(
    (country) =>
      countryName === '' || country.name.toLowerCase().includes(countryName)
  );
  const results = list.length;

  const handleClick = (country) => {
    callback(country);
  };

  if (results === 0) {
    return <Alert severity={'warning'}>No results found!</Alert>;
  }

  if (results <= 10) {
    return (
      <List>
        {list.map((country, id) => (
          <div key={id}>
            <MenuItem onClick={() => handleClick(country)}>
              <ListItemText primary={country.name}/>
            </MenuItem>
            <Divider />
          </div>
        ))}
      </List>
    );
  }

  return (
    <Alert severity={'info'}>Type a country name to know more details</Alert>
  );
};

export default CountriesList;
