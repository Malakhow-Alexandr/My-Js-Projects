!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");function u(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r&&o({position:e,delay:n}),t({position:e,delay:n})}),n)}))}function a(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))}function c(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌Rejected promise ".concat(o," in ").concat(t,"ms"))}r("h6c0i"),{form:document.querySelector(".form-promises")}.form.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget,o=n.delay,t=n.step,r=n.amount,i=o.valueAsNumber,f=t.valueAsNumber,l=r.valueAsNumber;!function(e,n,o){for(var t=0;t<o;t+=1){u(t+1,e+n*t).then(a).catch(c)}}(i,f,l)}))}();
//# sourceMappingURL=22-promises-counter.94958117.js.map
