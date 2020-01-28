const pricePerDroid = 3000;
let credits = 23580;
const droidQty = prompt('Сколько дроидов вы желаете купить?');
Number(droidQty);
let droidTotalPrice = 0;
let text;
droidTotalPrice = droidQty * pricePerDroid;
if (droidTotalPrice > credits) {
  alert('Недостаточно средств');
} else if (droidQty === null) {
  alert('Отменено пользователем');
} else {
  credits -= droidTotalPrice;
  String(droidQty);
  String(credits);
  text = `Вы купили ${droidQty} дроидов, на счету осталось: ${credits}`;
  alert(text);
}
