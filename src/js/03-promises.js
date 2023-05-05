import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const number = amount.value;
  let delayFinal = Number(delay.value) - Number(step.value);
  for (let i = 1; i <= number; i += 1) {
    delayFinal += Number(step.value);
    createPromise(i, delayFinal)
      .then(object => {
        const { position, delay } = object;
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(object => {
        const { position, delay } = object;
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }

  event.currentTarget.reset();
});

console.log();
