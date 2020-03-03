// =============================================================================
// Задание 4
// =============================================================================
/**
 * Подтвердите окончание строки
 * Проверьте, заканчивается ли строка (первый аргумент, str)
 * заданной целевой строкой (второй аргумент, target).
 */

const confirmEnding = function(stringFirst, stringSec) {
  console.log(stringFirst.slice(-stringSec.length).includes(stringSec));
};
confirmEnding('Bastian', 'n'); // true.
confirmEnding('Congratulation', 'on'); // true.
confirmEnding('Open sesame', 'same'); // true.
confirmEnding('Open sesame', 'pen'); // false.
