!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&o(t.prototype,e);n&&o(t,n);return t};var a={clockFace:document.querySelector(".js-clock-stopwatch"),startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]")},i=new(function(){"use strict";function o(n){var a=n.onTick;t(e)(this,o),this.intervalId=null,this.isActive=!1,this.onTick=a}return t(n)(o,[{key:"start",value:function(){var t=this;if(!this.isActive){var e=Date.now();this.isActive=!0,this.intervalId=setInterval((function(){var n=Date.now(),o=t.getTimeComponents(n-e);t.onTick(o)}),1e3)}}},{key:"stop",value:function(){clearInterval(i.intervalId),this.isActive=!1;var t=this.getTimeComponents(0);this.onTick(t)}},{key:"pad",value:function(t){return String(t).padStart(2,"0")}},{key:"getTimeComponents",value:function(t){return{hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),seconds:this.pad(Math.floor(t%6e4/1e3))}}}]),o}())({onTick:function(t){var e=t.hours,n=t.mins,o=t.seconds;a.clockFace.textContent="".concat(e,":").concat(n,":").concat(o)}});a.startBtn.addEventListener("click",i.start.bind(i)),a.stopBtn.addEventListener("click",i.stop.bind(i))}();
//# sourceMappingURL=18-stopwatch.32460ae9.js.map
