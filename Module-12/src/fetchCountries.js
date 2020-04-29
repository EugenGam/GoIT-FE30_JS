const nameLink = 'https://restcountries.eu/rest/v2/name/';
const result = document.querySelector('.result');
const list = document.querySelector('.countriesList');
const input = document.querySelector('.input');
const not = document.querySelector('.notify');
const countyInfo = document.querySelector('.country_info');
const debounce = require('lodash.debounce');

const clearAll = () => {
  countyInfo.classList.remove('visible');
  list.classList.remove('visible');
  not.classList.remove('visible');
  result.textContent = '';
  list.innerHTML = '';
  countyInfo.innerHTML = '';
};

const render = obj => {
  countyInfo.classList.add('visible');
  countyInfo.insertAdjacentHTML(
    'afterbegin',
    `<h2 class="info__name">${obj.name}</h2>
      <div class="info__cont">
        <div class="info__text">
        <p>Capital: <span class="tags">${obj.capital}</span></p>
        <p>Population: <span class="tags">${obj.population}</span></p>  
        <p>Languages:</p>      
        <ul class="lang__list">
        </ul>
      </div>
      <img class="info__pic" src="${obj.flag}" alt="country flag">
      </div>`,
  );
  obj.languages.forEach(el =>
    document
      .querySelector('.lang__list')
      .insertAdjacentHTML('afterbegin', `<li class="lang">${el.name}</li>`),
  );
};

const getCountries = text => {
  clearAll();
  if (text.target.value.length > 0) {
    fetch(nameLink + text.target.value)
      .then(response => response.json())
      .then(res => {
        if (res.length > 10) {
          not.classList.add('visible');
        } else if (res.length > 1) {
          res.forEach(el => {
            list.classList.add('visible');
            list.insertAdjacentHTML(
              'beforeend',
              `<li class="countriesList__element">${el.name}</li>`,
            );
          });
        } else if (res.length === 1) {
          render(res[0]);
        } else {
          result.textContent = 'No results... try again';
        }
      });
  }
};

const openSelect = e => {
  clearAll();
  e.stopPropagation();
  const targ = e.target;
  fetch(nameLink + targ.textContent)
    .then(res => res.json())
    .then(res => render(res[0]))
    .then((input.value = targ.textContent));
};

input.addEventListener('input', debounce(getCountries, 500));
list.addEventListener('click', openSelect);
