!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return u.default(e)||i.default(e)||c.default(e)||l.default()};var u=s(o("kMC0W")),i=s(o("7AJDX")),l=s(o("8CtQK")),c=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var f=document.querySelector(".content"),d=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],p="keyX",g="keyO",y="player",v=localStorage.getItem(y)||"X",m=JSON.parse(localStorage.getItem(p))||[],_=JSON.parse(localStorage.getItem(g))||[],b=0;function x(){for(var e="",t=1;t<=9;t+=1)e+='<div class="item" data-id="'.concat(t,'"></div>');f.innerHTML=e}function O(e){return d.some((function(t){return t.every((function(t){return e.includes(t)}))}))}x(),e(a)(f.children).forEach((function(e){var t=Number(e.dataset.id);m.includes(t)?e.textContent="X":_.includes(t)&&(e.textContent="O")})),f.addEventListener("click",(function(e){if(!e.target.classList.contains("item"))return;if(e.target.textContent)return;e.currentTarget.children.texcontent;var t=Number(e.target.dataset.id);b+=1;var r=!1;"X"===v?(m.push(t),localStorage.setItem(p,JSON.stringify(m)),r=O(m)):(_.push(t),localStorage.setItem(g,JSON.stringify(_)),r=O(_));e.target.textContent=v,r&&(n=v,setTimeout((function(){alert("Player   ".concat(n,"   you are Winner! Congratulation!"))||document.location.reload(),x(),localStorage.clear()}),300));var n;9!==b||r||setTimeout((function(){alert("You have a draw. Thanks for playing!")||(document.location.reload(),localStorage.clear())}),300);v="X"===v?"O":"X",localStorage.setItem(y,v)}))}();
//# sourceMappingURL=10-tic-tac-toe-game.faaf7928.js.map