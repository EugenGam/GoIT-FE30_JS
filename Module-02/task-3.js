const findLongestWord = function(string) {
  const arrayString = string.split(' ');
  let countlongestWord = 0;
  let longestWord;
  for (let i = 0; i < arrayString.length; i += 1) {
    if (arrayString[i].length > countlongestWord) {
      longestWord = arrayString[i];
      countlongestWord = arrayString[i].length;
    }
  }
  return longestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
