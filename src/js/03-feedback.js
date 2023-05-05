import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name=email]');
const messageInput = document.querySelector('textarea[name=message]');

// const inputValues = {
//   email: '',
//   message: '',
// };
// savedValues();

// form.addEventListener('input', throttle(inputMessage, 500));

// function inputMessage(event) {
//   inputValues[event.target.name] = event.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(inputValues));
// }
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   localStorage.removeItem('feedback-form-state');
//   event.target.reset();
//   console.log(inputValues);
//   inputValues.email = '';
//   inputValues.message = '';
// });

// function savedValues() {
//   const savedInput = localStorage.getItem('feedback-form-state');
//   const parsedSavedInput = JSON.parse(savedInput);
//   inputValues.email = parsedSavedInput.email || '';
//   inputValues.message = parsedSavedInput.message || '';
//   if (parsedSavedInput) {
//     emailInput.value = parsedSavedInput.email;
//     messageInput.value = parsedSavedInput.message;
//   }
// }

savedValues();

function inputMessage(event) {
  const elem = form.elements;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: elem.email.value,
      message: elem.message.value,
    })
  );
}

function onSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  event.target.reset();
}

function savedValues() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    const parced = JSON.parse(savedMessage);
    emailInput.value = parced.email;
    messageInput.value = parced.message;
  }
}
form.addEventListener('input', throttle(inputMessage, 500));
form.addEventListener('submit', onSubmit);
