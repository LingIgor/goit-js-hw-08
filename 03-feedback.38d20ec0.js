!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,y=Math.min,b=function(){return v.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(w,t),d?p(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function w(){var e=b();if(j(e))return x(e);f=setTimeout(w,function(e){var n=t-(e-l);return v?y(n,a-(e-c)):n}(e))}function x(e){return f=void 0,s&&r?p(e):(r=i=void 0,u)}function O(){var e=b(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(v)return f=setTimeout(w,t),p(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=h(t)||0,g(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(h(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},O.flush=function(){return void 0===f?u:x(b())},O}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S,j,w=document.querySelector(".feedback-form"),x=document.querySelector(".feedback-form input"),O=document.querySelector(".feedback-form textarea"),T="feedback-form-state";w.addEventListener("input",e(t)((function(){var e={emailEl:x.value,textareaEl:O.value};localStorage.setItem(T,JSON.stringify(e)),console.log(e)}),500)),w.addEventListener("submit",(function(e){if(e.preventDefault(),""===x.value||""===O.value){var t=["Заповніть всі поля!","Гарна спроба, спробуй ще!","Все ж таки заповни всі форми!","НУ скільки можна, заповни їх!","І довго ми так будемо гратись?","Пішла друга година... заповни всі поля! =)","Я так можу цілий день, а ти? =)"],n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){i.value;return alert(t[Math.floor(Math.random()*t.length)])}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}localStorage.removeItem(T),e.currentTarget.reset()})),S=localStorage.getItem(T),(j=JSON.parse(S))&&(x.value=j.emailEl,O.value=j.textareaEl)}();
//# sourceMappingURL=03-feedback.38d20ec0.js.map