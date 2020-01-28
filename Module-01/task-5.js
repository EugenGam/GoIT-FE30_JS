const china = 'КИТАЙ';
const chili = 'ЧИЛИ';
const australia = 'АВСТРАЛИЯ';
const india = 'ИНДИЯ';
const jamayka = 'ЯМАЙКА';
let alertMessage = '';
let country;
let shipmentPrice;
let input = prompt('Введите страну доставки');
input = input.toUpperCase();
switch (input) {
  case china:
    shipmentPrice = '100';
    country = china;
    break;
  case chili:
    shipmentPrice = '250';
    country = chili;
    break;
  case australia:
    shipmentPrice = '170';
    country = australia;
    break;
  case india:
    shipmentPrice = '80';
    country = india;
    break;
  case jamayka:
    shipmentPrice = '120';
    country = jamayka;
    break;
  default:
}
if (country != null && shipmentPrice != null) {
  console.log(country, shipmentPrice);
  alertMessage = `Доставка в ${country} будет стоить ${shipmentPrice} кредитов`;
  console.log(alertMessage);
  alert(alertMessage);
} else {
  alert('Доставка в данную страну невозможна');
}
