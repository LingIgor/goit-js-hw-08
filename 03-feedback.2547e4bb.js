const e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")},t={};e.form.addEventListener("submit",(function(t){if(!e.email.value||!e.textarea.value)return t.preventDefault(),void alert("Заповніть всі поля!");t.preventDefault(),console.log("otpravlyaem formu"),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),e.form.addEventListener("input",(e=>{t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}));const o=localStorage.getItem("feedback-form-state"),a=JSON.parse(o);console.log(o),console.log(a);const r=localStorage.getItem("feedback-form-state");console.log(r);const l=JSON.parse(r);console.log(l);
//# sourceMappingURL=03-feedback.2547e4bb.js.map
