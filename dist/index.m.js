function t(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function r(r,n,e){return n&&t(r.prototype,n),e&&t(r,e),r}function n(){return(n=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t}).apply(this,arguments)}function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,r){return(i=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function u(t,r,n){return(u=o()?Reflect.construct:function(t,r,n){var e=[null];e.push.apply(e,r);var o=new(Function.bind.apply(t,e));return n&&i(o,n.prototype),o}).apply(null,arguments)}function f(t){var r="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return u(t,arguments,e(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)})(t)}var c=Object.prototype.hasOwnProperty,a=Array.isArray,l=function(){for(var t=[],r=0;r<256;++r)t.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return t}(),s=function(t,r){for(var n=r&&r.plainObjects?Object.create(null):{},e=0;e<t.length;++e)void 0!==t[e]&&(n[e]=t[e]);return n},v={arrayToObject:s,assign:function(t,r){return Object.keys(r).reduce(function(t,n){return t[n]=r[n],t},t)},combine:function(t,r){return[].concat(t,r)},compact:function(t){for(var r=[{obj:{o:t},prop:"o"}],n=[],e=0;e<r.length;++e)for(var i=r[e],o=i.obj[i.prop],u=Object.keys(o),f=0;f<u.length;++f){var c=u[f],l=o[c];"object"==typeof l&&null!==l&&-1===n.indexOf(l)&&(r.push({obj:o,prop:c}),n.push(l))}return function(t){for(;t.length>1;){var r=t.pop(),n=r.obj[r.prop];if(a(n)){for(var e=[],i=0;i<n.length;++i)void 0!==n[i]&&e.push(n[i]);r.obj[r.prop]=e}}}(r),t},decode:function(t,r,n){var e=t.replace(/\+/g," ");if("iso-8859-1"===n)return e.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(e)}catch(t){return e}},encode:function(t,r,n){if(0===t.length)return t;var e=t;if("symbol"==typeof t?e=Symbol.prototype.toString.call(t):"string"!=typeof t&&(e=String(t)),"iso-8859-1"===n)return escape(e).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var i="",o=0;o<e.length;++o){var u=e.charCodeAt(o);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122?i+=e.charAt(o):u<128?i+=l[u]:u<2048?i+=l[192|u>>6]+l[128|63&u]:u<55296||u>=57344?i+=l[224|u>>12]+l[128|u>>6&63]+l[128|63&u]:(u=65536+((1023&u)<<10|1023&e.charCodeAt(o+=1)),i+=l[240|u>>18]+l[128|u>>12&63]+l[128|u>>6&63]+l[128|63&u])}return i},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,r){if(a(t)){for(var n=[],e=0;e<t.length;e+=1)n.push(r(t[e]));return n}return r(t)},merge:function t(r,n,e){if(!n)return r;if("object"!=typeof n){if(a(r))r.push(n);else{if(!r||"object"!=typeof r)return[r,n];(e&&(e.plainObjects||e.allowPrototypes)||!c.call(Object.prototype,n))&&(r[n]=!0)}return r}if(!r||"object"!=typeof r)return[r].concat(n);var i=r;return a(r)&&!a(n)&&(i=s(r,e)),a(r)&&a(n)?(n.forEach(function(n,i){if(c.call(r,i)){var o=r[i];o&&"object"==typeof o&&n&&"object"==typeof n?r[i]=t(o,n,e):r.push(n)}else r[i]=n}),r):Object.keys(n).reduce(function(r,i){var o=n[i];return r[i]=c.call(r,i)?t(r[i],o,e):o,r},i)}},d=String.prototype.replace,p=/%20/g,h={RFC1738:"RFC1738",RFC3986:"RFC3986"},y=v.assign({default:h.RFC3986,formatters:{RFC1738:function(t){return d.call(t,p,"+")},RFC3986:function(t){return String(t)}}},h),b=Object.prototype.hasOwnProperty,g={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,r){return t+"["+r+"]"},repeat:function(t){return t}},j=Array.isArray,m=Array.prototype.push,O=function(t,r){m.apply(t,j(r)?r:[r])},w=Date.prototype.toISOString,R=y.default,E={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:v.encode,encodeValuesOnly:!1,format:R,formatter:y.formatters[R],indices:!1,serializeDate:function(t){return w.call(t)},skipNulls:!1,strictNullHandling:!1},k=function t(r,n,e,i,o,u,f,c,a,l,s,d,p){var h,y=r;if("function"==typeof f?y=f(n,y):y instanceof Date?y=l(y):"comma"===e&&j(y)&&(y=v.maybeMap(y,function(t){return t instanceof Date?l(t):t}).join(",")),null===y){if(i)return u&&!d?u(n,E.encoder,p,"key"):n;y=""}if("string"==typeof(h=y)||"number"==typeof h||"boolean"==typeof h||"symbol"==typeof h||"bigint"==typeof h||v.isBuffer(y))return u?[s(d?n:u(n,E.encoder,p,"key"))+"="+s(u(y,E.encoder,p,"value"))]:[s(n)+"="+s(String(y))];var b,g=[];if(void 0===y)return g;if(j(f))b=f;else{var m=Object.keys(y);b=c?m.sort(c):m}for(var w=0;w<b.length;++w){var R=b[w],k=y[R];if(!o||null!==k){var S=j(y)?"function"==typeof e?e(n,R):n:n+(a?"."+R:"["+R+"]");O(g,t(k,S,e,i,o,u,f,c,a,l,s,d,p))}}return g},S=Object.prototype.hasOwnProperty,x=Array.isArray,C={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:v.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},D=function(t){return t.replace(/&#(\d+);/g,function(t,r){return String.fromCharCode(parseInt(r,10))})},N=function(t,r){return t&&"string"==typeof t&&r.comma&&t.indexOf(",")>-1?t.split(","):t},T=function(t,r,n,e){if(t){var i=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/g,u=n.depth>0&&/(\[[^[\]]*])/.exec(i),f=u?i.slice(0,u.index):i,c=[];if(f){if(!n.plainObjects&&S.call(Object.prototype,f)&&!n.allowPrototypes)return;c.push(f)}for(var a=0;n.depth>0&&null!==(u=o.exec(i))&&a<n.depth;){if(a+=1,!n.plainObjects&&S.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;c.push(u[1])}return u&&c.push("["+i.slice(u.index)+"]"),function(t,r,n,e){for(var i=e?r:N(r,n),o=t.length-1;o>=0;--o){var u,f=t[o];if("[]"===f&&n.parseArrays)u=[].concat(i);else{u=n.plainObjects?Object.create(null):{};var c="["===f.charAt(0)&&"]"===f.charAt(f.length-1)?f.slice(1,-1):f,a=parseInt(c,10);n.parseArrays||""!==c?!isNaN(a)&&f!==c&&String(a)===c&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(u=[])[a]=i:u[c]=i:u={0:i}}i=u}return i}(c,r,n,e)}},F=function(){function t(t,r,n){var e;this.name=t,this.definition=r,this.bindings=null!=(e=r.bindings)?e:{},this.config=n}var n=t.prototype;return n.matchesUrl=function(t){if(!this.definition.methods.includes("GET"))return!1;var r=this.template.replace(/\/{[^}?]*\?}/g,"(/[^/?]+)?").replace(/{[^}]+}/g,"[^/?]+").replace(/^\w+:\/\//,"");return new RegExp("^"+r+"$").test(t.replace(/\/+$/,"").split("?").shift())},n.compile=function(t){var r=this;return this.parameterSegments.length?this.template.replace(/{([^}?]+)\??}/g,function(n,e){var i;if([null,void 0].includes(t[e])&&r.parameterSegments.find(function(t){return t.name===e}).required)throw new Error("Ziggy error: '"+e+"' parameter is required for route '"+r.name+"'.");return encodeURIComponent(null!=(i=t[e])?i:"")}).replace(/\/+$/,""):this.template},r(t,[{key:"template",get:function(){return((this.config.absolute?this.definition.domain?""+this.config.url.match(/^\w+:\/\//)[0]+this.definition.domain+(this.config.port?":"+this.config.port:""):this.config.url:"")+"/"+this.definition.uri).replace(/\/+$/,"")}},{key:"parameterSegments",get:function(){var t,r;return null!=(t=null===(r=this.template.match(/{[^}?]+\??}/g))||void 0===r?void 0:r.map(function(t){return{name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)}}))?t:[]}}]),t}(),$=function(t){var e,i;function o(r,e,i,o){var u,f;if(void 0===i&&(i=!0),(f=t.call(this)||this).t=null!=(u=null!=o?o:Ziggy)?u:null===globalThis||void 0===globalThis?void 0:globalThis.Ziggy,f.t=n({},f.t,{absolute:i}),r){if(!f.t.routes[r])throw new Error("Ziggy error: route '"+r+"' is not in the route list.");f.i=new F(r,f.t.routes[r],f.t),f.u=f.l(e)}return f}i=t,(e=o).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var u=o.prototype;return u.toString=function(){var t=this,r=Object.keys(this.u).filter(function(r){return!t.i.parameterSegments.some(function(t){return t.name===r})}).filter(function(t){return"_query"!==t}).reduce(function(r,e){var i;return n({},r,((i={})[e]=t.u[e],i))},{});return this.i.compile(this.u)+function(t,r){var n,e=t,i=function(t){if(!t)return E;if(null!=t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var r=t.charset||E.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=y.default;if(void 0!==t.format){if(!b.call(y.formatters,t.format))throw new TypeError("Unknown format option provided.");n=t.format}var e=y.formatters[n],i=E.filter;return("function"==typeof t.filter||j(t.filter))&&(i=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:E.addQueryPrefix,allowDots:void 0===t.allowDots?E.allowDots:!!t.allowDots,charset:r,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:E.charsetSentinel,delimiter:void 0===t.delimiter?E.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:E.encode,encoder:"function"==typeof t.encoder?t.encoder:E.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:E.encodeValuesOnly,filter:i,formatter:e,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:E.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:E.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:E.strictNullHandling}}(r);"function"==typeof i.filter?e=(0,i.filter)("",e):j(i.filter)&&(n=i.filter);var o=[];if("object"!=typeof e||null===e)return"";var u=g[r&&r.arrayFormat in g?r.arrayFormat:r&&"indices"in r?r.indices?"indices":"repeat":"indices"];n||(n=Object.keys(e)),i.sort&&n.sort(i.sort);for(var f=0;f<n.length;++f){var c=n[f];i.skipNulls&&null===e[c]||O(o,k(e[c],c,u,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var a=o.join(i.delimiter),l=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&(l+="iso-8859-1"===i.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),a.length>0?l+a:""}(n({},r,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:function(t,r){return"boolean"==typeof t?Number(t):r(t)}})},u.current=function(t,r){var n=this,e=this.t.absolute?this.s().host+this.s().pathname:this.s().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"),i=Object.entries(this.t.routes).find(function(r){return new F(t,r[1],n.t).matchesUrl(e)})||[void 0,void 0],o=i[0],u=i[1];if(!t)return o;var f=new RegExp("^"+t.replace(".","\\.").replace("*",".*")+"$").test(o);if([null,void 0].includes(r)||!f)return f;var c=new F(o,u,this.t);r=this.l(r,c);var a=this.v(u);return!(!Object.values(r).every(function(t){return!t})||Object.values(a).length)||Object.entries(r).every(function(t){return a[t[0]]==t[1]})},u.s=function(){var t,r,n,e,i,o,u="undefined"!=typeof window?window.location:{},f=u.host,c=u.pathname,a=u.search;return{host:null!=(t=null===(r=this.t.location)||void 0===r?void 0:r.host)?t:void 0===f?"":f,pathname:null!=(n=null===(e=this.t.location)||void 0===e?void 0:e.pathname)?n:void 0===c?"":c,search:null!=(i=null===(o=this.t.location)||void 0===o?void 0:o.search)?i:void 0===a?"":a}},u.has=function(t){return Object.keys(this.t.routes).includes(t)},u.l=function(t,r){var e=this;void 0===t&&(t={}),void 0===r&&(r=this.i),t=["string","number"].includes(typeof t)?[t]:t;var i=r.parameterSegments.filter(function(t){return!e.t.defaults[t.name]});if(Array.isArray(t))t=t.reduce(function(t,r,e){var o,u;return n({},t,i[e]?((o={})[i[e].name]=r,o):((u={})[r]="",u))},{});else if(1===i.length&&!t[i[0].name]&&(t.hasOwnProperty(Object.values(r.bindings)[0])||t.hasOwnProperty("id"))){var o;(o={})[i[0].name]=t,t=o}return n({},this.p(r),this.h(t,r))},u.p=function(t){var r=this;return t.parameterSegments.filter(function(t){return r.t.defaults[t.name]}).reduce(function(t,e,i){var o,u=e.name;return n({},t,((o={})[u]=r.t.defaults[u],o))},{})},u.h=function(t,r){var e=r.bindings,i=r.parameterSegments;return Object.entries(t).reduce(function(t,r){var o,u,f=r[0],c=r[1];if(!c||"object"!=typeof c||Array.isArray(c)||!i.some(function(t){return t.name===f}))return n({},t,((u={})[f]=c,u));if(!c.hasOwnProperty(e[f])){if(!c.hasOwnProperty("id"))throw new Error("Ziggy error: object passed as '"+f+"' parameter is missing route model binding key '"+e[f]+"'.");e[f]="id"}return n({},t,((o={})[f]=c[e[f]],o))},{})},u.v=function(t){var r,e=this.s().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,""),i=function(t,r,e){void 0===r&&(r="");var i=[t,r].map(function(t){return t.split(e)}),o=i[0];return i[1].reduce(function(t,r,e){var i;return/^{[^}?]+\??}$/.test(r)&&o[e]?n({},t,((i={})[r.replace(/^{|\??}$/g,"")]=o[e],i)):t},{})};return n({},i(this.s().host,t.domain,"."),i(e,t.uri,"/"),function(t,r){var n=C;if(""===t||null==t)return n.plainObjects?Object.create(null):{};for(var e="string"==typeof t?function(t,r){var n,e={},i=(r.ignoreQueryPrefix?t.replace(/^\?/,""):t).split(r.delimiter,Infinity===r.parameterLimit?void 0:r.parameterLimit),o=-1,u=r.charset;if(r.charsetSentinel)for(n=0;n<i.length;++n)0===i[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===i[n]?u="utf-8":"utf8=%26%2310003%3B"===i[n]&&(u="iso-8859-1"),o=n,n=i.length);for(n=0;n<i.length;++n)if(n!==o){var f,c,a=i[n],l=a.indexOf("]="),s=-1===l?a.indexOf("="):l+1;-1===s?(f=r.decoder(a,C.decoder,u,"key"),c=r.strictNullHandling?null:""):(f=r.decoder(a.slice(0,s),C.decoder,u,"key"),c=v.maybeMap(N(a.slice(s+1),r),function(t){return r.decoder(t,C.decoder,u,"value")})),c&&r.interpretNumericEntities&&"iso-8859-1"===u&&(c=D(c)),a.indexOf("[]=")>-1&&(c=x(c)?[c]:c),e[f]=S.call(e,f)?v.combine(e[f],c):c}return e}(t,n):t,i=n.plainObjects?Object.create(null):{},o=Object.keys(e),u=0;u<o.length;++u){var f=o[u],c=T(f,e[f],n,"string"==typeof t);i=v.merge(i,c,n)}return v.compact(i)}(null===(r=this.s().search)||void 0===r?void 0:r.replace(/^\?/,"")))},u.valueOf=function(){return this.toString()},u.check=function(t){return this.has(t)},r(o,[{key:"params",get:function(){return this.v(this.t.routes[this.current()])}}]),o}(f(String));export default function(t,r,n,e){var i=new $(t,r,n,e);return t?i.toString():i}
