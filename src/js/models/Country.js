import { elements } from '../views/base';

export const getInput = () => {
  // Just only if field is NOT empty.
  if (elements.countryInput.value) {
    //Get imput value and remove whitespace from both ends of a string
    const input = elements.countryInput.value.trim();
    // Get and convert input to lower letters
    const countryName = input.toLowerCase();
    // Split country name to array
    const nameInParts = countryName.split(' ');
    let readyCountryName = [];
    // Set if and else if manual names, because in api it won't be found, because in these countries they have strange names
    switch (countryName) {
      case 'us':
      case 'usa':
      case 'united states':
      case 'united states of america':
        return 'US';
        break;
      case 'south korea':
      case 'korea':
      case 'republic of korea':
        return 'Korea, South';
        break;
      case 'taiwan':
      case 'republic of china':
        return 'Taiwan*';
        break;
      case 'bosnia and herzegovina':
      case 'bosnia–herzegovina':
      case 'bosnia':
        return 'Bosnia and Herzegovina';
        break;
      case 'trinidad and tobago':
      case 'the republic of trinidad and tobago':
        return 'Trinidad and Tobago';
        break;
      case 'congo-kinshasa':
      case 'the democratic republic of the congo':
      case 'democratic republic of the congo':
        return 'Congo (Kinshasa)';
        break;
      case 'ivory coast':
      case 'the ivory coast':
      case "côte d'ivoire":
      case "republic of côte d'ivoire":
        return "Cote d'Ivoire";
        break;
      case 'the bahamas':
      case 'bahamas':
      case 'commonwealth of the bahamas':
        return 'Bahamas, The';
        break;
      case 'congo':
      case 'the republic of the congo':
      case 'republic of the congo':
      case 'congo republic':
        return 'Congo (Brazzaville)';
        break;
      case 'antigua and barbuda':
        return 'Antigua and Barbuda';
        break;
      case 'the gambia':
      case 'gambia':
      case 'republic of the gambia':
        return 'Gambia, The';
        break;
      case 'saint vincent and the grenadines':
        return 'Saint Vincent and the Grenadines';
        break;
      case 'timor-leste':
      case 'east timor':
      case 'democratic republic of timor-leste':
        return 'Timor-Leste';
        break;
      default:
        // Change name to first letter upper case and rest to lower lase.
        nameInParts.forEach(el => {
          const firstCapitalLetter = el[0].toUpperCase();
          const restSmallLetters = el.slice(1, el.length).toLowerCase();
          const countryName = firstCapitalLetter + restSmallLetters;
          readyCountryName.push(countryName);
        });
        // Now names are converted to good format so make string from array
        readyCountryName = readyCountryName.join(' ');
        return readyCountryName;
    }
  } else {
    // If imput is empty
    return '';
  }
};
