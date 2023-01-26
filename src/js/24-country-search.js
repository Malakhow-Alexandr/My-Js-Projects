import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './24-fetchCountries';

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));

async function onCountryInput(evt) {
  const searchValue = evt.target.value;
  if (searchValue.trim() === '') {
    clearMarkup();
    return;
  }
  try {
    const response = await fetchCountries(searchValue);
   
    if (response.length === 1) {
      appendCountryListMarkup(response);
      appendCountryInfoMarkup(response);
    }

    if (response.length >= 2 && response.length <= 10) {
      appendCountryListMarkup(response);
      clearInfoMarkup();
    }
    if (response.length > 10) {
      clearMarkup();
      Notify.info('Too many matches found. Please enter a more specific name.');
    }
  } catch (error) {
    console.log(error);
    clearMarkup();
    Notify.failure('Oops, there is no country with that name');
  }
}

function countryListMarkup(data) {
  return data
    .map(
      ({
        name: { official: countryName },
        flags: { svg: countryFlag },
      }) => `<li class="country-list__item">
            <img src="${countryFlag}" alt="This is fleg of ${countryName}" width="70" height="50">
            <h2 class="country-list__country-title">${countryName}</h2>
            </li>`
    )
    .join('');
}

function countryInfoMarkup(data) {
  return data
    .map(
      ({
        capital,
        population,
        languages,
      }) => `<p class="country-info__description">Capital: ${capital}</p>
      <p class="country-info__description">Languages: ${Object.values(
        languages
      )}</p>
      <p class="country-info__description">Population: ${population}</p>`
    )
    .join('');
}

function appendCountryInfoMarkup(data) {
  refs.countryInfo.innerHTML = countryInfoMarkup(data);
}

function appendCountryListMarkup(data) {
  refs.countryList.innerHTML = countryListMarkup(data);
}

function clearMarkup() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

function clearInfoMarkup() {
  refs.countryInfo.innerHTML = '';
}
