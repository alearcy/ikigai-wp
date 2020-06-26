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

/***/ "./src/blocks/sections/effectOptions.js":
/*!**********************************************!*\
  !*** ./src/blocks/sections/effectOptions.js ***!
  \**********************************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var options = [{
  value: null,
  label: 'Nothing'
}, {
  value: 'fade',
  label: 'Fade'
}, {
  value: 'fade-up',
  label: 'Fade up'
}, {
  value: 'fade-down',
  label: 'Fade down'
}, {
  value: 'fade-left',
  label: 'Fade left'
}, {
  value: 'fade-right',
  label: 'Fade right'
}, {
  value: 'fade-up-right',
  label: 'Fade up right'
}, {
  value: 'fade-up-left',
  label: 'Fade up left'
}, {
  value: 'fade-down-right',
  label: 'Fade down right'
}, {
  value: 'fade-down-left',
  label: 'Fade down left'
}, {
  value: 'flip-up',
  label: 'Flip up'
}, {
  value: 'flip-down',
  label: 'Flip down'
}, {
  value: 'flip-left',
  label: 'Flip left'
}, {
  value: 'flip-right',
  label: 'Flip right'
}, {
  value: 'slide-up',
  label: 'Slide up'
}, {
  value: 'slide-down',
  label: 'Slide down'
}, {
  value: 'slide-left',
  label: 'Slide left'
}, {
  value: 'slide-right',
  label: 'Slide right'
}, {
  value: 'zoom-in',
  label: 'Zoom in'
}, {
  value: 'zoom-in-up',
  label: 'Zoom in up'
}, {
  value: 'zoom-in-down',
  label: 'Zoom in down'
}, {
  value: 'zoom-in-left',
  label: 'Zoom in left'
}, {
  value: 'zoom-in-right',
  label: 'Zoom in right'
}, {
  value: 'zoom-out',
  label: 'Zoom out'
}, {
  value: 'zoom-out-up',
  label: 'Zoom out up'
}, {
  value: 'zoom-out-down',
  label: 'Zoom out down'
}, {
  value: 'zoom-out-left',
  label: 'Zoom out left'
}, {
  value: 'zoom-out-right',
  label: 'Zoom out right'
}];

/***/ }),

/***/ "./src/blocks/sections/index.js":
/*!**************************************!*\
  !*** ./src/blocks/sections/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _effectOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effectOptions */ "./src/blocks/sections/effectOptions.js");
var _jsxFileName = "/Users/arcy/Local Sites/slashfactory/app/public/wp-content/plugins/ikigai-blocks/src/blocks/sections/index.js";





