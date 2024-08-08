(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./App.development.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.development.js":
/*!****************************!*\
  !*** ./App.development.js ***!
  \****************************/
/*! exports provided: Common, Helpers, Forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assets_Js_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/Js/scripts */ \"./Assets/Js/scripts.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Common\", function() { return _Assets_Js_scripts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Helpers\", function() { return _Assets_Js_scripts__WEBPACK_IMPORTED_MODULE_0__[\"Helpers\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Forms\", function() { return _Assets_Js_scripts__WEBPACK_IMPORTED_MODULE_0__[\"Forms\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./App.development.js?");

/***/ }),

/***/ "./Assets/Js/scripts.js":
/*!******************************!*\
  !*** ./Assets/Js/scripts.js ***!
  \******************************/
/*! exports provided: default, Forms, Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Common; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Forms\", function() { return Forms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Helpers\", function() { return Helpers; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Common = function Common() {\n  _classCallCheck(this, Common);\n};\n\n_defineProperty(Common, \"Init\", function () {});\n\n_defineProperty(Common, \"break\", {\n  sm: 576,\n  md: 768,\n  lg: 992,\n  xl: 1200\n});\n\n\nvar Forms = function Forms() {\n  _classCallCheck(this, Forms);\n};\n\n_defineProperty(Forms, \"InitBookADemoEmailForm\", function (el, bookAdDemoUrl) {\n  Helpers.DocReady(function () {\n    $(el).submit(function (e) {\n      e.preventDefault();\n      window.location.href = bookAdDemoUrl + '?email=' + $('#EmailAddress').val();\n    });\n  });\n});\n\n_defineProperty(Forms, \"InitBookADemoProductEmailForm\", function (el, email, bookAdDemoUrl, key) {\n  Helpers.DocReady(function () {\n    $(el).submit(function (e) {\n      e.preventDefault();\n      window.location.href = bookAdDemoUrl + '?email=' + $(email).val() + '&product=' + key;\n    });\n  });\n});\n\nvar Helpers = function Helpers() {\n  _classCallCheck(this, Helpers);\n};\n\n_defineProperty(Helpers, \"IsStringEmpty\", function (string) {\n  return string.length == 0;\n});\n\n_defineProperty(Helpers, \"DocReady\", function (callback) {\n  $(document).ready(function () {\n    callback();\n  });\n});\n\n_defineProperty(Helpers, \"SetBackgroundImage\", function (el, imageUrl) {\n  $(el).css(\"background-image\", \"url(\".concat(imageUrl, \")\"));\n});\n\n_defineProperty(Helpers, \"Dom\", function (tag, attrs) {\n  // Custom Components will be functions\n  if (typeof tag === 'function') {\n    return tag();\n  } // regular html tags will be strings to create the elements\n\n\n  if (typeof tag === 'string') {\n    // fragments to append multiple children to the initial node\n    var fragments = document.createDocumentFragment();\n    var element = document.createElement(tag);\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    children.forEach(function (child) {\n      if (child instanceof HTMLElement) {\n        fragments.appendChild(child);\n      } else if (typeof child === 'string') {\n        var textnode = document.createTextNode(child);\n        fragments.appendChild(textnode);\n      } else {// later other things could not be HTMLElement not strings\n        //console.log('not appendable', child);\n      }\n    });\n    element.appendChild(fragments); // Merge element with attributes\n\n    Object.assign(element, attrs);\n    return element;\n  }\n});\n\n//# sourceURL=webpack:///./Assets/Js/scripts.js?");

/***/ })

/******/ });
});