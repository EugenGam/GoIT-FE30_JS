import photos from './gallery-items.js';
const gallery = document.querySelector('.js-gallery');

const adding = arr => {
  arr.forEach(element => {
    gallery.insertAdjacentHTML(
      'beforeend',
      `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${element.original}"
    >
      <img
        class="gallery__image"
        src="${element.preview}"
        data-source="${element.original}"
        alt="${element.description}"
      />
    </a>
  </li>`,
    );
  });
};
adding(photos);

function openImage(event) {
  event.preventDefault();
  let target = event.target;
  let url = target.dataset.source;
  document.querySelector('div.lightbox').classList.add('is-open');
  document.querySelector('.lightbox__image').src = `${url}`;
}

gallery.addEventListener('click', openImage);

document.addEventListener('keydown', function(e) {
  const key = e.key;
  let next;
  let prev;
  const prevUrl = document.querySelector('.lightbox__image').src;
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].original === prevUrl) {
      if (i === 0) {
        next = photos[i + 1].original;
        prev = photos[i].original;
      } else if (i === photos.length - 1) {
        prev = photos[i - 1].original;
        next = photos[i].original;
      } else {
        prev = photos[i - 1].original;
        next = photos[i + 1].original;
      }
    }
  }
  if (key === 'ArrowRight') {
    document.querySelector('.lightbox__image').src = next;
  } else if (key === 'ArrowLeft') {
    document.querySelector('.lightbox__image').src = prev;
  }
});

function closeImage() {
  document.querySelector('div.lightbox').classList.remove('is-open');
  document.querySelector('.lightbox__image').src = '';
}

document
  .querySelector('.lightbox__button')
  .addEventListener('click', closeImage);

document
  .querySelector('.lightbox__overlay')
  .addEventListener('click', closeImage);

document.addEventListener('keydown', function(e) {
  const key = e.key;
  if (key === 'Escape') {
    closeImage();
  }
});
