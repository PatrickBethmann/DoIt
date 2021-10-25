/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    background-color: white;\r\n}\r\nmain {\r\n    height: fit-content;\r\n}\r\n\r\n.header {\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    background-color: lightskyblue;\r\n    color: white;\r\n}\r\n\r\n.nav {\r\n    overflow-y: auto;\r\n    position: absolute;\r\n    top: 100px;\r\n    float: left;\r\n    bottom: 0;\r\n    background-color: rgb(173, 224, 255);\r\n\r\n    width: 200px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    gap: 10px;\r\n    padding: 20px;\r\n}\r\n.default-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: stretch;\r\n    gap: 40px;\r\n}\r\n.default-projects-button {\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n    height: 40px;\r\n    border: none;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    border-radius: 10px;\r\n    border: 2px solid gray;\r\n}\r\n.projects-title {\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    text-decoration: underline;\r\n}\r\n\r\n.project-button:hover,\r\n.default-projects-button:hover {\r\n    background-color: lightsalmon;\r\n}\r\n.project-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: stretch;\r\n    gap: 40px;\r\n}\r\n.project-button {\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n    height: 40px;\r\n    border: none;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border: 2px solid gray;\r\n}\r\n.add-project-button {\r\n    border: 2px solid black;\r\n    background-color: white;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.button-delete-project {\r\n    height: 100%;\r\n    aspect-ratio: 1;\r\n    z-index: 1;\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.button-delete-project:hover {\r\n    background-color: lightcoral;\r\n}\r\n.content {\r\n    min-width: 50%;\r\n    width: calc(100vw - 200px);\r\n    height: fit-content;\r\n    position: absolute;\r\n    left: 200px;\r\n    top: 100px;\r\n\r\n    padding: 100px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n.task {\r\n    background-color: white;\r\n    width: 60%;\r\n    height: 40px;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 5px;\r\n    border-radius: 10px;\r\n}\r\n.task:hover,\r\n.button-add-task:hover {\r\n    background-color: lightgray;\r\n}\r\n.task-name {\r\n    /* Positioning */\r\n    flex: 1;\r\n    margin-right: auto;\r\n\r\n    /* Design */\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n.button-edit-task,\r\n.button-remove-task,\r\n.button-complete-task {\r\n    height: 100%;\r\n    aspect-ratio: 1;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\n\r\n.button-complete-task {\r\n    background: none;\r\n}\r\n.button-add-task {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: inherit;\r\n    border: none;\r\n    cursor: pointer;\r\n    height: 40px;\r\n    padding: 5px;\r\n    width: 60%;\r\n    text-align: left;\r\n    gap: 5px;\r\n    border-radius: 10px;\r\n}\r\n.add-task-popup,\r\n.add-project-popup {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 60%;\r\n    gap: 5px;\r\n}\r\n.add-task-popup-input,\r\n.add-project-popup-input {\r\n    background-color: white;\r\n    height: 40px;\r\n    border: none;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}\r\n.add-task-popup-buttons,\r\n.add-project-popup-buttons {\r\n    display: flex;\r\n    height: 40px;\r\n    justify-content: space-between;\r\n    gap: 5px;\r\n}\r\n.add-task-popup-add,\r\n.add-task-popup-cancel,\r\n.add-project-popup-add,\r\n.add-project-popup-cancel {\r\n    border: none;\r\n    width: 50%;\r\n    cursor: pointer;\r\n    border-radius: 10px;\r\n}\r\n.add-task-popup-add,\r\n.add-project-popup-add {\r\n    background-color: lightgreen;\r\n}\r\n.add-task-popup-cancel,\r\n.add-project-popup-cancel {\r\n    background-color: lightcoral;\r\n}\r\n.add-project-popup {\r\n    width: 100%;\r\n    border-radius: 10px;\r\n}\r\n\r\n.active {\r\n    visibility: visible;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    background-color: white;\r\n}\r\nmain {\r\n    height: fit-content;\r\n}\r\n\r\n.header {\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    background-color: lightskyblue;\r\n    color: white;\r\n}\r\n\r\n.nav {\r\n    overflow-y: auto;\r\n    position: absolute;\r\n    top: 100px;\r\n    float: left;\r\n    bottom: 0;\r\n    background-color: rgb(173, 224, 255);\r\n\r\n    width: 200px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    gap: 10px;\r\n    padding: 20px;\r\n}\r\n.default-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: stretch;\r\n    gap: 40px;\r\n}\r\n.default-projects-button {\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n    height: 40px;\r\n    border: none;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    border-radius: 10px;\r\n    border: 2px solid gray;\r\n}\r\n.projects-title {\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    text-decoration: underline;\r\n}\r\n\r\n.project-button:hover,\r\n.default-projects-button:hover {\r\n    background-color: lightsalmon;\r\n}\r\n.project-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: stretch;\r\n    gap: 40px;\r\n}\r\n.project-button {\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n    height: 40px;\r\n    border: none;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border: 2px solid gray;\r\n}\r\n.add-project-button {\r\n    border: 2px solid black;\r\n    background-color: white;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.button-delete-project {\r\n    height: 100%;\r\n    aspect-ratio: 1;\r\n    z-index: 1;\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.button-delete-project:hover {\r\n    background-color: lightcoral;\r\n}\r\n.content {\r\n    min-width: 50%;\r\n    width: calc(100vw - 200px);\r\n    height: fit-content;\r\n    position: absolute;\r\n    left: 200px;\r\n    top: 100px;\r\n\r\n    padding: 100px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n.task {\r\n    background-color: white;\r\n    width: 60%;\r\n    height: 40px;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 5px;\r\n    border-radius: 10px;\r\n}\r\n.task:hover,\r\n.button-add-task:hover {\r\n    background-color: lightgray;\r\n}\r\n.task-name {\r\n    /* Positioning */\r\n    flex: 1;\r\n    margin-right: auto;\r\n\r\n    /* Design */\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n.button-edit-task,\r\n.button-remove-task,\r\n.button-complete-task {\r\n    height: 100%;\r\n    aspect-ratio: 1;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\n\r\n.button-complete-task {\r\n    background: none;\r\n}\r\n.button-add-task {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: inherit;\r\n    border: none;\r\n    cursor: pointer;\r\n    height: 40px;\r\n    padding: 5px;\r\n    width: 60%;\r\n    text-align: left;\r\n    gap: 5px;\r\n    border-radius: 10px;\r\n}\r\n.add-task-popup,\r\n.add-project-popup {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 60%;\r\n    gap: 5px;\r\n}\r\n.add-task-popup-input,\r\n.add-project-popup-input {\r\n    background-color: white;\r\n    height: 40px;\r\n    border: none;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}\r\n.add-task-popup-buttons,\r\n.add-project-popup-buttons {\r\n    display: flex;\r\n    height: 40px;\r\n    justify-content: space-between;\r\n    gap: 5px;\r\n}\r\n.add-task-popup-add,\r\n.add-task-popup-cancel,\r\n.add-project-popup-add,\r\n.add-project-popup-cancel {\r\n    border: none;\r\n    width: 50%;\r\n    cursor: pointer;\r\n    border-radius: 10px;\r\n}\r\n.add-task-popup-add,\r\n.add-project-popup-add {\r\n    background-color: lightgreen;\r\n}\r\n.add-task-popup-cancel,\r\n.add-project-popup-cancel {\r\n    background-color: lightcoral;\r\n}\r\n.add-project-popup {\r\n    width: 100%;\r\n    border-radius: 10px;\r\n}\r\n\r\n.active {\r\n    visibility: visible;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/modules/Task.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");



class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(newTask) {
        // Check if the Task already exists
        if (this.tasks.find((task) => task.getName() === newTask.getName())) {
            return;
        }
        // Check if a name has been given
        if (newTask.getName() === undefined) {
            // if not, set default name
            newTask.setName(this.getDefaultTaskName());
        }
        this.tasks.push(newTask);
    }

    /**
     *
     * @param {*} x Number/String/Task
     * @returns NEw tasks Array
     */
    removeTask(x) {
        if (typeof x === "string") {
            this.tasks = this.tasks.filter((task) => task.getName() !== x);
        } else if (typeof x === "number") {
            this.tasks.splice(x, 1);
        } else if (typeof x === "object") {
            if (x instanceof _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                this.tasks = this.tasks.filter((task) => task !== x);
            }
        }

        return this.tasks;
    }

    setName(newProjectName) {
        this.name = newProjectName;
    }
    getName() {
        return this.name;
    }

    setTasks(newTasks) {
        this.tasks = newTasks;
    }
    getTasks() {
        return this.tasks;
    }

    getTask(x) {
        if (typeof x === "string") {
            return this.tasks.find((task) => task.getName() === x);
        } else if (typeof x === "number") {
            if (x > -1) {
                return this.tasks[x];
            }
        } else if (typeof x === "object") {
            if (x instanceof _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                return this.tasks.find((task) => task === x);
            }
        }

        return;
    }

    getDefaultTaskName() {
        let count = 1;
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getName() === `Task${count}`) {
                count++;
                i = -1;
            }
        }
        return `Task${count}`;
    }
}


/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList */ "./src/modules/TodoList.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.js */ "./src/modules/Task.js");




// Module for storing the data
class Storage {
    static saveTodoList(todoList) {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
    static getTodoList() {
        const todoList = Object.assign(new _TodoList__WEBPACK_IMPORTED_MODULE_1__["default"](), JSON.parse(localStorage.getItem("todoList")));

        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](), project)));

        todoList.getProjects().forEach((project) => {
            project.setTasks(project.getTasks().map((task) => Object.assign(new _Task_js__WEBPACK_IMPORTED_MODULE_2__["default"](), task)));
        });

        return todoList;
    }

    static addProject(project) {
        const todoList = Storage.getTodoList();
        todoList.addProject(project);
        Storage.saveTodoList(todoList);
    }
    static removeProject(x) {
        const todoList = Storage.getTodoList();
        todoList.removeProject(x);
        Storage.saveTodoList(todoList);
    }
    static addTask(project, task) {
        const todoList = Storage.getTodoList();
        todoList.getProject(project).addTask(task);
        Storage.saveTodoList(todoList);
    }
    static removeTask(project, task) {
        const todoList = Storage.getTodoList();

        todoList.getProject(project).removeTask(task);
        Storage.saveTodoList(todoList);
    }
    static renameTask(project, task, newTaskName) {
        const todoList = Storage.getTodoList();

        todoList.getProject(project).getTask(task).setName(newTaskName);

        Storage.saveTodoList(todoList);
    }
    static renameProject(project, newProjectName) {
        const todoList = Storage.getTodoList();

        todoList.getProject(project).setName(newProjectName);

        Storage.saveTodoList(todoList);
    }
}


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
// Task Class
class Task {
    constructor(name, description = "no description", dueDate = "No date") {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }

    setName(newTaskName) {
        this.name = newTaskName;
    }
    getName() {
        return this.name;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }
    getDescription() {
        return this.description;
    }

    setDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }
    getDueDate() {
        return this.dueDate;
    }
}


/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");



// Main Todo-List Module

class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]("Home"));
        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]("Today"));
        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]("This week"));
    }

    addProject(newProject) {
        // Check if a name has been given
        if (newProject.getName() === undefined || newProject.getName() === "") {
            newProject.setName(this.getDefaultProjectName());
        }

        // Check if Project already exists
        if (this.projects.find((project) => project.getName() === newProject.getName())) {
            return;
        }

        this.projects.push(newProject);
    }
    removeProject(x) {
        if (typeof x === "string") {
            this.projects = this.projects.filter((project) => project.getName() !== x);
        } else if (typeof x === "number") {
            this.projects.splice(x, 1);
        } else if (typeof x === "object" || x instanceof _Project__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.projects = this.projects.filter((project) => project !== x);
        }
    }

    setProjects(newProjects) {
        this.projects = newProjects;
    }
    getProjects() {
        return this.projects;
    }

    getProject(x) {
        if (typeof x === "string") {
            return this.projects.find((project) => project.getName() === x);
        } else if (typeof x === "number") {
            if (x > -1) {
                return this.projects[x];
            }
        } else if (typeof x === "object") {
            if (x instanceof _Project__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                return this.projects.find((project) => project.getName() === x.getName());
            }
        }

        return;
    }

    setToday() {
        // not available
    }
    setWeekly() {
        // not available
    }

    getDefaultProjectName() {
        let count = 1;
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].getName() === `Project${count}`) {
                count++;
                i = -1;
            }
        }
        return `Project${count}`;
    }
}


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");




