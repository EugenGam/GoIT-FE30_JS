const china = 'КИТАЙ';
const chili = 'ЧИЛИ';
const australia = 'АВСТРАЛИЯ';
const india = 'ИНДИЯ';
const jamayka = 'ЯМАЙКА';
let alertMessage = '';
let shipmentPrice;
let input = prompt('Введите страну доставки');
input = input.toUpperCase();
switch (input) {
  case china:
    shipmentPrice = '100';
    break;
  case chili:
    shipmentPrice = '250';
    break;
  case australia:
    shipmentPrice = '170';
    break;
  case india:
    shipmentPrice = '80';
    break;
  case jamayka:
    shipmentPrice = '120';
    break;
  default:
}
if (input != null && shipmentPrice != null) {
  console.log(input, shipmentPrice);
  alertMessage = `Доставка в ${input} будет стоить ${shipmentPrice} кредитов`;
  console.log(alertMessage);
  alert(alertMessage);
} else {
  alert('Доставка в данную страну невозможна');
}
