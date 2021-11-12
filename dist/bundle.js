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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background-color: white;\r\n}\r\nmain {\r\n  height: fit-content;\r\n}\r\n\r\n.header {\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100px;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  background-color: lightskyblue;\r\n  color: white;\r\n}\r\n\r\n.nav {\r\n  overflow-y: auto;\r\n  position: absolute;\r\n  top: 100px;\r\n  float: left;\r\n  bottom: 0;\r\n  background-color: rgb(173, 224, 255);\r\n\r\n  width: 200px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  gap: 10px;\r\n  padding: 20px;\r\n}\r\n.default-projects {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: stretch;\r\n  gap: 40px;\r\n}\r\n.default-projects-button {\r\n  padding: 5px 10px;\r\n  text-align: left;\r\n  height: 40px;\r\n  border: none;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  border: 2px solid gray;\r\n}\r\n.projects-title {\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n  text-decoration: underline;\r\n}\r\n\r\n.project-button:hover,\r\n.default-projects-button:hover {\r\n  background-color: lightsalmon;\r\n}\r\n.project-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: stretch;\r\n  gap: 40px;\r\n}\r\n.project-button {\r\n  padding: 5px 10px;\r\n  text-align: left;\r\n  height: 40px;\r\n  border: none;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border: 2px solid gray;\r\n}\r\n.add-project-button {\r\n  border: 2px solid black;\r\n  background-color: white;\r\n  height: 40px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.button-delete-project {\r\n  height: 100%;\r\n  aspect-ratio: 1;\r\n  z-index: 1;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.button-delete-project:hover {\r\n  background-color: lightcoral;\r\n}\r\n.content {\r\n  min-width: 50%;\r\n  width: calc(100vw - 200px);\r\n  height: fit-content;\r\n  position: absolute;\r\n  left: 200px;\r\n  top: 100px;\r\n\r\n  padding: 100px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.task {\r\n  background-color: white;\r\n  width: 60%;\r\n  height: 40px;\r\n  padding: 5px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  gap: 5px;\r\n  border-radius: 10px;\r\n}\r\n.task:hover,\r\n.button-add-task:hover {\r\n  background-color: lightgray;\r\n}\r\n.task-name {\r\n  /* Positioning */\r\n  flex: 1;\r\n  margin-right: auto;\r\n\r\n  /* Design */\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-edit-task,\r\n.button-remove-task,\r\n.button-complete-task {\r\n  height: 100%;\r\n  aspect-ratio: 1;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n.due-date {\r\n  cursor: pointer;\r\n}\r\n\r\n.button-complete-task {\r\n  background: none;\r\n}\r\n.button-add-task {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: inherit;\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 40px;\r\n  padding: 5px;\r\n  width: 60%;\r\n  text-align: left;\r\n  gap: 5px;\r\n  border-radius: 10px;\r\n}\r\n.add-task-popup,\r\n.add-project-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 60%;\r\n  gap: 5px;\r\n}\r\n.add-task-popup-input,\r\n.add-project-popup-input {\r\n  background-color: white;\r\n  height: 40px;\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n.add-task-popup-buttons,\r\n.add-project-popup-buttons {\r\n  display: flex;\r\n  height: 40px;\r\n  justify-content: space-between;\r\n  gap: 5px;\r\n}\r\n.add-task-popup-add,\r\n.add-task-popup-cancel,\r\n.add-project-popup-add,\r\n.add-project-popup-cancel {\r\n  border: none;\r\n  width: 50%;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n}\r\n.add-task-popup-add,\r\n.add-project-popup-add {\r\n  background-color: lightgreen;\r\n}\r\n.add-task-popup-cancel,\r\n.add-project-popup-cancel {\r\n  background-color: lightcoral;\r\n}\r\n.add-project-popup {\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.active {\r\n  visibility: visible;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background-color: white;\r\n}\r\nmain {\r\n  height: fit-content;\r\n}\r\n\r\n.header {\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100px;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  background-color: lightskyblue;\r\n  color: white;\r\n}\r\n\r\n.nav {\r\n  overflow-y: auto;\r\n  position: absolute;\r\n  top: 100px;\r\n  float: left;\r\n  bottom: 0;\r\n  background-color: rgb(173, 224, 255);\r\n\r\n  width: 200px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  gap: 10px;\r\n  padding: 20px;\r\n}\r\n.default-projects {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: stretch;\r\n  gap: 40px;\r\n}\r\n.default-projects-button {\r\n  padding: 5px 10px;\r\n  text-align: left;\r\n  height: 40px;\r\n  border: none;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  border: 2px solid gray;\r\n}\r\n.projects-title {\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n  text-decoration: underline;\r\n}\r\n\r\n.project-button:hover,\r\n.default-projects-button:hover {\r\n  background-color: lightsalmon;\r\n}\r\n.project-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: stretch;\r\n  gap: 40px;\r\n}\r\n.project-button {\r\n  padding: 5px 10px;\r\n  text-align: left;\r\n  height: 40px;\r\n  border: none;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border: 2px solid gray;\r\n}\r\n.add-project-button {\r\n  border: 2px solid black;\r\n  background-color: white;\r\n  height: 40px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.button-delete-project {\r\n  height: 100%;\r\n  aspect-ratio: 1;\r\n  z-index: 1;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.button-delete-project:hover {\r\n  background-color: lightcoral;\r\n}\r\n.content {\r\n  min-width: 50%;\r\n  width: calc(100vw - 200px);\r\n  height: fit-content;\r\n  position: absolute;\r\n  left: 200px;\r\n  top: 100px;\r\n\r\n  padding: 100px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.task {\r\n  background-color: white;\r\n  width: 60%;\r\n  height: 40px;\r\n  padding: 5px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  gap: 5px;\r\n  border-radius: 10px;\r\n}\r\n.task:hover,\r\n.button-add-task:hover {\r\n  background-color: lightgray;\r\n}\r\n.task-name {\r\n  /* Positioning */\r\n  flex: 1;\r\n  margin-right: auto;\r\n\r\n  /* Design */\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-edit-task,\r\n.button-remove-task,\r\n.button-complete-task {\r\n  height: 100%;\r\n  aspect-ratio: 1;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n.due-date {\r\n  cursor: pointer;\r\n}\r\n\r\n.button-complete-task {\r\n  background: none;\r\n}\r\n.button-add-task {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: inherit;\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 40px;\r\n  padding: 5px;\r\n  width: 60%;\r\n  text-align: left;\r\n  gap: 5px;\r\n  border-radius: 10px;\r\n}\r\n.add-task-popup,\r\n.add-project-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 60%;\r\n  gap: 5px;\r\n}\r\n.add-task-popup-input,\r\n.add-project-popup-input {\r\n  background-color: white;\r\n  height: 40px;\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n.add-task-popup-buttons,\r\n.add-project-popup-buttons {\r\n  display: flex;\r\n  height: 40px;\r\n  justify-content: space-between;\r\n  gap: 5px;\r\n}\r\n.add-task-popup-add,\r\n.add-task-popup-cancel,\r\n.add-project-popup-add,\r\n.add-project-popup-cancel {\r\n  border: none;\r\n  width: 50%;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n}\r\n.add-task-popup-add,\r\n.add-project-popup-add {\r\n  background-color: lightgreen;\r\n}\r\n.add-task-popup-cancel,\r\n.add-project-popup-cancel {\r\n  background-color: lightcoral;\r\n}\r\n.add-project-popup {\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.active {\r\n  visibility: visible;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");


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
    if (typeof x === 'string') {
      this.tasks = this.tasks.filter((task) => task.getName() !== x);
    } else if (typeof x === 'number') {
      this.tasks.splice(x, 1);
    } else if (typeof x === 'object') {
      if (x instanceof _Task__WEBPACK_IMPORTED_MODULE_0__["default"]) {
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
    let taskToReturn;
    if (typeof x === 'string') {
      taskToReturn = this.tasks.find((task) => task.getName() === x);
    }
    if (typeof x === 'number') {
      if (x > -1) {
        taskToReturn = this.tasks[x];
      }
    } else if (typeof x === 'object') {
      if (x instanceof _Task__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        taskToReturn = this.tasks.find((task) => task === x);
      }
    }
    return taskToReturn;
  }

  getDefaultTaskName() {
    let count = 1;
    for (let i = 0; i < this.tasks.length; i += 1) {
      if (this.tasks[i].getName() === `Task${count}`) {
        count += 1;
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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");




// Module for storing the data
class Storage {
  static saveTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  static getTodoList() {
    const todoList = Object.assign(new _TodoList__WEBPACK_IMPORTED_MODULE_1__["default"](), JSON.parse(localStorage.getItem('todoList')));

    todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](), project)));

    todoList.getProjects().forEach((project) => {
      project.setTasks(project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](), task)));
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
  constructor(name, description = 'no description', dueDate = 'No date') {
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
    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Home'));
    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'));
    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('This week'));
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
    if (typeof x === 'string') {
      this.projects = this.projects.filter((project) => project.getName() !== x);
    } else if (typeof x === 'number') {
      this.projects.splice(x, 1);
    } else if (typeof x === 'object' || x instanceof _Project__WEBPACK_IMPORTED_MODULE_0__["default"]) {
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
    if (typeof x === 'string') {
      return this.projects.find((project) => project.getName() === x);
    }
    if (typeof x === 'number') {
      if (x > -1) {
        return this.projects[x];
      }
    } else if (typeof x === 'object') {
      if (x instanceof _Project__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        return this.projects.find((project) => project.getName() === x.getName());
      }
    }
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
  static body = document.querySelector('body');
  static sidebar = document.querySelector('#sidebar');
  static content = document.querySelector('#content');
  static projectList = document.querySelector('#project-list');
  static currentProject;

  static loadHomepage() {
    UI.loadProjects();
    UI.initDefaultProjects();
    UI.initAddProjectButton();
    UI.openProject('Home');
  }
  static initDefaultProjects() {
    const buttons = document.querySelectorAll('.default-projects-button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        UI.openProject(button.textContent);
      });
    });
  }
  static loadProjects() {
    this.projectList.innerHTML = '';
    const todoList = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList();
    todoList.getProjects().forEach((project) => {
      if (project.getName() !== 'Home' && project.getName() !== 'Today' && project.getName() !== 'This Week') {
        UI.addProject(project);
      }
    });
  }

  static addProject(project) {
    const container = document.createElement('button');
    container.textContent = project.getName();
    container.classList.add('project-button');
    container.addEventListener('click', () => {
      this.openProject(project);
    });

    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation();
      _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(project.getName());
      this.loadProjects();
    });
    deleteButton.innerHTML = `<span class="material-icons">clear</span>`;
    deleteButton.classList.add('button-delete-project');

    container.appendChild(deleteButton);

    this.projectList.appendChild(container);
  }
  static addTask(task) {
    const container = document.createElement('div');
    container.classList.add('task');
    container.setAttribute('taskname', task.getName());

    const taskName = document.createElement('h3');
    taskName.textContent = task.getName();
    taskName.classList.add('task-name');

    const buttonCompleteTask = document.createElement('button');
    buttonCompleteTask.classList.add('button-complete-task');
    buttonCompleteTask.innerHTML = `<span class="material-icons">radio_button_unchecked</span>`;
    buttonCompleteTask.setAttribute('data-completed', 'false');

    //const buttonEditTask = document.createElement("button");
    //buttonEditTask.classList.add("button-edit-task");
    //buttonEditTask.innerHTML = `<span class="material-icons">edit</span>`;
    const dueDate = document.createElement('p');
    dueDate.textContent = 'No Date';
    dueDate.classList.add('due-date');
    dueDate.addEventListener('click', () => {
      dueDateInput.hidden = false;
      dueDate.hidden = true;
    });

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.hidden = true;
    dueDateInput.classList.add('due-date-input');
    dueDateInput.addEventListener('change', () => {
      dueDateInput.hidden = true;
      dueDate.hidden = false;
      this.setTaskDate(task, dueDateInput.value);
    });

    const buttonRemoveTask = document.createElement('button');
    buttonRemoveTask.classList.add('button-remove-task');
    buttonRemoveTask.innerHTML = `<span class="material-icons">clear</span>`;

    container.append(buttonCompleteTask, taskName, dueDate, dueDateInput, buttonRemoveTask);
    this.content.appendChild(container);
  }
  static openProject(projectName) {
    // Clear content-div
    this.content.innerHTML = '';
    this.currentProject = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList().getProject(projectName);
    const project = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList().getProject(projectName);

    project.getTasks().forEach((task) => {
      this.addTask(task);
    });

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('button-add-task');
    addTaskButton.innerHTML = `<i class="button-add-task-icon">O</i> <h3 button-add-task-title>Add Task</h3> `;
    addTaskButton.addEventListener('click', () => {
      console.log('adding task');
      UI.openAddTaskPopup();
    });

    this.content.appendChild(this.getAddTaskButton());
    this.initTaskButtons(project);
  }

  static getAddTaskButton() {
    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('button-add-task');
    addTaskButton.innerHTML = `<i class="button-add-task-icon"><span class="material-icons">add</span></i> <h3 button-add-task-title>Add Task</h3> `;
    addTaskButton.addEventListener('click', () => {
      console.log('adding task');
      UI.openAddTaskPopup();
    });
    return addTaskButton;
  }
  static getAddTaskPopup() {
    const popup = document.createElement('div');
    popup.classList.add('add-task-popup');

    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.classList.add('add-task-popup-input');

    const buttons = document.createElement('div');
    buttons.classList.add('add-task-popup-buttons');

    const buttonAdd = document.createElement('button');
    buttonAdd.textContent = 'Add';
    buttonAdd.classList.add('add-task-popup-add');
    buttons.appendChild(buttonAdd);
    buttonAdd.addEventListener('click', () => {
      const input = document.querySelector('.add-task-popup-input');
      const newTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](input.value);
      _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(this.currentProject, newTask); // Saves new Task
      this.addTask(newTask); // Displays new Task

      this.closeAddTaskPopup(); // closes the popup
      this.openProject(this.currentProject);
    });

    const buttonCancel = document.createElement('button');
    buttonCancel.textContent = 'Cancel';
    buttonCancel.classList.add('add-task-popup-cancel');
    buttons.appendChild(buttonCancel);
    buttonCancel.addEventListener('click', () => {
      this.closeAddTaskPopup();
    });

    popup.append(textInput, buttons);

    return popup;
  }
  static initTaskButtons(project) {
    const removeButtons = document.querySelectorAll('.button-remove-task');
    const editButtons = document.querySelectorAll('.button-edit-task');
    const completedButtons = document.querySelectorAll('.button-complete-task');

    for (let i = 0; i < project.getTasks().length; i++) {
      removeButtons[i].addEventListener('click', () => {
        _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(project, project.getTask(i).getName());
        UI.openProject(project);
      });
      //editButtons[i].addEventListener("click", () => {
      //    console.log("Editing task " + project.getTask(i).getName());
      //});
      completedButtons[i].addEventListener('click', () => {
        /* This can be used to delete completed task when checked
                Storage.removeTask(project, project.getTask(i).getName());
                UI.openProject(project);
                */

        if (completedButtons[i].getAttribute('data-completed') === 'false') {
          completedButtons[i].innerHTML = `<span class="material-icons">check_circle_outline</span>`;
          completedButtons[i].setAttribute('data-completed', 'true');
        } else {
          completedButtons[i].innerHTML = `<span class="material-icons">radio_button_unchecked</span>`;
          completedButtons[i].setAttribute('data-completed', 'false');
        }
      });
    }
  }
  static openAddTaskPopup() {
    document.querySelector('.button-add-task').remove();
    this.content.appendChild(this.getAddTaskPopup());
  }
  static closeAddTaskPopup() {
    document.querySelector('.add-task-popup').remove();
    this.content.append(this.getAddTaskButton());
  }
  static initAddProjectButton() {
    const addProjectButton = document.querySelector('.add-project-button');
    addProjectButton.addEventListener('click', () => {
      //Storage.addProject(new Project());
      //console.log(Storage.getTodoList().getProjects());
      //this.loadProjects();
      this.openAddProjectPopup();
    });
  }
  static getAddProjectPopup() {
    const popup = document.createElement('div');
    popup.classList.add('add-project-popup');

    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.classList.add('add-project-popup-input');

    const buttons = document.createElement('div');
    buttons.classList.add('add-project-popup-buttons');

    const buttonAdd = document.createElement('button');
    buttonAdd.textContent = 'Add';
    buttonAdd.classList.add('add-project-popup-add');
    buttons.appendChild(buttonAdd);
    buttonAdd.addEventListener('click', () => {
      const input = document.querySelector('.add-project-popup-input');
      console.log('hi' + input.value + 'hi');
      const newProject = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](input.value);
      _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProject); // Saves new Project
      this.addProject(newProject); // Displays new Project

      this.closeAddProjectPopup(); // closes the popup
      this.openProject(newProject);
    });

    const buttonCancel = document.createElement('button');
    buttonCancel.textContent = 'Cancel';
    buttonCancel.classList.add('add-project-popup-cancel');
    buttons.appendChild(buttonCancel);
    buttonCancel.addEventListener('click', () => {
      this.closeAddProjectPopup();
    });

    popup.append(textInput, buttons);

    return popup;
  }
  static openAddProjectPopup() {
    const addProjectButton = document.querySelector('.add-project-button');
    addProjectButton.remove();

    const nav = document.querySelector('nav');
    nav.appendChild(this.getAddProjectPopup());
  }
  static closeAddProjectPopup() {
    document.querySelector('.add-project-popup').remove();

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project-button');
    addProjectButton.innerHTML = `<h3>Add Project</h3>`;

    document.querySelector('nav').appendChild(addProjectButton);
    this.initAddProjectButton();
  }

  static setTaskDate(task, date) {
    const currentTask = document.querySelector(`div[taskname="${task.getName()}"]`);
    console.log(currentTask.childNodes.item(2));
    currentTask.childNodes.item(2).textContent = new Date().toLocaleDateString('de-DE');
    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList().getProject(this.currentProject).getTask(task.getName()).setDueDate();
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







document.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].loadHomepage);

// Testing

console.log(_modules_Storage__WEBPACK_IMPORTED_MODULE_5__["default"].getTodoList());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztBQUNZO0FBQ1I7QUFDTTtBQUNBO0FBQ3hDO0FBQ0EsOENBQThDLGdFQUFlO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0VBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZG9pdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RvaXQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZG9pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RvaXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly9kb2l0Ly4vc3JjL21vZHVsZXMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vZG9pdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL2RvaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9pdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kb2l0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb2l0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG9pdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RvaXQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwcHg7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDIyNCwgMjU1KTtcXHJcXG5cXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcbi5kZWZhdWx0LXByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuLmRlZmF1bHQtcHJvamVjdHMtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcbi5wcm9qZWN0cy10aXRsZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIsXFxyXFxuLmRlZmF1bHQtcHJvamVjdHMtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xcclxcbn1cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZGVsZXRlLXByb2plY3Qge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbi1kZWxldGUtcHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICBtaW4td2lkdGg6IDUwJTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDIwMHB4O1xcclxcbiAgdG9wOiAxMDBweDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDEwMHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrOmhvdmVyLFxcclxcbi5idXR0b24tYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG4udGFzay1uYW1lIHtcXHJcXG4gIC8qIFBvc2l0aW9uaW5nICovXFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcblxcclxcbiAgLyogRGVzaWduICovXFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZWRpdC10YXNrLFxcclxcbi5idXR0b24tcmVtb3ZlLXRhc2ssXFxyXFxuLmJ1dHRvbi1jb21wbGV0ZS10YXNrIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jb21wbGV0ZS10YXNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcbi5idXR0b24tYWRkLXRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1pbnB1dCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLWJ1dHRvbnMsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYWRkLFxcclxcbi5hZGQtdGFzay1wb3B1cC1jYW5jZWwsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWFkZCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYWRkLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1hZGQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLWNhbmNlbCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdC1wb3B1cCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7O0VBRWIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULG9DQUFvQzs7RUFFcEMsWUFBWTs7RUFFWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTs7RUFFVixjQUFjOztFQUVkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFFBQVE7QUFDVjtBQUNBOztFQUVFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixRQUFRO0FBQ1Y7QUFDQTs7OztFQUlFLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLDRCQUE0QjtBQUM5QjtBQUNBOztFQUVFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwcHg7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDIyNCwgMjU1KTtcXHJcXG5cXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcbi5kZWZhdWx0LXByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuLmRlZmF1bHQtcHJvamVjdHMtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcbi5wcm9qZWN0cy10aXRsZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIsXFxyXFxuLmRlZmF1bHQtcHJvamVjdHMtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xcclxcbn1cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZGVsZXRlLXByb2plY3Qge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbi1kZWxldGUtcHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICBtaW4td2lkdGg6IDUwJTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDIwMHB4O1xcclxcbiAgdG9wOiAxMDBweDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDEwMHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrOmhvdmVyLFxcclxcbi5idXR0b24tYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG4udGFzay1uYW1lIHtcXHJcXG4gIC8qIFBvc2l0aW9uaW5nICovXFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcblxcclxcbiAgLyogRGVzaWduICovXFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZWRpdC10YXNrLFxcclxcbi5idXR0b24tcmVtb3ZlLXRhc2ssXFxyXFxuLmJ1dHRvbi1jb21wbGV0ZS10YXNrIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jb21wbGV0ZS10YXNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcbi5idXR0b24tYWRkLXRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5hZGQtdGFzay1wb3B1cC1pbnB1dCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLWJ1dHRvbnMsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYWRkLFxcclxcbi5hZGQtdGFzay1wb3B1cC1jYW5jZWwsXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWFkZCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uYWRkLXRhc2stcG9wdXAtYWRkLFxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1hZGQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXBvcHVwLWNhbmNlbCxcXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdC1wb3B1cCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayhuZXdUYXNrKSB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgVGFzayBhbHJlYWR5IGV4aXN0c1xyXG4gICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IG5ld1Rhc2suZ2V0TmFtZSgpKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBpZiBhIG5hbWUgaGFzIGJlZW4gZ2l2ZW5cclxuICAgIGlmIChuZXdUYXNrLmdldE5hbWUoKSA9PT0gdW5kZWZpbmVkIHx8IG5ld1Rhc2suZ2V0TmFtZSgpLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgLy8gaSBkZWNpZGVkIHRvIG5vdCBhZGQgYSBuZXcgdGFzaywgc2luY2UgYSBuZXcgdGFzayB3aXRob3V0IGEgbmFtZSBpcyBlc3NlbnRpYWxseSB3b3J0bGVzc1xyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgICAvLyBVc2UgdGhpcyB0byBnZXQgZGVmYXVsdCBuYW1lXHJcbiAgICAgIC8vIG5ld1Rhc2suc2V0TmFtZSh0aGlzLmdldERlZmF1bHRUYXNrTmFtZSgpKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSB4IE51bWJlci9TdHJpbmcvVGFza1xyXG4gICAqIEByZXR1cm5zIE5FdyB0YXNrcyBBcnJheVxyXG4gICAqL1xyXG4gIHJlbW92ZVRhc2soeCkge1xyXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpICE9PSB4KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMudGFza3Muc3BsaWNlKHgsIDEpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgaWYgKHggaW5zdGFuY2VvZiBUYXNrKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrICE9PSB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gIH1cclxuXHJcbiAgc2V0TmFtZShuZXdQcm9qZWN0TmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmV3UHJvamVjdE5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIHNldFRhc2tzKG5ld1Rhc2tzKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gbmV3VGFza3M7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFzayh4KSB7XHJcbiAgICBsZXQgdGFza1RvUmV0dXJuO1xyXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0YXNrVG9SZXR1cm4gPSB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB4KTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgaWYgKHggPiAtMSkge1xyXG4gICAgICAgIHRhc2tUb1JldHVybiA9IHRoaXMudGFza3NbeF07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGlmICh4IGluc3RhbmNlb2YgVGFzaykge1xyXG4gICAgICAgIHRhc2tUb1JldHVybiA9IHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzayA9PT0geCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXNrVG9SZXR1cm47XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0VGFza05hbWUoKSB7XHJcbiAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmdldE5hbWUoKSA9PT0gYFRhc2ske2NvdW50fWApIHtcclxuICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICAgIGkgPSAtMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBUYXNrJHtjb3VudH1gO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9Ub2RvTGlzdCc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XHJcblxyXG4vLyBNb2R1bGUgZm9yIHN0b3JpbmcgdGhlIGRhdGFcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgc3RhdGljIHNhdmVUb2RvTGlzdCh0b2RvTGlzdCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gT2JqZWN0LmFzc2lnbihuZXcgVG9kb0xpc3QoKSwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSkpO1xyXG5cclxuICAgIHRvZG9MaXN0LnNldFByb2plY3RzKHRvZG9MaXN0LmdldFByb2plY3RzKCkubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKSk7XHJcblxyXG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIHByb2plY3Quc2V0VGFza3MocHJvamVjdC5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRvZG9MaXN0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcbiAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZVByb2plY3QoeCkge1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcbiAgICB0b2RvTGlzdC5yZW1vdmVQcm9qZWN0KHgpO1xyXG4gICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFRhc2socHJvamVjdCwgdGFzaykge1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3QpLmFkZFRhc2sodGFzayk7XHJcbiAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlVGFzayhwcm9qZWN0LCB0YXNrKSB7XHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcclxuXHJcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3QpLnJlbW92ZVRhc2sodGFzayk7XHJcbiAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuYW1lVGFzayhwcm9qZWN0LCB0YXNrLCBuZXdUYXNrTmFtZSkge1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcblxyXG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0KS5nZXRUYXNrKHRhc2spLnNldE5hbWUobmV3VGFza05hbWUpO1xyXG5cclxuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW5hbWVQcm9qZWN0KHByb2plY3QsIG5ld1Byb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcclxuXHJcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3QpLnNldE5hbWUobmV3UHJvamVjdE5hbWUpO1xyXG5cclxuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGFzayBDbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiA9ICdubyBkZXNjcmlwdGlvbicsIGR1ZURhdGUgPSAnTm8gZGF0ZScpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0TmFtZShuZXdUYXNrTmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmV3VGFza05hbWU7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XHJcblxyXG4vLyBNYWluIFRvZG8tTGlzdCBNb2R1bGVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSG9tZScpKTtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVG9kYXknKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RoaXMgd2VlaycpKTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xyXG4gICAgLy8gQ2hlY2sgaWYgYSBuYW1lIGhhcyBiZWVuIGdpdmVuXHJcbiAgICBpZiAobmV3UHJvamVjdC5nZXROYW1lKCkgPT09IHVuZGVmaW5lZCB8fCBuZXdQcm9qZWN0LmdldE5hbWUoKS50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIG5ld1Byb2plY3Quc2V0TmFtZSh0aGlzLmdldERlZmF1bHRQcm9qZWN0TmFtZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiBQcm9qZWN0IGFscmVhZHkgZXhpc3RzXHJcbiAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gbmV3UHJvamVjdC5nZXROYW1lKCkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KHgpIHtcclxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSAhPT0geCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh4LCAxKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHggPT09ICdvYmplY3QnIHx8IHggaW5zdGFuY2VvZiBQcm9qZWN0KSB7XHJcbiAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdCAhPT0geCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICB9XHJcblxyXG4gIGdldFByb2plY3QoeCkge1xyXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0geCk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGlmICh4ID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1t4XTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgaWYgKHggaW5zdGFuY2VvZiBQcm9qZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHguZ2V0TmFtZSgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VG9kYXkoKSB7XHJcbiAgICAvLyBub3QgYXZhaWxhYmxlXHJcbiAgfVxyXG5cclxuICBzZXRXZWVrbHkoKSB7XHJcbiAgICAvLyBub3QgYXZhaWxhYmxlXHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0UHJvamVjdE5hbWUoKSB7XHJcbiAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldLmdldE5hbWUoKSA9PT0gYFByb2plY3Qke2NvdW50fWApIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIGkgPSAtMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBQcm9qZWN0JHtjb3VudH1gO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gIC8vIExvYWRpbmcgQ29udGVudFxyXG4gIHN0YXRpYyBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIHN0YXRpYyBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcclxuICBzdGF0aWMgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgc3RhdGljIHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xyXG4gIHN0YXRpYyBjdXJyZW50UHJvamVjdDtcclxuXHJcbiAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcclxuICAgIFVJLmxvYWRQcm9qZWN0cygpO1xyXG4gICAgVUkuaW5pdERlZmF1bHRQcm9qZWN0cygpO1xyXG4gICAgVUkuaW5pdEFkZFByb2plY3RCdXR0b24oKTtcclxuICAgIFVJLm9wZW5Qcm9qZWN0KCdIb21lJyk7XHJcbiAgfVxyXG4gIHN0YXRpYyBpbml0RGVmYXVsdFByb2plY3RzKCkge1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWZhdWx0LXByb2plY3RzLWJ1dHRvbicpO1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KGJ1dHRvbi50ZXh0Q29udGVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XHJcbiAgICB0aGlzLnByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XHJcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSAnSG9tZScgJiYgcHJvamVjdC5nZXROYW1lKCkgIT09ICdUb2RheScgJiYgcHJvamVjdC5nZXROYW1lKCkgIT09ICdUaGlzIFdlZWsnKSB7XHJcbiAgICAgICAgVUkuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMub3BlblByb2plY3QocHJvamVjdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIFN0b3JhZ2UucmVtb3ZlUHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSk7XHJcbiAgICAgIHRoaXMubG9hZFByb2plY3RzKCk7XHJcbiAgICB9KTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsZWFyPC9zcGFuPmA7XHJcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWRlbGV0ZS1wcm9qZWN0Jyk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgdGhpcy5wcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIH1cclxuICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCd0YXNrbmFtZScsIHRhc2suZ2V0TmFtZSgpKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0TmFtZSgpO1xyXG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ29tcGxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25Db21wbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbXBsZXRlLXRhc2snKTtcclxuICAgIGJ1dHRvbkNvbXBsZXRlVGFzay5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnJhZGlvX2J1dHRvbl91bmNoZWNrZWQ8L3NwYW4+YDtcclxuICAgIGJ1dHRvbkNvbXBsZXRlVGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29tcGxldGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgLy9jb25zdCBidXR0b25FZGl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAvL2J1dHRvbkVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tZWRpdC10YXNrXCIpO1xyXG4gICAgLy9idXR0b25FZGl0VGFzay5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVkaXQ8L3NwYW4+YDtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gJ05vIERhdGUnO1xyXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xyXG4gICAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZHVlRGF0ZUlucHV0LmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICBkdWVEYXRlLmhpZGRlbiA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaGlkZGVuID0gdHJ1ZTtcclxuICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZS1pbnB1dCcpO1xyXG4gICAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgZHVlRGF0ZUlucHV0LmhpZGRlbiA9IHRydWU7XHJcbiAgICAgIGR1ZURhdGUuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2V0VGFza0RhdGUodGFzaywgZHVlRGF0ZUlucHV0LnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvblJlbW92ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvblJlbW92ZVRhc2suY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXJlbW92ZS10YXNrJyk7XHJcbiAgICBidXR0b25SZW1vdmVUYXNrLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xlYXI8L3NwYW4+YDtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kKGJ1dHRvbkNvbXBsZXRlVGFzaywgdGFza05hbWUsIGR1ZURhdGUsIGR1ZURhdGVJbnB1dCwgYnV0dG9uUmVtb3ZlVGFzayk7XHJcbiAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICB9XHJcbiAgc3RhdGljIG9wZW5Qcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICAvLyBDbGVhciBjb250ZW50LWRpdlxyXG4gICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgdGhpcy5hZGRUYXNrKHRhc2spO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tYWRkLXRhc2snKTtcclxuICAgIGFkZFRhc2tCdXR0b24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiYnV0dG9uLWFkZC10YXNrLWljb25cIj5PPC9pPiA8aDMgYnV0dG9uLWFkZC10YXNrLXRpdGxlPkFkZCBUYXNrPC9oMz4gYDtcclxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhZGRpbmcgdGFzaycpO1xyXG4gICAgICBVSS5vcGVuQWRkVGFza1BvcHVwKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRBZGRUYXNrQnV0dG9uKCkpO1xyXG4gICAgdGhpcy5pbml0VGFza0J1dHRvbnMocHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0QWRkVGFza0J1dHRvbigpIHtcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWFkZC10YXNrJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImJ1dHRvbi1hZGQtdGFzay1pY29uXCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvc3Bhbj48L2k+IDxoMyBidXR0b24tYWRkLXRhc2stdGl0bGU+QWRkIFRhc2s8L2gzPiBgO1xyXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2FkZGluZyB0YXNrJyk7XHJcbiAgICAgIFVJLm9wZW5BZGRUYXNrUG9wdXAoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFkZFRhc2tCdXR0b247XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRBZGRUYXNrUG9wdXAoKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stcG9wdXAnKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICB0ZXh0SW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stcG9wdXAtaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLXBvcHVwLWJ1dHRvbnMnKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbkFkZC50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG4gICAgYnV0dG9uQWRkLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLXBvcHVwLWFkZCcpO1xyXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b25BZGQpO1xyXG4gICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1wb3B1cC1pbnB1dCcpO1xyXG4gICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soaW5wdXQudmFsdWUpO1xyXG4gICAgICBTdG9yYWdlLmFkZFRhc2sodGhpcy5jdXJyZW50UHJvamVjdCwgbmV3VGFzayk7IC8vIFNhdmVzIG5ldyBUYXNrXHJcbiAgICAgIHRoaXMuYWRkVGFzayhuZXdUYXNrKTsgLy8gRGlzcGxheXMgbmV3IFRhc2tcclxuXHJcbiAgICAgIHRoaXMuY2xvc2VBZGRUYXNrUG9wdXAoKTsgLy8gY2xvc2VzIHRoZSBwb3B1cFxyXG4gICAgICB0aGlzLm9wZW5Qcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3QpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgIGJ1dHRvbkNhbmNlbC5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1wb3B1cC1jYW5jZWwnKTtcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKTtcclxuICAgIGJ1dHRvbkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZUFkZFRhc2tQb3B1cCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcG9wdXAuYXBwZW5kKHRleHRJbnB1dCwgYnV0dG9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHBvcHVwO1xyXG4gIH1cclxuICBzdGF0aWMgaW5pdFRhc2tCdXR0b25zKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLXJlbW92ZS10YXNrJyk7XHJcbiAgICBjb25zdCBlZGl0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tZWRpdC10YXNrJyk7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1jb21wbGV0ZS10YXNrJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVtb3ZlQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBTdG9yYWdlLnJlbW92ZVRhc2socHJvamVjdCwgcHJvamVjdC5nZXRUYXNrKGkpLmdldE5hbWUoKSk7XHJcbiAgICAgICAgVUkub3BlblByb2plY3QocHJvamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2VkaXRCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRWRpdGluZyB0YXNrIFwiICsgcHJvamVjdC5nZXRUYXNrKGkpLmdldE5hbWUoKSk7XHJcbiAgICAgIC8vfSk7XHJcbiAgICAgIGNvbXBsZXRlZEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLyogVGhpcyBjYW4gYmUgdXNlZCB0byBkZWxldGUgY29tcGxldGVkIHRhc2sgd2hlbiBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLnJlbW92ZVRhc2socHJvamVjdCwgcHJvamVjdC5nZXRUYXNrKGkpLmdldE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBVSS5vcGVuUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgIGlmIChjb21wbGV0ZWRCdXR0b25zW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1jb21wbGV0ZWQnKSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgY29tcGxldGVkQnV0dG9uc1tpXS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrX2NpcmNsZV9vdXRsaW5lPC9zcGFuPmA7XHJcbiAgICAgICAgICBjb21wbGV0ZWRCdXR0b25zW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1jb21wbGV0ZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb21wbGV0ZWRCdXR0b25zW2ldLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cmFkaW9fYnV0dG9uX3VuY2hlY2tlZDwvc3Bhbj5gO1xyXG4gICAgICAgICAgY29tcGxldGVkQnV0dG9uc1tpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29tcGxldGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIG9wZW5BZGRUYXNrUG9wdXAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWFkZC10YXNrJykucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRBZGRUYXNrUG9wdXAoKSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBjbG9zZUFkZFRhc2tQb3B1cCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1wb3B1cCcpLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLmdldEFkZFRhc2tCdXR0b24oKSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBpbml0QWRkUHJvamVjdEJ1dHRvbigpIHtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnV0dG9uJyk7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAvL1N0b3JhZ2UuYWRkUHJvamVjdChuZXcgUHJvamVjdCgpKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdHMoKSk7XHJcbiAgICAgIC8vdGhpcy5sb2FkUHJvamVjdHMoKTtcclxuICAgICAgdGhpcy5vcGVuQWRkUHJvamVjdFBvcHVwKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIGdldEFkZFByb2plY3RQb3B1cCgpIHtcclxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1wb3B1cCcpO1xyXG5cclxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIHRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1wb3B1cC1pbnB1dCcpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtcG9wdXAtYnV0dG9ucycpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcbiAgICBidXR0b25BZGQuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtcG9wdXAtYWRkJyk7XHJcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbkFkZCk7XHJcbiAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXBvcHVwLWlucHV0Jyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdoaScgKyBpbnB1dC52YWx1ZSArICdoaScpO1xyXG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoaW5wdXQudmFsdWUpO1xyXG4gICAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3UHJvamVjdCk7IC8vIFNhdmVzIG5ldyBQcm9qZWN0XHJcbiAgICAgIHRoaXMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTsgLy8gRGlzcGxheXMgbmV3IFByb2plY3RcclxuXHJcbiAgICAgIHRoaXMuY2xvc2VBZGRQcm9qZWN0UG9wdXAoKTsgLy8gY2xvc2VzIHRoZSBwb3B1cFxyXG4gICAgICB0aGlzLm9wZW5Qcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgIGJ1dHRvbkNhbmNlbC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1wb3B1cC1jYW5jZWwnKTtcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKTtcclxuICAgIGJ1dHRvbkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZUFkZFByb2plY3RQb3B1cCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcG9wdXAuYXBwZW5kKHRleHRJbnB1dCwgYnV0dG9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHBvcHVwO1xyXG4gIH1cclxuICBzdGF0aWMgb3BlbkFkZFByb2plY3RQb3B1cCgpIHtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnV0dG9uJyk7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnJlbW92ZSgpO1xyXG5cclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKHRoaXMuZ2V0QWRkUHJvamVjdFBvcHVwKCkpO1xyXG4gIH1cclxuICBzdGF0aWMgY2xvc2VBZGRQcm9qZWN0UG9wdXAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wdXAnKS5yZW1vdmUoKTtcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xyXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBgPGgzPkFkZCBQcm9qZWN0PC9oMz5gO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbml0QWRkUHJvamVjdEJ1dHRvbigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldFRhc2tEYXRlKHRhc2ssIGRhdGUpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W3Rhc2tuYW1lPVwiJHt0YXNrLmdldE5hbWUoKX1cIl1gKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrLmNoaWxkTm9kZXMuaXRlbSgyKSk7XHJcbiAgICBjdXJyZW50VGFzay5jaGlsZE5vZGVzLml0ZW0oMikudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZGUtREUnKTtcclxuICAgIFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3QpLmdldFRhc2sodGFzay5nZXROYW1lKCkpLnNldER1ZURhdGUoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJztcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vbW9kdWxlcy9Ub2RvTGlzdCc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vbW9kdWxlcy9UYXNrJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2R1bGVzL1Byb2plY3QnO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvU3RvcmFnZSc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWVwYWdlKTtcclxuXHJcbi8vIFRlc3RpbmdcclxuXHJcbmNvbnNvbGUubG9nKFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==