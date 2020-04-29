const numberInput = document.querySelector('#controls').querySelector('input');

let width = 30;

const render = () => {
  const amount = numberInput.value;
  let arr = [];
  arr.length = amount;
  arr.fill('').map(element => {
    width += 10;
    const bgColor = (Math.random() * (666666 - 0) + 0).toFixed(0);
    document
      .querySelector('#boxes')
      .insertAdjacentHTML(
        'afterbegin',
        `<div class="Box" style="width: ${width}px; height: ${width}px; background-color: #${bgColor}"></div>`,
      );
  });
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
