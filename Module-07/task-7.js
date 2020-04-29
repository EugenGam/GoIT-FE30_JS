const text = document.querySelector('#text');
const range = document.querySelector('#font-size-control');

text.style.fontSize = '1px';
range.value = '0';

const changeFontSize = () => {
  const size = Number(range.value);
  text.style.fontSize = `${size}px`;
};
range.addEventListener('input', changeFontSize);
