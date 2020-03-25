// DOM elements
export const elements = {
  copyRightYear: document.querySelector('.copyright-year'),
  table: document.querySelector('table'),
  tableResults: document.querySelector('.all-countries'),
  filterInput: document.querySelector('.filter-input'),
  worldwideResults: document.querySelector('.worldwide-result'),
  formSearchCountry: document.querySelector('.form-search-country'),
  countryInput: document.querySelector('.country-input'),
  countryResults: document.querySelector('.country-result'),
  singleCountrySection: document.querySelector('.single-country-stats'),
};

export const footerYear = () => {
  const getCurrentYear = new Date().getFullYear();
  elements.copyRightYear.textContent = getCurrentYear;
};

export const formatDate = date => {
  // Split Date and hour into array
  const oldDate = date.split(' ');
  const [oldDay, oldHour] = oldDate;
  // Convert date . First split date into array then reverse elements and convert into string makes good format.
  const newDay = oldDay
    .split('-')
    .reverse()
    .join('/');
  // Convert hour. Split into array then take only hour and minute.
  const newHours = oldHour.split(':');
  const [hour, minute] = newHours;
  const newHour = `${hour}:${minute}`;
  const newDate = `${newDay} ${newHour}`;
  return newDate;
};

export const showSpinner = parent => {
  const loadingSpinner = `<div class="spinner-border spinner" role="status"><span class="sr-only">Loading...</span></div>`;
  parent.insertAdjacentHTML('afterend', loadingSpinner);
};

export const delateSpinner = parent => {
  if (parent.nextElementSibling.classList.contains('spinner')) {
    parent.nextElementSibling.remove();
  }
};

export const showError = (message, parent) => {
  const alertBox = `<div class="alert alert-danger my-4 show-error" role="alert">${message}</div>`;
  parent.insertAdjacentHTML('afterend', alertBox);
};

export const clearError = () => {
  if (elements.countryResults.nextElementSibling) {
    elements.countryResults.nextElementSibling.remove();
  }
};
