/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


var nav = document.getElementById('menu-toggle');
nav.addEventListener('click', function () {
  nav.classList.toggle('open');
});
var navLinks = document.getElementById('list-links').getElementsByTagName('a');
for (var i = 0; i < navLinks.length; ++i) {
  navLinks[i].addEventListener('click', function () {
    nav.classList.remove('open');
  });
}
var changeLanguageUA = function changeLanguageUA() {
  var ruLang = document.getElementsByClassName("ru-lang");
  var uaLang = document.getElementsByClassName("ua-lang");
  localStorage.setItem('lang', 'ua');
  location.href = "".concat(window.location.pathname) + '#ua';
  // location.href = `${window.location.pathname}`;
  nav.classList.remove('open');
  for (var _i = 0; _i < uaLang.length; _i++) {
    uaLang[_i].style.display = 'inline-block';
    ruLang[_i].style.display = 'none';
  }
};
var changeLanguageRU = function changeLanguageRU() {
  var ruLang = document.getElementsByClassName("ru-lang");
  var uaLang = document.getElementsByClassName("ua-lang");
  localStorage.setItem('lang', 'ru');
  location.href = "".concat(window.location.pathname) + '#ru';
  // localStorage.setItem('lang', 'ru');
  // location.reload();
  nav.classList.remove('open');
  for (var _i2 = 0; _i2 < uaLang.length; _i2++) {
    ruLang[_i2].style.display = 'inline-block';
    uaLang[_i2].style.display = 'none';
  }
};
var setLang = function setLang() {
  var lang = localStorage.getItem('lang');
  lang === 'ua' ? changeLanguageUA() : changeLanguageRU();
};
var toggleLang = function toggleLang() {
  var lang = localStorage.getItem('lang');
  lang === 'ua' ? changeLanguageRU() : changeLanguageUA();
};
window.addEventListener('load', setLang);
var uaLang = document.getElementById('ua-lang');
uaLang.addEventListener('click', changeLanguageUA);
var ruLang = document.getElementById('ru-lang');
ruLang.addEventListener('click', changeLanguageRU);
var switchLang = document.getElementById('switch-lang');
switchLang.addEventListener('click', toggleLang);

// phone mask
var phoneRU = document.getElementById('tel-ru');
var phoneUA = document.getElementById('tel-ua');
var prefixNumber = function prefixNumber(str) {
  return "".concat(str, " (");
};
var addMask = function addMask(input) {
  var value = input.value.replace(/\D+/g, "");
  var numberLength = 11;
  var result = '+';
  for (var _i3 = 0; _i3 < value.length && _i3 < numberLength; _i3++) {
    switch (_i3) {
      case 0:
        result += prefixNumber(value[_i3]);
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
    result += value[_i3];
  }
  input.value = result;
};
phoneRU.addEventListener("input", function () {
  return addMask(phoneRU);
});
phoneUA.addEventListener("input", function () {
  return addMask(phoneUA);
});
document.addEventListener("DOMContentLoaded", function () {
  var scrollImages = document.getElementById("scroll-images");
  var scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
  var leftButton = document.getElementById("left");
  var rightButton = document.getElementById("right");
  function checkScroll() {
    var currentScroll = scrollImages.scrollLeft;
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

// const ruBtn = document.getElementById('ru-lang');
// console.log('ruBtn', ruBtn);
// ruBtn.addEventListener('click', () => {
//   location.href = `${window.location.pathname}` + 'ru';
//   localStorage.setItem('lang', 'ru');
//   location.reload();
// });

// const uaBtn = document.getElementById('ua-lang');
// uaBtn.addEventListener('click', () => {
//   location.href = ``;
//   localStorage.setItem('lang', 'ua');
//   location.reload();
// });
/******/ })()
;