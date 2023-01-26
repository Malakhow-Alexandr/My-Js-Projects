const fetchCountries = async name => {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';
  const searchOption = 'fields=name,capital,population,flags,languages';

  const response = await fetch(`${BASE_URL}${name}?${searchOption}`);
  return await response.json();
};

export { fetchCountries };
