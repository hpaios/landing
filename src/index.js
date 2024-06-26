import './styles/styles.scss';
import './fonts/fonts.scss';

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

const setLang = () => {
  const lang = localStorage.getItem('lang');
  lang === 'ua' ? changeLanguageUA() : changeLanguageRU();
}

const toggleLang = () => {
  const lang = localStorage.getItem('lang');
  lang === 'ua' ? changeLanguageRU() : changeLanguageUA();
}

window.addEventListener('load',  setLang);

const uaLang = document.getElementById('ua-lang');
uaLang.addEventListener('click',changeLanguageUA)

const ruLang = document.getElementById('ru-lang');
ruLang.addEventListener('click', changeLanguageRU);

const switchLang = document.getElementById('switch-lang');
switchLang.addEventListener('click',  toggleLang);

// phone mask
const phoneRU = document.getElementById('tel-ru');
const phoneUA = document.getElementById('tel-ua');

const prefixNumber = (str) => {
  return `${str} (`;
};

const addMask = (input) => {
  const value = input.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result = '+';

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(value[i]);
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  input.value = result;
}

phoneRU.addEventListener("input", () => addMask(phoneRU));
phoneUA.addEventListener("input", () => addMask(phoneUA));

document.addEventListener("DOMContentLoaded", function () {
  const scrollImages = document.getElementById("scroll-images");
  const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");
  
  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      rightButton.setAttribute("disabled", "true");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }

  scrollImages.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    scrollImages.scrollBy({
      left: -700,
      behavior: "smooth"
    });
  }

  function rightScroll() {
    scrollImages.scrollBy({
      left: 700,
      behavior: "smooth"
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});
