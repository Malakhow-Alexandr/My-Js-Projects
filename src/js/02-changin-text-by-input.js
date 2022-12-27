const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-btn > span"),
  lisenceCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-btn"),
};


refs.input.addEventListener("input", onInputChange);
refs.lisenceCheckbox.addEventListener("change", onLicenseChange);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
}
