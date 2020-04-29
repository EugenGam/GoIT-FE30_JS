const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('.start'),
  stop: document.querySelector('.stop'),
};

const rndm = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval;

const changeColor = () => {
  refs.start.disabled = true;
  interval = setInterval(() => {
    refs.body.style.backgroundColor = `${colors[rndm(0, 5)]}`;
  }, 3000);
};

const stopChanges = () => {
  refs.start.disabled = false;
  clearInterval(interval);
};

refs.start.addEventListener('click', changeColor);
refs.stop.addEventListener('click', stopChanges);
