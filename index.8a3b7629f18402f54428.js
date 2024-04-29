/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


window.addEventListener('load', function () {
  // e.preventDefault();
  var lang = localStorage.getItem('lang');
  lang === 'ua' ? changeLanguageUA() : changeLanguageRU();

  // const toggle = document.getElementById('menu-toggle');
  // const body = document.getElementsByTagName('body');
  // console.log('aaa')
  // if(toggle.checked) {  
  //   console.log('bbbb')
  //  body[0].style.overflowY = 'hidden';
  // } else {
  //   body[0].style.overflowY = 'auto';
  // }
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

// const fixScrollBody = () => {
//   const body = document.getElementsByTagName('body');
//   body[0].style.overflowY = 'hidden';
// }

var uaLang = document.getElementById('ua-lang');
uaLang.addEventListener('click', changeLanguageUA);
var ruLang = document.getElementById('ru-lang');
ruLang.addEventListener('click', changeLanguageRU);

// const body = document.getElementsByTagName('body');
// const toggle = document.getElementById('menu-toggle');
// toggle.addEventListener('change', function(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   body[0].style.overflow = 'hidden';
//   console.log('toggle.checked', toggle.checked)
//   if (toggle.checked) {
//     body[0].style.overflow = 'hidden';
//   } else {
//     body[0].style.overflow = 'auto';   
//   }
// });
/******/ })()
;