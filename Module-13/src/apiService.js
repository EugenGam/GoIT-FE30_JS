const refs = {
  pixaby: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
  key: '&key=16377797-6d9ebd48227d507be381d4be6',
  form: document.querySelector('.search-form'),
  list: document.querySelector('.gallery'),
  btn: document.querySelector('.findBtn'),
  input: document.querySelector('.inpt'),
  gallery: document.querySelector('.js-gallery'),
  addMore: document.querySelector('.add__more '),
  up: document.querySelector('.up'),
};

let counter = 1;
let pos = 0;

function makeVisible() {
  refs.up.classList.add('visible');
  refs.addMore.classList.add('visible');
}

function makeUnVisible() {
  refs.up.classList.remove('visible');
  refs.addMore.classList.remove('visible');
}

const render = obj => {
  obj.hits.forEach(img => {
    refs.gallery.insertAdjacentHTML(
      'beforeend',
      `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${img.largeImageURL}"
    >
      <img
        class="gallery__image"
        src="${img.webformatURL}"
        data-source="${img.largeImageURL}"
        alt="${img.tags}"
      />
    </a>
    <div class="stats">
      <p class="stats-item">
        <i class="material-icons">thumb_up</i>
        ${img.likes}
      </p>
      <p class="stats-item">
        <i class="material-icons">visibility</i>
        ${img.views}
      </p>
      <p class="stats-item">
        <i class="material-icons">comment</i>
        ${img.comments}
      </p>
      <p class="stats-item">
        <i class="material-icons">cloud_download</i>
        ${img.downloads}
      </p>
    </div>
  </li>`,
    );
  });
};
let currentValue = '';
const imageLoad = () => {
  console.log(refs.input.value);
  if (refs.input.value !== currentValue) {
    currentValue = refs.input.value;
    refs.gallery.innerHTML = '';
    makeUnVisible();
    pos = 0;
  }
  fetch(
    `${refs.pixaby}&q=${refs.input.value}&page=${counter}&per_page=12${refs.key}`,
  )
    .then(res => res.json())
    .then(obj => render(obj))
    .then(obj => {
      window.scrollTo(0, pos);
      makeVisible();
      pos += 1000;
    });
  counter += 1;
};

refs.btn.addEventListener('click', imageLoad);
refs.addMore.addEventListener('click', imageLoad);
refs.up.addEventListener('click', function() {
  window.scrollTo(0, 0);
});

refs.input.addEventListener('keydown', function(event) {
  if (event.which == 13 || event.keyCode == 13) {
    event.preventDefault();
    imageLoad();
  }
});

