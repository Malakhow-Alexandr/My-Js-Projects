const form = document.querySelector('.js-weather');
const list = document.querySelector('.js-list');

form.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const {
    query: { value: query },
    days: { value: days },
  } = evt.currentTarget.elements;
  if(!query){return alert('Please add value!')}

  weatherAPI(query, days).then(data => {
    list.innerHTML = createMarkup(data.forecast.forecastday);
  }).catch(error => {
    console.log(error);
  });
}

function weatherAPI(query, days) {
  const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
  const API_KEY = 'f60c865d67554350816202559231101';
  return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&days=${days}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).catch(error => {
      console.log(error);
    });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        day: {
          condition: { icon, text },
          avgtemp_c,
        },
        date,
        astro: { sunrise, sunset },
      }) =>
        `<li class="js-list__item">

  <img class="js-list__img" src="${icon}" alt="${text}" />
  
  <h2 class="js-list__img-desc">Img desc:${text}</h2>
  
  <h3 class="js-list__forecast-date">Date:${date}</h3>
  
  <h4 class="js-list__temperature">Average temperature:${avgtemp_c}</h4>
  
  <h5 class="js-list__sunrise"> Sunrise:${sunrise}</h5>
  
  <h5 class="js-list__sunset">Sunset:${sunset}</h5>
  
  </li>`
    )
    .join('');
}
