import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form-promises'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget;

  const firstDelay = delay.valueAsNumber;
  const userStep = step.valueAsNumber;
  const userAmount = amount.valueAsNumber;

  promisesCounter(firstDelay, userStep, userAmount);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

function promisesCounter(delay, step, amount) {
  for (let i = 0; i < amount; i += 1) {
    const userDelay = delay + step * i;
    createPromise(i + 1, userDelay)
      .then(onPromiseSuccess)
      .catch(onPromiseError);
  }
}

function onPromiseSuccess({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onPromiseError({ position, delay }) {
  Notiflix.Notify.failure(`❌Rejected promise ${position} in ${delay}ms`);
}
