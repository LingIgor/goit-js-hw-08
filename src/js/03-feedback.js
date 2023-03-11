const formEL = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const LOCAL_NAME = 'feedback-form-state';

formEL.addEventListener('input', onFormInput);
formEL.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput() {
  formData = {
    emailEl: emailEl.value,
    textareaEl: textareaEl.value,
  };
  localStorage.setItem(LOCAL_NAME, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (emailEl.value === '' || textareaEl.value === '') {
    return alert('Заповніть всі поля!');
  }

  localStorage.removeItem(LOCAL_NAME);
  e.currentTarget.reset();
}

function populateForm() {
  const saveLocalStorage = localStorage.getItem(LOCAL_NAME);
  const objectFromLocalStorage = JSON.parse(saveLocalStorage);
  if (objectFromLocalStorage) {
    emailEl.value = objectFromLocalStorage.emailEl;
    textareaEl.value = objectFromLocalStorage.textareaEl;
  }
}
