(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[70890],{904679:(e,t,r)=>{"use strict";r.d(t,{y:()=>b,p:()=>g});var o=r(717621),n=r.n(o),i=r(423570),l=r.n(i),u=r(903918),a=r.n(u),c=r(441609),d=r.n(c),y=r(166287);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){var o,n,i,l;o=e,n=t,i=r[t],l=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n),(n="symbol"==s(l)?l:l+"")in o?Object.defineProperty(o,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[n]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var b=function(e){var t=e.marker,r=e.fillColor,o=void 0===r?"#f2f2f2":r,n=e.fillOpacity,i=void 0===n?.3:n,u=e.strokeColor,c=void 0===u?"#3075e9":u,d=e.strokeOpacity,y=void 0===d?1:d,s=e.strokeWidth,f=void 0===s?2:s,p=e.radius,m=void 0===p?10:p,b=e.geometryType,g=void 0===b?"GeometryCollection":b;return{format:"geostyler",metadata:{editorType:"visual"},body:{rules:[].concat(v(t?[{name:"Default Marker Style",ruleId:l()(),symbolizers:[{kind:"Icon",image:a(),opacity:1,size:32,rotate:0,msBringToFront:!0,msHeightReference:"none",symbolizerId:l()()}]}]:[]),v(["GeometryCollection","Point","MultiPoint"].includes(g)&&!t?[{name:"Default Point Style",ruleId:l()(),symbolizers:[{kind:"Mark",color:o,fillOpacity:i,opacity:1,strokeColor:c,strokeOpacity:y,strokeWidth:f,wellKnownName:"Circle",radius:m,msBringToFront:!0,symbolizerId:l()()}]}]:[]),v(["GeometryCollection","LineString","MultiLineString"].includes(g)&&!t?[{name:"Default Line Style",ruleId:l()(),symbolizers:[{kind:"Line",color:c,opacity:y,width:f,symbolizerId:l()()}]}]:[]),v(["GeometryCollection","Polygon","MultiPolygon"].includes(g)&&!t?[{name:"Default Polygon Style",ruleId:l()(),symbolizers:[{kind:"Fill",color:o,fillOpacity:i,outlineColor:c,outlineOpacity:y,outlineWidth:f,symbolizerId:l()()}]}]:[]))}}},g=function(e,t){var r,o,i,l,u,a=(0,y.flattenFeatures)((null==e?void 0:e.features)||[]);if(a.find((function(e){var t;return!d()((null==e?void 0:e.style)||{})&&(null==e||null===(t=e.properties)||void 0===t?void 0:t.id)}))||null!=e&&null!==(r=e.style)&&void 0!==r&&r.format&&!d()(null==e||null===(o=e.style)||void 0===o?void 0:o.body)||(null==e||null===(i=e.style)||void 0===i||!i.format)&&!d()(e.style))return e;var c=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).features,t=((e||[]).find((function(e){var t=e.geometry;return null==t?void 0:t.type}))||{}).geometry;if(!t)return null;var r=t.type.replace("Multi","");return"GeometryCollection"===r||(e||[]).find((function(e){var t,o=e.geometry;return(null==o||null===(t=o.type)||void 0===t?void 0:t.replace("Multi",""))!==r}))?"GeometryCollection":r}({features:a}),s=!(null==t||!t.marker||!["Point","MultiPoint"].includes(c)),f=t&&n()(t.fill).toHexString(),v=null==t||null===(l=t.fill)||void 0===l?void 0:l.a,m=t&&n()(null==t?void 0:t.color).toHexString(),g=null==t||null===(u=t.color)||void 0===u?void 0:u.a,O=null==t?void 0:t.width,h=null==t?void 0:t.radius;return p(p(p({},e),s&&{handleClickOnLayer:!0}),{},{style:b(t?{marker:s,fillColor:f,fillOpacity:v,strokeColor:m,strokeOpacity:g,strokeWidth:O,radius:h,geometryType:c}:{geometryType:c})})}},577215:(e,t,r)=>{"use strict";r.d(t,{VZ:()=>p,oL:()=>v,F0:()=>m,cP:()=>b,Br:()=>g,rD:()=>O});var o=r(944908),n=r.n(o),i=r(513218),l=r.n(i),u=r(984596),a=r.n(u),c=r(945402),d=r(916651);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){var o,n,i,l;o=e,n=t,i=r[t],l=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n),(n="symbol"==y(l)?l:l+"")in o?Object.defineProperty(o,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[n]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=["image/png","image/gif","image/jpeg","image/png8","image/png; mode=8bit","image/png; mode=24bit","image/vnd.jpeg-png","image/vnd.jpeg-png8"],v=function(){return n()(Object.values((0,c.eq)()))},m=function(e){return p.includes(e)},b=function(e){return v().includes(e)},g=function(e){var t,r,o,n,i;return l()(e)?{capabilities:e,description:e.Abstract,boundingBox:null!=e&&e.EX_GeographicBoundingBox?{minx:null===(t=e.EX_GeographicBoundingBox)||void 0===t?void 0:t.westBoundLongitude,miny:null===(r=e.EX_GeographicBoundingBox)||void 0===r?void 0:r.southBoundLatitude,maxx:null===(o=e.EX_GeographicBoundingBox)||void 0===o?void 0:o.eastBoundLongitude,maxy:null===(n=e.EX_GeographicBoundingBox)||void 0===n?void 0:n.northBoundLatitude}:null==e||null===(i=e.LatLonBoundingBox)||void 0===i?void 0:i.$,availableStyles:(null==e?void 0:e.Style)&&a()(e.Style).map((function(e){return f(f(f({name:e.Name},e.Title&&{title:e.Title}),e.Abstract&&{_abstract:e.Abstract}),e.LegendURL&&{legendURL:a()(e.LegendURL).map((function(e){var t,r,o,n,i,l;return f({width:null!=e&&null!==(t=e.$)&&void 0!==t&&t.width?parseFloat(e.$.width):void 0,height:null!=e&&null!==(r=e.$)&&void 0!==r&&r.height?parseFloat(e.$.height):void 0,format:null==e?void 0:e.Format},(null==e||null===(o=e.OnlineResource)||void 0===o||null===(n=o.$)||void 0===n?void 0:n["xlink:type"])&&(null==e||null===(i=e.OnlineResource)||void 0===i||null===(l=i.$)||void 0===l?void 0:l["xlink:href"])&&{onlineResource:{type:e.OnlineResource.$["xlink:type"],href:e.OnlineResource.$["xlink:href"]}})}))})}))}:{}},O=function(e){var t=e.tileGrids,r=void 0===t?[]:t,o=e.projection,n=e.tileSize,i=void 0===n?256:n;return r.find((function(e){var t,r,n;return(0,d.normalizeSRS)(e.crs)===(0,d.normalizeSRS)(o)&&!(((null===(t=e.tileSizes)||void 0===t||null===(r=t[0])||void 0===r?void 0:r[0])||(null===(n=e.tileSize)||void 0===n?void 0:n[0]))!==i)}))}}}]);