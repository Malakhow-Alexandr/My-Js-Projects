const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputRangeEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
