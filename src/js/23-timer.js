const refs = {
  clockData: document.querySelector('.clock-data'),
  hours: document.querySelector('.js-clock-hours'),
  minutes: document.querySelector('.js-clock-minutes'),
  seconds: document.querySelector('.js-clock-seconds'),
  milliseconds: document.querySelector('.js-clock-milliseconds'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  btnReset: document.querySelector('button[data-action="reset"]'),
};

let milliseconds = 0;
let timerId = null;

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);
refs.btnReset.addEventListener('click', onResetClick);

function onStartClick() {
  refs.clockData.classList.remove('paused');
  clearInterval(timerId);
  timerId = setInterval(() => {
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);
    const hours = pad(dateTimer.getUTCHours());
    const minutes = pad(dateTimer.getUTCMinutes());
    const seconds = pad(dateTimer.getUTCSeconds());
    const ms = padMs(dateTimer.getUTCMilliseconds());
    drowTimerTextcontent(hours, minutes, seconds, ms);
  }, 10);
}

function onResetClick(event) {
  refs.clockData.classList.remove('paused');
  clearInterval(timerId);
}

function onStopClick() {
  refs.clockData.classList.add('paused');
  clearInterval(timerId);
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
