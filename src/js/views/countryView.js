import { elements, formatDate } from './base';

export const clearField = () => {
  elements.countryInput.value = '';
};

export const clearSearchResult = () => {
  elements.countryResults.innerHTML = '';
};
export const renderCountryStats = country => {
  const stats = `
    <li class="list-group-item">Country: ${country.country_name}</li>
    <li class="list-group-item">Confirmed: <span class="orange">${country.total_cases}</span></li>
    <li class="list-group-item">Deaths: <span class="red">${country.total_deaths === '' ? '0' : country.total_deaths}</span></li>
    <li class="list-group-item">Recovered: <span class="green">${country.total_recovered === '' ? '0' : country.total_recovered}</span></li>
    <li class="list-group-item">Today Confirmed: <span class="orange">${country.new_cases === '' ? '0' : country.new_cases}</span></li>
    <li class="list-group-item">Today Deaths: <span class="red">${country.new_deaths === '' ? '0' : country.new_deaths}</span></li>
    <li class="list-group-item">Last Update: ${formatDate(country.record_date)}</li>
    `;
  elements.countryResults.innerHTML = stats;
};
