import { elements, formatDate } from './base';

export const clearField = () => {
  elements.countryInput.value = '';
};

export const renderCountryStats = country => {
  const stats = `
    <li class="list-group-item">Country: ${country.countryName}</li>
    <li class="list-group-item orange">Confirmed: ${country.sumConfirmed}</li>
    <li class="list-group-item red">Deaths: ${country.sumDeaths}</li>
    <li class="list-group-item green">Recovered: ${country.sumRecovered}</li>
    <li class="list-group-item">Last Update: ${formatDate(country.lastUpdate)}</li>
    `;
  elements.countryResults.innerHTML = stats;
};

export const clearSearchResult = () => {
  elements.countryResults.innerHTML = '';
};
