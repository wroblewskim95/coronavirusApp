import { elements, getYear, showSpinner, delateSpinner, formatDate } from './views/base';
import * as GetData from './models/GetData';
import * as tableView from './views/tableView';

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
  // Show Spinner
  showSpinner(elements.table);
  // Get all countries data
  GetData.getAllCountries().then(countries => tableCtrl(countries));
});

// Filter Table
elements.filterInput.addEventListener('keyup', e => {
  const input = e.target.value;
  tableView.filterTable(input);
});
