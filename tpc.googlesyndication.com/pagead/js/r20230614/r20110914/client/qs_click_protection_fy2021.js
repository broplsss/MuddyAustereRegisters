(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var l=this||self;function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}} 
function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}function ca(a,b){function c(){}c.prototype=b.prototype;a.P=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.R=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};var da,t;a:{for(var ea=["CLOSURE_FLAGS"],u=l,ka=0;ka<ea.length;ka++)if(u=u[ea[ka]],null==u){t=null;break a}t=u}var la=t&&t[610401301];da=null!=la?la:!1;var v;const ma=l.navigator;v=ma?ma.userAgentData||null:null;function na(a){return da?v?v.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function w(a){var b;a:{if(b=l.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function x(){return da?!!v&&0<v.brands.length:!1}function oa(){return x()?na("Chromium"):(w("Chrome")||w("CriOS"))&&!(x()?0:w("Edge"))||w("Silk")};function y(a,b){Array.prototype.forEach.call(a,b,void 0)};!w("Android")||oa();oa();w("Safari")&&(oa()||(x()?0:w("Coast"))||(x()?0:w("Opera"))||(x()?0:w("Edge"))||(x()?na("Microsoft Edge"):w("Edg/"))||x()&&na("Opera"));function z(a){return Array.prototype.slice.call(a)};const A=Symbol();function pa(a){const b=a[A]|0;1!==(b&1)&&(Object.isFrozen(a)&&(a=z(a)),a[A]=b|1)}function qa(a){a[A]|=1;return a}function ra(a,b){b[A]=(a|0)&-51}function sa(a,b){b[A]=(a|18)&-41}function B(a){a=a>>10&1023;return 0===a?536870912:a};var C={};function D(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var E;const ta=[];ta[A]=23;E=Object.freeze(ta);function ua(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.G===C)return a;if(d){var e=d=a[A]|0;0===e&&(e|=c&16);e|=c&2;e!==d&&(a[A]=e);return new b(a)}};function H(a,b){a=a.j;return va(a,a[A],b)}function va(a,b,c,d){if(-1===c)return null;if(c>=B(b)){if(b&128)return a[a.length-1][c]}else{var e=a.length;if(d&&b&128&&(d=a[e-1][c],null!=d))return d;b=c+((b>>8&1)-1);if(b<e)return a[b]}}function I(a,b,c,d){var e=B(b);if(1>=e||d){d=b;if(b&128)e=a[a.length-1];else{if(null==c)return;e=a[e+((b>>8&1)-1)]={};d|=128}e[1]=c;d&=-513;d!==b&&(a[A]=d)}else a[1+((b>>8&1)-1)]=c,b&128&&(c=a[a.length-1],1 in c&&delete c[1]),b&512&&(a[A]=b&-513)} 
function wa(a){var b=a.j,c=b[A],d=va(b,c,1,!1);const e=ua(d,xa,c);e!==d&&null!=e&&I(b,c,e,!1);b=e;if(null==b)return b;a=a.j;c=a[A];c&2||(d=ya(b),d!==b&&(b=d,I(a,c,b,!1)));return b} 
function za(a){var b=a.j,c=b[A];a=!!(c&2);var d=a?1:2,e=Da,f=!!(c&2),g=c&2,h=va(b,c,1);Array.isArray(h)||(h=E);var k=h[A]|0;k&1||qa(h);g?k&2||(h[A]|=18):k&16&&!(k&2)&&(h[A]&=-17);g=h;if(g!==E&&(g[A]|0)&4)3===d||f||(e=Object.isFrozen(g),1===d?e||Object.freeze(g):(d=g[A]|0,f=d&-19,e&&(g=z(g),d=0,I(b,c,g)),d!==f&&(g[A]=f))),b=g;else{k=g;f=!!(c&2);h=!!((k[A]|0)&2);g=k;!f&&h&&(k=z(k));var m=c|(h?2:0);h=h||void 0;let n=0,q=0;for(;n<k.length;n++){const r=ua(k[n],e,m);void 0!==r&&(h=h||r.j[A]&2,k[q++]=r)}q< 
n&&(k.length=q);e=k;k=e[A]|0;m=k|5;h=h?m&-9:m|8;k!=h&&(Object.isFrozen(e)&&(e=z(e)),e[A]=h);k=e;g!==k&&I(b,c,k);(f&&2!==d||1===d)&&Object.freeze(k);b=k}if(!(a||(b[A]|0)&8)){for(a=0;a<b.length;a++)c=b[a],d=ya(c),c!==d&&(b[a]=d);b[A]|=8}return b}function J(a,b){a=H(a,b);a=null==a?a:!!a;return null==a?!1:a}function K(a,b){a:if(a=H(a,b),null!=a){switch(typeof a){case "string":a=+a;break a;case "number":break a}a=void 0}return null==a?0:a}function L(a){a=H(a,1);return null==a?"":a} 
function N(a,b){a=H(a,b);a=null==a?a:a;return null==a?1:a};let Ea;function Fa(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}}return a};function Ga(a,b){var c=a.j,d=z(c),e=c[A],f=d.length;c=e&128?d[f-1]:void 0;f+=c?-1:0;for(e=e&256?1:0;e<f;e++)d[e]=b(d[e]);if(c){e=d[e]={};for(const g in c)e[g]=b(c[g])}b=a.constructor;d[A]|=16;Ea=d;d=new b(d);Ea=void 0;a.K&&(d.K=z(a.K));return d}function Ha(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&(a[A]|0)&1?void 0:f&&(a[A]|0)&2?a:Ia(a,b,c,void 0!==d,e,f);else if(D(a)){const g={};for(let h in a)g[h]=Ha(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}} 
function Ia(a,b,c,d,e,f){const g=d||c?a[A]|0:0;d=d?!!(g&16):void 0;a=z(a);for(let h=0;h<a.length;h++)a[h]=Ha(a[h],b,c,d,e,f);c&&c(g,a);return a}function Ja(a){return a.G===C?a.toJSON():Fa(a)};function Ka(a,b,c=sa){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const d=a[A]|0;if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return a[A]=d|18,a;a=Ia(a,Ka,d&4?sa:c,!0,!1,!0);b=a[A]|0;b&4&&b&2&&Object.freeze(a);return a}a.G===C&&((a.j[A]|0)&2||(a=La(a,!0),b=a.j,b[A]|=18));return a}}function La(a,b){const c=a.j[A],d=b||c&2?sa:ra,e=!!(c&16);return Ga(a,f=>Ka(f,e,d))}function ya(a){if(!(a.j[A]&2))return a;const b=La(a,!1);b.g=a;a=b.j;a[A]|=512;return b};var O=class{constructor(a){null==a&&(a=Ea);Ea=void 0;if(null==a){var b=48;a=[]}else{if(!Array.isArray(a))throw Error();b=a[A]|32}this.j=a;var c=a,d=c.length;if(d){var e=d-1,f=c[e];if(D(f)){b|=128;d=(b>>8&1)-1;e-=d;if(1024<=e){e=1023+d;const g=c.length;for(let h=e;h<g;h++){const k=c[h];null!=k&&k!==f&&(f[h-d]=k)}c.length=e+1;c[e]=f;e=1023}b=b&-1047553|(e&1023)<<10}}a[A]=b}toJSON(){var a=Ia(this.j,Ja,void 0,void 0,!1,!1);return Ma(this,a,!0)}};O.prototype.G=C; 
O.prototype.toString=function(){return Ma(this,this.j,!1).toString()}; 
function Ma(a,b,c){const d=a.constructor.O;var e=B((c?a.j:b)[A]);if(d){if(!c){b=z(b);var f;if(b.length&&D(f=b[b.length-1]))for(var g=0;g<d.length;g++)if(d[g]>=e){Object.assign(b[b.length-1]={},f);break}}e=b;c=!c;f=a.j[A];a=B(f);f=(f>>8&1)-1;let m;for(g=0;g<d.length;g++){var h=d[g];if(h<a){h+=f;var k=e[h];null==k?e[h]=c?E:qa([]):c&&k!==E&&pa(k)}else{if(!m){let n;e.length&&D(n=e[e.length-1])?m=n:e.push(m={})}k=m[h];null==m[h]?m[h]=c?E:qa([]):c&&k!==E&&pa(k)}}}return b};var Da=class extends O{};var xa=class extends O{};xa.O=[1];var Na=class extends O{};function Oa(){}function Pa(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var Qa={capture:!0},Ra={passive:!0},Sa=Pa(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});l.addEventListener("test",null,b)}catch(b){}return a});function Ta(a){return a?a.passive&&Sa()?a:a.capture||!1:!1}function P(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Ta(d))};var Q=class{constructor(a){this.g=a}toString(){return this.g.toString()}};Q.prototype.i=!0;Q.prototype.h=function(){return this.g.toString()};var Ua={},Va=new Q("about:invalid#zClosurez",Ua);function Wa(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Wa(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
class Xa{constructor(a){this.N=a}}function R(a){return new Xa(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Ya=new Xa(a=>/^[^:]*([/?#]|$)/.test(a));var Za=R("http"),$a=R("https"),ab=R("ftp"),bb=R("mailto");const cb=[R("data"),Za,$a,bb,ab,Ya];function db(a=cb){for(let b=0;b<a.length;++b){const c=a[b];if(c instanceof Xa&&c.N("#"))return new Q("#",Ua)}}function eb(a=cb){return db(a)||Va};function fb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}let gb=[];const hb=()=>{const a=gb;gb=[];for(const b of a)try{b()}catch{}};var ib=a=>{var b=S;"complete"===b.readyState||"interactive"===b.readyState?(gb.push(a),1==gb.length&&(window.Promise?Promise.resolve().then(hb):window.setImmediate?setImmediate(hb):setTimeout(hb,0))):b.addEventListener("DOMContentLoaded",a)};function jb(a=document){return a.createElement("img")};function kb(a,b,c=null,d=!1){lb(a,b,c,d)}function lb(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=jb(a.document);if(c||d){const f=g=>{c&&c(g);if(d){g=a.google_image_requests;var h=Array.prototype.indexOf.call(g,e,void 0);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,Ta());e.removeEventListener&&e.removeEventListener("error",f,Ta())};P(e,"load",f);P(e,"error",f)}e.src=b;a.google_image_requests.push(e)};function mb(a=null){return a&&"23"===a.getAttribute("data-jc")?a:document.querySelector('[data-jc="23"]')} 
function nb(){if(!(.01<Math.random())){var a=mb(document.currentScript);a=a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com";var b=(b=mb(document.currentScript))&&b.getAttribute("data-jc-version")||"unknown";a=`https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):kb(b,a,void 0, 
!1)}};var S=document,T=window;var ob=(a=[])=>{l.google_logging_queue||(l.google_logging_queue=[]);l.google_logging_queue.push([12,a])};const pb=[Za,$a,bb,ab,Ya,R("market"),R("itms"),R("intent"),R("itms-appss")]; 
var qb=()=>{var a=`${"http:"===T.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return b=>{b={id:"unsafeurl",ctx:625,url:b};var c=[];for(d in b)Wa(d,b[d],c);var d=c.join("&");if(d){b=a.indexOf("#");0>b&&(b=a.length);c=a.indexOf("?");if(0>c||c>b){c=b;var e=""}else e=a.substring(c+1,b);b=[a.slice(0,c),e,a.slice(b)];c=b[1];b[1]=d?c?c+"&"+d:d:c;d=b[0]+(b[1]?"?"+b[1]:"")+b[2]}else d=a;navigator.sendBeacon&&navigator.sendBeacon(d,"")}};var rb=()=>{var a=S;try{return a.querySelectorAll("*[data-ifc]")}catch(b){return[]}},sb=(a,b)=>{a&&fb(b,(c,d)=>{a.style[d]=c})},tb=a=>{var b=S.body;const c=document.createDocumentFragment(),d=a.length;for(let e=0;e<d;++e)c.appendChild(a[e]);b.appendChild(c)};function ub(a,b,c,d,e){const f=[];fb(a,function(g,h){(g=vb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}function vb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(vb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(ub(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))} 
function wb(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function xb(a){let b="https://pagead2.googlesyndication.com/pagead/gen_204?id=fccs&",c=wb(a)-24;if(0>c)return"";a.g.sort(function(f,g){return f-g});let d=null,e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let k=0;k<h.length;k++){if(!c){d=null==d?g:d;break}let m=ub(h[k],a.i,",$");if(m){m=e+m;if(c>=m.length){c-=m.length;b+=m;e=a.i;break}d=null==d?g:d}}}a="";null!=d&&(a=e+"trn="+d);return b+a}class yb{constructor(){this.i="&";this.h={};this.m=0;this.g=[]}};function zb(){var a=Ab,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}function Bb(a){if(1>Ab.g)try{let b;a instanceof yb?b=a:(b=new yb,fb(a,(d,e)=>{var f=b;const g=f.m++,h={};h[e]=d;d=[h];f.g.push(g);f.h[g]=d}));const c=xb(b);c&&kb(l,c)}catch(b){}}class Cb{constructor(){this.g=Math.random()}};let Db=null;function Eb(){const a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Fb(){const a=l.performance;return a&&a.now?a.now():null};class Gb{constructor(a,b){var c=Fb()||Eb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0}};const U=l.performance,Hb=!!(U&&U.mark&&U.measure&&U.clearMarks),V=Pa(()=>{var a;if(a=Hb){var b;if(null===Db){Db="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(Db=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Db;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Ib(a){a&&U&&V()&&(U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class Jb{constructor(){var a=window;this.g=[];this.i=a||l;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.g=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.h=V()||(null!=b?b:1>Math.random())}start(a,b){if(!this.h)return null;a=new Gb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;U&&V()&&U.mark(b);return a}end(a){if(this.h&&"number"===typeof a.value){a.duration=(Fb()||Eb())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;U&&V()&&U.mark(b);!this.h||2048< 
this.g.length||this.g.push(a)}}};function Kb(){this.h=this.h;this.i=this.i}Kb.prototype.h=!1;function Lb(a){a.h||(a.h=!0,a.m())}Kb.prototype.m=function(){if(this.i)for(;this.i.length;)this.i.shift()()};class Mb{};let Ab;const W=new Jb;var Nb=()=>{window.google_measure_js_timing||(W.h=!1,W.g!=W.i.google_js_reporting_queue&&(V()&&y(W.g,Ib),W.g.length=0))};(a=>{Ab=a??new Cb;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());zb();"complete"==window.document.readyState?Nb():W.h&&P(window,"load",()=>{Nb()})})();var Ob=a=>{P(T,"message",b=>{let c;try{c=JSON.parse(b.data)}catch(d){return}!c||"ig"!==c.googMsgType||a(c,b)})};function X(a,b,c){Kb.call(this);this.o=a;this.C=b||0;this.s=c;this.v=p(this.A,this)}ca(X,Kb);X.prototype.g=0;X.prototype.m=function(){X.P.m.call(this);this.isActive()&&l.clearTimeout(this.g);this.g=0;delete this.o;delete this.s}; 
X.prototype.start=function(a){this.isActive()&&l.clearTimeout(this.g);this.g=0;var b=this.v;a=void 0!==a?a:this.C;if("function"!==typeof b)if(b&&"function"==typeof b.handleEvent)b=p(b.handleEvent,b);else throw Error("Invalid listener argument");this.g=2147483647<Number(a)?-1:l.setTimeout(b,a||0)};X.prototype.isActive=function(){return 0!=this.g};X.prototype.A=function(){this.g=0;this.o&&this.o.call(this.s)};const Pb={display:"inline-block",position:"absolute"},Qb={display:"none",width:"100%",height:"100%",top:"0",left:"0"},Y=(a,b)=>{a&&(a.style.display=b?"inline-block":"none")};function Rb(a=""){const b={top:0,right:0,bottom:0,left:0};a&&(a=a.split(","),4===a.length&&a.reduce((c,d)=>c&&!isNaN(+d),!0)&&([b.top,b.right,b.bottom,b.left]=a.map(c=>+c)));return b} 
function Sb(a,b,c=2147483647){const d=S.createElement("div");sb(d,{...Pb,"z-index":String(c),...b});J(a.data,10)&&P(d,"click",Oa);if(J(a.data,11)){a=b=S.createElement("a");c=qb();const f=eb(pb);f===Va&&c("#");c=f;if(c instanceof Q)var e=c;else if(c instanceof Q)e=c;else{c="object"==typeof c&&c.i?c.h():String(c);b:{try{e=new URL(c)}catch(g){e="https:";break b}e=e.protocol}"javascript:"===e&&(c="about:invalid#zClosurez");e=new Q(c,Ua)}a.href=e instanceof Q&&e.constructor===Q?e.g:"type_error:SafeUrl"; 
b.appendChild(d);return b}return d} 
function Tb(a,b){switch(N(b.l,5)){case 2:T.AFMA_Communicator?.addEventListener?.("onshow",()=>{Z(a,b)});break;case 10:P(T,"i-creative-view",()=>{Z(a,b)});break;case 4:P(S,"DOMContentLoaded",()=>{Z(a,b)});break;case 8:Ob(c=>{c.rr&&Z(a,b)});break;case 9:if("IntersectionObserver"in T){const c=new IntersectionObserver(d=>{for(const e of d)if(0<e.intersectionRatio){Z(a,b);break}});c.observe(S.body);a.M.push(c)}break;case 11:T.AFMA_Communicator?.addEventListener?.("onAdVisibilityChanged",()=>{Z(a,b)})}} 
function Ub(a,b){b=Rb(b);const c=K(a.data,9);a.m=[{width:"100%",height:b.top+c+"px",top:-c+"px",left:"0"},{width:b.right+c+"px",height:"100%",top:"0",right:-c+"px"},{width:"100%",height:b.bottom+c+"px",bottom:-c+"px",left:"0"},{width:b.left+c+"px",height:"100%",top:"0",left:-c+"px"}].map(d=>Sb(a,d,9019))} 
function Vb(a){var b=0;for(const d of a.L){const e=d.l,f=a.A[N(e,5)];d.u||void 0===f||(b=Math.max(b,f+K(e,2)))}a.o&&Lb(a.o);b-=Date.now();const c=a.h;0<b?(Y(c,!0),a.o=new X(()=>{Y(c,!1)},b),a.o.start()):Y(c,!1)}function Z(a,b){b.u||(a.A[N(b.l,5)]=Date.now(),J(b.l,9)&&(a.L.push(b),Vb(a)))} 
function Wb(a,b,c){if(!a.g||!a.v||300<=b.timeStamp-a.g.timeStamp)return!1;const d=new Map;y(a.v.changedTouches,e=>{d.set(e.identifier,{x:e.clientX,y:e.clientY})});b=K(c.l,11)||10;for(const e of a.g.changedTouches)if(a=d.get(e.identifier),!a||Math.abs(a.x-e.clientX)>b||Math.abs(a.y-e.clientY)>b)return!0;return!1} 
var Yb=class{constructor(){var a=Xb;this.m=[];this.o=this.h=null;this.L=[];this.data=null;this.C=[];this.i=[];this.s=[];this.A={};this.M=[];this.v=this.g=null;this.H="";this.I="true"===a["send-fccs"];this.H=a.qid||""}init(a){ob([a]);this.data=new Na(a);a=wa(this.data);y(za(a),f=>{this.s.push({D:0,u:!1,F:0,l:f,B:-1})});this.i=rb();let b=!1;a=this.i.length;for(let f=0;f<a;++f){var c=new xa(JSON.parse(this.i[f].getAttribute("data-ifc")||"[]"));y(za(c),g=>{this.s.push({D:0,u:!1,F:0,l:g,B:f});1===N(g, 
4)&&(b=!0)})}c=a=!1;let d=J(this.data,12);for(var e of this.s){const f=e.l;0<K(f,2)&&0<N(f,5)?(!this.h&&J(f,9)&&(this.h=Sb(this,Qb)),Tb(this,e)):L(f)&&J(f,9)&&Ub(this,L(f));L(f)&&(a=!0);0<K(f,11)&&(c=!0);J(f,12)&&(d=!0)}e=[];this.h&&e.push(this.h);!b&&e.push(...this.m);S.body&&tb(e);J(this.data,13)&&ib(()=>{const f=S.body.querySelectorAll(".amp-fcp, .amp-bcp");for(let h=0;h<f.length;++h){var g=(g=f[h])?T.getComputedStyle(g).getPropertyValue("position"):void 0;"absolute"===g&&Y(f[h],!1)}});P(S,"click", 
f=>{if(this.I){var g={cx:f.clientX,cy:f.clientY,et:Date.now(),qid:this.H};var h=Mb;var k="J";h.J&&h.hasOwnProperty(k)||(k=new h,h.J=k);h=[];!g.eid&&h.length&&(g.eid=h.toString());Bb(g);this.I=!1}if(!1===f.isTrusted&&J(this.data,15))f.preventDefault?f.preventDefault():f.returnValue=!1,f.stopImmediatePropagation(),nb();else{g=-1;h=[];for(var m of this.s){k=m.B;var n=-1!==k;if(!(K(m.l,3)<=g||m.u||n&&!1===h[k])){var q=!n||h[k]||this.i[k].contains(f.target);n&&q&&(h[k]=!0);if(k=q)if(k=f,q=m,n=q.l,0<K(n, 
2)&&0<N(n,5))k=this.A[N(n,5)],k=void 0!==k&&Date.now()<k+K(n,2);else if(L(n)){{n=(0<=q.B?this.i[q.B]:S.body).getBoundingClientRect();var r=Number;var F=(F=S.body)?T.getComputedStyle(F).getPropertyValue("zoom"):void 0;const M=r(F||"1"),[bc,cc]=[k.clientX,k.clientY],[fa,ha,Aa,Ba]=[bc/M-n.left,cc/M-n.top,n.width,n.height];if(!(0<Aa&&0<Ba)||isNaN(fa)||isNaN(ha)||0>fa||0>ha)k=!1;else{r=Rb(L(q.l));F=!(fa>=r.left&&Aa-fa>r.right&&ha>=r.top&&Ba-ha>r.bottom);q=J(q.l,12);if(this.g&&(J(this.data,12)||q)&&300> 
k.timeStamp-this.g.timeStamp){k=this.g.changedTouches[0];const [ia,ja]=[k.clientX/M-n.left,k.clientY/M-n.top];!isNaN(ia)&&!isNaN(ja)&&0<=ia&&0<=ja&&(F=(F=J(this.data,16)||q?F:!1)||!(ia>=r.left&&Aa-ia>r.right&&ja>=r.top&&Ba-ja>r.bottom))}k=F}}}else k=0<K(n,11)?Wb(this,k,q):!0;if(k){var G=m;g=K(m.l,3)}}}if(G)switch(m=G.l,N(m,4)){case 2:case 3:f.preventDefault?f.preventDefault():f.returnValue=!1;g=Date.now();500<g-G.F&&(G.F=g,++G.D);g=G.l;if(K(g,8)&&G.D>=K(g,8))if(G.u=!0,this.h&&0<K(g,2))Vb(this);else if(0< 
this.m.length&&L(g))for(var Ca of this.m)Y(Ca,!1);nb();Ca=m.toJSON();for(const M of this.C)M(f,Ca)}}},Qa);c&&P(S,"touchstart",f=>{this.v=f},Ra);(a&&d||c)&&P(S,"touchend",f=>{this.g=f},Ra)}registerCallback(a){this.C.push(a)}};const Zb=mb(document.currentScript);if(null==Zb)throw Error("JSC not found 23");var Xb;const $b={},ac=Zb.attributes;for(let a=ac.length-1;0<=a;a--){const b=ac[a].name;0===b.indexOf("data-jcp-")&&($b[b.substring(9)]=ac[a].value)}Xb=$b;const dc=window;dc.googqscp=new Yb;Xb["init-data"]&&dc.googqscp.init(JSON.parse(Xb["init-data"]));}).call(this);