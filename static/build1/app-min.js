/* eslint-disable object-shorthand */
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
      || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
  if(!Array.prototype.findIndex) {
    'use strict';

    Array.prototype.findIndex = Array.prototype.findIndex || function(callback) {
      if (this === null) {
        throw new TypeError('Array.prototype.findIndex called on null or undefined');
      } else if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
      }
      var list = Object(this);
      // Makes sures is always has an positive integer as length.
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      for (var i = 0; i < length; i++) {
        if ( callback.call(thisArg, list[i], i, list) ) {
          return i;
        }
      }
      return -1;
    };
  }
  if(!Array.prototype.findLastIndex) {
    'use strict';

    Array.prototype.findLastIndex = Array.prototype.findLastIndex || function(callback) {
      if (this === null) {
        throw new TypeError('Array.prototype.findIndex called on null or undefined');
      } else if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
      }
      var list = Object(this);
      // Makes sures is always has an positive integer as length.
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      for (var i = length - 1; i > 0; i--) {
        if ( callback.call(thisArg, list[i], i, list) ) {
          return i;
        }
      }
      return -1;
    };
  }
  if (!Math.trunc) {
    Math.trunc = function (v) {
        return v < 0 ? Math.ceil(v) : Math.floor(v);
    };
  }
  if (!Array.prototype.keys) {
    Array.prototype.keys = function() {
        var k, a = [], nextIndex = 0, ary = this;
        k = ary.length;
        while (k > 0) a[--k] = k;
        a.next = function(){
            return nextIndex < ary.length ?
                {value: nextIndex++, done: false} :
                {done: true};
        };
    return a;
    };
  }
 
  if (!Array.prototype.values) {
    Array.prototype.values = function() {
      var k, a = [], nextIndex = 0, ary = this;
      k = ary.length;
      while (k > 0) a[--k] = ary[k];
      a.next = function(){
          return nextIndex < ary.length ?
              {value: ary[nextIndex++], done: false} :
              {done: true};
      };
    return a;
    };
  }
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
      position = position || 0;
      return this.indexOf(searchString, position) === position;
    };
  }
  if (!Object.keys) {
    Object.keys = function(obj) {
      var keys = [];
  
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          keys.push(i);
        }
      }
  
      return keys;
    };
  }
  if (!Object.values) {
    Object.prototype.values = function(object) {
      var values = [];
      var keys = Object.keys(object);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        values.push(object[k]);
      }
      return values;
    }
  }
  if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function(str, newStr){
  
      // If a regex pattern
      if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
        return this.replace(str, newStr);
      }
  
      // If a string
      return this.replace(new RegExp(str, 'g'), newStr);
  
    };
  }
  if (!Math.hypot) 
  {
    Math.hypot = function () {
    var max = 0;
    var s = 0;
    var containsInfinity = false;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = Math.abs(Number(arguments[i]));
      if (arg === Infinity)
        containsInfinity = true
      if (arg > max) {
        s *= (max / arg) * (max / arg);
        max = arg;
      }
      s += arg === 0 && max === 0 ? 0 : (arg / max) * (arg / max);
    }
    return containsInfinity ? Infinity : (max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s));
    };
  }


  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== 'function') {
          throw TypeError('predicate must be a function');
        }

        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];

        // 5. Let k be 0.
        var k = 0;

        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          // e. Increase k by 1.
          k++;
        }

        // 7. Return undefined.
        return undefined;
      },
      configurable: true,
      writable: true
    });
  }
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict';

      if (search instanceof RegExp) {
        throw TypeError('first argument must not be a RegExp');
      }
      if (start === undefined) { start = 0; }
      return this.indexOf(search, start) !== -1;
    };
  }
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      enumerable: false,
      value: function (obj) {
        var newArr = this.filter(function (el) {
          return el === obj;
        });
        return newArr.length > 0;
      }
    });
  }
}());

/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function graphPluginAdvClass(_obj){var modelObj={x:0,y:0,width:1280,height:720,imageList:[],fontsize:16,lineWidth:1,minX:-10,minY:-10,maxX:10,maxY:10,unitsPerTick:5,XunitsPerTick:5,XunitsPerTickToFixed:0,YunitsPerTick:5,YunitsPerTickToFixed:0,unitsPerGrid:5,XunitsPerGrid:5,YunitsPerGrid:5,panX:!0,panY:!0,gridLightColor:"#cde6f1",gridDarkColor:"#98c8db",axisColor:"#000",numberFontSize:16,labelFontSize:18,tickSize:10,showQuadrants:"1234",graphCenter:"center",margin:0,topMargin:1,rightMargin:1,bottomMargin:1,leftMargin:1,gridMargin:[0,0,0,0],numbersMinX:null,numbersMaxX:null,numbersMinY:null,numbersMaxY:null,numTextFontSize:12,xLabelText:"X",xLabelTextOffsetX:15,xLabelTextOffsetY:11,yLabelText:"Y",yLabelTextOffsetX:15,yLabelTextOffsetY:18,lineThickness:1,lineColor:"#ff0000",pointColor:"#ff0000",borderColor:"rgba(73,124,190,1)",bgColor:"rgba(255,255,255,1)",borderThickness:1,majorThickness:1,cacheGraph:!0,showPointText:!0,showAxisLabels:!0,limitNumberDisplay:"true",visible:!0,pointRadius:5,pixelValuePerX:35,pixelValuePerY:35,alignXLine:"center",alignYLine:"center",regX:null,regY:null,clickable:!1,showGrid:!0,sections:{graph:{index:0,visible:!0,horizontalGrid:!0,verticalGrid:!0},axis:{index:1,visible:!0,origin:{visible:!0},xAxis:{visible:!0,ticks:!0,arrowHead:!0,numbers:!0,minPanInPixel:null,maxPanInPixel:null,restrictPadding:35,restrictToBoundry:!0,values:[]},yAxis:{visible:!0,ticks:!0,arrowHead:!0,numbers:!0,minPanInPixel:null,maxPanInPixel:null,restrictPadding:35,restrictToBoundry:!0,values:[]}},shape:{index:2,visible:!0},line:{index:3,visible:!0},point:{index:4,visible:!0}},minPanX:-1e7,maxPanX:1e7,minPanY:-1e7,maxPanY:1e7,decimalPoint:2,centerPoint:null},brainObj={},imgObj,resetObj,events={},localObj={},context,rangeX,rangeY,unitX,unitY,centerX,centerY,iteration,scaleX,scaleY,vertex_X,vertex_Y,xShift=0,yShift=0,trangleWidth=5,trangleHeight=10,graphCanvas=document.createElement("canvas"),graphContext=graphCanvas.getContext("2d");graphCanvas.style.position="absolute";var axisCanvas=document.createElement("canvas"),axisContext=axisCanvas.getContext("2d");axisCanvas.style.position="absolute";var lineCanvas=document.createElement("canvas"),lineContext=lineCanvas.getContext("2d");lineCanvas.style.position="absolute";var pointCanvas=document.createElement("canvas"),pointContext=pointCanvas.getContext("2d");pointCanvas.style.position="absolute";var shapeCanvas=document.createElement("canvas"),shapeContext=shapeCanvas.getContext("2d");shapeCanvas.style.position="absolute";var pointsArr=[],coeffObj,_counter=0,mouseDown=!1,_mouseDownPageX,_mouseDownPageY,renderGraph=!1,arrow1=!0,arrow2=!0,arrow3=!0,arrow4=!0,graphLineArr=[],graphPointArr=[],shapePointArr=[],_this=this,originalX,originalY,canvasImages;function setData(t,o){o&&"object"===_typeof(o)&&!Array.isArray(o)?Object.keys(o).forEach(function(e){t.hasOwnProperty(e)&&"object"===_typeof(o[e])&&!Array.isArray(o[e])?setData(t[e],o[e]):t[e]=o[e]}):t=o}function correctModelObj(){modelObj.minX=Number(modelObj.minX),modelObj.minY=Number(modelObj.minY),modelObj.maxX=Number(modelObj.maxX),modelObj.maxY=Number(modelObj.maxY),modelObj.numbersMinX=Number(modelObj.numbersMinX),modelObj.numbersMaxX=Number(modelObj.numbersMaxX),modelObj.numbersMinY=Number(modelObj.numbersMinY),modelObj.numbersMaxY=Number(modelObj.numbersMaxY),modelObj.xLabelTextOffsetX=Number(modelObj.xLabelTextOffsetX),modelObj.xLabelTextOffsetY=Number(modelObj.xLabelTextOffsetY),modelObj.yLabelTextOffsetX=Number(modelObj.yLabelTextOffsetX),modelObj.yLabelTextOffsetY=Number(modelObj.yLabelTextOffsetY)}function updateGraphPos(e,t,o,i){e=_this.getPixelByPoint(e,t),t=o,o=i,i=_this.getPixelByPoint(0,0),t=e.x-t,o=e.y-o;modelObj.regX=i.x-t-originalX,modelObj.regY=i.y-o-originalY,centerX=modelObj.regX,centerY=modelObj.regY}function updateValues(t){for(var o={},i=!1,e=arguments.length,n=new Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];n.forEach(function(e){t.hasOwnProperty(e)&&(o[e]=t[e],"x"!==e&&"y"!==e&&"width"!==e&&"height"!==e||(i=!0))}),setData(modelObj,o),i&&_this.init(),drawGraph()}function validateValues(e){checkPanRestrictions();var t={restrictions:{tickRange:{min:1e-9,max:1e6,toFixed:10},gridRange:{min:1e-9,max:1e6,toFixed:10}},property:{unitsPerTick:"tickRange",XunitsPerTick:"tickRange",YunitsPerTick:"tickRange",unitsPerGrid:"gridRange",XunitsPerGrid:"gridRange",YunitsPerGrid:"gridRange"}};Object.keys(t.property).forEach(function(e){modelObj[e]<t.restrictions[t.property[e]].min&&(modelObj[e]=t.restrictions[t.property[e]].min),modelObj[e]>t.restrictions[t.property[e]].max&&(modelObj[e]=t.restrictions[t.property[e]].max),0<=t.restrictions[t.property[e]].toFixed&&""!==modelObj[t.property[e]]&&(modelObj[e]=Number(Number(modelObj[e]).toFixed(t.restrictions[t.property[e]].toFixed)))}),updateZoomValues(e)}function updateZoomValues(e){if(rangeX=modelObj.maxX-modelObj.minX,rangeY=modelObj.maxY-modelObj.minY,unitX=modelObj.pixelValuePerX,unitY=modelObj.pixelValuePerY,""===modelObj.regX){switch(modelObj.alignXLine){case"left":modelObj.regX=modelObj.x+modelObj.leftMargin+unitX;break;case"right":modelObj.regX=modelObj.x+modelObj.width-modelObj.rightMargin-unitX;break;case"center":modelObj.regX=modelObj.x+modelObj.width/2;break;default:modelObj.regX=modelObj.x+modelObj.leftMargin+unitX}switch(modelObj.alignYLine){case"top":modelObj.regY=modelObj.y+modelObj.topMargin+unitY;break;case"bottom":modelObj.regY=modelObj.y+modelObj.height-modelObj.bottomMargin-unitY,"1"===modelObj.showQuadrants&&null!==modelObj.sections.axis.yAxis.maxPanInPixel&&(modelObj.regY=modelObj.height-modelObj.sections.axis.yAxis.maxPanInPixel);break;case"center":modelObj.regY=modelObj.y+modelObj.height/2;break;default:modelObj.regY=modelObj.y+modelObj.topMargin+unitY}}centerX=modelObj.regX,centerY=modelObj.regY,restrictAxisX(axisContext),void 0!==events.scaleUpdate&&events.scaleUpdate({type:"scaleUpdate"},!0),drawGraph()}function drawGraph(){graphContext.clearRect(0,0,modelObj.width,modelObj.height),axisContext.clearRect(0,0,modelObj.width,modelObj.height),lineContext.clearRect(0,0,modelObj.width,modelObj.height),pointContext.clearRect(0,0,modelObj.width,modelObj.height),shapeContext.clearRect(0,0,modelObj.width,modelObj.height),modelObj.maxY<0&&(centerY=-centerY),0<modelObj.minX&&(centerX=-centerX),iteration=(modelObj.maxX-modelObj.minX)/1e3,scaleX=(modelObj.width-2*modelObj.margin)/rangeX,scaleY=(modelObj.height-2*modelObj.margin)/rangeY,"2"===modelObj.showQuadrants&&(centerY+=modelObj.margin),"3"===modelObj.showQuadrants&&(centerX-=modelObj.margin,centerY+=modelObj.margin),"4"===modelObj.showQuadrants&&(centerX-=modelObj.margin),"center-left"===modelObj.graphCenter&&(centerX=modelObj.x+modelObj.leftMargin),"center-right"===modelObj.graphCenter&&(centerX=modelObj.x+modelObj.width-modelObj.rightMargin),"left-bottom"===modelObj.graphCenter&&(centerX=modelObj.x+modelObj.leftMargin,centerY=modelObj.height+modelObj.y-modelObj.bottomMargin),modelObj.cacheGraph?drawAllParts({graphContext:graphContext,axisContext:axisContext,lineContext:lineContext,pointContext:pointContext,shapeContext:shapeContext}):drawAllParts({graphContext:context,axisContext:context,lineContext:context,pointContext:context,shapeContext:context})}function drawAllParts(e){e.graphContext.save(),clipGraphRegion(e.graphContext),drawGridLines(e.graphContext),e.graphContext.restore(),axisContext.save(),clipGraphRegion(e.axisContext),"barchart"===modelObj.graphType&&drawBarChart(e.axisContext),"barchart-pyramid"===modelObj.graphType&&drawBarChartPyramid(e.axisContext),modelObj.sections.axis.yAxis.visible&&drawYAxis(e.axisContext),modelObj.sections.axis.xAxis.visible&&drawXAxis(e.axisContext),axisContext.restore(),_this.plotLineArr(e.lineContext),_this.plotPointArr(e.pointContext),_this.plotShapeArr(e.shapeContext)}function clipGraphRegion(e){e.beginPath(),e.rect(modelObj.x,modelObj.y,modelObj.width-1,modelObj.height),e.strokeStyle="transparent",e.lineWidth="1",e.stroke(),e.closePath(),e.clip()}function drawGraphBorder(e,t,o,i){context.save(),context.fillStyle=modelObj.bgColor,context.fillRect(e,t,o,i),context.beginPath(),context.lineWidth=modelObj.borderThickness,context.strokeStyle=modelObj.borderColor,context.rect(e,t,o-1,i),context.stroke(),context.closePath(),context.restore()}function drawEqTriangle(e,t,o,i,n){var r=t*(Math.sqrt(3)/2);e.strokeStyle="#000",e.save(),e.translate(o,i),e.beginPath(),0===n&&(e.moveTo(0,-r/2),e.lineTo(-t/2,r/2),e.lineTo(t/2,r/2),e.lineTo(0,-r/2)),1===n&&(e.moveTo(0,r/2),e.lineTo(-t/2,-r/2),e.lineTo(t/2,-r/2),e.lineTo(0,r/2)),2===n&&(e.moveTo(r/2,0),e.lineTo(-r/2,-t/2),e.lineTo(-r/2,t/2),e.lineTo(r/2,0)),3===n&&(e.moveTo(-r/2,0),e.lineTo(t/2,r/2),e.lineTo(t/2,-r/2),e.lineTo(-r/2,0)),e.stroke(),e.fill(),e.closePath(),e.restore()}function canvas_arrow(e,t,o,i,n){t=i-t,o=n-o,t=Math.atan2(o,t);e.moveTo(i,n),e.lineTo(i-.3*Math.cos(t-Math.PI/6),n-.3*Math.sin(t-Math.PI/6)),e.lineTo(i-.3*Math.cos(t+Math.PI/6),n-.3*Math.sin(t+Math.PI/6)),e.lineTo(i,n),e.fill()}function drawGridLines(e){var t,o,i=modelObj.XunitsPerGrid*unitX;modelObj.XunitsPerTick;e.font=modelObj.numberFontSize+"px "+modelObj.LabComClass.klettFontRegular,e.textAlign="center",e.textBaseline="top",e.strokeStyle=modelObj.gridLightColor,o=centerX-i,modelObj.XunitsPerGrid;var n=!0;if("1"===modelObj.showQuadrants&&(n=!1),modelObj.sections.graph.verticalGrid){if(n)for(t=0;o>modelObj.x+modelObj.gridMargin[0];)o<modelObj.x+modelObj.width-modelObj.gridMargin[1]&&(a=++t%(modelObj.XunitsPerTick/modelObj.XunitsPerGrid),e.beginPath(),e.moveTo(Math.round(o)+.5,Math.round(modelObj.y+modelObj.gridMargin[2])+.5),e.lineTo(Math.round(o)+.5,Math.round(modelObj.y+modelObj.height-modelObj.gridMargin[3])+.5),0===a?(e.lineWidth=modelObj.majorThickness,e.strokeStyle=modelObj.gridDarkColor):(e.lineWidth=1,e.strokeStyle=modelObj.gridLightColor),e.stroke(),e.closePath()),modelObj.XunitsPerGrid,o-=i;o=centerX,modelObj.XunitsPerGrid;var r=restrictAxisX(e);for(!0,t=0;o<modelObj.x+modelObj.width;){var a,l=!0;"1"===modelObj.showQuadrants&&o<r&&(l=!1),l&&(a=t%(modelObj.XunitsPerTick/modelObj.XunitsPerGrid),e.beginPath(),e.moveTo(Math.round(o)+.5,Math.round(modelObj.y+modelObj.gridMargin[2])+.5),"1"===modelObj.showQuadrants?(l=restrictAxisY(),modelObj.gridMargin[3]&&l>modelObj.y+modelObj.height-modelObj.gridMargin[3]&&(l=modelObj.y+modelObj.height-modelObj.gridMargin[3]),e.lineTo(Math.round(o)+.5,Math.round(l)+.5)):e.lineTo(Math.round(o)+.5,Math.round(modelObj.y+modelObj.height-modelObj.gridMargin[3])+.5),0===a?(e.lineWidth=modelObj.majorThickness,e.strokeStyle=modelObj.gridDarkColor):(e.lineWidth=1,e.strokeStyle=modelObj.gridLightColor),e.stroke(),e.closePath()),t++,modelObj.XunitsPerGrid,o+=i}}var d,s=modelObj.YunitsPerGrid*unitY;e.font=modelObj.numberFontSize+"px "+modelObj.LabComClass.klettFontRegular,e.textAlign="right",e.textBaseline="middle",e.strokeStyle=modelObj.gridLightColor,d=centerY,modelObj.YunitsPerGrid;var m=modelObj.x+modelObj.gridMargin[0],b=modelObj.x+modelObj.width-modelObj.gridMargin[1];"1"===modelObj.showQuadrants&&(m=restrictAxisX(e));var h=restrictAxisY();if(modelObj.sections.graph.horizontalGrid){for(t=0;d>modelObj.y+modelObj.gridMargin[2];){a=t%(modelObj.YunitsPerTick/modelObj.YunitsPerGrid),t++;var O=!0;"1"===modelObj.showQuadrants&&h<d&&(O=!1),O&&d<modelObj.height+modelObj.y-modelObj.gridMargin[3]&&(e.beginPath(),e.moveTo(Math.round(m)+.5,Math.round(d)+.5),e.lineTo(Math.round(b)+.5,Math.round(d)+.5),0===a?(e.lineWidth=modelObj.majorThickness,e.strokeStyle=modelObj.gridDarkColor):(e.lineWidth=1,e.strokeStyle=modelObj.gridLightColor),e.stroke(),e.closePath()),modelObj.YunitsPerGrid,d-=s}d=centerY+s,modelObj.YunitsPerGrid;n=!0;if("1"===modelObj.showQuadrants&&(n=!1),n)for(t=0;d<modelObj.height+modelObj.y-modelObj.gridMargin[3];)d>modelObj.y+modelObj.gridMargin[2]&&(a=++t%(modelObj.YunitsPerTick/modelObj.YunitsPerGrid),e.beginPath(),e.moveTo(Math.round(modelObj.x+modelObj.gridMargin[0])+.5,Math.round(d)+.5),e.lineTo(Math.round(modelObj.x+modelObj.width-modelObj.gridMargin[1])+.5,Math.round(d)+.5),0===a?(e.lineWidth=modelObj.majorThickness,e.strokeStyle=modelObj.gridDarkColor):(e.lineWidth=1,e.strokeStyle=modelObj.gridLightColor),e.stroke(),e.closePath()),modelObj.YunitsPerGrid,d+=s}}function drawBar(e,t,o,i,n,r){""===r&&(r="#000000"),e.save(),e.fillStyle=r,e.fillRect(t,o,i,n),e.restore()}function drawBarChart(e){for(var t=0,o=0;o<modelObj.bardata.length;o++){for(var i=modelObj.barSize,n=modelObj.bardata[o].value,r=modelObj.bardata[o].color,a=0,l=0,d=0;d<n.length;d++){var s=Number(n[d])*unitY,m=r[d],b=centerX+modelObj.barChartPadding+modelObj.barChartLeftMargin+t*(modelObj.barSize+modelObj.barsGapWidth)+d*modelObj.barSize,h=centerY-s-modelObj.barChartPadding;0===d&&(a=b),l+=modelObj.barSize,drawBar(e,b,h,i,s,m)}e.fillStyle="#000000",e.textAlign="center",e.font=modelObj.barLabelFontSize+"px "+modelObj.LabComClass.klettFontRegular;var O=a+l/2;e.fillText(modelObj.LabComClass.globalLangText[modelObj.bardata[o].name],O,centerY+15),t++}}function drawBarChartPyramid(e){for(var t=0,o=0;o<modelObj.bardata.length;o++){var i=centerX+modelObj.shiftCenterX*unitX,n=centerY-5*t*unitY,r=modelObj.bardata[o].value[0]*unitX,a=4*unitY;drawBar(e,i,n-=4*unitY,r,a,"#00aeef"),drawBar(e,i,n,modelObj.bardata[o].value[1]*unitX,4*unitY,"#fb7e83"),t++}}function drawAxisLabels(e){var t,o;modelObj.showAxisLabels&&(e.textAlign="left",modelObj.y,void 0!==modelObj.LabComClass.globalLangText[modelObj.yLabelText]&&(t=centerX+modelObj.yLabelTextOffsetX,o=modelObj.y+modelObj.height/2+modelObj.yLabelTextOffsetY,e.save(),e.translate(t,o),e.rotate(0*Math.PI/180),e.drawStyledText(modelObj.LabComClass.globalLangText[modelObj.yLabelText],0,0,modelObj.font,modelObj.labelFontSize),e.restore()))}function restrictAxisY(){var e=modelObj.sections.axis.yAxis.restrictPadding,t=centerY;return modelObj.sections.axis.yAxis.restrictToBoundry&&(centerY<e?t=e:centerY>=modelObj.height-e&&(t=modelObj.height-e)),t}function restrictAxisX(e){var t=modelObj.sections.axis.xAxis.restrictPadding,o=centerX;modelObj.sections.axis.xAxis.restrictToBoundry&&(centerX<t?o=t:centerX>modelObj.width-t&&(o=modelObj.width-t));var i=_this.getPointByPixel(originalX,originalY).y.toFixed(modelObj.YunitsPerTickToFixed),t=_this.getPointByPixel(originalX,originalY+modelObj.height).y.toFixed(modelObj.YunitsPerTickToFixed);e.save(),e.font=modelObj.numberFontSize+"px "+modelObj.LabComClass.klettFontRegular;i=e.measureText(i).width,t=e.measureText(t).width,t=t<i?i:t;return o<(t+=14)?o=t:"1"===modelObj.showQuadrants&&modelObj.regX>t&&(o=t,modelObj.regX=o,centerX=o),e.restore(),o}function drawXAxis(e){arrow3=arrow1=!1;var t=restrictAxisY(),o=restrictAxisX(e);"1"!==modelObj.showQuadrants&&"2"!==modelObj.showQuadrants&&"12"!==modelObj.showQuadrants&&"23"!==modelObj.showQuadrants&&"41"!==modelObj.showQuadrants&&"1234"!==modelObj.showQuadrants||(e.beginPath(),e.moveTo(Math.round(o)+.5,Math.round(t)+.5),e.lineTo(Math.round(modelObj.x+modelObj.width-modelObj.rightMargin-trangleWidth/2)+.5,Math.round(t)+.5),e.strokeStyle=modelObj.axisColor,e.lineWidth=1,e.stroke(),e.closePath(),arrow1=!0),"3"!==modelObj.showQuadrants&&"4"!==modelObj.showQuadrants&&"23"!==modelObj.showQuadrants&&"34"!==modelObj.showQuadrants&&"41"!==modelObj.showQuadrants&&"1234"!==modelObj.showQuadrants||(e.beginPath(),e.moveTo(Math.round(o)+.5,Math.round(t)+.5),e.lineTo(Math.round(modelObj.x+modelObj.leftMargin)+.5,Math.round(t)+.5),e.strokeStyle=modelObj.axisColor,e.lineWidth=1,e.stroke(),e.closePath(),arrow3=!0),(modelObj.sections.axis.xAxis.ticks||modelObj.sections.axis.xAxis.numbers)&&(n=modelObj.XunitsPerTick*unitX,e.font=modelObj.numberFontSize+"px "+modelObj.LabComClass.klettFontRegular,e.textAlign="center",e.textBaseline="top",o=centerX,arrow3&&drawTicksX({ctx:e,type:1,min:modelObj.x+modelObj.leftMargin+trangleHeight,start:o,max:modelObj.x+modelObj.width-trangleHeight,incrDecrFactor:-n,y:t}),o=centerX,i=modelObj.x+modelObj.leftMargin+trangleHeight,"1"===modelObj.showQuadrants&&(i=modelObj.x+modelObj.leftMargin),arrow1&&drawTicksX({ctx:e,type:2,min:modelObj.x+modelObj.width-modelObj.rightMargin-trangleHeight,start:o,max:i,incrDecrFactor:n,y:t})),modelObj.sections.axis.xAxis.arrowHead&&(arrow1&&centerX<modelObj.x+modelObj.width-modelObj.rightMargin-trangleHeight&&drawEqTriangle(e,trangleHeight,Math.round(modelObj.x+modelObj.width-modelObj.rightMargin-trangleWidth)+.5,Math.round(t)+.5,2),arrow3&&(modelObj.x,modelObj.leftMargin));var i=modelObj.x+modelObj.width-modelObj.rightMargin,n=centerY;"center-right"===modelObj.graphCenter&&(i=modelObj.x),t<n&&(n=t),modelObj.showAxisLabels&&(e.textAlign="left",void 0!==modelObj.LabComClass.globalLangText[modelObj.xLabelText]&&(t=n-modelObj.xLabelTextOffsetY,modelObj.y+modelObj.labelFontSize+modelObj.xLabelTextOffsetY>=n-modelObj.xLabelTextOffsetY&&(t=modelObj.y+modelObj.labelFontSize+modelObj.xLabelTextOffsetY),e.drawStyledText(modelObj.LabComClass.globalLangText[modelObj.xLabelText],i-modelObj.xLabelTextOffsetX,t,modelObj.LabComClass.klettFontRegular,modelObj.labelFontSize)))}function drawTicksX(e){for(var t,o,i,n=e.start,r=e.y,a=e.ctx,l=Number(_this.getPointByPixel(n+originalX,r).x.toFixed(2)),d=restrictAxisX(a);1===e.type?n>e.min:n<e.min;)(1===e.type?n<e.max:n>e.max)&&(i=!0,"1"===modelObj.showQuadrants&&n<d&&(i=!1),i&&(modelObj.sections.axis.xAxis.ticks&&0!==l&&(a.beginPath(),a.moveTo(Math.round(n),Math.round(r-modelObj.tickSize/2)),a.lineTo(Math.round(n),Math.round(r+modelObj.tickSize/2)),a.stroke(),a.closePath()),t=l.toString(),modelObj.sections.axis.xAxis.postTxt&&modelObj.LabComClass.globalLangText[modelObj.sections.axis.xAxis.postTxt]&&(t+=modelObj.LabComClass.globalLangText[modelObj.sections.axis.xAxis.postTxt]),modelObj.sections.axis.xAxis.numbers&&(0===l?0<e.incrDecrFactor&&modelObj.sections.axis.origin.visible&&(o=Math.round(n-modelObj.tickSize/2-3),i=Math.round(centerY+modelObj.tickSize/2),modelObj.sections.axis.yAxis.visible||(o=Math.round(n),i=Math.round(centerY+modelObj.tickSize/2+3)),a.fillText("O",o,i)):a.fillText(t,Math.round(n),Math.round(r+modelObj.tickSize/2+modelObj.numberFontSize/2))))),n+=e.incrDecrFactor,l=Number(_this.getPointByPixel(n+originalX,r).x.toFixed(modelObj.XunitsPerTickToFixed))}function drawTicksY(e){for(var t,o=e.start,i=restrictAxisY(),n=e.x,r=e.ctx,a=Number(_this.getPointByPixel(n,o+originalY).y.toFixed(2));1===e.type?o>e.min:o<e.min;)_counter++,(1===e.type?o<e.max:o>e.max)&&(t=!0,modelObj.numbersMaxY&&a>modelObj.numbersMaxY&&(t=!1),"1"===modelObj.showQuadrants&&i<o&&(t=!1),t&&(modelObj.sections.axis.yAxis.ticks&&(r.beginPath(),r.moveTo(Math.round(n-modelObj.tickSize/2)+.5,Math.round(o)+.5),r.lineTo(Math.round(n+modelObj.tickSize/2)+.5,Math.round(o)+.5),r.stroke(),r.closePath()),modelObj.sections.axis.yAxis.numbers&&(r.fillStyle=modelObj.axisColor,r.fillText(a,n-modelObj.tickSize/2-modelObj.numberFontSize/2,o)))),o+=e.incrDecrFactor,a=Number(_this.getPointByPixel(n,o+originalY).y.toFixed(modelObj.YunitsPerTickToFixed))}function drawYAxis(e){arrow2=arrow4=!1;var t=restrictAxisX(e),o=restrictAxisY(e);"1"!==modelObj.showQuadrants&&"4"!==modelObj.showQuadrants&&"12"!==modelObj.showQuadrants&&"34"!==modelObj.showQuadrants&&"41"!==modelObj.showQuadrants&&"1234"!==modelObj.showQuadrants||(e.beginPath(),e.moveTo(Math.round(t)+.5,Math.round(modelObj.y+modelObj.topMargin+trangleHeight/2)+.5),e.lineTo(Math.round(t)+.5,Math.round(o)+.5),e.strokeStyle=modelObj.axisColor,e.lineWidth=1,e.stroke(),e.closePath(),arrow4=!0),"2"!==modelObj.showQuadrants&&"3"!==modelObj.showQuadrants&&"12"!==modelObj.showQuadrants&&"23"!==modelObj.showQuadrants&&"34"!==modelObj.showQuadrants&&"1234"!==modelObj.showQuadrants||(e.beginPath(),e.moveTo(Math.round(t)+.5,Math.round(o)+.5),e.lineTo(Math.round(t)+.5,Math.round(modelObj.y+modelObj.height-modelObj.bottomMargin)+.5),e.strokeStyle=modelObj.axisColor,e.lineWidth=1,e.stroke(),e.closePath(),arrow2=!0),(modelObj.sections.axis.yAxis.ticks||modelObj.sections.axis.yAxis.numbers)&&(n=modelObj.YunitsPerTick*unitY,e.font=modelObj.numberFontSize+"px "+modelObj.LabComClass.klettFontRegular,e.textAlign="right",e.textBaseline="middle",i=centerY-n,modelObj.YunitsPerTick,arrow4&&drawTicksY({ctx:e,type:1,min:modelObj.y+modelObj.topMargin+trangleHeight,start:i,max:modelObj.y+modelObj.height-modelObj.bottomMargin-trangleHeight,incrDecrFactor:-n,x:t}),i=centerY+n,modelObj.YunitsPerTick,arrow2&&drawTicksY({ctx:e,type:2,min:modelObj.y+modelObj.height-modelObj.bottomMargin-trangleHeight,start:i,max:modelObj.y+modelObj.topMargin+trangleHeight,incrDecrFactor:n,x:t})),modelObj.sections.axis.yAxis.arrowHead&&(arrow4&&centerY>modelObj.y+modelObj.topMargin+trangleHeight&&drawEqTriangle(e,trangleHeight,Math.round(t)+.5,Math.round(modelObj.y+modelObj.topMargin+trangleWidth)+.5,0),arrow2&&(modelObj.y,modelObj.height,modelObj.bottomMargin));var i=centerX,n=modelObj.y+modelObj.topMargin;"center-right"===modelObj.graphCenter&&(i=centerX),i<t&&(i=t),modelObj.showAxisLabels&&(e.textAlign="left",void 0!==modelObj.LabComClass.globalLangText[modelObj.yLabelText]&&(t=i+modelObj.yLabelTextOffsetX,modelObj.width-modelObj.labelFontSize-2*modelObj.yLabelTextOffsetX<i-modelObj.yLabelTextOffsetX&&(t=modelObj.width-2*modelObj.labelFontSize-2*modelObj.yLabelTextOffsetX),e.drawStyledText(modelObj.LabComClass.globalLangText[modelObj.yLabelText],t,n+modelObj.yLabelTextOffsetY,modelObj.LabComClass.klettFontRegular,modelObj.labelFontSize)))}function generateShapeString(e){for(var t="",o=0;o<e.length;o++){var i="";"object"===_typeof(e[o])?void 0!==e[o].val&&void 0!==e[o].axis&&(i="x"===e[o].axis?_this.getPixelByPoint(e[o].val,0).x:_this.getPixelByPoint(0,e[o].val).y):i=e[o],t+=i}return t}function plotEquation(e,t,o){var i=e(modelObj.minX);context.moveTo(modelObj.minX,i);for(var n=[],r=modelObj.minX+iteration;r<=modelObj.maxX;r+=iteration)i=e(r),n.push({x:r,y:i}),context.lineTo(r,i)}function transformContext(e){e.translate(centerX,centerY),e.scale(scaleX,-scaleY)}function onImageLoaded(e){imgObj=e,onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:modelObj.id}})}function addEvents(){var e;removeEvents(),modelObj.visible&&((e={}).id=modelObj.id,e.r=[],(modelObj.panX||modelObj.panY||modelObj.clickable)&&e.r.push({id:"graphCnv",rect:{x:originalX,y:originalY,w:modelObj.width,h:modelObj.height},cursor:modelObj.clickable?"pointer":"grab",downCursor:modelObj.clickable?"pointer":"grabbing",eventListener:mouseHandle.bind(this)}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:e}))}function removeEvents(){onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:modelObj.id}})}setData(modelObj,_obj),modelObj.animClass=new modelObj.LabComClass.GlobalAnimClass,0<modelObj.imageList.length?modelObj.LabComClass.requestLocalImage(modelObj.imageList,onImageLoaded):onImageLoaded({}),this.init=function(){correctModelObj(),originalX=modelObj.x,originalY=modelObj.y,modelObj.cacheGraph&&(modelObj.x=0,modelObj.y=0),context=modelObj.context,graphCanvas.width=modelObj.width,graphCanvas.height=modelObj.height,axisCanvas.width=modelObj.width,axisCanvas.height=modelObj.height,lineCanvas.width=modelObj.width,lineCanvas.height=modelObj.height,pointCanvas.width=modelObj.width,pointCanvas.height=modelObj.height,shapeCanvas.width=modelObj.width,shapeCanvas.height=modelObj.height,canvasImages=[{img:graphCanvas,sectionId:"graph",changeImageSmoothing:!1},{img:axisCanvas,sectionId:"axis",changeImageSmoothing:!1},{img:lineCanvas,sectionId:"line",changeImageSmoothing:!1},{img:pointCanvas,sectionId:"point",changeImageSmoothing:!1},{img:shapeCanvas,sectionId:"shape",changeImageSmoothing:!1}],updateZoomValues(),addEvents()},this.getGraphMinMax=function(){var e=_this.getPointByPixel(originalX,originalY),t=_this.getPointByPixel(originalX+modelObj.width,originalY+modelObj.height),o=_this.getPointByPixel(originalX+modelObj.width/2,originalY+modelObj.height/2);return{min:{x:e.x,y:e.y},max:{x:t.x,y:t.y},center:{x:o.x,y:o.y},unit:{x:modelObj.unitsPerTick,pxValX:modelObj.pixelValuePerX,pxValY:modelObj.pixelValuePerX}}},this.getScreenData=function(){var e={x:originalX,y:originalY,width:modelObj.width,height:modelObj.height,screen:{x:originalX,y:originalY,w:modelObj.width,h:modelObj.height},originX:_this.getPixelByPoint(0,0).x,originY:_this.getPixelByPoint(0,0).y,centerX:centerX,centerY:centerY,unitX:unitX,unitY:unitY,XunitsPerGrid:modelObj.XunitsPerGrid,YunitsPerGrid:modelObj.YunitsPerGrid,showQuadrants:modelObj.showQuadrants};return"1"===modelObj.showQuadrants&&(e.x=originalX+restrictAxisX(axisContext),e.width=modelObj.width-(e.x-originalX),e.height=restrictAxisY()),e},this.getPointByPixel=function(e,t){return{x:(e-originalX-centerX)/unitX,y:-1*(t-originalY-centerY)/unitY}},this.getPixelByPoint=function(e,t){return{x:e*unitX+centerX+originalX,y:t*unitY/-1+centerY+originalY}},this.setPointToScreenCenter=function(e,t){updateGraphPos(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:640,3<arguments.length&&void 0!==arguments[3]?arguments[3]:360),validateValues()},this.getPointUnitByPixelUnit=function(e){return e/unitX},this.getPixelUnitByPointUnit=function(e){return e*unitX},this.graphLines=function(e){void 0!==e.axis&&(modelObj.sections.axis.visible=e.axis),void 0!==e.grid&&(modelObj.sections.graph.visible=e.grid)},this.setZoom=function(e){"zoomReset"===e.value&&_this.setParams({regX:"",regY:""});e=e.data;modelObj.pixelValuePerX=e.pixelQube,modelObj.pixelValuePerY=e.pixelQube,modelObj.unitsPerTick=modelObj.XunitsPerTick=modelObj.YunitsPerTick=e.tick,modelObj.XunitsPerTickToFixed=e.toFixed,modelObj.YunitsPerTickToFixed=e.toFixed,modelObj.unitsPerGrid=modelObj.unitsPerTick/5,modelObj.XunitsPerGrid=modelObj.XunitsPerTick/5,modelObj.YunitsPerGrid=modelObj.YunitsPerTick/5,validateValues(!0)},this.setParams=function(e){updateValues.apply(void 0,[e].concat(["x","y","width","height","unitsPerTick","XunitsPerTick","YunitsPerTick","unitsPerGrid","XunitsPerGrid","YunitsPerGrid","panX","panY","pixelValuePerX","pixelValuePerY","regX","regY","clickable","sections","minPanX","maxPanX","minPanY","maxPanY","decimalPoint"])),validateValues(!1)},this.updateBarChart=function(e){for(var t=0;t<e.length;t++)modelObj.bardata[t].value=e[t].value;drawGraph()},this.enablePan=function(e){e?(modelObj.panX=!0,modelObj.panY=!0):(modelObj.panX=!1,modelObj.panY=!1),addEvents()},this.addEventListener=function(e,t){events[e]=t},this.updateRender=function(t){t&&Object.keys(t).forEach(function(e){brainObj[e]=t[e]}),onActValueUpdate()},this.updateGraph=function(){drawGraph()},this.resetLab=function(){},this.draw=function(){if(modelObj.visible){if(context.save(),modelObj.cacheGraph){drawGraphBorder(originalX,originalY,modelObj.width,modelObj.height);for(var e=0;e<canvasImages.length;e++)for(var t=0;t<canvasImages.length;t++)modelObj.sections[canvasImages[t].sectionId].index===e&&modelObj.sections[canvasImages[t].sectionId].visible&&(context.save(),context.beginPath(),canvasImages[t].changeImageSmoothing&&(context.imageSmoothingEnabled=!1,context.mozImageSmoothingEnabled=!1,context.webkitImageSmoothingEnabled=!1,context.msImageSmoothingEnabled=!1),context.drawImage(canvasImages[t].img,originalX,originalY),context.closePath(),context.restore())}else drawGraphBorder(modelObj.x,modelObj.y,modelObj.width,modelObj.height),drawGraph();context.restore()}},this.show=function(){modelObj.visible=!0,addEvents()},this.hide=function(){modelObj.visible=!1,addEvents()},this.getVisible=function(){return modelObj.visible},this.getTotalPoints=function(){return pointsArr.length},this.updateGraphRange=function(){xShift+=.1,yShift+=.1,modelObj.minX+=xShift,modelObj.maxX+=xShift},this.drawCustomGraph=function(){centerY=Math.round(Math.abs(modelObj.maxY/rangeY)*modelObj.height),centerX=Math.round(Math.abs(modelObj.minX/rangeX)*modelObj.width),modelObj.maxY<0&&(centerY=-centerY),0<modelObj.minX&&(centerX=-centerX),centerX+=modelObj.x,centerY+=modelObj.y,iteration=(modelObj.maxX-modelObj.minX)/1e3,scaleX=modelObj.width/rangeX,scaleY=modelObj.height/rangeY,drawGridLines(),modelObj.minX<=0&&0<=modelObj.maxX&&drawYAxis(),0<=modelObj.maxY&&modelObj.minY<=0&&drawXAxis(),context.save(),context.rect(modelObj.x+5,modelObj.y+3,modelObj.width-8,modelObj.height-10),context.strokeStyle="transparent",context.stroke(),context.clip();for(var e=0;e<pointsArr.length;e++)this.plotPoint(pointsArr[e].x,pointsArr[e].y,pointsArr[e].color,pointsArr[e].type,!0);context.restore()},this.updateLineArr=function(e){lineCanvas.width=lineCanvas.width,graphLineArr=e,modelObj.cacheGraph&&drawGraph()},this.updatePointsArr=function(e){pointCanvas.width=pointCanvas.width,graphPointArr=e,modelObj.cacheGraph&&drawGraph(),addEvents()},this.updateShapesArr=function(e){shapeCanvas.width=shapeCanvas.width,shapePointArr=e,modelObj.cacheGraph&&drawGraph(),addEvents()},this.plotPointArr=function(e){if(0===graphPointArr.length)return!1;for(var t=0;t<graphPointArr.length;t++)for(var o=0;o<graphPointArr[t].length;o++)_this.plotPoint(e,graphPointArr[t][o].x,graphPointArr[t][o].y,graphPointArr[t][o].color,"",!0);return!0},this.plotShapeArr=function(ctx){if(0===shapePointArr.length)return!1;for(var i=0;i<shapePointArr.length;i++){ctx.beginPath();for(var j=0;j<shapePointArr[i].length;j++)eval("ctx."+generateShapeString(shapePointArr[i][j]));ctx.closePath()}return!0},this.plotLineArr=function(e){if(0===graphLineArr.length)return!1;for(var t=0;t<graphLineArr.length;t++)if(1<graphLineArr[t].length){e.save();for(var o=1;o<graphLineArr[t].length;o++){var i=centerX+graphLineArr[t][o-1].x*unitX,n=centerY-graphLineArr[t][o-1].y*unitY,r=centerX+graphLineArr[t][o].x*unitX,a=centerY-graphLineArr[t][o].y*unitY;e.save(),e.beginPath(),e.moveTo(i,n),e.lineTo(r,a),e.restore(),"dash"===graphLineArr[t][o].stroke?e.setLineDash([5,15]):e.setLineDash([0,0]),e.strokeStyle=graphLineArr[t][0].color,e.closePath(),e.stroke()}e.restore()}return!0},this.resetParams=function(){pointsArr=[],coeffObj=null},this.updateGraphParams=function(e){Object.keys(_obj).forEach(function(e){modelObj[e]=_obj[e]}),correctModelObj()},this.changeGraphScale=function(e){e<10&&(modelObj.minX=-10,modelObj.maxX=10,modelObj.minY=-10,modelObj.maxY=10,modelObj.unitsPerTick=1,modelObj.unitsPerGrid=modelObj.unitsPerTick/2,this.updateRender()),10<=e&&e<=25&&(modelObj.minX=-25,modelObj.maxX=25,modelObj.minY=-25,modelObj.maxY=25,modelObj.unitsPerTick=5,modelObj.unitsPerGrid=modelObj.unitsPerTick/2,this.updateRender()),25<=e&&e<=50&&(modelObj.minX=-50,modelObj.maxX=50,modelObj.minY=-50,modelObj.maxY=50,modelObj.unitsPerTick=10,modelObj.unitsPerGrid=modelObj.unitsPerTick/2,this.updateRender()),50<=e&&e<=100&&(modelObj.minX=-100,modelObj.maxX=100,modelObj.minY=-100,modelObj.maxY=100,modelObj.unitsPerTick=10,modelObj.unitsPerGrid=modelObj.unitsPerTick/2,this.updateRender())},this.getVertex=function(e){return[vertex_X,vertex_Y]},this.getXintercept=function(e){if(e){var t=(-e.b+Math.sqrt(e.b*e.b-4*e.a*e.c))/(2*e.a),e=(-e.b-Math.sqrt(e.b*e.b-4*e.a*e.c))/(2*e.a),t=t.toFixed(2),e=e.toFixed(2);return[t=Number(t),e=Number(e)]}return!0},this.addPoint=function(e,t,o,i){for(var n=!1,r=0;r<pointsArr.length;r++)pointsArr[r].x===e&&pointsArr[r].y===t&&pointsArr[r].color===o&&(n=!0);n||(pointsArr.push({x:e,y:t,color:o,type:i}),this.updateRender())},this.plotPoint=function(e,t,o,i,n,r){e.save(),t=Number(t),o=Number(o),e.beginPath();var a=_this.getPixelByPoint(t,o);a.x-=originalX,a.y-=originalY;var l=a.x>modelObj.x&&a.x<modelObj.x+modelObj.width,d=a.y>modelObj.y&&a.y<modelObj.y+modelObj.height;l&&d&&(e.arc(a.x,a.y,modelObj.pointRadius,0,2*Math.PI,!1),e.fillStyle=i,e.fill(),e.font=modelObj.numberFontSize+"px "+modelObj.LabComClass.klettFontRegular,r&&(d="( "+(0===Number(t.toFixed(modelObj.decimalPoint))?0:Number(t.toFixed(modelObj.decimalPoint)))+", "+(0===Number(o.toFixed(modelObj.decimalPoint))?0:Number(o.toFixed(modelObj.decimalPoint)))+" )",r=e.measureText(d).width,a.x+=10,0!==t&&(a.x-=r/2+12),0===t&&(a.y+=10),(0===o||0<o)&&(a.y-=15),o<0&&0!==t&&(a.y+=20),modelObj.showPointText&&(e.beginPath(),e.fillStyle="rgba(255,255,255,1)",e.rect(a.x-5,a.y-(modelObj.fontsize-2),r+10,modelObj.fontsize+3),e.fill(),e.closePath(),e.fillStyle=i,e.fillText(d,a.x,a.y)))),e.closePath(),e.restore()},this.setPanValues=function(e){modelObj.panX&&(modelObj.regX+=e.x),modelObj.panY&&(modelObj.regY+=e.y),checkPanRestrictions()};var mouseDownAt={};function mouseHandle(e){switch(e.type){case"mousedown":mouseDown=!0,_mouseDownPageX=e.pageX,_mouseDownPageY=e.pageY,mouseDownAt.x=e.pageX,mouseDownAt.y=e.pageY,mouseDownAt.mousemove=!1;break;case"pressmove":mouseDown&&((modelObj.panX||modelObj.panY)&&changeGraphRange(e),e.pageX===mouseDownAt.x&&e.pageY===mouseDownAt.y||(mouseDownAt.mousemove=!0));break;case"mouseup":case"mouseupout":mouseDown=!1,addEvents(),modelObj.clickable&&mouseDownAt&&void 0!==events.mouseDown&&modelObj.visible&&events.mouseDown({type:"mouseDown",x:mouseDownAt.x,y:mouseDownAt.y,mousemove:mouseDownAt.mousemove,val:_this.getPointByPixel(mouseDownAt.x,mouseDownAt.y)},!0)}}function changeGraphRange(e){var t;modelObj.panX&&(t=e.pageX-_mouseDownPageX,modelObj.regX+=t),modelObj.panY&&(t=e.pageY-_mouseDownPageY,modelObj.regY+=t),_mouseDownPageX=e.pageX,_mouseDownPageY=e.pageY,checkPanRestrictions()}function checkPanRestrictions(){var e,t;modelObj.panX&&(e=-1*modelObj.minPanX*unitX,null!==modelObj.sections.axis.xAxis.minPanInPixel&&(e=modelObj.sections.axis.xAxis.minPanInPixel),t=modelObj.width-modelObj.maxPanX*unitX,null!==modelObj.sections.axis.xAxis.maxPanInPixel&&(t=modelObj.sections.axis.xAxis.maxPanInPixel),modelObj.regX>e&&(modelObj.regX=e),modelObj.regX<t&&(modelObj.regX=t)),modelObj.panY&&(e=-1*modelObj.minPanY*unitY,null!==modelObj.sections.axis.yAxis.minPanInPixel&&(e=modelObj.sections.axis.yAxis.minPanInPixel),t=modelObj.height-modelObj.maxPanY*unitY,null!==modelObj.sections.axis.yAxis.maxPanInPixel&&(t=modelObj.height-modelObj.sections.axis.yAxis.maxPanInPixel),modelObj.regY>e&&(modelObj.regY=e),modelObj.regY<t&&(modelObj.regY=t)),updateZoomValues()}function onActValueUpdate(){void 0!==events.change&&events.change({type:"change"},!0)}this.init()}
/*! howler.js v2.0.4 | (c) 2013-2017, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.mobileAutoEnable=!0,e._setup(),e},volume:function(e){var o=this||n;if(e=parseFloat(e),o.ctx||_(),void 0!==e&&e>=0&&e<=1){if(o._volume=e,o._muted)return o;o.usingWebAudio&&(o.masterGain.gain.value=e);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return o}return o._volume},mute:function(e){var o=this||n;o.ctx||_(),o._muted=e,o.usingWebAudio&&(o.masterGain.gain.value=e?0:o._volume);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}return o},unload:function(){for(var e=this||n,o=e._howls.length-1;o>=0;o--)e._howls[o].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,_()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx?e.ctx.state||"running":"running",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var o=new Audio;void 0===o.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var o=new Audio;o.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,o=null;try{o="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!o||"function"!=typeof o.canPlayType)return e;var t=o.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),a=r&&parseInt(r[0].split("/")[1],10)<33;return e._codecs={mp3:!(a||!t&&!o.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_enableMobileAudio:function(){var e=this||n,o=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator&&e._navigator.userAgent),t=!!("ontouchend"in window||e._navigator&&e._navigator.maxTouchPoints>0||e._navigator&&e._navigator.msMaxTouchPoints>0);if(!e._mobileEnabled&&e.ctx&&(o||t)){e._mobileEnabled=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var r=function(){n._autoResume();var o=e.ctx.createBufferSource();o.buffer=e._scratchBuffer,o.connect(e.ctx.destination),void 0===o.start?o.noteOn(0):o.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),o.onended=function(){o.disconnect(0),e._mobileEnabled=!0,e.mobileAutoEnable=!1,document.removeEventListener("touchend",r,!0)}};return document.addEventListener("touchend",r,!0),e}},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var o=0;o<e._howls.length;o++)if(e._howls[o]._webAudio)for(var t=0;t<e._howls[o]._sounds.length;t++)if(!e._howls[o]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,o=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};o.prototype={init:function(e){var o=this;return n.ctx||_(),o._autoplay=e.autoplay||!1,o._format="string"!=typeof e.format?e.format:[e.format],o._html5=e.html5||!1,o._muted=e.mute||!1,o._loop=e.loop||!1,o._pool=e.pool||5,o._preload="boolean"!=typeof e.preload||e.preload,o._rate=e.rate||1,o._sprite=e.sprite||{},o._src="string"!=typeof e.src?e.src:[e.src],o._volume=void 0!==e.volume?e.volume:1,o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._onend=e.onend?[{fn:e.onend}]:[],o._onfade=e.onfade?[{fn:e.onfade}]:[],o._onload=e.onload?[{fn:e.onload}]:[],o._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],o._onpause=e.onpause?[{fn:e.onpause}]:[],o._onplay=e.onplay?[{fn:e.onplay}]:[],o._onstop=e.onstop?[{fn:e.onstop}]:[],o._onmute=e.onmute?[{fn:e.onmute}]:[],o._onvolume=e.onvolume?[{fn:e.onvolume}]:[],o._onrate=e.onrate?[{fn:e.onrate}]:[],o._onseek=e.onseek?[{fn:e.onseek}]:[],o._onresume=[],o._webAudio=n.usingWebAudio&&!o._html5,void 0!==n.ctx&&n.ctx&&n.mobileAutoEnable&&n._enableMobileAudio(),n._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&o.load(),o},load:function(){var e=this,o=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var u,i;if(e._format&&e._format[r])u=e._format[r];else{if("string"!=typeof(i=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}u=/^data:audio\/([^;,]+);/i.exec(i),u||(u=/\.([^.]+)$/.exec(i.split("?",1)[0])),u&&(u=u[1].toLowerCase())}if(u||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),u&&n.codecs(u)){o=e._src[r];break}}return o?(e._src=o,e._state="loading","https:"===window.location.protocol&&"http:"===o.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new t(e),e._webAudio&&a(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,o){var t=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if(void 0===e){e="__default";for(var a=0,u=0;u<t._sounds.length;u++)t._sounds[u]._paused&&!t._sounds[u]._ended&&(a++,r=t._sounds[u]._id);1===a?e=null:r=null}}var i=r?t._soundById(r):t._inactiveSound();if(!i)return null;if(r&&!e&&(e=i._sprite||"__default"),"loaded"!==t._state){i._sprite=e,i._ended=!1;var d=i._id;return t._queue.push({event:"play",action:function(){t.play(d)}}),d}if(r&&!i._paused)return o||setTimeout(function(){t._emit("play",i._id)},0),i._id;t._webAudio&&n._autoResume();var _=Math.max(0,i._seek>0?i._seek:t._sprite[e][0]/1e3),s=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-_),l=1e3*s/Math.abs(i._rate);i._paused=!1,i._ended=!1,i._sprite=e,i._seek=_,i._start=t._sprite[e][0]/1e3,i._stop=(t._sprite[e][0]+t._sprite[e][1])/1e3,i._loop=!(!i._loop&&!t._sprite[e][2]);var c=i._node;if(t._webAudio){var f=function(){t._refreshBuffer(i);var e=i._muted||t._muted?0:i._volume;c.gain.setValueAtTime(e,n.ctx.currentTime),i._playStart=n.ctx.currentTime,void 0===c.bufferSource.start?i._loop?c.bufferSource.noteGrainOn(0,_,86400):c.bufferSource.noteGrainOn(0,_,s):i._loop?c.bufferSource.start(0,_,86400):c.bufferSource.start(0,_,s),l!==1/0&&(t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l)),o||setTimeout(function(){t._emit("play",i._id)},0)},p="running"===n.state;if("loaded"===t._state&&p)f();else{var v=p||"loaded"!==t._state?"load":"resume";t.once(v,f,p?i._id:null),t._clearTimer(i._id)}}else{var m=function(){c.currentTime=_,c.muted=i._muted||t._muted||n._muted||c.muted,c.volume=i._volume*n.volume(),c.playbackRate=i._rate,c.play(),l!==1/0&&(t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l)),o||t._emit("play",i._id)},h="loaded"===t._state&&(window&&window.ejecta||!c.readyState&&n._navigator.isCocoonJS);if(4===c.readyState||h)m();else{var g=function(){m(),c.removeEventListener(n._canPlayEvent,g,!1)};c.addEventListener(n._canPlayEvent,g,!1),t._clearTimer(i._id)}}return i._id},pause:function(e){var n=this;if("loaded"!==n._state)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused&&(r._seek=n.seek(o[t]),r._rateSeek=0,r._paused=!0,n._stopFade(o[t]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var o=this;if("loaded"!==o._state)return o._queue.push({event:"stop",action:function(){o.stop(e)}}),o;for(var t=o._getSoundIds(e),r=0;r<t.length;r++){o._clearTimer(t[r]);var a=o._soundById(t[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,o._stopFade(t[r]),a._node&&(o._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),o._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause())),n||o._emit("stop",a._id))}return o},mute:function(e,o){var t=this;if("loaded"!==t._state)return t._queue.push({event:"mute",action:function(){t.mute(e,o)}}),t;if(void 0===o){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var r=t._getSoundIds(o),a=0;a<r.length;a++){var u=t._soundById(r[a]);u&&(u._muted=e,t._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,n.ctx.currentTime):u._node&&(u._node.muted=!!n._muted||e),t._emit("mute",u._id))}return t},volume:function(){var e,o,t=this,r=arguments;if(0===r.length)return t._volume;if(1===r.length||2===r.length&&void 0===r[1]){t._getSoundIds().indexOf(r[0])>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var a;if(!(void 0!==e&&e>=0&&e<=1))return a=o?t._soundById(o):t._sounds[0],a?a._volume:0;if("loaded"!==t._state)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,r)}}),t;void 0===o&&(t._volume=e),o=t._getSoundIds(o);for(var u=0;u<o.length;u++)(a=t._soundById(o[u]))&&(a._volume=e,r[2]||t._stopFade(o[u]),t._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*n.volume()),t._emit("volume",a._id));return t},fade:function(e,o,t,r){var a=this,u=Math.abs(e-o),i=e>o?"out":"in",d=u/.01,_=d>0?t/d:t;if(_<4&&(d=Math.ceil(d/(4/_)),_=4),"loaded"!==a._state)return a._queue.push({event:"fade",action:function(){a.fade(e,o,t,r)}}),a;a.volume(e,r);for(var s=a._getSoundIds(r),l=0;l<s.length;l++){var c=a._soundById(s[l]);if(c){if(r||a._stopFade(s[l]),a._webAudio&&!c._muted){var f=n.ctx.currentTime,p=f+t/1e3;c._volume=e,c._node.gain.setValueAtTime(e,f),c._node.gain.linearRampToValueAtTime(o,p)}var v=e;c._interval=setInterval(function(n,t){d>0&&(v+="in"===i?.01:-.01),v=Math.max(0,v),v=Math.min(1,v),v=Math.round(100*v)/100,a._webAudio?(void 0===r&&(a._volume=v),t._volume=v):a.volume(v,n,!0),(o<e&&v<=o||o>e&&v>=o)&&(clearInterval(t._interval),t._interval=null,a.volume(o,n),a._emit("fade",n))}.bind(a,s[l],c),_)}}return a},_stopFade:function(e){var o=this,t=o._soundById(e);return t&&t._interval&&(o._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,o._emit("fade",e)),o},loop:function(){var e,n,o,t=this,r=arguments;if(0===r.length)return t._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(o=t._soundById(parseInt(r[0],10)))&&o._loop;e=r[0],t._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=t._getSoundIds(n),u=0;u<a.length;u++)(o=t._soundById(a[u]))&&(o._loop=e,t._webAudio&&o._node&&o._node.bufferSource&&(o._node.bufferSource.loop=e,e&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop)));return t},rate:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var i;if("number"!=typeof e)return i=t._soundById(o),i?i._rate:t._rate;if("loaded"!==t._state)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,r)}}),t;void 0===o&&(t._rate=e),o=t._getSoundIds(o);for(var d=0;d<o.length;d++)if(i=t._soundById(o[d])){i._rateSeek=t.seek(o[d]),i._playStart=t._webAudio?n.ctx.currentTime:i._playStart,i._rate=e,t._webAudio&&i._node&&i._node.bufferSource?i._node.bufferSource.playbackRate.value=e:i._node&&(i._node.playbackRate=e);var _=t.seek(o[d]),s=(t._sprite[i._sprite][0]+t._sprite[i._sprite][1])/1e3-_,l=1e3*s/Math.abs(i._rate);!t._endTimers[o[d]]&&i._paused||(t._clearTimer(o[d]),t._endTimers[o[d]]=setTimeout(t._ended.bind(t,i),l)),t._emit("rate",i._id)}return t},seek:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):(o=t._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));if(void 0===o)return t;if("loaded"!==t._state)return t._queue.push({event:"seek",action:function(){t.seek.apply(t,r)}}),t;var i=t._soundById(o);if(i){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var d=t.playing(o)?n.ctx.currentTime-i._playStart:0,_=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(_+d*Math.abs(i._rate))}return i._node.currentTime}var s=t.playing(o);s&&t.pause(o,!0),i._seek=e,i._ended=!1,t._clearTimer(o),s&&t.play(o,!0),!t._webAudio&&i._node&&(i._node.currentTime=e),t._emit("seek",o)}return t},playing:function(e){var n=this;if("number"==typeof e){var o=n._soundById(e);return!!o&&!o._paused}for(var t=0;t<n._sounds.length;t++)if(!n._sounds[t]._paused)return!0;return!1},duration:function(e){var n=this,o=n._duration,t=n._soundById(e);return t&&(o=n._sprite[t._sprite][1]/1e3),o},state:function(){return this._state},unload:function(){for(var e=this,o=e._sounds,t=0;t<o.length;t++){if(o[t]._paused||e.stop(o[t]._id),!e._webAudio){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(o[t]._node.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),o[t]._node.removeEventListener("error",o[t]._errorFn,!1),o[t]._node.removeEventListener(n._canPlayEvent,o[t]._loadFn,!1)}delete o[t]._node,e._clearTimer(o[t]._id);var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1)}var u=!0;for(t=0;t<n._howls.length;t++)if(n._howls[t]._src===e._src){u=!1;break}return r&&u&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,o,t){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(t?{id:o,fn:n,once:t}:{id:o,fn:n}),r},off:function(e,n,o){var t=this,r=t["_on"+e],a=0;if("number"==typeof n&&(o=n,n=null),n||o)for(a=0;a<r.length;a++){var u=o===r[a].id;if(n===r[a].fn&&u||!n&&u){r.splice(a,1);break}}else if(e)t["_on"+e]=[];else{var i=Object.keys(t);for(a=0;a<i.length;a++)0===i[a].indexOf("_on")&&Array.isArray(t[i[a]])&&(t[i[a]]=[])}return t},once:function(e,n,o){var t=this;return t.on(e,n,o,1),t},_emit:function(e,n,o){for(var t=this,r=t["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,o)}.bind(t,r[a].fn),0),r[a].once&&t.off(e,r[a].fn,r[a].id));return t},_loadQueue:function(){var e=this;if(e._queue.length>0){var n=e._queue[0];e.once(n.event,function(){e._queue.shift(),e._loadQueue()}),n.action()}return e},_ended:function(e){var o=this,t=e._sprite;if(!o._webAudio&&o._node&&!o._node.ended)return setTimeout(o._ended.bind(o,e),100),o;var r=!(!e._loop&&!o._sprite[t][2]);if(o._emit("end",e._id),!o._webAudio&&r&&o.stop(e._id,!0).play(e._id),o._webAudio&&r){o._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);o._endTimers[e._id]=setTimeout(o._ended.bind(o,e),a)}return o._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,o._clearTimer(e._id),o._cleanBuffer(e._node),n._autoSuspend()),o._webAudio||r||o.stop(e._id),o},_clearTimer:function(e){var n=this;return n._endTimers[e]&&(clearTimeout(n._endTimers[e]),delete n._endTimers[e]),n},_soundById:function(e){for(var n=this,o=0;o<n._sounds.length;o++)if(e===n._sounds[o]._id)return n._sounds[o];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new t(e)},_drain:function(){var e=this,n=e._pool,o=0,t=0;if(!(e._sounds.length<n)){for(t=0;t<e._sounds.length;t++)e._sounds[t]._ended&&o++;for(t=e._sounds.length-1;t>=0;t--){if(o<=n)return;e._sounds[t]._ended&&(e._webAudio&&e._sounds[t]._node&&e._sounds[t]._node.disconnect(0),e._sounds.splice(t,1),o--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var o=[],t=0;t<n._sounds.length;t++)o.push(n._sounds[t]._id);return o}return[e]},_refreshBuffer:function(e){var o=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[o._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop),e._node.bufferSource.playbackRate.value=e._rate,o},_cleanBuffer:function(e){var n=this;if(n._scratchBuffer){e.bufferSource.onended=null,e.bufferSource.disconnect(0);try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}}return e.bufferSource=null,n}};var t=function(e){this._parent=e,this.init()};t.prototype={init:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,o._sounds.push(e),e.create(),e},create:function(){var e=this,o=e._parent,t=n._muted||e._muted||e._parent._muted?0:e._volume;return o._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(t,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):(e._node=new Audio,e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._node.src=o._src,e._node.preload="auto",e._node.volume=t*n.volume(),e._node.load()),e},reset:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,o=e._parent;o._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(o._sprite).length&&(o._sprite={__default:[0,1e3*o._duration]}),"loaded"!==o._state&&(o._state="loaded",o._emit("load"),o._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void d(e);if(/^data:[^;]+;base64,/.test(n)){for(var o=atob(n.split(",")[1]),t=new Uint8Array(o.length),a=0;a<o.length;++a)t[a]=o.charCodeAt(a);i(t.buffer,e)}else{var _=new XMLHttpRequest;_.open("GET",n,!0),_.responseType="arraybuffer",_.onload=function(){var n=(_.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");i(_.response,e)},_.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},u(_)}},u=function(e){try{e.send()}catch(n){e.onerror()}},i=function(e,o){n.ctx.decodeAudioData(e,function(e){e&&o._sounds.length>0&&(r[o._src]=e,d(o,e))},function(){o._emit("loaderror",null,"Decoding audio data failed.")})},d=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},_=function(){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),o=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=o?parseInt(o[1],10):null;if(e&&t&&t<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());(n._navigator&&n._navigator.standalone&&!r||n._navigator&&!n._navigator.standalone&&!r)&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.value=n._muted?0:1,n.masterGain.connect(n.ctx.destination)),n._setup()};"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=o),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=n,window.Howl=o,window.Sound=t):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=n,global.Howl=o,global.Sound=t)}();
"use strict";function ownKeys(t,e){var n,i=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)),i}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach(function(e){_defineProperty(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function GeoDrawClass(e){var W={},Q={x:0,y:0,xTo:200,yTo:200,pointColor:"rgba(10,190,220,1)",pointRadius:7,segmentColor:"rgba(10,190,220,1)",segmentWidth:3,visible:!1},H={x:0,y:0,width:100,height:100,bgColor:"rgba(255, 255, 255, 0.5)",state:!0,visible:!0,interactionType:"",interactionElements:[],pointColor:"rgba(10,190,220,1)",pointLabelColor:"rgba(51,51,51,1)",lengthLabelColor:"rgba(51,51,51,1)",pointRadius:5,segmentColor:"rgba(10,190,220,1)",segmentWidth:2,tempElements:[],transperent:!1,eventsEnable:!0,fontSize:20,currentStep:0,snapToGrid:!1,snappingDiff:10,deviceSnappingDiff:25,shapesEditable:!1,undoRedo:!1,pointSnapping:!0,finalColor:"rgba(65,180,5,1)",screen:{},labelBGRatio:1,waiting:!1,shapes:{length:{digit:0,onlyDistance:!1},point:{label:{visible:!0}},square:{label:{visible:!0},fill:!0},circle:{digit:0,circleDistanceLabel:!0},line:{color:{stroke:"rgba(10,190,220,1)"}},brush1:{color:{stroke:"rgba(10,190,220,1)"}},brush2:{color:{stroke:"rgba(222,108,225,1)"}},brush3:{color:{stroke:"rgba(255,204,0,1)"}},segment:{color:{stroke:"rgba(10,190,220,1)"},label:{visible:!1},segDistanceLabel:!1,digit:1},angle:{dotOn90:!0},angleSize:{dotOn90:!0}}},Z={mouseDown:{isMouseDown:!1,lastShapeCompleted:!0},uniqueId:0,currentUniqueId:0,allShapesData:[],tempData:[],mouseDownData:null,isDevice:!1,newPlottedShapes:[],lineTypes:["line","ray","perpendicularLine","parallelLine","segment","segmentDash"],isLableSelected:!1,arbitaryX:1,plotPointOnExistingPoint:!1},$=this;function ee(e,t){var n=H.graphValues;return{x:(e-n.originX)/n.unitX,y:-1*(t-n.originY)/n.unitY}}function A(e,t){var n=H.graphValues;return{x:e*n.unitX+n.originX,y:t*n.unitY/-1+n.originY}}function te(e){return e/H.graphValues.unitX}function C(e){return e*H.graphValues.unitX}function l(){var e,t;H.undoRedo&&(e=JSON.stringify(H.interactionElements),t=!1,Z.allShapesData.length&&e===JSON.stringify(Z.allShapesData[Z.allShapesData.length-1])||(t=!0),t&&(Z.allShapesData.push(JSON.parse(JSON.stringify(H.interactionElements))),Z.tempData=[]))}function n(t){"line"!==t.type&&"ray"!==t.type&&"length"!==t.type||H.interactionElements.forEach(function(e){"point"===e.type&&(e.x===t.x&&e.y===t.y&&(t.firstPointId=e.uniqueId,t.connectionId.push(t.firstPointId)),e.x===t.xTo&&e.y===t.yTo&&(t.secondPointId=e.uniqueId,t.connectionId.push(t.secondPointId)))})}function t(e){Z.newPlottedShapes=[],Z.mouseDown.lastShapeCompleted=!0,H.waiting=!1,e&&(void 0!==W.angleSize&&W.angleSize({id:H.id,type:"angleSize",visible:!1},!0),void 0!==W.segSize&&W.segSize({id:H.id,type:"segSize",visible:!1},!0),void 0!==W.circleSize&&W.circleSize({id:H.id,type:"circleSize",visible:!1},!0))}function i(){if(H.waiting=!1,$.removeIncompleteShape(),Z.newPlottedShapes=[],"select"!==H.interactionType)for(var e=0;e<H.interactionElements.length;e++)H.interactionElements[e].isSelected=!1;Q.visible="scale"===H.interactionType}function o(e){for(var t=0;t<e.length;t++){var n=ue(e[t]);n&&void 0!==n.index&&s(e[t])}l()}function s(e){var n=H.interactionElements,t=ue(e),o=t.shape,e=t.index;o&&((t=o.connectionId)&&t.forEach(function(t){n.forEach(function(e){var n,i=e;i&&i.uniqueId===t&&(void 0!==i.isDeletable&&!1!==i.isDeletable||1<i.connectionId.length&&(-1<(n=i.connectionId.indexOf(o.uniqueId))&&i.connectionId.splice(n,1),be(i,["line","segment","segmentDash","ray"])&&(i.firstPointId!==o.uniqueId&&i.secondPointId!==o.uniqueId||(i.connectionId.forEach(function(e){var t=ue(e).shape;t&&(e=t.connectionId.indexOf(i.uniqueId),-1<n&&t.connectionId.splice(e,1))}),e=null))))})}),n[e]=null,H.interactionElements=n.filter(function(e){return null!==e}),i(),l())}function T(e){var t=e.ctx,n=e.text,i=e.x,o=e.y,l=e.fillColor,s=e.diffX,s=void 0===s?0:s,e=e.diffY,e=void 0===e?0:e;t.save(),t.beginPath(),t.font=H.fontSize+"px "+H.LabComClass.polo22KlettRegular,t.textBaseline="bottom",t.fillStyle=l,t.strokeStyle="rgba(255,255,255,1)",t.lineWidth=2,t.lineJoin="miter",t.miterLimit=2,o+=.6*H.fontSize,t.drawStyledText(n,i+s,o+e,H.LabComClass.polo22KlettRegular,H.fontSize),t.closePath(),t.restore()}function D(e,t,n,i){var o=void 0!==t.x?A(t.x,t.y):null;e.beginPath(),n&&(e.fillStyle=H.pointColor,t.fillColor&&(e.fillStyle=t.fillColor),H.finalView&&(e.fillStyle=H.finalColor,e.strokeStyle=H.finalColor),e.arc(o.x,o.y,H.pointRadius,0,2*Math.PI),e.fill(),e.closePath(),t.isSelected&&(e.beginPath(),e.strokeStyle=H.pointColor,e.arc(o.x,o.y,H.pointRadius+2,0,2*Math.PI),e.stroke(),e.closePath())),void 0!==t.label&&i&&(void 0===t.labelX&&(t.labelX=t.x,t.labelY=t.y,t.labelDiffX=0,t.labelDiffY=0),o=A(t.labelX,t.labelY),i=t.fillLabelColor||H.pointLabelColor,T({ctx:e,text:t.label,x:o.x,y:o.y,fillColor:i,center:!1,diffX:Number(t.labelDiffX),diffY:Number(t.labelDiffY)}))}function a(){var e={};e.id=H.id,e.r=[],onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:H.id}}),H.eventsEnable&&null!==H.interactionType&&H.state&&H.visible&&("scale"===H.interactionType?e.r.push({id:"scale1",arc:{x:Q.x,y:Q.y,r:Q.pointRadius+3},eventListener:c.bind(this)},{id:"scale2",arc:{x:Q.xTo,y:Q.yTo,r:Q.pointRadius+3},eventListener:c.bind(this)}):e.r.push({id:0,rect:{x:H.screen.x,y:H.screen.y,w:H.screen.w,h:H.screen.h},eventListener:c.bind(this)}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:e}))}function r(){H.animClass.stop("animation"),u(Z.mouseDownData),Z.mouseDownData=null}function d(){var e=Z.mouseDownData;e.delayCounter++,2<e.delayCounter&&(H.animClass.stop("animation"),void 0!==W.rightClick&&W.rightClick({id:H.id,type:"rightClick",x:e.pageX,y:e.pageY},!0),e=null)}function u(e){var t=Z.mouseDown;t.isMouseDown=!0,t.x=e.pageX,t.orignalX=e.pageX,t.y=e.pageY,t.orignalY=e.pageY,t.objectDown=!1,t.lastShapeCompleted&&function(e){var t=H.interactionElements,n=H.interactionType;Z.newPlottedShapes=[];var i=Z.newPlottedShapes,o=ee(e.pageX,e.pageY);o=ie(o),Z.currentUniqueId=null;var l,s=Pe(ee(e.pageX,e.pageY));null!==s&&(Z.currentUniqueId=t[s].uniqueId,o=t[s]);{var a,r,d,u,c,p,y,h,x,I,f,g,P,b,m,S,v,q,C,T,D,w,M,L,k,O,X,E,Y,U;Z.newShapeStarted=!1,"point"===n&&null!==o?null===s&&(ne(o,{uniqueId:++Z.uniqueId,connectionId:[]}),Z.currentUniqueId=Z.uniqueId):n.includes("segment")&&null!==o?(a=null===s?++Z.uniqueId:Z.currentUniqueId,r=++Z.uniqueId,null===s?ne(o,{uniqueId:a,connectionId:[r]}):t[s].connectionId.push(r),oe({uniqueId:r,firstPointId:a,x:o.x,y:o.y,xTo:o.x,yTo:o.y,connectionId:[a]}),Z.currentUniqueId=r,i.push(r)):"length"===n?null!==s&&null!==o?(u=++Z.uniqueId,d=Z.currentUniqueId,oe({uniqueId:u,firstPointId:d,x:o.x,y:o.y,xTo:o.x,yTo:o.y,labelAlign:"center",mode:"normal"}),Z.currentUniqueId=u,i.push(u)):(r=me(e))&&((d=ue(r)).shape&&d.shape.type.includes("segment")?(oe({uniqueId:u=++Z.uniqueId,segmentID:r,x:d.shape.x,y:d.shape.y,xTo:d.shape.xTo,yTo:d.shape.yTo,labelAlign:"center",mode:"segment"}),Z.currentUniqueId=u,i.push(u)):!d.shape||"circle"!==d.shape.type&&"circle_3"!==d.shape.type&&"compass"!==d.shape.type?d.shape.isSelected=!1:(oe({uniqueId:c=++Z.uniqueId,circleId:r,x:d.shape.x,y:d.shape.y,xTo:d.shape.x+d.shape.r,yTo:d.shape.y,pointX:o.x,pointY:o.y,labelAlign:"center",mode:"circle"}),Z.currentUniqueId=c,i.push(c))):"compass"===n?(null!==s?null!==o&&(p=Z.currentUniqueId,h={firstPointId:p,x:o.x,y:o.y,xTo:o.x,yTo:o.y}):!(c=me(e))||!0===(p=ue(c)).shape.visible&&(p.shape&&p.shape.type.includes("segment")?h={segmentID:c,x:p.shape.x,y:p.shape.y,xTo:p.shape.xTo,yTo:p.shape.yTo}:!p.shape||"circle"!==p.shape.type&&"compass"!==p.shape.type?"line"!==p.shape.type&&"parallelLine"!==p.shape.type&&"perpendicularLine"!==p.shape.type||(p.shape.isSelected=!1):h={circleID:c,x:p.shape.x,y:p.shape.y,r:p.shape.r}),h&&(y=++Z.uniqueId,Z.currentUniqueId=y,h.connectionId=[],h.uniqueId=y,h.isPloted=!1,i.push(y),oe(h))):"line"!==n&&"ray"!==n||null===o?"angleRay"===n&&null!==o?(y=++Z.uniqueId,x=++Z.uniqueId,h=null===s?++Z.uniqueId:Z.currentUniqueId,i.push(y),null===s?ne(o,{uniqueId:h,connectionId:[x,y]}):t[s].connectionId.push(x),oe({uniqueId:y,firstPointId:h,firstRayPlotted:!1,secondRayPlotted:!1,x:o.x,y:o.y,connectionId:[h]}),oe({type:"ray",uniqueId:x,angleRayId:y,secondPointId:h,x:o.x,y:o.y,xOr:o.x,yOr:o.y,xTo:o.x,yTo:o.y,xOrTo:o.x,yOrTo:o.y,connectionId:[h]}),Z.currentUniqueId=x,i.push(x)):"circle_3"===n&&null!==o?(I=++Z.uniqueId,x=null===s?++Z.uniqueId:Z.currentUniqueId,null===s?ne(o,{uniqueId:x,connectionId:[I],circleId:I}):(t[s].connectionId.push(I),t[s].circleId=I),oe({uniqueId:I,firstPointId:x,firstPointPlotted:!1,secondPointPlotted:!1,thirdPointPloted:!1,x:o.x,y:o.y,connectionId:[x]}),ue(x).shape.isSelected=!0,Z.currentUniqueId=x,i.push(I)):"angle"===n&&null!==o?(g=++Z.uniqueId,f=null===s?++Z.uniqueId:Z.currentUniqueId,null===s?(ne(o,{uniqueId:f,connectionId:[g],angleId:g}),ue(f).shape.isSelected=!0):(ue(f).shape.isSelected=!0,t[s].connectionId.push(g),t[s].angleId=g),oe({uniqueId:g,firstPointId:f,firstPointPlotted:!1,secondPointPlotted:!1,thirdPointPloted:!1,x:o.x,y:o.y,connectionId:[f]}),Z.currentUniqueId=f,i.push(g)):"midPoint"===n&&null!==o?(P=++Z.uniqueId,I=null===s?++Z.uniqueId:Z.currentUniqueId,f=me(e),g=ue(f).shape,null===s&&null!==o&&null===f?(ne(o,{uniqueId:I,connectionId:[P],midPointId:P}),oe({uniqueId:P,type:"midPoint",firstPointId:I,firstPointPlotted:!1,secondPointPlotted:!1,x:o.x,y:o.y,connectionId:[I]}),Z.currentUniqueId=I):0<=s&&null!==s?(g&&(g.isSelected=!1),t[s].connectionId.push(P),oe({uniqueId:t[s].midPointId=P,type:"midPoint",firstPointId:I,firstPointPlotted:!1,secondPointPlotted:!1,x:o.x,y:o.y,strokeColor:o.strokeColor!=H.pointColor?o.strokeColor:H.pointColor,fillColor:o.fillColor!=H.pointColor?o.fillColor:H.pointColor,connectionId:[I],segmentId:f}),Z.currentUniqueId=I):null!==f&&g.type.includes("segment")?g&&g.type.includes("segment")&&(oe({uniqueId:P,type:"midPoint",firstPointId:I,firstPointPlotted:!0,secondPointPlotted:!0,x:(g.x+g.xTo)/2,y:(g.y+g.yTo)/2,firstPointCoords:{x:g.x,y:g.y},secondPointCoords:{x:g.xTo,y:g.yTo},segmentId:f,connectionId:[I],onSegment:!0,midPointId:P}),Z.currentUniqueId=P):g.isSelected=!1,i.push(P)):"square"===n&&null!==o?(m=++Z.uniqueId,b=null===s?++Z.uniqueId:Z.currentUniqueId,null===s&&null!==o?(ne(o,{uniqueId:b,connectionId:[m],squareId:m}),oe({uniqueId:m,type:"square",firstPointId:b,firstPointPlotted:!1,secondPointPlotted:!1,x:o.x,y:o.y,connectionId:[b]}),Z.currentUniqueId=b):0<=s&&null!==s&&(t[s].connectionId.push(m),oe({uniqueId:t[s].squareId=m,type:"square",firstPointId:b,firstPointPlotted:!1,secondPointPlotted:!1,x:o.x,y:o.y,strokeColor:o.strokeColor!=H.pointColor?o.strokeColor:H.pointColor,fillColor:o.fillColor!=H.pointColor?o.fillColor:H.pointColor,connectionId:[b]}),Z.currentUniqueId=b),ue(b).shape.isSelected=!0,Z.newPlottedShapes.push(m)):"mirrorOnLine"===n&&null!==o?(P=++Z.uniqueId,b=null===s?++Z.uniqueId:Z.currentUniqueId,m=me(e),(S=ue(m).shape)&&"point"===S.type||null===m||null!==s&&"point"===t[s].type?(S&&(S.isSelected=!1),null===s?ne(o,{uniqueId:b,connectionId:[P],mirrorOnLineId:P}):(t[s].connectionId.push(P),t[s].mirrorOnLineId=P),ue(b).shape.isSelected=!0,oe({uniqueId:P,firstPointId:b,firstPointPlotted:!1,linePlotted:!1,x:o.x,y:o.y,connectionId:[b]}),Z.currentUniqueId=b,i.push(P),Z.newShapeStarted=!0):S.isSelected=!1):"triangle"===n&&null!==o?(S=++Z.uniqueId,q=++Z.uniqueId,v=null===s?++Z.uniqueId:Z.currentUniqueId,i.push(S),null===s?ne(o,{uniqueId:v,connectionId:[q,S]}):t[s].connectionId.push(q),oe({uniqueId:S,firstPointId:v,firstSegmentPlotted:!1,secondSegmentPlotted:!1,thirdSegmentPlotted:!1,x:o.x,y:o.y,connectionId:[v]}),oe({type:"segment",uniqueId:q,triangleId:S,secondPointId:v,x:o.x,y:o.y,xTo:o.x,yTo:o.y,connectionId:[v]}),Z.currentUniqueId=q,i.push(q)):"perpendicularBisector"===n&&null!==o?(D=me(e),C=ue(D).shape,null!==s?(v=++Z.uniqueId,q=null===s?++Z.uniqueId:Z.currentUniqueId,C&&(C.isSelected=!1),t[s].isSelected=!1,oe({uniqueId:v,type:"perpendicularBisector",firstPointId:q,firstPointPlotted:!1,secondPointPlotted:!1,connectionId:[q],mode:"point"}),Z.newShapeStarted=!0,i.push(v),Z.currentUniqueId=v,ue(q).shape.isSelected=!0):null!==D&&C.type.includes("segment")&&(C.isSelected=!1,T=++Z.uniqueId,oe({uniqueId:C.perpBId=T,segmentId:C.uniqueId,segment:C,segmentPlotted:!1,connectionId:[C.uniqueId],mode:"segment"}),Z.newShapeStarted=!0,i.push(T),Z.currentUniqueId=T)):"angleB"===n&&null!==o?(D=me(e),w=ue(D).shape,null!==s?(C=++Z.uniqueId,T=Z.currentUniqueId,t[s].connectionId.push(C),t[s].angleBId=C,t[s].isSelected=!0,oe({uniqueId:C,firstPointId:T,firstPointPlotted:!1,secondPointPlotted:!1,thirdPointPloted:!1,x:o.x,y:o.y,mode:"point",connectionId:[T]}),Z.newShapeStarted=!0,Z.currentUniqueId=C,i.push(C),null!==D&&"point"!==w.type&&(w.isSelected=!1)):null!==D&&w.type.includes("segment")&&(w.isSelected=!0,M=++Z.uniqueId,oe({uniqueId:(D=w).angleBId=M,firstSegmentId:w.uniqueId,firstSegmentPlotted:!1,secondSegmentPlotted:!1,firstSegment:{x:D.x,y:D.y,xTo:D.xTo,yTo:D.yTo},x:w.x,y:w.y,mode:"segment",connectionId:[w.uniqueId]}),Z.newShapeStarted=!0,Z.currentUniqueId=M,i.push(M))):"angleSize"===n&&null!==o?(Z.mouseDown.lastShapeCompleted=!1,w=++Z.uniqueId,null!==s&&null!==o?(M=Z.currentUniqueId,t[s].connectionId.push(w),oe({uniqueId:t[s].angleSizeId=w,firstPointId:M,firstPointPlotted:!1,secondPointPlotted:!1,degree:0,clockwise:!0,x:o.x,y:o.y,mode:"point",connectionId:[M]}),Z.currentUniqueId=M,i.push(w),Z.newShapeStarted=!0):(Z.newShapeStarted=!1,Z.mouseDown.lastShapeCompleted=!0)):"segSize"===n&&null!==o?(k=++Z.uniqueId,null!==s?(L=Z.currentUniqueId,t[s].connectionId.push(k),oe({uniqueId:t[s].segSizeId=k,firstPointPlotted:!1,firstPointId:L,x:o.x,y:o.y,connectionId:[L]}),Z.currentUniqueId=L,i.push(k)):(L=++Z.uniqueId,ne(o,{uniqueId:L,segSizeId:k,connectionId:[k]}),oe({uniqueId:k,firstPointId:L,firstPointPlotted:!1,x:o.x,y:o.y,connectionId:[L]}),Z.currentUniqueId=L),ue(Z.currentUniqueId).isSelected=!0,Z.newPlottedShapes.push(k),Z.newShapeStarted=!0):"circleSize"===n&&null!==o?(X=++Z.uniqueId,null!==s?(k=Z.currentUniqueId,t[s].connectionId.push(X),oe({uniqueId:t[s].circleSizeId=X,firstPointPlotted:!1,firstPointId:k,x:o.x,y:o.y,connectionId:[k]}),Z.currentUniqueId=k,i.push(X)):(O=++Z.uniqueId,ne(o,{uniqueId:O,circleSizeId:X,connectionId:[X]}),oe({uniqueId:X,firstPointId:O,firstPointPlotted:!1,x:o.x,y:o.y,connectionId:[O]}),Z.currentUniqueId=O),ue(Z.currentUniqueId).isSelected=!0,Z.newPlottedShapes.push(X),Z.newShapeStarted=!0):"circle"===n&&null!==o?(O=[],X=null===s?++Z.uniqueId:Z.currentUniqueId,E=++Z.uniqueId,null===s?ne(o,{uniqueId:X,connectionId:[E],isSelected:!0}):(t[s].connectionId.push(E),t[s].isSelected=!0),null===s&&(O=[Z.currentUniqueId]),oe({uniqueId:E,firstPointId:X,x:o.x,y:o.y,r:0,connectionId:O}),Z.currentUniqueId=E,i.push(E)):"perpendicularLine"===n||"parallelLine"===n?(E=++Z.uniqueId,null!==s?null!==o&&(Y=Z.currentUniqueId,l={firstPointId:Y,pointToLine:!0,x:o.x,y:o.y,xTo:o.x,yTo:o.y}):(Y=ve(e,"perpendicularLine"===n))?((l=Y).lineToPoint=!0,(U=ue(l.line))&&(U.shape.connectionId.push(E),U.shape.isSelected=!0)):(U=++Z.uniqueId,ne(o,{uniqueId:U,connectionId:[E]}),i.push(U),l={firstPointId:U,pointToLine:!0,x:o.x,y:o.y,xTo:o.x,yTo:o.y}),l.pointToLine&&(ue(l.firstPointId).shape.isSelected=!0),l.firstPointPlotted=!1,l.connectionId=[],l.uniqueId=E,Z.currentUniqueId=E,i.push(l.uniqueId),oe(l)):"brush1"===n||"brush2"===n||"brush3"===n?Z.currentUniqueId=me(e):"select"!==n&&"move"!==n||(Z.currentUniqueId=function(e){var t=H.interactionElements,n=null,i=null,o=null,l=ee(e.pageX,e.pageY),s=e.pageX,a=e.pageY,r=z(l,!1);r&&(n=r.dist,o=r.index);if(null===o){o=i=n=null;for(var d=0;d<t.length;d++){var u,c,p,y=t[d];"circle"===y.type||"compass"===y.type||"circle_3"===y.type?i=H.LabComClass.Maths.getDistance(l,y)-y.r:"line"===y.type||"perpendicularLine"===y.type||"parallelLine"===y.type?i=H.LabComClass.Maths.getPointLineDistance(l,y,{x:y.xTo,y:y.yTo}):!y.type.includes("segment")&&"ray"!==y.type||(i=H.LabComClass.Maths.getPointLineDistance(l,y,{x:y.xTo,y:y.yTo}),Math.abs(i)<te(10)&&(p={x:y.xTo,y:y.yTo},"ray"===y.type&&(p={x:y.xOr,y:y.yOr}),u=H.LabComClass.Maths.getDistance(l,y),c=H.LabComClass.Maths.getDistance(l,p),p=H.LabComClass.Maths.getDistance(y,p),u<=p&&c<=p||(i=null))),(null===n&&null!==i||null!==n&&null!==i&&Math.abs(i)<Math.abs(n))&&(n=Math.abs(i),o=d)}}i=null;var h=H.context;h.save(),h.beginPath(),h.font=H.fontSize+"px "+H.LabComClass.polo22KlettRegular,h.textBaseline="bottom";for(var x=null,I=0;I<t.length;I++){var f,g,P=t[I],b=!1;void 0!==P.label&&((f=A(P.labelX,P.labelY)).x+=Number(P.labelDiffX),f.y+=Number(P.labelDiffY),g=h.measureText(P.label).width,P.labelAlign&&"center"===P.labelAlign?s>f.x-g/2-20&&s<f.x+g/2+22&&a>f.y-1.5*H.fontSize&&a<f.y+10&&(b=!(i=0)):s>f.x-20&&s<f.x+g+22&&a>f.y-1.5*H.fontSize&&a<f.y+10&&(b=!(i=0))),(null===n&&null!==i||null!==n&&null!==i&&Math.abs(i)<=Math.abs(n)&&b)&&(n=Math.abs(i),x=o=I)}if(h.closePath(),h.restore(),null!==o&&Math.abs(n)<te(10)){if("mousedown"===e.type){if(Z.mouseDown.objectDown=!0,t[o].isSelected)t[o].isMouseDown=!1;else{if("move"===H.interactionType)for(var m=0;m<t.length;m++)t[m].isSelected=!1;t[o].isSelected=!0,t[o].isMouseDown=!0}return x===o&&(Z.isLableSelected=!0),t[o].uniqueId}t[o].isSelected&&!t[o].isMouseDown&&e.pageX===Z.mouseDown.orignalX&&e.pageY===Z.mouseDown.orignalY&&(t[o].isSelected=!1)}return null}(e)):(n=null===s?++Z.uniqueId:Z.currentUniqueId,e=++Z.uniqueId,null===s?ne(o,{uniqueId:n,connectionId:[e]}):t[s].connectionId.push(e),oe({uniqueId:e,firstPointId:n,x:o.x,y:o.y,xOr:o.x,yOr:o.y,xTo:o.x,yTo:o.y,xOrTo:o.x,yOrTo:o.y,connectionId:[n]}),Z.currentUniqueId=e,i.push(e))}}(e)}function c(e){switch(e.type){case"mousedown":t=e,Z.mouseDownData=null,Z.isDevice?(Z.mouseDownData=JSON.parse(JSON.stringify(t)),Z.mouseDownData.delayCounter=0,H.animClass.start({id:"animation",fps:1,frame:d})):u(t);break;case"pressmove":null!==Z.mouseDownData&&r(),h(e);break;case"mousemove":null!==Z.mouseDownData&&r(),t=e,Z.mouseDown.lastShapeCompleted||h(t);break;case"mouseup":p(e);break;case"rightmouseup":Z.mouseDown.isMouseDown&&p(e),Z.mouseDown.isRightMouseDown=!1;break;case"rightmousedown":Z.mouseDown.isRightMouseDown=!0,void 0!==W.rightClick&&W.rightClick({id:H.id,type:"rightClick",x:e.pageX,y:e.pageY},!0);break;case"mouseupout":null!==Z.mouseDownData&&r(),I(e),Z.mouseDown.isMouseDown=!1,"scale1"!==e.subId&&"scale2"!==e.subId||a(),Z.mouseDown.isRightMouseDown=!1}var t}function p(e){null!==Z.mouseDownData&&r(),I(e),Z.mouseDown.isMouseDown=!1,Z.mouseDown.objectDown=!1,Z.mouseDown.isRightMouseDown=!1}function y(){var e=H.x,t=H.y,n=H.width,i=H.height;Q.originPos={x:e+(n-280),y:t+(i-40),xTo:e+(n-40),yTo:t+(i-40)},Q.x=Q.originPos.x,Q.y=Q.originPos.y,Q.xTo=Q.originPos.xTo,Q.yTo=Q.originPos.yTo}function ne(t,n){var i={type:"point",x:t.x,y:t.y,label:""};Object.keys(n).forEach(function(e){i[e]=n[e]}),(t.isIntersection||t.isParameter)&&Object.keys(t).forEach(function(e){i[e]=t[e]}),Z.newPlottedShapes.push(n.uniqueId),oe(i)}function ie(t){if("1"===H.showQuadrants&&(t.x<0||t.y<0)&&(Math.abs(t.x)<te(H.snappingDiff)&&(t.x=0),Math.abs(t.y)<te(H.snappingDiff)&&(t.y=0),t.x<0||t.y<0))return null;var e,n,i,o,l,s=JSON.parse(JSON.stringify(t)),a={},r=!1;return H.pointSnapping&&(e=z(s,!0),n=function(e){for(var t=null,n=H.interactionElements,i=null,o=0;o<n.length-1;o++){var l=n[o];if("point"!==l.type)for(var s=o+1;s<n.length;s++){var a,r,d,u=n[s];"point"!==u.type&&(be(l,Z.lineTypes)&&be(u,Z.lineTypes)&&Z.uniqueId!==l.uniqueId&&Z.uniqueId!==u.uniqueId?null!==(r=function(e,t,n){var i=H.LabComClass.Maths.getLineintersect(e.x,e.y,e.xTo,e.yTo,t.x,t.y,t.xTo,t.yTo);if(i){if(e.type.includes("segment")&&!i.onLine1||t.type.includes("segment")&&!i.onLine2)return null;n=H.LabComClass.Maths.getDistance(i,n);return n<te(10)?(i.dist=n,i):null}return null}(l,u,e))&&(r.dist<t||null===t)&&(r.dist,t=r.dist,(i=r).updateKeys={x:i.x,y:i.y,l1:l.uniqueId,l2:u.uniqueId,isIntersection:!0}):(be(l,Z.lineTypes)&&be(u,["circle","compass"])||be(u,Z.lineTypes)&&be(l,["circle","compass"]))&&Z.uniqueId!==l.uniqueId&&Z.uniqueId!==u.uniqueId?(d=a=void 0,d="circle"===l.type||"compass"===l.type?(a=l,u):(a=u,l),null!==(r=G(a,d,e,H.snappingDiff))&&(r.dist<t||null===t)&&(r.dist,t=r.dist,(i=r).updateKeys={x:i.x,y:i.y,circle:a.uniqueId,line:d.uniqueId,isIntersection:!0})):be(l,["circle","compass"])&&be(u,["circle","compass"])&&Z.uniqueId!==l.uniqueId&&Z.uniqueId!==u.uniqueId&&((d=_(l,u,e,H.snappingDiff))&&(d.dist<t||null===t)&&(d.dist,t=d.dist,(i=d).updateKeys={x:i.x,y:i.y,intersectAngle:i.angle1,circle1:l.uniqueId,circle2:u.uniqueId,isIntersection:!0})))}}return i}(s),i=function(e){for(var t=null,n=null,i=H.LabComClass.Maths,o=i.getDistance,l=i.getPoint,s=i.getAngle,a=i.pointInSegment,r=i.getLineintersect,d=i.getPointLineDistance,u=null,c=0;c<H.interactionElements.length-1;c++){var p,y,h,x,I,f=H.interactionElements[c];"point"!==f.type&&(be(f,Z.lineTypes)&&(x=d(e,f,{x:f.xTo,y:f.yTo}),n=Math.abs(x),(null===t||n<t)&&n<te(10)&&(p=s(f.x,f.y,f.xTo,f.yTo),h=l(e,p+Math.PI/2,2),y=r(f.x,f.y,f.xTo,f.yTo,e.x,e.y,h.x,h.y),x=o(f,{x:f.xTo,y:f.yTo}),I=o(f,y)/x,h=s(f.x,f.y,y.x,y.y),x=!0,f.type.includes("segment")&&(a(y,f,{x:f.xTo,y:f.yTo})||(x=!1)),"ray"===f.type&&(a(y,f,{x:f.xOr,y:f.yOr})||(x=!1)),x&&(t=n,ge(y,["x","y"])&&((u=y).dist=t,u.updateKeys={x:u.x,y:u.y,line:f.uniqueId,pointAngle:Math.round(h)===Math.round(p),percentage:I,isParameter:!0})))),"circle"!==f.type&&"compass"!==f.type||(I=o(f,e),n=Math.abs(I-f.r),(null===t||n<t)&&n<te(10)&&(t=n,I=s(f.x,f.y,e.x,e.y),ge(u=l(f,I,f.r),["x","y"])?(u.dist=t,u.updateKeys={x:u.x,y:u.y,circle:f.uniqueId,angle:I,isParameter:!0}):u=null)))}return u}(s),e&&(a.x=e.plotedPoint.x,a.y=e.plotedPoint.y,r=!0),n&&!r&&(l=!0,e&&n.dist>e.dist&&(l=!1),l&&(a={},Object.keys(n.updateKeys).forEach(function(e){a[e]=n.updateKeys[e]}),a.updateKeys=n.updateKeys,r=!0)),i&&!r&&(o=!0,a&&i.dist>a.dist&&(o=!1),o&&(a={},Object.keys(i.updateKeys).forEach(function(e){a[e]=i.updateKeys[e]}),a.updateKeys=i.updateKeys,r=!0))),!r&&H.snapToGrid&&(o=(l=H.graphValues).XunitsPerGrid,l=l.YunitsPerGrid,o=Math.round(t.x/o)*o,l=Math.round(t.y/l)*l,H.LabComClass.Maths.getDistance(t,{x:o,y:l})<te(H.snappingDiff)&&((a={}).x=o,a.y=l,r=!0)),r&&Object.keys(a).forEach(function(e){t[e]=a[e]}),t}function oe(t){var n={type:H.interactionType,step:H.currentStep,visible:!0};return Object.keys(t).forEach(function(e){n[e]=t[e]}),H.interactionElements.push(n),n}function h(e){var t,n,i=H.interactionType,o=H.interactionElements,l=(null!==Z.currentUniqueId?ue(Z.currentUniqueId):ue(Z.uniqueId)).shape,s=ie(s=ee(e.pageX,e.pageY));if("scale1"===e.subId||"scale2"===e.subId)"scale1"===e.subId?(Q.x=s.x,Q.y=s.y,De()):"scale2"===e.subId&&(Q.xTo=s.x,Q.yTo=s.y,De());else{if((null===s||Z.mouseDown.objectDown&&(!l||void 0!==l.isDraggable&&!l.isDraggable))&&("move"!==i||!Z.isLableSelected))return void console.info("rejected");if("point"===i)"point"==l.type&&0==l.connectionId.length&&le(l,{x:s.x,y:s.y});else if(i.includes("segment"))l.xTo=s.x,l.yTo=s.y;else if("length"===i)l&&"length"===l.type&&void 0===l.secondPointId&&(l.xTo=s.x,l.yTo=s.y);else if("compass"===i)l&&"compass"===l.type&&(l.isPloted?(l.x=s.x,l.y=s.y):(l.xTo=s.x,l.yTo=s.y));else if("line"===i){var a=o[o.length-1];a.xTo=s.x,a.yTo=s.y,qe(a)}else if("ray"===i){a=o[o.length-1];a.xTo=s.x,a.yTo=s.y,qe(a)}else if("angleRay"===i)l&&((t=ue(l.angleRayId).shape).firstRayPlotted?(l.xTo=s.x,l.yTo=s.y,t.thirdPoint={x:s.x,y:s.y}):(l.x=s.x,l.y=s.y),qe(l));else if("triangle"===i)l&&((t=ue(l.triangleId).shape).firstSegmentPlotted?(l.xTo=s.x,l.yTo=s.y,t.thirdPoint={x:s.x,y:s.y}):(l.x=s.x,l.y=s.y));else if("angle"!==i)if("circle_3"===i){for(var r,d=o.length-1;0<=d;d--)if("circle_3"===o[d].type){r=d;break}var u=o[r],c={};"circle_3"===u.type&&!1!==u.secondPointPlotted&&(void 0!==u.firstPointPlotted&&void 0!==u.secondPointPlotted&&(c=ae(ue(u.firstPointId).shape,ue(u.secondPointId).shape,s)),u.x=c.x,u.y=c.y,u.r=c.r)}else if("circle"===i){var u=o[o.length-1];u.r=Math.abs(H.LabComClass.Maths.getDistance({x:u.x,y:u.y},s)),c=u,(u={}).id=H.id,c.type=H.interactionType,u.type="geoCircle",u.data=c,void 0!==W[u.type]&&W[u.type](u,!0)}else if("perpendicularLine"===i||"parallelLine"===i)Z.mouseDown.isMouseDown&&l.pointToLine&&!l.firstPointPlotted&&void 0!==l.firstPointId&&Z.newPlottedShapes.includes(l.firstPointId)&&((n=ue(l.firstPointId).shape).x=s.x,n.y=s.y),l.lineToPoint&&(l.x=s.x,l.y=s.y,Te(l));else if("move"===i&&!Z.mouseDown.objectDown||"moveGraph"===i)Z.mouseDown.isMouseDown&&(l=n=0,n=e.pageX-Z.mouseDown.x,l=e.pageY-Z.mouseDown.y,Z.mouseDown.x=e.pageX,Z.mouseDown.y=e.pageY,void 0!==W[i]&&W[i]({id:H.id,type:"moveGraph",data:{x:n,y:l}},!0));else if("select"===i||"move"===i&&Z.mouseDown.objectDown){if((H.shapesEditable||Z.isLableSelected)&&Z.mouseDown.isMouseDown&&Z.mouseDown.objectDown){var p=e.pageX-Z.mouseDown.x,y=e.pageY-Z.mouseDown.y,h=A(0,0),h=ee(h.x+p,h.y+y);if(p=h.x,y=h.y,Z.isLableSelected)for(var x=0;x<o.length;x++){var I=o[x],f=A(I.labelX,I.labelY),f={x:e.pageX-f.x,y:e.pageY-f.y};if(I.isSelected){f=f,(I=I).labelDiffX=f.x,I.labelDiffY=f.y,I.labelDiffX=50<I.labelDiffX?50:I.labelDiffX<-50?-50:I.labelDiffX,I.labelDiffY=50<I.labelDiffY?50:I.labelDiffY<-50?-50:I.labelDiffY;break}}else{for(var g=0;g<o.length;g++)o[g].isMoved=!1;for(var P=0;P<o.length;P++){var b,m,S=o[P];void 0!==S.isDraggable&&!S.isDraggable||!S.isSelected||S.isMoved||(S.isMoved=!0,"point"===S.type?(S.x+=p,S.y+=y,"move"===i&&(S.x=s.x,S.y=s.y),M(S)):S.type.includes("segment")?(S.x+=p,S.y+=y,S.xTo+=p,S.yTo+=y):"line"===S.type||"ray"===S.type?(S.x+=p,S.y+=y,S.xTo+=p,S.yTo+=y,qe(o[P])):"circle"===S.type?(b=ue(S.firstPointId),m=ue(S.secondPointId),b&&m&&de([b.shape,m.shape])&&(b.shape.isMoved||(B(b.shape,{x:b.shape.x+p,y:b.shape.y+y}),b.isMoved=!0),m.shape.isMoved||(B(m.shape,{x:m.shape.x+p,y:m.shape.y+y}),m.isMoved=!0))):"compass"===S.type?(m=ue(S.centerPointId))&&B(m.shape,{x:m.shape.x+p,y:m.shape.y+y}):"perpendicularLine"===S.type||S.type)}for(var v=0;v<o.length;v++){var q=o[v];q.isSelected&&("point"===q.type&&0<q.connectionId.length&&w(q,p,y),(q.type.includes("segment")||"line"===q.type||"ray"===q.type)&&0<q.connectionId.length&&w(q,p,y))}}}else"select"===i&&function(e,t,n,i){{var o;n<e&&(o=e,e=n,n=o,o=t,t=i,i=o)}for(var l=0;l<H.interactionElements.length;l++){var s,a=H.interactionElements[l];"point"===a.type&&(a.isSelected||(s=A(a.x,a.y)).x>=e&&s.x<=n&&s.y>=t&&s.y<=i&&(a.isSelected=!0))}}((h=Z.mouseDown).orignalX,h.orignalY,h.x,h.y);Z.mouseDown.x=e.pageX,Z.mouseDown.y=e.pageY}se(e),se(e)}return 1}function le(t,n){var e=!1;return de([t])&&(e=(t.isIntersection&&void 0!==t.circle1&&t.circle2,!0)),t.x===n.x&&t.y===n.y&&(e=!0),e&&Object.keys(n).forEach(function(e){t[e]=n[e]}),e}function se(A){for(var e=H.LabComClass.Maths,z=e.getDistance,R=e.getAngle,N=e.getPoint,j=e.pointInSegment,V=e.getLineintersect,J=e.getLinePointIntersection,t=function(e){var t,n,i,o,l,s,a,r,d,u,c,p,y,h,x,I,f,g,P,b,m,S,v,q,C,T,D,w,M,L,k=H.interactionElements[e];if(!k.type.includes("segment")&&"length"!==k.type&&"line"!==k.type&&"ray"!==k.type||(e=null,k.firstPointId&&(n=ue(k.firstPointId))&&(e=n.shape.label,B(k,{x:n.shape.x,y:n.shape.y})),k.secondPointId&&(i=ue(k.secondPointId))&&(e&&(e+=i.shape.label,void 0===k.label&&(k.label=e)),B(k,{xTo:i.shape.x,yTo:i.shape.y})),"line"!==k.type&&"ray"!==k.type||qe(k),k.type.includes("segment")&&(t={x:(k.x+k.xTo)/2,y:(k.y+k.yTo)/2},k.labelX=t.x,k.labelY=t.y,k.distance=z(k,{x:k.xTo,y:k.yTo})),k.type.includes("segment")&&k.firstPointId&&k.secondPointId&&(n.shape.visible&&i.shape.visible?k.visible=!0:k.visible=!1),"length"===k.type&&(s="",k.segmentID?(t=ue(k.segmentID))&&t.shape&&(k.x=t.shape.x,k.xTo=t.shape.xTo,k.y=t.shape.y,k.yTo=t.shape.yTo,n=ue(t.shape.firstPointId),i=ue(t.shape.secondPointId),n&&n.shape&&i&&i.shape?""!==n.shape.label&&""!==i.shape.label&&(s=n.shape.label+""+i.shape.label):t.shape.label&&(s=t.shape.label)):k.circleId?(o=ue(k.circleId))&&o.shape&&(k.x=o.shape.x,k.xTo=o.shape.x+o.shape.r,k.y=o.shape.y,k.yTo=o.shape.y,s="C"):k.labelText?s=k.labelText:(o=ue(k.firstPointId),l=ue(k.secondPointId),o&&o.shape&&l&&l.shape&&""!==o.shape.label&&""!==l.shape.label&&(s=o.shape.label+""+l.shape.label)),void 0!==k.circleId?(k.circumference=2*Math.PI*(k.xTo-k.x),void 0!==H.shapes.length.digit&&(k.circumference=Number(k.circumference.toFixed(H.shapes.length.digit))),l={x:k.pointX,y:k.pointY},s&&!H.shapes.length.onlyDistance?k.label="".concat(s," = ")+k.circumference.toString().replace(".",","):s&&H.shapes.length.onlyDistance&&(k.label=k.circumference.toString().replace(".",","),k.distanceText=k.circumference),k.labelX=l.x,k.labelY=l.y):(k.distance=z(k,{x:k.xTo,y:k.yTo}),void 0!==H.shapes.length.digit&&(k.distance=Number(k.distance.toFixed(H.shapes.length.digit))),r={x:(k.x+k.xTo)/2,y:(k.y+k.yTo)/2},s&&!H.shapes.length.onlyDistance?k.label="§d".concat(s,"§r = ")+k.distance.toString().replace(".",","):s&&H.shapes.length.onlyDistance?(k.label=k.distance.toString().replace(".",","),k.labelFor=s,k.distanceText=k.distance):(""===s&&void 0!==k.firstPointId&&void 0!==k.secondPointId||void 0!==k.segmentID)&&(k.label=k.distance.toString().replace(".",",")),k.labelX=r.x,k.labelY=r.y),void 0===k.labelDiffX&&(k.labelDiffX=0,k.labelDiffY=0))),"angleRay"===k.type&&void 0!==k.firstPointId&&void 0!==k.secondPointId&&(d=ue(k.firstPointId).shape,s=ue(k.secondPointId).shape,void 0!==k.thirdPointId?a=ue(k.thirdPointId).shape:k.thirdPoint&&(a=k.thirdPoint),a&&(k.x=s.x,k.y=s.y,u=new H.LabComClass.Vector(s.x-d.x,s.y-d.y),r=new H.LabComClass.Vector(a.x-d.x,a.y-d.y),k.angle=r.crossProduct(u).z,k.startAngle=H.LabComClass.Maths.getAngle(s.x,s.y,a.x,a.y),k.endAngle=H.LabComClass.Maths.getAngle(s.x,s.y,d.x,d.y),(u=k.endAngle-k.startAngle)<0?u=-1*u*180/Math.PI:0<u&&(u=360-180*u/Math.PI),k.labelX=k.x+te(10),k.labelY=k.y-te(10),k.angleText=""+Math.round(u),k.angleValue=Math.round(u))),"angleB"===k.type&&void 0!==k.firstPointId&&void 0!==k.secondPointId&&(d=ue(k.firstPointId).shape,u=ue(k.secondPointId).shape,void 0!==k.thirdPointId?c=ue(k.thirdPointId).shape:k.thirdPoint&&(c=k.thirdPoint),c&&(p=xe({firstPoint:d,secondPoint:u,thirdPoint:c}),k.x=p.bisectorLine.x,k.y=p.bisectorLine.y,k.xTo=p.bisectorLine.xTo,k.yTo=p.bisectorLine.yTo)),"mirrorOnLine"===k.type&&void 0!==k.line&&k.linePlotted&&(p=pe((p=Ie(k.line)).a,p.b,p.c,k.x,k.y),k.x=p.x,k.y=p.y),"circle_3"===k.type&&void 0!==k.firstPointId&&void 0!==k.secondPointId&&(f=ue(k.firstPointId).shape,y=ue(k.secondPointId).shape,void 0!==k.thirdPointId?x=ue(k.thirdPointId).shape:k.thirdPoint&&(x=k.thirdPoint),x&&(I=ae(f,y,x),k.x=I.x,k.y=I.y,k.r=I.r)),"angle"===k.type&&void 0!==k.firstPointId&&void 0!==k.secondPointId&&(f=ue(k.firstPointId).shape,y=ue(k.secondPointId).shape,void 0!==k.thirdPointId?h=ue(k.thirdPointId).shape:k.thirdPoint&&(h=k.thirdPoint),h&&(k.x=y.x,k.y=y.y,x=new H.LabComClass.Vector(y.x-f.x,y.y-f.y),I=new H.LabComClass.Vector(h.x-f.x,h.y-f.y),k.angle=I.crossProduct(x).z,k.startAngle=H.LabComClass.Maths.getAngle(y.x,y.y,h.x,h.y),k.endAngle=H.LabComClass.Maths.getAngle(y.x,y.y,f.x,f.y),(f=k.endAngle-k.startAngle)<0?f=-1*f*180/Math.PI:0<f&&(f=360-180*f/Math.PI),k.angleText=""+Math.round(f),k.angleValue=Math.round(f),k.labelX=k.x+te(10),k.labelY=k.y-te(10))),"midPoint"===k.type)void 0!==k.firstPointId&&void 0!==k.secondPointId&&(O=ue(k.firstPointId).shape,X=ue(k.secondPointId).shape,k.x=(O.x+X.x)/2,k.y=(O.y+X.y)/2);else if("triangle"===k.type){var O=ue(k.firstPointId).shape,X=ue(k.secondPointId).shape,E=ue(k.thirdPointId).shape;void 0!==k.firstPointId&&void 0!==k.secondPointId&&void 0!==k.thirdPointId&&(k.firstPoint={x:O.x,y:O.y,label:O.label},k.secondPoint={x:X.x,y:X.y,label:X.label},k.thirdPoint={x:E.x,y:E.y,label:E.label},k.firstSegmentPlotted=!0,k.secondSegmentPlotted=!0,k.thirdSegmentPlotted=!0)}else if("compass"===k.type)void 0!==k.segmentID?(E=ue(k.segmentID))&&E.shape&&(k.r=z(E.shape,{x:E.shape.xTo,y:E.shape.yTo})):void 0!==k.circleID?(g=ue(k.circleID))&&(k.r=g.shape.r):void 0!==k.firstPointId&&void 0!==k.secondPointId?(g=ue(k.firstPointId),P=ue(k.secondPointId),g&&P&&(k.r=z(g.shape,P.shape))):k.r=z(k,{x:k.xTo,y:k.yTo}),void 0===k.centerPointId||(P=ue(k.centerPointId).shape)&&B(k,{x:P.x,y:P.y});else if("point"===k.type&&"angle"!==H.interactionType){k.firstPointPlotted&&k.secondPointPlotted&&!k.onSegment&&(b=ue(k.firstPointId).shape,m=ue(k.secondPointId).shape,k.x=(b.x+m.x)/2,k.y=(b.y+m.y)/2),k.onSegment&&(k.x=(k.firstPointCoords.x+k.secondPointCoords.x)/2,k.y=(k.firstPointCoords.y+k.secondPointCoords.y)/2),k.isIntersection&&(void 0!==k.l1&&void 0!==k.l2&&(b=ue(k.l1),m=ue(k.l2),b&&m&&(b=b.shape,m=m.shape,!(S=V(b.x,b.y,b.xTo,b.yTo,m.x,m.y,m.xTo,m.yTo)).onLine1&&b.type.includes("segment")||!S.onLine2&&m.type.includes("segment")?k.visible=!1:k.visible=!0,B(k,{x:S.x,y:S.y}))),void 0!==k.circle&&void 0!==k.line&&(S=ue(k.circle),v=ue(k.line),S&&v&&(null!==(q=G(S=S.shape,v=v.shape,k))?(B(k,{x:q.x,y:q.y}),k.visible=!0):k.visible=!1)),void 0!==k.circle1&&void 0!==k.circle2&&(w=ue(k.circle1),D=ue(k.circle2),w&&D&&((T=_(w=w.shape,D=D.shape,k,!1))&&void 0!==T.x&&!isNaN(T.x)?k.visible=function(e,t,n,i){var o=H.LabComClass.Vector;if(e.visible){e.x=i.x,e.y=i.y;var l=new o(n.x-t.x,n.y-t.y),s=new o(i.x-t.x,i.y-t.y);return e.angle1=l.crossProduct(s).z,!0}s=H.LabComClass.Maths.getIntersectOfTwoCircles(t.x,t.y,t.r,n.x,n.y,n.r);if(s.length<2)return!1;if(H.LabComClass.Maths.getDistance(s[0],s[1])<te(H.snappingDiff))return!1;n=new o(n.x-t.x,n.y-t.y),t=new o(s[0].x-t.x,s[0].y-t.y),t=n.crossProduct(t).z;e.angle1<0&&t<0||0<e.angle1&&0<t?(e.x=s[0].x,e.y=s[0].y):(e.x=s[1].x,e.y=s[1].y);return!0}(k,w,D,T):k.visible=!1))),k.isParameter&&H.shapesEditable&&(void 0===k.line||(L=ue(k.line))&&(L=L.shape,v=z(L,{x:L.xTo,y:L.yTo}),q=R(L.x,L.y,L.xTo,L.yTo),C={},w=k.pointAngle?v*k.percentage:v*k.percentage*-1,A&&k.isSelected&&Z.mouseDown.isMouseDown&&Z.mouseDown.objectDown&&(D=ee(A.pageX,A.pageY),T=J(L,{x:L.xTo,y:L.yTo},D),D=z(L,T),C.pointAngle=R(L.x,L.y,T.x,T.y),C.pointAngle=Math.round(C.pointAngle)===Math.round(q),C.percentage=D/v,w=C.pointAngle?v*C.percentage:v*C.percentage*-1),w=N(L,q,w),C.x=w.x,C.y=w.y,!L.type.includes("segment")&&"ray"!==L.type||(M={x:L.xTo,y:L.yTo},"ray"===L.type&&(M={x:L.xOr,y:L.yOr}),j(w,L,M)||(z(w,L)<z(w,M)?(C.x=L.x,C.y=L.y):(C.x=M.x,C.y=M.y))),Object.keys(C).forEach(function(e){k[e]=C[e]})),void 0===k.circle||(L=ue(k.circle))&&(L=L.shape,A&&k.isSelected&&Z.mouseDown.objectDown&&(M=ee(A.pageX,A.pageY),k.angle=R(L.x,L.y,M.x,M.y)),L=N(L,k.angle,L.r),B(k,{x:L.x,y:L.y})));for(var Y=0;Y<k.connectionId.length;Y++){var U=ue(k.connectionId[Y]);U.shape&&("perpendicularLine"===U.shape.type||"parallelLine"===U.shape.type?(U.shape.visible=k.visible,B(U.shape,{x:k.x,y:k.y}),Te(U.shape)):"circle"===U.shape.type&&K(U.shape))}}else"perpendicularLine"===k.type||"parallelLine"===k.type?Te(k):"circle"===k.type&&K(k);k&&void 0!==k.label&&(void 0===k.labelX&&(k.labelX=k.x,k.labelY=k.y),void 0===k.labelDiffX&&(k.labelDiffX=0,k.labelDiffY=0))},n=0;n<H.interactionElements.length;n++)t(n)}function ae(e,t,n){var i={},o={},l={};i.x=(e.x+t.x)/2,i.y=(e.y+t.y)/2,o.x=(t.x+n.x)/2,o.y=(t.y+n.y)/2,i.m=re((t.y-e.y)/(t.x-e.x)),o.m=re((n.y-t.y)/(n.x-t.x)),i.slope=re(-1/i.m),o.slope=re(-1/o.m);i=x(i),o=x(o);return l.x=(i.b*o.c-o.b*i.c)/(i.a*o.b-o.a*i.b),l.y=(i.c*o.a-o.c*i.a)/(i.a*o.b-o.a*i.b),l.r=H.LabComClass.Maths.getDistance(l,e),{x:l.x,y:l.y,r:l.r}}function x(e){var t={};return isFinite(e.slope)?(t.eqn="(y-".concat(e.y,"=").concat(e.slope,"(x-").concat(e.x,"))"),t.a=-e.slope,t.b=1,t.c=re(-e.slope*-e.x-e.y)):(t.a=1,t.b=0,t.c=-e.x),t}function re(e){return Math.round(100*e)/100}function K(e){var t,n;"circle"===e.type&&void 0!==e.firstPointId&&void 0!==e.secondPointId&&(t=ue(e.firstPointId),n=ue(e.secondPointId),t&&n&&(e.x=t.shape.x,e.y=t.shape.y,e.r=H.LabComClass.Maths.getDistance(t.shape,n.shape)))}function de(e){var t=!0;if(Array.isArray(e)){for(var n=0;n<e.length;n++)if(void 0===e[n]||void 0!==e[n].isDraggable&&!e[n].isDraggable){t=!1;break}}else void 0===e.isDraggable||e.isDraggable||(t=!1);return t}function B(t,n){void 0!==t.isDraggable&&!t.isDraggable||Object.keys(n).forEach(function(e){t[e]=n[e]})}function w(e,t,n){for(var i=e.connectionId,o=0;o<i.length;o++){var l=ue(i[o]).shape;if(void 0!==l&&!1!==l&&!l.isMoved)if(l.isMoved=!0,"point"===l.type){var s=!0;if(!l.isSelected&&l.connectionId.length)for(var a=0;a<l.connectionId.length;a++){var r=ue(l.connectionId[a]).shape;!r||"line"!==r.type&&"ray"!==r.type&&!r.type.includes("segment")||(r=ue(r.firstPointId===l.uniqueId?r.secondPointId:r.firstPointId))&&r.shape&&void 0!==r.shape.isDraggable&&!0!==r.shape.isDraggable&&(s=!1)}s&&B(l,{x:l.x+t,y:l.y+n})}else"line"===l.type||"ray"===l.type||l.type.includes("segment")?(l.firstPointId===e.uniqueId?(l.x=e.x,l.y=e.y):(l.xTo=e.x,l.yTo=e.y),"line"!==l.type&&"ray"!==l.type||qe(l)):"perpendicularLine"===l.type||"parallelLine"===l.type?"point"===e.type&&(l.x=e.x,l.y=e.y,Te(l)):"circle"===l.type&&"point"===e.type&&l.firstPointId===e.uniqueId&&(l.x=e.x,l.y=e.y)}}function ue(e){for(var t=H.interactionElements,n=t.length-1;0<=n;n--)if(t[n]&&t[n].uniqueId===e)return{index:n,shape:t[n]};return!1}function I(e){var t=H.interactionElements,n=H.interactionType;H.context.font="".concat(H.fontSize,"px ").concat(H.LabComClass.polo22KlettRegular);var i={type:n},o=n,l=!1,s=ee(e.pageX,e.pageY),a=null!==Z.currentUniqueId&&ue(Z.currentUniqueId).shape;Z.mouseDown.lastShapeCompleted||null!=Z.currentUniqueId||(a=ue(Z.uniqueId).shape),s=ie(s);var r=Pe(ee(e.pageX,e.pageY)),d=null;null!==r&&(d=t[r].uniqueId,s=t[r]),null!==d&&"select"!==o&&"move"!==o&&"moveGraph"!==o&&a&&(a.isSelected=!1);var u,c,p,y,h,x=null!==s;if("point"===o&&a&&x){var I,f=ee(e.pageX,e.pageY),g=null!==Z.currentUniqueId&&ue(Z.currentUniqueId).shape;Z.mouseDown.lastShapeCompleted||null!=Z.currentUniqueId||(g=ue(Z.uniqueId).shape),f=ie(f),(d=null)!==(r=function(e){for(var t=null,n=null,i=null,o=0;o<H.interactionElements.length;o++){var l=H.interactionElements[o];"point"===l.type&&l.uniqueId!==Z.currentUniqueId&&(n=H.LabComClass.Maths.getDistance(e,l)),(null===t&&null!==n||null!==t&&n<t)&&(t=n,i=o)}if(null!==i&&t<te(H.snappingDiff))return Z.mouseDown.objectDown=!0,i;return null}(ee(e.pageX,e.pageY)))&&(d=t[r].uniqueId,f=t[r]),null!==d&&"select"!==o&&"move"!==o&&"moveGraph"!==o&&g&&(g.isSelected=!1),de([g])?(le(g,f),H.shapesEditable||(g.isDraggable=!1,i.isDraggable=g.isDraggable),l=!0,i.x=f.x,i.y=f.y,i.uniqueId=g.uniqueId,l=l&&ge(g,["x","y"]),h=[],H.interactionElements.forEach(function(t){var e=h.findIndex(function(e){return e.uniqueId===t.uniqueId});-1===e?h.push(t):h[e]=t}),H.interactionElements=h):H.plotPointOnExistingPoint&&(l=!0,I=++Z.uniqueId,i.x=g.x,i.y=g.y,ne(f,{uniqueId:I,connectionId:[g.uniqueId]}),i.uniqueId=I)}else if(a&&(o.includes("segment")||"length"===o||"line"===o||"ray"===o)&&x)de([a])&&(a.xTo=s.x,a.yTo=s.y),"line"!==n&&"ray"!==n||qe(a),i.x=a.x,i.y=a.y,i.xTo=a.xTo,i.yTo=a.yTo,i.slope=a.slope,i.uniqueId=a.uniqueId,l=!0,"length"!==o||void 0===a.circleId&&void 0===a.segmentID||(a.circleId?ue(a.circleId).shape.isSelected=!1:a.segmentID&&(ue(a.segmentID).shape.isSelected=!1)),l=l&&ge(a,["x","y","xTo","yTo"]),null===r?"length"!==o?(ne(s,{uniqueId:P=++Z.uniqueId,connectionId:[a.uniqueId]}),a.secondPointId=P,a.connectionId.push(P)):void 0!==a.firstPointId&&0<Z.newPlottedShapes.length&&t.pop():a.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:("length"!==o&&(s.connectionId.push(a.uniqueId),a.connectionId.push(d)),a.secondPointId=d,Z.mouseDown.lastShapeCompleted=!0);else if(a&&"angleRay"===o&&x){var P,b,m,n=ue(a.angleRayId).shape;n.firstRayPlotted?(de([a])&&(a.x=s.x,a.y=s.y),qe(a),null===r?(ne(s,{uniqueId:m=++Z.uniqueId,connectionId:[a.uniqueId]}),a.secondPointId=m,a.connectionId.push(m),n.secondRayPlotted=!0):a.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:(s.connectionId.push(a.uniqueId),a.connectionId.push(d),a.secondPointId=d,n.secondRayPlotted=!0),n.secondRayPlotted&&(n.thirdPointId=a.secondPointId,Z.mouseDown.lastShapeCompleted=!0)):(de([a])&&(a.x=s.x,a.y=s.y),qe(a),l=!1,null===r?(ne(s,{uniqueId:b=++Z.uniqueId,connectionId:[a.uniqueId]}),a.firstPointId=b,a.connectionId.push(b),n.firstRayPlotted=!0):a.secondPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:(s.connectionId.push(a.uniqueId),a.connectionId.push(d),a.firstPointId=d,n.firstRayPlotted=!0),n.firstRayPlotted&&(n.secondPointId=a.firstPointId,oe({type:"ray",uniqueId:++Z.uniqueId,firstPointId:n.secondPointId,angleRayId:a.angleRayId,x:s.x,y:s.y,xOr:s.x,yOr:s.y,xTo:s.x,yTo:s.y,xOrTo:s.x,yOrTo:s.y,connectionId:[n.secondPointId]}),Z.currentUniqueId=Z.uniqueId,n.x=s.x,n.y=s.y)),l=Z.mouseDown.lastShapeCompleted=!1,n.secondRayPlotted&&(P=ue(n.firstPointId).shape,m=ue(n.secondPointId).shape,b=ue(n.thirdPointId).shape,i.firstPoint={x:P.x,y:P.y,label:P.label},i.secondPoint={x:m.x,y:m.y,label:m.label},i.thirdPoint={x:b.x,y:b.y,label:b.label},i.x=m.x,i.y=m.y,m=fe(i,"angleRay"),i.angle=m.angle,i.angleValue=m.angleValue,n.label=m.angleText,n.labelX=n.x+te(10),n.labelY=n.y-te(10),i.uniqueId=a.uniqueId,l=!0)}else if(a&&"triangle"===o&&x){var S,v,q,C=ue(a.triangleId).shape;C.firstSegmentPlotted?(de([a])&&(a.x=s.x,a.y=s.y),qe(a),null===r?(ne(s,{uniqueId:S=++Z.uniqueId,connectionId:[a.uniqueId]}),a.secondPointId=S,a.connectionId.push(S),C.secondSegmentPlotted=!0):a.firstPointId===d||C.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:(s.connectionId.push(a.uniqueId),a.connectionId.push(d),a.secondPointId=d,C.secondSegmentPlotted=!0)):(de([a])&&(a.x=s.x,a.y=s.y),qe(a),l=!1,null===r?(ne(s,{uniqueId:v=++Z.uniqueId,connectionId:[a.uniqueId]}),a.firstPointId=v,a.connectionId.push(v),C.firstSegmentPlotted=!0):a.secondPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:(s.connectionId.push(a.uniqueId),a.connectionId.push(d),a.firstPointId=d,C.firstSegmentPlotted=!0),C.firstSegmentPlotted&&(C.secondPointId=a.firstPointId,oe({type:"segment",uniqueId:++Z.uniqueId,firstPointId:C.secondPointId,triangleId:a.triangleId,x:s.x,y:s.y,xTo:s.x,yTo:s.y,connectionId:[C.secondPointId]}),Z.newPlottedShapes.push(Z.uniqueId),Z.currentUniqueId=Z.uniqueId,C.x=s.x,C.y=s.y)),C.secondSegmentPlotted&&(q=ue(C.firstPointId).shape,C.thirdPointId=a.secondPointId,oe({type:"segment",uniqueId:++Z.uniqueId,firstPointId:C.thirdPointId,secondPointId:C.firstPointId,triangleId:a.triangleId,x:s.x,y:s.y,xTo:q.x,yTo:q.y,connectionId:[C.thirdPointId,C.firstPointId]}),Z.newPlottedShapes.push(Z.uniqueId),Z.currentUniqueId=Z.uniqueId,C.x=s.x,C.y=s.y,C.thirdSegmentPlotted=!0,Z.mouseDown.lastShapeCompleted=!0),l=Z.mouseDown.lastShapeCompleted=!1,C.thirdSegmentPlotted&&(S=ue(C.firstPointId).shape,v=ue(C.secondPointId).shape,q=ue(C.thirdPointId).shape,i.firstPoint={x:S.x,y:S.y,label:S.label},i.secondPoint={x:v.x,y:v.y,label:v.label},i.thirdPoint={x:q.x,y:q.y,label:q.label},i.x=v.x,i.y=v.y,i.uniqueId=C.uniqueId,l=!0)}else if(a&&"circle_3"===o&&x){var T,D,C="circle_3"!==a.type?ue(a.circleId).shape:a;C.firstPointPlotted?(null===r?(ne(s,{uniqueId:T=++Z.uniqueId,connectionId:[C.uniqueId]}),ue(C.secondPointId).shape.isSelected=!0,C.thirdPointId=T,C.thirdPointPloted=!0):C.secondPointId===d||C.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:(s.connectionId.push(C.uniqueId),C.thirdPointId=d,C.thirdPointPloted=!0),C.thirdPointPloted&&(Z.mouseDown.lastShapeCompleted=!0)):(l=!1,ue(C.firstPointId).shape.isSelected=!0,null===r?(ne(s,{uniqueId:D=++Z.uniqueId,connectionId:[C.uniqueId],circleId:C.uniqueId}),C.secondPointId=D,C.firstPointPlotted=!0,ue(C.firstPointId).shape.isSelected=!0,ue(C.secondPointId).shape.isSelected=!0):C.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:(s.connectionId.push(C.uniqueId),s.circle3Id=C.uniqueId,C.secondPointId=d,C.firstPointPlotted=!0,ue(C.firstPointId).shape.isSelected=!0,ue(C.secondPointId).shape.isSelected=!0),C.firstPointPlotted&&(C.secondPointPlotted=!0,Z.currentUniqueId=null,C.x=s.x,C.y=s.y,ue(C.firstPointId).shape.isSelected=!0)),l=Z.mouseDown.lastShapeCompleted=!1,C.thirdPointPloted&&(w=ue(C.firstPointId).shape,T=ue(C.secondPointId).shape,D=ue(C.thirdPointId).shape,i.firstPoint={x:w.x,y:w.y},i.secondPoint={x:T.x,y:T.y},i.thirdPoint={x:D.x,y:D.y},T=(w=i).firstPoint,D=w.secondPoint,w=w.thirdPoint,w={r:(w=ae(T,D,w)).r,x:w.x,y:w.y},ue(C.firstPointId).shape.isSelected=!1,ue(C.secondPointId).shape.isSelected=!1,ue(C.thirdPointId).shape.isSelected=!1,i.r=w.r,i.x=w.x,i.y=w.y,l=!0)}else if(a&&"angle"===o&&x){var w,M,L=("point"===a.type?ue(a.angleId):ue(a.uniqueId)).shape;L.firstPointPlotted?(null===r?(ne(s,{uniqueId:w=++Z.uniqueId,connectionId:[L.uniqueId],angleId:L.uniqueId}),L.thirdPointId=w,L.thirdPointPloted=!0):L.secondPointId===d||L.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:(s.connectionId.push(L.uniqueId),L.thirdPointId=d,s.angleId=L.uniqueId,L.thirdPointPloted=!0),L.thirdPointPloted&&(Z.mouseDown.lastShapeCompleted=!0)):(l=!1,ue(L.firstPointId).shape.isSelected=!0,null===r?(ne(s,{uniqueId:M=++Z.uniqueId,connectionId:[L.uniqueId],angleId:a.angleId}),ue(L.firstPointId).shape.isSelected=!0,ue(M).shape.isSelected=!0,L.secondPointId=M,L.firstPointPlotted=!0):L.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:(s.connectionId.push(L.uniqueId),s.angleId=a.angleId,L.secondPointId=d,L.firstPointPlotted=!0,ue(L.secondPointId).shape.isSelected=!0),L.firstPointPlotted&&(L.secondPointPlotted=!0,Z.currentUniqueId=null,L.x=s.x,L.y=s.y)),l=Z.mouseDown.lastShapeCompleted=!1,L.thirdPointPloted&&(M=ue(L.firstPointId).shape,X=ue(L.secondPointId).shape,k=ue(L.thirdPointId).shape,M.isSelected=!1,X.isSelected=!1,k.isSelected=!1,i.firstPoint={x:M.x,y:M.y,label:M.label},i.secondPoint={x:X.x,y:X.y,label:X.label},i.thirdPoint={x:k.x,y:k.y,label:k.label},i.x=X.x,i.y=X.y,k=fe(i),i.angle=k.angle,i.angleValue=k.angleValue,L.label=k.angleText,L.labelX=L.x+te(10),L.labelY=L.y-te(10),i.uniqueId=a.uniqueId,l=!0)}else if(a&&"angleB"===o&&x&&Z.newShapeStarted){var k,O,X=("point"===a.type?ue(a.angleBId):ue(a.uniqueId)).shape;"point"===X.mode?(void 0===X?(l=Z.mouseDown.lastShapeCompleted=!1,Z.mouseDown.isMouseDown=!1):null!=X&&X.firstPointPlotted?(null===r||X.secondPointId===d||X.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:(s.connectionId.push(X.uniqueId),X.thirdPointId=d,s.angleBId=a.uniqueId,X.thirdPointPloted=!0,t[r].isSelected=!0),X.thirdPointPloted&&(Z.mouseDown.lastShapeCompleted=!0)):(l=!1,null===r||X.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:(s.connectionId.push(X.uniqueId),s.angleBId=a.uniqueId,X.secondPointId=d,X.firstPointPlotted=!0,t[r].isSelected=!0),X.firstPointPlotted&&(X.secondPointPlotted=!0,Z.currentUniqueId=null,X.x=s.x,X.y=s.y)),l=Z.mouseDown.lastShapeCompleted=!1,null!==X&&void 0!==X&&X.thirdPointPloted&&(k=ue(X.firstPointId).shape,L=ue(X.secondPointId).shape,O=ue(X.thirdPointId).shape,i.firstPoint={x:k.x,y:k.y,label:k.label},i.secondPoint={x:L.x,y:L.y,label:L.label},i.thirdPoint={x:O.x,y:O.y,label:O.label},i.x=L.x,i.y=L.y,i.uniqueId=X.uniqueId,O=xe(i),X.firstPoint=i.firstPoint,X.secondPoint=i.secondPoint,X.thirdPoint=i.thirdPoint,O=oe({type:"line",uniqueId:++Z.uniqueId,x:L.x,y:L.y,xTo:O.x,yTo:O.y,slope:Ce(L.x,L.y,O.x,O.y)}),i.bisectorLine=O,X.bisectorLine=O,i.mode=X.mode,Z.newPlottedShapes.push(O.uniqueId),l=!0)):"segment"===X.mode&&(O=ue(Se(e)).shape,void 0===X?(l=Z.mouseDown.lastShapeCompleted=!1,Z.mouseDown.isMouseDown=!1):null!==X&&void 0!==X&&X.firstSegmentPlotted||(l=!1,void 0!==O&&O.type.includes("segment")&&O.uniqueId===X.firstSegmentId?l=Z.mouseDown.lastShapeCompleted=!1:void 0!==O&&O.type.includes("segment")&&(O.angleBId=X.uniqueId,X.secondSegmentId=O.uniqueId,X.firstSegmentPlotted=!0,X.secondSegment={x:O.x,y:O.y,xTo:O.xTo,yTo:O.yTo},O.isSelected=!0),X.firstSegmentPlotted&&(X.secondSegmentPlotted=!0,Z.currentUniqueId=null,X.x=s.x,X.y=s.y),X.secondSegmentPlotted&&(Z.mouseDown.lastShapeCompleted=!0)),l=Z.mouseDown.lastShapeCompleted=!1,X.secondSegmentPlotted&&(i.firstSegment=X.firstSegment,i.secondSegment=X.secondSegment,O=function(e,t){var n=[],i=[];Object.values(e).forEach(function(e){n.push(e)}),Object.values(t).forEach(function(e){n.push(e)});for(var o=0;o<n.length;o++)o%2==0&&i.push(n[o]+"/"+n[o+1]);for(var l=[],s=[].concat(i).sort(),a=0;a<s.length;a++)s[a+1]===s[a]&&l.push(s[a]);t=l[0].split("/");return{x:t[0],y:t[1]}}(X.firstSegment,X.secondSegment),i.x=+O.x,i.y=+O.y,X.x=+O.x,X.y=+O.y,i.uniqueId=X.uniqueId,E=xe(i,"segment"),E=oe({type:"line",uniqueId:++Z.uniqueId,x:+O.x,y:+O.y,xTo:E.x,yTo:E.y,slope:Ce(+O.x,+O.y,E.x,E.y)}),i.bisectorLine=E,X.bisectorLine=E,i.mode=X.mode,Z.newPlottedShapes.push(E.uniqueId),l=!0))}else if(a&&"angleSize"===o&&x&&Z.newShapeStarted){var E,Y,U=("point"===a.type?ue(a.angleSizeId):ue(a.uniqueId)).shape;l=Z.mouseDown.lastShapeCompleted=!1,"point"===U.mode?void 0===U?(l=Z.mouseDown.lastShapeCompleted=!1,Z.mouseDown.isMouseDown=!1):null!=U&&U.firstPointPlotted?U.secondPointPlotted?$.removeUnplotedShapes():d===U.firstPointId?l=Z.mouseDown.lastShapeCompleted=!1:(0<=d&&null!==d?(Y=d,U.connectionId.push(d)):l=Z.mouseDown.lastShapeCompleted=!1,void 0!==Y&&(E=ue(U.firstPointId).shape,U.secondPointId=Y,U.secondPointPlotted=!0,U.x=s.x,U.y=s.y,U.xTo=E.x,U.yTo=E.y,0<=U.secondPointId&&((Y=ue(Y).shape)&&(ue(U.firstPointId).shape.isSelected=!0,Y.isSelected=!0)),H.waiting=!0,void 0!==W.angleSize&&W.angleSize({id:H.id,type:"angleSize",visible:!0,data:JSON.parse(JSON.stringify(U))},!0),l=!1)):(l=!1,s.angleSizeId=U.uniqueId,Z.currentUniqueId=null,U.firstPointPlotted=!0,U.x=s.x,U.y=s.y,ue(U.firstPointId).shape.isSelected=!0):"segment"===U.mode&&(ue(Se(e)).shape,l=Z.mouseDown.lastShapeCompleted=!1)}else if(a&&"segSize"===o&&x){U=("point"===a.type?ue(a.segSizeId):ue(a.uniqueId)).shape;l=Z.mouseDown.lastShapeCompleted=!1,void 0===U?(l=Z.mouseDown.lastShapeCompleted=!1,Z.mouseDown.isMouseDown=!1):null!=U&&U.firstPointPlotted?$.removeUnplotedShapes():(l=!1,s.segSizeId=U.uniqueId,Z.currentUniqueId=null,U.firstPointPlotted=!0,U.x=s.x,U.y=s.y,ue(U.firstPointId).shape.isSelected=!0,U.firstPointPlotted&&(H.waiting=!0,void 0!==W.segSize&&W.segSize({id:H.id,type:"segSize",visible:!0,data:JSON.parse(JSON.stringify(U))},!0),l=!1))}else if(a&&"circleSize"===o&&x){var A=("point"===a.type?ue(a.circleSizeId):ue(a.uniqueId)).shape;l=Z.mouseDown.lastShapeCompleted=!1,void 0===A?(l=Z.mouseDown.lastShapeCompleted=!1,Z.mouseDown.isMouseDown=!1):null!=A&&A.firstPointPlotted?$.removeUnplotedShapes():(l=!1,s.circleSizeId=A.uniqueId,Z.currentUniqueId=null,A.firstPointPlotted=!0,A.x=s.x,A.y=s.y,ue(A.firstPointId).shape.isSelected=!0,A.firstPointPlotted&&(H.waiting=!0,void 0!==W.circleSize&&W.circleSize({id:H.id,type:"circleSize",visible:!0,data:JSON.parse(JSON.stringify(A))},!0),l=!1))}else if(a&&"midPoint"===o&&x){var z,R,N,A=ue(Se(e)).shape,j=("point"===a.type||a.type.includes("segment")?ue(a.midPointId):ue(a.uniqueId)).shape,V=ue(j.firstPointId).shape;null!=j&&j.firstPointPlotted?j.secondPointPlotted&&(Z.mouseDown.lastShapeCompleted=!0):(l=!1,null!=A&&A.type.includes("segment")&&(l=Z.mouseDown.lastShapeCompleted=!1),null!==r||null!=A&&A.type.includes("segment")?j.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:0<=r&&null!==r&&(s.connectionId.push(j.uniqueId),s.midPointId=a.midPointId,j.secondPointId=d,j.firstPointPlotted=!0):(ne(s,{uniqueId:z=++Z.uniqueId,connectionId:[j.uniqueId],midPointId:a.midPointId}),j.secondPointId=z,j.firstPointPlotted=!0),j.firstPointPlotted&&(j.secondPointPlotted=!0,Z.currentUniqueId=null,j.x=s.x,j.y=s.y),V.isSelected=!0),l=Z.mouseDown.lastShapeCompleted=!1,j.secondPointPlotted&&void 0===j.onSegment?(z=ue(j.firstPointId).shape,R=ue(j.secondPointId).shape,i.firstPoint={x:z.x,y:z.y,label:z.label},i.secondPoint={x:R.x,y:R.y,label:R.label},i.uniqueId=j.uniqueId,i.x=(z.x+R.x)/2,i.y=(z.y+R.y)/2,j.x=(z.x+R.x)/2,j.y=(z.y+R.y)/2,i.midPointId=++Z.uniqueId,j.midPointId=i.midPointId,l=!0,ne({type:"point",x:i.x,y:i.y},{connectionId:[j.uniqueId],uniqueId:i.midPointId,kshitij:!0}),(R=null===(R=ue(j.segmentId))||void 0===R?void 0:R.shape)&&(R.isMouseDown=!1,R.isSelected=!1),j.strokeColor=H.pointColor,j.fillColor=H.pointColor,V.isSelected=!1):j.secondPointPlotted&&void 0!==j.onSegment&&(i.x=(j.firstPointCoords.x+j.secondPointCoords.x)/2,i.y=(j.firstPointCoords.y+j.secondPointCoords.y)/2,i.uniqueId=j.uniqueId,i.midPointId=++Z.uniqueId,j.midPointId=i.midPointId,l=!0,ne({type:"point",x:i.x,y:i.y},{connectionId:[j.uniqueId],uniqueId:i.midPointId,kshitij:!0}),(N=ue(j.segmentId).shape).isMouseDown=!1,N.isSelected=!1)}else if(a&&"square"===o&&x)"point"===a.type&&(K=ue(a.squareId).shape),K.firstPointPlotted||(d===K.firstPointId?(l=Z.mouseDown.lastShapeCompleted=!1,ue(K.firstPointId).shape.isSelected=!0):null===r?(ne(s,{uniqueId:u=++Z.uniqueId,connectionId:[K.uniqueId],squareId:a.squareId}),K.secondPointId=u,K.firstPointPlotted=!0,K.secondPointPlotted=!0,ue(K.firstPointId).shape.isSelected=!0,ue(K.secondPointId).shape.isSelected=!0):0<=r&&null!==r&&(s.connectionId.push(K.uniqueId),s.squareId=a.squareId,K.secondPointId=d,K.secondPointPlotted=!0,K.firstPointPlotted=!0,ue(K.firstPointId).shape.isSelected=!0,ue(K.secondPointId).shape.isSelected=!0)),K.secondPointId&&(R=ue(K.firstPointId).shape,V=ue(K.secondPointId).shape,i.firstPoint={x:R.x,y:R.y},i.secondPoint={x:V.x,y:V.y},i.firstPointId=K.firstPointId,i.secondPointId=K.secondPointId,i.side=H.LabComClass.Maths.getDistance(R,V),i.label="A  §qQuadrat§r = "+re(i.side*i.side),K.label="A  §qQuadrat§r = "+re(i.side*i.side),j=H.LabComClass.Maths.getPoint(V,H.LabComClass.Maths.getAngle(V.x,V.y,R.x,R.y)-Math.PI/2,i.side),J=H.LabComClass.Maths.getPoint(R,H.LabComClass.Maths.getAngle(V.x,V.y,R.x,R.y)-Math.PI/2,i.side),N=++Z.uniqueId,u=++Z.uniqueId,K.labelX=(R.x+j.x)/2,K.labelY=(R.y+j.y)/2,ne(j,{connectionId:[K.uniqueId],uniqueId:N,squareId:K.uniqueId}),ne(J,{connectionId:[K.uniqueId],uniqueId:u,squareId:K.uniqueId}),i.thirdPointId=N,i.fourthPointId=u,i.thirdPoint=j,i.fourthPoint=J,i.uniqueId=K.uniqueId,K.thirdPointId=N,K.fourthPointId=u,K.firstPoint=R,K.secondPoint=V,K.thirdPoint=j,K.fourthPoint=J,ce(R.x,R.y,V.x,V.y,K.uniqueId),ce(V.x,V.y,j.x,j.y,K.uniqueId),ce(R.x,R.y,J.x,J.y,K.uniqueId),ce(j.x,j.y,J.x,J.y),K.uniqueId,ue(K.firstPointId).shape.isSelected=!1,l=!(ue(K.secondPointId).shape.isSelected=!1));else if(a&&"mirrorOnLine"===o&&x){var J=Se(e),K=ue(J).shape,B=("point"===a.type?ue(a.mirrorOnLineId):ue(a.uniqueId)).shape;null!==B&&void 0!==B&&B.firstPointPlotted||void 0===_typeof(B)||(l=!1,ue(B.firstPointId).shape.isSelected=!0,null===r&&K&&be(K,Z.lineTypes)?(B.lineId=J,B.firstPointPlotted=!0):((null===B||void 0===B?void 0:B.firstPointId)===d||0<=r&&null!==r)&&(l=Z.mouseDown.lastShapeCompleted=!1),null!==B&&void 0!==B&&B.firstPointPlotted&&(B.linePlotted=!0,Z.currentUniqueId=null)),l=Z.mouseDown.lastShapeCompleted=!1,void 0!==B&&B.linePlotted?(F=ue(B.firstPointId).shape,i.firstPoint={x:F.x,y:F.y,uniqueId:F.uniqueId},B.firstPoint={x:F.x,y:F.y,uniqueId:F.uniqueId},F=pe((F=Ie(J=ue(B.lineId).shape)).a,F.b,F.c,B.x,B.y),i.x=F.x,i.y=F.y,B.x=F.x,B.y=F.y,i.lineId=J.uniqueId,i.mirrorPointId=++Z.uniqueId,ne(F,{uniqueId:i.mirrorPointId,mirrorOnLineId:B.uniqueId,connectionId:[B.uniqueId]}),l=!0,ue(B.firstPointId).shape.isSelected=!1):l=Z.mouseDown.lastShapeCompleted=!1}else if(a&&"perpendicularBisector"===o&&x&&Z.newShapeStarted){var _,G,F=a;"point"===F.mode?(F.firstPointPlotted?F.secondPointPlotted&&(Z.mouseDown.lastShapeCompleted=!0):(F.firstPointId===d?l=Z.mouseDown.lastShapeCompleted=!1:0<=r&&null!==r&&(s.connectionId.push(F.uniqueId),F.secondPointId=d,F.firstPointPlotted=!0,ue(F.firstPointId).shape.isSelected=!0),F.firstPointPlotted&&(F.secondPointPlotted=!0,Z.currentUniqueId=null,F.x=s.x,F.y=s.y)),F.firstPointPlotted&&F.secondPointPlotted&&(_=he(F,B=ue(a.firstPointId).shape,_=ue(F.secondPointId).shape,{x:(B.x+_.x)/2,y:(B.y+_.y)/2}),i=_objectSpread(_objectSpread({},i),_),l=!0,ue(F.firstPointId).shape.isSelected=!1)):"segment"===F.mode&&(G=he(F,_={x:F.segment.x,y:F.segment.y},G={x:F.segment.xTo,y:F.segment.yTo},{x:(_.x+G.x)/2,y:(_.y+G.y)/2}),i=_objectSpread(_objectSpread({},i),G),l=!0)}else if(a&&("perpendicularLine"===o||"parallelLine"===o)&&x)l=!0,a.lineToPoint?(c=ue(a.line).shape,null===r?(G=Math.abs(H.LabComClass.Maths.getPointLineDistance(s,c,{x:c.xTo,y:c.yTo})))<te(H.snappingDiff)&&a.lineSelected||G>te(H.snappingDiff)?(ne(s,{uniqueId:G=++Z.uniqueId,connectionId:[a.uniqueId]}),a.secondPointId=G,a.connectionId.push(G),Z.mouseDown.lastShapeCompleted=!0):(l=!1,Z.mouseDown.lastShapeCompleted=!1):d===a.firstPointId?(l=!1,Z.mouseDown.lastShapeCompleted=!1):(s.connectionId.push(a.uniqueId),a.connectionId.push(d),a.secondPointId=d,Z.mouseDown.lastShapeCompleted=!0),l&&(c.isSelected=!1)):(c=Se(e))&&(p=ue(c).shape)&&be(p,Z.lineTypes)?(y=ve(e,"perpendicularLine"===o))&&(a.slope=y.slope,ue(a.firstPointId).shape.isSelected=!1,Te(a),Z.mouseDown.lastShapeCompleted=!0):(l=!1,Z.mouseDown.lastShapeCompleted=!1),a.pointToLine?a.firstPointPlotted=!0:a.lineSelected=!0,(l=l&&ge(a,["x","y","xTo","yTo"]))?(i.x=a.x,i.y=a.y,i.xTo=a.xTo,i.yTo=a.yTo,i.slope=a.slope,i.uniqueId=a.uniqueId,a.visible=!0):(l=!1,Z.mouseDown.lastShapeCompleted=!1);else if(a&&"compass"===o)i.x=a.x,i.y=a.y,i.r=a.r,i.uniqueId=a.uniqueId,l=!0,null===r?void 0===a.firstPointId||a.isPloted?a.isPloted?x&&(ne(s,{uniqueId:y=++Z.uniqueId,connectionId:[a.uniqueId]}),a.connectionId.push(y)):(l=Z.mouseDown.lastShapeCompleted=!1,a.isPloted=!0):(t.pop(),l=!1,Z.mouseDown.lastShapeCompleted=!0):a.firstPointId!==d||a.isPloted?a.isPloted?(s.connectionId.push(a.uniqueId),a.centerPointId=d,a.connectionId.push(d),Z.mouseDown.lastShapeCompleted=!0,(t=void 0!==a.firstPointId?ue(a.firstPointId):ue(a.circleID))&&(t.shape.isSelected=!1),(t=0<=a.segmentID?ue(a.segmentID).shape:void 0)&&(t.isSelected=!1)):(a.secondPointId=d,l=Z.mouseDown.lastShapeCompleted=!1,a.isPloted=!0):l=Z.mouseDown.lastShapeCompleted=!1;else if("circle"===o&&a)l=!0,i.x=a.x,i.y=a.y,i.r=a.r,i.uniqueId=a.uniqueId,null===r&&x?(ne(s,{uniqueId:r=++Z.uniqueId,connectionId:[a.uniqueId]}),a.secondPointId=r,a.connectionId.push(r),ue(a.firstPointId).shape.isSelected=!1):x&&a.firstPointId!==d?(ue(a.firstPointId).shape.isSelected=!1,s.connectionId.push(a.uniqueId),a.secondPointId=d,a.connectionId.push(d),Z.mouseDown.lastShapeCompleted=!0):l=Z.mouseDown.lastShapeCompleted=!1;else if("scale"===o)l=!0,i.x=Q.x,i.y=Q.y,i.xTo=Q.xTo,i.yTo=Q.yTo,De();else if("brush1"!==o&&"brush2"!==o&&"brush3"!==o||!a)"select"===o||"move"===o&&Z.mouseDown.objectDown?(l=!1,me(e)):"move"!==o&&"moveGraph"!==o||(l=!1);else{if(a.toColor){if("point"===a.type||"angle"===a.type)switch(i.prevStrokeColor=void 0===a.strokeColor?H.segmentColor:a.strokeColor,i.prevFillColor=void 0===a.fillColor?H.segmentColor:a.fillColor,o){case"brush1":i.prevStrokeColor=void 0===a.strokeColor?H.segmentColor:a.strokeColor,i.prevFillColor=void 0===a.fillColor?H.segmentColor:a.fillColor,a.fillColor=H.shapes.brush1.color.stroke,a.strokeColor=H.shapes.brush1.color.stroke;break;case"brush2":i.prevStrokeColor=void 0===a.strokeColor?H.segmentColor:a.strokeColor,i.prevFillColor=void 0===a.fillColor?H.segmentColor:a.fillColor,a.fillColor=H.shapes.brush2.color.stroke,a.strokeColor=H.shapes.brush2.color.stroke;break;case"brush3":i.prevStrokeColor=void 0===a.strokeColor?H.segmentColor:a.strokeColor,i.prevFillColor=void 0===a.fillColor?H.segmentColor:a.fillColor,a.fillColor=H.shapes.brush3.color.stroke,a.strokeColor=H.shapes.brush3.color.stroke}else switch(i.prevStrokeColor=void 0===a.strokeColor?H.segmentColor:a.strokeColor,o){case"brush1":i.prevStrokeColor=void 0===a.strokeColor?H.segmentColor:a.strokeColor,a.strokeColor=H.shapes.brush1.color.stroke;break;case"brush2":i.prevStrokeColor=void 0===a.strokeColor?H.segmentColor:a.strokeColor,a.strokeColor=H.shapes.brush2.color.stroke;break;case"brush3":i.prevStrokeColor=void 0===a.strokeColor?H.segmentColor:a.strokeColor,a.strokeColor=H.shapes.brush3.color.stroke}Z.mouseDown.lastShapeCompleted=!0,Z.mouseDown.isMouseDown=!1,i.type="colour",i.shapeLabel=a.label,i.color=a.strokeColor,i.shapeId=a.uniqueId,i.shapeType=a.type,l=!0}a.isSelected=!1,a.isMouseDown=!1}se(e),se(e),ye(i,l)}function ce(e,t,n,i,o){o=oe({type:"segment",uniqueId:++Z.uniqueId,x:e,y:t,xTo:n,yTo:i,squareId:o});return Z.newPlottedShapes.push(o.uniqueId),o}function pe(e,t,n,i,o){n=-2*(e*i+t*o+n)/(e*e+t*t);return{x:n*e+i,y:n*t+o}}function ye(t,e){var n,i=H.interactionType;void 0===t.uniqueId||(n=ue(t.uniqueId)).shape&&Object.keys(n.shape).forEach(function(e){void 0!==n.shape[e]&&(t[e]=n.shape[e])}),l(),"select"===i||"move"===i&&Z.mouseDown.objectDown?void 0!==W[i]&&W[i]({id:H.id,type:"select"},!0):e&&(Z.mouseDown.lastShapeCompleted=!0,Z.newShapeStarted=!1,Z.currentUniqueId=null,t.newPlottedShapes=Z.newPlottedShapes,t.step=H.currentStep,i=t,(e={}).id=H.id,e.type="geoInteraction",(i=JSON.parse(JSON.stringify(i))).type=H.interactionType,e.data=i,void 0!==W[e.type]&&W[e.type](e,!0)),Z.isLableSelected=!1}function he(e,t,n,i){var o={},l=H.LabComClass.Maths.getAngle(t.x,t.y,n.x,n.y);e.x=i.x,e.y=i.y,e.angle=l+Math.PI/2,e.point=H.LabComClass.Maths.getPoint(i,e.angle,te(10)),o.x=i.x,o.y=i.y,o.xTo=e.point.x,o.yTo=e.point.y,o.uniqueId=e.uniqueId,o.slope=isFinite(Ce(e.point.x,e.point.y,e.x,e.y))?Ce(e.point.x,e.point.y,e.x,e.y):null,o.firstPoint=t,o.secondPoint=n;e=oe({type:"line",uniqueId:++Z.uniqueId,x:e.point.x,y:e.point.y,xTo:e.x,yTo:e.y,slope:Ce(e.point.x,e.point.y,e.x,e.y)});return Z.newPlottedShapes.push(e.uniqueId),o}function xe(e,t){var n,i,o=1<arguments.length&&void 0!==t?t:"point",t={};return"point"===o?(n=f(e.firstPoint,e.secondPoint),i=f(e.secondPoint,e.thirdPoint)):"segment"===o&&(n=e.firstSegment,i=e.secondSegment),t.eqn=function(e,t,n,i){e.c<0&&0<=t.c&&(e.a=-e.a,e.b=-e.b,e.c=-e.c);0<=e.c&&t.c<0&&(t.a=-t.a,t.b=-t.b,t.c=-t.c);e.c<0&&t.c<0&&(e.a=-e.a,e.b=-e.b,e.c=-e.c,t.a=-t.a,t.b=-t.b,t.c=-t.c);var o={},l={};"(".concat(e.a,"x+").concat(e.b,"y+").concat(e.c,")/").concat(Math.sqrt(e.a*e.a+e.b*e.b));o.a=e.a/Math.sqrt(e.a*e.a+e.b*e.b),o.b=e.b/Math.sqrt(e.a*e.a+e.b*e.b),o.c=e.c/Math.sqrt(e.a*e.a+e.b*e.b),o.form="".concat(o.a,"x+").concat(o.b,"y+").concat(o.c);"(".concat(t.a,"x+").concat(t.b,"y+").concat(t.c,")/").concat(Math.sqrt(t.a*t.a+t.b*t.b));l.a=t.a/Math.sqrt(t.a*t.a+t.b*t.b),l.b=t.b/Math.sqrt(t.a*t.a+t.b*t.b),l.c=t.c/Math.sqrt(t.a*t.a+t.b*t.b),l.form="".concat(l.a,"x+").concat(l.b,"y+").concat(l.c);var s={firstCase:{},secondCase:{}};s.firstCase.b=o.b-l.b,s.firstCase.a=o.a-l.a,s.firstCase.c=o.c-l.c,s.secondCase.a=o.a+l.a,s.secondCase.b=o.b+l.b,s.secondCase.c=o.c+l.c,s.required={};i=function(e,t,n,i,o,l){var s=function(e,t,n,i){var o={},l={};o.m1=-(e.a/e.b),o.m2=-(t.a/t.b),o.ratio=Math.abs((o.m1-o.m2)/(1+o.m1*o.m2)),o.angle=Math.atan(o.ratio),o.degree=o.angle*(180/Math.PI),o.obtuseAngle=Math.atan(-(o.m1-o.m2)/(1+o.m1*o.m2))*(180/Math.PI),o.tanTheta=(t.a*e.b-e.a*t.b)/(t.a*e.a+t.b*e.b),o.degSlope=Math.atan(o.tanTheta)*(180/Math.PI),l.startAngle=H.LabComClass.Maths.getAngle(n.xTo,n.yTo,n.x,n.y),l.endAngle=H.LabComClass.Maths.getAngle(i.x,i.y,i.xTo,i.yTo),l.angleRad=l.startAngle-l.endAngle,l.angleS=180*l.angleRad/Math.PI,l.angleRad<0?(l.scene=1,l.degree=-1*l.angleRad*180/Math.PI):0<l.angleRad&&(l.scene=2,l.degree=360-180*l.angleRad/Math.PI);return l}(e,t,o,l),o={},l=s.degree;270<=s.degree&&(l=s.degree-270);return o.main=e.a*t.a+e.b*t.b,0<l&&l<90&&o.main<0?n:90<l&&o.main<0?i:90<l&&0<o.main?n:0<l&&l<90&&0<o.main||0===o.main?i:void 0}(e,t,s.firstCase,s.secondCase,n,i);return s.required=i,s.required}(Ie(n),Ie(i),n,i),t.formEqn=function(e,t){var n={};t.x!==Z.arbitaryX&&t.xTo!==Z.arbitaryX||(Z.arbitaryX=Z.arbitaryX+1);n.eqn="".concat(e.eqn.a,"x +").concat(e.eqn.b,"y +").concat(e.eqn.c),n.calcY="y=(".concat(-e.eqn.a,"x + ").concat(-e.eqn.c,")/").concat(e.eqn.b),n.computeY=(-e.eqn.a*Z.arbitaryX-e.eqn.c)/e.eqn.b,n.computeX=Z.arbitaryX,isFinite(n.computeY)||(n.computeX=t.x,n.computeY=0);0==Math.trunc(100*e.eqn.b)&&(n.computeX=t.x,n.computeY=0);return n}(t,i),t.x=t.formEqn.computeX,t.y=t.formEqn.computeY,"point"===o?t.bisectorLine={type:"line",x:e.secondPoint.x,y:e.secondPoint.y,xTo:t.x,yTo:t.y}:"segment"===o&&(t.bisectorLine={type:"line",x:e.x,y:e.y,xTo:t.x,yTo:t.y}),t}function Ie(e){var t={};return t.segment=e.label,t.slope=isFinite(Ce(e.x,e.y,e.xTo,e.yTo))?Ce(e.x,e.y,e.xTo,e.yTo):void 0,void 0!==t.slope?(t.eqn="y-".concat(e.y,"=").concat(t.slope,"*(x-").concat(e.x,")"),t.b=1,t.a=-t.slope,t.c=t.slope*e.x-e.y,t.cMod=Math.abs(t.slope*e.x-e.y),t.form="y+".concat(t.a,"x+").concat(t.c)):(t.eqn="x=".concat(e.x),t.form="x-".concat(e.x),t.a=1,t.b=0,t.c=-e.x,t.cMod=Math.abs(-e.x)),t}function f(e,t){var n={};return n.x=e.x,n.y=e.y,n.xTo=t.x,n.yTo=t.y,e.label&&t.label&&(n.label=e.label+t.label),n}function fe(e,t){var n,i=1<arguments.length&&void 0!==t?t:"angle",o=e.firstPoint,l=e.secondPoint,s=e.thirdPoint,a=H.LabComClass.Maths.getAngle(l.x,l.y,o.x,o.y),t=H.LabComClass.Maths.getAngle(l.x,l.y,s.x,s.y),e=a-t;return e<0?e=-1*e*180/Math.PI:0<e&&(e=360-180*e/Math.PI),null!=o&&o.label&&null!=l&&l.label&&null!=s&&s.label&&"angle"===i?n="§a  ".concat(o.label).concat(l.label).concat(s.label,"=").concat(Math.round(e),"°"):null!=o&&o.label&&null!=l&&l.label&&null!=s&&s.label&&"angleRay"===i?n="§a  ".concat(o.label).concat(l.label).concat(s.label):"angle"===i?n="".concat(Math.round(e),"°"):"angleRay"===i&&(n=""),{angleText:n,angle:e,angleValue:Math.round(e),startAngle:a,endAngle:t}}function ge(e,t){for(var n=0;n<t.length;n++)if(null===e[t[n]]||isNaN(e[t[n]]))return!1;return!0}function Pe(e){for(var t=null,n=null,i=null,o=0;o<H.interactionElements.length;o++){var l=H.interactionElements[o];"point"===l.type&&(n=H.LabComClass.Maths.getDistance(e,l)),(null===t&&null!==n||null!==t&&n<t)&&(t=n,i=o)}return null!==i&&t<te(H.snappingDiff)?(Z.mouseDown.objectDown=!0,i):null}function z(e,t){for(var n=null,i=null,o=null,l=H.interactionElements.length-1;0<=l;l--){var s=H.interactionElements[l];(!t||s.uniqueId!==Z.currentUniqueId||"move"===H.interactionType&&s.uniqueId!==Z.currentUniqueId)&&null!==(i="point"===s.type?H.LabComClass.Maths.getDistance(e,s):null)&&(null===n||i<n)&&(n=i,o=l)}return null!==i&&null!==o&&n<te(H.snappingDiff)?{dist:n,index:o,plotedPoint:H.interactionElements[o]}:null}function be(e,t){return t.includes(e.type)}function _(o,l,s,a){var e=H.LabComClass.Maths.getIntersectOfTwoCircles(o.x,o.y,o.r,l.x,l.y,l.r);if(1<e.length){var t=function(e){var t=H.LabComClass.Maths.getDistance(e,s);if(!1===a)return e.angle1=H.LabComClass.Maths.getAngle(o.x,o.y,e.x,e.y),e.dist=t;if(t<=te(a)){e.dist=t;var n=new H.LabComClass.Vector(l.x-o.x,l.y-o.y),i=new H.LabComClass.Vector(e.x-o.x,e.y-o.y);return e.angle=n.crossProduct(i).z,t}return null},n=[],i=t(e[0],e[1]);if(null!==i&&n.push(e[0]),null!==t(e[1],e[0])&&n.push(e[1]),n.length){for(var r=0,d=n[0].dist,u=0;u<n.length;u++)n[u].dist<d&&(d=n[u].dist,r=u);return n[r]}return null}return null}function G(e,n,i,o){var t={x:n.x,y:n.y,xTo:n.xTo,yTo:n.yTo};"ray"===n.type&&(t.xTo=n.xOr,t.yTo=n.yOr);l=e,s=t,e=H.LabComClass.Maths.findCircleLineIntersect({x:l.x,y:l.y,r:l.r},{x:s.x,y:s.y},{x:s.xTo,y:s.yTo});if(e.p1||e.p2){var t=function(e){if((n.type.includes("segment")||"ray"===n.type)&&!e.isInSegment)return null;var t=H.LabComClass.Maths.getDistance(e,i);return void 0===o||t<te(o)?e.dist=t:null},l=null,s=null,l=t(e.p1),s=t(e.p2);return null!==l&&null!==s?l<s?e.p1:e.p2:null!==l?e.p1:null!==s?e.p2:null}return null}function me(e){var t=H.interactionElements,n=null,i=null,o=null,l=ee(e.pageX,e.pageY),s=e.pageX,a=e.pageY,r=z(l,!1);if(r&&(n=r.dist,o=r.index),null===o){o=i=n=null;for(var d=0;d<t.length;d++){var u,c,p,y=t[d];"circle"===y.type||"compass"===y.type||"circle_3"===y.type?i=H.LabComClass.Maths.getDistance(l,y)-y.r:"line"===y.type&&!y.dontSelect||"perpendicularLine"===y.type||"parallelLine"===y.type?i=H.LabComClass.Maths.getPointLineDistance(l,y,{x:y.xTo,y:y.yTo}):(y.type.includes("segment")&&!y.dontSelect||"ray"===y.type)&&(i=H.LabComClass.Maths.getPointLineDistance(l,y,{x:y.xTo,y:y.yTo}),Math.abs(i)<te(10)&&(p={x:y.xTo,y:y.yTo},"ray"===y.type&&(p={x:y.xOr,y:y.yOr}),u=H.LabComClass.Maths.getDistance(l,y),c=H.LabComClass.Maths.getDistance(l,p),u<=(p=H.LabComClass.Maths.getDistance(y,p))&&c<=p||(i=null))),(null===n&&null!==i||null!==n&&null!==i&&Math.abs(i)<Math.abs(n))&&(n=Math.abs(i),o=d)}}i=null;var h=H.context;h.save(),h.beginPath(),h.font=H.fontSize+"px "+H.LabComClass.polo22KlettRegular,h.textBaseline="bottom";for(var x=null,I=0;I<t.length;I++){var f,g,P=t[I],b=!1;void 0!==P.label&&((f=A(P.labelX,P.labelY)).x+=Number(P.labelDiffX),f.y+=Number(P.labelDiffY),g=h.measureText(P.label).width,P.labelAlign&&"center"===P.labelAlign?s>f.x-g/2-20&&s<f.x+g/2+22&&a>f.y-1.5*H.fontSize&&a<f.y+10&&(b=!(i=0)):s>f.x-20&&s<f.x+g+22&&a>f.y-1.5*H.fontSize&&a<f.y+10&&(b=!(i=0))),(null===n&&null!==i&&!P.dontSelect||null!==n&&null!==i&&Math.abs(i)<=Math.abs(n)&&b&&!P.dontSelect)&&(n=Math.abs(i),x=o=I)}if(h.closePath(),h.restore(),null!==o&&Math.abs(n)<te(10)){if("mousedown"===e.type){if(Z.mouseDown.objectDown=!0,t[o].isSelected)t[o].isMouseDown=!1;else{if("move"===H.interactionType)for(var m=0;m<t.length;m++)t[m].isSelected=!1;t[o].isSelected=!0,t[o].isMouseDown=!0}return x===o&&(Z.isLableSelected=!0),t[o].uniqueId}t[o].isSelected&&!t[o].isMouseDown&&e.pageX===Z.mouseDown.orignalX&&e.pageY===Z.mouseDown.orignalY&&(t[o].isSelected=!1)}return null}function Se(e){var l,s=null,a=null,r=null,t=H.LabComClass.Maths,d=t.getDistance,u=t.getPointLineDistance,t=z(ee(e.pageX,e.pageY),!1);return t&&(s=t.dist,r=t.index),null===r&&(r=a=s=null,l=ee(e.pageX,e.pageY),H.interactionElements.forEach(function(e,t){var n,i,o;"circle"!==e.type&&"compass"!==e.type||(a=d(l,e)-e.r),"line"!==e.type&&"perpendicularLine"!==e.type&&"parallelLine"!==e.type||isNaN(e.xTo)&&isNaN(e.yTo)||(a=H.LabComClass.Maths.getPointLineDistance(l,e,{x:e.xTo,y:e.yTo})),!e.type.includes("segment")&&"ray"!==e.type||(a=u(l,e,{x:e.xTo,y:e.yTo}),Math.abs(a)<te(10)&&(o={x:e.xTo,y:e.yTo},"ray"===e.type&&(o={x:e.xOr,y:e.yOr}),n=d(l,e),i=d(l,o),n<=(o=d(e,o))&&i<=o||(a=null))),(null===s&&null!==a||null!==s&&null!==a&&Math.abs(a)<Math.abs(s))&&(s=a,r=t)})),null!==r&&Math.abs(s)<te(10)?H.interactionElements[r].uniqueId:null}function ve(e,t){for(var n=ee(e.pageX,e.pageY),i={visible:!0,x:n.x,y:n.y,xOr:n.x,yOr:n.y,xTo:n.x,yTo:n.y,xOrTo:n.x,yOrTo:n.y,slope:0,distance:null},o=0;o<H.interactionElements.length;o++){var l=H.interactionElements[o];if(be(l,Z.lineTypes)&&l.uniqueId!==Z.currentUniqueId){var s=function(e,t,n){var i=H.LabComClass.Maths.getDistance(t,n),o=0;0<i&&(e=(n.x-t.x)*(t.y-e.y)-(n.y-t.y)*(t.x-e.x),o=e/i);return o}({x:i.x,y:i.y},{x:l.x,y:l.y},{x:l.xTo,y:l.yTo}),s=Math.abs(s);if(l.type.includes("segment")||"ray"===l.type){if(!(s<te(10)))continue;var a={x:l.xTo,y:l.yTo};if("ray"===l.type&&(a={x:l.xOr,y:l.yOr}),!H.LabComClass.Maths.pointInSegment(n,l,a))continue}(null===i.distance||i.distance>s)&&(i.distance=s,i.line=l.uniqueId,i.slope=H.LabComClass.Maths.getAngle(l.x,l.y,l.xTo,l.yTo),t&&(i.slope+=Math.PI/2),l=H.LabComClass.Maths.getPoint({x:i.x,y:i.y},i.slope,10),i.xTo=l.x,i.yTo=l.y)}}return null!==i.distance&&i.distance<te(10)&&i}function M(e){e.label&&(e.labelX=e.x,e.labelY=e.y,0===e.labelDiffX&&(e.labelDiffX=6,e.labelDiffY=-9))}function qe(e){var t=ee(H.x,H.y),n=ee(H.x+H.width,H.y+H.height),t=Math.abs(t.x)>Math.abs(n.x)?Math.abs(t.x):Math.abs(n.x);t*=10;var i=H.LabComClass.Maths.getAngle(e.x,e.y,e.xTo,e.yTo),n=H.LabComClass.Maths.getPoint({x:e.x,y:e.y},i,t);e.xOr=n.x,e.yOr=n.y;n=H.LabComClass.Maths.getAngle(e.xTo,e.yTo,e.x,e.y),t=H.LabComClass.Maths.getPoint({x:e.xTo,y:e.yTo},n,t);if(e.xOrTo=t.x,e.yOrTo=t.y,e.label&&(t=g(e,{x:e.xTo,y:e.yTo}),e.labelX=t.x,e.labelY=t.y),e&&e.connectionId&&e.connectionId.length)for(var o=0;o<e.connectionId.length;o++){var l=ue(e.connectionId[o]);!l||"perpendicularLine"!==l.shape.type&&"parallelLine"!==l.shape.type||(l.shape.slope=i,"perpendicularLine"===l.shape.type&&(l.shape.slope+=Math.PI/2),Te(l.shape))}}function Ce(e,t,n,i){return(i-t)/(n-e)}function g(e,t){var n=H.LabComClass.Maths,i=n.getRandomNumber,o=n.getPoint,l=n.getAngle,s=n.getDistance,a=n.getPointLineDistance;if(void 0!==e.labelX){n=A(e.labelX,e.labelY);if(n.x>H.x&&n.x<H.x+H.width&&n.y>H.y&&n.y<H.y+H.height){a=a({x:e.labelX,y:e.labelY},e,{x:e.xTo,y:e.yTo});if(Math.abs(a)<te(H.snappingDiff)){for(var r=!1,d=0;d<H.interactionElements.length;d++){var u=H.interactionElements[d];if("point"===u.type&&e.label)if(s({x:u.x+te(10),y:u.y-te(10)},{x:e.labelX,y:e.labelY})<te(1.2*H.snappingDiff)){r=!0;break}}if(!r)return{x:e.labelX,y:e.labelY}}}}for(var c=A(e.x,e.y),p=A(t.x,t.y),y=H.x+30,h=H.y+30,x=H.x+H.width-30,I=H.y+H.height-30,f={x:0,y:0},g=0;;){var P=l(c.x,c.y,p.x,p.y),b=i(-1*(x-y),x-y,1,1);if("ray"===e.type&&(b=Math.abs(b)),(f=o(c,P,b)).x>y&&f.x<x&&f.y>h&&f.y<I){var m=!0;f.x>H.centerX-20&&f.x<H.centerX+20&&(m=!1),f.y>H.centerY-20&&f.y<H.centerY+20&&(m=!1);for(var S=0;S<H.interactionElements.length;S++){var v=H.interactionElements[S];"point"===v.type&&v.label&&s({x:v.x+te(10),y:v.y-te(10)},f)<te(H.snappingDiff)&&(m=!1)}if(m)break}if(200<g){f.x=(c.x+p.x)/2,f.y=(c.y+p.y)/2;break}g++}return f=ee(f.x,f.y)}function Te(e){var t=H.LabComClass.Maths,n=t.getAngle,i=t.getPoint,o=ee(H.x,H.y),t=ee(H.x+H.width,H.y+H.height),o=Math.abs(o.x)>Math.abs(t.x)?Math.abs(o.x):Math.abs(t.x);o*=2,void 0===e.line||(t=ue(e.line)).shape&&(s=n((l=t.shape).x,l.y,l.xTo,l.yTo),"perpendicularLine"===e.type&&(s+=Math.PI/2),e.slope=s);var l=e.slope,s=i({x:e.x,y:e.y},l,o);e.xOr=s.x,e.yOr=s.y,s=i({x:e.x,y:e.y},l,20),e.xTo=s.x,e.yTo=s.y;s=e.slope+Math.PI,o=i({x:e.x,y:e.y},s,o);e.xOrTo=o.x,e.yOrTo=o.y,e.label&&(o=g(e,{x:e.xTo,y:e.yTo}),e.labelX=o.x,e.labelY=o.y)}function De(){var e={};e.id=H.id,e.type="geoScale",e.length=H.LabComClass.Maths.getDistance({x:Q.x,y:Q.y},{x:Q.xTo,y:Q.yTo}),void 0!==W[e.type]&&W[e.type](e,!0)}!function t(n,i){i&&"object"===_typeof(i)&&!Array.isArray(i)?Object.keys(i).forEach(function(e){n.hasOwnProperty(e)&&"object"===_typeof(i[e])&&!Array.isArray(i[e])?t(n[e],i[e]):n[e]=i[e]}):n=i}(H,e),H.centerX=H.x+H.width/2,H.centerY=H.y+H.height/2,y(),H.animClass=new H.LabComClass.GlobalAnimClass,Z.isDevice=H.LabComClass.BrowserDetect.isDevice(),Z.isDevice&&(H.snappingDiff=H.deviceSnappingDiff),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:H.id}}),this.addEventListener=function(e,t){W[e]=t},this.show=function(){H.visible=!0,a()},this.alpha=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];H.transperent=e},this.setTransperent=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];H.transperent=e},this.setLengthLabelColor=function(e){H.lengthLabelColor=e},this.hide=function(){H.visible=!1,a()},this.setPos=function(e,t){H.x=e,H.y=t,a()},this.getPos=function(){return{x:H.x,y:H.y}},this.enable=function(){H.state=!0,a()},this.disable=function(){H.state=!1,a()},this.editable=function(e){return H.shapesEditable=e,H.shapesEditable},this.selectAll=function(t){H.interactionElements.forEach(function(e){e.isSelected=t})},this.snapToGrid=function(e){H.snapToGrid=e},this.redoPossible=function(){return 0!==Z.tempData.length},this.setFinalView=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];H.finalView=e},this.setPointSnapping=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];H.pointSnapping=e},this.setStyle=function(e,t){var n={strokeColor:!0,fillColor:!0},i=ue(e);i&&Object.keys(t).forEach(function(e){n[e]&&(i.shape[e]=t[e])})},this.deleteSelected=function(){var t;H.shapesEditable&&(t=[],H.interactionElements.forEach(function(e){e.isSelected&&(void 0===e.isDeletable||e.isDeletable)&&t.push(e.uniqueId)}),o(t))},this.setScaleDefaultPos=function(e,t,n,i){var o=!(4<arguments.length&&void 0!==arguments[4])||arguments[4];Q.originPos={x:e,y:t,xTo:n,yTo:i},o&&(Q.x=Q.originPos.x,Q.y=Q.originPos.y,Q.xTo=Q.originPos.xTo,Q.yTo=Q.originPos.yTo)},this.getState=function(){return H.state},this.getStep=function(){return H.currentStep},this.showDrawing=function(e,t){null!=e&&e.forEach(function(e){void 0!==e&&(e.visible=t)})},this.setInteractionType=function(e){void 0!==e&&H.interactionType!==e&&(H.interactionType=e,i(),a())},this.getInteractionType=function(){return H.interactionType},this.setStep=function(t){H.currentStep>t&&o(H.interactionElements.filter(function(e){return e.step>t}).map(function(e){return e.uniqueId})),H.currentStep=t},this.setSegmentDistanceLabel=function(e){H.shapes.segment.segDistanceLabel=e},this.getCount=function(){return H.interactionElements.length},this.getData=function(){return{visible:JSON.parse(JSON.stringify(H.interactionElements)),nonVisible:H.tempElements}},this.setWaiting=function(e){H.waiting=e},this.getWaiting=function(){return H.waiting},this.setScreenData=function(e){H.graphValues=e,H.x=e.x,H.y=e.y,H.width=e.width,H.height=e.height,H.screen=e.screen,H.centerX=e.originX,H.centerY=e.originY,H.showQuadrants=e.showQuadrants;for(var t=0;t<H.interactionElements.length;t++){var n,i=H.interactionElements[t];"line"!==i.type&&"ray"!==i.type||!i.label||(n=g(i,{x:i.xTo,y:i.yTo}),i.labelX=n.x,i.labelY=n.y)}y(),se(),a()},this.plotAngleSize=function(t){if(!H.waiting){var n={type:"angleSize",uniqueId:++Z.uniqueId,x:0,y:0,xTo:0,yTo:0,degree:0,clockwise:!0,connectionId:[]},e=++Z.uniqueId;Object.keys(t).forEach(function(e){n[e]=t[e]});var i=H.LabComClass.Maths.getAngle(n.x,n.y,n.xTo,n.yTo);t.degree*=n.clockwise?-1:1;var o=H.LabComClass.Maths.getPoint(n,i+t.degree*Math.PI/180,te(10));n.clockwise?(n.startAngle=i,n.endAngle=i+t.degree*Math.PI/180):(n.startAngle=i+t.degree*Math.PI/180,n.endAngle=i),n.label||(n.label=n.degree+"°"),void 0===n.labelX&&(l=H.LabComClass.Maths.getPoint(n,i+t.degree/2*Math.PI/180,te(25)),n.labelX=l.x,n.labelY=l.y,n.labelDiffX=void 0!==n.labelDiffX?n.labelDiffX:0,n.labelDiffY=void 0!==n.labelDiffY?n.labelDiffY:0);var l=oe(n),o=oe({type:"ray",uniqueId:e,x:n.x,y:n.y,xTo:o.x,yTo:o.y,connectionId:[]});return qe(o),n.connectionId.push(e),Z.mouseDown.lastShapeCompleted=!0,{angleSize:l,ray:o}}},this.setAngleSize=function(t){var n,e,i,o;H.waiting&&(o=++Z.uniqueId,n=ue(t.uniqueId).shape,Object.keys(t).forEach(function(e){n[e]=t[e]}),i=ue(t.firstPointId).shape,e=H.LabComClass.Maths.getAngle(t.x,t.y,i.x,i.y),t.degree*=n.clockwise?-1:1,i=H.LabComClass.Maths.getPoint(t,e+t.degree*Math.PI/180,te(10)),n.clockwise?(n.startAngle=e,n.endAngle=e+t.degree*Math.PI/180):(n.startAngle=e+t.degree*Math.PI/180,n.endAngle=e),n.label||(n.label=n.degree+"°"),void 0===n.labelX&&(e=H.LabComClass.Maths.getPoint(t,e+t.degree/2*Math.PI/180,te(25)),n.labelX=e.x,n.labelY=e.y,n.labelDiffX=0,n.labelDiffY=0),qe(oe({type:"ray",uniqueId:o,firstPointId:t.secondPointId,x:t.x,y:t.y,xTo:i.x,yTo:i.y,connectionId:[t.secondPointId]})),n.connectionId.push(o),Z.newPlottedShapes.push(o),Z.mouseDown.lastShapeCompleted=!0,i={x:t.x,y:t.y,uniqueId:t.uniqueId},ue(n.firstPointId).shape.isSelected=!1,(o=ue(n.secondPointId).shape)&&(o.isSelected=!1),ye(i,!0),H.waiting=!1)},this.setSegSize=function(e){var t,n,i;H.waiting&&(t=++Z.uniqueId,n=++Z.uniqueId,i=ue(e.uniqueId).shape,ue(i.firstPointId).shape,oe({type:"segment",uniqueId:t,x:e.x,y:e.y,xTo:e.x+e.distance,yTo:e.y,connectionId:[e.firstPointId,n]}),oe({type:"point",uniqueId:n,x:e.x+e.distance,y:e.y,connectionId:[t]}),i.connectionId.push(t),i.connectionId.push(n),i.secondPointId=n,Z.newPlottedShapes.push(t),Z.newPlottedShapes.push(n),i.segmentId=t,i.distance=e.distance,Z.mouseDown.lastShapeCompleted=!0,ye({x:e.x,y:e.y,uniqueId:e.uniqueId},!(ue(i.firstPointId).shape.isSelected=!1)),H.waiting=!1)},this.setCircleSize=function(e){var t,n;H.waiting&&(t=++Z.uniqueId,n=ue(e.uniqueId).shape,ue(n.firstPointId).shape,oe({type:"circle",uniqueId:t,x:e.x,y:e.y,r:e.distance,connectionId:[e.firstPointId]}),n.connectionId.push(t),Z.newPlottedShapes.push(t),n.circleId=t,n.r=e.distance,Z.mouseDown.lastShapeCompleted=!0,ye({x:e.x,y:e.y,uniqueId:e.uniqueId},!(ue(n.firstPointId).shape.isSelected=!1)),H.waiting=!1)},this.setData=function(e){void 0!==e.visible&&(H.interactionElements=JSON.parse(JSON.stringify(e.visible))),void 0!==e.nonVisible&&(H.tempElements=JSON.parse(JSON.stringify(e.nonVisible))),i()},this.getCurrentStepIndex=function(e){var t=[],e=void 0===e?1:e;if("scale"!==H.interactionType)for(var n=e;0<n;n--)t.push(H.interactionElements.length-n);return t},this.removeRecentShapes=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];e.length?o(e):o(Z.newPlottedShapes)},this.clearAll=function(){H.interactionElements=[],Z.uniqueId=0,H.currentStep=0,H.finalView=!1,$.clearTemp()},this.clearTemp=function(){Q.x=Q.originPos.x,Q.y=Q.originPos.y,Q.xTo=Q.originPos.xTo,Q.yTo=Q.originPos.yTo,H.tempElements=[],Z.allShapesData=[],Z.tempData=[],i()},this.undo=function(){Z.allShapesData.length&&(Z.tempData.push(Z.allShapesData.pop()),Z.allShapesData.length?H.interactionElements=JSON.parse(JSON.stringify(Z.allShapesData[Z.allShapesData.length-1])):H.interactionElements=[])},this.redo=function(){Z.tempData.length&&(Z.allShapesData.push(Z.tempData.pop()),Z.allShapesData.length?H.interactionElements=JSON.parse(JSON.stringify(Z.allShapesData[Z.allShapesData.length-1])):H.interactionElements=[])},this.addShape=function(e){i();var t=JSON.parse(JSON.stringify(e));switch(t.uniqueId=++Z.uniqueId,H.shapesEditable||(t.isDraggable=!1,t.isDeletable=!1),t.label&&(void 0===t.labelX&&(t.labelX=t.x,t.labelY=t.y),void 0===t.labelDiffX&&(t.labelDiffX=0,t.labelDiffY=0)),t.connectionId=[],t.type){case"point":case"circle":case"circle_3":M(oe(t));break;case"line":n(t),qe(oe(t));break;case"triangle":oe(t);break;case"segment":case"segmentDash":n(t),oe(t);break;case"ray":n(t),qe(oe(t));break;case"perpendicularLine":case"parallelLine":Te(oe(t));break;case"length":t.labelAlign="center",n(t),oe(t);break;case"polygonShape":oe(t);break;case"angle":case"angleRay":case"angleB":oe(t);break;case"mirrorOnLine":case"semiCircle":case"square":oe(t)}return se(),l(),t.uniqueId},this.removeIncompleteShape=function(){Z.mouseDown.lastShapeCompleted?t(!1):$.removeUnplotedShapes()},this.removeUnplotedShapes=function(){o(Z.newPlottedShapes),t(!0)},this.updateIndex=function(e){var t=JSON.parse(JSON.stringify(e.data)),n=ue(t.uniqueId).shape,e=e.type;if("remove"===e)s(t.uniqueId);else if("update"===e){n&&Object.keys(t).forEach(function(e){n[e]=t[e]});e=t.type;if("scale"===H.interactionType)Q.x=(isNaN(t.x)?Q:t).x,Q.y=(isNaN(t.y)?Q:t).y,Q.xTo=(isNaN(t.xTo)?Q:t).xTo,Q.yTo=(isNaN(t.yTo)?Q:t).yTo,De();else if("point"===e)n.x=t.x,n.y=t.y,void 0!==t.label&&(n.label=t.label,M(n));else if(e.includes("segment"))n.x=t.x,n.y=t.y,n.xTo=t.xTo,n.yTo=t.yTo;else if("line"===e||"ray"===e){if(n.x=t.x,n.y=t.y,n.xTo=t.xTo,n.yTo=t.yTo,t.label&&(n.label=t.label),n.connectionId)for(var i=0;i<n.connectionId.length;i++){var o=ue(n.connectionId[i]);o.shape&&"point"===o.shape.type&&o.shape.uniqueId===n.firstPointId&&(o.shape.x=n.x,o.shape.y=n.y),o.shape&&"point"===o.shape.type&&o.shape.uniqueId===n.secondPointId&&(o.shape.x=n.xTo,o.shape.y=n.yTo)}qe(n)}else"circle"===e?Object.keys(t).forEach(function(e){n[e]=t[e]}):"circle_3"===e||"perpendicularLine"!==e&&"parallelLine"!==e||(n.x=t.x,n.y=t.y,n.slope=t.slope,n.connectionId&&n.connectionId.forEach(function(e){e=ue(e);e.shape&&"point"===e.shape.type&&(e.shape.x=n.x,e.shape.y=n.y)}),Te(n))}l()},this.draw=function(){var e,t,n,a,r,d,u,i,o,l,s,c,f,p,y,g,P,b,h=H.context,x=H.x,I=H.y,m=H.width,S=H.height,v=H.transperent,q=(H.interactionElements,H.segmentColor,H.fontSize,H.pointColor,H.interactionType);H.pointLabelColor;H.visible&&(h.save(),h.beginPath(),h.globalAlpha=v?.5:1,h.save(),h.fillStyle="#000000",h.rect(x,I,m,S),h.clip(),f=h,y=(p=H).interactionElements,g=p.segmentColor,P=p.fontSize,b=p.pointLabelColor,y.forEach(function(e,t){var n,i,o,l,s,a,r,d,u,c,p,y=void 0!==e.x?A(e.x,e.y):null,h=void 0!==e.xTo?A(e.xTo,e.yTo):null,x=void 0!==e.xOr?A(e.xOr,e.yOr):null,I=void 0!==e.xOrTo?A(e.xOrTo,e.yOrTo):null;e.visible&&(f.save(),f.beginPath(),f.strokeStyle=g,f.fillStyle=g,e.strokeColor&&(f.strokeStyle=e.strokeColor),e.fillColor&&(f.fillStyle=e.fillColor),e.lineWidth&&(f.lineWidth=e.lineWidth),e.isSelected&&(f.lineWidth=2),H.finalView&&(f.fillStyle=H.finalColor,f.strokeStyle=H.finalColor),"point"===e.type||(e.type.includes("segment")?(f.font=P+"px "+H.LabComClass.polo22KlettRegular,f.textBaseline="bottom",f.textAlign="left",e.type.includes("segmentDash")&&f.setLineDash([6,4]),f.moveTo(y.x,y.y),f.lineTo(h.x,h.y),f.stroke(),e.arrowHead&&H.LabComClass.Maths.getDistance(y,h)>3*H.pointRadius&&(d=f,u=y,c=h,p=H.LabComClass.Maths.getAngle(u.x,u.y,c.x,c.y),c=function(e,t,n){var i=t.x-e.x,o=t.y-e.y,e=Math.hypot(i,o);return{x:t.x-n*i/e,y:t.y-n*o/e}}(u,c,H.pointRadius),d.save(),d.beginPath(),d.moveTo(c.x,c.y),d.lineTo(c.x-10*Math.cos(p-Math.PI/6),c.y-10*Math.sin(p-Math.PI/6)),d.lineTo(c.x-10*Math.cos(p+Math.PI/6),c.y-10*Math.sin(p+Math.PI/6)),d.lineTo(c.x,c.y),d.stroke(),d.fill(),d.closePath(),d.restore()),H.shapes.segment.segDistanceLabel&&e.distance&&e.uniqueId===Z.currentUniqueId&&(Z.mouseDown.isMouseDown||!Z.mouseDown.lastShapeCompleted)&&"move"!==H.interactionType&&"brush1"!==H.interactionType&&"brush2"!==H.interactionType&&"brush3"!==H.interactionType&&(p=void 0===e.distance?0:e.distance,void 0!==H.shapes.segment.digit&&(p=p.toFixed(H.shapes.segment.digit).replace(".",",")),c=P/3,d=(y.x+h.x)/2.05,i=P,n=(y.y+h.y)/2+c,f.save(),f.beginPath(),f.fillStyle="rgba(255,255,255,1)",f.rect(d,n,f.measureText(p).width+2*c,i),f.fill(),f.closePath(),f.beginPath(),f.fillStyle=b,f.fillText(p,d+c,n+1.05*i),f.closePath(),f.restore())):"length"===e.type?void 0===e.secondPointId&&"normal"===e.mode&&(f.save(),f.beginPath(),f.setLineDash([5,15]),f.moveTo(y.x,y.y),f.lineTo(h.x,h.y),f.stroke(),f.closePath(),f.restore()):"compass"===e.type?(e.isPloted||(f.strokeStyle=g,f.setLineDash([3,3]),f.lineWidth=2),f.arc(y.x,y.y,C(e.r),0,2*Math.PI),f.stroke()):"triangle"===e.type?e.thirdSegmentPlotted&&(o=A(e.firstPoint.x,e.firstPoint.y),n=A(e.secondPoint.x,e.secondPoint.y),i=A(e.thirdPoint.x,e.thirdPoint.y),f.save(),f.beginPath(),f.fillStyle=e.fillColor||"rgba(112,146,190,0.5)",f.moveTo(o.x,o.y),f.lineTo(n.x,n.y),f.lineTo(i.x,i.y),f.lineTo(o.x,o.y),f.stroke(),f.fill(),f.closePath(),f.restore()):"square"===e.type?e.secondPointPlotted&&(a=A(e.firstPoint.x,e.firstPoint.y),o=A(e.secondPoint.x,e.secondPoint.y),l=A(e.thirdPoint.x,e.thirdPoint.y),s=A(e.fourthPoint.x,e.fourthPoint.y),f.save(),f.beginPath(),f.fillStyle=e.fillColor||"rgba(112,146,190,0.5)",f.moveTo(a.x,a.y),f.lineTo(o.x,o.y),f.lineTo(l.x,l.y),f.lineTo(s.x,s.y),f.lineTo(a.x,a.y),f.stroke(),H.shapes.square.fill&&f.fill(),f.closePath(),f.restore()):"line"===e.type?(f.moveTo(x.x,x.y),f.lineTo(I.x,I.y),f.stroke()):"ray"===e.type?y.x===h.x&&y.y===h.y||(f.moveTo(y.x,y.y),f.lineTo(x.x,x.y),f.stroke()):"circle_3"===e.type?(f.font=P+"px "+H.LabComClass.polo22KlettRegular,f.textBaseline="bottom",f.textAlign="left",f.arc(y.x,y.y,C(e.r),0,2*Math.PI),f.stroke()):"circle"===e.type?(f.font=P+"px "+H.LabComClass.polo22KlettRegular,f.textBaseline="bottom",f.textAlign="left",f.arc(y.x,y.y,C(e.r),0,2*Math.PI),f.stroke(),H.shapes.circle.circleDistanceLabel&&e.r&&e.uniqueId===Z.currentUniqueId&&(Z.mouseDown.isMouseDown||!Z.mouseDown.lastShapeCompleted)&&(l=Number(e.r),void 0!==H.shapes.circle.digit&&(l=l.toFixed(H.shapes.circle.digit).replace(".",",")),s=P/3,a=y.x,r=P,h=y.y+s,f.save(),f.beginPath(),f.fillStyle="rgba(255,255,255,1)",f.rect(a,h,f.measureText(l).width+2*s,r),f.fill(),f.closePath(),f.beginPath(),f.fillStyle=b,f.fillText(l,a+s,h+1.05*r),f.closePath(),f.restore())):"semiCircle"===e.type?(f.beginPath(),f.arc(y.x,y.y,C(e.r),-e.startAngle,-e.endAngle),f.stroke(),f.closePath()):"angleRay"===e.type?(f.translate(y.x,y.y),f.arc(0,0,20,-e.startAngle,-e.endAngle),f.stroke()):"angle"===e.type||"angleSize"===e.type?(f.globalAlpha=.5,f.translate(y.x,y.y),f.beginPath(),f.moveTo(0,0),f.arc(0,0,20,-e.startAngle,-e.endAngle),f.fill(),f.closePath(),90!==e.angleValue&&90!==e.degree||!H.shapes.angle.dotOn90&&!H.shapes.angleSize.dotOn90||(r=H.LabComClass.Maths.getPoint({x:0,y:0},-e.endAngle,16),y=H.LabComClass.Maths.getPoint({x:0,y:0},-e.startAngle,16),f.beginPath(),f.strokeStyle="#000000",f.fillStyle="#000000",f.arc((y.x+r.x)/2,(y.y+r.y)/2,2,0,2*Math.PI),f.fill(),f.closePath()),f.stroke()):"perpendicularLine"===e.type||"parallelLine"===e.type?null===x||isNaN(x.x)||(f.moveTo(x.x,x.y),f.lineTo(I.x,I.y),f.stroke()):"polygonShape"===e.type&&(f.fillStyle=e.fillColor||"rgba(112,146,190,0.5)",e.path.forEach(function(e,t){e=A(e.x,e.y);0===t&&f.moveTo(e.x,e.y),f.lineTo(e.x,e.y)}),f.fill())),f.closePath(),f.restore())}),Q.visible&&(h.save(),h.fillStyle=Q.pointColor,h.strokeStyle=Q.segmentColor,h.lineWidth=Q.segmentWidth,h.beginPath(),h.moveTo(Q.x,Q.y),h.lineTo(Q.xTo,Q.yTo),h.stroke(),h.closePath(),h.beginPath(),h.arc(Q.x,Q.y,Q.pointRadius,0,2*Math.PI),h.fill(),h.closePath(),h.beginPath(),h.arc(Q.xTo,Q.yTo,Q.pointRadius,0,2*Math.PI),h.fill(),h.closePath(),h.restore()),Z.mouseDown.isMouseDown&&"select"===q&&null===Z.currentUniqueId&&(h.save(),h.beginPath(),h.fillStyle="rgba(69,146,176,0.1)",h.strokeStyle="rgba(69,146,176,0.8)",e=(o=Z.mouseDown).orignalX,t=o.orignalY,n=o.x,o=o.y,h.rect(e,t,n-e,o-t),h.fill(),h.stroke(),h.closePath(),h.restore()),h.restore(),h.closePath(),h.restore(),h.save(),e=(n=H.screen).x,o=n.y,t=n.w,n=n.h,h.fillStyle="#000000",h.beginPath(),h.moveTo(e,o),h.lineTo(e,o+n),h.lineTo(e+t,o+n),h.lineTo(e+t,o),h.closePath(),h.clip(),i=h,l=(o=H).x,s=o.y,c=o.height,o.interactionElements.forEach(function(e){var t,n=void 0!==e.x?A(e.x,e.y):null;e.visible&&"point"===e.type&&(t=!0,"1"===H.showQuadrants&&(n.x<l||n.y>s+c)&&(t=!1),t&&D(i,e,!0,!1))}),h.restore(),h.save(),h.fillStyle="#000000",h.beginPath(),h.moveTo(x,I),h.lineTo(x,I+S),h.lineTo(x+m,I+S),h.lineTo(x+m,I),h.closePath(),h.clip(),v||(a=h,v=(I=H).interactionElements,r=I.pointLabelColor,d=I.fontSize,u=I.lengthLabelColor,v.forEach(function(e,t){var n,i,o,l,s;void 0!==e.x&&A(e.x,e.y);e.visible&&("point"===e.type&&(i=void 0===e.labelVisible||e.labelVisible,D(a,e,!1,i&&H.shapes.point.label.visible)),"length"===e.type&&e.label&&((n=A(e.labelX,e.labelY)).x+=e.labelDiffX,n.y+=e.labelDiffY,a.save(),a.beginPath(),a.font=d+"px "+H.LabComClass.polo22KlettRegular,i=a.measureText(e.distanceText).width+d/2,a.fillStyle="rgba(255,255,255,1)",a.strokeStyle="rgba(199,199,199,1)",a.rect(n.x-i/2,n.y-1.2*d,i,d*(H.labelBGRatio+.1)),a.fill(),a.stroke(),a.closePath(),a.beginPath(),a.textBaseline="bottom",a.textAlign="center",a.fillStyle=u,a.drawStyledText(e.label,n.x,n.y,H.LabComClass.polo22KlettRegular,d),a.closePath(),a.restore()),"square"===e.type&&H.shapes.square.label.visible&&e.label&&(A(e.labelX,e.labelY),e.fillLabelColor,(o=A(e.labelX,e.labelY)).x+=e.labelDiffX,o.y+=e.labelDiffY,a.save(),a.beginPath(),a.font=d+"px "+H.LabComClass.polo22KlettRegular,l=a.measureText(e.label).width+d/2,a.fillStyle="rgba(255,255,255,1)",a.strokeStyle="rgba(199,199,199,1)",a.rect(o.x-.25*l,o.y-1.2*d,.65*l,d*(H.labelBGRatio+.1)),a.fill(),a.stroke(),a.closePath(),a.beginPath(),a.textBaseline="bottom",a.textAlign="center",a.fillStyle=u,a.drawStyledText(e.label,o.x,o.y,H.LabComClass.polo22KlettRegular,d),a.closePath(),a.restore()),(e.type.includes("segment")||be(e,["angle","angleSize","line","ray","perpendicularLine","parallelLine","angleRay"]))&&(l=!0,H.shapes.hasOwnProperty(e.type)&&H.shapes[e.type].hasOwnProperty("label")&&H.shapes[e.type].label.hasOwnProperty("visible")&&!H.shapes[e.type].label.visible&&(l=!1),l&&void 0!==e.label&&void 0!==e.labelX&&"angleSize"!==e.type?(o=A(e.labelX,e.labelY),s=e.fillLabelColor||r,T({ctx:a,text:e.label,x:o.x,y:o.y,fillColor:s,center:!0,diffX:Number(e.labelDiffX),diffY:Number(e.labelDiffY)})):l&&void 0!==e.label&&void 0!==e.labelX&&"angleSize"===e.type&&(s=H.LabComClass.Maths.getAngle(e.x,e.y,e.xTo,e.yTo),l=e.degree*(e.clockwise?-1:1),l=A((s=H.LabComClass.Maths.getPoint(e,s+l/2*Math.PI/180,te(25))).x,s.y),s=e.fillLabelColor||r,T({ctx:a,text:e.label.replace(".",","),x:l.x,y:l.y,fillColor:s,center:!0,diffX:Number(e.labelDiffX),diffY:Number(e.labelDiffY)}))))})),h.restore())},this.setSegmentColor=function(e){H.segmentColor=e},this.getSegmentColor=function(e){return H.segmentColor},this.updateShape=function(e,t){var n=ue(e);n&&Object.keys(t).forEach(function(e){n.shape[e]=t[e]})}}
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Tt(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function v(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function p(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function k(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function S(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=S(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&D(e[s])!==D(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function b(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function x(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function C(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function H(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function R(e){var t,n,s={};for(n in e)m(e,n)&&(t=H(n))&&(s[t]=e[n]);return s}var U={};function F(e,t){U[e]=t}function L(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return L(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=b(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=b(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var de={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=D(e)}),t=0;t<e.length;t++)de[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,ve=4,pe=5,we=6,Me=7,ke=8;function Se(e){return De(e)?366:365}function De(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),C("year","y"),F("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):D(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return D(e)+(68<D(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(xe(this,t,e),c.updateOffset(this,n),this):be(this,t)}}function be(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function xe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&De(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?De(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),C("month","M"),F("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=D(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var He="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Re(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=D(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Re(this,e),c.updateOffset(this,!0),this):be(this,"Month")}var Fe=ae;var Le=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=he(s[t]),i[t]=he(i[t]);for(t=0;t<24;t++)r[t]=he(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t;if(e<100&&0<=e){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return a=o<=0?Se(r=e-1)+o:o>Se(e)?(r=e+1,o-Se(e)):(r=e,o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(Se(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),C("week","w"),C("isoWeek","W"),F("week",5),F("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=D(e)});function je(e,t){return e.slice(t,7).concat(e.slice(0,t))}I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),C("day","d"),C("weekday","e"),C("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=D(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var $e="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var qe=ae;var Je=ae;var Be=ae;function Qe(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=he(o[t]),u[t]=he(u[t]),l[t]=he(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Xe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+L(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),C("hour","h"),F("hour",13),ue("a",et),ue("A",et),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=D(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=D(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i))});var tt,nt=Te("Hours",!0),st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:He,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){var t=null;if(!it[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=tt._abbr,require("./locale/"+e),ut(t)}catch(e){}return it[e]}function ut(e,t){var n;return e&&((n=l(t)?ht(e):lt(e,t))?tt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),tt._abbr}function lt(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ot(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new P(x(s,t)),rt[e]&&rt[e].forEach(function(e){lt(e.name,e.config)}),ut(e),it[e]}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return tt;if(!o(e)){if(t=ot(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ot(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return tt}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[ve]||0!==n[pe]||0!==n[we])?ge:n[ve]<0||59<n[ve]?ve:n[pe]<0||59<n[pe]?pe:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=ke),g(e).overflow=t),e}function ct(e,t,n){return null!=e?e:null!=t?t:n}function ft(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ct(t.GG,e._a[me],Ie(bt(),1,4).year),s=ct(t.W,1),((i=ct(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(bt(),r,a);n=ct(t.gg,e._a[me],l.year),s=ct(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ct(e._a[me],s[me]),(e._dayOfYear>Se(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[ve]&&0===e._a[pe]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var mt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/Z|[+-]\d\d(?::?\d\d)?/,gt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],vt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function wt(e){var t,n,s,i,r,a,o=e._i,u=mt.exec(o)||_t.exec(o);if(u){for(g(e).iso=!0,t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[1])){i=gt[t][0],s=!1!==gt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=vt.length;t<n;t++)if(vt[t][1].exec(u[3])){r=(u[2]||" ")+vt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!yt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Yt(e)}else e._isValid=!1}var Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function kt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),He.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=kt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Yt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,h=l.length,d=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),d+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(de,a)&&de[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=h-d,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ft(e),dt(e)}else Dt(e);else wt(e)}function Ot(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||ht(e._l),null===r||void 0===a&&""===r?p({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),k(r)?new M(dt(r)):(d(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Yt(t),v(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?Yt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):d(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(wt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ft(t)):u(n)?function(e){if(!e._d){var t=R(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ft(e)}}(t):h(n)?t._d=new Date(n):c.createFromInputFallback(t),v(e)||(e._d=null),e))}function Tt(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Ot(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function bt(e,t,n,s){return Tt(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:p()});function Wt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return bt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Ct=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=R(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Ct,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Ct.length;++s)if(e[Ct[s]]){if(n)return!1;parseFloat(e[Ct[s]])!==D(e[Ct[s]])&&(n=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ht(),this._bubble()}function Rt(e){return e instanceof Ht}function Ut(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+L(~~(e/60),2)+n+L(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Nt(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Nt(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+D(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(k(e)||d(e)?e.valueOf():bt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):bt(e).local()}function Vt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Et(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var It=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,At=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function jt(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:D(a[ye])*n,h:D(a[ge])*n,m:D(a[ve])*n,s:D(a[pe])*n,ms:D(Ut(1e3*a[we]))*n}):(a=At.exec(e))?(n="-"===a[1]?-1:1,r={y:Zt(a[2],n),M:Zt(a[3],n),w:Zt(a[4],n),d:Zt(a[5],n),h:Zt(a[6],n),m:Zt(a[7],n),s:Zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(bt(r.from),bt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function Zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),qt(this,jt(e="string"==typeof e?+e:e,t),s),this}}function qt(e,t,n,s){var i=t._milliseconds,r=Ut(t._days),a=Ut(t._months);e.isValid()&&(s=null==s||s,a&&Re(e,be(e,"Month")+a*n),r&&xe(e,"Date",be(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}jt.fn=Ht.prototype,jt.invalid=function(){return jt(NaN)};var Jt=$t(1,"add"),Bt=$t(-1,"subtract");function Qt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Xt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Kt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function en(){return this._locale}var tn=126227808e5;function nn(e,t){return(e%t+t)%t}function sn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-tn:new Date(e,t,n).valueOf()}function rn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-tn:Date.UTC(e,t,n)}function an(e,t){I(0,[e,e.length],0,t)}function on(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),an("gggg","weekYear"),an("ggggg","weekYear"),an("GGGG","isoWeekYear"),an("GGGGG","isoWeekYear"),C("weekYear","gg"),C("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=D(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),C("quarter","Q"),F("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(D(e)-1)}),I("D",["DD",2],"Do","date"),C("date","D"),F("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=D(e.match(B)[0])});var un=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),C("dayOfYear","DDD"),F("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)}),I("m",["mm",2],0,"minute"),C("minute","m"),F("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],ve);var ln=Te("Minutes",!1);I("s",["ss",2],0,"second"),C("second","s"),F("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],pe);var hn,dn=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),C("millisecond","ms"),F("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),hn="SSSS";hn.length<=9;hn+="S")ue(hn,ne);function cn(e,t){t[we]=D(1e3*("0."+e))}for(hn="S";hn.length<=9;hn+="S")ce(hn,cn);var fn=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var mn=M.prototype;function _n(e){return e}mn.add=Jt,mn.calendar=function(e,t){var n=e||bt(),s=Gt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(b(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,bt(n)))},mn.clone=function(){return new M(this)},mn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:S(r)},mn.endOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-nn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-nn(t,1e3)-1;break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},mn.from=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.fromNow=function(e){return this.from(bt(),e)},mn.to=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.toNow=function(e){return this.to(bt(),e)},mn.get=function(e){return b(this[e=H(e)])?this[e]():this},mn.invalidAt=function(){return g(this).overflow},mn.isAfter=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},mn.isBefore=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},mn.isBetween=function(e,t,n,s){var i=k(e)?e:bt(e),r=k(t)?t:bt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},mn.isSame=function(e,t){var n,s=k(e)?e:bt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},mn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},mn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},mn.isValid=function(){return v(this)},mn.lang=Kt,mn.locale=Xt,mn.localeData=en,mn.max=Pt,mn.min=xt,mn.parsingFlags=function(){return _({},g(this))},mn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:U[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=R(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(b(this[e=H(e)]))return this[e](t);return this},mn.startOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=nn(t,6e4);break;case"second":t=this._d.valueOf(),t-=nn(t,1e3);break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.subtract=Bt,mn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},mn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},mn.toDate=function(){return new Date(this.valueOf())},mn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):b(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},mn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},mn.toJSON=function(){return this.isValid()?this.toISOString():null},mn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},mn.unix=function(){return Math.floor(this.valueOf()/1e3)},mn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},mn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},mn.year=Oe,mn.isLeapYear=function(){return De(this.year())},mn.weekYear=function(e){return on.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},mn.isoWeekYear=function(e){return on.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},mn.quarter=mn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},mn.month=Ue,mn.daysInMonth=function(){return Pe(this.year(),this.month())},mn.week=mn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},mn.isoWeek=mn.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},mn.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},mn.isoWeeksInYear=function(){return Ae(this.year(),1,4)},mn.date=un,mn.day=mn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},mn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},mn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},mn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},mn.hour=mn.hours=nt,mn.minute=mn.minutes=ln,mn.second=mn.seconds=dn,mn.millisecond=mn.milliseconds=fn,mn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Vt(this);if("string"==typeof e){if(null===(e=Nt(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Vt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?qt(this,jt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this},mn.utc=function(e){return this.utcOffset(0,e)},mn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Vt(this),"m")),this},mn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Nt(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},mn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?bt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},mn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},mn.isLocal=function(){return!!this.isValid()&&!this._isUTC},mn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},mn.isUtc=Et,mn.isUTC=Et,mn.zoneAbbr=function(){return this._isUTC?"UTC":""},mn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},mn.dates=n("dates accessor is deprecated. Use date instead.",un),mn.months=n("months accessor is deprecated. Use month instead",Ue),mn.years=n("years accessor is deprecated. Use year instead",Oe),mn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),mn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Ot(e))._a){var t=e._isUTC?y(e._a):bt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var yn=P.prototype;function gn(e,t,n,s){var i=ht(),r=y().set(s,t);return i[n](r,e)}function vn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return gn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=gn(e,s,n,"month");return i}function pn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=ht(),a=e?r._week.dow:0;if(null!=n)return gn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=gn(t,(i+a)%7,s,"day");return o}yn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return b(s)?s.call(t,n):s},yn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},yn.invalidDate=function(){return this._invalidDate},yn.ordinal=function(e){return this._ordinal.replace("%d",e)},yn.preparse=_n,yn.postformat=_n,yn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return b(i)?i(e,t,n,s):i.replace(/%d/i,e)},yn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return b(n)?n(t):n.replace(/%s/i,t)},yn.set=function(e){var t,n;for(n in e)b(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},yn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},yn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},yn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},yn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Le),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},yn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},yn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},yn.firstDayOfYear=function(){return this._week.doy},yn.firstDayOfWeek=function(){return this._week.dow},yn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?je(n,this._week.dow):e?n[e.day()]:n},yn.weekdaysMin=function(e){return!0===e?je(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},yn.weekdaysShort=function(e){return!0===e?je(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},yn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},yn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},yn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Je),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},yn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Be),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},yn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},yn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ut("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===D(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ut),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",ht);var wn=Math.abs;function Mn(e,t,n,s){var i=jt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function kn(e){return e<0?Math.floor(e):Math.ceil(e)}function Sn(e){return 4800*e/146097}function Dn(e){return 146097*e/4800}function Yn(e){return function(){return this.as(e)}}var On=Yn("ms"),Tn=Yn("s"),bn=Yn("m"),xn=Yn("h"),Pn=Yn("d"),Wn=Yn("w"),Cn=Yn("M"),Hn=Yn("Q"),Rn=Yn("y");function Un(e){return function(){return this.isValid()?this._data[e]:NaN}}var Fn=Un("milliseconds"),Ln=Un("seconds"),Nn=Un("minutes"),Gn=Un("hours"),Vn=Un("days"),En=Un("months"),In=Un("years");var An=Math.round,jn={ss:44,s:45,m:45,h:22,d:26,M:11};var Zn=Math.abs;function zn(e){return(0<e)-(e<0)||+e}function $n(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Zn(this._milliseconds)/1e3,s=Zn(this._days),i=Zn(this._months);t=S((e=S(n/60))/60),n%=60,e%=60;var r=S(i/12),a=i%=12,o=s,u=t,l=e,h=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var c=d<0?"-":"",f=zn(this._months)!==zn(d)?"-":"",m=zn(this._days)!==zn(d)?"-":"",_=zn(this._milliseconds)!==zn(d)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||h?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(h?_+h+"S":"")}var qn=Ht.prototype;return qn.isValid=function(){return this._isValid},qn.abs=function(){var e=this._data;return this._milliseconds=wn(this._milliseconds),this._days=wn(this._days),this._months=wn(this._months),e.milliseconds=wn(e.milliseconds),e.seconds=wn(e.seconds),e.minutes=wn(e.minutes),e.hours=wn(e.hours),e.months=wn(e.months),e.years=wn(e.years),this},qn.add=function(e,t){return Mn(this,e,t,1)},qn.subtract=function(e,t){return Mn(this,e,t,-1)},qn.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=H(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+Sn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Dn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},qn.asMilliseconds=On,qn.asSeconds=Tn,qn.asMinutes=bn,qn.asHours=xn,qn.asDays=Pn,qn.asWeeks=Wn,qn.asMonths=Cn,qn.asQuarters=Hn,qn.asYears=Rn,qn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*D(this._months/12):NaN},qn._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*kn(Dn(o)+a),o=a=0),u.milliseconds=r%1e3,e=S(r/1e3),u.seconds=e%60,t=S(e/60),u.minutes=t%60,n=S(t/60),u.hours=n%24,o+=i=S(Sn(a+=S(n/24))),a-=kn(Dn(i)),s=S(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},qn.clone=function(){return jt(this)},qn.get=function(e){return e=H(e),this.isValid()?this[e+"s"]():NaN},qn.milliseconds=Fn,qn.seconds=Ln,qn.minutes=Nn,qn.hours=Gn,qn.days=Vn,qn.weeks=function(){return S(this.days()/7)},qn.months=En,qn.years=In,qn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,h,d,c=this.localeData(),f=(n=!e,s=c,i=jt(t=this).abs(),r=An(i.as("s")),a=An(i.as("m")),o=An(i.as("h")),u=An(i.as("d")),l=An(i.as("M")),h=An(i.as("y")),(d=r<=jn.ss&&["s",r]||r<jn.s&&["ss",r]||a<=1&&["m"]||a<jn.m&&["mm",a]||o<=1&&["h"]||o<jn.h&&["hh",o]||u<=1&&["d"]||u<jn.d&&["dd",u]||l<=1&&["M"]||l<jn.M&&["MM",l]||h<=1&&["y"]||["yy",h])[2]=n,d[3]=0<+t,d[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,d));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},qn.toISOString=$n,qn.toString=$n,qn.toJSON=$n,qn.locale=Xt,qn.localeData=en,qn.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",$n),qn.lang=Kt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(D(e))}),c.version="2.24.0",e=bt,c.fn=mn,c.min=function(){return Wt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Wt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return bt(1e3*e)},c.months=function(e,t){return vn(e,t,"months")},c.isDate=d,c.locale=ut,c.invalid=p,c.duration=jt,c.isMoment=k,c.weekdays=function(e,t,n){return pn(e,t,n,"weekdays")},c.parseZone=function(){return bt.apply(null,arguments).parseZone()},c.localeData=ht,c.isDuration=Rt,c.monthsShort=function(e,t){return vn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return pn(e,t,n,"weekdaysMin")},c.defineLocale=lt,c.updateLocale=function(e,t){if(null!=t){var n,s,i=st;null!=(s=ot(e))&&(i=s._config),(n=new P(t=x(i,t))).parentLocale=it[e],it[e]=n,ut(e)}else null!=it[e]&&(null!=it[e].parentLocale?it[e]=it[e].parentLocale:null!=it[e]&&delete it[e]);return it[e]},c.locales=function(){return s(it)},c.weekdaysShort=function(e,t,n){return pn(e,t,n,"weekdaysShort")},c.normalizeUnits=H,c.relativeTimeRounding=function(e){return void 0===e?An:"function"==typeof e&&(An=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==jn[e]&&(void 0===t?jn[e]:(jn[e]=t,"s"===e&&(jn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=mn,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},c});
"use strict";function ownKeys(n,e){var t,o=Object.keys(n);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(n),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),o.push.apply(o,t)),o}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function PlanDrawClass(e){var j={},z={x:0,y:0,xTo:200,yTo:200,pointColor:"rgba(10,190,220,1)",pointRadius:7,segmentColor:"rgba(10,190,220,1)",segmentWidth:3,visible:!1},_={x:0,y:0,width:100,height:100,bgColor:"rgba(255, 255, 255, 0.5)",state:!0,visible:!0,interactionType:"",interactionElements:[],pointColor:"rgba(10,190,220,1)",pointLabelColor:"rgba(51,51,51,1)",pointRadius:5,segmentColor:"rgba(10,190,220,1)",segmentWidth:2,tempElements:[],transperent:!1,eventsEnable:!0,fontSize:20,currentStep:0,snapToGrid:!1,snappingDiff:10,deviceSnappingDiff:25,shapesEditable:!1,undoRedo:!1,pointSnapping:!1,finalColor:"rgba(65,180,5,1)",screen:{},labelBGRatio:1,waiting:!1,ignorePointToColor:!1,shapes:{length:{digit:0},circle:{digit:0},line:{color:{stroke:"rgba(10,190,220,1)"}},brush1:{color:{stroke:"rgba(10,190,220,1)"}},brush2:{color:{stroke:"rgba(222,108,225,1)"}},brush3:{color:{stroke:"rgba(255,204,0,1)"}},segment:{color:{stroke:"rgba(10,190,220,1)"},label:{visible:!1}},angle:{dotOn90:!0}}},F={mouseDown:{isMouseDown:!1,lastShapeCompleted:!0},uniqueId:0,currentUniqueId:0,allShapesData:[],tempData:[],mouseDownData:null,isDevice:!1,newPlottedShapes:[],lineTypes:["line","ray","perpendicularLine","parallelLine","segment","segmentDash"],isLableSelected:!1,arbitaryX:1,onBoundary:!1,arbitaryPoint:null,aOnBound:!1,bOnBound:!1,cOnBound:!1,dOnBound:!1,shapeOnBound:!1,plotPointOnExistingPoint:!1,isCollinear:!1},N=this;function G(e,n){var t=_.graphValues;return{x:(e-t.originX)/t.unitX,y:-1*(n-t.originY)/t.unitY}}function Y(e,n){var t=_.graphValues;return{x:e*t.unitX+t.originX,y:n*t.unitY/-1+t.originY}}function V(e){return e/_.graphValues.unitX}function T(e){return e*_.graphValues.unitX}function a(){var e,n;_.undoRedo&&(e=JSON.stringify(_.interactionElements),n=!1,F.allShapesData.length&&e===JSON.stringify(F.allShapesData[F.allShapesData.length-1])||(n=!0),n&&(F.allShapesData.push(JSON.parse(JSON.stringify(_.interactionElements))),F.tempData=[]))}function t(n){"line"!==n.type&&"ray"!==n.type&&"length"!==n.type||_.interactionElements.forEach(function(e){"point"===e.type&&(e.x===n.x&&e.y===n.y&&(n.firstPointId=e.uniqueId,n.connectionId.push(n.firstPointId)),e.x===n.xTo&&e.y===n.yTo&&(n.secondPointId=e.uniqueId,n.connectionId.push(n.secondPointId)))})}function n(e){F.newPlottedShapes=[],F.mouseDown.lastShapeCompleted=!0,_.waiting=!1,e&&(void 0!==j.angleSize&&j.angleSize({id:_.id,type:"angleSize",visible:!1},!0),void 0!==j.segSize&&j.segSize({id:_.id,type:"segSize",visible:!1},!0))}function o(){if(_.waiting=!1,N.removeIncompleteShape(),F.newPlottedShapes=[],"select"!==_.interactionType)for(var e=0;e<_.interactionElements.length;e++)_.interactionElements[e].isSelected=!1;z.visible="scale"===_.interactionType}function i(e){for(var n=0;n<e.length;n++){var t=te(e[n]);t&&void 0!==t.index&&l(e[n])}a()}function l(e){var t=_.interactionElements,n=te(e),i=n.shape,e=n.index;i&&((n=i.connectionId)&&n.forEach(function(n){t.forEach(function(e){var t,o=e;o&&o.uniqueId===n&&(void 0!==o.isDeletable&&!1!==o.isDeletable||1<o.connectionId.length&&(-1<(t=o.connectionId.indexOf(i.uniqueId))&&o.connectionId.splice(t,1),ce(o,["line","segment","segmentDash","ray"])&&(o.firstPointId!==i.uniqueId&&o.secondPointId!==i.uniqueId||(o.connectionId.forEach(function(e){var n=te(e).shape;n&&(e=n.connectionId.indexOf(o.uniqueId),-1<t&&n.connectionId.splice(e,1))}),e=null))))})}),t[e]=null,_.interactionElements=t.filter(function(e){return null!==e}),o(),a())}function D(e){var n=e.ctx,t=e.text,o=e.x,i=e.y,a=e.fillColor,l=e.diffX,l=void 0===l?0:l,e=e.diffY,e=void 0===e?0:e;n.save(),n.beginPath(),n.font=_.fontSize+"px "+_.LabComClass.polo22KlettRegular,n.textBaseline="bottom",n.fillStyle=a,n.strokeStyle="rgba(255,255,255,1)",n.lineWidth=2,n.lineJoin="miter",n.miterLimit=2,i+=.6*_.fontSize,n.drawStyledText(t,o+l,i+e,_.LabComClass.polo22KlettRegular,_.fontSize),n.closePath(),n.restore()}function q(e,n,t,o){var i=void 0!==n.x?Y(n.x,n.y):null;e.beginPath(),t&&(e.fillStyle=_.pointColor,n.fillColor&&(e.fillStyle=n.fillColor),_.finalView&&(e.fillStyle=_.finalColor,e.strokeStyle=_.finalColor),e.arc(i.x,i.y,_.pointRadius,0,2*Math.PI),e.fill(),e.closePath(),n.isSelected&&(e.beginPath(),e.strokeStyle=_.pointColor,e.arc(i.x,i.y,_.pointRadius+2,0,2*Math.PI),e.stroke(),e.closePath())),void 0!==n.label&&o&&(void 0===n.labelX&&(n.labelX=n.x,n.labelY=n.y,n.labelDiffX=0,n.labelDiffY=0),i=Y(n.labelX,n.labelY),o=n.fillLabelColor||_.pointLabelColor,D({ctx:e,text:n.label,x:i.x,y:i.y,fillColor:o,center:!1,diffX:Number(n.labelDiffX),diffY:Number(n.labelDiffY)}))}function s(){var e={};e.id=_.id,e.r=[],onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:_.id}}),_.eventsEnable&&null!==_.interactionType&&_.state&&_.visible&&("scale"===_.interactionType?e.r.push({id:"scale1",arc:{x:z.x,y:z.y,r:z.pointRadius+3},eventListener:c.bind(this)},{id:"scale2",arc:{x:z.xTo,y:z.yTo,r:z.pointRadius+3},eventListener:c.bind(this)}):e.r.push({id:0,rect:{x:_.screen.x,y:_.screen.y,w:_.screen.w,h:_.screen.h},eventListener:c.bind(this)}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:e}))}function r(){_.animClass.stop("animation"),u(F.mouseDownData),F.mouseDownData=null}function d(){var e=F.mouseDownData;e.delayCounter++,2<e.delayCounter&&(_.animClass.stop("animation"),void 0!==j.rightClick&&j.rightClick({id:_.id,type:"rightClick",x:e.pageX,y:e.pageY},!0),e=null)}function u(e){var n=F.mouseDown;n.isMouseDown=!0,n.x=e.pageX,n.orignalX=e.pageX,n.y=e.pageY,n.orignalY=e.pageY,n.objectDown=!1,n.lastShapeCompleted&&function(e){var n=_.interactionElements,t=_.interactionType;F.newPlottedShapes=[];var o=F.newPlottedShapes,i=G(e.pageX,e.pageY);i=K(i),F.currentUniqueId=null;var a,l=ue(G(e.pageX,e.pageY));null!==l&&(F.currentUniqueId=n[l].uniqueId,i=n[l]);{var s,r,d,u,c,y,p,h,x,g,b,f,I,m,P,C,v,T,D,q,S,M,w,L,O,E,X,A;F.newShapeStarted=!1,"point"===t&&null!==i?null===l&&(J(i,{uniqueId:++F.uniqueId,connectionId:[]}),F.currentUniqueId=F.uniqueId):t.includes("segment")&&null!==i?(s=null===l?++F.uniqueId:F.currentUniqueId,r=++F.uniqueId,null===l?J(i,{uniqueId:s,connectionId:[r]}):n[l].connectionId.push(r),W({uniqueId:r,firstPointId:s,x:i.x,y:i.y,xTo:i.x,yTo:i.y,connectionId:[s]}),F.currentUniqueId=r,o.push(r)):"length"===t?null!==l&&null!==i?(u=++F.uniqueId,d=F.currentUniqueId,W({uniqueId:u,firstPointId:d,x:i.x,y:i.y,xTo:i.x,yTo:i.y,labelAlign:"center"}),F.currentUniqueId=u,o.push(u)):(d=he(e))&&((c=te(d)).shape&&c.shape.type.includes("segment")?(W({uniqueId:u=++F.uniqueId,segmentID:d,x:c.shape.x,y:c.shape.y,xTo:c.shape.xTo,yTo:c.shape.yTo,labelAlign:"center"}),F.currentUniqueId=u,o.push(u)):c.shape.isSelected=!1):"compass"===t?(null!==l?null!==i&&(y=F.currentUniqueId,h={firstPointId:y,x:i.x,y:i.y,xTo:i.x,yTo:i.y}):!(c=he(e))||!0===(y=te(c)).shape.visible&&(y.shape&&y.shape.type.includes("segment")?h={segmentID:c,x:y.shape.x,y:y.shape.y,xTo:y.shape.xTo,yTo:y.shape.yTo}:!y.shape||"circle"!==y.shape.type&&"compass"!==y.shape.type||(h={circleID:c,x:y.shape.x,y:y.shape.y,r:y.shape.r})),h&&(p=++F.uniqueId,F.currentUniqueId=p,h.connectionId=[],h.uniqueId=p,h.isPloted=!1,o.push(p),W(h))):"line"!==t&&"ray"!==t||null===i?"angleRay"===t&&null!==i?(p=++F.uniqueId,x=++F.uniqueId,h=null===l?++F.uniqueId:F.currentUniqueId,o.push(p),null===l?J(i,{uniqueId:h,connectionId:[x,p]}):n[l].connectionId.push(x),W({uniqueId:p,firstPointId:h,firstRayPlotted:!1,secondRayPlotted:!1,x:i.x,y:i.y,connectionId:[h]}),W({type:"ray",uniqueId:x,angleRayId:p,secondPointId:h,x:i.x,y:i.y,xOr:i.x,yOr:i.y,xTo:i.x,yTo:i.y,xOrTo:i.x,yOrTo:i.y,connectionId:[h]}),F.currentUniqueId=x,o.push(x)):"circle_3"===t&&null!==i?(g=++F.uniqueId,x=null===l?++F.uniqueId:F.currentUniqueId,null===l?J(i,{uniqueId:x,connectionId:[g],circleId:g}):(n[l].connectionId.push(g),n[l].circleId=g),W({uniqueId:g,firstPointId:x,firstPointPlotted:!1,secondPointPlotted:!1,thirdPointPloted:!1,x:i.x,y:i.y,connectionId:[x]}),F.currentUniqueId=x,o.push(g)):"angle"===t&&null!==i?(b=++F.uniqueId,g=null===l?++F.uniqueId:F.currentUniqueId,null===l?J(i,{uniqueId:g,connectionId:[b],angleId:b}):(n[l].connectionId.push(b),n[l].angleId=b),W({uniqueId:b,firstPointId:g,firstPointPlotted:!1,secondPointPlotted:!1,thirdPointPloted:!1,x:i.x,y:i.y,connectionId:[g]}),F.currentUniqueId=g,o.push(b)):"midPoint"===t&&null!==i?(m=++F.uniqueId,f=null===l?++F.uniqueId:F.currentUniqueId,b=he(e),I=te(b).shape,null===l&&null!==i&&null===b?(J(i,{uniqueId:f,connectionId:[m],midPointId:m}),W({uniqueId:m,type:"point",firstPointId:f,firstPointPlotted:!1,secondPointPlotted:!1,x:i.x,y:i.y,connectionId:[f]}),F.currentUniqueId=f):0<=l&&null!==l?(I&&(I.isSelected=!1),n[l].connectionId.push(m),W({uniqueId:n[l].midPointId=m,type:"point",firstPointId:f,firstPointPlotted:!1,secondPointPlotted:!1,x:i.x,y:i.y,connectionId:[f],segmentId:b}),F.currentUniqueId=f):null!==b&&I.type.includes("segment")?I&&I.type.includes("segment")&&(W({uniqueId:m,type:"point",firstPointId:f,firstPointPlotted:!0,secondPointPlotted:!0,x:(I.x+I.xTo)/2,y:(I.y+I.yTo)/2,firstPointCoords:{x:I.x,y:I.y},secondPointCoords:{x:I.xTo,y:I.yTo},segmentId:b,connectionId:[f],onSegment:!0,midPointId:m}),F.currentUniqueId=m):I.isSelected=!1,o.push(m)):"mirrorOnLine"===t&&null!==i?(f=++F.uniqueId,I=null===l?++F.uniqueId:F.currentUniqueId,m=he(e),(P=te(m).shape)&&"point"===P.type||null===m?(P&&(P.isSelected=!1),null===l?J(i,{uniqueId:I,connectionId:[f],mirrorOnLineId:f}):(n[l].connectionId.push(f),n[l].mirrorOnLineId=f),W({uniqueId:f,firstPointId:I,firstPointPlotted:!1,linePlotted:!1,x:i.x,y:i.y,connectionId:[I]}),F.currentUniqueId=I,o.push(f),F.newShapeStarted=!0):P.isSelected=!1):"triangle"===t&&null!==i?(P=++F.uniqueId,v=++F.uniqueId,C=null===l?++F.uniqueId:F.currentUniqueId,o.push(P),null===l?J(i,{uniqueId:C,connectionId:[v,P]}):n[l].connectionId.push(v),W({uniqueId:P,firstPointId:C,firstSegmentPlotted:!1,secondSegmentPlotted:!1,thirdSegmentPlotted:!1,x:i.x,y:i.y,connectionId:[C]}),W({type:"segment",uniqueId:v,triangleId:P,secondPointId:C,x:i.x,y:i.y,xTo:i.x,yTo:i.y,connectionId:[C]}),F.currentUniqueId=v,o.push(v)):"perpendicularBisector"===t&&null!==i?(S=he(e),T=te(S).shape,null!==l?(C=++F.uniqueId,v=null===l?++F.uniqueId:F.currentUniqueId,T&&(T.isSelected=!1),n[l].isSelected=!1,W({uniqueId:C,type:"perpendicularBisector",firstPointId:v,firstPointPlotted:!1,secondPointPlotted:!1,connectionId:[v],mode:"point"}),F.newShapeStarted=!0,o.push(C),F.currentUniqueId=C):null!==S&&T.type.includes("segment")&&(T.isSelected=!1,D=++F.uniqueId,W({uniqueId:T.perpBId=D,segmentId:T.uniqueId,segment:T,segmentPlotted:!1,connectionId:[T.uniqueId],mode:"segment"}),F.newShapeStarted=!0,o.push(D),F.currentUniqueId=D)):"angleB"===t&&null!==i?(S=he(e),T=te(S).shape,null!==l?(q=++F.uniqueId,D=F.currentUniqueId,n[l].connectionId.push(q),W({uniqueId:n[l].angleBId=q,firstPointId:D,firstPointPlotted:!1,secondPointPlotted:!1,thirdPointPloted:!1,x:i.x,y:i.y,mode:"point",connectionId:[D]}),F.newShapeStarted=!0,F.currentUniqueId=q,o.push(q)):null!==S&&T.type.includes("segment")&&(T.isSelected=!1,q=++F.uniqueId,W({uniqueId:(S=T).angleBId=q,firstSegmentId:T.uniqueId,firstSegmentPlotted:!1,secondSegmentPlotted:!1,firstSegment:{x:S.x,y:S.y,xTo:S.xTo,yTo:S.yTo},x:T.x,y:T.y,mode:"segment",connectionId:[T.uniqueId]}),F.newShapeStarted=!0,F.currentUniqueId=q,o.push(q))):"angleSize"===t&&null!==i?(F.mouseDown.lastShapeCompleted=!1,w=++F.uniqueId,null!==l?(M=F.currentUniqueId,n[l].connectionId.push(w),W({uniqueId:n[l].angleSizeId=w,firstPointId:M,firstPointPlotted:!1,secondPointPlotted:!1,degree:0,clockwise:!0,x:i.x,y:i.y,mode:"point",connectionId:[M]}),F.currentUniqueId=M):(M=++F.uniqueId,J(i,{uniqueId:M,angleSizeId:w,connectionId:[w]}),W({uniqueId:w,firstPointId:M,firstPointPlotted:!1,secondPointPlotted:!1,x:i.x,y:i.y,connectionId:[M],mode:"point"})),o.push(w),F.newShapeStarted=!0):"segSize"===t&&null!==i?(O=++F.uniqueId,null!==l?(w=F.currentUniqueId,n[l].connectionId.push(O),W({uniqueId:n[l].segSizeId=O,firstPointPlotted:!1,firstPointId:w,x:i.x,y:i.y,connectionId:[w]}),F.currentUniqueId=w,o.push(O)):(L=++F.uniqueId,J(i,{uniqueId:L,segSizeId:O,connectionId:[O]}),W({uniqueId:O,firstPointId:L,firstPointPlotted:!1,x:i.x,y:i.y,connectionId:[L]}),F.currentUniqueId=L),F.newPlottedShapes.push(O),F.newShapeStarted=!0):"circle"===t&&null!==i?(L=[],O=null===l?++F.uniqueId:F.currentUniqueId,E=++F.uniqueId,null===l?J(i,{uniqueId:O,connectionId:[E]}):n[l].connectionId.push(E),null===l&&(L=[F.currentUniqueId]),W({uniqueId:E,firstPointId:O,x:i.x,y:i.y,r:0,connectionId:L}),F.currentUniqueId=E,o.push(E)):"perpendicularLine"===t||"parallelLine"===t?(E=++F.uniqueId,null!==l?null!==i&&(X=F.currentUniqueId,a={firstPointId:X,pointToLine:!0,x:i.x,y:i.y,xTo:i.x,yTo:i.y}):(X=ge(e,"perpendicularLine"===t))?((a=X).lineToPoint=!0,(A=te(a.line))&&(A.shape.connectionId.push(E),A.shape.isSelected=!0)):(A=++F.uniqueId,J(i,{uniqueId:A,connectionId:[E]}),o.push(A),a={firstPointId:A,pointToLine:!0,x:i.x,y:i.y,xTo:i.x,yTo:i.y}),a.pointToLine&&(te(a.firstPointId).shape.isSelected=!0),a.firstPointPlotted=!1,a.connectionId=[],a.uniqueId=E,F.currentUniqueId=E,o.push(a.uniqueId),W(a)):"brush1"===t||"brush2"===t||"brush3"===t?F.currentUniqueId=function(e){var n=_.interactionElements,t=null,o=null,i=null,a=G(e.pageX,e.pageY),l=e.pageX,s=e.pageY,r=k(a,!1);r&&(t=r.dist,i=r.index);if(null===i){i=o=t=null;for(var d=0;d<n.length;d++){var u,c,y,p=n[d];"circle"===p.type||"compass"===p.type?o=_.LabComClass.Maths.getDistance(a,p)-p.r:"line"===p.type||"perpendicularLine"===p.type||"parallelLine"===p.type?o=_.LabComClass.Maths.getPointLineDistance(a,p,{x:p.xTo,y:p.yTo}):p.type.includes("segment")||"ray"===p.type?(o=_.LabComClass.Maths.getPointLineDistance(a,p,{x:p.xTo,y:p.yTo}),Math.abs(o)<V(10)&&(y={x:p.xTo,y:p.yTo},"ray"===p.type&&(y={x:p.xOr,y:p.yOr}),u=_.LabComClass.Maths.getDistance(a,p),c=_.LabComClass.Maths.getDistance(a,y),y=_.LabComClass.Maths.getDistance(p,y),u<=y&&c<=y||(o=null))):"angle"===p.type&&p.visible&&(y=180*_.LabComClass.Maths.getAngle(p.x,p.y,a.x,a.y)/Math.PI<0?360+180*_.LabComClass.Maths.getAngle(p.x,p.y,a.x,a.y)/Math.PI:180*_.LabComClass.Maths.getAngle(p.x,p.y,a.x,a.y)/Math.PI,(p.angleStart<p.angleEnd&&y>=p.angleStart&&y<=p.angleEnd&&_.LabComClass.Maths.getDistance(a,p)<V(20)||p.angleStart>p.angleEnd&&(y>=p.angleStart&&y<=360||0<=y&&y<=p.angleEnd)&&_.LabComClass.Maths.getDistance(a,p)<V(20))&&(o=0)),(null===t&&null!==o||null!==t&&null!==o&&Math.abs(o)<Math.abs(t))&&(t=Math.abs(o),i=d)}}o=null;var h=_.context;h.save(),h.beginPath(),h.font=_.fontSize+"px "+_.LabComClass.polo22KlettRegular,h.textBaseline="bottom";for(var x=null,g=0;g<n.length;g++){var b,f,I=n[g],m=!1;void 0!==I.label&&((b=Y(I.labelX,I.labelY)).x+=Number(I.labelDiffX),b.y+=Number(I.labelDiffY),f=h.measureText(I.label).width,I.labelAlign&&"center"===I.labelAlign?l>b.x-f/2-5&&l<b.x+f/2+5&&s>b.y-1.5*_.fontSize&&s<b.y+5&&"segment"!==I.type&&(m=!(o=0)):l>b.x-5&&l<b.x+f+5&&s>b.y-1.5*_.fontSize&&s<b.y+5&&"angle"!==I.type&&"segment"!==I.type&&"point"!==I.type&&(m=!(o=0))),(null===t&&null!==o||null!==t&&null!==o&&Math.abs(o)<=Math.abs(t)&&m)&&(t=Math.abs(o),x=i=g)}if(h.closePath(),h.restore(),null!==i&&Math.abs(t)<V(10)){if("mousedown"===e.type){if(F.mouseDown.objectDown=!0,n[i].isSelected)n[i].isMouseDown=!1;else{if("move"===_.interactionType)for(var P=0;P<n.length;P++)n[P].isSelected=!1;n[i].isSelected=!0,n[i].isMouseDown=!0}return x===i&&(F.isLableSelected=!0),n[i].uniqueId}n[i].isSelected&&!n[i].isMouseDown&&e.pageX===F.mouseDown.orignalX&&e.pageY===F.mouseDown.orignalY&&(n[i].isSelected=!1)}return null}(e):"select"!==t&&"move"!==t||(F.currentUniqueId=he(e)):(t=null===l?++F.uniqueId:F.currentUniqueId,e=++F.uniqueId,null===l?J(i,{uniqueId:t,connectionId:[e]}):n[l].connectionId.push(e),W({uniqueId:e,firstPointId:t,x:i.x,y:i.y,xOr:i.x,yOr:i.y,xTo:i.x,yTo:i.y,xOrTo:i.x,yOrTo:i.y,connectionId:[t]}),F.currentUniqueId=e,o.push(e))}}(e)}function c(e){switch(e.type){case"mousedown":n=e,F.mouseDownData=null,F.isDevice?(F.mouseDownData=JSON.parse(JSON.stringify(n)),F.mouseDownData.delayCounter=0,_.animClass.start({id:"animation",fps:1,frame:d})):u(n);break;case"pressmove":null!==F.mouseDownData&&r(),h(e);break;case"mousemove":null!==F.mouseDownData&&r(),n=e,F.mouseDown.lastShapeCompleted||h(n);break;case"mouseup":y(e);break;case"rightmouseup":F.mouseDown.isMouseDown&&y(e),F.mouseDown.isRightMouseDown=!1;break;case"rightmousedown":F.mouseDown.isRightMouseDown=!0,void 0!==j.rightClick&&j.rightClick({id:_.id,type:"rightClick",x:e.pageX,y:e.pageY},!0);break;case"mouseupout":null!==F.mouseDownData&&r(),g(e),F.mouseDown.isMouseDown=!1,"scale1"!==e.subId&&"scale2"!==e.subId||s(),F.mouseDown.isRightMouseDown=!1}var n}function y(e){null!==F.mouseDownData&&r(),g(e),F.mouseDown.isMouseDown=!1,F.mouseDown.objectDown=!1,F.mouseDown.isRightMouseDown=!1}function p(){var e=_.x,n=_.y,t=_.width,o=_.height;z.originPos={x:e+(t-280),y:n+(o-40),xTo:e+(t-40),yTo:n+(o-40)},z.x=z.originPos.x,z.y=z.originPos.y,z.xTo=z.originPos.xTo,z.yTo=z.originPos.yTo}function J(n,t){var o={type:"point",x:n.x,y:n.y,label:""};Object.keys(t).forEach(function(e){o[e]=t[e]}),(n.isIntersection||n.isParameter)&&Object.keys(n).forEach(function(e){o[e]=n[e]}),F.newPlottedShapes.push(t.uniqueId),W(o)}function K(n){if("1"===_.showQuadrants&&(n.x<0||n.y<0)&&(Math.abs(n.x)<V(_.snappingDiff)&&(n.x=0),Math.abs(n.y)<V(_.snappingDiff)&&(n.y=0),n.x<0||n.y<0))return null;var e,t,o,i,a,l=JSON.parse(JSON.stringify(n)),s={},r=!1;return _.pointSnapping&&(e=k(l,!0),t=function(e){for(var n=null,t=_.interactionElements,o=null,i=0;i<t.length-1;i++){var a=t[i];if("point"!==a.type)for(var l=i+1;l<t.length;l++){var s,r,d,u=t[l];"point"!==u.type&&(ce(a,F.lineTypes)&&ce(u,F.lineTypes)&&F.uniqueId!==a.uniqueId&&F.uniqueId!==u.uniqueId?null!==(r=function(e,n,t){var o=_.LabComClass.Maths.getLineintersect(e.x,e.y,e.xTo,e.yTo,n.x,n.y,n.xTo,n.yTo);if(o){if(e.type.includes("segment")&&!o.onLine1||n.type.includes("segment")&&!o.onLine2)return null;t=_.LabComClass.Maths.getDistance(o,t);return t<V(10)?(o.dist=t,o):null}return null}(a,u,e))&&(r.dist<n||null===n)&&(r.dist,n=r.dist,(o=r).updateKeys={x:o.x,y:o.y,l1:a.uniqueId,l2:u.uniqueId,isIntersection:!0}):(ce(a,F.lineTypes)&&ce(u,["circle","compass"])||ce(u,F.lineTypes)&&ce(a,["circle","compass"]))&&F.uniqueId!==a.uniqueId&&F.uniqueId!==u.uniqueId?(d=s=void 0,d="circle"===a.type||"compass"===a.type?(s=a,u):(s=u,a),null!==(r=pe(s,d,e,_.snappingDiff))&&(r.dist<n||null===n)&&(r.dist,n=r.dist,(o=r).updateKeys={x:o.x,y:o.y,circle:s.uniqueId,line:d.uniqueId,isIntersection:!0})):ce(a,["circle","compass"])&&ce(u,["circle","compass"])&&0==a.visible&&0==u.visible&&((d=ye(a,u,e,_.snappingDiff))&&(d.dist<n||null===n)&&(d.dist,n=d.dist,(o=d).updateKeys={x:o.x,y:o.y,intersectAngle:o.angle1,circle1:a.uniqueId,circle2:u.uniqueId,isIntersection:!0})))}}return o}(l),o=function(e){for(var n=null,t=null,o=_.LabComClass.Maths,i=o.getDistance,a=o.getPoint,l=o.getAngle,s=o.pointInSegment,r=o.getLineintersect,d=o.getPointLineDistance,u=null,c=0;c<_.interactionElements.length-1;c++){var y,p,h,x,g,b=_.interactionElements[c];"point"!==b.type&&(ce(b,F.lineTypes)&&(x=d(e,b,{x:b.xTo,y:b.yTo}),t=Math.abs(x),(null===n||t<n)&&t<V(10)&&(y=l(b.x,b.y,b.xTo,b.yTo),h=a(e,y+Math.PI/2,2),p=r(b.x,b.y,b.xTo,b.yTo,e.x,e.y,h.x,h.y),x=i(b,{x:b.xTo,y:b.yTo}),g=i(b,p)/x,h=l(b.x,b.y,p.x,p.y),x=!0,b.type.includes("segment")&&(s(p,b,{x:b.xTo,y:b.yTo})||(x=!1)),"ray"===b.type&&(s(p,b,{x:b.xOr,y:b.yOr})||(x=!1)),x&&(n=t,de(p,["x","y"])&&((u=p).dist=n,u.updateKeys={x:u.x,y:u.y,line:b.uniqueId,pointAngle:Math.round(h)===Math.round(y),percentage:g,isParameter:!0})))),"circle"!==b.type&&"compass"!==b.type||(g=i(b,e),t=Math.abs(g-b.r),(null===n||t<n)&&t<V(10)&&(n=t,g=l(b.x,b.y,e.x,e.y),de(u=a(b,g,b.r),["x","y"])?(u.dist=n,u.updateKeys={x:u.x,y:u.y,circle:b.uniqueId,angle:g,isParameter:!0}):u=null)))}return u}(l),i=!1,e&&(s.x=e.plotedPoint.x,s.y=e.plotedPoint.y,i=!0),t&&!i&&(l=!0,e&&t.dist>e.dist&&(l=!1),l&&(s={},Object.keys(t.updateKeys).forEach(function(e){s[e]=t.updateKeys[e]}),s.updateKeys=t.updateKeys,i=!0)),o&&!i&&(a=!0,s&&o.dist>s.dist&&(a=!1),a&&(s={},Object.keys(o.updateKeys).forEach(function(e){s[e]=o.updateKeys[e]}),s.updateKeys=o.updateKeys,i=!0))),!r&&_.snapToGrid&&(i=(a=_.graphValues).XunitsPerGrid,a=a.YunitsPerGrid,i=Math.round(n.x/i)*i,a=Math.round(n.y/a)*a,_.LabComClass.Maths.getDistance(n,{x:i,y:a})<V(_.snappingDiff)&&((s={}).x=i,s.y=a,r=!0)),r&&Object.keys(s).forEach(function(e){n[e]=s[e]}),n}function W(n){var t={type:_.interactionType,step:_.currentStep,visible:!0};return Object.keys(n).forEach(function(e){t[e]=n[e]}),_.interactionElements.push(t),t}function h(e){var n,t,o=_.interactionType,i=_.interactionElements,a=(null!==F.currentUniqueId?te(F.currentUniqueId):te(F.uniqueId)).shape,l=G(e.pageX,e.pageY);if(null!==(l=K(l))&&fe(l)&&F.cOnBound&&(a.isDraggable=!0),"scale1"===e.subId||"scale2"===e.subId)"scale1"===e.subId?(z.x=l.x,z.y=l.y,ve()):"scale2"===e.subId&&(z.xTo=l.x,z.yTo=l.y,ve());else{if((null===l||F.mouseDown.objectDown&&(!a||void 0!==a.isDraggable&&!a.isDraggable))&&("move"!==o||!F.isLableSelected))return void console.info("rejected");if("point"===o)Q(a,{x:l.x,y:l.y});else if(o.includes("segment"))a.xTo=l.x,a.yTo=l.y;else if("length"===o)a&&"length"===a.type&&void 0===a.secondPointId&&(a.xTo=l.x,a.yTo=l.y);else if("compass"===o)a&&"compass"===a.type&&(a.isPloted?(a.x=l.x,a.y=l.y):(a.xTo=l.x,a.yTo=l.y));else if("line"===o){var s=i[i.length-1];s.xTo=l.x,s.yTo=l.y,me(s)}else if("ray"===o){s=i[i.length-1];s.xTo=l.x,s.yTo=l.y,me(s)}else if("angleRay"===o)a&&((n=te(a.angleRayId).shape).firstRayPlotted?(a.xTo=l.x,a.yTo=l.y,n.thirdPoint={x:l.x,y:l.y}):(a.x=l.x,a.y=l.y),me(a));else if("triangle"===o)a&&((n=te(a.triangleId).shape).firstSegmentPlotted?(a.xTo=l.x,a.yTo=l.y,n.thirdPoint={x:l.x,y:l.y}):(a.x=l.x,a.y=l.y));else if("angle"!==o)if("circle_3"===o){for(var r,d=i.length-1;0<=d;d--)if("circle_3"===i[d].type){r=d;break}var u=i[r],c={};"circle_3"===u.type&&!1!==u.secondPointPlotted&&(void 0!==u.firstPointPlotted&&void 0!==u.secondPointPlotted&&(c=Z(te(u.firstPointId).shape,te(u.secondPointId).shape,l)),u.x=c.x,u.y=c.y,u.r=c.r)}else if("circle"===o){var u=i[i.length-1];u.r=Math.abs(_.LabComClass.Maths.getDistance({x:u.x,y:u.y},l)),c=u,(u={}).id=_.id,c.type=_.interactionType,u.type="geoCircle",u.data=c,void 0!==j[u.type]&&j[u.type](u,!0)}else if("perpendicularLine"===o||"parallelLine"===o)F.mouseDown.isMouseDown&&a.pointToLine&&!a.firstPointPlotted&&void 0!==a.firstPointId&&F.newPlottedShapes.includes(a.firstPointId)&&((t=te(a.firstPointId).shape).x=l.x,t.y=l.y),a.lineToPoint&&(a.x=l.x,a.y=l.y,Ce(a));else if("move"===o&&!F.mouseDown.objectDown||"moveGraph"===o)F.mouseDown.isMouseDown&&(a=t=0,t=e.pageX-F.mouseDown.x,a=e.pageY-F.mouseDown.y,F.mouseDown.x=e.pageX,F.mouseDown.y=e.pageY,void 0!==j[o]&&j[o]({id:_.id,type:"moveGraph",data:{x:t,y:a}},!0));else if("select"===o||"move"===o&&F.mouseDown.objectDown){if((_.shapesEditable||F.isLableSelected)&&F.mouseDown.isMouseDown&&F.mouseDown.objectDown){var y=e.pageX-F.mouseDown.x,p=e.pageY-F.mouseDown.y,h=Y(0,0),h=G(h.x+y,h.y+p);if(y=h.x,p=h.y,F.isLableSelected)for(var x=0;x<i.length;x++){var g=i[x],b=Y(g.labelX,g.labelY),b={x:e.pageX-b.x,y:e.pageY-b.y};if(g.isSelected){b=b,(g=g).labelDiffX=b.x,g.labelDiffY=b.y,g.labelDiffX=50<g.labelDiffX?50:g.labelDiffX<-50?-50:g.labelDiffX,g.labelDiffY=50<g.labelDiffY?50:g.labelDiffY<-50?-50:g.labelDiffY;break}}else{for(var f=0;f<i.length;f++)i[f].isMoved=!1;for(var I=0;I<i.length;I++){var m,P,C=i[I];void 0!==C.isDraggable&&!C.isDraggable||!C.isSelected||C.isMoved||(C.isMoved=!0,"point"===C.type&&"rhombus"!==C.shapeType&&"parallelogram"!==C.shapeType?(C.x+=y,C.y+=p,"move"===o&&(C.x=l.x,C.y=l.y),w(C)):"point"===C.type&&"rhombus"===C.shapeType?(F.isCollinear=S(C,l),F.shapeOnBound=function(e,n){var t=!1;{var o,i,a,l,s,r,d,u,c,y;F.isCollinear||(o=_.interactionElements.filter(function(e){return"point"===e.type}),s=G(_.x,_.y+_.height),l=G(_.x+_.width,_.y),s.x,y=s.y,l.x,i=l.y,"B"===e.label?(a=!1,e.x=n.x,e.y=n.y,r=o[0],d=o[3],s=_.LabComClass.Maths.getAngle(r.x,r.y,e.x,e.y),u=_.LabComClass.Maths.getDistance(r,d),l=_.LabComClass.Maths.getPoint(d,s,u),s=_.LabComClass.Maths.getAngle(d.x,d.y,l.x,l.y),l=_.LabComClass.Maths.getPoint(r,s,u),s=Ie(l),a=void 0!==s&&("down"===s.out||"up"===s),e.x=l.x,e.y=l.y,e.labelX=e.x,e.labelY=e.y,a&&(c=_.LabComClass.Maths.getPoint(r,_.LabComClass.Maths.getAngle(d.x,d.y,o[2].x,o[2].y),u),e.x=c.x,e.y=y,e.labelX=e.x,e.labelY=e.y,t=!0)):"C"===e.label&&(r=!1,e.x=n.x,e.y=n.y,d=o[0],u=o[3],c=_.LabComClass.Maths.getAngle(u.x,u.y,e.x,e.y),y=_.LabComClass.Maths.getDistance(d,u),n=_.LabComClass.Maths.getPoint(d,c,y),c=_.LabComClass.Maths.getAngle(d.x,d.y,n.x,n.y),n=_.LabComClass.Maths.getPoint(u,c,y),c=Ie(n),r=void 0!==c&&("down"===c.out||"up"===c.out),e.x=n.x,e.y=n.y,e.labelX=e.x,e.labelY=e.y,r&&(y=_.LabComClass.Maths.getPoint(u,_.LabComClass.Maths.getAngle(d.x,d.y,o[1].x,o[1].y),y),e.x=y.x,e.y=i,e.labelX=e.x,e.labelY=e.y,t=!0)))}return t}(C,l),F.isCollinear||F.shapeOnBound||("move"===o&&(C.x=l.x,C.y=l.y),w(C))):"point"===C.type&&"parallelogram"===C.shapeType?(F.isCollinear=S(C,l),F.isCollinear||("move"===o&&(C.x=l.x,C.y=l.y),w(C))):C.type.includes("segment")?(C.x+=y,C.y+=p,C.xTo+=y,C.yTo+=p):"line"===C.type||"ray"===C.type?(C.x+=y,C.y+=p,C.xTo+=y,C.yTo+=p,me(i[I])):"circle"===C.type?(m=te(C.firstPointId),P=te(C.secondPointId),m&&P&&ee([m.shape,P.shape])&&(m.shape.isMoved||(ne(m.shape,{x:m.shape.x+y,y:m.shape.y+p}),m.isMoved=!0),P.shape.isMoved||(ne(P.shape,{x:P.shape.x+y,y:P.shape.y+p}),P.isMoved=!0))):"compass"===C.type?(P=te(C.centerPointId))&&ne(P.shape,{x:P.shape.x+y,y:P.shape.y+p}):"perpendicularLine"===C.type||C.type)}for(var v=0;v<i.length;v++){var T=i[v];T.isSelected&&("point"===T.type&&0<T.connectionId.length&&M(T,y,p),(T.type.includes("segment")||"line"===T.type||"ray"===T.type)&&0<T.connectionId.length&&M(T,y,p))}}}else"select"===o&&function(e,n,t,o){{var i;t<e&&(i=e,e=t,t=i,i=n,n=o,o=i)}for(var a=0;a<_.interactionElements.length;a++){var l,s=_.interactionElements[a];"point"===s.type&&(s.isSelected||(l=Y(s.x,s.y)).x>=e&&l.x<=t&&l.y>=n&&l.y<=o&&(s.isSelected=!0))}}((h=F.mouseDown).orignalX,h.orignalY,h.x,h.y);F.mouseDown.x=e.pageX,F.mouseDown.y=e.pageY}H(e),H(e)}return 1}function S(e,n){var t=_.interactionElements.filter(function(e){return"point"===e.type});switch(e.shapeType){case"rhombus":switch(e.label){case"A":return be({x:n.x,y:n.y},t[2],t[3],!1).value<0;case"B":case"C":return 0<be({x:n.x,y:n.y},t[0],t[3],!1).value;case"D":return be({x:n.x,y:n.y},t[0],t[1],!1).value<0}break;case"parallelogram":switch(e.label){case"A":return be({x:n.x,y:n.y},t[1],t[3],!1).value<0;case"B":return 0<be({x:n.x,y:n.y},t[0],t[3],!1).value;case"C":return 0<be({x:n.x,y:n.y},t[1],t[3],!1).value;case"D":return be({x:n.x,y:n.y},t[0],t[1],!1).value<0}}}function Q(n,t){var e=!1;return ee([n])&&(e=(n.isIntersection&&void 0!==n.circle1&&n.circle2,!0)),n.x===t.x&&n.y===t.y&&(e=!0),e&&Object.keys(t).forEach(function(e){n[e]=t[e]}),e}function H(Y){for(var e=_.LabComClass.Maths,k=e.getDistance,B=e.getAngle,U=e.getPoint,R=e.pointInSegment,j=e.getLineintersect,z=e.getLinePointIntersection,n=function(e){var n,t,o,i,a,l,s,r,d,u,c,y,p,h,x,g,b,f,I,m,P,C,v,T,D,q,S,M,w=_.interactionElements[e];if(!w.type.includes("segment")&&"length"!==w.type&&"line"!==w.type&&"ray"!==w.type||(e=null,w.firstPointId&&(n=te(w.firstPointId))&&(e=n.shape.label,ne(w,{x:n.shape.x,y:n.shape.y})),w.secondPointId&&(t=te(w.secondPointId))&&(e&&(e+=t.shape.label,void 0===w.label&&(w.label=e)),ne(w,{xTo:t.shape.x,yTo:t.shape.y})),"line"!==w.type&&"ray"!==w.type||me(w),w.type.includes("segment")&&(e={x:(w.x+w.xTo)/2,y:(w.y+w.yTo)/2},w.labelX=e.x,w.labelY=e.y,w.distance=k(w,{x:w.xTo,y:w.yTo})),w.type.includes("segment")&&w.firstPointId&&w.secondPointId&&(n.shape.visible&&t.shape.visible?w.visible=!0:w.visible=!1),"length"===w.type&&(i="",w.segmentID?(o=te(w.segmentID))&&o.shape&&(w.x=o.shape.x,w.xTo=o.shape.xTo,w.y=o.shape.y,w.yTo=o.shape.yTo,n=te(o.shape.firstPointId),t=te(o.shape.secondPointId),n&&n.shape&&t&&t.shape?""!==n.shape.label&&""!==t.shape.label&&(i=n.shape.label+""+t.shape.label):o.shape.label&&(i=o.shape.label)):w.labelText?i=w.labelText:(o=te(w.firstPointId),l=te(w.secondPointId),o&&o.shape&&l&&l.shape&&""!==o.shape.label&&""!==l.shape.label&&(i=o.shape.label+""+l.shape.label)),w.distance=k(w,{x:w.xTo,y:w.yTo}),void 0!==_.shapes.length.digit&&(w.distance=Number(w.distance.toFixed(_.shapes.length.digit))),l={x:(w.x+w.xTo)/2,y:(w.y+w.yTo)/2},i&&(w.label="§d".concat(i,"§r = ")+w.distance),w.labelX=l.x,w.labelY=l.y,void 0===w.labelDiffX&&(w.labelDiffX=0,w.labelDiffY=0))),"angleRay"===w.type&&void 0!==w.firstPointId&&void 0!==w.secondPointId&&(s=te(w.firstPointId).shape,i=te(w.secondPointId).shape,void 0!==w.thirdPointId?a=te(w.thirdPointId).shape:w.thirdPoint&&(a=w.thirdPoint),a&&(w.x=i.x,w.y=i.y,r=new _.LabComClass.Vector(i.x-s.x,i.y-s.y),l=new _.LabComClass.Vector(a.x-s.x,a.y-s.y),w.angle=l.crossProduct(r).z,w.startAngle=_.LabComClass.Maths.getAngle(i.x,i.y,a.x,a.y),w.endAngle=_.LabComClass.Maths.getAngle(i.x,i.y,s.x,s.y),(r=w.endAngle-w.startAngle)<0?r=-1*r*180/Math.PI:0<r&&(r=360-180*r/Math.PI),w.angleText=""+Math.round(r),w.angleValue=Math.round(r))),"angleB"===w.type&&void 0!==w.firstPointId&&void 0!==w.secondPointId&&(s=te(w.firstPointId).shape,r=te(w.secondPointId).shape,void 0!==w.thirdPointId?d=te(w.thirdPointId).shape:w.thirdPoint&&(d=w.thirdPoint),d&&(u=le({firstPoint:s,secondPoint:r,thirdPoint:d}),w.x=u.bisectorLine.x,w.y=u.bisectorLine.y,w.xTo=u.bisectorLine.xTo,w.yTo=u.bisectorLine.yTo)),"mirrorOnLine"===w.type&&void 0!==w.line&&w.linePlotted&&(u=oe((u=se(w.line)).a,u.b,u.c,w.x,w.y),w.x=u.x,w.y=u.y),"circle_3"===w.type&&void 0!==w.firstPointId&&void 0!==w.secondPointId&&(c=te(w.firstPointId).shape,y=te(w.secondPointId).shape,void 0!==w.thirdPointId?p=te(w.thirdPointId).shape:w.thirdPoint&&(p=w.thirdPoint),p&&(h=Z(c,y,p),w.x=h.x,w.y=h.y,w.r=h.r)),"angle"===w.type&&void 0!==w.firstPointId&&void 0!==w.secondPointId&&(c=te(w.firstPointId).shape,y=te(w.secondPointId).shape,void 0!==w.thirdPointId?x=te(w.thirdPointId).shape:w.thirdPoint&&(x=w.thirdPoint),x&&(w.x=y.x,w.y=y.y,p=new _.LabComClass.Vector(y.x-c.x,y.y-c.y),h=new _.LabComClass.Vector(x.x-c.x,x.y-c.y),w.angle=h.crossProduct(p).z,w.startAngle=_.LabComClass.Maths.getAngle(y.x,y.y,x.x,x.y),w.endAngle=_.LabComClass.Maths.getAngle(y.x,y.y,c.x,c.y),w.angleStart=180*spineObj.LabComClass.Maths.getAngle(y.x,y.y,c.x,c.y)/Math.PI<0?360+180*spineObj.LabComClass.Maths.getAngle(y.x,y.y,c.x,c.y)/Math.PI:180*spineObj.LabComClass.Maths.getAngle(y.x,y.y,c.x,c.y)/Math.PI,w.angleEnd=180*spineObj.LabComClass.Maths.getAngle(y.x,y.y,x.x,x.y)/Math.PI<0?360+180*spineObj.LabComClass.Maths.getAngle(y.x,y.y,x.x,x.y)/Math.PI:180*spineObj.LabComClass.Maths.getAngle(y.x,y.y,x.x,x.y)/Math.PI,(x=w.endAngle-w.startAngle)<0?x=-1*x*180/Math.PI:0<x&&(x=360-180*x/Math.PI),w.angleText=""+Math.round(x),w.angleValue=Math.round(x),w.labelX=y.x,w.labelY=y.y)),"midPoint"===w.type)void 0!==w.firstPointId&&void 0!==w.secondPointId&&(L=te(w.firstPointId).shape,O=te(w.secondPointId).shape,w.x=(L.x+O.x)/2,w.y=(L.y+O.y)/2);else if("triangle"===w.type){var L=te(w.firstPointId).shape,O=te(w.secondPointId).shape,E=te(w.thirdPointId).shape;void 0!==w.firstPointId&&void 0!==w.secondPointId&&void 0!==w.thirdPointId&&(w.firstPoint={x:L.x,y:L.y,label:L.label},w.secondPoint={x:O.x,y:O.y,label:O.label},w.thirdPoint={x:E.x,y:E.y,label:E.label},w.firstSegmentPlotted=!0,w.secondSegmentPlotted=!0,w.thirdSegmentPlotted=!0)}else if("compass"===w.type)void 0!==w.segmentID?(E=te(w.segmentID))&&E.shape&&(w.r=k(E.shape,{x:E.shape.xTo,y:E.shape.yTo})):void 0!==w.circleID?(g=te(w.circleID))&&(w.r=g.shape.r):void 0!==w.firstPointId&&void 0!==w.secondPointId?(g=te(w.firstPointId),b=te(w.secondPointId),g&&b&&(w.r=k(g.shape,b.shape))):w.r=k(w,{x:w.xTo,y:w.yTo}),void 0===w.centerPointId||(b=te(w.centerPointId).shape)&&ne(w,{x:b.x,y:b.y});else if("point"===w.type){w.firstPointPlotted&&w.secondPointPlotted&&!w.onSegment&&(f=te(w.firstPointId).shape,I=te(w.secondPointId).shape,w.x=(f.x+I.x)/2,w.y=(f.y+I.y)/2),w.onSegment&&(w.x=(w.firstPointCoords.x+w.secondPointCoords.x)/2,w.y=(w.firstPointCoords.y+w.secondPointCoords.y)/2),w.isIntersection&&(void 0!==w.l1&&void 0!==w.l2&&(f=te(w.l1),I=te(w.l2),f&&I&&(f=f.shape,I=I.shape,!(m=j(f.x,f.y,f.xTo,f.yTo,I.x,I.y,I.xTo,I.yTo)).onLine1&&f.type.includes("segment")||!m.onLine2&&I.type.includes("segment")?w.visible=!1:w.visible=!0,ne(w,{x:m.x,y:m.y}))),void 0!==w.circle&&void 0!==w.line&&(m=te(w.circle),P=te(w.line),m&&P&&(null!==(C=pe(m=m.shape,P=P.shape,w))?(ne(w,{x:C.x,y:C.y}),w.visible=!0):w.visible=!1)),void 0!==w.circle1&&void 0!==w.circle2&&(q=te(w.circle1),D=te(w.circle2),q&&D&&((T=ye(q=q.shape,D=D.shape,w,!1))&&void 0!==T.x&&!isNaN(T.x)?w.visible=function(e,n,t,o){var i=_.LabComClass.Vector;if(e.visible){e.x=o.x,e.y=o.y;var a=new i(t.x-n.x,t.y-n.y),l=new i(o.x-n.x,o.y-n.y);return e.angle1=a.crossProduct(l).z,!0}l=_.LabComClass.Maths.getIntersectOfTwoCircles(n.x,n.y,n.r,t.x,t.y,t.r);if(l.length<2)return!1;if(_.LabComClass.Maths.getDistance(l[0],l[1])<V(_.snappingDiff))return!1;t=new i(t.x-n.x,t.y-n.y),n=new i(l[0].x-n.x,l[0].y-n.y),n=t.crossProduct(n).z;e.angle1<0&&n<0||0<e.angle1&&0<n?(e.x=l[0].x,e.y=l[0].y):(e.x=l[1].x,e.y=l[1].y);return!0}(w,q,D,T):w.visible=!1))),w.isParameter&&_.shapesEditable&&(void 0===w.line||(M=te(w.line))&&(M=M.shape,P=k(M,{x:M.xTo,y:M.yTo}),C=B(M.x,M.y,M.xTo,M.yTo),v={},q=w.pointAngle?P*w.percentage:P*w.percentage*-1,Y&&w.isSelected&&F.mouseDown.isMouseDown&&F.mouseDown.objectDown&&(D=G(Y.pageX,Y.pageY),T=z(M,{x:M.xTo,y:M.yTo},D),D=k(M,T),v.pointAngle=B(M.x,M.y,T.x,T.y),v.pointAngle=Math.round(v.pointAngle)===Math.round(C),v.percentage=D/P,q=v.pointAngle?P*v.percentage:P*v.percentage*-1),q=U(M,C,q),v.x=q.x,v.y=q.y,!M.type.includes("segment")&&"ray"!==M.type||(S={x:M.xTo,y:M.yTo},"ray"===M.type&&(S={x:M.xOr,y:M.yOr}),R(q,M,S)||(k(q,M)<k(q,S)?(v.x=M.x,v.y=M.y):(v.x=S.x,v.y=S.y))),Object.keys(v).forEach(function(e){w[e]=v[e]})),void 0===w.circle||(M=te(w.circle))&&(M=M.shape,Y&&w.isSelected&&F.mouseDown.objectDown&&(S=G(Y.pageX,Y.pageY),w.angle=B(M.x,M.y,S.x,S.y)),M=U(M,w.angle,M.r),ne(w,{x:M.x,y:M.y})));for(var X=0;X<w.connectionId.length;X++){var A=te(w.connectionId[X]);A.shape&&("perpendicularLine"===A.shape.type||"parallelLine"===A.shape.type?(A.shape.visible=w.visible,ne(A.shape,{x:w.x,y:w.y}),Ce(A.shape)):"circle"===A.shape.type&&$(A.shape))}}else"perpendicularLine"===w.type||"parallelLine"===w.type?Ce(w):"circle"===w.type&&$(w);w&&void 0!==w.label&&(void 0===w.labelX&&(w.labelX=w.x,w.labelY=w.y),void 0===w.labelDiffX&&(w.labelDiffX=0,w.labelDiffY=0))},t=0;t<_.interactionElements.length;t++)n(t)}function Z(e,n,t){var o={},i={},a={};return o.x=(e.x+n.x)/2,o.y=(e.y+n.y)/2,i.x=(n.x+t.x)/2,i.y=(n.y+t.y)/2,o.m=x((n.y-e.y)/(n.x-e.x)),i.m=x((t.y-n.y)/(t.x-n.x)),o.slope=x(-1/o.m),i.slope=x(-1/i.m),o.eqn="(y-".concat(o.y,"=").concat(o.slope,"(x-").concat(o.x,"))"),o.a=-o.slope,o.b=1,o.c=x(-o.slope*-o.x-o.y),i.e="".concat(i.a,"x ").concat(i.b,"y ").concat(i.c),i.eqn="(y-".concat(i.y,"=").concat(i.slope,"(x-").concat(i.x,"))"),i.a=-i.slope,i.b=1,i.c=x(-i.slope*-i.x-i.y),i.e="".concat(i.a,"x ").concat(i.b,"y ").concat(i.c),a.x=(o.b*i.c-i.b*o.c)/(o.a*i.b-i.a*o.b),a.y=(o.c*i.a-i.c*o.a)/(o.a*i.b-i.a*o.b),a.r=_.LabComClass.Maths.getDistance(a,e),{x:a.x,y:a.y,r:a.r}}function x(e){return Math.round(100*e)/100}function $(e){var n,t;"circle"===e.type&&void 0!==e.firstPointId&&void 0!==e.secondPointId&&(n=te(e.firstPointId),t=te(e.secondPointId),n&&t&&(e.x=n.shape.x,e.y=n.shape.y,e.r=_.LabComClass.Maths.getDistance(n.shape,t.shape)))}function ee(e){var n=!0;if(Array.isArray(e)){for(var t=0;t<e.length;t++)if(void 0===e[t]||void 0!==e[t].isDraggable&&!e[t].isDraggable){n=!1;break}}else void 0===e.isDraggable||e.isDraggable||(n=!1);return n}function ne(n,t){void 0!==n.isDraggable&&!n.isDraggable||Object.keys(t).forEach(function(e){n[e]=t[e]})}function M(e,n,t){for(var o=e.connectionId,i=0;i<o.length;i++){var a=te(o[i]).shape;if(void 0!==a&&!1!==a&&!a.isMoved)if(a.isMoved=!0,"point"===a.type){var l=!0;if(!a.isSelected&&a.connectionId.length)for(var s=0;s<a.connectionId.length;s++){var r=te(a.connectionId[s]).shape;!r||"line"!==r.type&&"ray"!==r.type&&!r.type.includes("segment")||(r=te(r.firstPointId===a.uniqueId?r.secondPointId:r.firstPointId))&&r.shape&&void 0!==r.shape.isDraggable&&!0!==r.shape.isDraggable&&(l=!1)}l&&ne(a,{x:a.x+n,y:a.y+t})}else"line"===a.type||"ray"===a.type||a.type.includes("segment")?(a.firstPointId===e.uniqueId?(a.x=e.x,a.y=e.y):(a.xTo=e.x,a.yTo=e.y),"line"!==a.type&&"ray"!==a.type||me(a)):"perpendicularLine"===a.type||"parallelLine"===a.type?"point"===e.type&&(a.x=e.x,a.y=e.y,Ce(a)):"circle"===a.type&&"point"===e.type&&a.firstPointId===e.uniqueId&&(a.x=e.x,a.y=e.y)}}function te(e){for(var n=_.interactionElements,t=n.length-1;0<=t;t--)if(n[t]&&n[t].uniqueId===e)return{index:t,shape:n[t]};return!1}function g(e){var n=_.interactionElements,t=_.interactionType;_.context.font="".concat(_.fontSize,"px ").concat(_.LabComClass.polo22KlettRegular);var o={type:t},i=t,a=!1,l=G(e.pageX,e.pageY),s=null!==F.currentUniqueId&&te(F.currentUniqueId).shape;F.mouseDown.lastShapeCompleted||null!=F.currentUniqueId||(s=te(F.uniqueId).shape),l=K(l);var r=ue(G(e.pageX,e.pageY)),d=null;null!==r&&(d=n[r].uniqueId,l=n[r]),null!==d&&"select"!==i&&"move"!==i&&"moveGraph"!==i&&s&&(s.isSelected=!1);var u,c,y,p,h=null!==l;if("point"===i&&s&&h)ee([s])?Q(s,{x:l.x,y:l.y})&&(_.shapesEditable||(s.isDraggable=!1,o.isDraggable=s.isDraggable),a=!0,o.x=l.x,o.y=l.y,o.uniqueId=s.uniqueId,a=a&&de(s,["x","y"])):_.plotPointOnExistingPoint&&(a=!0,u=++F.uniqueId,o.x=s.x,o.y=s.y,J(l,{uniqueId:u,connectionId:[s.uniqueId]}),o.uniqueId=u);else if(s&&(i.includes("segment")||"length"===i||"line"===i||"ray"===i)&&h)ee([s])&&(s.xTo=l.x,s.yTo=l.y),"line"!==t&&"ray"!==t||me(s),o.x=s.x,o.y=s.y,o.xTo=s.xTo,o.yTo=s.yTo,o.slope=s.slope,o.uniqueId=s.uniqueId,a=(a=!0)&&de(s,["x","y","xTo","yTo"]),null===r?"length"!==i?(J(l,{uniqueId:x=++F.uniqueId,connectionId:[s.uniqueId]}),s.secondPointId=x,s.connectionId.push(x)):void 0!==s.firstPointId&&0<F.newPlottedShapes.length&&n.pop():s.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:("length"!==i&&(l.connectionId.push(s.uniqueId),s.connectionId.push(d)),s.secondPointId=d,F.mouseDown.lastShapeCompleted=!0);else if(s&&"angleRay"===i&&h){var x,g,b,t=te(s.angleRayId).shape;t.firstRayPlotted?(ee([s])&&(s.x=l.x,s.y=l.y),me(s),null===r?(J(l,{uniqueId:b=++F.uniqueId,connectionId:[s.uniqueId]}),s.secondPointId=b,s.connectionId.push(b),t.secondRayPlotted=!0):s.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:(l.connectionId.push(s.uniqueId),s.connectionId.push(d),s.secondPointId=d,t.secondRayPlotted=!0),t.secondRayPlotted&&(t.thirdPointId=s.secondPointId,F.mouseDown.lastShapeCompleted=!0)):(ee([s])&&(s.x=l.x,s.y=l.y),me(s),a=!1,null===r?(J(l,{uniqueId:g=++F.uniqueId,connectionId:[s.uniqueId]}),s.firstPointId=g,s.connectionId.push(g),t.firstRayPlotted=!0):s.secondPointId===d?a=F.mouseDown.lastShapeCompleted=!1:(l.connectionId.push(s.uniqueId),s.connectionId.push(d),s.firstPointId=d,t.firstRayPlotted=!0),t.firstRayPlotted&&(t.secondPointId=s.firstPointId,W({type:"ray",uniqueId:++F.uniqueId,firstPointId:t.secondPointId,angleRayId:s.angleRayId,x:l.x,y:l.y,xOr:l.x,yOr:l.y,xTo:l.x,yTo:l.y,xOrTo:l.x,yOrTo:l.y,connectionId:[t.secondPointId]}),F.currentUniqueId=F.uniqueId,t.x=l.x,t.y=l.y)),a=F.mouseDown.lastShapeCompleted=!1,t.secondRayPlotted&&(x=te(t.firstPointId).shape,b=te(t.secondPointId).shape,g=te(t.thirdPointId).shape,o.firstPoint={x:x.x,y:x.y,label:x.label},o.secondPoint={x:b.x,y:b.y,label:b.label},o.thirdPoint={x:g.x,y:g.y,label:g.label},o.x=b.x,o.y=b.y,b=re(o,"angleRay"),o.angle=b.angle,o.angleValue=b.angleValue,t.label=b.angleText,o.uniqueId=s.uniqueId,a=!0)}else if(s&&"triangle"===i&&h){var f,I,m,P=te(s.triangleId).shape;P.firstSegmentPlotted?(ee([s])&&(s.x=l.x,s.y=l.y),me(s),null===r?(J(l,{uniqueId:f=++F.uniqueId,connectionId:[s.uniqueId]}),s.secondPointId=f,s.connectionId.push(f),P.secondSegmentPlotted=!0):s.firstPointId===d||P.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:(l.connectionId.push(s.uniqueId),s.connectionId.push(d),s.secondPointId=d,P.secondSegmentPlotted=!0)):(ee([s])&&(s.x=l.x,s.y=l.y),me(s),a=!1,null===r?(J(l,{uniqueId:I=++F.uniqueId,connectionId:[s.uniqueId]}),s.firstPointId=I,s.connectionId.push(I),P.firstSegmentPlotted=!0):s.secondPointId===d?a=F.mouseDown.lastShapeCompleted=!1:(l.connectionId.push(s.uniqueId),s.connectionId.push(d),s.firstPointId=d,P.firstSegmentPlotted=!0),P.firstSegmentPlotted&&(P.secondPointId=s.firstPointId,W({type:"segment",uniqueId:++F.uniqueId,firstPointId:P.secondPointId,triangleId:s.triangleId,x:l.x,y:l.y,xTo:l.x,yTo:l.y,connectionId:[P.secondPointId]}),F.newPlottedShapes.push(F.uniqueId),F.currentUniqueId=F.uniqueId,P.x=l.x,P.y=l.y)),P.secondSegmentPlotted&&(m=te(P.firstPointId).shape,P.thirdPointId=s.secondPointId,W({type:"segment",uniqueId:++F.uniqueId,firstPointId:P.thirdPointId,secondPointId:P.firstPointId,triangleId:s.triangleId,x:l.x,y:l.y,xTo:m.x,yTo:m.y,connectionId:[P.thirdPointId,P.firstPointId]}),F.newPlottedShapes.push(F.uniqueId),F.currentUniqueId=F.uniqueId,P.x=l.x,P.y=l.y,P.thirdSegmentPlotted=!0,F.mouseDown.lastShapeCompleted=!0),a=F.mouseDown.lastShapeCompleted=!1,P.thirdSegmentPlotted&&(f=te(P.firstPointId).shape,I=te(P.secondPointId).shape,m=te(P.thirdPointId).shape,o.firstPoint={x:f.x,y:f.y,label:f.label},o.secondPoint={x:I.x,y:I.y,label:I.label},o.thirdPoint={x:m.x,y:m.y,label:m.label},o.x=I.x,o.y=I.y,o.uniqueId=P.uniqueId,a=!0)}else if(s&&"circle_3"===i&&h){var C,v,P="circle_3"!==s.type?te(s.circleId).shape:s;P.firstPointPlotted?(null===r?(J(l,{uniqueId:v=++F.uniqueId,connectionId:[P.uniqueId]}),P.thirdPointId=v,P.thirdPointPloted=!0):P.secondPointId===d||P.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:(l.connectionId.push(P.uniqueId),P.thirdPointId=d,P.thirdPointPloted=!0),P.thirdPointPloted&&(F.mouseDown.lastShapeCompleted=!0)):(a=!1,null===r?(J(l,{uniqueId:C=++F.uniqueId,connectionId:[P.uniqueId],circleId:P.uniqueId}),P.secondPointId=C,P.firstPointPlotted=!0):P.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:(l.connectionId.push(P.uniqueId),l.bbbId=P.uniqueId,P.secondPointId=d,P.firstPointPlotted=!0),P.firstPointPlotted&&(P.secondPointPlotted=!0,F.currentUniqueId=null,P.x=l.x,P.y=l.y)),a=F.mouseDown.lastShapeCompleted=!1,P.thirdPointPloted&&(v=te(P.firstPointId).shape,C=te(P.secondPointId).shape,P=te(P.thirdPointId).shape,o.firstPoint={x:v.x,y:v.y},o.secondPoint={x:C.x,y:C.y},o.thirdPoint={x:P.x,y:P.y},C=(v=o).firstPoint,P=v.secondPoint,v=v.thirdPoint,v={r:(v=Z(C,P,v)).r,x:v.x,y:v.y},o.r=v.r,o.x=v.x,o.y=v.y,a=!0)}else if(s&&"angle"===i&&h){var T,D,q=("point"===s.type?te(s.angleId):te(s.uniqueId)).shape;q.firstPointPlotted?(null===r?(J(l,{uniqueId:T=++F.uniqueId,connectionId:[q.uniqueId],angleId:q.uniqueId}),q.thirdPointId=T,q.thirdPointPloted=!0):q.secondPointId===d||q.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:(l.connectionId.push(q.uniqueId),q.thirdPointId=d,l.angleId=q.uniqueId,q.thirdPointPloted=!0),q.thirdPointPloted&&(F.mouseDown.lastShapeCompleted=!0)):(a=!1,null===r?(J(l,{uniqueId:D=++F.uniqueId,connectionId:[q.uniqueId],angleId:s.angleId}),q.secondPointId=D,q.firstPointPlotted=!0):q.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:(l.connectionId.push(q.uniqueId),l.angleId=s.angleId,q.secondPointId=d,q.firstPointPlotted=!0),q.firstPointPlotted&&(q.secondPointPlotted=!0,F.currentUniqueId=null,q.x=l.x,q.y=l.y)),a=F.mouseDown.lastShapeCompleted=!1,q.thirdPointPloted&&(T=te(q.firstPointId).shape,S=te(q.secondPointId).shape,D=te(q.thirdPointId).shape,o.firstPoint={x:T.x,y:T.y,label:T.label},o.secondPoint={x:S.x,y:S.y,label:S.label},o.thirdPoint={x:D.x,y:D.y,label:D.label},o.x=S.x,o.y=S.y,S=re(o),o.angle=S.angle,o.angleValue=S.angleValue,q.label=S.angleText,q.labelX=q.x+V(10),q.labelY=q.y-V(10),o.uniqueId=s.uniqueId,a=!0)}else if(s&&"angleB"===i&&h&&F.newShapeStarted){var S,M,w=("point"===s.type?te(s.angleBId):te(s.uniqueId)).shape;"point"===w.mode?(void 0===w?(a=F.mouseDown.lastShapeCompleted=!1,F.mouseDown.isMouseDown=!1):null!=w&&w.firstPointPlotted?(null===r||w.secondPointId===d||w.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:(l.connectionId.push(w.uniqueId),w.thirdPointId=d,l.angleBId=s.uniqueId,w.thirdPointPloted=!0),w.thirdPointPloted&&(F.mouseDown.lastShapeCompleted=!0)):(a=!1,null===r||w.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:(l.connectionId.push(w.uniqueId),l.angleBId=s.uniqueId,w.secondPointId=d,w.firstPointPlotted=!0),w.firstPointPlotted&&(w.secondPointPlotted=!0,F.currentUniqueId=null,w.x=l.x,w.y=l.y)),a=F.mouseDown.lastShapeCompleted=!1,null!==w&&void 0!==w&&w.thirdPointPloted&&(S=te(w.firstPointId).shape,q=te(w.secondPointId).shape,M=te(w.thirdPointId).shape,o.firstPoint={x:S.x,y:S.y,label:S.label},o.secondPoint={x:q.x,y:q.y,label:q.label},o.thirdPoint={x:M.x,y:M.y,label:M.label},o.x=q.x,o.y=q.y,o.uniqueId=w.uniqueId,M=le(o),w.firstPoint=o.firstPoint,w.secondPoint=o.secondPoint,w.thirdPoint=o.thirdPoint,M=W({type:"line",uniqueId:++F.uniqueId,x:q.x,y:q.y,xTo:M.x,yTo:M.y,slope:Pe(q.x,q.y,M.x,M.y)}),o.bisectorLine=M,w.bisectorLine=M,o.mode=w.mode,F.newPlottedShapes.push(M.uniqueId),a=!0)):"segment"===w.mode&&(M=te(xe(e)).shape,void 0===w?(a=F.mouseDown.lastShapeCompleted=!1,F.mouseDown.isMouseDown=!1):null!==w&&void 0!==w&&w.firstSegmentPlotted||(a=!1,void 0!==M&&M.type.includes("segment")&&M.uniqueId===w.firstSegmentId?a=F.mouseDown.lastShapeCompleted=!1:void 0!==M&&M.type.includes("segment")&&(M.angleBId=w.uniqueId,w.secondSegmentId=M.uniqueId,w.firstSegmentPlotted=!0,w.secondSegment={x:M.x,y:M.y,xTo:M.xTo,yTo:M.yTo}),w.firstSegmentPlotted&&(w.secondSegmentPlotted=!0,F.currentUniqueId=null,w.x=l.x,w.y=l.y),w.secondSegmentPlotted&&(F.mouseDown.lastShapeCompleted=!0)),a=F.mouseDown.lastShapeCompleted=!1,w.secondSegmentPlotted&&(o.firstSegment=w.firstSegment,o.secondSegment=w.secondSegment,M=function(e,n){var t=[],o=[];Object.values(e).forEach(function(e){t.push(e)}),Object.values(n).forEach(function(e){t.push(e)});for(var i=0;i<t.length;i++)i%2==0&&o.push(t[i]+"/"+t[i+1]);for(var a=[],l=[].concat(o).sort(),s=0;s<l.length;s++)l[s+1]===l[s]&&a.push(l[s]);n=a[0].split("/");return{x:n[0],y:n[1]}}(w.firstSegment,w.secondSegment),o.x=+M.x,o.y=+M.y,w.x=+M.x,w.y=+M.y,o.uniqueId=w.uniqueId,O=le(o,"segment"),O=W({type:"line",uniqueId:++F.uniqueId,x:+M.x,y:+M.y,xTo:O.x,yTo:O.y,slope:Pe(+M.x,+M.y,O.x,O.y)}),o.bisectorLine=O,w.bisectorLine=O,o.mode=w.mode,F.newPlottedShapes.push(O.uniqueId),a=!0))}else if(s&&"angleSize"===i&&h&&F.newShapeStarted){var L,O,w=("point"===s.type?te(s.angleSizeId):te(s.uniqueId)).shape;a=F.mouseDown.lastShapeCompleted=!1,"point"===w.mode?void 0===w?(a=F.mouseDown.lastShapeCompleted=!1,F.mouseDown.isMouseDown=!1):null!=w&&w.firstPointPlotted?w.secondPointPlotted?N.removeUnplotedShapes():a=d===w.firstPointId?F.mouseDown.lastShapeCompleted=!1:(0<=r?(L=d,w.connectionId.push(d)):J(l,{uniqueId:L=++F.uniqueId,angleSizeId:w.uniqueId,connectionId:[w.uniqueId]}),O=te(w.firstPointId).shape,w.secondPointId=L,w.secondPointPlotted=!0,w.x=l.x,w.y=l.y,w.xTo=O.x,w.yTo=O.y,_.waiting=!0,void 0!==j.angleSize&&j.angleSize({id:_.id,type:"angleSize",visible:!0,data:JSON.parse(JSON.stringify(w))},!0),!1):(a=!1,l.angleSizeId=w.uniqueId,F.currentUniqueId=null,w.firstPointPlotted=!0,w.x=l.x,w.y=l.y):"segment"===w.mode&&(te(xe(e)).shape,a=F.mouseDown.lastShapeCompleted=!1)}else if(s&&"segSize"===i&&h){var E=("point"===s.type?te(s.segSizeId):te(s.uniqueId)).shape;a=F.mouseDown.lastShapeCompleted=!1,void 0===E?(a=F.mouseDown.lastShapeCompleted=!1,F.mouseDown.isMouseDown=!1):null!=E&&E.firstPointPlotted?N.removeUnplotedShapes():(a=!1,l.segSizeId=E.uniqueId,F.currentUniqueId=null,E.firstPointPlotted=!0,E.x=l.x,E.y=l.y,E.firstPointPlotted&&(_.waiting=!0,void 0!==j.segSize&&j.segSize({id:_.id,type:"segSize",visible:!0,data:JSON.parse(JSON.stringify(E))},!0),a=!1))}else if(s&&"midPoint"===i&&h){var X,E=te(xe(e)).shape,A=("point"===s.type||s.type.includes("segment")?te(s.midPointId):te(s.uniqueId)).shape;null!=A&&A.firstPointPlotted?A.secondPointPlotted&&(F.mouseDown.lastShapeCompleted=!0):(a=!1,null!=E&&E.type.includes("segment")&&(a=F.mouseDown.lastShapeCompleted=!1),null!==r||null!=E&&E.type.includes("segment")?A.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:0<=r&&null!==r&&(l.connectionId.push(A.uniqueId),l.midPointId=s.midPointId,A.secondPointId=d,A.firstPointPlotted=!0):(J(l,{uniqueId:X=++F.uniqueId,connectionId:[A.uniqueId],midPointId:s.midPointId}),A.secondPointId=X,A.firstPointPlotted=!0),A.firstPointPlotted&&(A.secondPointPlotted=!0,F.currentUniqueId=null,A.x=l.x,A.y=l.y)),a=F.mouseDown.lastShapeCompleted=!1,A.secondPointPlotted&&void 0===A.onSegment?(E=te(A.firstPointId).shape,X=te(A.secondPointId).shape,o.firstPoint={x:E.x,y:E.y,label:E.label},o.secondPoint={x:X.x,y:X.y,label:X.label},o.x=(E.x+X.x)/2,o.y=(E.y+X.y)/2,o.uniqueId=s.uniqueId,a=!0,(X=null===(X=te(A.segmentId))||void 0===X?void 0:X.shape)&&(X.isMouseDown=!1,X.isSelected=!1)):A.secondPointPlotted&&void 0!==A.onSegment&&(o.x=(A.firstPointCoords.x+A.secondPointCoords.x)/2,o.y=(A.firstPointCoords.y+A.secondPointCoords.y)/2,o.uniqueId=s.uniqueId,a=!0,(Y=te(A.segmentId).shape).isMouseDown=!1,Y.isSelected=!1)}else if(s&&"mirrorOnLine"===i&&h){var A=xe(e),Y=te(A).shape,k=("point"===s.type?te(s.mirrorOnLineId):te(s.uniqueId)).shape;null!==k&&void 0!==k&&k.firstPointPlotted||void 0===_typeof(k)||(a=!1,null===r&&Y&&ce(Y,F.lineTypes)?(k.lineId=A,k.firstPointPlotted=!0):(k.firstPointId===d||0<=r&&null!==r)&&(a=F.mouseDown.lastShapeCompleted=!1),k.firstPointPlotted&&(k.linePlotted=!0,F.currentUniqueId=null)),a=F.mouseDown.lastShapeCompleted=!1,a=void 0!==k&&k.linePlotted?(R=te(k.firstPointId).shape,o.firstPoint={x:R.x,y:R.y,uniqueId:R.uniqueId},k.firstPoint={x:R.x,y:R.y,uniqueId:R.uniqueId},R=oe((R=se(A=te(k.lineId).shape)).a,R.b,R.c,k.x,k.y),o.x=R.x,o.y=R.y,k.x=R.x,k.y=R.y,o.lineId=A.uniqueId,o.mirrorPointId=++F.uniqueId,J(R,{uniqueId:o.mirrorPointId,mirrorOnLineId:k.uniqueId,connectionId:[k.uniqueId]}),!0):F.mouseDown.lastShapeCompleted=!1}else if(s&&"perpendicularBisector"===i&&h&&F.newShapeStarted){var B,U,R=s;"point"===R.mode?(R.firstPointPlotted?R.secondPointPlotted&&(F.mouseDown.lastShapeCompleted=!0):(R.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:0<=r&&null!==r&&(l.connectionId.push(R.uniqueId),R.secondPointId=d,R.firstPointPlotted=!0),R.firstPointPlotted&&(R.secondPointPlotted=!0,F.currentUniqueId=null,R.x=l.x,R.y=l.y)),R.firstPointPlotted&&R.secondPointPlotted&&(B=ae(R,k=te(s.firstPointId).shape,B=te(R.secondPointId).shape,{x:(k.x+B.x)/2,y:(k.y+B.y)/2}),o=_objectSpread(_objectSpread({},o),B),a=!0)):"segment"===R.mode&&(U=ae(R,B={x:R.segment.x,y:R.segment.y},U={x:R.segment.xTo,y:R.segment.yTo},{x:(B.x+U.x)/2,y:(B.y+U.y)/2}),o=_objectSpread(_objectSpread({},o),U),a=!0)}else if(s&&("perpendicularLine"===i||"parallelLine"===i)&&h)a=!0,s.lineToPoint?(c=te(s.line).shape,null===r?(U=Math.abs(_.LabComClass.Maths.getPointLineDistance(l,c,{x:c.xTo,y:c.yTo})))<V(_.snappingDiff)&&s.lineSelected||U>V(_.snappingDiff)?(J(l,{uniqueId:U=++F.uniqueId,connectionId:[s.uniqueId]}),s.secondPointId=U,s.connectionId.push(U),F.mouseDown.lastShapeCompleted=!0):(a=!1,F.mouseDown.lastShapeCompleted=!1):d===s.firstPointId?(a=!1,F.mouseDown.lastShapeCompleted=!1):(l.connectionId.push(s.uniqueId),s.connectionId.push(d),s.secondPointId=d,F.mouseDown.lastShapeCompleted=!0),a&&(c.isSelected=!1)):(c=xe(e))&&(y=te(c).shape)&&ce(y,F.lineTypes)?(p=ge(e,"perpendicularLine"===i))&&(s.slope=p.slope,te(s.firstPointId).shape.isSelected=!1,Ce(s),F.mouseDown.lastShapeCompleted=!0):(a=!1,F.mouseDown.lastShapeCompleted=!1),s.pointToLine?s.firstPointPlotted=!0:s.lineSelected=!0,(a=a&&de(s,["x","y","xTo","yTo"]))?(o.x=s.x,o.y=s.y,o.xTo=s.xTo,o.yTo=s.yTo,o.slope=s.slope,o.uniqueId=s.uniqueId,s.visible=!0):(a=!1,F.mouseDown.lastShapeCompleted=!1);else if(s&&"compass"===i)o.x=s.x,o.y=s.y,o.r=s.r,o.uniqueId=s.uniqueId,a=!0,null===r?void 0===s.firstPointId||s.isPloted?s.isPloted?h&&(J(l,{uniqueId:p=++F.uniqueId,connectionId:[s.uniqueId]}),s.connectionId.push(p)):(a=F.mouseDown.lastShapeCompleted=!1,s.isPloted=!0):(n.pop(),a=!1,F.mouseDown.lastShapeCompleted=!0):s.firstPointId===d?a=F.mouseDown.lastShapeCompleted=!1:s.isPloted?(l.connectionId.push(s.uniqueId),s.centerPointId=d,s.connectionId.push(d),F.mouseDown.lastShapeCompleted=!0,(n=void 0!==s.firstPointId?te(s.firstPointId):te(s.circleID))&&(n.shape.isSelected=!1)):(s.secondPointId=d,a=F.mouseDown.lastShapeCompleted=!1,s.isPloted=!0);else if("circle"===i&&s)a=!0,o.x=s.x,o.y=s.y,o.r=s.r,o.uniqueId=s.uniqueId,null===r&&h?(J(l,{uniqueId:r=++F.uniqueId,connectionId:[s.uniqueId]}),s.secondPointId=r,s.connectionId.push(r)):h&&s.firstPointId!==d?(l.connectionId.push(s.uniqueId),s.secondPointId=d,s.connectionId.push(d),F.mouseDown.lastShapeCompleted=!0):a=F.mouseDown.lastShapeCompleted=!1;else if("scale"===i)a=!0,o.x=z.x,o.y=z.y,o.xTo=z.xTo,o.yTo=z.yTo,ve();else if("brush1"!==i&&"brush2"!==i&&"brush3"!==i||!s)"select"===i||"move"===i&&F.mouseDown.objectDown?(a=!1,he(e)):"move"!==i&&"moveGraph"!==i||(a=!1);else{if("point"===s.type||"angle"===s.type)switch(i){case"brush1":s.fillColor=_.shapes.brush1.color.stroke,s.strokeColor=_.shapes.brush1.color.stroke;break;case"brush2":s.fillColor=_.shapes.brush2.color.stroke,s.strokeColor=_.shapes.brush2.color.stroke;break;case"brush3":s.fillColor=_.shapes.brush3.color.stroke,s.strokeColor=_.shapes.brush3.color.stroke}else switch(i){case"brush1":s.strokeColor=_.shapes.brush1.color.stroke;break;case"brush2":s.strokeColor=_.shapes.brush2.color.stroke;break;case"brush3":s.strokeColor=_.shapes.brush3.color.stroke}F.mouseDown.lastShapeCompleted=!0,F.mouseDown.isMouseDown=!1,s.isSelected=!1,s.isMouseDown=!1,o.type="colour",o.shapeLabel=s.label,o.color=s.strokeColor,o.shapeId=s.uniqueId,o.shapeType=s.type,a=!0}H(e),H(e),ie(o,a)}function oe(e,n,t,o,i){t=-2*(e*o+n*i+t)/(e*e+n*n);return{x:t*e+o,y:t*n+i}}function ie(n,e){var t,o=_.interactionType;void 0===n.uniqueId||(t=te(n.uniqueId)).shape&&Object.keys(t.shape).forEach(function(e){void 0!==t.shape[e]&&(n[e]=t.shape[e])}),a(),"select"===o||"move"===o&&F.mouseDown.objectDown?void 0!==j[o]&&j[o]({id:_.id,type:"select"},!0):e&&(F.mouseDown.lastShapeCompleted=!0,F.newShapeStarted=!1,F.currentUniqueId=null,n.newPlottedShapes=F.newPlottedShapes,n.step=_.currentStep,o=n,(e={}).id=_.id,e.type="geoInteraction",(o=JSON.parse(JSON.stringify(o))).type=_.interactionType,e.data=o,void 0!==j[e.type]&&j[e.type](e,!0)),F.isLableSelected=!1}function ae(e,n,t,o){var i={},a=_.LabComClass.Maths.getAngle(n.x,n.y,t.x,t.y);e.x=o.x,e.y=o.y,e.angle=a+Math.PI/2,e.point=_.LabComClass.Maths.getPoint(o,e.angle,V(10)),i.x=o.x,i.y=o.y,i.xTo=e.point.x,i.yTo=e.point.y,i.uniqueId=e.uniqueId,i.slope=isFinite(Pe(e.point.x,e.point.y,e.x,e.y))?Pe(e.point.x,e.point.y,e.x,e.y):null,i.firstPoint=n,i.secondPoint=t;e=W({type:"line",uniqueId:++F.uniqueId,x:e.point.x,y:e.point.y,xTo:e.x,yTo:e.y,slope:Pe(e.point.x,e.point.y,e.x,e.y)});return F.newPlottedShapes.push(e.uniqueId),i}function le(e,n){var t,o,i=1<arguments.length&&void 0!==n?n:"point",n={};return"point"===i?(t=b(e.firstPoint,e.secondPoint),o=b(e.secondPoint,e.thirdPoint)):"segment"===i&&(t=e.firstSegment,o=e.secondSegment),n.eqn=function(e,n,t,o){e.c<0&&0<=n.c&&(e.a=-e.a,e.b=-e.b,e.c=-e.c);0<=e.c&&n.c<0&&(n.a=-n.a,n.b=-n.b,n.c=-n.c);e.c<0&&n.c<0&&(e.a=-e.a,e.b=-e.b,e.c=-e.c,n.a=-n.a,n.b=-n.b,n.c=-n.c);var i={},a={};"(".concat(e.a,"x+").concat(e.b,"y+").concat(e.c,")/").concat(Math.sqrt(e.a*e.a+e.b*e.b));i.a=e.a/Math.sqrt(e.a*e.a+e.b*e.b),i.b=e.b/Math.sqrt(e.a*e.a+e.b*e.b),i.c=e.c/Math.sqrt(e.a*e.a+e.b*e.b),i.form="".concat(i.a,"x+").concat(i.b,"y+").concat(i.c);"(".concat(n.a,"x+").concat(n.b,"y+").concat(n.c,")/").concat(Math.sqrt(n.a*n.a+n.b*n.b));a.a=n.a/Math.sqrt(n.a*n.a+n.b*n.b),a.b=n.b/Math.sqrt(n.a*n.a+n.b*n.b),a.c=n.c/Math.sqrt(n.a*n.a+n.b*n.b),a.form="".concat(a.a,"x+").concat(a.b,"y+").concat(a.c);var l={firstCase:{},secondCase:{}};l.firstCase.b=i.b-a.b,l.firstCase.a=i.a-a.a,l.firstCase.c=i.c-a.c,l.secondCase.a=i.a+a.a,l.secondCase.b=i.b+a.b,l.secondCase.c=i.c+a.c,l.required={};o=function(e,n,t,o,i,a){var l=function(e,n,t,o){var i={},a={};i.m1=-(e.a/e.b),i.m2=-(n.a/n.b),i.ratio=Math.abs((i.m1-i.m2)/(1+i.m1*i.m2)),i.angle=Math.atan(i.ratio),i.degree=i.angle*(180/Math.PI),i.obtuseAngle=Math.atan(-(i.m1-i.m2)/(1+i.m1*i.m2))*(180/Math.PI),i.tanTheta=(n.a*e.b-e.a*n.b)/(n.a*e.a+n.b*e.b),i.degSlope=Math.atan(i.tanTheta)*(180/Math.PI),a.startAngle=_.LabComClass.Maths.getAngle(t.xTo,t.yTo,t.x,t.y),a.endAngle=_.LabComClass.Maths.getAngle(o.x,o.y,o.xTo,o.yTo),a.angleRad=a.startAngle-a.endAngle,a.angleS=180*a.angleRad/Math.PI,a.angleRad<0?(a.scene=1,a.degree=-1*a.angleRad*180/Math.PI):0<a.angleRad&&(a.scene=2,a.degree=360-180*a.angleRad/Math.PI);return a}(e,n,i,a),i={},a=l.degree;270<=l.degree&&(a=l.degree-270);return i.main=e.a*n.a+e.b*n.b,0<a&&a<90&&i.main<0?t:90<a&&i.main<0?o:90<a&&0<i.main?t:0<a&&a<90&&0<i.main||0===i.main?o:void 0}(e,n,l.firstCase,l.secondCase,t,o);return l.required=o,l.required}(se(t),se(o),t,o),n.formEqn=function(e,n){var t={};n.x!==F.arbitaryX&&n.xTo!==F.arbitaryX||(F.arbitaryX=F.arbitaryX+1);t.eqn="".concat(e.eqn.a,"x +").concat(e.eqn.b,"y +").concat(e.eqn.c),t.calcY="y=(".concat(-e.eqn.a,"x + ").concat(-e.eqn.c,")/").concat(e.eqn.b),t.computeY=(-e.eqn.a*F.arbitaryX-e.eqn.c)/e.eqn.b,t.computeX=F.arbitaryX,isFinite(t.computeY)||(t.computeX=n.x,t.computeY=0);0==Math.trunc(100*e.eqn.b)&&(t.computeX=n.x,t.computeY=0);return t}(n,o),n.x=n.formEqn.computeX,n.y=n.formEqn.computeY,"point"===i?n.bisectorLine={type:"line",x:e.secondPoint.x,y:e.secondPoint.y,xTo:n.x,yTo:n.y}:"segment"===i&&(n.bisectorLine={type:"line",x:e.x,y:e.y,xTo:n.x,yTo:n.y}),n}function se(e){var n={};return n.segment=e.label,n.slope=isFinite(Pe(e.x,e.y,e.xTo,e.yTo))?Pe(e.x,e.y,e.xTo,e.yTo):void 0,void 0!==n.slope?(n.eqn="y-".concat(e.y,"=").concat(n.slope,"*(x-").concat(e.x,")"),n.b=1,n.a=-n.slope,n.c=n.slope*e.x-e.y,n.cMod=Math.abs(n.slope*e.x-e.y),n.form="y+".concat(n.a,"x+").concat(n.c)):(n.eqn="x=".concat(e.x),n.form="x-".concat(e.x),n.a=1,n.b=0,n.c=-e.x,n.cMod=Math.abs(-e.x)),n}function b(e,n){var t={};return t.x=e.x,t.y=e.y,t.xTo=n.x,t.yTo=n.y,e.label&&n.label&&(t.label=e.label+n.label),t}function re(e,n){var t,o=1<arguments.length&&void 0!==n?n:"angle",i=e.firstPoint,a=e.secondPoint,l=e.thirdPoint,s=_.LabComClass.Maths.getAngle(a.x,a.y,i.x,i.y),n=_.LabComClass.Maths.getAngle(a.x,a.y,l.x,l.y),e=s-n;return e<0?e=-1*e*180/Math.PI:0<e&&(e=360-180*e/Math.PI),null!=i&&i.label&&null!=a&&a.label&&null!=l&&l.label&&"angle"===o?t="§a  ".concat(i.label).concat(a.label).concat(l.label,"=").concat(Math.round(e),"°"):null!=i&&i.label&&null!=a&&a.label&&null!=l&&l.label&&"angleRay"===o?t="§a  ".concat(i.label).concat(a.label).concat(l.label):"angle"===o?t="".concat(Math.round(e),"°"):"angleRay"===o&&(t=""),{angleText:t,angle:e,angleValue:Math.round(e),startAngle:s,endAngle:n}}function de(e,n){for(var t=0;t<n.length;t++)if(null===e[n[t]]||isNaN(e[n[t]]))return!1;return!0}function ue(e){for(var n=null,t=null,o=null,i=0;i<_.interactionElements.length;i++){var a=_.interactionElements[i];"point"===a.type&&(t=_.LabComClass.Maths.getDistance(e,a)),(null===n&&null!==t||null!==n&&t<n)&&(n=t,o=i)}return null!==o&&n<V(_.snappingDiff)?(F.mouseDown.objectDown=!0,o):null}function k(e,n){for(var t=null,o=null,i=null,a=_.interactionElements.length-1;0<=a;a--){var l=_.interactionElements[a];(!n||l.uniqueId!==F.currentUniqueId||"move"===_.interactionType&&l.uniqueId!==F.currentUniqueId)&&null!==(o="point"===l.type&&l.visible?_.LabComClass.Maths.getDistance(e,l):null)&&(null===t||o<t)&&(t=o,i=a)}return null!==o&&null!==i&&t<V(_.snappingDiff)?{dist:t,index:i,plotedPoint:_.interactionElements[i]}:null}function ce(e,n){return n.includes(e.type)}function ye(i,a,l,s){var e=_.LabComClass.Maths.getIntersectOfTwoCircles(i.x,i.y,i.r,a.x,a.y,a.r);if(1<e.length){var n=function(e){var n=_.LabComClass.Maths.getDistance(e,l);if(!1===s)return e.angle1=_.LabComClass.Maths.getAngle(i.x,i.y,e.x,e.y),e.dist=n;if(n<=V(s)){e.dist=n;var t=new _.LabComClass.Vector(a.x-i.x,a.y-i.y),o=new _.LabComClass.Vector(e.x-i.x,e.y-i.y);return e.angle=t.crossProduct(o).z,n}return null},t=[],o=n(e[0],e[1]);if(null!==o&&t.push(e[0]),null!==n(e[1],e[0])&&t.push(e[1]),t.length){for(var r=0,d=t[0].dist,u=0;u<t.length;u++)t[u].dist<d&&(d=t[u].dist,r=u);return t[r]}return null}return null}function pe(e,t,o,i){var n={x:t.x,y:t.y,xTo:t.xTo,yTo:t.yTo};"ray"===t.type&&(n.xTo=t.xOr,n.yTo=t.yOr);a=e,l=n,e=_.LabComClass.Maths.findCircleLineIntersect({x:a.x,y:a.y,r:a.r},{x:l.x,y:l.y},{x:l.xTo,y:l.yTo});if(e.p1||e.p2){var n=function(e){if((t.type.includes("segment")||"ray"===t.type)&&!e.isInSegment)return null;var n=_.LabComClass.Maths.getDistance(e,o);return void 0===i||n<V(i)?e.dist=n:null},a=null,l=null,a=n(e.p1),l=n(e.p2);return null!==a&&null!==l?a<l?e.p1:e.p2:null!==a?e.p1:null!==l?e.p2:null}return null}function he(e){var n=_.interactionElements,t=null,o=null,i=null,a=G(e.pageX,e.pageY),l=e.pageX,s=e.pageY,r=k(a,!1);if(r&&(t=r.dist,i=r.index),null===i){i=o=t=null;for(var d=0;d<n.length;d++){var u,c,y,p=n[d];"circle"===p.type||"compass"===p.type?o=_.LabComClass.Maths.getDistance(a,p)-p.r:"line"===p.type||"perpendicularLine"===p.type||"parallelLine"===p.type?o=_.LabComClass.Maths.getPointLineDistance(a,p,{x:p.xTo,y:p.yTo}):!p.type.includes("segment")&&"ray"!==p.type||(o=_.LabComClass.Maths.getPointLineDistance(a,p,{x:p.xTo,y:p.yTo}),Math.abs(o)<V(10)&&(y={x:p.xTo,y:p.yTo},"ray"===p.type&&(y={x:p.xOr,y:p.yOr}),u=_.LabComClass.Maths.getDistance(a,p),c=_.LabComClass.Maths.getDistance(a,y),u<=(y=_.LabComClass.Maths.getDistance(p,y))&&c<=y||(o=null))),(null===t&&null!==o||null!==t&&null!==o&&Math.abs(o)<Math.abs(t))&&(t=Math.abs(o),i=d)}}o=null;var h=_.context;h.save(),h.beginPath(),h.font=_.fontSize+"px "+_.LabComClass.polo22KlettRegular,h.textBaseline="bottom";for(var x=null,g=0;g<n.length;g++){var b,f,I=n[g],m=!1;void 0!==I.label&&((b=Y(I.labelX,I.labelY)).x+=Number(I.labelDiffX),b.y+=Number(I.labelDiffY),f=h.measureText(I.label).width,I.labelAlign&&"center"===I.labelAlign?l>b.x-f/2-5&&l<b.x+f/2+5&&s>b.y-1.5*_.fontSize&&s<b.y+5&&(m=!(o=0)):(l>b.x-5&&l<b.x+f+5&&s>b.y-1.5*_.fontSize&&s<b.y+5&&"angle"!==I.type||l>b.x-10&&l<b.x+f+10&&s>b.y-+_.fontSize&&s<b.y+10&&"angle"===I.type&&I.visible)&&(m=!(o=0))),(null===t&&null!==o||null!==t&&null!==o&&Math.abs(o)<=Math.abs(t)&&m)&&(t=Math.abs(o),x=i=g)}if(h.closePath(),h.restore(),null!==i&&Math.abs(t)<V(10)){if("mousedown"===e.type){if(F.mouseDown.objectDown=!0,n[i].isSelected)n[i].isMouseDown=!1;else{if("move"===_.interactionType)for(var P=0;P<n.length;P++)n[P].isSelected=!1;n[i].isSelected=!0,n[i].isMouseDown=!0}return x===i&&(F.isLableSelected=!0),n[i].uniqueId}n[i].isSelected&&!n[i].isMouseDown&&e.pageX===F.mouseDown.orignalX&&e.pageY===F.mouseDown.orignalY&&(n[i].isSelected=!1)}return null}function xe(e){var a,l=null,s=null,r=null,n=_.LabComClass.Maths,d=n.getDistance,u=n.getPointLineDistance,n=k(G(e.pageX,e.pageY),!1);return n&&(l=n.dist,r=n.index),null===r&&(r=s=l=null,a=G(e.pageX,e.pageY),_.interactionElements.forEach(function(e,n){var t,o,i;"circle"!==e.type&&"compass"!==e.type||(s=d(a,e)-e.r),"line"!==e.type&&"perpendicularLine"!==e.type&&"parallelLine"!==e.type||(s=u(a,e,{x:e.xTo,y:e.yTo})),!e.type.includes("segment")&&"ray"!==e.type||(s=u(a,e,{x:e.xTo,y:e.yTo}),Math.abs(s)<V(10)&&(i={x:e.xTo,y:e.yTo},"ray"===e.type&&(i={x:e.xOr,y:e.yOr}),t=d(a,e),o=d(a,i),t<=(i=d(e,i))&&o<=i||(s=null))),(null===l&&null!==s||null!==l&&null!==s&&Math.abs(s)<Math.abs(l))&&(l=s,r=n)})),null!==r&&Math.abs(l)<V(10)?_.interactionElements[r].uniqueId:null}function ge(e,n){for(var t=G(e.pageX,e.pageY),o={visible:!0,x:t.x,y:t.y,xOr:t.x,yOr:t.y,xTo:t.x,yTo:t.y,xOrTo:t.x,yOrTo:t.y,slope:0,distance:null},i=0;i<_.interactionElements.length;i++){var a=_.interactionElements[i];if(ce(a,F.lineTypes)&&a.uniqueId!==F.currentUniqueId){var l=function(e,n,t){var o=_.LabComClass.Maths.getDistance(n,t),i=0;0<o&&(e=(t.x-n.x)*(n.y-e.y)-(t.y-n.y)*(n.x-e.x),i=e/o);return i}({x:o.x,y:o.y},{x:a.x,y:a.y},{x:a.xTo,y:a.yTo}),l=Math.abs(l);if(a.type.includes("segment")||"ray"===a.type){if(!(l<V(10)))continue;var s={x:a.xTo,y:a.yTo};if("ray"===a.type&&(s={x:a.xOr,y:a.yOr}),!_.LabComClass.Maths.pointInSegment(t,a,s))continue}(null===o.distance||o.distance>l)&&(o.distance=l,o.line=a.uniqueId,o.slope=_.LabComClass.Maths.getAngle(a.x,a.y,a.xTo,a.yTo),n&&(o.slope+=Math.PI/2),a=_.LabComClass.Maths.getPoint({x:o.x,y:o.y},o.slope,10),o.xTo=a.x,o.yTo=a.y)}}return null!==o.distance&&o.distance<V(10)&&o}function be(e,n,t,o){o=!(3<arguments.length&&void 0!==o)||o,n=(e.x*(n.y-t.y)+n.x*(t.y-e.y)+t.x*(e.y-n.y))/2;return 0==Math.round(Math.abs(n))&&o?{collinear:!0,value:Math.round(Math.abs(n))}:0!=Math.abs(n)||o?{collinear:!1,value:n}:{collinear:!0,value:Math.abs(n)}}function w(r){if(r.label){r.labelX=r.x,r.labelY=r.y;var e,n,t,o,i,a,l,s,d,u,c,y,p,h,x,g,b,f,I=G(_.x,_.y+_.height),m=G(_.x+_.width,_.y),P=I.x,C=I.y,v=m.x,T=m.y;if(r.shapeType)switch(r.shapeType){case"rhombus":var D,q,S,M,w,L,O,E,X,A,Y,k,B,U=_.interactionElements.filter(function(e){return"point"===e.type});_.interactionElements.filter(function(e){return"segment"===e.type});"A"===r.label&&"rhombus"===r.shapeType&&r.connectedPoints&&4<_.interactionElements.length&&!F.onBoundary?(D=te(r.pointFix).shape,r.connectedPoints.forEach(function(e){var n,t,o,i,a,l,s=te(e).shape;2===e&&3!==F.cOnBound?(o=_.LabComClass.Maths.getAngle(D.x,D.y,r.x,r.y)-_.LabComClass.Maths.getAngle(D.x,D.y,U[2].x,U[2].y),n=Math.cos(o/2)*_.LabComClass.Maths.getDistance(D,r),i=_.LabComClass.Maths.getPoint(D,o/2+_.LabComClass.Maths.getAngle(D.x,D.y,U[2].x,U[2].y),2*n),F.cOnBound=!fe(i)&&e,t=Ie(i),F.cOnBound?("right"===t.out||"left"===t.out?s.x="right"===t.out?v:P:"up"!==t.out&&"down"!==t.out||(s.y="up"===t.out?T:C),F.cOnBound=e,n=te((o=U[2]).aId).shape,t=Math.PI-n.angleValue*Math.PI/180,n=_.LabComClass.Maths.getAngle(D.x,D.y,s.x,s.y)-t/2,t=(_.LabComClass.Maths.getDistance(o,s)+_.LabComClass.Maths.getDistance(o,D))/2,t=_.LabComClass.Maths.getPoint(D,n,t),r.x=t.x,r.y=t.y,o=_.LabComClass.Maths.getPoint(U[4],_.LabComClass.Maths.getAngle(U[4].x,U[4].y,o.x,o.y)+Math.PI,_.LabComClass.Maths.getDistance(U[4],o)),r.x=o.x,r.y=o.y,r.labelX=r.x,r.labelY=r.y):(s.x=i.x,s.y=i.y,F.cOnBound=!1,r.isDraggable=!0,s.labelX=s.x,s.labelY=s.y)):3===e&&2!==F.cOnBound&&(i=_.LabComClass.Maths.getAngle(D.x,D.y,U[2].x,U[2].y),l=_.LabComClass.Maths.getPoint(D,i,_.LabComClass.Maths.getDistance(D,r)),F.cOnBound=!fe(l)&&e,i=Ie(l),F.cOnBound?("right"===i.out||"left"===i.out?s.x="right"===i.out?+v:P+0:"up"!==i.out&&"down"!==i.out||(s.y="up"===i.out?+T:C+0),F.cOnBound=e,_.LabComClass.Maths.getDistance(D,s),e=te(s.aId).shape,a=te(U[3].aId).shape,Math.PI,e.angleValue,Math.PI,_.LabComClass.Maths.getAngle(D.x,D.y,s.x,s.y),a.angleValue,Math.PI,a=U[2],a=_.LabComClass.Maths.getPoint(U[4],_.LabComClass.Maths.getAngle(U[4].x,U[4].y,a.x,a.y)+Math.PI,_.LabComClass.Maths.getDistance(U[4],a)),r.x=a.x,r.y=a.y,r.labelX=r.x,r.labelY=r.y):(s.x=l.x,s.y=l.y,F.cOnBound=!1,r.isDraggable=!0),s.labelX=s.x,s.labelY=s.y),"B"===s.label?(a=te(11).shape,l=_.LabComClass.Maths.getPoint(D,_.LabComClass.Maths.getAngle(D.x,D.y,s.x,s.y),_.LabComClass.Maths.getDistance(D,s)/2),a.x=l.x,a.y=l.y):s.label})):"B"===r.label&&"rhombus"===r.shapeType&&r.connectedPoints&&4<_.interactionElements.length&&!F.onBoundary?(E=te(r.pointFix[0]).shape,A=te(r.pointFix[1]).shape,M=(Y=te(r.connectedPoints).shape).uniqueId,Y&&(S=_.LabComClass.Maths.getAngle(E.x,E.y,r.x,r.y),O=_.LabComClass.Maths.getDistance(E,A),q=_.LabComClass.Maths.getPoint(A,S,O),F.cOnBound=!fe(q)&&M,S=Ie(q),F.cOnBound?("right"===S.out||"left"===S.out?Y.x="right"===S.out?v:P:"up"!==S.out&&"down"!==S.out||(Y.y="up"===S.out?T:C),F.cOnBound=M,M=_.LabComClass.Maths.getAngle(A.x,A.y,Y.x,Y.y),M=_.LabComClass.Maths.getPoint(E,M,O),r.x=M.x,r.y=M.y):(Y.x=q.x,Y.y=q.y,Y.labelX=Y.x,Y.labelY=Y.y,L=_.LabComClass.Maths.getAngle(A.x,A.y,Y.x,Y.y),X=_.LabComClass.Maths.getPoint(E,L,O),r.x=X.x,r.y=X.y),r.labelX=r.x,r.labelY=r.y),"C"===Y.label&&(k=te(11).shape,B=_.LabComClass.Maths.getPoint(E,_.LabComClass.Maths.getAngle(E.x,E.y,Y.x,Y.y),_.LabComClass.Maths.getDistance(E,Y)/2),k.x=B.x,k.y=B.y)):"D"===r.label&&"rhombus"===r.shapeType&&r.connectedPoints&&4<_.interactionElements.length&&!F.onBoundary?(w=te(r.pointFix).shape,r.connectedPoints.forEach(function(e){var n,t,o,i,a=te(e).shape;2===e&&3!==F.cOnBound?(t=_.LabComClass.Maths.getAngle(w.x,w.y,U[1].x,U[1].y),o=_.LabComClass.Maths.getPoint(w,t,_.LabComClass.Maths.getDistance(w,r)),F.cOnBound=!fe(o)&&e,n=Ie(o),F.cOnBound?("right"===n.out||"left"===n.out?a.x="right"===n.out?v:P:"up"!==n.out&&"down"!==n.out||(a.y="up"===n.out?T:C),F.cOnBound=e,t=_.LabComClass.Maths.getDistance(a,w),n=te(a.aId).shape,n=_.LabComClass.Maths.getAngle(w.x,w.y,a.x,a.y)+(Math.PI-n.angleValue*Math.PI/180),t=_.LabComClass.Maths.getPoint(w,n,t),r.x=t.x,r.y=t.y,r.labelX=r.x,r.labelY=r.y):(a.x=o.x,a.y=o.y,F.cOnBound=!1,r.isDraggable=!0),a.labelX=a.x,a.labelY=a.y):3===e&&2!==F.cOnBound&&(i=_.LabComClass.Maths.getAngle(w.x,w.y,r.x,r.y)-_.LabComClass.Maths.getAngle(w.x,w.y,U[1].x,U[1].y),o=Math.cos(i/2)*_.LabComClass.Maths.getDistance(w,r),i=_.LabComClass.Maths.getPoint(w,i/2+_.LabComClass.Maths.getAngle(w.x,w.y,U[1].x,U[1].y),2*o),F.cOnBound=!fe(i)&&e,o=Ie(i),F.cOnBound?("right"===o.out||"left"===o.out?a.x="right"===o.out?v:P:"up"!==o.out&&"down"!==o.out||(a.y="up"===o.out?T:C),F.cOnBound=e,o=_.LabComClass.Maths.getDistance(w,U[1]),e=2*_.LabComClass.Maths.getAngle(w.x,w.y,a.x,a.y)-_.LabComClass.Maths.getAngle(w.x,w.y,U[1].x,U[1].y),o=_.LabComClass.Maths.getPoint(w,e,o),r.x=o.x,r.y=o.y,r.labelX=r.x,r.labelY=r.y,o=U[1],o=_.LabComClass.Maths.getPoint(U[4],_.LabComClass.Maths.getAngle(o.x,o.y,U[4].x,U[4].y),_.LabComClass.Maths.getDistance(U[4],o)),r.x=o.x,r.y=o.y,r.labelX=r.x,r.labelY=r.y):(a.x=i.x,a.y=i.y,F.cOnBound=!1,r.isDraggable=!0,a.labelX=a.x,a.labelY=a.y)),"C"===a.label&&(i=te(11).shape,a=_.LabComClass.Maths.getPoint(w,_.LabComClass.Maths.getAngle(w.x,w.y,a.x,a.y),_.LabComClass.Maths.getDistance(w,a)/2),i.x=a.x,i.y=a.y)})):"C"===r.label&&"rhombus"===r.shapeType&&r.connectedPoints&&4<_.interactionElements.length&&!F.onBoundary&&(A=te(r.pointFix[0]).shape,L=te(r.pointFix[1]).shape,X=(O=te(r.connectedPoints).shape).uniqueId,O&&(E=_.LabComClass.Maths.getAngle(L.x,L.y,r.x,r.y),Y=_.LabComClass.Maths.getDistance(A,L),E=_.LabComClass.Maths.getPoint(A,E,Y),F.cOnBound&&3!==F.cOnBound||(O.x=E.x,O.y=E.y,O.labelX=O.x,O.labelY=O.y),F.cOnBound=!fe(E)&&X,E=Ie(E),F.cOnBound?("right"===E.out||"left"===E.out?O.x="right"===E.out?v:P:"up"!==E.out&&"down"!==E.out||(O.y="up"===E.out?T:C),F.cOnBound=X,X=_.LabComClass.Maths.getAngle(A.x,A.y,O.x,O.y),X=_.LabComClass.Maths.getPoint(L,X,Y),r.x=X.x,r.y=X.y):(A=_.LabComClass.Maths.getAngle(A.x,A.y,O.x,O.y),Y=_.LabComClass.Maths.getPoint(L,A,Y),r.x=Y.x,r.y=Y.y),r.labelX=r.x,r.labelY=r.y),"B"===O.label&&(k=te(11).shape,B=_.LabComClass.Maths.getPoint(L,_.LabComClass.Maths.getAngle(L.x,L.y,O.x,O.y),_.LabComClass.Maths.getDistance(L,O)/2),k.x=B.x,k.y=B.y));break;case"kite":te(r.aId).shape;var R,j,z=_.interactionElements.filter(function(e){return"point"===e.type});"A"===r.label&&"kite"===r.shapeType&&4<_.interactionElements.length&&!F.onBoundary?(be(r,z[1],z[3]).collinear&&0<=be(r,z[1],z[3]).value||be(r,z[1],z[3]).value<0?(r.x=r.fixX,r.y=z[1].y):(r.x=r.fixX,r.y=r.y),r.labelX=r.x,r.labelY=r.y):"B"===r.label&&"kite"===r.shapeType&&4<_.interactionElements.length?(R=te(r.connectedPoints).shape,be(r,z[0],z[2]).collinear&&be(r,z[0],z[2]).value<=0||0<be(r,z[0],z[2]).value?(R.x=z[2].x,R.y=r.y,r.x=R.x,r.y=r.y,r.labelX=r.x,r.labelY=r.y):(R.x=-r.x,R.y=r.y),R.labelX=R.x,R.labelY=R.y):"C"===r.label&&"kite"===r.shapeType&&4<_.interactionElements.length&&!F.onBoundary?(be(r,z[1],z[3]).collinear&&be(r,z[1],z[3]).value<=0||0<be(r,z[1],z[3]).value?(r.x=r.fixX,r.y=z[1].y):(r.x=r.fixX,r.y=r.y),r.labelX=r.x,r.labelY=r.y):"D"===r.label&&"kite"===r.shapeType&&4<_.interactionElements.length&&(j=te(r.connectedPoints).shape,be(r,z[0],z[2]).collinear&&0<=be(r,z[0],z[2]).value||be(r,z[0],z[2]).value<0?(j.x=z[2].x,j.y=r.y,r.x=j.x,r.y=r.y,r.labelX=r.x,r.labelY=r.y):(j.x=-r.x,j.y=r.y),j.labelX=j.x,j.labelY=j.y);break;case"triangle":4<_.interactionElements.length&&(B=te(r.aId).shape,0<be((R=_.interactionElements.filter(function(e){return"point"===e.type}))[0],R[1],R[2]).value&&B.angleValue<180?(z=_.interactionElements.filter(function(e){return"angle"===e.type&&void 0===e.reflexProp}),j=_.interactionElements.filter(function(e){return"angle"===e.type&&void 0!==e.reflexProp}),z.forEach(function(e){e.visible=!0}),j.forEach(function(e){e.visible=!1})):be(R[0],R[1],R[2]).value<0&&180<B.angleValue?(B=_.interactionElements.filter(function(e){return"angle"===e.type&&void 0===e.reflexProp}),e=_.interactionElements.filter(function(e){return"angle"===e.type&&void 0!==e.reflexProp}),B.forEach(function(e){e.visible=!1}),e.forEach(function(e){e.visible=!0})):(e=_.interactionElements.filter(function(e){return"angle"===e.type&&void 0===e.reflexProp}),n=_.interactionElements.filter(function(e){return"angle"===e.type&&void 0!==e.reflexProp}),e.forEach(function(e){e.visible=!1}),n.forEach(function(e){e.visible=!1})));break;case"trapezoid":"A"===r.label&&"trapezoid"===r.shapeType&&4<_.interactionElements.length&&!F.onBoundary?((n=te(r.second).shape).y=r.y,n.labelY=n.y,r.x>n.x-1&&(r.x=n.x-1,r.y=n.y,r.labelX=n.x,r.labelY=n.y)):"B"===r.label&&"trapezoid"===r.shapeType&&4<_.interactionElements.length&&!F.onBoundary?((t=te(r.second).shape).y=r.y,t.labelY=t.y,r.x<t.x+1&&(r.x=t.x+1,r.y=t.y,r.labelX=t.x,r.labelY=t.y)):"C"===r.label&&"trapezoid"===r.shapeType&&4<_.interactionElements.length&&!F.onBoundary?((t=te(r.second).shape).y=r.y,t.labelY=t.y,r.x<t.x+1&&(r.x=t.x+1,r.y=t.y,r.labelX=t.x,r.labelY=t.y)):"D"===r.label&&"trapezoid"===r.shapeType&&4<_.interactionElements.length&&!F.onBoundary&&((o=te(r.second).shape).y=r.y,o.labelY=o.y,r.x>o.x-1&&(r.x=o.x-1,r.y=o.y,r.labelX=o.x,r.labelY=o.y)),4<_.interactionElements.length&&(te(r.aId).shape,!function(e,n,t,o){if(e.y<o.y&&e.y<t.y&&n.y<o.y&&n.y<t.y)return 1;e.y>o.y&&e.y>t.y&&n.y>o.y&&(n.y,t.y)}((o=_.interactionElements.filter(function(e){return"point"===e.type}))[0],o[1],o[2],o[3])?(o=_.interactionElements.filter(function(e){return"angle"===e.type&&void 0===e.reflexProp}),i=_.interactionElements.filter(function(e){return"angle"===e.type&&void 0!==e.reflexProp}),o.forEach(function(e){e.visible=!1}),i.forEach(function(e){e.visible=!0})):(l=_.interactionElements.filter(function(e){return"angle"===e.type&&void 0===e.reflexProp}),a=_.interactionElements.filter(function(e){return"angle"===e.type&&void 0!==e.reflexProp}),l.forEach(function(e){e.visible=!0}),a.forEach(function(e){e.visible=!1})));break;case"parallelogram":"A"===r.label&&"parallelogram"===r.shapeType&&r.connectedPoints&&4<_.interactionElements.length&&!F.onBoundary?3===r.connectedPoints&&(d=te(r.connectedPoints).shape,i=te(r.pointFix[0]).shape,l=te(r.pointFix[1]).shape,u=Math.PI-_.LabComClass.Maths.getAngle(i.x,i.y,r.x,r.y),a=_.LabComClass.Maths.getDistance(r,i),u=_.LabComClass.Maths.getPoint(l,-u,a),F.cOnBound=!fe(u)&&d.uniqueId,a=Ie(u),F.cOnBound?("right"===a.out||"left"===a.out?d.x="right"===a.out?v:P:"up"!==a.out&&"down"!==a.out||(d.y="up"===a.out?T:C),s=_.LabComClass.Maths.getDistance(l,d),l=_.LabComClass.Maths.getAngle(l.x,l.y,d.x,d.y),s=_.LabComClass.Maths.getPoint(i,Math.PI+l,s),r.x=s.x,r.y=s.y,r.labelX=r.x,r.labelY=r.y):(d.x=u.x,d.y=u.y,F.cOnBound=!1,r.isDraggable=!0),d.labelX=d.x,d.labelY=d.y):"B"===r.label&&"parallelogram"===r.shapeType&&r.connectedPoints&&4<_.interactionElements.length&&!F.onBoundary?3===r.connectedPoints&&(p=te(r.connectedPoints).shape,s=te(r.pointFix[0]).shape,u=te(r.pointFix[1]).shape,y=_.LabComClass.Maths.getAngle(s.x,s.y,r.x,r.y),d=_.LabComClass.Maths.getDistance(r,s),y=_.LabComClass.Maths.getPoint(u,y,d),F.cOnBound=!fe(y)&&p.uniqueId,d=Ie(y),F.cOnBound?("right"===d.out||"left"===d.out?p.x="right"===d.out?v:P:"up"!==d.out&&"down"!==d.out||(p.y="up"===d.out?T:C),c=_.LabComClass.Maths.getDistance(u,p),u=_.LabComClass.Maths.getAngle(u.x,u.y,p.x,p.y),c=_.LabComClass.Maths.getPoint(s,u,c),r.x=c.x,r.y=c.y,r.labelX=r.x,r.labelY=r.y):(p.x=y.x,p.y=y.y,F.cOnBound=!1,r.isDraggable=!0),p.labelX=p.x,p.labelY=p.y):"C"===r.label&&"parallelogram"===r.shapeType&&r.connectedPoints&&4<_.interactionElements.length&&!F.onBoundary?1===r.connectedPoints&&(f=te(r.connectedPoints).shape,c=te(r.pointFix[0]).shape,y=te(r.pointFix[1]).shape,g=Math.PI+_.LabComClass.Maths.getAngle(c.x,c.y,r.x,r.y),p=_.LabComClass.Maths.getDistance(r,c),g=_.LabComClass.Maths.getPoint(y,g,p),F.cOnBound=!fe(g)&&f.uniqueId,p=Ie(g),F.cOnBound?("right"===p.out||"left"===p.out?f.x="right"===p.out?v:P:"up"!==p.out&&"down"!==p.out||(f.y="up"===p.out?T:C),x=_.LabComClass.Maths.getDistance(y,f),h=_.LabComClass.Maths.getAngle(y.x,y.y,f.x,f.y),b=_.LabComClass.Maths.getPoint(c,Math.PI+h,x),r.x=b.x,r.y=b.y,r.labelX=r.x,r.labelY=r.y):(f.x=g.x,f.y=g.y,F.cOnBound=!1,r.isDraggable=!0),f.labelX=f.x,f.labelY=f.y):"D"===r.label&&"parallelogram"===r.shapeType&&r.connectedPoints&&4<_.interactionElements.length&&!F.onBoundary&&3===r.connectedPoints&&(h=te(r.connectedPoints).shape,x=te(r.pointFix[0]).shape,b=te(r.pointFix[1]).shape,g=_.LabComClass.Maths.getAngle(x.x,x.y,r.x,r.y),f=_.LabComClass.Maths.getDistance(r,x),g=_.LabComClass.Maths.getPoint(b,g,f),F.cOnBound=!fe(g)&&h.uniqueId,f=Ie(g),F.cOnBound?("right"===f.out||"left"===f.out?h.x="right"===f.out?v:P:"up"!==f.out&&"down"!==f.out||(h.y="up"===f.out?T:C),f=_.LabComClass.Maths.getDistance(b,h),b=_.LabComClass.Maths.getAngle(b.x,b.y,h.x,h.y),f=_.LabComClass.Maths.getPoint(x,b,f),r.x=f.x,r.y=f.y,r.labelX=r.x,r.labelY=r.y):(h.x=g.x,h.y=g.y,F.cOnBound=!1,r.isDraggable=!0),h.labelX=h.x,h.labelY=h.y)}if(r.shapeType&&4<_.interactionElements.length)switch(r.shapeType){case"rhombus":case"kite":case"triangle":case"trapezoid":case"parallelogram":for(var N="triangle"===r.shapeType?3:4,V=1;V<=N;V++){var J=V,K=te(J).shape;if(K.x>v){F.onBoundary=!0,F.cOnBound=J,K.isDraggable=!1,K.x=v;break}if(K.y>T){F.onBoundary=!0,K.y=T,F.cOnBound=J,K.isDraggable=!1;break}if(K.x<P){F.onBoundary=!0,K.x=P,F.cOnBound=J,K.isDraggable=!1;break}if(K.y<C){F.onBoundary=!0,K.y=C,F.cOnBound=J,K.isDraggable=!1;break}F.onBoundary=!1,K.isDraggable=!0}r.x>P&&r.y>C&&r.x<v&&r.y<T&&(r.isDraggable=!F.cOnBound,F.onBoundary=!1)}0===r.labelDiffX&&(r.labelDiffX=6,r.labelDiffY=-9)}}function fe(e){var n=!1,t=G(_.x,_.y+_.height),o=G(_.x+_.width,_.y),i=t.x,a=t.y,t=o.x,o=o.y;return e.x<t&&e.x>i&&e.y>a&&e.y<o&&(n=!0),n}function Ie(e){var n=!1,t=G(_.x,_.y+_.height),o=G(_.x+_.width,_.y),i=t.x,a=t.y,t=o.x,o=o.y;return e.x>t?n={out:"right"}:e.x<i?n={out:"left"}:e.y<a?n={out:"down"}:e.y>o&&(n={out:"up"}),n}function me(e){var n=G(_.x,_.y),t=G(_.x+_.width,_.y+_.height),n=Math.abs(n.x)>Math.abs(t.x)?Math.abs(n.x):Math.abs(t.x);n*=10;var o=_.LabComClass.Maths.getAngle(e.x,e.y,e.xTo,e.yTo),t=_.LabComClass.Maths.getPoint({x:e.x,y:e.y},o,n);e.xOr=t.x,e.yOr=t.y;t=_.LabComClass.Maths.getAngle(e.xTo,e.yTo,e.x,e.y),n=_.LabComClass.Maths.getPoint({x:e.xTo,y:e.yTo},t,n);if(e.xOrTo=n.x,e.yOrTo=n.y,e.label&&(n=f(e,{x:e.xTo,y:e.yTo}),e.labelX=n.x,e.labelY=n.y),e&&e.connectionId&&e.connectionId.length)for(var i=0;i<e.connectionId.length;i++){var a=te(e.connectionId[i]);!a||"perpendicularLine"!==a.shape.type&&"parallelLine"!==a.shape.type||(a.shape.slope=o,"perpendicularLine"===a.shape.type&&(a.shape.slope+=Math.PI/2),Ce(a.shape))}}function Pe(e,n,t,o){return(o-n)/(t-e)}function f(e,n){var t=_.LabComClass.Maths,o=t.getRandomNumber,i=t.getPoint,a=t.getAngle,l=t.getDistance,s=t.getPointLineDistance;if(void 0!==e.labelX){t=Y(e.labelX,e.labelY);if(t.x>_.x&&t.x<_.x+_.width&&t.y>_.y&&t.y<_.y+_.height){s=s({x:e.labelX,y:e.labelY},e,{x:e.xTo,y:e.yTo});if(Math.abs(s)<V(_.snappingDiff)){for(var r=!1,d=0;d<_.interactionElements.length;d++){var u=_.interactionElements[d];if("point"===u.type&&e.label)if(l({x:u.x+V(10),y:u.y-V(10)},{x:e.labelX,y:e.labelY})<V(1.2*_.snappingDiff)){r=!0;break}}if(!r)return{x:e.labelX,y:e.labelY}}}}for(var c=Y(e.x,e.y),y=Y(n.x,n.y),p=_.x+30,h=_.y+30,x=_.x+_.width-30,g=_.y+_.height-30,b={x:0,y:0},f=0;;){var I=a(c.x,c.y,y.x,y.y),m=o(-1*(x-p),x-p,1,1);if("ray"===e.type&&(m=Math.abs(m)),(b=i(c,I,m)).x>p&&b.x<x&&b.y>h&&b.y<g){var P=!0;b.x>_.centerX-20&&b.x<_.centerX+20&&(P=!1),b.y>_.centerY-20&&b.y<_.centerY+20&&(P=!1);for(var C=0;C<_.interactionElements.length;C++){var v=_.interactionElements[C];"point"===v.type&&v.label&&l({x:v.x+V(10),y:v.y-V(10)},b)<V(_.snappingDiff)&&(P=!1)}if(P)break}if(200<f){b.x=(c.x+y.x)/2,b.y=(c.y+y.y)/2;break}f++}return b=G(b.x,b.y)}function Ce(e){var n=_.LabComClass.Maths,t=n.getAngle,o=n.getPoint,i=G(_.x,_.y),n=G(_.x+_.width,_.y+_.height),i=Math.abs(i.x)>Math.abs(n.x)?Math.abs(i.x):Math.abs(n.x);i*=2,void 0===e.line||(n=te(e.line)).shape&&(l=t((a=n.shape).x,a.y,a.xTo,a.yTo),"perpendicularLine"===e.type&&(l+=Math.PI/2),e.slope=l);var a=e.slope,l=o({x:e.x,y:e.y},a,i);e.xOr=l.x,e.yOr=l.y,l=o({x:e.x,y:e.y},a,20),e.xTo=l.x,e.yTo=l.y;l=e.slope+Math.PI,i=o({x:e.x,y:e.y},l,i);e.xOrTo=i.x,e.yOrTo=i.y,e.label&&(i=f(e,{x:e.xTo,y:e.yTo}),e.labelX=i.x,e.labelY=i.y)}function ve(){var e={};e.id=_.id,e.type="geoScale",e.length=_.LabComClass.Maths.getDistance({x:z.x,y:z.y},{x:z.xTo,y:z.yTo}),void 0!==j[e.type]&&j[e.type](e,!0)}!function n(t,o){o&&"object"===_typeof(o)&&!Array.isArray(o)?Object.keys(o).forEach(function(e){t.hasOwnProperty(e)&&"object"===_typeof(o[e])&&!Array.isArray(o[e])?n(t[e],o[e]):t[e]=o[e]}):t=o}(_,e),_.centerX=_.x+_.width/2,_.centerY=_.y+_.height/2,p(),_.animClass=new _.LabComClass.GlobalAnimClass,F.isDevice=_.LabComClass.BrowserDetect.isDevice(),F.isDevice&&(_.snappingDiff=_.deviceSnappingDiff),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:_.id}}),this.addEventListener=function(e,n){j[e]=n},this.show=function(){_.visible=!0,s()},this.alpha=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];_.transperent=e},this.setTransperent=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];_.transperent=e},this.hide=function(){_.visible=!1,s()},this.setPos=function(e,n){_.x=e,_.y=n,s()},this.getPos=function(){return{x:_.x,y:_.y}},this.enable=function(){_.state=!0,s()},this.disable=function(){_.state=!1,s()},this.editable=function(e){return _.shapesEditable=e,_.shapesEditable},this.selectAll=function(n){_.interactionElements.forEach(function(e){e.isSelected=n})},this.snapToGrid=function(e){_.snapToGrid=e},this.redoPossible=function(){return 0!==F.tempData.length},this.setFinalView=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];_.finalView=e},this.setPointSnapping=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];_.pointSnapping=e},this.setStyle=function(e,n){var t={strokeColor:!0,fillColor:!0},o=te(e);o&&Object.keys(n).forEach(function(e){t[e]&&(o.shape[e]=n[e])})},this.deleteSelected=function(){var n;_.shapesEditable&&(n=[],_.interactionElements.forEach(function(e){e.isSelected&&(void 0===e.isDeletable||e.isDeletable)&&n.push(e.uniqueId)}),i(n))},this.setScaleDefaultPos=function(e,n,t,o){var i=!(4<arguments.length&&void 0!==arguments[4])||arguments[4];z.originPos={x:e,y:n,xTo:t,yTo:o},i&&(z.x=z.originPos.x,z.y=z.originPos.y,z.xTo=z.originPos.xTo,z.yTo=z.originPos.yTo)},this.getState=function(){return _.state},this.getStep=function(){return _.currentStep},this.showDrawing=function(e,n){null!=e&&e.forEach(function(e){void 0!==e&&(e.visible=n)})},this.setInteractionType=function(e){void 0!==e&&_.interactionType!==e&&(_.interactionType=e,o(),s())},this.getInteractionType=function(){return _.interactionType},this.setStep=function(n){_.currentStep>n&&i(_.interactionElements.filter(function(e){return e.step>n}).map(function(e){return e.uniqueId})),_.currentStep=n},this.getCount=function(){return _.interactionElements.length},this.getData=function(){return{visible:JSON.parse(JSON.stringify(_.interactionElements)),nonVisible:_.tempElements}},this.setWaiting=function(e){_.waiting=e},this.getWaiting=function(){return _.waiting},this.setScreenData=function(e){_.graphValues=e,_.x=e.x,_.y=e.y,_.width=e.width,_.height=e.height,_.screen=e.screen,_.centerX=e.originX,_.centerY=e.originY,_.showQuadrants=e.showQuadrants;for(var n=0;n<_.interactionElements.length;n++){var t,o=_.interactionElements[n];"line"!==o.type&&"ray"!==o.type||!o.label||(t=f(o,{x:o.xTo,y:o.yTo}),o.labelX=t.x,o.labelY=t.y)}p(),H(),s()},this.plotAngleSize=function(n){if(!_.waiting){var t={type:"angleSize",uniqueId:++F.uniqueId,x:0,y:0,xTo:0,yTo:0,degree:0,clockwise:!0,connectionId:[]},e=++F.uniqueId;Object.keys(n).forEach(function(e){t[e]=n[e]});var o=_.LabComClass.Maths.getAngle(t.x,t.y,t.xTo,t.yTo);n.degree*=t.clockwise?-1:1;var i=_.LabComClass.Maths.getPoint(t,o+n.degree*Math.PI/180,V(10));t.clockwise?(t.startAngle=o,t.endAngle=o+n.degree*Math.PI/180):(t.startAngle=o+n.degree*Math.PI/180,t.endAngle=o),t.label||(t.label=t.degree+"°"),void 0===t.labelX&&(a=_.LabComClass.Maths.getPoint(t,o+t.degree/2*Math.PI/180,V(25)),t.labelX=a.x,t.labelY=a.y,t.labelDiffX=void 0!==t.labelDiffX?t.labelDiffX:0,t.labelDiffY=void 0!==t.labelDiffY?t.labelDiffY:0);var a=W(t),i=W({type:"ray",uniqueId:e,x:t.x,y:t.y,xTo:i.x,yTo:i.y,connectionId:[]});return me(i),t.connectionId.push(e),F.mouseDown.lastShapeCompleted=!0,{angleSize:a,ray:i}}},this.setAngleSize=function(n){var e,t,o,i;_.waiting&&(e=++F.uniqueId,t=te(n.uniqueId).shape,Object.keys(n).forEach(function(e){t[e]=n[e]}),o=te(n.firstPointId).shape,i=_.LabComClass.Maths.getAngle(n.x,n.y,o.x,o.y),n.degree*=t.clockwise?-1:1,o=_.LabComClass.Maths.getPoint(n,i+n.degree*Math.PI/180,V(10)),t.clockwise?(t.startAngle=i,t.endAngle=i+n.degree*Math.PI/180):(t.startAngle=i+n.degree*Math.PI/180,t.endAngle=i),t.label||(t.label=t.degree+"°"),void 0===t.labelX&&(i=_.LabComClass.Maths.getPoint(n,i+n.degree/2*Math.PI/180,V(25)),t.labelX=i.x,t.labelY=i.y,t.labelDiffX=0,t.labelDiffY=0),me(W({type:"ray",uniqueId:e,firstPointId:n.secondPointId,x:n.x,y:n.y,xTo:o.x,yTo:o.y,connectionId:[n.secondPointId]})),t.connectionId.push(e),F.newPlottedShapes.push(e),F.mouseDown.lastShapeCompleted=!0,ie({x:n.x,y:n.y,uniqueId:n.uniqueId},!0),_.waiting=!1)},this.setSegSize=function(e){var n,t,o;_.waiting&&(n=++F.uniqueId,t=++F.uniqueId,o=te(e.uniqueId).shape,te(o.firstPointId).shape,W({type:"segment",uniqueId:n,x:e.x,y:e.y,xTo:e.x+e.distance,yTo:e.y,connectionId:[e.firstPointId,t]}),W({type:"point",uniqueId:t,x:e.x+e.distance,y:e.y,connectionId:[n]}),o.connectionId.push(n),o.connectionId.push(t),o.secondPointId=t,F.newPlottedShapes.push(n),F.newPlottedShapes.push(t),o.segmentId=n,o.distance=e.distance,F.mouseDown.lastShapeCompleted=!0,ie({x:e.x,y:e.y,uniqueId:e.uniqueId},!0),_.waiting=!1)},this.getPointByPixel=function(e,n){var t=_.graphValues;return{x:(e-t.originX)/t.unitX,y:-1*(n-t.originY)/t.unitY}},this.setData=function(e){void 0!==e.visible&&(_.interactionElements=JSON.parse(JSON.stringify(e.visible))),void 0!==e.nonVisible&&(_.tempElements=JSON.parse(JSON.stringify(e.nonVisible))),o()},this.getCurrentStepIndex=function(e){var n=[],e=void 0===e?1:e;if("scale"!==_.interactionType)for(var t=e;0<t;t--)n.push(_.interactionElements.length-t);return n},this.removeRecentShapes=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];e.length?i(e):i(F.newPlottedShapes)},this.clearAll=function(){_.interactionElements=[],F.uniqueId=0,_.currentStep=0,_.finalView=!1,N.clearTemp()},this.clearTemp=function(){z.x=z.originPos.x,z.y=z.originPos.y,z.xTo=z.originPos.xTo,z.yTo=z.originPos.yTo,_.tempElements=[],F.allShapesData=[],F.tempData=[],o()},this.undo=function(){F.allShapesData.length&&(F.tempData.push(F.allShapesData.pop()),F.allShapesData.length?_.interactionElements=JSON.parse(JSON.stringify(F.allShapesData[F.allShapesData.length-1])):_.interactionElements=[])},this.redo=function(){F.tempData.length&&(F.allShapesData.push(F.tempData.pop()),F.allShapesData.length?_.interactionElements=JSON.parse(JSON.stringify(F.allShapesData[F.allShapesData.length-1])):_.interactionElements=[])},this.addShape=function(e){o();var n=JSON.parse(JSON.stringify(e));switch(n.uniqueId=++F.uniqueId,_.shapesEditable||(n.isDraggable=!1,n.isDeletable=!1),n.label&&(void 0===n.labelX&&(n.labelX=n.x,n.labelY=n.y),void 0===n.labelDiffX&&(n.labelDiffX=0,n.labelDiffY=0)),n.connectionId=[],n.type){case"point":case"circle":case"circle_3":w(W(n));break;case"line":t(n),me(W(n));break;case"triangle":W(n);break;case"segment":case"segmentDash":t(n),W(n);break;case"ray":t(n),me(W(n));break;case"perpendicularLine":case"parallelLine":Ce(W(n));break;case"length":n.labelAlign="center",t(n),W(n);break;case"polygonShape":W(n);break;case"angle":case"angleRay":case"angleB":W(n);break;case"mirrorOnLine":W(n)}return H(),a(),n.uniqueId},this.removeIncompleteShape=function(){F.mouseDown.lastShapeCompleted?n(!1):N.removeUnplotedShapes()},this.removeUnplotedShapes=function(){i(F.newPlottedShapes),n(!0)},this.updateIndex=function(e){var n=JSON.parse(JSON.stringify(e.data)),t=te(n.uniqueId).shape,e=e.type;if("remove"===e)l(n.uniqueId);else if("update"===e){t&&Object.keys(n).forEach(function(e){t[e]=n[e]});e=n.type;if("scale"===_.interactionType)z.x=(isNaN(n.x)?z:n).x,z.y=(isNaN(n.y)?z:n).y,z.xTo=(isNaN(n.xTo)?z:n).xTo,z.yTo=(isNaN(n.yTo)?z:n).yTo,ve();else if("point"===e)t.x=n.x,t.y=n.y,void 0!==n.label&&(t.label=n.label,w(t));else if("midPoint"===e)void 0!==n.label&&(t.label=n.label,w(t));else if(e.includes("segment"))t.x=n.x,t.y=n.y,t.xTo=n.xTo,t.yTo=n.yTo;else if("line"===e||"ray"===e){if(t.x=n.x,t.y=n.y,t.xTo=n.xTo,t.yTo=n.yTo,n.label&&(t.label=n.label),t.connectionId)for(var o=0;o<t.connectionId.length;o++){var i=te(t.connectionId[o]);i.shape&&"point"===i.shape.type&&i.shape.uniqueId===t.firstPointId&&(i.shape.x=t.x,i.shape.y=t.y),i.shape&&"point"===i.shape.type&&i.shape.uniqueId===t.secondPointId&&(i.shape.x=t.xTo,i.shape.y=t.yTo)}me(t)}else"circle"===e?Object.keys(n).forEach(function(e){t[e]=n[e]}):"circle_3"===e||"perpendicularLine"!==e&&"parallelLine"!==e||(t.x=n.x,t.y=n.y,t.slope=n.slope,t.connectionId&&t.connectionId.forEach(function(e){e=te(e);e.shape&&"point"===e.shape.type&&(e.shape.x=t.x,e.shape.y=t.y)}),Ce(t))}a()},this.draw=function(){var e,n,t,i,a,l,o,s,r,d,u,h,c,y,x,g,b,p=_.context,f=_.x,I=_.y,m=_.width,P=_.height,C=_.transperent,v=(_.interactionElements,_.segmentColor,_.fontSize,_.pointColor,_.interactionType);_.pointLabelColor;_.visible&&(p.save(),p.beginPath(),p.globalAlpha=C?.5:1,p.save(),p.fillStyle="#000000",p.rect(f,I,m,P),p.clip(),h=p,y=(c=_).interactionElements,x=c.segmentColor,g=c.fontSize,b=c.pointLabelColor,y.forEach(function(e,n){var t,o,i,a,l,s,r,d,u=void 0!==e.x?Y(e.x,e.y):null,c=void 0!==e.xTo?Y(e.xTo,e.yTo):null,y=void 0!==e.xOr?Y(e.xOr,e.yOr):null,p=void 0!==e.xOrTo?Y(e.xOrTo,e.yOrTo):null;e.visible&&(h.save(),h.beginPath(),h.strokeStyle=x,h.fillStyle=x,e.strokeColor&&(h.strokeStyle=e.strokeColor),e.fillColor&&(h.fillStyle=e.fillColor),e.lineWidth&&(h.lineWidth=e.lineWidth),e.isSelected&&(h.lineWidth=2),_.finalView&&(h.fillStyle=_.finalColor,h.strokeStyle=_.finalColor),"point"===e.type||(e.type.includes("segment")?(e.type.includes("segmentDash")&&h.setLineDash([6,4]),h.moveTo(u.x,u.y),h.lineTo(c.x,c.y),h.stroke(),e.arrowHead&&_.LabComClass.Maths.getDistance(u,c)>3*_.pointRadius&&(l=h,s=u,r=c,d=_.LabComClass.Maths.getAngle(s.x,s.y,r.x,r.y),r=function(e,n,t){var o=n.x-e.x,i=n.y-e.y,e=Math.hypot(o,i);return{x:n.x-t*o/e,y:n.y-t*i/e}}(s,r,_.pointRadius),l.save(),l.beginPath(),l.moveTo(r.x,r.y),l.lineTo(r.x-10*Math.cos(d-Math.PI/6),r.y-10*Math.sin(d-Math.PI/6)),l.lineTo(r.x-10*Math.cos(d+Math.PI/6),r.y-10*Math.sin(d+Math.PI/6)),l.lineTo(r.x,r.y),l.stroke(),l.fill(),l.closePath(),l.restore())):"length"===e.type?void 0===e.secondPointId&&(h.save(),h.beginPath(),h.setLineDash([5,15]),h.moveTo(u.x,u.y),h.lineTo(c.x,c.y),h.stroke(),h.closePath(),h.restore()):"compass"===e.type?(e.isPloted||(h.strokeStyle=x,h.setLineDash([3,3]),h.lineWidth=2),h.arc(u.x,u.y,T(e.r),0,2*Math.PI),h.stroke()):"triangle"===e.type?e.thirdSegmentPlotted&&(i=Y(e.firstPoint.x,e.firstPoint.y),t=Y(e.secondPoint.x,e.secondPoint.y),o=Y(e.thirdPoint.x,e.thirdPoint.y),h.save(),h.beginPath(),h.fillStyle=e.fillColor||"rgba(112,146,190,0.5)",h.moveTo(i.x,i.y),h.lineTo(t.x,t.y),h.lineTo(o.x,o.y),h.lineTo(i.x,i.y),h.stroke(),h.fill(),h.closePath(),h.restore()):"line"===e.type?(h.moveTo(y.x,y.y),h.lineTo(p.x,p.y),h.stroke()):"ray"===e.type?u.x===c.x&&u.y===c.y||(h.moveTo(u.x,u.y),h.lineTo(y.x,y.y),h.stroke()):"circle_3"===e.type?(h.font=g+"px "+_.LabComClass.polo22KlettRegular,h.textBaseline="bottom",h.textAlign="left",h.arc(u.x,u.y,T(e.r),0,2*Math.PI),h.stroke()):"circle"===e.type?(h.font=g+"px "+_.LabComClass.polo22KlettRegular,h.textBaseline="bottom",h.textAlign="left",h.arc(u.x,u.y,T(e.r),0,2*Math.PI),h.stroke(),!e.r||e.uniqueId!==F.currentUniqueId||!F.mouseDown.isMouseDown&&F.mouseDown.lastShapeCompleted||(t=Number(e.r),void 0!==_.shapes.circle.digit&&(t=Number(t.toFixed(_.shapes.circle.digit))),o=g/3,i=u.x,a=g,c=u.y+o,h.save(),h.beginPath(),h.fillStyle="rgba(255,255,255,1)",h.rect(i,c,h.measureText(t).width+2*o,a),h.fill(),h.closePath(),h.beginPath(),h.fillStyle=b,h.fillText(t,i+o,c+1.05*a),h.closePath(),h.restore())):"angleRay"===e.type?(h.translate(u.x,u.y),h.arc(0,0,20,-e.startAngle,-e.endAngle),h.stroke()):"angle"===e.type||"angleSize"===e.type?(h.globalAlpha=.5,h.translate(u.x,u.y),h.beginPath(),h.moveTo(0,0),h.arc(0,0,20,-e.startAngle,-e.endAngle),h.fill(),h.closePath(),90!==e.angleValue&&"BEC"!==(null==e?void 0:e.over)||!_.shapes.angle.dotOn90||(a=_.LabComClass.Maths.getPoint({x:0,y:0},-e.endAngle,16),u=_.LabComClass.Maths.getPoint({x:0,y:0},-e.startAngle,16),h.beginPath(),h.strokeStyle="#000000",h.fillStyle="#000000",h.arc((u.x+a.x)/2,(u.y+a.y)/2,2,0,2*Math.PI),h.fill(),h.closePath()),h.stroke()):"perpendicularLine"===e.type||"parallelLine"===e.type?null===y||isNaN(y.x)||(h.moveTo(y.x,y.y),h.lineTo(p.x,p.y),h.stroke()):"polygonShape"===e.type&&(h.fillStyle=e.fillColor||"rgba(112,146,190,0.5)",e.path.forEach(function(e,n){e=Y(e.x,e.y);0===n&&h.moveTo(e.x,e.y),h.lineTo(e.x,e.y)}),h.fill())),h.closePath(),h.restore())}),z.visible&&(p.save(),p.fillStyle=z.pointColor,p.strokeStyle=z.segmentColor,p.lineWidth=z.segmentWidth,p.beginPath(),p.moveTo(z.x,z.y),p.lineTo(z.xTo,z.yTo),p.stroke(),p.closePath(),p.beginPath(),p.arc(z.x,z.y,z.pointRadius,0,2*Math.PI),p.fill(),p.closePath(),p.beginPath(),p.arc(z.xTo,z.yTo,z.pointRadius,0,2*Math.PI),p.fill(),p.closePath(),p.restore()),F.mouseDown.isMouseDown&&"select"===v&&null===F.currentUniqueId&&(p.save(),p.beginPath(),p.fillStyle="rgba(69,146,176,0.1)",p.strokeStyle="rgba(69,146,176,0.8)",e=(s=F.mouseDown).orignalX,n=s.orignalY,t=s.x,s=s.y,p.rect(e,n,t-e,s-n),p.fill(),p.stroke(),p.closePath(),p.restore()),p.restore(),p.closePath(),p.restore(),p.save(),e=(t=_.screen).x,s=t.y,n=t.w,t=t.h,p.fillStyle="#000000",p.beginPath(),p.moveTo(e,s),p.lineTo(e,s+t),p.lineTo(e+n,s+t),p.lineTo(e+n,s),p.closePath(),p.clip(),o=p,r=(s=_).x,d=s.y,u=s.height,s.interactionElements.forEach(function(e){var n,t=void 0!==e.x?Y(e.x,e.y):null;e.visible&&("point"===e.type&&(n=!0,"1"===_.showQuadrants&&(t.x<r||t.y>d+u)&&(n=!1),n&&q(o,e,!0,!1)),"midPoint"===e.type&&(n=!0,"1"===_.showQuadrants&&(t.x<r||t.y>d+u)&&(n=!1),n&&q(o,e,!0,!1)))}),p.restore(),p.save(),p.fillStyle="#000000",p.beginPath(),p.moveTo(f,I),p.lineTo(f,I+P),p.lineTo(f+m,I+P),p.lineTo(f+m,I),p.closePath(),p.clip(),C||(i=p,C=(I=_).interactionElements,a=I.pointLabelColor,l=I.fontSize,C.forEach(function(e,n){var t,o;void 0!==e.x&&Y(e.x,e.y);e.visible&&("point"===e.type&&q(i,e,!1,!0),"length"===e.type&&e.label&&((t=Y(e.labelX,e.labelY)).x+=e.labelDiffX,t.y+=e.labelDiffY,i.save(),i.beginPath(),i.font=l+"px "+_.LabComClass.polo22KlettRegular,o=i.measureText(e.distanceText).width+l/2,i.fillStyle="rgba(255,255,255,1)",i.strokeStyle="rgba(199,199,199,1)",i.rect(t.x-o/2,t.y-1.2*l,o,l*(_.labelBGRatio+.1)),i.fill(),i.stroke(),i.closePath(),i.beginPath(),i.textBaseline="bottom",i.textAlign="center",i.fillStyle=a,i.drawStyledText(e.label,t.x,t.y,_.LabComClass.polo22KlettRegular,l),i.closePath(),i.restore()),(e.type.includes("segment")||ce(e,["angle","angleSize","line","ray","perpendicularLine","parallelLine","angleRay"]))&&(o=!0,_.shapes.hasOwnProperty(e.type)&&_.shapes[e.type].hasOwnProperty("label")&&_.shapes[e.type].label.hasOwnProperty("visible")&&!_.shapes[e.type].label.visible&&(o=!1),o&&void 0!==e.label&&void 0!==e.labelX&&(t=Y(e.labelX,e.labelY),o=e.fillLabelColor||a,D({ctx:i,text:e.label,x:t.x,y:t.y,fillColor:o,center:!0,diffX:Number(e.labelDiffX),diffY:Number(e.labelDiffY)}))))})),p.restore())},this.setSegmentColor=function(e){_.segmentColor=e},this.getSegmentColor=function(e){return _.segmentColor},this.updateShape=function(e,n){var t=te(e);t&&Object.keys(n).forEach(function(e){t.shape[e]=n[e]})}}
"use strict";function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function Gamar_43_LogicClass(e){var d,u={currentStep:0,checkingAnsCounter:0,correctData:{step0:"AB",step1:"BC",step2:"CD",step3:"DA"},aPlotted:!1,bPlotted:!1,cPlotted:!1,dPlotted:!1,snappingDiff:1,colorCount:0,currentStepData:null,order:null,nStep:0,nPlanStep:0,planSegColor:!1,planAngleColor:!1,c1Plotted:!1,c2Plotted:!1,s1Plotted:!1,s2Plotted:!1,p1Plotted:!1,p2Plotted:!1},a={},n={};function h(t){return u.nStep++,{match:!0,completed:{partial:!0,step:u.nStep},drawnD:t}}function y(t,e,a){if(void 0===a.slope)return t===a.x1;e-=a.y1,a=a.slope*(t-a.x1);return+e.toFixed(3)==+a.toFixed(3)}function g(t){var e={};return e.segment=t.label,e.slope=isFinite(r(t.x,t.y,t.xTo,t.yTo))?r(t.x,t.y,t.xTo,t.yTo):void 0,void 0!==e.slope?(e.eqn="y-".concat(t.y,"=").concat(e.slope,"*(x-").concat(t.x,")"),e.b=1,e.a=-e.slope,e.c=e.slope*t.x-t.y,e.cMod=Math.abs(e.slope*t.x-t.y),e.form="y+".concat(e.a,"x+").concat(e.c),e.y1=t.y,e.x1=t.x):(e.eqn="x=".concat(t.x),e.form="x-".concat(t.x),e.a=1,e.b=0,e.c=-t.x,e.cMod=Math.abs(-t.x),e.slope=void 0,e.x1=-e.c),e}function r(t,e,a,n){return(n-e)/(a-t)}function f(t,e,a,n){return"circleSize"===t.type&&t.x===e[a].x&&t.y===e[a].y&&t.r.toFixed(2)>=n-.5&&t.r.toFixed(2)<=n+.5?(t.r=n,{match:!0,completed:!0,drawnD:t}):{match:!1,completed:!1,drawnD:t}}function m(t,e,a){var n=void 0===a?e.pointToCheckStep3:a,a=o(e["point".concat(n)],t);return"point"===t.type&&0===Math.trunc(10*a)?(t.x=e["point".concat(n)].x,t.y=e["point".concat(n)].y,t.label=n,{match:!0,completed:!0,drawnD:t}):{match:!1,completed:!1,drawnD:t}}Object.keys(e).forEach(function(t){u[t]=e[t]}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:u.id}}),this.init=function(e){Object.keys(e).forEach(function(t){a[t]=e[t]})},this.setMathObj=function(t,e){d=t,0},this.addEventListener=function(t,e){n[t]=e},this.updateRender=function(e){Object.keys(e).forEach(function(t){a[t]=e[t]})},this.getCurrentStep=function(){return u.currentStep},this.getCorrectData=function(){return u.correctData},this.setSegmentOrder=function(t){u.order=t},this.setSnappingDiff=function(t){u.snappingDiff=t},this.resetLogicFlag=function(t){u.planSegColor=t,u.planAngleColor=t,u.colorCount=0,u.nStep=0,u.c1Plotted=t,u.c2Plotted=t,u.s1Plotted=t,u.s2Plotted=t,u.p1Plotted=t,u.p2Plotted=t},this.getStepsText=function(){switch(a.currentQuestion.variant){case 1:case 2:return{steps:["stepData1","stepData1_1","stepData1_2","stepData1_3","stepData1_4","stepData1_5","stepData1_6"]};case 3:case 4:return{steps:["stepData1","stepData3_1","stepData3_2","stepData3_3","stepData3_4","stepData3_5","stepData1_6"]};case 5:return{steps:["stepData1","stepData5_1","stepData5_2","stepData5_3","stepData5_4","stepData5_5","stepData1_6"]}}},this.getQuestionText=function(){var t=u.LabComClass.globalLangText.question_1;return t=(t=t.replace("$aVal",a.currentQuestion.a)).replace("$bVal",a.currentQuestion.b),t=(t=3!==a.currentQuestion.situation?t.replace("$angleVal",a.currentQuestion.degree):t.replace("$angleVal",180-a.currentQuestion.degree)).replace("$angleSym",u.LabComClass.globalLangText[a.currentQuestion.given[2]])},this.draw=function(){},this.resetAll=function(t){u.currentStep=0,t&&(u.correctData={})},this.setGivenValues=function(t){u.given=_toConsumableArray(t)},this.moveToNextStep=function(t){c({step:t})},this.addDefaultData=function(t){for(var e=[],a=0;a<1;a++){var n=JSON.parse(JSON.stringify(t[a]));e.push(n)}return e},this.checkPlanInteraction=function(a,e){var n=[];Object.keys(u.LabComClass.globalLangText).forEach(function(t){e.given.includes(t)&&n.push(u.LabComClass.globalLangText[t])});var r=-1;return u.given.forEach(function(t,e){t!==a.shapeLabel&&u.LabComClass.globalLangText[t]!==a.shapeLabel||(r=e,u.colorCount++,u.given.splice(e,1))}),0<=r&&u.colorCount===e.given.length?{match:!0,completed:!0,drawnD:a}:0<=r&&u.colorCount!==e.given.length||e.given.includes(a.shapeLabel)||n.includes(a.shapeLabel)?(r=-1,{match:!0,completed:{partial:!0},drawnD:a}):{match:!1,completed:!1,drawnD:a}},this.checkPlanInteractions=function(t,e){if(t.shapeLabel===e.given[0])u.planSegColor="brush2"===t.type;else if(t.shapeLabel===u.LabComClass.globalLangText[e.given[1]])u.planAngleColor="brush2"===t.type;else{if(t.shapeLabel!==e.given[1])return{match:!1,completed:!1,drawnD:t};u.planAngleColor="brush2"===t.type}return u.planSegColor&&!u.planAngleColor?{match:!0,completed:{partial:!0,segColor:!0,angleColor:!1},drawnD:t}:!u.planSegColor&&u.planAngleColor?{match:!0,completed:{partial:!0,segColor:!1,angleColor:!0},drawnD:t}:u.planSegColor&&u.planAngleColor?{match:!0,completed:!0,drawnD:t}:{match:!1,completed:!1,drawnD:t}},this.checkInteraction=function(t,e,a,n){1===a.situation||a.situation;var r,o,c,l,i,p,s=!1;switch(e){case 1:s=function(t,e){var a=u.LabComClass.Maths.getAngle(t.x,t.y,t.xTo,t.yTo);if("segment"!==t.type||t.x!==e.pointA.x||t.y!==e.pointA.y||+t.distance.toFixed(1)!==e.a)return{match:!1,completed:!1,drawnD:t};a=u.LabComClass.Maths.getPoint({x:t.x,y:t.y},a,e.a);return t.xTo=a.x,t.yTo=a.y,t.distance=e.side,{match:!0,completed:!0,drawnD:t}}(t,a);break;case 2:p=a,s="angleSize"===(i=t).type&&i.degree===p.degree&&i.clockwise===p.angClockWise&&i.x===p["point".concat(p.angleOver)].x&&i.y===p["point".concat(p.angleOver)].y?{match:!0,completed:!0,drawnD:i}:{match:!1,completed:!1,drawnD:i};break;case 3:s=function(t,e){var a;{if(0===u.nStep)return(a=function(t,e){var a="point".concat(e.angleOver),n=e.r;return f(t,e,a,n)}(t,e)).match?h(t):a;if(1===u.nStep)return(a=m(t,e)).match&&(u.nStep=0),a}}(t,a);break;case 4:o=t,l="AD"===(c=a).segmentToCheckStep4?"d":"b",s="segment"!==o.type||o.label!==c.segmentToCheckStep4&&o.label!==c.segmentToCheckStep4.split("").reverse().join("")?{match:!1,completed:!1,drawnD:o}:(o.label=l,{match:!0,completed:!0,drawnD:o});break;case 5:c=t,o=1===(l=a).situation||3===l.situation?"D":"C",s=0===u.nStep?(r=function(t,e){for(var a=-1,n=g(t),r=e.pointToCheckForOverlap,o=e["point".concat(r)],c=0;c<e.pointsToValidate.length;c++)for(var l=e.pointsToValidate[c][c],i=0;i<l.length;i++){var p="point".concat(l[i]);if("parallelLine"===t.type&&+t.x.toFixed(2)==+e[p].x.toFixed(2)&&+t.y.toFixed(2)==+e[p].y.toFixed(2)&&!y(o.x,o.y,n))return t.x=e[p].x,t.y=e[p].y,t.yTo=e[p].y,t.yOr=e[p].y,t.yOrTo=e[p].y,0===(a=c)?u.p1Plotted=!0:1===a&&(u.p2Plotted=!0),{match:!0,completed:!0,drawnD:t,flag:a}}if(-1===a)return{match:!1,completed:!1,drawnD:t,flag:a}}(c,(u.nStep,l))).match?h(c):r:1===u.nStep?(r=function(t,e){for(var a=u.p1Plotted?1:0,n=-1,r=g(t),o=e.pointsToValidate[a][a],a=e.pointToCheckForOverlap,c=e["point".concat(a)],l=0;l<o.length;l++){var i="point".concat(o[l]);if("parallelLine"===t.type&&+t.x.toFixed(2)==+e[i].x.toFixed(2)&&+t.y.toFixed(2)==+e[i].y.toFixed(2)&&!y(c.x,c.y,r))return t.x=e[i].x,t.y=e[i].y,t.yTo=e[i].y,t.yOr=e[i].y,t.yOrTo=e[i].y,{match:!0,completed:!0,drawnD:t,flag:n=l}}if(-1===n)return{match:!1,completed:!1,drawnD:t,flag:n}}(c,l)).match?h(c):r:2===u.nStep?((r=m(c,l,o)).match&&(u.nStep=0),r):void 0;break;case 6:s=function(t,e){for(var a=-1,n=!1,r=0;r<u.order.length;r++){var o=u.order[r].split("").reverse().join("");if((t.label===u.order[r]||t.label===o)&&1==u.order.length){u.order=d.getOrder(e),a=r,n=!0;break}if((t.label===u.order[r]||t.label===o)&&1!==u.order.length){u.order.splice(r,1),a=r;break}}return 0<=a&&n?{match:!(n=!(a=-1)),completed:!0,drawnD:t}:0<=a?{match:!0,completed:{partial:!0,segPlotted:t.label},drawnD:t}:{match:!1,completed:!1,drawnD:t}}(t,a)}return s};var o=function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))};function c(t){l("setStep",t)}function l(t,e){void 0!==n[t]&&n[t]({type:t,data:e},!1)}this.setCurrentStep=function(t){u.currentStep=t}}
/*

StackBlur - a fast almost Gaussian Blur For Canvas

Version: 	0.5
Author:		Mario Klingemann
Contact: 	mario@quasimondo.com
Website:	http://www.quasimondo.com/StackBlurForCanvas
Twitter:	@quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr:
https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

var mul_table = [
  512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512,
  454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512,
  482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456,
  437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512,
  497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328,
  320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456,
  446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
  329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512,
  505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405,
  399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328,
  324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271,
  268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456,
  451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388,
  385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
  332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
  289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];


var shg_table = [
	     9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
  17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
  19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
  20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
  21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
  21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
  22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
  22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
  23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
  23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
  23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
  23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

function stackBlurImage(imageID, canvasID, radius, blurAlphaChannel, xx, yy, ww, hh) {

 	/* var img = document.getElementById( imageID );
	var w = img.naturalWidth;
    var h = img.naturalHeight; */

  var canvas = document.getElementsByClassName(canvasID)[0];

    /* canvas.style.width  = w + "px";
    canvas.style.height = h + "px";
    canvas.width = w;
    canvas.height = h; */

//   var context = canvas.getContext('2d');
    // context.clearRect( 0, 0, w, h );
    // context.drawImage( img, 0, 0 );

  if (isNaN(radius) || radius < 1) return;

  if (blurAlphaChannel) { stackBlurCanvasRGBA(canvasID, xx, yy, ww, hh, radius); } else		{ stackBlurCanvasRGB(canvasID, xx, yy, ww, hh, radius); }
}


function stackBlurCanvasRGBA(id, top_x, top_y, width, height, radius) {
  if (isNaN(radius) || radius < 1) return;
  radius |= 0;

  var canvas = document.getElementsByClassName(id);
  var context = canvas.getContext('2d');
  var imageData;

  try {
	  try {
    imageData = context.getImageData(top_x, top_y, width, height);
	  } catch (e) {

		// NOTE: this part is supposedly only needed if you want to work with local files
		// so it might be okay to remove the whole try/catch block and just use
		// imageData = context.getImageData( top_x, top_y, width, height );
    try {
      netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead');
      imageData = context.getImageData(top_x, top_y, width, height);
    } catch (e) {
      alert('Cannot access local image');
      throw new Error('unable to access local image data: ' + e);
      return;
    }
	  }
  } catch (e) {
	  alert('Cannot access image');
	  throw new Error('unable to access image data: ' + e);
  }

  var pixels = imageData.data;

  var x,
    y,
    i,
    p,
    yp,
    yi,
    yw,
    r_sum,
    g_sum,
    b_sum,
    a_sum,
    r_out_sum,
    g_out_sum,
    b_out_sum,
    a_out_sum,
    r_in_sum,
    g_in_sum,
    b_in_sum,
    a_in_sum,
    pr,
    pg,
    pb,
    pa,
    rbs;

  var div = radius + radius + 1;
  var w4 = width << 2;
  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

  var stackStart = new BlurStack();
  var stack = stackStart;
  for (i = 1; i < div; i++)	{
    stack = stack.next = new BlurStack();
    if (i == radiusPlus1) var stackEnd = stack;
  }
  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;

  yw = yi = 0;

  var mul_sum = mul_table[radius];
  var shg_sum = shg_table[radius];

  for (y = 0; y < height; y++)	{
    r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;

    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++)		{
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++)		{
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = (pg = pixels[p + 1])) * rbs;
      b_sum += (stack.b = (pb = pixels[p + 2])) * rbs;
      a_sum += (stack.a = (pa = pixels[p + 3])) * rbs;

      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;

      stack = stack.next;
    }


    stackIn = stackStart;
    stackOut = stackEnd;
    for (x = 0; x < width; x++)		{
      pixels[yi + 3] = pa = (a_sum * mul_sum) >> shg_sum;
      if (pa != 0)			{
        pa = 255 / pa;
        pixels[yi] = ((r_sum * mul_sum) >> shg_sum) * pa;
        pixels[yi + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
        pixels[yi + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }

      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;

      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;

      p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

      r_in_sum += (stackIn.r = pixels[p]);
      g_in_sum += (stackIn.g = pixels[p + 1]);
      b_in_sum += (stackIn.b = pixels[p + 2]);
      a_in_sum += (stackIn.a = pixels[p + 3]);

      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      a_sum += a_in_sum;

      stackIn = stackIn.next;

      r_out_sum += (pr = stackOut.r);
      g_out_sum += (pg = stackOut.g);
      b_out_sum += (pb = stackOut.b);
      a_out_sum += (pa = stackOut.a);

      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;

      stackOut = stackOut.next;

      yi += 4;
    }
    yw += width;
  }


  for (x = 0; x < width; x++)	{
    g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

    yi = x << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;

    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++)		{
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++)		{
      yi = (yp + x) << 2;

      r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = (pg = pixels[yi + 1])) * rbs;
      b_sum += (stack.b = (pb = pixels[yi + 2])) * rbs;
      a_sum += (stack.a = (pa = pixels[yi + 3])) * rbs;

      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;

      stack = stack.next;

      if (i < heightMinus1)			{
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (y = 0; y < height; y++)		{
      p = yi << 2;
      pixels[p + 3] = pa = (a_sum * mul_sum) >> shg_sum;
      if (pa > 0)			{
        pa = 255 / pa;
        pixels[p] = ((r_sum * mul_sum) >> shg_sum) * pa;
        pixels[p + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
        pixels[p + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
      } else {
        pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
      }

      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;

      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;

      p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

      r_sum += (r_in_sum += (stackIn.r = pixels[p]));
      g_sum += (g_in_sum += (stackIn.g = pixels[p + 1]));
      b_sum += (b_in_sum += (stackIn.b = pixels[p + 2]));
      a_sum += (a_in_sum += (stackIn.a = pixels[p + 3]));

      stackIn = stackIn.next;

      r_out_sum += (pr = stackOut.r);
      g_out_sum += (pg = stackOut.g);
      b_out_sum += (pb = stackOut.b);
      a_out_sum += (pa = stackOut.a);

      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;

      stackOut = stackOut.next;

      yi += width;
    }
  }

  context.putImageData(imageData, top_x, top_y);

}


function stackBlurCanvasRGB(id, top_x, top_y, width, height, radius) {
  if (isNaN(radius) || radius < 1) return;
  radius |= 0;

  var canvas = document.getElementsByClassName(id)[0];
  var context = canvas.getContext('2d');
  var imageData;

  try {
	  try {
    imageData = context.getImageData(top_x, top_y, width, height);
	  } catch (e) {

		// NOTE: this part is supposedly only needed if you want to work with local files
		// so it might be okay to remove the whole try/catch block and just use
		// imageData = context.getImageData( top_x, top_y, width, height );
    try {
      netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead');
      imageData = context.getImageData(top_x, top_y, width, height);
    } catch (e) {
      alert('Cannot access local image');
      throw new Error('unable to access local image data: ' + e);
      return;
    }
	  }
  } catch (e) {
	  alert('Cannot access image');
	  throw new Error('unable to access image data: ' + e);
  }

  var pixels = imageData.data;

  var x,
    y,
    i,
    p,
    yp,
    yi,
    yw,
    r_sum,
    g_sum,
    b_sum,
    r_out_sum,
    g_out_sum,
    b_out_sum,
    r_in_sum,
    g_in_sum,
    b_in_sum,
    pr,
    pg,
    pb,
    rbs;

  var div = radius + radius + 1;
  var w4 = width << 2;
  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

  var stackStart = new BlurStack();
  var stack = stackStart;
  for (i = 1; i < div; i++)	{
    stack = stack.next = new BlurStack();
    if (i == radiusPlus1) var stackEnd = stack;
  }
  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;

  yw = yi = 0;

  var mul_sum = mul_table[radius];
  var shg_sum = shg_table[radius];

  for (y = 0; y < height; y++)	{
    r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;

    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++)		{
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++)		{
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = (pg = pixels[p + 1])) * rbs;
      b_sum += (stack.b = (pb = pixels[p + 2])) * rbs;

      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;

      stack = stack.next;
    }


    stackIn = stackStart;
    stackOut = stackEnd;
    for (x = 0; x < width; x++)		{
      pixels[yi] = (r_sum * mul_sum) >> shg_sum;
      pixels[yi + 1] = (g_sum * mul_sum) >> shg_sum;
      pixels[yi + 2] = (b_sum * mul_sum) >> shg_sum;

      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;

      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;

      p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

      r_in_sum += (stackIn.r = pixels[p]);
      g_in_sum += (stackIn.g = pixels[p + 1]);
      b_in_sum += (stackIn.b = pixels[p + 2]);

      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;

      stackIn = stackIn.next;

      r_out_sum += (pr = stackOut.r);
      g_out_sum += (pg = stackOut.g);
      b_out_sum += (pb = stackOut.b);

      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;

      stackOut = stackOut.next;

      yi += 4;
    }
    yw += width;
  }


  for (x = 0; x < width; x++)	{
    g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

    yi = x << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;

    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++)		{
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++)		{
      yi = (yp + x) << 2;

      r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = (pg = pixels[yi + 1])) * rbs;
      b_sum += (stack.b = (pb = pixels[yi + 2])) * rbs;

      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;

      stack = stack.next;

      if (i < heightMinus1)			{
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (y = 0; y < height; y++)		{
      p = yi << 2;
      pixels[p] = (r_sum * mul_sum) >> shg_sum;
      pixels[p + 1] = (g_sum * mul_sum) >> shg_sum;
      pixels[p + 2] = (b_sum * mul_sum) >> shg_sum;

      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;

      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;

      p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

      r_sum += (r_in_sum += (stackIn.r = pixels[p]));
      g_sum += (g_in_sum += (stackIn.g = pixels[p + 1]));
      b_sum += (b_in_sum += (stackIn.b = pixels[p + 2]));

      stackIn = stackIn.next;

      r_out_sum += (pr = stackOut.r);
      g_out_sum += (pg = stackOut.g);
      b_out_sum += (pb = stackOut.b);

      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;

      stackOut = stackOut.next;

      yi += width;
    }
  }

  context.putImageData(imageData, top_x, top_y);

}

function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;


}








"use strict";function RectDrawClass(e){var i,o={x:0,y:0,width:200,height:200,visible:!0,bgColor:"#000000",borderColor:"#000000",borderWidth:2,borderVisible:!1,bgVisible:!0,interactive:!1};function r(t){o.animClass.stop("highlight"),t&&o.animClass.start({id:"highlight",fps:i.fps,frame:a})}function a(){var t=o.bgColor;t=(t=t.split("(")[1].split(")")[0]).split(",");var e=Number(t[3]);"fadeIn"==i.type&&(e+=1/(i.fps*i.duration)),"fadeOut"==i.type&&(e-=1/(i.fps*i.duration)),e=Number(e.toFixed(2));t=t[0]+","+t[1]+","+t[2]+","+e;o.bgColor="rgba("+t+")",("fadeOut"==i.type&&e<=0||"fadeIn"==i.type&&e>=i.maxOpacity)&&(r(!1),i.callback&&i.callback({type:i.type})),onViewUpdateCls.trigger("onGlobalUpdate",{type:"rendererUpdate"})}function t(){var t={};t.id=o.id,t.r=[],o.visible?t.r.push({id:o.id,cursor:"default",rect:{x:o.x,y:o.y,w:o.width,h:o.height},eventListener:function(t){t.type}.bind(this)}):onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:o.id}}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:t})}Object.keys(e).forEach(function(t){o[t]=e[t]}),t(),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:o.id}}),o.animClass=new o.LabComClass.GlobalAnimClass,this.setValue=function(t){o.text=t},this.getValue=function(){return o.text},this.getVisble=function(){return o.visible},this.setBGColor=function(t){o.bgColor=t},this.getBGColor=function(){return o.bgColor},this.addEventListener=function(t,e){events[t]=e},this.animateBG=function(t){(i=t).maxOpacity||(t.maxOpacity=1),-1!=i.rgba.indexOf("rgb")?(o.bgColor=i.rgba,r(!0)):console.log("Please provide RGBA value")},this.show=function(){o.visible=!0,t()},this.hide=function(){o.visible=!1,t()},this.setStyle=function(e){Object.keys(e).forEach(function(t){o[t]=e[t]})},this.draw=function(){var t;o.visible&&((t=o.context).save(),t.beginPath(),t.fillStyle=o.bgColor,t.strokeStyle=o.borderColor,t.lineWidth=o.borderWidth,t.rect(o.x,o.y,o.width,o.height),o.borderVisible&&t.stroke(),o.bgVisible&&t.fill(),t.closePath(),t.restore())}}
/*
  html2canvas 0.5.0-alpha <http://html2canvas.hertzen.com>
  Copyright (c) 2014 Niklas von Hertzen

  Released under MIT License
*/

(function(window, document, module, exports, global, define, undefined){

/*
 Copyright (c) 2013 Yehuda Katz, Tom Dale, and contributors

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do
 so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
!function(){var a,b,c,d;!function(){var e={},f={};a=function(a,b,c){e[a]={deps:b,callback:c}},d=c=b=function(a){function c(b){if("."!==b.charAt(0))return b;for(var c=b.split("/"),d=a.split("/").slice(0,-1),e=0,f=c.length;f>e;e++){var g=c[e];if(".."===g)d.pop();else{if("."===g)continue;d.push(g)}}return d.join("/")}if(d._eak_seen=e,f[a])return f[a];if(f[a]={},!e[a])throw new Error("Could not find module "+a);for(var g,h=e[a],i=h.deps,j=h.callback,k=[],l=0,m=i.length;m>l;l++)"exports"===i[l]?k.push(g={}):k.push(b(c(i[l])));var n=j.apply(this,k);return f[a]=g||n}}(),a("promise/all",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to all.");return new b(function(b,c){function d(a){return function(b){f(a,b)}}function f(a,c){h[a]=c,0===--i&&b(h)}var g,h=[],i=a.length;0===i&&b([]);for(var j=0;j<a.length;j++)g=a[j],g&&e(g.then)?g.then(d(j),c):f(j,g)})}var d=a.isArray,e=a.isFunction;b.all=c}),a("promise/asap",["exports"],function(a){"use strict";function b(){return function(){process.nextTick(e)}}function c(){var a=0,b=new i(e),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function d(){return function(){j.setTimeout(e,1)}}function e(){for(var a=0;a<k.length;a++){var b=k[a],c=b[0],d=b[1];c(d)}k=[]}function f(a,b){var c=k.push([a,b]);1===c&&g()}var g,h="undefined"!=typeof window?window:{},i=h.MutationObserver||h.WebKitMutationObserver,j="undefined"!=typeof global?global:this,k=[];g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():i?c():d(),a.asap=f}),a("promise/cast",["exports"],function(a){"use strict";function b(a){if(a&&"object"==typeof a&&a.constructor===this)return a;var b=this;return new b(function(b){b(a)})}a.cast=b}),a("promise/config",["exports"],function(a){"use strict";function b(a,b){return 2!==arguments.length?c[a]:(c[a]=b,void 0)}var c={instrument:!1};a.config=c,a.configure=b}),a("promise/polyfill",["./promise","./utils","exports"],function(a,b,c){"use strict";function d(){var a="Promise"in window&&"cast"in window.Promise&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var a;return new window.Promise(function(b){a=b}),f(a)}();a||(window.Promise=e)}var e=a.Promise,f=b.isFunction;c.polyfill=d}),a("promise/promise",["./config","./utils","./cast","./all","./race","./resolve","./reject","./asap","exports"],function(a,b,c,d,e,f,g,h,i){"use strict";function j(a){if(!w(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof j))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._subscribers=[],k(a,this)}function k(a,b){function c(a){p(b,a)}function d(a){r(b,a)}try{a(c,d)}catch(e){d(e)}}function l(a,b,c,d){var e,f,g,h,i=w(c);if(i)try{e=c(d),g=!0}catch(j){h=!0,f=j}else e=d,g=!0;o(b,e)||(i&&g?p(b,e):h?r(b,f):a===F?p(b,e):a===G&&r(b,e))}function m(a,b,c,d){var e=a._subscribers,f=e.length;e[f]=b,e[f+F]=c,e[f+G]=d}function n(a,b){for(var c,d,e=a._subscribers,f=a._detail,g=0;g<e.length;g+=3)c=e[g],d=e[g+b],l(b,c,d,f);a._subscribers=null}function o(a,b){var c,d=null;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(v(b)&&(d=b.then,w(d)))return d.call(b,function(d){return c?!0:(c=!0,b!==d?p(a,d):q(a,d),void 0)},function(b){return c?!0:(c=!0,r(a,b),void 0)}),!0}catch(e){return c?!0:(r(a,e),!0)}return!1}function p(a,b){a===b?q(a,b):o(a,b)||q(a,b)}function q(a,b){a._state===D&&(a._state=E,a._detail=b,u.async(s,a))}function r(a,b){a._state===D&&(a._state=E,a._detail=b,u.async(t,a))}function s(a){n(a,a._state=F)}function t(a){n(a,a._state=G)}var u=a.config,v=(a.configure,b.objectOrFunction),w=b.isFunction,x=(b.now,c.cast),y=d.all,z=e.race,A=f.resolve,B=g.reject,C=h.asap;u.async=C;var D=void 0,E=0,F=1,G=2;j.prototype={constructor:j,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(a,b){var c=this,d=new this.constructor(function(){});if(this._state){var e=arguments;u.async(function(){l(c._state,d,e[c._state-1],c._detail)})}else m(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}},j.all=y,j.cast=x,j.race=z,j.resolve=A,j.reject=B,i.Promise=j}),a("promise/race",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to race.");return new b(function(b,c){for(var d,e=0;e<a.length;e++)d=a[e],d&&"function"==typeof d.then?d.then(b,c):b(d)})}var d=a.isArray;b.race=c}),a("promise/reject",["exports"],function(a){"use strict";function b(a){var b=this;return new b(function(b,c){c(a)})}a.reject=b}),a("promise/resolve",["exports"],function(a){"use strict";function b(a){var b=this;return new b(function(b){b(a)})}a.resolve=b}),a("promise/utils",["exports"],function(a){"use strict";function b(a){return c(a)||"object"==typeof a&&null!==a}function c(a){return"function"==typeof a}function d(a){return"[object Array]"===Object.prototype.toString.call(a)}var e=Date.now||function(){return(new Date).getTime()};a.objectOrFunction=b,a.isFunction=c,a.isArray=d,a.now=e}),b("promise/polyfill").polyfill()}();

if (typeof(Object.create) !== "function" || typeof(document.createElement("canvas").getContext) !== "function") {
    window.html2canvas = function() {
        return Promise.reject("No canvas support");
    };
    return;
}

/*! https://mths.be/punycode v1.3.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		var labels = string.split(regexSeparators);
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

var html2canvasNodeAttribute = "data-html2canvas-node";
var html2canvasCanvasCloneAttribute = "data-html2canvas-canvas-clone";
var html2canvasCanvasCloneIndex = 0;

window.html2canvas = function(nodeList, options) {
    options = options || {};
    if (options.logging) {
        window.html2canvas.logging = true;
        window.html2canvas.start = Date.now();
    }

    options.async = typeof(options.async) === "undefined" ? true : options.async;
    options.allowTaint = typeof(options.allowTaint) === "undefined" ? false : options.allowTaint;
    options.removeContainer = typeof(options.removeContainer) === "undefined" ? true : options.removeContainer;
    options.javascriptEnabled = typeof(options.javascriptEnabled) === "undefined" ? false : options.javascriptEnabled;
    options.imageTimeout = typeof(options.imageTimeout) === "undefined" ? 10000 : options.imageTimeout;
    options.pixelRatio = typeof(options.pixelRatio) === "undefined" ? 1 : options.pixelRatio;

    if (typeof(nodeList) === "string") {
        if (typeof(options.proxy) !== "string") {
            return Promise.reject("Proxy must be used when rendering url");
        }
        return loadUrlDocument(absoluteUrl(nodeList), options.proxy, document, window.innerWidth, window.innerHeight, options).then(function(container) {
            return renderWindow(container.contentWindow.document.documentElement, container, options, window.innerWidth, window.innerHeight);
        });
    }

    var node = ((nodeList === undefined) ? [document.documentElement] : ((nodeList.length) ? nodeList : [nodeList]))[0];
    node.setAttribute(html2canvasNodeAttribute, "true");
    return renderDocument(node.ownerDocument, options, node.ownerDocument.defaultView.innerWidth, node.ownerDocument.defaultView.innerHeight).then(function(canvas) {
        if (typeof(options.onrendered) === "function") {
            log("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas");
            options.onrendered(canvas);
        }
        return canvas;
    });
};

window.html2canvas.punycode = this.punycode;
window.html2canvas.proxy = {};

function renderDocument(document, options, windowWidth, windowHeight) {
    return createWindowClone(document, document, windowWidth, windowHeight, options).then(function(container) {
        log("Document cloned");
        var selector = "[" + html2canvasNodeAttribute + "='true']";
        document.querySelector(selector).removeAttribute(html2canvasNodeAttribute);
        var clonedWindow = container.contentWindow;
        var node = clonedWindow.document.querySelector(selector);
        var oncloneHandler = (typeof(options.onclone) === "function") ? Promise.resolve(options.onclone(clonedWindow.document)) : Promise.resolve(true);
        return oncloneHandler.then(function() {
            return renderWindow(node, container, options, windowWidth, windowHeight);
        });
    });
}

function renderWindow(node, container, options, windowWidth, windowHeight) {
    var clonedWindow = container.contentWindow;
    var support = new Support(clonedWindow.document);
    var imageLoader = new ImageLoader(options, support);
    var bounds = getBounds(node);
    var width = options.type === "view" ? windowWidth : documentWidth(clonedWindow.document);
    var height = options.type === "view" ? windowHeight : documentHeight(clonedWindow.document);
    var renderer = new CanvasRenderer(width, height, imageLoader, options, document);
    var parser = new NodeParser(node, renderer, support, imageLoader, options);
    return parser.ready.then(function() {
        log("Finished rendering");
        var canvas;

        if (options.type === "view") {
            canvas = crop(renderer.canvas, {width: renderer.canvas.width, height: renderer.canvas.height, top: 0, left: 0, x: 0, y: 0});
        } else if (node === clonedWindow.document.body || node === clonedWindow.document.documentElement || options.canvas != null) {
            canvas = renderer.canvas;
        } else {
            canvas = crop(renderer.canvas, {width:  options.width != null ? options.width : bounds.width * options.pixelRatio, height: options.height != null ? options.height : bounds.height * options.pixelRatio, top: bounds.top, left: bounds.left, x: clonedWindow.pageXOffset, y: clonedWindow.pageYOffset});
        }

        cleanupContainer(container, options);
        return canvas;
    });
}

function cleanupContainer(container, options) {
    if (options.removeContainer) {
        container.parentNode.removeChild(container);
        log("Cleaned up container");
    }
}

function crop(canvas, bounds) {
    var croppedCanvas = document.createElement("canvas");
    var x1 = Math.min(canvas.width - 1, Math.max(0, bounds.left));
    var x2 = Math.min(canvas.width, Math.max(1, bounds.left + bounds.width));
    var y1 = Math.min(canvas.height - 1, Math.max(0, bounds.top));
    var y2 = Math.min(canvas.height, Math.max(1, bounds.top + bounds.height));
    croppedCanvas.width = bounds.width;
    croppedCanvas.height =  bounds.height;
    log("Cropping canvas at:", "left:", bounds.left, "top:", bounds.top, "width:", (x2-x1), "height:", (y2-y1));
    log("Resulting crop with width", bounds.width, "and height", bounds.height, " with x", x1, "and y", y1);
    croppedCanvas.getContext("2d").drawImage(canvas, x1, y1, x2-x1, y2-y1, bounds.x, bounds.y, x2-x1, y2-y1);
    return croppedCanvas;
}

function documentWidth (doc) {
    return Math.max(
        Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
        Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
        Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
    );
}

function documentHeight (doc) {
    return Math.max(
        Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
        Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
        Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    );
}

function smallImage() {
    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
}

function createWindowClone(ownerDocument, containerDocument, width, height, options) {
    labelCanvasElements(ownerDocument);
    var documentElement = ownerDocument.documentElement.cloneNode(true),
        container = containerDocument.createElement("iframe");

    container.style.visibility = "hidden";
    container.style.position = "absolute";
    container.style.left = container.style.top = "-10000px";
    container.width = width;
    container.height = height;
    container.scrolling = "no"; // ios won't scroll without it
    containerDocument.body.appendChild(container);

    return new Promise(function(resolve) {
        var documentClone = container.contentWindow.document;
        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
        if window url is about:blank, we can assign the url to current by writing onto the document
         */
        container.contentWindow.onload = container.onload = function() {
            var interval = setInterval(function() {
                if (documentClone.body.childNodes.length > 0) {
                    cloneCanvasContents(ownerDocument, documentClone);
                    clearInterval(interval);
                    if (options.type === "view") {
                        container.contentWindow.scrollTo(x, y);
                    }
                    resolve(container);
                }
            }, 50);
        };

        var x = ownerDocument.defaultView.pageXOffset;
        var y = ownerDocument.defaultView.pageYOffset;

        documentClone.open();
        documentClone.write("<!DOCTYPE html><html></html>");

        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        if (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset) {
            ownerDocument.defaultView.scrollTo(x, y);
        }
        documentClone.replaceChild(options.javascriptEnabled === true ? documentClone.adoptNode(documentElement) : removeScriptNodes(documentClone.adoptNode(documentElement)), documentClone.documentElement);
        documentClone.close();
    });
}

function loadUrlDocument(src, proxy, document, width, height, options) {
    return new Proxy(src, proxy, window.document).then(documentFromHTML(src)).then(function(doc) {
        return createWindowClone(doc, document, width, height, options);
    });
}

function documentFromHTML(src) {
    return function(html) {
        var parser = new DOMParser(), doc;
        try {
            doc = parser.parseFromString(html, "text/html");
        } catch(e) {
            log("DOMParser not supported, falling back to createHTMLDocument");
            doc = document.implementation.createHTMLDocument("");
            try {
                doc.open();
                doc.write(html);
                doc.close();
            } catch(ee) {
                log("createHTMLDocument write not supported, falling back to document.body.innerHTML");
                doc.body.innerHTML = html; // ie9 doesnt support writing to documentElement
            }
        }

        var b = doc.querySelector("base");
        if (!b || !b.href.host) {
            var base = doc.createElement("base");
            base.href = src;
            doc.head.insertBefore(base, doc.head.firstChild);
        }

        return doc;
    };
}


function labelCanvasElements(ownerDocument) {
    [].slice.call(ownerDocument.querySelectorAll("canvas"), 0).forEach(function(canvas) {
        canvas.setAttribute(html2canvasCanvasCloneAttribute, "canvas-" + html2canvasCanvasCloneIndex++);
    });
}

function cloneCanvasContents(ownerDocument, documentClone) {
    [].slice.call(ownerDocument.querySelectorAll("[" + html2canvasCanvasCloneAttribute + "]"), 0).forEach(function(canvas) {
        try {
            var clonedCanvas = documentClone.querySelector('[' + html2canvasCanvasCloneAttribute + '="' + canvas.getAttribute(html2canvasCanvasCloneAttribute) + '"]');
            if (clonedCanvas) {
                clonedCanvas.width = canvas.width;
                clonedCanvas.height = canvas.height;
                clonedCanvas.getContext("2d").putImageData(canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height), 0, 0);
            }
        } catch(e) {
            log("Unable to copy canvas content from", canvas, e);
        }
        canvas.removeAttribute(html2canvasCanvasCloneAttribute);
    });
}

function removeScriptNodes(parent) {
    [].slice.call(parent.childNodes, 0).filter(isElementNode).forEach(function(node) {
        if (node.tagName === "SCRIPT") {
            parent.removeChild(node);
        } else {
            removeScriptNodes(node);
        }
    });
    return parent;
}

function isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
}

function absoluteUrl(url) {
    var link = document.createElement("a");
    link.href = url;
    link.href = link.href;
    return link;
}

function DummyImageContainer(src) {
    this.src = src;
    log("DummyImageContainer for", src);
    if (!this.promise || !this.image) {
        log("Initiating DummyImageContainer");
        DummyImageContainer.prototype.image = new Image();
        var image = this.image;
        DummyImageContainer.prototype.promise = new Promise(function(resolve, reject) {
            image.onload = resolve;
            image.onerror = reject;
            image.src = smallImage();
            if (image.complete === true) {
                resolve(image);
            }
        });
    }
}

function Font(family, size) {
    var container = document.createElement('div'),
        img = document.createElement('img'),
        span = document.createElement('span'),
        sampleText = 'Hidden Text',
        baseline,
        middle;

    container.style.visibility = "hidden";
    container.style.fontFamily = family;
    container.style.fontSize = size;
    container.style.margin = 0;
    container.style.padding = 0;

    document.body.appendChild(container);

    img.src = smallImage();
    img.width = 1;
    img.height = 1;

    img.style.margin = 0;
    img.style.padding = 0;
    img.style.verticalAlign = "baseline";

    span.style.fontFamily = family;
    span.style.fontSize = size;
    span.style.margin = 0;
    span.style.padding = 0;

    span.appendChild(document.createTextNode(sampleText));
    container.appendChild(span);
    container.appendChild(img);
    baseline = (img.offsetTop - span.offsetTop) + 1;

    container.removeChild(span);
    container.appendChild(document.createTextNode(sampleText));

    container.style.lineHeight = "normal";
    img.style.verticalAlign = "super";

    middle = (img.offsetTop-container.offsetTop) + 1;

    document.body.removeChild(container);

    this.baseline = baseline;
    this.lineWidth = 1;
    this.middle = middle;
}

function FontMetrics() {
    this.data = {};
}

FontMetrics.prototype.getMetrics = function(family, size) {
    if (this.data[family + "-" + size] === undefined) {
        this.data[family + "-" + size] = new Font(family, size);
    }
    return this.data[family + "-" + size];
};

function FrameContainer(container, sameOrigin, options) {
    this.image = null;
    this.src = container;
    var self = this;
    var bounds = getBounds(container);
    this.promise = (!sameOrigin ? this.proxyLoad(options.proxy, bounds, options) : new Promise(function(resolve) {
        if (container.contentWindow.document.URL === "about:blank" || container.contentWindow.document.documentElement == null) {
            container.contentWindow.onload = container.onload = function() {
                resolve(container);
            };
        } else {
            resolve(container);
        }
    })).then(function(container) {
        return html2canvas(container.contentWindow.document.documentElement, {type: 'view', width: container.width, height: container.height, proxy: options.proxy, javascriptEnabled: options.javascriptEnabled, removeContainer: options.removeContainer, allowTaint: options.allowTaint, imageTimeout: options.imageTimeout / 2});
    }).then(function(canvas) {
        return self.image = canvas;
    });
}

FrameContainer.prototype.proxyLoad = function(proxy, bounds, options) {
    var container = this.src;
    return loadUrlDocument(container.src, proxy, container.ownerDocument, bounds.width, bounds.height, options);
};

function GradientContainer(imageData) {
    this.src = imageData.value;
    this.colorStops = [];
    this.type = null;
    this.x0 = 0.5;
    this.y0 = 0.5;
    this.x1 = 0.5;
    this.y1 = 0.5;
    this.promise = Promise.resolve(true);
}

GradientContainer.prototype.TYPES = {
    LINEAR: 1,
    RADIAL: 2
};

function ImageContainer(src, cors) {
    this.src = src;
    this.image = new Image();
    var self = this;
    this.tainted = null;
    this.promise = new Promise(function(resolve, reject) {
        self.image.onload = resolve;
        self.image.onerror = reject;
        if (cors) {
            self.image.crossOrigin = "anonymous";
        }
        self.image.src = src;
        if (self.image.complete === true) {
            resolve(self.image);
        }
    });
}

function ImageLoader(options, support) {
    this.link = null;
    this.options = options;
    this.support = support;
    this.origin = this.getOrigin(window.location.href);
}

ImageLoader.prototype.findImages = function(nodes) {
    var images = [];
    nodes.reduce(function(imageNodes, container) {
        switch(container.node.nodeName) {
        case "IMG":
            return imageNodes.concat([{
                args: [container.node.src],
                method: "url"
            }]);
        case "svg":
        case "IFRAME":
            return imageNodes.concat([{
                args: [container.node],
                method: container.node.nodeName
            }]);
        }
        return imageNodes;
    }, []).forEach(this.addImage(images, this.loadImage), this);
    return images;
};

ImageLoader.prototype.findBackgroundImage = function(images, container) {
    container.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(images, this.loadImage), this);
    return images;
};

ImageLoader.prototype.addImage = function(images, callback) {
    return function(newImage) {
        newImage.args.forEach(function(image) {
            if (!this.imageExists(images, image)) {
                images.splice(0, 0, callback.call(this, newImage));
                log('Added image #' + (images.length), typeof(image) === "string" ? image.substring(0, 100) : image);
            }
        }, this);
    };
};

ImageLoader.prototype.hasImageBackground = function(imageData) {
    return imageData.method !== "none";
};

ImageLoader.prototype.loadImage = function(imageData) {
    if (imageData.method === "url") {
        var src = imageData.args[0];
        if (this.isSVG(src) && !this.support.svg && !this.options.allowTaint) {
            return new SVGContainer(src);
        } else if (src.match(/data:image\/.*;base64,/i)) {
            return new ImageContainer(src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, ''), false);
        } else if (this.isSameOrigin(src) || this.options.allowTaint === true || this.isSVG(src)) {
            return new ImageContainer(src, false);
        } else if (this.support.cors && !this.options.allowTaint && this.options.useCORS) {
            return new ImageContainer(src, true);
        } else if (this.options.proxy) {
            return new ProxyImageContainer(src, this.options.proxy);
        } else {
            return new DummyImageContainer(src);
        }
    } else if (imageData.method === "linear-gradient") {
        return new LinearGradientContainer(imageData);
    } else if (imageData.method === "gradient") {
        return new WebkitGradientContainer(imageData);
    } else if (imageData.method === "svg") {
        return new SVGNodeContainer(imageData.args[0], this.support.svg);
    } else if (imageData.method === "IFRAME") {
        return new FrameContainer(imageData.args[0], this.isSameOrigin(imageData.args[0].src), this.options);
    } else {
        return new DummyImageContainer(imageData);
    }
};

ImageLoader.prototype.isSVG = function(src) {
    return src.substring(src.length - 3).toLowerCase() === "svg" || SVGContainer.prototype.isInline(src);
};

ImageLoader.prototype.imageExists = function(images, src) {
    return images.some(function(image) {
        return image.src === src;
    });
};

ImageLoader.prototype.isSameOrigin = function(url) {
    return (this.getOrigin(url) === this.origin);
};

ImageLoader.prototype.getOrigin = function(url) {
    var link = this.link || (this.link = document.createElement("a"));
    link.href = url;
    link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
    return link.protocol + link.hostname + link.port;
};

ImageLoader.prototype.getPromise = function(container) {
    return this.timeout(container, this.options.imageTimeout)['catch'](function() {
        var dummy = new DummyImageContainer(container.src);
        return dummy.promise.then(function(image) {
            container.image = image;
        });
    });
};

ImageLoader.prototype.get = function(src) {
    var found = null;
    return this.images.some(function(img) {
        return (found = img).src === src;
    }) ? found : null;
};

ImageLoader.prototype.fetch = function(nodes) {
    this.images = nodes.reduce(bind(this.findBackgroundImage, this), this.findImages(nodes));
    this.images.forEach(function(image, index) {
        image.promise.then(function() {
            log("Succesfully loaded image #"+ (index+1), image);
        }, function(e) {
            log("Failed loading image #"+ (index+1), image, e);
        });
    });
    this.ready = Promise.all(this.images.map(this.getPromise, this));
    log("Finished searching images");
    return this;
};

ImageLoader.prototype.timeout = function(container, timeout) {
    var timer;
    return Promise.race([container.promise, new Promise(function(res, reject) {
        timer = setTimeout(function() {
            log("Timed out loading image", container);
            reject(container);
        }, timeout);
    })]).then(function(container) {
        clearTimeout(timer);
        return container;
    });
};

function LinearGradientContainer(imageData) {
    GradientContainer.apply(this, arguments);
    this.type = this.TYPES.LINEAR;

    var hasDirection = imageData.args[0].match(this.stepRegExp) === null;

    if (hasDirection) {
        imageData.args[0].split(" ").reverse().forEach(function(position) {
            switch(position) {
                case "left":
                    this.x0 = 0;
                    this.x1 = 1;
                    break;
                case "top":
                    this.y0 = 0;
                    this.y1 = 1;
                    break;
                case "right":
                    this.x0 = 1;
                    this.x1 = 0;
                    break;
                case "bottom":
                    this.y0 = 1;
                    this.y1 = 0;
                    break;
                case "to":
                    var y0 = this.y0;
                    var x0 = this.x0;
                    this.y0 = this.y1;
                    this.x0 = this.x1;
                    this.x1 = x0;
                    this.y1 = y0;
                    break;
            }
        }, this);
    } else {
        this.y0 = 0;
        this.y1 = 1;
    }

    this.colorStops = imageData.args.slice(hasDirection ? 1 : 0).map(function(colorStop) {
        var colorStopMatch = colorStop.match(this.stepRegExp);
        return {
            color: colorStopMatch[1],
            stop: colorStopMatch[3] === "%" ? colorStopMatch[2] / 100 : null
        };
    }, this);

    if (this.colorStops[0].stop === null) {
        this.colorStops[0].stop = 0;
    }

    if (this.colorStops[this.colorStops.length - 1].stop === null) {
        this.colorStops[this.colorStops.length - 1].stop = 1;
    }

    this.colorStops.forEach(function(colorStop, index) {
        if (colorStop.stop === null) {
            this.colorStops.slice(index).some(function(find, count) {
                if (find.stop !== null) {
                    colorStop.stop = ((find.stop - this.colorStops[index - 1].stop) / (count + 1)) + this.colorStops[index - 1].stop;
                    return true;
                } else {
                    return false;
                }
            }, this);
        }
    }, this);
}

LinearGradientContainer.prototype = Object.create(GradientContainer.prototype);

LinearGradientContainer.prototype.stepRegExp = /((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/;

function log() {
    if (window.html2canvas.logging && window.console && window.console.log) {
        Function.prototype.bind.call(window.console.log, (window.console)).apply(window.console, [(Date.now() - window.html2canvas.start) + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
    }
}

function NodeContainer(node, parent) {
    this.node = node;
    this.parent = parent;
    this.stack = null;
    this.bounds = null;
    this.borders = null;
    this.clip = [];
    this.backgroundClip = [];
    this.offsetBounds = null;
    this.visible = null;
    this.computedStyles = null;
    this.styles = {};
    this.backgroundImages = null;
    this.transformData = null;
    this.transformMatrix = null;
    this.isPseudoElement = false;
    this.opacity = null;
}

NodeContainer.prototype.cloneTo = function(stack) {
    stack.visible = this.visible;
    stack.borders = this.borders;
    stack.bounds = this.bounds;
    stack.clip = this.clip;
    stack.backgroundClip = this.backgroundClip;
    stack.computedStyles = this.computedStyles;
    stack.styles = this.styles;
    stack.backgroundImages = this.backgroundImages;
    stack.opacity = this.opacity;
};

NodeContainer.prototype.getOpacity = function() {
    return this.opacity === null ? (this.opacity = this.cssFloat('opacity')) : this.opacity;
};

NodeContainer.prototype.assignStack = function(stack) {
    this.stack = stack;
    stack.children.push(this);
};

NodeContainer.prototype.isElementVisible = function() {
    return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : (
        this.css('display') !== "none" &&
        // this.css('visibility') !== "hidden" && // removed by mitr
        !this.node.hasAttribute("data-html2canvas-ignore") &&
        (this.node.nodeName !== "INPUT" || this.node.getAttribute("type") !== "hidden")
    );
};

NodeContainer.prototype.css = function(attribute) {
    if (!this.computedStyles) {
        this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null);
    }

    return this.styles[attribute] || (this.styles[attribute] = this.computedStyles[attribute]);
};

NodeContainer.prototype.prefixedCss = function(attribute) {
    var prefixes = ["webkit", "moz", "ms", "o"];
    var value = this.css(attribute);
    if (value === undefined) {
        prefixes.some(function(prefix) {
            value = this.css(prefix + attribute.substr(0, 1).toUpperCase() + attribute.substr(1));
            return value !== undefined;
        }, this);
    }
    return value === undefined ? null : value;
};

NodeContainer.prototype.computedStyle = function(type) {
    return this.node.ownerDocument.defaultView.getComputedStyle(this.node, type);
};

NodeContainer.prototype.cssInt = function(attribute) {
    var value = parseInt(this.css(attribute), 10);
    return (isNaN(value)) ? 0 : value; // borders in old IE are throwing 'medium' for demo.html
};

NodeContainer.prototype.cssFloat = function(attribute) {
    var value = parseFloat(this.css(attribute));
    return (isNaN(value)) ? 0 : value;
};

NodeContainer.prototype.fontWeight = function() {
    var weight = this.css("fontWeight");
    switch(parseInt(weight, 10)){
    case 401:
        weight = "bold";
        break;
    case 400:
        weight = "normal";
        break;
    }
    return weight;
};

NodeContainer.prototype.parseClip = function() {
    var matches = this.css('clip').match(this.CLIP);
    if (matches) {
        return {
            top: parseInt(matches[1], 10),
            right: parseInt(matches[2], 10),
            bottom: parseInt(matches[3], 10),
            left: parseInt(matches[4], 10)
        };
    }
    return null;
};

NodeContainer.prototype.parseBackgroundImages = function() {
    return this.backgroundImages || (this.backgroundImages = parseBackgrounds(this.css("backgroundImage")));
};

NodeContainer.prototype.cssList = function(property, index) {
    var value = (this.css(property) || '').split(',');
    value = value[index || 0] || value[0] || 'auto';
    value = value.trim().split(' ');
    if (value.length === 1) {
        value = [value[0], value[0]];
    }
    return value;
};

NodeContainer.prototype.parseBackgroundSize = function(bounds, image, index) {
    var size = this.cssList("backgroundSize", index);
    var width, height;

    if (isPercentage(size[0])) {
        width = bounds.width * parseFloat(size[0]) / 100;
    } else if (/contain|cover/.test(size[0])) {
        var targetRatio = bounds.width / bounds.height, currentRatio = image.width / image.height;
        return (targetRatio < currentRatio ^ size[0] === 'contain') ?  {width: bounds.height * currentRatio, height: bounds.height} : {width: bounds.width, height: bounds.width / currentRatio};
    } else {
        width = parseInt(size[0], 10);
    }

    if (size[0] === 'auto' && size[1] === 'auto') {
        height = image.height;
    } else if (size[1] === 'auto') {
        height = width / image.width * image.height;
    } else if (isPercentage(size[1])) {
        height =  bounds.height * parseFloat(size[1]) / 100;
    } else {
        height = parseInt(size[1], 10);
    }

    if (size[0] === 'auto') {
        width = height / image.height * image.width;
    }

    return {width: width, height: height};
};

NodeContainer.prototype.parseBackgroundPosition = function(bounds, image, index, backgroundSize) {
    var position = this.cssList('backgroundPosition', index);
    var left, top;

    if (isPercentage(position[0])){
        left = (bounds.width - (backgroundSize || image).width) * (parseFloat(position[0]) / 100);
    } else {
        left = parseInt(position[0], 10);
    }

    if (position[1] === 'auto') {
        top = left / image.width * image.height;
    } else if (isPercentage(position[1])){
        top =  (bounds.height - (backgroundSize || image).height) * parseFloat(position[1]) / 100;
    } else {
        top = parseInt(position[1], 10);
    }

    if (position[0] === 'auto') {
        left = top / image.height * image.width;
    }

    return {left: left, top: top};
};

NodeContainer.prototype.parseBackgroundRepeat = function(index) {
    return this.cssList("backgroundRepeat", index)[0];
};

NodeContainer.prototype.parseTextShadows = function() {
    var textShadow = this.css("textShadow");
    var results = [];

    if (textShadow && textShadow !== 'none') {
        var shadows = textShadow.match(this.TEXT_SHADOW_PROPERTY);
        for (var i = 0; shadows && (i < shadows.length); i++) {
            var s = shadows[i].match(this.TEXT_SHADOW_VALUES);
            results.push({
                color: s[0],
                offsetX: s[1] ? parseFloat(s[1].replace('px', '')) : 0,
                offsetY: s[2] ? parseFloat(s[2].replace('px', '')) : 0,
                blur: s[3] ? s[3].replace('px', '') : 0
            });
        }
    }
    return results;
};

NodeContainer.prototype.parseTransform = function() {
    if (!this.transformData) {
        if (this.hasTransform()) {
            var offset = this.parseBounds();
            var origin = this.prefixedCss("transformOrigin").split(" ").map(removePx).map(asFloat);
            origin[0] += offset.left;
            origin[1] += offset.top;
            this.transformData = {
                origin: origin,
                matrix: this.parseTransformMatrix()
            };
        } else {
            this.transformData = {
                origin: [0, 0],
                matrix: [1, 0, 0, 1, 0, 0]
            };
        }
    }
    return this.transformData;
};

NodeContainer.prototype.parseTransformMatrix = function() {
    if (!this.transformMatrix) {
        var transform = this.prefixedCss("transform");
        var matrix = transform ? parseMatrix(transform.match(this.MATRIX_PROPERTY)) : null;
        this.transformMatrix = matrix ? matrix : [1, 0, 0, 1, 0, 0];
    }
    return this.transformMatrix;
};

NodeContainer.prototype.parseBounds = function() {
    return this.bounds || (this.bounds = this.hasTransform() ? offsetBounds(this.node) : getBounds(this.node));
};

NodeContainer.prototype.hasTransform = function() {
    return this.parseTransformMatrix().join(",") !== "1,0,0,1,0,0" || (this.parent && this.parent.hasTransform());
};

NodeContainer.prototype.getValue = function() {
    var value = this.node.value || "";
    value = (this.node.tagName === "SELECT") ? selectionValue(this.node) : value;
    return value.length === 0 ? (this.node.placeholder || "") : value;
};

NodeContainer.prototype.MATRIX_PROPERTY = /(matrix)\((.+)\)/;
NodeContainer.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
NodeContainer.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
NodeContainer.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/;

function selectionValue(node) {
    var option = node.options[node.selectedIndex || 0];
    return option ? (option.text || "") : "";
}

function parseMatrix(match) {
    if (match && match[1] === "matrix") {
        return match[2].split(",").map(function(s) {
            return parseFloat(s.trim());
        });
    }
}

function isPercentage(value) {
    return value.toString().indexOf("%") !== -1;
}

function parseBackgrounds(backgroundImage) {
    var whitespace = ' \r\n\t',
        method, definition, prefix, prefix_i, block, results = [],
        mode = 0, numParen = 0, quote, args;
    var appendResult = function() {
        if(method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }
            if (definition) {
                args.push(definition);
            }
            if (method.substr(0, 1) === '-' && (prefix_i = method.indexOf('-', 1 ) + 1) > 0) {
                prefix = method.substr(0, prefix_i);
                method = method.substr(prefix_i);
            }
            results.push({
                prefix: prefix,
                method: method.toLowerCase(),
                value: block,
                args: args,
                image: null
            });
        }
        args = [];
        method = prefix = definition = block = '';
    };
    args = [];
    method = prefix = definition = block = '';
    backgroundImage.split("").forEach(function(c) {
        if (mode === 0 && whitespace.indexOf(c) > -1) {
            return;
        }
        switch(c) {
        case '"':
            if(!quote) {
                quote = c;
            } else if(quote === c) {
                quote = null;
            }
            break;
        case '(':
            if(quote) {
                break;
            } else if(mode === 0) {
                mode = 1;
                block += c;
                return;
            } else {
                numParen++;
            }
            break;
        case ')':
            if (quote) {
                break;
            } else if(mode === 1) {
                if(numParen === 0) {
                    mode = 0;
                    block += c;
                    appendResult();
                    return;
                } else {
                    numParen--;
                }
            }
            break;

        case ',':
            if (quote) {
                break;
            } else if(mode === 0) {
                appendResult();
                return;
            } else if (mode === 1) {
                if (numParen === 0 && !method.match(/^url$/i)) {
                    args.push(definition);
                    definition = '';
                    block += c;
                    return;
                }
            }
            break;
        }

        block += c;
        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
}

function removePx(str) {
    return str.replace("px", "");
}

function asFloat(str) {
    return parseFloat(str);
}

function getBounds(node) {
    if (node.getBoundingClientRect) {
        var clientRect = node.getBoundingClientRect();
        var width = node.offsetWidth == null ? clientRect.width : node.offsetWidth;
        return {
            top: clientRect.top,
            bottom: clientRect.bottom || (clientRect.top + clientRect.height),
            right: clientRect.left + width,
            left: clientRect.left,
            width:  width,
            height: node.offsetHeight == null ? clientRect.height : node.offsetHeight
        };
    }
    return {};
}

function offsetBounds(node) {
    var parent = node.offsetParent ? offsetBounds(node.offsetParent) : {top: 0, left: 0};

    return {
        top: node.offsetTop + parent.top,
        bottom: node.offsetTop + node.offsetHeight + parent.top,
        right: node.offsetLeft + parent.left + node.offsetWidth,
        left: node.offsetLeft + parent.left,
        width: node.offsetWidth,
        height: node.offsetHeight
    };
}

function NodeParser(element, renderer, support, imageLoader, options) {
    log("Starting NodeParser");
    this.renderer = renderer;
    this.options = options;
    this.range = null;
    this.support = support;
    this.renderQueue = [];
    this.stack = new StackingContext(true, 1, element.ownerDocument, null);
    var parent = new NodeContainer(element, null);
    if (element === element.ownerDocument.documentElement) {
        // http://www.w3.org/TR/css3-background/#special-backgrounds
        var canvasBackground = new NodeContainer(this.renderer.isTransparent(parent.css('backgroundColor')) ? element.ownerDocument.body : element.ownerDocument.documentElement, null);
        renderer.rectangle(0, 0, renderer.width, renderer.height, canvasBackground.css('backgroundColor'));
    }
    parent.visibile = parent.isElementVisible();
    this.createPseudoHideStyles(element.ownerDocument);
    this.disableAnimations(element.ownerDocument);
    this.nodes = flatten([parent].concat(this.getChildren(parent)).filter(function(container) {
        return container.visible = container.isElementVisible();
    }).map(this.getPseudoElements, this));
    this.fontMetrics = new FontMetrics();
    log("Fetched nodes, total:", this.nodes.length);
    log("Calculate overflow clips");
    this.calculateOverflowClips();
    log("Start fetching images");
    this.images = imageLoader.fetch(this.nodes.filter(isElement));
    this.ready = this.images.ready.then(bind(function() {
        log("Images loaded, starting parsing");
        log("Creating stacking contexts");
        this.createStackingContexts();
        log("Sorting stacking contexts");
        this.sortStackingContexts(this.stack);
        this.parse(this.stack);
        log("Render queue created with " + this.renderQueue.length + " items");
        return new Promise(bind(function(resolve) {
            if (!options.async) {
                this.renderQueue.forEach(this.paint, this);
                resolve();
            } else if (typeof(options.async) === "function") {
                options.async.call(this, this.renderQueue, resolve);
            } else if (this.renderQueue.length > 0){
                this.renderIndex = 0;
                this.asyncRenderer(this.renderQueue, resolve);
            } else {
                resolve();
            }
        }, this));
    }, this));
}

NodeParser.prototype.calculateOverflowClips = function() {
    this.nodes.forEach(function(container) {
        if (isElement(container)) {
            if (isPseudoElement(container)) {
                container.appendToDOM();
            }
            container.borders = this.parseBorders(container);
            var clip = (container.css('overflow') === "hidden") ? [container.borders.clip] : [];
            var cssClip = container.parseClip();
            if (cssClip && ["absolute", "fixed"].indexOf(container.css('position')) !== -1) {
                clip.push([["rect",
                        container.bounds.left + cssClip.left,
                        container.bounds.top + cssClip.top,
                        cssClip.right - cssClip.left,
                        cssClip.bottom - cssClip.top
                ]]);
            }
            container.clip = hasParentClip(container) ? container.parent.clip.concat(clip) : clip;
            container.backgroundClip = (container.css('overflow') !== "hidden") ? container.clip.concat([container.borders.clip]) : container.clip;
            if (isPseudoElement(container)) {
                container.cleanDOM();
            }
        } else if (isTextNode(container)) {
            container.clip = hasParentClip(container) ? container.parent.clip : [];
        }
        if (!isPseudoElement(container)) {
            container.bounds = null;
        }
    }, this);
};

function hasParentClip(container) {
    return container.parent && container.parent.clip.length;
}

NodeParser.prototype.asyncRenderer = function(queue, resolve, asyncTimer) {
    asyncTimer = asyncTimer || Date.now();
    this.paint(queue[this.renderIndex++]);
    if (queue.length === this.renderIndex) {
        resolve();
    } else if (asyncTimer + 20 > Date.now()) {
        this.asyncRenderer(queue, resolve, asyncTimer);
    } else {
        setTimeout(bind(function() {
            this.asyncRenderer(queue, resolve);
        }, this), 0);
    }
};

NodeParser.prototype.createPseudoHideStyles = function(document) {
    this.createStyles(document, '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }' +
        '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }');
};

NodeParser.prototype.disableAnimations = function(document) {
    this.createStyles(document, '* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; ' +
        '-webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}');
};

NodeParser.prototype.createStyles = function(document, styles) {
    var hidePseudoElements = document.createElement('style');
    hidePseudoElements.innerHTML = styles;
    document.body.appendChild(hidePseudoElements);
};

NodeParser.prototype.getPseudoElements = function(container) {
    var nodes = [[container]];
    if (container.node.nodeType === Node.ELEMENT_NODE) {
        var before = this.getPseudoElement(container, ":before");
        var after = this.getPseudoElement(container, ":after");

        if (before) {
            nodes.push(before);
        }

        if (after) {
            nodes.push(after);
        }
    }
    return flatten(nodes);
};

function toCamelCase(str) {
    return str.replace(/(\-[a-z])/g, function(match){
        return match.toUpperCase().replace('-','');
    });
}

NodeParser.prototype.getPseudoElement = function(container, type) {
    var style = container.computedStyle(type);
    if(!style || !style.content || style.content === "none" || style.content === "-moz-alt-content" || style.display === "none") {
        return null;
    }

    var content = stripQuotes(style.content);
    var isImage = content.substr(0, 3) === 'url';
    var pseudoNode = document.createElement(isImage ? 'img' : 'html2canvaspseudoelement');
    var pseudoContainer = new PseudoElementContainer(pseudoNode, container, type);

    for (var i = style.length-1; i >= 0; i--) {
        var property = toCamelCase(style.item(i));
        pseudoNode.style[property] = style[property];
    }

    pseudoNode.className = PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER;

    if (isImage) {
        pseudoNode.src = parseBackgrounds(content)[0].args[0];
        return [pseudoContainer];
    } else {
        var text = document.createTextNode(content);
        pseudoNode.appendChild(text);
        return [pseudoContainer, new TextContainer(text, pseudoContainer)];
    }
};


NodeParser.prototype.getChildren = function(parentContainer) {
    return flatten([].filter.call(parentContainer.node.childNodes, renderableNode).map(function(node) {
        var container = [node.nodeType === Node.TEXT_NODE ? new TextContainer(node, parentContainer) : new NodeContainer(node, parentContainer)].filter(nonIgnoredElement);
        return node.nodeType === Node.ELEMENT_NODE && container.length && node.tagName !== "TEXTAREA" ? (container[0].isElementVisible() ? container.concat(this.getChildren(container[0])) : []) : container;
    }, this));
};

NodeParser.prototype.newStackingContext = function(container, hasOwnStacking) {
    var stack = new StackingContext(hasOwnStacking, container.getOpacity(), container.node, container.parent);
    container.cloneTo(stack);
    var parentStack = hasOwnStacking ? stack.getParentStack(this) : stack.parent.stack;
    parentStack.contexts.push(stack);
    container.stack = stack;
};

NodeParser.prototype.createStackingContexts = function() {
    this.nodes.forEach(function(container) {
        if (isElement(container) && (this.isRootElement(container) || hasOpacity(container) || isPositionedForStacking(container) || this.isBodyWithTransparentRoot(container) || container.hasTransform())) {
            this.newStackingContext(container, true);
        } else if (isElement(container) && ((isPositioned(container) && zIndex0(container)) || isInlineBlock(container) || isFloating(container))) {
            this.newStackingContext(container, false);
        } else {
            container.assignStack(container.parent.stack);
        }
    }, this);
};

NodeParser.prototype.isBodyWithTransparentRoot = function(container) {
    return container.node.nodeName === "BODY" && this.renderer.isTransparent(container.parent.css('backgroundColor'));
};

NodeParser.prototype.isRootElement = function(container) {
    return container.parent === null;
};

NodeParser.prototype.sortStackingContexts = function(stack) {
    stack.contexts.sort(zIndexSort(stack.contexts.slice(0)));
    stack.contexts.forEach(this.sortStackingContexts, this);
};

NodeParser.prototype.parseTextBounds = function(container) {
    return function(text, index, textList) {
        if (container.parent.css("textDecoration").substr(0, 4) !== "none" || text.trim().length !== 0) {
            if (this.support.rangeBounds && !container.parent.hasTransform()) {
                var offset = textList.slice(0, index).join("").length;
                return this.getRangeBounds(container.node, offset, text.length);
            } else if (container.node && typeof(container.node.data) === "string") {
                var replacementNode = container.node.splitText(text.length);
                var bounds = this.getWrapperBounds(container.node, container.parent.hasTransform());
                container.node = replacementNode;
                return bounds;
            }
        } else if(!this.support.rangeBounds || container.parent.hasTransform()){
            container.node = container.node.splitText(text.length);
        }
        return {};
    };
};

NodeParser.prototype.getWrapperBounds = function(node, transform) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    var parent = node.parentNode,
        backupText = node.cloneNode(true);

    wrapper.appendChild(node.cloneNode(true));
    parent.replaceChild(wrapper, node);
    var bounds = transform ? offsetBounds(wrapper) : getBounds(wrapper);
    parent.replaceChild(backupText, wrapper);
    return bounds;
};

NodeParser.prototype.getRangeBounds = function(node, offset, length) {
    var range = this.range || (this.range = node.ownerDocument.createRange());
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return range.getBoundingClientRect();
};

function ClearTransform() {}

NodeParser.prototype.parse = function(stack) {
    // http://www.w3.org/TR/CSS21/visuren.html#z-index
    var negativeZindex = stack.contexts.filter(negativeZIndex); // 2. the child stacking contexts with negative stack levels (most negative first).
    var descendantElements = stack.children.filter(isElement);
    var descendantNonFloats = descendantElements.filter(not(isFloating));
    var nonInlineNonPositionedDescendants = descendantNonFloats.filter(not(isPositioned)).filter(not(inlineLevel)); // 3 the in-flow, non-inline-level, non-positioned descendants.
    var nonPositionedFloats = descendantElements.filter(not(isPositioned)).filter(isFloating); // 4. the non-positioned floats.
    var inFlow = descendantNonFloats.filter(not(isPositioned)).filter(inlineLevel); // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
    var stackLevel0 = stack.contexts.concat(descendantNonFloats.filter(isPositioned)).filter(zIndex0); // 6. the child stacking contexts with stack level 0 and the positioned descendants with stack level 0.
    var text = stack.children.filter(isTextNode).filter(hasText);
    var positiveZindex = stack.contexts.filter(positiveZIndex); // 7. the child stacking contexts with positive stack levels (least positive first).
    negativeZindex.concat(nonInlineNonPositionedDescendants).concat(nonPositionedFloats)
        .concat(inFlow).concat(stackLevel0).concat(text).concat(positiveZindex).forEach(function(container) {
            this.renderQueue.push(container);
            if (isStackingContext(container)) {
                this.parse(container);
                this.renderQueue.push(new ClearTransform());
            }
        }, this);
};

NodeParser.prototype.paint = function(container) {
    try {
        if (container instanceof ClearTransform) {
            this.renderer.ctx.restore();
        } else if (isTextNode(container)) {
            if (isPseudoElement(container.parent)) {
                container.parent.appendToDOM();
            }
            this.paintText(container);
            if (isPseudoElement(container.parent)) {
                container.parent.cleanDOM();
            }
        } else {
            this.paintNode(container);
        }
    } catch(e) {
        log(e);
    }
};

NodeParser.prototype.paintNode = function(container) {
    if (isStackingContext(container)) {
        this.renderer.setOpacity(container.opacity);
        this.renderer.ctx.save();
        if (container.hasTransform()) {
            this.renderer.setTransform(container.parseTransform());
        }
    }

    var bounds = container.parseBounds();
    this.renderer.clip(container.backgroundClip, function() {
        this.renderer.renderBackground(container, bounds, container.borders.borders.map(getWidth));
    }, this);

    this.renderer.clip(container.clip, function() {
        this.renderer.renderBorders(container.borders.borders);
    }, this);

    this.renderer.clip(container.backgroundClip, function() {
        switch (container.node.nodeName) {
        case "svg":
        case "IFRAME":
            var imgContainer = this.images.get(container.node);
            if (imgContainer) {
                this.renderer.renderImage(container, bounds, container.borders, imgContainer);
            } else {
                log("Error loading <" + container.node.nodeName + ">", container.node);
            }
            break;
        case "IMG":
            var imageContainer = this.images.get(container.node.src);
            if (imageContainer) {
                this.renderer.renderImage(container, bounds, container.borders, imageContainer);
            } else {
                log("Error loading <img>", container.node.src);
            }
            break;
        case "CANVAS":
            this.renderer.renderImage(container, bounds, container.borders, {image: container.node});
            break;
        case "SELECT":
        case "INPUT":
        case "TEXTAREA":
            this.paintFormValue(container);
            break;
        }
    }, this);
};

NodeParser.prototype.paintFormValue = function(container) {
    if (container.getValue().length > 0) {
        var document = container.node.ownerDocument;
        var wrapper = document.createElement('html2canvaswrapper');
        var properties = ['lineHeight', 'textAlign', 'fontFamily', 'fontWeight', 'fontSize', 'color',
            'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom',
            'width', 'height', 'borderLeftStyle', 'borderTopStyle', 'borderLeftWidth', 'borderTopWidth',
            'boxSizing', 'whiteSpace', 'wordWrap'];

        properties.forEach(function(property) {
            try {
                wrapper.style[property] = container.css(property);
            } catch(e) {
                // Older IE has issues with "border"
                log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
            }
        });
        var bounds = container.parseBounds();
        wrapper.style.position = "fixed";
        wrapper.style.left = bounds.left + "px";
        wrapper.style.top = bounds.top + "px";
        wrapper.textContent = container.getValue();
        document.body.appendChild(wrapper);
        this.paintText(new TextContainer(wrapper.firstChild, container));
        document.body.removeChild(wrapper);
    }
};

NodeParser.prototype.paintText = function(container) {
    container.applyTextTransform();
    var characters = window.html2canvas.punycode.ucs2.decode(container.node.data);
    var textList = (!this.options.letterRendering || noLetterSpacing(container)) && !hasUnicode(container.node.data) ? getWords(characters) : characters.map(function(character) {
        return window.html2canvas.punycode.ucs2.encode([character]);
    });

    var weight = container.parent.fontWeight();
    var size = container.parent.css('fontSize');
    var family = container.parent.css('fontFamily');
    var shadows = container.parent.parseTextShadows();

    this.renderer.font(container.parent.css('color'), container.parent.css('fontStyle'), container.parent.css('fontVariant'), weight, size, family);
    if (shadows.length) {
        // TODO: support multiple text shadows
        this.renderer.fontShadow(shadows[0].color, shadows[0].offsetX, shadows[0].offsetY, shadows[0].blur);
    } else {
        this.renderer.clearShadow();
    }

    this.renderer.clip(container.parent.clip, function() {
        textList.map(this.parseTextBounds(container), this).forEach(function(bounds, index) {
            if (bounds) {
                this.renderer.text(textList[index], bounds.left, bounds.bottom);
                this.renderTextDecoration(container.parent, bounds, this.fontMetrics.getMetrics(family, size));
            }
        }, this);
    }, this);
};

NodeParser.prototype.renderTextDecoration = function(container, bounds, metrics) {
    switch(container.css("textDecoration").split(" ")[0]) {
    case "underline":
        // Draws a line at the baseline of the font
        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
        this.renderer.rectangle(bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, container.css("color"));
        break;
    case "overline":
        this.renderer.rectangle(bounds.left, Math.round(bounds.top), bounds.width, 1, container.css("color"));
        break;
    case "line-through":
        // TODO try and find exact position for line-through
        this.renderer.rectangle(bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, container.css("color"));
        break;
    }
};

NodeParser.prototype.parseBorders = function(container) {
    var nodeBounds = container.parseBounds();
    var radius = getBorderRadiusData(container);
    var borders = ["Top", "Right", "Bottom", "Left"].map(function(side) {
        return {
            width: container.cssInt('border' + side + 'Width'),
            color: container.css('border' + side + 'Color'),
            args: null
        };
    });
    var borderPoints = calculateCurvePoints(nodeBounds, radius, borders);

    return {
        clip: this.parseBackgroundClip(container, borderPoints, borders, radius, nodeBounds),
        borders: borders.map(function(border, borderSide) {
            if (border.width > 0) {
                var bx = nodeBounds.left;
                var by = nodeBounds.top;
                var bw = nodeBounds.width;
                var bh = nodeBounds.height - (borders[2].width);

                switch(borderSide) {
                case 0:
                    // top border
                    bh = borders[0].width;
                    border.args = drawSide({
                        c1: [bx, by],
                        c2: [bx + bw, by],
                        c3: [bx + bw - borders[1].width, by + bh],
                        c4: [bx + borders[3].width, by + bh]
                    }, radius[0], radius[1],
                    borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
                    break;
                case 1:
                    // right border
                    bx = nodeBounds.left + nodeBounds.width - (borders[1].width);
                    bw = borders[1].width;

                    border.args = drawSide({
                        c1: [bx + bw, by],
                        c2: [bx + bw, by + bh + borders[2].width],
                        c3: [bx, by + bh],
                        c4: [bx, by + borders[0].width]
                    }, radius[1], radius[2],
                    borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
                    break;
                case 2:
                    // bottom border
                    by = (by + nodeBounds.height) - (borders[2].width);
                    bh = borders[2].width;
                    border.args = drawSide({
                        c1: [bx + bw, by + bh],
                        c2: [bx, by + bh],
                        c3: [bx + borders[3].width, by],
                        c4: [bx + bw - borders[3].width, by]
                    }, radius[2], radius[3],
                    borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
                    break;
                case 3:
                    // left border
                    bw = borders[3].width;
                    border.args = drawSide({
                        c1: [bx, by + bh + borders[2].width],
                        c2: [bx, by],
                        c3: [bx + bw, by + borders[0].width],
                        c4: [bx + bw, by + bh]
                    }, radius[3], radius[0],
                    borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
                    break;
                }
            }
            return border;
        })
    };
};

NodeParser.prototype.parseBackgroundClip = function(container, borderPoints, borders, radius, bounds) {
    var backgroundClip = container.css('backgroundClip'),
        borderArgs = [];

    switch(backgroundClip) {
    case "content-box":
    case "padding-box":
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
        break;

    default:
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
        break;
    }

    return borderArgs;
};

function getCurvePoints(x, y, r1, r2) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = (r1) * kappa, // control point offset horizontal
        oy = (r2) * kappa, // control point offset vertical
        xm = x + r1, // x-middle
        ym = y + r2; // y-middle
    return {
        topLeft: bezierCurve({x: x, y: ym}, {x: x, y: ym - oy}, {x: xm - ox, y: y}, {x: xm, y: y}),
        topRight: bezierCurve({x: x, y: y}, {x: x + ox,y: y}, {x: xm, y: ym - oy}, {x: xm, y: ym}),
        bottomRight: bezierCurve({x: xm, y: y}, {x: xm, y: y + oy}, {x: x + ox, y: ym}, {x: x, y: ym}),
        bottomLeft: bezierCurve({x: xm, y: ym}, {x: xm - ox, y: ym}, {x: x, y: y + oy}, {x: x, y:y})
    };
}

function calculateCurvePoints(bounds, borderRadius, borders) {
    var x = bounds.left,
        y = bounds.top,
        width = bounds.width,
        height = bounds.height,

        tlh = borderRadius[0][0],
        tlv = borderRadius[0][1],
        trh = borderRadius[1][0],
        trv = borderRadius[1][1],
        brh = borderRadius[2][0],
        brv = borderRadius[2][1],
        blh = borderRadius[3][0],
        blv = borderRadius[3][1];

    var topWidth = width - trh,
        rightHeight = height - brv,
        bottomWidth = width - brh,
        leftHeight = height - blv;

    return {
        topLeftOuter: getCurvePoints(x, y, tlh, tlv).topLeft.subdivide(0.5),
        topLeftInner: getCurvePoints(x + borders[3].width, y + borders[0].width, Math.max(0, tlh - borders[3].width), Math.max(0, tlv - borders[0].width)).topLeft.subdivide(0.5),
        topRightOuter: getCurvePoints(x + topWidth, y, trh, trv).topRight.subdivide(0.5),
        topRightInner: getCurvePoints(x + Math.min(topWidth, width + borders[3].width), y + borders[0].width, (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width, trv - borders[0].width).topRight.subdivide(0.5),
        bottomRightOuter: getCurvePoints(x + bottomWidth, y + rightHeight, brh, brv).bottomRight.subdivide(0.5),
        bottomRightInner: getCurvePoints(x + Math.min(bottomWidth, width - borders[3].width), y + Math.min(rightHeight, height + borders[0].width), Math.max(0, brh - borders[1].width),  brv - borders[2].width).bottomRight.subdivide(0.5),
        bottomLeftOuter: getCurvePoints(x, y + leftHeight, blh, blv).bottomLeft.subdivide(0.5),
        bottomLeftInner: getCurvePoints(x + borders[3].width, y + leftHeight, Math.max(0, blh - borders[3].width), blv - borders[2].width).bottomLeft.subdivide(0.5)
    };
}

function bezierCurve(start, startControl, endControl, end) {
    var lerp = function (a, b, t) {
        return {
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t
        };
    };

    return {
        start: start,
        startControl: startControl,
        endControl: endControl,
        end: end,
        subdivide: function(t) {
            var ab = lerp(start, startControl, t),
                bc = lerp(startControl, endControl, t),
                cd = lerp(endControl, end, t),
                abbc = lerp(ab, bc, t),
                bccd = lerp(bc, cd, t),
                dest = lerp(abbc, bccd, t);
            return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
        },
        curveTo: function(borderArgs) {
            borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
        },
        curveToReversed: function(borderArgs) {
            borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
        }
    };
}

function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
    var borderArgs = [];

    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
        outer1[1].curveTo(borderArgs);
    } else {
        borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
        outer2[0].curveTo(borderArgs);
        borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
        inner2[0].curveToReversed(borderArgs);
    } else {
        borderArgs.push(["line", borderData.c2[0], borderData.c2[1]]);
        borderArgs.push(["line", borderData.c3[0], borderData.c3[1]]);
    }

    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
        inner1[1].curveToReversed(borderArgs);
    } else {
        borderArgs.push(["line", borderData.c4[0], borderData.c4[1]]);
    }

    return borderArgs;
}

function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
        corner1[0].curveTo(borderArgs);
        corner1[1].curveTo(borderArgs);
    } else {
        borderArgs.push(["line", x, y]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
    }
}

function negativeZIndex(container) {
    return container.cssInt("zIndex") < 0;
}

function positiveZIndex(container) {
    return container.cssInt("zIndex") > 0;
}

function zIndex0(container) {
    return container.cssInt("zIndex") === 0;
}

function inlineLevel(container) {
    return ["inline", "inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
}

function isStackingContext(container) {
    return (container instanceof StackingContext);
}

function hasText(container) {
    return container.node.data.trim().length > 0;
}

function noLetterSpacing(container) {
    return (/^(normal|none|0px)$/.test(container.parent.css("letterSpacing")));
}

function getBorderRadiusData(container) {
    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
        var value = container.css('border' + side + 'Radius');
        var arr = value.split(" ");
        if (arr.length <= 1) {
            arr[1] = arr[0];
        }
        return arr.map(asInt);
    });
}

function renderableNode(node) {
    return (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE);
}

function isPositionedForStacking(container) {
    var position = container.css("position");
    var zIndex = (["absolute", "relative", "fixed"].indexOf(position) !== -1) ? container.css("zIndex") : "auto";
    return zIndex !== "auto";
}

function isPositioned(container) {
    return container.css("position") !== "static";
}

function isFloating(container) {
    return container.css("float") !== "none";
}

function isInlineBlock(container) {
    return ["inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
}

function not(callback) {
    var context = this;
    return function() {
        return !callback.apply(context, arguments);
    };
}

function isElement(container) {
    return container.node.nodeType === Node.ELEMENT_NODE;
}

function isPseudoElement(container) {
    return container.isPseudoElement === true;
}

function isTextNode(container) {
    return container.node.nodeType === Node.TEXT_NODE;
}

function zIndexSort(contexts) {
    return function(a, b) {
        return (a.cssInt("zIndex") + (contexts.indexOf(a) / contexts.length)) - (b.cssInt("zIndex") + (contexts.indexOf(b) / contexts.length));
    };
}

function hasOpacity(container) {
    return container.getOpacity() < 1;
}

function bind(callback, context) {
    return function() {
        return callback.apply(context, arguments);
    };
}

function asInt(value) {
    return parseInt(value, 10);
}

function getWidth(border) {
    return border.width;
}

function nonIgnoredElement(nodeContainer) {
    return (nodeContainer.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(nodeContainer.node.nodeName) === -1);
}

function flatten(arrays) {
    return [].concat.apply([], arrays);
}

function stripQuotes(content) {
    var first = content.substr(0, 1);
    return (first === content.substr(content.length - 1) && first.match(/'|"/)) ? content.substr(1, content.length - 2) : content;
}

function getWords(characters) {
    var words = [], i = 0, onWordBoundary = false, word;
    while(characters.length) {
        if (isWordBoundary(characters[i]) === onWordBoundary) {
            word = characters.splice(0, i);
            if (word.length) {
                words.push(window.html2canvas.punycode.ucs2.encode(word));
            }
            onWordBoundary =! onWordBoundary;
            i = 0;
        } else {
            i++;
        }

        if (i >= characters.length) {
            word = characters.splice(0, i);
            if (word.length) {
                words.push(window.html2canvas.punycode.ucs2.encode(word));
            }
        }
    }
    return words;
}

function isWordBoundary(characterCode) {
    return [
        32, // <space>
        13, // \r
        10, // \n
        9, // \t
        45 // -
    ].indexOf(characterCode) !== -1;
}

function hasUnicode(string) {
    return (/[^\u0000-\u00ff]/).test(string);
}

function Proxy(src, proxyUrl, document) {
    var callback = createCallback(supportsCORS);
    var url = createProxyUrl(proxyUrl, src, callback);

    return supportsCORS ? XHR(url) : (jsonp(document, url, callback).then(function(response) {
        return decode64(response.content);
    }));
}
var proxyCount = 0;

var supportsCORS = ('withCredentials' in new XMLHttpRequest());
var supportsCORSImage = ('crossOrigin' in new Image());

function ProxyURL(src, proxyUrl, document) {
    var callback = createCallback(supportsCORSImage);
    var url = createProxyUrl(proxyUrl, src, callback);
    return (supportsCORSImage ? Promise.resolve(url) : jsonp(document, url, callback).then(function(response) {
        return "data:" + response.type + ";base64," + response.content;
    }));
}

function jsonp(document, url, callback) {
    return new Promise(function(resolve, reject) {
        var s = document.createElement("script");
        var cleanup = function() {
            delete window.html2canvas.proxy[callback];
            document.body.removeChild(s);
        };
        window.html2canvas.proxy[callback] = function(response) {
            cleanup();
            resolve(response);
        };
        s.src = url;
        s.onerror = function(e) {
            cleanup();
            reject(e);
        };
        document.body.appendChild(s);
    });
}

function createCallback(useCORS) {
    return !useCORS ? "html2canvas_" + Date.now() + "_" + (++proxyCount) + "_" + Math.round(Math.random() * 100000) : "";
}

function createProxyUrl(proxyUrl, src, callback) {
    return proxyUrl + "?url=" + encodeURIComponent(src) + (callback.length ? "&callback=html2canvas.proxy." + callback : "");
}

function ProxyImageContainer(src, proxy) {
    var script = document.createElement("script");
    var link = document.createElement("a");
    link.href = src;
    src = link.href;
    this.src = src;
    this.image = new Image();
    var self = this;
    this.promise = new Promise(function(resolve, reject) {
        self.image.crossOrigin = "Anonymous";
        self.image.onload = resolve;
        self.image.onerror = reject;

        new ProxyURL(src, proxy, document).then(function(url) {
            self.image.src = url;
        })['catch'](reject);
    });
}

function PseudoElementContainer(node, parent, type) {
    NodeContainer.call(this, node, parent);
    this.isPseudoElement = true;
    this.before = type === ":before";
}

PseudoElementContainer.prototype.cloneTo = function(stack) {
    PseudoElementContainer.prototype.cloneTo.call(this, stack);
    stack.isPseudoElement = true;
    stack.before = this.before;
};

PseudoElementContainer.prototype = Object.create(NodeContainer.prototype);

PseudoElementContainer.prototype.appendToDOM = function() {
    if (this.before) {
        this.parent.node.insertBefore(this.node, this.parent.node.firstChild);
    } else {
        this.parent.node.appendChild(this.node);
    }
    this.parent.node.className += " " + this.getHideClass();
};

PseudoElementContainer.prototype.cleanDOM = function() {
    this.node.parentNode.removeChild(this.node);
    this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "");
};

PseudoElementContainer.prototype.getHideClass = function() {
    return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
};

PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";

function Renderer(width, height, images, options, document) {
    this.width = width;
    this.height = height;
    this.images = images;
    this.options = options;
    this.document = document;
}

Renderer.prototype.renderImage = function(container, bounds, borderData, imageContainer) {
    var paddingLeft = container.cssInt('paddingLeft'),
        paddingTop = container.cssInt('paddingTop'),
        paddingRight = container.cssInt('paddingRight'),
        paddingBottom = container.cssInt('paddingBottom'),
        borders = borderData.borders;

    var width = bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight);
    var height = bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom);
    this.drawImage(
        imageContainer,
        0,
        0,
        imageContainer.image.width || width,
        imageContainer.image.height || height,
        bounds.left + paddingLeft + borders[3].width,
        bounds.top + paddingTop + borders[0].width,
        width,
        height
    );
};

Renderer.prototype.renderBackground = function(container, bounds, borderData) {
    if (bounds.height > 0 && bounds.width > 0) {
        this.renderBackgroundColor(container, bounds);
        this.renderBackgroundImage(container, bounds, borderData);
    }
};

Renderer.prototype.renderBackgroundColor = function(container, bounds) {
    var color = container.css("backgroundColor");
    if (!this.isTransparent(color)) {
        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, container.css("backgroundColor"));
    }
};

Renderer.prototype.renderBorders = function(borders) {
    borders.forEach(this.renderBorder, this);
};

Renderer.prototype.renderBorder = function(data) {
    if (!this.isTransparent(data.color) && data.args !== null) {
        this.drawShape(data.args, data.color);
    }
};

Renderer.prototype.renderBackgroundImage = function(container, bounds, borderData) {
    var backgroundImages = container.parseBackgroundImages();
    backgroundImages.reverse().forEach(function(backgroundImage, index, arr) {
        switch(backgroundImage.method) {
            case "url":
                var image = this.images.get(backgroundImage.args[0]);
                if (image) {
                    this.renderBackgroundRepeating(container, bounds, image, arr.length - (index+1), borderData);
                } else {
                    log("Error loading background-image", backgroundImage.args[0]);
                }
                break;
            case "linear-gradient":
            case "gradient":
                var gradientImage = this.images.get(backgroundImage.value);
                if (gradientImage) {
                    this.renderBackgroundGradient(gradientImage, bounds, borderData);
                } else {
                    log("Error loading background-image", backgroundImage.args[0]);
                }
                break;
            case "none":
                break;
            default:
                log("Unknown background-image type", backgroundImage.args[0]);
        }
    }, this);
};

Renderer.prototype.renderBackgroundRepeating = function(container, bounds, imageContainer, index, borderData) {
    var size = container.parseBackgroundSize(bounds, imageContainer.image, index);
    var position = container.parseBackgroundPosition(bounds, imageContainer.image, index, size);
    var repeat = container.parseBackgroundRepeat(index);
    switch (repeat) {
    case "repeat-x":
    case "repeat no-repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + borderData[3], bounds.top + position.top + borderData[0], 99999, size.height, borderData);
        break;
    case "repeat-y":
    case "no-repeat repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + borderData[0], size.width, 99999, borderData);
        break;
    case "no-repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + position.top + borderData[0], size.width, size.height, borderData);
        break;
    default:
        this.renderBackgroundRepeat(imageContainer, position, size, {top: bounds.top, left: bounds.left}, borderData[3], borderData[0]);
        break;
    }
};

Renderer.prototype.isTransparent = function(color) {
    return (!color || color === "transparent" || color === "rgba(0, 0, 0, 0)");
};

function StackingContext(hasOwnStacking, opacity, element, parent) {
    NodeContainer.call(this, element, parent);
    this.ownStacking = hasOwnStacking;
    this.contexts = [];
    this.children = [];
    this.opacity = (this.parent ? this.parent.stack.opacity : 1) * opacity;
}

StackingContext.prototype = Object.create(NodeContainer.prototype);

StackingContext.prototype.getParentStack = function(context) {
    var parentStack = (this.parent) ? this.parent.stack : null;
    return parentStack ? (parentStack.ownStacking ? parentStack : parentStack.getParentStack(context)) : context.stack;
};

function Support(document) {
    this.rangeBounds = this.testRangeBounds(document);
    this.cors = this.testCORS();
    this.svg = this.testSVG();
}

Support.prototype.testRangeBounds = function(document) {
    var range, testElement, rangeBounds, rangeHeight, support = false;

    if (document.createRange) {
        range = document.createRange();
        if (range.getBoundingClientRect) {
            testElement = document.createElement('boundtest');
            testElement.style.height = "123px";
            testElement.style.display = "block";
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            rangeBounds = range.getBoundingClientRect();
            rangeHeight = rangeBounds.height;

            if (rangeHeight === 123) {
                support = true;
            }
            document.body.removeChild(testElement);
        }
    }

    return support;
};

Support.prototype.testCORS = function() {
    return typeof((new Image()).crossOrigin) !== "undefined";
};

Support.prototype.testSVG = function() {
    var img = new Image();
    var canvas = document.createElement("canvas");
    var ctx =  canvas.getContext("2d");
    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch(e) {
        return false;
    }
    return true;
};

function SVGContainer(src) {
    this.src = src;
    this.image = null;
    var self = this;

    this.promise = this.hasFabric().then(function() {
        return (self.isInline(src) ? Promise.resolve(self.inlineFormatting(src)) : XHR(src));
    }).then(function(svg) {
        return new Promise(function(resolve) {
            html2canvas.fabric.loadSVGFromString(svg, self.createCanvas.call(self, resolve));
        });
    });
}

SVGContainer.prototype.hasFabric = function() {
    return !html2canvas.fabric ? Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg")) : Promise.resolve();
};

SVGContainer.prototype.inlineFormatting = function(src) {
    return (/^data:image\/svg\+xml;base64,/.test(src)) ? this.decode64(this.removeContentType(src)) : this.removeContentType(src);
};

SVGContainer.prototype.removeContentType = function(src) {
    return src.replace(/^data:image\/svg\+xml(;base64)?,/,'');
};

SVGContainer.prototype.isInline = function(src) {
    return (/^data:image\/svg\+xml/i.test(src));
};

SVGContainer.prototype.createCanvas = function(resolve) {
    var self = this;
    return function (objects, options) {
        var canvas = new html2canvas.fabric.StaticCanvas('c');
        self.image = canvas.lowerCanvasEl;
        canvas
            .setWidth(options.width)
            .setHeight(options.height)
            .add(html2canvas.fabric.util.groupSVGElements(objects, options))
            .renderAll();
        resolve(canvas.lowerCanvasEl);
    };
};

SVGContainer.prototype.decode64 = function(str) {
    return (typeof(window.atob) === "function") ? window.atob(str) : decode64(str);
};

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function decode64(base64) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var len = base64.length, i, encoded1, encoded2, encoded3, encoded4, byte1, byte2, byte3;

    var output = "";

    for (i = 0; i < len; i+=4) {
        encoded1 = chars.indexOf(base64[i]);
        encoded2 = chars.indexOf(base64[i+1]);
        encoded3 = chars.indexOf(base64[i+2]);
        encoded4 = chars.indexOf(base64[i+3]);

        byte1 = (encoded1 << 2) | (encoded2 >> 4);
        byte2 = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        byte3 = ((encoded3 & 3) << 6) | encoded4;
        if (encoded3 === 64) {
            output += String.fromCharCode(byte1);
        } else if (encoded4 === 64 || encoded4 === -1) {
            output += String.fromCharCode(byte1, byte2);
        } else{
            output += String.fromCharCode(byte1, byte2, byte3);
        }
    }

    return output;
}

function SVGNodeContainer(node, native) {
    this.src = node;
    this.image = null;
    var self = this;

    this.promise = native ? new Promise(function(resolve, reject) {
        self.image = new Image();
        self.image.onload = resolve;
        self.image.onerror = reject;
        self.image.src = "data:image/svg+xml," + (new XMLSerializer()).serializeToString(node);
        if (self.image.complete === true) {
            resolve(self.image);
        }
    }) : this.hasFabric().then(function() {
        return new Promise(function(resolve) {
            html2canvas.fabric.parseSVGDocument(node, self.createCanvas.call(self, resolve));
        });
    });
}

SVGNodeContainer.prototype = Object.create(SVGContainer.prototype);

function TextContainer(node, parent) {
    NodeContainer.call(this, node, parent);
}

TextContainer.prototype = Object.create(NodeContainer.prototype);

TextContainer.prototype.applyTextTransform = function() {
    this.node.data = this.transform(this.parent.css("textTransform"));
};

TextContainer.prototype.transform = function(transform) {
    var text = this.node.data;
    switch(transform){
        case "lowercase":
            return text.toLowerCase();
        case "capitalize":
            return text.replace(/(^|\s|:|-|\(|\))([a-z])/g, capitalize);
        case "uppercase":
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }
}

function WebkitGradientContainer(imageData) {
    GradientContainer.apply(this, arguments);
    this.type = (imageData.args[0] === "linear") ? this.TYPES.LINEAR : this.TYPES.RADIAL;
}

WebkitGradientContainer.prototype = Object.create(GradientContainer.prototype);

function XHR(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.statusText));
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

function CanvasRenderer(width, height) {
    Renderer.apply(this, arguments);
    this.canvas = this.options.canvas || this.document.createElement("canvas");
    if (!this.options.canvas) {
        this.canvas.width = width * this.options.pixelRatio;
        this.canvas.height = height * this.options.pixelRatio;
    }
    this.ctx = this.canvas.getContext("2d");
    if (this.options.background) {
        this.rectangle(0, 0, width, height, this.options.background);
    }
    this.taintCtx = this.document.createElement("canvas").getContext("2d");
    this.ctx.textBaseline = "bottom";
    this.variables = {};
    log("Initialized CanvasRenderer with size", width, "x", height);
}

CanvasRenderer.prototype = Object.create(Renderer.prototype);

CanvasRenderer.prototype.setFillStyle = function(color) {
    this.ctx.fillStyle = color;
    return this.ctx;
};

CanvasRenderer.prototype.rectangle = function(left, top, width, height, color) {
    this.setFillStyle(color).fillRect(left, top, width, height);
};

CanvasRenderer.prototype.drawShape = function(shape, color) {
    this.shape(shape);
    this.setFillStyle(color).fill();
};

CanvasRenderer.prototype.taints = function(imageContainer) {
    if (imageContainer.tainted === null) {
        this.taintCtx.drawImage(imageContainer.image, 0, 0);
        try {
            this.taintCtx.getImageData(0, 0, 1, 1);
            imageContainer.tainted = false;
        } catch(e) {
            this.taintCtx = document.createElement("canvas").getContext("2d");
            imageContainer.tainted = true;
        }
    }

    return imageContainer.tainted;
};

CanvasRenderer.prototype.drawImage = function(imageContainer, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (!this.taints(imageContainer) || this.options.allowTaint) {
        this.ctx.save();
        this.ctx.scale(this.options.pixelRatio, this.options.pixelRatio);
        this.ctx.drawImage(imageContainer.image, sx, sy, sw, sh, dx, dy, dw, dh);
        this.ctx.restore();
    }
};

CanvasRenderer.prototype.clip = function(shapes, callback, context) {
    this.ctx.save();
    shapes.filter(hasEntries).forEach(function(shape) {
        this.shape(shape).clip();
    }, this);
    callback.call(context);
    this.ctx.restore();
};

CanvasRenderer.prototype.shape = function(shape) {
    this.ctx.save();
    this.ctx.scale(this.options.pixelRatio, this.options.pixelRatio);
    this.ctx.beginPath();
    shape.forEach(function(point, index) {
        if (point[0] === "rect") {
            this.ctx.rect.apply(this.ctx, point.slice(1));
        } else {
            this.ctx[(index === 0) ? "moveTo" : point[0] + "To" ].apply(this.ctx, point.slice(1));
        }
    }, this);
    this.ctx.closePath();
    this.ctx.restore();
    return this.ctx;
};

CanvasRenderer.prototype.font = function(color, style, variant, weight, size, family) {
    this.setFillStyle(color).font = [style, variant, weight, size, family].join(" ").split(",")[0];
};

CanvasRenderer.prototype.fontShadow = function(color, offsetX, offsetY, blur) {
    this.setVariable("shadowColor", color)
        .setVariable("shadowOffsetY", offsetX)
        .setVariable("shadowOffsetX", offsetY)
        .setVariable("shadowBlur", blur);
};

CanvasRenderer.prototype.clearShadow = function() {
    this.setVariable("shadowColor", "rgba(0,0,0,0)");
};

CanvasRenderer.prototype.setOpacity = function(opacity) {
    this.ctx.globalAlpha = opacity;
};

CanvasRenderer.prototype.setTransform = function(transform) {
    this.ctx.translate(transform.origin[0], transform.origin[1]);
    this.ctx.transform.apply(this.ctx, transform.matrix);
    this.ctx.translate(-transform.origin[0], -transform.origin[1]);
};

CanvasRenderer.prototype.setVariable = function(property, value) {
    if (this.variables[property] !== value) {
        this.variables[property] = this.ctx[property] = value;
    }

    return this;
};

CanvasRenderer.prototype.text = function(text, left, bottom) {
    this.ctx.save();
    this.ctx.scale(this.options.pixelRatio, this.options.pixelRatio);
    this.ctx.fillText(text, left, bottom);
    this.ctx.restore();
};

CanvasRenderer.prototype.backgroundRepeatShape = function(imageContainer, backgroundPosition, size, bounds, left, top, width, height, borderData) {
    var shape = [
        ["line", Math.round(left), Math.round(top)],
        ["line", Math.round(left + width), Math.round(top)],
        ["line", Math.round(left + width), Math.round(height + top)],
        ["line", Math.round(left), Math.round(height + top)]
    ];
    this.clip([shape], function() {
        this.renderBackgroundRepeat(imageContainer, backgroundPosition, size, bounds, borderData[3], borderData[0]);
    }, this);
};

CanvasRenderer.prototype.renderBackgroundRepeat = function(imageContainer, backgroundPosition, size, bounds, borderLeft, borderTop) {
    var offsetX = Math.round(bounds.left + backgroundPosition.left + borderLeft), offsetY = Math.round(bounds.top + backgroundPosition.top + borderTop);
    this.setFillStyle(this.ctx.createPattern(this.resizeImage(imageContainer, size), "repeat"));
    this.ctx.translate(offsetX, offsetY);
    this.ctx.fill();
    this.ctx.translate(-offsetX, -offsetY);
};

CanvasRenderer.prototype.renderBackgroundGradient = function(gradientImage, bounds) {
    if (gradientImage instanceof LinearGradientContainer) {
        var gradient = this.ctx.createLinearGradient(
            bounds.left + bounds.width * gradientImage.x0,
            bounds.top + bounds.height * gradientImage.y0,
            bounds.left +  bounds.width * gradientImage.x1,
            bounds.top +  bounds.height * gradientImage.y1);
        gradientImage.colorStops.forEach(function(colorStop) {
            gradient.addColorStop(colorStop.stop, colorStop.color);
        });
        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, gradient);
    }
};

CanvasRenderer.prototype.resizeImage = function(imageContainer, size) {
    var image = imageContainer.image;
    if(image.width === size.width && image.height === size.height) {
        return image;
    }

    var ctx, canvas = document.createElement('canvas');
    canvas.width = size.width;
    canvas.height = size.height;
    ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height );
    return canvas;
};

function hasEntries(array) {
    return array.length > 0;
}

}).call({}, window, document);

"use strict";function LabelNewCompClass(i){var l={x:0,y:0,width:2e3,visible:!0,text:"",maxWidth:0,fontSize:16,fontColor:"rgba(0,0,0,1)",align:"left",isItalic:!1,isBold:!1,rotation:0,textY:0,textX:0,bgColor:"#ffffff",textW:"old"};function e(){var t;0<l.maxWidth&&(t=l.text,l.isBold&&l.isItalic?t=l.LabComClass.italicbold+t+l.LabComClass.end:(l.isItalic&&(t=l.LabComClass.italic+t+l.LabComClass.end),l.isBold&&(t=l.LabComClass.bold+t+l.LabComClass.end)),"old"===l.textW?l.text=l.context.textWrapperClass({xNum:0,yNum:0,fontFormat:"px ",maxWidthNum:l.maxWidth,textStr:t,fontFamilyStr:l.fontFamilyStr,fontSizeNum:l.fontSize,color:l.fontColor}):l.text=l.context.textWrapperV2Class({xNum:0,yNum:0,maxWidthNum:l.maxWidth,textStr:""+t,fontFamilyStr:l.fontFamilyStr,fontSizeNum:l.fontSize,color:l.fontColor},!1))}Object.keys(i).forEach(function(t){l[t]=i[t]}),l.fontFamilyStr=l.LabComClass.polo22KlettRegular,""!==l.text&&(l.text=l.LabComClass.globalLangText[l.text]),e(),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:l.id}}),this.setValue=function(t){l.text=t,e()},this.getValue=function(){return l.text},this.setBGColor=function(t){l.bgColor=t},this.getVisble=function(){return l.visible},this.setVisible=function(t){l.visible=t},this.getBGColor=function(){return l.bgColor},this.setTextColor=function(t){l.fontColor=t},this.getTextColor=function(){return l.fontColor},this.show=function(){l.visible=!0},this.hide=function(){l.visible=!1},this.setPos=function(t,i){l.x=t,l.y=i},this.getPos=function(){return{x:l.x,y:l.y}},this.setStyle=function(i){Object.keys(i).forEach(function(t){l[t]=i[t]})},this.draw=function(){var t,i,e,o,a;l.visible&&(t=l.context,i="",e=l.x,a=l.y+l.fontSize,t.save(),o=void 0!==l.bgWidth?(t.beginPath(),t.fillStyle=l.bgColor,t.fillRect(l.x,l.y,l.bgWidth,l.bgHeight),t.closePath(),"middle"):"bottom",t.beginPath(),t.fillStyle=l.fontColor,i+=l.isItalic?"italic ":"",i+=l.isBold?"bold ":"",t.font=i+l.fontSize+"px "+l.fontFamilyStr,t.textAlign=l.align,"middle"===(t.textBaseline=o)&&(e=l.x+l.bgWidth/2,a=l.y+l.bgHeight/2+1),t.translate(e,a),t.rotate(l.rotation),l.text&&"string"==typeof l.text&&0===l.maxWidth?(a=l.text,l.isBold&&l.isItalic?a=l.LabComClass.italicbold+a+l.LabComClass.end:(l.isItalic&&(a=l.LabComClass.italic+a+l.LabComClass.end),l.isBold&&(a=l.LabComClass.bold+a+l.LabComClass.end)),t.drawStyledText(a,l.textX,l.textY,l.fontFamilyStr,l.fontSize)):l.text&&l.text.imageObj&&l.text.imageObj.imageObj&&("old"===l.textW?t.drawImage(l.text.imageObj.imageObj,0,0,l.text.imageObj.widthInt,l.text.imageObj.heightInt):t.drawImage(l.text.imageObj.imageObj,0,-l.fontSize,l.text.imageObj.widthInt,l.text.imageObj.heightInt)),t.closePath(),t.restore())}}
"use strict";function ContainerCompClass(t){var d={},o={x:0,y:0,width:326,height:177,dragMinX:0,dragMinY:0,dragMaxX:1280,dragMaxY:720,visible:!0,enable:!0,headText:"",padding:16,fontSize:16,fontColor:"rgba(0,0,0,1)",bgColor:"rgba(112,146,190,0.5)"},s={headLine:null,mouseEventData:{mouseMove:!1,diffX:0,diffY:0}};function r(){onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:o.id}});var e={};e.id=o.id,e.r=[],o.visible&&(o.enable?e.r.push({id:"base_"+o.id,rect:{x:o.x,y:o.y,w:o.width,h:o.height},cursor:"grab",downCursor:"grabbing",eventListener:a.bind(this)}):e.r.push({id:"baseNonDrag_"+o.id,rect:{x:o.x,y:o.y,w:o.width,h:o.height},cursor:"default",eventListener:a.bind(this)})),onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:e})}function a(e){if(o.enable)switch(e.type){case"mousedown":s.mouseEventData.diffX=e.pageX-o.x,s.mouseEventData.diffY=e.pageY-o.y;break;case"mouseenter":break;case"mouseup":case"mouseupout":r();break;case"mouseout":break;case"pressmove":o.x=e.pageX-s.mouseEventData.diffX,o.y=e.pageY-s.mouseEventData.diffY;var t=o.dragMinX,a=o.dragMinY,i=o.dragMaxX-o.width,n=o.dragMaxY-o.height;o.x=o.x<t?t:o.x,o.x=o.x>i?i:o.x,o.y=o.y<a?a:o.y,o.y=o.y>n?n:o.y,void 0!==d.change&&d.change({id:o.id})}}function i(){s.headLine=o.context.textWrapperClass({xNum:0,yNum:0,fontFormat:"px ",maxWidthNum:o.width-2*o.padding,textStr:o.headText,fontFamilyStr:o.LabComClass.klettFontRegular,fontSizeNum:o.fontSize,color:o.fontColor})}Object.keys(t).forEach(function(e){o[e]=t[e]}),function(){""!==o.headText&&o.LabComClass.globalLangText[o.headText]?(o.headText=o.LabComClass.globalLangText[o.headText],i()):o.headText="";r()}(),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:o.id}}),this.addEventListener=function(e,t){d[e]=t},this.setPos=function(e,t){o.x=e,o.y=t,r()},this.setText=function(e){o.headText=e,i(),r()},this.getPos=function(){var e={x:o.x+o.padding,y:o.y+o.padding};return null!==s.headLine?(e.bodyX=o.x+o.padding,e.bodyY=o.y+2*o.padding+s.headLine.imageObj.heightInt):(e.bodyX=o.x+o.padding,e.bodyY=o.y+o.padding),e},this.setHeight=function(e){o.height=e},this.show=function(){o.visible=!0,r()},this.hide=function(){o.visible=!1,r()},this.enable=function(){o.enable=!0,r()},this.disable=function(){o.enable=!1,r()},this.draw=function(){var e=o.context;o.visible&&(e.save(),e.lineWidth=1,e.beginPath(),e.strokeStyle="rgba(255,255,255,1)",e.fillStyle=o.bgColor,e.rect(o.x,o.y,o.width,o.height),e.fill(),e.stroke(),e.closePath(),null!==s.headLine&&(e.beginPath(),e.fillStyle=o.fontColor,e.textBaseline="middle",e.drawImage(s.headLine.imageObj.imageObj,o.x+o.padding,o.y+o.padding,s.headLine.imageObj.widthInt,s.headLine.imageObj.heightInt),e.closePath()),e.restore())}}
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function InputBoxClass(t){var o=this,n=t.id,r=t.context,i=(we(t.type,"inputBox"),we(t.x,0)),s=we(t.y,0),l=we(t.width,56),u=we(t.height,30),c=we(t.radius,0),f=we(t.strokeStyle,"auto"),d=we(t.fillStyle,"rgba(255,255,255,1)"),h=we(t.borderWidth,1),g=we(t.shadowVisible,!1),b=we(t.shadowColor,"rgba(0,0,0,0.5)"),m=we(t.shadowOffsetX,2),y=we(t.shadowOffsetY,2),p=we(t.shadowBlur,10),k=we(t.fontSize,16),x=we(t.fontFamily,t.LabComClass.klettFontRegular),v=we(t.fontColor,"rgba(0,0,0,1)"),w=we(t.disableFillStyle,"rgba(0,0,0,0.5)"),T=we(t.value,""),C=we(t.filterType,1),S=we(t.maxLength,2),a=we(t.maxLengthFilter,1),P=we(t.textAlign,"center"),A=we(t.textPadding,5),O=we(t.cursorColor,"rgba(0, 0, 0, 1)"),E=we(t.showComponent,!1),L=we(t.showEnter,!1),B=we(t.enterSize,16),e=we(t.enterToSubmit,!1),D=we(t.useCommaAsDecimal,!1),U=(we(t.useCommaAsDecimal,!1),we(t.LabComClass.globalLangText[t.preTxt],"")),I=we(t.LabComClass.globalLangText[t.postTxt],""),V=we(t.staticMode,!1),F=(we(t.showEventBool,!0),we(t.isNumeric,!0)),N=t.leftMinDecimalCountInt,q=t.rightMaxDecimalCountInt,R={outsidePreTxt:"",outsidePreTxtPadding:10,outsidePreTxtAlign:"right",outsidePostTxt:"",outsidePostTxtPadding:10,outsidePostTxtAlign:"left",allowEmptyState:!0};Object.keys(t).forEach(function(e){R[e]=t[e]}),function(e){for(var t=0;t<e.length;t++)R.LabComClass.globalLangText[R[e[t]]]?R[e[t]]=R.LabComClass.globalLangText[R[e[t]]]:R[e[t]]=""}(["outsidePreTxt","outsidePostTxt"]);var G,M,j=!1,X=!1,K=null,W=!1,_=!1,z=!1,Y=0,H=0,J=!1,Q={},Z=["focusIn","focusOut","click","keyup","mouseenter","mouseout"],$=null,ee=null,te=t.LabComClass.BrowserDetect;"auto"===f&&(f="rgba(170, 170, 166,1)");var ne=S;function ae(){"."===T.charAt(T.length-1)&&(T=T.substring(0,T.length-1))}function oe(e){if(-1!==Z.indexOf(e))return 1;throw new Error("Invalid event ".concat(e," provided, following events ").concat(Q," are allowed"))}function ie(e){return Q[e]&&0<Q[e].length}function re(t){ie(t)&&Q[t].forEach(function(e){e({type:t,id:n})})}function se(t){ie(t)&&Q[t].forEach(function(e){e({type:t,enterPressed:!0,id:n})})}function le(e,t,n,a,o,i,r,s){var l;void 0===s&&(s=!0),void 0===i&&(i=5),"number"==typeof i?i={tl:i,tr:i,br:i,bl:i}:(l={tl:0,tr:0,br:0,bl:0},Object.keys(l).forEach(function(e){i[e]=i[e]||l[e]})),e.beginPath(),e.moveTo(t+i.tl,n),e.lineTo(t+(a-i.tr),n),e.quadraticCurveTo(t+a,n,t+a,n+i.tr),e.lineTo(t+a,n+(o-i.br)),e.quadraticCurveTo(t+a,n+o,t+(a-i.br),n+o),e.lineTo(t+i.bl,n+o),e.quadraticCurveTo(t,n+o,t,n+(o-i.bl)),e.lineTo(t,n+i.tl),e.quadraticCurveTo(t,n,t+i.tl,n),e.closePath(),e.lineWidth=h,r&&e.fill(),s&&(e.lineWidth=1,e.stroke())}function ue(){clearTimeout(M),!0===X?M=setTimeout(function(){z=!z,ge(),me(),ue()},530):ge()}function ce(){X&&(onViewUpdateCls.trigger("onGlobalUpdate",{type:"rendererUpdate"}),requestAnimationFrame(ce))}function fe(e){var t={};t.id=n,t.r=[],t.r.push({id:0,rect:{x:i,y:s,w:l,h:u},eventListener:xe}),e?onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:t}):(X=!1,onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:n}})),W=e,ue()}function de(e){e?onViewUpdateCls.trigger("onGlobalUpdate",{type:"addKeyEvent",data:{id:n,callback:ve}}):onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeKeyEvent",data:{id:n,callback:ve}})}function he(t,e){var n=!1,a=function(){var t={48:0,49:1,50:2,51:3,52:4,53:5,54:6,55:7,56:8,57:9,96:0,97:1,98:2,99:3,100:4,101:5,102:6,103:7,104:8,105:9,8:"back",46:"clear",32:"space"},n={65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z"};F||Object.keys(n).forEach(function(e){t[e]=n[e]});switch(C){case 12:t[188]="comma",t[8]="back",t[46]="clear",t[189]="diff",t[109]="diff",t[173]="diff";break;case 11:-1<R.LabComClass.BrowserDetect.browserUserAgentName().indexOf("Firefox")?(t[8]="back",t[192]="ö",t[222]="ä",t[59]="ü"):(t[8]="back",t[192]="ö",t[222]="ä",t[186]="ü");break;case 10:t[188]="comma",t[8]="back",t[46]="clear";break;case 9:(t=[])[187]="equal",t[188]="comma",t[190]="dot",t[8]="back",t[46]="clear";break;case 8:t[188]="comma",t[189]="diff",t[109]="diff",t[173]="diff",t[191]="slash",t[111]="slash",t[190]="dot",t[110]="dot";break;case 7:t[190]="dot",t[110]="dot";break;case 6:t[188]="comma",t[189]="space";break;case 5:t[191]="slash",t[111]="slash";break;case 4:break;case 3:t[189]="diff",t[109]="diff",t[173]="diff";break;case 2:t[189]="diff",t[109]="diff",t[173]="diff",t[190]="dot",t[110]="dot";break;case 1:default:t[189]="diff",t[109]="diff",t[173]="diff",t[190]="dot",t[110]="dot",t[188]="comma"}return t}();if(void 0!==e){if(!0===e.ctrlKey)return void e.preventDefault();if("Tab"===e.key)return null!==ee&&ee.onTabEvent(o.compId),void e.preventDefault();if("ArrowLeft"===e.key||"ArrowRight"===e.key||"Left"===e.key||"Right"===e.key)return me(e.key),void e.preventDefault();void 0!==a[e.keyCode]&&(n=!0,t=a[e.keyCode].toString())}else t=t.toString(),Object.keys(a).forEach(function(e){t===a[e].toString()&&(n=!0)});if(!0===n){switch(t){case"diff":""!==T&&0!==Y||be("-");break;case"Ö":case"ö":T.length<ye()&&be("Ö");break;case"Ä":case"ä":T.length<ye()&&be("Ä");break;case"Ü":case"ü":T.length<ye()&&be("Ü");break;case"dot":!0===(null==e?void 0:e.shiftKey)&&T.length<ye()?be(">"):-1===T.indexOf(".")&&T.length<=ye()&&q&&(S=ne+q,J=!0,(void 0===N||T.length>=N)&&be("."));break;case"back":J&&"."===T.charAt(T.length-1)&&(S=ne,J=!1),be("back");break;case"clear":be("clear");break;case"comma":!0===(null==e?void 0:e.shiftKey)&&T.length<ye()?be("<"):(!D&&T.length<ye()&&""!==T&&"."!==T.charAt(T.length-1)&&","!==T.charAt(T.length-1)&&"/"!==T.charAt(T.length-1)||D&&-1===T.indexOf(",")&&""!==T&&","!==T.charAt(T.length-1))&&be(",");break;case"equal":T.length<ye()&&be("=");break;case"space":T.length<ye()&&""!==T&&"."!==T.charAt(T.length-1)&&","!==T.charAt(T.length-1)&&"/"!==T.charAt(T.length-1)&&be(" ");break;case"slash":T.length<ye()&&""!==T&&"."!==T.charAt(T.length-1)&&","!==T.charAt(T.length-1)&&"/"!==T.charAt(T.length-1)&&be("/");break;default:T.length<ye()&&be(t.toUpperCase(),!0)}ge()}if(!e||8!==e.keyCode)return 1;e.preventDefault()}function ge(){J&&-1===T.indexOf(".")&&(J=!1,S=ne),onViewUpdateCls.trigger("onGlobalUpdate",{type:"updateView"})}function be(e,t){var n;"back"===e?(T=T.substring(0,Y-1)+T.substring(Y,T.length),Y--):"clear"===e?(T="",Y=0):(n=T.substring(0,Y)+e+T.substring(Y,T.length),r.measureText(n).width<R.width&&(T=T.substring(0,Y)+e+T.substring(Y,T.length),Y++,t&&(-1!==T.indexOf(".")&&void 0!==q&&T.split(".")[1].length>q&&(T=T.substring(0,T.length-1),Y=T.length),isNaN(Number(T))))),Y<0&&(Y=0),-1===T.indexOf(".")&&(S=ne),me()}function me(e){"ArrowLeft"===e||"Left"===e?--Y<0&&(Y=0):"ArrowRight"!==e&&"Right"!==e||++Y>T.length&&(Y=T.length),r.font=k+"px "+x;var t=T.substring(Y,T.length),e=0;""!==t&&(e=r.measureText(t).width+2),H=""===T?i+l/2:i+l/2+r.measureText(T).width/2+2-e}function ye(){var e=S;switch(a){case 2:break;case 1:default:"-"===T.charAt(0)&&(e+=1),-1!==T.indexOf(".")&&(e+=1),-1!==T.indexOf("/")&&(e+=1),-1!==T.indexOf(",")&&(e+=T.split(",").length-1)}return e}function pe(e,t){r.save(),r.textBaseline="bottom",r.font=k+"px "+x;for(var n=e.length,a=t=t<0?0:t,o=0;o<e.length;o++){var i=r.measureText(T.substring(0,o)).width;Math.abs(t-i)<=a&&(a=Math.abs(t-i),n=o)}return r.measureText(T).width<=t&&(n=e.length),r.restore(),n}function ke(e){r.save(),r.textBaseline="bottom",r.font=k+"px "+x;var t=r.measureText(T).width;r.restore();var n=i+A;switch(P){case"left":Y=pe(T,e.pageX-n);break;case"right":Y=pe(T,e.pageX-(i+l-t-A));break;case"center":case"default":Y=pe(T,e.pageX-(i+l/2-t/2))}}function xe(e){switch(e.type){case"mouseupout":_=!1;break;case"mousedown":o.hasFocus||o.focusIn(),ke(e),me();break;case"mouseup":o.hasFocus||o.focusIn(),ke(e),_=!1,re("click");break;case"mouseenter":re("mouseenter"),_=!0;break;case"mouseout":re("mouseout"),_=!1;break;case"stageevent":_||!X||null!==$&&-1!==[$,n].indexOf(e.id)||o.focusOut(e.id)}}function ve(e){var t=e.nativeEvent;e.compId===n&&("keyup"===t.type?("Enter"===t.key?o.focusOut():he(t.key,t),("keyup"===t.type&&"Enter"===t.key&&R.enterToSubmit?se:re)("keyup")):"keydown"===t.type&&"Backspace"===t.key&&t.preventDefault())}function we(e,t){return _typeof(e)===_typeof(t)?e:t}Object.defineProperties(this,{compId:{get:function(){return n}},hasFocus:{get:function(){return X}},isVisible:{get:function(){return E}},numberPadCompId:{set:function(e){$=e}}}),this.focusIn=function(){!(z=!0)===te.isDevice()&&document.getElementById("inputFieldDummyDiv").focus(),me(),de(!0),X=!0,ue(),ce(),re("focusIn"),o.setState("normal"),ge()},this.focusOut=function(){!1===te.isDevice()&&document.getElementById("inputFieldDummyDiv").blur(),de(!1),!0===X&&(X=!1,ue(),F&&isNaN(Number(T))&&!T.includes(",")&&(T="0"),re("focusOut")),ae(),ge()},this.enable=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];E&&fe(!0),!L&&we(t.showEnter,!1)&&(L=!0),j=!1,e&&(G=!0)},this.disable=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];o.focusOut(!0),L=L&&!1,fe(!1),j=!0,e&&(G=!1)},this.isEnabled=function(){return!j},this.show=function(){E=!0,G&&this.enable(!1)},this.hide=function(){E=!1,this.disable(!1)},this.getVisble=function(){return E},this.getEnterToSubmit=function(){return e},this.setPos=function(e,t){i=e,s=t,j||fe(E)},this.getState=function(){return W},this.static=function(e){return void 0!==e&&(V=e),V},this.setVisible=function(e){e?this.show():this.hide()},this.on=function(e,t){oe(e)&&(Q[e]||(Q[e]=[]),Q[e].push(t))},this.off=function(e,t){oe(e)&&ie(e)&&(t=Q[e].indexOf(t),Q[e].splice(t,1),0===Q[e].length&&delete Q[e])},this.getValue=function(){return D?T.replace(",","."):T},this.setValue=function(e){T=e.toString(),Y=T.length,ae(),-1!==T.indexOf(".")&&void 0!==q&&S<ne+q&&(S=ne+q),me(),ge()},this.decimalCount=function(e){return q=e,-1!==T.indexOf(".")&&void 0!==q&&(S=ne+q),q},this.getCorrect=function(){return K},this.setNumberPadValue=function(e){he(e),("enter"!==e||"enter"===e&&!R.enterToSubmit?re:se)("keyup")},this.draw=function(){if(E){r.save(),!0===g&&(r.shadowColor=b,r.shadowOffsetX=m,r.shadowOffsetY=y,r.shadowBlur=p),r.fillStyle=d,r.strokeStyle=f,(X||_)&&null===K&&(r.strokeStyle="rgba(170, 170, 166,1)"),X||null!==K||_||(r.strokeStyle="rgba(170, 170, 166,1)");var e=v;if((""!==T&&R.allowEmptyState||!R.allowEmptyState)&&(K||null===K?K&&null!==K&&(r.fillStyle="rgba(65, 180, 5, 1)",e="rgba(255, 255, 255, 1)"):(r.fillStyle="rgba(255, 0, 0, 1)",e="rgba(255, 255, 255, 1)")),r.lineWidth=1,le(r,i,s,l,u,c,!0,!0),r.shadowColor="transparent",r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=0,""!==T){r.textBaseline="bottom",r.font=k+"px "+x,j&&!V?(r.fillStyle=w,null!==K&&(r.fillStyle="rgba(255,255,255,0.7)")):r.fillStyle=e,r.strokeStyle="rgba(255,255,255,1)";var t=s+u/2+k/2+.125*k;-1!==x.indexOf("league")&&(t+=4*k/28);var n=U+T+I;switch(P){case"left":r.textAlign="left",r.drawStyledText(n,i+A,t);break;case"right":r.textAlign="right",r.drawStyledText(n,i+l-(A+4),t);break;case"center":default:r.textAlign="center",r.drawStyledText(n,i+l/2,t)}}if(!0===z&&!0===X){var a,o=T.substring(0,Y);switch(r.font=k+"px "+x,P){case"left":a=""===T?i+A+2:i+A+r.measureText(o).width+2;break;case"right":o=T.substring(Y,T.length),a=i+l-r.measureText(o).width-(A+2);break;case"center":default:a=H}e=s+(u-k)/2,r.beginPath(),r.moveTo(a,e),r.lineTo(a,e+k),r.closePath(),r.lineWidth=1,r.strokeStyle=O,r.stroke()}!X&&""===T&&L&&(r.fillStyle="rgba(0, 0, 0, 1)",r.textAlign="start",r.textBaseline="alphabetic",r.drawStyledText("Enter",i+8,s+u/2+k/2-2,"Alef-Regular",B)),j&&!V&&(r.strokeStyle="rgba(237, 237, 237,1)",r.fillStyle="rgba(255, 255, 255, 0.03)",le(r,i,s,l,u,c,!0,!0)),""!==R.outsidePostTxt&&(r.save(),r.beginPath(),r.fillStyle=v,r.textAlign=R.outsidePostTxtAlign,r.textBaseline="bottom",r.drawStyledText(R.outsidePostTxt,i+l+R.outsidePostTxtPadding,s+u/2+.65*k,R.LabComClass.klettFontRegular,k),r.closePath(),r.restore()),""!==R.outsidePreTxt&&(r.save(),r.beginPath(),r.fillStyle=v,r.textAlign=R.outsidePreTxtAlign,r.textBaseline="bottom",r.drawStyledText(R.outsidePreTxt,i-R.outsidePreTxtPadding,s+u/2+.65*k,R.LabComClass.klettFontRegular,k),r.closePath(),r.restore()),r.restore()}},this.destroy=function(){o.disable()},this.setState=function(e){"correct"===e?K=!0:"incorrect"===e?K=!1:"normal"===e&&(K=null)},onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:n}})}
"use strict";function RadioButtonCompClass(e){var r={},n={disableColor:"rgba(193, 170, 155, 1)",bgColor:"rgba(112,146,190,0.5)",whitebgColor:"rgba(255,255,255,0)",circleBGColor:"rgba(255, 255, 255, 1)",downColor:"rgba(255, 102, 0, 1)",borderColor:"rgba(170, 170, 170, 1)",show:!0,state:!0,selected:null,selectedArr:[],x:0,y:0,bgTopPadding:0,bgLeftPadding:0,width:200,height:50,margin:10,topMargin:0,leftMargin:0,padding:10,radius:13,textMaxWidth:200,isItalic:!1,isBold:!1,fontSize:15,data:[],fontColor:"#000000",orientation:"v",isDraggable:!1,bgVisible:!1,correctOption:null},l={mouseEventData:{mouseMove:!1,diffX:0,diffY:0}},s=[];Object.keys(e).forEach(function(t){n[t]=e[t]});var d=n.playerConfigObj.baseWidth,c=n.playerConfigObj.baseHeight;function g(){onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:n.id}});var t={};if(t.id=n.id,t.r=[],n.show&&(n.isDraggable&&t.r.push({id:"base_"+n.id,rect:{x:n.x,y:n.y,w:n.width,h:n.height},cursor:"grab",downCursor:"grabbing",eventListener:i.bind(this)}),n.state))for(var e=0;e<s.length;e++)t.r.push({id:"circle_"+e,arc:{x:s[e].circleX,y:s[e].circleY,r:s[e].circleRadius},eventListener:i.bind(this)}),t.r.push({id:"box_"+e,rect:{x:s[e].textX,y:s[e].textY,w:s[e].textWidth,h:s[e].textHeight},eventListener:i.bind(this)});onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:t})}function i(t){var e,i,a,o;switch(t.type){case"mousedown":l.mouseEventData.mouseMove=!1,l.mouseEventData.diffX=t.pageX-n.x,l.mouseEventData.diffY=t.pageY-n.y;break;case"mouseenter":break;case"mouseup":t.subId==="base_"+n.id||l.mouseEventData.mouseMove||(0<=t.subId.indexOf("box_")||0<=t.subId.indexOf("circle_"))&&(o=t.subId.split("_"),n.selected=+o[1],u(),void 0!==r.change&&r.change({id:n.id,value:n.selected})),l.mouseEventData.mouseMove=!1,0;break;case"mouseupout":0;break;case"mouseout":break;case"pressmove":n.isDraggable&&(e=n.x,i=n.y,l.mouseEventData.mouseMove=!0,n.x=t.pageX-l.mouseEventData.diffX,n.y=t.pageY-l.mouseEventData.diffY,a=d-n.width,o=c-n.height,0,n.x=n.x<0?0:n.x,n.x=n.x>a?a:n.x,n.y=n.y<0?0:n.y,n.y=n.y>o?o:n.y,e===n.x&&i===n.y&&(l.mouseEventData.mouseMove=!1),h()),g()}}function u(){var t=n.context,e="";t.save(),e+=n.isItalic?"italic ":"",e+=n.isBold?"bold ":"",t.font=e+"".concat(n.fontSize,"px ")+n.LabComClass.klettFontRegular,t.textBaseline="top";for(var i=s.length=0,a=0;a<n.data.length;a++){i=t.measureText(n.data[a]);var o=n.context.textWrapperClass({xNum:0,yNum:0,fontFormat:"px ",maxWidthNum:n.textMaxWidth,textStr:n.data[a],fontFamilyStr:n.LabComClass.klettFontRegular,fontSizeNum:n.fontSize,color:n.fontColor});s.push({circleRadius:n.radius,text:n.data[a]?o.imageObj.imageObj:void 0,borderColor:n.borderColor,baseColor:n.circleBGColor,fillColor:a===n.selected?n.downColor:"rgba(0,0,0,0)",textWidth:o.imageObj.widthInt,textHeight:o.imageObj.heightInt,textParam:i})}t.restore(),h()}function h(){for(var t=n.x+n.bgLeftPadding,e=n.y+n.bgTopPadding,i=0;i<n.data.length;i++)s[i].circleX=t+n.radius,s[i].circleY=e+n.radius,s[i].textX=t+n.padding+2*n.radius,s[i].textY=e+n.radius-s[i].textHeight/2.5,"v"===n.orientation?e+=2*n.radius+(0<n.topMargin?n.topMargin:n.margin):"h"===n.orientation?t+=2*n.radius+(0<n.leftMargin?n.leftMargin:n.margin)+n.padding+s[i].textParam.width:"box"===n.orientation&&(1==i%2?(e=n.y,t+=2*n.radius+(0<n.leftMargin?n.leftMargin:n.margin)+n.padding+s[i].textParam.width):e+=2*n.radius+(0<n.topMargin?n.topMargin:n.margin))}!function(){for(var t=0;t<n.data.length;t++)n.data[t]=n.LabComClass.globalLangText[n.data[t]]}(),u(),g(),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:n.id}}),this.addEventListener=function(t,e){r[t]=e},this.setPos=function(t,e){n.x=t,n.y=e,h(),g()},this.setText=function(t){n.data=t,u(),g()},this.getPos=function(){return{x:n.x,y:n.y}},this.getValue=function(){return n.selected},this.setCorrectOption=function(t){n.correctOption=t},this.setValue=function(t){n.selected=t,n.selectedArr=[],u()},this.setMulVal=function(t){n.selected=null,n.selectedArr=[],null!==t&&t.forEach(function(t){n.selectedArr.push(t)}),u()},this.show=function(){n.show=!0,g()},this.getVisible=function(){return n.show},this.hide=function(){n.show=!1,g()},this.enable=function(){n.state=!0,g()},this.disable=function(){n.state=!1,g()},this.draw=function(){var e=n.context;if(n.show){e.save(),e.lineWidth=1,n.bgVisible&&(e.beginPath(),e.strokeStyle="rgba(255,255,255,1)",e.fillStyle=n.whitebgColor,e.rect(n.x,n.y,n.width,n.height),e.fill(),e.stroke(),e.fillStyle=n.bgColor,e.fillRect(n.x,n.y,n.width,n.height),e.closePath());for(var t,i,a,o=0;o<s.length;o++)e.beginPath(),e.beginPath(),e.fillStyle=s[o].baseColor,e.arc(s[o].circleX,s[o].circleY,13,0,2*Math.PI),e.fill(),e.closePath(),e.beginPath(),e.fillStyle=s[o].fillColor,null!==n.selectedArr&&1<n.selectedArr.length?n.selectedArr.forEach(function(t){o!==t||n.state||(e.fillStyle=n.disableColor)}):o!==n.selected||n.state||(e.fillStyle=n.disableColor),e.arc(s[o].circleX,s[o].circleY,6,0,2*Math.PI),e.fill(),e.closePath(),e.closePath(),s[o].text&&(e.beginPath(),t="",i=s[o].textX,a=s[o].textY,e.fillStyle=n.fontColor,t+=s[o].isHeadItalic?"italic ":"",t+=s[o].isHeadBold?"bold ":"",e.font=t+"".concat(n.fontSize,"px ")+n.LabComClass.klettFontRegular,e.textBaseline="middle",e.drawImage(s[o].text,i,a,s[o].textWidth,s[o].textHeight),e.closePath());e.restore()}}}
"use strict";function ButtonCompClass(_obj){var events={},modelObj={x:105,y:313,width:44,height:30,visible:!0,state:!0,imgList:[],text:"",isItalic:!1,isBold:!1,fontSize:16,textColor:"#ffffff",curveR:15,imageAlign:"left",paddingLeft:10,textPadding:0,toggleMode:!1,toggleState:!1,shape:[],type:1,bgColorState:{normal:"rgba(170, 170, 166, 1)",secondOrderNormal:"rgba(170, 170, 166, 1)",hover:"rgba(96, 96, 96, 1)",down:"rgba(96, 96, 96, 1)",disable:"rgba(233, 233, 233, 1)"},textColorState:{normal:"rgba(255, 255, 255, 1)",secondOrderNormal:"rgba(255, 255, 255, 1)",hover:"rgba(255, 255, 255, 1)",down:"rgba(255, 255, 255, 1)",disable:"rgba(142, 142, 142, 1)"}},isPressed=!1,isHover=!1,imgObj={};Object.keys(_obj).forEach(function(e){modelObj[e]=_obj[e]}),2===modelObj.type&&(modelObj.bgColorState.normal=modelObj.bgColorState.secondOrderNormal);var _wd=0<modelObj.imageWidth?modelObj.imageWidth:27,_ht=0<modelObj.imageHeight?modelObj.imageHeight:27,_xTxt=modelObj.x+modelObj.width/2-_wd/2,_yTxt=modelObj.y+modelObj.height/2-_ht/2;function updateValues(t){for(var e=arguments.length,o=new Array(1<e?e-1:0),l=1;l<e;l++)o[l-1]=arguments[l];o.forEach(function(e){void 0!==t[e]&&(modelObj[e]=t[e])})}function onImagesLoaded(e){imgObj=e,onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:modelObj.id}})}function onImagesLoadingError(e){console.log("Images Loading Error...")}function removeAllEvents(){onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:modelObj.id}})}function addEvents(){removeAllEvents();var e={};e.id=modelObj.id,e.r=[],modelObj.state&&modelObj.visible&&(e.r.push({id:modelObj.id,rect:{x:modelObj.x,y:modelObj.y,w:modelObj.width,h:modelObj.height},eventListener:mouseHandle.bind(this)}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:e}))}function mouseHandle(e){switch(e.type){case"mousedown":isHover=!(isPressed=!0);break;case"mouseup":onKeyPressed(),addEvents(),isPressed=!1;break;case"mouseenter":isPressed=!(isHover=!0);break;case"mouseout":case"mouseupout":isPressed=isHover=!1}}function onKeyPressed(){modelObj.toggleMode&&(modelObj.toggleState=!modelObj.toggleState),void 0!==events.click&&events.click({id:modelObj.id,value:isPressed,toggleState:modelObj.toggleState})}function roundRect(e,t,o,l,d,i,b,m,s,a){var r;void 0===m&&(m=!0),void 0===i&&(i=5),"number"==typeof i?i=s?{tl:i,tr:i,br:0,bl:0}:a?{tl:0,tr:0,br:i,bl:i}:{tl:i,tr:i,br:i,bl:i}:(r={tl:0,tr:0,br:0,bl:0},Object.keys(r).forEach(function(e){i[e]=i[e]||r[e]})),e.beginPath(),e.moveTo(t+i.tl,o),e.lineTo(t+(l-i.tr),o),e.quadraticCurveTo(t+l,o,t+l,o+i.tr),e.lineTo(t+l,o+(d-i.br)),e.quadraticCurveTo(t+l,o+d,t+(l-i.br),o+d),e.lineTo(t+i.bl,o+d),e.quadraticCurveTo(t,o+d,t,o+(d-i.bl)),e.lineTo(t,o+i.tl),e.quadraticCurveTo(t,o,t+i.tl,o),e.closePath(),e.lineWidth=modelObj.strokeWidth,b&&e.fill(),m&&(e.lineWidth=2,e.stroke())}modelObj.LabComClass.globalLangText[modelObj.text]?modelObj.text=modelObj.LabComClass.globalLangText[modelObj.text]:modelObj.text="",addEvents(),modelObj.imgList[0]?modelObj.LabComClass.requestGlobalImage(modelObj.imgList,onImagesLoaded,onImagesLoadingError):onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:modelObj.id}}),this.addEventListener=function(e,t){events[e]=t},this.setValue=function(e){modelObj.text=e},this.getVisible=function(){return modelObj.visible},this.getValue=function(){return modelObj.text},this.getSize=function(){return{width:modelObj.width,height:modelObj.height}},this.show=function(){modelObj.visible=!0,addEvents()},this.hide=function(){modelObj.visible=!1,isPressed=!1,addEvents()},this.setPos=function(e){updateValues(e,"x","y"),addEvents()},this.getPos=function(){return{x:modelObj.x,y:modelObj.y}},this.enable=function(){modelObj.state=!0,addEvents()},this.disable=function(){modelObj.state=!1,addEvents()},this.getState=function(){return modelObj.state},this.setToggleState=function(e){modelObj.toggleState=e},this.getToggleState=function(){return modelObj.toggleState},this.draw=function(){var _ctx=modelObj.context,_x=modelObj.x+modelObj.paddingLeft,_y=modelObj.y+modelObj.height/2-_ht/2;"center"===modelObj.imageAlign&&(_x=modelObj.x+modelObj.width/2-_wd/2),_ctx.save();var textColor=modelObj.textColor,img,fillColor,strokeColor,_str;if(modelObj.visible&&(modelObj.state?isPressed||modelObj.toggleState?(fillColor=modelObj.bgColorState.down,textColor=modelObj.textColorState.down,strokeColor=modelObj.bgColorState.down,modelObj.imgList[1]?img=imgObj[modelObj.imgList[1]]:modelObj.imgList[0]&&(img=imgObj[modelObj.imgList[0]])):(textColor=(fillColor=modelObj.bgColorState.normal,modelObj.textColorState.normal),modelObj.imgList[0]&&(img=imgObj[modelObj.imgList[0]])):(fillColor=modelObj.bgColorState.disable,strokeColor=modelObj.bgColorState.disable,textColor=modelObj.textColorState.disable,modelObj.imgList[0]&&(img=imgObj[modelObj.imgList[0]])),modelObj.state&&isPressed&&modelObj.imgList[1]?img=imgObj[modelObj.imgList[1]]:modelObj.imgList[0]&&(img=imgObj[modelObj.imgList[0]]),fillColor&&(_ctx.fillStyle=fillColor),strokeColor&&(_ctx.strokeStyle=strokeColor),roundRect(_ctx,modelObj.x,modelObj.y,modelObj.width,modelObj.height,modelObj.curveR,!0,isPressed),img&&_ctx.drawImage(img,_x,_y,_wd,_ht)),modelObj.text&&modelObj.visible&&(_ctx.beginPath(),_xTxt=modelObj.x+modelObj.textPadding+(modelObj.width-modelObj.textPadding)/2,modelObj.imgList.length&&(_xTxt=modelObj.x+modelObj.paddingLeft+_wd+(modelObj.width-modelObj.paddingLeft-_wd)/2),_yTxt=modelObj.y+modelObj.height/2+.6*modelObj.fontSize,_ctx.fillStyle=textColor,_str="",_str+=modelObj.isItalic?"italic ":"",_str+=modelObj.isBold?"bold ":"",_ctx.font=_str+"".concat(modelObj.fontSize,"px ")+modelObj.LabComClass.klettFontRegular,_ctx.textBaseline="bottom",_ctx.textAlign="center",_ctx.fillText(modelObj.text,_xTxt,_yTxt),_ctx.closePath()),modelObj.shape.length){_ctx.save(),_ctx.translate(modelObj.x+modelObj.paddingLeft,modelObj.y+modelObj.height/2);for(var i=0;i<modelObj.shape.length;i++)for(var j=0;j<modelObj.shape[i].length;j++)eval("_ctx."+modelObj.shape[i][j]);_ctx.restore()}_ctx.restore()}}
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function TaskTableCompClass(e){var u,l={},g={x:105,y:313,height:100,taskHeights:0,width:296,visible:!0,gap:9,fontSize:16,imgList:["helpNormal.png","helpClicked.png"],sliderLeftPadding:-20,disabledAll:!1,values:{rowCount:"auto",height:66,width:300,padding:21,textAlign:"left",border:"rgba(255,255,255,1)",data:[],fontColor:"rgba(35,35,35,1)",fillColor:["rgba(224,224,224,1)"],counterBoxW:54,textW:195,helpBtn:{x:239,y:14,w:27,h:26},checkBoxBtn:{x:239,y:14,w:27,h:26}},closeBtnEnable:!1,closeBtn:{x:362,y:-20,w:16,h:16},stepsBar:{currentStep:0,x:105,y:313,h:100,w:100,text:"steps"},textWrapper:"old"},c={defaultRowCount:2,defaultHeight:300,defaultRowHeight:42,pivotPoint:{x:null,y:null},slider:{gap:3,width:12,base:{width:20},knob:{x:null,y:null,height:30}},leftArrowPos:{},rightArrowPos:{},slideArrowPos:{},arrowW:15,leftArrowEnable:!0,rightArrowEnable:!0,slideArrowEnable:!0,showSteps:!1};function s(t,a){a&&"object"===_typeof(a)&&!Array.isArray(a)?Object.keys(a).forEach(function(e){t.hasOwnProperty(e)&&"object"===_typeof(a[e])&&!Array.isArray(a[e])?s(t[e],a[e]):t[e]=a[e]}):t=a}function t(e){u=e,onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:g.id}})}function r(){for(var e=0,t=0;t<g.values.data.length;t++)e+=g.values.data[t].rowHeight;var a=(e+=g.gap*g.values.data.length-1)/g.height*100;c.slider.knob.height=100*g.height/a,i(),d()}function p(e,t,a,s,l,r,i,o,n,h,d,u){var g=9<arguments.length&&void 0!==h&&h,h=10<arguments.length?d:void 0,d=11<arguments.length?u:void 0,u=Math.PI/180;e.beginPath(),e.strokeStyle=d||"rgba(112,146,190,1)",e.lineWidth=h||2,e.moveTo(t,a),e.bezierCurveTo(s,l,r,i,o,n),e.stroke(),g&&(e.beginPath(),e.strokeStyle="black",e.lineWidth=10,e.arc(s,l,1,0*u,360*u,!1),e.stroke(),e.beginPath(),e.strokeStyle="black",e.lineWidth=10,e.arc(r,i,1,0*u,360*u,!1),e.stroke(),e.beginPath(),e.lineWidth=1,e.moveTo(t,a),e.lineTo(s,l),e.lineTo(r,i),e.lineTo(o,n),e.stroke())}function a(){c.minY=g.y;var e=g.values.rowCount,t=g.height,a=g.values.height;g.taskHeights=g.height,"auto"===e&&"auto"!==t&&"auto"!==a?(g.values.rowCount=Math.round(t/(a+g.gap)),g.taskHeights=g.values.rowCount*a+g.values.rowCount*g.gap):"auto"!==e&&"auto"===t&&"auto"!==a?g.taskHeights=e*a+(e-1)*g.gap:"auto"!==e&&"auto"!==t&&"auto"===a?g.values.height=t/e-g.gap:(g.values.rowCount=c.defaultRowCount,g.taskHeights=c.defaultHeight,g.values.height=c.defaultRowHeight),g.taskHeights=g.height,c.pivotPoint.x=g.x,c.pivotPoint.y=c.minY,c.unitY=g.values.height+g.gap,c.dataHeight=g.taskHeights,c.maxY=c.minY+c.dataHeight,c.slider.x=0,c.slider.y=0,i(),c.leftArrowPos={x:g.stepsBar.x+g.stepsBar.w-104,y:g.stepsBar.y+g.stepsBar.h/2},c.rightArrowPos={x:g.stepsBar.x+g.stepsBar.w-75,y:g.stepsBar.y+g.stepsBar.h/2},c.slideArrowPos={x:g.stepsBar.x+g.stepsBar.w-25,y:g.stepsBar.y+g.stepsBar.h/2},g.LabComClass.globalLangText[g.stepsBar.text]?g.stepsBar.text=g.LabComClass.globalLangText[g.stepsBar.text]:g.stepsBar.text="---",d(),o()}function i(){g.values.rowCount<g.values.data.length&&(g.values.rowCount=g.values.data.length);for(var e=0,t=0;t<g.values.data.length;t++)e+=g.values.data[t].rowHeight;e+=g.gap*g.values.data.length-1,c.minY+e-g.gap>c.maxY?c.slider.visible=!0:c.slider.visible=!1;var a=c.slider.y/(c.dataHeight-c.slider.knob.height)*100;c.pivotPoint.y=c.minY-(e-c.dataHeight-g.gap)*a/100}function o(){onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:g.id}});var e={};if(e.id=g.id,e.r=[],g.visible){var t,a;if(c.slider.visible&&(e.r.push({id:"knobBase",rect:{x:g.x+g.width+g.sliderLeftPadding-5,y:g.y-5,w:c.slider.width+10,h:g.height+10},cursor:"default",eventListener:n.bind(this)}),e.r.push({id:"knob",rect:{x:g.x+g.width+g.sliderLeftPadding-5,y:c.slider.y+c.minY-5,w:c.slider.width+10,h:c.slider.knob.height+10},eventListener:n.bind(this)})),!g.disabledAll)for(var s=g.x,l=c.pivotPoint.y,r=0;r<g.values.data.length;r++)l>=g.y-.9*g.values.helpBtn.h&&l<=g.y+g.taskHeights-5&&r<=g.stepsBar.currentStep&&e.r.push({id:"helpBtn_"+r,rect:{x:s+g.values.helpBtn.x,y:l+g.values.helpBtn.y,w:g.values.helpBtn.w,h:g.values.helpBtn.h},eventListener:n.bind(this)}),l+=g.values.data[r].rowHeight+g.gap;g.closeBtnEnable&&(t=g.closeBtn.w<25?25:c.closeBtn.w,a=g.closeBtn.h<25?25:c.closeBtn.h,e.r.push({id:"closeBtn_"+g.id,rect:{x:g.x+g.closeBtn.x+g.closeBtn.w-t,y:g.y+g.closeBtn.y,w:t,h:a},eventListener:n.bind(this)}))}onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:e})}function n(e){var t,a,s=e.subId&&Number(e.subId.split("_")[1]);switch(e.type){case"mousedown":c.isPressed=!0,c.isHover=!1,c.currentTarget=e.subId,c.diffY=e.pageY-(c.slider.y+c.minY),"knobBase"===e.subId&&(c.slider.y=e.pageY-c.minY-c.slider.knob.height/2,h());break;case"pressmove":"knob"===e.subId&&(c.slider.y=e.pageY-c.minY-c.diffY,h());break;case"mouseup":c.isPressed=!1,g.selected=s,"leftArrow"===e.subId?g.stepsBar.currentStep--:"rightArrow"===e.subId&&g.stepsBar.currentStep++,"slideArrow"===e.subId&&(c.showSteps=!c.showSteps,l.click&&l.click({id:g.id,type:"showSteps",value:c.showSteps})),"helpBtn"===e.subId.split("_")[0]&&l.click&&((a=Number(e.subId.split("_")[1]))===g.stepsBar.currentStep?(t="help",g.stepsBar.currentStep++):(t="reset",g.stepsBar.currentStep=a),l.click({id:g.id,type:t,value:a})),e.subId==="closeBtn_"+g.id&&l.click&&l.click({id:g.id,type:"close"}),d();break;case"mouseenter":c.isHover=s;break;case"mouseout":case"mouseupout":c.isHover=!1,c.isPressed=!1,"mouseupout"===e.type&&(i(),d())}}function h(){c.slider.y<0&&(c.slider.y=0),c.slider.y>c.dataHeight-c.slider.knob.height&&(c.slider.y=c.dataHeight-c.slider.knob.height),i()}function d(){g.stepsBar.currentStep=g.stepsBar.currentStep<=0?0:g.stepsBar.currentStep,g.stepsBar.currentStep=g.stepsBar.currentStep>=g.values.data.length?g.values.data.length:g.stepsBar.currentStep,c.rightArrowEnable=!0,c.leftArrowEnable=!0,g.stepsBar.currentStep>=g.values.data.length-1&&(c.rightArrowEnable=!1),g.stepsBar.currentStep<=0&&(c.leftArrowEnable=!1),function(){g.visible||(c.leftArrowEnable=!1,c.rightArrowEnable=!1);i(),o()}()}s(g,e),a(),g.animClass=new g.LabComClass.GlobalAnimClass,g.imgList[0]?g.LabComClass.requestGlobalImage(g.imgList,t,function(e){console.log("Images Loading Error...")}):t({}),this.addEventListener=function(e,t){l[e]=t},this.addData=function(e){var t={old:"textWrapperClass",new:"textWrapperV2Class"},a=g.context[t[g.textWrapper]]({xNum:0,yNum:0,align:"left",maxWidthNum:g.values.textW,textStr:""+e.text,fontFamilyStr:g.LabComClass.polo22KlettRegular,fontSizeNum:g.fontSize,color:"rgba(102,102,102,1)"},!1,r).imageObj,t=g.context[t[g.textWrapper]]({xNum:0,yNum:0,align:"left",maxWidthNum:g.values.textW,textStr:""+e.text,fontFamilyStr:g.LabComClass.polo22KlettRegular,fontSizeNum:g.fontSize,color:"rgba(73,124,190,1)"}).imageObj,e=(a.heightInt>t.heightInt?a:t).heightInt;g.values.data.push({text:a,boldText:t,rowHeight:e<g.values.height?g.values.height:e+3*g.gap,fillColor:"rgba(224,224,224,1)",counterColor:"rgba(170,170,170,1)"}),r()},this.getData=function(){return g.values.data},this.removeData=function(){g.values.data.length&&g.values.data.pop(),c.slider.y=0,d()},this.clearData=function(){g.values.data=[],c.slider.y=0,c.currentTarget=null,d()},this.resetStates=function(e){for(var t=0;t<g.values.data.length;t++)g.values.data[t].fillColor="rgba(224,224,224,1)",g.values.data[t].counterColor="rgba(170,170,170,1)";e&&(c.slider.y=0),c.currentTarget=null,d()},this.getStep=function(){return g.stepsBar.currentStep},this.setStep=function(e){g.stepsBar.currentStep=e;for(var t=0;t<g.values.data.length;t++)t>=g.stepsBar.currentStep&&(g.values.data[t].fillColor="rgba(224,224,224,1)",g.values.data[t].counterColor="rgba(170,170,170,1)");d()},this.show=function(){g.visible=!0,o()},this.hide=function(){g.visible=!1,o()},this.enable=function(){g.disabledAll=!1,o()},this.disable=function(){g.disabledAll=!0,o()},this.setSize=function(e){var t;t=e,["x","y","width","height"].forEach(function(e){t.hasOwnProperty(e)&&(g[e]=t[e])}),s(g,{}),a()},this.getSize=function(e){return{x:g.x,y:g.y,width:g.width,height:g.height}},this.getVisible=function(){return g.visible},this.stepsVisible=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(c.showSteps=!!e,d()),c.showSteps},this.draw=function(){if(g.visible){var e=g.context,t=g.x,a=g.y;if(g.visible){var s=c.dataHeight;e.save(),e.beginPath(),e.fillStyle="rgba(255,255,255,1)",e.strokeStyle="rgba(73,124,190,1)",e.rect(t+1,a,g.width,s),e.lineWidth=1,e.fill(),e.stroke(),e.closePath(),e.restore(),e.save(),e.beginPath(),e.fillStyle="rgba(0,0,0,0)",e.rect(t,a+1,g.width,s-2),e.closePath(),e.clip();for(var l=g.values,r=c.minY,t=c.pivotPoint.x,a=c.pivotPoint.y,i=0;i<g.values.data.length;i++){g.values.data[i];var o,n="",h=t+l.padding,d=a+10;l.data[i]&&l.data[i].text&&(o=l.data[i].text,i!==g.stepsBar.currentStep||g.disabledAll||(o=l.data[i].boldText),n={textAlign:"left",fontColor:"rgba(0,0,0,1)",text:o,x:h,y:d,fontFamily:g.LabComClass.klettFontRegular,fontSize:g.fontSize}),l.data[i]&&((d=JSON.parse(JSON.stringify(l.data[i]))).x=t,d.y=a,d.w=l.width,d.h=l.data[i].rowHeight,d.counter=i,d.text=n,function(e,t){var a=t.x,s=t.y,l=t.w,r=t.h;e.save(),e.beginPath(),e.rect(a,s,l,r),e.fill(),e.closePath(),e.clip(),e.save(),e.beginPath(),function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,a=2<arguments.length?arguments[2]:void 0,s=3<arguments.length?arguments[3]:void 0,l=4<arguments.length?arguments[4]:void 0,r=5<arguments.length?arguments[5]:void 0;e.beginPath(),e.fillStyle="rgba(255,255,255,1)",e.strokeStyle="rgba(112,146,190,1)",e.rect(a,s,l,r),e.fill(),e.stroke(),e.closePath(),null===t||t&&(e.beginPath(),e.fillStyle="rgba(112,146,190,1)",e.strokeStyle="rgba(255,255,255,1)",e.rect(a,s,l,r),e.fill(),e.stroke(),e.closePath(),e.lineWidth=2,e.lineJoin="round",e.moveTo(a+4,s+14),e.lineTo(a+10,s+19),e.lineTo(a+22,s+5),e.stroke(),g.disabledAll&&(e.beginPath(),e.fillStyle="rgba(255,255,255,0.5)",e.rect(a,s,l,r),e.fill(),e.closePath()))}(e,t.counter<g.stepsBar.currentStep,a+g.values.checkBoxBtn.x,s+g.values.checkBoxBtn.y,g.values.checkBoxBtn.w,g.values.checkBoxBtn.h),t.counter>=g.stepsBar.currentStep&&function(e,t,a,s,l,r){e.beginPath(),e.fillStyle="rgba(255,255,255,1)";u[g.imgList[0]];c.isPressed&&c.currentTarget==="helpBtn_"+t&&(u[g.imgList[1]],e.fillStyle="rgba(96, 96, 96, 1)",0);e.rect(a,s,l,r),e.fill(),e.closePath(),e.beginPath(),function(e,t,a){e.save(),e.translate(t,a),p(e,10.2,9,14,4,18.5,7,15.2,11.5,0,3.5),p(e,15.6,11.5,9.5,13.6,15.2,15.2,11.5,14,0,3.5),e.lineWidth=1,e.closePath(),e.beginPath(),e.fillStyle="rgba(112,146,190,1)",e.arc(12.7,19.5,1.5,0,2*Math.PI),e.fill(),e.stroke(),e.restore()}(e,a,s),e.closePath(),(!g.disabledAll&&t>g.stepsBar.currentStep||g.disabledAll)&&(e.beginPath(),e.fillStyle="rgba(255,255,255,0.5)",e.rect(a,s,l,r),e.fill(),e.closePath())}(e,t.counter,a+g.values.helpBtn.x,s+g.values.helpBtn.y,g.values.helpBtn.w,g.values.helpBtn.h);e.restore(),t.text&&function(e,t){var a=t.x,s=t.y,l=t.text,r=t.fontFamily,i=t.fontSize;t.textAlign,t.fontColor;"object"!==_typeof(l)?(e.save(),e.beginPath(),e.textAlign=t.textAlign,e.textBaseline="bottom",e.fillStyle=t.fontColor,e.drawStyledText(l,a,s+i/2+.1*i,r,i),e.closePath(),e.restore()):l.imageObj&&(e.save(),e.beginPath(),e.fillStyle="rgba(112,146,190,1)",e.drawImage(l.imageObj,a,s,l.widthInt,l.heightInt),e.closePath(),e.restore())}(e,t.text);e.closePath(),e.restore(),t.counter!==g.values.data.length-1&&(e.save(),e.beginPath(),e.lineWidth=1,e.strokeStyle="rgba(170,170,166,0.6)",e.moveTo(a+17,s+r+g.gap/2),c.slider.visible?e.lineTo(a+l-17+g.sliderLeftPadding,s+r+g.gap/2):e.lineTo(a+l-17,s+r+g.gap/2),e.stroke(),e.closePath(),e.restore())}(e,d),a+=l.data[i].rowHeight+g.gap)}e.restore(),c.slider.visible&&(e.save(),e.strokeStyle="rgba(0,0,0,1)",e.rect(g.x+.5,g.y+.5,g.width-1,g.height-1),e.clip(),e.save(),e.beginPath(),e.translate(g.x+g.width+g.sliderLeftPadding,r),e.strokeStyle="rgba(210,210,210,1)",e.rect(0,0,c.slider.width,s),e.stroke(),e.closePath(),e.beginPath(),e.fillStyle="rgba(213, 213, 213, 1)",c.isPressed&&"knob"===c.currentTarget&&(e.fillStyle="rgba(102, 102, 102, 1)"),e.rect(0,c.slider.y,c.slider.width,c.slider.knob.height),e.fill(),e.closePath(),e.restore(),e.restore())}g.closeBtnEnable&&(e.save(),e.beginPath(),e.fillStyle="rgba(142,142,142,1)",e.strokeStyle="rgba(142,142,142,0)",c.isPressed&&c.currentTarget==="closeBtn_"+g.id&&(e.fillStyle="rgba(51,51,51,1)"),e.rect(g.x+g.closeBtn.x,g.y+g.closeBtn.y,g.closeBtn.w,g.closeBtn.h),e.fill(),e.stroke(),e.closePath(),e.save(),e.beginPath(),e.strokeStyle="rgba(255,255,255,1)",e.translate(g.x+g.closeBtn.x+g.closeBtn.w/2,g.y+g.closeBtn.y+g.closeBtn.h/2),e.rotate(Math.PI/4),e.moveTo(-5,0),e.lineTo(5,0),e.stroke(),e.moveTo(0,-5),e.lineTo(0,5),e.stroke(),e.closePath(),e.restore(),e.restore())}}}
"use strict";function ZoomControlsCompClass(t){var o={},n={visible:!0,state:!0,imgList:[],x:1068,y:573,buttonWidth:30,buttonHeight:30,movementInPxl:{moveLeft:{x:10},moveRight:{x:-10},moveTop:{y:10},moveBottom:{y:-10}},buttons:[{type:"zoomOut",enable:!0},{type:"zoomReset",enable:!0},{type:"zoomIn",enable:!0},{type:"moveLeft",enable:!0},{type:"moveBottom",enable:!0},{type:"moveTop",enable:!0},{type:"moveRight",enable:!0}],resetVal:1,currentBtn:null,isHover:!1,isDown:!1};Object.keys(t).forEach(function(e){n[e]=t[e]}),n.imgList.length?n.LabComClass.requestGlobalImage(n.imgList,b,function(e){console.log("Images Loading Error...")}):b({});for(var e=32,i=1.5,s=[{pixelQube:.03247869526074549,tick:5e3,toFixed:0},{pixelQube:.04871804289111823,tick:2e3,toFixed:0},{pixelQube:.07307706433667735,tick:1e3,toFixed:0},{pixelQube:.10961559650501602,tick:1e3,toFixed:0},{pixelQube:.16442339475752404,tick:500,toFixed:0},{pixelQube:.24663509213628607,tick:500,toFixed:0},{pixelQube:.3699526382044291,tick:200,toFixed:0},{pixelQube:.5549289573066436,tick:200,toFixed:0},{pixelQube:.8323934359599654,tick:100,toFixed:0},{pixelQube:i/38.443359375*e,tick:100,toFixed:0},{pixelQube:i/25.62890625*e,tick:50,toFixed:0},{pixelQube:i/17.0859375*e,tick:50,toFixed:0},{pixelQube:i/11.390625*e,tick:20,toFixed:0},{pixelQube:i/7.59375*e,tick:20,toFixed:0},{pixelQube:i/5.0625*e,tick:10,toFixed:0},{pixelQube:i/3.375*e,tick:5,toFixed:0},{pixelQube:i/2.25*e,tick:2,toFixed:0},{pixelQube:e,tick:1,toFixed:0,reset:!0},{pixelQube:48,tick:1,toFixed:0},{pixelQube:72,tick:1,toFixed:0},{pixelQube:108,tick:.5,toFixed:1},{pixelQube:162,tick:.5,toFixed:1},{pixelQube:243,tick:.2,toFixed:1},{pixelQube:364.5,tick:.2,toFixed:1},{pixelQube:546.75,tick:.1,toFixed:1},{pixelQube:820.125,tick:.1,toFixed:1},{pixelQube:1230.1875,tick:.05,toFixed:2},{pixelQube:1845.28125,tick:.05,toFixed:2},{pixelQube:2767.921875,tick:.02,toFixed:2},{pixelQube:4151.8828125,tick:.02,toFixed:2},{pixelQube:6227.82421875,tick:.01,toFixed:2},{pixelQube:9341.736328125,tick:.01,toFixed:2},{pixelQube:14012.6044921875,tick:.005,toFixed:3},{pixelQube:21018.90673828125,tick:.005,toFixed:3},{pixelQube:26400,tick:.002,toFixed:3},{pixelQube:86400,tick:.001,toFixed:3},{pixelQube:172800,tick:5e-4,toFixed:4},{pixelQube:345600,tick:2e-4,toFixed:4},{pixelQube:72e4,tick:1e-4,toFixed:4},{pixelQube:144e4,tick:5e-5,toFixed:5},{pixelQube:384e4,tick:2e-5,toFixed:5},{pixelQube:912e4,tick:1e-5,toFixed:5}],a=0;a<s.length;a++)if(s[a].reset){n.resetVal=a;break}function l(e,t){e.save();switch(e.beginPath(),e.fillStyle="rgba(255,255,255,1)",t.enable&&n.isDown&&n.currentBtn===t.type&&(e.fillStyle="rgba(96, 96, 96, 1)"),e.rect(t.x,t.y,n.buttonWidth,n.buttonHeight),t.enable&&n.isHover&&!n.isDown&&n.currentBtn===t.type&&(e.strokeStyle="rgba(96, 96, 96, 1)",e.stroke()),e.fill(),e.closePath(),e.strokeStyle="rgba(53,53,53,1)",t.enable||(e.strokeStyle="rgba(144,144,144,1)"),e.lineWidth=1,t.enable&&(n.isHover||n.isDown)&&n.currentBtn===t.type&&(n.isHover&&(e.strokeStyle="rgba(96, 96, 96, 1)"),n.isDown&&(e.strokeStyle="rgba(255,255,255,1)"),e.lineWidth=2),t.type){case"zoomIn":e.beginPath(),e.translate(t.x+n.buttonWidth/2,t.y+n.buttonHeight/2),e.moveTo(-5,0),e.lineTo(5,0),e.stroke(),e.moveTo(0,-5),e.lineTo(0,5),e.stroke(),e.closePath();break;case"zoomReset":e.beginPath(),e.translate(t.x+n.buttonWidth/2,t.y+n.buttonHeight/2),e.arc(0,0,5,0,2*Math.PI),e.stroke(),e.closePath();break;case"zoomOut":e.beginPath(),e.translate(t.x+n.buttonWidth/2,t.y+n.buttonHeight/2),e.moveTo(-5,0),e.lineTo(5,0),e.stroke(),e.closePath();break;case"moveLeft":u(e,t,180*Math.PI/180);break;case"moveRight":u(e,t,0);break;case"moveBottom":u(e,t,90*Math.PI/180);break;case"moveTop":u(e,t,270*Math.PI/180)}e.restore()}function u(e,t,o){e.save(),e.beginPath(),e.translate(t.x+n.buttonWidth/2,t.y+n.buttonHeight/2),e.rotate(o),e.moveTo(-7,0),e.lineTo(7,0),e.stroke(),e.moveTo(1,-5),e.lineTo(7,0),e.lineTo(1,5),e.stroke(),e.closePath(),e.restore()}function b(e){onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:n.id}}),r()}function r(){for(var e=0;e<n.buttons.length;e++)n.buttons[e].x=n.x+n.buttonWidth*e,n.buttons[e].y=n.y;d()}function c(){n.buttons[0].enable=!0,n.buttons[1].enable=!0,n.buttons[2].enable=!0,n.zoomVal<=0&&(n.buttons[0].enable=!1),n.zoomVal>=s.length-1&&(n.buttons[2].enable=!1),d()}function d(){onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:n.id}});var e={};if(e.id=n.id,e.r=[],e.r.push({id:"base",rect:{x:n.x,y:n.y,w:3*n.buttonWidth,h:n.buttonHeight},cursor:"default",eventListener:x.bind(this)}),n.state&&n.visible)for(var t=0;t<n.buttons.length;t++)n.buttons[t].enable&&e.r.push({id:n.buttons[t].type,rect:{x:n.buttons[t].x,y:n.buttons[t].y,w:n.buttonWidth,h:n.buttonHeight},eventListener:x.bind(this)});onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:e})}function x(e){if(e.subId&&"base"!==e.subId){e.subId&&"base"!==e.subId&&(n.currentBtn=e.subId);var t="scroll"+n.id,o=!1,i=0;switch(e.type){case"mousedown":n.isDown=!0,n.animClass.stop(t),e.subId.includes("zoom")||n.animClass.start({id:t,fps:40,frame:function(){10<++i&&(o=!0,m(e))}});break;case"mouseup":o||m(e),n.isDown=!1,n.animClass.stop(t);break;case"mouseupout":n.isDown=!1,n.isHover=!1,n.animClass.stop(t);break;case"mouseenter":e.subId&&"base"!==e.subId&&(n.isHover=!0);break;case"mouseout":n.isHover=!1}}}function m(e){if(n.isDown&&null!==n.currentBtn||e.forceReset){var t={id:n.id,value:e.subId};if(e.subId.includes("move"))t.data={x:0,y:0},n.movementInPxl[e.subId].x&&(t.data.x=n.movementInPxl[e.subId].x),n.movementInPxl[e.subId].y&&(t.data.y=n.movementInPxl[e.subId].y);else if(e.subId.includes("zoom")){switch(e.subId){case"zoomIn":n.zoomVal++;break;case"zoomReset":n.zoomVal=n.resetVal;break;case"zoomOut":n.zoomVal--}n.zoomVal<0&&(n.zoomVal=0),n.zoomVal>s.length-1&&(n.zoomVal=s.length-1),t.data=s[n.zoomVal],c()}void 0!==o.click&&o.click(t)}}n.animClass=new n.LabComClass.GlobalAnimClass,this.addEventListener=function(e,t){o[e]=t},this.setValue=function(e){n.zoomVal=e,c();e={id:n.id,value:"zoomIn",data:s[n.zoomVal]};void 0!==o.click&&o.click(e)},this.getValue=function(){return{zoomVal:n.zoomVal,resetVal:n.resetVal}},this.setText=function(e){n.text=e},this.getText=function(){return n.text},this.show=function(){n.visible=!0,d()},this.hide=function(){n.visible=!1,d()},this.reset=function(){n.zoomVal=n.resetVal,m({subId:"zoomReset",forceReset:!0}),c()},this.setPos=function(e,t){n.x=e,n.y=t,r()},this.getPos=function(){return{x:n.x,y:n.y}},this.enable=function(){n.state=!0,d()},this.disable=function(){n.state=!1,d()},this.getState=function(){return n.state},this.draw=function(){if(n.visible){var e,t=n.context;for(t.save(),t.beginPath(),t.strokeStyle="rgba(35,35,35,0.2)",t.rect(n.x-.5,n.y-.5,n.buttonWidth*n.buttons.length+1,n.buttonHeight+1),t.stroke(),t.closePath(),e=0;e<n.buttons.length;e++)n.currentBtn!==n.buttons[e].type&&l(t,n.buttons[e]);for(e=0;e<n.buttons.length;e++)n.currentBtn===n.buttons[e].type&&l(t,n.buttons[e]);t.restore()}}}
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ToolPanelCompClass(e){var t,a,l,i,r={},d={x:21,y:612,shapeTopMargin:15,pointRadius:4,visible:!0,enabled:!0,selected:"move",baseColor:"rgba(255,255,255,1)",textSelectedColor:"rgba(73,124,190,1)",textColor:"rgba(170,170,166,1)",selColor:"rgba(73,124,190,1)",lineColor:"rgba(73,124,190,1)",circleColor:"rgba(73,124,190,1)",disableColor:"rgba(73,124,190,1)",redColor:"rgba(255,0,0,1)",fontSize:16,maxWidth:100,textPadding:10,trangleW:8,trangleH:9,buttons:{move:{text:"move",info:"moveInfo",maxWidth:375},point:{text:"point",maxWidth:375},segment:{text:"segment",maxWidth:375},segmentDash:{text:"segment",maxWidth:375},segSize:{text:"angleSize",maxWidth:375},ray:{text:"ray",maxWidth:375},line:{text:"line",maxWidth:375},angleRay:{text:"angleRay",maxWidth:375},angle:{text:"angle",maxWidth:375},triangle:{text:"triangle",maxWidth:375},parallelLine:{text:"parallelLine",maxWidth:375},perpendicularLine:{text:"perpendicularLine",maxWidth:375},midPoint:{text:"length",maxWidth:375},circle:{text:"circle",maxWidth:375},circleSize:{text:"circleSize",maxWidth:375},compass:{text:"compass",maxWidth:375},circle_3:{text:"circle_3",maxWidth:375},length:{text:"length",maxWidth:375},angleB:{text:"length",maxWidth:375},perpendicularBisector:{text:"length",maxWidth:375},angleSize:{text:"angleSize",maxWidth:375},brush1:{text:"brush1",color:"rgba(10,190,220,1)",maxWidth:375},brush2:{text:"brush2",color:"rgba(222,108,225,1)",maxWidth:375},brush3:{text:"brush3",color:"rgba(255,204,0,1)",maxWidth:375},mirrorOnLine:{text:"mirrorOnLine",maxWidth:375},square:{text:"mirrorOnLine",maxWidth:375},select:{text:"select",maxWidth:375}}},x={isPressed:!1,isHover:!1,padding:20,hoverOn:null},o=this;t=d.buttons,Object.keys(t).forEach(function(e){t[e].type=e,t[e].visible=!1,t[e].enable=!0,t[e].height=49,"move"===e&&(t[e].visible=!0)}),function t(o,a){a&&"object"===_typeof(a)&&!Array.isArray(a)?Object.keys(a).forEach(function(e){o.hasOwnProperty(e)&&"object"===_typeof(a[e])&&!Array.isArray(a[e])?t(o[e],a[e]):o[e]=a[e]}):o=a}(d,e),d.fontFamily=d.LabComClass.polo22KlettRegular,onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:d.id}}),a=d.x,l=d.buttons,(i=d.context).save(),i.font=d.fontSize+"px "+d.fontFamily,Object.keys(l).forEach(function(e){var t,o;l[e].visible&&(l[e].x=a,l[e].y=d.y,l[e].text=n(l[e].text),l[e].headText&&(l[e].headText=n(l[e].headText)),l[e].info=n(l[e].info),l[e].unitText&&(l[e].unitText=n(l[e].unitText)),l[e].width=i.measureText(l[e].text).width,a+=l[e].width+x.padding,t=l[e],(o=d.context.textWrapperClass({xNum:0,yNum:0,maxWidthNum:t.maxWidth-2*d.textPadding,textStr:t.info,fontFamilyStr:d.LabComClass.polo22KlettRegular,fontSizeNum:16,color:"rgba(142,142,142,1)",align:"left",fontFormat:"px "})).text=o.imageObj.imageObj,o.width=o.imageObj.widthInt,o.height=o.imageObj.heightInt,(e=d.context.textWrapperClass({xNum:0,yNum:0,maxWidthNum:t.maxWidth-2*d.textPadding,textStr:"§b"+(t.headText||t.text)+"§r",fontFamilyStr:d.LabComClass.polo22KlettRegular,fontSizeNum:17,color:"rgba(130,130,130,1)",align:"left",fontFormat:"px "})).text=e.imageObj.imageObj,e.width=e.imageObj.widthInt,e.height=e.imageObj.heightInt,t.base=function(e,t,o){var a=o.x+o.width/2,l=o.y+1,i=e.width+2*d.textPadding;a-=.5*i,l-=e.height+2*d.textPadding+d.trangleH+t.height,a<d.x&&(a=d.x);return{x:a,y:l,percent:(o.x+o.width/2-a)/i*100,width:e.width,height:e.height,textImg:e.text}}(o,e,t),t.base.textHead=e)}),i.restore(),s(),this.addEventListener=function(e,t){r[e]=t},this.getVisible=function(){return d.visible},this.show=function(){d.visible=!0,s()},this.hide=function(){d.visible=!1,s()},this.getSize=function(){return{width:d.width,height:d.height}},this.enable=function(){d.enabled=!0,s()},this.reset=function(){d.selected="move",o.enable()},this.disable=function(){d.enabled=!1,s()},this.getPos=function(){return{x:d.x,y:d.y}},this.setPos=function(e){!function(t){for(var e=arguments.length,o=new Array(1<e?e-1:0),a=1;a<e;a++)o[a-1]=arguments[a];o.forEach(function(e){void 0!==t[e]&&(d[e]=t[e])})}(e,"x","y"),s()},this.getEnabled=function(){return d.enabled},this.setSelected=function(e){d.selected=e},this.getSelected=function(){return d.selected},this.draw=function(){var o;d.visible&&((o=d.context).save(),Object.keys(d.buttons).forEach(function(e){var t;d.buttons[e].visible&&(function(e,t){var o=t.x,a=t.y,l=t.width,i=t.height,r=d.pointRadius;e.save(),e.beginPath(),d.enabled||(e.globalAlpha=.5);switch(t.type){case"move":e.translate(o+l/2-4,a+d.shapeTopMargin/2),e.rotate(65*Math.PI/180),e.beginPath(),e.strokeStyle=d.lineColor,e.fillStyle="rgba(255,255,255,1)",e.lineWidth=1,e.moveTo(0,0),e.lineTo(10,-5),e.lineTo(10,-1),e.lineTo(15,-1),e.lineTo(15,1),e.lineTo(10,1),e.lineTo(10,5),e.lineTo(0,0),e.stroke(),e.closePath();break;case"point":m({ctx:e,x:o+l/2,y:a+d.shapeTopMargin});break;case"circle":e.translate(o+l/2,a+d.shapeTopMargin),m({ctx:e}),m({ctx:e,r:3*r,fill:!1,stroke:!0}),m({ctx:e,x:3*r});break;case"circleSize":e.translate(o+l/2,a+d.shapeTopMargin),e.beginPath(),e.strokeStyle=d.lineColor,e.moveTo(0,0),e.lineTo(3*r,-3),e.stroke(),e.closePath(),m({ctx:e}),m({ctx:e,r:3*r,fill:!1,stroke:!0});break;case"compass":e.translate(o+l/2,a+d.shapeTopMargin),e.beginPath(),m({ctx:e,r:.7*r,x:-2,y:-8}),e.closePath(),e.beginPath(),e.moveTo(-2,-8),e.lineTo(0,12),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(-2,-8),e.lineTo(-12,12),e.stroke(),e.closePath(),e.beginPath(),b(e,0,12,12,4,50),e.stroke(),e.closePath(),e.beginPath(),e.arc(-2,-8,2*r,1.47,1.97,!1),e.stroke(),e.closePath();break;case"circle_3":e.translate(o+l/2,a+d.shapeTopMargin),m({ctx:e,r:3*r,fill:!1,stroke:!0}),e.closePath();var n=45*Math.PI/180;e.save(),e.rotate(1/3*(2*Math.PI)-n),m({ctx:e,x:3*r}),e.restore(),e.save(),e.rotate(2/3*(2*Math.PI)-n),m({ctx:e,x:3*r}),e.restore(),e.save(),e.rotate(2*Math.PI*1-n),m({ctx:e,x:3*r}),e.restore();break;case"midPoint":e.translate(o+l/2,a+d.shapeTopMargin),e.rotate(2.6),m({ctx:e,fillColor:d.redColor}),m({ctx:e,x:-10}),m({ctx:e,x:10});break;case"triangle":e.translate(o+l/2,a+d.shapeTopMargin),e.beginPath(),e.lineWidth=1,e.strokeStyle=d.lineColor,e.moveTo(0,-10),e.lineTo(-10,10),e.stroke(),e.closePath(),e.beginPath(),e.lineWidth=1,e.strokeStyle=d.lineColor,e.moveTo(0,-10),e.lineTo(10,10),e.stroke(),e.closePath(),e.beginPath(),e.lineWidth=1,e.strokeStyle=d.lineColor,e.moveTo(-10,10),e.lineTo(10,10),e.stroke(),e.closePath(),m({ctx:e,y:-10}),m({ctx:e,x:-10,y:10}),m({ctx:e,x:10,y:10});break;case"square":e.translate(o+l/2,a+d.shapeTopMargin),e.beginPath(),e.lineWidth=1,e.strokeStyle=d.lineColor,e.moveTo(-10,-10),e.lineTo(-10,10),e.stroke(),e.closePath(),e.beginPath(),e.lineWidth=1,e.strokeStyle=d.lineColor,e.moveTo(-10,-10),e.lineTo(10,-10),e.stroke(),e.closePath(),e.beginPath(),e.lineWidth=1,e.strokeStyle=d.lineColor,e.moveTo(-10,10),e.lineTo(10,10),e.stroke(),e.closePath(),e.beginPath(),e.lineWidth=1,e.strokeStyle=d.lineColor,e.moveTo(10,-10),e.lineTo(10,10),e.stroke(),e.closePath(),m({ctx:e,x:-10,y:-10}),m({ctx:e,x:10,y:-10}),m({ctx:e,x:-10,y:10}),m({ctx:e,x:10,y:10});break;case"segment":case"segmentDash":case"segSize":e.translate(o+l/2,a+d.shapeTopMargin),e.rotate(2.6),e.beginPath(),e.strokeStyle=d.lineColor,"segmentDash"===t.type&&e.setLineDash([4,2]),"segSize"===t.type&&(e.font=d.fontSize+"px "+d.fontFamily,e.save(),e.textAlign="left",e.textBaseline="bottom",e.fillStyle=d.textColor,e.rotate(-2.6),e.drawStyledText("a",-8,.2*d.fontSize,d.LabComClass.polo22KlettRegular,d.fontSize),e.restore()),e.lineWidth=1,e.moveTo(-10,0),e.lineTo(10,0),e.stroke(),e.closePath(),m({ctx:e,x:-10}),m({ctx:e,x:10});break;case"line":e.translate(o+l/2,a+d.shapeTopMargin),e.rotate(2.6),e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(-20,0),e.lineTo(20,0),e.stroke(),e.closePath(),m({ctx:e,x:-10}),m({ctx:e,x:10});break;case"mirrorOnLine":case"line":e.translate(o+l/2,a+d.shapeTopMargin),e.save(),e.beginPath(),e.rotate(2.3+Math.PI/2),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(-15,0),e.lineTo(15,0),e.stroke(),e.closePath(),e.restore(),m({ctx:e,x:-5,y:7,r:3}),m({ctx:e,x:5,y:-7,r:3});break;case"angleRay":r*=.6,e.translate(o+.4*l,a+d.shapeTopMargin),e.save(),e.rotate(-.58),e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(0,0),e.lineTo(20,0),e.stroke(),e.closePath(),m({ctx:e,x:12,r:r}),e.restore(),e.save(),e.rotate(.58),e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(0,0),e.lineTo(20,0),e.stroke(),e.closePath(),m({ctx:e,x:12,r:r}),e.restore(),m({ctx:e,r:r}),m({ctx:e,r:2.2*r,startAngle:-.58,endAngle:.58,fill:!1,stroke:!0});break;case"angle":r*=.6,e.translate(o+.4*l,a+d.shapeTopMargin),e.save(),e.beginPath(),e.rotate(-.58),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(0,0),e.lineTo(20,0),e.stroke(),e.closePath(),m({ctx:e,x:20,r:r}),e.restore(),e.save(),e.beginPath(),e.rotate(.58),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(0,0),e.lineTo(20,0),e.stroke(),e.closePath(),m({ctx:e,x:20,r:r}),e.restore(),m({ctx:e,r:r}),m({ctx:e,r:3.2*r,startAngle:-.58,endAngle:.58,fillColor:"rgba(112,146,190,0.5)",fill:!0,stroke:!0}),e.save(),e.beginPath(),e.fillStyle=d.textColor,(d.selected===t.type||t.enable&&x.hoverOn===t.type)&&(e.fillStyle=d.textSelectedColor),e.font=d.fontSize+"px "+d.fontFamily,e.textAlign="left",e.textBaseline="bottom",e.drawStyledText("α",12,.5*d.fontSize,d.LabComClass.polo22KlettRegular,d.fontSize),e.closePath(),e.restore();break;case"angleB":r*=.6,e.translate(o+.4*l,a+d.shapeTopMargin),e.save(),e.beginPath(),e.rotate(-.58),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(0,0),e.lineTo(20,0),e.stroke(),e.closePath(),m({ctx:e,x:20,r:r}),e.restore(),e.save(),e.beginPath(),e.rotate(.58),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(0,0),e.lineTo(20,0),e.stroke(),e.closePath(),m({ctx:e,x:20,r:r}),e.restore(),m({ctx:e,r:r}),m({ctx:e,r:3.2*r,startAngle:-.58,endAngle:.58,fillColor:"rgba(112,146,190,0.5)",fill:!0,stroke:!0}),e.save(),e.beginPath(),e.strokeStyle="rgba(255,0,0,1)",e.lineWidth=1,e.moveTo(-10,0),e.lineTo(20,0),e.stroke(),e.closePath(),e.restore(),e.save(),e.beginPath(),e.fillStyle=d.textColor,(d.selected===t.type||t.enable&&x.hoverOn===t.type)&&(e.fillStyle=d.textSelectedColor),e.font=d.fontSize+"px "+d.fontFamily,e.textAlign="left",e.textBaseline="bottom",e.closePath(),e.restore();break;case"perpendicularLine":e.translate(o+l/2,a+d.shapeTopMargin-3),e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(-10,0),e.lineTo(10,0),e.stroke(),e.moveTo(0,-6),e.lineTo(0,13),e.stroke(),e.closePath(),m({ctx:e,r:5.7,fill:!1,stroke:!0,startAngle:0,endAngle:Math.PI/2}),m({ctx:e,x:2.2,y:2.2,r:.7,fill:!0});break;case"perpendicularBisector":e.translate(o+l/2,a+d.shapeTopMargin),e.save(),e.rotate(2.6),e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(-10,0),e.lineTo(10,0),e.stroke(),e.closePath(),m({ctx:e,x:-10}),m({ctx:e,x:10}),e.restore(),e.save(),e.beginPath(),e.rotate(2.6+Math.PI/2),e.strokeStyle="rgba(255,0,0,1)",e.lineWidth=1,e.moveTo(-15,0),e.lineTo(15,0),e.stroke(),e.closePath(),e.restore();break;case"parallelLine":e.translate(o+l/2,a+d.shapeTopMargin),e.rotate(2.6),e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(-15,-3),e.lineTo(15,-3),e.stroke(),e.moveTo(-15,3),e.lineTo(15,3),e.stroke(),e.closePath(),m({ctx:e,x:4,y:-3});break;case"brush1":e.translate(o+l/2,a+d.shapeTopMargin),g(e,d.buttons.brush1.color);break;case"brush2":e.translate(o+l/2,a+d.shapeTopMargin),g(e,d.buttons.brush2.color);break;case"brush3":e.translate(o+l/2,a+d.shapeTopMargin),g(e,d.buttons.brush3.color);break;case"select":e.translate(o+l/2,a+d.shapeTopMargin),e.beginPath(),e.strokeStyle=d.lineColor,e.fillStyle=d.lineColor,e.lineWidth=1,e.setLineDash([4,2]),e.rect(-8,-8,16,16),e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=d.lineColor,e.fillStyle=d.lineColor,e.lineWidth=1,function(e,t,o,a,l,i){var r=6<arguments.length&&void 0!==arguments[6]?arguments[6]:0;e.beginPath(),e.translate(t,o),e.rotate(r),e.moveTo(0,0),e.lineTo(a,0),e.stroke(),e.beginPath(),e.moveTo(a,0),e.lineTo(a-l/2,-i/2),e.lineTo(a-l/2,i/2),e.closePath(),e.fill(),e.stroke(),e.closePath()}(e,8,8,11,15,8,-135*Math.PI/180),e.closePath();break;case"ray":e.translate(o+l/2,a+d.shapeTopMargin),e.rotate(2.6),e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(-20,0),e.lineTo(10,0),e.stroke(),e.closePath(),m({ctx:e,x:-10}),m({ctx:e,x:10});break;case"angleSize":r*=.6,e.translate(o+.4*l,a+d.shapeTopMargin),e.save(),e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(-10,12),e.lineTo(20,12),e.stroke(),e.closePath(),m({ctx:e,x:-10,y:12,r:r}),e.restore(),m({x:5,y:-8,ctx:e,r:r}),m({ctx:e,x:-10,y:12,r:3.2*r,startAngle:-.99,endAngle:0,fillColor:"rgba(112,146,190,0.5)",fill:!0,stroke:!0}),e.save(),e.beginPath(),e.fillStyle=d.textColor,(d.selected===t.type||t.enable&&x.hoverOn===t.type)&&(e.fillStyle=d.textSelectedColor),e.font=d.fontSize+"px "+d.fontFamily,e.textAlign="left",e.textBaseline="bottom",e.drawStyledText("α",3,.75*d.fontSize,d.LabComClass.polo22KlettRegular,d.fontSize),e.closePath(),e.restore();break;case"length":e.save(),e.translate(o+l/2,a+d.shapeTopMargin),e.rotate(45*Math.PI/180),e.beginPath(),e.strokeStyle=d.lineColor,e.moveTo(-12,-5),e.lineTo(12,-5),e.lineTo(12,5),e.lineTo(-12,5),e.lineTo(-12,-5),e.stroke(),e.closePath();for(var s=-3;s<=4;s++)s%2!=0?(e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(3*s,-5),e.lineTo(3*s,-2),e.stroke(),e.closePath()):s%2==0&&(e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(3*s,-5),e.lineTo(3*s,0),e.stroke(),e.closePath());e.restore()}e.closePath(),e.restore(),e.save(),e.beginPath(),e.fillStyle=d.textColor;var h="",c=!1;d.enabled&&(d.selected===t.type||t.enable&&x.hoverOn===t.type)&&(e.fillStyle=d.textSelectedColor,c=!0);h+=c?"bold ":"",e.font=h+d.fontSize+"px "+d.fontFamily,e.textAlign="center",e.textBaseline="bottom",e.drawStyledText(t.text,o+l/2,a+i,d.LabComClass.polo22KlettRegular,d.fontSize),e.closePath(),e.restore()}(o,d.buttons[e]),d.buttons[e].base&&d.buttons[e].type===x.hoverOn&&(t=d.buttons[e],(e=d.context).save(),e.textBaseline="bottom",function(e){var t=e.ctx,o=e.x,a=e.y,l=e.width,i=e.height,r=e.fill,n=e.stroke,s=void 0===n||n,h=e.drawUpperCorners,n=e.drawLowerCorners,c=e.radius,e=e.percent/100;t.fillStyle="rgba(255, 255, 255, 1)",t.strokeStyle="rgba(142, 142, 142, 1)",void 0===c&&(c=5);{var x;"number"==typeof c?c=h?{tl:c,tr:c,br:0,bl:0}:n?{tl:0,tr:0,br:c,bl:c}:{tl:c,tr:c,br:c,bl:c}:(x={tl:0,tr:0,br:0,bl:0},Object.keys(x).forEach(function(e){c[e]=c[e]||x[e]}))}t.beginPath(),t.moveTo(o+c.tl,a),t.lineTo(o+(l-c.tr),a),t.quadraticCurveTo(o+l,a,o+l,a+c.tr),t.lineTo(o+l,a+i-c.tr),t.quadraticCurveTo(o+l,a+i,o+(l-c.br),a+i),t.lineTo(o+l*e+d.trangleW,a+i),t.lineTo(o+l*e,a+i+d.trangleH),t.lineTo(o+l*e-d.trangleW,a+i),t.lineTo(o+c.bl,a+i),t.quadraticCurveTo(o,a+i,o,a+(i-c.bl)),t.lineTo(o,a+c.tl),t.quadraticCurveTo(o,a,o+c.tl,a),r&&t.fill();s&&(t.lineWidth=1,t.stroke());t.closePath()}({ctx:e,x:t.base.x,y:t.base.y,percent:t.base.percent,width:t.base.width+2*d.textPadding,height:t.base.height+t.base.textHead.height+2*d.textPadding,radius:0,fill:!0,stroke:!0}),e.save(),e.translate(t.base.x,t.base.y),e.beginPath(),e.fillStyle=d.fontColor,e.drawImage(t.base.textHead.text,d.textPadding,d.textPadding,t.base.textHead.width,t.base.textHead.height),e.drawImage(t.base.textImg,d.textPadding,d.textPadding+t.base.textHead.height,t.base.width,t.base.height),e.closePath(),e.restore(),e.restore()))}),o.restore())};var b=function(e,t,o,a,l,i){var r,n,s=0;for(i=i||100,e.beginPath(),e.lineWidth=.5;s<i;)n=2*Math.PI*(s/i),r=t+Math.cos(n)*a,n=o+Math.sin(n)*l,e.lineTo(r,n),s+=1;e.closePath(),e.stroke()};function g(e,t){e.rotate(2.4),e.beginPath(),e.fillStyle=t,e.strokeStyle=t,e.lineWidth=1,e.moveTo(4.5,3),e.lineTo(4.5,-3),e.lineTo(6,-4),e.lineTo(9,-4),e.lineTo(15,3),e.lineTo(12,3),e.lineTo(9,5),e.lineTo(4.5,3),e.stroke(),e.fill(),e.closePath(),e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(-15,-3),e.lineTo(4,-3),e.stroke(),e.moveTo(4,3),e.lineTo(4,-3),e.stroke(),e.moveTo(-15,3),e.lineTo(4,3),e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=d.lineColor,e.lineWidth=1,e.moveTo(4,3),e.bezierCurveTo(10,10,12,1,18,4),e.stroke(),e.moveTo(4,-3),e.bezierCurveTo(10,-8,12,1,18,4),e.stroke(),e.closePath()}function m(e){var t=e.ctx,o=e.x,a=void 0===o?0:o,l=e.y,i=void 0===l?0:l,r=e.r,n=void 0===r?d.pointRadius:r,s=e.fill,o=void 0===s||s,l=e.stroke,r=void 0!==l&&l,s=e.fillColor,l=void 0===s?d.circleColor:s,s=e.startAngle,s=void 0===s?0:s,e=e.endAngle,e=void 0===e?2*Math.PI:e;t.beginPath(),t.lineWidth=1,t.fillStyle=l,t.strokeStyle=d.circleColor,t.arc(a,i,n,s,e),o&&t.fill(),r&&t.stroke(),t.closePath()}function n(e){return d.LabComClass.globalLangText[e]||"---"}function s(){var t=this;onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:d.id}});var o={};o.id=d.id,o.r=[];var a=d.buttons;d.enabled&&d.visible&&Object.keys(a).forEach(function(e){a[e].visible&&o.r.push({id:e,rect:{x:a[e].x,y:a[e].y,w:a[e].width,h:a[e].height},eventListener:function(e){switch(e.type){case"mousedown":x.isPressed=!0,x.hoverOn=e.subId;break;case"mouseenter":x.isHover=!0,x.isPressed=!1,x.hoverOn=e.subId;break;case"mouseout":case"mouseupout":x.isHover=!1,x.isPressed=!1,x.hoverOn=null;break;case"mouseup":d.selected=e.subId,void 0!==r.click&&r.click({id:d.id,type:"click"}),x.isPressed=!1,x.hoverOn=null}}.bind(t)})}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:o})}}
"use strict";function TimeLineCompClass(r){var a={x:0,y:0,width:100,height:31,visible:!0,bgColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0)",borderWidth:1,currentTask:0,totalTasks:4,fontSize:14,maxVisibleTasks:4,taskStatus:[],priviousTask:null,minTaskNumber:0},l={currentTaskR:7,currentTaskColor:"rgba(10,190,220,1)",currentTaskStrokeColor:"rgba(10,190,220,1)",complitedTaskR:8,complitedTaskColor:"rgba(65,180,5,1)",complitedTaskStrokeColor:"rgba(65,180,5,1)",normalTaskR:6,normalTaskColor:"rgba(170,170,166,1)",normalTaskStrokeColor:"rgba(170,170,166,1)",helpTaskR:6,helpTaskColor:"rgba(240,230,140,1)",helpTaskStrokeColor:"rgba(240,230,140,1)",failedTaskR:6,failedTaskColor:"rgba(255,0,0,1)",failedTaskStrokeColor:"rgba(255,0,0,1)",counterPos:{},leftArrowPos:{},rightArrowPos:{},arrowW:21,pointsPos:[],leftArrow:{enable:!1,visible:!1},rightArrow:{enable:!1,visible:!1},totalTask:4},o={};function e(){a.currentTask=a.currentTask<0?0:a.currentTask,a.currentTask=a.currentTask>a.totalTasks-1?a.totalTasks-1:a.currentTask;for(var t=a.minTaskNumber,r=0;r<l.pointsPos.length;r++){var o=l.normalTaskColor,e=l.normalTaskStrokeColor,s=l.normalTaskR;l.pointsPos[r].selected=!1,a.taskStatus[t+r]?(o=l.failedTaskColor,e=l.failedTaskStrokeColor,s=l.failedTaskR,(a.taskStatus[t+r].totalShapesByHelp||a.taskStatus[t+r].totalCorrectShapes)&&(o=l.helpTaskColor,e=l.helpTaskStrokeColor,s=l.helpTaskR),(a.taskStatus[t+r].solved||a.taskStatus[t+r].solvedWithHelp)&&(o=l.complitedTaskColor,e=l.complitedTaskStrokeColor,s=l.complitedTaskR)):t+r===a.taskStatus.length&&(o=l.currentTaskColor,e=l.currentTaskStrokeColor,s=l.currentTaskR),t+r===a.taskStatus.length&&(l.pointsPos[r].selected=!0,o=l.normalTaskColor,e=l.normalTaskStrokeColor,l.pointsPos[r].pointerColor=l.currentTaskColor,l.pointsPos[r].pointerStrokeColor=l.currentTaskStrokeColor),l.pointsPos[r].color=o,l.pointsPos[r].strokeColor=e,l.pointsPos[r].r=s}l.rightArrow.enable=!1,l.rightArrow.visible=!1,l.leftArrow.enable=!1,l.leftArrow.visible=!1,0!==a.minTaskNumber&&(l.leftArrow.enable=!0,l.leftArrow.visible=!0),a.taskStatus.length>a.minTaskNumber+l.totalTask&&(l.rightArrow.enable=!0,l.rightArrow.visible=!0),i()}function i(){onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:a.id}});var t={};t.id=a.id,t.r=[],a.visible&&(l.leftArrow.enable&&t.r.push({id:"leftArrow",arc:{x:l.leftArrowPos.x,y:l.leftArrowPos.y,r:25},eventListener:s.bind(this)}),l.rightArrow.enable&&t.r.push({id:"rightArrow",arc:{x:l.rightArrowPos.x,y:l.rightArrowPos.y,r:25},eventListener:s.bind(this)})),onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:t})}function s(t){switch(t.type){case"mousedown":break;case"mouseup":"leftArrow"===t.subId?--a.minTaskNumber:"rightArrow"===t.subId&&(a.minTaskNumber+=1),e()}}Object.keys(r).forEach(function(t){a[t]=r[t]}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:a.id}}),function(){var t=a.y,r=a.x+18;l.pointsPos=[],l.counterPos={x:r-90,y:t},l.leftArrowPos={x:a.x,y:t},a.taskStatus=[];for(var o=0;o<a.maxVisibleTasks;o++)l.pointsPos.push({x:r,y:t,r:l.normalTaskR,color:l.normalTaskColor}),r+=18;l.rightArrowPos={x:r,y:t},e()}(),this.getTotalTasks=function(){return a.totalTasks},this.getVisble=function(){return a.visible},this.addEventListener=function(t,r){o[t]=r},this.show=function(){a.visible=!0,i()},this.hide=function(){a.visible=!1,i()},this.setTaskStatus=function(t){a.taskStatus=t,3<a.taskStatus.length&&(a.minTaskNumber=a.taskStatus.length-3),a.taskStatus.length===a.totalTasks&&(a.minTaskNumber=a.taskStatus.length-4),e()},this.draw=function(){if(a.visible){var t=a.context;t.save(),t.beginPath(),t.fillStyle=a.bgColor,t.strokeStyle=a.borderColor,t.lineWidth=a.borderWidth,t.rect(a.x,a.y,a.width,a.height),t.stroke(),t.fill(),t.closePath();for(var r=l.pointsPos,o=0;o<r.length;o++)t.beginPath(),t.fillStyle=r[o].color,t.strokeStyle=r[o].strokeColor,t.arc(r[o].x,r[o].y,5,0,2*Math.PI),t.fill(),t.stroke(),t.closePath(),r[o].selected&&(t.beginPath(),t.fillStyle="rgba(170, 170, 166, 1)",t.strokeStyle="rgba(170, 170, 166, 1)",t.moveTo(r[o].x,r[o].y-5-3),t.lineTo(r[o].x+4,r[o].y-5-7),t.lineTo(r[o].x-4,r[o].y-5-7),t.fill(),t.stroke(),t.closePath());var e;l.leftArrow.visible&&(t.beginPath(),t.fillStyle="rgba(170, 170, 166, 1)",l.leftArrow.enable||(t.fillStyle="rgba(233,233,233,1)"),t.lineWidth=2,e=l.leftArrowPos,t.moveTo(e.x,e.y),t.lineTo(e.x+6,e.y-6),t.lineTo(e.x+6,e.y+6),t.fill(),t.closePath()),l.rightArrow.visible&&(t.beginPath(),t.fillStyle="rgba(170, 170, 166, 1)",l.rightArrow.enable||(t.fillStyle="rgba(233,233,233,1)"),t.lineWidth=2,e=l.rightArrowPos,t.moveTo(e.x,e.y),t.lineTo(e.x-6,e.y-6),t.lineTo(e.x-6,e.y+6),t.fill(),t.closePath()),t.restore()}}}
"use strict";function MenuCompClass(t){var a={x:1251,y:113,width:200,height:160,visible:!1,state:!0,bgColor:"rgba(255,255,255,1)",text:{},data:{showAxis:{visible:!0,toggle:!0,selected:!0},showGrid:{visible:!0,toggle:!0,selected:!0},snapToGrid:{visible:!0,toggle:!0,selected:!0}},rowHeight:40,fontSize:16,textLeftPadding:20},d=this,o={isHover:!1,isPressed:!1,selected:!1},l={};function s(){var i=this;onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:a.id}});var s={};s.id=a.id,s.r=[],a.visible&&Object.keys(a.data).forEach(function(e,t){a.data[e].visible&&s.r.push({id:e,rect:{x:a.x+a.data[e].x,y:a.y+a.data[e].y,w:a.width,h:a.rowHeight},eventListener:function(e){var t;switch(e.type){case"mousedown":e.subId!==a.id&&(o.isHover=!0,o.isPressed=!0,o.selected=e.subId);break;case"mouseenter":e.subId!==a.id&&(o.isHover=!0,o.selected=e.subId);break;case"mouseout":e.subId!==a.id&&(o.isHover=!1,o.selected=null);break;case"mouseup":e.subId!==a.id&&(o.isHover=!1,o.isPressed=!1,t=e.subId,a.data[t].toggle&&(a.data[t].selected=!a.data[t].selected),void 0!==l.click&&l.click({id:a.id,value:t,state:a.data[t].selected}),o.selected=null);break;case"mouseupout":e.subId!==a.id&&(o.isHover=!1,o.isPressed=!1,o.selected=null);break;case"stageevent":o.isPressed||d.hide()}}.bind(i)})}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:s})}function r(){a.x<0&&(a.x=0),1280<a.x+a.width&&(a.x=1280-a.width-20),720<a.y+a.finalY&&(a.y=720-a.finalY-20)}function i(){var i=0;Object.keys(a.data).forEach(function(e,t){a.data[e].visible&&(a.data[e].text=a.LabComClass.globalLangText[a.text[e]],a.data[e].x=0,a.data[e].y=i,i+=a.rowHeight)}),a.finalY=i,r(),s()}Object.keys(t).forEach(function(e){a[e]=t[e]}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:a.id}}),i(),this.addEventListener=function(e,t){l[e]=t},this.show=function(){a.visible=!0,s()},this.setPos=function(e,t){a.x=e,a.y=t,r(),s()},this.hide=function(){a.visible=!1,s()},this.getVisble=function(){return a.visible},this.getData=function(){return a.data},this.setData=function(e){a.data=e,i()},this.draw=function(){var s,i;a.visible&&(s=a.context,i=0,Object.keys(a.data).forEach(function(e,t){a.data[e].visible&&(i+=a.rowHeight)}),s.save(),s.beginPath(),s.fillStyle=a.bgColor,s.strokeStyle="rgba(170,170,170,1)",s.rect(a.x,a.y,a.width,i),s.fill(),s.stroke(),s.closePath(),s.save(),s.translate(a.x,a.y),Object.keys(a.data).forEach(function(e,t){var i=a.data[e];i.visible&&(s.beginPath(),s.fillStyle="rgba(233,233,233,1)",o.selected===e&&(o.isHover||o.isPressed)&&(s.fillStyle="rgba(170,170,170,1)"),s.rect(i.x,i.y,a.width,a.rowHeight),s.fill(),s.closePath(),s.fillStyle="rgba(51,51,51,1)",o.selected===e&&(o.isHover||o.isPressed)&&(s.fillStyle="rgba(255,255,255,1)"),s.textBaseline="bottom",s.drawStyledText(i.text,i.x+a.textLeftPadding,i.y+a.rowHeight/2+.6*a.fontSize,a.LabComClass.klettFontRegular,a.fontSize),i.selected&&(s.save(),s.translate(a.width-40,i.y+a.rowHeight/2-12),s.beginPath(),s.strokeStyle="rgba(170,170,170,1)",o.selected===e&&(o.isHover||o.isPressed)&&(s.strokeStyle="rgba(255,255,255,1)"),s.lineWidth=2,s.lineJoin="round",s.moveTo(4,14),s.lineTo(10,19),s.lineTo(22,5),s.stroke(),s.restore()))}),s.restore(),s.restore())}}
"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,i=new Array(t);o<t;o++)i[o]=e[o];return i}function MsgBoxClass(t){var a,u={x:null,y:null,position:"top-left",prevX:null,prevY:null,width:410,maxWidth:410,height:100,visible:!1,bgColor:"rgba(0, 0, 0, 0.6)",baseColor:"#e0e0e0",headHeight:40,headColor:"#999999",headText:"header",headTextX:20,headTextY:12,headFontSize:20,headFontColor:"rgba(255, 255, 255, 1)",bodyTextX:20,bodyTextY:20,bodyFontSize:16,bodyFontColor:"rgba(0, 0, 0, 1)",radius:0,strokeWidth:1,isItalic:!1,isBold:!1,type:"alert",delayCount:0,totalDelayCount:0,alpha:1,minX:0,maxX:0,minY:0,maxY:0,defaultImages:["whiteClose_btn_nrml.png","whiteClose_btn_hvr.png"],closeBtn:{isHover:!1,x:0,y:0,padding:10,width:24,radius:24,height:24},mousedown:{diffX:0,diffY:0},text:""};Object.keys(t).forEach(function(e){u[e]=t[e]});var e=this,r=[],o={},i=!1,n=u.playerConfigObj.baseWidth,l=u.playerConfigObj.baseHeight;function s(){var e;onViewUpdateCls.trigger("onGlobalUpdate",{type:"removeMouseEvent",data:{id:u.id}}),!0===u.visible&&(u.closeBtn.x=u.x+(u.width-u.closeBtn.padding-u.closeBtn.width/2),u.closeBtn.y=u.y+u.headHeight/2,(e={}).id=u.id,e.r=[],1===u.alpha&&(e.r.push({id:1,rect:{x:u.x,y:u.y,w:u.width,h:u.height},cursor:"default",eventListener:d.bind(this)}),e.r.push({id:2,rect:{x:u.x,y:u.y,w:u.width,h:u.headHeight},eventListener:d.bind(this)}),e.r.push({id:"close",arc:{x:u.closeBtn.x,y:u.closeBtn.y,r:u.closeBtn.radius},eventListener:d.bind(this)})),onViewUpdateCls.trigger("onGlobalUpdate",{type:"addMouseEvent",data:e}))}function d(e){switch(e.type){case"mousedown":i=!0,u.mousedown.diffX=e.pageX-u.x,u.mousedown.diffY=e.pageY-u.y;break;case"mouseenter":"close"===e.subId&&(u.closeBtn.isHover=!0);break;case"mouseup":"close"===e.subId&&h(),i=!1;break;case"mouseupout":i=!1,"close"===e.subId&&(u.closeBtn.isHover=!1);break;case"mouseout":"close"===e.subId&&(u.closeBtn.isHover=!1);break;case"pressmove":var t;2===e.subId&&(u.x=e.pageX-u.mousedown.diffX,u.y=e.pageY-u.mousedown.diffY,u.maxX=n-u.width,t=u.maxY-u.height,u.x=u.x<u.minX?u.minX:u.x,u.x=u.x>u.maxX?u.maxX:u.x,u.y=u.y<u.minY?u.minY:u.y,u.y=u.y>t?t:u.y),s();break;case"stageevent":i||h()}}function h(){u.delayCount=0,e.hide(),u.closeBtn.isHover=!1,void 0!==o.popupClose&&o.popupClose({id:u.id,type:"popupClose"},!0)}function c(e,t,o,i,a,r,n,l,s,d){var h;void 0===l&&(l=!0),void 0===r&&(r=5),"number"==typeof r?r=s?{tl:r,tr:r,br:0,bl:0}:{tl:r,tr:r,br:r,bl:r}:(h={tl:0,tr:0,br:0,bl:0},Object.keys(h).forEach(function(e){r[e]=r[e]||h[e]})),e.beginPath(),d?(e.moveTo(t+r.tl,o),e.lineTo(t+(i-r.tr),o),e.arc(t+i,o+a/2,a/2,3*Math.PI/2,Math.PI/2),e.lineTo(t+r.bl,o+a),e.arc(t,o+a/2,a/2,Math.PI/2,3*Math.PI/2)):(e.moveTo(t+r.tl,o),e.lineTo(t+(i-r.tr),o),e.quadraticCurveTo(t+i,o,t+i,o+r.tr),e.lineTo(t+i,o+(a-r.br)),e.quadraticCurveTo(t+i,o+a,t+(i-r.br),o+a),e.lineTo(t+r.bl,o+a),e.quadraticCurveTo(t,o+a,t,o+(a-r.bl)),e.lineTo(t,o+r.tl),e.quadraticCurveTo(t,o,t+r.tl,o)),e.closePath(),e.lineWidth=u.strokeWidth,n&&e.fill(),l&&e.stroke()}function y(){(r=[]).push(u.context.textWrapperClass({xNum:0,yNum:0,maxWidthNum:u.maxWidth-2*u.bodyTextX,textStr:u.text,fontFamilyStr:u.LabComClass.klettFontRegular,fontSizeNum:u.bodyFontSize,fontColor:u.bodyFontColor,fontFormat:"px "})),u.width=u.maxWidth,u.height=u.headHeight+u.bodyTextY+r[0].imageObj.heightInt+u.bodyTextY,null===u.x||null===u.y?(u.x=n/2-u.width/2,u.y=l/2-u.height/2):"bottom-right"===u.position&&(u.x-=u.width,u.y-=u.height),u.defaultPos={x:u.x,y:u.y},u.closeBtn.x=u.x+(u.width-u.closeBtn.padding-u.closeBtn.width/2),u.closeBtn.y=u.y+u.headHeight/2}u.text=u.LabComClass.globalLangText[u.bodyText],y(),s(),u.LabComClass.requestGlobalImage(_toConsumableArray(u.defaultImages),function(e){a=e,onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:u.id}})}),this.show=function(){u.visible=!0,s()},this.isVisible=function(){return u.visible},this.setValue=function(e){u.text=e,y()},this.setPosition=function(e,t){u.x=e,u.y=t,s()},this.hide=function(){u.visible=!1,s()},this.addEventListener=function(e,t){o[e]=t},this.draw=function(){var e,t,o,i;u.visible&&((e=u.context).save(),e.beginPath(),e.fillStyle=u.baseColor,e.strokeStyle=u.headColor,"correct"===u.type&&(e.strokeStyle="#7da961"),"incorrect"===u.type&&(e.strokeStyle="#999999"),c(e,u.x,u.y,u.width,u.height,u.radius,!0,!0,!1,!1),e.closePath(),e.beginPath(),e.fillStyle=u.headColor,"correct"===u.type&&(e.fillStyle="#7da961"),"incorrect"===u.type&&(e.fillStyle="#999999"),c(e,u.x,u.y,u.width,u.headHeight,u.radius,!0,!1,!0,!1),e.closePath(),e.beginPath(),t=u.x+u.headTextX,o=u.y+u.headTextY,e.fillStyle=u.headFontColor,"correct"===u.type&&(e.fillStyle="#ffffff"),e.font=u.headFontSize+"px "+u.LabComClass.klettFontRegular,e.textAlign="left",e.textBaseline="bottom",i=u.LabComClass.globalLangText[u.headText]||"-",e.fillText(i,t,o+u.headFontSize),e.closePath(),void 0!==r[0].imageObj&&e.drawImage(r[0].imageObj.imageObj,u.x+u.bodyTextX,u.y+u.headHeight+u.bodyTextY,r[0].imageObj.widthInt,r[0].imageObj.heightInt),u.closeBtn.isHover?e.drawImage(a[u.defaultImages[1]],u.closeBtn.x-u.closeBtn.width/2,u.closeBtn.y-u.closeBtn.height/2,u.closeBtn.width,u.closeBtn.height):e.drawImage(a[u.defaultImages[0]],u.closeBtn.x-u.closeBtn.width/2,u.closeBtn.y-u.closeBtn.height/2,u.closeBtn.width,u.closeBtn.height),e.restore())}}
"use strict";function PanelCompClass(t){var i={visible:!0},a={};Object.keys(t).forEach(function(e){i[e]=t[e]}),i.LabComClass.setHeader(i.LabComClass.globalLangText[i.headText]),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:i.id}}),this.show=function(){i.visible=!0},this.hide=function(){i.visible=!1},this.addEventListener=function(e,t){a[e]=t},this.draw=function(){}}
"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function NumberPadClass(t){var a=this,e=t.id,n=t.deviceTypeBool,b=t.context,w={x:0,y:0,btnWidth:45,btnHeight:45,textBtnWidth:88,holderBgColor:"rgba(233, 233, 233, 1)",numberBtnBgColor:"rgb(255, 102, 0)",numberBtnTextColor:"#FFFFFF",nonNumberBtnBgColor:"rgba(246, 246, 246, 1)",nonNumberBtnTextColor:"#000000",holderPadding:[15,15,15,15],btnVertPadding:20,btnHorizPadding:10,borderRadius:0,fontStyle:"normal",fontSize:24,fontFamily:"Arial",showComponent:!1,headerText:"Number Pad",headerHeight:40,headerBgColor:"rgb(255, 102, 0)",headerFontFamily:"Arial",headerFontSize:24,headerFontStyle:"normal",headerTextColor:"#FFFFFF"};Object.keys(t).forEach(function(e){w[e]=t[e]});var v={diff:"–",dot:".",back:"Del",clear:"Clear",enter:"Enter",comma:","},C=[[1,2,3,"q","w","e","r","t","y","u","i","o","p","ü","back"],[4,5,6,"a","s","d","f","g","h","j","k","l","ö","ä","clear"],[7,8,9,"z","x","c","v","b","n","m","enter"],["diff",0,"dot","comma"]],T=null,S=null,B=null,o=null,r=null,i=null;function g(e){var t,r=e.x,n=e.y,o=e.width,i=e.height,a=e.radius,e=e.fill;void 0===a&&(a=5),"number"==typeof a?a={tl:a,tr:a,br:a,bl:a}:(t={tl:0,tr:0,br:0,bl:0},Object.keys(t).forEach(function(e){a[e]=a[e]||t[e]})),b.beginPath(),b.moveTo(r+a.tl,n),b.lineTo(r+(o-a.tr),n),b.quadraticCurveTo(r+o,n,r+o,n+a.tr),b.lineTo(r+o,n+(i-a.br)),b.quadraticCurveTo(r+o,n+i,r+(o-a.br),n+i),b.lineTo(r+a.bl,n+i),b.quadraticCurveTo(r,n+i,r,n+(i-a.bl)),b.lineTo(r,n+a.tl),b.quadraticCurveTo(r,n,r+a.tl,n),b.closePath(),e&&b.fill()}function l(){var e,t,r,n,o,i,a,h,u,c,f,s,l,y,b,g,m,d,p,x;e=w.x,t=w.y,r=w.btnWidth,n=w.btnHeight,o=w.textBtnWidth,l=w.btnVertPadding,i=w.btnHorizPadding,d=w.holderPadding,a=w.headerHeight,o=(Math.max.apply(Math,_toConsumableArray(C.map(function(e){return e.length})))-1)*(r+i)+o+(d[1]+d[3]),d=C.length*n+(C.length-1)*l+(d[0]+d[2]),T={x:e,y:t,width:o,height:d+=a+l},function(){w.holderPadding;var e=w.headerHeight,t=T.width;S={x:T.x,y:T.y,width:t,height:e}}(),h=w.btnWidth,u=w.btnHeight,c=w.textBtnWidth,f=w.btnHorizPadding,s=w.btnVertPadding,l=w.holderPadding,y=w.numberBtnBgColor,b=w.numberBtnTextColor,g=w.nonNumberBtnBgColor,m=w.nonNumberBtnTextColor,d=S.height,p=S.x+l[1],x=S.y+d+s,B=[],C.forEach(function(e,d){e.forEach(function(e,t){var r=v[e]||e,n=r.toString().length<=2&&","!==r.toString(),o=p+t*(h+f),i=x+d*(u+s),a=h,l=y,t=b;n||(a=c),isNaN(Number(r))&&(l=g,t=m),B.push({key:e,value:r,x:o,y:i,width:a,height:u,fillStyle:l,color:t})})})}function d(e){switch(e.type){case"mousedown":"header"===e.subId&&(i={x:e.pageX-T.x,y:e.pageY-T.y});break;case"pressmove":"header"===e.subId&&(w.x=e.pageX-i.x,w.y=e.pageY-i.y,l(),a.enable=!0);break;case"mouseup":var t=e.subId;"header"!==t&&r&&("enter"===t?(r.getEnterToSubmit()&&r.setNumberPadValue(t),r.focusOut()):r.setNumberPadValue(t))}f()}function h(t){Object.keys(o).forEach(function(e){e=o[e];t?(e.on("focusIn",u),e.on("focusOut",c)):(e.off("focusIn",u),e.off("focusOut",c))})}function u(e){r=o[e.id],a.show=!0}function c(e){r=null,a.show=!1}function f(){onViewUpdateCls.trigger("onGlobalUpdate",{type:"updateView"})}Object.defineProperties(this,{enable:{set:function(e){!function(e){var i={id:a.compId};{var t,r,n,o;e&&(i.r=[],t=T.x,r=T.y,n=T.width,o=T.height,i.r.push({id:"Holder",rect:{x:t,y:r,w:n,h:o},eventListener:function(){}}),i.r.push({id:"header",rect:{x:S.x,y:S.y,w:S.width,h:S.height},eventListener:d}),B.forEach(function(e){var t=e.key,r=e.x,n=e.y,o=e.width,e=e.height;i.r.push({id:t,rect:{x:r,y:n,w:o,h:e},eventListener:d})}))}onViewUpdateCls.trigger("onGlobalUpdate",{type:e?"addMouseEvent":"removeMouseEvent",data:i})}(e)}},show:{set:function(e){e=e,w.showComponent=e,a.enable=e,f()}},compId:{get:function(){return e}},isCompVisible:{get:function(){return w.showComponent}}}),this.registerEntryBox=function(){if(n){o={};for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(e){e.numberPadCompId=a.compId,o[e.compId]=e}),h(!0)}},this.unregisterEntryBox=function(){h(!1),o=null},this.draw=function(){var e,d,h,u,c,t,r,n,o,i,a,l,f,s,y;w.showComponent&&(e=w.holderBgColor,d=w.borderRadius,h=w.fontStyle,u=w.fontSize,c=w.fontFamily,t=w.headerText,r=w.headerFontFamily,n=w.headerFontSize,o=w.headerFontStyle,i=w.headerBgColor,a=w.headerTextColor,l=T.x,f=T.y,s=T.width,y=T.height,b.save(),b.fillStyle=e,g({x:l,y:f,width:s,height:y,radius:d,fill:!0}),b.fillStyle=i,g({x:S.x,y:S.y,width:S.width,height:S.height,radius:d,fill:!0}),b.font="".concat(o," ").concat(n,"px ").concat(r),b.textAlign="left",b.textBaseline="hanging",b.fillStyle=a,b.fillText(t,l+(S.width-b.measureText(t).width)/2,S.y+(S.height-n)/2+2),B.forEach(function(e,t){var r=e.x,n=e.y,o=e.width,i=e.height,a=e.color,l=e.fillStyle,e=e.value;b.fillStyle=l,g({x:r,y:n,width:o,height:i,radius:d,fill:!0}),b.font="".concat(h," ").concat(u,"px ").concat(c),b.fillStyle=a,b.fillText(e,r+(o-b.measureText(e).width)/2,n+(i-u)/2+4)}),b.restore())},l(),n||(a.show=!1),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:t.id}})}
"use strict";function ownKeys(t,e){var a,i=Object.keys(t);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(t),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)),i}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(a),!0).forEach(function(e){_defineProperty(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Gamar_43_MathClass(t){var l,a={data:{},variants:[[{type:"point",x:0,y:0,label:"A",labelDiffX:-22,labelDiffY:-9,isDraggable:!1,isDeletable:!1,variant:1,aVal:7,bVal:3,ans:0},{type:"point",x:7,y:0,label:"B",isDraggable:!1,isDeletable:!1},{type:"point",x:7,y:3,label:"C",isDraggable:!1,isDeletable:!1},{type:"point",x:0,y:3,label:"D",labelDiffX:-22,labelDiffY:-9,isDraggable:!1,isDeletable:!1}],[{type:"point",x:0,y:0,label:"A",labelDiffX:-22,labelDiffY:-9,isDraggable:!1,isDeletable:!1,variant:2,aVal:3,bVal:3,ans:1},{type:"point",x:3,y:0,label:"B",isDraggable:!1,isDeletable:!1},{type:"point",x:3,y:3,label:"C",isDraggable:!1,isDeletable:!1},{type:"point",x:0,y:3,label:"D",labelDiffX:-22,labelDiffY:-9,isDraggable:!1,isDeletable:!1}],[{type:"point",x:0,y:0,label:"A",labelDiffX:-22,labelDiffY:-9,isDraggable:!1,isDeletable:!1,variant:3,aVal:14,bVal:3,ans:0},{type:"point",x:14,y:0,label:"B",isDraggable:!1,isDeletable:!1},{type:"point",x:14,y:3,label:"C",isDraggable:!1,isDeletable:!1},{type:"point",x:0,y:3,label:"D",labelDiffX:-22,labelDiffY:-9,isDraggable:!1,isDeletable:!1}],[{type:"point",x:0,y:0,label:"A",labelDiffX:-22,labelDiffY:-9,isDraggable:!1,isDeletable:!1,variant:4,aVal:4,bVal:12,ans:0},{type:"point",x:4,y:0,label:"B",isDraggable:!1,isDeletable:!1},{type:"point",x:4,y:12,label:"C",isDraggable:!1,isDeletable:!1},{type:"point",x:0,y:12,label:"D",labelDiffX:-22,labelDiffY:-9,isDraggable:!1,isDeletable:!1}],[{type:"point",x:0,y:0,label:"A",labelDiffX:-22,labelDiffY:-9,isDraggable:!1,isDeletable:!1,variant:5,aVal:13,bVal:12,ans:0},{type:"point",x:13,y:0,label:"B",isDraggable:!1,isDeletable:!1},{type:"point",x:13,y:12,label:"C",isDraggable:!1,isDeletable:!1},{type:"point",x:0,y:12,label:"D",labelDiffX:-22,labelDiffY:-9,isDraggable:!1,isDeletable:!1}]],planVariant:[[{type:"point",x:0,y:0,label:"A",labelDiffX:-22,labelDiffY:-9,pointRev:"C",pointFix:[2,4],connectedPoints:3,isDraggable:!0,isDeletable:!1},{type:"point",x:7,y:0,label:"B",pointFix:[1,4],connectedPoints:3,pointRev:"D",labelDiffX:14,labelDiffY:-9,isDraggable:!0,isDeletable:!1},{type:"point",x:9,y:4,label:"C",pointRev:"A",pointFix:[2,4],connectedPoints:1,pointIncline:Math.PI/4,isDraggable:!0,isDeletable:!1},{type:"point",x:2,y:4,label:"D",pointRev:"B",pointFix:[1,2],connectedPoints:3,pointIncline:Math.PI/4,labelDiffX:-22,labelDiffY:-9,isDraggable:!0,isDeletable:!1},{type:"segment",x:0,y:0,xTo:7,yTo:0,label:"a",labelDiffX:-5,labelDiffY:8,firstPointId:1,secondPointId:2,isDraggable:!0,isDeletable:!1},{type:"segment",x:7,y:0,xTo:9,yTo:4,label:"b",labelDiffX:4,labelDiffY:7,firstPointId:2,secondPointId:3,isDraggable:!0,isDeletable:!1},{type:"segment",x:9,y:4,xTo:2,yTo:4,label:"c",labelDiffX:0,labelDiffY:-10,firstPointId:3,secondPointId:4,isDraggable:!0,isDeletable:!1},{type:"segment",x:2,y:4,xTo:0,yTo:0,label:"d",labelDiffX:-14,labelDiffY:-8,firstPointId:4,secondPointId:1,isDraggable:!0,isDeletable:!1}]],currentVariant:null},i=[];this.setMathObj=function(e){l=e};var n={};Object.keys(t).forEach(function(e){a[e]=t[e]}),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:a.id}}),this.populateDefaultQuestions=function(){var t=this;[{pointA:{x:0,y:0,label:"A",type:"point"},a:10,b:7,angle:115,degree:115,angleOver:"B",angClockWise:!0,situation:1,variant:1,r:7,given:["a","b","beta"],pointToCheckStep3:"C",segmentToCheckStep4:"BC",pointToCheckForOverlap:"B",pointsToValidate:[{0:"DC"},{1:"AD"}]},{pointA:{x:0,y:0,label:"A",type:"point"},a:3,b:6,angle:153,degree:153,angleOver:"B",angClockWise:!0,situation:1,variant:2,r:6,given:["a","b","beta"],pointToCheckStep3:"C",segmentToCheckStep4:"BC",pointToCheckForOverlap:"B",pointsToValidate:[{0:"DC"},{1:"AD"}]},{pointA:{x:0,y:0,label:"A",type:"point"},a:10,b:10,angle:105,degree:105,angleOver:"A",angClockWise:!1,situation:2,variant:3,r:10,given:["a","b","alpha"],pointToCheckStep3:"D",segmentToCheckStep4:"AD",pointToCheckForOverlap:"A",pointsToValidate:[{0:"DC"},{1:"BC"}]},{pointA:{x:0,y:0,label:"A",type:"point"},a:12,b:3,angle:37,degree:37,angleOver:"A",angClockWise:!1,situation:2,variant:4,r:3,given:["a","b","alpha"],pointToCheckStep3:"D",segmentToCheckStep4:"AD",pointToCheckForOverlap:"A",pointsToValidate:[{0:"DC"},{1:"BC"}]},{pointA:{x:0,y:0,label:"A",type:"point"},a:9,b:6,angle:120,degree:120,angleOver:"B",angClockWise:!0,situation:3,variant:5,r:6,given:["a","b","gama"],pointToCheckStep3:"C",segmentToCheckStep4:"BC",pointToCheckForOverlap:"B",pointsToValidate:[{0:"DC"},{1:"AD"}]}].forEach(function(e){i.push(function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];{if(1===e.situation||3===e.situation){var a=e.pointA,i=e.a,l=e.b,n=e.angle,o={};o.x=a.x+i,o.y=a.y,o.label="B";i=this.getPointAtAngle(_objectSpread({},o),_objectSpread({},a),l,-n,!0);i.label="C";a=this.getPointAtAngle(_objectSpread({},a),_objectSpread({},o),l,180-n,!1);return a.label="D",_objectSpread(_objectSpread({},e),{},{pointB:o,pointC:i,pointD:a,clockwise:t})}if(2===e.situation){l=e.pointA,n=e.a,o=e.b,i=e.angle,a={};a.x=l.x+n,a.y=l.y,a.label="B";n=this.getPointAtAngle(_objectSpread({},a),_objectSpread({},l),o,-(180-i),t);n.label="C";i=this.getPointAtAngle(_objectSpread({},l),_objectSpread({},a),o,i,t);return i.label="D",_objectSpread(_objectSpread({},e),{},{pointB:a,pointC:n,pointD:i,clockwise:t})}}}.call(t,e,!1))})},this.getPointAtAngle=function(e,t,a,i){t=spineObj.LabComClass.Maths.getAngle(e.x,e.y,t.x,t.y);return l.getPoint(e,t+i*Math.PI/180,a)},this.alterCurrentQuestion=function(e,t,a){if(1===a.situation||3===a.situation){a.pointA,a.a;var i=a.b,l=a.angle,n=this.getPointAtAngle(_objectSpread({},t),_objectSpread({},e),i,-l,!0);n.label="C";i=this.getPointAtAngle(_objectSpread({},e),_objectSpread({},t),i,180-l,!1);return i.label="D",delete a.pointC,delete a.pointD,delete a.pointB,a.pointB=t,_objectSpread(_objectSpread({},a),{},{pointC:n,pointD:i})}if(2===a.situation){a.pointA,a.a;l=a.b,n=a.angle,i=this.getPointAtAngle(_objectSpread({},t),_objectSpread({},e),l,-(180-n),!1);i.label="C";n=this.getPointAtAngle(_objectSpread({},e),_objectSpread({},t),l,n,!1);return n.label="D",delete a.pointC,delete a.pointD,delete a.pointB,a.pointB=t,_objectSpread(_objectSpread({},a),{},{pointC:i,pointD:n})}};for(var o=[];o.length<5;){var e=Math.floor(10*Math.random());0<=e&&e<=4&&-1===o.indexOf(e)&&o.push(e)}this.getQuestion=function(e){return i[o[e]]},this.getOrders=function(){return["AB","BC","CD","DA"]},this.getOrder=function(e){var t;switch(e.situation){case 1:case 3:t=["CD","DA"];break;case 2:t=["BC","CD"]}return t},this.getNumberOfVariants=function(){return a.variants.length},this.generateQuestion=function(e){return a.currentVariant=a.variants[e%a.variants.length][0].variant,a.variants[e%a.variants.length]},this.generateQuestionS=function(e){return a.currentVariant=a.variants[o[e]][0].variant,a.variants[o[e]]},this.generatePlanData=function(e){return a.planVariant[0*o[e]]},this.calculation=function(e,t,a,i){return Number(e)+Number(t)+Number(a)+Number(i)},this.getCurrentShape=function(e){return a.shapes[e]},this.addEventListener=function(e,t){n[e]=t}}
"use strict";function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function PlayerClass(){function ModelClass(){var a=this,s=Object.prototype.hasOwnProperty;function o(t,e,o){var n=[];Object.keys(t).forEach(function(e){s.call(a[o],e)?(n.push(e),LabComClass.defineObject(a[o],e,t[e])):console.log(e+": property doesnt exist in Model "+o+".")}),onModelUpdateCls.trigger("onChange",{type:e,propList:n})}this.cPropObj={},this.vPropObj={},this.sildePropObj={},onModelUpdateCls.on("setCProp",function(e,t){o(e,t,"cPropObj")}),onModelUpdateCls.on("setVProp",function(e,t){o(e,t,"vPropObj")}),onModelUpdateCls.on("setSlideProp",function(e,t){o(e,t,"sildePropObj")}),LabComClass.defineObject(this.cPropObj,"playerPath",""),LabComClass.defineObject(this.cPropObj,"playerConfigObj",{}),LabComClass.defineObject(this.cPropObj,"globalTextObj",{}),LabComClass.defineObject(this.cPropObj,"configObj",{}),LabComClass.defineObject(this.cPropObj,"deviceTypeBool",!1),LabComClass.defineObject(this.cPropObj,"audioContextCls",new AudioContextClass),LabComClass.defineObject(this.cPropObj,"audioNativeCls",new AudioNativeClass),LabComClass.defineObject(this.cPropObj,"mouseHandleCls",new MouseHandlerClass),LabComClass.defineObject(this.cPropObj,"keyHandlerCls",new KeyHandlerClass),LabComClass.defineObject(this.cPropObj,"labObj",{}),LabComClass.defineObject(this.cPropObj,"compListObj",{}),LabComClass.defineObject(this.cPropObj,"brainObj",{}),LabComClass.defineObject(this.cPropObj,"compCountInt",0),LabComClass.defineObject(this.cPropObj,"totalCompCountInt",0),LabComClass.defineObject(this.cPropObj,"activityObj",{}),LabComClass.defineObject(this.cPropObj,"interactiveLayerArr",[]),LabComClass.defineObject(this.cPropObj,"toolsUsed",[]),LabComClass.defineObject(this.vPropObj,"domLayerObj",document.createElement("div")),LabComClass.defineObject(this.vPropObj,"headerObj",document.createElement("div")),LabComClass.defineObject(this.vPropObj,"headerLogoItemObj",document.createElement("div")),LabComClass.defineObject(this.vPropObj,"headerLogoObj",document.createElement("img")),LabComClass.defineObject(this.vPropObj,"headerTextObj",document.createElement("div")),LabComClass.defineObject(this.vPropObj,"headerHelpObj",document.createElement("div")),LabComClass.defineObject(this.vPropObj,"headerHelpIconObj",document.createElement("div")),LabComClass.defineObject(this.vPropObj,"headerCopyRightObj",document.createElement("div")),LabComClass.defineObject(this.vPropObj,"infoPopupObj",document.createElement("div")),LabComClass.defineObject(this.vPropObj,"headerCopyRightIconObj",document.createElement("div")),LabComClass.defineObject(this.vPropObj,"preloadObj",document.createElement("div")),LabComClass.defineObject(this.vPropObj,"bgCanvasObj",document.createElement("canvas")),LabComClass.defineObject(this.vPropObj,"bgContextObj",{}),LabComClass.defineObject(this.vPropObj,"contCanvasObj",document.createElement("canvas")),LabComClass.defineObject(this.vPropObj,"virtualCanvasObj",document.createElement("canvas")),LabComClass.defineObject(this.vPropObj,"contContextObj",{}),LabComClass.defineObject(this.vPropObj,"mouseCanvasObj",document.createElement("canvas")),LabComClass.defineObject(this.vPropObj,"mTextWrapperObj",document.createElement("canvas")),LabComClass.defineObject(this.vPropObj,"snapshotCnvObj",document.createElement("canvas")),LabComClass.defineObject(this.vPropObj,"playerImagesObj",{}),LabComClass.defineObject(this.vPropObj,"componentImagesObj",{}),LabComClass.defineObject(this.vPropObj,"resizeTimeoutObj",{}),LabComClass.defineObject(this.vPropObj,"scaledDataObj",{}),LabComClass.defineObject(this.vPropObj,"bgImageObj",{})}function ViewClass(){Object.prototype.hasOwnProperty;function t(e){var o=modelCls.vPropObj["header".concat(e,"Obj")],t=modelCls.cPropObj.globalTextObj,a="".concat(e[0].toLowerCase()+e.slice(1),"Data"),t=Object.keys(t[a]),s=document.createElement("div");s.setAttribute("class","menuHolder"),o.appendChild(s),o.menuHolder=s,t.forEach(function(n){var e=document.createElement("div");e.innerHTML=n,e.setAttribute("class","menuItem"),s.appendChild(e),e.addEventListener("click",function(e){return t=e,o=n,e=a,r(),t.stopPropagation(),modelCls.vPropObj.infoPopupObj.classList.add("show"),modelCls.cPropObj.mouseHandleCls.toggleMouseEvents(!1),modelCls.vPropObj.infoPopupObj.contentDiv.scrollTop=0,void onViewUpdateCls.trigger("onGlobalUpdate",{type:"popupOpened",data:{title:o,contentKey:e}});var t,o})}),o.addEventListener("click",function(){return e=o,t=document.querySelector(".headerButton.selected"),r(),void(e!==t&&(e.classList.add("selected"),e.menuHolder.classList.add("show"),onViewUpdateCls.trigger("onGlobalUpdate",{type:"menuOpened",data:{}})));var e,t}),LabComClass.BrowserDetect.isDevice()||(o.addEventListener("mouseenter",function(){return o.classList.add("hover")}),o.addEventListener("mouseleave",function(){return o.classList.remove("hover")}))}function r(){var e=document.querySelector(".headerButton.selected");e&&(e.classList.remove("selected"),e.menuHolder.classList.remove("show"),onViewUpdateCls.trigger("onGlobalUpdate",{type:"menuClosed",data:{}}))}function s(){modelCls.vPropObj.infoPopupObj.classList.remove("show"),modelCls.cPropObj.mouseHandleCls.toggleMouseEvents(!0),onViewUpdateCls.trigger("onGlobalUpdate",{type:"popupClosed",data:{}})}function o(){var e=modelCls.vPropObj.contCanvasObj,t=modelCls.vPropObj.contContextObj,o=modelCls.vPropObj.scaledDataObj;t.clearRect(0,0,e.width,e.height),t.save(),t.scale(o.scale*o.devScaleRatioInt,o.scale*o.devScaleRatioInt);var n=modelCls.cPropObj.compListObj;Object.keys(n).forEach(function(e){n[e].obj.draw&&n[e].obj.draw()}),t.restore()}function n(){var e=modelCls.vPropObj.bgCanvasObj,t=modelCls.vPropObj.bgContextObj;t.clearRect(0,0,e.width,e.height),t.drawImage(modelCls.vPropObj.bgImageObj,0,0,e.width,e.height)}onModelUpdateCls.on("onChange",function(e){switch(e.type){case"onPlayerConfigLoad":t("Help"),t("CopyRight"),function(){var e=modelCls.vPropObj.infoPopupObj,t=document.createElement("div");t.setAttribute("class","popupOverlay"),e.appendChild(t);var o=document.createElement("div");o.setAttribute("class","popupHolder"),e.appendChild(o);var n=document.createElement("div");n.setAttribute("class","popupTitle"),o.appendChild(n);var a=document.createElement("div");a.innerHTML="title",n.appendChild(a),e.titleDiv=a;a=document.createElement("div");a.innerHTML="X",n.appendChild(a);n=document.createElement("div");n.setAttribute("class","popupContent"),o.appendChild(n),e.contentDiv=n,a.addEventListener("click",s),t.addEventListener("click",s)}();break;case"onActivityInited":modelCls.cPropObj.mouseHandleCls.updateInteractiveLayer(modelCls.cPropObj.interactiveLayerArr),n(),document.body.removeChild(modelCls.vPropObj.preloadObj);break;case"mouseEventAdded":break;case"onScaleSet":document.addEventListener("contextmenu",function(e){return e.preventDefault()}),modelCls.cPropObj.mouseHandleCls.init({deviceTypeBool:modelCls.cPropObj.deviceTypeBool,mouseCanvasObj:modelCls.vPropObj.mouseCanvasObj}),modelCls.cPropObj.mouseHandleCls.updateOnResize(modelCls.vPropObj.scaledDataObj)}}),onViewUpdateCls.on("onGlobalUpdate",function(e){switch(e.type){case"addMouseEvent":modelCls.cPropObj.mouseHandleCls.addMouseEvent(e.data);break;case"addKeyEvent":modelCls.cPropObj.keyHandlerCls.addKeyEvents(e.data);break;case"removeMouseEvent":modelCls.cPropObj.mouseHandleCls.removeMouseEvent(e.data);break;case"removeKeyEvent":modelCls.cPropObj.keyHandlerCls.removeKeyEvents(e.data);break;case"rendererUpdate":requestAnimationFrame(o);break;case"onNavStageResize":n(),o()}})}function ControllerClass(){var hasOProp=Object.prototype.hasOwnProperty;function init(){loadGlobalText(),modelCls.cPropObj.keyHandlerCls.init();var e=document.createElement("div");e.setAttribute("id","inputFieldDummyDiv"),e.setAttribute("contenteditable",!0),e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.top="-100px",e.style.left="-100px",e.addEventListener("keydown",function(){this.innerHTML=""}),document.body.appendChild(e)}function onChange(e){switch(e.type){case"onGlobalTextLoad":setUpPlayer();break;case"onPlayerConfigLoad":LabComClass.childPreloadProgress(30),LabComClass.BrowserDetect.isDevice()?onModelUpdateCls.trigger("setCProp",{deviceTypeBool:!0},"onDeviceSelected"):onModelUpdateCls.trigger("setCProp",{deviceTypeBool:!1},"onDeviceSelected");break;case"onDeviceSelected":setPlayerScale();break;case"onScaleSet":LabComClass.childPreloadProgress(48);httpRequest("labstructure.json","json",function(e){onModelUpdateCls.trigger("setCProp",e,"onLessonStructureLoad")});break;case"onLessonStructureLoad":httpRequest(modelCls.cPropObj.labObj.lang+"/labtext.json","json",function(e){LabComClass.globalLangText=e;try{LabComClass.urlParams=JSON.parse('{"'+location.search.substring(1).replace(/&/g,'","').replace(/=/g,'":"')+'"}')}catch(e){LabComClass.urlParams={}}LabComClass.klettFontRegular=modelCls.cPropObj.playerConfigObj["klettFontRegular-"+modelCls.cPropObj.labObj.lang],LabComClass.polo22KlettRegular=modelCls.cPropObj.playerConfigObj["polo22KlettRegular-"+modelCls.cPropObj.labObj.lang],LabComClass.bold=modelCls.cPropObj.playerConfigObj.bold,LabComClass.italic=modelCls.cPropObj.playerConfigObj.italic,LabComClass.italicbold=modelCls.cPropObj.playerConfigObj.italicbold,LabComClass.italicDistance=modelCls.cPropObj.playerConfigObj.italicDistance,LabComClass.subscript=modelCls.cPropObj.playerConfigObj.subscript,LabComClass.superscript=modelCls.cPropObj.playerConfigObj.superscript,LabComClass.end=modelCls.cPropObj.playerConfigObj.end,LabComClass.requestLocalImage(["background.png"],function(e){onModelUpdateCls.trigger("setVProp",{bgImageObj:e["background.png"]},"onLocaliseTextLoad")})});break;case"onLocaliseTextLoad":LabComClass.childPreloadProgress(60),loadSFXAudio();break;case"onSFXLoad":createCompList();break;case"onCompListAdd":sendInstanceToAct()}}function onGlobalUpdate(e){switch(e.type){case"onCheckForSubway":break;case"componentLoaded":allCompLoaded(e.data);break;case"playSFX":modelCls.cPropObj.audioContextCls.sfxObj.play(e.data);break;case"popupOpened":updatePopupContent(e.data)}}function setUpPlayer(){LabComClass.localImagePath="assets/images/",LabComClass.globalImagePath="assets/images/",httpRequest(modelCls.cPropObj.playerPath+"playerconfig.json","json",function(e){LabComClass.childPreloadProgress(18),onModelUpdateCls.trigger("setCProp",e,"onPlayerConfigLoad")})}function loadGlobalText(){httpRequest(modelCls.cPropObj.playerPath+"globalText.js","js",function(_dataObj){var globalText;eval(_dataObj),onModelUpdateCls.trigger("setCProp",{globalTextObj:globalText},"onGlobalTextLoad")})}function httpRequest(e,t,o,n,a){a=new XMLHttpRequest;a.onreadystatechange=function(){4===this.readyState&&o&&("json"===t.toLowerCase()?o(JSON.parse(this.responseText)):o(this.responseText))},a.open("GET",e,!0),a.send()}function setPlayerScale(){var e=0;modelCls.cPropObj.deviceTypeBool&&(e=1500),setTimeout(function(){window.onresize=function(){setStageSize()},setStageSize(!0)},e)}function setStageSize(a){clearTimeout(modelCls.vPropObj.resizeTimeoutObj);var e=setTimeout(function(){var e="",t=calculateScaleVal({w:modelCls.cPropObj.playerConfigObj.baseWidth,h:modelCls.cPropObj.playerConfigObj.baseHeight});t.devScaleRatioInt=calculateDevicePixelRatio(modelCls.vPropObj.contCanvasObj);var o;t.w,t.h,t.devScaleRatioInt;a&&(modelCls.vPropObj.mTextWrapperObj.className="mStage mTextWrapper",document.body.appendChild(modelCls.vPropObj.mTextWrapperObj),modelCls.vPropObj.bgCanvasObj.className="mStage mStagebgCanvas",document.body.appendChild(modelCls.vPropObj.bgCanvasObj),modelCls.vPropObj.contCanvasObj.className="mStage mStagecontCanvas",document.body.appendChild(modelCls.vPropObj.contCanvasObj),modelCls.vPropObj.virtualCanvasObj.className="mStage mVirtualStagecontCanvas",modelCls.vPropObj.domLayerObj.className="mStage mDomLayer",document.body.appendChild(modelCls.vPropObj.domLayerObj),modelCls.vPropObj.headerObj.className="mStage header",modelCls.vPropObj.domLayerObj.appendChild(modelCls.vPropObj.headerObj),modelCls.vPropObj.headerLogoItemObj.className="logoItem",modelCls.vPropObj.headerObj.appendChild(modelCls.vPropObj.headerLogoItemObj),modelCls.vPropObj.headerLogoObj.className="logo",modelCls.vPropObj.headerLogoItemObj.appendChild(modelCls.vPropObj.headerLogoObj),modelCls.vPropObj.headerTextObj.className="header__title",modelCls.vPropObj.headerTextObj.innerHTML="header",modelCls.vPropObj.headerObj.appendChild(modelCls.vPropObj.headerTextObj),modelCls.vPropObj.headerHelpObj.className="helpScreenButton headerButton",modelCls.vPropObj.headerObj.appendChild(modelCls.vPropObj.headerHelpObj),modelCls.vPropObj.headerHelpIconObj.className="helpIcon",modelCls.vPropObj.headerHelpObj.appendChild(modelCls.vPropObj.headerHelpIconObj),modelCls.vPropObj.headerCopyRightObj.className="copyrightButton headerButton",modelCls.vPropObj.headerObj.appendChild(modelCls.vPropObj.headerCopyRightObj),modelCls.vPropObj.infoPopupObj.className="infoPopup",modelCls.vPropObj.domLayerObj.appendChild(modelCls.vPropObj.infoPopupObj),modelCls.vPropObj.headerCopyRightIconObj.className="verticalDotsIcon",modelCls.vPropObj.headerCopyRightObj.appendChild(modelCls.vPropObj.headerCopyRightIconObj),modelCls.vPropObj.preloadObj.className="mStage preloadDiv",document.body.appendChild(modelCls.vPropObj.preloadObj),CanvasRenderingContext2D.prototype.textWrapperClass=LabComClass.TextImgClass,CanvasRenderingContext2D.prototype.textWrapperV2Class=LabComClass.TextImgV2Class,CanvasRenderingContext2D.prototype.textWrapperNewClass=LabComClass.TextImgNewClass,CanvasRenderingContext2D.prototype.tweenClass=LabComClass.TweenClass,CanvasRenderingContext2D.prototype.drawCurveRect=LabComClass.drawCurveRect,CanvasRenderingContext2D.prototype.drawStyledText=LabComClass.drawStyledText,o=CanvasRenderingContext2D.prototype.drawImage,CanvasRenderingContext2D.prototype.drawImage=function(){try{o.apply(this,arguments)}catch(e){var t="Failed to draw error, ";t+="trace === "+(e.stack||"").split("\n").map(function(e){return e.trim()}).join(",")+", ",t+="arguments === "+JSON.stringify(arguments),"undefined"!=typeof trackJs&&trackJs.console.error(t)}},e="onScaleSet");var n={};n.bgContextObj=modelCls.vPropObj.bgCanvasObj.getContext("2d"),n.contContextObj=modelCls.vPropObj.contCanvasObj.getContext("2d"),onModelUpdateCls.trigger("setVProp",n,""),modelCls.vPropObj.bgCanvasObj.style.left=t.x+"px",modelCls.vPropObj.bgCanvasObj.style.top=t.y+"px",modelCls.vPropObj.bgCanvasObj.width=t.w*t.devScaleRatioInt,modelCls.vPropObj.bgCanvasObj.height=t.h*t.devScaleRatioInt,modelCls.vPropObj.bgCanvasObj.style.width=t.w+"px",modelCls.vPropObj.bgCanvasObj.style.height=t.h+"px",modelCls.vPropObj.contCanvasObj.style.left=t.x+"px",modelCls.vPropObj.contCanvasObj.style.top=t.y+"px",modelCls.vPropObj.contCanvasObj.width=t.w*t.devScaleRatioInt,modelCls.vPropObj.contCanvasObj.height=t.h*t.devScaleRatioInt,modelCls.vPropObj.contCanvasObj.style.width=t.w+"px",modelCls.vPropObj.contCanvasObj.style.height=t.h+"px",modelCls.vPropObj.virtualCanvasObj.width=t.w*t.devScaleRatioInt,modelCls.vPropObj.virtualCanvasObj.height=t.h*t.devScaleRatioInt,modelCls.vPropObj.virtualCanvasObj.style.width=t.w+"px",modelCls.vPropObj.virtualCanvasObj.style.height=t.h+"px",modelCls.vPropObj.domLayerObj.style.left=t.x+"px",modelCls.vPropObj.domLayerObj.style.top=t.y+"px",modelCls.vPropObj.domLayerObj.style.width=modelCls.cPropObj.playerConfigObj.baseWidth+"px",modelCls.vPropObj.domLayerObj.style.height=modelCls.cPropObj.playerConfigObj.baseHeight+"px",modelCls.vPropObj.domLayerObj.style.transform="scale("+t.scale+")",modelCls.vPropObj.snapshotCnvObj.width=t.w*t.devScaleRatioInt,modelCls.vPropObj.snapshotCnvObj.height=t.h*t.devScaleRatioInt,modelCls.vPropObj.mouseCanvasObj.width=t.w,modelCls.vPropObj.mouseCanvasObj.height=t.h,modelCls.vPropObj.mTextWrapperObj.style.display="none",modelCls.vPropObj.mTextWrapperObj.setAttribute("data-scale",t.scale),modelCls.vPropObj.preloadObj.style.left=t.x+"px",modelCls.vPropObj.preloadObj.style.top=t.y+"px",modelCls.vPropObj.preloadObj.style.width=t.w+"px",modelCls.vPropObj.preloadObj.style.height=t.h+"px",modelCls.cPropObj.mouseHandleCls.updateOnResize(t),LabComClass.setVirtualCnv(modelCls.vPropObj.virtualCanvasObj),LabComClass.setSnapshotCnv({snapshotCnvObj:modelCls.vPropObj.snapshotCnvObj,bgCanvasObj:modelCls.vPropObj.bgCanvasObj,contCanvasObj:modelCls.vPropObj.contCanvasObj,devScaleRatioInt:t.devScaleRatioInt,scale:t.scale}),onModelUpdateCls.trigger("setVProp",{scaledDataObj:t},e),LabComClass.setCnvScale(modelCls.vPropObj.scaledDataObj),a||onViewUpdateCls.trigger("onGlobalUpdate",{type:"onNavStageResize",data:{}})},300);onModelUpdateCls.trigger("setVProp",{resizeTimeoutObj:e},"")}function calculateScaleVal(e){var t={};try{t=JSON.parse('{"'+location.search.substring(1).replace(/&/g,'","').replace(/=/g,'":"')+'"}')}catch(e){console.log("To switch off the scale: ?noscale=true")}if("true"===t.noscale)return document.body.style.overflow="auto",{w:e.w,h:e.h,scale:1,x:0,y:0};var o,n,a=e.w,s=e.h,r=window.innerWidth,i=window.innerHeight,l=1,e=1;return i<r?(o=i,l=Number(s/o),n=a/s*o,r/2-Number(n)/2<0&&(n=r,l=Number(a/n),o=s/a*n),(e=1/l)<.1&&(e=.1)):(o=s/a*(n=r),(e=1/(l=Number(a/n)))<.1&&(e=.1)),{w:Math.round(a*e),h:Math.round(s*e),scale:e,x:Math.round(window.innerWidth/2-Number(n)/2),y:Math.round(window.innerHeight/2-Number(o)/2)}}function calculateDevicePixelRatio(e){e=e.getContext("2d");return(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)}function loadUIFonts(e){var t=modelCls.cPropObj.labObj.fonts,o=[];if(0<t.length)for(var n=0;n<t.length;n+=1)o.push(t[n]);LabComClass.fontLoader({timeout:15e3,fontArr:o,callback:e,error:function(e){console.log("List of fonts failed to load === ",JSON.stringify(e)),"undefined"!=typeof trackJs&&trackJs.console.error("List of fonts failed to load === ",JSON.stringify(e))}})}function loadSFXAudio(){LabComClass.childPreloadProgress(78);var o=[],n=modelCls.cPropObj.labObj.globalSfx;Object.keys(n).forEach(function(e){var t=n[e];n[e].source=modelCls.cPropObj.playerPath+"assets/audio/"+t.source,o.push(n[e])}),0<n.length?modelCls.cPropObj.audioContextCls.sfxObj.add(o,function(){onModelUpdateCls.trigger("setCProp",{},"onSFXLoad")}):onModelUpdateCls.trigger("setCProp",{},"onSFXLoad")}function scriptLoader(e,t,o){for(var n=0,a=0;a<t.length;a++)n++,addScript(t[a],s,0);function s(){--n<=0&&o()}}function addScript(t,o,n){var e=document.createElement("script");e.setAttribute("data-load-cnt",n),e.onload=o,e.onerror=function(e){n<=2?setTimeout(function(){addScript(t,o,n+1)},500):"undefined"!=typeof trackJs&&(trackJs.console.error("script onload error URL : "+t),window.alert("There was an error loading a critical file for this lesson. The lesson needs to close"),onViewUpdateCls.trigger("onGlobalUpdate",{type:"onClosePlayerWindow"}))},e.setAttribute("src",t),document.getElementsByTagName("head")[0].appendChild(e)}function createCompList(){for(var _iInt=0,_interactiveLayerArr=modelCls.cPropObj.interactiveLayerArr,_compListObj={},_globalData=modelCls.cPropObj.labObj.components,_iInt=0;_iInt<_globalData.length;_iInt++){var _idObj=_globalData[_iInt].initdata||{};_idObj.id=_globalData[_iInt].id,_idObj.domLayer=modelCls.vPropObj.domLayerObj,_idObj.canvas=modelCls.vPropObj.contCanvasObj,_idObj.context=modelCls.vPropObj.contContextObj,_idObj.deviceTypeBool=modelCls.cPropObj.deviceTypeBool,_idObj.devScaleRatioInt=modelCls.vPropObj.scaledDataObj.devScaleRatioInt,_idObj.playerConfigObj=modelCls.cPropObj.playerConfigObj,_idObj.LabComClass=LabComClass;var _func=eval(_globalData[_iInt].ref);_compListObj[_globalData[_iInt].id]={},_compListObj[_globalData[_iInt].id].obj=new _func(_idObj),_interactiveLayerArr.push(_globalData[_iInt].id)}onModelUpdateCls.trigger("setCProp",{compListObj:_compListObj,interactiveLayerArr:_interactiveLayerArr},"")}function allCompLoaded(e){var t="",o=modelCls.cPropObj.compCountInt;++o===modelCls.cPropObj.labObj.components.length&&(t="onCompListAdd"),onModelUpdateCls.trigger("setCProp",{compCountInt:o},t)}function sendInstanceToAct(){var _compListObj=modelCls.cPropObj.compListObj,_obj={},_idObj,_brainClassObj,_brainObj;Object.keys(_compListObj).length<=0?requestAnimationFrame(sendInstanceToAct):(Object.keys(_compListObj).forEach(function(e){_obj[e]=_compListObj[e].obj}),_idObj={},_idObj.spineObj=_obj,_idObj.spineObj.LabComClass=LabComClass,_brainClassObj=eval("BrainClass"),_brainObj=new _brainClassObj(_idObj),onModelUpdateCls.trigger("setCProp",{brainObj:_brainObj},"onActivityInited"))}function getTableData(e,o){var n='<table style = "border:1px solid black;border-collapse: collapse">        <tr style = "border:1px solid black">          <th style = "padding: 5px 10px;border:1px solid black">Werkzeug</th>          <th style = "padding: 5px 20px;border:1px solid black">Symbol</th>          <th style = "padding: 5px 50px;border:1px solid black">Funktionsweise</th>        </tr>';return e.forEach(function(e){var t="point"===(e=e.includes("brush")?"color":e)?"20px":"70px";n+='<tr style = "border:1px solid black">            <td style = "padding: 5px 10px;border:1px solid black">'+o.toolGerman[e]+'</td>            <td style = "padding: 5px 20px;vertical-align:middle;border:1px solid black"><img src="assets/images/'+e+'.svg" style = "height:'+t+';width:70px;vertical-align:text-top"/></td>            <td style = "padding: 5px 50px;border:1px solid black">'+o[e]+"</td>          </tr>"}),n+="</table>"}function updatePopupContent(e){var t=e.title,o=e.contentKey,n=modelCls.vPropObj.infoPopupObj,a=n.titleDiv,e=n.contentDiv,n=LabComClass.globalLangText[t]||modelCls.cPropObj.globalTextObj[o][t];"Werkzeugliste"!==(a.innerHTML=t)?e.innerHTML=n:e.innerHTML=getTableData(["move","color","point","segment","segmentDash","segSize","ray","line","angleRay","angleSize","angle","perpendicularLine","parallelLine","circle","circleSize","circle_3","compass","length","mirrorOnLine","midPoint","perpendicularBisector","angleB","triangle","square"],modelCls.cPropObj.globalTextObj[o][t])}onModelUpdateCls.on("controllerInit",init),onModelUpdateCls.on("onChange",onChange),onViewUpdateCls.on("onGlobalUpdate",onGlobalUpdate)}function AudioContextClass(){var s,r,i=this,l=(Object.prototype.hasOwnProperty,new AudioNativeClass,0),n=44100,d=new MediaErrorHandlingClass({refObj:i,element:null,type:"audioContext"});function c(e,t,o){this.context=e,this.urlList=t,this.onload=o,this.bufferList=[],this.loadCount=0}isAudioContextSupported()?(r=!0,s=new window.AudioContext):r=!1,r=!1,this.sfxObj=new function(){var a={};this.add=function(t,e){function o(e){console.log("loaderror",e),d.pushError(JSON.stringify(e))}function n(){l+=1,t.length===l&&e()}d.registerRequest({action:"add",audioListArr:t,callBackFn:e}),!0===r?new c(s,t,function(t){Object.keys(t).forEach(function(e){a[t[e].key]={},a[t[e].key]=t[e]}),e()}).load():Object.keys(t).forEach(function(e){!1===i.mp3Support()&&(t[e].source=t[e].source.replace(".mp3",".ogg")),a[t[e].key]=new Howl({src:[t[e].source]}),a[t[e].key].once("load",n),a[t[e].key].once("loaderror",o)})},this.play=function(e,t){var o;!0===r&&a[e]?(a[e].context=s.createBufferSource(),a[e].context.context.sampleRate!==n&&(o=s.createBuffer(1,1,n),a[e].context=s.createBufferSource(),a[e].context.buffer=o,a[e].context.connect(s.destination),a[e].context.start(0),a[e].context.disconnect(),s.close(),s=new window.AudioContext,a[e].context=s.createBufferSource()),t&&(a[e].context.onended=t),a[e].context.buffer=a[e].buffer,a[e].context.connect(s.destination),a[e].context.start(0)):a[e]&&a[e].play()},this.setAudioList=function(e){0}},this.mp3Support=function(){var e=document.createElement("audio");return!(!e.canPlayType||!e.canPlayType("audio/mpeg;").replace(/no/,""))},c.prototype.loadBuffer=function(e,t){!1===i.mp3Support()&&(e=e.replace(".mp3",".ogg"));var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer";var n=this;o.onload=function(){n.context.decodeAudioData(o.response,function(e){n.bufferList[t]=t,n.urlList[t].buffer=e,++n.loadCount===n.urlList.length&&n.onload(n.urlList)},function(e){console.log("decodeAudioData error",e),"undefined"!=typeof trackJs&&trackJs.console.error("Audio load error "+JSON.stringify(e)),window.alert("There was an error loading a critical file for this lesson. The lesson needs to close"),onViewUpdateCls.trigger("onGlobalUpdate",{type:"onClosePlayerWindow"})})},o.onerror=function(e){console.log("onerror",e),"undefined"!=typeof trackJs&&trackJs.console.error("Audio load error"),window.alert("There was an error loading a critical file for this lesson. The lesson needs to close"),onViewUpdateCls.trigger("onGlobalUpdate",{type:"onClosePlayerWindow"})},o.send()},c.prototype.load=function(){for(var e=0;e<this.urlList.length;++e)this.loadBuffer(this.urlList[e].source,e)}}function AudioNativeClass(){var t,o,n=new Audio,a=Object.prototype.hasOwnProperty,s=this,r=function(){},i=function(){},l=!1,d=!1,c=new MediaErrorHandlingClass({refObj:s,element:n,type:"audio"});n.addEventListener("ended",function(){r()},!1),n.addEventListener("error",function(e){c.pushError(e)},!1),this.addAudio=function(e){o="add",c.registerRequest({action:"add",dataObj:e}),n.src="",r=a.call(e,"callback")?function(){e.callback()}:function(){},i=a.call(e,"startCallback")?function(){e.startCallback()}:function(){},a.call(e,"errorCallback"),l=!!a.call(e,"stopOnLoad")&&e.stopOnLoad,!1===this.mp3Support()&&(e.src=e.src.replace(".mp3",".ogg")),c.setFilePath(e.src),n.src=e.src,n.load(),clearInterval(t),-1===n.src.indexOf("blank.")&&(t=setInterval(function(){0<n.currentTime&&(clearInterval(t),i(),i=function(){},!0===l&&(l=!1,s.pauseAudio()),"pause"===o&&s.pauseAudio())},5))},this.mp3Support=function(){var e=document.createElement("audio");return!(!e.canPlayType||!e.canPlayType("audio/mpeg;").replace(/no/,""))},this.removeAudio=function(){trace("remove audio..."),o="remove",n.src=""},this.callEnded=function(){trace("call ended...")},this.playAudio=function(e){o="play",c.registerRequest({action:"playAudio",dataObj:e}),void 0!==e&&(n.currentTime=e),""===n.src||void 0!==(e=n.play())&&e.then(function(){d=!0}).catch(function(e){null===n.error?!1===d&&(onModelUpdateCls.trigger("setCProp",{mediaPromiseErrorTypeStr:"audio"}),console.log("playPromise error audio",e),i(),i=function(){},onViewUpdateCls.trigger("onGlobalUpdate",{type:"navPauseBtnClick"})):c.pushError(e)})},this.pauseAudio=function(){trace("pause audio..."),o="pause",""!==n.src&&0<n.currentTime&&n.pause()},this.getCurrentTime=function(){return trace("Get current Time ..."),n.currentTime},this.reload=function(){o="reload";var e=n.src;n.src="",n.src=e}}function trace(e){}function isAudioContextSupported(){return window.AudioContext=window.AudioContext||window.webkitAudioContext,window.AudioContext?1:void 0}function MediaErrorHandlingClass(e){var n=0,a=e.refObj,s=e.element,r=e.type,i=this,l={action:null,dataObj:null},d="No file source";this.registerRequest=function(e){l=e},this.setFilePath=function(e){void 0!==e&&(d=e)},this.pushError=function(e,t){var o;switch(n+=1,r){case"audio":case"video":switch(s.error.code){case s.error.MEDIA_ERR_ABORTED:o="You aborted the audio/video playback.";break;case s.error.MEDIA_ERR_NETWORK:o="A network error caused the audio/video download to fail part-way.";break;case s.error.MEDIA_ERR_DECODE:o="The video/Audio playback was aborted due to a corruption problem or because the audio/video used features your browser did not support.";break;case s.error.MEDIA_ERR_SRC_NOT_SUPPORTED:o="The video/Audio could not be loaded, either because the server or network failed or because the format is not supported.";break;default:o="An unknown error occurred."}break;case"audioContext":o="audio sfx missing"}n<=3?(console.log("media error retry delay started"),setTimeout(function(){switch(console.log("media error retry delay end"),r){case"video":"add"===l.action?a.add(l.dataObj):(a.reload(),a.playVideo(l.dataObj));break;case"audio":"add"===l.action?a.addAudio(l.dataObj):(a.reload(),a.playAudio(l.dataObj));break;case"audioContext":"add"===l.action&&a.sfxObj.add(l.audioListArr,l.callBackFn)}},500)):4===n&&(console.log(o+"file path = "+d),"undefined"!=typeof trackJs&&("No file source"!==d?trackJs.console.error(o+"; file path = "+d):trackJs.console.error(o)),i.backToDashboard())},this.backToDashboard=function(){window.alert("There was an error loading a critical file for this lesson. The lesson needs to close"),onViewUpdateCls.trigger("onGlobalUpdate",{type:"onClosePlayerWindow"})}}function KeyHandlerClass(){var n={};function e(o){Object.keys(n).forEach(function(t){n[t].forEach(function(e){e({nativeEvent:o,compId:t})})})}this.init=function(){window.addEventListener("keyup",e),window.addEventListener("keydown",e),window.addEventListener("keypress",e)},this.addKeyEvents=function(e){var t=e.id,e=e.callback;n[t]||(n[t]=[]),n[t].push(e)},this.removeKeyEvents=function(e){var t=e.id,o=e.callback;n[e=t]&&0<n[e].length&&(o=n[t].indexOf(o),n[t].splice(o,1),0===n[t].length&&delete n[t])}}function MouseHandlerClass(){var dataObj={},scaledDataObj={},mouseRegionObj={},lastPageX=0,lastPageY=0,mouseEvents={},mousePoniterStyle="default",activeElement=null,newMouseEnterElement=null,mouseContextObj,hitAreaArr,enableMouseEvents=!0;function onGlobalUpdate(e){switch(e.type){case"resumeGlobalMouseEvent":applyMouseEvents(!0);break;case"stopGlobalMouseEvent":applyMouseEvents(!1)}}function upadteHitAreas(){var e=dataObj.interactiveLayerArr;if(e){hitAreaArr=[];for(var t=e.length-1;0<=t;t--){var o=mouseRegionObj[e[t]];if(void 0!==o)for(var n=o.length-1;0<=n;n--){var a={id:e[t],subId:o[n].id,color:getRandomColor(),rect:o[n].rect,arc:o[n].arc,shape:o[n].shape};hitAreaArr.push(a)}}drawNav()}}function drawNav(){if(void 0!==scaledDataObj.scale){mouseContextObj.clearRect(0,0,dataObj.mouseCanvasObj.width,dataObj.mouseCanvasObj.height),mouseContextObj.save(),mouseContextObj.scale(scaledDataObj.scale,scaledDataObj.scale);for(var _ni=hitAreaArr.length-1;0<=_ni;_ni--){var _el=hitAreaArr[_ni];if(mouseContextObj.beginPath(),mouseContextObj.fillStyle=_el.color,void 0!==_el.rect)mouseContextObj.fillRect(_el.rect.x,_el.rect.y,_el.rect.w,_el.rect.h);else if(void 0!==_el.arc)mouseContextObj.arc(_el.arc.x,_el.arc.y,_el.arc.r,0,2*Math.PI),mouseContextObj.fill();else if(void 0!==_el.shape){for(var _sh=0;_sh<_el.shape.length;_sh++)eval("mouseContextObj."+_el.shape[_sh]);mouseContextObj.fill()}mouseContextObj.closePath()}mouseContextObj.restore()}}function mouseEventHandler(e){if(enableMouseEvents){var t,o=LabComClass.BrowserDetect.isDevice()?(t=(void 0!==e.targetTouches[0]&&(lastPageX=e.targetTouches[0].pageX,lastPageY=e.targetTouches[0].pageY),lastPageX),lastPageY):(t=e.pageX,e.pageY),n="";switch(e.type){case"touchstart":case"mousedown":n="mousedown",e.button&&2===e.button&&(n="rightmousedown");break;case"touchmove":case"mousemove":n="mousemove";break;case"touchend":case"mouseup":n="mouseup",e.button&&2===e.button&&(n="rightmouseup")}t-=scaledDataObj.x,o-=scaledDataObj.y,""!==n&&isMouseInRegion({pageX:t,pageY:o,typeStr:n}),LabComClass.BrowserDetect.isDevice()||e.preventDefault()}}function isMouseInRegion(e){var t="default",o=checkMouseIn(e.pageX,e.pageY);"mousemove"===e.typeStr&&(null===activeElement?null!==o?null===newMouseEnterElement||newMouseEnterElement.id!==o.id||newMouseEnterElement.subIndex!==o.subIndex?(null!==newMouseEnterElement&&dispatchMouseEvent("mouseout",e,newMouseEnterElement),dispatchMouseEvent("mouseenter",e,o),newMouseEnterElement=o):dispatchMouseEvent("mousemove",e,newMouseEnterElement):null!==newMouseEnterElement&&(dispatchMouseEvent("mouseout",e,newMouseEnterElement),newMouseEnterElement=o):dispatchMouseEvent("pressmove",e,activeElement)),"mousedown"===e.typeStr&&(null===activeElement&&null!==o&&(activeElement=o,dispatchMouseEvent(e.typeStr,e,activeElement)),dispatchStageEvent(activeElement)),"rightmousedown"===e.typeStr&&null===activeElement&&null!==o&&dispatchMouseEvent(e.typeStr,e,o),"mouseup"!==e.typeStr&&"rightmouseup"!==e.typeStr||null===activeElement||(null!==o&&activeElement.id===o.id&&activeElement.subId===o.subId?dispatchMouseEvent(e.typeStr,e,activeElement):dispatchMouseEvent("mouseup"===e.typeStr?"mouseupout":"rightmouseupout",e,activeElement),activeElement=newMouseEnterElement=null),null!==activeElement?(t=void 0===activeElement.cursor?"pointer":activeElement.cursor,"mousemove"!==e.typeStr&&"mousedown"!==e.typeStr||!activeElement.downCursor||(t=activeElement.downCursor)):null!==(e=checkMouseIn(e.pageX,e.pageY))&&(t=void 0===e.cursor?"pointer":e.cursor),mousePoniterStyle!==t&&(document.body.style.cursor=t),mousePoniterStyle=t}function dispatchMouseEvent(e,t,o){var n,a=mouseRegionObj[o.id]?mouseRegionObj[o.id][o.subIndex]:void 0;void 0!==a&&void 0!==a.eventListener&&(n={id:o.id,subId:a.id,type:e,pageX:t.pageX/scaledDataObj.scale,pageY:t.pageY/scaledDataObj.scale},setTimeout(function(){a.eventListener(n),onViewUpdateCls.trigger("onGlobalUpdate",{type:"rendererUpdate"})},0))}function dispatchStageEvent(a){null===a&&(a={id:null,subId:null}),Object.keys(mouseRegionObj).forEach(function(e){for(var t=0;t<mouseRegionObj[e].length;t++){var o,n=mouseRegionObj[e][t];void 0!==n.eventListener&&(o={id:a.id,subId:a.id,type:"stageevent",pageX:a.pageX/scaledDataObj.scale,pageY:a.pageY/scaledDataObj.scale},setTimeout(function(){n.eventListener(o)},0))}})}function checkMouseIn(e,t){var t=mouseContextObj.getImageData(e,t,1,1),o=LabComClass.rgba2hex(t.data[0],t.data[1],t.data[2],t.data[3]).substring(0,6);if("000000"!==o)for(var n=0;n<hitAreaArr.length;n++)if(hitAreaArr[n].color.replace("#","")===o){for(var a=mouseRegionObj[hitAreaArr[n].id],s=0;s<a.length;s++)if(a[s].id===hitAreaArr[n].subId)return{id:hitAreaArr[n].id,subIndex:s,cursor:a[s].cursor,downCursor:a[s].downCursor};break}return null}function getRandomColor(){for(var e="0123456789".split(""),t="#",o=0;o<6;o++)t+=e[Math.floor(Math.random()*e.length)];return t}function applyMouseEvents(e){document.body.style.cursor="default",document.body.removeEventListener(mouseEvents.down,mouseEventHandler),document.body.removeEventListener(mouseEvents.move,mouseEventHandler),document.body.removeEventListener(mouseEvents.up,mouseEventHandler),e&&(document.body.addEventListener(mouseEvents.down,mouseEventHandler,{passive:!1}),document.body.addEventListener(mouseEvents.move,mouseEventHandler,{passive:!1}),document.body.addEventListener(mouseEvents.up,mouseEventHandler,{passive:!1}))}this.init=function(e){mouseEvents=(dataObj=e).deviceTypeBool?{down:"touchstart",move:"touchmove",up:"touchend",click:"click"}:{down:"mousedown",move:"mousemove",up:"mouseup",click:"click"},mouseContextObj=dataObj.mouseCanvasObj.getContext("2d"),applyMouseEvents(!0),onViewUpdateCls.on("onGlobalUpdate",onGlobalUpdate)},this.updateOnResize=function(e){scaledDataObj=e,upadteHitAreas()},this.updateInteractiveLayer=function(e){dataObj.interactiveLayerArr=e,upadteHitAreas()},this.toggleMouseEvents=function(e){enableMouseEvents=e},this.addMouseEvent=function(t){mouseRegionObj[t.id]||(mouseRegionObj[t.id]=[]);for(var o=0;o<t.r.length;o++){for(var e=!1,n=0;n<mouseRegionObj[t.id].length;n++)mouseRegionObj[t.id][n].id===t.r[o].id&&(e=!0,Object.keys(t.r[o]).forEach(function(e){mouseRegionObj[t.id][n][e]=t.r[o][e]}));e||mouseRegionObj[t.id].push(t.r[o])}upadteHitAreas()},this.setCursor=function(e){for(var t=0;t<mouseRegionObj[e.id].length;t++)if(mouseRegionObj[e.id][t].id===e.subId){e.cursor&&(mouseRegionObj[e.id][t].cursor=e.cursor),e.downCursor&&(mouseRegionObj[e.id][t].downCursor=e.downCursor);break}},this.removeMouseEvent=function(e){if(e.r&&mouseRegionObj[e.id])for(var t=0;t<e.r.length;t++)for(var o=0;o<mouseRegionObj[e.id].length;o++)mouseRegionObj[e.id][o].id===e.r[t]&&mouseRegionObj[e.id].splice(o,1);else mouseRegionObj[e.id]&&delete mouseRegionObj[e.id];upadteHitAreas()},this.getCursor=function(){return mousePoniterStyle}}var LabComClass={contentAreaObj:{},globalLangText:"",snapshotCnvObj:{},html2CanvasQueueArr:[],html2CanvasQueueStarted:!1,setCnvScale:function(e){LabComClass.scale=e},setVirtualCnv:function(e){LabComClass.virtualCnv=e},setCursor:function(e){modelCls.cPropObj.mouseHandleCls.getCursor()!==e.cursor&&(document.body.style.cursor=e.cursor,modelCls.cPropObj.mouseHandleCls.setCursor(e))},setHeader:function(e){e=0<arguments.length&&void 0!==e?e:"header";modelCls.vPropObj.headerTextObj.innerHTML=e},setSnapshotCnv:function(e){LabComClass.snapshotCnvObj=e},globalSnapShot:function(s){var r=new Image;r.onload=function(){var a=new Image;a.onload=function(){var t=LabComClass.snapshotCnvObj.snapshotCnvObj;t.width=LabComClass.snapshotCnvObj.contCanvasObj.width,t.height=LabComClass.snapshotCnvObj.contCanvasObj.height;var e=0,o=0;void 0!==s.areaObj&&(t.width=s.areaObj.width*LabComClass.snapshotCnvObj.scale*LabComClass.snapshotCnvObj.devScaleRatioInt,t.height=s.areaObj.height*LabComClass.snapshotCnvObj.scale*LabComClass.snapshotCnvObj.devScaleRatioInt,e=s.areaObj.x*LabComClass.snapshotCnvObj.scale*LabComClass.snapshotCnvObj.devScaleRatioInt*-1,o=s.areaObj.y*LabComClass.snapshotCnvObj.scale*LabComClass.snapshotCnvObj.devScaleRatioInt*-1);var n=t.getContext("2d");n.drawImage(r,e,o),n.drawImage(a,e,o);o=new Image;o.onload=function(){var e;void 0!==s.callback&&((e=new Image).src=t.toDataURL("image/png"),s.callback(e))},o.src=t.toDataURL("image/png")},a.src=LabComClass.snapshotCnvObj.contCanvasObj.toDataURL("image/png")},r.src=LabComClass.snapshotCnvObj.bgCanvasObj.toDataURL("image/png")},EventClass:function(a){var s={},r=Object.prototype.hasOwnProperty;function i(e,t,o){if(void 0!==s[e])for(var n=0;n<s[e].length;n++)"function"==typeof s[e][n]&&s[e][n](t,o)}this.trigger=function(t,o,n){Object.keys(s).forEach(function(e){e===t&&r.call(s,e)&&(!0===a?i(e,o,n):requestAnimationFrame(function(){i(e,o,n)}))})},this.on=function(e,t){void 0===s[e]&&(s[e]=[]),s[e].push(t)},this.off=function(t,o){requestAnimationFrame(function(){if(void 0!==s[t])for(var e=0;e<s[t].length;e++)s[t][e]===o&&s[t].splice(e,1)})}},defineObject:function(e,t,o){Object.defineProperty(e,t,{value:o,writable:!1,configurable:!0,enumerable:!0})},global_line_intersect:function(e,t,o,n,a,s,r,i){var l=(i-s)*(o-e)-(r-a)*(n-t);return 0==l?null:{x:e+(i=((r-a)*(t-s)-(i-s)*(e-a))/l)*(o-e),y:t+(l=((o-e)*(t-s)-(n-t)*(e-a))/l)*(n-t),seg1:0<=i&&i<=1,seg2:0<=l&&l<=1}},localImagePath:"",globalImagePath:"",requestLocalImage:function(e,t,o){for(var n={},a=0;a<e.length;a++)n[e[a]]=LabComClass.localImagePath+e[a];LabComClass.imageLoader(n,t,o)},requestGlobalImage:function(e,t,o){for(var n={},a=0;a<e.length;a++)n[e[a]]=LabComClass.globalImagePath+e[a];LabComClass.imageLoader(n,t,o)},rgba2hex:function(e,t,o,n){if(255<e||255<t||255<o||255<n)throw"Invalid color component";return(256+e).toString(16).substr(1)+((1<<24)+(t<<16)|o<<8|n).toString(16).substr(1)},imageLoader:function(t,e,o){var n={},a=0,s=[],r=[],i=0;void 0!==o&&(i=o);var l=3;function d(){var e=r[a];n[e]=new Image,n[e].onerror=c,n[e].onload=u,n[e].src=s[a]}function c(){(i+=1)<=l?d():window.alert("There was an error loading a critical file for this lesson. The lesson needs to close")}function u(){i=0,(a+=1)===s.length?e(n):d()}Object.keys(t).forEach(function(e){s.push(t[e]),r.push(e)}),d()},BrowserDetect:{platformAndroid:function(){return!!navigator.userAgent.match(/Android/i)},platformBlackBerry:function(){return!!navigator.userAgent.match(/BlackBerry/i)},platformIOS:function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod|caireadymobile/i)||0<navigator.maxTouchPoints&&void 0!==window.orientation},platformWindows:function(){return!!navigator.userAgent.match(/IEMobile/i)},isDevice:function(){return LabComClass.BrowserDetect.platformAndroid()||LabComClass.BrowserDetect.platformBlackBerry()||LabComClass.BrowserDetect.platformIOS()||LabComClass.BrowserDetect.platformWindows()},browserUserAgentName:function(){return navigator.userAgent},ie9:function(){return!!navigator.userAgent.match(/MSIE 9.0/i)},ie10:function(){return!!navigator.userAgent.match(/MSIE 10.0/i)},ie:function(){return"Microsoft Internet Explorer"===navigator.appName||!(!navigator.userAgent.match(/Trident/)&&!navigator.userAgent.match(/rv:11/))||0<navigator.userAgent.indexOf("MSIE")||!!navigator.userAgent.match(/Edge\/\d./i)||!!navigator.userAgent.match(/MSIE 9.0/i)||!!navigator.userAgent.match(/MSIE 10.0/i)}},GlobalAnimClass:function(){var n,a={},s=!1;function t(){var o=new Date;Object.keys(a).forEach(function(e){var t;void 0!==a[e].delay?(void 0===a[e].oldDate||o-a[e].oldDate>=a[e].delay)&&(a[e].oldDate=o,a[e].frame&&a[e].frame(e)):void 0!==a[e].fps&&(t=Math.ceil((o-a[e].oldDate)/(1/a[e].fps*1e3)),a[e].lastFrame!==t&&(a[e].resetVal&&(a[e].oldDate=new Date,t=1,a[e].resetVal=null),a[e].lastFrame=t,a[e].frame&&a[e].frame({id:e,frame:t})))}),s&&(n=requestAnimationFrame(t))}this.start=function(e){e.id&&((a[e.id]=e).immediate||(a[e.id].oldDate=new Date),a[e.id].lastFrame=null,a[e.id].start&&a[e.id].start()),s||(s=!0,t())},this.stop=function(e){var t,o;e&&a[e]&&(a[e].stop&&a[e].stop(),void 0!==a[e]&&delete a[e]),0===(t=a,o=0,Object.keys(t).forEach(function(e){t.hasOwnProperty(e)&&o++}),o)&&(s=!1,cancelAnimationFrame(n))},this.reset=function(e){a[e].resetVal=!0},function(){for(var s=0,e=["webkit","moz"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var o=(new Date).getTime(),n=Math.max(0,16-(o-s)),a=setTimeout(function(){e(o+n)},n);return s=o+n,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}()},Maths:{TO_DEGREES:180/Math.PI,TO_RADIANS:Math.PI/180,getRandomIntInclusive:function(e,t){e=Math.ceil(e),t=Math.floor(t);return Math.floor(Math.random()*(t-e+1))+e},getRandomNumber:function(e,t,o,n){e=Math.random()*(t-e)+e;return n&&(e-=(e+0)%n),Number(e.toFixed(o))},getDistance:function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},getPointLineDistance:function(e,t,o){var n=Math.sqrt(Math.pow(t.x-o.x,2)+Math.pow(t.y-o.y,2)),a=0;return 0<n&&(a=((o.x-t.x)*(t.y-e.y)-(o.y-t.y)*(t.x-e.x))/n),a},getAngle:function(e,t,o,n){return Math.atan2(n-t,o-e)},getPoint:function(e,t,o){var n={};return n.x=parseFloat((e.x+o*Math.cos(t)).toFixed(5)),n.y=parseFloat((e.y+o*Math.sin(t)).toFixed(5)),n},getLineintersect2:function(e,t,o,n,a,s,r,i){var l=(i-s)*(o-e)-(r-a)*(n-t);return 0==l?null:(i=((r-a)*(t-s)-(i-s)*(e-a))/l,a=((o-e)*(t-s)-(n-t)*(e-a))/l,console.info("denom",l),console.info("ua",i),console.info("ub",a),console.info("(x2 - x1)",o-e),console.info("(y2 - y1)",o-e),{x:e+i*(o-e),y:t+a*(n-t),seg1:0<=i&&i<=1,seg2:0<=a&&a<=1})},getLinePointIntersection:function(e,t,o){var n=LabComClass.Maths.getAngle(e.x,e.y,t.x,t.y)+Math.PI/2,n=LabComClass.Maths.getPoint(o,n,10);return LabComClass.Maths.getLineintersect(e.x,e.y,t.x,t.y,o.x,o.y,n.x,n.y)},getLineintersect:function(e,t,o,n,a,s,r,i){var l,d,c,u={x:null,y:null,onLine1:!1,onLine2:!1},h=(i-s)*(o-e)-(r-a)*(n-t);return 0==h||(c=(o-e)*(l=t-s)-(n-t)*(d=e-a),l=((r-a)*l-(i-s)*d)/h,d=c/h,u.x=e+l*(o-e),u.y=t+l*(n-t),0<l&&l<1&&(u.onLine1=!0),0<d&&d<1&&(u.onLine2=!0)),u},getIntersectOfTwoCircles:function(e,t,o,n,a,s){var r=LabComClass.Maths.getDistance({x:e,y:t},{x:n,y:a}),i=.5*Math.sqrt(2*(Math.pow(o,2)+Math.pow(s,2))/Math.pow(r,2)-Math.pow(Math.pow(o,2)-Math.pow(s,2),2)/Math.pow(r,4)-1);return[{x:.5*(e+n)+(Math.pow(o,2)-Math.pow(s,2))*(n-e)/(2*Math.pow(r,2))+i*(a-t),y:.5*(t+a)+(Math.pow(o,2)-Math.pow(s,2))*(a-t)/(2*Math.pow(r,2))+i*(e-n)},{x:.5*(e+n)+(Math.pow(o,2)-Math.pow(s,2))*(n-e)/(2*Math.pow(r,2))-i*(a-t),y:.5*(t+a)+(Math.pow(o,2)-Math.pow(s,2))*(a-t)/(2*Math.pow(r,2))-i*(e-n)}]},findCirclesIntersect:function(e,t){var o={x:(e.x+t.x)/2,y:(e.y+t.y)/2},n=Math.abs(LabComClass.Maths.getDistance(e,t))/2,t=LabComClass.Maths.getAngle(e.x,e.y,o.x,o.y),e=Math.sqrt(e.r*e.r-n*n),n=LabComClass.Maths.getPoint(o,Math.PI/2+t,e),t=LabComClass.Maths.getPoint(o,Math.PI/2+t,-1*e);n.type="point",t.type="point";e=[];return isNaN(n.x)||e.push(n),isNaN(t.x)||e.push(t),e},pointInSegment:function(e,t,o){if(e){var n=LabComClass.Maths.getDistance(t,o),t=LabComClass.Maths.getDistance(e,t),o=LabComClass.Maths.getDistance(e,o);if(t<=n&&o<=n)return!0}return!1},findCircleLineIntersect:function(e,t,o){var n=(o.y-t.y)/(o.x-t.x),a=t.y-n*t.x,s=Math.pow(n,2)+1,r=-2*e.x+2*n*a-2*n*e.y,i=Math.pow(e.x,2)+Math.pow(a,2)+Math.pow(e.y,2)-2*a*e.y-Math.pow(e.r,2),l=(-1*r+Math.sqrt(Math.pow(r,2)-4*s*i))/(2*s),i=(-1*r-Math.sqrt(Math.pow(r,2)-4*s*i))/(2*s),s={type:"point",x:l,y:n*l+a},a={type:"point",x:i,y:n*i+a};function d(e,t,o){var n;e&&(n=LabComClass.Maths.getDistance(t,o),t=LabComClass.Maths.getDistance(e,t),o=LabComClass.Maths.getDistance(e,o),e.isInSegment=t<=n&&o<=n)}return isNaN(l)&&(l={type:"point",x:e.x,y:e.y-e.r},e={type:"point",x:e.x,y:e.y+e.r},0===LabComClass.Maths.getPointLineDistance(l,t,o)&&(s=l),0===LabComClass.Maths.getPointLineDistance(e,t,o)&&(a=e)),s=isNaN(s.x)?null:s,a=isNaN(a.x)?null:a,d(s,t,o),d(a,t,o),{p1:s,p2:a}}},Vector:function(e,t,o){return this.x=e||0,this.y=t||0,this.z=o||0,this.reset=function(e,t,o){return this.x=e,this.y=t,this.z=o,this},this.toString=function(e){e=e||3;e=Math.pow(10,e);return"["+Math.round(this.x*e)/e+", "+Math.round(this.y*e)/e+", "+Math.round(this.z*e)/e+"]"},this.clone=function(){return new LabComClass.Vector(this.x,this.y,this.z)},this.copyTo=function(e){e.x=this.x,e.y=this.y,e.z=this.z},this.copyFrom=function(e){this.x=e.x,this.y=e.y,this.z=e.z},this.magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},this.normalise=function(){var e=this.magnitude();return this.x=this.x/e,this.y=this.y/e,this.z=this.z/e,this},this.reverse=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},this.plusEq=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this},this.plusNew=function(e){return new LabComClass.Vector(this.x+e.x,this.y+e.y,this.z+e.z)},this.minusEq=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this},this.getNormal=function(){return new LabComClass.Vector(-this.y,this.x,this.z)},this.minusNew=function(e){return new LabComClass.Vector(this.x-e.x,this.y-e.y,this.z-e.z)},this.multiplyEq=function(e){return this.x*=e,this.y*=e,this.z*=e,this},this.multiplyNew=function(e){return this.clone().multiplyEq(e)},this.divideEq=function(e){return this.x/=e,this.y/=e,this.z/=e,this},this.divideNew=function(e){return this.clone().divideEq(e)},this.dot=function(e){return this.x*e.x+this.y*e.y+this.z*e.z},this.angle=function(e){return Math.atan2(this.y,this.x)*(e?1:LabComClass.Maths.TO_DEGREES)},this.rotate=function(e,t){var o=Math.cos(e*(t?1:LabComClass.Maths.TO_RADIANS)),e=Math.sin(e*(t?1:LabComClass.Maths.TO_RADIANS)),t={clone:new LabComClass.Vector};return t.clone.copyFrom(this),this.x=t.clone.x*o-t.clone.y*e,this.y=t.clone.x*e+t.clone.y*o,this},this.equals=function(e){return this.x===e.x&&this.y===e.x},this.length=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2))},this.angleBetween=function(e){return this.z=void 0===this.z?0:this.z,e.z=void 0===e.z?0:e.z,Math.acos((this.x*e.x+this.y*e.y+this.z*e.z)/(Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2))*Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2)+Math.pow(e.z,2))))},this.crossProduct=function(e){var t=this.y*e.z-this.z*e.y,o=this.x*e.z-this.z*e.x,e=this.x*e.y-this.y*e.x;return new LabComClass.Vector(t,o,e)},this},Matrix:function(e){var t,o=this;this.elements=[],this.setElements=function(e){var t,o=e.elements||e;if(void 0!==o[0][0]){var n,a,s,r=o.length,i=r;this.elements=[];do{for(t=i-r,n=o[t].length,a=n,this.elements[t]=[];s=a-n,this.elements[t][s]=o[t][s],--n;);}while(--r);return this}var l=o.length,d=l;for(this.elements=[];t=d-l,this.elements.push([o[t]]),--l;);return this},this.elem=function(e,t){return e<1||e>this.elements.length||t<1||t>this.elements[0].length?null:this.elements[e-1][t-1]},this.row=function(e){return e>this.elements.length?null:this.elements[e-1]},this.col=function(e){if(e>this.elements[0].length)return null;for(var t,o=[],n=this.elements.length,a=+n;t=a-n,o.push(this.elements[t][e-1]),--n;);return o},this.dimensions=function(){return{rows:this.elements.length,cols:this.elements[0].length}},this.rows=function(){return this.elements.length},this.cols=function(){return this.elements[0].length},this.eql=function(e){var t=e.elements||e;if(void 0===t[0][0]&&(t=(new LabComClass.Matrix).setElements(t).elements),this.elements.length!==t.length||this.elements[0].length!==t[0].length)return!1;var o,n,a,s=this.elements.length,r=s,i=this.elements[0].length;do{o=r-s,n=i;do{if(a=i-n,0<Math.abs(this.elements[o][a]-t[o][a]))return!1}while(--n)}while(--s);return!0},this.dup=function(){return(new LabComClass.Matrix).setElements(this.elements)},this.map=function(e){var t,o,n,a=[],s=this.elements.length,r=s,i=this.elements[0].length;do{for(t=r-s,o=i,a[t]=[];n=i-o,a[t][n]=e(this.elements[t][n],1+t,1+n),--o;);}while(--s);return(new LabComClass.Matrix).setElements(a)},this.isSameSizeAs=function(e){e=e.elements||e;return void 0===e[0][0]&&(e=(new LabComClass.Matrix).setElements(e).elements),this.elements.length===e.length&&this.elements[0].length===e[0].length},this.add=function(e){var n=e.elements||e;return void 0===n[0][0]&&(n=(new LabComClass.Matrix).setElements(n).elements),this.isSameSizeAs(n)?this.map(function(e,t,o){return e+n[t-1][o-1]}):null},this.subtract=function(e){var n=e.elements||e;return void 0===n[0][0]&&(n=(new LabComClass.Matrix).setElements(n).elements),this.isSameSizeAs(n)?this.map(function(e,t,o){return e-n[t-1][o-1]}):null},this.canMultiplyFromLeft=function(e){e=e.elements||e;return void 0===e[0][0]&&(e=(new LabComClass.Matrix).setElements(e).elements),this.elements[0].length===e.length},this.multiply=function(t){if(!t.elements)return this.map(function(e){return e*t});var e=!!t.modulus,o=t.elements||t;if(void 0===o[0][0]&&(o=(new LabComClass.Matrix).setElements(o).elements),!this.canMultiplyFromLeft(o))return null;var n,a,s,r,i,l,d=this.elements.length,c=d,u=o[0].length,h=this.elements[0].length,m=[];do{m[n=c-d]=[],a=u;do{for(s=u-a,r=0,i=h;l=h-i,r+=this.elements[n][l]*o[l][s],--i;);}while(m[n][s]=r,--a)}while(--d);return o=(new LabComClass.Matrix).setElements(m),e?o.col(1):o},this.x=function(e){return this.multiply(e)},this.minor=function(e,t,o,n){var a,s,r,i=[],l=o,d=this.elements.length,c=this.elements[0].length;do{for(a=o-l,i[a]=[],s=n;r=n-s,i[a][r]=this.elements[(e+a-1)%d][(t+r-1)%c],--s;);}while(--l);return(new LabComClass.Matrix).setElements(i)},this.transpose=function(){var e,t,o,n=this.elements.length,a=this.elements[0].length,s=[],r=a;do{for(e=a-r,s[e]=[],t=n;o=n-t,s[e][o]=this.elements[o][e],--t;);}while(--r);return(new LabComClass.Matrix).setElements(s)},this.isSquare=function(){return this.elements.length===this.elements[0].length},this.max=function(){var e,t,o,n=0,a=this.elements.length,s=a,r=this.elements[0].length;do{for(e=s-a,t=r;o=r-t,Math.abs(this.elements[e][o])>Math.abs(n)&&(n=this.elements[e][o]),--t;);}while(--a);return n},this.indexOf=function(e){var t,o,n,a=this.elements.length,s=a,r=this.elements[0].length;do{t=s-a,o=r;do{if(n=r-o,this.elements[t][n]===e)return{i:1+t,j:1+n}}while(--o)}while(--a);return null},this.diagonal=function(){if(!this.isSquare)return null;for(var e,t=[],o=this.elements.length,n=o;e=n-o,t.push(this.elements[e][e]),--o;);return t},this.toRightTriangular=function(){var e,t,o=this.dup(),n=this.elements.length,a=n,s=this.elements[0].length;do{if(e=a-n,0===o.elements[e][e])for(var r=1+e;r<a;r++)if(0!==o.elements[r][e]){for(l=[],d=s;t=s-d,l.push(o.elements[e][t]+o.elements[r][t]),--d;);o.elements[e]=l;break}if(0!==o.elements[e][e])for(r=1+e;r<a;r++){for(var i=o.elements[r][e]/o.elements[e][e],l=[],d=s;t=s-d,l.push(t<=e?0:o.elements[r][t]-o.elements[e][t]*i),--d;);o.elements[r]=l}}while(--n);return o},this.toUpperTriangular=function(){return this.toRightTriangular()},this.determinant=function(){if(!this.isSquare())return null;for(var e,t=this.toRightTriangular(),o=t.elements[0][0],n=t.elements.length-1,a=n;e=a-n+1,o*=t.elements[e][e],--n;);return o},this.det=function(){return this.determinant()},this.isSingular=function(){return this.isSquare()&&0===this.determinant()},this.trace=function(){if(!this.isSquare())return null;for(var e,t=this.elements[0][0],o=this.elements.length-1,n=o;e=n-o+1,t+=this.elements[e][e],--o;);return t},this.tr=function(){return this.trace()},this.rank=function(){var e,t,o,n=this.toRightTriangular(),a=0,s=this.elements.length,r=s,i=this.elements[0].length;do{e=r-s,t=i;do{if(o=i-t,0<Math.abs(n.elements[e][o])){a++;break}}while(--t)}while(--s);return a},this.rk=function(){return this.rank()},this.augment=function(e){var t=e.elements||e;void 0===t[0][0]&&(t=(new LabComClass.Matrix).setElements(t).elements);var o,n,a,s=this.dup(),r=s.elements[0].length,i=s.elements.length,l=i,d=t[0].length;if(i!==t.length)return null;do{for(o=l-i,n=d;a=d-n,s.elements[o][r+a]=t[o][a],--n;);}while(--i);return s},this.inverse=function(){if(!this.isSquare()||this.isSingular())return null;var e,t,o,n,a,s,r,i=this.elements.length,l=i,d=this.augment(LabComClass.Matrix.I(i)).toRightTriangular(),c=d.elements[0].length,u=[];do{for(e=i-1,a=[],o=c,u[e]=[],s=d.elements[e][e];n=c-o,r=d.elements[e][n]/s,a.push(r),l<=n&&u[e].push(r),--o;);for(d.elements[e]=a,t=0;t<e;t++){for(a=[],o=c;n=c-o,a.push(d.elements[t][n]-d.elements[e][n]*d.elements[t][e]),--o;);d.elements[t]=a}}while(--i);return(new LabComClass.Matrix).setElements(u)},this.inv=function(){return this.inverse()},this.round=function(){return this.map(function(e){return Math.round(e)})},this.snapTo=function(t){return this.map(function(e){return Math.abs(e-t)<=0?t:e})},this.inspect=function(){for(var e,t=[],o=this.elements.length,n=o;e=n-o,t.push("["+this.elements[e].join(", ")+"]"),--o;);return t.join("\n")},this.RotationZ=function(e){var t=Math.cos(e),e=Math.sin(e);return(new LabComClass.Matrix).setElements([[t,-e,0],[e,t,0],[0,0,1]])},(t=e)&&o.setElements(t)},calculateSentenceHighlight:function(e,o,n){var a,s={},r=[],i=[],l=0;e.forEach(function(e,t){t>=n.s&&t<=n.e&&"number"==typeof e.lineIndex&&(s.hasOwnProperty(e.lineIndex)||(l<e.maxFontSize&&(l=e.maxFontSize),s[e.lineIndex]=[]),s[e.lineIndex].push(e))});Object.keys(s).length;return Object.keys(s).forEach(function(e){a=s[e].length-1," "===s[e][a].value&&--a;var t=0;s[e][0].fontSizeNum<l&&(t=(l-s[e][0].fontSizeNum)/2),r.push({xInt:s[e][0].x,yInt:s[e][0].y-o/2-t},{xInt:s[e][0].x,yInt:s[e][0].y+s[e][0].fontSizeNum+o/2+t}),i.push({xInt:s[e][a].x+s[e][a].w,yInt:s[e][a].y-o/2-t},{xInt:s[e][a].x+s[e][a].w,yInt:s[e][a].y+s[e][a].fontSizeNum+o/2+t})}),0<r.length&&0<i.length&&r.forEach(function(e,t){i.push(r[r.length-1-t])}),i},getUnderline:function(e,t){for(var o=t.s,n=t.e,a=[o],s=0;s<e.length;s+=1)o<=s&&s<=n&&void 0!==e[s+1]&&e[s].lineIndex!==e[s+1].lineIndex&&(a.push(s),s+1<=n&&a.push(s+1));return-1===a.indexOf(n)&&a.push(n),a.length%2!=0&&a.push(n),a},TextImgNewClass:function(t){var e=document.createElement("canvas").getContext("2d"),o=(window.devicePixelRatio,e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio,{textStr:"",style:{},callback:function(){}});Object.keys(t).forEach(function(e){o[e]=t[e]}),o.textStr=o.textStr.replace(/§b/g,'<span style="font-family: OpenSans-Bold;">'),o.textStr=o.textStr.replace(/§i/g,'<span style="font-family: OpenSans-Italic;">'),o.textStr=o.textStr.replace(/§t/g,'<span style="font-family: OpenSans-BoldItalic;">'),o.textStr=o.textStr.replace(/§l/g,'<span style="font-family: Alef-Light;">'),o.textStr=o.textStr.replace(/§r/g,"</span>");var n=document.createElement("div");n.style.position="absolute",n.style.left="0px",n.style.top="0px",n.style.visibility="hidden",Object.keys(o.style).forEach(function(e){n.style[e]=o.style[e]}),n.innerHTML=o.textStr,document.body.appendChild(n),n.style.height="".concat(n.offsetHeight+5,"px"),LabComClass.html2CanvasQueueArr.push({div:n,callback:o.callback}),LabComClass.executeHtml2canvas()},executeHtml2canvas:function(){var s;LabComClass.html2CanvasQueueStarted||(LabComClass.html2CanvasQueueStarted=!0,s=LabComClass.html2CanvasQueueArr[0],html2canvas(s.div,{pixelRatio:2,onrendered:function(e){function t(){LabComClass.html2CanvasQueueArr.splice(0,1),LabComClass.html2CanvasQueueStarted=!1,0<LabComClass.html2CanvasQueueArr.length&&LabComClass.executeHtml2canvas()}var o=s.div.offsetWidth,n=s.div.offsetHeight;document.body.removeChild(s.div),s.div=null;var a=new Image;a.onload=function(){s.callback({imageObj:{imageObj:a,widthInt:o,heightInt:n}}),t()},a.onerror=function(){t()},a.src=e.toDataURL()}}))},TextImgClass:function(o,e,t){var n=document.createElement("pre"),a=document.createElement("canvas"),s=a.getContext("2d"),r={fontFamilyStr:"Polo22Klett-Regular",align:"left",color:"#000000",fontSizeNum:16,background:"rgba(0, 0, 0, 0)",stroke:0,fontFormat:"px ",strokeColor:"#FFFFFF",lineHeight:"1.5em",bold:!1,italic:!1};e=e||o.textStr||"",s.save(),o=o||{},Object.keys(r).forEach(function(e){o[e]||(o[e]=r[e])}),r="font: ",(o.italic||0<=e.indexOf(LabComClass.italic)||0<=e.indexOf(LabComClass.italicbold)||0<=e.indexOf(LabComClass.italicDistance))&&(r+="italic "),(o.bold||0<=e.indexOf(LabComClass.bold)||0<=e.indexOf(LabComClass.italicbold))&&(r+="bold "),r+=o.fontSizeNum+o.fontFormat+o.fontFamilyStr+";",r+="line-height:"+o.lineHeight+";",r+="text-align: "+o.align+";",r+="color: "+o.color+";",r+="background-color: "+o.background+";",r+=";padding: 0; display: block; position: fixed; top: 100%; overflow: hidden;",0<=(d=String(e)).indexOf(LabComClass.subscript)&&(o.yNum+=Math.round(o.fontSizeNum/5)),n.innerText=d,o.maxWidthNum&&(r+="max-width: "+o.maxWidthNum+"px; word-spacing: normal;word-break: keep-all; white-space: pre-wrap; white-space: -moz-pre-wrap;white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word"),n.setAttribute("style",r),document.body.appendChild(n);var i=[],l=[],d="";o.italic&&(d+="italic "),o.bold&&(d+="bold "),o.italic&&o.bold?e=LabComClass.italicbold+e+LabComClass.end:o.italic?e=LabComClass.italic+e+LabComClass.end:o.bold&&(e=LabComClass.bold+e+LabComClass.end),d+=o.fontSizeNum+o.fontFormat+o.fontFamilyStr,s.font=d,s.textAlign=o.align,s.lineWidth=o.stroke,s.strokeStyle=o.strokeColor,s.fillStyle=o.color;var c=o.maxWidthNum;if(o.maxWidthNum&&-1===e.indexOf("\n")){for(var u=e.split(" "),h="";0<u.length;)s.measureText(h).width+s.measureText(u[0]).width>=o.maxWidthNum&&(i.push(h),h=""),h=(""===h?"":"".concat(h," ")).concat(u[0]),u.splice(0,1);i.push(h)}else i=e.split("\n");i.forEach(function(e,t){l[t]=e,l[t]=l[t].replace(LabComClass.bold,""),l[t]=l[t].replace(LabComClass.italic,""),l[t]=l[t].replace(LabComClass.italicbold,""),l[t]=l[t].replace(LabComClass.italicDistance,""),l[t]=l[t].replace(LabComClass.end,"")});var m,b=o.stroke,p=n.offsetHeight/i.length,C=.25*p;switch(a.width=4*(c+2*o.xNum),a.height=4*(n.offsetHeight+2*o.yNum),s.clearRect(0,0,a.width,a.height),s.fillStyle=o.background,s.beginPath(),s.fillRect(0,0,a.width,a.height),s.fill(),d="",o.italic&&(d+="italic "),o.bold&&(d+="bold "),d=o.fontSizeNum+o.fontFormat+o.fontFamilyStr,s.font=d,s.textAlign="left",s.lineWidth=o.stroke,s.strokeStyle=o.strokeColor,s.fillStyle=o.color,o.align){case"center":b=a.width/4/2;break;case"right":b=a.width/4}s.scale(4,4),i.forEach(function(e,t){m="center"===o.align?(c=s.measureText(l[t]).width,b-c/2):"right"===o.align?(c=s.measureText(l[t]).width,b-c):b,e=o.bold?LabComClass.bold+l[t]+LabComClass.end:e,o.stroke&&s.strokeText(e,m+o.xNum,p*(t+1)+o.yNum),s.drawStyledText(e,m+o.xNum,p*(t+1)-C+o.yNum,o.fontFamilyStr,o.fontSizeNum)}),s.restore(),setTimeout(function(){document.body.removeChild(n)},100);d=new Image;return t&&(d.onload=t),d.src=a.toDataURL(),{imageObj:{imageObj:d,widthInt:a.width/4,heightInt:a.height/4}}},TextImgV2Class:function(o,e,t){function n(e,t,o){return e.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),o)}var a=document.createElement("pre"),s=document.createElement("canvas"),r=s.getContext("2d"),i={fontFamilyStr:LabComClass.AlefFontRegular,align:"left",color:"#000000",fontSizeNum:16,background:"rgba(0, 0, 0, 0)",stroke:0,fontFormat:"px ",strokeColor:"#FFFFFF",lineHeight:"1.5em",bold:!1,italic:!1};e=e||o.textStr||"",o=o||{},Object.keys(i).forEach(function(e){o[e]||(o[e]=i[e])}),i="font: ",(o.italic||0<=e.indexOf(LabComClass.italic)||0<=e.indexOf(LabComClass.italicbold))&&(i+=" "),(o.bold||0<=e.indexOf(LabComClass.bold)||0<=e.indexOf(LabComClass.italicbold))&&(i+=" "),i+=o.fontSizeNum+o.fontFormat+o.fontFamilyStr+";",i+="line-height:"+o.lineHeight+";",i+="text-align: "+o.align+";",i+="color: "+o.color+";",i+="background-color: "+o.background+";",i+=";padding: 0; display: block; position: fixed; top: 100%; overflow: hidden;",0<=(h=String(e)).indexOf(LabComClass.subscript)&&(o.yNum+=Math.round(o.fontSizeNum/5));var l,d;!function(){if(!window.DOMParser)return;var e=new DOMParser;try{e.parseFromString("x","text/html")}catch(e){return}}();for(h=n(h,"</d>",""),h=n(h,"<d>",""),h=n(h,"§p",""),h=n(h,"§q",""),h=n(h,"§Q",""),h=n(h,"§d","");h.includes("<c>");)var c=h.indexOf("<c>"),u=h.indexOf("</c>"),h=h.substring(0,c)+h.substring(c+9,u)+h.substring(u+4);l=h,(d=document.createElement("pre")).innerHTML=l,(a=d).innerHTML=h,o.maxWidthNum&&(i+="max-width: "+o.maxWidthNum+"px; word-spacing: normal;word-break: keep-all; white-space: pre-wrap; white-space: -moz-pre-wrap;white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word"),a.setAttribute("style",i),document.body.appendChild(a);var m=[],b=[],p="";o.italic&&(p+=" "),o.bold&&(p+=" "),e=n(e,"</b>","§r"),e=n(e,"<b>","§b"),e=n(e,"</i>","§r"),e=n(e,"<i>","§i"),e=n(e,"</d>","§r"),e=n(e,"<d>","§d"),e=n(e,"</c>","§c"),e=n(e,"<c>","§c"),o.italic&&o.bold?e=LabComClass.italicbold+e+LabComClass.end:o.italic?e=LabComClass.italic+e+LabComClass.end:o.bold&&(e=LabComClass.bold+e+LabComClass.end),p+=o.fontSizeNum+o.fontFormat+o.fontFamilyStr,r.font=p,r.textAlign=o.align,r.lineWidth=o.stroke,r.strokeStyle=o.strokeColor,r.fillStyle=o.color;var C=h.split("\n"),f=e,g=[];if(o.maxWidthNum&&-1===h.indexOf("\n"))for(var v=0;v<C.length;v++)for(h=C[v];h.length;){r.measureText(h.substr(0,O)).width,o.maxWidthNum;for(var O=h.length;r.measureText(h.substr(0,O)).width>o.maxWidthNum;O--);var j=h.substr(0,O);if(O!==h.length)for(var y=0;-1!==j.indexOf(" ",y);y=j.indexOf(" ",y)+1);m.push(j.substr(0,y||j.length));for(var w=j.substr(0,y||j.length),x=0,P=0,L=0;L<f.length;L++)if(w[x]===f[L]&&x++,x===w.length){P=L;break}P&&P++,w=f.substring(0,P),g.push(w),f=f.substring(P);var S=Math.max(S,r.measureText(m[m.length-1]).width);h=h.substr(m[m.length-1].length,h.length)}else m=g=C;(m=g).forEach(function(e,t){b[t]=e,b[t]=b[t].replace(LabComClass.bold,""),b[t]=b[t].replace(LabComClass.italic,""),b[t]=b[t].replace(LabComClass.italicbold,""),b[t]=b[t].replace(LabComClass.end,"")});var E,M=o.stroke,k=a.offsetHeight/m.length,T=.25*k;switch(s.width=4*(a.offsetWidth+2*o.xNum),s.height=4*(a.offsetHeight+2*o.yNum),r.clearRect(0,0,s.width,s.height),r.fillStyle=o.background,r.beginPath(),r.fillRect(0,0,s.width,s.height),r.fill(),p="",o.italic&&(p+=" "),o.bold&&(p+=" "),p=o.fontSizeNum+o.fontFormat+o.fontFamilyStr,r.font=p,r.textAlign="left",r.lineWidth=o.stroke,r.strokeStyle=o.strokeColor,r.fillStyle=o.color,o.align){case"center":M=s.width/4/2;break;case"right":M=s.width/4}r.scale(4,4),m.forEach(function(e,t){E="center"===o.align?(S=r.measureText(b[t]).width,M-S/2):"right"===o.align?(S=r.measureText(b[t]).width,M-S):M,o.stroke&&r.strokeText(e,E+o.xNum,k*(t+1)+o.yNum),r.drawStyledText(e,E+o.xNum,k*(t+1)-T+o.yNum,o.fontFamilyStr,o.fontSizeNum)});p=new Image;return t&&(p.onload=t),p.src=s.toDataURL(),{imageObj:{imageObj:p,widthInt:s.width/4,heightInt:s.height/4}}},drawCurveRect:function(e,t,o,n,a){o=e+o,n=t+n;this.beginPath(),this.moveTo(e+a,t),this.lineTo(o-a,t),this.arcTo(o,t,o,t+a,a),this.lineTo(o,n-a),this.arcTo(o,n,o-a,n,a),this.lineTo(e+a,n),this.arcTo(e,n,e,n-a,a),this.lineTo(e,t+a),this.arcTo(e,t,e+a,t,a),this.lineTo(e+a,t),this.fill(),this.closePath()},TextStyleClass:{s1Obj:{fontColor:"#FFCC00"}},drawStyledText:function(e,t,o,n,a){var r="§",s=(_defineProperty(C={r:"",i:"italic",b:"bold",t:"italic bold",l:"lighter",p:"supscript",q:"subscript",Q:"",d:"",c:"color",a:"",s:"",g:"",h:"",w:""},"b",""),_defineProperty(C,"t",""),C),i=this,l=.66,d=.25,c=.2,u=1.1,h="r",m="",b=i.fillStyle;"string"!=typeof e&&(e=e.toString());var p=0,C=i.textAlign;!function(e,t,o,n){do{i.save(),i.font=O(t,o,n);var a=e.indexOf(r);-1===a&&(a=e.length);var s=e.substring(0,a)}while(p+="p"===n?i.measureText(s).width*d:"q"===n?i.measureText(s).width*c:i.measureText(s).width,n=e[a+1],e=e.substring(a+2),i.restore(),0<e.length)}(e,n,a,h),"right"===C&&(t-=p),"center"===C&&(t-=p/2),i.save(),i.beginPath(),i.textBaseline="bottom";do{i.font=O(n,a,h);var f=e.indexOf(r);-1===f&&(f=e.length);var g=e.substring(0,f),v=o}while(("p"===h&&(v=o-a*d*1.5,t-=.01*i.measureText(g).width),"q"!==h&&"Q"!==h||(v=o+a*c,t-=i.measureText(g).width*c),""===m&&!m.includes(" ")||(i.fillStyle=m,i.strokeStyle=m),"right"===i.textAlign?t+=i.measureText(g).width:"center"===i.textAlign&&(t+=i.measureText(g).width/2),i.fillText(g,t,v),"right"===i.textAlign?t-=i.measureText(g).width:"center"===i.textAlign&&(t-=i.measureText(g).width/2),"w"===h&&(i.beginPath(),i.strokeStyle=i.fillStyle,i.lineJoin="round",i.moveTo(t,v-a/2*u),i.lineTo(t+.15*a,v-a/2*u),i.lineTo(t+.25*a,v),i.lineTo(t+.35*a,v-a*u),i.lineTo(t+i.measureText(g).width,v-a*u),i.stroke(),i.closePath()),"d"===h&&(i.beginPath(),i.strokeStyle=i.fillStyle,i.lineJoin="round",i.moveTo(t,v-a*u),i.lineTo(t+i.measureText(g).width-.25,v-a*u),i.stroke(),i.closePath()),"Q"===h&&(v-=a*c,i.beginPath(),i.lineJoin="bevel",i.strokeStyle=i.fillStyle,i.moveTo(t+.6,v-a*u),i.lineTo(t+i.measureText(g).width-.25,v-a*u),i.stroke(),i.closePath()),"a"===h&&(i.save(),i.lineWidth=1,i.beginPath(),i.strokeStyle=i.fillStyle,i.moveTo(t,v-a/3),i.lineTo(t+a/2,v-a/3),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(t,v-a/3),i.lineTo(t+a/2.5,v-a/1.1),i.stroke(),i.closePath(),i.beginPath(),i.arc(t,v-a/3,a/3,30*Math.PI/180,-85*Math.PI/180,1),i.stroke(),i.closePath(),i.restore()),"s"===h&&(i.save(),i.lineWidth=1,i.beginPath(),i.strokeStyle=i.fillStyle,i.moveTo(t,v-a/1.5),i.lineTo(t+a/2,v-a/2.5),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(t,v-a/1.5),i.lineTo(t+a/2,v-a/1.1),i.stroke(),i.closePath(),i.restore()),"h"===h&&(i.save(),i.lineWidth=1,i.beginPath(),i.strokeStyle=i.fillStyle,i.moveTo(t,v-a),i.lineTo(t+p/2*(a/2),v-a),i.stroke(),i.closePath(),i.restore()),"g"===h&&(i.save(),i.lineWidth=1,i.beginPath(),i.strokeStyle=i.fillStyle,i.moveTo(t+a/2,v-a/2.5),i.lineTo(t+a/2*2,v-a/1.5),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(t+a/2,v-a/1.1),i.lineTo(t+a/2*2,v-a/1.5),i.stroke(),i.closePath(),i.restore()),f!==e.length)&&(t+=i.measureText(g).width,0<(e="c"===(h=e[f+1])?" "===e[f+2]||e.substring(f+2,f+8).includes(" ")?(m=b,e.substring(f+2)):(m="#".concat(e.substring(f+2,f+8)),e.substring(f+8)):e.substring(f+2)).length));function O(e,t,o){var n=s[o];return"p"===o||"q"===o||"Q"===o?" "+t*l+"px "+e:n+" "+t+"px "+e}i.closePath(),i.restore()},TweenClass:function(e){Object.prototype.hasOwnProperty;var t={plain:function(e,t,o,n){return t+o*(e/n)},back:function(e,t,o,n){var a=(e/=n)*e,n=a*e;return t+o*(177635683940025e-29*n*a+4*n+-9*a+6*e)},cubic:function(e,t,o,n){var a=(e/=n)*e,n=a*e;return t+o*(177635683940025e-29*n*a+.999999999999998*n+-3*a+3*e)}},o=[];if(t[e.type])for(var n=e.endValue-e.startValue,a=0;a<=e.duration;a+=1e3/24)o.push(t[e.type](a,e.startValue,n,e.duration));return o},jumpToSlide:function(e){onViewUpdateCls.trigger("onGlobalUpdate",{type:"onJumpToSlide",data:{curSlideInt:e}})},rgbToHex:function(e,t,o){if(255<e||255<t||255<o)throw"Invalid color component";return(e<<16|t<<8|o).toString(16)},childPreloadProgress:function(e){window!==window.parent&&void 0!==window.parent.childPreloadProgress&&window.parent.childPreloadProgress(e)},createShadow:function(e){var t,o=document.createElement("canvas");o.getContext("2d");o.width=800,o.height=600,c=new createjs.Stage(o),(t=new createjs.Bitmap(e.imgObj[e.imgNameStr])).x=e.xInt,t.y=e.yInt,t.scaleX=e.widthInt/e.imgObj[e.imgNameStr].naturalWidth,t.scaleY=e.heightInt/e.imgObj[e.imgNameStr].naturalHeight;var n=e.hasOwnProperty("colorStr")?e.colorStr.replace("#","0x"):"0xffff00",a=e.hasOwnProperty("alphaInt")?e.alphaInt:1,s=e.hasOwnProperty("blurXInt")?e.blurXInt:20,r=e.hasOwnProperty("blurYInt")?e.blurYInt:20,i=e.hasOwnProperty("strengthInt")?e.strengthInt:3,l=e.hasOwnProperty("qualityInt")?e.qualityInt:1,d=!!e.hasOwnProperty("innerBool")&&e.innerBool,e=!!e.hasOwnProperty("knockoutBool")&&e.knockoutBool,e=new createjs.GlowFilter(n,a,s,r,i,l,d,e);t.filters=[e],t.cache(0,0,800,600),c.addChild(t),c.update();var c=o.toDataURL(),o=new Image;return o.src=c,o},getHostName:function(e){var t,o=0<arguments.length&&void 0!==e?e:window;try{t=(o.self!==o.top?o.parent:o).location.hostname}catch(e){t="defaultHostName"}return t},fontLoader:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.fontArr,a=[],o=document.getElementsByTagName("body")[0],s=0,r=[],i=!1,l=function(){void 0!==t.callback&&t.callback()};if(0<n.length)for(var d=0;d<n.length;d+=1)a[d]=document.createElement("span"),a[d].innerHTML="preloadFont",a[d].style.color="rgba(0,0,0,0)",a[d].style.fontSize="24px",o.appendChild(a[d]),a[d].setAttribute("data-fontsizebefore",a[d].offsetWidth),a[d].setAttribute("data-fontloaded","false"),a[d].style.fontFamily=n[d];!function e(){if(r=[],s<a.length){for(var t=0;t<a.length;t+=1)"false"===a[t].getAttribute("data-fontloaded")&&Number(a[t].offsetWidth)!==Number(a[t].getAttribute("data-fontsizebefore"))?(a[t].setAttribute("data-fontsizeafter",a[t].offsetWidth),a[t].setAttribute("data-fontloaded","true"),s+=1):"false"===a[t].getAttribute("data-fontloaded")&&(a[t].innerHTML="preloadFont",a[t].style.color="rgba(0,0,0,0)",a[t].style.fontSize="24px",r.push(n[t]));!1===i&&requestAnimationFrame(e)}else{console.log("total "+s+" fonts loaded out of "+n.length);for(var o=0;o<a.length;o+=1)document.body.removeChild(a[o]);l(),l=function(){}}}(),setTimeout(function(){if(s<n.length){i=!0;for(var e=0;e<a.length;e+=1)document.body.removeChild(a[e]);void 0!==t.error&&t.error(r),l(),l=function(){}}},t.timeout||3e4)},tracer:function tracer(){var _obj=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};eval("console.log(_obj)")}};window.onViewUpdateCls=new LabComClass.EventClass(!0);var onModelUpdateCls=new LabComClass.EventClass(!0),controllerCls=new ControllerClass,viewCls=new ViewClass,modelCls=new ModelClass;onModelUpdateCls.trigger("controllerInit")}
"use strict";function ownKeys(a,e){var t,l=Object.keys(a);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(a),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),l.push.apply(l,t)),l}function _objectSpread(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function _defineProperty(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function BrainClass(a){var d={showSteps:!1,showSolution:!1,taskData:[],solved:!1,solvedWithHelp:!1,solvedWithAuto:!1,mathData:[],taskNumber:0,totalCorrectShapes:0,totalShapesByHelp:0,totalShapesByAuto:0,isLastQuestion:!1,lastStepCompleted:!1,blackColor:"rgba(0,0,0,1)",disableColor:"rgba(207,207,205,1)",greenColor:"rgba(70, 170, 57, 1)",blueColor:"rgba(10, 190, 220,1)",pinkColor:"rgba(222,108,225,1)",greyColor:"#CFCFCF",lengthCount:0,totalSteps:6,pointU:null,currentStep:0,currentQuestion:{},segmentData:{},circleData:{},segInput:null,angleSizeData:null,radioSolvedAuto:!1,defaultDiff:{x:6,y:-9},segLabel:{AB:"a",BC:"b",CD:"c",AD:"d"},angleOver:{A:"BAD",B:"CBA",C:"DCB",D:"ADC",E:"BEC"},angleLabelDiff:{A:{x:1,y:-4},B:{x:-11,y:-6.2},C:{x:-4,y:3}},pointLabelDiff:{A:{x:-22,y:9},B:{x:7,y:9},C:{x:12,y:-9},D:{x:-22,y:-9}},labelDiffSegment:{a:{x:0,y:10,label:"a"},b:{x:10,y:0,label:"b"},c:{x:0,y:-15,label:"c"},d:{x:-15,y:0,label:"d"},e:{x:-31,y:5,label:"e"},f:{x:-6,y:-17,label:"f"}},positionArr:[{x:-2,y:3,zoom:{value:0}},{x:0,y:2,zoom:{value:2}},{x:-3,y:5,zoom:{value:0}},{x:2,y:3,zoom:{value:1}},{x:0,y:3,zoom:{value:1}}],planPositionArr:{x:1,y:2,zoom:{value:1}}},f={};Object.keys(a).forEach(function(e){d[e]=a[e]}),f=d.spineObj,(window.spineObj=f).graphComp.addEventListener("scaleUpdate",o),f.planComp.addEventListener("scaleUpdate",o),f.logicObj.addEventListener("onUpdateIndex",o),f.logicObj.addEventListener("setStep",o),f.logicObj.init(d),f.zoomControls.addEventListener("click",n),f.zoomControls.reset(),f.zoomPlanControls.addEventListener("click",n),f.zoomPlanControls.reset(),f.geoDrawHelpObj.snapToGrid(!1),f.planDrawObj.snapToGrid(!1),f.draggable.addEventListener("change",n),f.angleDraggable.addEventListener("change",h),f.circleDraggable.addEventListener("change",n);var t=["focusOut","keyup"],D=["angleInput","segInput","radInput"];D.forEach(function(e){f[e].on(t[0],n),f[e].on(t[1],m),f[e].enable()}),f.segSubmitBtn.disable(),f.angleSubmitBtn.disable(),f.circleSubmitBtn.disable(),f.radio.setValue(0);for(var e=["geoInteraction","move","moveGraph","select","segSize","angleSize","circleSize"],l=0;l<e.length;l++)f.geoDrawHelpObj.addEventListener(e[l],n),l<3&&f.planDrawObj.addEventListener(e[l],n);f.rightClickOptions.addEventListener("click",n);function o(e,a){switch(e.type){case"scaleUpdate":f.geoDrawHelpObj.setScreenData(f.graphComp.getScreenData()),f.planDrawObj.setScreenData(f.planComp.getScreenData()),f.planDrawObjAns.setScreenData(f.planComp.getScreenData()),f.geoDrawObjAns.setScreenData(f.graphComp.getScreenData()),f.logicObj.setSnappingDiff(f.graphComp.getPointUnitByPixelUnit(10));break;case"setStep":t=e.data.step,l=0,o={0:1,1:2,2:3,3:4,4:5,5:6,6:7,7:8},Object.keys(o).forEach(function(e){t===Number(e)&&(l=o[t])}),d.taskNumber=l,f.stepsTable.setStep(l),f.geoDrawHelpObj.setStep(t+1),f.planDrawObj.setStep(t+1);break;default:console.info("Brain No event Added for "+e.type)}var t,l,o;a||P()}function n(e){var a,t,l,o,n=!1;switch(e.id){case"wrongAlertBox":break;case"nextTaskBtn":!function(){var e={visited:!0,solved:d.solved,solvedWithHelp:d.solvedWithHelp,totalCorrectShapes:d.totalCorrectShapes,totalShapesByHelp:d.totalShapesByHelp};d.totalCorrectShapes=0,d.totalShapesByHelp=0,d.totalShapesByAuto=0,d.taskData.push(e);for(var a=[],t=0;t<d.taskData.length;t++)a.push(JSON.parse(JSON.stringify(d.taskData[t])));f.timeLine.setTaskStatus(a)}(),d.isLastQuestion?(f.submitBox.show(),f.stepsTable.disable()):I();break;case"stepsTable":switch(f.logicObj.resetLogicFlag(!1),f.logicObj.setGivenValues(d.currentQuestion.given),e.type){case"help":f.geoDrawHelpObj.setStep(Number(e.value)-1),f.geoDrawHelpObj.setStep(Number(e.value)),x(Number(e.value)),d.totalShapesByAuto++,d.solvedWithAuto=!0,d.currentStep++,f.geoDrawHelpObj.setStep(Number(e.value)+1),d.currentStep===d.totalSteps&&(f.stepsEndAlertBox.show(),L());break;case"reset":f.geoDrawHelpObj.setStep(Number(e.value)-1),f.geoDrawHelpObj.setStep(Number(e.value)),d.currentStep=Number(e.value),f.logicObj.setSegmentOrder(f.mathObj.getOrder(d.currentQuestion)),0===Number(e.value)&&k(d.currentQuestion,"blueColor");var r=f.geoDrawHelpObj.getData().visible;r=r,o=d.currentStep,r.forEach(function(e){"point"===e.type&&""!==e.label&&f.geoDrawHelpObj.setStyle(e.uniqueId,{strokeColor:d.blueColor,fillColor:d.blueColor}),3===o&&"ray"===e.type&&f.geoDrawHelpObj.setStyle(e.uniqueId,{strokeColor:d.blueColor,fillColor:d.blueColor}),"segment"===e.type&&"e"!==e.label&&"f"!==e.label&&f.geoDrawHelpObj.setStyle(e.uniqueId,{strokeColor:d.blueColor,fillColor:d.blueColor})}),Number(e.value)<=1&&(r=d.originalQuestion,d.currentQuestion=f.mathObj.alterCurrentQuestion(d.currentQuestion.pointA,r.pointB,d.originalQuestion),T())}break;case"showSolutionBtn":d.showSolution=!d.showSolution;break;case"planDrawObj":"geoInteraction"===e.type&&(a=(l=f.logicObj.checkPlanInteraction(e.data,d.currentQuestion)).match,t=l.completed,l=l.drawnD,a&&!0===t?(d.totalShapesByHelp++,f.logicObj.moveToNextStep(d.currentStep),(l=y(f.geoDrawHelpObj.getData().visible,l)).newData,l.setNewData,f.geoDrawHelpObj.setStep(1),d.currentStep++):a&&t.partial||(B(e.data),"brush2"===e.data.type&&f.planDrawObj.setStyle(e.data.shapeId,{strokeColor:d.blueColor,fillColor:d.blueColor})));break;case"geoDrawHelpObj":var i,s,b,p,u,c=f.geoDrawHelpObj.getData().visible;switch(e.type){case"geoInteraction":"brush2"===e.data.type?f.geoDrawHelpObj.setStyle(e.data.shapeId,{strokeColor:d.blueColor,fillColor:d.blueColor}):(p=(b=f.logicObj.checkInteraction(e.data,d.currentStep,d.currentQuestion,c)).match,u=b.completed,i=b.drawnD,p&&!0===u?(b=(s=y(f.geoDrawHelpObj.getData().visible,i)).newData,s.setNewData&&f.geoDrawHelpObj.setData({visible:b}),d.totalShapesByHelp++,A(f.geoDrawHelpObj.getData().visible,"geoDrawHelpObj"),f.logicObj.moveToNextStep(d.currentStep),d.currentStep++,d.currentStep===d.totalSteps&&(f.stepsEndAlertBox.show(),L())):p&&u.partial?(u=(p=function(e,a,t){{1===d.currentQuestion.situation||d.currentQuestion.situation;var l=!1,o=6!==d.currentStep?a.step:a.segPlotted;switch(d.currentStep){case 3:1===o&&(l=!1);break;case 5:switch(o){case 1:case 2:f.geoDrawHelpObj.updateIndex({type:"update",data:t}),l=!1}break;case 6:var n=S(e,a.segPlotted,!1);l=!1,f.geoDrawHelpObj.setData({visible:n})}return{newData:e,setNewData:l}}}(f.geoDrawHelpObj.getData().visible,u,i)).newData,p.setNewData&&f.geoDrawHelpObj.setData({visible:u})):B(i));break;case"moveGraph":f.graphComp.setPanValues(e.data),n=!0;break;case"segSize":w(e.visible),e.visible&&(d.segmentData=e.data,v());break;case"angleSize":C(e.visible),e.visible&&(d.angleSizeData=e.data,h());break;case"circleSize":O(e.visible),e.visible&&(d.circleData=e.data,j())}break;case"circleSubmitBtn":O(!1),d.circleData.distance=+d.radInput,f.geoDrawHelpObj.setCircleSize(d.circleData),f.circleSubmitBtn.disable();break;case"segSubmitBtn":w(!1),d.segmentData.distance=+d.segInput,f.geoDrawHelpObj.setSegSize(d.segmentData);break;case"angleSubmitBtn":var g=d.angleSizeData;g.degree=+f.angleInput.getValue(),g.clockwise=!Boolean(f.radio.getValue()),g.fillColor=d.blueColor,g.strokeColor=d.blueColor,f.geoDrawHelpObj.setAngleSize(g),C(!1);break;case"zoomControls":e.value.includes("zoom")?(g=e,f.graphComp.setZoom(g),d.currentQuestion&&"zoomReset"===g.value&&((g=d.positionArr[d.currentQuestion.variant-1])&&!g.zoom?f.graphComp.setPointToScreenCenter(g.x,g.y):g&&g.zoom&&(f.zoomControls.setValue(f.zoomControls.getValue().resetVal+g.zoom.value),f.graphComp.setPointToScreenCenter(g.x,g.y)))):f.graphComp.setPanValues(e.data);break;case"zoomPlanControls":e.value.includes("zoom")?f.planComp.setZoom(e):f.planComp.setPanValues(e.data);break;case"geoTools":break;case"draggable":v(),n=!0;break;case"circleDraggable":j(),n=!0;break;default:if(D.includes(e.id)){m(e),n=!0;break}console.info("No event Added for "+e.id,e)}n||P()}function h(){var e=f.angleDraggable.getPos();f.angleLabel.setPos(e.x+200,e.bodyY+40),f.angleInput.setPos(e.x+200,e.bodyY+70),f.radio.setPos(e.x+200,e.bodyY+110),f.angleSubmitBtn.setPos({x:e.x+200,y:e.bodyY+190})}function S(e,a,t){var l=!(2<arguments.length&&void 0!==t)||t;return e.forEach(function(e){if(("point"===e.type&&""!==e.label||"segment"===e.type&&"e"!==e.label&&"f"!==e.label)&&l&&(e.strokeColor=d.greenColor,e.fillColor=d.greenColor),"segment"===e.type&&e.label===a)switch(a){case"AB":case"BA":e.label="",f.geoDrawHelpObj.setStyle(e.uniqueId,{strokeColor:d.greenColor,fillColor:d.greenColor});break;case"BC":case"CB":e.label=2===d.currentQuestion.situation?"b":"",e.labelDiffX=d.labelDiffSegment.b.x,e.labelDiffY=d.labelDiffSegment.b.y;break;case"CD":case"DC":e.label="c",e.labelDiffX=d.labelDiffSegment.c.x,e.labelDiffY=d.labelDiffSegment.c.y;break;case"AD":case"DA":e.label=2!==d.currentQuestion.situation?"d":"",e.labelDiffX=d.labelDiffSegment.d.x,e.labelDiffY=d.labelDiffSegment.d.y}}),e}function y(e,a){1===d.currentQuestion.situation||d.currentQuestion.situation;var t=!1;switch(d.currentStep){case 1:var l=a.uniqueId,o=a.secondPointId;e.filter(function(e){e.uniqueId===l&&(e.label="a",e.labelX=(e.x+e.xTo)/2,e.labelY=(e.y+e.yTo)/2,e.xTo=a.xTo,e.yTo=a.yTo,e.labelDiffX=d.labelDiffSegment.a.x,e.labelDiffY=d.labelDiffSegment.a.y,e.distance=d.currentQuestion.side),e.uniqueId===o&&(e.label="B",e.x=a.xTo,e.y=a.yTo,e.isDraggable=!1,e.labelX=e.x,e.labelY=e.y,e.labelDiffX=d.pointLabelDiff[e.label].x,e.labelDiffY=d.pointLabelDiff[e.label].y)}),t=!0,d.currentQuestion=f.mathObj.alterCurrentQuestion(d.currentQuestion.pointA,{x:a.xTo,y:a.yTo,label:"B"},d.currentQuestion),T();break;case 2:var n="A"===d.currentQuestion.angleOver?"alpha":"beta";e.filter(function(e){"angleSize"===e.type&&(e.label="".concat(f.LabComClass.globalLangText[n]),e.labelDiffX=d.angleLabelDiff[d.currentQuestion.angleOver].x,e.labelDiffY=d.angleLabelDiff[d.currentQuestion.angleOver].y)}),t=!0;break;case 3:f.geoDrawHelpObj.updateIndex({type:"update",data:_objectSpread(_objectSpread({},a),{},{isIntersection:!1,isParameter:!1,labelDiffX:d.pointLabelDiff[a.label].x,labelDiffY:d.pointLabelDiff[a.label].y,isDraggable:!1})});break;case 4:f.geoDrawHelpObj.updateIndex({type:"update",data:_objectSpread(_objectSpread({},a),{},{labelDiffX:d.labelDiffSegment[a.label].x,labelDiffY:d.labelDiffSegment[a.label].y})}),t=!1;break;case 5:f.geoDrawHelpObj.updateIndex({type:"update",data:_objectSpread(_objectSpread({},a),{},{isIntersection:!1,isParameter:!1,labelDiffX:d.pointLabelDiff[a.label].x,labelDiffY:d.pointLabelDiff[a.label].y})}),t=!1;break;case 6:var r=S(e,a.label),t=!0}return 6==d.currentStep?{newData:r,setNewData:t}:{newData:e,setNewData:t}}function C(e){e?(f.angleSubmitBtn.disable(),f.angleDraggable.show(),f.angleInput.show(),f.angleSubmitBtn.show(),f.angleLabel.show(),f.radio.show()):(f.angleDraggable.hide(),f.angleInput.hide(),f.angleSubmitBtn.hide(),f.angleLabel.hide(),f.radio.hide(),f.angleInput.setValue(""))}function m(e){var a,t;switch(e.id){case"angleInput":a=f.angleSubmitBtn,t="angleInput";break;case"segInput":a=f.segSubmitBtn,t="segInput";break;case"radInput":a=f.circleSubmitBtn,t="radInput"}d[t]=f[t].getValue(),""!==d[t]?a.enable():a.disable(),"radInput"===e.id&&""!=f[e.id].getValue()&&0!==f[e.id].getValue&&e.enterPressed&&(O(!1),d.circleData.distance=+d.radInput,f.geoDrawHelpObj.setCircleSize(d.circleData),f.circleSubmitBtn.disable())}function w(e){e?(f.draggable.show(),f.segInput.show(),f.segSubmitBtn.show(),f.segmentLabel.show()):(f.draggable.hide(),f.segInput.hide(),f.segSubmitBtn.hide(),f.segmentLabel.hide(),f.segInput.setValue(""))}function v(){var e=f.draggable.getPos();f.segmentLabel.setPos(e.x+105,e.bodyY+25),f.segInput.setPos(e.x+132,e.bodyY+50),f.segSubmitBtn.setPos({x:e.x+105,y:e.bodyY+92.5})}function O(e){e?(f.circleSubmitBtn.disable(),f.circleDraggable.show(),f.radInput.show(),f.circleSubmitBtn.show(),f.radiusLabel.show()):(f.circleDraggable.hide(),f.radInput.hide(),f.circleSubmitBtn.hide(),f.radiusLabel.hide(),f.radInput.setValue(""))}function j(){var e=f.circleDraggable.getPos();f.radiusLabel.setPos(e.x+105,e.bodyY+25),f.radInput.setPos(e.x+132,e.bodyY+50),f.circleSubmitBtn.setPos({x:e.x+105,y:e.bodyY+92.5})}function x(e,a){var t=1<arguments.length&&void 0!==a?a:"geoDrawHelpObj",l=d.currentQuestion;if(2===d.currentQuestion.situation){switch(e){case 0:k(l,"pinkColor");break;case 1:u(l,e,t),c(l,"AB",d.labelDiffSegment.a,t);break;case 2:b(l,e,t);break;case 3:g(l,t),u(l,e,t);break;case 4:var o=l.segmentToCheckStep4,n="AD"===o?"d":"b";c(l,o,d.labelDiffSegment[n],t);break;case 5:p(l,t),u(l,e,t);break;case 6:c(l,"AB",null,t,!0),c(l,"CD",d.labelDiffSegment.c,t,!0),c(l,"BC",d.labelDiffSegment.b,t,!0),c(l,"DA",null,t,!0)}var r=f[t].getData().visible;7==e&&"geoDrawObjAns"!==t||A(r,t)}else if(1===d.currentQuestion.situation||3===d.currentQuestion.situation){switch(e){case 0:k(l,"pinkColor");break;case 1:u(l,e,t),c(l,"AB",d.labelDiffSegment.a,t);break;case 2:b(l,e,t);break;case 3:g(l,t),u(l,e,t);break;case 4:var i=l.segmentToCheckStep4,s="AD"===i?"d":"b";c(l,i,d.labelDiffSegment[s],t);break;case 5:p(l,t),u(l,e,t);break;case 6:c(l,"AB",null,t,!0),c(l,"CD",d.labelDiffSegment.c,t,!0),1===d.currentQuestion.variant||d.currentQuestion.variant,c(l,"BC",null,t,!0),c(l,"DA",d.labelDiffSegment.d,t,!0)}r=f[t].getData().visible;7==e&&"geoDrawObjAns"!==t||A(r,t)}}function k(e,a,t){var t=2<arguments.length&&void 0!==t?t:"planDrawObj",l=e.given,e=f[t].getData().visible;e.forEach(function(e){(e.label===l[0]||e.label.includes(f.LabComClass.globalLangText[l[1]])||e.label.includes(l[1])||e.label.includes(f.LabComClass.globalLangText[l[2]])||e.label.includes(l[2])||e.label.includes(f.LabComClass.globalLangText[l[3]])||e.label.includes(l[3]))&&(e.strokeColor=d[a],e.fillColor=d[a])}),f[t].setData({visible:e})}function b(e,a,t){var l=2<arguments.length&&void 0!==t?t:"geoDrawHelpObj",o=d.currentQuestion,n=o.angle,r=o.angClockwise,i=o.angleOver,s="A"===i?"alpha":"beta",t=d.currentQuestion["point".concat(i)],o=d.currentQuestion["point".concat("A"===i?"B":"A")];f[l].plotAngleSize({x:t.x,y:t.y,xTo:o.x,yTo:o.y,degree:n,label:"".concat(f.LabComClass.globalLangText[s]),fillColor:d.blueColor,strokeColor:d.blueColor,clockwise:"B"===i?!r:r,step:a,labelDiffX:d.angleLabelDiff[i].x,labelDiffY:d.angleLabelDiff[i].y}).angleSize}function A(e,a){"geoDrawHelpObj"===a?e.forEach(function(e){(e.step===d.currentStep&&2===d.currentStep&&"angleSize"===e.type||3===d.currentStep&&("circle"===e.type||"ray"===e.type||"point"===e.type&&""===e.label&&e.step===d.currentStep)||5===d.currentStep&&e.step===d.currentStep&&("line"===e.type||"parallelLine"===e.type||"point"===e.type&&""===e.label))&&f[a].setStyle(e.uniqueId,{strokeColor:d.greyColor,fillColor:d.greyColor})}):"geoDrawObjAns"===a&&e.forEach(function(e){"line"!==e.type&&"angleSize"!==e.type&&"circle"!==e.type&&"ray"!==e.type||f[a].setStyle(e.uniqueId,{strokeColor:d.greyColor,fillColor:d.greyColor})})}function p(e,a){var t=1<arguments.length&&void 0!==a?a:"geoDrawHelpObj",a={type:"line",x:e.pointC.x,y:e.pointC.y,xTo:e.pointD.x,yTo:e.pointD.y};f[t].addShape(a);a="A"===e.angleOver?e.pointB:e.pointA,e="A"===e.angleOver?e.pointC:e.pointD,e={type:"line",x:a.x,y:a.y,xTo:e.x,yTo:e.y};f[t].addShape(e)}function u(e,a,t){var l,t=2<arguments.length&&void 0!==t?t:"geoDrawHelpObj";1===a?l=e.pointB:3===a?l="A"===e.angleOver?e.pointD:e.pointC:5===a&&(l="A"===e.angleOver?e.pointC:e.pointD),f[t].addShape(_objectSpread(_objectSpread({},l),{},{type:"point",labelDiffX:d.pointLabelDiff[l.label].x,labelDiffY:d.pointLabelDiff[l.label].y}))}function c(e,a,t,l,o){var n=3<arguments.length&&void 0!==l?l:"geoDrawHelpObj",l=4<arguments.length&&void 0!==o&&o,o=e["point".concat(a[0])],a=e["point".concat(a[1])],t={type:"segment",x:o.x,y:o.y,xTo:a.x,yTo:a.y,label:null===t?"":t.label,labelDiffX:null===t?"":t.x,labelDiffY:null===t?"":t.y},t=f[n].addShape(t);l&&(f[n].setStyle(t,{strokeColor:d.greenColor}),f[n].getData().visible.forEach(function(e){"point"===e.type&&""!==e.label&&f[n].setStyle(e.uniqueId,{strokeColor:d.greenColor,fillColor:d.greenColor})}))}function i(a,e){return e.getData().visible.filter(function(e){return e.label===a})[0]}function g(e,a){f[1<arguments.length&&void 0!==a?a:"geoDrawHelpObj"].addShape({type:"circle",x:e["point".concat(e.angleOver)].x,y:e["point".concat(e.angleOver)].y,r:e.r})}function B(e){f.wrongAlertBox.show(),d.removeData=e,f.geoDrawHelpObj.removeRecentShapes(),d.removeData=null}function L(){f.geoTools.disable()}function I(){f.stepsTable.resetStates(),f.logicObj.resetAll(),d.helpModeData=[],f.logicObj.resetAll(!0),d.lastStepCompleted=!1,f.geoDrawHelpObj.clearAll(),d.solved=!1,d.solvedWithHelp=!1,f.geoTools.reset(),f.logicObj.updateRender(d),d.lengthCount=0,d.currentStep=0,d.solvedWithAuto=!1,f.geoDrawObjAns.clearAll(),f.planDrawObj.clearAll(),f.planDrawObjAns.clearAll(),f.logicObj.resetLogicFlag(!1),d.planData=f.mathObj.generatePlanData(d.taskData.length),d.currentQuestion=f.mathObj.getQuestion(d.taskData.length),d.originalQuestion=_objectSpread({},d.currentQuestion),d.totalSteps=7,f.logicObj.updateRender(d),f.zoomControls.reset();var e=f.logicObj.getQuestionText();f.genLabel.setValue(e);e=d.positionArr[d.currentQuestion.variant-1];e&&!e.zoom?f.graphComp.setPointToScreenCenter(e.x,e.y):e&&e.zoom&&(f.zoomControls.setValue(f.zoomControls.getValue().resetVal+e.zoom.value),f.graphComp.setPointToScreenCenter(e.x,e.y));var a=f.logicObj.getStepsText().steps;f.stepsTable.clearData();for(var t=0;t<d.totalSteps;t++)f.stepsTable.addData({text:f.LabComClass.globalLangText[a[t]]});f.showSolutionBtn.enable(),2===d.currentQuestion.variant||4===d.currentQuestion.variant?d.pointLabelDiff={A:{x:-22,y:9},B:{x:7,y:9},C:{x:-22,y:-9},D:{x:-22,y:-9}}:d.pointLabelDiff={A:{x:-22,y:9},B:{x:7,y:9},C:{x:12,y:-9},D:{x:-22,y:-9}},2===d.currentQuestion.variant||4===d.currentQuestion.variant?d.labelDiffSegment={a:{x:0,y:10,label:"a"},b:{x:15,y:0,label:"b"},c:{x:0,y:-15,label:"c"},d:{x:-30,y:0,label:"d"}}:5===d.currentQuestion.variant?d.labelDiffSegment={a:{x:0,y:10,label:"a"},b:{x:10,y:0,label:"b"},c:{x:0,y:-15,label:"c"},d:{x:-25,y:0,label:"d"}}:d.labelDiffSegment={a:{x:0,y:10,label:"a"},b:{x:10,y:0,label:"b"},c:{x:0,y:-15,label:"c"},d:{x:-15,y:0,label:"d"}},r(),function(e){e.clearAll();var a=d.currentQuestion.pointA,a=_objectSpread(_objectSpread({},a),{},{labelDiffX:d.pointLabelDiff[a.label].x,labelDiffY:d.pointLabelDiff[a.label].y,strokeColor:"rgba(10,190,220,1)",step:-1});e.addShape(a)}(f.geoDrawHelpObj),r("planDrawObjAns"),function(){var e=d.currentQuestion.pointA;f.geoDrawObjAns.clearAll(),f.geoDrawObjAns.addShape(_objectSpread(_objectSpread({},e),{},{labelDiffX:d.pointLabelDiff[e.label].x,labelDiffY:d.pointLabelDiff[e.label].y,visible:!0})),k(d.currentQuestion,"pinkColor","planDrawObjAns");for(var a=1;a<d.totalSteps;a++)x(a,"geoDrawObjAns");d.showSolution=!1}(),f.logicObj.setSegmentOrder(f.mathObj.getOrder(d.currentQuestion)),f.logicObj.setGivenValues(d.currentQuestion.given)}function T(){var e=d.currentQuestion.pointA;f.geoDrawObjAns.clearAll(),f.geoDrawObjAns.addShape(_objectSpread(_objectSpread({},e),{},{labelDiffX:d.pointLabelDiff[e.label].x,labelDiffY:d.pointLabelDiff[e.label].y,visible:!0,strokeColor:d.greenColor,fillColor:d.greenColor}));for(var a=1;a<d.totalSteps;a++)x(a,"geoDrawObjAns")}function r(e){var a=0<arguments.length&&void 0!==e?e:"planDrawObj";d.planData.forEach(function(e){"E"===e.label?f[a].addShape(_objectSpread(_objectSpread({},e),{},{shapeType:"parallelogram",isDraggable:!1,kshitij:!0})):f[a].addShape(_objectSpread(_objectSpread({},e),{},{shapeType:"parallelogram"}))});e={x:1.95,y:2,zoom:{value:-1}};s("A",a),s("B",a),s("C",a),s("D",a),e.zoom?e.zoom&&(f.zoomPlanControls.setValue(f.zoomPlanControls.getValue().resetVal+e.zoom.value),f.planComp.setPointToScreenCenter(e.x,e.y,401,254)):f.planComp.setPointToScreenCenter(e.x,e.y,400,100)}function s(e,a){var t=1<arguments.length&&void 0!==a?a:"planDrawObj",l=d.angleOver,o={A:{x:19,y:-16},B:{x:-26,y:-23},C:{x:-32,y:13},D:{x:10,y:23}},n=i(l[e][0],f[t]),r=i(l[e][1],f[t]),a=i(l[e][2],f[t]);f[t].addShape({type:"angle",firstPointId:n.uniqueId,secondPointId:r.uniqueId,thirdPointId:a.uniqueId,x:r.x,y:r.y,strokeColor:"rgba(10,190,220,1)",fillColor:"rgba(10,190,220,1)",label:"E"===e?"":f.LabComClass.globalLangText[{A:"alpha",B:"beta",C:"gama",D:"delta"}[e]],labelDiffX:o[e].x,labelDiffY:o[e].y,over:l[e],isDraggable:"E"!==e,toColor:"E"!==e,angleStart:180*f.LabComClass.Maths.getAngle(r.x,r.y,n.x,n.y)/Math.PI<0?360+180*f.LabComClass.Maths.getAngle(r.x,r.y,n.x,n.y)/Math.PI:180*f.LabComClass.Maths.getAngle(r.x,r.y,n.x,n.y)/Math.PI,angleEnd:180*f.LabComClass.Maths.getAngle(r.x,r.y,a.x,a.y)/Math.PI<0?360+180*f.LabComClass.Maths.getAngle(r.x,r.y,a.x,a.y)/Math.PI:180*f.LabComClass.Maths.getAngle(r.x,r.y,a.x,a.y)/Math.PI})}function H(){var e=f.geoDrawHelpObj.getData().visible,a=[];e.forEach(function(e){a.push({label:e.label,labelDiffX:e.labelDiffX,labelDiffY:e.labelDiffY})}),a.forEach(function(e){var t,a,l,a=(t=e.label,a=f[a="geoDrawObjAns"].getData().visible,l=[],a.forEach(function(e,a){e.label!==t&&e.oglabel!==t||l.push(e)}),l[0]);void 0!==a&&e.label===a.label&&f.geoDrawObjAns.updateShape(a.uniqueId,{labelDiffX:e.labelDiffX,labelDiffY:e.labelDiffY})})}function P(){d.totalShapesByHelp>=d.totalSteps&&!d.solvedWithAuto&&!d.solved&&(d.solved=!0),f.geoDrawHelpObj.show(),H(),d.showSolution?(f.geoDrawHelpObj.hide(),f.geoDrawObjAns.show(),f.planDrawObjAns.show(),f.planDrawObj.hide()):(f.geoDrawHelpObj.show(),f.geoDrawObjAns.hide(),f.planDrawObjAns.hide(),f.planDrawObj.show()),f.geoDrawHelpObj.setTransperent(d.showSolution),f.logicObj.updateRender(d),f.geoDrawHelpObj.setTransperent(d.showSolution),f.showSolutionBtn.setValue(f.LabComClass.globalLangText[d.showSolution?"hideSolution":"showSolution"]),f.showSolutionBtn.enable(),f.showSolutionBtn.setToggleState(d.showSolution),d.currentStep===d.totalSteps?(L(),f.showSolutionBtn.disable()):(f.geoTools.enable(),f.showSolutionBtn.enable()),d.taskData.length>=f.mathObj.getNumberOfVariants()-1&&(f.nextTaskBtn.setValue(f.LabComClass.globalLangText.submit),d.isLastQuestion=!0),d.taskData.length>=f.mathObj.getNumberOfVariants()&&(f.nextTaskBtn.disable(),f.showSolutionBtn.disable(),f.geoTools.disable()),f.submitBox.isVisible()&&(f.wrongAlertBox.hide(),f.stepsEndAlertBox.hide());var e=f.geoTools.getSelected();f.geoTools.getEnabled()||(e="moveGraph"),f.geoDrawHelpObj.setInteractionType(e),0===d.currentStep&&"brush2"===e||"move"===e?f.planDrawObj.setInteractionType(e):f.planDrawObj.setInteractionType("moveGraph"),onViewUpdateCls.trigger("onGlobalUpdate",{type:"rendererUpdate"})}f.numPad.registerEntryBox(f.angleInput,f.radInput),["timeLine","stepsTable","showSolutionBtn","nextTaskBtn","geoTools","segSubmitBtn","angleSubmitBtn","circleSubmitBtn"].forEach(function(e){f[e].addEventListener("click",n)}),f.logicObj.setMathObj(f.mathObj,f.LabComClass.Maths),f.mathObj.setMathObj(f.LabComClass.Maths),f.mathObj.populateDefaultQuestions(),f.rightClickOptions.hide(),I(),P(),onViewUpdateCls.trigger("onGlobalUpdate",{type:"componentLoaded",data:{id:d.id}}),window.showGraph=function(e){f.graphComp.graphLines({axis:e,grid:e})},window.show=function(e){f.planComp.graphLines({axis:e,grid:e})},window.showGraph(!1),window.show(!1)}