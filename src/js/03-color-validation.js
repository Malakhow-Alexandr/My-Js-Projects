const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const validLength = Number(validationInputEl.dataset.length);
  
  if (validationInputEl.value.length !== validLength) {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  } else if (validationInputEl.value.length === validLength) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  }
}
