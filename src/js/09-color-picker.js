import colors from '../data/colors.json';

const paletteContainer = document.querySelector('.js-palette');

const cardsMarkup = createColorsMarcup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onColorClick);

function createColorsMarcup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `<div class="color-card">
        <div
          class="color-swatch"
          data-hex="${hex}"
          data-rgb="${rgb}"
          style="background-color: ${hex}"
        ></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
      </div>`;
    })
    .join('');
}

function onColorClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }
  removeActiveCardClass();

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');

  addActiveCardClass(parentColorCard);

  setBodyBgcolor(evt.target.dataset.hex);
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');
  currentActiveCard?.classList.remove('is-active');
}

function setBodyBgcolor(color) {
  document.body.style.backgroundColor = color;
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}
