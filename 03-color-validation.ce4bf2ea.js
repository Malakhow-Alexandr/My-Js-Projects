const e=document.querySelector("#validation-input");e.addEventListener("blur",(function(){const t=Number(e.dataset.length);e.value.length!==t?(e.classList.remove("valid"),e.classList.add("invalid")):e.value.length===t&&(e.classList.remove("invalid"),e.classList.add("valid"))}));
//# sourceMappingURL=03-color-validation.ce4bf2ea.js.map
