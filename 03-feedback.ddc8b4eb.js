!function(){var e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")},t="feedback-form-state";console.log(e.form),console.log(e.textarea),e.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("otpravlyaem formu"),e.currentTarget.reset(),localStorage.removeItem(t)})),e.textarea.addEventListener("input",(function(e){var r=e.currentTarget.value;localStorage.setItem(t,r)}))}();
//# sourceMappingURL=03-feedback.ddc8b4eb.js.map