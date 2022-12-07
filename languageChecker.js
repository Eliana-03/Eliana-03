"use strict";

var spanishContent = [];
var spanishParents = [];

var englishContent = [];
var englishParents = [];

var currentLang = "en";

var typer;

const changeLanguage = english => {
  console.log("change to english", english);
  if (english) {
    spanishContent = document.querySelectorAll("*[lang='es']");
    spanishContent.forEach(element => element.remove());

    englishParents.forEach((parent, index) => {
      parent.appendChild(englishContent[index]);
    });
  } else {
    englishContent = document.querySelectorAll("*[lang='en']");

    englishContent.forEach(element => element.remove());

    spanishParents.forEach((parent, index) => {
      parent.appendChild(spanishContent[index]);
    });
  }
};

const inicializarTyper = () => {
  if ($(".typed-space").length == 1) {
    console.log("jeje");
    var words = [
      "Hi, I'm Eli ",
      "Hola, soy Eli ",
      "안녕하세요, 제 이름은 엘리아나입니다",
      "Salut, je m'appelle Eli ",
      "Olá, eu sou o Eli ",
      "Hi, ich bin Eli ",
      "Ciao, sono Eli ",
      "Hoi, ik ben Eli ",
      "Witam, jestem Eli ",
      "Привет, я Илай"
    ];

    var options = {
      strings: words,
      typeSpeed: 110,
      loop: true,
      backDelay: 2000,
      backSpeed: 30
    };

    $(".typed-space").empty();

    // eslint-disable-next-line no-unused-vars
    typer = new Typed(".typed-space", options);
  }
};

const inicializar = () => {
  watchSidebar();

  spanishContent = document.querySelectorAll("*[lang='es']");
  englishContent = document.querySelectorAll("*[lang='en']");

  spanishContent.forEach(element => {
    var parent = element.parentElement;
    spanishParents.push(parent);
    parent.removeChild(element);
  });

  englishContent.forEach(element => {
    var parent = element.parentElement;
    englishParents.push(parent);
  });

  inicializarTyper();
}

const enButton = document.querySelector("#enButton");
const esButton = document.querySelector("#esButton");
if (enButton && esButton) {
  esButton.addEventListener("click", () => {
    if (currentLang != "es") {
      changeLanguage(false);
      currentLang = "es";
    }
  });

  enButton.addEventListener("click", () => {
    if (currentLang != "en") {
      changeLanguage(true);
      currentLang = "en";
    }
  });

}

window.onload = inicializar();