const e=document.querySelector(".login-form");document.querySelector('input[name="email"]'),document.querySelector('input[name="password"]');e.addEventListener("submit",(function(t){t.preventDefault();const a=t.currentTarget.elements;if(!a.email.value||!a.password.value){alert("Plese enter all of your data!")}const o=a.email.value,l=a.password.value,n={mail:o,password:l};console.log(n),e.reset()}));
//# sourceMappingURL=05-processing-the-post-form.a1453163.js.map
