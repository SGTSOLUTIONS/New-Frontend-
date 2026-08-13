var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),Qf._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[wt]=!0}var jt=new Set,Mt={};function Nt(e,t){Pt(e,t),Pt(e+`Capture`,t)}function Pt(e,t){for(Mt[e]=t,e=0;e<t.length;e++)jt.add(t[e])}var Ft=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),It={},Lt={};function Rt(e){return je.call(Lt,e)?!0:je.call(It,e)?!1:Ft.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function zt(e,t,n){if(Rt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Wt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function O(e){if(!e._valueTracker){var t=Ut(e)?`checked`:`value`;e._valueTracker=Wt(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ut(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ht(t)):e.value!==``+Ht(t)&&(e.value=``+Ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Ht(n)):Zt(e,o,Ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ht(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){O(e);return}n=n==null?``:``+Ht(n),t=t==null?n:``+Ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),O(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ht(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),O(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),k=h({},An,{view:0,detail:0}),Mn=kn(k),Nn,Pn,Fn,In=h({},k,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=kn(In),Rn=kn(h({},In,{dataTransfer:0})),zn=kn(h({},k,{relatedTarget:0})),Bn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=kn(h({},An,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=kn(h({},k,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=kn(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=kn(h({},k,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=kn(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),A=kn(h({},An,{newState:0,oldState:0})),$n=[9,13,27,32],er=yn&&`CompositionEvent`in window,tr=null;yn&&`documentMode`in document&&(tr=document.documentMode);var nr=yn&&`TextEvent`in window&&!tr,rr=yn&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Tn(),wn=Cn=Sn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Gt(Ot(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(yn){var br;if(yn){var xr=`oninput`in document;if(!xr){var j=document.createElement(`div`);j.setAttribute(`oninput`,`return;`),xr=typeof j.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Sr(){mr&&(mr.detachEvent(`onpropertychange`,Cr),hr=mr=null)}function Cr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,fn(e)),_n(gr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Er(e,t){if(e===`click`)return _r(t)}function Dr(e,t){if(e===`input`||e===`change`)return _r(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=yn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Kt(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};yn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),Nt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=hi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=hi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=hi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-Je(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=me(null),Qi=null,$i=null;function ea(e,t,n){D(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,he(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=T.S;T.S=function(e,t){eu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=me(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?D(Ca,Ca.current):D(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case w:return t=Na(t),f(e,t,n)}if(ue(t)||se(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Na(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Na(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Na(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===S)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=me(null),io=me(0);function ao(e,t){e=Wl,D(io,e),D(ro,t),Wl=e|t.baseLanes}function oo(){D(io,Wl),D(ro,ro.current)}function so(){Wl=io.current,he(ro),he(io)}var co=me(null),lo=null;function uo(e){var t=e.alternate;D(F,F.current&1),D(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){D(F,F.current),D(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(D(F,F.current),D(co,e),lo===null&&(lo=e)):mo(e)}function mo(){D(F,F.current),D(co,co.current)}function ho(e){he(co),lo===e&&(lo=null),he(F)}var F=me(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){T.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Ls(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,de,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref){if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a){if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(F.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,D(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&aa(e)))}function Nc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Pd(r,n,e),At(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Pa=Aa,Oa}}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=ge.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=ge.current,qi(t))Gi(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(he(F),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return D(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Ie()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=F.current,D(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(F),null;case 4:return xe(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&he(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:he(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&he(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[_t]=e,At(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,At(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:T.T===null?mt():dd()}function mu(){if(Jl===0){if(!(J&536870912)||N){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Jl=e}else Jl=536870912}return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),st(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||rt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ie(),10<a)){if(yu(r,t,Jl,!Vl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Ml(t,a,d);var m=(a&62914560)===a?$l-Ie():(a&4194048)===a?eu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=rt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,T.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=T.H;return T.H=Vs,e===null?Vs:e}function Eu(){var e=T.A;return T.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,T.H=i,T.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ie()+500,Su(e,t)):Hl=rt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,T.H=r,T.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Pe();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,ct(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,E.p=a,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ie()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=ui(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=nt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=nt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),Pt(`onMouseEnter`,[`mouseout`,`mouseover`]),Pt(`onMouseLeave`,[`mouseout`,`mouseover`]),Pt(`onPointerEnter`,[`pointerout`,`pointerover`]),Pt(`onPointerLeave`,[`pointerout`,`pointerover`]),Nt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Nt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Nt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Nt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,jt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case qr:case Jr:case Yr:l=Bn;break;case $r:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=A}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c)){if(yr)v=Dr;else{v=Tr;var y=wr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=vr):v=Er;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,zt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Mt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),At(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);At(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),At(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,At(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[yt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),ee=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,S=/^[\\/]{2}/;function C(e,t){return t+e.replace(/\\/g,`/`)}var te=`popstate`;function ne(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return se(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ce(t)}return ue(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function ie(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ae(){return Math.random().toString(36).substring(2,10)}function oe(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function se(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?le(t):t,state:n,key:t&&t.key||r||ae(),mask:i}}function ce({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function le(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ue(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u()+1;let d=oe(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u();let i=oe(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return T(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(te,d),c=e,()=>{i.removeEventListener(te,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function T(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),w(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ce(t);return i=i.replace(/ $/,`%20`),!n&&S.test(i)&&(i=r+i),new URL(i,r)}function E(e,t,n=`/`){return de(e,t,n,!1)}function de(e,t,n,r,i){let a=ke((typeof t==`string`?le(t):t).pathname||`/`,n);if(a==null)return null;let o=i??fe(e),s=null,c=Oe(a);for(let e=0;s==null&&e<o.length;++e)s=we(o[e],c,r);return s}function fe(e){let t=pe(e);return he(t),t}function pe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Le([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),pe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Se(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=De(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of me(e.path))a(e,t,!0,n)}),t}function me(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=me(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function he(e){e.sort((e,t)=>e.score===t.score?Ce(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var D=/^:[\w-]+$/,ge=3,_e=2,ve=1,ye=10,be=-2,xe=e=>e===`*`;function Se(e,t){let n=e.split(`/`),r=n.length;return n.some(xe)&&(r+=be),t&&(r+=_e),n.filter(e=>!xe(e)).reduce((e,t)=>e+(D.test(t)?ge:t===``?ve:ye),r)}function Ce(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function we(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ee(u,l,s.matcher,s.compiledParams):Te(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Te({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Le([a,d.pathname]),pathnameBase:ze(Le([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Le([a,d.pathnameBase]))}return o}function Te(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=De(e.path,e.caseSensitive,e.end);return Ee(e,t,n,r)}function Ee(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function De(e,t=!1,n=!0){ie(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Oe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ie(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ke(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ae(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?le(e):e,a;return n?(n=Ie(n),a=n.startsWith(`/`)?je(n.substring(1),`/`):je(n,t)):a=t,{pathname:a,search:Be(r),hash:Ve(i)}}function je(e,t){let n=Re(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Me(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ne(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pe(e){let t=Ne(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Fe(e,t,n,r=!1){let i;typeof e==`string`?i=le(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Me(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Me(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Me(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ae(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ie=e=>e.replace(/[\\/]{2,}/g,`/`),Le=e=>Ie(e.join(`/`)),Re=e=>e.replace(/\/+$/,``),ze=e=>Re(e).replace(/^\/*/,`/`),Be=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ve=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,He=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ue(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function We(e){return Le(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ge=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ke(e,t){let n=e;if(typeof n!=`string`||!ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ge)try{let e=new URL(window.location.href),r=S.test(n)?new URL(C(n,e.protocol)):new URL(n),a=ke(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ie(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var qe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(qe);var Je=[`GET`,...qe];new Set(Je);var Ye=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Xe(e){try{return Ye.includes(new URL(e).protocol)}catch{return!1}}var Ze=x.createContext(null);Ze.displayName=`DataRouter`;var Qe=x.createContext(null);Qe.displayName=`DataRouterState`;var $e=x.createContext(!1);function et(){return x.useContext($e)}var tt=x.createContext({isTransitioning:!1});tt.displayName=`ViewTransition`;var nt=x.createContext(new Map);nt.displayName=`Fetchers`;var rt=x.createContext(null);rt.displayName=`Await`;var it=x.createContext(null);it.displayName=`Navigation`;var at=x.createContext(null);at.displayName=`Location`;var ot=x.createContext({outlet:null,matches:[],isDataRoute:!1});ot.displayName=`Route`;var st=x.createContext(null);st.displayName=`RouteError`;var ct=`REACT_ROUTER_ERROR`,lt=`REDIRECT`,ut=`ROUTE_ERROR_RESPONSE`;function dt(e){if(e.startsWith(`${ct}:${lt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ft(e){if(e.startsWith(`${ct}:${ut}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new He(t.status,t.statusText,t.data)}catch{}}function pt(e,{relative:t}={}){w(mt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(it),{hash:i,pathname:a,search:o}=St(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Le([n,a])),r.createHref({pathname:s,search:o,hash:i})}function mt(){return x.useContext(at)!=null}function ht(){return w(mt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(at).location}var gt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function _t(e){x.useContext(it).static||x.useLayoutEffect(e)}function vt(){let{isDataRoute:e}=x.useContext(ot);return e?zt():yt()}function yt(){w(mt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Ze),{basename:t,navigator:n}=x.useContext(it),{matches:r}=x.useContext(ot),{pathname:i}=ht(),a=JSON.stringify(Pe(r)),o=x.useRef(!1);return _t(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(ie(o.current,gt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Fe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Le([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var bt=x.createContext(null);function xt(e){let t=x.useContext(ot).outlet;return x.useMemo(()=>t&&x.createElement(bt.Provider,{value:e},t),[t,e])}function St(e,{relative:t}={}){let{matches:n}=x.useContext(ot),{pathname:r}=ht(),i=JSON.stringify(Pe(n));return x.useMemo(()=>Fe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ct(e,t){return wt(e,t)}function wt(e,t,n){w(mt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(it),{matches:i}=x.useContext(ot),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Vt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ht(),d;if(t){let e=typeof t==`string`?le(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):E(e,{pathname:p});ie(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ie(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=jt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Le([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Le([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(at.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Tt(){let e=Rt(),t=Ue(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var Et=x.createElement(Tt,null),Dt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ft(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(ot.Provider,{value:this.props.routeContext},x.createElement(st.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(kt,{error:e},t):t}};Dt.contextType=$e;var Ot=new WeakMap;function kt({children:e,error:t}){let{basename:n}=x.useContext(it);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=dt(t.digest);if(e){let r=Ot.get(t);if(r)throw r;let i=Ke(e.location,n),a=i.absoluteURL||i.to;if(Xe(a))throw Error(`Invalid redirect location`);if(Ge&&!Ot.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Ot.set(t,n),n}}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function At({routeContext:e,match:t,children:n}){let r=x.useContext(Ze);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(ot.Provider,{value:e},n)}function jt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:We(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Et,o&&(s<0&&c===0?(Vt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(At,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Dt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Mt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nt(e){let t=x.useContext(Ze);return w(t,Mt(e)),t}function Pt(e){let t=x.useContext(Qe);return w(t,Mt(e)),t}function Ft(e){let t=x.useContext(ot);return w(t,Mt(e)),t}function It(e){let t=Ft(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Lt(){return It(`useRouteId`)}function Rt(){let e=x.useContext(st),t=Pt(`useRouteError`),n=It(`useRouteError`);return e===void 0?t.errors?.[n]:e}function zt(){let{router:e}=Nt(`useNavigate`),t=It(`useNavigate`),n=x.useRef(!1);return _t(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{ie(n.current,gt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Bt={};function Vt(e,t,n){!t&&!Bt[e]&&(Bt[e]=!0,ie(!1,n))}x.memo(Ht);function Ht({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return wt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ut({to:e,replace:t,state:n,relative:r}){w(mt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=x.useContext(it);ie(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=x.useContext(ot),{pathname:o}=ht(),s=vt(),c=Fe(e,Pe(a),o,r===`path`),l=JSON.stringify(c);return x.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Wt(e){return xt(e.context)}function O(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Gt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!mt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=le(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=ke(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ie(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(it.Provider,{value:c},x.createElement(at.Provider,{children:t,value:h}))}function Kt({children:e,location:t}){return Ct(qt(e),t)}x.Component;function qt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,qt(e.props.children,i));return}w(e.type===O,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=qt(e.props.children,i)),n.push(a)}),n}var Jt=`get`,Yt=`application/x-www-form-urlencoded`;function Xt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Zt(e){return Xt(e)&&e.tagName.toLowerCase()===`button`}function Qt(e){return Xt(e)&&e.tagName.toLowerCase()===`form`}function $t(e){return Xt(e)&&e.tagName.toLowerCase()===`input`}function en(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tn(e,t){return e.button===0&&(!t||t===`_self`)&&!en(e)}var nn=null;function rn(){if(nn===null)try{new FormData(document.createElement(`form`),0),nn=!1}catch{nn=!0}return nn}var an=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function on(e){return e!=null&&!an.has(e)?(ie(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yt}"`),null):e}function sn(e,t){let n,r,i,a,o;if(Qt(e)){let o=e.getAttribute(`action`);r=o?ke(o,t):null,n=e.getAttribute(`method`)||Jt,i=on(e.getAttribute(`enctype`))||Yt,a=new FormData(e)}else if(Zt(e)||$t(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?ke(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Jt,i=on(e.getAttribute(`formenctype`))||on(o.getAttribute(`enctype`))||Yt,a=new FormData(o,e),!rn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Xt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Jt,r=null,i=Yt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function cn(e,t){if(e===!1||e==null)throw Error(t)}function ln(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&ke(i.pathname,t)===`/`?`${Re(t)}/_root.${r}`:`${Re(i.pathname)}.${r}`,i}async function un(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dn(e){return e!=null&&typeof e.page==`string`}function fn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function pn(e,t,n){return vn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await un(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(fn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function mn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function hn(e,t,{includeHydrateFallback:n}={}){return gn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function gn(e){return[...new Set(e)]}function _n(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function vn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!dn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(_n(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function yn(){let e=x.useContext(Ze);return cn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function bn(){let e=x.useContext(Qe);return cn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var xn=x.createContext(void 0);xn.displayName=`FrameworkContext`;function Sn(){let e=x.useContext(xn);return cn(e,`You must render this element inside a <HydratedRouter> element`),e}function Cn(e,t){let n=x.useContext(xn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:wn(s,p),onBlur:wn(c,m),onMouseEnter:wn(l,p),onMouseLeave:wn(u,m),onTouchStart:wn(d,p)}]:[a,f,{}]:[!1,f,{}]}function wn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Tn({page:e,...t}){let n=et(),{nonce:r}=Sn(),{router:i}=yn(),a=x.useMemo(()=>E(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(Dn,{page:e,matches:a,...t}):x.createElement(On,{page:e,matches:a,...t})):null}function En(e){let{manifest:t,routeModules:n}=Sn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return pn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Dn({page:e,matches:t,...n}){let r=ht(),{future:i}=Sn(),{basename:a}=yn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=ln(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function On({page:e,matches:t,...n}){let r=ht(),{future:i,manifest:a,routeModules:o}=Sn(),{basename:s}=yn(),{loaderData:c,matches:l}=bn(),u=x.useMemo(()=>mn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>mn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=ln(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>hn(d,a),[d,a]),m=En(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function kn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var An=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{An&&(window.__reactRouterVersion=`7.18.2`)}catch{}function jn({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Gt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var k=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(it),v=typeof l==`string`&&ee.test(l),y=Ke(l,h);l=y.to;let b=pt(l,{relative:r}),S=ht(),C=null;if(o){let e=Fe(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Le([h,e.pathname])),C=g.createHref(e)}let[te,ne,re]=Cn(n,p),w=In(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ie(t){e&&e(t),t.defaultPrevented||w(t)}let ae=!(y.isExternal||i),oe=x.createElement(`a`,{...p,...re,href:(ae?C:void 0)||y.absoluteURL||b,onClick:ae?ie:e,ref:kn(m,ne),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return te&&!v?x.createElement(x.Fragment,null,oe,x.createElement(Tn,{page:b})):oe});k.displayName=`Link`;var Mn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=St(a,{relative:c.relative}),d=ht(),f=x.useContext(Qe),{navigator:p,basename:m}=x.useContext(it),h=f!=null&&Vn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=ke(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:ee,isTransitioning:h},C=b?e:void 0,te;te=typeof n==`function`?n(S):[n,b?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return x.createElement(k,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Mn.displayName=`NavLink`;var Nn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Jt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(it),g=zn(),_=Bn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&ee.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Nn.displayName=`Form`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=x.useContext(Ze);return w(t,Pn(e)),t}function In(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=vt(),d=ht(),f=St(e,{relative:o});return x.useCallback(p=>{if(tn(p,t)){p.preventDefault();let t=n===void 0?ce(d)===ce(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Ln=0,Rn=()=>`__${String(++Ln)}__`;function zn(){let{router:e}=Fn(`useSubmit`),{basename:t}=x.useContext(it),n=Lt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=sn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Rn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Bn(e,{relative:t}={}){let{basename:n}=x.useContext(it),r=x.useContext(ot);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...St(e||`.`,{relative:t})},o=ht();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Le([n,a.pathname])),ce(a)}function Vn(e,{relative:t}={}){let n=x.useContext(tt);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=St(e,{relative:t});if(!n.isTransitioning)return!1;let a=ke(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ke(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Te(i.pathname,o)!=null||Te(i.pathname,a)!=null}var Hn=c(g(),1),Un=`/assets/logo-D8rRDZVI.png`,Wn=`/assets/h1-BNkBUtaW.png`,Gn=`/assets/h2-DV4BphkF.png`,Kn=`/assets/h3-Bxpzch3l.png`,qn=`/assets/h4-i7rgBQOe.png`,Jn=`/assets/h5-DXKqnTit.png`,Yn=`/assets/h6-BqNm4WCU.png`,Xn=`/assets/h7-Bmjs_YcC.png`,Zn=`/assets/h8-ChD36l_h.png`,Qn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),A=o(((e,t)=>{t.exports=Qn()}))(),$n=[{id:1,title:`Web GIS`,link:`/services/web-gis`,image:Wn},{id:2,title:`Mobile GIS`,link:`/services/mobile-gis`,image:Gn},{id:3,title:`Spatial Revenue Intelligence`,link:`/services/geo-property`,image:Kn},{id:4,title:`LiDAR`,link:`/services/lidar`,image:qn},{id:5,title:`Photogrammetry`,link:`/services/photogrammetry`,image:Jn},{id:6,title:`Drone & DGPS Survey`,link:`/services/drone-survey`,image:Yn},{id:7,title:`2D Mapping`,link:`/services/2d-mapping`,image:Xn},{id:8,title:`Consultancy Services`,link:`/services/consultancy`,image:Zn},{id:9,title:`Website Development`,link:`/services/web-development`,image:Wn}];function er(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`header`,{className:`header01 isSticky`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsx)(`div`,{className:`col-lg-12`,children:(0,A.jsxs)(`div`,{className:`navbar01`,children:[(0,A.jsx)(`div`,{className:`logo`,children:(0,A.jsx)(k,{to:`/`,children:(0,A.jsx)(`img`,{src:Un,alt:`SGT Solutions`})})}),(0,A.jsx)(`a`,{href:`#`,className:`menu_btn`,onClick:e=>e.preventDefault(),children:(0,A.jsx)(`i`,{className:`twi-bars2`})}),(0,A.jsx)(`nav`,{className:`mainMenu`,children:(0,A.jsxs)(`ul`,{children:[(0,A.jsx)(`li`,{className:`menu-item`,children:(0,A.jsx)(k,{to:`/`,children:`Home`})}),(0,A.jsxs)(`li`,{className:`menu-item menu-item-has-children`,children:[(0,A.jsxs)(k,{to:`/service`,children:[`Service`,(0,A.jsx)(`span`,{className:`dropdown-arrow`})]}),(0,A.jsx)(`ul`,{className:`sub-menu`,children:$n.map(e=>(0,A.jsx)(`li`,{className:`menu-item`,children:(0,A.jsx)(k,{to:e.link,children:e.title})},e.id))})]}),(0,A.jsx)(`li`,{className:`menu-item`,children:(0,A.jsx)(k,{to:`/about`,children:`About`})}),(0,A.jsx)(`li`,{className:`menu-item`,children:(0,A.jsx)(k,{to:`/Contact`,children:`Contact`})})]})}),(0,A.jsxs)(`div`,{className:`accessNav`,children:[(0,A.jsx)(`a`,{className:`search_btn`,href:`#`,onClick:e=>e.preventDefault(),children:(0,A.jsx)(`i`,{className:`twi-search1`})}),(0,A.jsx)(`div`,{className:`shoping_cart`,children:(0,A.jsxs)(`a`,{className:`cartBtn`,href:`#`,onClick:e=>e.preventDefault(),children:[(0,A.jsx)(`i`,{className:`twi-shopping-bag1`}),(0,A.jsx)(`span`,{children:`4`})]})}),(0,A.jsxs)(k,{className:`berpo_btn`,to:`/contact`,children:[(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-text`,children:`Get A Quote`})]})]})]})})})})}),(0,A.jsxs)(`section`,{className:`popup_search_sec`,children:[(0,A.jsx)(`div`,{className:`popup_search_overlay`}),(0,A.jsx)(`div`,{className:`pop_search_background`,children:(0,A.jsx)(`div`,{className:`middle_search`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsx)(`div`,{className:`col-lg-12 text-center`,children:(0,A.jsx)(`div`,{className:`popup_search_form`,children:(0,A.jsxs)(`form`,{method:`get`,action:`#`,autoComplete:`off`,children:[(0,A.jsx)(`input`,{autoComplete:`off`,type:`search`,name:`s`,id:`s`,placeholder:`Type Words and Hit Enter`}),(0,A.jsx)(`button`,{type:`submit`,children:(0,A.jsx)(`i`,{className:`twi-search1`})})]})})})})})})})]})]})}function tr(){return(0,A.jsx)(`section`,{className:`topbar01`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsxs)(`div`,{className:`row`,children:[(0,A.jsxs)(`div`,{className:`col-md-9`,children:[(0,A.jsxs)(`p`,{children:[(0,A.jsx)(`i`,{className:`bpro-mail-2`}),(0,A.jsx)(`a`,{href:`#`,children:`sgtsolutionsinfo@gmail.com`})]}),(0,A.jsxs)(`p`,{children:[(0,A.jsx)(`i`,{className:`bpro-phone-ringing`}),(0,A.jsx)(`a`,{href:`tel:+1245698909`,children:`Phone: +91 89031 38792`})]})]}),(0,A.jsx)(`div`,{className:`col-md-3`,children:(0,A.jsxs)(`div`,{className:`topsocial`,children:[(0,A.jsx)(`a`,{href:`javascript:void(0);`,children:(0,A.jsx)(`i`,{className:`twi-facebook-square`})}),(0,A.jsx)(`a`,{href:`javascript:void(0);`,children:(0,A.jsx)(`i`,{className:`twi-pinterest`})}),(0,A.jsx)(`a`,{href:`javascript:void(0);`,children:(0,A.jsx)(`i`,{className:`twi-twitter-square`})})]})})]})})})}var nr=`/assets/logo2-uQVAidV0.png`,rr=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NTA0OURCRDRDMjgxMUVDOEFGRDg3Rjg2NUM0MjI3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NTA0OURCRTRDMjgxMUVDOEFGRDg3Rjg2NUM0MjI3NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg1MDQ5REJCNEMyODExRUM4QUZEODdGODY1QzQyMjc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg1MDQ5REJDNEMyODExRUM4QUZEODdGODY1QzQyMjc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgASwBVAwERAAIRAQMRAf/EAJwAAAMBAQEBAQAAAAAAAAAAAAUGBwgEAwACAQADAQEBAQAAAAAAAAAAAAACAwQBBQAGEAACAQIEAwQGBwYFBQAAAAABAgMRBAAhEgUxEwZBcSIyUWGBFBUHkaHBQlIjM7FicpI0FtHCQ3O0NUWFF0cRAAICAgIBAgQFBQEAAAAAAAABEQIhAzESBEFRYSIyE8HRQmIU8HFSQwUV/9oADAMBAAIRAxEAPwCt9adY3893PY2UrW9pCxRmjOl5GXIksM9NeAGIt21twizTqSyyT7JITvdyWJZmLEscyTXCHwPXIwsRnXAhQDN2uLeCEyTMEQZsx4AYFI1sjO5rabjvF7yZCXuJI4RInmBkHFq8acMPdutZFVr2tBpn5ddFbL01tMFvbQAyFQZpiAXdqcScT632c2LL1VVFQt1Z07Y7zYta3MIIIOkjiD6sM209gNV/czt8wPl/vmzT+9Ru01suceeYH7cLpsawwtupNSjm6V65u91NpZQxciTb438THVqdanTnx4ZYptSDnJlF3Xc734Zs+97deTWF7KFJ5EjJmRWjaaVGfA4k23dcoOunuxnj+d/Ur9HzwiKEdSwXUNo12QOWYJ4pXFwsfl5imAqV8tSD+7hn/oP7U/qmBX8Z9+oqTdXSsWJgJZq1J9eGjpFXa+ppY97lPJ41rg3XAKvkPP1XKeEOF9Rndg7qPcbSewD3T6BqAjh4aipzJHorgcIJOSZRSC36ytbeAeGW5hdzxzqCcHbND1MbDS+79T3ljCqLuNrtCUpFJcIZpXoPMqAqAMTan6Is2r1Orp7c94v9snmubsXTRK7JcCEw8wgV0hMG2zFVYETddpurgNLcbO243dxnzrmfUAvojj8VMZOOT0Z4kmVttjbN1FMk0Is0hlaQgtVhqJYLxzFD2HDq7JRLt1Qxn2u/u+oBeW1sG0Wqxyxu+Sh1qvh7xXgMK21XXIluyfy8hD4Lec3l+8R8wpU5+HUF1hf4tOIftoZ92/tkb7hLUVpEv0Y6gqWJdmYf7gkUIvFsqYJ8Hk8htSqljyQUUEu2QUAZnPuwqRgi31ym43ly24Pp2uSNxAyeaRnU6Co9Ax7gNZFHaJBH1XtfvamN0ukDl+JpwLYK30ODda+dGtLGz2mWFZpIgJWFDLWj6adrcQO7EmpqC+9XJ+ZuoNgsoA6hjaxs0Y0IxDmlGoaZj11w13qgFSwtWXWLx2szQWcrWEbsFL5NorkVB4jAS4wHhuSLfOy8iurmy3KCPTbu/LkyprVhqWvrGnLD/EzKI/O9GenRF/evaQLdXZtoI6xRXKMA3h/MWN6g8RXTU4LYlJLVwPXwza/hujnNp1843Os83m1rr1Vrq9XoypTHLm/fg6MU6BSSZnGf0Y6pBIoW9U6jfvOCfAK5GaWWVo5W0AKFIpwBBFDXChkE+6jWxEJtoiIJIAI42QHQyBfut2Yz4h/Ane2yW1rdSz3hkCRPq1p4iCTT28MUXTskkK12VW5NK7Devv8A0ta3u3XhjN1AoBPYaUIPoNcscu+vrZo6tNvaqYQ2e26mFsbLfBJZ2EZpClhyyjRD8Uj+PUe3IUxZVY+AKfsk7fEA9TdLbffX1tFtqzw20cqNNcPNI8jBTmoo2kBu7BWdVwY635u1/ZEw+eG8WHvlvtFrprHIshVexI00j+ZicF4tIlkHl3mEA+mr54gjJI8FtKyJcPGA+pEodJjINHU8G9GC2ITV5KlXYxZmYXMmhmCtJUc0uqkhNOmnlYtTT68c3rbuX9q9Qu95GFrjowRCpBcCTqM6fxGuCjBnqG9xugNFq76Y5gCzA+Ig8Rn5R2Vwiw6vAlb1K9vAg+49UahyOgZ5e2mPcmzAkzW9xcWsttCigKRIxJABoCMq8fNiirhimpQ2/Knft52oXG1heYIm5q2pNDRh4in+GJ/Lqm+yKPEs0mmXDavmZYPAsN/ZykqKZCrdxphFNkYY+1VysAvq75kxQbbcvY7c0SIhImkAQCg/mJw76hbt1Msz3l3uu7S313IHuJyHcsQBn90V4UGQx0IVVCOZLs5ZR+itjt5kZZZk90LIZ6q2tdJJU0APmzFezEexyPSHUzRDc12zlSe5Fi3O0GvLAHj4auJ+zCftrkL7r4PBLxitGOLIFyB7Rx/cAAIBLeY41rAM5GPc7eaSWFFKCEqGPMqcwTkR6qasS25KaiP1De2Ad1kSeI18csiVRnJIFGFKL3YJY4Pc8i7DdRBz7wrNCK1VGCip7FLcPow3q2pQvuk4Z2bHvybXeJuNi0ckdq+i5gcaiUbzVIz7qYC1G1DGUullFosHsNxtorq1QGKaMSRXEZ1IR6AxAPsxI6wyp2kUvmW5j6duwGJIjb2avD9uHaV8yJ97+VkZXbI0WGFHVrh5KlzwKcMWu+SKtfQo3QV/uGxtMVMkc0QCCKSvLlj4lXHZUNiW+RyWBkPWj/FV3TRloaPV98x+E8fxDyavbgIA65PK7DZ8tMuzDVfI21BdEkse71Ze3FCeCdpyMTX7T27xB2WYgctwcxTvr9GF3rjAyls5FWaCK5vLk3DFgq1kAcsrMDpBFeHDF3j+MkptycfzfPs3FPpAd5ZwvUKKL2CuHupLXYwDLata3IcFljc6ZdNalTkR9GJ9uqVg6Hj+VnJoDoTkw9KRRWbiS3jjJiIPCuZGONeeznk79IdU1wLPzMaeTpGWUj+pdI1PqDBm/ZhmlxYDepqTnp5oYnmnuNOtvyk1ZlQ9FJA7sU3yRLDHDapJY7cQ3MuoQqimo1BpHVUfSwrXSmmmEXUMbS0oZG6cty6XfPPwpVao5Z5nKYq1NHm1eH0YV91cBfbcyWa1+T8BUe8TE+kKAMXLxPdk78r2QpdefLHaNnC7hFIw0HxKxqDgd+vrXAWnb2tkmfU+6bVYbVPdWhDXNAkA9DudIPs44Hw+ztnhGf8AQtVVivNv6Ymcy7FnJDG5WQRpLIw4lnIAqf3VNMdaWfPQpk4g0zJG6SM9UV5A1CVrUCnp8vDGSMaRxX9xW2ct5q6Gp31BGMbwbrr8wydD9ZX+w3bNEDPaOwW8szwdGHnSvBwPpxPv8dbF+4s8XyrabfsfoVO4t9l6k6WUW8iz28TyGnA0YZBhxDLw78chzRw0fRV67KzV4I7v21w7FcAMRcSCkoiNCMiVZXHoKnFumzsQeTTqCX6muo7iKaz1KYiDCJDXSPwVGZA9Zw9a/cjdsYKAPmcTsTx8tviKyrERnXxKzaq+jw0r9uFfwdfft+n2+P5Gfzt3XpPzf5fD8zZG63jWmtTkRw9Y7MW+gBK+srd9/je2llZUaoFDiduXkasIz98w+nrXat/2/p61laTmFZ7pmNcyDpX2LniiqXoRb75bfojktUD3u6AjIIlPUEdRhvqyK301BNhEouoRIKqymg/gY0wI2wHvAoqo9DKwPYyk0wLG0PTb3IuFl/0yqxydwFK4JGbFgOiK5tpl0MVDGraWKgkLUcPxDAbVCk94123CB1zt8jDmoSWYVoxJNR34y9JUobp39XDOC0tgtyoeLOoYIeBoew4VLgptEj/F0Ef7OuesHgYWI3GCzgmr+WyGGYytXhpVxHHXhqNOOMzBnVG1OqeX7mOZyNOf6uvVX93l59+GmskW7U5jUrSppor9VcSX5H0IF1zX/wBky111zpzfN+kPLT6vVi3Vwjl+TzY5rD+t3T+B+PHzjDFyya301BkX69rw88vDjxb6seYQAv8A+qn/ANxuHecAyivCPXZ/0W7m49+NqZt5D24V9zi4+RfNSvt+zB24J9f1Hw4Q/wC37OzHkeYW6W+H/EovfvhfL5vg+L+++7avV7j+ZThr1eH68JX1Mu/1r8fwNkf/AC7/ALD/ANM/8B+n/wAX/LjB3of/2Q==`,ir=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5M0Y1REEyQzRDMjgxMUVDOENBNUU3NTM0NzI5MTU2QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5M0Y1REEyRDRDMjgxMUVDOENBNUU3NTM0NzI5MTU2QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkzRjVEQTJBNEMyODExRUM4Q0E1RTc1MzQ3MjkxNTZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkzRjVEQTJCNEMyODExRUM4Q0E1RTc1MzQ3MjkxNTZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgASwBVAwERAAIRAQMRAf/EAJ0AAAIDAAMBAAAAAAAAAAAAAAUGAwQHAAIIAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQAFEAACAQIEAwMIBQcNAAAAAAABAgMRBAAhEgUxEwZBIhRRYXGBkTIVB8FCUmIjoaIzQyQ0RLHR4XKCkrLCNUUWFwgRAAICAQQBAQgCAwAAAAAAAAABEQIDITESBEEyUXGhwSJCExRhYoHhgv/aAAwDAQACEQMRAD8A27rnqWyutqudtsNwXxcjCMpAxLBa96pTP1Yh7PYSUJ6lnXwWbmNBetd13WHaYrCOFEVU5bTyVLMPLoHD1nHmXztKEehTqpuWwNf9QW23aVvdxClRRIagn1IK4TV3tsVrDjS2Fq9365u5S9jaSSgmgmuCUHszamN/UnWzGrsKqhIrvbb1ekJJdgav1MY5Sj0uc6DznD6YqV2Qi+ewJv8AqfpDZ9dlZXUO4bwBWVrdWktlpxVpAaufOMsVrBZ6vYgt2vCC2y9X9G3amLdblduuGPcNqz3EenhWQSKoX0asc8D8ArsMKG22x5HXb72K9RQGZoSVKg9rIajCrVaHUyqxEbYQ1IbOle7kfYKjGDUdotxaydbmOZraZc1lQmKQV+8mCTfgC1U9xvT50TN01KOag3aKeODxBVO9HIkjcwL7upTHQ5UzGWK/z24fyR/q15/1FCb5g2cH4OybYZK/xE9Ik9NBVzjzVhfk9NtAe83fqTc2/bNxMUJ/h7UcpfW2bHBcEvBysctdusIwH0DV2yVqx9JNTjW2YFYbKMjVGxUnAycCOu76Cx6YuorlgWkWtASKgV0ioIrVuIxX1ay5Iu3aFB592UX8t0VtpeTLI1CaZUr5jj1LwlqebRNvQc7bozq2MyXcESX4Yd1VFWyzy7fVidZqPTYpfWstdx1+VUW8fHDG0D20CJM9/E0RRUhEZFdZyyOeOzKrqZi5Jhdt33mcGlEFaCgqSPKCKYg+lHrLDZk9h0pv+8PqhgmnJ7QDT10ywysvZA3rWvqYc/6a6r5Jn8IurL8LUurhxpg/xXF/sYJgU7zbNz2+Uve7bc2xpQu0bBf5sTtMJXT2PsF9Zkd0gntXtwLTGErbnYxLV3CDia4ziztiI9Z28Snk1kUZVAOmvp4Y78ftOVgL1bdR79tUUsytocm3REJyJaurLt4ccUYb8VoJyYFZ/UJ/RnSTC5u7mVi62zlI6DJiDmcU582iS8knX6+rb8Gn9P8AU2xbcyLdtPEjOBzjGeVqGVAyk0xOsTKLZkjZej7Xat6iu7dZKwTx6ZkQgMyNhuOkymT5cjq01uNVj0P0tZKBDt8bEZ6pBrOXpw2uGq8CL9vJbdhmGKKJNESLGn2VAUewYYlAhtskpjTDzPt3/qLf7eRbfqLppZErpd0WSFqdvdcOpxM3C1LK4ZemgYvOt/l915drsO07C0G63SfjbgYVU2wPBtUfE+nGZqJY62X3MZg5VyWrZ+hT7xi6Y+RnSdrNHdXaSbnoqH8We6WHboFB7cBXHPuAydh+NB6fZNpt447OCygjtgpPJWNAnHyUphyqhCvbeTPvmb0VsUVlb30NuLKGITG6Fuiqr5Ky1Ay1VXunC8lEloinDmtOrkxHpe+EV1yoyEZ3LCvAluIwGSvkfiv4Gndtv2GG9t0eGFb67IkLHuKSCBqpXTXy0GOre0B8Kybp0Dsm0bJYz3UMWq6vZXkafukmMmqKjD6nkxZR6Hl5vUwlunVvg7xbVYQSUD6iSTQ+QYXfLxcHUxSpB8/Vl0Yyy81QSO8QqqM/bgXkcbM1UUjdzG5Wr7ta+quHyKgz2+6S22ZZLeV+YwBWrqDnTjTE7pJXXM1qC/lp0HddJ7lv91czw3MW5Kht5owyyAp9RkPdp5xhjcUj2CrN2vPtHaK9ukifl5JWrP5CfJidWcGtKT7aXBeSWSVyVjUamPZxwzE5MtoZL84OtrqS2O0coxI8nMhlAIDRrxBPaw7cDmTlewf1ohvyYNbbq1tfiTVnUhewgtlqGG8JQPOGOfSXSsvUfUdjYlp55GYPDeSUkjTQdVagg9nDHVYV431PSd7v+2bfK9oNbNBSPSop7oA8wwFs9a6CVitbUV923hLrc47xBymjQIqMQa0Na4lyZZtJRTHCgqXW5zzACRqqCCFGQqPRjHks9wljSNX5v7Fr7OVX82uPRnQgjUSY93s7m5mnRiEaSi1BNchwoMSrIm5KODSC3NURNFmrsAAzghc/P2nzDDt1CFzGpftLS3WKgkM6NmQ2QqPNx9uCriS3F2yNkG72881lLFA4RipMYAoAwzGQ84w2qgWxJ6v6W23f+npI5pI7aQDm21xKwVYpgMu8ew+6cFavJQFS/Fyef7Pot7jdmt76E8mFi0oGeQzNGHl8oxI8joX8FY27/wA6bZsEnT/xqGxa33Ya4ZSZHdVjY1GhWPdqMjihoidvBd6kkI6gv88hKc/UMeVl9TPQx+lCzc3cXxWJVkDkAVVTqPsFcBDCkJPFdsKiJ1B7XGgfnUxp0o0UdXbIdtMHiPxlhEZGlqayhp6qjji/81YI/wATkDQXK2u3No91WaQIONQMgPZiZWhQMiWEvFyGKBZE0XXLUzrx0E5lB9OLsacakt9yeHd4bW6S0m7pddYk4iudVPqw1LQXITZ0dVdGqrgMrcQQcwcYcKPUvQO07zA0czSChLRDUSsbVrVFJoMNreAHWRfbo+bb7qyhZn3NpHKtXRFK8SKWaPVkvAZE9lcLyYq3cjsWe2NQMi2fUtnc28/T9nb28L3MbX9tKaObbg6JorGGFcj6sNhRqJbZB8y/lnadRKdytWeO8hUma3R2RZ1GdaKR3x+XEWXH5W5Xiy+HsJ3TO07bte37csEdJ5LqVC1TnGFYtqpx9eE49dWPvo37glcyxxyOK0VSQM+AHpxNbdja7AvxSfFz3u7yB7deMCDfTW7+K3BbeV0EtuzSSxqagKg19ufkwzEpshOTSoWS/cStcSGiyNx81cenVEDOdVXIs76K7oQkfMNewjlkimG0QuzLfQe8i96X28yPqkESo1ewr/RjLrU2r0GI9704E0G7klJ9um+zdBa+aSN0/wA2CRjDFq7FK9vbgGEWOcFK1yJ4Hy0xxxje523UJ3zcbba4JGhguXZDGMlEp1DM0pWuPOvR8mkX1uuKkp7tsm5m2ihv3ktpmUsVyOqpp3sJtVrcbWyewt/AZPGm35/cMeqve4A08vnx3gI1iLpu32abdna2SOd5dJuSo5jQj3aP9llpi3FV1bRHkumkdLFrDcZeTOrLKVOkpmgC9i+rFa0JWQddO1vsMkxHMEMDmKane1xoQAw+9htUKsL3y03SW12KKK6DI66e6KV4Y26lnVZptjeRTrVGr5jxwpoZJ23SIGCJjly7iBx6Oao+nHIxl21cKzLTgaUxljTvdOOVTgK1HpxiOYtRQtHvG4OpIVzC9K5GqgE/m4S19bHz9KF3rVz4+AZn8L+VjiXsblPX2F9dlujZSb2VZbZJUs0yyZnDyOf7Ghf72FcHxn+RvNcoNp6x5XgBzPD01DT4jmVrnw5f05Y9VnliHuHO5Q/euXXu/DuVo9f6yvpwygFgf1nz/wDry+1+L+rXn8rmU1L72j6vl7aYOu4D2F7pqvKNPsj3aU4dtcEzkPfT+uqfpuHbpphdgqh7dq/D3pWtY6cK/pF4VywCDFLqPxviJNXxelTX908JT7+nP2Z4jz7fcXdeJ+34yTdMeI8G/wDrHKqaeN5HIpX6n62nkrnjuv8A9fIzsx/X4yWN3+Ic8+F8Z+hj1eC8HWve97xX5KYbf1CMfpEzcvEf8htvifxPk8vvfEOTyKZ+98M/Fp/Vz9WJsnq1j/JRj20+H+zaMv8AiH+2U5Pn+G+9/g+nFf2+PkS/d5+Z/9k=`,ar=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMTlCOThEOTRDMjgxMUVDOUY3MkMyNEQ1NzNCNzNBMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMTlCOThEQTRDMjgxMUVDOUY3MkMyNEQ1NzNCNzNBMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkExOUI5OEQ3NEMyODExRUM5RjcyQzI0RDU3M0I3M0ExIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkExOUI5OEQ4NEMyODExRUM5RjcyQzI0RDU3M0I3M0ExIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgASwBVAwERAAIRAQMRAf/EAJQAAAIDAQEAAAAAAAAAAAAAAAUGAwQHCAIBAAMBAQEAAAAAAAAAAAAAAAIDBAEABRAAAQMCBAIIAQoDCAMAAAAAAQIDBBEFACESBjETQVFhcSIyFAeBkaHBQlJiIzMVFrHhcsKjsyQ0NUUXJjYIEQACAgEDAwQDAQEAAAAAAAAAARECAyExEkEyBFFhcTOBoSITFP/aAAwDAQACEQMRAD8Ae/cnft0uEl+3wXHY1pacWyosghT5RVKlKUnPRWtBwI44jyZeThbFFccai9fIhk7VgIT4lEJIrX7GPPx9xZkehn6rHPjXGE66gBAdb66+buxVdri9ehPjnktDUIawhubXgZax/dow6nYhWTvZLbVoTKBWQEh1JKjkAAa1ONQLEP3c/wDoiO6yqz7MWsOhakybupIACUmlI4NfMfrkd2HzIPGBJ2J73e4VquiFSLk/dIJ/PiylF1JBOZBNVJPccZZGpHTm0L5GvFiF2jflS169PEpNKKSe45Y41KGELnVSotSD4hwFPoGCTFtBZ1LYcCymix5XOBFRTwqGY+GNaOknF+k8kslxIf1BSV0FVN56qdFUqpnTgevPHHGCemlJZaQtxY8y/MfKenHmOkdC1ZJe5Z3g6qNs+IpK1IIIAUkkHy9mEYlNh+R6CPY23JyUynZj2uM42Q2VEpVVYyNTi2+JcW/YjrkfJI0jmIbamFRoDMX87SMHTsRmTvZnnu5uqRbbEm2xKpdualBx0HMMopqSO1dad2MTTcB0XUye3bWlXGBFlxipa3nFIeqKIQkGgNfhmMMtmVW0za+O7VTXU0zYMW1Wa4JQ6WnXz4CVpBCjxoMjTuOI73b16HoYsVUo6m+bWXEbsDj0NKEMOucxCGxpQCoZ6RTpOKscuqPNzxzYQVLdfLPMSBRQoRTr7MUkoQub6iS2MqAZ/DGnAnmHX5uAyPef5YAYIcmwbrRFiBfptbw8CgB5TwGJbYmMrlLsmy3G5WaNAZDS5LYq6HgCjwChp8cRYsTtdr0K8uRKqZmK7lPj31iAlDLbKnEpdS22kV0q6xii1f5erF1ctaD5MNWJI4f5tf8AhIw+n1oRk72ZF7lQ7hdtyW+0NAOPyShuKgGlOYaCvxBqcJxzybKWlwRBsuI/ZnZluuquS/6jJhVRoNKHj9qmM8hzEDvF6/I+7Xtcm87nhQokJspZUVOuFIq6CKHWqnlCcs8BSrexTksqptm9W22MR2pkFlKQ3GShtoIyA0IAyHRj0q1hQeDa0uQXH5vOQlxYVRXQKZ1x1TmGpiFF1ZABBAr8mCZiRQ9GnNWfAfThcjIBs+U0H7O0o0LiE0FOkAY661QFdmR2JSfUlWdKOUy7cReN9livP9dTFLg3XdqCEmiX6k0+/jr7MZj2Q7uMPyW5DTIBUZq+78pGH4vrRLk72SxvbRlN5a3G84ZM6Pkw0ryNkJIqOnVQ9OOria1DtllcQhetk2e+pQq6QqupHgkt+F1I6tQ4jsNcbaie5lMrrsMe39s2nakhuc044pl1tEVtASFAKUfOqgrXoJOOx4FTWZCy+Q8i4wkMIAjiW8iq1O0UpPVl0UxQ2SpAGIav1p9cfxwNQrDE4El1wK6h/DBMypBpGoprllhY0z1q4bgEXnzZzC1MiiKNaaZVFKk4npj5atsO2SNEkX7JLckQkSjJDCngCXABSqurE2JLm1I/I3xWglKuW8FTZbbyYxRGkcs/hJCiivmB7sPfjri2LrncpDHt11BclqNCBMJqcxkhOHYexC8q/tjUiehu+qZVTly2vJ0Bxo0qOxSSDhqeotrQKIBStOgVQrBAk0xqO5HeZeSSytB1pBIqnpGWNOPESPLbt6/UqaCU8xLJZ1ABlI/D1avrBPHGJODm1ILgMpCxpNRqBr8cBjCyIKzHQ3KNScwn+AwdmDVEIdNTl1Z9meAkZBhFw90LS7EciiI+FLTSo092JK3spH2x1cFq8brYtGwoSltuOCUlDSAggLSSCQcSUTtdlNorVCfc9x3Z+c1cvSTIailtLupxKUr0ZalI7cWxZJqSRWo7LQ1raXPlbeh3FtGckKecSK/XUQK06wkZ4birFUBlf9MJXZ8k26UlRS624qKsKyUNadSPkKKYYwENNinKkIAcBqrOv3hkcGmAxU3v7lNRlOw7W+0wWT/mLo+pKWkhPnCKhWo9tO4HCL5tYqW4fGUcr7eh42571Wd63cufEkJUkaUyKDS8MxrSk6Vio+0kd2Bt5arpub/xOzlaL3PLPuVt5pXhLiQaGgb6u84BeZVdH+jbeBd9UMdovA3M27MhNPBlopQHVJShCzTMIqc9NM8U4siyKYZJmxWxOG0E/wBNuFD4Vau9NcM4oXzZzRYNvwrqt5U170Egt1YRqQauk0CaZ5Ygx8W9yzJKQ6Tfb24XW02mIubGSYLiHXQSSFaAchQYHHhi7ZuTLNYKd59tLlKWtx28xgCKaAlZpnXFD2J6VhyaFtlkWrb8CGw8hclmO202Sk6XAkVUoD588MrogbasB7/udxZahy3UtIUl9AKGySXFN+LLLLLrwGS8asbhx8nCAdpve5J7i4kaQW0ySSpAVpqOrUc8+zE6vazhFbx0opYrObevlykolXOC8kNmkeFy1lCKHzLyIUs/Jhd3ZaVT+R9eL1s18FiTAnMNKWuM6mnHUhQHVxIwni/Qfzq9mi9ZbO4uQy7MbU00inPbeQaLBOdEU1A9ANcOpjnZCcmetVMnQVu3nsZ6K1FS43FQhIQhlbfLoBllpFBj1E0lB4Tl6hTVtnTz/WNcgChHOGnPPr44LQw4e21ymL+zzXOU0CNbhqaAHjQZ4grqW2Oi7LFYkQkSYc1t1pafCqmGqoDuCd2FizwBMnvnkuOJa/CFVkq6gcsc6wcrF3b90hzYbaIxUOWUsNl6gWtAAVUUp8Rg1sLb1KvudGWqzJntlJYghbtCRRb7hShtvLOpzPdhOesr2KPGvxb9WZnbrluXQpaZXKLNH0FpKdSAaGlPrDoxL/pGxTanLcdf3Xuy7MJWJiUenUI6w0EtlSwjUV0JK1dGScHbPdrcWsNU9ho2jGEltbk2UzIUpLamhJUUp1E6io92RwWBu8y5gDNFIjQJL9sr/KnvXFFwitJePBgqWmnAZUpi1Y4WhC7y5LY9tbqjSp64odP3WNXy5jHOjOTJP2NB5Wn00z1NdXMojl6uvl14YVFo2f6D09TH/dvZ9ksG4HURIS4MpzVRDebKgD4XADXSFjoGE61tBSknWZEW3blvdrkUiy3I6RmEA+CvTkcsNAgLbi9xLtuKJCgS2mkJiOhfObBBWrTSqgcsa3IPEOMyf/H211z9RkTxybGOtRWpDFtag6SoLlEq8WmlATlwpw4Y83bbY9PHTjVIK2+O0uPIeKal1HKA6ikFQPzYW2NI9vBadtNTNR56XVyKnPxsu5j4pSRgr7gV2Hmeylhl2c15Q20taBwKUKIUKdrbisM8a0WE+QpqIn753Vtq9vRWJgdaStRbS6Smqa5AKFOjHprQ86ZNC2978Sy0f1OIpGilV5LSR1gihwSyHcR2/wCzrcdvHceiltQ8IpcOrSp5YKssq+DRQ/1DBc+pnEue73p/Rxuf+k0ovT+oc71Gro5HIz0/a1eHhgM34Dxfk5P3NyvWzP8ATaucrTy+ZWn3fq6e/PCaj2AWuPR5h5e7GmPYfrZ/6pGpWnP/ALHbngl2E9d0Rr/MP08fjjyz2Q9bv9uXw8/R5vIeHbgHuaVbLX9no4/mSuqnmPzfzwV9wKmgyafth+un/SK89a+TswWDuQrN2sx3d3+7Zaa6W9XM4V5SfNXp/px6rPMW5a2d6T1g5/p+Rq/E9R6n0vD6/I/Gp/RgeoZ1dl/1z/wdPTdv6L5vl5f04o6C+p//2Q==`,or=`/assets/1-1KXOJOHg.jpg`,sr=`/assets/2-BzQASXxB.jpg`,cr=`/assets/3-Cul-oSnS.jpg`,lr=`/assets/4-DCEo4d_7.jpg`,ur=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RUYyODcxNjRDMkYxMUVDOTI1OEE4MTQwMTU4MDMwNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RUYyODcxNzRDMkYxMUVDOTI1OEE4MTQwMTU4MDMwNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZFRjI4NzE0NEMyRjExRUM5MjU4QTgxNDAxNTgwMzA2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZFRjI4NzE1NEMyRjExRUM5MjU4QTgxNDAxNTgwMzA2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAWwBfAwERAAIRAQMRAf/EAJUAAAIDAQEBAQAAAAAAAAAAAAcIBAUGAwIBAAEAAgMBAQAAAAAAAAAAAAAAAQIAAwQFBhAAAQIEAwQGBwUHBQEAAAAAAQIDABEEBSESBjFBEwdRYbEiMhRxgZGhQhUIwWJjczXRUnIjM0M08FMkJRY3EQACAgICAQQCAwAAAAAAAAAAARECMQMhEkEiMhMEUaFhgTP/2gAMAwEAAhEDEQA/AA3qJU77XnpeX2xotkz09qLDlrUVFPr2zO06sjofkFelJBgC7MDdManqWTlqWs4HxJ/ZCiK5b0upLW8gqLoayias5ygAbzOJA9boxGpvqL5X2B9dN55d0qm8Ft0COKkHo4ng98SB5Kq3/VXyuqXMlQmvoRMAOOsFafXw80onUIUrDqKxagtyLlZK5m4ULmCX2FBQB6FS2HqMLBCxnEIKFzuYlqe+q/HB9oEan7UY9b9bM7yJXk5sWQ9K3E+1tUVmi+B2gJ7YrHPHEROWUziAkQu/Y3itP4yu2GeSUwify/WE61tCuh8dhiC7MDRqeKlZUgkkyA3mFKRe+deptTr1HV2GpWaOipcoFG0rxZhMF0iUz93dETk0V1wDFmkqVyLTSikmQkDuguyLFRnMhaVSUNm31QQQbXlNzIr9D6vp65l0m11jiGbtSfAtpRlnl++icwYDIx5m6hl5tLrKwtpxIW2sb0qE0n2GEAKnzwR/318P4iT7hGp+wxU/0ZieTLnC5p2FW4vy9qSIrNN8DwoWJRUOj7mEQIg97/Vaz81XbDvItcImaFMtY2k/jiILswNJQVRauNM4JHK4kyOMLbDKqe5FdqbR2nF3apu7luRUVtSsl95zvGezf1Rydmy35O9qojJXWmoKZlXDpW2m0ghKEoAEoqTbZrVVABb9ThVwqllIaSVkpblIZRHX1PhHH3V9TKJbKltrDSCsoBUrKCZDpMotbKUm8DbaJvN4Y0pZ3W6lWZVI1NC8RgJD3CIZG2mC3mdUv1blzqHzmdcIUoiNDXpKdTm5heXdwp7dr2y1tQrKyzUoLiugHCKWbLYHTY1ba3knyyi9LeBhC9RPlR5XqR8rTlaARMTntlB6A+ViUXr9UrPzV9sR5La4RL0UZautZ6HhEFvgYRd1r/maqWiaQhxhAeXWVEyygymkZE99c+qFzwLRRFjN3DmRqK5j5RWtqtlQt7hP3OnbKUFagotNpS4FFC3AkynGWumk8uUjpfJaEkoZgLqxq0NvKTU1oeSsNpU+4FIJUTjKUt0Sr1NMsevaohszeodL3RqhNZcaxbr0gpLajuPUMBDa9ybhIG7Q4mzNfomz01FZAFIbc49Pxgcc/EdWUDN04DAGM2+ztY1/Vqq1n+wt0jJYo2KdICUNNpSANgkI6Swecu5s3/IK+YSe5XjqBjRb2lGr3gvthCbvSK3B1HbFJutgaOy1LqWQW1fCMPVAMiRbpuj2UpUO9LA9cGQirXr9WrPzl9sB5NVcIl6Mw1ZbD+MIgL4GHC3EVbdUyQl5AynMJpUgmeVQ6t0K1JVW0FTr6+6bpmnGax8vv1p8zUBtISpsoADaxuTklgemOa1btxxB3tTp058mPptV2OsNM3W3NyrfWZstLGVGcbJkDEwLa7KeC6uykrkwut74upqnGSZBJIyjYJGNGjXCkx/Z2y4POn9f1Vss7DDzCXqNmoQX8v8AVU2D4EkxY9C7yV/Pb4nVBxtN/oL1b27jb3OLTO+pSVb0qG4iNByXVrJgtetktVx+4CYvftKtfvBRS924U56Fp7YqNzGWsDs6dOPwJ7IWTLBbiciYkhgWe8Cd1rfzl9sF5NFcImaMbJ1VbPzhAbJbAwjiVpM4Up6mGWi1UupNQ1V5S3UNtsMuN0z+KC0oyJEikzCgNkZN8yoOt9J168mX1s1Zk6fbuFI0y0tTgVSNM5UZEbSZDve2E0uzvBp+wqqkoFldWu1LmYkkk7TtJMblWDm2tJP8gv5ShBElLUFQnbks6+kvdHaxqtNXF1SUqfo3BkepQqQUqXdVvkQYcz2rJcXHW/zdqpRUUyWC+gpQUqKsvROcP8vEFK+tDmTIJpHkVTShJSUqTMpIO/oOML2Rc6jB2NZTStme1CeyFkq6l03UdxQnuPZAkKqLtemnEXmuQtJQtL6wpKhIg5t4iweq4J+jkBGpaB1ZkhtzOo9SQSYV2gZ1kId55mqU9UsWhtEmFqaS+7iVrSJqyp6BFLuw11LyCy+6hut4bVX1K+K8vuOE4FKJzSBLdDpcjLhGbSbhVvopWEqddcOVtsEkk9AixwiKXwXtr0dWiqSKpBSsGRTLZKM996jg0a/rueTb02nGEUtwutUmVvs1It1wne8sZGkekmZirVZtlu9KtQY0ALhUte8++NljBUsAEpPRIYwg5zbClIC5bYIDdcvNY+UqkWm4OlVK8QmldVMltw7ET/dVCtAakKQKgSOnCULIsA85525NHzMuRQkJRVpbqAAJAlae8fbD0fA7MxZHODc6CXdLj2ZSuhDeJ9pIhdmA1yQGHVJuqkk4JLzij1qnEeCLJWMnM6gKByIBIQkTJUBh74cBc6N0i5caFde0sioFUpqnIOEmkBSzPpmYq37OqL/r6+zCNZrJc3ainaDRfqHyEJ2lWbZj+2MLc8I6SXVSyt533lFho2dA0CpuEJrb7UJ/uVChNDf8KExv064Ry923swW0KMjCZ7ZZjFjZUiT3StSVbAjvelWyFCc3P5JAxM/AjeYYBJtCgi7UJcUEzqGu9uHeEBkD4p48YfxDH1wpXJV/UTbGjqux1riuGxV0pbdd6OGqBV8FzQLLu+WrzRU6G+A5RoDS0fmLzT7IleU2R8MrWcbtUkHwocnDPAPJEKnGWHloweX/AC2zvGbAn2QwBieTWh7LXcuLWpwuIeW8uqLzZkpLs8ivUoCKdle3DLdex05QVLTYbNZ0KWwiSwO/UO4ql1QtNargOzda+RefqS0/TfO2NTsdz5kg062TtUadIHF9Yi6liqyBNRzcZb6XJD7INiI8Zwa1YJknOon0Jwg+AHRAU4pTy8CrwjoTACRnnFlwKTgpBmjqIMxDIVhOHMiyqtuRb7jdxFPg2UHKXgiQSFdaokFPVyE76h7Sqt0dRVzci5TFxoDeeIMJeiM9XDNTWRc11PnvLPuuf8tgoStatq0ggSPWIuiJ/AmT5RuTuFaqfwL7YlsIKOCnkqJTsJwHqEzBgA3PJFbDvLeyBoFK2mcrgIkSZnEdIMV+QmrvbgU6zSoOYnFY6IWwUA/6k0hVRpykPh4NSsj3fZBrwTIC7cZIaP8AtpJ9gMWWAjxZaRVRxnVYgTEzvM5yg3tAKqTo6pwKKVjvDeIiRDjJM+8J9cEhGeUPMIO7u+4wywI8jh81AF8t658iYpFJdV1DYYxpSaFwJ6p9PFzDZnBB6s041wUSd6F8cesUThwzL2wLLAU8kVDhLrY6lK9uH2QSDk8rWDT6PsaGFSKaNAJGwzTM++KBmaNhDaXC6ted04EmBAZAx9Saih+x1e5FNUgE7J5sO2CiIAtOpSadRHiyH2kRaxSZbnkJoMlOFTb/AKqt2dRmQIWy5GT4OKlJUolUwreDBFOa0kYjFJ2wUyER0Auo6t3rh1gR5HI5g/8AzDUc5f4ivFs90ZKZL2JZ8Cdu6NhQi/pvJ/I6j9P4kjOXmvNbd/8Abl6Iqcz5/Rco6+P3JUUf+Yj+Df6DDvBWhsOT2f8A8lSZfM5OGNmXh7P7ebvyigdmxbn97bvlAIB/6lp+Ts85yyOSzyyeIbJYy6Zwa5J4AhWeEbPCfDs9UWIDPFsn5ByefLxDslln1yxzRLZIsH52c98vv/6nBQDy14VbZdeyIyIiOf1k+kdsOsCPJ//Z`,dr=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NTJGRjZFRTRDMkYxMUVDQUE0Njk5MzZGREFFMUFFRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NTJGRjZFRjRDMkYxMUVDQUE0Njk5MzZGREFFMUFFRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg1MkZGNkVDNEMyRjExRUNBQTQ2OTkzNkZEQUUxQUVEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg1MkZGNkVENEMyRjExRUNBQTQ2OTkzNkZEQUUxQUVEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAWwBfAwERAAIRAQMRAf/EAI4AAAEFAQEBAAAAAAAAAAAAAAcCBAUGCAMBAAEAAwEBAQEAAAAAAAAAAAAAAAMEAgEFBhAAAQIEBAQDBAkCBwAAAAAAAQIDABEEBSExEgZBYTITUSIHcYFiFJGhsUJyIzMVFuFS8MHRgpJECBEAAgICAgICAwEAAAAAAAAAAAERAiEDMQRBElEigTITBf/aAAwDAQACEQMRAD8AI6MowbFSnAAqUADK6XehtlKupq3AhtsaleyBsAP7g9ZrjUVK2rQCygKk26pE9WOWmFuwytCEofU3dtDXCrqrgl5hZkWtKdE+ZBJjiszToi0W313aQ927lRFIOTrZ1AjxAkDGlYy6BA21vnb24UH9uf1rR+o2cFJPNJxjSZl1aJ85R0yJ9sAH0hAB5xgA+GUAC0iABRgADnqte1Pdy3JWTUB2ZZ4JSnAKPiVcOULux1KgrZVcKtlFOlOh5wOBlScVTPk93GF2aWWNrV2cII+2f/P9zLVPV1NUlKtIUqnXMiZzyiW/b+EWU6UcsiN5elVx23Su1Orvt9wGn7ZP5aZ4+6Na+zLhmdvUaUorO1749Z9y0delCkFkzeT09xviDKKpInXwaU29uG2XuiTU0VQl5KswM08iIarSJtWCWAEdMnpTKADwiABIEAHVAgAaXyvFvtNXWkauw0pYT4kDAQNwjqUszTebhcXKysvDzvef0FYBGCV5SP4fCJm8laWCV9GrObtcWlVQPbYIdWSMVTVMj3mJ+0yzpV8msbXTsJZASEgFOCTLACFa6qBm2zkib5bKWsbW1UISpCknVPKRzEYvUZruZi9VtuW+zVxqrTVoqWtclMtnWps/iGBAirr2bwyTt1qsoR6Mbpdot2CjfkinrElCyOkLzSZRUsEFso0ekjOGiT5RgASTAB4j7IAFJXOACh+rW46ahsoonXNKqo4tjqKU5n6YXstiBupZkB67oijaKFAVDD6lLIVw18DzEIakpTSLz6MNXCkp6uuQyuoTUFYRoUlMgnHCeES9hr2SLuomqthErbNdamoRpoO7SOSPzb1SvuE54IBjNWo5N3q2yUvT12odv1TDbiO3ShoO6gpSg27MKSFfDGG8m61cFB33sq+q2tU6KppdEGyttttkNkk4iShiT4kw/XtSsibZobqwWUjTiKmlqkqDeh5ttdSiU0KSQCTLPiIqnJC1g1RQLDtK0tKtYKEyV4iWcUokZ1WIAOJUcIAOsppgASiQzyOcAAK9RQ/UXhdQ6S4+pZpltKMglIWCjR4AiJ72yVaq4KC6pxPettW0CyVam1J+54GfOFz5GpeGF30Ne7VI/TrIU2w5OScSnWJYxHvWZPR6z+sBZeuCGG2qWhU2686dNMwtJKkzzOBHlTzjCyNY23BXt2y11TdfSqqkONHW80topUqXEEgjlG/UzVzwDuq3Mqu2jX/l91NIzJ/tOHttKOCUqxz5CD0iyOO+GAhKKgJNOkkTEwkGWKhOfuj0XB42Q9+lNwurtkpWS68pyl0tVgf0lJmcCjHVG6sVdBIWcOYhgs4EnVAA4GUADG7VzVFQuvOqCU5A8zHG4OpSAHd95Tc7k/XlCkMISoNjKegSBPviSzlltF6oqLV0dcq/mikEKSGinME4AR31xBxWlyXf0r3C3aN4VrCgVUVY0kuBInocB6gOUK21mqKNFos0HmktW3dwrRUPJDi0j8p5tZSQc5GXDlE9HDKrWY+qbZU07C2WLdSukjSHFo1FIxAMlYcYf7peDadbc2sA31Yui9tbf/jTGhFbfKhVRUqQADKfUZfVGtVfe0+ES9rYqqF5Bu5Sh5pLiJpdSkFRGMtI/pDpI4NC+nVIgWVqoqGNNe7Jx50qCg5MYKTLpw+7DqcE2zkt6jhGzBwJ88oAHCTOACC3fa7nW0SDby33UHzpcnPRmS38RyxjF6yjdLQwJb5bpbfVuNtrSWKtgaGQZlp0HzJV4TMTtZwV1tjJTaNymWsoR5VAhYT8Up5co1ZMzVj/AGm85Rbip6ta9AKwO4rAGZ48oXtU1wN0OLZNJr28aumautiqDbq1YBebRIsrVLMpy94iOrLLPJW9zep++tu2x5FbT07q20qKHfMArSOInDqqcGLW9VJnO/7ovG5745dLs4ldQtISgAaUNoSZ6UCL60VVCPMvsd3LLRty2P1dySyhya1oBb7fmnqVpkqWQM8TCRs4DztKjrbaXKV+lKE6QQ8FTbkMNITIY8+MPooJruSyOK8I2YOBVAA6SZZQAN7uhxy11AbnrCCoacCQnzEDmQCIGdRmy+U9ZW1FwqHmEtIfOtH35AHAcjyib1btgr9kq5IFixqQAtSpLGWk4g/6xYtD8kr3fBzrVuIPbrmQlAwYqGzgT8Y8YRfU68DabVbkM3oNe7mpNytdQ+p5LKErQyTq0iWGk4xJ2arFkV9azc1bJL1NZRctnXO4aTNhlTaCeCyoJhGp/ZFG2v1aM60FucYeZcrEkIEp+BEem7JqUeUqtOGErZG7toWm+VdXcA5R0/ZDFKltBcI8wJUopnI4TjOusmtrhQGfb27tuXpBbtlzbq3QNRb6XAOaDIw6BEkstUcA4KWAR7RAA8QYAO6JkgS90AGet91rD+56xqmKm6KmX2xPNa0nzqP0yEU6qQpFXtLIWZKZATMhqJxGAlnDAGdX2ko8yNSVeVaNI8wH934ftlHGjh32pfK7bd3Zr7YsNqBlpnNC0qzbXPMGE7NVbL1YzXsdXKDlt+/7c3Vt252yoT2Gq2alsnBTToxWj2TE0njHibtdtTh/g93TdbVK/JCU3p5a/wBsdt1UsugghsKAmmeRnGFtcyOelRAG7jtq4Wa7roK1A0L1JacViFAT0q98o9OrVq+yPHvV0t6sRZrjV2e4M1lEQzXUqitskzE05hXwnjFdcrJHbDNF7X3Gzf7DS3VsBCn0/nNAz0OpwWn6coU0aTH6l+Ye2OHSSblAB216AV/2Aq/4icAGXrrUh+41T6yEqdfcWoE6ZkqOU/8AKLFwTsUx5gRqMsykY8JgzwGGUdZtDaqKtK0noXnqmcQOA4y+tRjjYEeFqW2tkI86MUK4GWHlI6o4ZJKxXyqttcmoamQsaHW1EjuNqwKTjnLp5wndpWysMfp3PXaUHiy/LXOy0dbQ1CnU9uXcUZqwzSrmnKPntlXWzT5PpdV1aqa4KT6xWxbljp6woJep30pK0Tn23MFZeyLejebevyQf6NPrPwCoISjSNQM5TIlI4y5n2x7FeDxGEj0Ruig7dLWpepKgiqaE5ifSoj2yEKubqFEqxhZol21zOGUAC3nktUzzq+hpta1TyklJMdAy464HKhxSZjU4pUk6pAFRIyOAxixE53p+2pK5r1GeSZknGchOA1URVEKSoEaj4eIBwCferD6eEZNMiVumnqG1gyWCEpOY0K8Z8I5Jlnd1pXdUkySmflkcMZn6BAwRefSLeiLNef2yvcAtVcQgqPSy8cEuexWRiHu9f+lfZfsi/pdn+b9X+rLd68Pil263Qol3a14DKY0N+cn7Ij6Gubz8Fv8AobI1x8gRcW6lh7SSCjACYxSUz0zHhHstHhyTvp5eTat00L7hCKeoV8q9IzEnBgT/ALgIxZYNJ5D0SdYHOUJGEyx0CABnuWf8austU/lXeiWrLnhHa8nGZpR0o9g6suEWsQOWNEz4z+7r08fdHDSPXf1Tl+njp8NKs/h+v3xw0Qdw60ZT1Y6cur/GUZscJB6XzCs/dOWXH4vGOs4hlj8w3nPUZ6ZfVwjK5OvgJfqx3P4/tTX8zP5L/taO793r0Yf0lxiLp/tfjnwW939ac8eQZ1/6dROXSnLPLlFzIEfUn6dLOc/mGenqzGUuMcfBpGknJ9kdXQPxdI+uJhp//9k=`,fr=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NDU5RjczMzRDMkYxMUVDQjczOUMwODRBNjkzNDBCRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NDU5RjczNDRDMkYxMUVDQjczOUMwODRBNjkzNDBCRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0NTlGNzMxNEMyRjExRUNCNzM5QzA4NEE2OTM0MEJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk0NTlGNzMyNEMyRjExRUNCNzM5QzA4NEE2OTM0MEJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAWwBfAwERAAIRAQMRAf/EAIsAAAIDAQEBAQAAAAAAAAAAAAYHBAUIAwIAAQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQFEAACAQIEAwUDCgYDAQAAAAABAgMRBAAhEgUxEwZBUXEyB2GBIpGhwUJSYrIjMxTwsdFyQxWSUyRUEQEBAAIDAAMAAwEAAAAAAAAAARECITEDQRIEUSITQv/aAAwDAQACEQMRAD8A04LCw/8Ami/4L/TAES+TbrWMyPBEAPuLU/NhGXfV3qHt21xTwTwxQTIoeiqFNSaqmtftLnUYxdlNdCc3j1avpbsrYzSoFFHIYsAwy1KSP54PrWsyKWP1R6ogljI3B5BFJzHQkfH2EE55HGvqzmGB0D66rcvLbbza24uOMTrGPjA+qfvH2YGcSjKw9U9svOo4NkG1EXFw+ltSqhjWldZFOFMPW5G2uBnGdulJEYjYjiFAOKcJ8pkNra0P5Sf8R/TBgP2C2tCWHJj49qjCweXSe0tDHlDGD/av9MEhVAntIAFPLTzIPKO1hjVIWUyyxNop/WDrP/V/+OJ4mMiFXlBJaNlOrSAK0cjhiW+3wt56/NZo33f7q+l1XEzyUqF1VyHYM+zD1h7UP3FwzkKnlPEDifHG013sHQvUe8rW1iCRHMO/l92J7e0i2vhtYsd09N+qtmUXlzDqjiIkV0P2TgnrC28LOldbdWbjbbqb6Sd5bpzR5mzahyoO7uxVI0PT7r/dZb5Ge2muonGkSRkakCZksvblnjOcNWZh+2ExubdJBwdQw8CKjFJUbEqGBRXPOueHkOskQ5dAcGQhXEWS1J86fjGCiLDd7y6XappLJgJgoIfKoWo1sur4aha0riVajIfqD1Lc7huVyqTyvZ82R4xJQEMTTWVU6Qx4HEpc102YhezP2UyPyYrEqI+hdiS/vRNcLriU1p2EjHP7+mOI6fz+Wea0BscNnbWyKmmNVA7lAxLSr7RbGfa7+NrP9xBcMRQwrIjN8gOKYqeYzp6qbEmx9TS6E5aTrzEoPhoTQ5Yt5Xhze0xcoHRfUk2z7nBKxpFqHNYVLaa1NACOIxSxPWtY9E75Y3u3QGA/kuv5UnYQSSBkKAjBGdoJ4K628cbYSHNEwgh3I+BW++n4xh0B3rfeXsOnryzhYc2VHDVpTl6SXFT20xH0uIt5a5rJnUstDHy2oJVJMY+r8RAB9uMaLelDhrI2heJyqe/FkKKdlAiSOGK+mjuUI0iNX5erjQ0H88RuuXRrtgcbVum47rtotJoX1ySSRCbWAGMK6mAUZ1xz/wCeL26P9Mzp9sHNineC3sDbyr5LnWNase9WUg0xfOuEcbfEQ/V+w3y66Z2vdb5kmkjAWWXQEkpIPu5Fa+zGfLefbA9tL9clNbakpqFM8z9GOrLlwe/oP1N+1vTtsrljdMojjbygCp1Ka0r34Q2nDRcDhq40k9y/p4Ah3D/kqv30/GMaoA3qz+yPRt2ZCFuJ6RQE/wDY5H9KGmOf0i3lblljqO6aS7lqc9R1DgajKpp7cGre9UyzaHSQZlGBPcaHG0zXtLjaIttS5SwZ7plBDEgJqp41PyY4btz29OacZwvOl9ytZNohsLXbpJL2C4a4F3r5Tq7VJlGTA1rTT3ZYd25E0mFwnUe6Q3yWe7W0UccmXPiSjSV4rqJOmvsxn74a+jx6iXo3Xa0s4Yxy3oEQD7IqAB7sYm39mttcRn2+Cm+moCCHIAIpw449HTp5W9lvAm6P3Oax3S2mSldS1APFQamnuw6erX3R+5jcdohugSwZRRzlqFK1zxqXKO0xV7JTl4bKuuT8K/3p+MY1QCfU+CVrGOIKohfmgTEaismg6RQ/VPbjm9vh0eHdZS30vJdzFmLT6jqBzypxrh6cRrftTstYiDiiQ32DcZLzZFSKQLcRDQCw1AMO8e3HF6a4256d/lv9tTK6U3Hou1tYhc288984BkEk0mnVQcEjCDiO/txvOrc03v8A0nbxs1lLK+5WyyxGQqY7YyO0UYU1NAxPHEPTaXpTSX5LP1P3yVktLC3lZWjcvIyEg1pQCoxv82vOaj+vfiSF+SRpBJPf447nn1a7WUDimXlYew17sKtRqP0N3bn7HNbSyrrik1CPVVgrDLLuywaM+vZnNPFozYYokg3MsRC0YeeP8YwUBfrYc/ZXqW1qymPR5tZqq6SeBq2Jek4V8ryyj1Nt01veu0mZkZjrzqSePZ34n57Zi/pryG5gyoy9pz+TwxWI1027ebnb2QwgU1VkB+sD9U4W+k2h6b3W8G10v1ht8MMbGKsnEoVr8+ODeYelptLF5ufUu4bogS3XkQnIt2nE7VJCt63tuXeWyA1pqLMe046vzXtyfqnQbZvzMxUUqMdbjqzs0YyRIhrzclpx49oxmtQ+vSIQ/wC4jiWUgTWbGLLiyNRgKeWn3sPzpesNxrNj/lOKoOUtoUTzn4mQfKwwBB3QJd2jwhl/MFKHge7E9o1rcUg/U3YzabhDaNIZUjVpQrmrI0jDWFyWoyyxDGLh1S5mSr3q0a0vZIuW0RIB0MKEK41KCM6ZHhi0qOyz6U6Pm3pndgeTFV2I4sEWpGGVwvNggHJjYDsrTxx53peXp+c4Gu2ujR6acOJxCrQTbP6Sputu+9bnGWV0P7C3PaCM5G8fqj347/zedkzXB+n2luITvWHQG6bZuTrBbvLEamiqfhzzXh2Y6XNeVRtdpcR7ta2ssbxSO6jymoJ9lK4VhzitAen067ZdAvCwnWLllRHprU1GdOxeJ7cGvbO/Q4uerkt01zQOifaINMVSQH6+22UhFOYIf3IdR/lhB42GDct23B1tzptYSDPO3BQe7vJ7sLBvfXfStluEkUsCP+4t0aIShqEhsjXL+WMbaZ5b03xwTF76IbhdX503TFXbW7ONbUHtJw5qLuavQfpxa7LbxWD/AJrGNjK5yJ1ginz40zkrNv2M2U9xBItFhLoD/YxX6MeVv29jTod+mXRR3a5S4u1I2+2PMnB/yOTVY/DtbFPDx+1zekf0e31mJ3Tt5KlQtAFGSqOAAx6LzFPc7LayTnRGpkY6nkYV/gYcgylRdO7PcQJFcWkc6JIJUeRAW5i8HDcQcFCNf9JRw3X+xsRzXjU/+ZuPClUPfTvxkZ4wGN03aC8gMPI0ngdWNZAb/wBTbrJrCju9xywgZ+ybLDtOzpbpnPIokun7TJTh4Lww4TrdWqM5qOOCGgvZiM81Y9Yrmo4kDPLDCftKwTMLmI6tRoTwII4qR2UwgTF9tpvd6ltrYaprm6kRF9rSHP6ceVdfttify9ibTXTN/g6dk2m22ja4bG3FEhWhPazfWY+Jx6Wus1mI8nfe7XNShNQ5KTqqC3ADw78aZcwMya8fMfujs95xokyLIhB2DOmEaQpzJ7sIFtve08rd7pU8pcuPB/i+nCCC9i4X3qPlIGAGJcfDRydWdNQyyPYcbJ9MKt4DBA/BDVlB7B8+AIUatYbglwoPImOidBwzOT+IwsAMdGbCP9/f7pMPyraaaG2Pe5c62HgMscvj5/2trs/R6f1mo6cB2APlXOnt9uOrDjeW7Sfdhh4dliVVObMa08OGEEm31U1HieHhgoSOzCMD708j7xcFUJGqhNMshTCCDOsugHQaa0/EMAGZr+1FdVdYrrpXiONMbJ0PnP04A6DzHwGAON3+mOHEcfHAFd09p/aJTTTmTU01p+q1eP8Ak+182MadN79rYcMbYfPxX+BgCBd1/fDj5Pd7sKGt4+CcOHZwwUnVv08Iw/caf3Mv6XmPGtffjNOOF3Tkr+l+pFwr/wBi4A//2Q==`,pr=`/assets/8-DpysMOZ_.jpg`,mr=`/assets/9-r1A_-Qrh.jpg`,hr=()=>(0,A.jsx)(`footer`,{className:`footer_01`,children:(0,A.jsxs)(`div`,{className:`container largeContainer`,children:[(0,A.jsxs)(`div`,{className:`row`,children:[(0,A.jsx)(`div`,{className:`col-md-6 col-xl-4`,children:(0,A.jsxs)(`div`,{className:`aboutWidget`,children:[(0,A.jsx)(`a`,{href:`/`,children:(0,A.jsx)(`img`,{src:nr,alt:`Bepro Logo`})}),(0,A.jsx)(`p`,{children:`Rem iplsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat euimod....`}),(0,A.jsxs)(`div`,{className:`abIcon`,children:[(0,A.jsx)(`i`,{className:`twi-map-marker`}),`Washington NY, United States.`]}),(0,A.jsxs)(`div`,{className:`abIcon`,children:[(0,A.jsx)(`i`,{className:`twi-envelope`}),(0,A.jsx)(`a`,{href:`mailto:info@email.com`,children:`info@email.com`})]}),(0,A.jsxs)(`div`,{className:`abIcon`,children:[(0,A.jsx)(`i`,{className:`twi-phone`}),`(123)+ 124 45 67 678`]})]})}),(0,A.jsx)(`div`,{className:`col-md-6 col-xl-3 ml54`,children:(0,A.jsxs)(`div`,{className:`widget`,children:[(0,A.jsx)(`div`,{className:`wsubtitle`,children:`Clean & Flexible`}),(0,A.jsx)(`h3`,{className:`widget_title`,children:`Latest Post`}),(0,A.jsxs)(`div`,{className:`pp_post_item`,children:[(0,A.jsx)(`img`,{src:rr,alt:`Blog`}),(0,A.jsx)(`span`,{children:`July 29, 2021`}),(0,A.jsx)(`a`,{href:`/single-blog`,children:`Master of Backyard Tiling`})]}),(0,A.jsxs)(`div`,{className:`pp_post_item`,children:[(0,A.jsx)(`img`,{src:ir,alt:`Blog`}),(0,A.jsx)(`span`,{children:`July 29, 2021`}),(0,A.jsx)(`a`,{href:`/single-blog`,children:`The rest of us Avoid Common`})]}),(0,A.jsxs)(`div`,{className:`pp_post_item`,children:[(0,A.jsx)(`img`,{src:ar,alt:`Blog`}),(0,A.jsx)(`span`,{children:`July 29, 2021`}),(0,A.jsx)(`a`,{href:`/single-blog`,children:`Finding hidden Gems of this sort`})]})]})}),(0,A.jsx)(`div`,{className:`col-md-6 col-xl-2`,children:(0,A.jsxs)(`div`,{className:`widget`,children:[(0,A.jsx)(`div`,{className:`wsubtitle`,children:`Clean & Flexible`}),(0,A.jsx)(`h3`,{className:`widget_title`,children:`Quick Links`}),(0,A.jsxs)(`ul`,{className:`menu`,children:[(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`/`,children:`Home`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`/about`,children:`About Company`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`/services`,children:`Services`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`/pricing`,children:`Pricing`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`/contact`,children:`Contact`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`/mega-menu`,children:`Mega Menu`})})]})]})}),(0,A.jsx)(`div`,{className:`col-md-6 col-xl-3`,children:(0,A.jsxs)(`div`,{className:`widget gallery`,children:[(0,A.jsx)(`div`,{className:`wsubtitle`,children:`Clean & Flexible`}),(0,A.jsx)(`h3`,{className:`widget_title`,children:`Instagram`}),(0,A.jsxs)(`div`,{className:`galleryShots`,children:[(0,A.jsx)(`a`,{target:`_blank`,rel:`noopener noreferrer`,href:`https://www.instagram.com/`,children:(0,A.jsx)(`img`,{src:or,alt:`Instagram`})}),(0,A.jsx)(`a`,{target:`_blank`,rel:`noopener noreferrer`,href:`https://www.instagram.com/`,children:(0,A.jsx)(`img`,{src:sr,alt:`Instagram`})}),(0,A.jsx)(`a`,{target:`_blank`,rel:`noopener noreferrer`,href:`https://www.instagram.com/`,children:(0,A.jsx)(`img`,{src:cr,alt:`Instagram`})}),(0,A.jsx)(`a`,{target:`_blank`,rel:`noopener noreferrer`,href:`https://www.instagram.com/`,children:(0,A.jsx)(`img`,{src:lr,alt:`Instagram`})}),(0,A.jsx)(`a`,{target:`_blank`,rel:`noopener noreferrer`,href:`https://www.instagram.com/`,children:(0,A.jsx)(`img`,{src:ur,alt:`Instagram`})}),(0,A.jsx)(`a`,{target:`_blank`,rel:`noopener noreferrer`,href:`https://www.instagram.com/`,children:(0,A.jsx)(`img`,{src:dr,alt:`Instagram`})}),(0,A.jsx)(`a`,{target:`_blank`,rel:`noopener noreferrer`,href:`https://www.instagram.com/`,children:(0,A.jsx)(`img`,{src:fr,alt:`Instagram`})}),(0,A.jsx)(`a`,{target:`_blank`,rel:`noopener noreferrer`,href:`https://www.instagram.com/`,children:(0,A.jsx)(`img`,{src:pr,alt:`Instagram`})}),(0,A.jsx)(`a`,{target:`_blank`,rel:`noopener noreferrer`,href:`https://www.instagram.com/`,children:(0,A.jsx)(`img`,{src:mr,alt:`Instagram`})})]})]})})]}),(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsx)(`div`,{className:`col-lg-12`,children:(0,A.jsx)(`div`,{className:`ctaMail`,children:(0,A.jsxs)(`div`,{className:`row`,children:[(0,A.jsxs)(`div`,{className:`col-lg-4 col-md-5`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Updated about our Products`}),(0,A.jsx)(`h2`,{className:`secTitle`,children:`Sign Up Newsletter`})]}),(0,A.jsx)(`div`,{className:`col-lg-8 col-md-7`,children:(0,A.jsx)(`div`,{className:`SubsrcribeForm`,children:(0,A.jsxs)(`form`,{className:`yikes-easy-mc-form`,action:`#`,method:`post`,children:[(0,A.jsx)(`input`,{type:`email`,name:`EMAIL`,placeholder:`Enter Your Email Address`}),(0,A.jsx)(`button`,{className:`yikes-easy-mc-submit-button`,type:`submit`,children:`Subscribe Now`})]})})})]})})})}),(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsx)(`div`,{className:`col-lg-12 text-center`,children:(0,A.jsxs)(`div`,{className:`Copyright`,children:[(0,A.jsx)(`span`,{children:`Bepro`}),` - Copyright 2021. Developed by`,` `,(0,A.jsx)(`a`,{href:`https://themewar.com/`,target:`_blank`,rel:`noopener noreferrer`,children:`Themewar`})]})})})]})});function gr(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(tr,{}),(0,A.jsx)(er,{}),(0,A.jsx)(`main`,{children:(0,A.jsx)(Wt,{})}),(0,A.jsx)(hr,{})]})}var _r=`/assets/1_4-B8krbJAQ.jpg`,vr=`/assets/1_5-DGEelCZh.jpeg`,yr=`/assets/1-Nxahco2j.jpg`,br=`/assets/2-BlhTApSF.jpg`,xr=`/assets/3-Cc4_DlhX.jpg`,j=`/assets/logo-D8rRDZVI.png`,Sr=`/assets/1-DsijzTnX.png`,Cr=`/assets/1-sxnOvBAG.png`,wr=`/assets/2-UYEjm-uT.png`,Tr=`/assets/3-BVzeGT6r.png`,Er=`/assets/4-DaAPiMIB.png`,Dr=`/assets/2-B_musS9f.png`,Or=`/assets/1-Dd4k_v0d.jpg`,kr=`/assets/2-CzA9GDIG.jpg`,Ar=`/assets/3-_cH2jacM.jpg`,jr=`/assets/2-UYEjm-uT.png`,Mr=`/assets/t2-B85m91nT.jpeg`,Nr=`/assets/t3-vqjSQ5_T.jpeg`,Pr=`/assets/1-CoRcO6Xe.jpg`,Fr=`/assets/2-CZoyrZxv.jpg`,Ir=`/assets/3-E5_52ZCX.jpg`,Lr=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MEQ2RUY1NTRCQTExMUVDQjA5QUI1RUREOTAyNDg0OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MEQ2RUY1NjRCQTExMUVDQjA5QUI1RUREOTAyNDg0OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwRDZFRjUzNEJBMTExRUNCMDlBQjVFREQ5MDI0ODQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQwRDZFRjU0NEJBMTExRUNCMDlBQjVFREQ5MDI0ODQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAIQAhAwERAAIRAQMRAf/EAHkAAAIDAQAAAAAAAAAAAAAAAAYHAwUIAAEAAwEBAQAAAAAAAAAAAAAAAAMEBQECEAACAQMDAwEHBAMAAAAAAAABAgMAEQQSBQYhMRNRQWFxgTIVB7EiQjNyFDURAAIDAAICAwAAAAAAAAAAAAABEQIDQRJxBDFhMv/aAAwDAQACEQMRAD8A1FlZawCw6uew9PeaAFdv+Jv/ACCCaWfMfHjn1CKBXcKig2U6FOkkjveor2bZdnmkhZZkPOOEzDL2bfJXjgOp8d2fxOB3DRksjD5UuujTGXxTRoXhXLIOS7BgboiGL/ciEgQ+oJVh8mBq+rlSZ1lDgIK9HCmyH8krsezEgfDsKDgAwx8gmh28SuuJjQ6vuSXGs6dQADC9gOh71ntGpSBfxbVjTwZeTLlvOySyxzhiH8jXsNTG/wBI9KXJQ6wy8/AWa+NjbjtId9GO6z4yOxawLEMy37KT7PdVfr2mUZ/t5pQ0PD7lBVJIV8yaJGT0NqDgI8gyVwsieLImjhTOv4JCL2PZgVv16VFuofk0PXvKX0KflWVh7D5ljyZJ2yCfHGdIDMv8hpF+vtvUngtdp4JPw1lZ23cpysR8aaQ7t454TGgK302kVmP06O/zqvC0EHs15NG/aU9atIYJc3DMv70/sHcetB0DOUcIffJceQSeFoJFaRJBdWAIPt+FqRtl2HY7dAEn/H3G890ydvgkMpkZDDIWZo2RrNGFa+kqQRUjouC9aPkZfCuFQ7NCkkiWlW7AHq2th1Y/AdAKtyz6oz9tOzC6mijqAI8j+s1xgV+2f9LO/wAl/QV4r8sZb8otKYLOoA//2Q==`,Rr=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MTc3QzI1MDRCQTExMUVDQjZGMUQyRjdEOUIwQ0Q1RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MTc3QzI1MTRCQTExMUVDQjZGMUQyRjdEOUIwQ0Q1RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNzdDMjRFNEJBMTExRUNCNkYxRDJGN0Q5QjBDRDVFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUxNzdDMjRGNEJBMTExRUNCNkYxRDJGN0Q5QjBDRDVFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAIQAhAwERAAIRAQMRAf/EAH0AAAMBAQEAAAAAAAAAAAAAAAYHCAAFAQEAAwEBAQAAAAAAAAAAAAAAAgQFAAMBEAABAwIEBAIJBQAAAAAAAAACAQMEEQUAIRIGMSITB0EyUXGRsWJyFDUIUjNUFxgRAAICAQQDAQAAAAAAAAAAAAABAgMRITESBEEyEyL/2gAMAwEAAhEDEQA/AG/3k70W3t9CbjstDNv8oFcjw1WgttVUes7TPTqSgonmouaYGUsBxjkCdhyLvuazuXDdl0cuF1fcU5EJwibaiiX7bQx00thy+KDn6VxMutk5b6FWmmMY7anO3XY7jYIZ3Pa1xlWaVFXqoEZ8xZNBzobKqrZp8JCqY503yi8Z0Dv68ZRylqGPZfvkG7Hg29fiZDcQgpMyGOVqSgJUk0L5HRHNUTJc1SnDFaE8kecMDgwYBD24pLG/e7tzO5Slbt8yQQE6ic6RGS0iILmmrpCKJhO63iuQ9RVylxG6G1rFGtjlgs0xHJMrnfF5zUYIg0FnQq8qU4p6cIOzMk2UlXhNHDes25Ye37hBuzYRWkFwYvTc1iYUVRIhqug08dOS41tkeSaNCt8XkQm1pU6JeI90hyBjzoL4So5JSvUbPUNEXjmmaYqt4IqWS0/702l+ovYuD+iB+bJotO2JUHvHI2m8BNKxIlpHNVUDIWhIgNPRrChCuFL1iI71JftDVvUW5/Wm7EjLCWqdV2QusqD4iXM5VE+NUwrY4FOKkvKYM7p3HGh25x25zuUVQCPivMungnrwrCtylhHSy1RjqKB8rPcNwRrdt5onWkeRtkwBdbzrpaQQa81M6JXjixVCSX63Id1kG8R2Kk/zpG/lD7MdvmcPoe9/ey143O7G3dst36XeNsTIBJGvqgFKCiGtBR0U5U1ZEOSrkmClBPcGM3HYWsmJvt11Yl1nvsSRAOpFfRWzRVFFVKUTEiyKT2LVdjktwP7m2lpLZHsNuZObfZRg8TLSK46qIvKGlKkpGvlFPXg+onz5eDdmpyqeBqfjl+Ptzsclrde8IyMTQRDtdqOhONFTJ56lUEkTyBxRc1oSYq4IeSkMenhsYwLdwftjfzL7sL9n1Ger7Ap2e+8Xv5k9+POr6I797wNTDJPNjGP/2Q==`,zr=`data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MUE5RkNERDRCQTExMUVDODNBN0VGNDVEOTM3ODZCNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MUE5RkNERTRCQTExMUVDODNBN0VGNDVEOTM3ODZCNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxQTlGQ0RCNEJBMTExRUM4M0E3RUY0NUQ5Mzc4NkI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxQTlGQ0RDNEJBMTExRUM4M0E3RUY0NUQ5Mzc4NkI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAIQAhAwERAAIRAQMRAf/EAIgAAAIDAQAAAAAAAAAAAAAAAAUHAwYIAAEAAwEBAQAAAAAAAAAAAAAAAgQFAwABEAACAQMDAAUGDQUAAAAAAAABAgMRBAUAEgYhMUEiB1FxchMUCGGBkbHRMkJigpKyUxU0VHQ1FxEAAgIBBAICAwAAAAAAAAAAAAERAgMhMRIEQVFhMoGxE//aAAwDAQACEQMRAD8A0ZzDlllxvEXF/PQmCMybSaDyLX0m6BoMl1VSHSnJwZ4sctzXxIu5r+9y81jg3crDbxgkSBeiqJUIijqBpuPadIWyOdd/0UKYVGmwXv7XlvBPYcrh8xcTYmB447+ynclQjNtDqB3esioI0X9Gjz+SsO/i3KIMzZwyGgklWop1Ej6w8407S/JSIXpxcB7RgGdPeKzTTY2PGrLtmylwEhHlG8RivmDaUyy7JeNxvAoTf4BuI49y/DW0MONlU2MCLsf1iCPo6GWRWQtXzHSLcy/JSSiF4D3MhyK5tbvFi3M+PurVgkixhqPtrVm3grRvunRJ6agwpIfB7mKx8bdpmLvbTipUBirECoP4lOnOu39Sf21qrDg/6Bx/90/IdOQxOUI/3kcA/wDGQXsZAuMbKzoD1sikN0fEK6Tu+N186DuFTV/GpFgp7rP4VUxt16z2glruIkiTY9GVoiHjowPw6mxq0WU1pOxYs/lb/j3F7u8vZFV4IWESlmZ5XptiDBi3fLECgJ1tSrbSMMlqw2iL3buNpBxiTIzIHuL24JkVgDVDVaGvX31J1SqtZJOZ+B3fwmN/tYfyL9GtRaEL7x08M8tzHAb8JNsyVuGrakgLOh6wCSoDjsqaHqJGsr4lZp+jfFl4pr2ILjWHz2Pu4LCe2uLC/SiSQSq0UiEDtBpqN2KPk/ZdwXTqn4C3iXYSNa46ykurm+zEkyPj7ZNzmRgQrKEWv2W6O3TfVrEi3ZtMejQHhRxnJYbi9kmUg9lvBFte1BB299nqadFe9qhRQiTltNi76MzO1xxWOff6yP0z82luz9Rrq/YH8B/qW/xx+rXdbYLt7l30yJna44//2Q==`,Br=`/assets/3-BnL8qGnT.png`,Vr=`/assets/4-G2NQaIrd.png`,Hr=`/assets/video-CGJeGWiC.mp4`,Ur=`
  /* Responsive Styles */
  @media (max-width: 1199.98px) {
    .hero-content h1 {
      font-size: 50px !important;
      line-height: 60px !important;
    }
    .hero-content {
      padding: 0 5% !important;
    }
  } .testiItem01 .quotation {
      font-size: 16px !important;
    }
      .carousel-testimonial {
  height: 400px;
  overflow: hidden;
}

.carousel-testimonial img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  @media (max-width: 991.98px) {
    .hero-content h1 {
      font-size: 42px !important;
      line-height: 52px !important;
    }
    .hero-content p {
      font-size: 16px !important;
      line-height: 26px !important;
    }
    .hero-slide {
      min-height: 600px !important;
      padding: 0 8% !important;
    }
    .achievement-img {
      margin-top: 30px;
    }
    .cta-thumb {
      margin-top: 30px;
    }
    .pricing-item-01 {
      margin-bottom: 30px;
    }
    .blogItem01 {
      margin-bottom: 30px;
    }
    .team_01 {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .hero-content h1 {
      font-size: 32px !important;
      line-height: 42px !important;
    }
    .hero-content .sub-title {
      font-size: 12px !important;
    }
    .hero-content p {
      font-size: 14px !important;
      line-height: 24px !important;
    }
    .hero-slide {
      min-height: 500px !important;
      padding: 0 5% !important;
      text-align: center !important;
    }
    .hero-content {
      max-width: 100% !important;
      text-align: center !important;
    }
    .hero-content .btn-wrapper {
      text-align: center !important;
    }
    .secTitle {
      font-size: 28px !important;
    }
    .subTitle {
      font-size: 13px !important;
    }
    .service_item_01 {
      margin-bottom: 25px;
    }
    .client-logo-item {
      margin-bottom: 20px;
    }
    .testimonialSection01 .row {
      flex-direction: column-reverse;
    }
    .testimonialSection01 .col-md-6:first-child {
      margin-top: 30px;
    }
    .ctaCon {
      text-align: center;
    }
    .ctaCon h2 {
      font-size: 36px !important;
    }
    .ctaCon h3 {
      font-size: 28px !important;
    }
    .ctaCon h4 {
      font-size: 20px !important;
    }
    .pricingTab a {
      padding: 8px 20px !important;
      font-size: 14px !important;
    }
    .beproTab li a {
      padding: 10px 15px !important;
      font-size: 14px !important;
    }
    .beproTabCon .secTitle {
      font-size: 24px !important;
    }
    .beproTabCon .col-md-6:last-child {
      margin-top: 20px;
    }
    .beproTabCon img {
      width: 100%;
    }
  }

  @media (max-width: 575.98px) {
    .hero-slide {
      min-height: 450px !important;
      padding: 0 15px !important;
    }
    .hero-content h1 {
      font-size: 26px !important;
      line-height: 36px !important;
    }
    .hero-content p {
      font-size: 13px !important;
      line-height: 22px !important;
      margin-bottom: 20px !important;
    }
    .hero-content .sub-title {
      font-size: 11px !important;
      letter-spacing: 1.5px !important;
    }
    .secTitle {
      font-size: 24px !important;
    }
    .subTitle {
      font-size: 12px !important;
    }
    .berpo_btn {
      padding: 12px 25px !important;
      font-size: 13px !important;
    }
    .carousel-control-prev,
    .carousel-control-next {
      display: none !important;
    }
    .carousel-indicators {
      bottom: 10px !important;
    }
    .carousel-indicators li {
      width: 8px !important;
      height: 8px !important;
    }
    .testiItem01 {
      padding: 20px !important;
    }
    .testiItem01 h5 {
      font-size: 18px !important;
    }
    .testiItem01 .quotation {
      font-size: 1px !important;
    }
    .ts_author img {
      width: 60px !important;
      height: 60px !important;
    }
    .ts_author h5 {
      font-size: 16px !important;
    }
    .price-thumb img {
      width: 100%;
    }
    .pricing-item-01 {
      padding: 20px !important;
    }
    .pricing-item-01 .p-title {
      font-size: 20px !important;
    }
    .pricing-item-01 .p-price {
      font-size: 28px !important;
    }
    .blogContent h3 {
      font-size: 18px !important;
    }
    .blogContent .bmeta {
      font-size: 13px !important;
    }
    .bpcon .author {
      font-size: 13px !important;
    }
    .accordion .card-header button {
      font-size: 14px !important;
      padding: 12px 15px !important;
    }
    .accordion .card-body {
      font-size: 14px !important;
      padding: 15px !important;
    }
    .ctaThumb img {
      width: 100%;
    }
    .ctaThumb .ctaborder {
      margin-bottom: 15px;
    }
    .clinetWorlwide {
      margin-top: 20px;
    }
    .ClientNumber {
      position: relative !important;
      margin-top: 15px !important;
      transform: none !important;
    }
    .ClientNumber h2 {
      font-size: 36px !important;
    }
    .listItem li {
      font-size: 14px !important;
    }
  }

  /* Additional responsive fixes */
  .container.largeContainer {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (min-width: 1200px) {
    .container.largeContainer {
      max-width: 1200px;
    }
  }

  @media (min-width: 1400px) {
    .container.largeContainer {
      max-width: 1320px;
    }
  }

  /* Carousel indicator styling */
  .carousel-indicators li {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.5);
    border: none;
    margin: 0 5px;
  }

  .carousel-indicators .active {
    background-color: #bb0b0b;
  }

  /* Pricing tab active state */
  .pricingTab .active {
    background: #bb0b0b !important;
    color: #fff !important;
  }

  .pricingTab a {
    display: inline-block;
    padding: 10px 30px;
    background: #f5f5f5;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
    margin: 0 5px;
    border-radius: 5px;
  }

  .pricingTab a:hover {
    background: #bb0b0b;
    color: #fff;
  }

  /* Accordion styling */
  .accordion .card {
    border: none;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .accordion .card-header {
    background: #f8f9fa;
    padding: 0;
    border: none;
  }

  .accordion .card-header button {
    width: 100%;
    text-align: left;
    padding: 15px 20px;
    background: transparent;
    border: none;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .accordion .card-header button:hover {
    color: #bb0b0b;
  }

  .accordion .card-body {
    padding: 20px;
    background: #fff;
    color: #666;
  }

  /* Team social icons */
  .tm_social a {
    display: inline-block;
    margin: 0 5px;
    color: #333;
    transition: all 0.3s ease;
  }

  .tm_social a:hover {
    color: #bb0b0b;
  }

  /* Blog styling */
  .blogContent {
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    border-radius: 0 0 5px 5px;
  }

  .blogContent .bmeta {
    color: #999;
    text-decoration: none;
    font-size: 14px;
  }

  .blogContent h3 {
    font-size: 20px;
    margin: 10px 0;
  }

  .blogContent h3 a {
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .blogContent h3 a:hover {
    color: #bb0b0b;
  }

  .bpcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }

  .bpcon .author {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #666;
  }

  .bpcon .author img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .bpcon a:last-child {
    color: #999;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .bpcon a:last-child:hover {
    color: #bb0b0b;
  }

  /* Button styling */
  .berpo_btn {
    display: inline-block;
    position: relative;
    padding: 15px 35px;
    background: #bb0b0b;
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .berpo_btn:hover {
    background: #a00a0a;
    color: #fff;
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(187, 11, 11, 0.3);
  }

  .berpo_btn .bp-text {
    position: relative;
    z-index: 1;
  }

  /* Testimonial styling */
  .testiItem01 {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  }

  .testiItem01 .quotation {
    font-style: italic;
    color: #666;
    line-height: 1.8;
  }

  .ts_author {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
  }

  .ts_author img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

  .ts_author h5 {
    margin: 0;
    font-weight: 600;
    color: #333;
  }

  .ts_author span {
    color: #999;
    font-size: 14px;
  }

  /* Video Section Styles */
  .video-wrapper {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    background: #000;
    cursor: pointer;
  }

  .video-wrapper video {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }

  .video-wrapper .play-button-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    z-index: 10;
    pointer-events: none;
  }

  .video-wrapper .play-button-overlay .play-icon {
    width: 80px;
    height: 80px;
    background: #bb0b0b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    pointer-events: auto;
    box-shadow: 0 0 0 15px rgba(187, 11, 11, 0.3);
  }

  .video-wrapper .play-button-overlay .play-icon:hover {
    transform: scale(1.1);
    background: #a00a0a;
    box-shadow: 0 0 0 20px rgba(187, 11, 11, 0.4);
  }

  .video-wrapper .play-button-overlay .play-icon i {
    color: #fff;
    font-size: 35px;
    margin-left: 5px;
  }

  .video-wrapper .play-button-overlay.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .video-wrapper:hover .play-button-overlay:not(.hidden) {
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .video-wrapper .play-button-overlay .play-icon {
      width: 60px;
      height: 60px;
    }
    .video-wrapper .play-button-overlay .play-icon i {
      font-size: 25px;
    }
    .video-wrapper .play-button-overlay .play-icon {
      box-shadow: 0 0 0 10px rgba(187, 11, 11, 0.3);
    }
  }

  @media (max-width: 576px) {
    .video-wrapper .play-button-overlay .play-icon {
      width: 50px;
      height: 50px;
    }
    .video-wrapper .play-button-overlay .play-icon i {
      font-size: 20px;
    }
    .video-wrapper .play-button-overlay .play-icon {
      box-shadow: 0 0 0 8px rgba(187, 11, 11, 0.3);
    }
  }
`,Wr=()=>{let e=(0,x.useRef)(null),[t,n]=(0,x.useState)(!1);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:Ur}),(0,A.jsx)(`section`,{className:`slider_01`,children:(0,A.jsxs)(`div`,{id:`heroCarousel`,className:`carousel slide`,"data-ride":`carousel`,"data-interval":`5000`,"data-pause":`false`,children:[(0,A.jsxs)(`ol`,{className:`carousel-indicators`,children:[(0,A.jsx)(`li`,{"data-target":`#heroCarousel`,"data-slide-to":`0`,className:`active`}),(0,A.jsx)(`li`,{"data-target":`#heroCarousel`,"data-slide-to":`1`})]}),(0,A.jsxs)(`div`,{className:`carousel-inner`,children:[(0,A.jsx)(`div`,{className:`carousel-item active hero-slide`,children:(0,A.jsx)(`div`,{style:{backgroundImage:`url(${_r})`,backgroundSize:`cover`,backgroundPosition:`center center`,backgroundRepeat:`no-repeat`,minHeight:`750px`,display:`flex`,alignItems:`center`,padding:`0 15%`,position:`relative`},className:`hero-slide`,children:(0,A.jsxs)(`div`,{className:`hero-content`,style:{maxWidth:`670px`,width:`100%`},children:[(0,A.jsxs)(`div`,{className:`sub-title text-uppercase`,style:{color:`#bb0b0b`,fontSize:`14px`,fontWeight:700,lineHeight:`28px`,letterSpacing:`2.8px`,marginBottom:`10px`},children:[(0,A.jsx)(`br`,{}),(0,A.jsx)(`br`,{}),` `,(0,A.jsx)(`span`,{className:`bg`,children:`GEOSPATIAL & DIGITAL SOLUTIONS`})]}),(0,A.jsxs)(`h1`,{className:`headFont`,style:{color:`#ffffff`,fontSize:`70px`,fontWeight:700,lineHeight:`80px`,marginBottom:`20px`},children:[`Mapping the World.Building Smarter`,(0,A.jsx)(`span`,{style:{color:`#bb0b0b`},children:` Solutions.`})]}),(0,A.jsx)(`p`,{style:{color:`#d9d9d9`,fontSize:`18px`,fontWeight:400,lineHeight:`28px`,marginBottom:`30px`},children:`We deliver innovative geospatial solutions that transform location data into accurate, actionable insights. From GIS and aerial mapping to drone surveys and spatial intelligence, we help organizations make better decisions.`}),(0,A.jsx)(`div`,{className:`btn-wrapper`,children:(0,A.jsxs)(`a`,{className:`berpo_btn`,href:`service1.html`,children:[(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-text`,children:`EXPLORE OUR SERVICES`})]})})]})})}),(0,A.jsx)(`div`,{className:`carousel-item hero-slide`,children:(0,A.jsx)(`div`,{style:{backgroundImage:`url(${vr})`,backgroundSize:`cover`,backgroundPosition:`center center`,backgroundRepeat:`no-repeat`,minHeight:`750px`,display:`flex`,alignItems:`center`,padding:`0 15%`,position:`relative`},className:`hero-slide`,children:(0,A.jsxs)(`div`,{className:`hero-content`,style:{maxWidth:`670px`,width:`100%`},children:[(0,A.jsxs)(`div`,{className:`sub-title text-uppercase`,style:{color:`#bb0b0b`,fontSize:`14px`,fontWeight:700,lineHeight:`28px`,letterSpacing:`2.8px`,marginBottom:`10px`},children:[(0,A.jsx)(`br`,{}),` `,(0,A.jsx)(`span`,{className:`bg`,children:`SGT SOLUTIONS`})]}),(0,A.jsxs)(`h1`,{className:`headFont`,style:{color:`#ffffff`,fontSize:`70px`,fontWeight:700,lineHeight:`80px`,marginBottom:`20px`},children:[`See More. Map Better.`,(0,A.jsx)(`span`,{style:{color:`#bb0b0b`},children:`Decide Smarter.`})]}),(0,A.jsx)(`p`,{style:{color:`#d9d9d9`,fontSize:`18px`,fontWeight:400,lineHeight:`26px`,marginBottom:`30px`},children:`Advanced GIS, surveying, mapping, and spatial intelligence solutions designed for a connected world.`}),(0,A.jsx)(`div`,{className:`btn-wrapper`,children:(0,A.jsxs)(`a`,{className:`berpo_btn`,href:`service1.html`,children:[(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-text`,children:`DISCOVER MORE`})]})})]})})})]}),(0,A.jsxs)(`a`,{className:`carousel-control-prev`,href:`#heroCarousel`,role:`button`,"data-slide":`prev`,children:[(0,A.jsx)(`span`,{className:`carousel-control-prev-icon`,"aria-hidden":`true`}),(0,A.jsx)(`span`,{className:`sr-only`,children:`Previous`})]}),(0,A.jsxs)(`a`,{className:`carousel-control-next`,href:`#heroCarousel`,role:`button`,"data-slide":`next`,children:[(0,A.jsx)(`span`,{className:`carousel-control-next-icon`,"aria-hidden":`true`}),(0,A.jsx)(`span`,{className:`sr-only`,children:`Next`})]})]})}),(0,A.jsx)(`section`,{className:`serviceSectionTitle py-5`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsxs)(`div`,{className:`col-xl-12 text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Services`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`What We Do `,(0,A.jsx)(`br`,{}),` Our Geospatial & Digital Services `]})]})})})}),(0,A.jsx)(`section`,{className:`service_section_01 pb-5`,children:(0,A.jsxs)(`div`,{className:`container largeContainer`,children:[(0,A.jsxs)(`div`,{className:`row p-3`,children:[(0,A.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:yr,alt:``,className:`img-fluid`})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas fa-globe`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(`a`,{href:`/services/web-gis`,children:`Web GIS`})}),(0,A.jsx)(`p`,{children:`Web-based mapping portals for land records and asset tracking.`})]})]})}),(0,A.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:br,alt:``,className:`img-fluid`})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas fa-map-marked-alt`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(`a`,{href:`/services/geo-property`,children:`Spatial Revenue Intelligence`})}),(0,A.jsx)(`p`,{children:`Digitize buildings and parcels from aerial imagery.`})]})]})}),(0,A.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:xr,alt:``,className:`img-fluid`})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas fa-handshake`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(`a`,{href:`/services/drone-survey`,children:`Drone & DGPS Survey`})}),(0,A.jsx)(`p`,{children:`Centimeter-level accuracy for property mapping.`})]})]})})]}),(0,A.jsx)(`div`,{className:`row mt-4`,children:(0,A.jsx)(`div`,{className:`col-lg-12 text-center`,children:(0,A.jsxs)(`div`,{className:`qu_link`,children:[`From Web GIS and drone surveys to spatial analytics, we help organizations turn location data into actionable insights. `,(0,A.jsx)(`a`,{href:`javascript:void(0);`,children:`Explore Company`})]})})})]})}),(0,A.jsx)(`section`,{className:`achivementSection01 py-5`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsxs)(`div`,{className:`row align-items-center`,children:[(0,A.jsxs)(`div`,{className:`col-xl-5 col-lg-6`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`GEOSPATIAL EXPERTISE`}),(0,A.jsx)(`h2`,{className:`secTitle`,children:`Turning Location Data Into Real-World Solutions`}),(0,A.jsxs)(`p`,{children:[`We combine GIS, remote sensing, surveying, drone technology, and spatial analytics to deliver accurate`,(0,A.jsx)(`br`,{}),` information for better planning and decision-making.`]}),(0,A.jsxs)(`ul`,{className:`listItem withbg`,children:[(0,A.jsx)(`li`,{children:(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`i`,{className:`twi-check-circle`}),`Accurate GIS & Mapping Solutions`]})}),(0,A.jsx)(`li`,{children:(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`i`,{className:`twi-check-circle`}),`Drone & DGPS Surveying`]})}),(0,A.jsx)(`li`,{children:(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`i`,{className:`twi-check-circle`}),`Spatial Data & Remote Sensing`]})})]}),(0,A.jsxs)(`a`,{className:`berpo_btn`,href:`contact.html`,children:[(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-text`,children:`Explore Our Services`})]})]}),(0,A.jsx)(`div`,{className:`col-xl-7 col-lg-6`,children:(0,A.jsxs)(`div`,{className:`clinetWorlwide position-relative`,children:[(0,A.jsx)(`img`,{src:Sr,alt:``,className:`img-fluid achievement-img`}),(0,A.jsxs)(`div`,{className:`ClientNumber countfact`,"data-count":`80`,style:{position:`absolute`,bottom:`20px`,right:`20px`,background:`#fff`,padding:`20px 30px`,borderRadius:`10px`,boxShadow:`0 5px 20px rgba(0,0,0,0.1)`,textAlign:`center`},children:[(0,A.jsxs)(`h2`,{children:[(0,A.jsx)(`span`,{className:`counter`,children:`10`}),(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`GEOSPATIAL SERVICES`})]})]})})]})})}),(0,A.jsx)(`section`,{className:`clientSection01 py-5`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsxs)(`div`,{className:`row align-items-center`,children:[(0,A.jsx)(`div`,{className:`col-6 col-md-3 text-center mb-4 mb-md-0 client-logo-item`,children:(0,A.jsx)(`a`,{href:`javascript:void(0);`,children:(0,A.jsx)(`img`,{src:Cr,alt:``,className:`img-fluid`,style:{maxHeight:`80px`,objectFit:`contain`}})})}),(0,A.jsx)(`div`,{className:`col-6 col-md-3 text-center mb-4 mb-md-0 client-logo-item`,children:(0,A.jsx)(`a`,{href:`javascript:void(0);`,children:(0,A.jsx)(`img`,{src:wr,alt:``,className:`img-fluid`,style:{maxHeight:`80px`,objectFit:`contain`}})})}),(0,A.jsx)(`div`,{className:`col-6 col-md-3 text-center client-logo-item`,children:(0,A.jsx)(`a`,{href:`javascript:void(0);`,children:(0,A.jsx)(`img`,{src:Tr,alt:``,className:`img-fluid`,style:{maxHeight:`80px`,objectFit:`contain`}})})}),(0,A.jsx)(`div`,{className:`col-6 col-md-3 text-center client-logo-item`,children:(0,A.jsx)(`a`,{href:`javascript:void(0);`,children:(0,A.jsx)(`img`,{src:Er,alt:``,className:`img-fluid`,style:{maxHeight:`80px`,objectFit:`contain`}})})})]})})}),(0,A.jsx)(`section`,{className:`videoSection01 py-5`,style:{background:`#bdcfe0`},children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`GEOSPATIAL TECHNOLOGY`}),(0,A.jsx)(`h2`,{className:`secTitle`,children:`Turning Location Data Into Smarter Decisions`}),(0,A.jsxs)(`div`,{className:`video-wrapper`,onClick:()=>{let t=e.current;t&&(t.paused?(t.play(),n(!0)):(t.pause(),n(!1)))},children:[(0,A.jsxs)(`video`,{ref:e,playsInline:!0,style:{width:`100%`,height:`auto`,borderRadius:`10px`},poster:_r,onEnded:()=>{n(!1)},onPause:()=>n(!1),onPlay:()=>n(!0),children:[(0,A.jsx)(`source`,{src:Hr,type:`video/mp4`}),`Your browser does not support the video tag.`]}),(0,A.jsx)(`div`,{className:`play-button-overlay ${t?`hidden`:``}`,children:(0,A.jsx)(`div`,{className:`play-icon`,children:(0,A.jsx)(`i`,{className:`fas fa-play`})})})]})]})})})}),(0,A.jsx)(`section`,{className:`tabSection01 py-5`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsxs)(`div`,{className:`col-lg-12`,children:[(0,A.jsxs)(`ul`,{className:`nav beproTab justify-content-center flex-wrap`,id:`beproTab`,role:`tablist`,children:[(0,A.jsx)(`li`,{role:`presentation`,className:`nav-item`,children:(0,A.jsx)(`a`,{id:`business-tab`,"data-toggle":`tab`,href:`#business`,role:`tab`,"aria-controls":`business`,"aria-selected":`false`,className:`nav-link`,children:`GIS & MAPPING`})}),(0,A.jsx)(`li`,{role:`presentation`,className:`nav-item`,children:(0,A.jsx)(`a`,{className:`nav-link active`,id:`financial-tab`,"data-toggle":`tab`,href:`#financial`,role:`tab`,"aria-controls":`financial`,"aria-selected":`true`,children:`SURVEYING & DATA`})}),(0,A.jsx)(`li`,{role:`presentation`,className:`nav-item`,children:(0,A.jsx)(`a`,{id:`global-tab`,"data-toggle":`tab`,href:`#global`,role:`tab`,"aria-controls":`global`,"aria-selected":`false`,className:`nav-link`,children:`SPATIAL INTELLIGENCE`})})]}),(0,A.jsxs)(`div`,{className:`tab-content mt-4`,children:[(0,A.jsx)(`div`,{className:`tab-pane fade animated slideInUp2`,id:`business`,role:`tabpanel`,"aria-labelledby":`business-tab`,children:(0,A.jsx)(`div`,{className:`beproTabCon`,children:(0,A.jsxs)(`div`,{className:`row align-items-center`,children:[(0,A.jsxs)(`div`,{className:`col-md-6`,children:[(0,A.jsx)(`h2`,{className:`secTitle`,children:`Geospatial Solutions for a Smarter World`}),(0,A.jsx)(`p`,{children:`We transform location data into accurate, actionable insights. From GIS and aerial mapping to drone surveys and spatial analysis, SGT Solutions helps organizations understand their environment and make better decisions.`}),(0,A.jsxs)(`a`,{className:`berpo_btn`,href:`contact.html`,children:[(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-text`,children:`EXPLORE OUR SERVICES`})]})]}),(0,A.jsx)(`div`,{className:`col-md-6`,children:(0,A.jsx)(`img`,{src:Dr,alt:``,className:`img-fluid`})})]})})}),(0,A.jsx)(`div`,{className:`tab-pane fade show active animated slideInUp2`,id:`financial`,role:`tabpanel`,"aria-labelledby":`financial-tab`,children:(0,A.jsx)(`div`,{className:`beproTabCon`,children:(0,A.jsxs)(`div`,{className:`row align-items-center`,children:[(0,A.jsxs)(`div`,{className:`col-md-6`,children:[(0,A.jsx)(`h2`,{className:`secTitle`,children:`Geospatial Solutions for a Smarter World`}),(0,A.jsx)(`p`,{children:`We transform location data into accurate, actionable insights. From GIS and aerial mapping to drone surveys and spatial analysis, SGT Solutions helps organizations understand their environment and make better decisions.`}),(0,A.jsxs)(`a`,{className:`berpo_btn`,href:`contact.html`,children:[(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-text`,children:`EXPLORE OUR SERVICES`})]})]}),(0,A.jsx)(`div`,{className:`col-md-6`,children:(0,A.jsx)(`img`,{src:Dr,alt:``,className:`img-fluid`})})]})})}),(0,A.jsx)(`div`,{className:`tab-pane fade animated slideInUp2`,id:`global`,role:`tabpanel`,"aria-labelledby":`global-tab`,children:(0,A.jsx)(`div`,{className:`beproTabCon`,children:(0,A.jsxs)(`div`,{className:`row align-items-center`,children:[(0,A.jsxs)(`div`,{className:`col-md-6`,children:[(0,A.jsx)(`h2`,{className:`secTitle`,children:`Geospatial Solutions for a Smarter World`}),(0,A.jsx)(`p`,{children:`We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites,  We are committed to providing our customers with exceptional service.`}),(0,A.jsxs)(`a`,{className:`berpo_btn`,href:`contact.html`,children:[(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-text`,children:`EXPLORE OUR SERVICES`})]})]}),(0,A.jsx)(`div`,{className:`col-md-6`,children:(0,A.jsx)(`img`,{src:Dr,alt:``,className:`img-fluid`})})]})})})]})]})})})}),(0,A.jsx)(`section`,{className:`dividSection`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsx)(`div`,{className:`col-lg-12 text-center`,children:(0,A.jsx)(`div`,{className:`diviborder`})})})})}),(0,A.jsx)(`section`,{className:`teamSection01 py-5`,children:(0,A.jsxs)(`div`,{className:`container largeContainer`,children:[(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Members`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Meet Our Latest `,(0,A.jsx)(`br`,{}),`Team Member`]})]})}),(0,A.jsxs)(`div`,{className:`row mt-4`,children:[(0,A.jsx)(`div`,{className:`col-lg-3 col-md-6 mb-4`,children:(0,A.jsxs)(`div`,{className:`team_01 text-center`,children:[(0,A.jsxs)(`div`,{className:`tm_thumb position-relative`,children:[(0,A.jsx)(`img`,{src:Or,alt:``,className:`img-fluid`,style:{borderRadius:`10px`}}),(0,A.jsxs)(`div`,{className:`tm_social`,style:{position:`absolute`,bottom:`10px`,left:`0`,right:`0`,display:`flex`,justifyContent:`center`,gap:`10px`,opacity:0,transition:`all 0.3s ease`},children:[(0,A.jsxs)(`a`,{href:`https://www.facebook.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-facebook-square`}),`Facebook`]}),(0,A.jsxs)(`a`,{href:`https://twitter.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-twitter`}),`Twitter`]}),(0,A.jsxs)(`a`,{href:`https://linkedin.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-youtube`}),`Youtube`]})]})]}),(0,A.jsx)(`h3`,{className:`mt-3`,children:(0,A.jsx)(`a`,{href:`single-team.html`,style:{color:`#333`,textDecoration:`none`},children:`Mohana`})}),(0,A.jsx)(`p`,{style:{color:`#999`},children:`Web Designer`})]})}),(0,A.jsx)(`div`,{className:`col-lg-3 col-md-6 mb-4`,children:(0,A.jsxs)(`div`,{className:`team_01 text-center`,children:[(0,A.jsxs)(`div`,{className:`tm_thumb position-relative`,children:[(0,A.jsx)(`img`,{src:kr,alt:``,className:`img-fluid`,style:{borderRadius:`10px`}}),(0,A.jsxs)(`div`,{className:`tm_social`,style:{position:`absolute`,bottom:`10px`,left:`0`,right:`0`,display:`flex`,justifyContent:`center`,gap:`10px`,opacity:0,transition:`all 0.3s ease`},children:[(0,A.jsxs)(`a`,{href:`https://www.facebook.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-facebook-square`}),`Facebook`]}),(0,A.jsxs)(`a`,{href:`https://twitter.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-twitter`}),`Twitter`]}),(0,A.jsxs)(`a`,{href:`https://linkedin.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-youtube`}),`Youtube`]})]})]}),(0,A.jsx)(`h3`,{className:`mt-3`,children:(0,A.jsx)(`a`,{href:`single-team.html`,style:{color:`#333`,textDecoration:`none`},children:`Sheikh`})}),(0,A.jsx)(`p`,{style:{color:`#999`},children:`Web Developer`})]})}),(0,A.jsx)(`div`,{className:`col-lg-3 col-md-6 mb-4`,children:(0,A.jsxs)(`div`,{className:`team_01 text-center`,children:[(0,A.jsxs)(`div`,{className:`tm_thumb position-relative`,children:[(0,A.jsx)(`img`,{src:Ar,alt:``,className:`img-fluid`,style:{borderRadius:`10px`}}),(0,A.jsxs)(`div`,{className:`tm_social`,style:{position:`absolute`,bottom:`10px`,left:`0`,right:`0`,display:`flex`,justifyContent:`center`,gap:`10px`,opacity:0,transition:`all 0.3s ease`},children:[(0,A.jsxs)(`a`,{href:`https://www.facebook.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-facebook-square`}),`Facebook`]}),(0,A.jsxs)(`a`,{href:`https://twitter.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-twitter`}),`Twitter`]}),(0,A.jsxs)(`a`,{href:`https://linkedin.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-youtube`}),`Youtube`]})]})]}),(0,A.jsx)(`h3`,{className:`mt-3`,children:(0,A.jsx)(`a`,{href:`single-team.html`,style:{color:`#333`,textDecoration:`none`},children:`Nithish`})}),(0,A.jsx)(`p`,{style:{color:`#999`},children:`Business Expert`})]})}),(0,A.jsx)(`div`,{className:`col-lg-3 col-md-6 mb-4`,children:(0,A.jsxs)(`div`,{className:`team_01 text-center`,children:[(0,A.jsxs)(`div`,{className:`tm_thumb position-relative`,children:[(0,A.jsx)(`img`,{src:Or,alt:``,className:`img-fluid`,style:{borderRadius:`10px`}}),(0,A.jsxs)(`div`,{className:`tm_social`,style:{position:`absolute`,bottom:`10px`,left:`0`,right:`0`,display:`flex`,justifyContent:`center`,gap:`10px`,opacity:0,transition:`all 0.3s ease`},children:[(0,A.jsxs)(`a`,{href:`https://www.facebook.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-facebook-square`}),`Facebook`]}),(0,A.jsxs)(`a`,{href:`https://twitter.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-twitter`}),`Twitter`]}),(0,A.jsxs)(`a`,{href:`https://linkedin.com/`,style:{background:`#fff`,padding:`5px 10px`,borderRadius:`5px`,textDecoration:`none`,color:`#333`,fontSize:`12px`},children:[(0,A.jsx)(`i`,{className:`twi-youtube`}),`Youtube`]})]})]}),(0,A.jsx)(`h3`,{className:`mt-3`,children:(0,A.jsx)(`a`,{href:`single-team.html`,style:{color:`#333`,textDecoration:`none`},children:`Gayathiri`})}),(0,A.jsx)(`p`,{style:{color:`#999`},children:`Web Designer`})]})})]})]})}),(0,A.jsx)(`section`,{className:`testimonialSection01 py-5`,style:{background:`#f8f9fa`},children:(0,A.jsxs)(`div`,{className:`container largeContainer`,children:[(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`testimonial`}),(0,A.jsx)(`h2`,{className:`secTitle`,children:`What Our Clients Say`})]})}),(0,A.jsxs)(`div`,{className:`row mt-4`,children:[(0,A.jsx)(`div`,{className:`col-md-6`,children:(0,A.jsxs)(`div`,{className:`accordion bepAccordion`,id:`befAccordion01`,children:[(0,A.jsxs)(`div`,{className:`card`,children:[(0,A.jsx)(`div`,{className:`card-header`,id:`ma_ac_01`,children:(0,A.jsx)(`h2`,{className:`mb-0`,children:(0,A.jsxs)(`button`,{className:`collapsed`,type:`button`,"data-toggle":`collapse`,"data-target":`#ma_collapes_01`,"data-aria-expanded":`false`,"data-aria-controls":`ma_collapes_01`,children:[(0,A.jsx)(`i`,{children:`1.`}),` Why Choose Our Sgt Solutions?`,(0,A.jsx)(`span`,{})]})})}),(0,A.jsx)(`div`,{id:`ma_collapes_01`,className:`collapse`,"aria-labelledby":`ma_ac_01`,"data-parent":`#befAccordion01`,children:(0,A.jsx)(`div`,{className:`card-body`,children:`We combine cutting-edge technology with deep domain expertise to deliver accurate, actionable spatial intelligence.`})})]}),(0,A.jsxs)(`div`,{className:`card`,children:[(0,A.jsx)(`div`,{className:`card-header`,id:`ma_ac_02`,children:(0,A.jsx)(`h2`,{className:`mb-0`,children:(0,A.jsxs)(`button`,{type:`button`,"data-toggle":`collapse`,"data-target":`#ma_collapes_02`,"data-aria-expanded":`true`,"data-aria-controls":`ma_collapes_02`,children:[(0,A.jsx)(`i`,{children:`2.`}),` How Do We Ensure Accuracy`,(0,A.jsx)(`span`,{})]})})}),(0,A.jsx)(`div`,{id:`ma_collapes_02`,className:`collapse show`,"aria-labelledby":`ma_ac_02`,"data-parent":`#befAccordion01`,children:(0,A.jsx)(`div`,{className:`card-body`,children:`We use high-precision LiDAR, DGPS, and photogrammetry with rigorous quality control at every stage.`})})]}),(0,A.jsxs)(`div`,{className:`card`,children:[(0,A.jsx)(`div`,{className:`card-header`,id:`ma_ac_03`,children:(0,A.jsx)(`h2`,{className:`mb-0`,children:(0,A.jsxs)(`button`,{className:`collapsed`,type:`button`,"data-toggle":`collapse`,"data-target":`#ma_collapes_03`,"data-aria-expanded":`false`,"data-aria-controls":`ma_collapes_03`,children:[(0,A.jsx)(`i`,{children:`3.`}),` What Industries Do We Serve?`,(0,A.jsx)(`span`,{})]})})}),(0,A.jsx)(`div`,{id:`ma_collapes_03`,className:`collapse`,"aria-labelledby":`ma_ac_03`,"data-parent":`#befAccordion01`,children:(0,A.jsx)(`div`,{className:`card-body`,children:`Urban planning, agriculture, real estate, infrastructure, environmental monitoring, and government.`})})]})]})}),(0,A.jsx)(`div`,{className:`col-md-6`,children:(0,A.jsxs)(`div`,{id:`testimonialCarousel`,className:`carousel slide`,"data-ride":`carousel`,"data-interval":`4000`,"data-pause":`false`,children:[(0,A.jsxs)(`div`,{className:`carousel-inner`,children:[(0,A.jsx)(`div`,{className:`carousel-item  carousel-testimonial active`,children:(0,A.jsxs)(`div`,{className:`testiItem01`,style:{background:`#fff`,padding:`30px`,borderRadius:`10px`},children:[(0,A.jsx)(`h5`,{children:`Exceptional Service`}),(0,A.jsx)(`p`,{className:`quotation`,children:`"SGT Solutions successfully delivered the comprehensive Property Survey Mapping project for Coimbatore City Municipal Corporation.By deploying their proprietary Spatial Revenue Intelligence System (SRIS), they accurately mapped urban property boundaries andintegrated spatial data seamlessly. Their technology has been highly effective inidentifying previously unassessed commercial structures and verifying built-up areavariations."`}),(0,A.jsxs)(`div`,{className:`ts_author`,children:[(0,A.jsx)(`img`,{src:jr,alt:``,style:{width:`70px`,height:`70px`,borderRadius:`50%`,objectFit:`cover`}}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h5`,{children:`Coimbatore City Municipal Corporation`}),(0,A.jsx)(`span`,{children:`Government Partner`})]})]})]})}),(0,A.jsx)(`div`,{className:`carousel-item carousel-testimonial`,children:(0,A.jsxs)(`div`,{className:`testiItem01`,style:{background:`#fff`,padding:`30px`,borderRadius:`10px`},children:[(0,A.jsx)(`h5`,{children:`Environmental Excellence`}),(0,A.jsx)(`p`,{className:`quotation`,children:`"SGT Solutions has been a vital technical partner for the Marutham Foundation. Their advanced GIS analysis and hydro-spatial mapping helped trackecological degradation, siltation levels, and natural inlet channels across projectzones.Dr. Saravani and her team successfully bridged cutting-edge technology withgrassroots environmental restoration, optimizing rainwater harvesting catchments forwater body renovation initiatives."`}),(0,A.jsxs)(`div`,{className:`ts_author`,children:[(0,A.jsx)(`img`,{src:Mr,alt:``,style:{width:`70px`,height:`70px`,borderRadius:`50%`,objectFit:`cover`}}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h5`,{children:`Marutham Foundation`}),(0,A.jsx)(`span`,{children:`Environmental Partner`})]})]})]})}),(0,A.jsx)(`div`,{className:`carousel-item carousel-testimonial`,children:(0,A.jsxs)(`div`,{className:`testiItem01`,style:{background:`#fff`,padding:`30px`,borderRadius:`10px`},children:[(0,A.jsx)(`h5`,{children:`Exceptional Service`}),(0,A.jsx)(`p`,{className:`quotation`,children:`"SGT Solutions completed extensive spatial mapping and waterquality analysis for the Institute for Water Studies, Chennai. Using geospatiallogy, they tracked water bodies and aquifer profiles, while lab-based indexin measured critical chemical parameters and contamination trends. Their work providedreliable datasets, significantly aiding research and water resource managementinitiatives."`}),(0,A.jsxs)(`div`,{className:`ts_author`,children:[(0,A.jsx)(`img`,{src:Nr,alt:``,style:{width:`70px`,height:`70px`,borderRadius:`50%`,objectFit:`cover`}}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h5`,{children:`Institute for Water Studies`}),(0,A.jsx)(`span`,{children:`Government Agency`})]})]})]})})]}),(0,A.jsxs)(`ol`,{className:`carousel-indicators`,style:{position:`relative`,marginTop:`20px`},children:[(0,A.jsx)(`li`,{"data-target":`#testimonialCarousel`,"data-slide-to":`0`,className:`active`,style:{width:`12px`,height:`12px`,borderRadius:`50%`,background:`#bb0b0b`,border:`none`}}),(0,A.jsx)(`li`,{"data-target":`#testimonialCarousel`,"data-slide-to":`1`,style:{width:`12px`,height:`12px`,borderRadius:`50%`,background:`#ccc`,border:`none`}}),(0,A.jsx)(`li`,{"data-target":`#testimonialCarousel`,"data-slide-to":`2`,style:{width:`12px`,height:`12px`,borderRadius:`50%`,background:`#ccc`,border:`none`}})]})]})})]})]})}),(0,A.jsx)(`section`,{className:`blogSectiont01 py-5`,children:(0,A.jsxs)(`div`,{className:`container largeContainer`,children:[(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`GEOSPATIAL INSIGHTS`}),(0,A.jsx)(`h2`,{className:`secTitle`,children:`Latest Geospatial Insights`})]})}),(0,A.jsxs)(`div`,{className:`row mt-4`,children:[(0,A.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:Pr,alt:``,className:`img-fluid`})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`a`,{className:`bmeta`,href:`single-blog.html`,children:[(0,A.jsx)(`i`,{className:`twi-calendar-alt1`}),`12 August, 2026`]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(`a`,{href:`single-blog.html`,children:`How GIS Is Transforming Modern Property Mapping`})})]})]})}),(0,A.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:Fr,alt:``,className:`img-fluid`})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`a`,{className:`bmeta`,href:`single-blog.html`,children:[(0,A.jsx)(`i`,{className:`twi-calendar-alt1`}),`5 August, 2026`]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(`a`,{href:`single-blog.html`,children:`The Role of Drones in Modern Land Surveying`})})]})]})}),(0,A.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:Ir,alt:``,className:`img-fluid`})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`a`,{className:`bmeta`,href:`single-blog.html`,children:[(0,A.jsx)(`i`,{className:`twi-calendar-alt1`}),`28 July, 2026`]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(`a`,{href:`single-blog.html`,children:`Turning Aerial Imagery Into Actionable Insights`})})]})]})})]})]})}),(0,A.jsx)(`section`,{className:`ctaSectiont01 py-5`,style:{background:`#1a1a1a`,color:`#fff`},children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsxs)(`div`,{className:`row align-items-center`,children:[(0,A.jsx)(`div`,{className:`col-md-5`,children:(0,A.jsxs)(`div`,{className:`ctaCon`,children:[(0,A.jsxs)(`h4`,{children:[(0,A.jsx)(`span`,{style:{color:`#bb0b0b`},children:`Mapping`}),`Data.`]}),(0,A.jsx)(`h2`,{style:{fontSize:`48px`,fontWeight:700},children:`Creating`}),(0,A.jsxs)(`h3`,{style:{fontSize:`36px`,fontWeight:700},children:[(0,A.jsx)(`span`,{style:{color:`#bb0b0b`}}),` Impact`]}),(0,A.jsxs)(`a`,{className:`berpo_btn`,href:`contact.html`,style:{marginTop:`20px`},children:[(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-text`,children:`Contact Us`})]})]})}),(0,A.jsx)(`div`,{className:`col-md-7`,children:(0,A.jsxs)(`div`,{className:`ctaThumb text-center cta-thumb`,children:[(0,A.jsx)(`img`,{className:`ctaborder`,src:Br,alt:``,style:{maxWidth:`100%`}}),(0,A.jsx)(`img`,{src:Vr,alt:``,style:{maxWidth:`100%`,marginTop:`20px`}})]})})]})})})]})},Gr=`/assets/services-bg--umohj6C.jpg`,Kr=[{id:1,icon:`fa-globe`,title:`Web GIS`,description:`Web-based mapping portals for land records and asset tracking.`,image:yr,link:`/services/web-gis`},{id:2,icon:`fa-mobile-alt`,title:`Mobile GIS`,description:`Offline field applications for property surveys and data collection.`,image:br,link:`/services/mobile-gis`},{id:3,icon:`fa-map-marked-alt`,title:`Spatial Revenue Intelligence`,description:`Digitize buildings and parcels from aerial imagery for property tax management.`,image:xr,link:`/services/geo-property`},{id:4,icon:`fa-satellite`,title:`LiDAR`,description:`High-precision 3D scanning for urban and infrastructure models.`,image:yr,link:`/services/lidar`},{id:5,icon:`fa-camera`,title:`Photogrammetry`,description:`Accurate maps and 3D models generated from drone and aerial imagery.`,image:br,link:`/services/photogrammetry`},{id:6,icon:`fa-drone`,title:`Drone & DGPS Survey`,description:`Centimeter-level accuracy for property and infrastructure mapping.`,image:xr,link:`/services/drone-survey`},{id:7,icon:`fa-map`,title:`2D Mapping`,description:`Clear and accurate maps showing land use, boundaries and assets.`,image:yr,link:`/services/2d-mapping`},{id:8,icon:`fa-clipboard-list`,title:`Consultancy Services`,description:`GIS strategy, workflow automation, implementation and professional training.`,image:br,link:`/services/consultancy`},{id:9,icon:`fa-laptop-code`,title:`Website Development`,description:`Modern responsive websites, GIS portals and enterprise web applications.`,image:xr,link:`/services/web-development`}],qr=[{id:1,name:`Coimbatore City Municipal Corporation`,role:`ThemeForest Exclusive`,text:`SGT Solutions successfully delivered the comprehensive Property Survey Mapping project for Coimbatore City Municipal Corporation. By deploying their proprietary Spatial Revenue Intelligence System (SRIS), they accurately mapped urban property boundaries andintegrated spatial data seamlessly. Their technology has been highly effective inidentifying previously unassessed commercial structures and verifying built-up areavariations.`,img:jr},{id:2,name:`Marutham Foundation`,role:`Envato Author`,text:`SGT Solutions has been a vital technical partner for the Marutham Foundation. Their advanced GIS analysis and hydro-spatial mapping helped trackecological degradation, siltation levels, and natural inlet channels across projectzones. Dr. Saravani and her team successfully bridged cutting-edge technology withgrassroots environmental restoration, optimizing rainwater harvesting catchments forwater body renovation initiatives.`,img:Mr},{id:3,name:`Institute for Water Studies`,role:`Envato Author`,text:`SGT Solutions completed extensive spatial mapping and waterquality analysis for the Institute for Water Studies, Chennai. Using geospatiallogy, they tracked water bodies and aquifer profiles, while lab-based indexin measured critical chemical parameters and contamination trends. Their work providedreliable datasets, significantly aiding research and water resource managementinitiatives.`,img:Nr}],Jr=()=>{let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`financial`),[i,a]=(0,x.useState)(1),o=e=>{a(i===e?null:e)};return(0,A.jsxs)(`div`,{className:`service-page`,children:[(0,A.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

     

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

        .service_item_01 .sitem_con {
          text-align: center;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 0 0 15px 15px;
        }

        .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -40px auto 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          position: sticky;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #189144;
          background-color: rgb(84, 32, 49) !important;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 12.5pxS;
          font-size: 16.5px;
          color: #d6d6e3;
         
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
          padding:10px;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 200%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
        .subTitle h1 {
    color: red;
}
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 22px 35px 23px 105px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
        }
      `}),(0,A.jsxs)(`section`,{className:`section-padding background_img`,style:{backgroundImage:`url(${Gr})`,backgroundSize:`cover`,backgroundPosition:`center`,position:`absolute`,position:`relative`,overflow:`hidden`,backgroundColor:`#dededf`},children:[(0,A.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,bottom:0,background:`rgba(0, 0, 0, 0.6)`,zIndex:1}}),(0,A.jsxs)(`div`,{className:`container`,style:{position:`relative`,zIndex:2},children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`br`,{}),(0,A.jsx)(`br`,{}),(0,A.jsx)(`br`,{}),` `,(0,A.jsx)(`br`,{}),(0,A.jsx)(`div`,{className:`subTitle`,style:{color:`#ff6b6b`},children:`Our Expertise`}),(0,A.jsxs)(`h2`,{className:`secTitle`,style:{color:`#ffffff`},children:[`Core Geospatial `,(0,A.jsx)(`span`,{style:{color:`#bb0b0b`},children:`Services`})]}),(0,A.jsx)(`p`,{style:{color:`#d0d0dd`},children:`Delivering precise, data-driven solutions for modern mapping and asset management.`})]}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(k,{to:`/services`,className:`berpo_btn`,children:[`Our Services `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})]}),(0,A.jsxs)(`section`,{className:`section-padding`,style:{position:`relative`,overflow:`hidden`,backgroundColor:`#fff`},children:[(0,A.jsx)(`div`,{style:{top:0,left:0,right:0,bottom:0,zIndex:0}}),(0,A.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,bottom:0,background:`rgba(0, 0, 0, 0.6)`,zIndex:1}}),(0,A.jsxs)(`div`,{className:`container`,style:{position:`relative`,zIndex:2},children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`br`,{}),(0,A.jsx)(`br`,{}),(0,A.jsx)(`br`,{}),` `,(0,A.jsx)(`br`,{}),(0,A.jsx)(`div`,{className:`subTitle`,style:{color:`#ff6b6b`},children:`Our Expertise`}),(0,A.jsxs)(`h2`,{className:`secTitle`,style:{color:`#ffffff`},children:[`Core Geospatial `,(0,A.jsx)(`span`,{style:{color:`#bb0b0b`},children:`Services`})]}),(0,A.jsx)(`p`,{style:{color:`#d0d0dd`},children:`Delivering precise, data-driven solutions for modern mapping and asset management.`})]}),(0,A.jsx)(`div`,{className:`service-grid`,children:Kr.map(e=>(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(k,{to:`/services`,className:`berpo_btn`,children:[`Explore All Services `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})]}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,A.jsxs)(`div`,{className:`achievement-content`,children:[(0,A.jsxs)(`div`,{className:`subTitle`,children:[(0,A.jsx)(`h1`,{children:`Our Impact`}),` `]}),(0,A.jsx)(`h2`,{className:`secTitle`,children:`Delivering Geospatial Excellence`}),(0,A.jsx)(`p`,{style:{color:`#f4f4fc`,marginBottom:`16px`},children:`With over 7 years of expertise, we provide innovative GIS solutions that empower organizations to make data-driven decisions.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` End-to-end GIS implementation`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Custom web & mobile mapping`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` LiDAR & photogrammetry processing`]})]}),(0,A.jsx)(k,{to:`/contact`,className:`berpo_btn`,children:`Get a Consultation`})]}),(0,A.jsxs)(`div`,{className:`achievement-image`,children:[(0,A.jsx)(`img`,{src:Sr,alt:`Achievement`}),(0,A.jsxs)(`div`,{className:`client-badge`,children:[(0,A.jsxs)(`h2`,{children:[`10`,(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`Years Experience`})]})]})]})})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Tailored `,(0,A.jsx)(`span`,{children:`GIS`}),` Approaches`]})]}),(0,A.jsxs)(`div`,{className:`beproTab`,children:[(0,A.jsx)(`button`,{className:`nav-link ${n===`business`?`active`:``}`,onClick:()=>r(`business`),children:`Business Growth`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`financial`?`active`:``}`,onClick:()=>r(`financial`),children:`Financial Intelligence`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`global`?`active`:``}`,onClick:()=>r(`global`),children:`Global Solutions`})]}),(0,A.jsxs)(`div`,{className:`tab-content`,children:[(0,A.jsx)(`div`,{className:`tab-pane ${n===`business`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Scalable `,(0,A.jsx)(`span`,{children:`GIS`}),` for Business`]}),(0,A.jsx)(`p`,{children:`Our spatial intelligence solutions help businesses optimize operations, track assets, and visualize data in real-time.`}),(0,A.jsx)(k,{to:`/contact`,className:`berpo_btn`,style:{marginTop:`16px`},children:`Learn More`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`GIS Business`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`financial`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Revenue `,(0,A.jsx)(`span`,{children:`Intelligence`})]}),(0,A.jsx)(`p`,{children:`Leverage spatial data for property tax assessment, revenue forecasting, and asset valuation with centimeter-level accuracy.`}),(0,A.jsx)(k,{to:`/contact`,className:`berpo_btn`,style:{marginTop:`16px`},children:`Explore`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Financial GIS`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`global`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Global `,(0,A.jsx)(`span`,{children:`GIS`}),` Solutions`]}),(0,A.jsx)(`p`,{children:`From multinational infrastructure projects to cross-border asset mapping — our solutions scale across regions and industries.`}),(0,A.jsx)(k,{to:`/contact`,className:`berpo_btn`,style:{marginTop:`16px`},children:`Contact Us`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Global GIS`})})]})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Testimonials`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`What Our `,(0,A.jsx)(`span`,{children:`Clients`}),` Say`]})]}),(0,A.jsxs)(`div`,{className:`testimonial-grid`,children:[(0,A.jsx)(`div`,{children:(0,A.jsx)(`div`,{className:`accordion`,children:[{id:1,q:`Why choose our SGT solutions?`,a:`We combine cutting-edge technology with deep domain expertise to deliver accurate, actionable spatial intelligence.`},{id:2,q:`How do we ensure data accuracy?`,a:`We use high-precision LiDAR, DGPS, and photogrammetry with rigorous quality control at every stage.`},{id:3,q:`What industries do we serve?`,a:`Urban planning, agriculture, real estate, infrastructure, environmental monitoring, and government.`}].map(e=>(0,A.jsxs)(`div`,{className:`accordion-item`,children:[(0,A.jsxs)(`button`,{className:`accordion-header ${i===e.id?`active`:``}`,onClick:()=>o(e.id),children:[(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`i`,{className:`fas fa-question-circle`}),` `,e.q]}),(0,A.jsx)(`span`,{className:`arrow`,children:(0,A.jsx)(`i`,{className:`fas fa-chevron-down`})})]}),(0,A.jsx)(`div`,{className:`accordion-body ${i===e.id?`open`:``}`,children:e.a})]},e.id))})}),(0,A.jsxs)(`div`,{children:[qr.map((t,n)=>(0,A.jsx)(`div`,{style:{display:e===n?`block`:`none`},children:(0,A.jsxs)(`div`,{className:`testiItem01`,children:[(0,A.jsx)(`h5`,{children:`Exceptional Service`}),(0,A.jsxs)(`p`,{className:`quotation`,children:[`"`,t.text,`"`]}),(0,A.jsxs)(`div`,{className:`ts_author`,children:[(0,A.jsx)(`img`,{src:t.img,alt:t.name}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h5`,{children:t.name}),(0,A.jsx)(`span`,{children:t.role})]})]})]})},t.id)),(0,A.jsx)(`div`,{className:`testimonial-controls`,children:qr.map((n,r)=>(0,A.jsx)(`button`,{className:e===r?`active`:``,onClick:()=>t(r)},r))})]})]})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`Business`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your spatial data into strategic advantage?`}),(0,A.jsx)(k,{to:`/contact`,className:`berpo_btn`,children:`Start a Project`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})})]})},Yr=`/assets/bannergg-3WWn09OU.jpg`,Xr=()=>{let e=(0,x.useRef)(null),t=(0,x.useRef)(null),[n,r]=(0,x.useState)(`ma_collapes_02`);(0,x.useEffect)(()=>(window.$&&e.current&&window.$(`.testimonialslider02`).owlCarousel({items:1,loop:!0,autoplay:!0,smartSpeed:1e3,dots:!0,nav:!1}),window.$&&t.current&&window.$(`.client-slider`).owlCarousel({items:4,loop:!0,autoplay:!0,smartSpeed:1e3,dots:!1,nav:!1,responsive:{0:{items:2},768:{items:3},992:{items:4}}}),window.$&&(window.$(`.collapse`).on(`show.bs.collapse`,function(){window.$(this).closest(`.card`).addClass(`activeBg`)}),window.$(`.collapse`).on(`hide.bs.collapse`,function(){window.$(this).closest(`.card`).removeClass(`activeBg`)})),window.$&&window.lightcase&&window.$(`.popup_video`).lightcase(),()=>{window.$&&e.current&&window.$(`.testimonialslider02`).trigger(`destroy.owl.carousel`),window.$&&t.current&&window.$(`.client-slider`).trigger(`destroy.owl.carousel`)}),[]);let i=e=>{r(n===e?``:e)},a=[{id:1,icon:``,title:`Flexible Solutions`,description:`We develop the relationships that Into underpin the next phase in your Teen organisation's growth.`,link:`/single-service`},{id:2,icon:``,title:`Premium Contact`,description:`We develop the relationships that Into underpin the next phase in your Teen organisation's growth.`,link:`/single-service`},{id:3,icon:``,title:`Creative Idea`,description:`We develop the relationships that Into underpin the next phase in your Teen organisation's growth.`,link:`/single-service`}],o=[{id:1,name:`Arnika Sorkar`,role:`Web Designer`,image:``},{id:2,name:`Georgie Haynes`,role:`Web Developer`,image:``},{id:3,name:`Jizz Merkel`,role:`Business Expert`,image:``}],s=[{id:1,avatar:``,text:`Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great & he is such a great & pleasant person to work with as he understands what you are`,author:`Akshit Singh Dutt`,role:`Digital Marketing Manager`},{id:2,avatar:``,text:`Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great & he is such a great & pleasant person to work with as he understands what you are`,author:`Matt Sanchzi`,role:`ThemeForest Exclusive`},{id:3,avatar:``,text:`Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great & he is such a great & pleasant person to work with as he understands what you are`,author:`Billi Stanlake`,role:`ThemeForest Reviewer`}],c=[{id:`ma_collapes_01`,question:`Wte Have added a new exciting feature in v2.0`,answer:`We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites, We are committed to providing our customers`},{id:`ma_collapes_02`,question:`how Consultancy Experts Work?`,answer:`We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites, We are committed to providing our customers`},{id:`ma_collapes_03`,question:`Wte Have added a new exciting feature in v2.0`,answer:`We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites, We are committed to providing our customers`}];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:`overlay`}),(0,A.jsx)(`section`,{className:`page_banner`,style:{backgroundImage:`url(${Yr})`,backgroundSize:`100% 100%`,backgroundPosition:`center top`,backgroundRepeat:`no-repeat`,width:`100%`,minHeight:`650px`},children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsx)(`div`,{className:`col-md-12 text-center`,children:(0,A.jsx)(`h2`,{className:`banner-title`,children:`About Us`})})})})}),(0,A.jsx)(`section`,{className:`aboutPageSection01`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsxs)(`div`,{className:`row`,children:[(0,A.jsxs)(`div`,{className:`col-lg-5`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Who We Are`}),(0,A.jsx)(`h2`,{className:`secTitle`,children:`SGT Solutions for You Business`}),(0,A.jsx)(`p`,{children:`Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`twi-check-circle`}),`Innovative Approach Consultancy`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`twi-check-circle`}),`Flexibile Involvement Consultancy`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`twi-check-circle`}),`Personal Manager Consultancy`]})]}),(0,A.jsxs)(k,{className:`berpo_btn with_icon04`,to:`/service1`,children:[(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsx)(`span`,{className:`bp-shape`}),(0,A.jsxs)(`span`,{className:`bp-text`,children:[`Read More`,(0,A.jsx)(`i`,{className:`twi-arrow-right`})]})]})]}),(0,A.jsx)(`div`,{className:`col-lg-7`,children:(0,A.jsx)(`div`,{className:`abpageThumb`,children:(0,A.jsx)(`img`,{src:`/assets/images/about/1.jpg`,alt:``})})})]})})}),(0,A.jsx)(`section`,{className:`service_section_09`,children:(0,A.jsxs)(`div`,{className:`container largeContainer`,children:[(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsxs)(`div`,{className:`col-xl-12 text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Services`}),(0,A.jsx)(`h2`,{className:`secTitle`,children:`Focus on Your Business`})]})}),(0,A.jsx)(`div`,{className:`row`,children:a.map(e=>(0,A.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,A.jsxs)(`div`,{className:`service_item_10`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`img`,{src:`/assets/images/service/4.jpg`,alt:``})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description}),(0,A.jsx)(k,{className:`srm`,to:e.link,children:(0,A.jsx)(`i`,{className:`twi-arrow-right1`})})]})},e.id))})]})}),(0,A.jsx)(`section`,{className:`abvideoSection videoSection01`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`We Have added a new exciting feature in v2.0`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Organizations Realize the Benefits `,(0,A.jsx)(`br`,{}),` Forming Work Teams.`]}),(0,A.jsx)(`a`,{href:`https://player.vimeo.com/video/213907368?h=3685456d6c`,className:`popup_video vbtn02`,children:(0,A.jsx)(`i`,{className:`bpro-play`})})]})})})}),(0,A.jsx)(`section`,{className:`abFa1Section`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsxs)(`div`,{className:`row`,children:[(0,A.jsx)(`div`,{className:`col-lg-6`,children:(0,A.jsxs)(`div`,{className:`fqArea`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Just a Consultancy`}),(0,A.jsx)(`h2`,{className:`secTitle`,children:`Bepro FAQ`}),(0,A.jsx)(`div`,{className:`accordion bepAccordion`,id:`befAccordion01`,children:c.map((e,t)=>(0,A.jsx)(`div`,{className:`card ${n===e.id?`activeBg`:``}`,children:(0,A.jsxs)(`div`,{className:`faqInner`,children:[(0,A.jsx)(`div`,{className:`card-header`,id:`ma_ac_${t+1}`,children:(0,A.jsx)(`h2`,{className:`mb-0`,children:(0,A.jsxs)(`button`,{type:`button`,onClick:()=>i(e.id),className:n===e.id?``:`collapsed`,"aria-expanded":n===e.id,children:[(0,A.jsxs)(`i`,{children:[t+1,`.`]}),` `,e.question,(0,A.jsx)(`span`,{})]})})}),(0,A.jsx)(`div`,{id:e.id,className:`collapse ${n===e.id?`show`:``}`,"aria-labelledby":`ma_ac_${t+1}`,"data-parent":`#befAccordion01`,children:(0,A.jsx)(`div`,{className:`card-body`,children:e.answer})})]})},e.id))})]})}),(0,A.jsx)(`div`,{className:`col-lg-6`,children:(0,A.jsxs)(`div`,{className:`fqArea`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Just a Consultancy`}),(0,A.jsx)(`h2`,{className:`secTitle`,children:`Bepro FAQ`}),(0,A.jsx)(`div`,{className:`accordion bepAccordion`,id:`befAccordion01`,children:c.map((e,t)=>(0,A.jsx)(`div`,{className:`card ${n===e.id?`activeBg`:``}`,children:(0,A.jsxs)(`div`,{className:`faqInner`,children:[(0,A.jsx)(`div`,{className:`card-header`,id:`ma_ac_${t+1}`,children:(0,A.jsx)(`h2`,{className:`mb-0`,children:(0,A.jsxs)(`button`,{type:`button`,onClick:()=>i(e.id),className:n===e.id?``:`collapsed`,"aria-expanded":n===e.id,children:[(0,A.jsxs)(`i`,{children:[t+1,`.`]}),` `,e.question,(0,A.jsx)(`span`,{})]})})}),(0,A.jsx)(`div`,{id:e.id,className:`collapse ${n===e.id?`show`:``}`,"aria-labelledby":`ma_ac_${t+1}`,"data-parent":`#befAccordion01`,children:(0,A.jsx)(`div`,{className:`card-body`,children:e.answer})})]})},e.id))})]})})]})})}),(0,A.jsx)(`section`,{className:`teamSection01 abtmPad`,children:(0,A.jsxs)(`div`,{className:`container largeContainer`,children:[(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsxs)(`div`,{className:`col-lg-12 text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Members`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Meet Our Latest `,(0,A.jsx)(`br`,{}),` Team Member`]})]})}),(0,A.jsx)(`div`,{className:`row`,children:o.map(e=>(0,A.jsx)(`div`,{className:`col-lg-4 col-md-6`,children:(0,A.jsxs)(`div`,{className:`team_01 text-center`,children:[(0,A.jsxs)(`div`,{className:`tm_thumb`,children:[(0,A.jsx)(`img`,{src:`/assets/images/team/1.jpg`,alt:e.name}),(0,A.jsxs)(`div`,{className:`tm_social`,children:[(0,A.jsxs)(`a`,{href:`https://www.facebook.com/`,children:[(0,A.jsx)(`i`,{className:`twi-facebook-square`}),`Facebook`]}),(0,A.jsxs)(`a`,{href:`https://twitter.com/`,children:[(0,A.jsx)(`i`,{className:`twi-twitter`}),`Twitter`]}),(0,A.jsxs)(`a`,{href:`https://linkedin.com/`,children:[(0,A.jsx)(`i`,{className:`twi-youtube`}),`Youtube`]})]})]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:`/single-team`,children:e.name})}),(0,A.jsx)(`p`,{children:e.role})]})},e.id))})]})}),(0,A.jsx)(`section`,{className:`testimonialSection02 abTest01`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsx)(`div`,{className:`col-md-12`,children:(0,A.jsx)(`div`,{className:`testimonialslider02 owl-carousel`,ref:e,children:s.map(e=>(0,A.jsxs)(`div`,{className:`testiItem02`,children:[(0,A.jsx)(`div`,{className:`quote`,children:(0,A.jsx)(`img`,{src:`/assets/images/home2/quote.jpg`,alt:``})}),(0,A.jsx)(`img`,{src:`/assets/images/home2/t1.jpg`,alt:``}),(0,A.jsx)(`p`,{className:`quotation`,children:e.text}),(0,A.jsx)(`div`,{className:`ts_author`,children:(0,A.jsxs)(`h5`,{children:[e.author,`, `,(0,A.jsx)(`span`,{children:e.role})]})})]},e.id))})})})})}),(0,A.jsx)(`section`,{className:`clientSection03`,children:(0,A.jsx)(`div`,{className:`container largeContainer`,children:(0,A.jsx)(`div`,{className:`row`,children:(0,A.jsx)(`div`,{className:`col-lg-12`,children:(0,A.jsx)(`div`,{className:`client-slider owl-carousel`,ref:t,children:[1,2,3,4].map((e,t)=>(0,A.jsx)(`a`,{href:`javascript:void(0);`,children:(0,A.jsx)(`img`,{src:`/assets/images/client-logo/${9+t}.png`,alt:``})},t))})})})})})]})},Zr=`/assets/hero-DgRPCpe5.jpg`,Qr=[{id:1,icon:`fa-layer-group`,title:`Interactive Map Portals`,description:`Custom web maps with pan, zoom, layer toggles, pop-up attributes, and search functionality — intuitive for non-GIS users.`,image:`/assets/feature1-Bl4SD_ju.jpg`,link:`/services/web-gis/map-portals`},{id:2,icon:`fa-database`,title:`Spatial Data Publishing`,description:`Publish shapefiles, GeoJSON, rasters, and tile layers as OGC compliant WMS, WMTS, WFS, or vector tiles. Seamless integration.`,image:`/assets/feature2-DPfWt-B_.jpg`,link:`/services/web-gis/data-publishing`},{id:3,icon:`fa-draw-polygon`,title:`Feature Editing & Data Collection`,description:`Web-based digitizing, form-based attribute entry, and geometry editing — perfect for collaborative mapping projects.`,image:`/assets/feature3-CeMU6MKg.jpg`,link:`/services/web-gis/feature-editing`},{id:4,icon:`fa-chart-simple`,title:`Location Analytics Dashboards`,description:`Combine maps with charts, filters, and summary statistics. Identify hotspots, clusters, and spatial patterns at a glance.`,image:`/assets/feature4-SxWOx2Ne.jpg`,link:`/services/web-gis/analytics`},{id:5,icon:`fa-route`,title:`Routing & Geocoding`,description:`Address search, reverse geocoding, point-to-point routing, and isochrone analysis — turn locations into insights.`,image:`/assets/feature5-CTLZyLTK.jpg`,link:`/services/web-gis/routing`},{id:6,icon:`fa-users`,title:`Multi-User & Role-Based Access`,description:`Secure login, user roles, and data-level permissions. Share sensitive layers only with authorized teams.`,image:`/assets/feature6-DIdTjqpR.png`,link:`/services/web-gis/access-control`}],$r=[{id:1,title:`Italic Mountains, she had a last view back`,date:`20 March, 2021`,author:`Keesler Smith`,img:Pr,authorImg:Lr},{id:2,title:`Styles come and go. Design language not a style.`,date:`20 March, 2021`,author:`Keesler Smith`,img:Fr,authorImg:Rr},{id:3,title:`Dharma Home Suites at Novia offers fully`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ir,authorImg:zr}],ei=()=>{let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`portals`),[i,a]=(0,x.useState)(1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)({name:``,email:``,message:``}),[u,d]=(0,x.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,A.jsxs)(`div`,{className:`service-page`,children:[(0,A.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Zr}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

      .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

    .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
      
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,A.jsx)(`section`,{className:`hero-section`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsxs)(`h1`,{className:`hero-title mt-5`,children:[(0,A.jsx)(`br`,{}),`Web GIS Spatial Data Platforms`]}),(0,A.jsx)(`p`,{className:`hero-description`,children:`Interactive mapping portals, location intelligence dashboards, and geospatial data publishing — put your maps and analysis in the hands of every stakeholder, anywhere.`}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Start Your Project `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,A.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Features`})]})]})})}),(0,A.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Web GIS Features`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Maps That Work `,(0,A.jsx)(`span`,{children:`Across`}),` Your Organization`]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Web GIS transforms static spatial data into dynamic, interactive experiences. We build custom web mapping platforms that enable data visualization, querying, editing, and collaboration — accessible on desktop, tablet, and mobile without any GIS software required.`})]}),(0,A.jsx)(`div`,{className:`service-grid`,children:Qr.map(e=>(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,A.jsxs)(`div`,{className:`achievement-content`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Web GIS `,(0,A.jsx)(`span`,{children:`Excellence`})]}),(0,A.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`With over 7 years of expertise, we deliver innovative Web GIS solutions that empower organizations to make data-driven decisions through interactive mapping.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Custom interactive map portals`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Real-time spatial data publishing`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Location intelligence dashboards`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Multi-user collaboration tools`]})]}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Consultation`})]}),(0,A.jsxs)(`div`,{className:`achievement-image`,children:[(0,A.jsx)(`img`,{src:Sr,alt:`Achievement`}),(0,A.jsxs)(`div`,{className:`client-badge`,children:[(0,A.jsxs)(`h2`,{children:[`50`,(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`Web GIS Projects`})]})]})]})})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Tailored `,(0,A.jsx)(`span`,{children:`Web GIS`}),` Approaches`]})]}),(0,A.jsxs)(`div`,{className:`beproTab`,children:[(0,A.jsx)(`button`,{className:`nav-link ${n===`portals`?`active`:``}`,onClick:()=>r(`portals`),children:`Map Portals`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`analytics`?`active`:``}`,onClick:()=>r(`analytics`),children:`Analytics`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`collaboration`?`active`:``}`,onClick:()=>r(`collaboration`),children:`Collaboration`})]}),(0,A.jsxs)(`div`,{className:`tab-content`,children:[(0,A.jsx)(`div`,{className:`tab-pane ${n===`portals`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Interactive `,(0,A.jsx)(`span`,{children:`Map Portals`})]}),(0,A.jsx)(`p`,{children:`Custom web maps with intuitive navigation, layer management, and powerful search capabilities — making GIS accessible to everyone in your organization.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Build Your Portal`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Map Portals`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`analytics`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Location `,(0,A.jsx)(`span`,{children:`Analytics`})]}),(0,A.jsx)(`p`,{children:`Combine maps with interactive charts, filters, and summary statistics. Identify spatial patterns, clusters, and trends with dynamic location intelligence dashboards.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Explore Analytics`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Analytics`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`collaboration`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Collaborative `,(0,A.jsx)(`span`,{children:`Mapping`})]}),(0,A.jsx)(`p`,{children:`Enable teams to work together with role-based access, shared data layers, and real-time editing capabilities — secure and scalable for enterprise needs.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Start Collaborating`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Collaboration`})})]})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,A.jsx)(`span`,{children:`GIS News`})]})]}),(0,A.jsx)(`div`,{className:`blog-grid`,children:$r.map(e=>(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:e.img,alt:e.title})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`span`,{className:`bmeta`,children:[(0,A.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:`/blog`,children:e.title})}),(0,A.jsxs)(`div`,{className:`bpcon`,children:[(0,A.jsxs)(`div`,{className:`author`,children:[(0,A.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,A.jsx)(k,{to:`/blog`,children:(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`Web GIS`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your spatial data into interactive web platforms?`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start a Project`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})}),o&&(0,A.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,A.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,A.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Web GIS Project`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Start Your `,(0,A.jsx)(`span`,{children:`Project`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your spatial data, target users, required functionality, and timeline.`})]}),u&&(0,A.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,A.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A Web GIS specialist will contact ${n} within 24h with portfolio examples and a custom proposal.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,A.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,A.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,A.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your Web GIS requirements...`})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,A.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},ti=[{id:1,icon:`fa-draw-polygon`,title:`Offline-first Data Capture`,description:`Collect points, lines, and polygons without cellular signal. Vector editing, custom forms, and rich media attachments sync automatically when back online.`,image:yr,link:`/services/mobile-gis/data-capture`},{id:2,icon:`fa-satellite-dish`,title:`High-Accuracy GNSS Integration`,description:`Connect to external Bluetooth GNSS receivers (Trimble, Eos, Bad Elf) for sub-meter to centimeter accuracy. Real-time SBAS/RTK corrections.`,image:br,link:`/services/mobile-gis/gnss`},{id:3,icon:`fa-cloud-upload-alt`,title:`Live Dashboards & Sync`,description:`Field edits appear on HQ maps in near real-time. ArcGIS Online, QGIS Cloud, or custom PostGIS – we set up seamless data pipelines.`,image:xr,link:`/services/mobile-gis/sync`},{id:4,icon:`fa-clipboard-list`,title:`Smart Forms & Inspection`,description:`Dynamic dropdowns, conditional logic, photo geotagging, and barcode scanning. Replace paper forms with structured GIS-ready records.`,image:yr,link:`/services/mobile-gis/forms`},{id:5,icon:`fa-route`,title:`Asset Management & Maintenance`,description:`Utility poles, signs, hydrants, manholes – schedule field inspections, track condition, and generate work orders directly from the map.`,image:br,link:`/services/mobile-gis/asset-management`},{id:6,icon:`fa-charging-station`,title:`Electric & Fiber Corridor Mapping`,description:`Mobile GIS for pole attachment surveys, vegetation risk, and as-built verification. Export reports in CSV, GeoJSON, or DXF.`,image:xr,link:`/services/mobile-gis/corridor-mapping`}],ni=[{id:1,title:`Offline GIS: Data Collection in Remote Areas`,date:`20 March, 2021`,author:`Keesler Smith`,img:Pr,authorImg:Lr},{id:2,title:`High-Accuracy GNSS for Mobile GIS`,date:`20 March, 2021`,author:`Keesler Smith`,img:Fr,authorImg:Rr},{id:3,title:`Asset Management with Mobile GIS`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ir,authorImg:zr}],ri=()=>{let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`capture`),[i,a]=(0,x.useState)(1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)({name:``,email:``,message:``}),[u,d]=(0,x.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,A.jsxs)(`div`,{className:`service-page`,children:[(0,A.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .secTitle span {
          color: #bb0b0b;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Gr}) center/cover;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

        .service_item_01 .sitem_con {
          padding: px 20px 28px;
          text-align: center;
        }

        .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
      
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -55px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,A.jsx)(`section`,{className:`hero-section`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`hero-icon`}),(0,A.jsxs)(`h1`,{className:`hero-title mt-5`,children:[(0,A.jsx)(`br`,{}),`Mobile GIS Field Intelligence`]}),(0,A.jsx)(`p`,{className:`hero-description`,children:`Enterprise-grade mobile mapping, real-time data collection, and offline GIS intelligence — empower crews with rugged apps, high-accuracy GNSS, and cloud-sync dashboards.`}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Get Mobile GIS Solution `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,A.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Features`})]})]})})}),(0,A.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Mobile GIS Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`GIS that `,(0,A.jsx)(`span`,{children:`Moves`}),` with You`]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`From asset inspection to environmental compliance, our Mobile GIS solutions combine professional field apps, high-precision receivers, and centralised geodatabases. Capture, edit, analyze and sync – all from a tablet or smartphone, even in remote areas.`})]}),(0,A.jsx)(`div`,{className:`service-grid`,children:ti.map(e=>(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,A.jsxs)(`div`,{className:`achievement-content`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Mobile GIS `,(0,A.jsx)(`span`,{children:`Excellence`})]}),(0,A.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Empowering field teams with cutting-edge mobile GIS technology for efficient data collection, asset management, and real-time decision making.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Offline-first data capture`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` High-accuracy GNSS integration`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Live dashboards & sync`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Smart forms & inspections`]})]}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Mobile GIS Solution`})]}),(0,A.jsxs)(`div`,{className:`achievement-image`,children:[(0,A.jsx)(`img`,{src:Sr,alt:`Achievement`}),(0,A.jsxs)(`div`,{className:`client-badge`,children:[(0,A.jsxs)(`h2`,{children:[`75`,(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`Mobile GIS Deployments`})]})]})]})})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Mobile `,(0,A.jsx)(`span`,{children:`GIS`}),` Capabilities`]})]}),(0,A.jsxs)(`div`,{className:`beproTab`,children:[(0,A.jsx)(`button`,{className:`nav-link ${n===`capture`?`active`:``}`,onClick:()=>r(`capture`),children:`Data Capture`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`gnss`?`active`:``}`,onClick:()=>r(`gnss`),children:`GNSS Integration`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`sync`?`active`:``}`,onClick:()=>r(`sync`),children:`Sync & Dashboards`})]}),(0,A.jsxs)(`div`,{className:`tab-content`,children:[(0,A.jsx)(`div`,{className:`tab-pane ${n===`capture`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Offline `,(0,A.jsx)(`span`,{children:`Data Capture`})]}),(0,A.jsx)(`p`,{children:`Collect points, lines, and polygons without cellular signal. Vector editing, custom forms, and rich media attachments sync automatically when back online.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Start Data Capture`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Data Capture`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`gnss`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`GNSS `,(0,A.jsx)(`span`,{children:`Integration`})]}),(0,A.jsx)(`p`,{children:`Connect to external Bluetooth GNSS receivers (Trimble, Eos, Bad Elf) for sub-meter to centimeter accuracy. Real-time SBAS/RTK corrections.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Integrate GNSS`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`GNSS`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`sync`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Sync `,(0,A.jsx)(`span`,{children:`& Dashboards`})]}),(0,A.jsx)(`p`,{children:`Field edits appear on HQ maps in near real-time. ArcGIS Online, QGIS Cloud, or custom PostGIS – we set up seamless data pipelines.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Set Up Sync`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Sync`})})]})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,A.jsx)(`span`,{children:`Mobile GIS`}),` Articles`]})]}),(0,A.jsx)(`div`,{className:`blog-grid`,children:ni.map(e=>(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:e.img,alt:e.title})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`span`,{className:`bmeta`,children:[(0,A.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:`/blog`,children:e.title})}),(0,A.jsxs)(`div`,{className:`bpcon`,children:[(0,A.jsxs)(`div`,{className:`author`,children:[(0,A.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,A.jsx)(k,{to:`/blog`,children:(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`Mobile GIS`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your field operations with cutting-edge mobile GIS technology?`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Mobile GIS Project`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})}),o&&(0,A.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,A.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,A.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Mobile GIS Inquiry`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,A.jsx)(`span`,{children:`Mobile GIS Solution`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your field data needs, team size, and existing GIS environment.`})]}),u&&(0,A.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,A.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A mobile GIS specialist will reach out to ${n} within 24h with portfolio examples and a custom proposal.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,A.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,A.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,A.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Describe field project / number of users / required features...`})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,A.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},ii=`/assets/bg-DDGF64Mj.jpeg`,ai=[{id:1,icon:`fa-building`,title:`GIS-based Property & Asset Mapping`,description:`Geo-referenced spatial data for buildings, roads, water connections, and tax properties with centimeter-level accuracy.`,image:`/assets/1-BQPgkcq3.jpg`,link:`/services/sris/mapping`},{id:2,icon:`fa-sync-alt`,title:`Real-time Data Synchronization`,description:`Seamless sync between field surveys and central database — live updates for administrators.`,image:`/assets/2-BpURO98-.jpg`,link:`/services/sris/sync`},{id:3,icon:`fa-mobile-alt`,title:`Mobile Field Collection & Verification`,description:`Field teams collect, validate, and update asset data using offline-capable mobile GIS apps.`,image:`/assets/3-C9GTnL62.jpg`,link:`/services/sris/mobile`},{id:4,icon:`fa-chart-simple`,title:`Property Tax Assessment & Monitoring`,description:`Spatial intelligence for accurate tax calculation, revenue leakage detection, and trend analysis.`,image:`/assets/4-DY9bmiID.jpeg`,link:`/services/sris/tax`},{id:5,icon:`fa-search-location`,title:`Detection of Unassessed Properties`,description:`AI-assisted detection of unassessed, under-assessed, and unauthorized properties using imagery & algorithms.`,image:`/assets/5-Cf3UAv2a.jpg`,link:`/services/sris/detection`},{id:6,icon:`fa-tint`,title:`Water Connection & Revenue Tracking`,description:`Map every water connection, track billing status, and identify defaulters via spatial dashboards.`,image:`/assets/6-BIowGroB.jpg`,link:`/services/sris/water`}],oi=[{id:1,title:`GIS for Municipal Revenue Management`,date:`20 March, 2021`,author:`Keesler Smith`,img:Pr,authorImg:Lr},{id:2,title:`Smart City Asset Mapping with SRIS`,date:`20 March, 2021`,author:`Keesler Smith`,img:Fr,authorImg:Rr},{id:3,title:`Property Tax Optimization Using Spatial Data`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ir,authorImg:zr}],si=()=>{let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`mapping`),[i,a]=(0,x.useState)(1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)({name:``,email:``,message:``}),[u,d]=(0,x.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,A.jsxs)(`div`,{className:`service-page`,children:[(0,A.jsx)(`style`,{children:`
        /* Same CSS as WebGis.jsx - Copy the entire style block from WebGis.jsx */
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${ii}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

     .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }


        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        .section-padding {
          padding: 70px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        @media (max-width: 1024px) {
          .service-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-grid { grid-template-columns: 1fr; }
          .achievement-wrap { flex-direction: column; }
          .cta-wrap { flex-direction: column; }
          .tab-content-inner { flex-direction: column; }
          .secTitle { font-size: 32px; }
          .hero-title { font-size: 36px; }
          .service_item_01 .siThumb { height: 180px; }
        }

        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .section-padding { padding: 50px 0; }
          .secTitle { font-size: 26px; }
          .subTitle { font-size: 11px; letter-spacing: 1.8px; }
          .hero-title { font-size: 28px; }
          .hero-description { font-size: 16px; }
          .hero-section { padding: 80px 0 60px; }
          .service-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .service_item_01 .siThumb { height: 150px; }
          .service_item_01 .sitem_con { padding: 16px 14px 20px; }
          .service_item_01 h3 { font-size: 16px; }
          .service_item_01 p { font-size: 13px; }
          .service_item_01 .ibMeta { width: 50px; height: 50px; font-size: 20px; margin: -30px auto 12px; }
          .client-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .blog-grid { grid-template-columns: 1fr; }
          .beproTab .nav-link { padding: 8px 18px; font-size: 13px; }
          .client-badge { position: relative; bottom: auto; right: auto; margin-top: -20px; padding: 16px 20px; }
          .client-badge h2 { font-size: 32px; }
          .cta-content h2 { font-size: 34px; }
          .cta-content h3 { font-size: 26px; }
          .cta-content h4 { font-size: 18px; }
          .berpo_btn { padding: 12px 28px; font-size: 14px; }
          .testiItem01 { padding: 20px 18px; }
          .accordion-header { font-size: 14px; padding: 14px 16px; }
          .accordion-body { font-size: 14px; padding: 0 16px 16px; }
          .ts_author img { width: 50px; height: 50px; }
          .team_01 { padding: 14px 10px; }
          .team_01 h3 { font-size: 15px; }
          .tm_social a { width: 32px; height: 32px; font-size: 12px; }
          .blogContent h3 { font-size: 16px; }
          .modal-content { padding: 24px; }
        }

        @media (max-width: 480px) {
          .service-grid { grid-template-columns: 1fr; gap: 16px; }
          .service_item_01 .siThumb { height: 200px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .client-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .secTitle { font-size: 22px; }
          .hero-title { font-size: 24px; }
          .beproTab .nav-link { padding: 6px 14px; font-size: 12px; }
          .berpo_btn { padding: 10px 22px; font-size: 13px; }
          .testimonial-grid { gap: 20px; }
          .cta-content h2 { font-size: 28px; }
          .cta-content h3 { font-size: 22px; }
        }
      `}),(0,A.jsx)(`section`,{className:`hero-section`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsxs)(`h1`,{className:`hero-title mt-5`,children:[(0,A.jsx)(`br`,{}),`Spatial Revenue Intelligence System`]}),(0,A.jsx)(`p`,{className:`hero-description`,children:`The Spatial Revenue Intelligent System (SRIS) is a smart digital Web GIS platform developed for efficient mapping and management of municipal properties. It enables real-time visualization, monitoring, and spatial analysis of assets such as buildings, roads, water connections, tax properties, Professional Tax and UGD through an interactive map-based system.`}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request SRIS Demo `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,A.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Features`})]})]})})}),(0,A.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`SRIS Features`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Intelligent GIS for `,(0,A.jsx)(`span`,{children:`Urban Governance`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`SRIS empowers local bodies with a unified geospatial framework for asset inventory, revenue monitoring, and smart decision-making. From property tax to underground drainage, every asset is mapped, tracked, and analyzed.`})]}),(0,A.jsx)(`div`,{className:`service-grid`,children:ai.map(e=>(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,A.jsxs)(`div`,{className:`achievement-content`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`SRIS `,(0,A.jsx)(`span`,{children:`Excellence`})]}),(0,A.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Deploying SRIS across municipalities to transform revenue management, asset tracking, and citizen services through spatial intelligence.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` GIS-based property & asset mapping`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Real-time data synchronization`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Mobile field collection & verification`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Property tax assessment & monitoring`]})]}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Demo`})]}),(0,A.jsxs)(`div`,{className:`achievement-image`,children:[(0,A.jsx)(`img`,{src:Sr,alt:`Achievement`}),(0,A.jsxs)(`div`,{className:`client-badge`,children:[(0,A.jsxs)(`h2`,{children:[`150`,(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`Municipal Projects`})]})]})]})})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`SRIS `,(0,A.jsx)(`span`,{children:`Capabilities`})]})]}),(0,A.jsxs)(`div`,{className:`beproTab`,children:[(0,A.jsx)(`button`,{className:`nav-link ${n===`mapping`?`active`:``}`,onClick:()=>r(`mapping`),children:`Asset Mapping`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`tax`?`active`:``}`,onClick:()=>r(`tax`),children:`Tax Assessment`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`analytics`?`active`:``}`,onClick:()=>r(`analytics`),children:`Analytics`})]}),(0,A.jsxs)(`div`,{className:`tab-content`,children:[(0,A.jsx)(`div`,{className:`tab-pane ${n===`mapping`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Asset `,(0,A.jsx)(`span`,{children:`Mapping`})]}),(0,A.jsx)(`p`,{children:`Comprehensive GIS-based mapping of all municipal assets including buildings, roads, water connections, and tax properties with centimeter-level accuracy.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Start Asset Mapping`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Asset Mapping`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`tax`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Tax `,(0,A.jsx)(`span`,{children:`Assessment`})]}),(0,A.jsx)(`p`,{children:`Accurate property tax calculation, revenue leakage detection, and trend analysis using spatial intelligence and AI-assisted property detection.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Optimize Tax Assessment`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Tax Assessment`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`analytics`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Analytics `,(0,A.jsx)(`span`,{children:`Dashboards`})]}),(0,A.jsx)(`p`,{children:`Interactive dashboards for ward-wise and zone-wise revenue analysis, collection efficiency, and trend insights with automated MIS reporting.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Explore Analytics`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Analytics`})})]})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,A.jsx)(`span`,{children:`SRIS`}),` Articles`]})]}),(0,A.jsx)(`div`,{className:`blog-grid`,children:oi.map(e=>(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:e.img,alt:e.title})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`span`,{className:`bmeta`,children:[(0,A.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:`/blog`,children:e.title})}),(0,A.jsxs)(`div`,{className:`bpcon`,children:[(0,A.jsxs)(`div`,{className:`author`,children:[(0,A.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,A.jsx)(k,{to:`/blog`,children:(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`SRIS Platform`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your municipality's revenue management with spatial intelligence?`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your SRIS Project`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})}),o&&(0,A.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,A.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,A.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`SRIS Inquiry`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,A.jsx)(`span`,{children:`Demo`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your municipality, number of properties, and revenue management goals.`})]}),u&&(0,A.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,A.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A SRIS specialist will contact ${n} within 24h with portfolio examples and a custom proposal.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,A.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,A.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,A.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your municipality, number of properties, and revenue management goals...`})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,A.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},ci=[{id:1,icon:`fa-cubes`,title:`LiDAR Point Cloud Acquisition`,description:`High-density point clouds from drone, aerial, or terrestrial LiDAR systems. Capture millions of points per second with sub-centimeter accuracy.`,image:`/assets/1-CpdhnZ08.jpg`,link:`/services/lidar/acquisition`},{id:2,icon:`fa-layer-group`,title:`DEM / DTM Generation`,description:`High-resolution Digital Elevation Models and Digital Terrain Models for topographic mapping, flood modeling, and engineering design.`,image:`/assets/2-0-zKrHED.jpg`,link:`/services/lidar/dem`},{id:3,icon:`fa-tree`,title:`Vegetation & Canopy Analysis`,description:`Forest structure analysis, biomass estimation, and canopy height models for environmental monitoring and forestry management.`,image:`/assets/3-CXwU9Bui.png`,link:`/services/lidar/vegetation`},{id:4,icon:`fa-building`,title:`3D Building & Infrastructure Modeling`,description:`Detailed 3D building models, infrastructure extraction, and city-scale digital twins from LiDAR point clouds.`,image:`/assets/4-BVea3rfk.jpg`,link:`/services/lidar/building`},{id:5,icon:`fa-chart-line`,title:`Change Detection & Monitoring`,description:`Multi-temporal LiDAR analysis for terrain change detection, erosion monitoring, and infrastructure deformation tracking.`,image:`/assets/5-K-Mi1vd2.jpg`,link:`/services/lidar/change-detection`},{id:6,icon:`fa-water`,title:`Bathymetric & Hydrographic LiDAR`,description:`Near-shore bathymetric surveys and hydrographic mapping using green-wavelength LiDAR systems for coastal and inland water bodies.`,image:`/assets/6-BHhk9L4f.png`,link:`/services/lidar/bathymetric`}],li=[{id:1,title:`LiDAR Technology: A Comprehensive Guide`,date:`20 March, 2021`,author:`Keesler Smith`,img:Pr,authorImg:Lr},{id:2,title:`From Point Clouds to 3D Models`,date:`20 March, 2021`,author:`Keesler Smith`,img:Fr,authorImg:Rr},{id:3,title:`LiDAR Applications in Forestry`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ir,authorImg:zr}],ui=()=>{let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`acquisition`),[i,a]=(0,x.useState)(1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)({name:``,email:``,message:``}),[u,d]=(0,x.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,A.jsxs)(`div`,{className:`service-page`,children:[(0,A.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Gr}) center/cover;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

   .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,A.jsx)(`section`,{className:`hero-section`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsxs)(`h1`,{className:`hero-title mt-5`,children:[(0,A.jsx)(`br`,{}),`LiDAR Point Cloud Solutions`]}),(0,A.jsx)(`p`,{className:`hero-description`,children:`High-density point clouds, DEM/DTM generation, vegetation analysis, and 3D infrastructure modeling — precision LiDAR solutions for engineering, forestry, and environmental monitoring.`}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request LiDAR Quote `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,A.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,A.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`LiDAR Services`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Precision Point Cloud `,(0,A.jsx)(`span`,{children:`Intelligence`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`LiDAR technology captures millions of precise 3D points per second, creating detailed digital representations of terrain, vegetation, buildings, and infrastructure. Our end-to-end LiDAR solutions deliver actionable geospatial intelligence for any project scale.`})]}),(0,A.jsx)(`div`,{className:`service-grid`,children:ci.map(e=>(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,A.jsxs)(`div`,{className:`achievement-content`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`LiDAR `,(0,A.jsx)(`span`,{children:`Excellence`})]}),(0,A.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Delivering high-precision LiDAR solutions for topographic mapping, forestry management, urban planning, and environmental monitoring projects of any scale.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Point cloud acquisition`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` DEM / DTM generation`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Vegetation & canopy analysis`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` 3D building & infrastructure modeling`]})]}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a LiDAR Quote`})]}),(0,A.jsxs)(`div`,{className:`achievement-image`,children:[(0,A.jsx)(`img`,{src:Sr,alt:`Achievement`}),(0,A.jsxs)(`div`,{className:`client-badge`,children:[(0,A.jsxs)(`h2`,{children:[`90`,(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`LiDAR Projects`})]})]})]})})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,A.jsx)(`span`,{children:`LiDAR`}),` Capabilities`]})]}),(0,A.jsxs)(`div`,{className:`beproTab`,children:[(0,A.jsx)(`button`,{className:`nav-link ${n===`acquisition`?`active`:``}`,onClick:()=>r(`acquisition`),children:`Point Cloud`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`dem`?`active`:``}`,onClick:()=>r(`dem`),children:`DEM / DTM`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`vegetation`?`active`:``}`,onClick:()=>r(`vegetation`),children:`Vegetation`})]}),(0,A.jsxs)(`div`,{className:`tab-content`,children:[(0,A.jsx)(`div`,{className:`tab-pane ${n===`acquisition`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Point Cloud `,(0,A.jsx)(`span`,{children:`Acquisition`})]}),(0,A.jsx)(`p`,{children:`High-density point clouds from drone, aerial, or terrestrial LiDAR systems. Capture millions of points per second with sub-centimeter accuracy.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Point Cloud`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Point Cloud`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`dem`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`DEM / DTM `,(0,A.jsx)(`span`,{children:`Generation`})]}),(0,A.jsx)(`p`,{children:`High-resolution Digital Elevation Models and Digital Terrain Models for topographic mapping, flood modeling, and engineering design.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request DEM / DTM`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`DEM`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`vegetation`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Vegetation `,(0,A.jsx)(`span`,{children:`Analysis`})]}),(0,A.jsx)(`p`,{children:`Forest structure analysis, biomass estimation, and canopy height models for environmental monitoring and forestry management.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Vegetation Analysis`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Vegetation`})})]})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,A.jsx)(`span`,{children:`LiDAR`}),` Articles`]})]}),(0,A.jsx)(`div`,{className:`blog-grid`,children:li.map(e=>(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:e.img,alt:e.title})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`span`,{className:`bmeta`,children:[(0,A.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:`/blog`,children:e.title})}),(0,A.jsxs)(`div`,{className:`bpcon`,children:[(0,A.jsxs)(`div`,{className:`author`,children:[(0,A.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,A.jsx)(k,{to:`/blog`,children:(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`LiDAR Solutions`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Point Cloud`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your projects with precision LiDAR point cloud intelligence?`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your LiDAR Project`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})}),o&&(0,A.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,A.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,A.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`LiDAR Inquiry`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,A.jsx)(`span`,{children:`LiDAR Quote`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your area, required accuracy, and deliverables.`})]}),u&&(0,A.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,A.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A LiDAR specialist will contact ${n} within 24h with portfolio examples and a custom quote.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,A.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,A.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,A.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your area, required accuracy, and deliverables...`})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,A.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},di=[{id:1,icon:`fa-drone`,title:`UAV / Drone Photogrammetry`,description:`High-resolution orthomosaics, DSMs, and 3D meshes from automated drone flights. Capture large areas with centimeter-level accuracy.`,image:yr,link:`/services/photogrammetry/uav`},{id:2,icon:`fa-plane`,title:`Manned Aerial Mapping`,description:`Large-area coverage with fixed-wing aircraft and metric cameras. Ideal for regional mapping and extensive corridor surveys.`,image:br,link:`/services/photogrammetry/aerial`},{id:3,icon:`fa-mobile-alt`,title:`Close-Range & Terrestrial`,description:`Facade mapping, heritage documentation, and crime scene reconstruction using ground-based photogrammetry techniques.`,image:xr,link:`/services/photogrammetry/terrestrial`},{id:4,icon:`fa-map`,title:`Orthomosaics & Orthophotos`,description:`Geometrically corrected, seamless image mosaics with true orthorectification. Georeferenced and ready for GIS integration.`,image:yr,link:`/services/photogrammetry/orthomosaics`},{id:5,icon:`fa-cubes`,title:`3D Mesh & Textured Models`,description:`Photo-realistic 3D models for digital twins, volume visualization, and immersive stakeholder presentations.`,image:br,link:`/services/photogrammetry/3d-models`},{id:6,icon:`fa-chart-line`,title:`Contour & Volumetric Analysis`,description:`Generate contours from photogrammetric DSMs and compute cut/fill volumes for earthworks and mining applications.`,image:xr,link:`/services/photogrammetry/analysis`}],fi=[{id:1,title:`Drone Photogrammetry: A Complete Guide`,date:`20 March, 2021`,author:`Keesler Smith`,img:Pr,authorImg:Lr},{id:2,title:`From Images to 3D Models: The Workflow`,date:`20 March, 2021`,author:`Keesler Smith`,img:Fr,authorImg:Rr},{id:3,title:`Orthomosaic Generation Best Practices`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ir,authorImg:zr}],pi=()=>{let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`uav`),[i,a]=(0,x.useState)(1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)({name:``,email:``,message:``}),[u,d]=(0,x.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,A.jsxs)(`div`,{className:`service-page`,children:[(0,A.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Gr}) center/cover;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

     .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

  .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,A.jsx)(`section`,{className:`hero-section`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsxs)(`h1`,{className:`hero-title mt-5`,children:[(0,A.jsx)(`br`,{}),`Photogrammetry 3D from Images`]}),(0,A.jsx)(`p`,{className:`hero-description`,children:`Turn millions of overlapping images into geospatially-accurate 3D models, orthomosaics, and digital surface models — drone, aerial, and terrestrial photogrammetry for any project scale.`}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request Photogrammetry Quote `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,A.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,A.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Photogrammetry Services`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`From Pixels to `,(0,A.jsx)(`span`,{children:`Precision`}),` Geospatial Data`]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Photogrammetry extracts 3D measurements and realistic textures from standard digital imagery. Our end-to-end pipeline delivers survey-grade outputs at a fraction of traditional surveying costs.`})]}),(0,A.jsx)(`div`,{className:`service-grid`,children:di.map(e=>(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,A.jsxs)(`div`,{className:`achievement-content`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Photogrammetry `,(0,A.jsx)(`span`,{children:`Excellence`})]}),(0,A.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Delivering high-precision photogrammetry products for infrastructure, mining, heritage documentation, and environmental monitoring projects of any scale.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` UAV / Drone photogrammetry`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Manned aerial mapping`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Close-range & terrestrial`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` 3D mesh & textured models`]})]}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Photogrammetry Quote`})]}),(0,A.jsxs)(`div`,{className:`achievement-image`,children:[(0,A.jsx)(`img`,{src:Sr,alt:`Achievement`}),(0,A.jsxs)(`div`,{className:`client-badge`,children:[(0,A.jsxs)(`h2`,{children:[`120`,(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`Photogrammetry Projects`})]})]})]})})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,A.jsx)(`span`,{children:`Photogrammetry`}),` Approaches`]})]}),(0,A.jsxs)(`div`,{className:`beproTab`,children:[(0,A.jsx)(`button`,{className:`nav-link ${n===`uav`?`active`:``}`,onClick:()=>r(`uav`),children:`UAV / Drone`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`ortho`?`active`:``}`,onClick:()=>r(`ortho`),children:`Orthomosaics`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`3d`?`active`:``}`,onClick:()=>r(`3d`),children:`3D Models`})]}),(0,A.jsxs)(`div`,{className:`tab-content`,children:[(0,A.jsx)(`div`,{className:`tab-pane ${n===`uav`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`UAV / Drone `,(0,A.jsx)(`span`,{children:`Photogrammetry`})]}),(0,A.jsx)(`p`,{children:`High-resolution orthomosaics, DSMs, and 3D meshes from automated drone flights. Capture large areas with centimeter-level accuracy.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request UAV Survey`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`UAV`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`ortho`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Orthomosaics `,(0,A.jsx)(`span`,{children:`& Orthophotos`})]}),(0,A.jsx)(`p`,{children:`Geometrically corrected, seamless image mosaics with true orthorectification. Georeferenced and ready for GIS integration.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Orthomosaic`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Orthomosaic`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`3d`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`3D Mesh `,(0,A.jsx)(`span`,{children:`& Textured Models`})]}),(0,A.jsx)(`p`,{children:`Photo-realistic 3D models for digital twins, volume visualization, and immersive stakeholder presentations.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request 3D Modeling`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`3D Models`})})]})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,A.jsx)(`span`,{children:`Photogrammetry`}),` Articles`]})]}),(0,A.jsx)(`div`,{className:`blog-grid`,children:fi.map(e=>(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:e.img,alt:e.title})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`span`,{className:`bmeta`,children:[(0,A.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:`/blog`,children:e.title})}),(0,A.jsxs)(`div`,{className:`bpcon`,children:[(0,A.jsxs)(`div`,{className:`author`,children:[(0,A.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,A.jsx)(k,{to:`/blog`,children:(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`Photogrammetry`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your imagery into actionable 3D geospatial data?`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Photogrammetry Project`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})}),o&&(0,A.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,A.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,A.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Photogrammetry Inquiry`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,A.jsx)(`span`,{children:`Photogrammetry Quote`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your area, required accuracy, and deliverables.`})]}),u&&(0,A.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,A.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A photogrammetry specialist will contact ${n} within 24h with portfolio examples and a custom quote.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,A.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,A.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,A.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your area, required accuracy, and deliverables...`})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,A.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},mi=[{id:1,icon:`fa-chart-line`,title:`RTK/PPK Drone Surveys`,description:`Real-time kinematic and post-processed kinematic drones eliminate ground control points. Achieve 2 cm horizontal & 3 cm vertical accuracy for large-scale mapping.`,image:yr,link:`/services/drone-survey/rtk`},{id:2,icon:`fa-cubes`,title:`LiDAR & Photogrammetry`,description:`High-density point clouds, 3D mesh models, and orthomosaics. Penetrate vegetation with drone LiDAR for topographic surveys under canopy.`,image:br,link:`/services/drone-survey/lidar`},{id:3,icon:`fa-satellite-dish`,title:`DGPS Ground Control`,description:`Network RTK, static GNSS, and real-time corrections using Trimble, Leica, or Eos receivers. Establish survey monuments with millimeter precision.`,image:xr,link:`/services/drone-survey/dgps`},{id:4,icon:`fa-mountain`,title:`Volume & Cut-Fill Analysis`,description:`Stockpile volumetrics, mine pit surveys, and construction earthwork calculations delivered as interactive 3D reports and GIS-ready surfaces.`,image:yr,link:`/services/drone-survey/volume`},{id:5,icon:`fa-border-all`,title:`Cadastral & Boundary`,description:`Legal boundary retracement, easement mapping, and ALTA/NSPS surveys using hybrid drone + rover methods for complex terrains.`,image:br,link:`/services/drone-survey/cadastral`},{id:6,icon:`fa-chart-pie`,title:`Inspection & Asset Mapping`,description:`Powerline sag, pipeline corridors, solar farm inspections, and infrastructure deformation monitoring with automated change detection.`,image:xr,link:`/services/drone-survey/inspection`}],hi=[{id:1,title:`RTK vs PPK: Which Drone Survey is Right for You?`,date:`20 March, 2021`,author:`Keesler Smith`,img:Pr,authorImg:Lr},{id:2,title:`Drone LiDAR Applications in Forestry`,date:`20 March, 2021`,author:`Keesler Smith`,img:Fr,authorImg:Rr},{id:3,title:`Volume Calculations from Drone Surveys`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ir,authorImg:zr}],gi=()=>{let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`rtk`),[i,a]=(0,x.useState)(1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)({name:``,email:``,message:``}),[u,d]=(0,x.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,A.jsxs)(`div`,{className:`service-page`,children:[(0,A.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Gr}) center/cover;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

        .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }


        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,A.jsx)(`section`,{className:`hero-section`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsxs)(`h1`,{className:`hero-title mt-5`,children:[`Drone & `,(0,A.jsx)(`span`,{children:`DGPS`}),` Survey`]}),(0,A.jsx)(`p`,{className:`hero-description`,children:`Ultra-precise aerial & ground survey solutions — from UAV lidar to centimeter-level DGPS, delivering actionable geospatial data for engineering, mining, and land management.`}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request Drone Survey Quote `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,A.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,A.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Drone Survey Services`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Survey-grade Accuracy, `,(0,A.jsx)(`span`,{children:`Aerial`}),` Efficiency`]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Combine the power of unmanned aerial systems with differential GPS to capture terrain models, stockpile volumes, cadastral boundaries, and infrastructure as-builts. Our drone + DGPS workflows reduce field time by 70% while achieving 1–3 cm absolute accuracy.`})]}),(0,A.jsx)(`div`,{className:`service-grid`,children:mi.map(e=>(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,A.jsxs)(`div`,{className:`achievement-content`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Drone Survey `,(0,A.jsx)(`span`,{children:`Excellence`})]}),(0,A.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`With advanced drone and DGPS capabilities, we deliver precision survey data for infrastructure, mining, and land management projects of any scale.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` RTK/PPK drone surveys`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` LiDAR & photogrammetry`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Volume & cut-fill analysis`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Cadastral boundary surveys`]})]}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Survey Quote`})]}),(0,A.jsxs)(`div`,{className:`achievement-image`,children:[(0,A.jsx)(`img`,{src:Sr,alt:`Achievement`}),(0,A.jsxs)(`div`,{className:`client-badge`,children:[(0,A.jsxs)(`h2`,{children:[`200`,(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`Survey Projects`})]})]})]})})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,A.jsx)(`span`,{children:`Survey`}),` Approaches`]})]}),(0,A.jsxs)(`div`,{className:`beproTab`,children:[(0,A.jsx)(`button`,{className:`nav-link ${n===`rtk`?`active`:``}`,onClick:()=>r(`rtk`),children:`RTK/PPK`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`lidar`?`active`:``}`,onClick:()=>r(`lidar`),children:`LiDAR`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`volume`?`active`:``}`,onClick:()=>r(`volume`),children:`Volume Analysis`})]}),(0,A.jsxs)(`div`,{className:`tab-content`,children:[(0,A.jsx)(`div`,{className:`tab-pane ${n===`rtk`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`RTK/PPK `,(0,A.jsx)(`span`,{children:`Drone Surveys`})]}),(0,A.jsx)(`p`,{children:`Real-time kinematic and post-processed kinematic drones eliminate ground control points. Achieve 2 cm horizontal & 3 cm vertical accuracy for large-scale mapping projects.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request RTK Survey`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`RTK Survey`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`lidar`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Drone `,(0,A.jsx)(`span`,{children:`LiDAR`})]}),(0,A.jsx)(`p`,{children:`High-density point clouds, 3D mesh models, and orthomosaics. Penetrate vegetation with drone LiDAR for topographic surveys under canopy and complex terrain mapping.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request LiDAR Survey`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`LiDAR`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`volume`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Volume `,(0,A.jsx)(`span`,{children:`Analysis`})]}),(0,A.jsx)(`p`,{children:`Stockpile volumetrics, mine pit surveys, and construction earthwork calculations delivered as interactive 3D reports and GIS-ready surfaces for accurate planning.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Volume Analysis`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Volume Analysis`})})]})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,A.jsx)(`span`,{children:`Survey`}),` Articles`]})]}),(0,A.jsx)(`div`,{className:`blog-grid`,children:hi.map(e=>(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:e.img,alt:e.title})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`span`,{className:`bmeta`,children:[(0,A.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:`/blog`,children:e.title})}),(0,A.jsxs)(`div`,{className:`bpcon`,children:[(0,A.jsxs)(`div`,{className:`author`,children:[(0,A.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,A.jsx)(k,{to:`/blog`,children:(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`Drone Survey`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your survey projects with cutting-edge drone technology?`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Survey`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})}),o&&(0,A.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,A.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,A.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Drone Survey Inquiry`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,A.jsx)(`span`,{children:`Survey Quote`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your area, required accuracy, and deliverables.`})]}),u&&(0,A.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,A.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A survey specialist will reply to ${n} within 24h with portfolio examples and a custom proposal.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,A.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,A.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,A.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your survey requirements, area size, and accuracy needs...`})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,A.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},_i=[{id:1,icon:`fa-draw-polygon`,title:`Planimetric Mapping`,description:`Roads, buildings, water bodies, vegetation, and utility networks extracted from high-res imagery. Clean, editable vector layers for CAD and GIS.`,image:yr,link:`/services/2d-mapping/planimetric`},{id:2,icon:`fa-chart-line`,title:`Topographic Contour Mapping`,description:`1m, 2m, or 5m contours derived from photogrammetry or LiDAR. Ideal for civil design, flood modeling, and site grading analysis.`,image:br,link:`/services/2d-mapping/topographic`},{id:3,icon:`fa-satellite-dish`,title:`Satellite & Aerial Orthomosaics`,description:`High-resolution seamless orthophotos (5cm to 50cm GSD) from drones, aircraft, or satellites. Georeferenced and ready for overlay.`,image:xr,link:`/services/2d-mapping/orthomosaics`},{id:4,icon:`fa-layer-group`,title:`Thematic & Land Use Mapping`,description:`Land cover classification, zoning maps, agricultural field boundaries, and environmental sensitivity layers — customized to your schema.`,image:yr,link:`/services/2d-mapping/thematic`},{id:5,icon:`fa-building`,title:`Infrastructure & Utility Mapping`,description:`Gas, water, electric, and telecom networks mapped as accurate 2D features with attribution (diameter, material, ownership).`,image:br,link:`/services/2d-mapping/infrastructure`},{id:6,icon:`fa-water`,title:`Hydrographic & Flood Mapping`,description:`River centerlines, floodplain extents, drainage networks, and wetland boundaries from imagery and field-verified data.`,image:xr,link:`/services/2d-mapping/hydrographic`}],vi=[{id:1,title:`The Art of Planimetric Mapping`,date:`20 March, 2021`,author:`Keesler Smith`,img:Pr,authorImg:Lr},{id:2,title:`Topographic Mapping for Civil Design`,date:`20 March, 2021`,author:`Keesler Smith`,img:Fr,authorImg:Rr},{id:3,title:`Land Use Classification Techniques`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ir,authorImg:zr}],yi=()=>{let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`planimetric`),[i,a]=(0,x.useState)(1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)({name:``,email:``,message:``}),[u,d]=(0,x.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,A.jsxs)(`div`,{className:`service-page`,children:[(0,A.jsx)(`style`,{children:`
        /* Same CSS as WebGis.jsx - Copy the entire style block */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Gr}) center/cover;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

        .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

   .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        .section-padding {
          padding: 70px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        @media (max-width: 1024px) {
          .service-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-grid { grid-template-columns: 1fr; }
          .achievement-wrap { flex-direction: column; }
          .cta-wrap { flex-direction: column; }
          .tab-content-inner { flex-direction: column; }
          .secTitle { font-size: 32px; }
          .hero-title { font-size: 36px; }
          .service_item_01 .siThumb { height: 180px; }
        }

        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .section-padding { padding: 50px 0; }
          .secTitle { font-size: 26px; }
          .subTitle { font-size: 11px; letter-spacing: 1.8px; }
          .hero-title { font-size: 28px; }
          .hero-description { font-size: 16px; }
          .hero-section { padding: 80px 0 60px; }
          .service-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .service_item_01 .siThumb { height: 150px; }
          .service_item_01 .sitem_con { padding: 16px 14px 20px; }
          .service_item_01 h3 { font-size: 16px; }
          .service_item_01 p { font-size: 13px; }
          .service_item_01 .ibMeta { width: 50px; height: 50px; font-size: 20px; margin: -30px auto 12px; }
          .client-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .blog-grid { grid-template-columns: 1fr; }
          .beproTab .nav-link { padding: 8px 18px; font-size: 13px; }
          .client-badge { position: relative; bottom: auto; right: auto; margin-top: -20px; padding: 16px 20px; }
          .client-badge h2 { font-size: 32px; }
          .cta-content h2 { font-size: 34px; }
          .cta-content h3 { font-size: 26px; }
          .cta-content h4 { font-size: 18px; }
          .berpo_btn { padding: 12px 28px; font-size: 14px; }
          .testiItem01 { padding: 20px 18px; }
          .accordion-header { font-size: 14px; padding: 14px 16px; }
          .accordion-body { font-size: 14px; padding: 0 16px 16px; }
          .ts_author img { width: 50px; height: 50px; }
          .team_01 { padding: 14px 10px; }
          .team_01 h3 { font-size: 15px; }
          .tm_social a { width: 32px; height: 32px; font-size: 12px; }
          .blogContent h3 { font-size: 16px; }
          .modal-content { padding: 24px; }
        }

        @media (max-width: 480px) {
          .service-grid { grid-template-columns: 1fr; gap: 16px; }
          .service_item_01 .siThumb { height: 200px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .client-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .secTitle { font-size: 22px; }
          .hero-title { font-size: 24px; }
          .beproTab .nav-link { padding: 6px 14px; font-size: 12px; }
          .berpo_btn { padding: 10px 22px; font-size: 13px; }
          .testimonial-grid { gap: 20px; }
          .cta-content h2 { font-size: 28px; }
          .cta-content h3 { font-size: 22px; }
        }
      `}),(0,A.jsx)(`section`,{className:`hero-section`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`hero-icon`}),(0,A.jsx)(`h1`,{className:`hero-title mt-5`,children:`2D Mapping  Planimetric & Thematic`}),(0,A.jsx)(`p`,{className:`hero-description`,children:`Precision orthomosaics, topographic base maps, land cover classification, and infrastructure plans — accurate 2D geospatial data from aerial imagery, satellite, and field surveys.`}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request 2D Mapping Quote `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,A.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,A.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`2D Mapping Services`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Cartographic Excellence, `,(0,A.jsx)(`span`,{children:`Geospatial`}),` Precision`]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`2D mapping remains the backbone of planning, engineering, and environmental management. We produce high-fidelity planimetric maps, topographic sheets, thematic layers, and orthorectified imagery — all with survey-grade accuracy and rich attribution.`})]}),(0,A.jsx)(`div`,{className:`service-grid`,children:_i.map(e=>(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,A.jsxs)(`div`,{className:`achievement-content`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Mapping `,(0,A.jsx)(`span`,{children:`Excellence`})]}),(0,A.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Delivering high-precision 2D mapping products for urban planning, infrastructure development, environmental management, and engineering design.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Planimetric mapping`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Topographic contour mapping`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Satellite & aerial orthomosaics`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Thematic & land use mapping`]})]}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Mapping Quote`})]}),(0,A.jsxs)(`div`,{className:`achievement-image`,children:[(0,A.jsx)(`img`,{src:Sr,alt:`Achievement`}),(0,A.jsxs)(`div`,{className:`client-badge`,children:[(0,A.jsxs)(`h2`,{children:[`300`,(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`Mapping Projects`})]})]})]})})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,A.jsx)(`span`,{children:`Mapping`}),` Approaches`]})]}),(0,A.jsxs)(`div`,{className:`beproTab`,children:[(0,A.jsx)(`button`,{className:`nav-link ${n===`planimetric`?`active`:``}`,onClick:()=>r(`planimetric`),children:`Planimetric`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`topographic`?`active`:``}`,onClick:()=>r(`topographic`),children:`Topographic`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`thematic`?`active`:``}`,onClick:()=>r(`thematic`),children:`Thematic`})]}),(0,A.jsxs)(`div`,{className:`tab-content`,children:[(0,A.jsx)(`div`,{className:`tab-pane ${n===`planimetric`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Planimetric `,(0,A.jsx)(`span`,{children:`Mapping`})]}),(0,A.jsx)(`p`,{children:`Roads, buildings, water bodies, vegetation, and utility networks extracted from high-res imagery. Clean, editable vector layers for CAD and GIS applications.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Planimetric Mapping`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Planimetric`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`topographic`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Topographic `,(0,A.jsx)(`span`,{children:`Mapping`})]}),(0,A.jsx)(`p`,{children:`1m, 2m, or 5m contours derived from photogrammetry or LiDAR. Ideal for civil design, flood modeling, and site grading analysis.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Topographic Mapping`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Topographic`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`thematic`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Thematic `,(0,A.jsx)(`span`,{children:`Mapping`})]}),(0,A.jsx)(`p`,{children:`Land cover classification, zoning maps, agricultural field boundaries, and environmental sensitivity layers — customized to your schema.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Request Thematic Mapping`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Thematic`})})]})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,A.jsx)(`span`,{children:`Mapping`}),` Articles`]})]}),(0,A.jsx)(`div`,{className:`blog-grid`,children:vi.map(e=>(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:e.img,alt:e.title})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`span`,{className:`bmeta`,children:[(0,A.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:`/blog`,children:e.title})}),(0,A.jsxs)(`div`,{className:`bpcon`,children:[(0,A.jsxs)(`div`,{className:`author`,children:[(0,A.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,A.jsx)(k,{to:`/blog`,children:(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`2D Mapping`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your mapping projects with precision geospatial data?`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Mapping Project`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})}),o&&(0,A.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,A.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,A.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`2D Mapping Inquiry`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,A.jsx)(`span`,{children:`Mapping Quote`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your area, required accuracy, and deliverables.`})]}),u&&(0,A.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,A.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A mapping specialist will contact ${n} within 24h with sample map products and a custom quote.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,A.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,A.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,A.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your area, required accuracy, and deliverables...`})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,A.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},bi=[{id:1,icon:`fa-clipboard-list`,title:`GIS Strategy & Planning`,description:`Develop a tailored GIS roadmap aligned with your organizational goals, data maturity, and budget. We help you prioritize investments and build a sustainable geospatial capability.`,image:yr,link:`/services/consultancy/strategy`},{id:2,icon:`fa-sync-alt`,title:`Workflow Automation`,description:`Streamline repetitive GIS tasks, data processing pipelines, and quality control using Python, ModelBuilder, and FME. Reduce manual effort and eliminate errors.`,image:br,link:`/services/consultancy/automation`},{id:3,icon:`fa-database`,title:`Data Migration & Integration`,description:`Consolidate legacy spatial data, CAD, and tabular records into a unified GIS database. Seamlessly integrate with your existing ERP, CRM, or asset management systems.`,image:xr,link:`/services/consultancy/integration`},{id:4,icon:`fa-chart-line`,title:`Spatial Analysis & Modeling`,description:`Advanced geospatial analysis — suitability modeling, network analysis, predictive analytics, and machine learning on spatial data to uncover insights.`,image:yr,link:`/services/consultancy/analysis`},{id:5,icon:`fa-users`,title:`Capacity Building & Training`,description:`Empower your team with custom GIS training programs. From basic map creation to advanced geoprocessing and automation.`,image:br,link:`/services/consultancy/training`},{id:6,icon:`fa-building`,title:`Implementation Support`,description:`End-to-end support for GIS software deployment, enterprise geodatabase setup, and custom application development.`,image:xr,link:`/services/consultancy/implementation`}],xi=[{id:1,title:`GIS Strategy for Modern Enterprises`,date:`20 March, 2021`,author:`Keesler Smith`,img:Pr,authorImg:Lr},{id:2,title:`Automating GIS Workflows`,date:`20 March, 2021`,author:`Keesler Smith`,img:Fr,authorImg:Rr},{id:3,title:`Building GIS Capacity in Organizations`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ir,authorImg:zr}],Si=()=>{let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`strategy`),[i,a]=(0,x.useState)(1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)({name:``,email:``,message:``}),[u,d]=(0,x.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,A.jsxs)(`div`,{className:`service-page`,children:[(0,A.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Gr}) center/cover;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

       .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }


        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,A.jsx)(`section`,{className:`hero-section`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsxs)(`h1`,{className:`hero-title mt-5`,children:[`GIS Consultancy `,(0,A.jsx)(`span`,{children:`•`}),` Strategic Advisory`]}),(0,A.jsx)(`p`,{className:`hero-description`,children:`Strategic GIS advisory, workflow automation, data integration, and capacity building — transform your geospatial capabilities with expert guidance.`}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Request a Consultation `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,A.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,A.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Consultancy Services`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Your Trusted `,(0,A.jsx)(`span`,{children:`GIS Advisory`}),` Partner`]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Whether you're starting your GIS journey or optimizing an enterprise system, our consultants provide independent, vendor-neutral advice. We help you design, implement, and scale geospatial solutions that deliver measurable business value.`})]}),(0,A.jsx)(`div`,{className:`service-grid`,children:bi.map(e=>(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Needs `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,A.jsxs)(`div`,{className:`achievement-content`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Consultancy `,(0,A.jsx)(`span`,{children:`Excellence`})]}),(0,A.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`With deep expertise in GIS strategy and implementation, we help organizations maximize their geospatial investments and build sustainable capabilities.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Strategic GIS roadmapping`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Workflow automation & optimization`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Data migration & integration`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Capacity building & training`]})]}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Get a Consultation`})]}),(0,A.jsxs)(`div`,{className:`achievement-image`,children:[(0,A.jsx)(`img`,{src:Sr,alt:`Achievement`}),(0,A.jsxs)(`div`,{className:`client-badge`,children:[(0,A.jsxs)(`h2`,{children:[`100`,(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`Consulting Projects`})]})]})]})})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,A.jsx)(`span`,{children:`Consulting`}),` Approaches`]})]}),(0,A.jsxs)(`div`,{className:`beproTab`,children:[(0,A.jsx)(`button`,{className:`nav-link ${n===`strategy`?`active`:``}`,onClick:()=>r(`strategy`),children:`Strategy`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`automation`?`active`:``}`,onClick:()=>r(`automation`),children:`Automation`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`training`?`active`:``}`,onClick:()=>r(`training`),children:`Training`})]}),(0,A.jsxs)(`div`,{className:`tab-content`,children:[(0,A.jsx)(`div`,{className:`tab-pane ${n===`strategy`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Strategic `,(0,A.jsx)(`span`,{children:`GIS Planning`})]}),(0,A.jsx)(`p`,{children:`Develop a tailored GIS roadmap aligned with your organizational goals, data maturity, and budget. We help you prioritize investments and build a sustainable geospatial capability.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Plan Your Strategy`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Strategy`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`automation`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Workflow `,(0,A.jsx)(`span`,{children:`Automation`})]}),(0,A.jsx)(`p`,{children:`Streamline repetitive GIS tasks, data processing pipelines, and quality control using Python, ModelBuilder, and FME. Reduce manual effort and eliminate errors.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Automate Workflows`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Automation`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`training`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Capacity `,(0,A.jsx)(`span`,{children:`Building`})]}),(0,A.jsx)(`p`,{children:`Empower your team with custom GIS training programs. From basic map creation to advanced geoprocessing and automation — build lasting expertise.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Start Training`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Training`})})]})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,A.jsx)(`span`,{children:`Consulting`}),` Articles`]})]}),(0,A.jsx)(`div`,{className:`blog-grid`,children:xi.map(e=>(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:e.img,alt:e.title})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`span`,{className:`bmeta`,children:[(0,A.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:`/blog`,children:e.title})}),(0,A.jsxs)(`div`,{className:`bpcon`,children:[(0,A.jsxs)(`div`,{className:`author`,children:[(0,A.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,A.jsx)(k,{to:`/blog`,children:(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`GIS Consultancy`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your geospatial capabilities with expert guidance?`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start a Consultation`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})}),o&&(0,A.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,A.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,A.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Consultancy Inquiry`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Request a `,(0,A.jsx)(`span`,{children:`Consultation`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your GIS challenges, goals, and timeline.`})]}),u&&(0,A.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,A.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A GIS consultant will contact ${n} within 24h with portfolio examples and a custom proposal.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,A.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,A.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,A.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your GIS challenges and requirements...`})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,A.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},Ci=[{id:1,icon:`fa-laptop-code`,title:`Custom Website Design`,description:`Fully responsive, mobile-first websites that reflect your brand identity. Clean UI/UX, intuitive navigation, and conversion-focused layouts.`,image:yr,link:`/services/web-development/design`},{id:2,icon:`fa-cart-shopping`,title:`E-Commerce Solutions`,description:`Secure online stores with product catalogs, payment gateways, inventory management, and order tracking — built on WooCommerce or custom solutions.`,image:br,link:`/services/web-development/ecommerce`},{id:3,icon:`fa-database`,title:`Web GIS & Mapping Portals`,description:`Interactive map dashboards, spatial data visualization, and location-based services using Leaflet, Mapbox GL, OpenLayers, or Esri JS API.`,image:xr,link:`/services/web-development/webgis`},{id:4,icon:`fa-tachometer-alt`,title:`CMS Development`,description:`WordPress, custom admin panels, or headless CMS — you control your content. Easy updates without touching code.`,image:yr,link:`/services/web-development/cms`},{id:5,icon:`fa-chart-line`,title:`Web Applications & Dashboards`,description:`Custom business tools, data dashboards, client portals, and internal systems with real-time updates and role-based access.`,image:br,link:`/services/web-development/applications`},{id:6,icon:`fa-search`,title:`SEO & Performance Optimization`,description:`Fast load times, Core Web Vitals compliance, meta tagging, and structured data — get discovered and keep users engaged.`,image:xr,link:`/services/web-development/seo`}],wi=[{id:1,title:`Building Modern Web Applications`,date:`20 March, 2021`,author:`Keesler Smith`,img:Pr,authorImg:Lr},{id:2,title:`Web GIS: Bringing Maps to the Browser`,date:`20 March, 2021`,author:`Keesler Smith`,img:Fr,authorImg:Rr},{id:3,title:`SEO Strategies for 2024`,date:`20 March, 2021`,author:`Keesler Smith`,img:Ir,authorImg:zr}],Ti=()=>{let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`design`),[i,a]=(0,x.useState)(1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)({name:``,email:``,message:``}),[u,d]=(0,x.useState)(``),f=e=>{l({...c,[e.target.id]:e.target.value})};return(0,A.jsxs)(`div`,{className:`service-page`,children:[(0,A.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Gr}) center/cover;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

      .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }

        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== ACHIEVEMENT ===== */
        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .text-light .listItem li {
          color: #d0d0dd;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== TABS ===== */
        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        /* ===== ACCORDION ===== */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        /* ===== BLOG ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
          .service_item_01 .siThumb {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 16px 14px 20px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 28px;
          }
          .cta-content h3 {
            font-size: 22px;
          }
        }
      `}),(0,A.jsx)(`section`,{className:`hero-section`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsxs)(`h1`,{className:`hero-title mt-5`,children:[`Website `,(0,A.jsx)(`span`,{children:`Development`})]}),(0,A.jsx)(`p`,{className:`hero-description`,children:`Custom websites, web applications, and digital platforms — modern, responsive, and built for performance. From corporate sites to complex geospatial web portals.`}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Start Your Web Project `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,A.jsx)(`a`,{href:`#features`,className:`berpo_btn-outline`,children:`Explore Services`})]})]})})}),(0,A.jsx)(`section`,{id:`features`,className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Web Development Services`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Digital Experiences `,(0,A.jsx)(`span`,{children:`Engineered`}),` for Impact`]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Your website is your digital headquarters. We build fast, secure, and scalable web solutions tailored to your brand and business goals. Whether you need a showcase site, an e-commerce platform, or a data-driven web GIS portal — we deliver code that works.`})]}),(0,A.jsx)(`div`,{className:`service-grid`,children:Ci.map(e=>(0,A.jsxs)(`div`,{className:`service_item_01`,children:[(0,A.jsx)(`div`,{className:`siThumb`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title})}),(0,A.jsxs)(`div`,{className:`sitem_con`,children:[(0,A.jsx)(`div`,{className:`ibMeta`,children:(0,A.jsx)(`i`,{className:`fas ${e.icon}`})}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:e.link,children:e.title})}),(0,A.jsx)(`p`,{children:e.description})]})]},e.id))}),(0,A.jsx)(`div`,{className:`text-center mt-5`,children:(0,A.jsxs)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:[`Discuss Your Project `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]})})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`achievement-wrap`,children:[(0,A.jsxs)(`div`,{className:`achievement-content`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Our Impact`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Web Development `,(0,A.jsx)(`span`,{children:`Excellence`})]}),(0,A.jsx)(`p`,{style:{color:`#4a4a62`,marginBottom:`16px`},children:`Delivering cutting-edge web solutions that combine stunning design, robust functionality, and seamless user experiences for clients across industries.`}),(0,A.jsxs)(`ul`,{className:`listItem`,children:[(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Custom website design`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` E-Commerce solutions`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Web GIS & mapping portals`]}),(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`i`,{className:`fas fa-check-circle`}),` Web applications & dashboards`]})]}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Web Project`})]}),(0,A.jsxs)(`div`,{className:`achievement-image`,children:[(0,A.jsx)(`img`,{src:Sr,alt:`Achievement`}),(0,A.jsxs)(`div`,{className:`client-badge`,children:[(0,A.jsxs)(`h2`,{children:[`85`,(0,A.jsx)(`sup`,{children:`+`})]}),(0,A.jsx)(`h5`,{children:`Web Projects Delivered`})]})]})]})})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Solutions`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,A.jsx)(`span`,{children:`Web`}),` Capabilities`]})]}),(0,A.jsxs)(`div`,{className:`beproTab`,children:[(0,A.jsx)(`button`,{className:`nav-link ${n===`design`?`active`:``}`,onClick:()=>r(`design`),children:`Web Design`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`webgis`?`active`:``}`,onClick:()=>r(`webgis`),children:`Web GIS`}),(0,A.jsx)(`button`,{className:`nav-link ${n===`apps`?`active`:``}`,onClick:()=>r(`apps`),children:`Web Apps`})]}),(0,A.jsxs)(`div`,{className:`tab-content`,children:[(0,A.jsx)(`div`,{className:`tab-pane ${n===`design`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Custom `,(0,A.jsx)(`span`,{children:`Web Design`})]}),(0,A.jsx)(`p`,{children:`Fully responsive, mobile-first websites that reflect your brand identity. Clean UI/UX, intuitive navigation, and conversion-focused layouts.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Start Your Design`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Web Design`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`webgis`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Web GIS `,(0,A.jsx)(`span`,{children:`& Mapping`})]}),(0,A.jsx)(`p`,{children:`Interactive map dashboards, spatial data visualization, and location-based services using Leaflet, Mapbox GL, OpenLayers, or Esri JS API.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Build Your Web GIS`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Web GIS`})})]})}),(0,A.jsx)(`div`,{className:`tab-pane ${n===`apps`?`active`:``}`,children:(0,A.jsxs)(`div`,{className:`tab-content-inner`,children:[(0,A.jsxs)(`div`,{className:`text-col`,children:[(0,A.jsxs)(`h2`,{className:`secTitle`,style:{fontSize:`28px`},children:[`Web Apps `,(0,A.jsx)(`span`,{children:`& Dashboards`})]}),(0,A.jsx)(`p`,{children:`Custom business tools, data dashboards, client portals, and internal systems with real-time updates and role-based access.`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,style:{marginTop:`16px`},children:`Build Your App`})]}),(0,A.jsx)(`div`,{className:`img-col`,children:(0,A.jsx)(`img`,{src:j,alt:`Web Apps`})})]})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Insights`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Latest `,(0,A.jsx)(`span`,{children:`Web`}),` Articles`]})]}),(0,A.jsx)(`div`,{className:`blog-grid`,children:wi.map(e=>(0,A.jsxs)(`div`,{className:`blogItem01`,children:[(0,A.jsx)(`div`,{className:`blogThumb`,children:(0,A.jsx)(`img`,{src:e.img,alt:e.title})}),(0,A.jsxs)(`div`,{className:`blogContent`,children:[(0,A.jsxs)(`span`,{className:`bmeta`,children:[(0,A.jsx)(`i`,{className:`fas fa-calendar-alt`}),` `,e.date]}),(0,A.jsx)(`h3`,{children:(0,A.jsx)(k,{to:`/blog`,children:e.title})}),(0,A.jsxs)(`div`,{className:`bpcon`,children:[(0,A.jsxs)(`div`,{className:`author`,children:[(0,A.jsx)(`img`,{src:e.authorImg,alt:e.author}),e.author]}),(0,A.jsx)(k,{to:`/blog`,children:(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})})]})]})]},e.id))})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`Web Development`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your digital presence with a custom web solution?`}),(0,A.jsx)(`button`,{onClick:()=>s(!0),className:`berpo_btn`,children:`Start Your Web Project`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})}),o&&(0,A.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,A.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`button`,{className:`modal-close`,onClick:()=>s(!1),children:`×`}),(0,A.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Web Development Inquiry`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Start Your `,(0,A.jsx)(`span`,{children:`Web Project`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`},children:`Tell us about your website needs — type of site, features, timeline, and budget range.`})]}),u&&(0,A.jsx)(`div`,{className:`feedback-message ${u.includes(`✅`)?`success`:`error`}`,children:u}),(0,A.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let{name:t,email:n}=c;if(!t||!n){d(`❌ Please provide name and email.`);return}if(!n.includes(`@`)){d(`❌ Valid email required.`);return}d(`✅ Thanks ${t}! A web development specialist will contact ${n} within 24h with portfolio samples and a custom quote.`),l({name:``,email:``,message:``}),setTimeout(()=>{s(!1),d(``)},2800)},children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`name`,children:`Full Name *`}),(0,A.jsx)(`input`,{type:`text`,id:`name`,value:c.name,onChange:f,placeholder:`John Doe`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`email`,children:`Email Address *`}),(0,A.jsx)(`input`,{type:`email`,id:`email`,value:c.email,onChange:f,placeholder:`john@example.com`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`message`,children:`Project Details`}),(0,A.jsx)(`textarea`,{id:`message`,value:c.message,onChange:f,placeholder:`Tell us about your website needs, features, and timeline...`})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`berpo_btn`,style:{width:`100%`},children:[`Submit Inquiry `,(0,A.jsx)(`i`,{className:`fas fa-paper-plane`,style:{marginLeft:`8px`}})]})]})]})})]})},Ei=()=>{let[e,t]=(0,x.useState)({name:``,email:``,phone:``,service:``,message:``}),[n,r]=(0,x.useState)(``),[i,a]=(0,x.useState)(!1),o=n=>{t({...e,[n.target.id]:n.target.value})};return(0,x.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,A.jsxs)(`div`,{className:`contact-page`,children:[(0,A.jsx)(`style`,{children:`
        /* ===== GLOBAL RESET & BASE ===== */
        .contact-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .contact-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .secTitle span {
          color: #bb0b0b;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${Gr}) center/cover;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== CONTACT GRID ===== */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 40px;
        }

        .contact-info-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 35px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f5;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.08);
          border-color: #bb0b0b30;
        }

        .contact-info-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
        }

        .contact-info-card h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #bb0b0b;
          border-radius: 3px;
        }

        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
          padding: 8px 0;
          transition: transform 0.2s ease;
        }

        .contact-detail-item:hover {
          transform: translateX(6px);
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          background: #bb0b0b10;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #bb0b0b;
          font-size: 18px;
          flex-shrink: 0;
          transition: 0.3s;
        }

        .contact-detail-item:hover .contact-icon {
          background: #bb0b0b;
          color: #ffffff;
        }

        .contact-detail-item .contact-text {
          font-size: 15px;
          color: #4a4a62;
          line-height: 1.6;
        }

        .contact-detail-item .contact-text strong {
          color: #0a1922;
          font-weight: 600;
        }

        .contact-detail-item a {
          color: #4a4a62;
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-detail-item a:hover {
          color: #bb0b0b;
        }

        .business-hours {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #f0f0f5;
        }

        .business-hours h4 {
          font-size: 16px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .business-hours p {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #4a4a62;
          padding: 4px 0;
        }

        .business-hours p span:last-child {
          font-weight: 600;
          color: #0a1922;
        }

        .social-links-contact {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .social-links-contact a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 16px;
          transition: 0.3s;
        }

        .social-links-contact a:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* ===== MAP CARD ===== */
        .map-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 35px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f5;
          transition: all 0.3s ease;
        }

        .map-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.08);
          border-color: #bb0b0b30;
        }

        .map-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
        }

        .map-card h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #bb0b0b;
          border-radius: 3px;
        }

        .map-preview {
          background: #f8f9fc;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
          border: 2px solid #f0f0f5;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .map-preview:hover {
          border-color: #bb0b0b;
          transform: scale(1.01);
        }

        .map-placeholder {
          background: linear-gradient(135deg, #f0f0f5, #e8e8f0);
          padding: 60px 20px;
          text-align: center;
        }

        .map-placeholder i {
          font-size: 48px;
          color: #bb0b0b;
          margin-bottom: 12px;
        }

        .map-placeholder p {
          font-weight: 600;
          color: #0a1922;
          margin-top: 8px;
        }

        .map-placeholder .address-text {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 400;
          margin-top: 4px;
        }

        .google-map-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #bb0b0b;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .google-map-btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #ffffff;
        }

        .map-directions-note {
          font-size: 13px;
          color: #7a7a92;
          margin-top: 12px;
          text-align: center;
        }

        .map-directions-note i {
          color: #bb0b0b;
          margin-right: 6px;
        }

        /* ===== CONTACT FORM ===== */
        .contact-form-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 35px;
          margin-top: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f5;
          transition: all 0.3s ease;
        }

        .contact-form-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.08);
          border-color: #bb0b0b30;
        }

        .contact-form-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
        }

        .contact-form-card h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #bb0b0b;
          border-radius: 3px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          font-size: 14px;
          color: #0a1922;
          margin-bottom: 6px;
        }

        .form-group label .required {
          color: #bb0b0b;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 18px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          font-family: inherit;
          transition: all 0.3s ease;
          background: #fafafc;
          color: #1a1a2e;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.08);
          background: #ffffff;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%235a5a72'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
          cursor: pointer;
        }

        .form-group textarea::placeholder,
        .form-group input::placeholder {
          color: #9a9aae;
        }

        .btn-submit {
          background: #bb0b0b;
          color: #ffffff;
          padding: 14px 38px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .btn-submit:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #ffffff;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TOAST ===== */
        .toast-message {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #0a1922;
          color: #ffffff;
          padding: 16px 28px;
          border-radius: 12px;
          z-index: 9999;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          max-width: 90%;
          font-weight: 500;
          border-left: 4px solid #bb0b0b;
        }

        .toast-message.show {
          opacity: 1;
          transform: translateY(0);
        }

        .toast-message.success {
          border-left-color: #28a745;
        }

        .toast-message.error {
          border-left-color: #dc3545;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .contact-info-card,
          .map-card,
          .contact-form-card {
            padding: 24px 20px;
          }
          .contact-info-card h3,
          .map-card h3,
          .contact-form-card h3 {
            font-size: 20px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .business-hours p {
            flex-direction: column;
            gap: 2px;
          }
          .toast-message {
            bottom: 20px;
            right: 20px;
            left: 20px;
            max-width: 100%;
            padding: 14px 20px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .contact-detail-item {
            gap: 12px;
          }
          .contact-icon {
            width: 38px;
            height: 38px;
            min-width: 38px;
            font-size: 15px;
          }
          .contact-detail-item .contact-text {
            font-size: 14px;
          }
          .map-placeholder {
            padding: 40px 16px;
          }
          .map-placeholder i {
            font-size: 36px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .btn-submit {
            padding: 12px 24px;
            font-size: 14px;
          }
          .google-map-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `}),(0,A.jsx)(`div`,{className:`toast-message ${i?`show`:``} ${n.includes(`✅`)?`success`:n.includes(`⚠️`)||n.includes(`📧`)?`error`:``}`,children:n}),(0,A.jsx)(`section`,{className:`hero-section`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`hero-icon`,children:(0,A.jsx)(`br`,{})}),(0,A.jsxs)(`h1`,{className:`hero-title mt-5`,children:[`Get In `,(0,A.jsx)(`span`,{children:`Touch`})]}),(0,A.jsx)(`p`,{className:`hero-description`,children:`We're here to bring your geospatial vision to life — reach out anytime. Whether you have a project in mind or just want to learn more, we'd love to hear from you.`}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,A.jsxs)(`a`,{href:`#contact-form`,className:`berpo_btn`,children:[`Send a Message `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`,style:{marginLeft:`8px`}})]}),(0,A.jsx)(`a`,{href:`#location`,className:`berpo_btn-outline`,children:`Find Us`})]})]})})}),(0,A.jsx)(`section`,{id:`contact`,className:`section-padding`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Contact Us`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Let's `,(0,A.jsx)(`span`,{children:`Connect`})]}),(0,A.jsx)(`p`,{style:{color:`#5a5a72`,maxWidth:`700px`,margin:`0 auto`},children:`Have a question, project idea, or partnership opportunity? Reach out to us using the form below or through our contact details. We respond within 24 hours.`})]}),(0,A.jsxs)(`div`,{className:`contact-grid`,children:[(0,A.jsxs)(`div`,{className:`contact-info-card`,id:`location`,children:[(0,A.jsx)(`h3`,{children:`Contact Information`}),(0,A.jsxs)(`div`,{className:`contact-detail-item`,children:[(0,A.jsx)(`div`,{className:`contact-icon`,children:(0,A.jsx)(`i`,{className:`fas fa-map-marker-alt`})}),(0,A.jsxs)(`div`,{className:`contact-text`,children:[(0,A.jsx)(`strong`,{children:`Office Address`}),(0,A.jsx)(`br`,{}),`New 533, Old 124, MKN Rd, First floor,`,(0,A.jsx)(`br`,{}),`Alandur, Chennai, Tamil Nadu 600016`]})]}),(0,A.jsxs)(`div`,{className:`contact-detail-item`,children:[(0,A.jsx)(`div`,{className:`contact-icon`,children:(0,A.jsx)(`i`,{className:`fas fa-phone-alt`})}),(0,A.jsxs)(`div`,{className:`contact-text`,children:[(0,A.jsx)(`strong`,{children:`Phone`}),(0,A.jsx)(`br`,{}),(0,A.jsx)(`a`,{href:`tel:+918903138792`,children:`+91 89031 38792`})]})]}),(0,A.jsxs)(`div`,{className:`contact-detail-item`,children:[(0,A.jsx)(`div`,{className:`contact-icon`,children:(0,A.jsx)(`i`,{className:`fas fa-envelope`})}),(0,A.jsxs)(`div`,{className:`contact-text`,children:[(0,A.jsx)(`strong`,{children:`Email`}),(0,A.jsx)(`br`,{}),(0,A.jsx)(`a`,{href:`mailto:sgtsolutionsinfo@gmail.com`,children:`sgtsolutionsinfo@gmail.com`})]})]}),(0,A.jsxs)(`div`,{className:`contact-detail-item`,children:[(0,A.jsx)(`div`,{className:`contact-icon`,children:(0,A.jsx)(`i`,{className:`fas fa-globe`})}),(0,A.jsxs)(`div`,{className:`contact-text`,children:[(0,A.jsx)(`strong`,{children:`Website`}),(0,A.jsx)(`br`,{}),(0,A.jsx)(`a`,{href:`#`,children:`www.sgtsolutions.in`})]})]}),(0,A.jsxs)(`div`,{className:`business-hours`,children:[(0,A.jsxs)(`h4`,{children:[(0,A.jsx)(`i`,{className:`fas fa-clock`,style:{color:`#bb0b0b`,marginRight:`8px`}}),` Business Hours`]}),(0,A.jsxs)(`p`,{children:[(0,A.jsx)(`span`,{children:`Monday - Saturday`}),(0,A.jsx)(`span`,{children:`9:00 AM – 5:00 PM`})]}),(0,A.jsxs)(`p`,{children:[(0,A.jsx)(`span`,{children:`Sunday`}),(0,A.jsx)(`span`,{children:`Closed`})]})]}),(0,A.jsxs)(`div`,{className:`social-links-contact`,children:[(0,A.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,children:(0,A.jsx)(`i`,{className:`fab fa-linkedin-in`})}),(0,A.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Facebook`,children:(0,A.jsx)(`i`,{className:`fab fa-facebook-f`})}),(0,A.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Instagram`,children:(0,A.jsx)(`i`,{className:`fab fa-instagram`})}),(0,A.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Twitter`,children:(0,A.jsx)(`i`,{className:`fab fa-twitter`})})]})]}),(0,A.jsxs)(`div`,{className:`map-card`,children:[(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`i`,{className:`fas fa-map-pin`,style:{color:`#bb0b0b`,marginRight:`8px`}}),` Our Location`]}),(0,A.jsx)(`div`,{className:`map-preview`,onClick:()=>window.open(`https://www.google.com/maps/search/?api=1&query=124+MKN+Rd+Ramapuram+Alandur+Chennai`,`_blank`),children:(0,A.jsxs)(`div`,{className:`map-placeholder`,children:[(0,A.jsx)(`i`,{className:`fas fa-map-marked-alt`}),(0,A.jsx)(`p`,{children:`SGT Solutions, Alandur`}),(0,A.jsxs)(`div`,{className:`address-text`,children:[(0,A.jsx)(`i`,{className:`fas fa-location-dot`,style:{color:`#bb0b0b`,marginRight:`6px`}}),`124, MKN Rd, Ramapuram, Alandur, Chennai`]})]})}),(0,A.jsxs)(`button`,{className:`google-map-btn`,onClick:()=>window.open(`https://www.google.com/maps/search/?api=1&query=124+MKN+Rd+Ramapuram+Alandur+Chennai`,`_blank`),children:[(0,A.jsx)(`i`,{className:`fab fa-google`}),` Open in Google Maps`]}),(0,A.jsxs)(`p`,{className:`map-directions-note`,children:[(0,A.jsx)(`i`,{className:`fas fa-directions`}),` Click on the map or button for directions`]})]})]}),(0,A.jsxs)(`div`,{className:`contact-form-card`,id:`contact-form`,children:[(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`i`,{className:`fas fa-paper-plane`,style:{color:`#bb0b0b`,marginRight:`8px`}}),` Send us a Message`]}),(0,A.jsxs)(`form`,{onSubmit:n=>{n.preventDefault();let{name:i,email:o,message:s}=e;if(!i||!o||!s){r(`⚠️ Please fill all required fields.`),a(!0),setTimeout(()=>a(!1),3500);return}if(!o.includes(`@`)){r(`📧 Please enter a valid email address.`),a(!0),setTimeout(()=>a(!1),3500);return}r(`✅ Thanks ${i}! Your message has been sent. Our team will respond within 24 hours.`),a(!0),t({name:``,email:``,phone:``,service:``,message:``}),setTimeout(()=>{a(!1),r(``)},4e3)},children:[(0,A.jsxs)(`div`,{className:`form-row`,children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsxs)(`label`,{htmlFor:`name`,children:[`Full Name `,(0,A.jsx)(`span`,{className:`required`,children:`*`})]}),(0,A.jsx)(`input`,{type:`text`,id:`name`,value:e.name,onChange:o,placeholder:`John Doe`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsxs)(`label`,{htmlFor:`email`,children:[`Email Address `,(0,A.jsx)(`span`,{className:`required`,children:`*`})]}),(0,A.jsx)(`input`,{type:`email`,id:`email`,value:e.email,onChange:o,placeholder:`john@example.com`,required:!0})]})]}),(0,A.jsxs)(`div`,{className:`form-row`,children:[(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`phone`,children:`Phone Number`}),(0,A.jsx)(`input`,{type:`tel`,id:`phone`,value:e.phone,onChange:o,placeholder:`+91 98765 43210`})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsx)(`label`,{htmlFor:`service`,children:`Service Interest`}),(0,A.jsxs)(`select`,{id:`service`,value:e.service,onChange:o,children:[(0,A.jsx)(`option`,{value:``,children:`Select a Service`}),(0,A.jsx)(`option`,{value:`web-gis`,children:`Web GIS Development`}),(0,A.jsx)(`option`,{value:`mobile-gis`,children:`Mobile GIS App`}),(0,A.jsx)(`option`,{value:`geo-property`,children:`Spatial Revenue Intelligence System`}),(0,A.jsx)(`option`,{value:`lidar`,children:`LiDAR / Drone Survey`}),(0,A.jsx)(`option`,{value:`photogrammetry`,children:`Photogrammetry`}),(0,A.jsx)(`option`,{value:`2d-mapping`,children:`2D Mapping`}),(0,A.jsx)(`option`,{value:`consultancy`,children:`Consultancy Services`}),(0,A.jsx)(`option`,{value:`web-dev`,children:`Website Development`}),(0,A.jsx)(`option`,{value:`other`,children:`Other`})]})]})]}),(0,A.jsxs)(`div`,{className:`form-group`,children:[(0,A.jsxs)(`label`,{htmlFor:`message`,children:[`Your Message `,(0,A.jsx)(`span`,{className:`required`,children:`*`})]}),(0,A.jsx)(`textarea`,{id:`message`,value:e.message,onChange:o,placeholder:`Tell us about your project or query...`,required:!0})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`btn-submit`,children:[`Send Inquiry `,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-light`,children:(0,A.jsxs)(`div`,{className:`container`,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`div`,{className:`subTitle`,children:`Trusted Partners`}),(0,A.jsxs)(`h2`,{className:`secTitle`,children:[`Our `,(0,A.jsx)(`span`,{children:`Clients`})]})]}),(0,A.jsxs)(`div`,{className:`client-grid`,children:[(0,A.jsx)(`div`,{className:`client-logo-item`,children:(0,A.jsx)(`img`,{src:Cr,alt:`Client`})}),(0,A.jsx)(`div`,{className:`client-logo-item`,children:(0,A.jsx)(`img`,{src:wr,alt:`Client`})}),(0,A.jsx)(`div`,{className:`client-logo-item`,children:(0,A.jsx)(`img`,{src:Tr,alt:`Client`})}),(0,A.jsx)(`div`,{className:`client-logo-item`,children:(0,A.jsx)(`img`,{src:Er,alt:`Client`})})]})]})}),(0,A.jsx)(`section`,{className:`section-padding bg-dark`,children:(0,A.jsx)(`div`,{className:`container`,children:(0,A.jsxs)(`div`,{className:`cta-wrap`,children:[(0,A.jsxs)(`div`,{className:`cta-content`,children:[(0,A.jsxs)(`h4`,{children:[`We're `,(0,A.jsx)(`span`,{className:`highlight`,children:`Creative`})]}),(0,A.jsx)(`h2`,{children:`Geospatial`}),(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(`span`,{className:`highlight`,children:`Solutions`}),` Agency`]}),(0,A.jsx)(`p`,{style:{color:`#b0b0c8`,margin:`16px 0 24px`,maxWidth:`90%`},children:`Ready to transform your ideas into reality? Let's start a conversation today.`}),(0,A.jsx)(`a`,{href:`#contact-form`,className:`berpo_btn`,children:`Start a Project`})]}),(0,A.jsxs)(`div`,{className:`cta-images`,children:[(0,A.jsx)(`img`,{src:Br,alt:`CTA`}),(0,A.jsx)(`img`,{src:Vr,alt:`CTA`})]})]})})})]})};function Di(){return(0,A.jsxs)(Kt,{children:[(0,A.jsxs)(O,{path:`/`,element:(0,A.jsx)(gr,{}),children:[(0,A.jsx)(O,{index:!0,element:(0,A.jsx)(Wr,{})}),(0,A.jsx)(O,{path:`about`,element:(0,A.jsx)(Xr,{})}),(0,A.jsx)(O,{path:`contact`,element:(0,A.jsx)(Ei,{})}),(0,A.jsxs)(O,{path:`services`,children:[(0,A.jsx)(O,{index:!0,element:(0,A.jsx)(Jr,{})}),(0,A.jsx)(O,{path:`web-gis`,element:(0,A.jsx)(ei,{})}),(0,A.jsx)(O,{path:`mobile-gis`,element:(0,A.jsx)(ri,{})}),(0,A.jsx)(O,{path:`geo-property`,element:(0,A.jsx)(si,{})}),(0,A.jsx)(O,{path:`lidar`,element:(0,A.jsx)(ui,{})}),(0,A.jsx)(O,{path:`photogrammetry`,element:(0,A.jsx)(pi,{})}),(0,A.jsx)(O,{path:`drone-survey`,element:(0,A.jsx)(gi,{})}),(0,A.jsx)(O,{path:`2d-mapping`,element:(0,A.jsx)(yi,{})}),(0,A.jsx)(O,{path:`consultancy`,element:(0,A.jsx)(Si,{})}),(0,A.jsx)(O,{path:`web-development`,element:(0,A.jsx)(Ti,{})})]})]}),(0,A.jsx)(O,{path:`/service`,element:(0,A.jsx)(Ut,{to:`/services`,replace:!0})}),(0,A.jsx)(O,{path:`*`,element:(0,A.jsx)(Ut,{to:`/`,replace:!0})})]})}Hn.createRoot(document.getElementById(`root`)).render((0,A.jsx)(jn,{children:(0,A.jsx)(Di,{})}));