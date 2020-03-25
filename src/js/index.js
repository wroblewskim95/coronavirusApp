import { elements, footerYear, showSpinner, delateSpinner, formatDate, showError, clearError } from './views/base';
import * as GetData from './models/GetData';
import * as tableView from './views/tableView';
import * as Worldwide from './models/Worldwide';
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
      delateSpinner(elements.worldwideResults);
    })
    // If server can't download data from API
    .catch(err => {
      delateSpinner(elements.worldwideResults);
      showError('Oops, something went wrong. Try to refresh the page again.', elements.worldwideResults);
    });
};

// Table Controller
const tableCtrl = countries => {
  //   // Get all countries data and then display worldwide stats and table with all countries data
  //   GetData.getAllCountries()
  //   .then(countries => {
  //     tableCtrl(countries);
  //   })
  // .catch(err => {
  //   // If server can't download data from API
  //   delateSpinner(elements.worldwideResults);
  //   delateSpinner(elements.table);
  //   showError('Oops, something went wrong. Try to refresh the page again.', elements.worldwideResults);
  //   showError('Oops, something went wrong. Try to refresh the page again.', elements.table);
  // });
  // // Render table with all countries
  // tableView.renderCountries(countries);
  // // Delate Spinner
  // delateSpinner(elements.table);
};

// Load Page addEventListener
window.addEventListener('load', () => {
  // Show Current Year in footer
  footerYear();
  // Show worldwide stats
  worldwideCtrl();
  // Show table with country stats
  tableCtrl();
});

// Filter Table addEventListener
// elements.filterInput.addEventListener('keyup', e => {
//   const input = e.target.value;
//   tableView.filterTable(input);
// });

// Country Controller
// const countryCtrl = country => {
//   delateSpinner(elements.countryResults);
//   const countryStats = Worldwide.countAllStats(country);
//   countryStats.countryName = country[0].country;
//   countryStats.lastUpdate = country[0].lastUpdate;
//   if (country.length < 80) {
//     countryView.renderCountryStats(countryStats);
//   } else {
//     showError('Country Not Found.', elements.countryResults);
//   }
// };

// Get single country data
// elements.formSearchCountry.addEventListener('submit', e => {
//   // If search new country always clear search result and errors
//   countryView.clearSearchResult();
//   clearError();
//   const input = Country.getInput();
//   if (input) {
//     countryView.clearField();
//     showSpinner(elements.countryResults);
//     GetData.getCountry(input).then(country => countryCtrl(country));
//   } else {
//     showError('Please fill out all the required fields.', elements.countryResults);
//   }

//   e.preventDefault();
// });
