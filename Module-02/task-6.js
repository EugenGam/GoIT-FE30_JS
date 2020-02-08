let input;
let answer;
const numbers = [];
let total = 0;
do {
  answer = prompt('Введите число');
  input = +answer;
  numbers.push(input);
  console.log(input);
} while (answer != null);
for (let element of numbers) {
  total = element + total;
}
console.log(total);
