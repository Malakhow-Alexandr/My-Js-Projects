const refs = {
  clockData: document.querySelector('.clock-data'),
  hours: document.querySelector('.js-clock-hours'),
  minutes: document.querySelector('.js-clock-minutes'),
  seconds: document.querySelector('.js-clock-seconds'),
  milliseconds: document.querySelector('.js-clock-milliseconds'),
  btnContainer: document.querySelector('.js-button-container'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  btnReset: document.querySelector('button[data-action="reset"]'),
};

let milliseconds = 0;
let timerId = null;
let blinkerId = null;
let isActive = false;


refs.btnContainer.addEventListener('click', event => {
  if (event.target === refs.btnStart && !isActive) {
    onStartClick();
  } else if (event.target === refs.btnStop && isActive) {
    onStopClick();
  } else if (event.target === refs.btnReset) {
    onResetClick();
  }
});



function onStartClick() {
  refs.clockData.classList.remove('paused');
  isActive = true;
  changeBtnTextColor("green","currentColor")

  if (isActive) {
    blinkerId = setInterval(() => {
      refs.minutes.classList.toggle('clock-data--center');
    }, 700);
  }
  blinkerOf();
  clearInterval(timerId);

  timerId = setInterval(() => {
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);

    const hours = pad(dateTimer.getUTCHours());
    const minutes = pad(dateTimer.getUTCMinutes());
    const seconds = pad(dateTimer.getUTCSeconds());
    const ms = padMs(dateTimer.getUTCMilliseconds());

    drowTimerTextcontent(hours, minutes, seconds, ms);

    blinkerOf();
  }, 10);
}
function onStopClick() {
  refs.clockData.classList.add('paused');
  blinkerOn();

  changeBtnTextColor("currentColor","red")

  clearInterval(blinkerId);
  refs.minutes.classList.add('clock-data--center');

  isActive = false;
  clearInterval(timerId);
}

function onResetClick(event) {
  refs.clockData.classList.remove('paused');
  refs.minutes.classList.add('clock-data--center');

  changeBtnTextColor("currentColor","currentColor")

  clearInterval(timerId);
  clearInterval(blinkerId);

  isActive = false;

  blinkerOf();

  milliseconds = 0;

  drowTimerTextcontent('00', '00', '00', '000ms');
}

function blinkerOn() {
  refs.hours.classList.add('clock-data--animation');
  refs.minutes.classList.add('clock-data--animation');
  refs.seconds.classList.add('clock-data--animation');
  refs.milliseconds.classList.add('clock-data--animation');
}

function blinkerOf() {
  refs.hours.classList.remove('clock-data--animation');
  refs.minutes.classList.remove('clock-data--animation');
  refs.seconds.classList.remove('clock-data--animation');
  refs.milliseconds.classList.remove('clock-data--animation');
}

function drowTimerTextcontent(hours, minutes, seconds, ms) {
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
  refs.milliseconds.textContent = ms;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
function padMs(value) {
  return String(value).padStart(3, '0') + 'ms';
}

function changeBtnTextColor(strColor,stopColor){
  refs.btnStart.style.color = strColor;
  refs.btnStop.style.color = stopColor;
}