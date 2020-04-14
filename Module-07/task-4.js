let counterValue = 0;

const cntr = document.querySelector('#value');

const increment = () => {
  counterValue += 1;
  cntr.textContent = `${counterValue}`;
};

const decrement = () => {
  counterValue -= 1;
  cntr.textContent = `${counterValue}`;
};

document
  .querySelector('[data-action="decrement"]')
  .addEventListener('click', decrement);
document
  .querySelector('[data-action="increment"]')
  .addEventListener('click', increment);
