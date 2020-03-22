export const getAllCountries = async () => {
  const res = await fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
      'x-rapidapi-key': 'b534b74c67mshfa97c3430dac3d0p1e3c3djsn3ecbae70b67f',
    },
  });
  const data = await res.json();
  return data.data.covid19Stats;
};

export const getCountry = async country => {
  const res = await fetch(`https://covid-19-coronavirus-statistics.p.rapidapi999.com/v1/stats?country=${country}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
      'x-rapidapi-key': 'b534b74c67mshfa97c3430dac3d0p1e3c3djsn3ecbae70b67f',
    },
  });
  const data = await res.json();
  return data.data.covid19Stats;
};
