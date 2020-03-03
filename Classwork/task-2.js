// =============================================================================
// Задание 2
// =============================================================================
/**
 * Перевернуть строку
 * Написать функцию которая возвращает перевернутую строку
 */

const reverseString = function(string) {
  let i;
  let convert = '';
  for (i = string.length - 1; i >= 0; i -= 1) {
    convert = convert + string[i];
  }
  console.log(convert);
};

reverseString('hello'); // "olleh".
reverseString('Howdy'); // "ydwoH".
reverseString('Greetings from Earth'); // "htraE morf sgniteerG".
