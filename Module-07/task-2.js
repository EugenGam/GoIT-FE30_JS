const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let lish = [];
ingredients.forEach(element => {
  let text = element;
  element = document.createElement('li');
  element.textContent = text;
  lish.push(element);
});

document.getElementById('ingredients').append(...lish);
