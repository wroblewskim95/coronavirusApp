import { elements, formatDate } from './base';

export const renderWorldwideStats = (data) => {
  console.log(data);

  const worldWideResult = `
  <li class="list-group-item">Confirmed:<span class="orange"> ${data.total_cases}</span><li/>
  <li class="list-group-item">Deaths:<span class="red"> ${data.total_deaths}</span><li/>
  <li class="list-group-item">Recovered:<span class="green"> ${data.total_recovered}</span><li/>
  <li class="list-group-item">Today Confirmed: <span class="orange">${data.new_cases}</span><li/>
  <li class="list-group-item">Today Deaths: <span class="red">${data.new_deaths}</span><li/>
  <li class="list-group-item">Deaths per 1 million people: <span class="red">${data.deaths_per_1m_population}</span><li/>
  <li class="list-group-item">Last Update: ${formatDate(data.statistic_taken_at)}<li/>`;
  elements.worldwideResults.innerHTML = worldWideResult;
};
