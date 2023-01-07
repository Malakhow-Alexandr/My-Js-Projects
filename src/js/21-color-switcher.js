const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

let intervalId = null;
let isActive = false;

function onStartClick() {
  if (isActive) {
    return;
  }
  isActive = true;

  disBtnOnStart();

  intervalId = setInterval(intervalCallbackFunction, 1000);
}

function intervalCallbackFunction() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  isActive = true;
  return isActive;
}

function disBtnOnStart() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}

function onStopClick() {
  clearInterval(intervalId);
  document.body.style.backgroundColor = 'white';
  isActive = false;
  disBtnOnStop();
}

function disBtnOnStop() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
