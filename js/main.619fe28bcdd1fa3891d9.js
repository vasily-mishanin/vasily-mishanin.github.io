/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 370:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/99fbf8a21dcf52f084a4.png";

/***/ }),

/***/ 389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/02de830c8a72cf63608d.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ../node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(370);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(338), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(389), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <link rel=\"shortcut icon\" type=\"image/png\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"/> <title>Mishanin</title> </head> <body> <main class=\"resume\"> <section class=\"resume__cv\"> <div class=\"controls\"> <span id=\"controls__lang_en\" class=\"controls__lang active__lang\">EN</span> <span id=\"controls__lang_ru\" class=\"controls__lang\">RU</span> </div> <header class=\"resume__header\"> <div class=\"resume__profile-picture\"> <img class=\"resume__profile-picture_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"photo\"/> </div> <div class=\"resume__profile-title\"> <h1 class=\"resume__name\" data-i18n-key=\"name\">Vasily Mishanin</h1> <h2 class=\"resume__position\" data-i18n-key=\"position\"> Frontend Developer </h2> </div> </header> <section class=\"resume_cv-information\"> <div class=\"cv-block\"> <div class=\"heading\"> <span class=\"heading__icon summary\"></span> <span class=\"heading__title\" data-i18n-key=\"professionalSummary\">Professional Summary</span> </div> <div class=\"cv-block__content\"> <div class=\"cv-block__graph\"> <span class=\"circle filled\"> </span> </div> <div class=\"cv-block__text\" data-i18n-key=\"professionalSummaryText\"> Driven self-taught student leveraging studies in Frontend development seeks real-world experience as trainee/junior. Offers strong interpersonal and task prioritization skills, eager to learn new and develop cool stuff for all people. Coding for me is a whole new chapter of life. </div> </div> </div> <div class=\"cv-block\"> <div class=\"heading\"> <span class=\"heading__icon work\"></span> <span class=\"heading__title\" data-i18n-key=\"workHistory\">Work History</span> </div> <div class=\"cv-block__content\"> <div class=\"cv-block__graph\"> <span class=\"circle filled\"> </span> </div> <div class=\"cv-block__text\"> <p class=\"strong\" data-i18n-key=\"workHistoryLastTitle\"> Radio engineer </p> <p data-i18n-key=\"workHistoryLastLocation\">Tambov, Russia</p> <p data-i18n-key=\"workHistoryPosition\"> (applied to resign in Feb 2022) </p> </div> </div> </div> <div class=\"cv-block\"> <div class=\"heading\"> <span class=\"heading__icon education\"></span> <span class=\"heading__title\" data-i18n-key=\"education\">Education</span> </div> <div class=\"cv-block__content\"> <div class=\"cv-block__graph\"> <span class=\"date-badge\">2010-06</span> </div> <div class=\"cv-block__text\"> <p class=\"strong\" data-i18n-key=\"educationDiploma\"> High School Diploma </p> <p data-i18n-key=\"educationUniversity\"> Military Institute of Radio-electronics - Voronezh </p> </div> </div> </div> <div class=\"cv-block\"> <div class=\"heading\"> <span class=\"heading__icon certifications\"></span> <span class=\"heading__title\" data-i18n-key=\"certifications\">Certifications</span> </div> <div class=\"cv-block__content\"> <div class=\"cv-block__graph\"> <span class=\"date-badge\">2020-05</span> </div> <div class=\"cv-block__text italic\"> Complete Web Development Bootcamp, App Brewery, Udemy </div> </div> <div class=\"cv-block__content\"> <div class=\"cv-block__graph\"> <span class=\"date-badge\">2021-05</span> </div> <div class=\"cv-block__text italic\"> DataArt Javascript Academy </div> </div> <div class=\"cv-block__content\"> <div class=\"cv-block__graph\"> <span class=\"date-badge\">2022-02</span> </div> <div class=\"cv-block__text italic\"> React - The complete Guide, Academind, Udemy </div> </div> </div> <div class=\"cv-block\"> <div class=\"heading\"> <span class=\"heading__icon hobbies\"></span> <span class=\"heading__title\" data-i18n-key=\"hobbiesTitle\">Hobbies</span> </div> <div class=\"cv-block__content\"> <div class=\"cv-block__graph\"> <span class=\"circle filled\"></span> </div> <div class=\"cv-block__text\" data-i18n-key=\"hobbiesText\"> Cross country biking, hiking, yoga </div> </div> </div> </section> </section> <section class=\"resume__data\"> <div class=\"contact-block\"> <div class=\"heading\"> <span class=\"heading__icon contact\"></span> <span class=\"heading__title\" data-i18n-key=\"contact\">Contact</span> </div> <div class=\"contact-block__content\"> <a href=\"tel:+79204955345\"> <div class=\"contact-block__item\"> <div class=\"contact-block__icon phone\"></div> <div class=\"contact-block__text\">+79204955345</div> </div> </a> <a href=\"mailto:vasilymishanin@gmail.com\"> <div class=\"contact-block__item\"> <div class=\"contact-block__icon email\"></div> <div class=\"contact-block__text\">vasilymishanin@gmail.com</div> </div> </a> <a href=\"https://twitter.com/MishaninVasily\"> <div class=\"contact-block__item\"> <div class=\"contact-block__icon twitter\"></div> <div class=\"contact-block__text\">@MishaninVasily</div> </div> </a> <a href=\"https://github.com/vasily-mishanin\"> <div class=\"contact-block__item\"> <div class=\"contact-block__icon github\"></div> <div class=\"contact-block__text\"> https://github.com/vasily-mishanin </div> </div> </a> <a href=\"https://vasily-mishanin.github.io\"> <div class=\"contact-block__item\"> <div class=\"contact-block__icon web\"></div> <div class=\"contact-block__text\"> https://vasily-mishanin.github.io </div> </div> </a> <a href=\"https://goo.gl/maps/zU3SHdTjUMgzni467\"> <div class=\"contact-block__item\"> <div class=\"contact-block__icon location\"></div> <div class=\"contact-block__text\"> <p data-i18n-key=\"locationTmb\">Tambov, TMB, 392000</p> <p data-i18n-key=\"locationVrn\">Voronezh, VRN, 394000</p> </div> </div> </a> </div> </div> <div class=\"skills\"> <div class=\"heading\"> <span class=\"heading__icon skills-icon\"></span> <span class=\"heading__title\" data-i18n-key=\"skills\">Skills</span> </div> <ul class=\"skills__list\"> <li class=\"skill\"> <h4 class=\"skill__name\">HTML</h4> <div class=\"skill__level\"> <div class=\"skill__level_indicator\"> <span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle\"></span><span class=\"circle\"></span> </div> <p class=\"skill__level_name\">Good</p> </div> </li> <li class=\"skill\"> <h4 class=\"skill__name\">CSS/SCSS</h4> <div class=\"skill__level\"> <div class=\"skill__level_indicator\"> <span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle\"></span><span class=\"circle\"></span> </div> <p class=\"skill__level_name\">Good</p> </div> </li> <li class=\"skill\"> <h4 class=\"skill__name\">Javascript</h4> <div class=\"skill__level\"> <div class=\"skill__level_indicator\"> <span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle\"></span><span class=\"circle\"></span> </div> <p class=\"skill__level_name\">Good</p> </div> </li> <li class=\"skill\"> <h4 class=\"skill__name\">Typescript</h4> <div class=\"skill__level\"> <div class=\"skill__level_indicator\"> <span class=\"circle filled\"></span><span class=\"circle\"></span><span class=\"circle\"></span><span class=\"circle\"></span><span class=\"circle\"></span> </div> <p class=\"skill__level_name\">Basic</p> </div> </li> <li class=\"skill\"> <h4 class=\"skill__name\">React/Redux</h4> <div class=\"skill__level\"> <div class=\"skill__level_indicator\"> <span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle\"></span><span class=\"circle\"></span> </div> <p class=\"skill__level_name\">Good</p> </div> </li> <li class=\"skill\"> <h4 class=\"skill__name\">Next.js</h4> <div class=\"skill__level\"> <div class=\"skill__level_indicator\"> <span class=\"circle filled\"></span><span class=\"circle\"></span><span class=\"circle\"></span><span class=\"circle\"></span><span class=\"circle\"></span> </div> <p class=\"skill__level_name\">Basic</p> </div> </li> <li class=\"skill\"> <h4 class=\"skill__name\">Git/github</h4> <div class=\"skill__level\"> <div class=\"skill__level_indicator\"> <span class=\"circle filled\"></span><span class=\"circle\"></span><span class=\"circle\"></span><span class=\"circle\"></span><span class=\"circle\"></span> </div> <p class=\"skill__level_name\">Basic</p> </div> </li> <li class=\"skill\"> <h4 class=\"skill__name\">Webpack</h4> <div class=\"skill__level\"> <div class=\"skill__level_indicator\"> <span class=\"circle filled\"></span><span class=\"circle\"></span><span class=\"circle\"></span><span class=\"circle\"></span><span class=\"circle\"></span> </div> <p class=\"skill__level_name\">Basic</p> </div> </li> </ul> </div> <div class=\"languages\"> <div class=\"heading\"> <span class=\"heading__icon languages-icon\"></span> <span class=\"heading__title\" data-i18n-key=\"languages\">Languages</span> </div> <ul class=\"langiages__list\"> <li class=\"language\"> <h4 class=\"language__name\">English</h4> <div class=\"language__level\"> <div class=\"language__level_indicator\"> <span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle\"></span><span class=\"circle\"></span> </div> <p class=\"language__level_name\">B2</p> </div> </li> <li class=\"language\"> <h4 class=\"language__name\">Russian</h4> <div class=\"language__level\"> <div class=\"language__level_indicator\"> <span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle filled\"></span><span class=\"circle filled\"></span> </div> <p class=\"language__level_name\">Native</p> </div> </li> </ul> </div> <hr/> <div class=\"downloads\"> Downloads: <a href=\"./assets/vasily_mishanin_resume_RU.pdf\" download=\"vasily_mishanin_resume_RU\">&#8595; RU.pdf</a> <a href=\"./assets/vasily_mishanin_resume_EN.pdf\" download=\"vasily_mishanin_resume_EN\">&#8595; EN.pdf</a> </div> </section> </main> </body> </html> ";
// Exports
/* harmony default export */ const index = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./js/main.js


 // import HtmlWebpackPlugin from "html-webpack-plugin";
