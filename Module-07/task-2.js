const input = document.querySelector('#validation-input');
const _length = Number(input.dataset.length);
const lengthValidation = () => {
  if (input.value.length === _length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
};
input.addEventListener('blur', lengthValidation);

const text = document.querySelector('#text');
const range = document.querySelector('#font-size-control');

text.style.fontSize = '1px';
range.value = '0';

const changeFontSize = () => {
  const size = Number(range.value);
  text.style.fontSize = `${size}px`;
};
range.addEventListener('input', changeFontSize);

const numberInput = document.querySelector('#controls').querySelector('input');

let width = 30;

const render = () => {
  const amount = numberInput.value;
  for (let i = 0; i < amount; i++) {
    width += 10;
    const bgColor = (Math.random() * (666666 - 0) + 0).toFixed(0);
    document
      .querySelector('#boxes')
      .insertAdjacentHTML(
        'afterbegin',
        `<div class="Box" style="width: ${width}px; height: ${width}px; background-color: #${bgColor}"></div>`,
      );
  }
};

const destroy = () => {
  document.querySelector('#boxes').innerHTML = '';
  width = 30;
};
document
  .querySelector('[data-action="render"]')
  .addEventListener('click', render);
document
  .querySelector('[data-action="destroy"]')
  .addEventListener('click', destroy);
