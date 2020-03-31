// Get Worldwide Stats
export const getWorldwideStats = async () => {
  const res = await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/world_total_stat.php', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': 'b534b74c67mshfa97c3430dac3d0p1e3c3djsn3ecbae70b67f',
    },
  });
  const data = await res.json();
  return data;
};

// Get All countries Stats
export const getAllCountries = async () => {
  const res = await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': 'b534b74c67mshfa97c3430dac3d0p1e3c3djsn3ecbae70b67f',
    },
  });
  const data = await res.json();
  return data.countries_stat;
};

// Get single country data
export const getCountry = async country => {
  const res = await fetch(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country_name.php?country=${country}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': 'b534b74c67mshfa97c3430dac3d0p1e3c3djsn3ecbae70b67f',
    },
  });
  const data = await res.json();
  return data.latest_stat_by_country[0];
};
