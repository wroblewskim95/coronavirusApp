import { elements, getYear, showSpinner, delateSpinner, formatDate, showError } from './views/base';
import * as GetData from './models/GetData';
import * as tableView from './views/tableView';
import * as Worldwide from './models/Worldwide';
import * as worldwideView from './views/worldwideView';

// WorldWide Controller
const worldwideCtrl = countries => {
  // Count and add all countries data to number of confirmed , deaths ,recovered cases
  const worldwideStats = Worldwide.countAllStats(countries);
  worldwideView.renderWorldwideStats(worldwideStats);
  delateSpinner(elements.worldwideResults);
};

// Table Controller
const tableCtrl = countries => {
  // Render table with all countries
  tableView.renderCountries(countries);
  // Delate Spinner
  delateSpinner(elements.table);
};

// Load Page
window.addEventListener('load', () => {
  // Footer Current Year
  getYear();
  // Show Spinner in worldwide section and table before gets data
  showSpinner(elements.worldwideResults);
  showSpinner(elements.table);

  // Get all countries data and then display worldwide stats and table with all countries data
  GetData.getAllCountries()
    .then(countries => {
      worldwideCtrl(countries);
      tableCtrl(countries);
    })
    .catch(err => {
      // If server can't download data from API
      delateSpinner(elements.worldwideResults);
      delateSpinner(elements.table);
      showError('Oops, something went wrong. Try to refresh the page again.', elements.worldwideResults);
      showError('Oops, something went wrong. Try to refresh the page again.', elements.table);
    });
});

// Filter Table
elements.filterInput.addEventListener('keyup', e => {
  const input = e.target.value;
  tableView.filterTable(input);
});
