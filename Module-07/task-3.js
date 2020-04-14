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
let string = '';
const gal = document.getElementById('gallery');

images.forEach(element => {
  string =
    string +
    ` <li class="items"><img class="img" src="${element.url}" alt="${element.alt}"></li>`;
});

gal.insertAdjacentHTML('afterbegin', `${string}`);

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
