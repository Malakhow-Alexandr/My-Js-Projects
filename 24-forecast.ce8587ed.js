const e=document.querySelector(".js-weather"),s=document.querySelector(".js-list");e.addEventListener("submit",(function(e){e.preventDefault();const{query:{value:t},days:{value:n}}=e.currentTarget.elements;if(!t)return alert("Please add value!");(function(e,s){return fetch(`http://api.weatherapi.com/v1/forecast.json?key=f60c865d67554350816202559231101&q=${e}&days=${s}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((e=>{console.log(e)}))})(t,n).then((e=>{s.innerHTML=e.forecast.forecastday.map((({day:{condition:{icon:e,text:s},avgtemp_c:t},date:n,astro:{sunrise:a,sunset:r}})=>`<li class="js-list__item">\n\n  <img class="js-list__img" src="${e}" alt="${s}" />\n  \n  <h2 class="js-list__img-desc">Img desc:${s}</h2>\n  \n  <h3 class="js-list__forecast-date">Date:${n}</h3>\n  \n  <h4 class="js-list__temperature">Average temperature:${t}</h4>\n  \n  <h5 class="js-list__sunrise"> Sunrise:${a}</h5>\n  \n  <h5 class="js-list__sunset">Sunset:${r}</h5>\n  \n  </li>`)).join("")})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=24-forecast.ce8587ed.js.map
