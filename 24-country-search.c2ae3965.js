function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var i={id:t,exports:{}};return e[t]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,n){o[t]=n},n.parcelRequired7c6=i);var r,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,p="object"==typeof self&&self&&self.Object===Object&&self,y=l||p||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return y.Date.now()};function h(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var e=a.test(t);return e||f.test(t)?s(t.slice(2),e?2:8):c.test(t)?NaN:+t}r=function(t,n,e){var o,i,r,u,c,a,f=0,s=!1,l=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(n){var e=o,r=i;return o=i=void 0,f=n,u=t.apply(r,e)}function d(t){return f=t,c=setTimeout(j,n),s?y(t):u}function T(t){var e=t-a;return void 0===a||e>=n||e<0||l&&t-f>=r}function j(){var t=g();if(T(t))return w(t);c=setTimeout(j,function(t){var e=n-(t-a);return l?m(e,r-(t-f)):e}(t))}function w(t){return c=void 0,p&&o?y(t):(o=i=void 0,u)}function _(){var t=g(),e=T(t);if(o=arguments,i=this,a=t,e){if(void 0===c)return d(a);if(l)return c=setTimeout(j,n),y(a)}return void 0===c&&(c=setTimeout(j,n)),u}return n=b(n)||0,h(e)&&(s=!!e.leading,r=(l="maxWait"in e)?v(b(e.maxWait)||0,n):r,p="trailing"in e?!!e.trailing:p),_.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=i=c=void 0},_.flush=function(){return void 0===c?u:w(g())},_};var T=i("iQIUW");const j=async t=>{const n=await fetch(`https://restcountries.com/v3.1/name/${t}?fields=name,capital,population,flags,languages`);return await n.json()},w={input:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};function _(t){w.countryList.innerHTML=function(t){return t.map((({name:{official:t},flags:{svg:n}})=>`<li class="country-list__item">\n            <img src="${n}" alt="This is fleg of ${t}" width="70" height="50">\n            <h2 class="country-list__country-title">${t}</h2>\n            </li>`)).join("")}(t)}function O(){w.countryInfo.innerHTML="",w.countryList.innerHTML=""}w.input.addEventListener("input",t(r)((async function(t){const n=t.target.value;if(""===n.trim())return void O();try{const t=await j(n);1===t.length&&(_(t),e=t,w.countryInfo.innerHTML=function(t){return t.map((({capital:t,population:n,languages:e})=>`<p class="country-info__description">Capital: ${t}</p>\n      <p class="country-info__description">Languages: ${Object.values(e)}</p>\n      <p class="country-info__description">Population: ${n}</p>`)).join("")}(e)),t.length>=2&&t.length<=10&&(_(t),w.countryInfo.innerHTML=""),t.length>10&&(O(),T.Notify.info("Too many matches found. Please enter a more specific name."))}catch(t){console.log(t),O(),T.Notify.failure("Oops, there is no country with that name")}var e}),300));
//# sourceMappingURL=24-country-search.c2ae3965.js.map
