// =============================================================================
// Задание 3
// =============================================================================
/**
 * Найдите самое длинное слово в строке
 * Написать функцию которая возвращает длину самого длинного слова в предложении
 */

const findLongestWordLength = function(string) {
  const arr = string.split(' ');
  let len = 0;
  let result = arr.forEach(element => {
    if (len < element.length) {
      len = element.length;
    }
    return len;
  });
  console.log(len);
};

findLongestWordLength('The quick brown fox jumped over the lazy dog'); // 6
findLongestWordLength('May the force be with you'); // 5
findLongestWordLength('Google do a barrel roll'); // 6
findLongestWordLength(
  'What is the average airspeed velocity of an unladen swallow',
); // 8
findLongestWordLength(
  'What if we try a super-long word such as otorhinolaryngology',
); // 19
