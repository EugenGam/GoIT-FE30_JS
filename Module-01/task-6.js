let totl = 0;
let inpt;

do {
  inpt = prompt('Введите число');
<<<<<<< HEAD
  const inp = Number(inpt);
=======
  inp = Number(inpt);
>>>>>>> 75fa56064fe3e0a7997e71dbcb1189cde13d0a22
  console.log(typeof totl);
  totl += inp;
} while (inpt != null);
alert(totl);
