const count = document.getElementById('categories').childElementCount;
console.log(`В списке ${count} категории.`);

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

for (let i = 0; i < count; i++) {
  const countFun = () => {
    const a = document.querySelectorAll('.item')[i].querySelector('ul')
      .childElementCount;
    return a;
  };
  const textFun = () => {
    const a = document.querySelectorAll('.item')[i].querySelector('h2')
      .textContent;
    return a;
  };
  console.log(`Категория: ${textFun()}
  Количество елементов: ${countFun()}`);
}
let lish = [];

for (let i = 0; i < ingredients.length; i++) {
  lish[i] = document.createElement('li');
  lish[i].textContent = ingredients[i];
}

const ing = document.getElementById('ingredients');
lish.forEach(element => {
  ing.appendChild(element);
});

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gal = document.getElementById('gallery');
images.forEach(element => {
  gal.insertAdjacentHTML(
    'afterbegin',
    `<li class="items"><img class="img" src="${element.url}" alt="${element.alt}"></li>`,
  );
});

const items = document.querySelectorAll('.items');
items.forEach(element => {
  element.style.marginBottom = '10px';
  element.style.display = 'flex';
  element.style.justifyContent = 'center';
});

const img = document.querySelectorAll('.img');
img.forEach(element => {
  element.style.width = '50%';
});

let counterValue = 0;

const cntr = document.querySelector('#value');

const increment = () => {
  counterValue += 1;
  cntr.textContent = `${counterValue}`;
};

const decrement = () => {
  counterValue -= 1;
  cntr.textContent = `${counterValue}`;
};

document
  .querySelector('[data-action="decrement"]')
  .addEventListener('click', decrement);
document
  .querySelector('[data-action="increment"]')
  .addEventListener('click', increment);

const inpt = document.querySelector('#name-input');
const outpt = document.querySelector('#name-output');

const updateOutput = e => {
  outpt.textContent = e.target.value;
};

inpt.addEventListener('input', updateOutput);
