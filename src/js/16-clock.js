const refs = {
  day: document.querySelector('.date-data__day'),
  date: document.querySelector('.date-data__date'),
  month: document.querySelector('.date-data__month'),
  year: document.querySelector('.date-data__year'),
  digitalClock: document.querySelector('.digital-clock__data'),
  secondsArrow: document.querySelector('.clock-arrow__seconds'),
  minutesArrow: document.querySelector('.clock-arrow__minutes'),
  hoursArrow: document.querySelector('.clock-arrow__hours'),
};

const dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Satu'];
const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

setInterval(() => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();

  refs.day.textContent = dayOfTheWeek[day];
  refs.date.textContent = date;
  refs.month.textContent = month[month];
  refs.year.textContent = year;

  const digClockStr = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  refs.digitalClock.textContent = digClockStr;

  const secMinDeg = 360 / 60;
  const hoursDeg = 360 / 12;

  refs.secondsArrow.style.transform = `rotate(${seconds * secMinDeg}deg)`;
  refs.minutesArrow.style.transform = `rotate(${minutes * secMinDeg}deg)`;
  refs.hoursArrow.style.transform = `rotate(${hours * hoursDeg + (hoursDeg / 60 * minutes)}deg)`;
}, 1000);
