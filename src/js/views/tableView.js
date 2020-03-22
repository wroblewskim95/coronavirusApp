import { elements, formatDate } from './base';
const renderCountry = country => {
  const tableRow = `
    <tr>
      <td>${country.country} ${country.province !== '' ? `(${country.province})` : ''}</td>
      <td class="orange">${country.confirmed}</td>
      <td class="red">${country.deaths}</td>
      <td class="green">${country.recovered}</td>
      <td>${formatDate(country.lastUpdate)}</td>
    </tr>
  `;
  return tableRow;
};

export const renderCountries = countries => {
  let listAllCountries = '';
  countries.forEach(country => {
    if (country.confirmed >= 1) {
      listAllCountries += renderCountry(country);
    }
  });
  elements.tableResults.innerHTML = listAllCountries;
};

export const filterTable = input => {
  const allCountriesInTable = document.querySelectorAll('.all-countries tr td:first-child');
  allCountriesInTable.forEach(country => {
    const td = country.textContent.toLocaleLowerCase();
    if (td.indexOf(input) !== -1) {
      country.parentElement.style.display = 'table-row';
    } else {
      country.parentElement.style.display = 'none';
    }
  });
};
