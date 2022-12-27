import cars from '../data/cars.json';

const form = document.querySelector('.js-serch');
const carList = document.querySelector('.js-list');
form.addEventListener('submit', onSerch);

function onSerch(event) {
  event.preventDefault();
  const { queryValue, selectValue } = event.currentTarget.elements;

  const serchResult = cars.filter(item =>
    item[selectValue.value]
      .toLowerCase()
      .includes(queryValue.value.toLowerCase())
  );
  console.log(serchResult);
  const markup = serchResult
    .map(({ model, brand, img, price, description }) => {
      return `<li>
          <img src="${img}" alt="This is ${(brand, model)}" width="320"/>
          <h2>${brand}</h2>
          <h3>${model}</h3>
          <p>${price}</p>
          <p>${description}</p>
        </li>`;
    })
    .join('');
  carList.innerHTML = markup;
}
