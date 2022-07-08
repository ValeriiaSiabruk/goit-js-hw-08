import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');
const feedbackFormState =
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

emailInput.addEventListener('input', updateLocalStorage);
messageTextarea.addEventListener('input', updateLocalStorage);
