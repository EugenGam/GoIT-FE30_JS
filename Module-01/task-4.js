const pricePerDroid = 3000;
let credits = 23580;
const answer = prompt('Сколько дроидов вы желаете купить?');
let droidTotalPrice = 0;
let text;
const droidQty = +answer;
droidTotalPrice = droidQty * pricePerDroid;
if (droidTotalPrice > credits) {
  alert('Недостаточно средств');
} else if (answer == null) {
  alert('Отменено пользователем');
} else {
  credits -= droidTotalPrice;
  text = `Вы купили ${droidQty} дроидов, на счету осталось: ${credits}`;
  alert(text);
}

