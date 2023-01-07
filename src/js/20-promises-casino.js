const refs = {
  formCasino: document.querySelector('.js-casino-start'),
  container: document.querySelector('.js-casino-container'),
  strBtn: document,
};
const delay = 600;

refs.formCasino.addEventListener('submit', onStartGame);

function onStartGame(event) {
  event.preventDefault();
  const goodSmileArr = [];
  const badSmileArr = [];
  const childrenLength = refs.container.children.length;
  const {
    level: { value: level },
    start,
  } = event.currentTarget.elements;

  start.disabled = true;
  for (let i = 0; i < childrenLength; i += 1) {
    const item = refs.container.children[i];
    item.textContent = '';
    createPromise(Number(level), '🤑', '😰', delay * (i + 0.5))
      .then(response => {
        markFild(item, response);
        goodSmileArr.push(response);
      })
      .catch(response => {
        markFild(item, response);
        badSmileArr.push(response);
      })
      .finally(() => {
        if (i === childrenLength - 1) {
          start.disabled = false;
          const result =
            goodSmileArr.length === childrenLength ||
            badSmileArr.length === childrenLength;
          if (result) {
            console.log('you are winner');
          }
        }
      });
  }
}

function markFild(item, smile) {
  item.textContent = smile;
}

function createPromise(level, win, lose, delay) {
  const random = Math.random() > level;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random) {
        resolve(win);
      } else {
        reject(lose);
      }
    }, delay);
  });
  return promise;
}
