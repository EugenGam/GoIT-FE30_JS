let totl = 0;
let inpt;

do {
  inpt = prompt('Введите число');
  parseInt(inpt, radix);
  parseInt(totl, radix);
  console.log(totl, inpt);
  console.log(typeof totl);
  totl = totl + inpt;
} while (inpt != null);
alert(totl);

