const e=document.querySelector(".js-weather"),t=document.querySelector(".js-list");e.addEventListener("submit",(function(e){e.preventDefault();const{query:{value:s},days:{value:n}}=e.currentTarget.elements;if(!s)return alert("Please add value!");(function(e,t){return fetch(`http://api.weatherapi.com/v1/forecast.json?key=f60c865d67554350816202559231101&q=${e}&days=${t}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((e=>{console.log(e)}))})(s,n).then((e=>{t.innerHTML=e.forecast.forecastday.map((({day:{condition:{icon:e,text:t},avgtemp_c:s},date:n,astro:{sunrise:a,sunset:r}})=>`<li class="js-list__item">\n\n  <img class="js-list__img" src="${e}" alt="${t}" />\n  \n  <h2 class="js-list__img-desc">Img desc:${t}</h2>\n  \n  <h3 class="js-list__forecast-date">Date:${n}</h3>\n  \n  <h4 class="js-list__temperature">Average temperature:${s}</h4>\n  \n  <h5 class="js-list__sunrise"> Sunrise:${a}</h5>\n  \n  <h5 class="js-list__sunset">Sunset:${r}</h5>\n  \n  </li>`)).join("")})).catch((e=>{t.innerHTML='<li><img src="https://www.techquintal.com/wp-content/uploads/2022/08/400-Bad-Request-Error.jpg" alt="bad request" width="320" /></li>'}))}));
//# sourceMappingURL=24-forecast.f58b9719.js.map