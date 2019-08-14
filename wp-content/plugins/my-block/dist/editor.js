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

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

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

/***/ "./src/blocks/secondblock/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/secondblock/edit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/arcy/collettivo/wp-content/plugins/my-block/src/blocks/secondblock/edit.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Edit =
/*#__PURE__*/
function (_Component) {
  _inherits(Edit, _Component);

  function Edit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Edit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChangeContent", function (content) {
      _this.props.setAttributes({
        content: content
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeAlignment", function (alignment) {
      _this.props.setAttributes({
        alignment: alignment
      });
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          attributes = _this$props.attributes,
          setTextColor = _this$props.setTextColor,
          setBackgroundColor = _this$props.setBackgroundColor,
          backgroundColor = _this$props.backgroundColor,
          textColor = _this$props.textColor;
      var content = attributes.content,
          alignment = attributes.alignment;
      console.log(this.props);
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__["InspectorControls"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__["PanelColorSettings"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Panel', 'my-block'),
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background color', 'my-block')
        }, {
          value: textColor.color,
          onChange: setTextColor,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text color', 'my-block')
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__["ContrastChecker"], {
        textColor: textColor.color,
        backgroundColor: backgroundColor.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }))), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__["BlockControls"], {
        controls: [{
          icon: "wordpress",
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("test", "my-block"),
          onClick: function onClick() {
            return _this2.onChangeAlignment("right");
          },
          isActive: false
        }, {
          icon: "wordpress",
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("test", "my-block"),
          onClick: function onClick() {
            return alert(true);
          },
          isActive: false
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__["AlignmentToolbar"], {
        value: alignment,
        onChange: this.onChangeAlignment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
        icon: "editor-table",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("test", "my-block"),
        controls: [{
          icon: "wordpress",
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("test", "my-block"),
          onClick: function onClick() {
            return alert(true);
          },
          isActive: false
        }, {
          icon: "wordpress",
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("test", "my-block"),
          onClick: function onClick() {
            return alert(true);
          },
          isActive: false
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }))), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
        style: {
          textAlign: alignment,
          backgroundColor: backgroundColor.color,
          color: textColor.color
        },
        tagName: "p",
        className: className,
        onChange: this.onChangeContent,
        value: content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__["withColors"])('backgroundColor', 'textColor')(Edit));

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
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/secondblock/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/arcy/collettivo/wp-content/plugins/my-block/src/blocks/secondblock/index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("my-block/secondblock", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Second block", "my-block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("My second block", "my-block"),
  category: "my-block-categories",
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
        lineNumber: 16
      },
      __self: undefined
    }, wp.element.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }), wp.element.createElement("path", {
      d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }))
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('photo', 'my-block'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('image', 'my-block')],
  styles: [{
    name: 'rounded',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rounded', 'my-block'),
    isDefault: true
  }, {
    name: 'outline',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Outline', 'my-block')
  }, {
    name: 'squared',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Squared', 'my-block')
  }],
  attributes: {
    content: {
      type: 'string',
      selector: 'p',
      source: 'html'
    },
    alignment: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var content = attributes.content,
        alignment = attributes.alignment,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor;
    var backgroundClass = Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
    var textClass = Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
    var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classnames = {}, _defineProperty(_classnames, backgroundClass, backgroundClass), _defineProperty(_classnames, textClass, textClass), _classnames));
    return wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: classes,
      style: {
        textAlign: alignment,
        backgroundColor: backgroundClass ? undefined : customBackgroundColor,
        color: textClass ? undefined : customTextColor
      },
      tagName: "p",
      value: content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["element"];

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