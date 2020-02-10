const productss = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
  const [arr1, arr2, arr3, arr4] = allProdcuts;
  let sum = 0;
  for (let element of allProdcuts) {
    const obj = Object(element);
    if (obj.name === productName) {
      let sum = obj.price * obj.quantity;
      return sum;
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(productss, 'Радар')); // 5200

console.log(calculateTotalPrice(productss, 'Дроид')); // 2800
