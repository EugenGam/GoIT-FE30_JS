const checkForSpam = function(message) {
  let answ;
  message = message.toUpperCase();
  const spam = message.indexOf('SPAM', 0);
  console.log(spam);
  const sale = message.indexOf('SALE', 0);
  console.log(sale);
  if (spam < 0 && sale < 0) {
    answ = 'false';
  } else {
    answ = 'true';
  }
  return answ;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?'));
