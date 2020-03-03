// =============================================================================
// Задание 7
// =============================================================================
/**
 * Пропущенные буквы
 * Найдите пропущенную букву в диапазоне букв и верните ее.
 */
const fearNotLetter = function(string) {
  const alf = 'abcdefghijklmnopqrstuvwxyz';
  const l = 0;
  for (let l = 0; l < alf.length; l += 1) {
    if ((alf[l] = string[0])) {
      count = l;
      break;
    }
  }
  for (let i = l; i < string.length; i += 1) {
    if (string[i] !== alf[i]) {
      console.log(alf[i]);
      break;
    }
  }
};
fearNotLetter('abce'); // "d"
fearNotLetter('abcdefghjklmno'); // "i"
fearNotLetter('stvwx'); // "u"
fearNotLetter('bcdf'); // "e"
fearNotLetter('abcdefghijklmnopqrstuvwxyz'); // undefined
