import { elements } from '../views/base';

export const getInput = () => {
  let countryName = elements.countryInput.value;
  if (countryName) {
    const firstCapitalLetter = countryName[0].toUpperCase();
    const restSmallLetters = countryName.slice(1, countryName.length).toLowerCase();
    countryName = firstCapitalLetter + restSmallLetters;
    return countryName;
  }
};
