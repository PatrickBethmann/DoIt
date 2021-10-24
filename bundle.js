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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n}\r\n\r\n.header {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    background-color: lightskyblue;\r\n    color: white;\r\n}\r\n\r\n.nav {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    top: 100px;\r\n    background-color: rgb(173, 224, 255);\r\n\r\n    width: 200px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    gap: 20px;\r\n    padding: 20px;\r\n}\r\n.default-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: stretch;\r\n    gap: 40px;\r\n}\r\n.default-projects-button {\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n    height: 30px;\r\n    border: none;\r\n    background-color: white;\r\n    cursor: pointer;\r\n}\r\n.projects-title {\r\n    margin-top: 20px;\r\n}\r\n\r\n.project-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: stretch;\r\n    gap: 40px;\r\n}\r\n.project-button {\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n    height: 30px;\r\n    border: none;\r\n    background-color: white;\r\n    cursor: pointer;\r\n}\r\n.button-add-project {\r\n    background-color: skyblue;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n.content {\r\n    min-height: 50%;\r\n    min-width: 50%;\r\n    width: calc(100vw - 200px);\r\n    height: auto;\r\n    position: absolute;\r\n    left: 200px;\r\n    top: 100px;\r\n\r\n    padding: 100px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n\r\n    background-color: aliceblue;\r\n}\r\n.task {\r\n    background-color: white;\r\n    width: 60%;\r\n    height: 40px;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 5px;\r\n}\r\n.task:hover,\r\n.button-add-task:hover {\r\n    background-color: lightgray;\r\n}\r\n.task-name {\r\n    /* Positioning */\r\n    flex: 1;\r\n    margin-right: auto;\r\n\r\n    /* Design */\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n.button-edit-task,\r\n.button-remove-task,\r\n.button-complete-task {\r\n    height: 100%;\r\n    aspect-ratio: 1;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.button-complete-task {\r\n    background: none;\r\n}\r\n.button-add-task {\r\n    display: flex;\r\n    background-color: inherit;\r\n    border: none;\r\n    cursor: pointer;\r\n    height: 40px;\r\n    padding: 10px;\r\n    width: 60%;\r\n    text-align: left;\r\n    gap: 5px;\r\n}\r\n.add-task-popup {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 60%;\r\n    gap: 5px;\r\n}\r\n.add-task-popup-input {\r\n    background-color: white;\r\n    height: 40px;\r\n    border: none;\r\n}\r\n.add-task-popup-buttons {\r\n    display: flex;\r\n    height: 40px;\r\n    justify-content: space-between;\r\n}\r\n.add-task-popup-add,\r\n.add-task-popup-cancel {\r\n    border: none;\r\n    width: 50%;\r\n    cursor: pointer;\r\n}\r\n.add-task-popup-add {\r\n    background-color: lightgreen;\r\n}\r\n.add-task-popup-cancel {\r\n    background-color: lightcoral;\r\n}\r\n\r\n.active {\r\n    visibility: visible;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;AACA;;AAEA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;IACvB,sBAAsB;AAC1B;AACA;AACA;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,aAAa;;IAEb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,OAAO;IACP,SAAS;IACT,UAAU;IACV,oCAAoC;;IAEpC,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,oBAAoB;IACpB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,eAAe;IACf,cAAc;IACd,0BAA0B;IAC1B,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,UAAU;;IAEV,cAAc;;IAEd,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,2BAA2B;IAC3B,mBAAmB;;IAEnB,2BAA2B;AAC/B;AACA;IACI,uBAAuB;IACvB,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,QAAQ;AACZ;AACA;;IAEI,2BAA2B;AAC/B;AACA;IACI,gBAAgB;IAChB,OAAO;IACP,kBAAkB;;IAElB,WAAW;IACX,uBAAuB;IACvB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;;;IAGI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,QAAQ;AACZ;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,QAAQ;AACZ;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;IACb,YAAY;IACZ,8BAA8B;AAClC;AACA;;IAEI,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;AACA;IACI,4BAA4B;AAChC;AACA;IACI,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":[":root {\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n}\r\n\r\n.header {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    background-color: lightskyblue;\r\n    color: white;\r\n}\r\n\r\n.nav {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    top: 100px;\r\n    background-color: rgb(173, 224, 255);\r\n\r\n    width: 200px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    gap: 20px;\r\n    padding: 20px;\r\n}\r\n.default-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: stretch;\r\n    gap: 40px;\r\n}\r\n.default-projects-button {\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n    height: 30px;\r\n    border: none;\r\n    background-color: white;\r\n    cursor: pointer;\r\n}\r\n.projects-title {\r\n    margin-top: 20px;\r\n}\r\n\r\n.project-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: stretch;\r\n    gap: 40px;\r\n}\r\n.project-button {\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n    height: 30px;\r\n    border: none;\r\n    background-color: white;\r\n    cursor: pointer;\r\n}\r\n.button-add-project {\r\n    background-color: skyblue;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n.content {\r\n    min-height: 50%;\r\n    min-width: 50%;\r\n    width: calc(100vw - 200px);\r\n    height: auto;\r\n    position: absolute;\r\n    left: 200px;\r\n    top: 100px;\r\n\r\n    padding: 100px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n\r\n    background-color: aliceblue;\r\n}\r\n.task {\r\n    background-color: white;\r\n    width: 60%;\r\n    height: 40px;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 5px;\r\n}\r\n.task:hover,\r\n.button-add-task:hover {\r\n    background-color: lightgray;\r\n}\r\n.task-name {\r\n    /* Positioning */\r\n    flex: 1;\r\n    margin-right: auto;\r\n\r\n    /* Design */\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n.button-edit-task,\r\n.button-remove-task,\r\n.button-complete-task {\r\n    height: 100%;\r\n    aspect-ratio: 1;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.button-complete-task {\r\n    background: none;\r\n}\r\n.button-add-task {\r\n    display: flex;\r\n    background-color: inherit;\r\n    border: none;\r\n    cursor: pointer;\r\n    height: 40px;\r\n    padding: 10px;\r\n    width: 60%;\r\n    text-align: left;\r\n    gap: 5px;\r\n}\r\n.add-task-popup {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 60%;\r\n    gap: 5px;\r\n}\r\n.add-task-popup-input {\r\n    background-color: white;\r\n    height: 40px;\r\n    border: none;\r\n}\r\n.add-task-popup-buttons {\r\n    display: flex;\r\n    height: 40px;\r\n    justify-content: space-between;\r\n}\r\n.add-task-popup-add,\r\n.add-task-popup-cancel {\r\n    border: none;\r\n    width: 50%;\r\n    cursor: pointer;\r\n}\r\n.add-task-popup-add {\r\n    background-color: lightgreen;\r\n}\r\n.add-task-popup-cancel {\r\n    background-color: lightcoral;\r\n}\r\n\r\n.active {\r\n    visibility: visible;\r\n}\r\n"],"sourceRoot":""}]);
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
        // Check if Project already exists
        if (this.projects.find((project) => project.getName() === newProject.getName())) {
            return;
        }

        // Check if a name has been given
        if (newProject.getName() === undefined) {
            newProject.setName(this.getDefaultProjectName());
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
            UI.addProject(project);
        });

        const addProjectButton = document.querySelector(".add-project-button");
        addProjectButton.addEventListener("click", () => {
            _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(new _Project__WEBPACK_IMPORTED_MODULE_1__["default"]());
            this.loadProjects();
        });
    }
    static addProject(project) {
        const container = document.createElement("button");
        container.textContent = project.getName();
        container.classList.add("project-button");
        container.addEventListener("click", () => {
            this.openProject(project);
        });

        this.projectList.appendChild(container);
    }
    static addTask(task) {
        const container = document.createElement("div");
        container.classList.add("task");
        container.setAttribute("taskname", task.getName());
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("button-remove-task");

        container.innerHTML = `<button class="button-complete-task" data-completed="false">O</button><h3 class="task-name">${task.getName()}</h3><button class="button-edit-task">O</button>`;
        container.appendChild(deleteButton);
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
        addTaskButton.innerHTML = `<i class="button-add-task-icon">O</i> <h3 button-add-task-title>Add Task</h3> `;
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
                if (completedButtons[i].getAttribute("data-completed") === "false") {
                    completedButtons[i].textContent = "^^";
                    completedButtons[i].setAttribute("data-completed", "true");
                } else {
                    completedButtons[i].textContent = "O";
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
let todolist1 = _modules_Storage__WEBPACK_IMPORTED_MODULE_5__["default"].getTodoList();

const project1 = todolist1.getProject(0);

_modules_Storage__WEBPACK_IMPORTED_MODULE_5__["default"].saveTodoList(todolist1);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDUztBQUNZO0FBQ1I7QUFDTTtBQUNBO0FBQ3hDO0FBQ0EsOENBQThDLGdFQUFlO0FBQzdEO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHFFQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvaXQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9tb2R1bGVzL1RvZG9MaXN0LmpzIiwid2VicGFjazovL2RvaXQvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9kb2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RvaXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZG9pdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZG9pdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RvaXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb2l0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB0b3A6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAyMjQsIDI1NSk7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG4uZGVmYXVsdC1wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG4uZGVmYXVsdC1wcm9qZWN0cy1idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0cy10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxufVxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbi1hZGQtcHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwJTtcXHJcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMjAwcHg7XFxyXFxuICAgIHRvcDogMTAwcHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcbi50YXNrOmhvdmVyLFxcclxcbi5idXR0b24tYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcbi50YXNrLW5hbWUge1xcclxcbiAgICAvKiBQb3NpdGlvbmluZyAqL1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuICAgIC8qIERlc2lnbiAqL1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWVkaXQtdGFzayxcXHJcXG4uYnV0dG9uLXJlbW92ZS10YXNrLFxcclxcbi5idXR0b24tY29tcGxldGUtdGFzayB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jb21wbGV0ZS10YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuLmJ1dHRvbi1hZGQtdGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYWRkLFxcclxcbi5hZGQtdGFzay1wb3B1cC1jYW5jZWwge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLWFkZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1jYW5jZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhOztJQUViLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixvQ0FBb0M7O0lBRXBDLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7O0lBRVYsY0FBYzs7SUFFZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsbUJBQW1COztJQUVuQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixRQUFRO0FBQ1o7QUFDQTs7SUFFSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1Asa0JBQWtCOztJQUVsQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsUUFBUTtBQUNaO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7O0lBRUksWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHRvcDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDIyNCwgMjU1KTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcbi5kZWZhdWx0LXByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxufVxcclxcbi5kZWZhdWx0LXByb2plY3RzLWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3RzLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG59XFxyXFxuLnByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYnV0dG9uLWFkZC1wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgbWluLWhlaWdodDogNTAlO1xcclxcbiAgICBtaW4td2lkdGg6IDUwJTtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAyMDBweDtcXHJcXG4gICAgdG9wOiAxMDBweDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTAwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuLnRhc2s6aG92ZXIsXFxyXFxuLmJ1dHRvbi1hZGQtdGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICAgIC8qIFBvc2l0aW9uaW5nICovXFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHJcXG4gICAgLyogRGVzaWduICovXFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZWRpdC10YXNrLFxcclxcbi5idXR0b24tcmVtb3ZlLXRhc2ssXFxyXFxuLmJ1dHRvbi1jb21wbGV0ZS10YXNrIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNvbXBsZXRlLXRhc2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG4uYnV0dG9uLWFkZC10YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1hZGQsXFxyXFxuLmFkZC10YXNrLXBvcHVwLWNhbmNlbCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYWRkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLWNhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKG5ld1Rhc2spIHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgVGFzayBhbHJlYWR5IGV4aXN0c1xyXG4gICAgICAgIGlmICh0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSBuZXdUYXNrLmdldE5hbWUoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDaGVjayBpZiBhIG5hbWUgaGFzIGJlZW4gZ2l2ZW5cclxuICAgICAgICBpZiAobmV3VGFzay5nZXROYW1lKCkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBpZiBub3QsIHNldCBkZWZhdWx0IG5hbWVcclxuICAgICAgICAgICAgbmV3VGFzay5zZXROYW1lKHRoaXMuZ2V0RGVmYXVsdFRhc2tOYW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsqfSB4IE51bWJlci9TdHJpbmcvVGFza1xyXG4gICAgICogQHJldHVybnMgTkV3IHRhc2tzIEFycmF5XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZVRhc2soeCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpICE9PSB4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBUYXNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sgIT09IHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBzZXROYW1lKG5ld1Byb2plY3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3UHJvamVjdE5hbWU7XHJcbiAgICB9XHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFza3MobmV3VGFza3MpIHtcclxuICAgICAgICB0aGlzLnRhc2tzID0gbmV3VGFza3M7XHJcbiAgICB9XHJcbiAgICBnZXRUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrKHgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKHggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFza3NbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh4IGluc3RhbmNlb2YgVGFzaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzayA9PT0geCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0VGFza05hbWUoKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFza3NbaV0uZ2V0TmFtZSgpID09PSBgVGFzayR7Y291bnR9YCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIGkgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYFRhc2ske2NvdW50fWA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vVG9kb0xpc3RcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xyXG5cclxuLy8gTW9kdWxlIGZvciBzdG9yaW5nIHRoZSBkYXRhXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xyXG4gICAgc3RhdGljIHNhdmVUb2RvTGlzdCh0b2RvTGlzdCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcclxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IE9iamVjdC5hc3NpZ24obmV3IFRvZG9MaXN0KCksIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSkpO1xyXG5cclxuICAgICAgICB0b2RvTGlzdC5zZXRQcm9qZWN0cyh0b2RvTGlzdC5nZXRQcm9qZWN0cygpLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSkpO1xyXG5cclxuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhwcm9qZWN0LmdldFRhc2tzKCkubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVtb3ZlUHJvamVjdCh4KSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcbiAgICAgICAgdG9kb0xpc3QucmVtb3ZlUHJvamVjdCh4KTtcclxuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0LCB0YXNrKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0KS5hZGRUYXNrKHRhc2spO1xyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW1vdmVUYXNrKHByb2plY3QsIHRhc2spIHtcclxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcclxuXHJcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0KS5yZW1vdmVUYXNrKHRhc2spO1xyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW5hbWVUYXNrKHByb2plY3QsIHRhc2ssIG5ld1Rhc2tOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcblxyXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdCkuZ2V0VGFzayh0YXNrKS5zZXROYW1lKG5ld1Rhc2tOYW1lKTtcclxuXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbmFtZVByb2plY3QocHJvamVjdCwgbmV3UHJvamVjdE5hbWUpIHtcclxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcclxuXHJcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0KS5zZXROYW1lKG5ld1Byb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRhc2sgQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiA9IFwibm8gZGVzY3JpcHRpb25cIiwgZHVlRGF0ZSA9IFwiTm8gZGF0ZVwiKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROYW1lKG5ld1Rhc2tOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3VGFza05hbWU7XHJcbiAgICB9XHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xyXG5cclxuLy8gTWFpbiBUb2RvLUxpc3QgTW9kdWxlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiSG9tZVwiKSk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiVG9kYXlcIikpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlRoaXMgd2Vla1wiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgUHJvamVjdCBhbHJlYWR5IGV4aXN0c1xyXG4gICAgICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBuZXdQcm9qZWN0LmdldE5hbWUoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYSBuYW1lIGhhcyBiZWVuIGdpdmVuXHJcbiAgICAgICAgaWYgKG5ld1Byb2plY3QuZ2V0TmFtZSgpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbmV3UHJvamVjdC5zZXROYW1lKHRoaXMuZ2V0RGVmYXVsdFByb2plY3ROYW1lKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlUHJvamVjdCh4KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgIT09IHgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiB8fCB4IGluc3RhbmNlb2YgUHJvamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QgIT09IHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBuZXdQcm9qZWN0cztcclxuICAgIH1cclxuICAgIGdldFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoeCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0geCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAoeCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1t4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0geC5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdFByb2plY3ROYW1lKCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldLmdldE5hbWUoKSA9PT0gYFByb2plY3Qke2NvdW50fWApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGBQcm9qZWN0JHtjb3VudH1gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XHJcbiAgICAvLyBMb2FkaW5nIENvbnRlbnRcclxuICAgIHN0YXRpYyBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBzdGF0aWMgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcclxuICAgIHN0YXRpYyBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgc3RhdGljIHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XHJcbiAgICBzdGF0aWMgY3VycmVudFByb2plY3Q7XHJcblxyXG4gICAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcclxuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKTtcclxuICAgICAgICBVSS5pbml0RGVmYXVsdFByb2plY3RzKCk7XHJcbiAgICAgICAgVUkub3BlblByb2plY3QoXCJIb21lXCIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGluaXREZWZhdWx0UHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVmYXVsdC1wcm9qZWN0cy1idXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVSS5vcGVuUHJvamVjdChidXR0b24udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xyXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBVSS5hZGRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idXR0b25cIik7XHJcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoKSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3RzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Qcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcInRhc2tuYW1lXCIsIHRhc2suZ2V0TmFtZSgpKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXJlbW92ZS10YXNrXCIpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJidXR0b24tY29tcGxldGUtdGFza1wiIGRhdGEtY29tcGxldGVkPVwiZmFsc2VcIj5PPC9idXR0b24+PGgzIGNsYXNzPVwidGFzay1uYW1lXCI+JHt0YXNrLmdldE5hbWUoKX08L2gzPjxidXR0b24gY2xhc3M9XCJidXR0b24tZWRpdC10YXNrXCI+TzwvYnV0dG9uPmA7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgb3BlblByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgICAgICAvLyBDbGVhciBjb250ZW50LWRpdlxyXG4gICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUYXNrKHRhc2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tYWRkLXRhc2tcIik7XHJcbiAgICAgICAgYWRkVGFza0J1dHRvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJidXR0b24tYWRkLXRhc2staWNvblwiPk88L2k+IDxoMyBidXR0b24tYWRkLXRhc2stdGl0bGU+QWRkIFRhc2s8L2gzPiBgO1xyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgdGFza1wiKTtcclxuICAgICAgICAgICAgVUkub3BlbkFkZFRhc2tQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRBZGRUYXNrQnV0dG9uKCkpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRhc2tCdXR0b25zKHByb2plY3QpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFkZFRhc2tCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWFkZC10YXNrXCIpO1xyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiYnV0dG9uLWFkZC10YXNrLWljb25cIj5PPC9pPiA8aDMgYnV0dG9uLWFkZC10YXNrLXRpdGxlPkFkZCBUYXNrPC9oMz4gYDtcclxuICAgICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nIHRhc2tcIik7XHJcbiAgICAgICAgICAgIFVJLm9wZW5BZGRUYXNrUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWRkVGFza0J1dHRvbjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRBZGRUYXNrUG9wdXAoKSB7XHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1wb3B1cFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgICB0ZXh0SW5wdXQuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLXBvcHVwLWlucHV0XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1wb3B1cC1idXR0b25zXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbkFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XHJcbiAgICAgICAgYnV0dG9uQWRkLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1wb3B1cC1hZGRcIik7XHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b25BZGQpO1xyXG4gICAgICAgIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stcG9wdXAtaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuYWRkVGFzayh0aGlzLmN1cnJlbnRQcm9qZWN0LCBuZXdUYXNrKTsgLy8gU2F2ZXMgbmV3IFRhc2tcclxuICAgICAgICAgICAgdGhpcy5hZGRUYXNrKG5ld1Rhc2spOyAvLyBEaXNwbGF5cyBuZXcgVGFza1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZUFkZFRhc2tQb3B1cCgpOyAvLyBjbG9zZXMgdGhlIHBvcHVwXHJcbiAgICAgICAgICAgIHRoaXMub3BlblByb2plY3QodGhpcy5jdXJyZW50UHJvamVjdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuICAgICAgICBidXR0b25DYW5jZWwuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLXBvcHVwLWNhbmNlbFwiKTtcclxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbkNhbmNlbCk7XHJcbiAgICAgICAgYnV0dG9uQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBZGRUYXNrUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kKHRleHRJbnB1dCwgYnV0dG9ucyk7XHJcblxyXG4gICAgICAgIHJldHVybiBwb3B1cDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBpbml0VGFza0J1dHRvbnMocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbi1yZW1vdmUtdGFza1wiKTtcclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLWVkaXQtdGFza1wiKTtcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tY29tcGxldGUtdGFza1wiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5yZW1vdmVUYXNrKHByb2plY3QsIHByb2plY3QuZ2V0VGFzayhpKS5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgVUkub3BlblByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFZGl0aW5nIHRhc2sgXCIgKyBwcm9qZWN0LmdldFRhc2soaSkuZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWRCdXR0b25zW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtY29tcGxldGVkXCIpID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRCdXR0b25zW2ldLnRleHRDb250ZW50ID0gXCJeXlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZEJ1dHRvbnNbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1jb21wbGV0ZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRCdXR0b25zW2ldLnRleHRDb250ZW50ID0gXCJPXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkQnV0dG9uc1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBsZXRlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgb3BlbkFkZFRhc2tQb3B1cCgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hZGQtdGFza1wiKS5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRBZGRUYXNrUG9wdXAoKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xvc2VBZGRUYXNrUG9wdXAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1wb3B1cFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMuZ2V0QWRkVGFza0J1dHRvbigpKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL21vZHVsZXMvVG9kb0xpc3RcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kdWxlcy9UYXNrXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvUHJvamVjdFwiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9tb2R1bGVzL1N0b3JhZ2VcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJLmxvYWRIb21lcGFnZSk7XHJcblxyXG4vLyBUZXN0aW5nXHJcbmxldCB0b2RvbGlzdDEgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcblxyXG5jb25zdCBwcm9qZWN0MSA9IHRvZG9saXN0MS5nZXRQcm9qZWN0KDApO1xyXG5cclxuU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb2xpc3QxKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9