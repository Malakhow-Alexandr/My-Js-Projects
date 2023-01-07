import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysField: document.querySelector('span[data-days]'),
  hoursField: document.querySelector('span[data-hours]'),
  minutesField: document.querySelector('span[data-minutes]'),
  secondsField: document.querySelector('span[data-seconds]'),
};

makeDisabledBtn();
let inervalId = null;
let isActive = false;
const currentDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentDate) {
      makeDisabledBtn(true);

      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    makeDisabledBtn(false);

    const selectedTime = selectedDates[0].getTime();

    refs.startBtn.addEventListener('click', () => {
      onBtnClick(selectedTime);
    });
  },
};

function onBtnClick(selectedTime) {
  if (isActive) {
    return;
  }
  Notiflix.Notify.success('Date entered correctly. Timer started!');

  makeDisabledBtn(true);

  makeDisabledInput(true);

  const inervalId = setInterval(() => {
    isActive = true;
    const currentTime = Date.now();

    const referenceTime = currentTime - selectedTime;

    const { days, hours, minutes, seconds } = convertMs(referenceTime * -1);

    makeMarkupTextContent(days, hours, minutes, seconds);

    if (referenceTime >= -1000) {
      Notiflix.Notify.success('The timer has finished!');
      isActive = false;
      makeDisabledInput(false);
      clearInterval(inervalId);
    }
  }, 1000);
}

const fp = flatpickr(refs.input, options);

function makeMarkupTextContent(days, hours, minutes, seconds) {
  refs.daysField.textContent = pad(days);
  refs.hoursField.textContent = pad(hours);
  refs.minutesField.textContent = pad(minutes);
  refs.secondsField.textContent = pad(seconds);
}

function makeDisabledBtn(boolean) {
  refs.startBtn.disabled = boolean;
}

function makeDisabledInput(boolean) {
  refs.input.disabled = boolean;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, '0');
}
