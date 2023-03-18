import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const localKey = "feedback-form-state";

let elements = {};


const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

fillform();


formEl.addEventListener(
  'input',
  throttle(event => {
    elements[event.target.name] = event.target.value;
    localStorage.setItem(localKey, JSON.stringify(elements));
  }, 500)
);

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (inputEl.value !== '' && textareaEl.value !== '') {
    console.log(elements); 
    localStorage.removeItem(localKey);
    event.currentTarget.reset(); 
    return;
  }
    alert('Please fill in all fields');
})


function fillform() {
  const savedElements = localStorage.getItem(localKey);
  if (savedElements) {
    elements = JSON.parse(savedElements);
    inputEl.value = elements.email ?? '';
    textareaEl.value = elements.message ?? '';
  }
};