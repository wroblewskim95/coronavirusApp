import { elements } from '../views/base';

export const getInput = () => {
  // Get input then trim and to lower case
  const input = elements.countryInput.value.trim().toLowerCase();

  // Find this country from input in API if you use a different country name then API uses
  switch (input) {
    case 'us':
    case 'usa':
    case 'united states':
    case 'united states of america':
      return 'USA';
      break;
    case 'south korea':
      return 'S. Korea';
      break;
    case 'united kingdom':
    case 'uk':
    case 'great britain':
    case 'gb':
      return 'UK';
      break;
    case 'czech republic':
    case 'czech':
      return 'Czechia';
      break;
    case 'republic of south africa':
    case 'rsa':
      return 'South Africa';
      break;
    case 'united arab emirates':
    case 'emirates':
      return 'UAE';
      break;
    case 'macedonia':
      return 'North Macedonia';
      break;
    case 'bosnia  ':
    case 'bosnia–herzegovina ':
      return 'Bosnia and Herzegovina';
      break;
    case 'reunion':
      return 'Réunion';
      break;
    case 'democratic republic of the congo':
    case 'emirates':
      return 'DRC';
      break;
    case 'macau':
      return 'Macao';
      break;
    case 'mann':
      return 'Isle of Man';
      break;
    case 'curacao':
      return 'Curaçao';
      break;
    case 'cape verde':
      return 'Cabo Verde';
      break;
    case 'vatican':
    case 'vatican city state':
      return 'Vatican City';
      break;
    case 'central african republic':
      return 'CAR';
      break;
    case 'burma':
      return 'Myanmar';
      break;
    case 'saint barthélemy':
    case 'saint barthelemy':
    case 'st. barts':
      return 'St. Barth';
      break;
    case 'saint vincent and the grenadines':
    case 'saint vincent':
      return 'St. Vincent Grenadines';
      break;
    case 'east timor':
      return 'Timor-Leste';
      break;
    default:
      // If input is the same as country name in API
      return input;
  }
};
