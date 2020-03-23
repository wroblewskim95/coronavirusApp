import { elements } from '../views/base';

export const getInput = () => {
  // Just only if field is NOT empty.
  if (elements.countryInput.value) {
    // Get and convert input to lower letters
    const countryName = elements.countryInput.value.toLowerCase();
    // Split country name to array
    const nameInParts = countryName.split(' ');
    let readyCountryName = [];
    // Set if and else if manual names, because in api it won't be found, because in these countries they have strange names
    if (countryName === 'us' || countryName === 'usa' || countryName === 'united states' || countryName === 'united states of america') {
      return 'US';
    } else if (countryName === 'south korea' || countryName === 'korea' || countryName === 'republic of korea') {
      return 'Korea, South';
    } else if (countryName === 'taiwan' || countryName === 'republic of china') {
      return 'Taiwan*';
    } else if (countryName === 'bosnia and herzegovina' || countryName === 'bosnia–herzegovina' || countryName === 'bosnia') {
      return 'Bosnia and Herzegovina';
    } else if (countryName === 'trinidad and tobago' || countryName === 'the republic of trinidad and tobago ') {
      return 'Trinidad and Tobago';
    } else if (countryName === 'congo-kinshasa' || countryName === 'the democratic republic of the congo' || countryName === 'democratic republic of the congo') {
      return 'Congo (Kinshasa)';
    } else if (countryName === 'ivory coast' || countryName === 'the ivory coast' || countryName === "côte d'ivoire" || countryName === "republic of côte d'ivoire") {
      return "Cote d'Ivoire";
    } else if (countryName === 'the bahamas' || countryName === 'bahamas' || countryName === 'commonwealth of the bahamas') {
      return 'Bahamas, The';
    } else if (countryName === 'congo' || countryName === 'the republic of the congo' || countryName === 'republic of the congo' || countryName === 'congo republic') {
      return 'Congo (Brazzaville)';
    } else if (countryName === 'antigua and barbuda') {
      return 'Antigua and Barbuda';
    } else if (countryName === 'the gambia' || countryName === 'gambia' || countryName === 'republic of the gambia') {
      return 'Gambia, The';
    } else if (countryName === 'saint vincent and the grenadines') {
      return 'Saint Vincent and the Grenadines';
    } else if (countryName === 'timor-leste' || countryName === 'east timor' || countryName === 'democratic republic of timor-leste') {
      return 'Timor-Leste';
    } else {
      // These cases have good country names in Api. So make automatically the first capital letter for each part of the name of the country and lower case letters for the rest of the name.
      nameInParts.forEach(el => {
        const firstCapitalLetter = el[0].toUpperCase();
        const restSmallLetters = el.slice(1, el.length).toLowerCase();
        const countryName = firstCapitalLetter + restSmallLetters;
        readyCountryName.push(countryName);
      });
      // Now names are converted to good format so make strin from array
      readyCountryName = readyCountryName.join(' ');
      return readyCountryName;
    }
  }
};
