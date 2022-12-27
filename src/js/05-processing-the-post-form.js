const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('input[name="email"]');
const inputPasswordEl = document.querySelector('input[name="password"]');

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (!formElements.email.value || !formElements.password.value) {
    const message = alert("Plese enter all of your data!");
  }

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };
  console.log(formData);
  formEl.reset();
}
