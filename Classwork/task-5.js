// =============================================================================
// Задание 5
// =============================================================================
/**
 * Повторить строку Повторить строку
 * Повторите данную строку str (первый аргумент) num раз (второй аргумент).
 * Вернуть пустую строку, если num не является положительным числом.
 */
const repeatStringNumTimes = function(string, val) {
  let result = '';
  for (let i = 1; i <= val; i += 1) {
    result = result + string;
  }
  console.log(result);
};
repeatStringNumTimes('*', 3); // "***"
repeatStringNumTimes('abc', 3); // "abcabcabc"
repeatStringNumTimes('abc', 1); // "abc"
repeatStringNumTimes('abc', -2); // ""
