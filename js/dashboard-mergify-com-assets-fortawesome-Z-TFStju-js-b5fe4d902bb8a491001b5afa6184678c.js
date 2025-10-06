(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"1a852bb1435e099912e47361ac6ea11c1a9da234"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="15c99b20-1f7d-404a-9be2-fc61d464c100",e._sentryDebugIdIdentifier="sentry-dbid-15c99b20-1f7d-404a-9be2-fc61d464c100")})()}catch{}function Ar(e,t){for(var a=0;a<t.length;a++){const r=t[a];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(r,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function ua(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ys(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var a=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};a.prototype=t.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(a,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}),a}var Ne={exports:{}},x={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt;function Er(){if(kt)return x;kt=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.iterator;function h(s){return s===null||typeof s!="object"?null:(s=m&&s[m]||s["@@iterator"],typeof s=="function"?s:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,A={};function _(s,d,y){this.props=s,this.context=d,this.refs=A,this.updater=y||g}_.prototype.isReactComponent={},_.prototype.setState=function(s,d){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,d,"setState")},_.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function P(){}P.prototype=_.prototype;function C(s,d,y){this.props=s,this.context=d,this.refs=A,this.updater=y||g}var N=C.prototype=new P;N.constructor=C,I(N,_.prototype),N.isPureReactComponent=!0;var L=Array.isArray,E={H:null,A:null,T:null,S:null,V:null},Y=Object.prototype.hasOwnProperty;function G(s,d,y,b,O,j){return y=j.ref,{$$typeof:e,type:s,key:d,ref:y!==void 0?y:null,props:j}}function D(s,d){return G(s.type,d,void 0,void 0,void 0,s.props)}function le(s){return typeof s=="object"&&s!==null&&s.$$typeof===e}function yr(s){var d={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(y){return d[y]})}var St=/\/+/g;function Te(s,d){return typeof s=="object"&&s!==null&&s.key!=null?yr(""+s.key):d.toString(36)}function At(){}function br(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(At,At):(s.status="pending",s.then(function(d){s.status==="pending"&&(s.status="fulfilled",s.value=d)},function(d){s.status==="pending"&&(s.status="rejected",s.reason=d)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function ae(s,d,y,b,O){var j=typeof s;(j==="undefined"||j==="boolean")&&(s=null);var k=!1;if(s===null)k=!0;else switch(j){case"bigint":case"string":case"number":k=!0;break;case"object":switch(s.$$typeof){case e:case t:k=!0;break;case v:return k=s._init,ae(k(s._payload),d,y,b,O)}}if(k)return O=O(s),k=b===""?"."+Te(s,0):b,L(O)?(y="",k!=null&&(y=k.replace(St,"$&/")+"/"),ae(O,d,y,"",function(Sr){return Sr})):O!=null&&(le(O)&&(O=D(O,y+(O.key==null||s&&s.key===O.key?"":(""+O.key).replace(St,"$&/")+"/")+k)),d.push(O)),1;k=0;var X=b===""?".":b+":";if(L(s))for(var R=0;R<s.length;R++)b=s[R],j=X+Te(b,R),k+=ae(b,d,y,j,O);else if(R=h(s),typeof R=="function")for(s=R.call(s),R=0;!(b=s.next()).done;)b=b.value,j=X+Te(b,R++),k+=ae(b,d,y,j,O);else if(j==="object"){if(typeof s.then=="function")return ae(br(s),d,y,b,O);throw d=String(s),Error("Objects are not valid as a React child (found: "+(d==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":d)+"). If you meant to render a collection of children, use an array instead.")}return k}function he(s,d,y){if(s==null)return s;var b=[],O=0;return ae(s,b,"","",function(j){return d.call(y,j,O++)}),b}function xr(s){if(s._status===-1){var d=s._result;d=d(),d.then(function(y){(s._status===0||s._status===-1)&&(s._status=1,s._result=y)},function(y){(s._status===0||s._status===-1)&&(s._status=2,s._result=y)}),s._status===-1&&(s._status=0,s._result=d)}if(s._status===1)return s._result.default;throw s._result}var Et=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var d=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(d))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function wr(){}return x.Children={map:he,forEach:function(s,d,y){he(s,function(){d.apply(this,arguments)},y)},count:function(s){var d=0;return he(s,function(){d++}),d},toArray:function(s){return he(s,function(d){return d})||[]},only:function(s){if(!le(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},x.Component=_,x.Fragment=a,x.Profiler=n,x.PureComponent=C,x.StrictMode=r,x.Suspense=f,x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,x.__COMPILER_RUNTIME={__proto__:null,c:function(s){return E.H.useMemoCache(s)}},x.cache=function(s){return function(){return s.apply(null,arguments)}},x.cloneElement=function(s,d,y){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var b=I({},s.props),O=s.key,j=void 0;if(d!=null)for(k in d.ref!==void 0&&(j=void 0),d.key!==void 0&&(O=""+d.key),d)!Y.call(d,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&d.ref===void 0||(b[k]=d[k]);var k=arguments.length-2;if(k===1)b.children=y;else if(1<k){for(var X=Array(k),R=0;R<k;R++)X[R]=arguments[R+2];b.children=X}return G(s.type,O,void 0,void 0,j,b)},x.createContext=function(s){return s={$$typeof:o,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:i,_context:s},s},x.createElement=function(s,d,y){var b,O={},j=null;if(d!=null)for(b in d.key!==void 0&&(j=""+d.key),d)Y.call(d,b)&&b!=="key"&&b!=="__self"&&b!=="__source"&&(O[b]=d[b]);var k=arguments.length-2;if(k===1)O.children=y;else if(1<k){for(var X=Array(k),R=0;R<k;R++)X[R]=arguments[R+2];O.children=X}if(s&&s.defaultProps)for(b in k=s.defaultProps,k)O[b]===void 0&&(O[b]=k[b]);return G(s,j,void 0,void 0,null,O)},x.createRef=function(){return{current:null}},x.forwardRef=function(s){return{$$typeof:l,render:s}},x.isValidElement=le,x.lazy=function(s){return{$$typeof:v,_payload:{_status:-1,_result:s},_init:xr}},x.memo=function(s,d){return{$$typeof:c,type:s,compare:d===void 0?null:d}},x.startTransition=function(s){var d=E.T,y={};E.T=y;try{var b=s(),O=E.S;O!==null&&O(y,b),typeof b=="object"&&b!==null&&typeof b.then=="function"&&b.then(wr,Et)}catch(j){Et(j)}finally{E.T=d}},x.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},x.use=function(s){return E.H.use(s)},x.useActionState=function(s,d,y){return E.H.useActionState(s,d,y)},x.useCallback=function(s,d){return E.H.useCallback(s,d)},x.useContext=function(s){return E.H.useContext(s)},x.useDebugValue=function(){},x.useDeferredValue=function(s,d){return E.H.useDeferredValue(s,d)},x.useEffect=function(s,d,y){var b=E.H;if(typeof y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return b.useEffect(s,d)},x.useId=function(){return E.H.useId()},x.useImperativeHandle=function(s,d,y){return E.H.useImperativeHandle(s,d,y)},x.useInsertionEffect=function(s,d){return E.H.useInsertionEffect(s,d)},x.useLayoutEffect=function(s,d){return E.H.useLayoutEffect(s,d)},x.useMemo=function(s,d){return E.H.useMemo(s,d)},x.useOptimistic=function(s,d){return E.H.useOptimistic(s,d)},x.useReducer=function(s,d,y){return E.H.useReducer(s,d,y)},x.useRef=function(s){return E.H.useRef(s)},x.useState=function(s){return E.H.useState(s)},x.useSyncExternalStore=function(s,d,y){return E.H.useSyncExternalStore(s,d,y)},x.useTransition=function(){return E.H.useTransition()},x.version="19.1.0",x}var Pt;function kr(){return Pt||(Pt=1,Ne.exports=Er()),Ne.exports}var ca=kr();const ft=ua(ca),bs=Ar({__proto__:null,default:ft},[ca]);var je={exports:{}},Re,_t;function Pr(){if(_t)return Re;_t=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Re=e,Re}var Fe,Ot;function _r(){if(Ot)return Fe;Ot=1;var e=Pr();function t(){}function a(){}return a.resetWarningCache=t,Fe=function(){function r(o,l,f,c,v,m){if(m!==e){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}r.isRequired=r;function n(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:t};return i.PropTypes=i,i},Fe}var It;function Or(){return It||(It=1,je.exports=_r()()),je.exports}var Ir=Or();const S=ua(Ir);/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var xs={prefix:"far",iconName:"eye",icon:[576,512,[128065],"f06e","M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"]},ws={prefix:"far",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"]},Ss={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M51.9 384.9C19.3 344.6 0 294.4 0 240 0 107.5 114.6 0 256 0S512 107.5 512 240 397.4 480 256 480c-36.5 0-71.2-7.2-102.6-20L37 509.9c-3.7 1.6-7.5 2.1-11.5 2.1-14.1 0-25.5-11.4-25.5-25.5 0-4.3 1.1-8.5 3.1-12.2l48.8-89.4zm37.3-30.2c12.2 15.1 14.1 36.1 4.8 53.2l-18 33.1 58.5-25.1c11.8-5.1 25.2-5.2 37.1-.3 25.7 10.5 54.2 16.4 84.3 16.4 117.8 0 208-88.8 208-192S373.8 48 256 48 48 136.8 48 240c0 42.8 15.1 82.4 41.2 114.7z"]},As={prefix:"far",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"]},Es={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]},Cr={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm70.7 121.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L243.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"]},ks=Cr,Tr={prefix:"far",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM212.5 147.5c-7.4-4.5-16.7-4.7-24.3-.5S176 159.3 176 168l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88zM298 256l-74 45.2 0-90.4 74 45.2z"]},Ps=Tr,_s={prefix:"far",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"]},Os={prefix:"far",iconName:"circle-dot",icon:[512,512,[128280,"dot-circle"],"f192","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm0 304a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]};/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function He(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Nr(e){if(Array.isArray(e))return e}function jr(e){if(Array.isArray(e))return He(e)}function Rr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,da(r.key),r)}}function Mr(e,t,a){return t&&Fr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function be(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=ut(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(f){throw f},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var f=a.next();return o=f.done,f},e:function(f){l=!0,i=f},f:function(){try{o||a.return==null||a.return()}finally{if(l)throw i}}}}function w(e,t,a){return(t=da(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Lr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,l=[],f=!0,c=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;f=!1}else for(;!(f=(r=i.call(a)).done)&&(l.push(r.value),l.length!==t);f=!0);}catch(v){c=!0,n=v}finally{try{if(!f&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw n}}return l}}function $r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ct(Object(a),!0).forEach(function(r){w(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ct(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Pe(e,t){return Nr(e)||zr(e,t)||ut(e,t)||$r()}function $(e){return jr(e)||Lr(e)||ut(e)||Dr()}function Wr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function da(e){var t=Wr(e,"string");return typeof t=="symbol"?t:t+""}function Se(e){"@babel/helpers - typeof";return Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Se(e)}function ut(e,t){if(e){if(typeof e=="string")return He(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?He(e,t):void 0}}var Tt=function(){},ct={},ma={},va=null,pa={mark:Tt,measure:Tt};try{typeof window<"u"&&(ct=window),typeof document<"u"&&(ma=document),typeof MutationObserver<"u"&&(va=MutationObserver),typeof performance<"u"&&(pa=performance)}catch{}var Ur=ct.navigator||{},Nt=Ur.userAgent,jt=Nt===void 0?"":Nt,V=ct,T=ma,Rt=va,ge=pa;V.document;var B=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",ha=~jt.indexOf("MSIE")||~jt.indexOf("Trident/"),Me,Yr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Hr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,ga={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},qr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ya=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],F="classic",me="duotone",ba="sharp",xa="sharp-duotone",wa="chisel",Sa="etch",Aa="jelly",Ea="jelly-duo",ka="jelly-fill",Pa="notdog",_a="notdog-duo",Oa="slab",Ia="slab-press",Ca="thumbprint",Ta="utility",Na="utility-duo",ja="utility-fill",Ra="whiteboard",Br="Classic",Gr="Duotone",Xr="Sharp",Kr="Sharp Duotone",Vr="Chisel",Jr="Etch",Qr="Jelly",Zr="Jelly Duo",en="Jelly Fill",tn="Notdog",an="Notdog Duo",rn="Slab",nn="Slab Press",on="Thumbprint",sn="Utility",ln="Utility Duo",fn="Utility Fill",un="Whiteboard",Fa=[F,me,ba,xa,wa,Sa,Aa,Ea,ka,Pa,_a,Oa,Ia,Ca,Ta,Na,ja,Ra];Me={},w(w(w(w(w(w(w(w(w(w(Me,F,Br),me,Gr),ba,Xr),xa,Kr),wa,Vr),Sa,Jr),Aa,Qr),Ea,Zr),ka,en),Pa,tn),w(w(w(w(w(w(w(w(Me,_a,an),Oa,rn),Ia,nn),Ca,on),Ta,sn),Na,ln),ja,fn),Ra,un);var cn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},dn={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},mn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),vn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Ma=["fak","fa-kit","fakd","fa-kit-duotone"],Ft={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pn=["kit"],hn="kit",gn="kit-duotone",yn="Kit",bn="Kit Duotone";w(w({},hn,yn),gn,bn);var xn={kit:{"fa-kit":"fak"}},wn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Sn={kit:{fak:"fa-kit"}},Mt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Le,ye={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},An=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],En="classic",kn="duotone",Pn="sharp",_n="sharp-duotone",On="chisel",In="etch",Cn="jelly",Tn="jelly-duo",Nn="jelly-fill",jn="notdog",Rn="notdog-duo",Fn="slab",Mn="slab-press",Ln="thumbprint",zn="utility",$n="utility-duo",Dn="utility-fill",Wn="whiteboard",Un="Classic",Yn="Duotone",Hn="Sharp",qn="Sharp Duotone",Bn="Chisel",Gn="Etch",Xn="Jelly",Kn="Jelly Duo",Vn="Jelly Fill",Jn="Notdog",Qn="Notdog Duo",Zn="Slab",ei="Slab Press",ti="Thumbprint",ai="Utility",ri="Utility Duo",ni="Utility Fill",ii="Whiteboard";Le={},w(w(w(w(w(w(w(w(w(w(Le,En,Un),kn,Yn),Pn,Hn),_n,qn),On,Bn),In,Gn),Cn,Xn),Tn,Kn),Nn,Vn),jn,Jn),w(w(w(w(w(w(w(w(Le,Rn,Qn),Fn,Zn),Mn,ei),Ln,ti),zn,ai),$n,ri),Dn,ni),Wn,ii);var oi="kit",si="kit-duotone",li="Kit",fi="Kit Duotone";w(w({},oi,li),si,fi);var ui={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},ci={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},qe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},di=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],La=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(An,di),mi=["solid","regular","light","thin","duotone","brands","semibold"],za=[1,2,3,4,5,6,7,8,9,10],vi=za.concat([11,12,13,14,15,16,17,18,19,20]),pi=["aw","fw","pull-left","pull-right"],hi=[].concat($(Object.keys(ci)),mi,pi,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ye.GROUP,ye.SWAP_OPACITY,ye.PRIMARY,ye.SECONDARY]).concat(za.map(function(e){return"".concat(e,"x")})).concat(vi.map(function(e){return"w-".concat(e)})),gi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},H="___FONT_AWESOME___",Be=16,$a="fa",Da="svg-inline--fa",ee="data-fa-i2svg",Ge="data-fa-pseudo-element",yi="data-fa-pseudo-element-pending",dt="data-prefix",mt="data-icon",Lt="fontawesome-i2svg",bi="async",xi=["HTML","HEAD","STYLE","SCRIPT"],Wa=["::before","::after",":before",":after"],Ua=function(){try{return!0}catch{return!1}}();function ve(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[F]}})}var Ya=u({},ga);Ya[F]=u(u(u(u({},{"fa-duotone":"duotone"}),ga[F]),Ft.kit),Ft["kit-duotone"]);var wi=ve(Ya),Xe=u({},vn);Xe[F]=u(u(u(u({},{duotone:"fad"}),Xe[F]),Mt.kit),Mt["kit-duotone"]);var zt=ve(Xe),Ke=u({},qe);Ke[F]=u(u({},Ke[F]),Sn.kit);var vt=ve(Ke),Ve=u({},ui);Ve[F]=u(u({},Ve[F]),xn.kit);ve(Ve);var Si=Yr,Ha="fa-layers-text",Ai=Hr,Ei=u({},cn);ve(Ei);var ki=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ze=qr,Pi=[].concat($(pn),$(hi)),ue=V.FontAwesomeConfig||{};function _i(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Oi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var Ii=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ii.forEach(function(e){var t=Pe(e,2),a=t[0],r=t[1],n=Oi(_i(a));n!=null&&(ue[r]=n)})}var qa={styleDefault:"solid",familyDefault:F,cssPrefix:$a,replacementClass:Da,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ue.familyPrefix&&(ue.cssPrefix=ue.familyPrefix);var oe=u(u({},qa),ue);oe.autoReplaceSvg||(oe.observeMutations=!1);var p={};Object.keys(qa).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(a){oe[e]=a,ce.forEach(function(r){return r(p)})},get:function(){return oe[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){oe.cssPrefix=t,ce.forEach(function(a){return a(p)})},get:function(){return oe.cssPrefix}});V.FontAwesomeConfig=p;var ce=[];function Ci(e){return ce.push(e),function(){ce.splice(ce.indexOf(e),1)}}var re=Be,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ti(e){if(!(!e||!B)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=T.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return T.head.insertBefore(t,r),e}}var Ni="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $t(){for(var e=12,t="";e-- >0;)t+=Ni[Math.random()*62|0];return t}function se(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function pt(e){return e.classList?se(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ba(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ji(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Ba(e[a]),'" ')},"").trim()}function _e(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function ht(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function Ri(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:f,path:c}}function Fi(e){var t=e.transform,a=e.width,r=a===void 0?Be:a,n=e.height,i=n===void 0?Be:n,o="";return ha?o+="translate(".concat(t.x/re-r/2,"em, ").concat(t.y/re-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/re,"em), calc(-50% + ").concat(t.y/re,"em)) "),o+="scale(".concat(t.size/re*(t.flipX?-1:1),", ").concat(t.size/re*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Mi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Ga(){var e=$a,t=Da,a=p.cssPrefix,r=p.replacementClass,n=Mi;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(l,".".concat(r))}return n}var Dt=!1;function $e(){p.autoAddCss&&!Dt&&(Ti(Ga()),Dt=!0)}var Li={mixout:function(){return{dom:{css:Ga,insertCss:$e}}},hooks:function(){return{beforeDOMElementCreation:function(){$e()},beforeI2svg:function(){$e()}}}},q=V||{};q[H]||(q[H]={});q[H].styles||(q[H].styles={});q[H].hooks||(q[H].hooks={});q[H].shims||(q[H].shims=[]);var z=q[H],Xa=[],Ka=function(){T.removeEventListener("DOMContentLoaded",Ka),Ae=1,Xa.map(function(t){return t()})},Ae=!1;B&&(Ae=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),Ae||T.addEventListener("DOMContentLoaded",Ka));function zi(e){B&&(Ae?setTimeout(e,0):Xa.push(e))}function pe(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?Ba(e):"<".concat(t," ").concat(ji(r),">").concat(i.map(pe).join(""),"</").concat(t,">")}function Wt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var De=function(t,a,r,n){var i=Object.keys(t),o=i.length,l=a,f,c,v;for(r===void 0?(f=1,v=t[i[0]]):(f=0,v=r);f<o;f++)c=i[f],v=l(v,t[c],c,t);return v};function Va(e){return $(e).length!==1?null:e.codePointAt(0).toString(16)}function Ut(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Je(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=Ut(t);typeof z.hooks.addPack=="function"&&!n?z.hooks.addPack(e,Ut(t)):z.styles[e]=u(u({},z.styles[e]||{}),i),e==="fas"&&Je("fa",t)}var de=z.styles,$i=z.shims,Ja=Object.keys(vt),Di=Ja.reduce(function(e,t){return e[t]=Object.keys(vt[t]),e},{}),gt=null,Qa={},Za={},er={},tr={},ar={};function Wi(e){return~Pi.indexOf(e)}function Ui(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!Wi(n)?n:null}var rr=function(){var t=function(i){return De(de,function(o,l,f){return o[f]=De(l,i,{}),o},{})};Qa=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){n[f.toString(16)]=o})}return n}),Za=t(function(n,i,o){if(n[o]=o,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){n[f]=o})}return n}),ar=t(function(n,i,o){var l=i[2];return n[o]=o,l.forEach(function(f){n[f]=o}),n});var a="far"in de||p.autoFetchSvg,r=De($i,function(n,i){var o=i[0],l=i[1],f=i[2];return l==="far"&&!a&&(l="fas"),typeof o=="string"&&(n.names[o]={prefix:l,iconName:f}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:l,iconName:f}),n},{names:{},unicodes:{}});er=r.names,tr=r.unicodes,gt=Oe(p.styleDefault,{family:p.familyDefault})};Ci(function(e){gt=Oe(e.styleDefault,{family:p.familyDefault})});rr();function yt(e,t){return(Qa[e]||{})[t]}function Yi(e,t){return(Za[e]||{})[t]}function Z(e,t){return(ar[e]||{})[t]}function nr(e){return er[e]||{prefix:null,iconName:null}}function Hi(e){var t=tr[e],a=yt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function J(){return gt}var ir=function(){return{prefix:null,iconName:null,rest:[]}};function qi(e){var t=F,a=Ja.reduce(function(r,n){return r[n]="".concat(p.cssPrefix,"-").concat(n),r},{});return Fa.forEach(function(r){(e.includes(a[r])||e.some(function(n){return Di[r].includes(n)}))&&(t=r)}),t}function Oe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?F:a,n=wi[r][e];if(r===me&&!e)return"fad";var i=zt[r][e]||zt[r][n],o=e in z.styles?e:null,l=i||o||null;return l}function Bi(e){var t=[],a=null;return e.forEach(function(r){var n=Ui(p.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function Yt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var Ht=La.concat(Ma);function Ie(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=Yt(e.filter(function(g){return Ht.includes(g)})),o=Yt(e.filter(function(g){return!Ht.includes(g)})),l=i.filter(function(g){return n=g,!ya.includes(g)}),f=Pe(l,1),c=f[0],v=c===void 0?null:c,m=qi(i),h=u(u({},Bi(o)),{},{prefix:Oe(v,{family:m})});return u(u(u({},h),Vi({values:e,family:m,styles:de,config:p,canonical:h,givenPrefix:n})),Gi(r,n,h))}function Gi(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?nr(n):{},o=Z(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!de.far&&de.fas&&!p.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var Xi=Fa.filter(function(e){return e!==F||e!==me}),Ki=Object.keys(qe).filter(function(e){return e!==F}).map(function(e){return Object.keys(qe[e])}).flat();function Vi(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,l=o===void 0?{}:o,f=e.config,c=f===void 0?{}:f,v=a===me,m=t.includes("fa-duotone")||t.includes("fad"),h=c.familyDefault==="duotone",g=r.prefix==="fad"||r.prefix==="fa-duotone";if(!v&&(m||h||g)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Xi.includes(a)){var I=Object.keys(l).find(function(_){return Ki.includes(_)});if(I||c.autoFetchSvg){var A=mn.get(a).defaultShortPrefixId;r.prefix=A,r.iconName=Z(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=J()||"fas"),r}var Ji=function(){function e(){Rr(this,e),this.definitions={}}return Mr(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){a.definitions[l]=u(u({},a.definitions[l]||{}),o[l]),Je(l,o[l]);var f=vt[F][l];f&&Je(f,o[l]),rr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],l=o.prefix,f=o.iconName,c=o.icon,v=c[2];a[l]||(a[l]={}),v.length>0&&v.forEach(function(m){typeof m=="string"&&(a[l][m]=c)}),a[l][f]=c}),a}}])}(),qt=[],ne={},ie={},Qi=Object.keys(ie);function Zi(e,t){var a=t.mixoutsTo;return qt=e,ne={},Object.keys(ie).forEach(function(r){Qi.indexOf(r)===-1&&delete ie[r]}),qt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),Se(n[o])==="object"&&Object.keys(n[o]).forEach(function(l){a[o]||(a[o]={}),a[o][l]=n[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ne[o]||(ne[o]=[]),ne[o].push(i[o])})}r.provides&&r.provides(ie)}),a}function Qe(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=ne[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function te(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=ne[e]||[];n.forEach(function(i){i.apply(null,a)})}function Q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ie[e]?ie[e].apply(null,t):void 0}function Ze(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||J();if(t)return t=Z(a,t)||t,Wt(or.definitions,a,t)||Wt(z.styles,a,t)}var or=new Ji,eo=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,te("noAuto")},to={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(te("beforeI2svg",t),Q("pseudoElements2svg",t),Q("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,zi(function(){ro({autoReplaceSvgRoot:a}),te("watch",t)})}},ao={icon:function(t){if(t===null)return null;if(Se(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Oe(t[0]);return{prefix:r,iconName:Z(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Si))){var n=Ie(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||J(),iconName:Z(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=J();return{prefix:i,iconName:Z(i,t)||t}}}},M={noAuto:eo,config:p,dom:to,parse:ao,library:or,findIconDefinition:Ze,toHtml:pe},ro=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?T:a;(Object.keys(z.styles).length>0||p.autoFetchSvg)&&B&&p.autoReplaceSvg&&M.dom.i2svg({node:r})};function Ce(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return pe(r)})}}),Object.defineProperty(e,"node",{get:function(){if(B){var r=T.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function no(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(ht(o)&&a.found&&!r.found){var l=a.width,f=a.height,c={x:l/f/2,y:.5};n.style=_e(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function io(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},n),{},{id:o}),children:r}]}]}function oo(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function bt(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,f=e.maskId,c=e.extra,v=e.watchable,m=v===void 0?!1:v,h=r.found?r:a,g=h.width,I=h.height,A=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(E){return c.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(c.classes).join(" "),_={children:[],attributes:u(u({},c.attributes),{},{"data-prefix":n,"data-icon":i,class:A,role:c.attributes.role||"img",viewBox:"0 0 ".concat(g," ").concat(I)})};!oo(c.attributes)&&!c.attributes["aria-hidden"]&&(_.attributes["aria-hidden"]="true"),m&&(_.attributes[ee]="");var P=u(u({},_),{},{prefix:n,iconName:i,main:a,mask:r,maskId:f,transform:o,symbol:l,styles:u({},c.styles)}),C=r.found&&a.found?Q("generateAbstractMask",P)||{children:[],attributes:{}}:Q("generateAbstractIcon",P)||{children:[],attributes:{}},N=C.children,L=C.attributes;return P.children=N,P.attributes=L,l?io(P):no(P)}function Bt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,l=o===void 0?!1:o,f=u(u({},i.attributes),{},{class:i.classes.join(" ")});l&&(f[ee]="");var c=u({},i.styles);ht(n)&&(c.transform=Fi({transform:n,width:a,height:r}),c["-webkit-transform"]=c.transform);var v=_e(c);v.length>0&&(f.style=v);var m=[];return m.push({tag:"span",attributes:f,children:[t]}),m}function so(e){var t=e.content,a=e.extra,r=u(u({},a.attributes),{},{class:a.classes.join(" ")}),n=_e(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var We=z.styles;function et(e){var t=e[0],a=e[1],r=e.slice(4),n=Pe(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(ze.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ze.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ze.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var lo={found:!1,width:512,height:512};function fo(e,t){!Ua&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function tt(e,t){var a=t;return t==="fa"&&p.styleDefault!==null&&(t=J()),new Promise(function(r,n){if(a==="fa"){var i=nr(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&We[t]&&We[t][e]){var o=We[t][e];return r(et(o))}fo(e,t),r(u(u({},lo),{},{icon:p.showMissingIcons&&e?Q("missingIconAbstract")||{}:{}}))})}var Gt=function(){},at=p.measurePerformance&&ge&&ge.mark&&ge.measure?ge:{mark:Gt,measure:Gt},fe='FA "7.1.0"',uo=function(t){return at.mark("".concat(fe," ").concat(t," begins")),function(){return sr(t)}},sr=function(t){at.mark("".concat(fe," ").concat(t," ends")),at.measure("".concat(fe," ").concat(t),"".concat(fe," ").concat(t," begins"),"".concat(fe," ").concat(t," ends"))},xt={begin:uo,end:sr},xe=function(){};function Xt(e){var t=e.getAttribute?e.getAttribute(ee):null;return typeof t=="string"}function co(e){var t=e.getAttribute?e.getAttribute(dt):null,a=e.getAttribute?e.getAttribute(mt):null;return t&&a}function mo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function vo(){if(p.autoReplaceSvg===!0)return we.replace;var e=we[p.autoReplaceSvg];return e||we.replace}function po(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function ho(e){return T.createElement(e)}function lr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?po:ho:a;if(typeof e=="string")return T.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(lr(o,{ceFn:r}))}),n}function go(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var we={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(lr(n),a)}),a.getAttribute(ee)===null&&p.keepOriginalSource){var r=T.createComment(go(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~pt(a).indexOf(p.replacementClass))return we.replace(t);var n=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,f){return f===p.replacementClass||f.match(n)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return pe(l)}).join(`
`);a.setAttribute(ee,""),a.innerHTML=o}};function Kt(e){e()}function fr(e,t){var a=typeof t=="function"?t:xe;if(e.length===0)a();else{var r=Kt;p.mutateApproach===bi&&(r=V.requestAnimationFrame||Kt),r(function(){var n=vo(),i=xt.begin("mutate");e.map(n),i(),a()})}}var wt=!1;function ur(){wt=!0}function rt(){wt=!1}var Ee=null;function Vt(e){if(Rt&&p.observeMutations){var t=e.treeCallback,a=t===void 0?xe:t,r=e.nodeCallback,n=r===void 0?xe:r,i=e.pseudoElementsCallback,o=i===void 0?xe:i,l=e.observeMutationsRoot,f=l===void 0?T:l;Ee=new Rt(function(c){if(!wt){var v=J();se(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Xt(m.addedNodes[0])&&(p.searchPseudoElements&&o(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&p.searchPseudoElements&&o([m.target],!0),m.type==="attributes"&&Xt(m.target)&&~ki.indexOf(m.attributeName))if(m.attributeName==="class"&&co(m.target)){var h=Ie(pt(m.target)),g=h.prefix,I=h.iconName;m.target.setAttribute(dt,g||v),I&&m.target.setAttribute(mt,I)}else mo(m.target)&&n(m.target)})}}),B&&Ee.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yo(){Ee&&Ee.disconnect()}function bo(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),a}function xo(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=Ie(pt(e));return n.prefix||(n.prefix=J()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=Yi(n.prefix,e.innerText)||yt(n.prefix,Va(e.innerText))),!n.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function wo(e){var t=se(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function So(){return{iconName:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=xo(e),r=a.iconName,n=a.prefix,i=a.rest,o=wo(e),l=Qe("parseNodeAttributes",{},e),f=t.styleParser?bo(e):[];return u({iconName:r,prefix:n,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},l)}var Ao=z.styles;function cr(e){var t=p.autoReplaceSvg==="nest"?Jt(e,{styleParser:!1}):Jt(e);return~t.extra.classes.indexOf(Ha)?Q("generateLayersText",e,t):Q("generateSvgReplacementMutation",e,t)}function Eo(){return[].concat($(Ma),$(La))}function Qt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var a=T.documentElement.classList,r=function(m){return a.add("".concat(Lt,"-").concat(m))},n=function(m){return a.remove("".concat(Lt,"-").concat(m))},i=p.autoFetchSvg?Eo():ya.concat(Object.keys(Ao));i.includes("fa")||i.push("fa");var o=[".".concat(Ha,":not([").concat(ee,"])")].concat(i.map(function(v){return".".concat(v,":not([").concat(ee,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=se(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),n("complete");else return Promise.resolve();var f=xt.begin("onTree"),c=l.reduce(function(v,m){try{var h=cr(m);h&&v.push(h)}catch(g){Ua||g.name==="MissingIcon"&&console.error(g)}return v},[]);return new Promise(function(v,m){Promise.all(c).then(function(h){fr(h,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),f(),v()})}).catch(function(h){f(),m(h)})})}function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cr(e).then(function(a){a&&fr([a],t)})}function Po(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ze(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Ze(n||{})),e(r,u(u({},a),{},{mask:n}))}}var _o=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?U:r,i=a.symbol,o=i===void 0?!1:i,l=a.mask,f=l===void 0?null:l,c=a.maskId,v=c===void 0?null:c,m=a.classes,h=m===void 0?[]:m,g=a.attributes,I=g===void 0?{}:g,A=a.styles,_=A===void 0?{}:A;if(t){var P=t.prefix,C=t.iconName,N=t.icon;return Ce(u({type:"icon"},t),function(){return te("beforeDOMElementCreation",{iconDefinition:t,params:a}),bt({icons:{main:et(N),mask:f?et(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:C,transform:u(u({},U),n),symbol:o,maskId:v,extra:{attributes:I,styles:_,classes:h}})})}},Oo={mixout:function(){return{icon:Po(_o)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Qt,a.nodeCallback=ko,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?T:r,i=a.callback,o=i===void 0?function(){}:i;return Qt(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,l=r.symbol,f=r.mask,c=r.maskId,v=r.extra;return new Promise(function(m,h){Promise.all([tt(n,i),f.iconName?tt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var I=Pe(g,2),A=I[0],_=I[1];m([a,bt({icons:{main:A,mask:_},prefix:i,iconName:n,transform:o,symbol:l,maskId:c,extra:v,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,l=a.styles,f=_e(l);f.length>0&&(n.style=f);var c;return ht(o)&&(c=Q("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:n}}}},Io={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return Ce({type:"layer"},function(){te("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(l){Array.isArray(l)?l.map(function(f){o=o.concat(f.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat($(i)).join(" ")},children:o}]})}}}},Co={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,l=o===void 0?{}:o,f=r.styles,c=f===void 0?{}:f;return Ce({type:"counter",content:a},function(){return te("beforeDOMElementCreation",{content:a,params:r}),so({content:a.toString(),extra:{attributes:l,styles:c,classes:["".concat(p.cssPrefix,"-layers-counter")].concat($(i))}})})}}}},To={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?U:n,o=r.classes,l=o===void 0?[]:o,f=r.attributes,c=f===void 0?{}:f,v=r.styles,m=v===void 0?{}:v;return Ce({type:"text",content:a},function(){return te("beforeDOMElementCreation",{content:a,params:r}),Bt({content:a,transform:u(u({},U),i),extra:{attributes:c,styles:m,classes:["".concat(p.cssPrefix,"-layers-text")].concat($(l))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,l=null;if(ha){var f=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();o=c.width/f,l=c.height/f}return Promise.resolve([a,Bt({content:a.innerHTML,width:o,height:l,transform:n,extra:i,watchable:!0})])}}},dr=new RegExp('"',"ug"),Zt=[1105920,1112319],ea=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),dn),gi),wn),nt=Object.keys(ea).reduce(function(e,t){return e[t.toLowerCase()]=ea[t],e},{}),No=Object.keys(nt).reduce(function(e,t){var a=nt[t];return e[t]=a[900]||$(Object.entries(a))[0][1],e},{});function jo(e){var t=e.replace(dr,"");return Va($(t)[0]||"")}function Ro(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(dr,""),n=r.codePointAt(0),i=n>=Zt[0]&&n<=Zt[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function Fo(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(nt[a]||{})[n]||No[a]}function ta(e,t){var a="".concat(yi).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=se(e.children),o=i.filter(function(Y){return Y.getAttribute(Ge)===t})[0],l=V.getComputedStyle(e,t),f=l.getPropertyValue("font-family"),c=f.match(Ai),v=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&m!=="none"&&m!==""){var h=l.getPropertyValue("content"),g=Fo(f,v),I=jo(h),A=c[0].startsWith("FontAwesome"),_=Ro(l),P=yt(g,I),C=P;if(A){var N=Hi(I);N.iconName&&N.prefix&&(P=N.iconName,g=N.prefix)}if(P&&!_&&(!o||o.getAttribute(dt)!==g||o.getAttribute(mt)!==C)){e.setAttribute(a,C),o&&e.removeChild(o);var L=So(),E=L.extra;E.attributes[Ge]=t,tt(P,g).then(function(Y){var G=bt(u(u({},L),{},{icons:{main:Y,mask:ir()},prefix:g,iconName:C,extra:E,watchable:!0})),D=T.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=G.map(function(le){return pe(le)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function Mo(e){return Promise.all([ta(e,"::before"),ta(e,"::after")])}function Lo(e){return e.parentNode!==document.head&&!~xi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ge)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var zo=function(t){return!!t&&Wa.some(function(a){return t.includes(a)})},$o=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(f){return f.trim()});r=r.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(c){return c.trim()})});var n=be(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(zo(o)){var l=Wa.reduce(function(f,c){return f.replace(c,"")},o);l!==""&&l!=="*"&&a.add(l)}}}catch(f){n.e(f)}finally{n.f()}return a};function aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(B){var a;if(t)a=e;else if(p.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=be(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var l=be(o.cssRules),f;try{for(l.s();!(f=l.n()).done;){var c=f.value,v=$o(c.selectorText),m=be(v),h;try{for(m.s();!(h=m.n()).done;){var g=h.value;r.add(g)}}catch(A){m.e(A)}finally{m.f()}}}catch(A){l.e(A)}finally{l.f()}}catch(A){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(A.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(A){n.e(A)}finally{n.f()}if(!r.size)return;var I=Array.from(r).join(", ");try{a=e.querySelectorAll(I)}catch{}}return new Promise(function(A,_){var P=se(a).filter(Lo).map(Mo),C=xt.begin("searchPseudoElements");ur(),Promise.all(P).then(function(){C(),rt(),A()}).catch(function(){C(),rt(),_()})})}}var Do={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=aa,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?T:r;p.searchPseudoElements&&aa(n)}}},ra=!1,Wo={mixout:function(){return{dom:{unwatch:function(){ur(),ra=!0}}}},hooks:function(){return{bootstrap:function(){Vt(Qe("mutationObserverCallbacks",{}))},noAuto:function(){yo()},watch:function(a){var r=a.observeMutationsRoot;ra?rt():Vt(Qe("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},na=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},a)},Uo={mixout:function(){return{parse:{transform:function(a){return na(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=na(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,l={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(n.x*32,", ").concat(n.y*32,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),v="rotate(".concat(n.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(v)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:m,path:h};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:u(u({},r.icon.attributes),g.path)}]}]}}}},Ue={x:0,y:0,width:"100%",height:"100%"};function ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Yo(e){return e.tag==="g"?e.children:[e]}var Ho={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?Ie(n.split(" ").map(function(o){return o.trim()})):ir();return i.prefix||(i.prefix=J()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,l=a.maskId,f=a.transform,c=i.width,v=i.icon,m=o.width,h=o.icon,g=Ri({transform:f,containerWidth:m,iconWidth:c}),I={tag:"rect",attributes:u(u({},Ue),{},{fill:"white"})},A=v.children?{children:v.children.map(ia)}:{},_={tag:"g",attributes:u({},g.inner),children:[ia(u({tag:v.tag,attributes:u(u({},v.attributes),g.path)},A))]},P={tag:"g",attributes:u({},g.outer),children:[_]},C="mask-".concat(l||$t()),N="clip-".concat(l||$t()),L={tag:"mask",attributes:u(u({},Ue),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,P]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Yo(h)},L]};return r.push(E,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(C,")")},Ue)}),{children:r,attributes:n}}}},qo={provides:function(t){var a=!1;V.matchMedia&&(a=V.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:u(u({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:u(u({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||l.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:u(u({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:u(u({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Bo={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},Go=[Li,Oo,Io,Co,To,Do,Wo,Uo,Ho,qo,Bo];Zi(Go,{mixoutsTo:M});M.noAuto;M.config;M.library;M.dom;var it=M.parse;M.findIconDefinition;M.toHtml;var Xo=M.icon;M.layer;M.text;M.counter;var Ko={};function ot(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Vo(e){if(Array.isArray(e))return e}function Jo(e){if(Array.isArray(e))return ot(e)}function K(e,t,a){return(t=is(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Qo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zo(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,l=[],f=!0,c=!1;try{if(i=(a=a.call(e)).next,t!==0)for(;!(f=(r=i.call(a)).done)&&(l.push(r.value),l.length!==t);f=!0);}catch(v){c=!0,n=v}finally{try{if(!f&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw n}}return l}}function es(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ts(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oa(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?oa(Object(a),!0).forEach(function(r){K(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oa(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function as(e,t){if(e==null)return{};var a,r,n=rs(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function rs(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function sa(e,t){return Vo(e)||Zo(e,t)||mr(e,t)||es()}function st(e){return Jo(e)||Qo(e)||mr(e)||ts()}function ns(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function is(e){var t=ns(e,"string");return typeof t=="symbol"?t:t+""}function ke(e){"@babel/helpers - typeof";return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ke(e)}function mr(e,t){if(e){if(typeof e=="string")return ot(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ot(e,t):void 0}}var os="7.0.0-alpha1",lt;try{var ss=require("@fortawesome/fontawesome-svg-core/package.json");lt=ss.version}catch{lt=Ko.FA_VERSION||"7.0.0-alpha8"}function ls(e){var t=e.beat,a=e.fade,r=e.beatFade,n=e.bounce,i=e.shake,o=e.flash,l=e.spin,f=e.spinPulse,c=e.spinReverse,v=e.pulse,m=e.fixedWidth,h=e.inverse,g=e.border,I=e.listItem,A=e.flip,_=e.size,P=e.rotation,C=e.pull,N=e.swapOpacity,L=e.rotateBy,E=e.widthAuto,Y=fs(lt,os),G=K(K(K(K(K(K({"fa-beat":t,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":n,"fa-shake":i,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":v,"fa-fw":m,"fa-inverse":h,"fa-border":g,"fa-li":I,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},"fa-".concat(_),typeof _<"u"&&_!==null),"fa-rotate-".concat(P),typeof P<"u"&&P!==null&&P!==0),"fa-pull-".concat(C),typeof C<"u"&&C!==null),"fa-swap-opacity",N),"fa-rotate-by",Y&&L),"fa-width-auto",Y&&E);return Object.keys(G).map(function(D){return G[D]?D:null}).filter(function(D){return D})}function fs(e,t){for(var a=e.split("-"),r=sa(a,2),n=r[0],i=r[1],o=t.split("-"),l=sa(o,2),f=l[0],c=l[1],v=n.split("."),m=f.split("."),h=0;h<Math.max(v.length,m.length);h++){var g=v[h]||"0",I=m[h]||"0",A=parseInt(g,10),_=parseInt(I,10);if(A!==_)return A>_}for(var P=0;P<Math.max(v.length,m.length);P++){var C=v[P]||"0",N=m[P]||"0";if(C!==N&&C.length!==N.length)return C.length<N.length}return!(i&&!c)}function us(e){return e=e-0,e===e}function vr(e){return us(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var cs=["style"];function ds(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ms(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=vr(a.slice(0,r)),i=a.slice(r+1).trim();return n.startsWith("webkit")?t[ds(n)]=i:t[n]=i,t},{})}function pr(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return pr(e,f)}),n=Object.keys(t.attributes||{}).reduce(function(f,c){var v=t.attributes[c];switch(c){case"class":f.attrs.className=v,delete t.attributes.class;break;case"style":f.attrs.style=ms(v);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=v:f.attrs[vr(c)]=v}return f},{attrs:{}}),i=a.style,o=i===void 0?{}:i,l=as(a,cs);return n.attrs.style=W(W({},n.attrs.style),o),e.apply(void 0,[t.tag,W(W({},n.attrs),l)].concat(st(r)))}var hr=!1;try{hr=!0}catch{}function vs(){if(!hr&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function la(e){if(e&&ke(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(it.icon)return it.icon(e);if(e===null)return null;if(e&&ke(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ye(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?K({},e,t):{}}var fa={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},gr=ft.forwardRef(function(e,t){var a=W(W({},fa),e),r=a.icon,n=a.mask,i=a.symbol,o=a.className,l=a.title,f=a.titleId,c=a.maskId,v=la(r),m=Ye("classes",[].concat(st(ls(a)),st((o||"").split(" ")))),h=Ye("transform",typeof a.transform=="string"?it.transform(a.transform):a.transform),g=Ye("mask",la(n)),I=Xo(v,W(W(W(W({},m),h),g),{},{symbol:i,title:l,titleId:f,maskId:c}));if(!I)return vs("Could not find icon",v),null;var A=I.abstract,_={ref:t};return Object.keys(a).forEach(function(P){fa.hasOwnProperty(P)||(_[P]=a[P])}),ps(A[0],_)});gr.displayName="FontAwesomeIcon";gr.propTypes={beat:S.bool,border:S.bool,beatFade:S.bool,bounce:S.bool,className:S.string,fade:S.bool,flash:S.bool,mask:S.oneOfType([S.object,S.array,S.string]),maskId:S.string,fixedWidth:S.bool,inverse:S.bool,flip:S.oneOf([!0,!1,"horizontal","vertical","both"]),icon:S.oneOfType([S.object,S.array,S.string]),listItem:S.bool,pull:S.oneOf(["right","left"]),pulse:S.bool,rotation:S.oneOf([0,90,180,270]),rotateBy:S.bool,shake:S.bool,size:S.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:S.bool,spinPulse:S.bool,spinReverse:S.bool,symbol:S.oneOfType([S.bool,S.string]),title:S.string,titleId:S.string,transform:S.oneOfType([S.string,S.object]),swapOpacity:S.bool,widthAuto:S.bool};var ps=pr.bind(null,ft.createElement);/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Is={prefix:"fas",iconName:"code-branch",icon:[448,512,[],"f126","M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 70.7 176 0c26.5 0 48-21.5 48-48l0-22.7c-28.3-12.3-48-40.5-48-73.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 22.7c0 61.9-50.1 112-112 112l-176 0 0 70.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80S0 476.2 0 432c0-32.8 19.7-61 48-73.3l0-205.3C19.7 141 0 112.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},Cs={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8c-22.4 31.4-35.5 69.8-35.5 111.2 0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3c22.4-31.4 35.5-69.8 35.5-111.2 0-106-86-192-192-192-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]},Ts={prefix:"fas",iconName:"code-pull-request",icon:[512,512,[],"e13c","M328 24c0-9.7-5.8-18.5-14.8-22.2S293.9 .2 287 7L231 63c-9.4 9.4-9.4 24.6 0 33.9l56 56c6.9 6.9 17.2 8.9 26.2 5.2S328 145.7 328 136l0-24 24 0c17.7 0 32 14.3 32 32l0 214.7c-28.3 12.3-48 40.5-48 73.3 0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3L448 144c0-53-43-96-96-96l-24 0 0-24zM72 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm56 73.3c28.3-12.3 48-40.5 48-73.3 0-44.2-35.8-80-80-80S16 35.8 16 80c0 32.8 19.7 61 48 73.3l0 205.3c-28.3 12.3-48 40.5-48 73.3 0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3l0-205.3zM72 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm344-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Ns={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]},js={prefix:"fas",iconName:"vial-circle-check",icon:[512,512,[],"e596","M32 32C32 14.3 46.3 0 64 0L288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 161.4c-66.1 30.3-112 97.1-112 174.6 0 39.7 12 76.6 32.7 107.2-10.3 3.1-21.3 4.8-32.7 4.8-61.9 0-112-50.1-112-112L64 64C46.3 64 32 49.7 32 32zm96 32l0 128 96 0 0-128-96 0zm96 336a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm201.4-60.9c-7.1-5.2-17.2-3.6-22.4 3.5l-53 72.9-26.8-26.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.6s8.9-2.8 11.7-6.5l64-88c5.2-7.1 3.6-17.2-3.5-22.3z"]},Rs={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},hs={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},Fs=hs,Ms={prefix:"fas",iconName:"tags",icon:[576,512,[],"f02c","M401.2 39.1L549.4 189.4c27.7 28.1 27.7 73.1 0 101.2L393 448.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L515.3 256.8c9.2-9.3 9.2-24.4 0-33.7L367 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM32.1 229.5L32.1 96c0-35.3 28.7-64 64-64l133.5 0c17 0 33.3 6.7 45.3 18.7l144 144c25 25 25 65.5 0 90.5L285.4 418.7c-25 25-65.5 25-90.5 0l-144-144c-12-12-18.7-28.3-18.7-45.3zm144-85.5a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Ls={prefix:"fas",iconName:"quote-right",icon:[448,512,[8221,"quote-right-alt"],"f10e","M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136z"]},zs={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},$s={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]},Ds={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0zM502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},Ws={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z"]},Us={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]},Ys={prefix:"fas",iconName:"code-merge",icon:[448,512,[],"f387","M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32.4 97.2c28-12.4 47.6-40.5 47.6-73.2 0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3l0 205.3C19.7 371 0 399.2 0 432 0 476.2 35.8 512 80 512s80-35.8 80-80c0-32.8-19.7-61-48-73.3l0-86.6c26.7 20.1 60 32 96 32l86.7 0c12.3 28.3 40.5 48 73.3 48 44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48L208 240c-49.9 0-91-38.1-95.6-86.8zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM344 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},Hs={prefix:"fas",iconName:"pause",icon:[384,512,[9208],"f04c","M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"]},gs={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z"]},qs=gs;export{xs as A,_s as B,Ps as C,Ms as D,Ys as E,gr as F,Is as G,S as P,bs as R,ca as a,ft as b,ys as c,Or as d,Es as e,ks as f,ua as g,Ts as h,js as i,Ns as j,Cs as k,Fs as l,Us as m,As as n,$s as o,Rs as p,zs as q,kr as r,Ls as s,Os as t,Hs as u,ws as v,Ds as w,Ws as x,qs as y,Ss as z};
//# sourceMappingURL=@fortawesome-Z_TFStju.js.map