class UI {
    // Loading Content
    static body = document.querySelector("body");
    static sidebar = document.querySelector("#sidebar");
    static content = document.querySelector("#content");
    static projectList = document.querySelector("#project-list");
    static currentProject;

    static loadHomepage() {
        UI.loadProjects();
        UI.initDefaultProjects();
        UI.initAddProjectButton();
        UI.openProject("Home");
    }
    static initDefaultProjects() {
        const buttons = document.querySelectorAll(".default-projects-button");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                UI.openProject(button.textContent);
            });
        });
    }
    static loadProjects() {
        this.projectList.innerHTML = "";
        const todoList = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList();
        todoList.getProjects().forEach((project) => {
            if (project.getName() !== "Home" && project.getName() !== "Today" && project.getName() !== "This Week") {
                UI.addProject(project);
            }
        });
    }

    static addProject(project) {
        const container = document.createElement("button");
        container.textContent = project.getName();
        container.classList.add("project-button");
        container.addEventListener("click", () => {
            this.openProject(project);
        });

        const deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(project.getName());
            this.loadProjects();
        });
        deleteButton.innerHTML = `<span class="material-icons">clear</span>`;
        deleteButton.classList.add("button-delete-project");

        container.appendChild(deleteButton);

        this.projectList.appendChild(container);
    }
    static addTask(task) {
        const container = document.createElement("div");
        container.classList.add("task");
        container.setAttribute("taskname", task.getName());

        const taskName = document.createElement("h3");
        taskName.textContent = task.getName();
        taskName.classList.add("task-name");

        const buttonCompleteTask = document.createElement("button");
        buttonCompleteTask.classList.add("button-complete-task");
        buttonCompleteTask.innerHTML = `<span class="material-icons">radio_button_unchecked</span>`;
        buttonCompleteTask.setAttribute("data-completed", "false");

        const buttonEditTask = document.createElement("button");
        buttonEditTask.classList.add("button-edit-task");
        buttonEditTask.innerHTML = `<span class="material-icons">edit</span>`;

        const buttonRemoveTask = document.createElement("button");
        buttonRemoveTask.classList.add("button-remove-task");
        buttonRemoveTask.innerHTML = `<span class="material-icons">clear</span>`;

        container.append(buttonCompleteTask, taskName, buttonEditTask, buttonRemoveTask);
        this.content.appendChild(container);
    }
    static openProject(projectName) {
        // Clear content-div
        this.content.innerHTML = "";
        this.currentProject = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList().getProject(projectName);
        const project = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList().getProject(projectName);

        project.getTasks().forEach((task) => {
            this.addTask(task);
        });

        const addTaskButton = document.createElement("button");
        addTaskButton.classList.add("button-add-task");
        addTaskButton.innerHTML = `<i class="button-add-task-icon">O</i> <h3 button-add-task-title>Add Task</h3> `;
        addTaskButton.addEventListener("click", () => {
            console.log("adding task");
            UI.openAddTaskPopup();
        });

        this.content.appendChild(this.getAddTaskButton());
        this.initTaskButtons(project);
    }

    static getAddTaskButton() {
        const addTaskButton = document.createElement("button");
        addTaskButton.classList.add("button-add-task");
        addTaskButton.innerHTML = `<i class="button-add-task-icon"><span class="material-icons">add</span></i> <h3 button-add-task-title>Add Task</h3> `;
        addTaskButton.addEventListener("click", () => {
            console.log("adding task");
            UI.openAddTaskPopup();
        });
        return addTaskButton;
    }
    static getAddTaskPopup() {
        const popup = document.createElement("div");
        popup.classList.add("add-task-popup");

        const textInput = document.createElement("input");
        textInput.setAttribute("type", "text");
        textInput.classList.add("add-task-popup-input");

        const buttons = document.createElement("div");
        buttons.classList.add("add-task-popup-buttons");

        const buttonAdd = document.createElement("button");
        buttonAdd.textContent = "Add";
        buttonAdd.classList.add("add-task-popup-add");
        buttons.appendChild(buttonAdd);
        buttonAdd.addEventListener("click", () => {
            const input = document.querySelector(".add-task-popup-input");
            const newTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](input.value);
            _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(this.currentProject, newTask); // Saves new Task
            this.addTask(newTask); // Displays new Task

            this.closeAddTaskPopup(); // closes the popup
            this.openProject(this.currentProject);
        });

        const buttonCancel = document.createElement("button");
        buttonCancel.textContent = "Cancel";
        buttonCancel.classList.add("add-task-popup-cancel");
        buttons.appendChild(buttonCancel);
        buttonCancel.addEventListener("click", () => {
            this.closeAddTaskPopup();
        });

        popup.append(textInput, buttons);

        return popup;
    }
    static initTaskButtons(project) {
        const removeButtons = document.querySelectorAll(".button-remove-task");
        const editButtons = document.querySelectorAll(".button-edit-task");
        const completedButtons = document.querySelectorAll(".button-complete-task");

        for (let i = 0; i < project.getTasks().length; i++) {
            removeButtons[i].addEventListener("click", () => {
                _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(project, project.getTask(i).getName());
                UI.openProject(project);
            });
            editButtons[i].addEventListener("click", () => {
                console.log("Editing task " + project.getTask(i).getName());
            });
            completedButtons[i].addEventListener("click", () => {
                /* This can be used to delete completed task when checked
                Storage.removeTask(project, project.getTask(i).getName());
                UI.openProject(project);
                */

                if (completedButtons[i].getAttribute("data-completed") === "false") {
                    completedButtons[i].innerHTML = `<span class="material-icons">check_circle_outline</span>`;
                    completedButtons[i].setAttribute("data-completed", "true");
                } else {
                    completedButtons[i].innerHTML = `<span class="material-icons">radio_button_unchecked</span>`;
                    completedButtons[i].setAttribute("data-completed", "false");
                }
            });
        }
    }
    static openAddTaskPopup() {
        document.querySelector(".button-add-task").remove();
        this.content.appendChild(this.getAddTaskPopup());
    }
    static closeAddTaskPopup() {
        document.querySelector(".add-task-popup").remove();
        this.content.append(this.getAddTaskButton());
    }
    static initAddProjectButton() {
        const addProjectButton = document.querySelector(".add-project-button");
        addProjectButton.addEventListener("click", () => {
            //Storage.addProject(new Project());
            //console.log(Storage.getTodoList().getProjects());
            //this.loadProjects();
            this.openAddProjectPopup();
        });
    }
    static getAddProjectPopup() {
        const popup = document.createElement("div");
        popup.classList.add("add-project-popup");

        const textInput = document.createElement("input");
        textInput.setAttribute("type", "text");
        textInput.classList.add("add-project-popup-input");

        const buttons = document.createElement("div");
        buttons.classList.add("add-project-popup-buttons");

        const buttonAdd = document.createElement("button");
        buttonAdd.textContent = "Add";
        buttonAdd.classList.add("add-project-popup-add");
        buttons.appendChild(buttonAdd);
        buttonAdd.addEventListener("click", () => {
            const input = document.querySelector(".add-project-popup-input");
            console.log("hi" + input.value + "hi");
            const newProject = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](input.value);
            _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProject); // Saves new Project
            this.addProject(newProject); // Displays new Project

            this.closeAddProjectPopup(); // closes the popup
            this.openProject(newProject);
        });

        const buttonCancel = document.createElement("button");
        buttonCancel.textContent = "Cancel";
        buttonCancel.classList.add("add-project-popup-cancel");
        buttons.appendChild(buttonCancel);
        buttonCancel.addEventListener("click", () => {
            this.closeAddProjectPopup();
        });

        popup.append(textInput, buttons);

        return popup;
    }
    static openAddProjectPopup() {
        const addProjectButton = document.querySelector(".add-project-button");
        addProjectButton.remove();

        const nav = document.querySelector("nav");
        nav.appendChild(this.getAddProjectPopup());
    }
    static closeAddProjectPopup() {
        document.querySelector(".add-project-popup").remove();

        const addProjectButton = document.createElement("button");
        addProjectButton.classList.add("add-project-button");
        addProjectButton.innerHTML = `<h3>Add Project</h3>`;

        document.querySelector("nav").appendChild(addProjectButton);
        this.initAddProjectButton();
    }
}


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/TodoList */ "./src/modules/TodoList.js");
/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Task */ "./src/modules/Task.js");
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Project */ "./src/modules/Project.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");







