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
        if (newTask.getName() === undefined || newTask.getName().trim().length === 0) {
            // i decided to not add a new task, since a new task without a name is essentially wortless
            return;

            // Use this to get default name
            // newTask.setName(this.getDefaultTaskName());
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
        if (newProject.getName() === undefined || newProject.getName().trim().length === 0) {
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

        //const buttonEditTask = document.createElement("button");
        //buttonEditTask.classList.add("button-edit-task");
        //buttonEditTask.innerHTML = `<span class="material-icons">edit</span>`;
        const dueDate = document.createElement("p");
        dueDate.textContent = "No Date";
        dueDate.classList.add("due-date");
        dueDate.addEventListener("click", () => {
            dueDateInput.hidden = false;
            dueDate.hidden = true;
        });

        const dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        dueDateInput.hidden = true;
        dueDateInput.classList.add("due-date-input");
        dueDateInput.addEventListener("change", () => {
            dueDateInput.hidden = true;
            dueDate.hidden = false;
            this.setTaskDate(task, dueDateInput.value);
        });

        const buttonRemoveTask = document.createElement("button");
        buttonRemoveTask.classList.add("button-remove-task");
        buttonRemoveTask.innerHTML = `<span class="material-icons">clear</span>`;

        container.append(buttonCompleteTask, taskName, dueDate, dueDateInput, buttonRemoveTask);
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
            //editButtons[i].addEventListener("click", () => {
            //    console.log("Editing task " + project.getTask(i).getName());
            //});
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

    static setTaskDate(task, date) {
        const currentTask = document.querySelector(`div[taskname="${task.getName()}"]`);
        dueDate.textContent = new Date().toLocaleDateString("de-DE");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxvRUFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2l0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kb2l0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9kb2l0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RvaXQvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL2RvaXQvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL2RvaXQvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL2RvaXQvLi9zcmMvbW9kdWxlcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vZG9pdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kb2l0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RvaXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RvaXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kb2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxubWFpbiB7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMDBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMjI0LCAyNTUpO1xcclxcblxcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuLmRlZmF1bHQtcHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG59XFxyXFxuLmRlZmF1bHQtcHJvamVjdHMtYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG4ucHJvamVjdHMtdGl0bGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyLFxcclxcbi5kZWZhdWx0LXByb2plY3RzLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xcclxcbn1cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWRlbGV0ZS1wcm9qZWN0IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5idXR0b24tZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIG1pbi13aWR0aDogNTAlO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAyMDBweDtcXHJcXG4gICAgdG9wOiAxMDBweDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTAwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrOmhvdmVyLFxcclxcbi5idXR0b24tYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcbi50YXNrLW5hbWUge1xcclxcbiAgICAvKiBQb3NpdGlvbmluZyAqL1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuICAgIC8qIERlc2lnbiAqL1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWVkaXQtdGFzayxcXHJcXG4uYnV0dG9uLXJlbW92ZS10YXNrLFxcclxcbi5idXR0b24tY29tcGxldGUtdGFzayB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNvbXBsZXRlLXRhc2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG4uYnV0dG9uLWFkZC10YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtaW5wdXQsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYnV0dG9ucyxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLWFkZCxcXHJcXG4uYWRkLXRhc2stcG9wdXAtY2FuY2VsLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1hZGQsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYWRkLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1hZGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtY2FuY2VsLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1jYW5jZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3QtcG9wdXAge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQTs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7QUFD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Q3ZCO0FBQ0E7O0lBRUksNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxubWFpbiB7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMDBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMjI0LCAyNTUpO1xcclxcblxcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuLmRlZmF1bHQtcHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG59XFxyXFxuLmRlZmF1bHQtcHJvamVjdHMtYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG4ucHJvamVjdHMtdGl0bGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyLFxcclxcbi5kZWZhdWx0LXByb2plY3RzLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xcclxcbn1cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWRlbGV0ZS1wcm9qZWN0IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5idXR0b24tZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIG1pbi13aWR0aDogNTAlO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAyMDBweDtcXHJcXG4gICAgdG9wOiAxMDBweDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTAwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrOmhvdmVyLFxcclxcbi5idXR0b24tYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcbi50YXNrLW5hbWUge1xcclxcbiAgICAvKiBQb3NpdGlvbmluZyAqL1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuICAgIC8qIERlc2lnbiAqL1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWVkaXQtdGFzayxcXHJcXG4uYnV0dG9uLXJlbW92ZS10YXNrLFxcclxcbi5idXR0b24tY29tcGxldGUtdGFzayB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNvbXBsZXRlLXRhc2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG4uYnV0dG9uLWFkZC10YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtaW5wdXQsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYnV0dG9ucyxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLWFkZCxcXHJcXG4uYWRkLXRhc2stcG9wdXAtY2FuY2VsLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1hZGQsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYWRkLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1hZGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtY2FuY2VsLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1jYW5jZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3QtcG9wdXAge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrLmpzXCI7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sobmV3VGFzaykge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBUYXNrIGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IG5ld1Rhc2suZ2V0TmFtZSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENoZWNrIGlmIGEgbmFtZSBoYXMgYmVlbiBnaXZlblxyXG4gICAgICAgIGlmIChuZXdUYXNrLmdldE5hbWUoKSA9PT0gdW5kZWZpbmVkIHx8IG5ld1Rhc2suZ2V0TmFtZSgpLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gaSBkZWNpZGVkIHRvIG5vdCBhZGQgYSBuZXcgdGFzaywgc2luY2UgYSBuZXcgdGFzayB3aXRob3V0IGEgbmFtZSBpcyBlc3NlbnRpYWxseSB3b3J0bGVzc1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAvLyBVc2UgdGhpcyB0byBnZXQgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgICAgIC8vIG5ld1Rhc2suc2V0TmFtZSh0aGlzLmdldERlZmF1bHRUYXNrTmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Kn0geCBOdW1iZXIvU3RyaW5nL1Rhc2tcclxuICAgICAqIEByZXR1cm5zIE5FdyB0YXNrcyBBcnJheVxyXG4gICAgICovXHJcbiAgICByZW1vdmVUYXNrKHgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSAhPT0geCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh4LCAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh4IGluc3RhbmNlb2YgVGFzaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrICE9PSB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuZXdQcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5ld1Byb2plY3ROYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhc2tzKG5ld1Rhc2tzKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IG5ld1Rhc2tzO1xyXG4gICAgfVxyXG4gICAgZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFzayh4KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmICh4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzW3hdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBpZiAoeCBpbnN0YW5jZW9mIFRhc2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2sgPT09IHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdFRhc2tOYW1lKCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmdldE5hbWUoKSA9PT0gYFRhc2ske2NvdW50fWApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGBUYXNrJHtjb3VudH1gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL1RvZG9MaXN0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcclxuXHJcbi8vIE1vZHVsZSBmb3Igc3RvcmluZyB0aGUgZGF0YVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcclxuICAgIHN0YXRpYyBzYXZlVG9kb0xpc3QodG9kb0xpc3QpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKG5ldyBUb2RvTGlzdCgpLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpKTtcclxuXHJcbiAgICAgICAgdG9kb0xpc3Quc2V0UHJvamVjdHModG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpKTtcclxuXHJcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3Quc2V0VGFza3MocHJvamVjdC5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbW92ZVByb2plY3QoeCkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xyXG4gICAgICAgIHRvZG9MaXN0LnJlbW92ZVByb2plY3QoeCk7XHJcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZFRhc2socHJvamVjdCwgdGFzaykge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xyXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdCkuYWRkVGFzayh0YXNrKTtcclxuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVtb3ZlVGFzayhwcm9qZWN0LCB0YXNrKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcblxyXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdCkucmVtb3ZlVGFzayh0YXNrKTtcclxuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVuYW1lVGFzayhwcm9qZWN0LCB0YXNrLCBuZXdUYXNrTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xyXG5cclxuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3QpLmdldFRhc2sodGFzaykuc2V0TmFtZShuZXdUYXNrTmFtZSk7XHJcblxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW5hbWVQcm9qZWN0KHByb2plY3QsIG5ld1Byb2plY3ROYW1lKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcblxyXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdCkuc2V0TmFtZShuZXdQcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUYXNrIENsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24gPSBcIm5vIGRlc2NyaXB0aW9uXCIsIGR1ZURhdGUgPSBcIk5vIGRhdGVcIikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuZXdUYXNrTmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5ld1Rhc2tOYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH1cclxuICAgIGdldER1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcclxuXHJcbi8vIE1haW4gVG9kby1MaXN0IE1vZHVsZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIkhvbWVcIikpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlRvZGF5XCIpKTtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUaGlzIHdlZWtcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGEgbmFtZSBoYXMgYmVlbiBnaXZlblxyXG4gICAgICAgIGlmIChuZXdQcm9qZWN0LmdldE5hbWUoKSA9PT0gdW5kZWZpbmVkIHx8IG5ld1Byb2plY3QuZ2V0TmFtZSgpLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbmV3UHJvamVjdC5zZXROYW1lKHRoaXMuZ2V0RGVmYXVsdFByb2plY3ROYW1lKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgUHJvamVjdCBhbHJlYWR5IGV4aXN0c1xyXG4gICAgICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBuZXdQcm9qZWN0LmdldE5hbWUoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlUHJvamVjdCh4KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgIT09IHgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiB8fCB4IGluc3RhbmNlb2YgUHJvamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QgIT09IHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBuZXdQcm9qZWN0cztcclxuICAgIH1cclxuICAgIGdldFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoeCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0geCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAoeCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1t4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0geC5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG9kYXkoKSB7XHJcbiAgICAgICAgLy8gbm90IGF2YWlsYWJsZVxyXG4gICAgfVxyXG4gICAgc2V0V2Vla2x5KCkge1xyXG4gICAgICAgIC8vIG5vdCBhdmFpbGFibGVcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0UHJvamVjdE5hbWUoKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0uZ2V0TmFtZSgpID09PSBgUHJvamVjdCR7Y291bnR9YCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIGkgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYFByb2plY3Qke2NvdW50fWA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZVwiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuICAgIC8vIExvYWRpbmcgQ29udGVudFxyXG4gICAgc3RhdGljIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIHN0YXRpYyBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyXCIpO1xyXG4gICAgc3RhdGljIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBzdGF0aWMgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcclxuICAgIHN0YXRpYyBjdXJyZW50UHJvamVjdDtcclxuXHJcbiAgICBzdGF0aWMgbG9hZEhvbWVwYWdlKCkge1xyXG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpO1xyXG4gICAgICAgIFVJLmluaXREZWZhdWx0UHJvamVjdHMoKTtcclxuICAgICAgICBVSS5pbml0QWRkUHJvamVjdEJ1dHRvbigpO1xyXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KFwiSG9tZVwiKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBpbml0RGVmYXVsdFByb2plY3RzKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlZmF1bHQtcHJvamVjdHMtYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVUkub3BlblByb2plY3QoYnV0dG9uLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbG9hZFByb2plY3RzKCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcclxuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIkhvbWVcIiAmJiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJUb2RheVwiICYmIHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIlRoaXMgV2Vla1wiKSB7XHJcbiAgICAgICAgICAgICAgICBVSS5hZGRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UucmVtb3ZlUHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3RzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xlYXI8L3NwYW4+YDtcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1kZWxldGUtcHJvamVjdFwiKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgICAgIHRoaXMucHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwidGFza25hbWVcIiwgdGFzay5nZXROYW1lKCkpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0TmFtZSgpO1xyXG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbXBsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uQ29tcGxldGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29tcGxldGUtdGFza1wiKTtcclxuICAgICAgICBidXR0b25Db21wbGV0ZVRhc2suaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5yYWRpb19idXR0b25fdW5jaGVja2VkPC9zcGFuPmA7XHJcbiAgICAgICAgYnV0dG9uQ29tcGxldGVUYXNrLnNldEF0dHJpYnV0ZShcImRhdGEtY29tcGxldGVkXCIsIFwiZmFsc2VcIik7XHJcblxyXG4gICAgICAgIC8vY29uc3QgYnV0dG9uRWRpdFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIC8vYnV0dG9uRWRpdFRhc2suY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1lZGl0LXRhc2tcIik7XHJcbiAgICAgICAgLy9idXR0b25FZGl0VGFzay5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVkaXQ8L3NwYW4+YDtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiTm8gRGF0ZVwiO1xyXG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xyXG4gICAgICAgIGR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkdWVEYXRlLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgICAgIGR1ZURhdGVJbnB1dC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtaW5wdXRcIik7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHVlRGF0ZS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRUYXNrRGF0ZSh0YXNrLCBkdWVEYXRlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25SZW1vdmVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b25SZW1vdmVUYXNrLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tcmVtb3ZlLXRhc2tcIik7XHJcbiAgICAgICAgYnV0dG9uUmVtb3ZlVGFzay5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsZWFyPC9zcGFuPmA7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uQ29tcGxldGVUYXNrLCB0YXNrTmFtZSwgZHVlRGF0ZSwgZHVlRGF0ZUlucHV0LCBidXR0b25SZW1vdmVUYXNrKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBvcGVuUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIC8vIENsZWFyIGNvbnRlbnQtZGl2XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRhc2sodGFzayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1hZGQtdGFza1wiKTtcclxuICAgICAgICBhZGRUYXNrQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImJ1dHRvbi1hZGQtdGFzay1pY29uXCI+TzwvaT4gPGgzIGJ1dHRvbi1hZGQtdGFzay10aXRsZT5BZGQgVGFzazwvaDM+IGA7XHJcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGluZyB0YXNrXCIpO1xyXG4gICAgICAgICAgICBVSS5vcGVuQWRkVGFza1BvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmdldEFkZFRhc2tCdXR0b24oKSk7XHJcbiAgICAgICAgdGhpcy5pbml0VGFza0J1dHRvbnMocHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFkZFRhc2tCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWFkZC10YXNrXCIpO1xyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiYnV0dG9uLWFkZC10YXNrLWljb25cIj48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9zcGFuPjwvaT4gPGgzIGJ1dHRvbi1hZGQtdGFzay10aXRsZT5BZGQgVGFzazwvaDM+IGA7XHJcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGluZyB0YXNrXCIpO1xyXG4gICAgICAgICAgICBVSS5vcGVuQWRkVGFza1BvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFkZFRhc2tCdXR0b247XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0QWRkVGFza1BvcHVwKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stcG9wdXBcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgdGV4dElucHV0LmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1wb3B1cC1pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stcG9wdXAtYnV0dG9uc1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b25BZGQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xyXG4gICAgICAgIGJ1dHRvbkFkZC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stcG9wdXAtYWRkXCIpO1xyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uQWRkKTtcclxuICAgICAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLXBvcHVwLWlucHV0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLmFkZFRhc2sodGhpcy5jdXJyZW50UHJvamVjdCwgbmV3VGFzayk7IC8vIFNhdmVzIG5ldyBUYXNrXHJcbiAgICAgICAgICAgIHRoaXMuYWRkVGFzayhuZXdUYXNrKTsgLy8gRGlzcGxheXMgbmV3IFRhc2tcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBZGRUYXNrUG9wdXAoKTsgLy8gY2xvc2VzIHRoZSBwb3B1cFxyXG4gICAgICAgICAgICB0aGlzLm9wZW5Qcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbkNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbiAgICAgICAgYnV0dG9uQ2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1wb3B1cC1jYW5jZWxcIik7XHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b25DYW5jZWwpO1xyXG4gICAgICAgIGJ1dHRvbkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQWRkVGFza1BvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBvcHVwLmFwcGVuZCh0ZXh0SW5wdXQsIGJ1dHRvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9wdXA7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5pdFRhc2tCdXR0b25zKHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCByZW1vdmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tcmVtb3ZlLXRhc2tcIik7XHJcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbi1lZGl0LXRhc2tcIik7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLWNvbXBsZXRlLXRhc2tcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2UucmVtb3ZlVGFzayhwcm9qZWN0LCBwcm9qZWN0LmdldFRhc2soaSkuZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIFVJLm9wZW5Qcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9lZGl0QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkVkaXRpbmcgdGFzayBcIiArIHByb2plY3QuZ2V0VGFzayhpKS5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICAvL30pO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRlbGV0ZSBjb21wbGV0ZWQgdGFzayB3aGVuIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2UucmVtb3ZlVGFzayhwcm9qZWN0LCBwcm9qZWN0LmdldFRhc2soaSkuZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIFVJLm9wZW5Qcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkQnV0dG9uc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBsZXRlZFwiKSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkQnV0dG9uc1tpXS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrX2NpcmNsZV9vdXRsaW5lPC9zcGFuPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkQnV0dG9uc1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBsZXRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZEJ1dHRvbnNbaV0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5yYWRpb19idXR0b25fdW5jaGVja2VkPC9zcGFuPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkQnV0dG9uc1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBsZXRlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgb3BlbkFkZFRhc2tQb3B1cCgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hZGQtdGFza1wiKS5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRBZGRUYXNrUG9wdXAoKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xvc2VBZGRUYXNrUG9wdXAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1wb3B1cFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuZ2V0QWRkVGFza0J1dHRvbigpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBpbml0QWRkUHJvamVjdEJ1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idXR0b25cIik7XHJcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1N0b3JhZ2UuYWRkUHJvamVjdChuZXcgUHJvamVjdCgpKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdHMoKSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5sb2FkUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQWRkUHJvamVjdFBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0QWRkUHJvamVjdFBvcHVwKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtcG9wdXBcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgdGV4dElucHV0LmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1wb3B1cC1pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtcG9wdXAtYnV0dG9uc1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b25BZGQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xyXG4gICAgICAgIGJ1dHRvbkFkZC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtcG9wdXAtYWRkXCIpO1xyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uQWRkKTtcclxuICAgICAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LXBvcHVwLWlucHV0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIgKyBpbnB1dC52YWx1ZSArIFwiaGlcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuYWRkUHJvamVjdChuZXdQcm9qZWN0KTsgLy8gU2F2ZXMgbmV3IFByb2plY3RcclxuICAgICAgICAgICAgdGhpcy5hZGRQcm9qZWN0KG5ld1Byb2plY3QpOyAvLyBEaXNwbGF5cyBuZXcgUHJvamVjdFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZUFkZFByb2plY3RQb3B1cCgpOyAvLyBjbG9zZXMgdGhlIHBvcHVwXHJcbiAgICAgICAgICAgIHRoaXMub3BlblByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuICAgICAgICBidXR0b25DYW5jZWwuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbFwiKTtcclxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbkNhbmNlbCk7XHJcbiAgICAgICAgYnV0dG9uQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBZGRQcm9qZWN0UG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kKHRleHRJbnB1dCwgYnV0dG9ucyk7XHJcblxyXG4gICAgICAgIHJldHVybiBwb3B1cDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBvcGVuQWRkUHJvamVjdFBvcHVwKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZCh0aGlzLmdldEFkZFByb2plY3RQb3B1cCgpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjbG9zZUFkZFByb2plY3RQb3B1cCgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LXBvcHVwXCIpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idXR0b25cIik7XHJcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBgPGgzPkFkZCBQcm9qZWN0PC9oMz5gO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xyXG4gICAgICAgIHRoaXMuaW5pdEFkZFByb2plY3RCdXR0b24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0VGFza0RhdGUodGFzaywgZGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W3Rhc2tuYW1lPVwiJHt0YXNrLmdldE5hbWUoKX1cIl1gKTtcclxuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJkZS1ERVwiKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL21vZHVsZXMvVG9kb0xpc3RcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kdWxlcy9UYXNrXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvUHJvamVjdFwiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9tb2R1bGVzL1N0b3JhZ2VcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJLmxvYWRIb21lcGFnZSk7XHJcblxyXG4vLyBUZXN0aW5nXHJcblxyXG5jb25zb2xlLmxvZyhTdG9yYWdlLmdldFRvZG9MaXN0KCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=