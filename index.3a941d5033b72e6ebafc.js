/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


window.addEventListener('load', function () {
  var lang = localStorage.getItem('lang');
  lang === 'ua' ? changeLanguageUA() : changeLanguageRU();
});
var changeLanguageUA = function changeLanguageUA() {
  var ruLang = document.getElementsByClassName("ru-lang");
  var uaLang = document.getElementsByClassName("ua-lang");
  localStorage.setItem('lang', 'ua');
  for (var i = 0; i < uaLang.length; i++) {
    uaLang[i].style.display = 'inline-block';
    ruLang[i].style.display = 'none';
  }
};
var changeLanguageRU = function changeLanguageRU() {
  var ruLang = document.getElementsByClassName("ru-lang");
  var uaLang = document.getElementsByClassName("ua-lang");
  localStorage.setItem('lang', 'ru');
  for (var i = 0; i < uaLang.length; i++) {
    ruLang[i].style.display = 'inline-block';
    uaLang[i].style.display = 'none';
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