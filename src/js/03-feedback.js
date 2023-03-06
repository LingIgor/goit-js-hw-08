const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea')
}
 const STORAGE_KEY = 'feedback-form-state'
console.log(refs.form)
console.log(refs.textarea)

refs.form.addEventListener('submit', onFormSubmit)
refs.textarea.addEventListener('input', onTextAreaInput)

function onFormSubmit (e) {
e.preventDefault();
console.log('otpravlyaem formu');
e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY)
}


function onTextAreaInput (e) {
const massage = e.currentTarget.value;
localStorage.setItem(STORAGE_KEY, massage);

}
