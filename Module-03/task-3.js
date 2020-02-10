const findBestEmployee = function(employees) {
  let bestRes = 0;
  let bestEmpl = '';

  const row = Object.entries(employees);

  for (const element of row) {
    const key = element[0];
    const value = element[1];
    if (bestRes < value) {
      bestRes = value;
      bestEmpl = key;
    }
  }

  return bestEmpl;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
