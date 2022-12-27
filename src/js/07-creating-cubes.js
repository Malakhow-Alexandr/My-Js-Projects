const refs = {
    inputEl: document.querySelector('[type="number"]'),
    buttonCreate: document.querySelector("[data-create]"),
    buttonDestroy: document.querySelector("[data-destroy]"),
    container: document.querySelector("#boxes"),
  };
  
  refs.buttonCreate.addEventListener("click", addBoxes);
  refs.buttonDestroy.addEventListener("click", destroyBoxes);
  
  function addBoxes() {
    createBoxes(refs.inputEl.value);
  }
  function destroyBoxes() {
    refs.container.innerHTML = "";
  }
  
  const defaultSize = {
    size: 30,
    step: 10,
  };
  
  const createBoxes = (amount) => {
    const { size, step } = defaultSize;
    const newArray = [];
    for (let i = 0; i < amount; i += 1) {
      const element = document.createElement("div");
      element.style.height = size + step * i + "px";
      element.style.width = element.style.height;
      element.style.backgroundColor = `${getRandomHexColor()}`;
      newArray.push(element);
    }
    refs.container.append(...newArray);
  };
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  