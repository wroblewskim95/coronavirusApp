export const countAllStats = countries => {
  let sumConfirmed = [];
  let sumDeaths = [];
  let sumRecovered = [];

  countries.forEach(country => {
    sumConfirmed.push(country.confirmed);
    sumDeaths.push(country.deaths);
    sumRecovered.push(country.recovered);
  });

  const addNumbers = (previousValue, currentValue) => {
    return previousValue + currentValue;
  };

  sumConfirmed = sumConfirmed.reduce(addNumbers, 0);
  sumDeaths = sumDeaths.reduce(addNumbers, 0);
  sumRecovered = sumRecovered.reduce(addNumbers, 0);

  return { sumConfirmed, sumDeaths, sumRecovered };
};
