import { elements } from './base';

export const renderWorldwideStats = data => {
  const worldWideResult = `<li class="list-group-item">Confirmed:<span class="orange"> ${data.sumConfirmed}</span><li/><li class="list-group-item">Deaths:<span class="red"> ${data.sumDeaths}</span><li/><li class="list-group-item">Recovered:<span class="green"> ${data.sumRecovered}</span><li/>`;
  elements.worldwideResults.innerHTML = worldWideResult;
};
