function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(j,t),l?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(S(e))return x(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function x(e){return f=void 0,p&&o?y(e):(o=r=void 0,a)}function E(){var e=v(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),E.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},E.flush=function(){return void 0===f?a:x(v())},E}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea");y.addEventListener("input",e(t)((function(){const e={emailEl:h.value,textareaEl:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),y.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.value||""===S.value){const e=["Заповніть всі поля!","Гарна спроба, спробуй ще!","Все ж таки заповни всі форми!","НУ скільки можна, заповни їх!","І довго ми так будемо гратись?","Пішла друга година... заповни всі поля! =)","Я так можу цілий день, а ти? =)"];for(let t of e)return alert(e[Math.floor(Math.random()*e.length)])}const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);console.log(n),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(h.value=t.emailEl,S.value=t.textareaEl)}();
//# sourceMappingURL=03-feedback.2aadba0b.js.map