var attributes = {
  isFirstTime: {
    type: "boolean",
    default: true
  },
  containerClass: {
    type: "string",
    default: "full"
  },
  containerWidth: {
    type: "string",
    default: ""
  },
  contentPosition: {
    type: "string",
    default: "middle-center"
  },
  background: {
    type: "object",
    default: {
      url: null,
      type: null,
      subtype: null
    }
  },
  isBackgroundFixed: {
    type: "boolean",
    default: false
  },
  focalPoint: {
    type: "object"
  },
  minHeight: {
    type: "number"
  },
  hasParallax: {
    type: "boolean",
    default: false
  },
  overlayColor: {
    type: "object",
    default: {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    }
  },
  sectionHeight: {
    type: "string",
    default: "auto"
  },
  effect: {
    type: "string",
    default: null
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("ikigai-blocks/sections", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Sections", "ikigai-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Sections layout", "ikigai-blocks"),
  category: "ikigai-blocks-category",
  icon: {
    background: "#fff",
    foreground: "#ff404c",
    src: "grid-view"
  },
  supports: {
    html: false,
    align: true,
    alignWide: true,
    anchor: true
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("grid", "ikigai-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("section", "ikigai-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("layout", "ikigai-blocks")],
  attributes: attributes,
  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var isFirstTime = attributes.isFirstTime,
        containerClass = attributes.containerClass,
        containerWidth = attributes.containerWidth,
        contentPosition = attributes.contentPosition,
        background = attributes.background,
        sectionHeight = attributes.sectionHeight,
        effect = attributes.effect,
        focalPoint = attributes.focalPoint,
        overlayColor = attributes.overlayColor,
        isBackgroundFixed = attributes.isBackgroundFixed;

    var onChangeSelectField = function onChangeSelectField(v) {
      setAttributes({
        containerClass: v
      });
    };

    var onChangeContainerWidth = function onChangeContainerWidth(v) {
      setAttributes({
        containerWidth: v
      });
    };

    var onOverlayColorChange = function onOverlayColorChange(v) {
      setAttributes({
        overlayColor: v.rgb
      });
    };

    var onMediaSelect = function onMediaSelect(media) {
      if (media.type === "video") {
        setAttributes({
          background: {
            url: media.url,
            type: media.type,
            subtype: media.subtype
          }
        });
      } else {
        setAttributes({
          background: {
            url: media.sizes.full.url,
            type: media.type
          }
        });
      }
    };

    var onFocalChange = function onFocalChange(v) {
      setAttributes({
        focalPoint: v
      });
    };

    var onChangeSectionHeight = function onChangeSectionHeight(v) {
      setAttributes({
        sectionHeight: v
      });
    };

    var onChangeEffect = function onChangeEffect(v) {
      setAttributes({
        effect: v
      });
    };

    var changeFixedBkg = function changeFixedBkg(v) {
      setAttributes({
        isBackgroundFixed: v
      });
    };

    var resetMedia = function resetMedia() {
      setAttributes({
        background: {
          url: null,
          type: null
        }
      });
    };

    var changeAlignment = function changeAlignment(v) {
      setAttributes({
        contentPosition: v
      });
    };

    var handleIsFirstTime = function handleIsFirstTime() {
      setAttributes({
        isFirstTime: !isFirstTime
      });
    };

    return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Background properties", "ikigai-blocks"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      color: overlayColor,
      onChangeComplete: onOverlayColorChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
      label: "Upload media",
      help: "You can upload image or video.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, wp.element.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
      onSelect: onMediaSelect,
      allowedTypes: ["image", "video"],
      type: "image",
      value: background.url,
      render: function render(_ref2) {
        var open = _ref2.open;
        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          isPrimary: true,
          onClick: open,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, "Upload");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }), background.url != null && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isDefault: true,
      onClick: resetMedia,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, "Reset"))), background.url != null && background.type === "image" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["FocalPointPicker"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Focal Point Picker", "ikigai-blocks"),
      url: background.url,
      value: focalPoint,
      onChange: onFocalChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }), background.url != null && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
      label: "Fixed Background",
      checked: isBackgroundFixed,
      onChange: changeFixedBkg,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Content", "ikigai-blocks"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Container style", "ikigai-blocks"),
      value: containerClass,
      options: [{
        value: "full",
        label: "Full"
      }, {
        value: "centered",
        label: "Centered"
      }],
      onChange: onChangeSelectField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }), containerClass === "centered" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
      label: "Container width",
      placeholder: "1280px or 40rem",
      value: containerWidth,
      onChange: onChangeContainerWidth,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Section height", "ikigai-blocks"),
      value: sectionHeight,
      options: [{
        value: "auto",
        label: "Auto"
      }, {
        value: "100vh",
        label: "Screen height"
      }, {
        value: "50vh",
        label: "Half screen"
      }, {
        value: "15rem",
        label: "Short"
      }],
      onChange: onChangeSectionHeight,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("On scroll animation", "ikigai-blocks"),
      value: effect,
      options: _effectOptions__WEBPACK_IMPORTED_MODULE_4__["options"],
      onChange: onChangeEffect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
      label: "Top position",
      help: "Top left, center and right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, wp.element.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: contentPosition === "top-left" && true,
      isDefault: contentPosition !== "top-left" && true,
      onClick: function onClick() {
        return changeAlignment("top-left");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }, "TL"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: contentPosition === "top-center" && true,
      isDefault: contentPosition !== "top-center" && true,
      onClick: function onClick() {
        return changeAlignment("top-center");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, "TC"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: contentPosition === "top-right" && true,
      isDefault: contentPosition !== "top-right" && true,
      onClick: function onClick() {
        return changeAlignment("top-right");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, "TR"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
      label: "Middle position",
      help: "Middle left, center and right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, wp.element.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: contentPosition === "middle-left" && true,
      isDefault: contentPosition !== "middle-left" && true,
      onClick: function onClick() {
        return changeAlignment("middle-left");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, "ML"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: contentPosition === "middle-center" && true,
      isDefault: contentPosition !== "middle-center" && true,
      onClick: function onClick() {
        return changeAlignment("middle-center");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, "MC"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: contentPosition === "middle-right" && true,
      isDefault: contentPosition !== "middle-right" && true,
      onClick: function onClick() {
        return changeAlignment("middle-right");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, "MR"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
      label: "Bottom position",
      help: "Bottom left, center and right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, wp.element.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: contentPosition === "bottom-left" && true,
      isDefault: contentPosition !== "bottom-left" && true,
      onClick: function onClick() {
        return changeAlignment("bottom-left");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, "BL"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: contentPosition === "bottom-center" && true,
      isDefault: contentPosition !== "bottom-center" && true,
      onClick: function onClick() {
        return changeAlignment("bottom-center");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, "BC"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: contentPosition === "bottom-right" && true,
      isDefault: contentPosition !== "bottom-right" && true,
      onClick: function onClick() {
        return changeAlignment("bottom-right");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, "BR"))))), wp.element.createElement("section", {
      className: "".concat(className, " ikigai-section-wrapper"),
      style: {
        backgroundImage: background.url != null && "url(".concat(background.url, ")"),
        backgroundSize: "cover",
        backgroundPosition: focalPoint ? "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%") : null,
        backgroundAttachment: isBackgroundFixed ? "fixed" : "unset",
        height: sectionHeight
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }, wp.element.createElement("div", {
      className: "overlay",
      style: {
        backgroundColor: "rgba(".concat(overlayColor.r, ", ").concat(overlayColor.g, ", ").concat(overlayColor.b, ", ").concat(overlayColor.a)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }), background.url && background.type === "video" && wp.element.createElement("video", {
      autoPlay: true,
      muted: true,
      loop: true,
      id: "video",
      className: isBackgroundFixed ? "fixed" : "absolute",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }, wp.element.createElement("source", {
      src: background.url,
      type: "".concat(background.type, "/").concat(background.subtype),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    })), wp.element.createElement("div", {
      className: "ikigai-editor-container ikigai-container ".concat(containerClass, " ").concat(contentPosition),
      style: {
        maxWidth: containerWidth ? containerWidth : null,
        margin: containerWidth ? "0 auto" : null
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, isFirstTime ? wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
      icon: "plus",
      label: "Add your first content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: true,
      onClick: handleIsFirstTime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, "Add content")) : wp.element.createElement("div", {
      className: "containerClass",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    })))));
  },
  save: function save(_ref3) {
    var className = _ref3.className,
        attributes = _ref3.attributes;
    var containerClass = attributes.containerClass,
        contentPosition = attributes.contentPosition,
        containerWidth = attributes.containerWidth,
        background = attributes.background,
        focalPoint = attributes.focalPoint,
        overlayColor = attributes.overlayColor,
        sectionHeight = attributes.sectionHeight,
        isBackgroundFixed = attributes.isBackgroundFixed,
        effect = attributes.effect;
    return wp.element.createElement("section", {
      className: "".concat(className, " ikigai-section-wrapper"),
      style: {
        backgroundImage: background.url != null && "url(".concat(background.url, ")"),
        backgroundSize: "cover",
        backgroundPosition: focalPoint ? "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%") : null,
        backgroundAttachment: isBackgroundFixed ? "fixed" : "unset",
        height: sectionHeight
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439
      },
      __self: this
    }, wp.element.createElement("div", {
      className: "overlay",
      style: {
        backgroundColor: "rgba(".concat(overlayColor.r, ", ").concat(overlayColor.g, ", ").concat(overlayColor.b, ", ").concat(overlayColor.a)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451
      },
      __self: this
    }), background.url && background.type === "video" && wp.element.createElement("video", {
      autoPlay: true,
      muted: true,
      loop: true,
      id: "video",
      className: isBackgroundFixed ? "fixed" : "absolute",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458
      },
      __self: this
    }, wp.element.createElement("source", {
      src: background.url,
      type: "".concat(background.type, "/").concat(background.subtype),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    })), wp.element.createElement("div", {
      className: "ikigai-container ".concat(containerClass, " ").concat(contentPosition),
      style: {
        maxWidth: containerWidth ? containerWidth : null,
        margin: containerWidth ? "0 auto" : null
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471
      },
      __self: this
    }, wp.element.createElement("div", {
      "data-aos": effect,
      className: "containerClass",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478
      },
      __self: this
    }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479
      },
      __self: this
    }))));
  }
});

