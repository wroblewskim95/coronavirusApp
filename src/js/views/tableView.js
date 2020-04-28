import { elements } from './base';

const renderCountry = country => {
  const tableRow = `
    <tr>
      <td>${country.country_name}</td>
      <td class="orange">${country.cases}</td>
      <td class="red">${country.deaths}</td>
      <td class="green">${country.total_recovered}</td>
      <td>${country.total_cases_per_1m_population}</td>
    </tr>
  `;
  return tableRow;
};

export const renderCountries = countries => {
  let listAllCountries = '';
  countries.forEach(country => {
    if (country.country_name) {
      listAllCountries += renderCountry(country);
    }
  });
  elements.tableResults.innerHTML = listAllCountries;
};

export const filterTable = input => {
  const allCountriesInTable = document.querySelectorAll('.all-countries tr td:first-child');
  allCountriesInTable.forEach(country => {
    const td = country.textContent.toLocaleLowerCase();
    if (td.indexOf(input.toLocaleLowerCase()) !== -1) {
      country.parentElement.style.display = 'table-row';
    } else {
      country.parentElement.style.display = 'none';
    }
  });
};
