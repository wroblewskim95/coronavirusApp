import { elements, footerYear, showSpinner, delateSpinner, showError, clearError } from './views/base';
import * as GetData from './models/GetData';
import * as tableView from './views/tableView';
import * as worldwideView from './views/worldwideView';
import * as Country from './models/Country';
import * as countryView from './views/countryView';

// WorldWide Controller
const worldwideCtrl = () => {
  // Show Spinner in worldwide stats
  showSpinner(elements.worldwideResults);
  // Get worldwide stats and then render results to UI
  GetData.getWorldwideStats()
    .then(stats => {
      worldwideView.renderWorldwideStats(stats);
      // After downloaded and rendered data delate spinner
      delateSpinner(elements.worldwideResults);
    })
    .catch(err => {
      // If server can't download data from API
      delateSpinner(elements.worldwideResults);
      showError('Oops, something went wrong. Try to refresh the page again.', elements.worldwideResults);
    });
};

// Table Controller
const tableCtrl = () => {
  // Show Spinner in table
  showSpinner(elements.table);
  // Get all countries data and then render data to table
  GetData.getAllCountries()
    .then(countries => {
      // Render table with all countries
      tableView.renderCountries(countries);
      // Delate Spinner
      delateSpinner(elements.table);
    })
    .catch(err => {
      // If server can't download data from API
      delateSpinner(elements.table);
      showError('Oops, something went wrong. Try to refresh the page again.', elements.table);
    });
};

// Load Page Event Listener
window.addEventListener('load', () => {
  // Show Current Year in footer section
  footerYear();
  // Show worldwide stats
  worldwideCtrl();
  // Show table with all countries stats
  tableCtrl();
});

// Filter list of countries in table
elements.filterInput.addEventListener('keyup', e => {
  const input = e.target.value;
  tableView.filterTable(input);
});

// Country Controller
const countryCtrl = country => {
  // Show spinner if you search for a country
  showSpinner(elements.countryResults);
  // Get single country data and then render to UI
  GetData.getCountry(country)
    .then(stats => {
      // If data downloaded delate spinner
      delateSpinner(elements.countryResults);
      if (stats) {
        // If country was found
        countryView.renderCountryStats(stats);
      } else {
        // If data was NOT found
        showError('Country Not Found.', elements.countryResults);
      }
    })
    .catch(err => {
      // If server can't download data from API
      delateSpinner(elements.countryResults);
      showError('Oops, something went wrong. Try to refresh the page again.', elements.countryResults);
    });
};

// Get single country data
elements.formSearchCountry.addEventListener('submit', e => {
  // If search new country then always clear search result and errors
  countryView.clearSearchResult();
  clearError();
  // Get input
  const input = Country.getInput();
  if (input) {
    // If is something in field
    countryView.clearField();
    countryCtrl(input);
  } else {
    // If empty field
    showError('Please fill out all the required fields.', elements.countryResults);
  }
  e.preventDefault();
});
