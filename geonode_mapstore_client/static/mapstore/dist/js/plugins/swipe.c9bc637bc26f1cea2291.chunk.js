(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6235],{580416:(e,t,r)=>{"use strict";r.d(t,{yS:()=>n,Zz:()=>o,ms:()=>i,ih:()=>a,OX:()=>c,sb:()=>u,K$:()=>l,k7:()=>s,cX:()=>p,x9:()=>f,vs:()=>d,oE:()=>y,Po:()=>m,qv:()=>v,cI:()=>b,g6:()=>g,I4:()=>h,l$:()=>E,Xv:()=>S,k3:()=>O,CQ:()=>w,R8:()=>P,HN:()=>j,sH:()=>R,c7:()=>T,_7:()=>A,eF:()=>_,O6:()=>N,ED:()=>C,RP:()=>I,sF:()=>L,VP:()=>D,He:()=>k,vO:()=>x,WO:()=>M,bh:()=>Y,MK:()=>z,ZF:()=>Z,tV:()=>G,Dv:()=>W,Yz:()=>H,kI:()=>F,XG:()=>U,A4:()=>B,Rp:()=>V,$o:()=>X,ct:()=>$,oh:()=>K,$h:()=>q,ud:()=>Q,Qr:()=>J,LR:()=>ee,nN:()=>te,UG:()=>re,c9:()=>ne,Xy:()=>oe});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",a="TOGGLE_NODE",c="SORT_NODE",u="REMOVE_NODE",l="UPDATE_NODE",s="MOVE_NODE",p="LAYER_LOADING",f="LAYER_LOAD",d="LAYER_ERROR",y="ADD_LAYER",m="ADD_GROUP",v="REMOVE_LAYER",b="SHOW_SETTINGS",g="HIDE_SETTINGS",h="UPDATE_SETTINGS",E="REFRESH_LAYERS",S="LAYERS:UPDATE_LAYERS_DIMENSION",O="LAYERS_REFRESHED",w="LAYERS_REFRESH_ERROR",P="LAYERS:BROWSE_DATA",j="LAYERS:DOWNLOAD",R="LAYERS:CLEAR_LAYERS",T="LAYERS:SELECT_NODE",A="LAYERS:FILTER_LAYERS",_="LAYERS:SHOW_LAYER_METADATA",N="LAYERS:HIDE_LAYER_METADATA",C="LAYERS:UPDATE_SETTINGS_PARAMS";function I(e,t,r){return{type:b,node:e,nodeType:t,options:r}}function L(){return{type:g}}function D(e){return{type:h,options:e}}function k(e,t){return{type:n,newProperties:t,layer:e}}function x(e,t){return{type:o,layer:e,params:t}}function M(e,t){return{type:i,newProperties:t,group:e}}function Y(e,t,r){return{type:a,node:e,nodeType:t,status:!r}}function z(e,t){return{type:c,node:e,order:t,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function Z(e,t){return{type:u,node:e,nodeType:t,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function G(e,t,r){return{type:l,node:e,nodeType:t,options:r}}function W(e,t,r){return{type:s,node:e,groupId:t,index:r}}function H(e){return{type:p,layerId:e}}function F(e,t){return{type:f,layerId:e,error:t}}function U(e,t,r){return{type:d,layerId:e,tilesCount:t,tilesErrorCount:r}}function B(e){return{type:y,layer:e,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function V(e,t,r){return{type:m,group:e,parent:t,options:r,asFirst:arguments.length>3&&void 0!==arguments[3]&&arguments[3]}}function X(e){return{type:v,layerId:e}}function $(e,t){return{type:n,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function K(e){return{type:O,layers:e}}function q(e,t){return{type:w,layers:e,error:t}}function Q(e,t,r,n){return{type:S,dimension:e,value:t,options:r,layers:n}}function J(e){return{type:P,layer:e}}function ee(e){return{type:j,layer:e}}function te(){return{type:R}}function re(e,t,r){return{type:T,id:e,nodeType:t,ctrlKey:r}}function ne(e,t){return{type:_,metadataRecord:e,maskLoading:t}}function oe(e,t){return{type:C,newParams:e,update:t}}},38560:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(480681),o=r(124852),i=r.n(o),a=r(294184),c=r.n(a),u=["disabled","className","onClick"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(null,arguments)}var s=r(815135);const p=(f=n.zx,i().forwardRef((function(e,t){var r=e.disabled,n=e.className,o=e.onClick,a=void 0===o?function(){}:o,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u);return i().createElement(f,l({ref:t,className:r?c()("disabled",n):n,onClick:function(){r||a.apply(void 0,arguments)}},s),s.children)})));var f;(0,s.Z)(n.zx)},807472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(727418),o=r.n(n),i=r(45697),a=r.n(i),c=r(124852),u=r.n(c),l=r(485294),s=r.n(l),p=r(472986),f=r.n(p),d=r(805346);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function g(e,t,r){return t=E(t),function(e,t){if(t&&("object"==y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,h()?Reflect.construct(t,r||[],E(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function O(e,t,r){return(t=w(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}var P=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return O(e=g(this,t,[].concat(n)),"renderLoading",(function(){return e.props.maskLoading?u().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},u().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},u().createElement(d.Z,{msgId:"loading"}),u().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),O(e,"renderRole",(function(t){return u().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),O(e,"hasRole",(function(t){return u().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),O(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=u().createElement("div",{id:this.props.id,style:v({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},u().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),u().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?u().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):u().createElement("span",null)),r=this.props.draggable?u().createElement(s(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?u().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&b(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(u().Component);O(P,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),O(P,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const j=P},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(45697),o=r.n(n),i=r(124852),a=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){return e>100?"full":e>40?"medium":"small"},f=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:l({width:t,height:t,overflow:"hidden"},n)},!i&&a().createElement("div",{className:"mapstore-".concat(p(t),"-size-loader")}))};f.propTypes={size:o().number,className:o().string,style:o().object};const d=f},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(124852),o=r.n(n),i=r(867076),a=r(957557),c=r.n(a),u=r(815135);const l=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled;return!(void 0!==r&&r&&t)}),u.Z,(function(e){return function(t){return o().createElement(e,c()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(124852),o=r.n(n),i=r(867076),a=r(45697),c=r.n(a),u=r(957557),l=r.n(u),s=r(480681),p=r(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function y(e,t,r){return t=v(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,m()?Reflect.construct(t,r||[],v(e).constructor):t.apply(e,r))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}const E=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),y(this,r,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(r,t),n=r,(a=[{key:"renderPopover",value:function(){return o().createElement(s.J2,l()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,l()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&d(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,a}(o().Component),g(t,"propTypes",{popover:c().object}),g(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(124852),o=r.n(n),i=r(819081),a=r.n(i),c=r(480681),u=r(90085),l=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(null,arguments)}const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,p=e.btnDefaultProps,f=void 0===p?{}:p,d=e.transitionProps,y=void 0===d?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:d,m=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,a=e.renderButton,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l);return n?a||i&&o().createElement(i,s({key:c.key||t},c))||o().createElement(u.Z,s({key:c.key||t},f,c)):null}))};return o().createElement(c.hE,i,y?o().createElement(a(),y,m()):m())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(867076),a=r(805346),c=r(957557),u=r.n(c),l=r(480681),s=r(532425),p=r(212610),f=r(617252),d=r(38560),y=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(null,arguments)}const v=(0,i.compose)(p.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,c=e.textId,p=e.glyphClassName,f=void 0===p?"":p,v=e.loaderProps,b=void 0===v?{}:v,g=e.children,h=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,y);return o().createElement(d.Z,u()(h,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(l.gG,{glyph:t,className:f}):null,c?o().createElement(a.Z,{msgId:c}):i,r?o().createElement(s.Z,m({className:"ms-loader".concat(h.bsStyle&&" ms-loader-"+h.bsStyle||"").concat(h.bsSize&&" ms-loader-"+h.bsSize||"")},b)):null,g)}))},436438:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Support:()=>oe,default:()=>ue});var n=r(124852),o=r.n(n),i=r(171703),a=r(22222),c=function(e){return e.swipe&&e.swipe||{active:!1}},u=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.spy)||{radius:80}},l=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.swipe)||{direction:"cut-vertical"}},s=function(e){var t;return null==e||null===(t=e.swipe)||void 0===t?void 0:t.layerId},p="SWIPE:SET_ACTIVE",f="SWIPE:SET_MODE",d="SWIPE:SET_SWIPE_TOOL_DIRECTION",y="SWIPE:SET_SPY_TOOL_RADIUS",m="SWIPE:SET_SWIPE_LAYER";function v(e){return{type:p,active:e,prop:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"active",layerId:arguments.length>2?arguments[2]:void 0}}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=b(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=r(49977),O=r.n(S),w=r(580416),P=r(275982);const j={resetLayerSwipeSettingsEpic:function(e,t){return e.ofType(w.c7).switchMap((function(e){var r=e.nodeType,n=t.getState();return c(n).active&&"group"===r?O().Observable.of(v(!1)):O().Observable.empty()}))},deactivateSwipeToolOnSwitchMaps:function(e,t){return e.ofType(P.nk).switchMap((function(){return c(t.getState()).active?O().Observable.of(v(!1)):O().Observable.empty()}))}};var R=r(322843),T=r(743129),A=r(185552),_=r.n(A),N=r(313311),C=r.n(N),I=r(805346),L=r(632107);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=D(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==D(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=[{label:"Horizontal",value:"cut-horizontal"},{label:"Vertical",value:"cut-vertical"}],z=function(e){var t=e.spyModeSettings,r=e.onSetSpyToolRadius;return o().createElement("div",{className:"mapstore-swipe-settings-spy"},o().createElement("h4",null,o().createElement(I.Z,{msgId:"toc.radius"})),o().createElement("div",{className:"mapstore-slider with-tooltip"},o().createElement(_(),{tooltips:!0,step:10,start:[t.radius],range:{min:[20],max:[100]},onChange:function(e){return r(e[0])}})))},Z=function(e){var t=e.swipeModeSettings,r=e.onSetSwipeToolDirection;return o().createElement("div",{className:"mapstore-swipe-settings-slider"},o().createElement("h4",null,o().createElement(I.Z,{msgId:"toc.direction"})),o().createElement(T.ZP,{styles:{menuPortal:function(e){return x(x({},e),{},{zIndex:3100})}},onChange:function(e){var t=e.value;return r(t)},clearable:!1,value:C()(Y,["value",t.direction]),options:Y}))},G=(0,a.P1)([c,l,u],(function(e,t,r){return{configuring:(null==e?void 0:e.configuring)||!1,toolMode:(null==e?void 0:e.mode)||"swipe",swipeModeSettings:t,spyModeSettings:r}}));const W=(0,i.connect)(G,{onSetConfigurationActive:v,onSetSwipeToolDirection:function(e){return{type:d,direction:e}},onSetSpyToolRadius:function(e){return{type:y,radius:e}}})((function(e){var t=e.configuring,r=e.toolMode,n=e.swipeModeSettings,i=e.spyModeSettings,a=e.onSetConfigurationActive,c=void 0===a?function(){}:a,u=e.onSetSpyToolRadius,l=void 0===u?function(){}:u,s=e.onSetSwipeToolDirection,p=void 0===s?function(){}:s;return o().createElement("div",{className:"mapstore-swipe-settings"},o().createElement(L.Z,{title:"spy"===r?o().createElement(I.Z,{msgId:"toc.spyconfiguration"}):o().createElement(I.Z,{msgId:"toc.swipeconfiguration"}),open:t,onClose:function(){return c(!1,"configuring")},enableFooter:!1,draggable:!0,size:"xs",bodyClassName:"mapstore-swipe-setiings-modal-body",dialogClassName:" mapstore-swipe-settings-modal",glyph:"transfer"},"spy"===r?o().createElement(z,{spyModeSettings:i,onSetSpyToolRadius:l}):o().createElement(Z,{swipeModeSettings:n,onSetSwipeToolDirection:p})))}));var H=r(480681),F=r(485294),U=r.n(F);const B=function(e){var t=e.map,r=e.layer,o=e.type,i=e.getWidth,a=e.getHeight,c=e.circleCutProp,u=(0,n.useCallback)((function(e){var r=e.context,n=i()*t.pixelRatio_;r.save(),r.beginPath(),r.rect(n,0,r.canvas.width-n,r.canvas.height),r.strokeStyle="rgba(0,0,0,0.5)",r.clip()}),[r,o]),l=(0,n.useCallback)((function(e){e.context.restore()}),[r,o]),s=(0,n.useCallback)((function(e){var r=e.context,n=a()*t.pixelRatio_;r.save(),r.beginPath(),r.rect(0,n,r.canvas.width,r.canvas.height-n),r.clip()}),[r,o]),p=(0,n.useCallback)((function(e){var t=e.context,r=e.frameState.pixelRatio;t.save(),t.beginPath();var n=c.getMousePosition();n&&(t.arc(n[0]*r,n[1]*r,c.radius*r,0,2*Math.PI),t.lineWidth=5*r,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()),t.clip()}),[r,o,c]);return(0,n.useEffect)((function(){var e=t.getLayers().getArray().filter((function(e){return e.get("msId")===r}))[0];if(e){switch(o){case"cut-vertical":!function(e,t,r){e.on("prerender",t),e.on("postrender",r)}(e,u,l);break;case"cut-horizontal":!function(e,t,r){e.on("prerender",t),e.on("postrender",r)}(e,s,l);break;case"circle":!function(e,t,r){e.on("prerender",t),e.on("postrender",r)}(e,p,l)}return t.render(),function(){e.un("prerender",u),e.un("prerender",s),e.un("prerender",p),e.un("postrender",l),t.render()}}return function(){return t.render()}}),[r,o,c]),null};function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var $=function(e){var t=e.type,r=e.map,i=e.widthRef,a=V((0,n.useState)(),2),c=a[0],u=a[1],l=V((0,n.useState)(!0),2),s=l[0],p=l[1],f=function(){u({x:0,y:0}),i.current=r.getProperties().size[0]/2};return(0,n.useEffect)((function(){return window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}}),[t]),(0,n.useEffect)((function(){i.current=r.getProperties().size[0]/2}),[t]),o().createElement(U(),{position:c,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaX,u({x:t.x,y:t.y}),r.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"100%",top:"0px",left:"".concat(r.getProperties().size[0]/2,"px"),width:"8px",cursor:"col-resize"}},s&&o().createElement("div",{className:"ms-vertical-swipe-slider-arrows",style:{top:"".concat(r.getProperties().size[1]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(H.gG,{glyph:"chevron-left"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(H.gG,{glyph:"chevron-right"})))))},K=function(e){var t=e.type,r=e.map,i=e.heightRef,a=V((0,n.useState)(),2),c=a[0],u=a[1],l=V((0,n.useState)(!0),2),s=l[0],p=l[1],f=function(){u({x:0,y:0}),i.current=r.getProperties().size[1]/2};return(0,n.useEffect)((function(){return window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}}),[t]),(0,n.useEffect)((function(){i.current=r.getProperties().size[1]/2}),[t]),o().createElement(U(),{position:c,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaY,u({x:t.x,y:t.y}),r.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"8px",top:"".concat(r.getProperties().size[1]/2,"px"),left:"0px",width:"100%",cursor:"row-resize"}},s&&o().createElement("div",{className:"ms-horizontal-swipe-slider-arrows",style:{left:"".concat(r.getProperties().size[0]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(H.gG,{glyph:"chevron-up"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(H.gG,{glyph:"chevron-down"})))))};const q=function(e){var t=e.map,r=e.layer,i=e.type,a=void 0===i?"cut-vertical":i,c=e.active,u=(0,n.useRef)(),l=(0,n.useRef)();return r&&c?o().createElement(o().Fragment,null,"cut-vertical"===a&&o().createElement($,{widthRef:l,map:t,type:a}),"cut-horizontal"===a&&o().createElement(K,{heightRef:u,map:t,type:a}),o().createElement(B,{map:t,layer:r,type:a,getWidth:function(){return l.current},getHeight:function(){return u.current}})):null},Q=function(e){var t=e.layer,r=e.map,i=e.active,a=e.radius,c=(0,n.useRef)(),u=(0,n.useCallback)((function(e){c.current=r.getEventPixel(e),r.render()}),[t,a]),l=(0,n.useCallback)((function(){c.current=null,r.render()}),[t,a]);(0,n.useEffect)((function(){var e=r.getTargetElement();return e.addEventListener("mousemove",u),e.addEventListener("mouseout",l),function(){e.removeEventListener("mousemove",u),e.removeEventListener("mouseout",l)}}),[]);var s={radius:a,getMousePosition:function(){return c.current}};return t&&i?o().createElement(B,{map:r,layer:t,type:"circle",circleCutProp:s}):null};var J=r(45697),ee=r.n(J);function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},te.apply(null,arguments)}var re=function(e){var t,r=e.swipeSettings,n=e.onSetActive,i=e.onSetSwipeMode,a=e.status,c=e.statusTypes,u=e.selectedNodes,l=e.itemComponent,s=e.swipeLayerId,p=e.onSetSwipeLayer,f=void 0===p?function(){}:p,d=l,y=function(e,t){return i(t),!r.active&&a===(null==c?void 0:c.LAYER)||r.active&&s!==e||r.active&&(null==r?void 0:r.mode)!==t?(f(e),n(!0)):(f(),n(!1))},m=null==u||null===(t=u[0])||void 0===t?void 0:t.node;if(![null==c?void 0:c.LAYER].includes(a)||null!=m&&m.error)return null;var v=(null==m?void 0:m.id)===s;return o().createElement(o().Fragment,null,o().createElement(d,te({},e,{active:v&&"swipe"===(null==r?void 0:r.mode),glyph:"transfer",labelId:"toc.swipe",onClick:function(){return y(null==m?void 0:m.id,"swipe")}})),o().createElement(d,te({},e,{active:v&&"spy"===(null==r?void 0:r.mode),glyph:"search",labelId:"toc.spyGlass",onClick:function(){return y(null==m?void 0:m.id,"spy")}})))};re.propTypes={swipeSettings:ee().object,status:ee().string,onSetActive:ee().func,onSetSwipeMode:ee().func},re.defaultProps={status:"LAYER",onSetSwipeMode:function(){},onSetActive:function(){}};const ne=re;var oe=function(e){var t=e.mode,r=e.map,n=e.layer,i=e.active,a=e.swipeModeSettings,c=e.spyModeSettings;return"spy"===t?o().createElement(Q,{map:r,layer:n,active:i,radius:c.radius}):o().createElement(q,{map:r,layer:n,active:i,type:a.direction})},ie=(0,a.P1)([s,c,l,u],(function(e,t,r,n){return{layer:e,active:t.active||!1,swipeModeSettings:r,spyModeSettings:n,mode:(null==t?void 0:t.mode)||"swipe"}})),ae=(0,i.connect)(ie,null)(oe),ce=(0,a.P1)(s,c,(function(e,t){return{swipeLayerId:e,swipeSettings:t}}));const ue=(0,R.rx)("Swipe",{options:{disablePluginIf:"{state('mapType') === 'leaflet' || state('mapType') === 'cesium'}"},component:W,containers:{TOC:[{name:"Swipe",target:"context-menu",Component:(0,i.connect)(ce,{onSetActive:v,onSetSwipeMode:function(){return{type:f,mode:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"swipe"}},onSetSwipeLayer:function(e){return{type:m,layerId:e}}})(ne),position:13},{name:"Swipe",target:"node-tool",Component:(0,i.connect)(ce,{onSetActive:v})((function(e){var t=e.itemComponent,r=e.node,n=e.swipeLayerId,i=e.swipeSettings,a=e.onSetActive,c=t;return n&&n===(null==r?void 0:r.id)?o().createElement(c,{glyph:"swipe"===(null==i?void 0:i.mode)?"transfer":"search",active:n===(null==r?void 0:r.id),tooltipId:"toc.configureTool",onClick:function(){a(!i.configuring,"configuring")}}):null})),position:13}],Map:{name:"Swipe",Tool:ae}},reducers:{swipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return h(h({},e),{},E({},t.prop,t.active));case m:return h(h({},e),{},{layerId:t.layerId});case f:return h(h({},e),{},{mode:t.mode});case d:var r=h(h({},e.swipe),{},{direction:t.direction});return h(h({},e),{},{swipe:r});case y:var n=h(h({},e.spy),{},{radius:t.radius});return h(h({},e),{},{spy:n});default:return e}}},epics:j})}}]);