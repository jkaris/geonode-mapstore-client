(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[74864,53936,7654],{45992:(t,r,e)=>{"use strict";e.d(r,{h:()=>p,Z:()=>f});var n=e(535937),o=e.n(n),i=e(836882),u=e(737275);function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){s(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function s(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var p=function(t,r){var e,n,a,s,p=i.Z;if("custom"===t)e=r;else if(a=(s=t.split("."))[0],n=s[1],!(e=p[a]))throw new Error("No such provider ("+a+")");var f={url:e.url,options:e.options||{}};if(n&&"variants"in e){if(!(n in e.variants))throw new Error("No such variant of "+(a||e.url)+" ("+n+")");var l,v=e.variants[n];l="string"==typeof v?{variant:v}:v.options,f={url:v.url||f.url,options:c(c({},f.options||{}),l)}}else"function"==typeof f.url&&(f.url=f.url(s.splice(1,s.length-1).join(".")));var b="file:"===window.location.protocol||f.options.forceHTTP;0===f.url.indexOf("//")&&b&&(f.url="http:"+f.url),f.options.retina&&(r.detectRetina&&u.ZP.getBrowserProperties().retina?r.detectRetina=!1:f.options.retina=""),f.options.attribution&&(f.options.attribution=function t(r){return-1===r.indexOf("{attribution.")?r:r.replace(/\{attribution.(\w*)\}/,(function(r,e){return t(p[e].options.attribution)}))}(f.options.attribution));var O=c(c({},f.options),o()(r,(function(t){return void 0!==t})));return[f.url,O]};const f={getLayerConfig:p}},798143:function(t,r,e){var n,o;void 0===(o="function"==typeof(n=function(){function t(t,r){return function(e,n,o,i){e[t]?e[t](n,o,i):e[r]&&e[r]("on"+n,o)}}return{add:t("addEventListener","attachEvent"),remove:t("removeEventListener","detachEvent")}})?n.call(r,e,r,t):n)||(t.exports=o)},807654:(t,r,e)=>{var n=e(281763);t.exports=function(t){return n(t)&&t!=+t}}}]);