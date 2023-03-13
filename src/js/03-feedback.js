import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const localKey = 'feedback-form-state';
const elements = {};

autofill();

formEl.addEventListener(
  'input',
  throttle(e => {
    elements[e.target.name] = e.target.value;
    localStorage.setItem(localKey, JSON.stringify(elements));
  }, 500)
);

formEl.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(localKey);
//   e.currentTarget.reset();
  console.log(elements);
});

function autofill() {
  const savedElements = JSON.parse(localStorage.getItem(localKey));
  if (savedElements) {
    email.value = savedElements.email || '';
    message.value = savedElements.message || '';
  }
};