/***/ }),

/***/ "./src/blocks/team-member/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/team-member/edit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/arcy/Local Sites/slashfactory/app/public/wp-content/plugins/ikigai-blocks/src/blocks/team-member/edit.js";

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








var TeamMemberEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(TeamMemberEdit, _Component);

  function TeamMemberEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TeamMemberEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TeamMemberEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChangeTitle", function (title) {
      _this.props.setAttributes({
        title: title
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeInfo", function (info) {
      _this.props.setAttributes({
        info: info
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeOccupation", function (occupation) {
      _this.props.setAttributes({
        occupation: occupation
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectImage", function (_ref) {
      var id = _ref.id,
          url = _ref.url,
          alt = _ref.alt;

      _this.props.setAttributes({
        id: id,
        url: url,
        alt: alt
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectURL", function (url) {
      _this.props.setAttributes({
        url: url,
        id: null,
        alt: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onImageSizeChange", function (url) {
      _this.props.setAttributes({
        url: url
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onUploadError", function (message) {
      var noticeOperations = _this.props.noticeOperations;
      noticeOperations.createErrorNotice(message);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeNameAlignment", function (value) {
      _this.props.setAttributes({
        nameAlignment: _this.props.attributes.nameAlignment === value ? null : value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeOccupationAlignment", function (value) {
      _this.props.setAttributes({
        occupationAlignment: _this.props.attributes.occupationAlignment === value ? null : value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeInfoAlignment", function (value) {
      _this.props.setAttributes({
        infoAlignment: _this.props.attributes.infoAlignment === value ? null : value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getImageSizes", function () {
      var _this$props = _this.props,
          image = _this$props.image,
          imageSizes = _this$props.imageSizes;
      if (!image) return [];
      var options = [];
      var sizes = image.media_details.sizes;

      var _loop = function _loop(key) {
        var size = sizes[key];
        var imageSize = imageSizes.find(function (size) {
          return size.slug === key;
        });

        if (imageSize) {
          options.push({
            label: imageSize.name,
            value: size.source_url
          });
        }
      };

      for (var key in sizes) {
        _loop(key);
      }

      return options;
    });

    _defineProperty(_assertThisInitialized(_this), "removeImage", function () {
      _this.props.setAttributes({
        id: null,
        url: '',
        alt: ''
      });
    });

    return _this;
  }

  _createClass(TeamMemberEdit, [{
    key: "componentDidMount",
    // remove pending upload operation
    value: function componentDidMount() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var url = attributes.url,
          id = attributes.id;

      if (url && Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url) && !id) {
        setAttributes({
          url: '',
          alt: ''
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes;
      var title = attributes.title,
          info = attributes.info,
          occupation = attributes.occupation,
          id = attributes.id,
          url = attributes.url,
          alt = attributes.alt,
          nameAlignment = attributes.nameAlignment,
          occupationAlignment = attributes.occupationAlignment,
          infoAlignment = attributes.infoAlignment;
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["BlockControls"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, url && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
        className: "components-icon-button components-toolbar__control",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove image', 'ikigai-blocks'),
        icon: "trash",
        onClick: this.removeImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }))), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, id && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image settings', 'ikigai-blocks'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image size', 'ikigai-blocks'),
        options: this.getImageSizes(),
        onChange: this.onImageSizeChange,
        value: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content alignment', 'ikigai-blocks'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
        label: "Title alignment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        isPrimary: nameAlignment === "left",
        isDefault: nameAlignment !== "left",
        onClick: function onClick() {
          return setAttributes({
            nameAlignment: "left"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Left"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        isPrimary: nameAlignment === "center",
        isDefault: nameAlignment !== "center",
        onClick: function onClick() {
          return setAttributes({
            nameAlignment: "center"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Center"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
        label: "Occupation alignment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        isPrimary: occupationAlignment === "left",
        isDefault: occupationAlignment !== "left",
        onClick: function onClick() {
          return setAttributes({
            occupationAlignment: "left"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Left"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        isPrimary: occupationAlignment === "center",
        isDefault: occupationAlignment !== "center",
        onClick: function onClick() {
          return setAttributes({
            occupationAlignment: "center"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Center"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
        label: "Info alignment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        isPrimary: infoAlignment === "left",
        isDefault: infoAlignment !== "left",
        onClick: function onClick() {
          return setAttributes({
            infoAlignment: "left"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Left"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        isPrimary: infoAlignment === "center",
        isDefault: infoAlignment !== "center",
        onClick: function onClick() {
          return setAttributes({
            infoAlignment: "center"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Center"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        isPrimary: infoAlignment === "justify",
        isDefault: infoAlignment !== "justify",
        onClick: function onClick() {
          return setAttributes({
            infoAlignment: "justify"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Justify"))))), wp.element.createElement("div", {
        className: className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, url ? wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("img", {
        src: url,
        alt: alt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }), Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url) && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      })) : wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
        icon: "format-image",
        onSelect: this.onSelectImage,
        onSelectURL: this.onSelectURL,
        onError: this.onUploadError,
        accept: "image/*",
        allowedTypes: ['image'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
        tagName: "h3",
        className: "team-member-title",
        onChange: this.onChangeTitle,
        value: title,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Member name', 'ikigai-blocks'),
        style: {
          textAlign: nameAlignment
        },
        keepPlaceholderOnFocus: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
        tagName: "p",
        className: "team-member-occupation",
        onChange: this.onChangeOccupation,
        value: occupation,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Member occupation', 'ikigai-blocks'),
        style: {
          textAlign: occupationAlignment
        },
        keepPlaceholderOnFocus: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
        tagName: "div",
        multiline: "p",
        className: "team-member-info",
        onChange: this.onChangeInfo,
        value: info,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Member info', 'ikigai-blocks'),
        style: {
          textAlign: infoAlignment
        },
        keepPlaceholderOnFocus: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      })));
    }
  }]);

  return TeamMemberEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, props) {
  var id = props.attributes.id;
  return {
    image: id ? select('core').getMedia(id) : null,
    imageSizes: select('core/editor').getEditorSettings().imageSizes
  };
})(TeamMemberEdit));

/***/ }),

/***/ "./src/blocks/team-member/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/team-member/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/team-member/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/team-member/edit.js");
var _jsxFileName = "/Users/arcy/Local Sites/slashfactory/app/public/wp-content/plugins/ikigai-blocks/src/blocks/team-member/index.js";





var attributes = {
  title: {
    type: 'string',
    source: 'html',
    selector: '.team-member-title'
  },
  occupation: {
    type: 'string',
    source: 'html',
    selector: '.team-member-occupation'
  },
  info: {
    type: 'array',
    source: 'children',
    selector: '.team-member-info'
  },
  id: {
    type: 'number'
  },
  alt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt',
    default: ''
  },
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src'
  },
  nameAlignment: {
    type: 'string',
    default: 'left'
  },
  occupationAlignment: {
    type: 'string',
    default: 'left'
  },
  infoAlignment: {
    type: 'string',
    default: 'left'
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('ikigai-blocks/team-member', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Team member", "ikigai-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Block showing a team member card", "ikigai-blocks"),
  category: "ikigai-blocks-category",
  icon: {
    background: "#fff",
    foreground: "#ff404c",
    src: 'admin-users'
  },
  supports: {
    html: false
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('team', 'ikigai-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('member', 'ikigai-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('person', 'ikigai-blocks')],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var title = attributes.title,
        info = attributes.info,
        occupation = attributes.occupation,
        url = attributes.url,
        alt = attributes.alt,
        nameAlignment = attributes.nameAlignment,
        occupationAlignment = attributes.occupationAlignment,
        infoAlignment = attributes.infoAlignment;
    return wp.element.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, url && wp.element.createElement("img", {
      src: url,
      alt: alt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), title && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "h3",
      className: "team-member-title",
      style: {
        textAlign: nameAlignment
      },
      value: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), occupation && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "p",
      className: "team-member-occupation",
      style: {
        textAlign: occupationAlignment
      },
      value: occupation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), info && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "div",
      className: "team-member-info",
      style: {
        textAlign: infoAlignment
      },
      value: info,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }));
  }
});

/***/ }),

/***/ "./src/blocks/team-member/style.editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/team-member/style.editor.scss ***!
  \**************************************************/
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
/* harmony import */ var _blocks_team_member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/team-member */ "./src/blocks/team-member/index.js");
/* harmony import */ var _blocks_sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/sections */ "./src/blocks/sections/index.js");



/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blob"];

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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["data"];

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