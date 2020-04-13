import './styles.css';
import menu from './menu.json';
import menuTemplate from './templates/handlebar.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyTheme = document.querySelector('body');
const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('afterbegin', menuTemplate(menu));

function checkedTrue() {
  document.querySelector('.js-switch-input').checked = true;
}

if (localStorage.getItem('theme') === 'dark-theme') {
  bodyTheme.classList.toggle(Theme.DARK);
  checkedTrue();
}

const changeTheme = () => {
  bodyTheme.classList.toggle(Theme.DARK);
  if (bodyTheme.classList == Theme.DARK) {
    localStorage.setItem('theme', 'dark-theme');
    checkedTrue();
  } else {
    localStorage.setItem('theme', 'light-theme');
  }
};
document
  .querySelector('.js-switch-input')
  .addEventListener('change', changeTheme);
