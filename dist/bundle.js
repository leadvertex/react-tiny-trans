(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{TransProvider:()=>c,useTransContext:()=>u,useTranslate:()=>s,withTranslate:()=>d});const r=require("react");var n=e.n(r),o=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)l.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return l},a=(0,r.createContext)(null),l=(0,r.createContext)(null),u=function(){return(0,r.useContext)(a)},c=function(e){var t=e.children,n=e.trans,u=o((0,r.useState)(!1),2),c=u[0],i=u[1],s=o((0,r.useReducer)((function(e){return!e}),!1),2),d=s[0],f=s[1];(0,r.useEffect)((function(){var e=function(){return i(!0)},t=function(){return i(!1)};return n.addEventListener("loadstart",e),n.addEventListener("loadend",t),n.addEventListener("change-locale",f),n.addEventListener("init",f),function(){n.removeEventListener("loadstart",e),n.removeEventListener("loadend",t),n.removeEventListener("change-locale",f),n.removeEventListener("init",f)}}),[n]),(0,r.useEffect)((function(){n.init()}),[n]);var v={loading:c,locale:n.locale,trans:n};return r.createElement(a.Provider,{value:v},r.createElement(l.Provider,{value:d},t))},i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e){var t=u(),n=t.trans,o=t.locale,a=(0,r.useContext)(l),c=(0,r.useMemo)((function(){return n.createTranslate(e)}),[e,n,a]);return{locale:n.locale||o,changeLocale:n.changeLocale,translate:c}},d=function(e){return function(t){return function(r){var o=s(e);return n().createElement(t,i({},r,o))}}};module.exports=t})();
//# sourceMappingURL=bundle.js.map