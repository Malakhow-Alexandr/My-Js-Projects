import BSN from 'bootstrap.native';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  modal: document.querySelector('#exampleModal'),
  primBtn: document.querySelector('#prim-btn'),
};

const modal = new BSN.Modal('#exampleModal');

const PROMPT_DELAY = 2000;
const MAX_PROMPT_ATTEMPTS = 4;

let promptCounter = 0;
let hasSubacribed = false;

timeoutForModal();

refs.modal.addEventListener('hide.bs.modal', timeoutForModal);

refs.primBtn.addEventListener('click', onSubacribeBtnClick);

function timeoutForModal() {
  setTimeout(() => {
    if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubacribed) {
      return;
    }
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubacribeBtnClick() {
  hasSubacribed = true;
  modal.hide();
  setTimeout(() => {
    Notiflix.Notify.success('✅ thanks for subscribing!');
  }, 500);
}
