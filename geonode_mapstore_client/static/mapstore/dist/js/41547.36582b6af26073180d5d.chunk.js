(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41547],{641547:(t,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>k});var e=r(92742),o=r.n(e),i=r(747037),c=r.n(i),a=r(717621),l=r.n(a);function u(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function f(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function s(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){p(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function p(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function y(t){return function(t){if(Array.isArray(t))return v(t)}(t)||h(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,n){return O(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i=[],c=!0,a=!1;try{for(r=r.call(t);!(c=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);c=!0);}catch(t){a=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}}(t,n)||m(t,n)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,n){if(t){if("string"==typeof t)return v(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,n):void 0}}function v(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function h(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function O(t){if(Array.isArray(t))return t}function g(t){var n,r=O(n=t)||h(n)||m(n)||d(),e=r[0],o=r.slice(1);switch(e){case"||":case"&&":return"(".concat(o.map((function(t){return g(t)})).join(" ".concat(e," ")),")");case">":case"<":case">=":case"<=":case"!=":case"==":case"*=":var i=b(o,2),a=i[0],l=i[1];return function(t,n,r){var e="!(${".concat(t,"} === undefined").concat(null===r?"":" || ${".concat(t,"} === null"),")");return"=~"===n?"(".concat(e," && regExp('").concat(r,"').test(${").concat(t,"}) === true)"):"(".concat(e," && ${").concat(t,"} ").concat(n," ").concat(c()(r)?"'".concat(r,"'"):r,")")}(a,{"==":"===",">":">",">=":">=","<":"<","<=":"<=","!=":"!==","*=":"=~"}[e],l);default:return""}}function w(t){return!t||g(t)}function j(t){var n=t.conditions;return 1===n.length&&!0===n[0][0]?n[0][1]:{conditions:n}}function S(t){if(/rgb\(|rgba\(|hsl\(|hsla\(/.test(t)){var n=l()(t);return{color:n.toHexString(),fillOpacity:n.getAlpha()}}if(/color\(/.test(t)){var r=b(t.replace(/color\(|\)/g,"").split(","),2),e=r[0],o=r[1];return{color:e.replace(/\'/g,""),fillOpacity:parseFloat(void 0!==o?o:1)}}return{color:"#ffffff",fillOpacity:1}}const k=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,r;return n=t,r=[{key:"readStyle",value:function(t){return new Promise((function(n,r){try{var e=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.color,e=n.pointSize,i=n.meta,a=null!=i&&i.names?o()(i.names,"'").split(","):[],l=c()(r)?[{filter:void 0,name:a[0]||"",symbolizers:[s({kind:e?"Mark":"Fill"},S(r))]}]:null==r||null===(t=r.conditions)||void 0===t?void 0:t.map((function(t,n){var r=t[1];return{filter:void 0,name:a[n]||"",symbolizers:[s({kind:e?"Mark":"Fill"},S(r))]}}));return{name:null!=i&&i.title?o()(i.title,"'"):"",rules:y(l).reverse()}}(t);n(e)}catch(t){r(t)}}))}},{key:"writeStyle",value:function(t){return new Promise((function(n,r){try{var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=t.rules,e=y(void 0===r?[]:r).reverse(),o=e.find((function(t){return"Mark"===t.symbolizers[0].kind})),i=e.map((function(t){var n=t.filter,r=t.symbolizers;return[w(n),o&&0===(r[0].fillOpacity||0)?"${COLOR}":"color('".concat(r[0].color,"', ").concat(r[0].fillOpacity,")")]})),c=i.find((function(t){return!0===b(t,1)[0]})),a=!c&&{show:i.filter((function(t){return!0!==t})).map((function(t){return b(t,1)[0]})).join(" || ")},l=e.map((function(t){var n=t.filter,r=t.symbolizers;return[w(n),r[0].radius||1]})),u=e.map((function(t){return t.name})),f=!!u.find((function(t){return!!t}));return s(s(s({},a),{},{color:j({conditions:c?i:[].concat(y(i),[[!0,"color('#ffffff', 1)"]])})},o&&{pointSize:j({conditions:c?l:[].concat(y(l),[[!0,1]])})}),(n||f)&&{meta:s(s({},n&&{title:"'".concat(n,"'")}),f&&{names:"'".concat(u.join(","),"'")})})}(t);n(e)}catch(t){r(t)}}))}}],r&&u(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}()}}]);