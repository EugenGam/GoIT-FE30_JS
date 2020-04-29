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
