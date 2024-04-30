import './styles/styles.scss';
import './fonts/fonts.scss';

window.addEventListener('load', () => {
  const lang = localStorage.getItem('lang');
  lang === 'ua' ? changeLanguageUA() : changeLanguageRU();
})

const nav = document.getElementById('menu-toggle');
nav.addEventListener('click', () => {
  nav.classList.toggle('open');
})

const navLinks = document.getElementById('list-links').getElementsByTagName('a');
for(let i = 0; i < navLinks.length; ++i) {
  navLinks[i].addEventListener('click', () => {
    nav.classList.remove('open');
  });
}

const changeLanguageUA = () => { 
  const ruLang = document.getElementsByClassName("ru-lang");
  const uaLang = document.getElementsByClassName("ua-lang");
  localStorage.setItem('lang', 'ua');
  nav.classList.remove('open');
  for (let i = 0; i < uaLang.length; i++) {
    uaLang[i].style.display = 'inline-block';
    ruLang[i].style.display = 'none';
  }
};

const changeLanguageRU = () => { 
  const ruLang = document.getElementsByClassName("ru-lang");
  const uaLang = document.getElementsByClassName("ua-lang");
  localStorage.setItem('lang', 'ru');
  nav.classList.remove('open');
  for (let i = 0; i < uaLang.length; i++) {
    ruLang[i].style.display = 'inline-block';
    uaLang[i].style.display = 'none';
  }
};

const uaLang = document.getElementById('ua-lang');
const uaLangs = document.getElementById('ua-langs');
uaLang.addEventListener('click',changeLanguageUA)
uaLangs.addEventListener('click',changeLanguageUA)

const ruLang = document.getElementById('ru-lang');
const ruLangs = document.getElementById('ru-langs');
ruLang.addEventListener('click', changeLanguageRU);
ruLangs.addEventListener('click', changeLanguageRU);