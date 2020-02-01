const pricePerDroid = 3000;
let credits = 23580;
<<<<<<< HEAD
const answer = prompt('Сколько дроидов вы желаете купить?');
=======
const droidQty = prompt('Сколько дроидов вы желаете купить?');
>>>>>>> 75fa56064fe3e0a7997e71dbcb1189cde13d0a22
let droidTotalPrice = 0;
let text;
const droidQty = answer;
droidTotalPrice = droidQty * pricePerDroid;
if (droidTotalPrice > credits) {
  alert('Недостаточно средств');
<<<<<<< HEAD
} else if (answer == null) {
=======
} else if (droidQty == null) {
>>>>>>> 75fa56064fe3e0a7997e71dbcb1189cde13d0a22
  alert('Отменено пользователем');
} else {
  credits -= droidTotalPrice;
  text = `Вы купили ${droidQty} дроидов, на счету осталось: ${credits}`;
  alert(text);
}
