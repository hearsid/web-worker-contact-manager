(function(){"use strict";importScripts("./dist/contacts.constant.js"),self.onmessage=function(n){const o=n.data,t=c(o,contacts);self.postMessage(t)};function c(n,o){var t=[];for(let s=0;s<Math.floor(n/6);s++)t=t.concat(o);for(let s=0;s<n%6;s++)t.push(o[s]);return t}})();