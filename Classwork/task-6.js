// =============================================================================
// Задание 6
// =============================================================================
/**
 * Разница двух массивов
 * Сравните два массива и верните новый массив с элементами,
 * найденными только в одном из двух указанных массивов, но не в обоих.
 * Другими словами, вернуть симметричную разность двух массивов.
 */
const diffArray = function(arr1, arr2) {
  let good = '';
  let res = [];

  arr1.forEach(element1 => {
    if (!arr2.includes(element1)) {
      res.push(element1);
    }
  });
  arr2.forEach(element1 => {
    if (!arr1.includes(element1)) {
      res.push(element1);
    }
  });

  console.log(res);
};
diffArray(['diorite', 'andesite'], ['diorite', 'dirt']); // ["andesite", "dirt"].
diffArray([1, 2, 3], [1, 2, 4]); // [3, 4]
diffArray(['andesite', 'grass'], ['andesite', 'grass']); // []
