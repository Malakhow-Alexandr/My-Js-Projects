const refs = {
  start: document.querySelector('.js-casino-start'),
  container: document.querySelector('.js-casino-container'),
};

refs.start.addEventListener('submit', startGame);

function startGame(evt) {
  evt.preventDefault();

  const cildrenLength = refs.container.children.length;

  const {
    level: { value: level },
  } = evt.currentTarget.elements;


  for (i = 0; i < cildrenLength; i += 1) {
    createPromise(Number(level), '💰', '🤑')
    console.log(createPromise(Number(level), '💰', '🤑'))
  }
}

function createPromise(level, win, lose) {
  const random = Math.random();
  const promise = new Promise((res, rej) => {
    if (random > level) {
      res(win);
    } else {
      rej(lose);
    }
  });

}
