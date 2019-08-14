/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/firstblock/index.js":
/*!****************************************!*\
  !*** ./src/blocks/firstblock/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;
registerBlockType("my-block/firstblock", {
  title: __("First block", "my-block"),
  description: __("My first block", "my-block"),
  category: "layout",
  icon: {
    background: "#ea732f",
    foreground: "#fff",
    src: "admin-network"
  },
  keywords: [__('photo', 'my-block'), __('image', 'my-block')],
  edit: function edit() {
    return el('p', null, 'First Editor');
  },
  save: function save() {
    return el('p', null, 'Saved first content');
  }
});

/***/ }),

/***/ "./src/blocks/secondblock/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/secondblock/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.editor.scss */ "./src/blocks/secondblock/styles.editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/arcy/collettivo/wp-content/plugins/my-block/src/blocks/secondblock/index.js";





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("my-block/secondblock", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Second block", "my-block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("My second block", "my-block"),
  category: "layout",
  icon: {
    background: "#ea732f",
    foreground: "#fff",
    src: wp.element.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, wp.element.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }), wp.element.createElement("path", {
      d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }))
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('photo', 'my-block'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('image', 'my-block')],
  attributes: {
    content: {
      type: 'string',
      selector: 'p',
      source: 'html'
    },
    alignment: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var content = attributes.content,
        alignment = attributes.alignment;

    var onChangeContent = function onChangeContent(content) {
      setAttributes({
        content: content
      });
    };

    var onChangeAlignment = function onChangeAlignment(alignment) {
      setAttributes({
        alignment: alignment
      });
    };

    return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], {
      controls: [{
        icon: 'wordpress',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('test', 'my-block'),
        onClick: function onClick() {
          return onChangeAlignment('right');
        },
        isActive: false
      }, {
        icon: 'wordpress',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('test', 'my-block'),
        onClick: function onClick() {
          return alert(true);
        },
        isActive: false
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
      value: alignment,
      onChange: onChangeAlignment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["DropdownMenu"], {
      icon: "editor-table",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('test', 'my-block'),
      controls: [{
        icon: 'wordpress',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('test', 'my-block'),
        onClick: function onClick() {
          return alert(true);
        },
        isActive: false
      }, {
        icon: 'wordpress',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('test', 'my-block'),
        onClick: function onClick() {
          return alert(true);
        },
        isActive: false
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }))), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      style: {
        textAlign: alignment
      },
      tagName: "p",
      className: className,
      onChange: onChangeContent,
      value: content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var content = attributes.content,
        alignment = attributes.alignment;
    return wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      style: {
        textAlign: alignment
      },
      tagName: "p",
      value: content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    });
  }
});

/***/ }),

/***/ "./src/blocks/secondblock/styles.editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/secondblock/styles.editor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/firstblock */ "./src/blocks/firstblock/index.js");
/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_secondblock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/secondblock */ "./src/blocks/secondblock/index.js");



/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["components"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["editor"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["i18n"];

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map