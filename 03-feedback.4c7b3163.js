!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return d.Date.now()};function g(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(h,t),s?g(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&o?g(e):(o=i=void 0,u)}function T(){var e=b(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(h,t),g(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector("label [name=email]"),O=document.querySelector("label [name=message]"),h=document.querySelector("form"),w=JSON.parse(localStorage.getItem("feedback-form-state"));h.addEventListener("input",e(t)((function(e){var t={email:j.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),w&&(j.value=w.email,O.value=w.message),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),j.value?O.value?(localStorage.removeItem("feedback-form-state"),O.value="",j.value=""):alert("Please type a message"):alert("Please provide and email")}))}();
//# sourceMappingURL=03-feedback.4c7b3163.js.map