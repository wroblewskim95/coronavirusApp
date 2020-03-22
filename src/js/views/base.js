export const elements = {
  copyRightYear: document.querySelector('.copyright-year'),
  table: document.querySelector('table'),
  tableResults: document.querySelector('.all-countries'),
  filterInput: document.querySelector('.filter-input'),
};

export const getYear = () => {
  const getCurrentYear = new Date().getFullYear();
  elements.copyRightYear.textContent = getCurrentYear;
};

export const showSpinner = place => {
  const loadingSpinner = `<div class="spinner-border spinner" role="status"><span class="sr-only">Loading...</span></div>`;
  place.insertAdjacentHTML('afterend', loadingSpinner);
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
