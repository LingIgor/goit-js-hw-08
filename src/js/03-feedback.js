// import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500) );
refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  // console.log(formData)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

const save = localStorage.getItem(STORAGE_KEY);
const care = JSON.parse(save);
console.log(save);
console.log(care);

populateTextarea();

const saveMessage = localStorage.getItem(STORAGE_KEY);
console.log(saveMessage);
// console.log(saveMessage)
const sade = JSON.parse(saveMessage);
console.log(sade);

function onFormSubmit(e) {
  e.preventDefault();
  console.log('otpravlyaem formu');
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  refs.textarea.value = care.message;
  refs.email.value = care.email;
}
