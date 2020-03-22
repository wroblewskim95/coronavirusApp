import { elements, delateSpinner, showError } from '../views/base';
export const getAllCountries = async () => {
  try {
    const res = await fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        'x-rapidapi-key': 'b534b74c67mshfa97c3430dac3d0p1e3c3djsn3ecbae70b67f',
      },
    });
    const data = await res.json();
    return data.data.covid19Stats;
  } catch (err) {
    console.log('The server is not responding. Unable to retrieve data from the API.');
  }
};

export const getCountry = async country => {
  try {
    const res = await fetch(`https://covid-19-corsdasdlkkaslasonavirus-statistics.p.rapidapi.com/v1/stats?country=${country}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        'x-rapidapi-key': 'b534b74c67mshfa97c3430dac3d0p1e3c3djsn3ecbae70b67f',
      },
    });
    const data = await res.json();
    return data.data.covid19Stats;
  } catch (err) {
    console.log('The server is not responding. Unable to retrieve data from the API.');
    // I don't know why I can't use it as catch after then in index.js
    delateSpinner(elements.countryResults);
    showError('Oops, something went wrong. Try to refresh the page again.', elements.countryResults);
  }
};