document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].loadHomepage);

// Testing

console.log(_modules_Storage__WEBPACK_IMPORTED_MODULE_5__["default"].getTodoList());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFPO0FBQzFDLFlBQVksMkRBQWtCLGNBQWM7QUFDNUMseUNBQXlDO0FBQ3pDO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1UEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ1M7QUFDWTtBQUNSO0FBQ007QUFDQTtBQUN4QztBQUNBLDhDQUE4QyxnRUFBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvaXQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9tb2R1bGVzL1RvZG9MaXN0LmpzIiwid2VicGFjazovL2RvaXQvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9kb2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RvaXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZG9pdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZG9pdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RvaXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb2l0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5tYWluIHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwMHB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAyMjQsIDI1NSk7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG4uZGVmYXVsdC1wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG4uZGVmYXVsdC1wcm9qZWN0cy1idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcbi5wcm9qZWN0cy10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIsXFxyXFxuLmRlZmF1bHQtcHJvamVjdHMtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XFxyXFxufVxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxufVxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZGVsZXRlLXByb2plY3Qge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbi1kZWxldGUtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDIwMHB4O1xcclxcbiAgICB0b3A6IDEwMHB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxMDBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRhc2s6aG92ZXIsXFxyXFxuLmJ1dHRvbi1hZGQtdGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICAgIC8qIFBvc2l0aW9uaW5nICovXFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHJcXG4gICAgLyogRGVzaWduICovXFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZWRpdC10YXNrLFxcclxcbi5idXR0b24tcmVtb3ZlLXRhc2ssXFxyXFxuLmJ1dHRvbi1jb21wbGV0ZS10YXNrIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tY29tcGxldGUtdGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcbi5idXR0b24tYWRkLXRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1pbnB1dCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1idXR0b25zLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYWRkLFxcclxcbi5hZGQtdGFzay1wb3B1cC1jYW5jZWwsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWFkZCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1hZGQsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWFkZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1jYW5jZWwsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdC1wb3B1cCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTs7SUFFYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxn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XHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5tYWluIHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwMHB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAyMjQsIDI1NSk7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG4uZGVmYXVsdC1wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG4uZGVmYXVsdC1wcm9qZWN0cy1idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcbi5wcm9qZWN0cy10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIsXFxyXFxuLmRlZmF1bHQtcHJvamVjdHMtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XFxyXFxufVxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxufVxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZGVsZXRlLXByb2plY3Qge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbi1kZWxldGUtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDIwMHB4O1xcclxcbiAgICB0b3A6IDEwMHB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxMDBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRhc2s6aG92ZXIsXFxyXFxuLmJ1dHRvbi1hZGQtdGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICAgIC8qIFBvc2l0aW9uaW5nICovXFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHJcXG4gICAgLyogRGVzaWduICovXFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZWRpdC10YXNrLFxcclxcbi5idXR0b24tcmVtb3ZlLXRhc2ssXFxyXFxuLmJ1dHRvbi1jb21wbGV0ZS10YXNrIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tY29tcGxldGUtdGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcbi5idXR0b24tYWRkLXRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1pbnB1dCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1idXR0b25zLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYWRkLFxcclxcbi5hZGQtdGFzay1wb3B1cC1jYW5jZWwsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWFkZCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1hZGQsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWFkZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1jYW5jZWwsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdC1wb3B1cCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIFRhc2sgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICBpZiAodGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gbmV3VGFzay5nZXROYW1lKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYSBuYW1lIGhhcyBiZWVuIGdpdmVuXHJcbiAgICAgICAgaWYgKG5ld1Rhc2suZ2V0TmFtZSgpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gaWYgbm90LCBzZXQgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgICAgIG5ld1Rhc2suc2V0TmFtZSh0aGlzLmdldERlZmF1bHRUYXNrTmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Kn0geCBOdW1iZXIvU3RyaW5nL1Rhc2tcclxuICAgICAqIEByZXR1cm5zIE5FdyB0YXNrcyBBcnJheVxyXG4gICAgICovXHJcbiAgICByZW1vdmVUYXNrKHgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSAhPT0geCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh4LCAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh4IGluc3RhbmNlb2YgVGFzaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrICE9PSB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuZXdQcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5ld1Byb2plY3ROYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhc2tzKG5ld1Rhc2tzKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IG5ld1Rhc2tzO1xyXG4gICAgfVxyXG4gICAgZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFzayh4KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmICh4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzW3hdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBpZiAoeCBpbnN0YW5jZW9mIFRhc2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2sgPT09IHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdFRhc2tOYW1lKCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmdldE5hbWUoKSA9PT0gYFRhc2ske2NvdW50fWApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGBUYXNrJHtjb3VudH1gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL1RvZG9MaXN0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcclxuXHJcbi8vIE1vZHVsZSBmb3Igc3RvcmluZyB0aGUgZGF0YVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcclxuICAgIHN0YXRpYyBzYXZlVG9kb0xpc3QodG9kb0xpc3QpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKG5ldyBUb2RvTGlzdCgpLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpKTtcclxuXHJcbiAgICAgICAgdG9kb0xpc3Quc2V0UHJvamVjdHModG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpKTtcclxuXHJcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3Quc2V0VGFza3MocHJvamVjdC5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbW92ZVByb2plY3QoeCkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xyXG4gICAgICAgIHRvZG9MaXN0LnJlbW92ZVByb2plY3QoeCk7XHJcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZFRhc2socHJvamVjdCwgdGFzaykge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xyXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdCkuYWRkVGFzayh0YXNrKTtcclxuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVtb3ZlVGFzayhwcm9qZWN0LCB0YXNrKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcblxyXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdCkucmVtb3ZlVGFzayh0YXNrKTtcclxuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVuYW1lVGFzayhwcm9qZWN0LCB0YXNrLCBuZXdUYXNrTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xyXG5cclxuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3QpLmdldFRhc2sodGFzaykuc2V0TmFtZShuZXdUYXNrTmFtZSk7XHJcblxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW5hbWVQcm9qZWN0KHByb2plY3QsIG5ld1Byb2plY3ROYW1lKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcblxyXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdCkuc2V0TmFtZShuZXdQcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUYXNrIENsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24gPSBcIm5vIGRlc2NyaXB0aW9uXCIsIGR1ZURhdGUgPSBcIk5vIGRhdGVcIikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuZXdUYXNrTmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5ld1Rhc2tOYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH1cclxuICAgIGdldER1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcclxuXHJcbi8vIE1haW4gVG9kby1MaXN0IE1vZHVsZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIkhvbWVcIikpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlRvZGF5XCIpKTtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUaGlzIHdlZWtcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGEgbmFtZSBoYXMgYmVlbiBnaXZlblxyXG4gICAgICAgIGlmIChuZXdQcm9qZWN0LmdldE5hbWUoKSA9PT0gdW5kZWZpbmVkIHx8IG5ld1Byb2plY3QuZ2V0TmFtZSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3Quc2V0TmFtZSh0aGlzLmdldERlZmF1bHRQcm9qZWN0TmFtZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIFByb2plY3QgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gbmV3UHJvamVjdC5nZXROYW1lKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIH1cclxuICAgIHJlbW92ZVByb2plY3QoeCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpICE9PSB4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09IFwib2JqZWN0XCIgfHwgeCBpbnN0YW5jZW9mIFByb2plY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0ICE9PSB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvamVjdHMobmV3UHJvamVjdHMpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gbmV3UHJvamVjdHM7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9qZWN0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0KHgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKHggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh4IGluc3RhbmNlb2YgUHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHguZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvZGF5KCkge1xyXG4gICAgICAgIC8vIG5vdCBhdmFpbGFibGVcclxuICAgIH1cclxuICAgIHNldFdlZWtseSgpIHtcclxuICAgICAgICAvLyBub3QgYXZhaWxhYmxlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdFByb2plY3ROYW1lKCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldLmdldE5hbWUoKSA9PT0gYFByb2plY3Qke2NvdW50fWApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGBQcm9qZWN0JHtjb3VudH1gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XHJcbiAgICAvLyBMb2FkaW5nIENvbnRlbnRcclxuICAgIHN0YXRpYyBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBzdGF0aWMgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcclxuICAgIHN0YXRpYyBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgc3RhdGljIHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XHJcbiAgICBzdGF0aWMgY3VycmVudFByb2plY3Q7XHJcblxyXG4gICAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcclxuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKTtcclxuICAgICAgICBVSS5pbml0RGVmYXVsdFByb2plY3RzKCk7XHJcbiAgICAgICAgVUkuaW5pdEFkZFByb2plY3RCdXR0b24oKTtcclxuICAgICAgICBVSS5vcGVuUHJvamVjdChcIkhvbWVcIik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5pdERlZmF1bHRQcm9qZWN0cygpIHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWZhdWx0LXByb2plY3RzLWJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFVJLm9wZW5Qcm9qZWN0KGJ1dHRvbi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0cygpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJIb21lXCIgJiYgcHJvamVjdC5nZXROYW1lKCkgIT09IFwiVG9kYXlcIiAmJiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJUaGlzIFdlZWtcIikge1xyXG4gICAgICAgICAgICAgICAgVUkuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLnJlbW92ZVByb2plY3QocHJvamVjdC5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9qZWN0cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsZWFyPC9zcGFuPmA7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tZGVsZXRlLXByb2plY3RcIik7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLnByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcInRhc2tuYW1lXCIsIHRhc2suZ2V0TmFtZSgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLmdldE5hbWUoKTtcclxuICAgICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25Db21wbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbkNvbXBsZXRlVGFzay5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbXBsZXRlLXRhc2tcIik7XHJcbiAgICAgICAgYnV0dG9uQ29tcGxldGVUYXNrLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cmFkaW9fYnV0dG9uX3VuY2hlY2tlZDwvc3Bhbj5gO1xyXG4gICAgICAgIGJ1dHRvbkNvbXBsZXRlVGFzay5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBsZXRlZFwiLCBcImZhbHNlXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25FZGl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uRWRpdFRhc2suY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1lZGl0LXRhc2tcIik7XHJcbiAgICAgICAgYnV0dG9uRWRpdFRhc2suaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lZGl0PC9zcGFuPmA7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvblJlbW92ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvblJlbW92ZVRhc2suY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1yZW1vdmUtdGFza1wiKTtcclxuICAgICAgICBidXR0b25SZW1vdmVUYXNrLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xlYXI8L3NwYW4+YDtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChidXR0b25Db21wbGV0ZVRhc2ssIHRhc2tOYW1lLCBidXR0b25FZGl0VGFzaywgYnV0dG9uUmVtb3ZlVGFzayk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgb3BlblByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgICAgICAvLyBDbGVhciBjb250ZW50LWRpdlxyXG4gICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUYXNrKHRhc2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tYWRkLXRhc2tcIik7XHJcbiAgICAgICAgYWRkVGFza0J1dHRvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJidXR0b24tYWRkLXRhc2staWNvblwiPk88L2k+IDxoMyBidXR0b24tYWRkLXRhc2stdGl0bGU+QWRkIFRhc2s8L2gzPiBgO1xyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgdGFza1wiKTtcclxuICAgICAgICAgICAgVUkub3BlbkFkZFRhc2tQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRBZGRUYXNrQnV0dG9uKCkpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRhc2tCdXR0b25zKHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBZGRUYXNrQnV0dG9uKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1hZGQtdGFza1wiKTtcclxuICAgICAgICBhZGRUYXNrQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImJ1dHRvbi1hZGQtdGFzay1pY29uXCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvc3Bhbj48L2k+IDxoMyBidXR0b24tYWRkLXRhc2stdGl0bGU+QWRkIFRhc2s8L2gzPiBgO1xyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgdGFza1wiKTtcclxuICAgICAgICAgICAgVUkub3BlbkFkZFRhc2tQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhZGRUYXNrQnV0dG9uO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFkZFRhc2tQb3B1cCgpIHtcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLXBvcHVwXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgIHRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stcG9wdXAtaW5wdXRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLXBvcHVwLWJ1dHRvbnNcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uQWRkLnRleHRDb250ZW50ID0gXCJBZGRcIjtcclxuICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLXBvcHVwLWFkZFwiKTtcclxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbkFkZCk7XHJcbiAgICAgICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1wb3B1cC1pbnB1dFwiKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKGlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5hZGRUYXNrKHRoaXMuY3VycmVudFByb2plY3QsIG5ld1Rhc2spOyAvLyBTYXZlcyBuZXcgVGFza1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRhc2sobmV3VGFzayk7IC8vIERpc3BsYXlzIG5ldyBUYXNrXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQWRkVGFza1BvcHVwKCk7IC8vIGNsb3NlcyB0aGUgcG9wdXBcclxuICAgICAgICAgICAgdGhpcy5vcGVuUHJvamVjdCh0aGlzLmN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b25DYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG4gICAgICAgIGJ1dHRvbkNhbmNlbC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stcG9wdXAtY2FuY2VsXCIpO1xyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKTtcclxuICAgICAgICBidXR0b25DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUFkZFRhc2tQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwb3B1cC5hcHBlbmQodGV4dElucHV0LCBidXR0b25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBvcHVwO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGluaXRUYXNrQnV0dG9ucyhwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLXJlbW92ZS10YXNrXCIpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tZWRpdC10YXNrXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbi1jb21wbGV0ZS10YXNrXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZW1vdmVCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLnJlbW92ZVRhc2socHJvamVjdCwgcHJvamVjdC5nZXRUYXNrKGkpLmdldE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBVSS5vcGVuUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVkaXRpbmcgdGFzayBcIiArIHByb2plY3QuZ2V0VGFzayhpKS5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29tcGxldGVkQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLyogVGhpcyBjYW4gYmUgdXNlZCB0byBkZWxldGUgY29tcGxldGVkIHRhc2sgd2hlbiBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLnJlbW92ZVRhc2socHJvamVjdCwgcHJvamVjdC5nZXRUYXNrKGkpLmdldE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBVSS5vcGVuUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZEJ1dHRvbnNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jb21wbGV0ZWRcIikgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZEJ1dHRvbnNbaV0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVja19jaXJjbGVfb3V0bGluZTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZEJ1dHRvbnNbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1jb21wbGV0ZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRCdXR0b25zW2ldLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cmFkaW9fYnV0dG9uX3VuY2hlY2tlZDwvc3Bhbj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZEJ1dHRvbnNbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1jb21wbGV0ZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIG9wZW5BZGRUYXNrUG9wdXAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYWRkLXRhc2tcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuZ2V0QWRkVGFza1BvcHVwKCkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNsb3NlQWRkVGFza1BvcHVwKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stcG9wdXBcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmdldEFkZFRhc2tCdXR0b24oKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5pdEFkZFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnV0dG9uXCIpO1xyXG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy9TdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coU3RvcmFnZS5nZXRUb2RvTGlzdCgpLmdldFByb2plY3RzKCkpO1xyXG4gICAgICAgICAgICAvL3RoaXMubG9hZFByb2plY3RzKCk7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkFkZFByb2plY3RQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFkZFByb2plY3RQb3B1cCgpIHtcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LXBvcHVwXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgIHRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtcG9wdXAtaW5wdXRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbnNcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uQWRkLnRleHRDb250ZW50ID0gXCJBZGRcIjtcclxuICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LXBvcHVwLWFkZFwiKTtcclxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbkFkZCk7XHJcbiAgICAgICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1wb3B1cC1pbnB1dFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaVwiICsgaW5wdXQudmFsdWUgKyBcImhpXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3UHJvamVjdCk7IC8vIFNhdmVzIG5ldyBQcm9qZWN0XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTsgLy8gRGlzcGxheXMgbmV3IFByb2plY3RcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBZGRQcm9qZWN0UG9wdXAoKTsgLy8gY2xvc2VzIHRoZSBwb3B1cFxyXG4gICAgICAgICAgICB0aGlzLm9wZW5Qcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbkNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbiAgICAgICAgYnV0dG9uQ2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1wb3B1cC1jYW5jZWxcIik7XHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b25DYW5jZWwpO1xyXG4gICAgICAgIGJ1dHRvbkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQWRkUHJvamVjdFBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBvcHVwLmFwcGVuZCh0ZXh0SW5wdXQsIGJ1dHRvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9wdXA7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgb3BlbkFkZFByb2plY3RQb3B1cCgpIHtcclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idXR0b25cIik7XHJcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQodGhpcy5nZXRBZGRQcm9qZWN0UG9wdXAoKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xvc2VBZGRQcm9qZWN0UG9wdXAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1wb3B1cFwiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnV0dG9uXCIpO1xyXG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gYDxoMz5BZGQgUHJvamVjdDwvaDM+YDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcclxuICAgICAgICB0aGlzLmluaXRBZGRQcm9qZWN0QnV0dG9uKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XHJcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9tb2R1bGVzL1RvZG9MaXN0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvVGFza1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL1Byb2plY3RcIjtcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vbW9kdWxlcy9TdG9yYWdlXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBVSS5sb2FkSG9tZXBhZ2UpO1xyXG5cclxuLy8gVGVzdGluZ1xyXG5cclxuY29uc29sZS5sb2coU3RvcmFnZS5nZXRUb2RvTGlzdCgpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9