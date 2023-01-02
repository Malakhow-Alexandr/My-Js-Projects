const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Sebastian',
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-race-btn'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-result-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);
  updateWinnerField('');
  updateProgressField('🏇 The race has started, no bids accepted!');

  determinWinner(promises);
  waitForAllFinished(promises);
}

function determinWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`🏁 Won ${horse}🥇 by finishing in ${time} milliseconds`);
    updateResultTable({ horse, time, raceCounter});
  });
}

function waitForAllFinished(horsesP) {
  Promise.all(horsesP).then(result => {
    updateProgressField('🐎 the race is over. 🤑 bids are being accepted!');
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultTable({ horse, time, raceCounter}) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

