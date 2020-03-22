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

export const getYear = () => {
  const getCurrentYear = new Date().getFullYear();
  elements.copyRightYear.textContent = getCurrentYear;
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

export const formatDate = date => {
  let updateDate = date.split('T');
  let day = updateDate[0].split('-');
  day = `${day[2]}/${day[1]}/${day[0]}`;
  let hours = updateDate[1].split(':');
  hours = `${hours[0]}:${hours[1]}`;
  updateDate = `${day} ${hours}`;
  return updateDate;
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
