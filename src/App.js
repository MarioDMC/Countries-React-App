import React, { useEffect, useState } from 'react';
import CountriesList from 'src/components/CountriesList';
import CountryInfo from 'src/components/CountryInfo';
import { getAPI } from 'src/actions/apiActions';
import { Grid, TextField } from '@material-ui/core';

function App() {
  const [countriesList, setCountries] = useState([{}]);
  const [countryName, setCountryName] = useState('');
  const [countrySelected, setCountrySelected] = useState();

  useEffect(() => {
    const url = 'https://restcountries.eu/rest/v2/all';
    getAPI(url).then((countries) => {
      setCountries(countries);
    });
  }, []);

  const handleChange = (event) => {
    const name = event.target.value;
    setCountryName(name);
  };

  const handleSelected = (country) => {
    setCountrySelected(country);
    setCountryName('');
    console.log(country);
  };

  return (
    <div>
      {countriesList && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={'Search for a country: '}
              onChange={handleChange}
              value={countryName}
            />
          </Grid>
          <Grid item xs={4}>
            <CountriesList
              countries={countriesList}
              name={countryName}
              callback={handleSelected}
            />
          </Grid>
          <Grid item xs={8}>
            {countrySelected && <CountryInfo selected={countrySelected} />}
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;
