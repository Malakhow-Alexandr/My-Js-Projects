const form = document.querySelector('.js-weather');
const list = document.querySelector('.js-list');
console.log(list);

form.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const {
    query: { value: query },
    days: { value: days },
  } = evt.currentTarget.elements;

  
  weatherAPI(query, days).then(data => {createMarkup(data)});
}

function weatherAPI(query, days) {
  const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
  const API_KEY = 'f60c865d67554350816202559231101';
  return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&days=${days}`)
    .then(response => {
      if (!response) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
}


// function createMarkup(arr) {
//   return arr.map(({})) => {
//     `<li class="js-list__item">

// <img class="js-list__img" src="" alt="" />

// <h2 class="js-list__img-desc"></h2>

// <h3 class="js-list__forecast-data"></h3class>></h3>

// <h4 class="js-list__temperature"></h4>

// <h5 class="js-list__sunrise"></h5>

// <h5 class="js-list__sunset"></h5>

// </li>`;
//   }).join('');
// }
