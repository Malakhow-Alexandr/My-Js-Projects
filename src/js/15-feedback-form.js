import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  formInput: document.querySelector('.feedback-form input'),
  formTextarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const savedData = localStorage.getItem(STORAGE_KEY);
const parseData = JSON.parse(savedData);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 1000));

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateFormOutput();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  if (savedData) {
    console.log(parseData);
  } else {
    console.log(formData);
  }
}

function populateFormOutput() {
  if (savedData && parseData.email) {
    refs.formInput.value = parseData.email;
  }
  if (savedData && parseData.message) {
    refs.formTextarea.value = parseData.message;
  }
}
