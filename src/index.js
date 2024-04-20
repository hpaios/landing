import './styles/styles.scss';
import './fonts/fonts.scss';

window.addEventListener('load', (e) => {
  e.preventDefault();
  const lang = localStorage.getItem('lang');
  lang === 'uk' ? changeLanguageUK() : changeLanguageRU();
})

const changeLanguageUK = () => { 
  const ruLang = document.getElementsByClassName("ru-lang");
  const ukLang = document.getElementsByClassName("uk-lang");
  localStorage.setItem('lang', 'uk');
  for (let i = 0; i < ukLang.length; i++) {
    ukLang[i].style.display = 'inline-block';
    ruLang[i].style.display = 'none';
  }
};

const changeLanguageRU = () => { 
  const ruLang = document.getElementsByClassName("ru-lang");
  const ukLang = document.getElementsByClassName("uk-lang");
  localStorage.setItem('lang', 'ru');
  for (let i = 0; i < ukLang.length; i++) {
    ruLang[i].style.display = 'inline-block';
    ukLang[i].style.display = 'none';
  }
};

const ukLang = document.getElementById('uk-lang');
ukLang.addEventListener('click', changeLanguageUK)

const ruLang = document.getElementById('ru-lang');
ruLang.addEventListener('click', changeLanguageRU)