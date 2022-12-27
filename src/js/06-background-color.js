const buttonEl = document.querySelector(".change-color");
const textColorInfo = document.querySelector(".color");

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  const randomColor = getRandomHexColor();
  textColorInfo.textContent = randomColor;

  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
