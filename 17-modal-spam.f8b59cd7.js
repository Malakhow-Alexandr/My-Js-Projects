!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("1RFdb"),d=i("iU1Pc");i("h6c0i");var l={modal:document.querySelector("#exampleModal"),primBtn:document.querySelector("#prim-btn")},u=new r.default.Modal("#exampleModal"),a=0,c=!1;function f(){setTimeout((function(){4===a||c||(u.show(),a+=1)}),2e3)}f(),l.modal.addEventListener("hide.bs.modal",f),l.primBtn.addEventListener("click",(function(){c=!0,u.hide(),setTimeout((function(){e(d).Notify.success("✅ thanks for subscribing!")}),500)}))}();
//# sourceMappingURL=17-modal-spam.f8b59cd7.js.map