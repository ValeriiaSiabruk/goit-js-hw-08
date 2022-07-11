import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');
let feedbackFormState =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};

if (feedbackFormState.email) {
  emailInput.value = feedbackFormState.email;
}
if (feedbackFormState.message) {
  messageTextarea.value = feedbackFormState.message;
}

const updateLocalStorage = throttle(event => {
  feedbackFormState[event.target.name] = event.target.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}, 500);

const formSubmitHandler = event => {
  event.preventDefault();
  console.log(feedbackFormState);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  feedbackFormState = {};
};

form.addEventListener('input', updateLocalStorage);
form.addEventListener('submit', formSubmitHandler);
