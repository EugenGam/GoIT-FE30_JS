const countTotalSalary = function(employees) {
  let totalSal = 0;

  const arr = Object.values(employees);
  for (let i = 0; i < arr.length; i = i + 1) {
    totalSal = arr[i] + totalSal;
  }
  return totalSal;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
