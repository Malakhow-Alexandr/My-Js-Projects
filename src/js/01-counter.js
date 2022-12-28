const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    currentValue: document.querySelector("#value"),
  };
  
  let total = 0;
  
  refs.incrementBtn.addEventListener("click", () => {
    total += 1;
    refs.currentValue.textContent = total;
  });
  refs.decrementBtn.addEventListener("click", () => {
    total -= 1;
    refs.currentValue.textContent = total;
  });
 