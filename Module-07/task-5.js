const inpt = document.querySelector('#name-input');
const outpt = document.querySelector('#name-output');

const updateOutput = e => {
  if (e.target.value === '') {
    outpt.textContent = 'Незнакомец';
  } else {
    outpt.textContent = e.target.value;
  }
};

inpt.addEventListener('input', updateOutput);
