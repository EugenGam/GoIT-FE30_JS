const gallery = document.querySelector('.js-gallery');

function openImage(event) {
  event.preventDefault();
  let target = event.target;
  const url = target.dataset.source;
  document.querySelector('div.lightbox').classList.add('is-open');
  document.querySelector('.lightbox__image').src = `${url}`;
}

gallery.addEventListener('click', openImage);

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