// const functionB = (param) => {
//   console.log(param);
// };
// functionB("HIHI");

document.addEventListener("click", function (event) {
  var targetElement = event.target;

  if (targetElement.classList.contains("controls__lang")) {
    document.querySelectorAll(".controls__lang").forEach(function (element) {
      return element.classList.remove("active__lang");
    });

    if (targetElement.id === "controls__lang_ru") {
      var locale = "ru";
      targetElement.classList.add("active__lang");
      document.querySelectorAll("[data-i18n-key]").forEach(function (element) {
        translateContent(element, locale);
      });
    }

    if (targetElement.id === "controls__lang_en") {
      var _locale = "en";
      targetElement.classList.add("active__lang");
      document.querySelectorAll("[data-i18n-key]").forEach(function (element) {
        translateContent(element, _locale);
      });
    }
  }
});

function translateContent(element, locale) {
  var translationsContent = translations[locale];
  var key = element.dataset.i18nKey; // from data-i18n-key

  element.innerText = translationsContent[key];
}

var translations = {
  en: {
    name: "Vasily Mishanin",
    position: "Frontend Developer",
    professionalSummary: "Professional Summary",
    professionalSummaryText: " Driven self-taught student leveraging studies in Frontend development seeks real-world experience as trainee/junior. Offers strong interpersonal and task prioritization skills, eager to learn new and develop cool stuff for all people. Coding for me is a whole new chapter of life.",
    workHistory: "Work History",
    workHistoryLastTitle: "Radio engineer",
    workHistoryLastLocation: "Tambov, Russia",
    workHistoryPosition: "(applied to resign in Feb 2022)",
    education: "Education",
    educationDiploma: "High School Diploma",
    educationUniversity: "Military Institute of Radio-electronics - Voronezh",
    certifications: "Certifications",
    hobbiesTitle: "Hobbies",
    hobbiesText: "XC biking, hiking, yoga",
    contact: "Contact",
    locationTmb: "Tambov, TMB, 392000",
    locationVrn: "Voronezh, VRN, 394000",
    skills: "Skills",
    languages: "Languages"
  },
  ru: {
    name: "Василий Мишанин",
    position: "Фронтенд Разработчик",
    professionalSummary: "Мотивация",
    professionalSummaryText: "Целеустремленный студент, самостоятельно изучающий фронтенд- разработку, ищет реальный опыт в качестве трейни/джуниора. Обладает сильными навыками межличностного общения и расстановки приоритетов. Стремится создавать новое, разрабатывая нужные и удобные продукты для всех людей.",
    workHistory: "Работа",
    workHistoryLastTitle: "Радиоинженер",
    workHistoryLastLocation: "Тамбов, Россия",
    workHistoryPosition: "(подал на увольнение в феврале 2022)",
    education: "Образование",
    educationDiploma: "Высшее",
    educationUniversity: "Военный институт радиоэлектроники - Воронеж",
    certifications: "Сертификаты/Практики",
    hobbiesTitle: "Хобби",
    hobbiesText: "кросс-кантри на велосипеде, походы, йога",
    contact: "Контакты",
    locationTmb: "Тамбов, TMB, 392000",
    locationVrn: "Воронеж, VRN, 394000",
    skills: "Навыки",
    languages: "Языки"
  }
};
})();

/******/ })()
;