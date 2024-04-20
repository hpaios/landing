/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


window.addEventListener('load', function (e) {
  e.preventDefault();
  var lang = localStorage.getItem('lang');
  lang === 'uk' ? changeLanguageUK() : changeLanguageRU();
});
var changeLanguageUK = function changeLanguageUK() {
  var ruLang = document.getElementsByClassName("ru-lang");
  var ukLang = document.getElementsByClassName("uk-lang");
  localStorage.setItem('lang', 'uk');
  for (var i = 0; i < ukLang.length; i++) {
    ukLang[i].style.display = 'inline-block';
    ruLang[i].style.display = 'none';
  }
};
var changeLanguageRU = function changeLanguageRU() {
  var ruLang = document.getElementsByClassName("ru-lang");
  var ukLang = document.getElementsByClassName("uk-lang");
  localStorage.setItem('lang', 'ru');
  for (var i = 0; i < ukLang.length; i++) {
    ruLang[i].style.display = 'inline-block';
    ukLang[i].style.display = 'none';
  }
};
var ukLang = document.getElementById('uk-lang');
ukLang.addEventListener('click', changeLanguageUK);
var ruLang = document.getElementById('ru-lang');
ruLang.addEventListener('click', changeLanguageRU);
/******/ })()
;