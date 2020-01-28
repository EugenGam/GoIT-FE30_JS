let totl = 0;
let inpt;

do {
  inpt = prompt('Введите число');
  inp = Number(inpt);
  totl = Number(totl);
  console.log(typeof totl);
  totl = Number(totl) + Number(inpt);
} while (inpt != null);
alert(totl);
