/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


window.addEventListener('load', function () {
  var lang = localStorage.getItem('lang');
  lang === 'ua' ? changeLanguageUA() : changeLanguageRU();
});
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
  nav.classList.remove('open');
  for (var _i2 = 0; _i2 < uaLang.length; _i2++) {
    ruLang[_i2].style.display = 'inline-block';
    uaLang[_i2].style.display = 'none';
  }
};
var uaLang = document.getElementById('ua-lang');
var uaLangs = document.getElementById('ua-langs');
uaLang.addEventListener('click', changeLanguageUA);
uaLangs.addEventListener('click', changeLanguageUA);
var ruLang = document.getElementById('ru-lang');
var ruLangs = document.getElementById('ru-langs');
ruLang.addEventListener('click', changeLanguageRU);
ruLangs.addEventListener('click', changeLanguageRU);
/******/ })()
;