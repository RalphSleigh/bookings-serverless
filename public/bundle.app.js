/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./src/front/lib/react-selectize/index.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./src/front/lib/react-selectize/index.css ***!
  \*******************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.id, ".react-selectize {\n  color: #000;\n}\n\n.react-selectize.root-node {\n  position: relative;\n}\n\n.react-selectize.root-node.disabled {\n  pointer-events: none;\n}\n\n.react-selectize.root-node .react-selectize-control {\n  cursor: pointer;\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  padding: 2px;\n}\n\n.react-selectize.root-node .react-selectize-control .react-selectize-placeholder {\n  display: block;\n  line-height: 30px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n  white-space: nowrap;\n  position: absolute;\n  max-width: calc(100% - 56px);\n}\n\n.react-selectize.root-node .react-selectize-control .react-selectize-search-field-and-selected-values {\n  display: flex;\n  min-height: 30px;\n  flex-grow: 1;\n  flex-wrap: wrap;\n}\n\n.react-selectize.root-node .react-selectize-control .react-selectize-search-field-and-selected-values .resizable-input {\n  background: none;\n  border: none;\n  outline: none;\n  font-size: 1em;\n  margin: 2px;\n  padding: 4px 0px;\n  vertical-align: middle;\n  width: 0px;\n}\n\n.react-selectize.root-node .react-selectize-control .react-selectize-search-field-and-selected-values .value-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.react-selectize.root-node .react-selectize-control .react-selectize-reset-button-container,\n.react-selectize.root-node .react-selectize-control .react-selectize-toggle-button-container {\n  flex-grow: 0;\n  flex-shrink: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n}\n\n.react-selectize.root-node .react-selectize-control .react-selectize-reset-button-container {\n  width: 16px;\n}\n\n.react-selectize.root-node .react-selectize-control .react-selectize-toggle-button-container {\n  width: 32px;\n}\n\n.react-selectize.root-node .react-selectize-control .react-selectize-reset-button-container:hover .react-selectize-reset-button path {\n  stroke: #c0392b;\n}\n\n.react-selectize.root-node .react-selectize-control .react-selectize-reset-button path {\n  transition: stroke 0.5s 0s ease;\n  stroke: #999;\n  stroke-linecap: square;\n  stroke-linejoin: mitter;\n}\n\n.react-selectize.root-node .react-selectize-control .react-selectize-toggle-button path {\n  fill: #999;\n}\n\n.react-selectize.dropdown-menu-wrapper {\n  position: absolute;\n}\n\n.react-selectize.dropdown-menu-wrapper.tethered {\n  min-width: 300px;\n}\n\n.react-selectize.dropdown-menu-wrapper:not(.tethered) {\n  width: 100%;\n}\n\n.react-selectize.rs-dropdown-menu {\n  box-sizing: border-box;\n  overflow: auto;\n  position: absolute;\n  max-height: 200px;\n  z-index: 10;\n}\n\n.react-selectize.rs-dropdown-menu.tethered {\n  min-width: 300px;\n}\n\n.react-selectize.rs-dropdown-menu:not(.tethered) {\n  width: 100%;\n}\n\n.react-selectize.rs-dropdown-menu .groups.as-columns {\n  display: flex;\n}\n\n.react-selectize.rs-dropdown-menu .groups.as-columns > div {\n  flex: 1;\n}\n\n.react-selectize.rs-dropdown-menu .option-wrapper {\n  cursor: pointer;\n  outline: none;\n}\n\n.multi-select.react-selectize.root-node .simple-value {\n  display: inline-block;\n  margin: 2px;\n  vertical-align: middle;\n}\n\n.multi-select.react-selectize.root-node .simple-value span {\n  display: inline-block;\n  padding: 2px 5px 4px;\n  vertical-align: center;\n}\n\n.simple-select.react-selectize.root-node .simple-value {\n  margin: 2px;\n}\n\n.simple-select.react-selectize.root-node .simple-value span {\n  display: inline-block;\n  vertical-align: center;\n}\n\n.react-selectize.default {\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n.react-selectize.default.root-node .react-selectize-control {\n  background-color: #fff;\n  border: 1px solid;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  font-size: 1em;\n}\n\n.react-selectize.default.root-node .react-selectize-control .react-selectize-placeholder {\n  color: #aaa;\n  text-indent: 8px;\n}\n\n.react-selectize.default.root-node .react-selectize-control .react-selectize-search-field-and-selected-values {\n  padding-left: 5px;\n}\n\n.react-selectize.default.root-node.open.flipped .react-selectize-control {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n\n.react-selectize.default.root-node.open:not(.flipped) .react-selectize-control {\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.react-selectize.dropdown-menu-wrapper.default {\n  overflow: hidden;\n}\n\n.react-selectize.dropdown-menu-wrapper.default .rs-dropdown-menu.custom-enter-active,\n.react-selectize.dropdown-menu-wrapper.default .rs-dropdown-menu.custom-leave-active {\n  transition: transform 0.2s 0s ease;\n}\n\n.react-selectize.dropdown-menu-wrapper.default .rs-dropdown-menu.flipped.custom-enter {\n  transform: translateY(100%);\n}\n\n.react-selectize.dropdown-menu-wrapper.default .rs-dropdown-menu.flipped.custom-enter-active {\n  transform: translateY(0%);\n}\n\n.react-selectize.dropdown-menu-wrapper.default .rs-dropdown-menu.flipped.custom-leave {\n  transform: translateY(0%);\n}\n\n.react-selectize.dropdown-menu-wrapper.default .rs-dropdown-menu.flipped.custom-leave-active {\n  transform: translateY(100%);\n}\n\n.react-selectize.dropdown-menu-wrapper.default .rs-dropdown-menu:not(.flipped).custom-enter {\n  transform: translateY(-100%);\n}\n\n.react-selectize.dropdown-menu-wrapper.default .rs-dropdown-menu:not(.flipped).custom-enter-active {\n  transform: translateY(0%);\n}\n\n.react-selectize.dropdown-menu-wrapper.default .rs-dropdown-menu:not(.flipped).custom-leave {\n  transform: translateY(0%);\n}\n\n.react-selectize.dropdown-menu-wrapper.default .rs-dropdown-menu:not(.flipped).custom-leave-active {\n  transform: translateY(-100%);\n}\n\n.react-selectize.rs-dropdown-menu.default {\n  background: #fff;\n  border: 1px solid #ccc;\n  margin-top: -1px;\n}\n\n.react-selectize.rs-dropdown-menu.default.flipped {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.react-selectize.rs-dropdown-menu.default:not(.flipped) {\n  border-color: #b3b3b3 #ccc #d9d9d9;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.react-selectize.rs-dropdown-menu.default .no-results-found {\n  color: #aaa !important;\n  font-style: oblique;\n  padding: 8px 10px;\n}\n\n.react-selectize.rs-dropdown-menu.default .simple-group-title {\n  background-color: #fafafa;\n  padding: 8px 8px;\n}\n\n.react-selectize.rs-dropdown-menu.default .option-wrapper.highlight {\n  background: #f2f9fc;\n  color: #333;\n}\n\n.react-selectize.rs-dropdown-menu.default .option-wrapper .simple-option {\n  color: #666;\n  cursor: pointer;\n  padding: 8px 10px;\n}\n\n.react-selectize.rs-dropdown-menu.default .option-wrapper .simple-option.not-selectable {\n  background-color: #f8f8f8;\n  color: #999;\n  cursor: default;\n  font-style: oblique;\n  text-shadow: 0px 1px 0px #fff;\n}\n\n.multi-select.react-selectize.default.root-node .simple-value {\n  background: #f2f9fc;\n  border: 1px solid #c9e6f2;\n  border-radius: 2px;\n  color: #08c;\n}\n\n.simple-select.react-selectize.default.root-node.open .react-selectize-control {\n  background-color: #fff;\n}\n\n.simple-select.react-selectize.default.root-node:not(.open) .react-selectize-control {\n  background-color: #f9f9f9;\n  background-image: linear-gradient(to bottom, #fefefe, #f2f2f2);\n}\n\n.react-selectize.bootstrap3 {\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n.react-selectize.bootstrap3.root-node.open .react-selectize-control {\n  background-color: #fff;\n  border: 1px solid #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n\n.react-selectize.bootstrap3.root-node .react-selectize-control {\n  border: 1px solid;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  font-size: 1em;\n}\n\n.react-selectize.bootstrap3.root-node .react-selectize-control .react-selectize-placeholder {\n  color: #aaa;\n  text-indent: 8px;\n}\n\n.react-selectize.bootstrap3.root-node .react-selectize-control .react-selectize-search-field-and-selected-values {\n  padding-left: 5px;\n}\n\n.react-selectize.bootstrap3.dropdown-menu-wrapper.flipped {\n  margin-bottom: 5px;\n}\n\n.react-selectize.bootstrap3.dropdown-menu-wrapper:not(.flipped) {\n  margin-top: 5px;\n}\n\n.react-selectize.bootstrap3.dropdown-menu-wrapper .rs-dropdown-menu.custom-enter-active,\n.react-selectize.bootstrap3.dropdown-menu-wrapper .rs-dropdown-menu.custom-leave-active {\n  transition: opacity 0.2s 0s ease;\n}\n\n.react-selectize.bootstrap3.dropdown-menu-wrapper .rs-dropdown-menu.custom-enter {\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n}\n\n.react-selectize.bootstrap3.dropdown-menu-wrapper .rs-dropdown-menu.custom-enter-active {\n  opacity: 1;\n  -ms-filter: none;\n  filter: none;\n}\n\n.react-selectize.bootstrap3.dropdown-menu-wrapper .rs-dropdown-menu.custom-leave {\n  opacity: 1;\n  -ms-filter: none;\n  filter: none;\n}\n\n.react-selectize.bootstrap3.dropdown-menu-wrapper .rs-dropdown-menu.custom-leave-active {\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n}\n\n.react-selectize.bootstrap3.rs-dropdown-menu {\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n\n.react-selectize.bootstrap3.rs-dropdown-menu.flipped {\n  margin-bottom: 5px;\n}\n\n.react-selectize.bootstrap3.rs-dropdown-menu:not(.flipped) {\n  margin-top: 5px;\n}\n\n.react-selectize.bootstrap3.rs-dropdown-menu .no-results-found {\n  color: #aaa !important;\n  font-style: oblique;\n  padding: 8px 10px;\n}\n\n.react-selectize.bootstrap3.rs-dropdown-menu .groups:not(.as-columns) > div:not(:first-child) {\n  border-top: 1px solid #e5e5e5;\n  margin: 12px 0px 0px 0px;\n}\n\n.react-selectize.bootstrap3.rs-dropdown-menu .simple-group-title {\n  background-color: #fff;\n  color: #999;\n  padding: 8px 8px;\n  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n.react-selectize.bootstrap3.rs-dropdown-menu .option-wrapper.highlight {\n  background: #428bca;\n}\n\n.react-selectize.bootstrap3.rs-dropdown-menu .option-wrapper.highlight .simple-option {\n  color: #fff;\n}\n\n.react-selectize.bootstrap3.rs-dropdown-menu .option-wrapper .simple-option {\n  color: #333;\n  cursor: pointer;\n  padding: 8px 10px;\n}\n\n.react-selectize.bootstrap3.rs-dropdown-menu .option-wrapper .simple-option.not-selectable {\n  background-color: #f8f8f8;\n  color: #999;\n  cursor: default;\n  font-style: oblique;\n  text-shadow: 0px 1px 0px #fff;\n}\n\n.multi-select.react-selectize.bootstrap3.root-node .simple-value {\n  background: #efefef;\n  border-radius: 4px;\n  color: #333;\n}\n\n.react-selectize.material {\n  font-family: Roboto, sans-serif;\n}\n\n.react-selectize.material.root-node.open .react-selectize-control:after {\n  transform: scaleX(1);\n}\n\n.react-selectize.material.root-node .react-selectize-control {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.react-selectize.material.root-node .react-selectize-control:after {\n  background-color: #00bcd4;\n  content: \"\";\n  transform: scaleX(0);\n  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  position: absolute;\n  left: 0px;\n  bottom: -1px;\n  width: 100%;\n  height: 2px;\n}\n\n.react-selectize.material.root-node .react-selectize-control .react-selectize-placeholder {\n  color: rgba(0, 0, 0, 0.3);\n  text-indent: 4px;\n}\n\n.react-selectize.material.dropdown-menu-wrapper.flipped {\n  margin-bottom: 8px;\n}\n\n.react-selectize.material.dropdown-menu-wrapper.flipped .rs-dropdown-menu {\n  transform-origin: 100% 100%;\n}\n\n.react-selectize.material.dropdown-menu-wrapper:not(.flipped) {\n  margin-top: 8px;\n}\n\n.react-selectize.material.dropdown-menu-wrapper:not(.flipped) .rs-dropdown-menu {\n  transform-origin: 0% 0%;\n}\n\n.react-selectize.material.dropdown-menu-wrapper .rs-dropdown-menu.custom-enter-active,\n.react-selectize.material.dropdown-menu-wrapper .rs-dropdown-menu.custom-leave-active {\n  transition: transform 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n\n.react-selectize.material.dropdown-menu-wrapper .rs-dropdown-menu.custom-enter {\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  transform: scale(0, 0);\n}\n\n.react-selectize.material.dropdown-menu-wrapper .rs-dropdown-menu.custom-enter-active {\n  opacity: 1;\n  -ms-filter: none;\n  filter: none;\n  transform: scale(1, 1);\n}\n\n.react-selectize.material.dropdown-menu-wrapper .rs-dropdown-menu.custom-leave {\n  opacity: 1;\n  -ms-filter: none;\n  filter: none;\n  transform: scale(1, 1);\n}\n\n.react-selectize.material.dropdown-menu-wrapper .rs-dropdown-menu.custom-leave-active {\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n}\n\n.react-selectize.material.rs-dropdown-menu {\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.118) 0px 1px 6px, rgba(0, 0, 0, 0.118) 0px 1px 4px;\n  max-height: 250px;\n  padding: 8px 0px;\n}\n\n.react-selectize.material.rs-dropdown-menu.flipped {\n  margin-bottom: 8px;\n}\n\n.react-selectize.material.rs-dropdown-menu:not(.flipped) {\n  margin-top: 8px;\n}\n\n.react-selectize.material.rs-dropdown-menu .no-results-found {\n  font-style: oblique;\n  font-size: 16px;\n  height: 32px;\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n}\n\n.react-selectize.material.rs-dropdown-menu .groups:not(.as-columns) > div:not(:last-child) {\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.react-selectize.material.rs-dropdown-menu .simple-group-title {\n  color: #8f8f8f;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  height: 48px;\n  padding: 0px 10px;\n}\n\n.react-selectize.material.rs-dropdown-menu .option-wrapper.highlight {\n  background-color: rgba(0, 0, 0, 0.098);\n}\n\n.react-selectize.material.rs-dropdown-menu .option-wrapper .simple-option {\n  color: rgba(0, 0, 0, 0.875);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  font-size: 16px;\n  height: 48px;\n  padding: 0px 16px;\n}\n\n.react-selectize.material.rs-dropdown-menu .option-wrapper .simple-option.not-selectable {\n  background-color: #f8f8f8;\n  color: #999;\n  cursor: default;\n  font-style: oblique;\n  text-shadow: 0px 1px 0px #fff;\n}\n\n.multi-select.react-selectize.material.root-node .simple-value span {\n  padding: 0px;\n}\n\n.multi-select.react-selectize.material.root-node .simple-value span:after {\n  content: \",\";\n}\n\n.simple-select.react-selectize.material.root-node .simple-value {\n  margin: 4px 3px 3px 2px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive en-gb":
/*!************************************************!*\
  !*** ./node_modules/moment/locale/ sync en-gb ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive en-gb";

/***/ }),

/***/ "./src/front/lib/react-selectize/index.css":
/*!*************************************************!*\
  !*** ./src/front/lib/react-selectize/index.css ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/index.js!../../../../node_modules/resolve-url-loader/index.js!./index.css */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./src/front/lib/react-selectize/index.css");
if(typeof content === 'string') content = [[module.id, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! !../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/front/age/dob.tsx":
/*!*******************************!*\
  !*** ./src/front/age/dob.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const lib_1 = __webpack_require__(/*! react-widgets/lib */ "./node_modules/react-widgets/lib/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const woodcraft_js_1 = __webpack_require__(/*! ../../shared/woodcraft.js */ "./src/shared/woodcraft.js");
const moment_1 = __importDefault(__webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js"));
/*
indvidual age widgets
 */
exports["default"] = {
    BookingFormWidget: props => {
        return React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Label, { sm: 2 }, "Date of Birth:"),
            React.createElement(reactstrap_1.Col, { sm: 3 },
                React.createElement(lib_1.DateTimePicker, { value: props.age ? new Date(props.age) : null, placeholder: 'DD/MM/YYYY', onChange: props.updateAge, editFormat: 'DD/MM/YYYY', format: 'DD/MM/YYYY', time: false, inputProps: { className: 'form-control ' + props.valid, placeholder: 'DD/MM/YYYY' } })));
    },
    displayAgeParticipant: p => {
        return p.ageGroup + (p.ageAtStart < 21 ? ` (${p.ageAtStart})` : '');
    },
    displayAgeMoment: (age, event) => {
        const startDate = (0, moment_1.default)(event.startDate); //todo store this as a Moment.
        const ageAtStart = startDate.diff((0, moment_1.default)(age), 'years'); //@ts-ignore
        const ageGroup = woodcraft_js_1.woodcraft.find(w => w.filter(ageAtStart)).singular;
        return ageGroup + (ageAtStart < 21 ? ` (${ageAtStart})` : '');
    },
    displayAgeCSV: p => {
        return p.age;
    },
    participantCardField: p => {
        return React.createElement("p", null,
            React.createElement("b", null, "DOB: "),
            (0, moment_1.default)(p.dob).format("DD/MM/YYYY"),
            " - ",
            p.age);
    }
};


/***/ }),

/***/ "./src/front/age/groups.tsx":
/*!**********************************!*\
  !*** ./src/front/age/groups.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const woodcraft_js_1 = __webpack_require__(/*! ../../shared/woodcraft.js */ "./src/shared/woodcraft.js");
const moment_1 = __importDefault(__webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js"));
const moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/*
indvidual age widgets
 */
exports["default"] = {
    BookingFormWidget: props => {
        const options = woodcraft_js_1.woodcraft.map((w, i) => React.createElement("option", { key: i, value: w.singular }, w.singular));
        let ageGroup = '';
        if (props.age) {
            const ageAtStart = (0, moment_1.default)(props.event.startDate).diff((0, moment_1.default)(props.age), 'years'); //@ts-ignore
            ageGroup = woodcraft_js_1.woodcraft.find(w => w.filter(ageAtStart)).singular;
        }
        const onChange = e => {
            if (e.target.value === '')
                return props.updateAge(null);
            const ageGroup = woodcraft_js_1.woodcraft.find(w => w.singular === e.target.value); //@ts-ignore
            props.updateAge(ageGroup.getAge(props.event));
        };
        return React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Label, { sm: 2 }, "Age:"),
            React.createElement(reactstrap_1.Col, { sm: 3 },
                React.createElement(reactstrap_1.Input, { type: "select", value: ageGroup, onChange: onChange, className: props.valid },
                    React.createElement("option", { value: '' }, "Please Select"),
                    options)));
    },
    displayAgeParticipant: p => {
        return p.ageGroup;
    },
    displayAgeMoment: (age, event) => {
        const startDate = (0, moment_1.default)(event.startDate); //todo store this as a Moment.
        const ageAtStart = startDate.diff((0, moment_1.default)(age), 'years'); //@ts-ignore
        const ageGroup = woodcraft_js_1.woodcraft.find(w => w.filter(ageAtStart)).singular;
        return ageGroup;
    },
    displayAgeCSV: p => {
        return p.age;
    },
    participantCardField: p => {
        return React.createElement("p", null,
            React.createElement("b", null, "Age: "),
            p.age);
    }
};


/***/ }),

/***/ "./src/front/age/index.tsx":
/*!*********************************!*\
  !*** ./src/front/age/index.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*

Offer different ways of collecting/displaying age.
Regardless of the method chosen, we store it as a date (which may not be an exact date of birth).

 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dob_1 = __importDefault(__webpack_require__(/*! ./dob */ "./src/front/age/dob.tsx"));
const groups_1 = __importDefault(__webpack_require__(/*! ./groups */ "./src/front/age/groups.tsx"));
exports["default"] = event => {
    try {
        switch (event.customQuestions.ageWidgets) {
            case 'dob':
                return dob_1.default;
            case 'groupings':
                return groups_1.default;
        }
        return dob_1.default;
    }
    catch (e) {
        return dob_1.default;
    }
};


/***/ }),

/***/ "./src/front/app/index.tsx":
/*!*********************************!*\
  !*** ./src/front/app/index.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const messages = __importStar(__webpack_require__(/*! ../messages */ "./src/front/messages/index.ts"));
const user = __importStar(__webpack_require__(/*! ../user */ "./src/front/user/index.ts"));
const events = __importStar(__webpack_require__(/*! ../events */ "./src/front/events/index.ts"));
const bookings = __importStar(__webpack_require__(/*! ../bookings */ "./src/front/bookings/index.ts"));
const react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log("App componentWillMount fetching props");
        this.props.getUser();
        this.props.getEvents();
        this.props.getUserBookings();
    }
    componentWillReceiveProps(nextProps) {
        console.log("App componentWillReceivePropss");
        if (nextProps.User !== null && nextProps.Events === null) {
            console.log("events refresh123");
            this.props.getEvents();
        }
        if (nextProps.User !== null && nextProps.Bookings === null) {
            console.log("bookings refresh");
            this.props.getUserBookings();
        }
        if (this.props.User !== null && this.props.User !== nextProps.User) {
            console.log("Refreshing bookings/evens");
            this.props.getUserBookings();
            this.props.getEvents(); //need to drop the detailed event models if present
        }
    }
    render() {
        //prevent render until we have the basic data available, this makes child components much simpler.
        if (this.props.User === null || this.props.Events === null || this.props.Bookings === null) {
            console.log("NOT rendering, users:");
            console.log(this.props.User);
            console.log("NOT rendering: events:");
            console.log(this.props.Events);
            console.log("NOT rendering: bookings");
            console.log(this.props.Bookings);
            return (React.createElement("div", { className: "lds-default" },
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        console.log("rendering");
        const envMarker = this.props.Env === 'dev' ? React.createElement("div", { className: "envMarker" },
            React.createElement("p", null, "TEST")) : null;
        //@ts-ignore
        const inManage = !!(0, react_router_1.matchPath)(location.pathname, {
            path: "/event/:eventId/manage",
            exact: false,
            strict: false
        });
        return (React.createElement(React.Fragment, null,
            envMarker,
            React.createElement(reactstrap_1.Container, { fluid: inManage },
                React.createElement(reactstrap_1.Row, { className: "align-items-center" },
                    React.createElement(reactstrap_1.Col, null,
                        React.createElement("h2", { className: "align-middle" }, window.location.hostname)),
                    React.createElement(reactstrap_1.Col, { sm: "auto" },
                        React.createElement("img", { className: "float-right", src: "/logo.png", style: { height: "75px" } }))),
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, null,
                        React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                    React.createElement(reactstrap_1.Col, { sm: "auto" },
                        React.createElement(user.loginStatus, null))),
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(messages.messages, null)),
                this.props.children,
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, null,
                        React.createElement("footer", null,
                            React.createElement("p", { className: "small text-center" },
                                "\u00A9 2018 ",
                                React.createElement("a", { href: "https://www.woodcraft.org.uk/" }, "Woodcraft Folk"),
                                ", Source on ",
                                React.createElement("a", { href: "https://github.com/RalphSleigh/bookings" }, "Github"),
                                ".")))))));
    }
}
//store.dispatch(user.actions.getUser());
const mapStateToProps = (state) => {
    let User = state.getIn(["User", "user"]);
    let Events = state.getIn(["Events", "events"]);
    let Bookings = state.getIn(["Bookings", "bookings"]);
    let Env = state.get("App");
    return { User, Events, Bookings, Env };
};
const mapDispatchToProps = {
    getUser: user.actions.getUser,
    getEvents: events.actions.getEvents,
    getUserBookings: bookings.actions.getUserBookings
};
var VisibleApp = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(App);
exports["default"] = (0, react_router_dom_2.withRouter)(VisibleApp);


/***/ }),

/***/ "./src/front/attendance/free.tsx":
/*!***************************************!*\
  !*** ./src/front/attendance/free.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticipantWidget = exports.Config = exports.selection = exports.name = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
exports.name = "free";
exports.selection = "Free Choice";
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const moment_1 = __importDefault(__webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js"));
class Config extends React.Component {
    render() {
        return null;
    }
}
exports.Config = Config;
class ParticipantWidget extends React.Component {
    constructor(props) {
        super(props);
        this.updateDays = this.updateDays.bind(this);
    }
    updateDays(mask) {
        return e => {
            const value = this.props.days ^ mask;
            this.props.updateDirect(value);
            e.preventDefault();
        };
    }
    render() {
        const startDate = moment_1.default.utc(this.props.event.startDate).startOf('day');
        const endDate = moment_1.default.utc(this.props.event.endDate).startOf('day').add(1, 'days');
        const dayButtons = [];
        let mask = 0;
        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
            const active = (this.props.days & Math.pow(2, mask)) !== 0;
            dayButtons.push(React.createElement(reactstrap_1.Button, { active: active, outline: !active, size: "sm", key: mask, color: "success", onClick: this.updateDays(Math.pow(2, mask)) }, m.format("ddd Do")));
            //B, value: Math.pow(2, mask)});
            mask++;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Label, { sm: 2 },
                "Attendance:",
                React.createElement("br", null)),
            React.createElement(reactstrap_1.Col, { sm: 9 },
                React.createElement("small", null, "Deselect days if you are not staying for the whole event"),
                React.createElement(reactstrap_1.ButtonGroup, null, dayButtons))));
    }
}
exports.ParticipantWidget = ParticipantWidget;


/***/ }),

/***/ "./src/front/attendance/index.ts":
/*!***************************************!*\
  !*** ./src/front/attendance/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

//holds components for sorting out the attendance options
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const whole = __importStar(__webpack_require__(/*! ./whole */ "./src/front/attendance/whole.tsx"));
const presets = __importStar(__webpack_require__(/*! ./presets */ "./src/front/attendance/presets.tsx"));
const free = __importStar(__webpack_require__(/*! ./free */ "./src/front/attendance/free.tsx"));
exports["default"] = { whole, presets, free };


/***/ }),

/***/ "./src/front/attendance/presets.tsx":
/*!******************************************!*\
  !*** ./src/front/attendance/presets.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticipantWidget = exports.Config = exports.selection = exports.name = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));
exports.name = "presets";
exports.selection = "Predefined options";
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
class Config extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.updateMask = this.updateMask.bind(this);
    }
    update(id) {
        return key => e => {
            const out = (0, cloneDeep_1.default)(this.props.data);
            out.find(o => o.id === id)[key] = e.target.value;
            this.props.update(out);
            e.preventDefault();
        };
    }
    updateMask(id) {
        return e => {
            const out = (0, cloneDeep_1.default)(this.props.data);
            out.find(o => o.id === id).mask = parseInt(e.target.value);
            this.props.update(out);
            e.preventDefault();
        };
    }
    add(e) {
        const out = (0, cloneDeep_1.default)(this.props.data) || [];
        out.push({ id: Math.round((Math.random() * 100000)) }); //TODO: Holy f*** fix this
        this.props.update(out);
        e.preventDefault();
    }
    delete(id) {
        return e => {
            const out = (0, cloneDeep_1.default)(this.props.data) || [];
            this.props.update(out.filter(o => o.id !== id));
            e.preventDefault();
        };
    }
    render() {
        //<AttendanceConfig data={this.state.event.partialDatesData} update={this.updateData('partialDatesData')} />
        const options = this.props.data || [];
        const optionRows = options.map(o => React.createElement(RowC, { key: o.id, name: o.name, mask: o.mask, update: this.update(o.id), delete: this.delete(o.id), updateMask: this.updateMask(o.id) }));
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { sm: 7 },
                    React.createElement("h4", null, "Description")),
                React.createElement(reactstrap_1.Col, { sm: 5 },
                    React.createElement("h4", null, "Day Mask"))),
            optionRows,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.Button, { type: "submit", color: "success", onClick: this.add }, "Add")))));
    }
}
exports.Config = Config;
class ParticipantWidget extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const options = this.props.event.partialDatesData.map(o => React.createElement("option", { key: o.id, value: o.mask }, o.name));
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Label, { sm: 2 }, "Attendance:"),
            React.createElement(reactstrap_1.Col, { sm: 3 },
                React.createElement(reactstrap_1.Input, { type: "select", value: this.props.days, onChange: this.props.update }, options))));
    }
}
exports.ParticipantWidget = ParticipantWidget;
const RowC = props => React.createElement(reactstrap_1.FormGroup, { row: true },
    React.createElement(reactstrap_1.Col, { sm: 7 },
        React.createElement(reactstrap_1.Input, { type: "text", value: props.name || '', onChange: props.update('name'), placeholder: "Option name" })),
    React.createElement(reactstrap_1.Col, { sm: 4 },
        React.createElement(reactstrap_1.Input, { type: "number", value: props.mask || 0, onChange: props.updateMask, placeholder: "0" })),
    React.createElement(reactstrap_1.Col, { sm: 1 },
        React.createElement(reactstrap_1.Button, { type: "submit", onClick: props.delete, color: "warning" },
            React.createElement("span", { style: { color: 'white' } },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes })))));


/***/ }),

/***/ "./src/front/attendance/whole.tsx":
/*!****************************************!*\
  !*** ./src/front/attendance/whole.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticipantWidget = exports.Config = exports.selection = exports.name = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
exports.name = "whole";
exports.selection = "Whole event only";
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class Config extends React.Component {
    render() {
        return null;
    }
}
exports.Config = Config;
class ParticipantWidget extends React.Component {
    render() {
        return React.createElement(reactstrap_1.Col, { sm: 11 });
    }
}
exports.ParticipantWidget = ParticipantWidget;


/***/ }),

/***/ "./src/front/bookings/actions.ts":
/*!***************************************!*\
  !*** ./src/front/bookings/actions.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyToBook = exports.updateCurrentBooking = exports.UPDATE_CURRENT_BOOKING = exports.redirectFromThanks = exports.DELETE_BOOKING = exports.updateBookings = exports.UPDATE_BOOKINGS = exports.getEventBookings = exports.getUserBookings = exports.getBooking = exports.cancelBooking = exports.saveBooking = exports.createBooking = exports.updateQuickList = exports.UPDATE_QUICK_LIST = void 0;
//import Immutable from 'immutable'
const fetch_1 = __importDefault(__webpack_require__(/*! ../fetch */ "./src/front/fetch.ts"));
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
const actions_1 = __webpack_require__(/*! ../user/actions */ "./src/front/user/actions.ts");
const storage_factory_1 = __webpack_require__(/*! storage-factory */ "./node_modules/storage-factory/lib/index.js"); //@ts-ignore
const local = (0, storage_factory_1.storageFactory)(() => localStorage);
//import m from '../messages'
/*
export const saveEvent = event => {
    return (dispatch) => {
        fetch('/api/event/edit',"POST",event)
        .then(j => {
            dispatch(updateEvent(j));
            dispatch(m.actions.setSuccess("Event Updated"));
            browserHistory.push('/');
        }).catch(r => console.log(r));
    }

}
*/
exports.UPDATE_QUICK_LIST = 'BOOKING_UPDATE_QUICK_LIST';
const updateQuickList = participants => {
    return {
        type: exports.UPDATE_QUICK_LIST,
        participants: participants
    };
};
exports.updateQuickList = updateQuickList;
//export const CREATE_BOOKING = 'BOOKING_CREATE_BOOKING';
const createBooking = booking => {
    return dispatch => {
        (0, fetch_1.default)('/api/booking/' + booking.eventId + '/create', "POST", booking)
            .then(j => {
            dispatch((0, exports.updateBookings)(j));
            dispatch((0, exports.updateCurrentBooking)(null));
            dispatch((0, react_router_redux_1.push)('/event/' + booking.eventId + '/book/thanks'));
        });
    };
};
exports.createBooking = createBooking;
const saveBooking = (booking, own) => {
    return dispatch => {
        (0, fetch_1.default)('/api/booking/edit', "POST", booking)
            .then(j => {
            dispatch((0, exports.updateBookings)(j));
            dispatch((0, exports.updateCurrentBooking)(null));
            dispatch(own ? (0, react_router_redux_1.push)('/event/' + booking.eventId + '/book/thanks') : (0, react_router_redux_1.push)('/event/' + booking.eventId + '/manage/bookings'));
        });
    };
};
exports.saveBooking = saveBooking;
const cancelBooking = id => {
    return dispatch => {
        (0, fetch_1.default)('/api/booking/delete', "POST", { id: id })
            .then(j => {
            dispatch((0, react_router_redux_1.push)('/cancel'));
            dispatch(deleteBooking(id));
        });
    };
};
exports.cancelBooking = cancelBooking;
//export const UPDATE_BOOKING = 'BOOKING_UPDATE_BOOKING';
const getBooking = (id) => {
    return dispatch => {
        (0, fetch_1.default)('/api/booking/' + id, "GET")
            .then(j => {
            dispatch((0, exports.updateBookings)(j));
        }).catch(fetch_1.default.fail);
    };
};
exports.getBooking = getBooking;
const getUserBookings = () => {
    return dispatch => {
        (0, fetch_1.default)('/api/booking/user', "GET")
            .then(j => {
            dispatch((0, exports.updateBookings)(j));
        });
    };
};
exports.getUserBookings = getUserBookings;
const getEventBookings = (eventId) => {
    return dispatch => {
        (0, fetch_1.default)('/api/booking/event/' + eventId, "GET")
            .then(j => {
            dispatch((0, exports.updateBookings)(j));
        });
    };
};
exports.getEventBookings = getEventBookings;
exports.UPDATE_BOOKINGS = 'BOOKING_UPDATE_BOOKINGS';
const updateBookings = data => {
    return {
        type: exports.UPDATE_BOOKINGS,
        bookings: data.bookings
    };
};
exports.updateBookings = updateBookings;
exports.DELETE_BOOKING = "BOOKING_DELETE_BOOKING";
const deleteBooking = id => {
    return {
        type: exports.DELETE_BOOKING,
        id: id
    };
};
const redirectFromThanks = eventId => dispatch => {
    dispatch((0, react_router_redux_1.push)('/event/' + eventId + '/book'));
};
exports.redirectFromThanks = redirectFromThanks;
exports.UPDATE_CURRENT_BOOKING = "BOOKING_UPDATE_CURRENT_BOOKING";
const updateCurrentBooking = booking => {
    if (booking && !booking.id)
        local.setItem('currentBooking', JSON.stringify(booking));
    return {
        type: exports.UPDATE_CURRENT_BOOKING,
        booking: booking
    };
};
exports.updateCurrentBooking = updateCurrentBooking;
const applyToBook = application => {
    return dispatch => {
        (0, fetch_1.default)('/api/event/' + application.eventId + '/apply', "POST", application)
            .then(j => {
            dispatch((0, actions_1.updateUser)(j));
            dispatch((0, react_router_redux_1.push)('/event/' + application.eventId + '/apply/thanks'));
        });
    };
};
exports.applyToBook = applyToBook;


/***/ }),

/***/ "./src/front/bookings/components/applyPage.tsx":
/*!*****************************************************!*\
  !*** ./src/front/bookings/components/applyPage.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/bookings/permission.ts");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/bookings/actions.ts");
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
//Apply to be able to book an event
class ApplyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
        this.apply = this.apply.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    }
    apply(e) {
        this.props.applyToBook({ message: this.state.message, eventId: this.props.Event.get('id') });
        e.preventDefault();
    }
    updateMessage(e) {
        this.setState((0, immutability_helper_1.default)(this.state, { message: { $set: e.target.value } }));
        e.preventDefault();
    }
    render() {
        const event = this.props.Event.toJS();
        const user = this.props.User.toJS();
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h3", null,
                        "Apply to book for ",
                        React.createElement("b", null, event.name)),
                    React.createElement(reactstrap_1.Form, null,
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, null,
                                "Hi ",
                                user.userName,
                                ", Please fill in your name, which IFM-SEI organisation or Woodcraft Folk district are you from and approximately how many people are you planning to bring below: "),
                            React.createElement(reactstrap_1.Input, { rows: 10, type: "textarea", value: this.state.message || `Name:

Which Woodcraft District/IFM organisation are you booking:

Approximately how many people are you planning to bring:`, onChange: this.updateMessage })),
                        React.createElement(reactstrap_1.Button, { color: "primary", onClick: this.apply, disabled: this.state.message === '' }, "Submit"))))));
    }
}
const mapStateToProps = (state, props) => {
    const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    const User = state.getIn(["User", "user"]);
    return { Event, User };
};
const mapDispatchToProps = {
    applyToBook: actions_1.applyToBook,
};
const VisibleApplyPage = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)((0, permission_1.applyEventCheck)(ApplyPage));
exports["default"] = (0, permission_1.applyEventCheck)(VisibleApplyPage);


/***/ }),

/***/ "./src/front/bookings/components/applyThanksPage.tsx":
/*!***********************************************************!*\
  !*** ./src/front/bookings/components/applyThanksPage.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
//confirmation page for bookings
class ApplyThanksPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const event = this.props.Event.toJS();
        const user = this.props.User.toJS();
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement("h3", null,
                    "Thanks for your interest in ",
                    event.name),
                React.createElement("p", null,
                    "You will be e-mailed on ",
                    user.email,
                    " when one of our team has approved you to book"))));
    }
}
const mapStateToProps = (state, props) => {
    let User = state.getIn(["User", "user"]);
    let Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    return { User, Event };
};
//const getEvent = event.actions.getEvent
const mapDispatchToProps = {};
const VisibleThanksPage = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(ApplyThanksPage);
exports["default"] = VisibleThanksPage;


/***/ }),

/***/ "./src/front/bookings/components/cancelPage.tsx":
/*!******************************************************!*\
  !*** ./src/front/bookings/components/cancelPage.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
//confirmation page for booking cancallation
class CancelPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement("h3", null, "Your booking has been cancelled"),
                React.createElement("p", null, "You may book again if you reconsider"))));
    }
}
exports["default"] = CancelPage;


/***/ }),

/***/ "./src/front/bookings/components/editPage.tsx":
/*!****************************************************!*\
  !*** ./src/front/bookings/components/editPage.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const bookingForm_1 = __importDefault(__webpack_require__(/*! ./form/bookingForm */ "./src/front/bookings/components/form/bookingForm.tsx"));
const participantQuickList_1 = __importDefault(__webpack_require__(/*! ./participantQuickList */ "./src/front/bookings/components/participantQuickList.tsx"));
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/bookings/actions.ts");
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/bookings/permission.ts");
const permissions_1 = __webpack_require__(/*! ../../../shared/permissions */ "./src/shared/permissions.ts");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class EditPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const event = this.props.Event.toJS();
        const booking = this.props.Booking.toJS();
        const user = this.props.User.toJS();
        booking.externalExtra = booking.externalExtra || {};
        const organisations = event.organisations.filter(o => (0, permissions_1.bookIntoOrganisation)(user, event, booking, o));
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { xs: 12, sm: 12, md: 10 },
                React.createElement("h3", null,
                    "Booking for ",
                    event.name),
                React.createElement(bookingForm_1.default, { user: user, booking: booking, event: event, organisations: organisations, submit: this.props.saveBooking, cancel: this.props.cancelBooking, updateCurrentBooking: this.props.updateCurrentBooking, env: this.props.Env })),
            React.createElement(participantQuickList_1.default, { booking: booking, event: event })));
    }
}
const mapStateToProps = (state, props) => {
    const User = state.getIn(["User", "user"]);
    let Booking = state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]);
    const Event = state.getIn(["Events", "events", Booking.get("eventId")]);
    const CurrentBooking = state.getIn(["Bookings", "currentBooking"]);
    Booking = (CurrentBooking ? CurrentBooking.get("id") : null) === Booking.get("id") ? CurrentBooking : Booking;
    const Env = state.get("App");
    return { User, Booking, Event, Env };
};
const mapDispatchToProps = { saveBooking: actions_1.saveBooking, cancelBooking: actions_1.cancelBooking, updateCurrentBooking: actions_1.updateCurrentBooking };
const VisibleEditPage = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(EditPage);
exports["default"] = (0, permission_1.editBookingCheck)(VisibleEditPage);


/***/ }),

/***/ "./src/front/bookings/components/form/additionalContacts.tsx":
/*!*******************************************************************!*\
  !*** ./src/front/bookings/components/form/additionalContacts.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const index_1 = __importDefault(__webpack_require__(/*! immutability-helper/index */ "./node_modules/immutability-helper/index.js"));
class AdditionalForm extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }
    updateChecked(e) {
        this.props.update('foodOptOut', e.target.checked);
    }
    update(i) {
        return item => e => {
            const existing = this.props.booking.externalExtra.additionalContacts || [{ name: '', email: '', phone: '' }];
            if (i !== (existing.length - 1))
                existing.pop();
            this.props.update('additionalContacts', (0, index_1.default)(existing, { [i]: { [item]: { $set: e.target.value }
                }
            }));
            e.preventDefault();
        };
    }
    render() {
        const contacts = this.props.booking.externalExtra.additionalContacts || [{ name: '', email: '', phone: '' }];
        if (contacts[contacts.length - 1].name !== '' || contacts[contacts.length - 1].email !== '' || contacts[contacts.length - 1].phone !== '')
            contacts.push({ name: '', email: '', phone: '' });
        const rows = contacts.map((r, i) => React.createElement(ContactRow, { name: r.name, email: r.email, phone: r.phone, key: i, update: this.update(i) }));
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("p", null, "Here you can supply contact details for additional people we can contact about your booking, this optional but may be useful."))),
            rows));
    }
}
exports["default"] = AdditionalForm;
const ContactRow = props => {
    return React.createElement(reactstrap_1.FormGroup, { row: true, id: props.i },
        React.createElement(reactstrap_1.Col, { sm: 4 },
            React.createElement(reactstrap_1.Input, { type: "text", placeholder: "Name", value: props.name || '', onChange: props.update("name") })),
        React.createElement(reactstrap_1.Col, { sm: 4 },
            React.createElement(reactstrap_1.Input, { type: "text", placeholder: "e-mail", value: props.email || '', onChange: props.update("email") })),
        React.createElement(reactstrap_1.Col, { sm: 4 },
            React.createElement(reactstrap_1.Input, { type: "text", placeholder: "Phone", value: props.phone || '', onChange: props.update("phone") })));
};


/***/ }),

/***/ "./src/front/bookings/components/form/bookingForm.tsx":
/*!************************************************************!*\
  !*** ./src/front/bookings/components/form/bookingForm.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const bookingUserDetails_1 = __importDefault(__webpack_require__(/*! ./bookingUserDetails */ "./src/front/bookings/components/form/bookingUserDetails.tsx"));
const participantsForm_1 = __importDefault(__webpack_require__(/*! ./participantsForm */ "./src/front/bookings/components/form/participantsForm.tsx"));
const permissionForm_1 = __importDefault(__webpack_require__(/*! ./permissionForm */ "./src/front/bookings/components/form/permissionForm.tsx"));
const feeForm_1 = __importDefault(__webpack_require__(/*! ./feeForm */ "./src/front/bookings/components/form/feeForm.tsx"));
const paymentForm_1 = __importDefault(__webpack_require__(/*! ./paymentForm */ "./src/front/bookings/components/form/paymentForm.tsx"));
const foodForm_1 = __importDefault(__webpack_require__(/*! ./foodForm */ "./src/front/bookings/components/form/foodForm.tsx"));
const additionalContacts_1 = __importDefault(__webpack_require__(/*! ./additionalContacts */ "./src/front/bookings/components/form/additionalContacts.tsx"));
const cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const v4_1 = __importDefault(__webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js"));
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
//this is a massive component that handles the state of the booking form.
class BookingForm extends React.Component {
    guest;
    foodCounter;
    constructor(props) {
        super(props);
        this.guest = props.user && props.user.id === 1;
        this.state = {
            permission: false,
            new: !this.props.booking.id,
            deleteLock: true,
            validation: this.props.booking.id ? 4 : 0,
            deleteInProgress: false
        };
        this.updateItem = this.updateItem.bind(this);
        this.updateParticipantDetails = this.updateParticipantDetails.bind(this);
        this.updateExternalExtra = this.updateExternalExtra.bind(this);
        this.addParticipant = this.addParticipant.bind(this);
        this.deleteParticipant = this.deleteParticipant.bind(this);
        this.clickDeleteLock = this.clickDeleteLock.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
        this.submit = this.submit.bind(this);
        this.updateValidation = this.updateValidation.bind(this);
    }
    componentWillMount() {
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    updateItem(item, value) {
        //magic
        this.props.updateCurrentBooking((0, immutability_helper_1.default)(this.props.booking, { [item]: { $set: value } }));
    }
    updateParticipantDetails(id, item, value) {
        let participants = (0, cloneDeep_1.default)(this.props.booking.participants);
        const participant = participants.find(p => p.id === id);
        delete participant.focus;
        participant[item] = value;
        this.props.updateCurrentBooking((0, immutability_helper_1.default)(this.props.booking, { participants: { $set: participants } }));
    }
    updateExternalExtra(item, value) {
        this.props.updateCurrentBooking((0, immutability_helper_1.default)(this.props.booking, { externalExtra: { [item]: { $set: value } } }));
    }
    addParticipant() {
        this.props.updateCurrentBooking((0, immutability_helper_1.default)(this.props.booking, { participants: { $push: [blankParticipant(this.props.event)] } }));
    }
    deleteParticipant(id) {
        let participants = this.props.booking.participants;
        participants = participants.filter(p => p.id !== id);
        this.props.updateCurrentBooking((0, immutability_helper_1.default)(this.props.booking, { participants: { $set: participants } }));
    }
    submit(e) {
        const state = (0, cloneDeep_1.default)(this.props.booking);
        state.participants = state.participants.map(p => {
            if (typeof p.id === "string")
                delete p.id;
            return p;
        }); //remove temp ids from new participants
        this.props.submit(state, this.state.new ? true : (this.props.booking.userId === this.props.user.id));
        e.preventDefault();
    }
    clickDeleteLock(e) {
        this.setState({ deleteLock: !this.state.deleteLock });
        e.preventDefault();
    }
    clickDelete(e) {
        //@ts-ignore
        if (confirm('Are you sure you wish to delete this booking?')) {
            this.props.cancel(this.props.booking.id);
            this.setState({ deleteInProgress: true });
            e.preventDefault();
        }
    }
    //for a new booking we only trigger inline validations when the user has interacted with a subsequent section of the form.
    updateValidation(level) {
        return () => {
            if (level > this.state.validation) {
                this.setState((0, immutability_helper_1.default)(this.state, { validation: { $set: level } }));
                console.log("Validating level " + level);
            }
        };
    }
    //validate the booking state and return an array of errors for display, validation is also carried out in indvidual bits of the form,, hopefully they agree.
    validateBooking() {
        const results = [];
        if (empty(this.props.booking.userName))
            results.push("Please fill in your name");
        if (empty(this.props.booking.userEmail))
            results.push("Please fill in your e-mail address");
        if (empty(this.props.booking.userContact))
            results.push("Please fill in your contact phone number");
        if (this.props.event.bigCampMode && empty(this.props.booking.district))
            results.push("Please fill in your group/district");
        if (this.props.booking.participants)
            this.props.booking.participants.forEach((p, k) => {
                p.externalExtra = p.externalExtra || {};
                if (empty(p.name)) {
                    results.push("Participant #" + (k + 1) + " does not have a name");
                    return;
                }
                if (empty(p.age))
                    results.push("Please fill in the age for " + p.name);
                if (empty(p.diet))
                    results.push("Please select a diet for " + p.name);
                if ((0, moment_1.default)(this.props.event.startDate).diff((0, moment_1.default)(p.age), 'years') > 15 && this.props.event.customQuestions.adultEmail && empty(p.externalExtra.adultEmail))
                    results.push("Please fill an e-mail address for " + p.name);
                if (this.props.event.customQuestions.photoConsent && empty(p.externalExtra.photoConsent))
                    results.push("Please answer the photo consent for " + p.name);
            });
        const lonePerson = this.props.booking.participants.filter(p => {
            return (0, moment_1.default)(this.props.event.startDate).diff((0, moment_1.default)(p.age), 'years') > 15;
        }).length < 2;
        if (this.props.event.feeModel !== "free" && (!this.props.booking.paymentType || this.props.booking.paymentType === ""))
            results.push("Please choose a payment option");
        if ((!this.props.event.bigCampMode || lonePerson) && empty(this.props.booking.emergencyName))
            results.push("Please provide an emergency contact name");
        if ((!this.props.event.bigCampMode || lonePerson) && empty(this.props.booking.emergencyPhone))
            results.push("Please provide an emergency contact phone number");
        if (!this.props.booking.permission)
            results.push("Please tick the permission and data protection statement checkbox");
        if (needToAgreeDateChange(this.props.event, this.props.booking, this.props.user))
            results.push("Please accept the date change notice");
        return results;
    }
    render() {
        const validationMessages = this.validateBooking();
        const deleteButtons = this.state.new ? null : [React.createElement(reactstrap_1.Button, { key: "deletelock", className: "float-right ml-1", disabled: this.state.deleteLock || this.state.deleteInProgress, onClick: this.clickDelete, color: "danger" }, "Cancel Booking"), React.createElement(reactstrap_1.Button, { key: "delete", color: "danger", onClick: this.clickDeleteLock, className: "float-right" },
                React.createElement("span", { style: { color: 'white' } },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: this.state.deleteLock ? free_solid_svg_icons_1.faLockOpen : free_solid_svg_icons_1.faLock })))];
        const userDetails = {
            userName: this.props.booking.userName,
            userEmail: this.props.booking.userEmail,
            userContact: this.props.booking.userContact,
            district: this.props.booking.district,
            organisationId: this.props.booking.organisationId,
            bookingId: this.props.booking.id
        };
        const permissionDetails = {
            emergencyName: this.props.booking.emergencyName,
            emergencyPhone: this.props.booking.emergencyPhone,
            note: this.props.booking.note,
            permission: this.props.booking.permission,
            campWith: this.props.booking.campWith
        };
        return (React.createElement(reactstrap_1.Form, { autoComplete: "off" },
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h3", { onClick: this.foodCounter }, "Your Details"),
                    React.createElement("p", null, "We will use these if we need to get in touch"))),
            React.createElement(bookingUserDetails_1.default, { user: this.props.user, event: this.props.event, organisations: this.props.organisations, update: this.updateItem, guest: this.guest, validating: this.state.validation > 0, ...userDetails }),
            this.props.event.bigCampMode ? React.createElement(additionalContacts_1.default, { booking: this.props.booking, update: this.updateExternalExtra }) : null,
            this.props.event.customQuestions.foodOptOut ? React.createElement(foodForm_1.default, { booking: this.props.booking, update: this.updateExternalExtra }) : null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h3", null, "Participants"),
                    React.createElement("p", null, "Please fill out for every person attending (including yourself if applicable)"))),
            React.createElement(participantsForm_1.default, { participants: this.props.booking.participants, event: this.props.event, update: this.updateParticipantDetails, add: this.addParticipant, delete: this.deleteParticipant, validating: this.state.validation > 1, updateValidation: this.updateValidation(1), env: this.props.env }),
            React.createElement(reactstrap_1.Row, { className: "mb-3" },
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h3", null, "Money"))),
            React.createElement(feeForm_1.default, { event: this.props.event, participants: this.props.booking.participants, booking: this.props.booking }),
            this.props.event.feeModel === "free" ? null :
                React.createElement(paymentForm_1.default, { update: this.updateItem, event: this.props.event, booking: this.props.booking, chosen: this.props.booking.paymentType, validating: this.state.validation > 2, updateValidation: this.updateValidation(2) }),
            React.createElement(reactstrap_1.Row, { className: "mb-3" },
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h3", null, "Responsibility"))),
            React.createElement(permissionForm_1.default, { event: this.props.event, booking: this.props.booking, user: this.props.user, update: this.updateItem, validating: this.state.validation > 3, ...permissionDetails, updateValidation: this.updateValidation(4) }),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h3", null, "Submit"),
                    React.createElement("p", null, "When you have finished click here to submit your booking. You can always come back and edit it before the deadline."))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    needToAgreeDateChange(this.props.event, this.props.booking, this.props.user) ? React.createElement(DateChangePanel, { updateExternalExtra: this.updateExternalExtra }) : null,
                    React.createElement("br", null),
                    React.createElement(ValidationList, { errors: validationMessages }))),
            React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.Button, { disabled: validationMessages.length !== 0, color: "success", onClick: this.submit }, "Submit Booking"),
                    this.state.new ? null : deleteButtons))));
    }
}
exports["default"] = BookingForm;
const ValidationList = (props) => {
    if (props.errors.length === 0)
        return null;
    const items = props.errors.map(e => React.createElement("li", { key: e }, e));
    return (React.createElement(reactstrap_1.Card, { className: "mb-3", body: true, outline: true, color: "warning" },
        React.createElement(reactstrap_1.CardTitle, null, "Still to do:"),
        React.createElement("ul", null, items)));
};
function empty(value) {
    return !value || value === "";
}
//bad bad bad should be based on model.
let tempkey = 1000;
function blankParticipant(event) {
    return {
        id: (0, v4_1.default)(),
        name: '',
        age: '',
        diet: '',
        dietExtra: '',
        medical: '',
        days: event.partialDates !== 'presets' ? 2 ** ((0, moment_1.default)(event.endDate).diff((0, moment_1.default)(event.startDate), 'days') + 1) - 1 : event.partialDatesData[0].mask,
        externalExtra: {},
        internalExtra: {},
        focus: true
    };
}
const needToAgreeDateChange = (event, booking, user) => {
    if (!event.customQuestions.invalidDate)
        return false;
    if (user.id !== booking.userId)
        return false;
    if ((0, moment_1.default)().isBefore(event.customQuestions.invalidDate))
        return false;
    return !booking.externalExtra.agreedDateChange;
};
const DateChangePanel = (props) => {
    return React.createElement(reactstrap_1.Card, { body: true, outline: true, color: "danger", className: "mb-3" },
        React.createElement(reactstrap_1.CardTitle, null, "Common Ground Date Change Scary Warning Box"),
        React.createElement(reactstrap_1.CardBody, null,
            React.createElement("p", null, "I agree this booking is now for Common Ground in 2022 and totally promise to get it up to date at some point."),
            React.createElement(reactstrap_1.Button, { color: "primary", onClick: () => {
                    props.updateExternalExtra('agreedDateChange', true);
                } }, "Accept")));
};


/***/ }),

/***/ "./src/front/bookings/components/form/bookingUserDetails.tsx":
/*!*******************************************************************!*\
  !*** ./src/front/bookings/components/form/bookingUserDetails.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class BookingUserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.valid = this.valid.bind(this);
        this.updateOrg = this.updateOrg.bind(this);
    }
    update(item) {
        return (e) => {
            this.props.update(item, e.target.value);
            e.preventDefault();
        };
    }
    updateOrg(e) {
        this.props.update('organisationId', parseInt(e.target.value));
        e.preventDefault();
    }
    valid(item) {
        if (this.props.validating && (!item || item === ""))
            return false;
        return null;
    }
    render() {
        const district = this.props.event.bigCampMode ?
            React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Label, { sm: 2 }, "Group/District:"),
                React.createElement(reactstrap_1.Col, { sm: 10 },
                    React.createElement(reactstrap_1.Input, { type: "text", placeholder: "Group/District", value: this.props.district || '', onChange: this.update("district"), valid: this.valid(this.props.district) }))) : null;
        let organisations = null;
        if (this.props.event.organisationsEnabled) {
            if (this.props.organisations.length === 1) {
                organisations =
                    React.createElement(reactstrap_1.FormGroup, { row: true },
                        React.createElement(reactstrap_1.Label, { sm: 2 }, "Organisation:"),
                        React.createElement(reactstrap_1.Col, { sm: 10 },
                            React.createElement(reactstrap_1.Input, { type: "text", value: this.props.organisations[0].name, disabled: true })));
            }
            else {
                const options = this.props.organisations.map(o => React.createElement("option", { key: o.id, value: o.id }, o.name));
                organisations = React.createElement(reactstrap_1.FormGroup, { row: true },
                    React.createElement(reactstrap_1.Label, { sm: 2 }, "Organisation:"),
                    React.createElement(reactstrap_1.Col, { sm: 10 },
                        React.createElement(reactstrap_1.Input, { type: "select", value: this.props.organisationId, onChange: this.updateOrg }, options)));
            }
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Label, { sm: 2 }, "Your Name:"),
                React.createElement(reactstrap_1.Col, { sm: 10 },
                    React.createElement(reactstrap_1.Input, { type: "text", placeholder: "Name", value: this.props.userName || '', onChange: this.update("userName"), valid: this.valid(this.props.userName) }))),
            React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Label, { sm: 2 }, "Your e-mail:"),
                React.createElement(reactstrap_1.Col, { sm: 10 },
                    React.createElement(reactstrap_1.Input, { type: "text", placeholder: "e-mail", value: this.props.userEmail || '', onChange: this.update("userEmail"), valid: this.valid(this.props.userEmail) }))),
            React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Label, { sm: 2 }, "Phone Number:"),
                React.createElement(reactstrap_1.Col, { sm: 10 },
                    React.createElement(reactstrap_1.Input, { type: "text", placeholder: "Phone", value: this.props.userContact || '', onChange: this.update("userContact"), valid: this.valid(this.props.userContact) }))),
            district,
            organisations));
    }
}
exports["default"] = BookingUserDetails;
;


/***/ }),

/***/ "./src/front/bookings/components/form/feeForm.tsx":
/*!********************************************************!*\
  !*** ./src/front/bookings/components/form/feeForm.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const feeFactory_1 = __importDefault(__webpack_require__(/*! ../../../../shared/fee/feeFactory */ "./src/shared/fee/feeFactory.ts"));
class FeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.updatePermission = this.updatePermission.bind(this);
    }
    updatePermission(e) {
        this.props.update();
    }
    render() {
        const BookingFeeForm = (0, feeFactory_1.default)(this.props.event).BookingForm;
        return (React.createElement(BookingFeeForm, { event: this.props.event, feeData: this.props.event.feeData, participants: this.props.participants, booking: this.props.booking }));
    }
}
exports["default"] = FeeForm;


/***/ }),

/***/ "./src/front/bookings/components/form/foodForm.tsx":
/*!*********************************************************!*\
  !*** ./src/front/bookings/components/form/foodForm.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class FoodForm extends React.Component {
    constructor(props) {
        super(props);
        this.updateChecked = this.updateChecked.bind(this);
    }
    updateChecked(e) {
        this.props.update('foodOptOut', e.target.checked);
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Label, { sm: 2 }, "Central Food Optout:"),
                React.createElement(reactstrap_1.Col, { sm: 10 },
                    React.createElement(reactstrap_1.FormGroup, { check: true },
                        React.createElement(reactstrap_1.Label, { check: true },
                            React.createElement(reactstrap_1.Input, { type: "checkbox", checked: !!this.props.booking.externalExtra.foodOptOut, onChange: this.updateChecked }),
                            ' ')))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { sm: 2 }),
                React.createElement(reactstrap_1.Col, null, !!this.props.booking.externalExtra.foodOptOut ? foodWarning() : null))));
    }
}
exports["default"] = FoodForm;
const foodWarning = () => {
    return React.createElement("div", null,
        React.createElement("h4", null, "Opting out of central food provision"),
        React.createElement("p", null, "Our aims as Central KP for Common Ground are to create a menu as directed by the young people in the movement through consultation, source the food in an environmental and ethical way, and distribute it across the campsite as efficiently as possible."),
        React.createElement("p", null, "We recognise that even when a period of consultation has taken place, not everyone will agree with the end result."),
        React.createElement("p", null, "Finding a compromise and giving individuals freedom to choose is in keeping with the Woodcraft way and above all we do not want food to become a barrier preventing any group from attending Common Ground."),
        React.createElement("p", null, "Therefore, we propose to give groups the option to opt out of the central food provision, their ticket price being reduced accordingly, under the following conditions:"),
        React.createElement("ol", null,
            React.createElement("li", null, "There will be no access to central storage, cold or ambient, as this could cause confusion."),
            React.createElement("li", null, "Food must be delivered at a specified time to a pre-decided point near the site entrance."),
            React.createElement("li", null, "Someone must meet the delivery and transport it to the village without the use of a car, to minimise the number of vehicles onsite."),
            React.createElement("li", null, "Keep open communication with central KPs before and during the camp."),
            React.createElement("li", null, "Districts opting out would need to ensure that their food budget came in under the central one or subsidise any other groups (Woodcraft districts or International delegations) camping with them, so as not to increase the cost for them.")),
        React.createElement("p", null, "While this option is open to any group, we feel that groups should consider the following before choosing to opt out."),
        React.createElement("ul", null,
            React.createElement("li", null, " Environmental factors \u2013 a supermarket delivery is unlikely to result in locally sourced food and will certainly result in more vehicles coming and going."),
            React.createElement("li", null, "Consultation \u2013 groups that camp with you may have wanted to be part of the central menu, they may have helped with the process of putting it together, and may feel dictated to.")),
        React.createElement("p", null, "Whether you intend to opt out or not we would encourage everyone to take part in the consultation process to make Common Ground the best camp it can be for everyone who attends."));
};


/***/ }),

/***/ "./src/front/bookings/components/form/participantsForm.tsx":
/*!*****************************************************************!*\
  !*** ./src/front/bookings/components/form/participantsForm.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const attendance_1 = __importDefault(__webpack_require__(/*! ../../../attendance */ "./src/front/attendance/index.ts"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const react_widgets_moment_1 = __importDefault(__webpack_require__(/*! react-widgets-moment */ "./node_modules/react-widgets-moment/index.js"));
__webpack_require__(/*! react-widgets/dist/css/react-widgets.css */ "./node_modules/react-widgets/dist/css/react-widgets.css");
const age_1 = __importDefault(__webpack_require__(/*! ../../../age */ "./src/front/age/index.tsx"));
(0, react_widgets_moment_1.default)();
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
class ParticipantsForm extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.valid = this.valid.bind(this);
    }
    add(e) {
        this.props.add();
        e.preventDefault();
    }
    //I hope you like curry
    update(k) {
        return item => e => {
            this.props.updateValidation();
            const value = item === "days" ? parseInt(e.target.value) : e.target.value;
            this.props.update(k, item, value);
            e.preventDefault();
        };
    }
    updateDirect(k) {
        return item => value => {
            this.props.update(k, item, value);
        };
    }
    updateExtra(k) {
        return item => e => {
            this.props.updateValidation();
            const value = e.target.value;
            const participant = this.props.participants.find(p => p.id === k);
            const newExtra = (0, immutability_helper_1.default)(participant.externalExtra || {}, { [item]: { $set: value } });
            this.props.update(k, 'externalExtra', newExtra);
            e.preventDefault();
        };
    }
    updateExtraNoPrevent(k) {
        return item => e => {
            this.props.updateValidation();
            const value = e.target.value;
            const participant = this.props.participants.find(p => p.id === k);
            const newExtra = (0, immutability_helper_1.default)(participant.externalExtra || {}, { [item]: { $set: value } });
            this.props.update(k, 'externalExtra', newExtra);
        };
    }
    updateAge(k) {
        return date => {
            this.props.updateValidation();
            this.props.update(k, "age", date);
        };
    }
    delete(k) {
        return (e) => {
            //@ts-ignore
            if (confirm("Are you sure you wish to remove this participant?"))
                this.props.delete(k);
            e.preventDefault();
        };
    }
    valid(item) {
        const valid = "";
        const invalid = "has-error";
        if (this.props.validating && (!item || item === ""))
            return invalid;
        return valid;
    }
    render() {
        const ageWidgets = (0, age_1.default)(this.props.event);
        const participants = this.props.participants;
        const AttendanceWidget = attendance_1.default[this.props.event.partialDates].ParticipantWidget;
        let rows = participants.map((p, i) => React.createElement(ParticipantRow, { key: p.id, index: i, ...p, update: this.update(p.id), updateAge: this.updateAge(p.id), updateExtra: this.updateExtra(p.id), updateExtraNoPrevent: this.updateExtraNoPrevent(p.id), updateDirect: this.updateDirect(p.id), delete: this.delete(p.id), valid: this.valid, event: this.props.event, AttendanceWidget: AttendanceWidget, env: this.props.env, ageWidgets: ageWidgets }));
        return (React.createElement(React.Fragment, null,
            rows,
            React.createElement(reactstrap_1.Row, { className: "mb-3" },
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.Button, { color: "info", onClick: this.add }, "More People!")))));
    }
}
exports["default"] = ParticipantsForm;
class ParticipantRow extends React.Component {
    nameInput;
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
    }
    componentDidMount() {
        if (this.props.focus) { //@ts-ignore
            this.nameInput.current.focus();
        }
    }
    render() {
        const debugInfo = this.props.env === 'dev' ? React.createElement("span", { style: { color: 'red' } }, 'id: ' + this.props.id + ' updated: ' + (0, moment_1.default)(this.props.updatedAt).format('YYYY-MM-DD')) : null;
        //{this.props.validating ? this.props.name === "" || this.props.age === "" || this.props.diet === "" ? invalid : valid : valid}
        const attendance = React.createElement(this.props.AttendanceWidget, { days: this.props.days, event: this.props.event, update: this.props.update("days"), updateDirect: this.props.updateDirect("days") });
        return (React.createElement(reactstrap_1.Card, { id: `participant-${this.props.id}`, className: "mb-3" },
            React.createElement(reactstrap_1.CardImg, { top: true, src: "/participant-header.jpg", alt: "Card image cap" }),
            React.createElement(reactstrap_1.CardImgOverlay, null,
                React.createElement(reactstrap_1.CardTitle, { style: {
                        marginTop: "-0.85em",
                        marginLeft: "-0.60em"
                    } },
                    "#",
                    this.props.index + 1,
                    " ",
                    debugInfo)),
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement(reactstrap_1.FormGroup, { row: true },
                    React.createElement(reactstrap_1.Label, { sm: 2 }, "Name:"),
                    React.createElement(reactstrap_1.Col, { sm: 10 },
                        React.createElement(reactstrap_1.Input, { type: "text", value: this.props.name || '', onChange: this.props.update("name"), vaild: this.props.valid(this.props.name), placeholder: "Name", innerRef: this.nameInput }))),
                React.createElement(reactstrap_1.FormGroup, { row: true },
                    React.createElement(this.props.ageWidgets.BookingFormWidget, { age: this.props.age, updateAge: this.props.updateAge, valid: this.props.valid(this.props.age), event: this.props.event }),
                    React.createElement(reactstrap_1.Label, { sm: 1 }, "Diet:"),
                    React.createElement(reactstrap_1.Col, { sm: 3 },
                        React.createElement(reactstrap_1.Input, { type: "select", value: this.props.diet || '', onChange: this.props.update("diet"), vaild: this.props.valid(this.props.diet) },
                            React.createElement("option", { value: "" }, "Please Select"),
                            React.createElement("option", { value: "omnivore" }, "Omnivore"),
                            React.createElement("option", { value: "vegetarian" }, "Vegetarian"),
                            React.createElement("option", { value: "vegan" }, "Vegan")))),
                React.createElement(reactstrap_1.FormGroup, { row: true },
                    React.createElement(reactstrap_1.Label, { sm: 3 }, "Additional dietary requirement or food related allergies:"),
                    React.createElement(reactstrap_1.Col, { sm: 9 },
                        React.createElement(reactstrap_1.Input, { type: "textarea", value: this.props.dietExtra || '', onChange: this.props.update("dietExtra"), placeholder: "N/A", rows: "3" }))),
                React.createElement(reactstrap_1.FormGroup, { row: true },
                    React.createElement(reactstrap_1.Label, { sm: 3 }, "Additional medical information & medication taken:"),
                    React.createElement(reactstrap_1.Col, { sm: 9 },
                        React.createElement(reactstrap_1.Input, { type: "textarea", value: this.props.medical || '', onChange: this.props.update("medical"), placeholder: "N/A", rows: "3" }))),
                React.createElement(Over16Section, { event: this.props.event, age: this.props.age, values: this.props.externalExtra || {}, update: this.props.updateExtra }),
                React.createElement(PhotoConsent, { event: this.props.event, update: this.props.updateExtraNoPrevent, values: this.props.externalExtra || {}, id: this.props.id }),
                React.createElement(reactstrap_1.FormGroup, { row: true },
                    attendance,
                    React.createElement(reactstrap_1.Col, { sm: 1 },
                        React.createElement(reactstrap_1.Button, { onClick: this.props.delete, color: "warning" },
                            React.createElement("span", { style: { color: 'white' } },
                                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }))))))));
    }
}
const PhotoConsent = props => {
    if (!props.event.customQuestions.photoConsent)
        return null;
    return React.createElement(reactstrap_1.FormGroup, { row: true },
        React.createElement(reactstrap_1.Label, { sm: 10 }, "I have permission for photographs, video and other media of this person to feature or be referred to on Woodcraft Folk social media, website and other publicity materials."),
        React.createElement(reactstrap_1.Col, { sm: 2, className: "pt-2" },
            React.createElement(reactstrap_1.FormGroup, { check: true, inline: true, key: 'yes' },
                React.createElement(reactstrap_1.Label, { check: true },
                    React.createElement(reactstrap_1.Input, { type: "radio", value: 'yes', name: props.id, onChange: props.update('photoConsent'), checked: props.values.photoConsent === 'yes' }),
                    "Yes")),
            React.createElement(reactstrap_1.FormGroup, { check: true, inline: true, key: 'no' },
                React.createElement(reactstrap_1.Label, { check: true },
                    React.createElement(reactstrap_1.Input, { type: "radio", value: 'no', name: props.id, onChange: props.update('photoConsent'), checked: props.values.photoConsent === 'no' }),
                    "No"))));
};
const Over16Section = props => {
    if ((0, moment_1.default)(props.event.startDate).diff((0, moment_1.default)(props.age), 'years') > 15 && (props.event.customQuestions.adultEmail || props.event.customQuestions.adultFirstAid)) {
        const emailForm = props.event.customQuestions.adultEmail ? React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Label, { sm: 3 }, "Email address used for WCF membership:"),
            React.createElement(reactstrap_1.Col, { sm: 4 },
                React.createElement(reactstrap_1.Input, { type: "email", value: props.values.adultEmail || '', onChange: props.update("adultEmail"), placeholder: "e-mail address" }))) : null;
        const firstAidForm = props.event.customQuestions.adultFirstAid ? React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Label, { sm: 3 }, "Up to date first aid:"),
            React.createElement(reactstrap_1.Col, { sm: 2 },
                React.createElement(reactstrap_1.Input, { type: "select", value: props.values.adultFirstAid || '', onChange: props.update("adultFirstAid") },
                    React.createElement("option", { value: 'no' }, "No"),
                    React.createElement("option", { value: "yes" }, "Yes")))) : null;
        return (React.createElement(reactstrap_1.FormGroup, { row: true },
            emailForm,
            firstAidForm));
    }
    else {
        return null;
    }
};


/***/ }),

/***/ "./src/front/bookings/components/form/paymentForm.tsx":
/*!************************************************************!*\
  !*** ./src/front/bookings/components/form/paymentForm.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_markdown_1 = __importDefault(__webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js"));
const paymentReference_1 = __importDefault(__webpack_require__(/*! ../../../../shared/paymentReference */ "./src/shared/paymentReference.ts"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class PaymentForm extends React.Component {
    constructor(props) {
        super(props);
        this.selectPaymentType = this.selectPaymentType.bind(this);
    }
    selectPaymentType(e) {
        this.props.updateValidation();
        this.props.update("paymentType", e.target.value);
    }
    valid(item) {
        if (this.props.validating && (!item || item === ""))
            return false;
        return null;
    }
    render() {
        const radios = this.props.event.paymentTypes.map(p => React.createElement(reactstrap_1.FormGroup, { check: true, inline: true, key: p },
            React.createElement(reactstrap_1.Label, { check: true },
                React.createElement(reactstrap_1.Input, { type: "radio", value: p, onChange: this.selectPaymentType, checked: this.props.chosen === p }),
                p)));
        const paymentText = this.props.booking.id ? this.props.event.paymentInfo.replace(/(%%%%)/g, (0, paymentReference_1.default)(this.props.booking.id)) : this.props.event.customQuestions.annonPayment || this.props.event.paymentInfo;
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Label, { sm: 2 }, "Payment Method:"),
                React.createElement(reactstrap_1.Col, { sm: 10, className: "pt-2" }, radios)),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(react_markdown_1.default, { children: paymentText })))));
    }
}
exports["default"] = PaymentForm;


/***/ }),

/***/ "./src/front/bookings/components/form/permissionForm.tsx":
/*!***************************************************************!*\
  !*** ./src/front/bookings/components/form/permissionForm.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
class PermissionForm extends React.Component {
    constructor(props) {
        super(props);
        this.updatePermission = this.updatePermission.bind(this);
        this.updateEmergency = this.updateEmergency.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.updateCampWith = this.updateCampWith.bind(this);
    }
    updatePermission() {
        this.props.updateValidation();
        this.props.update('permission', !this.props.permission);
    }
    updateEmergency(item) {
        return (e) => {
            this.props.updateValidation();
            this.props.update(item, e.target.value);
            e.preventDefault();
        };
    }
    updateCampWith(e) {
        this.props.updateValidation();
        this.props.update('campWith', e.target.value);
        e.preventDefault();
    }
    updateNote(e) {
        this.props.updateValidation();
        this.props.update('note', e.target.value);
        e.preventDefault();
    }
    valid(item) {
        if (this.props.validating && (!item || item === ""))
            return false;
        return null;
    }
    render() {
        const valid = "form-group";
        const invalid = "form-group has-error";
        const customQuestions = this.props.event.customQuestions || {};
        const lonePerson = this.props.booking.participants.filter(p => {
            return (0, moment_1.default)(this.props.event.startDate).diff((0, moment_1.default)(p.age), 'years') > 15;
        }).length < 2;
        const emergency = !this.props.event.bigCampMode || lonePerson ?
            React.createElement(React.Fragment, null,
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, null,
                        React.createElement("h4", null, "Emergency Contact"),
                        lonePerson ? React.createElement("p", null, "As you have only booked in one adult, please provide some emergency contact details of someone not attending the event") : React.createElement("p", null, "Please provide details of someone we can contact in case of an emergency during the event (a second person is better even if you are not attending yourself)"))),
                React.createElement(reactstrap_1.FormGroup, { row: true },
                    React.createElement(reactstrap_1.Label, { sm: 2 }, "Name:"),
                    React.createElement(reactstrap_1.Col, { sm: 10 },
                        React.createElement(reactstrap_1.Input, { type: "text", placeholder: "Name", value: this.props.emergencyName || '', valid: this.valid(this.props.emergencyName), onChange: this.updateEmergency("emergencyName") }))),
                React.createElement(reactstrap_1.FormGroup, { row: true },
                    React.createElement(reactstrap_1.Label, { sm: 2 }, "Phone:"),
                    React.createElement(reactstrap_1.Col, { sm: 10 },
                        React.createElement(reactstrap_1.Input, { type: "text", placeholder: "Phone number", value: this.props.emergencyPhone || '', valid: this.valid(this.props.emergencyPhone), onChange: this.updateEmergency("emergencyPhone") })))) : null;
        const campWith = this.props.event.bigCampMode ?
            React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Label, { sm: 12 }, "Are there are any other IFM-SEI organisations or Woodcraft Folk districts you would like to camp with? We will do our best to accommodate this, and if you don\u2019t know, then don\u2019t worry! We will match international groups with a lovely Woodcraft Folk group and vice versa:"),
                React.createElement(reactstrap_1.Col, { sm: { size: 10, offset: 2 } },
                    React.createElement(reactstrap_1.Input, { type: "textarea", value: this.props.campWith || '', onChange: this.updateEmergency("campWith") }))) : null;
        return (React.createElement(React.Fragment, null,
            emergency,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h4", null, "Additional Information"))),
            React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Label, { sm: 2 }, customQuestions.extraQuestion ? customQuestions.extraQuestion : 'Anything else we need to know?:'),
                React.createElement(reactstrap_1.Col, { sm: 10 },
                    React.createElement(reactstrap_1.Input, { type: "textarea", placeholder: "", value: this.props.note || customQuestions.extraTemplate || '', onChange: this.updateNote, rows: 6 }))),
            campWith,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h4", null, "Permission"))),
            React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Col, { sm: { size: 10, offset: 2 } },
                    React.createElement(reactstrap_1.FormGroup, { check: true },
                        React.createElement(reactstrap_1.Label, { check: true },
                            React.createElement(reactstrap_1.Input, { type: "checkbox", checked: !!this.props.permission, onChange: this.updatePermission }),
                            ' ',
                            "I give permission for the people named above to attend ",
                            this.props.event.name,
                            ".",
                            React.createElement("br", null),
                            React.createElement("br", null),
                            "I acknowledge it is my responsibility to ensure everyone over 16 attending has up-to-date Woodcraft Folk membership and completed a DBS check.",
                            React.createElement("br", null),
                            React.createElement("br", null),
                            "I agree this information will be stored electronically and shared only with individuals who need this information to engage your child safely in Woodcraft Folk activities. Based on the needs of your child we may also share any relevant information with medical or child protection professionals. For more information please visit",
                            React.createElement("a", { href: "https://woodcraft.org.uk/privacy" }, " www.woodcraft.org.uk/privacy"),
                            " or contact ",
                            React.createElement("a", { href: "mailto:data@woodcraft.org.uk" }, "data@woodcraft.org.uk")))))));
    }
}
exports["default"] = PermissionForm;


/***/ }),

/***/ "./src/front/bookings/components/loader.tsx":
/*!**************************************************!*\
  !*** ./src/front/bookings/components/loader.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/bookings/permission.ts");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/bookings/actions.ts");
const bookings = __importStar(__webpack_require__(/*! ../index */ "./src/front/bookings/index.ts"));
//load an individual booking so we can edit it, this will check we have permission to VIEW this booking.
class BookingLoader extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getBooking(this.props.match.params.bookingId);
    }
    render() {
        if (this.props.Booking === undefined)
            return React.createElement("div", null, "Loading Data");
        return React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/booking/:bookingId(\\d+)/edit", component: (0, permission_1.viewBookingCheck)(bookings.editPage) }),
            ")");
    }
}
const mapStateToProps = (state, props) => {
    const Booking = state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]);
    //const Bookings = state.getIn(["Bookings","bookings"]).filter(b => b.get("eventId") === Event.get("id")).toList();
    //const Participants = Bookings.reduce((r, b) => r.concat(b.get("participants")), Immutable.List());//just easier to do this here than find a plain javascript object map function
    return { Booking };
};
const mapDispatchToProps = {
    getBooking: actions_1.getBooking,
};
const VisibleBookingLoader = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)((0, permission_1.loggedInCheck)(BookingLoader));
exports["default"] = VisibleBookingLoader;


/***/ }),

/***/ "./src/front/bookings/components/myBookingPage.tsx":
/*!*********************************************************!*\
  !*** ./src/front/bookings/components/myBookingPage.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const event = __importStar(__webpack_require__(/*! ../../events */ "./src/front/events/index.ts"));
const bookingForm_1 = __importDefault(__webpack_require__(/*! ./form/bookingForm */ "./src/front/bookings/components/form/bookingForm.tsx"));
const participantQuickList_1 = __importDefault(__webpack_require__(/*! ./participantQuickList */ "./src/front/bookings/components/participantQuickList.tsx"));
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/bookings/actions.ts");
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/bookings/permission.ts");
const permissions_1 = __webpack_require__(/*! ../../../shared/permissions */ "./src/shared/permissions.ts");
const moment_1 = __importDefault(__webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js"));
const v4_1 = __importDefault(__webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const storage_factory_1 = __webpack_require__(/*! storage-factory */ "./node_modules/storage-factory/lib/index.js");
const local = (0, storage_factory_1.storageFactory)(() => localStorage);
//this is the special case where we are doing the sessions own booking for the event. If we have previously booked then edit that instead of letting them create a new one.  
//TODO: do we have permission?
class MyBookingPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const event = this.props.Event.toJS();
        const user = this.props.User.toJS();
        const booking = this.props.Booking.toJS ? this.props.Booking.toJS() : this.props.Booking;
        const organisations = event.organisations.filter(o => (0, permissions_1.bookIntoOrganisation)(user, event, booking, o));
        booking.externalExtra = booking.externalExtra || {};
        const form = React.createElement(bookingForm_1.default, { user: user, event: event, booking: booking, organisations: organisations, submit: booking.id ? (booking) => this.props.saveBooking(booking, true) : this.props.createBooking, updateCurrentBooking: this.props.updateCurrentBooking, cancel: this.props.cancelBooking, env: this.props.env });
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { xs: 12, sm: 12, md: 10 },
                React.createElement("h3", null,
                    "Booking for ",
                    event.name),
                form),
            React.createElement(participantQuickList_1.default, { booking: booking, event: event })));
    }
}
const mapStateToProps = (state, props) => {
    const eventId = parseInt(props.match.params.eventId);
    let User = state.getIn(["User", "user"]);
    let Event = state.getIn(["Events", "events", eventId]);
    const event = Event.toJS();
    //find the booking, sources:
    //1) currentBooking if set and for this user/event,
    //2) Pre-existing booking in the bookings map
    //3) Booking in localstorage
    //4) empty booking
    const Bookings = state.get("Bookings");
    let currentBooking = Bookings.get("currentBooking");
    if (currentBooking && (currentBooking.get("eventId") !== Event.get("id") || currentBooking.get("userId") !== User.get("id")))
        currentBooking = null;
    const existingBooking = state.getIn(["Bookings", "bookings"]).find(b => b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id"));
    //@ts-ignore
    const localData = local.getItem('currentBooking') ? JSON.parse(local.getItem('currentBooking')) : false;
    const localBooking = (localData &&
        (localData.eventId === Event.get("id")) &&
        (localData.userId === User.get("id"))) ? localData : false;
    const prevBooking = (Event, Bookings, User) => {
        if (Event.get("bigCampMode") === false)
            return null;
        let prevBooking = Bookings.get("bookings")
            .filter(b => b.get("userId") === User.get("id"))
            .filter(b => (0, moment_1.default)(b.get('createdAt')).year() === (0, moment_1.default)().year())
            .toList()
            .sort((a, b) => a.get('participants').size < b.get('participants').size)
            .get(0);
        if (prevBooking) {
            prevBooking = prevBooking.set("eventId", Event.get("id"))
                .delete("id")
                .delete("note")
                .delete('createdAt')
                .delete('updatedAt')
                .set('participants', prevBooking.get("participants").map(p => p.set("id", (0, v4_1.default)()).delete("bookingId").set('days', event.partialDates !== 'partial' ? 2 ** ((0, moment_1.default)(event.endDate).diff((0, moment_1.default)(event.startDate), 'days') + 1) - 1 : event.partialDatesData[0].mask))
                .delete('createdAt')
                .delete('updatedAt'));
            return prevBooking;
        }
        else {
            return null;
        }
    };
    let Booking = currentBooking || existingBooking || localBooking || prevBooking(Event, Bookings, User) || emptyBooking(User, Event);
    const Env = state.get("App");
    return { User, Event, Booking, Env };
};
const emptyBooking = (User, Event) => {
    const event = Event.toJS();
    const booking = {
        userId: User.get("id"),
        eventId: Event.get("id"),
        userName: User.get("id") === 1 ? '' : User.get("userName"),
        userEmail: User.get("id") === 1 ? '' : User.get("email") ? User.get("email") : '',
        participants: [{
                id: (0, v4_1.default)(),
                name: '',
                age: '',
                diet: '',
                days: event.partialDates !== 'partial' ? 2 ** ((0, moment_1.default)(event.endDate).diff((0, moment_1.default)(event.startDate), 'days') + 1) - 1 : event.partialDatesData[0].mask,
                externalExtra: {},
                internalExtra: {}
            }],
        externalExtra: {},
        internalExtra: {},
        organisationId: undefined
    };
    if (Event.get("organisationsEnabled")) {
        const bookRole = User.get('roles').toJS().find(r => r.name === 'book' && r.eventId === Event.get("id"));
        const orgId = (bookRole && bookRole.organisationId) ? bookRole.organisationId : Event.getIn(['organisations', 0, 'id']);
        booking.organisationId = orgId;
    }
    return booking;
};
const getEvent = event.actions.getEvent;
const mapDispatchToProps = {
    getEvent,
    updateQuickList: actions_1.updateQuickList,
    createBooking: actions_1.createBooking,
    getUserBookings: actions_1.getUserBookings,
    saveBooking: actions_1.saveBooking,
    cancelBooking: actions_1.cancelBooking,
    updateCurrentBooking: actions_1.updateCurrentBooking
};
const VisibleMyBookingPage = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(MyBookingPage);
exports["default"] = (0, permission_1.bookEventCheck)(VisibleMyBookingPage);


/***/ }),

/***/ "./src/front/bookings/components/participantQuickList.tsx":
/*!****************************************************************!*\
  !*** ./src/front/bookings/components/participantQuickList.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const woodcraft_js_1 = __webpack_require__(/*! ../../../shared/woodcraft.js */ "./src/shared/woodcraft.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
woodcraft_js_1.woodcraft.reverse();
class ParticipantsList extends React.Component {
    render() {
        const list = this.props.booking.participants.filter(p => p.name !== '' && p.age !== '' && p.diet !== '');
        const groups = woodcraft_js_1.woodcraft.map(w => {
            const people = list.filter((p) => p.age === '' ? false : w.filter((0, moment_1.default)(this.props.event.startDate).diff((0, moment_1.default)(p.age), 'years')))
                .sort(nameSort)
                .map((p, k) => React.createElement("p", { key: k },
                React.createElement("a", { href: `#participant-${p.id}` }, p.name)));
            if (people.length === 0)
                return null;
            return (React.createElement("div", { className: "participantQuickList", key: w.name },
                React.createElement("h5", null,
                    w.name,
                    ": ",
                    people.length),
                people));
        });
        return (React.createElement(reactstrap_1.Col, { md: 2 },
            React.createElement("div", { className: "sticky-top" },
                React.createElement("h4", null,
                    "Participants: ",
                    list.length),
                groups)));
    }
}
exports["default"] = ParticipantsList;
const nameSort = (a, b) => {
    var splitA = a.name.split(" ");
    var splitB = b.name.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];
    if (lastA < lastB)
        return -1;
    if (lastA > lastB)
        return 1;
    return 0;
};


/***/ }),

/***/ "./src/front/bookings/components/thanksPage.tsx":
/*!******************************************************!*\
  !*** ./src/front/bookings/components/thanksPage.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
//import event from '../../events'
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/bookings/actions.ts");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_markdown_1 = __importDefault(__webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js"));
const age_1 = __importDefault(__webpack_require__(/*! ../../age */ "./src/front/age/index.tsx"));
const feeFactory_1 = __importDefault(__webpack_require__(/*! ../../../shared/fee/feeFactory */ "./src/shared/fee/feeFactory.ts"));
const woodcraft_js_1 = __webpack_require__(/*! ../../../shared/woodcraft.js */ "./src/shared/woodcraft.js");
const paymentReference_1 = __importDefault(__webpack_require__(/*! ../../../shared/paymentReference */ "./src/shared/paymentReference.ts"));
//confirmation page for bookings
class ThanksPage extends React.Component {
    event;
    user;
    booking;
    ageWidgets;
    fees;
    constructor(props) {
        super(props);
        this.event = this.props.Event.toJS();
        this.user = this.props.User.toJS();
        this.booking = this.props.Booking.toJS();
        this.ageWidgets = (0, age_1.default)(this.event);
        this.fees = (0, feeFactory_1.default)(this.event);
    }
    render() {
        const event = this.props.Event.toJS();
        const user = this.props.User.toJS();
        const ageWidgets = (0, age_1.default)(event);
        const booking = this.props.Booking.toJS();
        const startDate = (0, moment_1.default)(event.startDate);
        booking.participants.forEach(p => {
            p.ageAtStart = startDate.diff((0, moment_1.default)(p.age), 'years'); //@ts-ignore
            p.ageGroup = woodcraft_js_1.woodcraft.find(w => w.filter(p.ageAtStart)).singular;
            p.displayAge = ageWidgets.displayAgeParticipant(p);
        });
        const participants = booking.participants.map(p => React.createElement(ParticipantRow, { key: p.id, ...p }));
        const paymentText = event.paymentInfo.replace(/(%%%%)/g, (0, paymentReference_1.default)(booking.id));
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h3", null,
                        "Thanks for booking for ",
                        event.name),
                    React.createElement("p", null,
                        "You can come back and ",
                        React.createElement(react_router_dom_1.Link, { to: "/event/" + event.id + "/book" }, "edit"),
                        " your booking at any time before the deadline"),
                    React.createElement("h4", null, "Participants booked"),
                    React.createElement(reactstrap_1.Table, { striped: true },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "Name"),
                                React.createElement("th", null, "Age"),
                                React.createElement("th", null, "Diet"))),
                        React.createElement("tbody", null, participants)))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { sm: 12 },
                    React.createElement("h4", null, "Money"),
                    React.createElement(react_markdown_1.default, { children: event.feeData.desc }))),
            React.createElement(this.fees.ThanksRow, { event: this.event, booking: booking }),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(react_markdown_1.default, { children: paymentText })),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("p", null,
                        "If you have any questions, or need to get in touch for any reason please contact ",
                        React.createElement("a", { href: `mailto:${event.customQuestions.emailReply}` }, event.customQuestions.emailReply))))));
    }
}
const ParticipantRow = props => React.createElement("tr", null,
    React.createElement("td", null, props.name),
    React.createElement("td", null, props.displayAge),
    React.createElement("td", null, props.diet));
class ThanksPageWrapper extends React.Component {
    hasBooking;
    constructor(props) {
        super(props);
        this.hasBooking = this.props.Booking;
    }
    render() {
        if (this.props.Booking)
            return React.createElement(ThanksPage, { ...this.props });
        else {
            //this is some unholy hack to get the thanks page to redirect back to the booking form if the user does not have a booking and will never actually come up in the real world.
            setImmediate(this.props.redirectFromThanks, this.props.Event.get('id'));
            return null;
        }
    }
}
const mapStateToProps = (state, props) => {
    let User = state.getIn(["User", "user"]);
    let Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    let Booking = state.getIn(["Bookings", "bookings"]).find(b => b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id"));
    return { User, Event, Booking };
};
//const getEvent = event.actions.getEvent
const mapDispatchToProps = { redirectFromThanks: actions_1.redirectFromThanks };
const VisibleThanksPage = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(ThanksPageWrapper);
exports["default"] = VisibleThanksPage;


/***/ }),

/***/ "./src/front/bookings/index.ts":
/*!*************************************!*\
  !*** ./src/front/bookings/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyThanksPage = exports.applyPage = exports.loader = exports.cancelPage = exports.thanksPage = exports.editPage = exports.myBookingPage = exports.reducer = exports.actions = void 0;
const actions = __importStar(__webpack_require__(/*! ./actions */ "./src/front/bookings/actions.ts"));
exports.actions = actions;
const reducer_1 = __importDefault(__webpack_require__(/*! ./reducer */ "./src/front/bookings/reducer.ts"));
exports.reducer = reducer_1.default;
const myBookingPage_1 = __importDefault(__webpack_require__(/*! ./components/myBookingPage */ "./src/front/bookings/components/myBookingPage.tsx"));
exports.myBookingPage = myBookingPage_1.default;
const applyPage_1 = __importDefault(__webpack_require__(/*! ./components/applyPage */ "./src/front/bookings/components/applyPage.tsx"));
exports.applyPage = applyPage_1.default;
const applyThanksPage_1 = __importDefault(__webpack_require__(/*! ./components/applyThanksPage */ "./src/front/bookings/components/applyThanksPage.tsx"));
exports.applyThanksPage = applyThanksPage_1.default;
const editPage_1 = __importDefault(__webpack_require__(/*! ./components/editPage */ "./src/front/bookings/components/editPage.tsx"));
exports.editPage = editPage_1.default;
const thanksPage_1 = __importDefault(__webpack_require__(/*! ./components/thanksPage */ "./src/front/bookings/components/thanksPage.tsx"));
exports.thanksPage = thanksPage_1.default;
const cancelPage_1 = __importDefault(__webpack_require__(/*! ./components/cancelPage */ "./src/front/bookings/components/cancelPage.tsx"));
exports.cancelPage = cancelPage_1.default;
const loader_1 = __importDefault(__webpack_require__(/*! ./components/loader */ "./src/front/bookings/components/loader.tsx"));
exports.loader = loader_1.default;


/***/ }),

/***/ "./src/front/bookings/permission.ts":
/*!******************************************!*\
  !*** ./src/front/bookings/permission.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.editBookingCheck = exports.bookEventCheck = exports.applyEventCheck = exports.viewBookingCheck = exports.loggedInCheck = void 0;
const redirect_1 = __webpack_require__(/*! redux-auth-wrapper/history4/redirect */ "./node_modules/redux-auth-wrapper/history4/redirect.js");
const P = __importStar(__webpack_require__(/*! ../../shared/permissions */ "./src/shared/permissions.ts"));
exports.loggedInCheck = (0, redirect_1.connectedRouterRedirect)({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        return user.id !== 1;
    },
    redirectPath: "/user",
    wrapperDisplayName: "View Booking check"
});
exports.viewBookingCheck = (0, redirect_1.connectedRouterRedirect)({
    authenticatedSelector: (state, props) => {
        //if (props.booking === undefined) return true;
        const user = state.getIn(["User", "user"]).toJS();
        const Booking = state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]);
        if (!Booking)
            return false;
        const booking = Booking.toJS();
        booking.event = state.getIn(["Events", "events", booking.eventId]).toJS();
        return P.viewBooking(user, booking);
    },
    redirectPath: "/user",
    wrapperDisplayName: "View Booking check"
});
exports.applyEventCheck = (0, redirect_1.connectedRouterRedirect)({
    authenticatedSelector: (state, props) => {
        const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
        const User = state.getIn(["User", "user"]);
        return P.applyToBookEvent(User.toJS(), Event.toJS());
    },
    redirectPath: (state, props) => {
        if (state.getIn(["User", "user", "applications"]).find(a => a.get("eventId") === props.match.params.eventId))
            return '/event/' + props.match.params.eventId + '/apply/thanks';
        else
            return '/';
    },
    wrapperDisplayName: "Apply To Book check"
});
exports.bookEventCheck = (0, redirect_1.connectedRouterRedirect)({
    authenticatedSelector: (state, props) => {
        const User = state.getIn(["User", "user"]);
        const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
        const user = User.toJS();
        const event = Event.toJS();
        return P.bookEvent(user, event);
    },
    redirectPath: "/user",
    wrapperDisplayName: "Create Event Check"
});
exports.editBookingCheck = (0, redirect_1.connectedRouterRedirect)({
    authenticatedSelector: (state, props) => {
        //called from /booking/1/edit
        const User = state.getIn(["User", "user"]);
        const Booking = state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]);
        const Event = state.getIn(["Events", "events", Booking.get("eventId")]);
        const user = User.toJS();
        const event = Event.toJS();
        const booking = Booking.toJS();
        return P.editBooking(user, event, booking);
    },
    redirectPath: "/user",
    wrapperDisplayName: "Create Event Check"
});


/***/ }),

/***/ "./src/front/bookings/reducer.ts":
/*!***************************************!*\
  !*** ./src/front/bookings/reducer.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Immutable = __importStar(__webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js"));
const a = __importStar(__webpack_require__(/*! ./actions */ "./src/front/bookings/actions.ts"));
const user = __importStar(__webpack_require__(/*! ../user */ "./src/front/user/index.ts"));
const manageActions = __importStar(__webpack_require__(/*! ../manage/actions */ "./src/front/manage/actions.ts"));
const initialBookingsState = Immutable.fromJS({ currentBooking: null, bookings: null });
function Bookings(state = initialBookingsState, action) {
    switch (action.type) {
        //case a.GET_EVENTS: return Immutable.fromJS(action.data);
        case a.UPDATE_BOOKINGS:
            return state.set("bookings", action.bookings.reduce((a, c) => {
                return a.setIn([c.id, 'participants'], null).setIn([c.id, 'payments'], null).mergeDeepIn([c.id], Immutable.fromJS(c));
            }, state.get("bookings") || Immutable.Map()));
        case a.DELETE_BOOKING:
            return state.deleteIn(["bookings", action.id]);
        case user.actions.UPDATE_USER:
            return state.set("bookings", null); //invalidates app render if the user changes until we can fetch more user bookings.
        case a.UPDATE_CURRENT_BOOKING:
            return state.set("currentBooking", Immutable.fromJS(action.booking));
        case manageActions.LOCAL_ASSIGN_VILLAGE:
            return state.setIn(["bookings", action.bookingId, "villageId"], action.villageId);
    }
    return state;
}
exports["default"] = Bookings;


/***/ }),

/***/ "./src/front/events/actions.ts":
/*!*************************************!*\
  !*** ./src/front/events/actions.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteEvent = exports.createEvent = exports.saveEvent = exports.getEventDetails = exports.getEvent = exports.getEvents = exports.removeEvent = exports.updateEvents = exports.REMOVE_EVENT = exports.GET_EVENTS = exports.UPDATE_EVENTS = void 0;
const fetch_1 = __importDefault(__webpack_require__(/*! ../fetch */ "./src/front/fetch.ts"));
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
const m = __importStar(__webpack_require__(/*! ../messages */ "./src/front/messages/index.ts"));
//Actions
exports.UPDATE_EVENTS = 'EVENT_UPDATE_EVENTS';
exports.GET_EVENTS = 'EVENT_GET_EVENTS';
exports.REMOVE_EVENT = 'EVENT_REMOVE_EVENT';
const updateEvents = e => {
    return {
        type: exports.UPDATE_EVENTS,
        events: e.events
    };
};
exports.updateEvents = updateEvents;
const removeEvent = id => {
    return {
        type: exports.REMOVE_EVENT,
        id: id
    };
};
exports.removeEvent = removeEvent;
const getEvents = () => {
    return (dispatch) => {
        console.log("FETCHING EVENTS");
        (0, fetch_1.default)('/api/events', "GET")
            .then(j => dispatch((0, exports.updateEvents)(j))).catch(r => {
            console.log(r);
        });
    };
};
exports.getEvents = getEvents;
const getEvent = (id) => {
    return (dispatch) => {
        (0, fetch_1.default)('/api/event/' + id, "GET")
            .then(j => {
            dispatch((0, exports.updateEvents)(j));
        }).catch(r => console.log(r));
    };
};
exports.getEvent = getEvent;
const getEventDetails = (id) => {
    return (dispatch) => {
        (0, fetch_1.default)('/api/event/' + id + '/details', "GET")
            .then(j => {
            dispatch((0, exports.updateEvents)(j));
        }).catch(r => console.log(r));
    };
};
exports.getEventDetails = getEventDetails;
const saveEvent = event => {
    return (dispatch) => {
        (0, fetch_1.default)('/api/event/edit', "POST", event)
            .then(j => {
            dispatch((0, exports.updateEvents)(j));
            dispatch(m.actions.setSuccess("Event Updated"));
            dispatch((0, react_router_redux_1.push)('/'));
        }).catch(r => console.log(r));
    };
};
exports.saveEvent = saveEvent;
const createEvent = event => {
    return dispatch => {
        (0, fetch_1.default)('/api/event/create', "POST", event)
            .then(j => {
            dispatch((0, exports.updateEvents)(j));
            dispatch(m.actions.setSuccess("Event Created"));
            dispatch((0, react_router_redux_1.push)('/'));
        }).catch(r => {
            console.log(r);
        });
    };
};
exports.createEvent = createEvent;
const deleteEvent = event => {
    return dispatch => {
        (0, fetch_1.default)('/api/event/delete', "POST", event)
            .then(() => {
            dispatch((0, exports.removeEvent)(event.id));
            dispatch(m.actions.setSuccess("Event Deleted"));
            dispatch((0, react_router_redux_1.push)('/'));
        });
    };
};
exports.deleteEvent = deleteEvent;


/***/ }),

/***/ "./src/front/events/components/createPage.tsx":
/*!****************************************************!*\
  !*** ./src/front/events/components/createPage.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const eventForm_1 = __importDefault(__webpack_require__(/*! ./eventForm */ "./src/front/events/components/eventForm.tsx"));
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/events/permission.ts");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/events/actions.ts");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class CreatePage extends React.Component {
    constructor(props) {
        super(props);
        this.saveEvent = this.saveEvent.bind(this);
    }
    saveEvent(e) {
        this.props.createEvent(e);
    }
    render() {
        //const data = this.props.user.toObject();
        let event = {
            id: null,
            name: '',
            description: '',
            startDate: (0, moment_1.default)().format("YYYY-MM-DD"),
            endDate: (0, moment_1.default)().format("YYYY-MM-DD"),
            bookingDeadline: (0, moment_1.default)().format("YYYY-MM-DD"),
            allowGuestBookings: false,
            feeModel: "free",
            feeData: {},
            paymentTypes: ["Cash", "Cheque", "Bank Transfer"],
            paymentInfo: ""
        };
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h3", null, "New Event"))),
            React.createElement(eventForm_1.default, { event: event, new: true, saveEvent: this.saveEvent })));
    }
}
const mapStateToProps = (state) => {
    //var Events = state.getIn(["Data","Events"]);
    // return {Events};
    return {};
};
const mapDispatchToProps = { createEvent: actions_1.createEvent };
var VisibleCreatePage = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)((0, permission_1.createEventCheck)(CreatePage));
exports["default"] = VisibleCreatePage;


/***/ }),

/***/ "./src/front/events/components/editPage.tsx":
/*!**************************************************!*\
  !*** ./src/front/events/components/editPage.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const eventForm_1 = __importDefault(__webpack_require__(/*! ./eventForm */ "./src/front/events/components/eventForm.tsx"));
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/events/actions.ts");
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/events/permission.ts");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class EditPage extends React.Component {
    render() {
        if (this.props.Event === undefined)
            return null;
        let event = this.props.Event.toJS();
        //const data = this.props.user.toObject();
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h3", null,
                        "Edit Event - ",
                        event.name))),
            React.createElement(eventForm_1.default, { event: event, saveEvent: this.props.saveEvent, deleteEvent: this.props.deleteEvent })));
    }
}
const mapStateToProps = (state, props) => {
    var Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    return { Event };
};
const mapDispatchToProps = { getEvent: actions_1.getEvent, saveEvent: actions_1.saveEvent, deleteEvent: actions_1.deleteEvent };
var VisibleEditPage = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)((0, permission_1.editEventCheck)(EditPage));
exports["default"] = VisibleEditPage;


/***/ }),

/***/ "./src/front/events/components/eventForm.tsx":
/*!***************************************************!*\
  !*** ./src/front/events/components/eventForm.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const react_toggle_1 = __importDefault(__webpack_require__(/*! react-toggle */ "./node_modules/react-toggle/dist/component/index.js"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const map_1 = __importDefault(__webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"));
const attendance_1 = __importDefault(__webpack_require__(/*! ../../attendance */ "./src/front/attendance/index.ts"));
const organisationForm_1 = __importDefault(__webpack_require__(/*! ./organisationForm */ "./src/front/events/components/organisationForm.tsx"));
const cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));
const feeFactory_1 = __importDefault(__webpack_require__(/*! ../../../shared/fee/feeFactory */ "./src/shared/fee/feeFactory.ts"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
const free_solid_svg_icons_2 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // @ts-ignore
        this.state.event = this.props.event;
        // @ts-ignore
        this.state.delete = false;
        this.state.event.bookingPolicy = this.state.event.bookingPolicy || 'guest';
        this.state.event.partialDates = this.state.event.partialDates || 'whole';
        this.state.event.organisations = this.state.event.organisations || [];
        this.state.event.customQuestions = this.state.event.customQuestions || {};
        this.update = this.update.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateChecked = this.updateChecked.bind(this);
        this.updatePaymentOptions = this.updatePaymentOptions.bind(this);
        this.clickDeleteLock = this.clickDeleteLock.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
        this.clickSave = this.clickSave.bind(this);
        this.updateExtra = this.updateExtra.bind(this);
        this.updateCustomChecked = this.updateCustomChecked.bind(this);
    }
    update(item) {
        return e => {
            this.setState((0, immutability_helper_1.default)(this.state, { event: { [item]: { $set: e.target.value } } }));
        };
    }
    updateData(item) {
        return data => {
            this.setState((0, immutability_helper_1.default)(this.state, { event: { [item]: { $set: data } } }));
        };
    }
    updateExtra(item) {
        return e => {
            this.setState((0, immutability_helper_1.default)(this.state, { event: { customQuestions: { [item]: { $set: e.target.value } } } }));
        };
    }
    updateChecked(item) {
        return e => {
            this.setState((0, immutability_helper_1.default)(this.state, { event: { [item]: { $set: e.target.checked } } }));
        };
    }
    updateCustomChecked(item) {
        return e => {
            this.setState((0, immutability_helper_1.default)(this.state, { event: { customQuestions: { [item]: { $set: e.target.checked } } } }));
        };
    }
    updatePaymentOptions(e) {
        this.setState((0, immutability_helper_1.default)(this.state, { event: { paymentTypes: { $set: e.target.value.split("\n") } } }));
    }
    clickDeleteLock(e) {
        this.setState({ delete: !this.state.delete });
        e.preventDefault();
    }
    clickDelete(e) {
        this.props.deleteEvent({ id: this.props.event.id });
        e.preventDefault();
    }
    clickSave(e) {
        const state = (0, cloneDeep_1.default)(this.state.event);
        state.organisations = state.organisations.map(o => {
            if (typeof o.id === "string")
                delete o.id;
            return o;
        }); //remove temp ids
        this.props.saveEvent(state);
        e.preventDefault();
    }
    render() {
        const feeOptions = [React.createElement("option", { key: 1, value: "free" }, "Free"), React.createElement("option", { key: 2, value: "flat" }, "Flat Fee"), React.createElement("option", { key: 3, value: "ealing" }, "Ealing Pricing Policy"), React.createElement("option", { key: 4, value: "big" }, "Big Camp Policy"), React.createElement("option", { key: 5, value: "vcamp" }, "VCamp Policy"), React.createElement("option", { key: 6, value: "commonground" }, "Common Ground Policy")];
        const attendanceOptions = (0, map_1.default)(attendance_1.default, a => React.createElement("option", { value: a.name, key: a.name + "key" }, a.selection));
        const FeeConfig = (0, feeFactory_1.default)(this.state.event).Config;
        const AttendanceConfig = attendance_1.default[this.state.event.partialDates].Config;
        let attendanceFields = null;
        if (this.state.event.partialDates !== 'whole' && this.state.event.partialDates !== 'free')
            attendanceFields = (React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Label, { sm: 2 }, "Attendance Options:"),
                React.createElement(reactstrap_1.Col, { sm: 10 },
                    React.createElement(AttendanceConfig, { data: this.state.event.partialDatesData, update: this.updateData('partialDatesData') }))));
        let paymentFields = null;
        let feeOptionFields = null;
        if (this.state.event.feeModel !== "free") {
            feeOptionFields = (React.createElement(reactstrap_1.FormGroup, { row: true },
                React.createElement(reactstrap_1.Label, { sm: 2 }, "Fee Options:"),
                React.createElement(reactstrap_1.Col, { sm: 10 },
                    React.createElement(FeeConfig, { event: this.state.event, fee: this.state.event.feeData, update: this.updateData('feeData') }))));
            const options = this.state.event.paymentTypes.join("\n");
            paymentFields = (React.createElement(React.Fragment, null,
                formField("textarea", "Payment Options:", options, this.updatePaymentOptions),
                formField("textarea", "Payment Instructions:", this.state.event.paymentInfo, this.update("paymentInfo")),
                formField("textarea", "Payment Instructions (Annon):", this.state.event.customQuestions.annonPayment, this.updateExtra("annonPayment"))));
        }
        let organisationForm = this.state.event.organisationsEnabled ?
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { sm: 2 },
                    React.createElement(reactstrap_1.Label, null, "Organisations:")),
                React.createElement(reactstrap_1.Col, { sm: 10 },
                    React.createElement(organisationForm_1.default, { orgs: this.state.event.organisations, update: this.updateData('organisations') }))) : null;
        let deleteButtons = this.props.new ? null : [React.createElement(reactstrap_1.Button, { key: "deletelock", type: "submit", disabled: !this.state.delete, onClick: this.clickDelete, className: "float-right", color: "danger" }, "Delete"), React.createElement(reactstrap_1.Button, { key: "delete", className: "float-right mr-1", type: "submit", color: "danger", onClick: this.clickDeleteLock },
                React.createElement("span", { style: { color: 'white' } },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: !this.state.delete ? free_solid_svg_icons_1.faLockOpen : free_solid_svg_icons_2.faLock })))];
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Form, null,
                    formField("text", "Name:", this.state.event.name, this.update("name"), "Event Name"),
                    formField("textarea", "Description:", this.state.event.description, this.update("description")),
                    formField("date", "Start Date:", (0, moment_1.default)(this.state.event.startDate).format("YYYY-MM-DD"), this.update("startDate")),
                    formField("date", "End Date:", (0, moment_1.default)(this.state.event.endDate).format("YYYY-MM-DD"), this.update("endDate")),
                    formField("date", "Booking Deadline:", (0, moment_1.default)(this.state.event.bookingDeadline).format("YYYY-MM-DD"), this.update("bookingDeadline")),
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, null, "Booking Policy:"),
                        React.createElement(reactstrap_1.Input, { type: "select", value: this.state.event.bookingPolicy, onChange: this.update('bookingPolicy') },
                            React.createElement("option", { value: 'guest', key: 'guest' }, "Guest"),
                            React.createElement("option", { value: 'registered', key: 'registered' }, "Registered"),
                            React.createElement("option", { value: 'approved', key: 'approved' }, "Approved"))),
                    React.createElement(reactstrap_1.FormGroup, { row: true },
                        React.createElement(reactstrap_1.Label, { xs: 2 }, "Big Camp Mode:"),
                        React.createElement(reactstrap_1.Col, { xs: 10, className: "mt-1" },
                            React.createElement(react_toggle_1.default, { checked: !!this.state.event.bigCampMode, onChange: this.updateChecked('bigCampMode') }))),
                    React.createElement(reactstrap_1.FormGroup, { row: true },
                        React.createElement(reactstrap_1.Label, { xs: 2 }, "Enable Organisations:"),
                        React.createElement(reactstrap_1.Col, { xs: 10, className: "mt-1" },
                            React.createElement(react_toggle_1.default, { checked: !!this.state.event.organisationsEnabled, onChange: this.updateChecked('organisationsEnabled') }))),
                    organisationForm,
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, null, "Attendance Policy:"),
                        React.createElement(reactstrap_1.Input, { type: "select", value: this.state.event.partialDates, onChange: this.update('partialDates') }, attendanceOptions)),
                    attendanceFields,
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, null, "DoB Widget"),
                        React.createElement(reactstrap_1.Input, { type: "select", value: this.state.event.customQuestions.ageWidgets, onChange: this.updateExtra('ageWidgets') },
                            React.createElement("option", { value: 'dob' }, "Date of Birth"),
                            React.createElement("option", { value: 'groupings' }, "Age group dropdown"))),
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, null, "Fee Structure:"),
                        React.createElement(reactstrap_1.Input, { type: "select", value: this.state.event.feeModel, onChange: this.update('feeModel') }, feeOptions)),
                    feeOptionFields,
                    paymentFields,
                    formField("text", "Extra Info Box Question", this.state.event.customQuestions.extraQuestion, this.updateExtra("extraQuestion")),
                    formField("textarea", "Extra Info Template:", this.state.event.customQuestions.extraTemplate, this.updateExtra("extraTemplate")),
                    formField("text", "Email Reply-to:", this.state.event.customQuestions.emailReply, this.updateExtra("emailReply")),
                    formField("text", "Managers Email Subject Tag:", this.state.event.customQuestions.emailSubjectTag, this.updateExtra("emailSubjectTag")),
                    switchGroup("Over 16 e-mail address", this.state.event.customQuestions.adultEmail, this.updateCustomChecked('adultEmail')),
                    switchGroup("Over 16 First-Aid question", this.state.event.customQuestions.adultFirstAid, this.updateCustomChecked('adultFirstAid')),
                    switchGroup("Central Food Opt Out", this.state.event.customQuestions.foodOptOut, this.updateCustomChecked('foodOptOut')),
                    switchGroup("Photo consent question", this.state.event.customQuestions.photoConsent, this.updateCustomChecked('photoConsent')),
                    React.createElement(reactstrap_1.Row, null,
                        React.createElement(reactstrap_1.Col, null,
                            React.createElement(reactstrap_1.Button, { color: "success", onClick: this.clickSave }, "Save"),
                            deleteButtons))))));
    }
}
exports["default"] = EditForm;
const formField = (type, label, value, update, placeholder = null) => (React.createElement(reactstrap_1.FormGroup, null,
    React.createElement(reactstrap_1.Label, { for: label }, label),
    React.createElement(reactstrap_1.Input, { type: type, name: label, placeholder: placeholder, value: value || '', onChange: update })));
const switchGroup = (label, value, update) => (React.createElement(reactstrap_1.FormGroup, { row: true },
    React.createElement(reactstrap_1.Label, { xs: 2 },
        label,
        ":"),
    React.createElement(reactstrap_1.Col, { xs: 10, className: "mt-1" },
        React.createElement(react_toggle_1.default, { checked: !!value, onChange: update }))));


/***/ }),

/***/ "./src/front/events/components/listPage.tsx":
/*!**************************************************!*\
  !*** ./src/front/events/components/listPage.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
const react_markdown_1 = __importDefault(__webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/events/actions.ts");
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/events/permission.ts");
const actions_2 = __webpack_require__(/*! ../../bookings/actions */ "./src/front/bookings/actions.ts"); //deep import, bad cause circular..
const permissions_1 = __webpack_require__(/*! ../../../shared/permissions */ "./src/shared/permissions.ts");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const feeFactory_1 = __importDefault(__webpack_require__(/*! ../../../shared/fee/feeFactory */ "./src/shared/fee/feeFactory.ts"));
const paymentReference_1 = __importDefault(__webpack_require__(/*! ../../../shared/paymentReference */ "./src/shared/paymentReference.ts"));
//Event listing
class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.clickCreate = this.clickCreate.bind(this);
    }
    clickCreate(e) {
        e.preventDefault();
        // @ts-ignore
        dispatch((0, react_router_redux_1.push)('/event/create'));
    }
    render() {
        const user = this.props.User.toJS();
        let events = this.props.Events.toSet()
            .filter(e => new Date(e.get("startDate")) > new Date())
            .sort((a, b) => a.get("startDate").localeCompare(b.get("startDate")))
            .map((e) => React.createElement(Event, { User: user, ...e.toJS(), key: e.get("id") }))
            .toArray();
        let previousEvents = this.props.Events.toSet().filter(e => (0, permissions_1.manageEvent)(user, e.toJS()) && new Date(e.get("startDate")) < new Date())
            .sort((a, b) => a.get("startDate").localeCompare(b.get("startDate")) * -1)
            .map((e) => React.createElement(Event, { User: user, ...e.toJS(), key: e.get("id") }))
            .toArray();
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null, events)),
            previousEvents.length > 0 ? React.createElement(React.Fragment, null,
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, null,
                        React.createElement("h4", null, "Previous Events"))),
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, null, previousEvents))) : null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(CreateButton, { clickCreate: this.clickCreate })))));
    }
}
const CreateButton = (0, permission_1.showCreateLink)((props) => React.createElement(reactstrap_1.Button, { color: "success", onClick: props.clickCreate }, "New Event"));
const Event = (props) => {
    const EditLink = (0, permission_1.showEditLink)(() => React.createElement(react_router_dom_1.NavLink, { event: props, to: "/event/" + props.id + "/edit" }, "Edit"));
    const ManageLink = (0, permission_1.showManageLink)(() => React.createElement(react_router_dom_1.NavLink, { to: "/event/" + props.id + "/manage" }, "Manage"));
    const EditApplyButton = getEditApplyButton(props.User, props);
    return (React.createElement(reactstrap_1.Card, { className: "mb-3" },
        React.createElement(reactstrap_1.CardImg, { top: true, src: "/event-header.jpg", alt: "Card image cap" }),
        React.createElement(reactstrap_1.CardBody, null,
            React.createElement(EditApplyButton, { event: props, booking: props.booking }),
            React.createElement(reactstrap_1.CardTitle, null, props.name),
            React.createElement(reactstrap_1.CardSubtitle, null,
                (0, moment_1.default)(props.startDate).format('Do'),
                " - ",
                (0, moment_1.default)(props.endDate).format('Do MMMM YYYY')),
            React.createElement("br", null),
            props.booking ? React.createElement(MyBookingDisplay, { event: props, booking: props.booking }) : null,
            React.createElement(react_markdown_1.default, { children: props.description }),
            React.createElement("div", { className: "float-right" },
                React.createElement(EditLink, { event: props }),
                " ",
                React.createElement(ManageLink, { event: props })))));
};
const MyBookingDisplay = props => {
    const fees = (0, feeFactory_1.default)(props.event);
    const paymentText = props.event.paymentInfo.replace(/(%%%%)/g, (0, paymentReference_1.default)(props.booking.id));
    return React.createElement(React.Fragment, null,
        React.createElement("h5", null, "My booking"),
        React.createElement("p", null,
            "You have booked ",
            props.booking.participants.length,
            " participant",
            props.booking.participants.length > 1 ? 's' : '',
            " into this event."),
        React.createElement(fees.ThanksRow, { event: props.event, booking: props.booking }),
        React.createElement(react_markdown_1.default, { children: paymentText }));
};
const getEditApplyButton = (user, event) => {
    if (event.bookingPolicy !== 'guest' && user.id === 1)
        return () => React.createElement(react_router_dom_1.Link, { to: "/user", className: "btn btn-primary float-right" }, "Log in to Book");
    if (event.booking !== undefined) {
        return (0, permission_1.showBookingEditLink)(() => React.createElement(react_router_dom_1.Link, { to: "/booking/" + event.booking.id + "/edit", className: "btn btn-primary float-right" }, "Edit My Booking"));
    }
    if ((0, permissions_1.applyToBookEvent)(user, event)) {
        return (0, permission_1.showApplyToBookLink)(() => React.createElement(react_router_dom_1.Link, { to: "/event/" + event.id + "/apply", className: "btn btn-primary float-right" }, "Apply to book"));
    }
    if (event.application !== undefined) {
        return () => React.createElement("button", { className: "btn btn-primary float-right disabled", disabled: true }, "Applied");
    }
    if ((0, permissions_1.bookEvent)(user, event)) {
        return (0, permission_1.showBookLink)(() => React.createElement(react_router_dom_1.Link, { to: "/event/" + event.id + "/book", className: "btn btn-primary float-right" }, "Book"));
    }
    return () => React.createElement("button", { className: "btn btn-primary float-right disabled", disabled: true }, "Booking Closed");
};
//Connect to redux
const mapStateToProps = (state) => {
    const User = state.getIn(["User", "user"]);
    const userId = User.get("id");
    let Events = state.getIn(["Events", "events"]);
    const Bookings = state.getIn(["Bookings", "bookings"]);
    Events = Events.map(e => {
        e = e.set("booking", Bookings.find(b => b.get("eventId") === e.get('id') && b.get("userId") === userId));
        return e.set("application", User.get("applications").find(a => a.get('eventId') === e.get('id')));
    });
    return { User, Events };
};
const mapDispatchToProps = {
    getEvents: actions_1.getEvents,
    getUserBookings: actions_2.getUserBookings
};
var VisibleEventList = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(EventList);
exports["default"] = VisibleEventList;


/***/ }),

/***/ "./src/front/events/components/organisationForm.tsx":
/*!**********************************************************!*\
  !*** ./src/front/events/components/organisationForm.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
let orgkey = 0;
class OrganisationForm extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.state = {};
        // @ts-ignore
        this.state.orgs = this.props.orgs || [{ id: 'TEMP' }];
    }
    componentWillReceiveProps(nextProps) {
        this.setState((0, immutability_helper_1.default)(this.state, { orgs: { $set: (nextProps.orgs || [{ id: 'TEMP' }]) } }));
    }
    update(id) {
        return e => {
            const org = this.state.orgs.find(o => o.id === id);
            org.name = e.target.value;
            this.props.update(this.state.orgs);
            e.preventDefault();
        };
    }
    delete(id) {
        return e => {
            const orgs = this.state.orgs.filter(o => o.id !== id);
            this.props.update(orgs);
            e.preventDefault();
        };
    }
    add(e) {
        this.state.orgs.push({ id: "temp" + orgkey });
        orgkey++;
        this.props.update(this.state.orgs);
        e.preventDefault();
    }
    render() {
        const orgRows = this.state.orgs.map(o => React.createElement(OrgRow, { key: o.id, org: o, update: this.update, delete: this.delete }));
        return (React.createElement(React.Fragment, null,
            orgRows,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.Button, { type: "submit", color: "success", onClick: this.add }, "Add")))));
    }
}
exports["default"] = OrganisationForm;
const OrgRow = props => React.createElement(reactstrap_1.FormGroup, { row: true },
    React.createElement(reactstrap_1.Col, { sm: 10 },
        React.createElement(reactstrap_1.Input, { type: "text", value: props.org.name || '', onChange: props.update(props.org.id), placeholder: "Organisation Name" })),
    React.createElement(reactstrap_1.Col, null, typeof props.org.id === 'string' ? 'Save to view' : props.org.id),
    React.createElement(reactstrap_1.Col, null,
        React.createElement(reactstrap_1.Button, { type: "submit", onClick: props.delete(props.org.id), color: "warning" },
            React.createElement("span", { style: { color: 'white' } },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes })))));


/***/ }),

/***/ "./src/front/events/index.ts":
/*!***********************************!*\
  !*** ./src/front/events/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.editPage = exports.createPage = exports.listPage = exports.reducer = exports.actions = void 0;
const actions = __importStar(__webpack_require__(/*! ./actions */ "./src/front/events/actions.ts"));
exports.actions = actions;
const reducer_1 = __importDefault(__webpack_require__(/*! ./reducer */ "./src/front/events/reducer.ts"));
exports.reducer = reducer_1.default;
const listPage_1 = __importDefault(__webpack_require__(/*! ./components/listPage */ "./src/front/events/components/listPage.tsx"));
exports.listPage = listPage_1.default;
const createPage_1 = __importDefault(__webpack_require__(/*! ./components/createPage */ "./src/front/events/components/createPage.tsx"));
exports.createPage = createPage_1.default;
const editPage_1 = __importDefault(__webpack_require__(/*! ./components/editPage */ "./src/front/events/components/editPage.tsx"));
exports.editPage = editPage_1.default;


/***/ }),

/***/ "./src/front/events/permission.ts":
/*!****************************************!*\
  !*** ./src/front/events/permission.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showManageLink = exports.showApplyToBookLink = exports.showBookingEditLink = exports.showBookLink = exports.showCreateLink = exports.showEditLink = exports.createEventCheck = exports.editEventCheck = void 0;
const redirect_1 = __webpack_require__(/*! redux-auth-wrapper/history4/redirect */ "./node_modules/redux-auth-wrapper/history4/redirect.js");
const connectedAuthWrapper_1 = __importDefault(__webpack_require__(/*! redux-auth-wrapper/connectedAuthWrapper */ "./node_modules/redux-auth-wrapper/connectedAuthWrapper.js"));
const P = __importStar(__webpack_require__(/*! ../../shared/permissions */ "./src/shared/permissions.ts"));
exports.editEventCheck = (0, redirect_1.connectedRouterRedirect)({
    authenticatedSelector: (state, props) => {
        if (props.event === undefined)
            return true;
        return P.editEvent(state.getIn(["User", "user"]).toJS(), state.getIn(["Events", "event", parseInt(props.match.params.eventId)]).toJS());
    },
    redirectPath: "/user",
    wrapperDisplayName: "Edit Event Check"
});
exports.createEventCheck = (0, redirect_1.connectedRouterRedirect)({
    authenticatedSelector: (state, props) => {
        return P.createEvent(state.getIn(["User", "user"]).toJS());
    },
    redirectPath: "/user",
    wrapperDisplayName: "Create Event Check"
});
exports.showEditLink = (0, connectedAuthWrapper_1.default)({
    authenticatedSelector: (state, props) => {
        return P.editEvent(state.getIn(["User", "user"]).toJS(), props.event);
    },
    wrapperDisplayName: "showEventEditLink"
});
exports.showCreateLink = (0, connectedAuthWrapper_1.default)({
    authenticatedSelector: (state) => {
        return P.createEvent(state.getIn(["User", "user"]).toJS());
    },
    wrapperDisplayName: "showEventCreateLink"
});
exports.showBookLink = (0, connectedAuthWrapper_1.default)({
    authenticatedSelector: (state, props) => {
        return P.bookEvent(state.getIn(["User", "user"]).toJS(), props.event);
    },
    wrapperDisplayName: "showBookLink"
});
exports.showBookingEditLink = (0, connectedAuthWrapper_1.default)({
    authenticatedSelector: (state, props) => {
        return P.editBooking(state.getIn(["User", "user"]).toJS(), props.event, props.booking);
    },
    wrapperDisplayName: "showBookLink"
});
exports.showApplyToBookLink = (0, connectedAuthWrapper_1.default)({
    authenticatedSelector: (state, props) => {
        return P.applyToBookEvent(state.getIn(["User", "user"]).toJS(), props.event);
    },
    wrapperDisplayName: "showApplyToBookLink"
});
exports.showManageLink = (0, connectedAuthWrapper_1.default)({
    authenticatedSelector: (state, props) => {
        if (props.event === undefined)
            return true;
        return P.manageEvent(state.getIn(["User", "user"]).toJS(), props.event);
    },
    wrapperDisplayName: "showManageLink"
});


/***/ }),

/***/ "./src/front/events/reducer.ts":
/*!*************************************!*\
  !*** ./src/front/events/reducer.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Immutable = __importStar(__webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js"));
const a = __importStar(__webpack_require__(/*! ./actions */ "./src/front/events/actions.ts"));
const user = __importStar(__webpack_require__(/*! ../user */ "./src/front/user/index.ts"));
//should Events be a map or list? both suck sometimes..
const initalEventState = Immutable.fromJS({ events: {} });
//return state.set("bookings", action.bookings.reduce((a,c) => {a.set(c.id,Immutable.fromJS(c))}, state.get("bookings") || Immutable.Map()));
function Events(state = initalEventState, action) {
    switch (action.type) {
        case a.UPDATE_EVENTS:
            return state.set("events", action.events.reduce((a, c) => {
                console.log("updating events in UPDATE_EVENTS");
                return a.set(c.id, Immutable.fromJS(c));
            }, state.get("events") || Immutable.fromJS({})));
        case a.REMOVE_EVENT:
            return state.deleteIn(["events", action.id]);
        case user.actions.UPDATE_USER:
            console.log("WIPING EVENTS DUE TO USE UPDATE");
            return state.set("events", null);
    }
    return state;
}
exports["default"] = Events;


/***/ }),

/***/ "./src/front/fetch.ts":
/*!****************************!*\
  !*** ./src/front/fetch.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

//Long Story, could use some fixing,  we should actually do XSFR sometimes
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Cookies = __importStar(__webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js"));
function rfetch(url, method, data) {
    var options = {
        method: method,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        credentials: "same-origin",
    };
    if (method === "POST") {
        options.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
    }
    if (typeof (data) !== "undefined") { // @ts-ignore
        options.body = JSON.stringify(data);
    }
    // @ts-ignore
    return fetch(url, options).then(handleErrors);
}
exports["default"] = rfetch;
rfetch.fail = (error) => console.log('fail', error);
function handleErrors(response) {
    if (response.status == 401) {
        response.json().then(j => {
            // @ts-ignore
            dispatch({ type: "MESSAGE_SET_WARNING_MESSAGE", message: "401 Unauthorised on " + response.url + " - " + j.message });
            throw Error("401 Unauthorised on " + response.url);
        });
    }
    else if (!response.ok) {
        // @ts-ignore
        dispatch({ type: "MESSAGE_SET_WARNING_MESSAGE", message: "Error " + response.status + "" + response.url });
        throw Error("Error " + response.status + "" + response.url);
    }
    else
        return response.json();
}


/***/ }),

/***/ "./src/front/index.tsx":
/*!*****************************!*\
  !*** ./src/front/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
__webpack_require__(/*! ./lib/react-selectize/index.css */ "./src/front/lib/react-selectize/index.css");
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const routes_1 = __importDefault(__webpack_require__(/*! ./routes */ "./src/front/routes.tsx"));
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
const redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"));
const Immutable = __importStar(__webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js"));
const redux_immutable_1 = __webpack_require__(/*! redux-immutable */ "./node_modules/redux-immutable/dist/index.js");
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
const History = __importStar(__webpack_require__(/*! history */ "./node_modules/history/esm/history.js"));
const fetch_1 = __importDefault(__webpack_require__(/*! ./fetch */ "./src/front/fetch.ts"));
const user = __importStar(__webpack_require__(/*! ./user */ "./src/front/user/index.ts"));
const messages = __importStar(__webpack_require__(/*! ./messages */ "./src/front/messages/index.ts"));
const events = __importStar(__webpack_require__(/*! ./events */ "./src/front/events/index.ts"));
const bookings = __importStar(__webpack_require__(/*! ./bookings */ "./src/front/bookings/index.ts"));
const history = History.createBrowserHistory();
const middleware = (0, react_router_redux_1.routerMiddleware)(history);
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        try {
            const jsonMessage = {
                message: error.message,
                file: '',
                line: 0,
                column: 0,
                stack: info.componentStack,
                location: window.location.href
            };
            const jsonString = JSON.stringify(jsonMessage);
            const options = {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                credentials: "same-origin",
                body: jsonString
            };
            // @ts-ignore
            window.fetch('/api/error', options);
        }
        catch (e) {
            console.error(e);
            // ah well we tried
        }
    }
    render() {
        if (this.state.hasError) {
            return React.createElement("p", null, "Something went wrong, refreshing the page may help.");
        }
        return this.props.children;
    }
}
const appReducer = (state = 'dev', action) => {
    switch (action.type) {
        case 'APP_UPDATE_ENV':
            return action.env;
    }
    return state;
};
const rootReducer = (0, redux_immutable_1.combineReducers)({
    App: appReducer,
    User: user.reducer,
    Messages: messages.reducer,
    Events: events.reducer,
    Bookings: bookings.reducer,
    router: react_router_redux_1.routerReducer
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
const store = (0, redux_1.createStore)(rootReducer, Immutable.Map(), composeEnhancers((0, redux_1.applyMiddleware)(redux_thunk_1.default, middleware)));
const provider = React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_router_redux_1.ConnectedRouter, { history: history }, routes_1.default));
//console.log( document.getElementById('root'));
/*****************************
 * This following line is very very bad but we want to be able to dispatch from fetch...
 *****************************/
// @ts-ignore
window.dispatch = store.dispatch;
(0, react_dom_1.render)(React.createElement(ErrorBoundary, null, provider), document.getElementById('root'));
let hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
}
else { // @ts-ignore
    if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    }
    else { // @ts-ignore
        if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }
    }
}
if (!(typeof document.addEventListener === "undefined" || hidden === undefined)) {
    document.addEventListener(visibilityChange, () => {
        console.log(`Visibility change ${document[hidden]} ${document.visibilityState}`);
        if (!document[hidden]) {
            // @ts-ignore
            dispatch(user.actions.getUser());
        }
    }, false);
}
// @ts-ignore
(0, fetch_1.default)('/api/env', "GET").then(j => dispatch({ type: 'APP_UPDATE_ENV', env: j.env }));


/***/ }),

/***/ "./src/front/manage/actions.ts":
/*!*************************************!*\
  !*** ./src/front/manage/actions.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unapproveDBS = exports.approveDBS = exports.unapproveMembership = exports.approveMembership = exports.syncMax = exports.deletePayment = exports.addPayment = exports.deleteRole = exports.addRole = exports.assignVillage = exports.renameVillage = exports.deleteVillage = exports.addVillage = exports.LOCAL_ASSIGN_VILLAGE = exports.decline = exports.approve = exports.togglePaid = exports.TOGGLE_PAID = void 0;
const fetch_1 = __importDefault(__webpack_require__(/*! ../fetch */ "./src/front/fetch.ts"));
const actions_1 = __webpack_require__(/*! ../bookings/actions */ "./src/front/bookings/actions.ts");
const actions_2 = __webpack_require__(/*! ../events/actions */ "./src/front/events/actions.ts");
exports.TOGGLE_PAID = "MANAGE_TOGGLE_PAID";
const togglePaid = (id) => {
    return dispatch => {
        (0, fetch_1.default)('/api/booking/paid', "POST", { id: id })
            .then(j => {
            dispatch((0, actions_1.updateBookings)(j));
        });
    };
};
exports.togglePaid = togglePaid;
const approve = (id, org, note) => {
    return dispatch => {
        (0, fetch_1.default)('/api/application/approve', "POST", { id: id, org: org, note: note })
            .then(j => {
            dispatch((0, actions_2.updateEvents)(j));
        });
    };
};
exports.approve = approve;
const decline = (id) => {
    return dispatch => {
        (0, fetch_1.default)('/api/application/decline', "POST", { id: id })
            .then(j => {
            dispatch((0, actions_2.updateEvents)(j));
        });
    };
};
exports.decline = decline;
exports.LOCAL_ASSIGN_VILLAGE = "MANAGE_LOCAL_ASSIGN_VILLAGE";
const localAssignVillage = (bookingId, villageId) => {
    return {
        type: exports.LOCAL_ASSIGN_VILLAGE,
        bookingId: bookingId,
        villageId: villageId
    };
};
const addVillage = data => dispatch => {
    (0, fetch_1.default)('/api/village/create', "POST", data)
        .then(j => {
        dispatch((0, actions_2.updateEvents)(j));
    });
};
exports.addVillage = addVillage;
const deleteVillage = id => dispatch => {
    (0, fetch_1.default)('/api/village/delete', "POST", { id: id })
        .then(j => {
        dispatch((0, actions_2.updateEvents)(j));
        dispatch((0, actions_1.updateBookings)(j));
    });
};
exports.deleteVillage = deleteVillage;
const renameVillage = (id, name) => dispatch => {
    (0, fetch_1.default)('/api/village/rename', "POST", { id: id, name: name })
        .then(j => {
        dispatch((0, actions_2.updateEvents)(j));
        dispatch((0, actions_1.updateBookings)(j));
    });
};
exports.renameVillage = renameVillage;
const assignVillage = (bookingId, villageId) => dispatch => {
    (0, fetch_1.default)('/api/village/assign', "POST", { bookingId: bookingId, villageId: villageId })
        .then(j => {
        dispatch((0, actions_1.updateBookings)(j));
    });
    dispatch(localAssignVillage(bookingId, villageId));
};
exports.assignVillage = assignVillage;
const addRole = role => dispatch => {
    (0, fetch_1.default)('/api/role/create', "POST", role)
        .then(j => dispatch((0, actions_2.updateEvents)(j)));
};
exports.addRole = addRole;
const deleteRole = id => dispatch => {
    (0, fetch_1.default)('/api/role/delete', "POST", { id: id })
        .then(j => dispatch((0, actions_2.updateEvents)(j)));
};
exports.deleteRole = deleteRole;
const addPayment = payment => dispatch => {
    (0, fetch_1.default)('/api/payment/add', 'POST', payment)
        .then(j => dispatch((0, actions_1.updateBookings)(j)));
};
exports.addPayment = addPayment;
const deletePayment = payment => dispatch => {
    (0, fetch_1.default)('/api/payment/delete', 'POST', payment)
        .then(j => dispatch((0, actions_1.updateBookings)(j)));
};
exports.deletePayment = deletePayment;
const syncMax = id => dispatch => {
    (0, fetch_1.default)('/api/booking/syncMax', 'POST', { bookingId: id })
        .then(j => dispatch((0, actions_1.updateBookings)(j)));
};
exports.syncMax = syncMax;
const approveMembership = id => dispatch => {
    (0, fetch_1.default)('/api/membership/approve', 'POST', id)
        .then(j => dispatch((0, actions_1.updateBookings)(j)));
};
exports.approveMembership = approveMembership;
const unapproveMembership = id => dispatch => {
    (0, fetch_1.default)('/api/membership/unapprove', 'POST', id)
        .then(j => dispatch((0, actions_1.updateBookings)(j)));
};
exports.unapproveMembership = unapproveMembership;
const approveDBS = id => dispatch => {
    (0, fetch_1.default)('/api/dbs/approve', 'POST', id)
        .then(j => dispatch((0, actions_1.updateBookings)(j)));
};
exports.approveDBS = approveDBS;
const unapproveDBS = id => dispatch => {
    (0, fetch_1.default)('/api/dbs/unapprove', 'POST', id)
        .then(j => dispatch((0, actions_1.updateBookings)(j)));
};
exports.unapproveDBS = unapproveDBS;


/***/ }),

/***/ "./src/front/manage/components/applications.tsx":
/*!******************************************************!*\
  !*** ./src/front/manage/components/applications.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'
const react_markdown_1 = __importDefault(__webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js"));
class Applications extends React.Component {
    constructor(props) {
        super(props);
        this.state = { organisations: {}, notes: {} };
        const event = this.props.Event.toJS();
        (event.applications || []).map(a => {
            this.state.notes[a.id] = a.message;
            console.log(a.messsage);
        });
        this.approve = this.approve.bind(this);
        this.decline = this.decline.bind(this);
        this.setOrganisation = this.setOrganisation.bind(this);
        this.updateNote = this.updateNote.bind(this);
    }
    approve(id) {
        return e => {
            let org = this.state.organisations[id];
            org = parseInt(org) ? parseInt(org) : null; //cast undefined/"any" to null, string from event to number
            this.props.approve(id, org, this.state.notes[id]);
            e.preventDefault();
        };
    }
    decline(id) {
        return e => {
            this.props.decline(id);
            e.preventDefault();
        };
    }
    setOrganisation(id) {
        return e => {
            this.setState((0, immutability_helper_1.default)(this.state, { organisations: { [id]: { $set: e.target.value } } }));
            e.preventDefault();
        };
    }
    updateNote(id) {
        return e => {
            this.setState((0, immutability_helper_1.default)(this.state, { notes: { [id]: { $set: e.target.value } } }));
            e.preventDefault();
        };
    }
    render() {
        const event = this.props.Event.toJS();
        const apps = (event.applications || []).map(a => React.createElement(ApplicationRow, { key: a.id, application: a, event: event, organisation: this.state.organisations[a.id], note: this.state.notes[a.id], approve: this.approve(a.id), decline: this.decline(a.id), setOrganisation: this.setOrganisation(a.id), updateNote: this.updateNote(a.id) }));
        return (React.createElement("div", null,
            React.createElement("h4", null, "Approve or decline applications to book:"),
            apps));
    }
}
exports["default"] = Applications;
const ApplicationRow = props => {
    let approveText = null;
    if (props.event.organisationsEnabled) {
        const options = props.event.organisations.map(o => React.createElement("option", { key: o.id, value: o.id }, o.name));
        approveText = React.createElement(reactstrap_1.FormGroup, null,
            React.createElement(reactstrap_1.Label, null, "Approve user to book into Organisation:"),
            React.createElement(reactstrap_1.Input, { type: "select", id: "orgSelect", value: props.organisation || 'any', onChange: props.setOrganisation }, options));
    }
    else {
        approveText = React.createElement("p", null, "Approve user to book into this event:");
    }
    return (React.createElement(reactstrap_1.Card, { className: "mb-1" },
        React.createElement(reactstrap_1.CardBody, null,
            React.createElement(reactstrap_1.CardTitle, null,
                React.createElement("b", null, props.application.user.userName),
                " (",
                props.application.user.email,
                ") - ",
                (0, moment_1.default)(props.application.createdAt).fromNow()),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { sm: 7 },
                    React.createElement(react_markdown_1.default, { children: props.application.message })),
                React.createElement(reactstrap_1.Col, { sm: 5 },
                    approveText,
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, null, "Note:"),
                        React.createElement(reactstrap_1.Input, { type: "textarea", rows: 7, value: props.note || '', onChange: props.updateNote })),
                    React.createElement(reactstrap_1.FormGroup, { row: true },
                        React.createElement(reactstrap_1.Col, null,
                            React.createElement(reactstrap_1.Button, { type: "submit", color: "success", onClick: props.approve }, "Approve"),
                            React.createElement(reactstrap_1.Button, { type: "submit", color: "danger", className: "ml-2", onClick: props.decline }, "Decline"))))))));
    return (React.createElement("div", { className: "col-sm-12" },
        React.createElement("div", { className: "panel panel-default" },
            React.createElement("div", { className: "panel-heading" },
                React.createElement("h3", { className: "panel-title" },
                    React.createElement("b", null, props.application.user.userName),
                    " (",
                    props.application.user.email,
                    ") - ",
                    (0, moment_1.default)(props.application.createdAt).fromNow())),
            React.createElement("div", { className: "panel-body" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-7" },
                        React.createElement("p", null, props.application.message)),
                    React.createElement("div", { className: "col-sm-5" },
                        approveText,
                        React.createElement("div", { className: "btn-toolbar float-right" },
                            React.createElement("button", { type: "submit", className: "btn btn-success", onClick: props.approve }, "Approve"),
                            React.createElement("button", { type: "submit", className: "btn btn-danger", onClick: props.decline }, "Decline"))))))));
};


/***/ }),

/***/ "./src/front/manage/components/birthdays.tsx":
/*!***************************************************!*\
  !*** ./src/front/manage/components/birthdays.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const age_1 = __importDefault(__webpack_require__(/*! ../../age */ "./src/front/age/index.tsx"));
class Birthdays extends React.Component {
    ageWidgets;
    constructor(props) {
        super(props);
        this.ageWidgets = (0, age_1.default)(this.props.Event.toJS());
    }
    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }
    componentWillReceiveProps() {
    }
    render() {
        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.participants;
        const startDate = moment_1.default.utc(event.startDate).startOf('day');
        const endDate = moment_1.default.utc(event.endDate).startOf('day').add(1, 'days');
        const days = [];
        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
            let rows = [];
            participants.forEach(p => {
                const bday = (0, moment_1.default)(p.age);
                if (m.date() === bday.date() && m.month() === bday.month()) {
                    const age = (0, moment_1.default)(m).add(1, 'days').diff(bday, 'years'); //@ts-ignore
                    if (age < 22)
                        rows.push(React.createElement("p", { key: p.id },
                            p.name,
                            " (",
                            age,
                            ")")); //@ts-ignore
                    else
                        rows.push(React.createElement("p", { key: p.id }, p.name));
                }
            });
            // @ts-ignore
            days.push(React.createElement(React.Fragment, { key: m },
                React.createElement("h5", null, m.format('dddd Do')),
                rows));
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null, days))));
    }
}
exports["default"] = Birthdays;


/***/ }),

/***/ "./src/front/manage/components/bookings.tsx":
/*!**************************************************!*\
  !*** ./src/front/manage/components/bookings.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_table_1 = __importDefault(__webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
__webpack_require__(/*! moment/locale/en-gb */ "./node_modules/moment/locale/en-gb.js");
const csv_file_creator_1 = __importDefault(__webpack_require__(/*! csv-file-creator */ "./node_modules/csv-file-creator/index.js"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
//import Switch from 'react-toggle'
//import bookings from '../bookings'
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/manage/permission.ts");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const age_1 = __importDefault(__webpack_require__(/*! ../../age */ "./src/front/age/index.tsx"));
const feeFactory_1 = __importDefault(__webpack_require__(/*! ../../../shared/fee/feeFactory */ "./src/shared/fee/feeFactory.ts"));
moment_1.default.locale('en-gb');
class Bookings extends React.Component {
    ageWidgets;
    getFeesOwed;
    constructor(props) {
        super(props);
        this.ageWidgets = (0, age_1.default)(this.props.Event.toJS());
        this.state = { expanded: null };
        this.markPaid = this.markPaid.bind(this);
        this.exportCSV = this.exportCSV.bind(this);
        this.updateExpanded = this.updateExpanded.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }
    componentWillReceiveProps() {
        this.setState((0, immutability_helper_1.default)(this.state, { expanded: { $set: null } }));
    }
    updateExpanded(id) {
        return e => {
            if (id === this.state.expanded)
                this.setState((0, immutability_helper_1.default)(this.state, { expanded: { $set: null } }));
            else
                this.setState((0, immutability_helper_1.default)(this.state, { expanded: { $set: id } }));
        };
    }
    exportCSV() {
        const event = this.props.Event.toJS();
        this.getFeesOwed = (0, feeFactory_1.default)(event).getFeesOwed;
        const exportedData = this.props.bookings.map(b => {
            let owed = this.getFeesOwed(event, b.participants, b).reduce((a, c) => parseFloat(c.total) + a, 0);
            const paid = b.payments ? b.payments.filter(p => p.type === 'payment').reduce((a, c) => a + parseFloat(c.amount), 0) : 0;
            owed = b.payments ? b.payments.filter(p => p.type === 'adjustment').reduce((a, c) => a + parseFloat(c.amount), owed) : owed;
            return [b.id,
                b.userName,
                b.district,
                b.userEmail,
                b.userContact,
                b.participants.length,
                b.paymentType,
                b.emergencyName,
                b.emergencyPhone,
                b.note,
                '£' + owed,
                '£' + paid,
                '£' + (owed - paid),
                b.createdAt,
                b.updatedAt];
        });
        const fileName = this.props.Event.get('name') + "-Bookings-" + (0, moment_1.default)().format('YYYY-MM-DD') + ".csv";
        (0, csv_file_creator_1.default)(fileName, [['id', 'Name', 'District', 'e-mail', 'Phone', 'Participants', 'Payment type', 'Emergency name', 'Emergency Contact', 'Note', 'Money Owed', 'Money Paid', 'Outstanding Balance', 'Created', 'Updated'], ...exportedData]);
    }
    markPaid(id) {
        return () => {
            this.props.togglePaid(id);
        };
    }
    render() {
        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const user = this.props.User.toJS();
        //const participants = this.props.Participants.toJS();
        /*const brows = bookings.map(b => <tr key={b.id}><td>{b.userName}</td>
                                            <td>{b.userEmail}</td>
                                            <td>{b.userContact}</td>
                                            <td>{b.participants.length}</td>
                                            <td>{b.paymentType}</td>
                                            <td>{b.updatedAt}</td>
                                        </tr>)
    */
        const data = bookings.map(b => {
            let result = {
                district: b.district,
                userName: b.userName,
                userEmail: b.userEmail,
                userContact: b.userContact,
                paymentType: b.paymentType,
                paid: b.paid,
                id: b.id,
                b: b,
                E: this.props.Event,
                participants: undefined,
                updatedAt: undefined
            };
            result.participants = b.participants.length; //@ts-ignore
            result.updatedAt = (0, moment_1.default)(b.updatedAt).format('L');
            return result;
        });
        const BookingEditLink = (0, permission_1.showBookingEditLink)(props => {
            return React.createElement(react_router_dom_1.Link, { to: "/booking/" + props.booking.id + "/edit" }, "Edit");
        });
        const columns = [];
        //@ts-ignore
        if (event.bigCampMode)
            columns.push({ accessor: "district", Header: "District", sortable: true });
        //@ts-ignore
        columns.push(...[{ accessor: "userName", Header: "Name", sortable: true },
            {
                accessor: "userEmail", Header: "e-mail", sortable: true,
                Cell: row => React.createElement("a", { href: `mailto:${row.original.userEmail}`, target: "_blank" }, row.original.userEmail)
            },
            {
                accessor: "userContact", Header: "Contact", sortable: true, minWidth: 70,
                Cell: row => React.createElement("a", { href: `tel:${row.original.userContact}`, target: "_blank" }, row.original.userContact)
            },
            { accessor: "participants", Header: "Booked", sortable: true, minWidth: 50 },
            { accessor: "paymentType", Header: "Payment Method", sortable: true, minWidth: 50 },
            { id: 'updatedAt',
                accessor: row => row,
                Cell: row => row.original.updatedAt,
                sortMethod: updatedSort,
                Header: "Updated",
                sortable: true,
                minWidth: 40
            },
            {
                id: "edit",
                accessor: "id",
                Header: "Edit",
                Cell: row => React.createElement(BookingEditLink, { event: row.original.E.toJS(), booking: row.original.b }),
                minWidth: 18
            }
        ]);
        //const sortables=[{column:"userName", sortFunction:nameSort},"userEmail","userContact","participants","paymentType","updatedAt"];
        const expanded = { [this.state.expanded]: true };
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.Button, { className: "float-right", onClick: this.exportCSV }, "Export CSV"),
                    React.createElement("h4", null,
                        "Total Bookings: ",
                        bookings.length))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(react_table_1.default, { expanded: expanded, getTrProps: (state, rowInfo, column) => {
                            if (rowInfo)
                                return { onClick: this.updateExpanded(rowInfo.viewIndex) };
                            return {};
                        }, onSortedChange: this.updateExpanded(null), onPageChange: this.updateExpanded(null), SubComponent: this.subRow, data: data, columns: columns, showPagination: true, showPageSizeOptions: false })))));
    }
    subRow = row => {
        const event = row.original.E.toJS();
        const village = event.villages.find(v => row.original.b.villageId === v.id);
        const organisation = event.organisations.find(o => row.original.b.organisationId === o.id);
        const participants = row.original.b.participants
            .sort((a, b) => nameSort(a.name, b.name))
            .map(p => React.createElement("tr", { key: p.id },
            React.createElement("td", null, p.name),
            React.createElement("td", null, p.displayAge)));
        return (React.createElement(reactstrap_1.Card, null,
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement(reactstrap_1.CardTitle, null,
                    row.original.b.district ? row.original.b.district + " - " : null,
                    row.original.b.userName),
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, { sm: 4 },
                        React.createElement("p", null,
                            React.createElement("b", null, "Booking Contact E-mail:"),
                            " ",
                            React.createElement("a", { href: "mailto:" + row.original.b.userEmail }, row.original.b.userEmail)),
                        React.createElement("p", null,
                            React.createElement("b", null, "Booking Contact Phone:"),
                            " ",
                            row.original.b.userContact),
                        village ? React.createElement("p", null,
                            React.createElement("b", null, "Village:"),
                            " ",
                            village.name) : null,
                        organisation ? React.createElement("p", null,
                            React.createElement("b", null, "Organisation:"),
                            " ",
                            organisation.name) : null,
                        React.createElement("p", null,
                            React.createElement("b", null, "Participants:"),
                            " ",
                            row.original.participants),
                        React.createElement("p", null,
                            React.createElement("b", null, "Anything Else:")),
                        React.createElement("p", null, row.original.b.note),
                        event.bigCampMode ? React.createElement("p", null,
                            React.createElement("b", null, "Camp With: "),
                            row.original.b.campWith) : null),
                    React.createElement(reactstrap_1.Col, { sm: 8 },
                        React.createElement(reactstrap_1.Table, null,
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, "Name"),
                                    React.createElement("th", null, "Age"))),
                            React.createElement("tbody", null, participants)))))));
    };
}
exports["default"] = Bookings;
const updatedSort = (a, b) => {
    return a.b.updatedAt > b.b.updatedAt ? 1 : -1;
};
const nameSort = (a, b) => {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];
    if (lastA < lastB)
        return -1;
    if (lastA > lastB)
        return 1;
    return 0;
};


/***/ }),

/***/ "./src/front/manage/components/containerPage.tsx":
/*!*******************************************************!*\
  !*** ./src/front/manage/components/containerPage.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const bookings = __importStar(__webpack_require__(/*! ../../bookings */ "./src/front/bookings/index.ts"));
const events = __importStar(__webpack_require__(/*! ../../events */ "./src/front/events/index.ts"));
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/manage/permission.ts");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/manage/actions.ts");
const actions_2 = __webpack_require__(/*! ../../user/actions */ "./src/front/user/actions.ts");
const filter_1 = __importDefault(__webpack_require__(/*! ./filter */ "./src/front/manage/components/filter.tsx"));
const bookings_1 = __importDefault(__webpack_require__(/*! ./bookings */ "./src/front/manage/components/bookings.tsx"));
const participants_1 = __importDefault(__webpack_require__(/*! ./participants */ "./src/front/manage/components/participants.tsx"));
const kp_1 = __importDefault(__webpack_require__(/*! ./kp */ "./src/front/manage/components/kp.tsx"));
const applications_1 = __importDefault(__webpack_require__(/*! ./applications */ "./src/front/manage/components/applications.tsx"));
const villages_1 = __importDefault(__webpack_require__(/*! ./villages */ "./src/front/manage/components/villages.tsx"));
const roles_1 = __importDefault(__webpack_require__(/*! ./roles */ "./src/front/manage/components/roles.tsx"));
const money_1 = __importDefault(__webpack_require__(/*! ./money */ "./src/front/manage/components/money.tsx"));
const emails_1 = __importDefault(__webpack_require__(/*! ./emails */ "./src/front/manage/components/emails.tsx"));
const birthdays_1 = __importDefault(__webpack_require__(/*! ./birthdays */ "./src/front/manage/components/birthdays.tsx"));
const graphs_1 = __importDefault(__webpack_require__(/*! ./graphs */ "./src/front/manage/components/graphs.tsx"));
const membership_1 = __importDefault(__webpack_require__(/*! ./membership */ "./src/front/manage/components/membership.tsx"));
const woodcraft_1 = __webpack_require__(/*! ../../../shared/woodcraft */ "./src/shared/woodcraft.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
const age_1 = __importDefault(__webpack_require__(/*! ../../age */ "./src/front/age/index.tsx"));
const moment_1 = __importDefault(__webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js"));
//this component sits at the root of our management pages and ensures all the booking information for the event is loaded. This will include other peoples bookings so  we need to check we have permission to view them.
class ManageContainerPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getEventDetails(this.props.match.params.eventId);
        this.props.getEventBookings(this.props.match.params.eventId);
        this.prepData(this.props.Bookings, this.props.Event);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.Bookings !== this.props.Bookings)
            this.prepData(nextProps.Bookings, nextProps.Event);
    }
    prepData(Bookings, Event) {
        //DeImmutable data and calculate ages, to avoid needing to do it on render. Store result in State.
        const event = Event.toJS();
        const ageWidgets = (0, age_1.default)(event);
        const startDate = (0, moment_1.default)(event.startDate); //todo store this as a Moment.
        const bookings = Bookings.valueSeq().toJS().filter(b => b.eventId === event.id);
        bookings.forEach(b => {
            b.externalExtra = b.externalExtra || {};
            b.participants.forEach(p => {
                p.ageAtStart = startDate.diff((0, moment_1.default)(p.age), 'years'); //@ts-ignore
                p.ageGroup = woodcraft_1.woodcraft.find(w => w.filter(p.ageAtStart)).singular;
                p.displayAge = ageWidgets.displayAgeParticipant(p);
                p.prettyUpdatedAt = (0, moment_1.default)(p.updatedAt).format('L');
                p.prettyCreatedAt = (0, moment_1.default)(p.createdAt).format('L');
                p.externalExtra = p.externalExtra || {};
                p.internalExtra = p.internalExtra || {};
            });
        });
        this.setState({ bookings: bookings });
    }
    render() {
        //prevent render until we have the data available.
        if (!this.props.Event || !this.props.Bookings || !this.props.Event.get("user"))
            return React.createElement("div", null, "Loading Data");
        const event = this.props.Event.toJS();
        const showApplications = event.bookingPolicy === 'approved' && event.applications;
        const ApplicationsTab = showApplications ?
            (0, permission_1.manageWholeEventWrapper)(() => React.createElement(CustomTab, { to: "/event/" + this.props.match.params.eventId + "/manage/applications", label: 'Applications (' + event.applications.length + ')', activeOnlyWhenExact: undefined })) : () => null;
        const VillagesTab = (0, permission_1.manageWholeEventWrapper)(() => event.bigCampMode ? React.createElement(CustomTab, { to: "/event/" + this.props.match.params.eventId + "/manage/villages", label: "Villages", activeOnlyWhenExact: undefined }) : null);
        const RolesTab = (0, permission_1.manageWholeEventWrapper)(() => React.createElement(CustomTab, { to: "/event/" + this.props.match.params.eventId + "/manage/roles", label: "Roles", activeOnlyWhenExact: undefined }));
        const MoneyTab = (0, permission_1.manageMoneyWrapper)(() => React.createElement(CustomTab, { to: "/event/" + this.props.match.params.eventId + "/manage/money", label: "Money", activeOnlyWhenExact: undefined }));
        const MembershipsTab = (0, permission_1.manageWholeEventWrapper)(() => event.customQuestions.adultEmail ? React.createElement(CustomTab, { to: "/event/" + this.props.match.params.eventId + "/manage/memberships", label: "Memberships", activeOnlyWhenExact: undefined }) : null);
        const { Bookings, ...props } = this.props;
        // @ts-ignore
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.Nav, { tabs: true },
                        React.createElement(CustomTab, { activeOnlyWhenExact: true, to: "/event/" + this.props.match.params.eventId + "/manage", label: "Participants" }),
                        React.createElement(CustomTab, { to: "/event/" + this.props.match.params.eventId + "/manage/bookings", label: "Bookings", activeOnlyWhenExact: undefined }),
                        React.createElement(CustomTab, { to: "/event/" + this.props.match.params.eventId + "/manage/kp", label: "Kp", activeOnlyWhenExact: undefined }),
                        React.createElement(VillagesTab, { ...this.props }),
                        React.createElement(RolesTab, { ...this.props }),
                        React.createElement(ApplicationsTab, { ...this.props }),
                        React.createElement(MoneyTab, { ...this.props }),
                        React.createElement(CustomTab, { to: "/event/" + this.props.match.params.eventId + "/manage/emails", label: "Emails", activeOnlyWhenExact: undefined }),
                        React.createElement(CustomTab, { to: "/event/" + this.props.match.params.eventId + "/manage/birthdays", label: "\uD83C\uDF82", activeOnlyWhenExact: undefined }),
                        React.createElement(CustomTab, { to: "/event/" + this.props.match.params.eventId + "/manage/graphs", label: "\uD83D\uDCC8", activeOnlyWhenExact: undefined }),
                        React.createElement(MembershipsTab, { ...this.props })))),
            React.createElement(react_router_dom_2.Switch, null,
                React.createElement(react_router_dom_2.Route, { exact: true, path: "/event/:eventId(\\d+)/manage" },
                    React.createElement(filter_1.default, { bookings: this.state.bookings, ...props },
                        React.createElement(participants_1.default, null))),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/participants" },
                    React.createElement(filter_1.default, { bookings: this.state.bookings, ...props },
                        React.createElement(participants_1.default, null))),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/bookings" },
                    React.createElement(filter_1.default, { bookings: this.state.bookings, ...props },
                        React.createElement(bookings_1.default, null))),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/kp" },
                    React.createElement(filter_1.default, { bookings: this.state.bookings, ...props },
                        React.createElement(kp_1.default, null))),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/emails" },
                    React.createElement(filter_1.default, { bookings: this.state.bookings, ...props },
                        React.createElement(emails_1.default, null))),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/birthdays" },
                    React.createElement(filter_1.default, { bookings: this.state.bookings, ...props },
                        React.createElement(birthdays_1.default, null))),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/applications" },
                    React.createElement(applications_1.default, { bookings: this.state.bookings, ...props })),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/villages" },
                    React.createElement(villages_1.default, { bookings: this.state.bookings, ...props })),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/roles" },
                    React.createElement(roles_1.default, { bookings: this.state.bookings, ...props })),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/money" },
                    React.createElement(money_1.default, { bookings: this.state.bookings, ...props })),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/graphs" },
                    React.createElement(filter_1.default, { bookings: this.state.bookings, ...props },
                        React.createElement(graphs_1.default, null))),
                React.createElement(react_router_dom_2.Route, { path: "/event/:eventId(\\d+)/manage/memberships" },
                    React.createElement(filter_1.default, { bookings: this.state.bookings, ...props },
                        React.createElement(membership_1.default, null))))));
    }
}
//we could still have no bookings..
const mapStateToProps = (state, props) => {
    const User = state.getIn(["User", "user"]);
    const UserList = state.getIn(["User", "list"]);
    const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    const Bookings = state.getIn(["Bookings", "bookings"]);
    return { User, UserList, Event, Bookings };
};
const mapDispatchToProps = {
    getEventBookings: bookings.actions.getEventBookings,
    getEventDetails: events.actions.getEventDetails,
    togglePaid: actions_1.togglePaid,
    approve: actions_1.approve,
    decline: actions_1.decline,
    assignVillage: actions_1.assignVillage,
    addVillage: actions_1.addVillage,
    deleteVillage: actions_1.deleteVillage,
    renameVillage: actions_1.renameVillage,
    getUserList: actions_2.getUserList,
    addRole: actions_1.addRole,
    deleteRole: actions_1.deleteRole,
    addPayment: actions_1.addPayment,
    deletePayment: actions_1.deletePayment,
    syncMax: actions_1.syncMax,
    approveMembership: actions_1.approveMembership,
    unapproveMembership: actions_1.unapproveMembership,
    approveDBS: actions_1.approveDBS,
    unapproveDBS: actions_1.unapproveDBS
};
const VisibleManageContainerPage = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)((0, permission_1.manageEventCheck)(ManageContainerPage));
exports["default"] = VisibleManageContainerPage;
const CustomTab = ({ label, to, activeOnlyWhenExact }) => (React.createElement(react_router_dom_2.Route, { path: to, exact: activeOnlyWhenExact, children: ({ match }) => (React.createElement(reactstrap_1.NavItem, null,
        React.createElement(reactstrap_1.NavLink, { className: (0, classnames_1.default)({ active: match }), tag: react_router_dom_1.Link, to: to }, label))) }));


/***/ }),

/***/ "./src/front/manage/components/emails.tsx":
/*!************************************************!*\
  !*** ./src/front/manage/components/emails.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
__webpack_require__(/*! moment/locale/en-gb */ "./node_modules/moment/locale/en-gb.js");
//import Switch from 'react-toggle'
//import bookings from '../bookings'
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
moment_1.default.locale('en-gb');
//import W from '../../../shared/woodcraft.js'
class Emails extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }
    render() {
        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const user = this.props.User.toJS();
        const emails = bookings.reduce((a, c) => {
            const extra = c.externalExtra.additionalContacts ? c.externalExtra.additionalContacts.filter(c => c.email.length > 0).map(c => c.email) : [];
            return [...a, c.userEmail, ...extra];
        }, []);
        const mailLink = `mailto:${user.email}?bcc=${emails.join(',')}`;
        const bookingRows = bookings.map(singleBookingRows);
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h3", null,
                        React.createElement("a", { href: mailLink }, "Click here to email visible contacts")),
                    React.createElement("p", null,
                        "Or you can copy/paste this: ",
                        React.createElement("b", null, "(INTO A BCC FIELD!)")),
                    React.createElement("textarea", { readOnly: true, style: { width: '100%' }, value: emails.join(', ') }),
                    React.createElement("table", { className: "table" },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "District"),
                                React.createElement("th", null, "Name"),
                                React.createElement("th", null, "Email"),
                                React.createElement("th", null, "Phone"))),
                        React.createElement("tbody", null, bookingRows))))));
    }
}
exports["default"] = Emails;
const singleBookingRows = booking => {
    if (!booking.externalExtra.additionalContacts)
        return [React.createElement("tr", null,
                React.createElement("td", null, booking.district),
                React.createElement("td", null,
                    React.createElement("b", null, booking.userName)),
                React.createElement("td", null,
                    React.createElement("b", null, mailTo(booking.userEmail))),
                React.createElement("td", null,
                    React.createElement("b", null, booking.userContact)))];
    const extraRows = booking.externalExtra.additionalContacts.filter(c => c.name.length > 0 || c.email.length > 0 || c.phone.length > 0)
        .map(c => React.createElement("tr", null,
        React.createElement("td", null, c.name),
        React.createElement("td", null, mailTo(c.email)),
        React.createElement("td", null, c.phone)));
    const mainRow = React.createElement("tr", null,
        React.createElement("td", { rowSpan: extraRows.length + 1 }, booking.district),
        React.createElement("td", null,
            React.createElement("b", null, booking.userName)),
        React.createElement("td", null,
            React.createElement("b", null, mailTo(booking.userEmail))),
        React.createElement("td", null,
            React.createElement("b", null, booking.userContact)));
    return [mainRow, ...extraRows];
};
const mailTo = email => React.createElement("a", { href: `mailto:${email}` }, email);


/***/ }),

/***/ "./src/front/manage/components/filter.tsx":
/*!************************************************!*\
  !*** ./src/front/manage/components/filter.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_selectize_1 = __webpack_require__(/*! react-selectize */ "./node_modules/react-selectize/src/index.js"); //Local version to fix bootstrap dropdowns. REMOVE
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const P = __importStar(__webpack_require__(/*! ../../../shared/permissions */ "./src/shared/permissions.ts"));
const debounce_1 = __importDefault(__webpack_require__(/*! debounce */ "./node_modules/debounce/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class Filter extends React.Component {
    bounceUpdate;
    constructor(props) {
        super(props);
        const participants = this.props.bookings.reduce((r, b) => [...r, ...b.participants], []);
        this.state = {
            orgs: [],
            villages: [],
            day: null,
            search: '',
            food: 'all',
            data: { bookings: this.props.bookings,
                participants: participants,
                filteredBookings: this.props.bookings,
                filteredParticipants: participants
            }
        };
        this.updateOrgs = this.updateOrgs.bind(this);
        this.updateVillages = this.updateVillages.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.updateDay = this.updateDay.bind(this);
        this.searchBooking = this.searchBooking.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateFood = this.updateFood.bind(this);
        this.bounceUpdate = (0, debounce_1.default)(() => this.updateData(this.props), 500);
    }
    componentWillReceiveProps(nextProps) {
        this.updateData(nextProps);
    }
    updateOrgs(orgs) {
        this.setState((0, immutability_helper_1.default)(this.state, { orgs: { $set: orgs } }));
        this.bounceUpdate();
    }
    updateVillages(villages) {
        this.setState((0, immutability_helper_1.default)(this.state, { villages: { $set: villages } }));
        this.bounceUpdate();
    }
    updateDay(day) {
        this.setState((0, immutability_helper_1.default)(this.state, { day: { $set: day } }));
        this.bounceUpdate();
    }
    updateFood(e) {
        this.setState((0, immutability_helper_1.default)(this.state, { food: { $set: e.target.value } }));
        this.bounceUpdate();
    }
    updateSearch(e) {
        this.setState((0, immutability_helper_1.default)(this.state, { search: { $set: e.target.value } }));
        this.bounceUpdate();
    }
    updateData(source) {
        let filteredBookings = source.bookings.filter(b => {
            if (this.state.food === 'all')
                return true;
            if (this.state.food === 'out' && b.externalExtra.foodOptOut)
                return true;
            if (this.state.food === 'central' && !b.externalExtra.foodOptOut)
                return true;
            return false;
        }).filter(b => {
            if (b.totalParticipants)
                b.participants = b.totalParticipants;
            if (this.state.orgs.length === 0)
                return true;
            return this.state.orgs.find(o => o.value === b.organisationId);
        }).filter(b => {
            if (this.state.villages.length === 0)
                return true;
            return this.state.villages.find(v => v.value === b.villageId);
        });
        if (this.state.day)
            filteredBookings = filteredBookings.map(b => {
                b.totalParticipants = b.participants;
                b.participants = b.participants.filter(p => p.days & this.state.day.value);
                return b;
            });
        let searchedBookings = filteredBookings;
        if (this.state.search.length > 2)
            searchedBookings = filteredBookings.reduce(this.searchBooking, []);
        const participants = searchedBookings === this.state.data.bookings ? this.state.data.participants : searchedBookings.reduce((r, b) => [...r, ...b.participants], []); //just easier to do this here than find a plain javascript object map function
        const filteredParticipants = filteredBookings.reduce((r, b) => [...r, ...b.participants], []).filter(p => p.name.toLowerCase().includes(this.state.search.toLowerCase().trim()));
        this.setState((0, immutability_helper_1.default)(this.state, {
            data: {
                $set: {
                    participants: participants,
                    bookings: searchedBookings,
                    filteredParticipants: filteredParticipants,
                    filteredBookings: filteredBookings
                }
            }
        }));
    }
    //TODO: Proper server side database searching
    searchBooking(R, booking) {
        const term = this.state.search.toLowerCase().trim();
        booking.totalParticipants = booking.participants;
        // const newParticipants = booking.participants.filter(p => p.name.includes(term));
        booking.district = booking.district || '';
        const bookingFound = (booking.userName.toLowerCase().includes(term)
            || booking.userEmail.toLowerCase().includes(term)
            || booking.userContact.toLowerCase().includes(term)
            || booking.district.toLowerCase().includes(term));
        //if (bookingFound || newParticipants.length > 0) {
        if (bookingFound) {
            //booking.participants = newParticipants;
            R.push(booking);
            return R;
        }
        return R;
    }
    render() {
        const user = this.props.User.toJS();
        const event = this.props.Event.toJS();
        const wholeEvent = P.manageWholeEvent(user, event);
        const orgOptions = this.props.Event.get("organisations").map(o => {
            return { label: o.get("name"), value: o.get("id"), id: o.get("id") };
        }).toArray();
        const villageOptions = this.props.Event.get("villages").map(v => {
            return { label: v.get("name"), value: v.get("id"), id: v.get("id") };
        }).toArray();
        orgOptions.forEach(o => {
            o.selectable = P.viewOrganisation(user, event, o);
        });
        villageOptions.forEach(v => {
            v.selectable = P.viewVillage(user, event, v);
        });
        const startDate = moment_1.default.utc(event.startDate).startOf('day');
        const endDate = moment_1.default.utc(event.endDate).startOf('day').add(1, 'days');
        const days = [];
        let mask = 0;
        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) { //@ts-ignore
            days.push({ label: m.format("dddd Do"), value: Math.pow(2, mask) });
            mask++;
        }
        const { Bookings, Participants, bookings, ...rest } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Form, null,
                React.createElement(reactstrap_1.FormGroup, { row: true, className: "mt-3" },
                    event.bigCampMode ? React.createElement(React.Fragment, null,
                        event.organisationsEnabled ?
                            React.createElement(reactstrap_1.Col, { sm: 3 },
                                React.createElement(reactstrap_1.Label, null, "Filter by Organisation:"),
                                React.createElement(react_selectize_1.MultiSelect
                                // @ts-ignore
                                , { 
                                    // @ts-ignore
                                    values: this.state.orgs, onValuesChange: this.updateOrgs, placeholder: wholeEvent ? "All Organisations" : "All Permissible Organisations", options: orgOptions, theme: "bootstrap3" })) : null,
                        React.createElement(reactstrap_1.Col, { sm: 3 },
                            React.createElement(reactstrap_1.Label, null, "Filter by Village:"),
                            React.createElement(react_selectize_1.MultiSelect
                            // @ts-ignore
                            , { 
                                // @ts-ignore
                                values: this.state.villages, onValuesChange: this.updateVillages, placeholder: wholeEvent ? "All Villages" : "All Permissible Villages", options: villageOptions, theme: "bootstrap3" }))) : null,
                    React.createElement(reactstrap_1.Col, { sm: 3 },
                        React.createElement(reactstrap_1.Label, null, "Filter by Day:"),
                        React.createElement(react_selectize_1.SimpleSelect, { value: this.state.day, onValueChange: this.updateDay, placeholder: "Any", options: days, theme: "bootstrap3" })),
                    React.createElement(reactstrap_1.Col, { sm: 3 },
                        React.createElement(reactstrap_1.Label, { className: "control-label" }, "Search:"),
                        React.createElement(reactstrap_1.Input, { type: "text", value: this.state.search, onChange: this.updateSearch, placeholder: "Search" })),
                    event.customQuestions.foodOptOut ?
                        React.createElement(reactstrap_1.Col, { sm: 3 },
                            React.createElement(reactstrap_1.Label, { className: "control-label" }, "Food:"),
                            React.createElement(reactstrap_1.Input, { type: "select", value: this.state.food, onChange: this.updateFood },
                                React.createElement("option", { value: "all" }, "All"),
                                React.createElement("option", { value: "central" }, "Central Only"),
                                React.createElement("option", { value: "out" }, "Opt-out Only"))) : null)),
            React.cloneElement(this.props.children, { ...this.state.data, ...rest })));
    }
}
exports["default"] = Filter;


/***/ }),

/***/ "./src/front/manage/components/graphs.tsx":
/*!************************************************!*\
  !*** ./src/front/manage/components/graphs.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'
const recharts_1 = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const age_1 = __importDefault(__webpack_require__(/*! ../../age */ "./src/front/age/index.tsx"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
class Graphs extends React.Component {
    ageWidgets;
    constructor(props) {
        super(props);
        this.state = { expanded: null };
        this.ageWidgets = (0, age_1.default)(this.props.Event.toJS());
    }
    componentWillReceiveProps() {
    }
    render() {
        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.participants;
        if (participants.length === 0)
            return React.createElement("p", null, "No participants to graph");
        const participantsData = [];
        participants.forEach(p => p.createdAt = (0, moment_1.default)(p.createdAt));
        const sortedParticipants = participants.sort((a, b) => a.createdAt - b.createdAt);
        const startDate = moment_1.default.utc(sortedParticipants[0].createdAt).endOf('day');
        const endDate = (0, moment_1.default)().endOf('day').add(1, 'hour');
        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
            //@ts-ignore
            participantsData.push({
                'name': m.format('Do MMM'),
                tot: sortedParticipants.filter(p => p.createdAt.isBefore(m)).length
            });
        }
        const ageData = [];
        for (let age = 0; age < 101; age++) {
            //@ts-ignore
            ageData.push({ 'name': age, tot: sortedParticipants.filter(p => p.ageAtStart === age).length });
        }
        const dietData = [
            { name: 'omnivore', value: 0 },
            { name: 'vegetarian', value: 0 },
            { name: 'vegan', value: 0 },
        ];
        participants.forEach(p => {
            //@ts-ignore
            dietData.find(d => d.name === p.diet).value++;
        });
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h4", null, "Participants booked"),
                    React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 300 },
                        React.createElement(recharts_1.LineChart, { data: participantsData, margin: {
                                top: 5, right: 30, left: 20, bottom: 40,
                            } },
                            React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                            React.createElement(recharts_1.XAxis, { dataKey: "name", tick: React.createElement(CustomizedAxisTick, null), interval: 6 }),
                            React.createElement(recharts_1.YAxis, { label: { value: 'Participants', angle: -90, position: 'insideLeft' } }),
                            React.createElement(recharts_1.Line, { dot: false, type: "stepAfter", dataKey: "tot", stroke: "#8884d8" }))),
                    React.createElement("h4", null, "Age Breakdown"),
                    React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 300 },
                        React.createElement(recharts_1.BarChart, { data: ageData, margin: {
                                top: 5, right: 30, left: 20, bottom: 30,
                            } },
                            React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                            React.createElement(recharts_1.XAxis, { dataKey: "name", label: "Age", interval: 4 }),
                            React.createElement(recharts_1.YAxis, { label: { value: 'Participants', angle: -90, position: 'insideLeft' } }),
                            React.createElement(recharts_1.Bar, { dataKey: "tot", fill: "#8884d8" }, ageData.map((entry, index) => {
                                const color = ageColour(index);
                                return React.createElement(recharts_1.Cell, { key: entry, fill: color });
                            })))),
                    React.createElement("h4", null, "Diet"),
                    React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 300 },
                        React.createElement(recharts_1.PieChart, null,
                            React.createElement(recharts_1.Pie, { nameKey: "name", data: dietData, dataKey: "value", cx: "50%", cy: "50%", outerRadius: 120, fill: "#8884d8", label: true }),
                            React.createElement(recharts_1.Legend, { align: "right", layout: "vertical", verticalAlign: "middle" })))))));
    }
}
exports["default"] = Graphs;
const ageColour = age => {
    switch (age) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return '#FFEE82';
        case 6:
        case 7:
        case 8:
        case 9:
            return '#80FF75';
        case 10:
        case 11:
        case 12:
            return '#8EFFDB';
        case 13:
        case 14:
        case 15:
            return '#706DFF';
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            return '#E7A0FF';
        default:
            return '#FF817A';
    }
};
class CustomizedAxisTick extends React.Component {
    render() {
        const { x, y, stroke, payload, } = this.props;
        return (React.createElement("g", { transform: `translate(${x},${y})` },
            React.createElement("text", { x: 0, y: 0, dy: 16, textAnchor: "end", fill: "#666", transform: "rotate(-45)" }, payload.value)));
    }
}


/***/ }),

/***/ "./src/front/manage/components/kp.tsx":
/*!********************************************!*\
  !*** ./src/front/manage/components/kp.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const woodcraft_1 = __webpack_require__(/*! ../../../shared/woodcraft */ "./src/shared/woodcraft.js");
class KP extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }
    render() {
        //const event = this.props.Event.toJS();
        //const bookings = this.props.Bookings.toJS();
        const participants = this.props.participants;
        const groups = woodcraft_1.woodcraft.map(w => {
            const people = participants.filter((p) => p.ageGroup === '' ? false : p.ageGroup === w.singular);
            if (people.length === 0)
                return null;
            return (React.createElement("tr", { key: w.name },
                React.createElement("td", null, w.name),
                React.createElement("td", null, people.filter(p => p.diet === "omnivore").length),
                React.createElement("td", null, people.filter(p => p.diet === "vegetarian").length),
                React.createElement("td", null, people.filter(p => p.diet === "vegan").length),
                React.createElement("td", null,
                    React.createElement("b", null, people.length))));
        });
        groups.push(React.createElement("tr", { key: "total" },
            React.createElement("td", null,
                React.createElement("b", null, "Total:")),
            React.createElement("td", null,
                React.createElement("b", null, participants.filter(p => p.diet === "omnivore").length)),
            React.createElement("td", null,
                React.createElement("b", null, participants.filter(p => p.diet === "vegetarian").length)),
            React.createElement("td", null,
                React.createElement("b", null, participants.filter(p => p.diet === "vegan").length)),
            React.createElement("td", null,
                React.createElement("b", null, participants.length))));
        const requirments = participants.filter(p => p.dietExtra !== null && p.dietExtra !== '').map(p => React.createElement("tr", { key: p.id },
            React.createElement("td", null, p.name),
            React.createElement("td", null, p.dietExtra)));
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement("h4", null, "Totals"),
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Age Group"),
                            React.createElement("th", null, "Omnivore"),
                            React.createElement("th", null, "Vegetarian"),
                            React.createElement("th", null, "Vegan"),
                            React.createElement("th", null,
                                React.createElement("b", null, "Total")))),
                    React.createElement("tbody", null, groups)),
                React.createElement("h4", null, "Requirments & Allergies"),
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Name"),
                            React.createElement("th", null, "Requirement"))),
                    React.createElement("tbody", null, requirments)))));
    }
}
exports["default"] = KP;
const nameSort = (a, b) => {
    var splitA = a.name.split(" ");
    var splitB = b.name.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];
    if (lastA < lastB)
        return -1;
    if (lastA > lastB)
        return 1;
    return 0;
};


/***/ }),

/***/ "./src/front/manage/components/membership.tsx":
/*!****************************************************!*\
  !*** ./src/front/manage/components/membership.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_copy_to_clipboard_1 = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const age_1 = __importDefault(__webpack_require__(/*! ../../age */ "./src/front/age/index.tsx"));
class Memberships extends React.Component {
    ageWidgets;
    constructor(props) {
        super(props);
        this.state = { copied: 0 };
        this.ageWidgets = (0, age_1.default)(this.props.Event.toJS());
        this.approveMembership = this.approveMembership.bind(this);
        this.unapproveMembership = this.unapproveMembership.bind(this);
        this.approveDBS = this.approveDBS.bind(this);
        this.unapproveDBS = this.unapproveDBS.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }
    componentWillReceiveProps() {
    }
    approveMembership(id) {
        return e => {
            this.props.approveMembership({
                id: id
            });
            e.preventDefault();
        };
    }
    unapproveMembership(id) {
        return e => {
            this.props.unapproveMembership({
                id: id
            });
            e.preventDefault();
        };
    }
    approveDBS(id) {
        return e => {
            this.props.approveDBS({
                id: id
            });
            e.preventDefault();
        };
    }
    unapproveDBS(id) {
        return e => {
            this.props.unapproveDBS({
                id: id
            });
            e.preventDefault();
        };
    }
    render() {
        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.participants;
        const adults = participants.filter(p => p.ageAtStart > 15);
        adults.forEach(p => {
            p.district = bookings.find(b => b.id === p.bookingId).district;
            p.internalExtra = p.internalExtra || {};
        });
        adults.sort(propSort('district'));
        const approvedBoth = adults.filter(p => p.internalExtra.member === true && p.internalExtra.dbs === true);
        const approvedDBSOnly = adults.filter(p => p.internalExtra.member !== true && p.internalExtra.dbs === true);
        const approvedMembershipOnly = adults.filter(p => p.internalExtra.member === true && p.internalExtra.dbs !== true);
        const notYetApproved = adults.filter(p => p.internalExtra.member !== true && p.internalExtra.dbs !== true);
        const notYetApprovedRows = notYetApproved.map(p => React.createElement("tr", { key: p.id },
            React.createElement("td", null, p.name + (p.ageAtStart === 16 ? '  (16)' : '')),
            React.createElement("td", null, p.district),
            React.createElement("td", null,
                p.externalExtra.adultEmail,
                " ",
                React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: p.externalExtra.adultEmail, onCopy: () => this.setState({ copied: p.id }) },
                    React.createElement("span", { style: { cursor: 'copy' } }, "\uD83D\uDCCB")),
                this.state.copied === p.id ? ' ✔️' : ''),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { color: "success", onClick: this.approveMembership(p.id) }, "Approve Membership")),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { color: "success", onClick: this.approveDBS(p.id) }, "Approve DBS"))));
        const approvedDBSOnlyRows = approvedDBSOnly.map(p => React.createElement("tr", { key: p.id },
            React.createElement("td", null, p.name + (p.ageAtStart === 16 ? '  (16)' : '')),
            React.createElement("td", null, p.district),
            React.createElement("td", null,
                p.externalExtra.adultEmail,
                " ",
                React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: p.externalExtra.adultEmail, onCopy: () => this.setState({ copied: p.id }) },
                    React.createElement("span", { style: { cursor: 'copy' } }, "\uD83D\uDCCB")),
                this.state.copied === p.id ? ' ✔️' : ''),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { color: "success", onClick: this.approveMembership(p.id) }, "Approve Membership")),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { color: "warning", onClick: this.unapproveDBS(p.id) }, "Unapprove DBS"))));
        const approvedMembershipOnlyRows = approvedMembershipOnly.map(p => React.createElement("tr", { key: p.id },
            React.createElement("td", null, p.name + (p.ageAtStart === 16 ? '  (16)' : '')),
            React.createElement("td", null, p.district),
            React.createElement("td", null,
                p.externalExtra.adultEmail,
                " ",
                React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: p.externalExtra.adultEmail, onCopy: () => this.setState({ copied: p.id }) },
                    React.createElement("span", { style: { cursor: 'copy' } }, "\uD83D\uDCCB")),
                this.state.copied === p.id ? ' ✔️' : ''),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { color: "warning", onClick: this.unapproveMembership(p.id) }, "Unapprove Membership")),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { color: "success", onClick: this.approveDBS(p.id) }, "Approve DBS"))));
        const approvedBothRows = approvedBoth.map(p => React.createElement("tr", { key: p.id },
            React.createElement("td", null, p.name + (p.ageAtStart === 16 ? '  (16)' : '')),
            React.createElement("td", null, p.district),
            React.createElement("td", null,
                p.externalExtra.adultEmail,
                " ",
                React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: p.externalExtra.adultEmail, onCopy: () => this.setState({ copied: p.id }) },
                    React.createElement("span", { style: { cursor: 'copy' } }, "\uD83D\uDCCB")),
                this.state.copied === p.id ? ' ✔️' : ''),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { color: "warning", onClick: this.unapproveMembership(p.id) }, "Unapprove Membership")),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { color: "warning", onClick: this.unapproveDBS(p.id) }, "Unapprove DBS"))));
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { sm: 12 },
                React.createElement("h4", null, "To Be Approved:"),
                React.createElement("table", { className: 'table' },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Name"),
                            React.createElement("th", null, "District"),
                            React.createElement("th", null, "Membership e-mail"),
                            React.createElement("th", null, "Membership"),
                            React.createElement("th", null, "DBS"))),
                    React.createElement("tbody", null, notYetApprovedRows))),
            React.createElement(reactstrap_1.Col, { sm: 12 },
                React.createElement("h4", null, "Membership Approved:"),
                React.createElement("table", { className: 'table' },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Name"),
                            React.createElement("th", null, "District"),
                            React.createElement("th", null, "Membership e-mail"),
                            React.createElement("th", null, "Membership"),
                            React.createElement("th", null, "DBS"))),
                    React.createElement("tbody", null, approvedMembershipOnlyRows))),
            React.createElement(reactstrap_1.Col, { sm: 12 },
                React.createElement("h4", null, "DBS Approved:"),
                React.createElement("table", { className: 'table' },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Name"),
                            React.createElement("th", null, "District"),
                            React.createElement("th", null, "Membership e-mail"),
                            React.createElement("th", null, "Membership"),
                            React.createElement("th", null, "DBS"))),
                    React.createElement("tbody", null, approvedDBSOnlyRows))),
            React.createElement(reactstrap_1.Col, { sm: 12 },
                React.createElement("h4", null, "Already Approved:"),
                React.createElement("table", { className: 'table' },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Name"),
                            React.createElement("th", null, "District"),
                            React.createElement("th", null, "Membership e-mail"),
                            React.createElement("th", null, "Membership"),
                            React.createElement("th", null, "DBS"))),
                    React.createElement("tbody", null, approvedBothRows)))));
    }
}
exports["default"] = Memberships;
const propSort = prop => (a, b) => {
    const x = a[prop].toLowerCase();
    const y = b[prop].toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
};


/***/ }),

/***/ "./src/front/manage/components/money.tsx":
/*!***********************************************!*\
  !*** ./src/front/manage/components/money.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_currency_formatter_1 = __importDefault(__webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'
const feeFactory_1 = __importDefault(__webpack_require__(/*! ../../../shared/fee/feeFactory */ "./src/shared/fee/feeFactory.ts"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const paymentReference_1 = __importDefault(__webpack_require__(/*! ../../../shared/paymentReference */ "./src/shared/paymentReference.ts"));
const RedCurrency = props => props.quantity < 0 ? React.createElement("span", { style: { color: 'red' } },
    React.createElement(react_currency_formatter_1.default, { ...props })) :
    React.createElement(react_currency_formatter_1.default, { ...props });
class Money extends React.Component {
    getFeesOwed;
    //@ts-ignore
    totalOwed;
    //@ts-ignore
    totalPaid;
    constructor(props) {
        super(props);
        this.state = { expanded: 0, amount: 0, note: '' };
        this.expand = this.expand.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.addPayment = this.addPayment.bind(this);
        this.deletePayement = this.deletePayement.bind(this);
        this.syncMax = this.syncMax.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }
    expand(id) {
        return e => {
            this.setState((0, immutability_helper_1.default)(this.state, { expanded: { $set: id } }));
        };
    }
    updateAmount(e) {
        this.setState((0, immutability_helper_1.default)(this.state, { amount: { $set: e.target.value } }));
    }
    updateNote(e) {
        this.setState((0, immutability_helper_1.default)(this.state, { note: { $set: e.target.value } }));
    }
    deletePayement(id) {
        return e => {
            //@ts-ignore
            if (confirm("Are you sure you want to delete this?"))
                this.props.deletePayment({
                    id: id
                });
            e.preventDefault();
        };
    }
    addPayment(type) {
        return e => {
            this.props.addPayment({
                type: type,
                amount: this.state.amount,
                note: this.state.note,
                bookingId: this.state.expanded
            });
            this.setState((0, immutability_helper_1.default)(this.state, { note: { $set: '' }, amount: { $set: 0 } }));
            e.preventDefault();
        };
    }
    syncMax(e) {
        this.props.syncMax(this.state.expanded);
        e.stopPropagation();
        e.preventDefault();
    }
    closedRow(b, event) {
        let org = { name: '' };
        if (event.bigCampMode && event.organisationsEnabled)
            org = event.organisations.find(o => o.id === b.organisationId);
        b.payments = b.payments || [];
        const name = event.bigCampMode ? b.district + (org.name ? ' - ' + org.name : '') : b.userName;
        let owed = this.getFeesOwed(event, b.participants, b, false).reduce((a, c) => parseFloat(c.total) + a, 0);
        const paid = b.payments.filter(p => p.type === 'payment').reduce((a, c) => a + parseFloat(c.amount), 0);
        owed = b.payments.filter(p => p.type === 'adjustment').reduce((a, c) => a + parseFloat(c.amount), owed);
        this.totalOwed += owed;
        this.totalPaid += paid;
        const classNames = (paid - owed >= 0 ? "table-success" : '') + (this.state.expanded !== 0 && this.state.expanded !== b.id ? ' fadeOut' : '');
        const payRef = (0, paymentReference_1.default)(b.id);
        return React.createElement("tr", { key: b.id, onClick: this.expand(b.id), className: classNames },
            React.createElement("td", null, "+"),
            React.createElement("td", null, payRef),
            React.createElement("td", null, name),
            React.createElement("td", null,
                React.createElement(react_currency_formatter_1.default, { quantity: owed, currency: "GBP" })),
            React.createElement("td", null,
                React.createElement(react_currency_formatter_1.default, { quantity: paid, currency: "GBP" })),
            React.createElement("td", null,
                React.createElement(react_currency_formatter_1.default, { quantity: owed - paid, currency: "GBP" })));
    }
    openRow(b, event) {
        b.payments = b.payments || [];
        const payRef = (0, paymentReference_1.default)(b.id);
        let org = { name: '' };
        if (event.bigCampMode && event.organisationsEnabled)
            org = event.organisations.find(o => o.id === b.organisationId);
        const name = event.bigCampMode ? `${b.district} -  ${org.name} (${payRef})` : b.userName;
        let owed = this.getFeesOwed(event, b.participants, b, false).reduce((a, c) => parseFloat(c.total) + a, 0);
        const paid = b.payments.filter(p => p.type === 'payment').reduce((a, c) => a + parseFloat(c.amount), 0);
        owed = b.payments.filter(p => p.type === 'adjustment').reduce((a, c) => a + parseFloat(c.amount), owed);
        this.totalOwed += owed;
        this.totalPaid += paid;
        const adjustmentRow = b.payments.filter(p => p.type === 'adjustment').map((r, i) => React.createElement("tr", { key: `adjust` + b.id + r.id },
            React.createElement("td", null),
            React.createElement("td", null,
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { style: { cursor: 'pointer' }, onClick: this.deletePayement(r.id), icon: free_solid_svg_icons_1.faTimes })),
            React.createElement("td", null, (0, moment_1.default)(r.updatedAt).format('L') + ' ' + r.note),
            React.createElement("td", null,
                React.createElement(RedCurrency, { quantity: r.amount, currency: "GBP" })),
            React.createElement("td", null),
            React.createElement("td", null)));
        const paymentRows = b.payments.filter(p => p.type === 'payment').map((r, i) => React.createElement("tr", { key: `payment` + b.id + r.id },
            React.createElement("td", null),
            React.createElement("td", null,
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { style: { cursor: 'pointer' }, onClick: this.deletePayement(r.id), icon: free_solid_svg_icons_1.faTimes })),
            React.createElement("td", null, (0, moment_1.default)(r.updatedAt).format('L') + ' ' + r.note),
            React.createElement("td", null),
            React.createElement("td", null,
                React.createElement(RedCurrency, { quantity: r.amount, currency: "GBP" })),
            React.createElement("td", null)));
        const feeRows = this.getFeesOwed(event, b.participants, b, false).map((r, i) => React.createElement("tr", { key: `owed` + b.id + i },
            React.createElement("td", null),
            React.createElement("td", null),
            React.createElement("td", null, r.line),
            React.createElement("td", null,
                React.createElement(react_currency_formatter_1.default, { quantity: r.total, currency: "GBP" })),
            React.createElement("td", null),
            React.createElement("td", null)));
        return React.createElement(React.Fragment, { key: b.id },
            React.createElement("tr", { onClick: this.expand(0), style: { borderTop: 'solid black 3px' } },
                React.createElement("td", null),
                React.createElement("td", null),
                React.createElement("td", { colSpan: 3 },
                    React.createElement("b", null, name)),
                React.createElement("td", null,
                    React.createElement(reactstrap_1.Button, { color: "success", onClick: this.syncMax }, "Remove Cancellation Fees"))),
            React.createElement("tr", null,
                React.createElement("td", null),
                React.createElement("td", null),
                React.createElement("td", { style: { borderBottom: 'solid #888888 2px' }, colSpan: 4 },
                    React.createElement("b", null, "Fees"))),
            feeRows,
            adjustmentRow,
            React.createElement("tr", null,
                React.createElement("td", null),
                React.createElement("td", null),
                React.createElement("td", { style: { borderBottom: 'solid #888888 2px' }, colSpan: 4 },
                    React.createElement("b", null, "Payments"))),
            paymentRows,
            React.createElement("tr", { style: { borderBottom: 'solid #888888 2px', borderTop: 'solid #888888 2px' } },
                React.createElement("td", null),
                React.createElement("td", null),
                React.createElement("td", null,
                    React.createElement("b", null, "Total:")),
                React.createElement("td", null,
                    React.createElement("b", null,
                        React.createElement(react_currency_formatter_1.default, { quantity: owed, currency: "GBP" }))),
                React.createElement("td", null,
                    React.createElement("b", null,
                        React.createElement(react_currency_formatter_1.default, { quantity: paid, currency: "GBP" }))),
                React.createElement("td", null,
                    React.createElement("b", null,
                        React.createElement(react_currency_formatter_1.default, { quantity: owed - paid, currency: "GBP" })))),
            React.createElement("tr", { style: { borderBottom: 'solid black 3px' } },
                React.createElement("td", null),
                React.createElement("td", null),
                React.createElement("td", { colSpan: 4 },
                    React.createElement(reactstrap_1.FormGroup, { row: true },
                        React.createElement(reactstrap_1.Label, { sm: 3 }, "Amount"),
                        React.createElement(reactstrap_1.Col, { sm: 3 },
                            React.createElement(reactstrap_1.InputGroup, null,
                                React.createElement("div", { className: "input-group-prepend" },
                                    React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                React.createElement(reactstrap_1.Input, { type: "number", onChange: this.updateAmount, value: this.state.amount }))),
                        React.createElement(reactstrap_1.Col, { sm: 6 },
                            React.createElement(reactstrap_1.Button, { color: "success", disabled: this.state.amount <= 0, onClick: this.addPayment('payment') }, "Add Payment"),
                            ' ',
                            React.createElement(reactstrap_1.Button, { color: "warning", onClick: this.addPayment('adjustment') }, "Add Price Adjustment"))),
                    React.createElement(reactstrap_1.FormGroup, { row: true },
                        React.createElement(reactstrap_1.Label, { sm: 3 }, "Note"),
                        React.createElement(reactstrap_1.Col, { sm: 9 },
                            React.createElement(reactstrap_1.Input, { onChange: this.updateNote, value: this.state.note }))))));
    }
    render() {
        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.bookings.reduce((r, b) => [...r, ...b.participants], []);
        this.getFeesOwed = (0, feeFactory_1.default)(event).getFeesOwed;
        this.totalOwed = 0;
        this.totalPaid = 0;
        const bookingRows = bookings
            .sort(propSort(event.bigCampMode ? 'district' : 'userName'))
            .map(b => {
            return b.id === this.state.expanded ? this.openRow(b, event) : this.closedRow(b, event);
        });
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement("h3", null, "Money"),
                React.createElement(reactstrap_1.Table, { striped: true, size: "sm" },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null),
                            React.createElement("th", null, "Reference"),
                            React.createElement("th", null, "Booking"),
                            React.createElement("th", null, "Fees"),
                            React.createElement("th", null, "Payments"),
                            React.createElement("th", null, "Outstanding"))),
                    React.createElement("tbody", null,
                        bookingRows,
                        React.createElement("tr", null,
                            React.createElement("td", null),
                            React.createElement("td", null,
                                React.createElement("b", null, "Total")),
                            React.createElement("td", null),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    React.createElement(react_currency_formatter_1.default, { quantity: this.totalOwed, currency: "GBP" }))),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    React.createElement(react_currency_formatter_1.default, { quantity: this.totalPaid, currency: "GBP" }))),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    React.createElement(react_currency_formatter_1.default, { quantity: this.totalOwed - this.totalPaid, currency: "GBP" })))))))));
    }
}
exports["default"] = Money;
const propSort = prop => (a, b) => {
    const x = a[prop].toLowerCase();
    const y = b[prop].toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
};
const nameSort = (a, b) => {
    var splitA = a.name.split(" ");
    var splitB = b.name.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];
    if (lastA < lastB)
        return -1;
    if (lastA > lastB)
        return 1;
    return 0;
};


/***/ }),

/***/ "./src/front/manage/components/participants.tsx":
/*!******************************************************!*\
  !*** ./src/front/manage/components/participants.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const csv_file_creator_1 = __importDefault(__webpack_require__(/*! csv-file-creator */ "./node_modules/csv-file-creator/index.js"));
const react_table_1 = __importDefault(__webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const eol = __importStar(__webpack_require__(/*! eol */ "./node_modules/eol/eol.js"));
//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const woodcraft_1 = __webpack_require__(/*! ../../../shared/woodcraft */ "./src/shared/woodcraft.js");
const age_1 = __importDefault(__webpack_require__(/*! ../../age */ "./src/front/age/index.tsx"));
class Participants extends React.Component {
    ageWidgets;
    constructor(props) {
        super(props);
        this.state = { expanded: null };
        this.ageWidgets = (0, age_1.default)(this.props.Event.toJS());
        this.exportCSV = this.exportCSV.bind(this);
        this.updateExpanded = this.updateExpanded.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }
    componentWillReceiveProps() {
        this.setState((0, immutability_helper_1.default)(this.state, { expanded: { $set: null } }));
    }
    exportCSV() {
        const event = this.props.Event.toJS();
        const startDate = moment_1.default.utc(event.startDate).startOf('day');
        const endDate = moment_1.default.utc(event.endDate).startOf('day').add(1, 'days');
        const days = [];
        let mask = 0;
        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
            //@ts-ignore
            days.push({ label: m.format("dddd Do"), value: Math.pow(2, mask) });
            mask++;
        }
        const exportedData = this.props.participants.map(p => {
            const b = this.props.bookings.find(b => b.id === p.bookingId);
            const dates = event.partialDatesData.find(d => d.mask === p.days);
            const attend = dates ? dates.name : 'Unknown';
            const fields = [p.id,
                p.name,
                p.displayAge,
                (0, moment_1.default)(p.age).format("DD/MM/YYYY"),
                p.diet,
                p.dietExtra,
                p.medical,
                attend,
                b.userName,
                b.userEmail,
                b.userContact,
                b.emergencyName,
                b.emergencyPhone,
                eol.crlf(b.note || ''),
                p.externalExtra.adultFirstAid,
                p.externalExtra.photoConsent,
                p.externalExtra.adultEmail,
                p.createdAt,
                p.updatedAt];
            if (event.partialDates === 'free') {
                days.forEach(d => {
                    //@ts-ignore
                    fields.push(p.days & d.value ? 1 : 0);
                });
            }
            return fields;
        });
        const headers = ['id', 'Name', 'Age Group', 'DOB', 'Diet', 'Requirements &  Allergies', 'Medical', 'Attendance', 'Booking Name', 'Booking e-mail', 'Booking Phone', 'Emergency name', 'Emergency Contact', 'Note', 'First Aid', 'Photo', 'Membership email', 'Created At', 'Updated At'];
        if (event.partialDates === 'free') {
            days.forEach(d => {
                //@ts-ignore
                headers.push(d.label);
            });
        }
        const fileName = this.props.Event.get('name') + "-Participants-" + (0, moment_1.default)().format('YYYY-MM-DD') + ".csv";
        (0, csv_file_creator_1.default)(fileName, [headers, ...exportedData]);
    }
    updateExpanded(id) {
        return e => {
            if (id === this.state.expanded)
                this.setState((0, immutability_helper_1.default)(this.state, { expanded: { $set: null } }));
            else
                this.setState((0, immutability_helper_1.default)(this.state, { expanded: { $set: id } }));
        };
    }
    subRow = (row) => {
        const event = row.original.e;
        const village = event.villages.find(v => row.original.b.villageId === v.id);
        const organisation = event.organisations.find(o => row.original.b.organisationId === o.id);
        const attendance = event.partialDates === "presets" ? event.partialDatesData.find(d => d.mask === row.original.p.days) : null;
        return (React.createElement(reactstrap_1.Card, null,
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement(reactstrap_1.CardTitle, null, row.original.name),
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, { sm: 4 },
                        this.ageWidgets.participantCardField(row.original),
                        row.original.b.district ? React.createElement("p", null,
                            React.createElement("b", null, "Group/District:"),
                            " ",
                            row.original.b.district) : null,
                        React.createElement("p", null,
                            React.createElement("b", null, "Booking Contact:"),
                            " ",
                            row.original.b.userName),
                        React.createElement("p", null,
                            React.createElement("b", null, "Booking Contact Phone:"),
                            " ",
                            row.original.b.userContact),
                        village ? React.createElement("p", null,
                            React.createElement("b", null, "Village:"),
                            " ",
                            village.name) : null,
                        organisation ? React.createElement("p", null,
                            React.createElement("b", null, "Organisation:"),
                            " ",
                            organisation.name) : null,
                        attendance ? React.createElement("p", null,
                            React.createElement("b", null, "Attendance:"),
                            " ",
                            attendance.name) : null,
                        !event.bigCampMode ? React.createElement("p", null,
                            React.createElement("b", null, "Emergency Contact:"),
                            " ",
                            row.original.b.emergencyName) : null,
                        !event.bigCampMode ? React.createElement("p", null,
                            React.createElement("b", null, "Emergency Phone:"),
                            " ",
                            row.original.b.emergencyPhone) : null),
                    React.createElement(reactstrap_1.Col, { sm: 4 },
                        React.createElement("p", null,
                            React.createElement("b", null, "Diet:"),
                            " ",
                            row.original.diet,
                            " "),
                        React.createElement("p", null,
                            React.createElement("b", null, "Diet Info:")),
                        React.createElement("p", null, row.original.p.dietExtra),
                        React.createElement("p", null,
                            React.createElement("b", null, "Anything Else:")),
                        React.createElement("p", null, row.original.b.note)),
                    React.createElement(reactstrap_1.Col, { sm: 4 },
                        React.createElement("p", null,
                            React.createElement("b", null, "Medical:")),
                        React.createElement("p", null, row.original.p.medical))))));
    };
    render() {
        const event = this.props.Event.toJS();
        const bookings = this.props.filteredBookings;
        const participants = this.props.filteredParticipants;
        const groups = woodcraft_1.woodcraft.reduce((a, w) => {
            const people = participants.filter((p) => p.ageGroup === '' ? false : p.ageGroup === w.singular);
            if (people.length === 0)
                return a;
            return a + ` ${w.name}: ${people.length}`;
        }, '');
        //const prows = participants.sort(nameSort).map(p => <tr key={p.id}><td>{p.name}</td><td>{p.age}</td><td>{p.diet}</td><td>{bookings.find(b => b.id === p.bookingId).userName}</td></tr>)
        const data = participants.map(p => {
            const b = bookings.find(b => b.id === p.bookingId);
            return {
                name: p.name,
                dob: p.age,
                age: p.displayAge,
                diet: p.diet,
                createdAt: p.prettyCreatedAt,
                district: b.district,
                p: p,
                b: b,
                e: event
            };
        });
        const columns = [{
                id: "name",
                accessor: row => row,
                Header: "Name",
                sortable: true,
                sortMethod: nameSort,
                Cell: row => row.value.name
            }];
        if (event.bigCampMode) { // @ts-ignore
            columns.push({ accessor: "district", Header: "District", sortable: true });
        }
        columns.push({
            id: 'age',
            accessor: row => row,
            Header: "Age",
            sortable: true,
            sortMethod: dobSort,
            Cell: row => row.original.age,
            //width: 120
        }, // @ts-ignore
        { accessor: "diet", Header: "Diet", sortable: true, minWidth: 50 });
        if (event.partialDates === 'presets')
            columns.push({
                id: 'presets',
                accessor: row => row,
                Cell: row => {
                    const data = row.original.e.partialDatesData.find(d => d.mask === row.original.p.days);
                    return data ? data.name : 'Unknown';
                },
                Header: "Attendance",
                sortMethod: partialAttendanceSort,
                //width: 150,
                sortable: true
            });
        columns.push({
            id: 'createdAt',
            accessor: row => row,
            Cell: row => row.original.createdAt,
            sortMethod: createdSort,
            Header: "Created At",
            sortable: true,
            //minWidth: 50
        });
        if (event.partialDates === 'free')
            columns.push({
                id: 'popcount',
                accessor: row => row,
                Cell: row => bitCount(row.original.p.days),
                Header: "Days",
                sortMethod: daysSort,
                width: 60,
                sortable: true
            });
        if (event.customQuestions.adultFirstAid)
            columns.push({
                id: 'firstaid',
                accessor: row => row,
                Cell: row => row.original.p.externalExtra.adultFirstAid === 'yes' ? '✅' : '',
                Header: "⚕️",
                sortMethod: firstAidSort,
                width: 40,
                sortable: true
            });
        if (event.customQuestions.photoConsent)
            columns.push({
                id: 'photo',
                accessor: row => row,
                Cell: row => row.original.p.externalExtra.photoConsent === 'yes' ? '✅' : '',
                Header: "📷 ",
                sortMethod: photoSort,
                width: 40,
                sortable: true
            });
        const expanded = { [this.state.expanded]: true };
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.Button, { className: "float-right", onClick: this.exportCSV }, "Export CSV"),
                    React.createElement("h4", null,
                        "Total Participants: ",
                        participants.length),
                    React.createElement("p", null, groups))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(react_table_1.default, { expanded: expanded, getTrProps: (state, rowInfo, column) => {
                            if (rowInfo)
                                return { onClick: this.updateExpanded(rowInfo.viewIndex) };
                            return {};
                        }, onSortedChange: this.updateExpanded(null), onPageChange: this.updateExpanded(null), SubComponent: this.subRow, data: data, columns: columns, showPageSizeOptions: false, showPagination: true, defaultPageSize: 50 })))));
    }
}
exports["default"] = Participants;
const dobSort = (a, b) => {
    return a.dob < b.dob ? 1 : -1;
};
const createdSort = (a, b) => {
    return a.p.createdAt > b.p.createdAt ? 1 : -1;
};
const firstAidSort = (a, b) => {
    return !!(a.p.externalExtra.adultFirstAid === 'yes') - !!(b.p.externalExtra.adultFirstAid === 'yes');
};
const photoSort = (a, b) => {
    return !!(a.p.externalExtra.photoConsent === 'yes') - !!(b.p.externalExtra.photoConsent === 'yes');
};
const daysSort = (a, b) => {
    return bitCount(a.p.days) - bitCount(b.p.days);
};
const partialAttendanceSort = (a, b) => {
    return a.p.days - b.p.days;
};
const nameSort = (a, b) => {
    var splitA = a.name.trim().split(" ");
    var splitB = b.name.trim().split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];
    if (lastA < lastB)
        return -1;
    if (lastA > lastB)
        return 1;
    return 0;
};
// https://stackoverflow.com/questions/43122082/efficiently-count-the-number-of-bits-in-an-integer-in-javascript/43122214
function bitCount(n) {
    n = n - ((n >> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24;
}


/***/ }),

/***/ "./src/front/manage/components/roles.tsx":
/*!***********************************************!*\
  !*** ./src/front/manage/components/roles.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const react_bootstrap_typeahead_1 = __webpack_require__(/*! react-bootstrap-typeahead */ "./node_modules/react-bootstrap-typeahead/lib/index.js");
const react_markdown_1 = __importDefault(__webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js"));
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/manage/permission.ts");
const csv_file_creator_1 = __importDefault(__webpack_require__(/*! csv-file-creator */ "./node_modules/csv-file-creator/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
class Roles extends React.Component {
    event;
    constructor(props) {
        super(props);
        this.state = { role: 'Manage', org: '', village: '', user: [] };
        this.updateOption = this.updateOption.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.addRole = this.addRole.bind(this);
        this.deleteRole = this.deleteRole.bind(this);
        this.exportCSV = this.exportCSV.bind(this);
        this.event = this.props.Event.toJS();
    }
    componentWillMount() {
        this.props.getUserList(this.event.id);
    }
    updateOption(section) {
        return e => {
            this.setState((0, immutability_helper_1.default)(this.state, { [section]: { $set: e.target.value } }));
            e.preventDefault();
        };
    }
    updateUser(user) {
        this.setState((0, immutability_helper_1.default)(this.state, { user: { $set: user } }));
    }
    addRole(e) {
        const role = {
            userId: this.state.user[0].id,
            eventId: this.props.Event.get('id'),
            name: this.state.role,
            organisationId: undefined,
            villageId: undefined
        };
        //@ts-ignore
        if (this.state.org !== '')
            role.organisationId = parseInt(this.state.org);
        //@ts-ignore
        if (this.state.village !== '')
            role.villageId = parseInt(this.state.village);
        this.props.addRole(role);
        this.setState({ role: 'Manage', org: '', village: '', user: [] });
        // @ts-ignore
        this.refs.typeahead.getInstance().clear();
        e.preventDefault();
    }
    deleteRole(id) {
        return e => {
            this.props.deleteRole(id);
            e.preventDefault();
        };
    }
    exportCSV() {
        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const headers = ['id', 'name', 'email', 'role', 'note', 'organisation', 'village', 'createdAt', 'booked', 'participants'];
        const exportedData = event.roles.map(r => {
            return [r.id,
                r.user.userName,
                r.user.email,
                r.name,
                r.note,
                r.organisation ? r.organisation.name : '',
                r.village ? r.village.name : '',
                r.createdAt,
                bookings.find(b => b.userId === r.user.id) ? 'yes' : 'no',
                bookings.find(b => b.userId === r.user.id) ? bookings.find(b => b.userId === r.user.id).participants.length : ''];
        });
        const fileName = this.props.Event.get('name') + "-Roles-" + (0, moment_1.default)().format('YYYY-MM-DD') + ".csv";
        (0, csv_file_creator_1.default)(fileName, [headers, ...exportedData]);
    }
    render() {
        const event = this.props.Event.toJS();
        const userList = this.props.UserList.toJS().map(u => {
            u.search = u.userName + ' <' + (u.email || '') + '>';
            return u;
        }).sort((a, b) => nameSort(a.search, b.search));
        const globalRoles = event.roles.filter(r => r.villageId === null && r.organisationId === null && r.name !== 'book');
        globalRoles.unshift({ id: 0, name: "Owner", user: event.user });
        const globalRows = globalRoles.map(r => React.createElement("tr", { key: r.id },
            React.createElement("td", null, r.user.userName),
            React.createElement("td", null, r.name),
            React.createElement("td", null, r.name === "Owner" ? null :
                React.createElement(reactstrap_1.Button, { onClick: this.deleteRole(r.id), color: "warning", size: "sm", className: "float-right", "aria-label": "Delete" },
                    React.createElement("span", { "aria-hidden": "true" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }))))));
        const bookRoles = event.roles.filter(r => r.name === 'book');
        bookRoles.sort((a, b) => a.note > b.note);
        const bookRows = bookRoles.map(r => React.createElement("tr", { key: r.id },
            React.createElement("td", null, r.user.userName),
            React.createElement("td", null,
                React.createElement(react_markdown_1.default, { children: r.note })),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { onClick: this.deleteRole(r.id), color: "warning", size: "sm", className: "float-right", "aria-label": "Delete" },
                    React.createElement("span", { "aria-hidden": "true" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }))))));
        const orgRoles = event.roles.filter(r => r.organisationId !== null);
        const orgRows = orgRoles.map(r => React.createElement("tr", { key: r.id },
            React.createElement("td", null, r.user.userName),
            React.createElement("td", null, r.name),
            React.createElement("td", null, r.organisation.name),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { onClick: this.deleteRole(r.id), color: "warning", size: "sm", className: "float-right", "aria-label": "Delete" },
                    React.createElement("span", { "aria-hidden": "true" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }))))));
        const villageRoles = event.roles.filter(r => r.villageId !== null);
        const villageRows = villageRoles.map(r => React.createElement("tr", { key: r.id },
            React.createElement("td", null, r.user.userName),
            React.createElement("td", null, r.name),
            React.createElement("td", null, r.village.name),
            React.createElement("td", null,
                React.createElement(reactstrap_1.Button, { onClick: this.deleteRole(r.id), color: "warning", size: "sm", className: "float-right", "aria-label": "Delete" },
                    React.createElement("span", { "aria-hidden": "true" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }))))));
        const orgOptions = event.organisations.map(o => React.createElement("option", { key: o.id, value: o.id }, o.name));
        const villageOptions = event.villages.map(v => React.createElement("option", { key: v.id, value: v.id }, v.name));
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { sm: 12 },
                    React.createElement(reactstrap_1.Button, { className: "float-right top5", onClick: this.exportCSV }, "Export CSV"),
                    React.createElement("h6", { className: "top5" }, "Here you can assign roles to other users so they can help you administer the event"))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { sm: 5 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, null, "User:"),
                        React.createElement(react_bootstrap_typeahead_1.Typeahead, { ref: "typeahead", options: userList, labelKey: "search", onChange: this.updateUser, placeholder: "Name" }))),
                React.createElement(reactstrap_1.Col, { sm: 2 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, { className: "control-label" }, "Role:"),
                        React.createElement(reactstrap_1.Input, { type: "select", value: this.state.role, onChange: this.updateOption("role"), className: "form-control" },
                            React.createElement("option", { value: "Manage" }, "Manage"),
                            React.createElement("option", { value: "View" }, "View"),
                            React.createElement("option", { value: "Kp" }, "Kp"),
                            React.createElement("option", { value: "Money" }, "Money"),
                            React.createElement("option", { value: "book" }, "Book")))),
                React.createElement(reactstrap_1.Col, { sm: 2 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, { className: "control-label" }, "Organisation:"),
                        React.createElement(reactstrap_1.Input, { type: "select", value: this.state.org, onChange: this.updateOption("org"), className: "form-control" },
                            React.createElement("option", { value: '' }, "All"),
                            orgOptions))),
                React.createElement(reactstrap_1.Col, { sm: 2 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, { className: "control-label" }, "Village:"),
                        React.createElement(reactstrap_1.Input, { type: "select", value: this.state.village, onChange: this.updateOption("village"), className: "form-control" },
                            React.createElement("option", { value: '' }, "All"),
                            villageOptions))),
                React.createElement(reactstrap_1.Col, { sm: 1 },
                    React.createElement(reactstrap_1.Label, { className: "control-label" }, "\u00A0"),
                    React.createElement(reactstrap_1.Button, { className: "form-control", disabled: this.state.user.length !== 1, type: "submit", onClick: this.addRole, color: "success" }, "Add")),
                React.createElement(reactstrap_1.Col, { sm: 12 },
                    React.createElement("h4", null, "Event Roles"),
                    React.createElement("p", null, "These roles grant access to the whole event, Managers here can also assign Villages and Roles."),
                    React.createElement(reactstrap_1.Table, { striped: true, size: "sm" },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "User"),
                                React.createElement("th", null, "Role"),
                                React.createElement("th", null))),
                        React.createElement("tbody", null, globalRows)),
                    React.createElement("h4", null, "Book Roles"),
                    React.createElement("p", null, "These are users who can book into the event:"),
                    React.createElement(reactstrap_1.Table, { striped: true, size: "sm" },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "User"),
                                React.createElement("th", null, "Note"),
                                React.createElement("th", null))),
                        React.createElement("tbody", null, bookRows)),
                    React.createElement("h4", null, "Organisation Roles"),
                    React.createElement("p", null, "These grant access to bookings within the specified organisation only"),
                    React.createElement(reactstrap_1.Table, { striped: true, size: "sm" },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "User"),
                                React.createElement("th", null, "Role"),
                                React.createElement("th", null, "Organisation"),
                                React.createElement("th", null))),
                        React.createElement("tbody", null, orgRows)),
                    React.createElement("h4", null, "Village Roles"),
                    React.createElement("p", null, "These grant access to bookings within the specified Village only"),
                    React.createElement(reactstrap_1.Table, { striped: true, size: "sm" },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "User"),
                                React.createElement("th", null, "Role"),
                                React.createElement("th", null, "Village"),
                                React.createElement("th", null))),
                        React.createElement("tbody", null, villageRows))))));
    }
}
exports["default"] = (0, permission_1.manageWholeEventCheck)(Roles);
const nameSort = (a, b) => {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];
    if (lastA < lastB)
        return -1;
    if (lastA > lastB)
        return 1;
    return 0;
};


/***/ }),

/***/ "./src/front/manage/components/villages.tsx":
/*!**************************************************!*\
  !*** ./src/front/manage/components/villages.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_beautiful_dnd_1 = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/lib/index.js");
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
//import bookings from '../bookings'
const permission_1 = __webpack_require__(/*! ../permission */ "./src/front/manage/permission.ts");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
const free_solid_svg_icons_2 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
const woodcraft_js_1 = __webpack_require__(/*! ../../../shared/woodcraft.js */ "./src/shared/woodcraft.js");
//import W from '../../../shared/woodcraft.js'
class Villages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { newVillageName: '' };
        this.onDragEnd = this.onDragEnd.bind(this);
        this.updateVillageName = this.updateVillageName.bind(this);
        this.addVillage = this.addVillage.bind(this);
        this.renameVillage = this.renameVillage.bind(this);
    }
    ;
    static textColour(total) {
        if (total < 80)
            return "green";
        if (total < 100)
            return "gold";
        return "red";
    }
    ;
    updateVillageName(e) {
        this.setState((0, immutability_helper_1.default)(this.state, { newVillageName: { $set: e.target.value } }));
        e.preventDefault();
    }
    addVillage(e) {
        this.props.addVillage({
            name: this.state.newVillageName,
            eventId: this.props.Event.get("id")
        });
        e.preventDefault();
        this.setState((0, immutability_helper_1.default)(this.state, { newVillageName: { $set: '' } }));
    }
    deleteVillage(id) {
        return e => {
            //@ts-ignore
            if (confirm("Are you sure you want to delete this village?")) {
                this.props.deleteVillage(id);
            }
            e.preventDefault();
        };
    }
    renameVillage(id, oldName) {
        return e => {
            //@ts-ignore
            const newName = prompt("Rename Village", oldName);
            if (newName && newName !== "")
                this.props.renameVillage(id, newName);
            e.preventDefault();
        };
    }
    onDragEnd(result) {
        if (result.destination === null)
            return;
        //@ts-ignore
        const bookingId = parseInt(/b([\d]+)/.exec(result.draggableId)[1]);
        //@ts-ignore
        const villageId = result.destination.droppableId === "empty" ? null : parseInt(/v([\d]+)/.exec(result.destination.droppableId)[1]);
        this.props.assignVillage(bookingId, villageId);
    }
    render() {
        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = bookings.reduce((r, b) => [...r, ...b.participants], []);
        //const participants = this.props.Bookings.reduce((r, b) => r.concat(b.get("participants")), Immutable.List()).toJS();
        const villages = (event.villages || []).map(v => {
            v.participants = bookings.reduce((a, b) => b.villageId === v.id ? a + participants.filter(p => p.bookingId === b.id).length : a, 0);
            v.bookings = bookings.filter(b => b.villageId === v.id).map(b => {
                return { ...b, size: participants.filter(p => p.bookingId === b.id).length };
            }).sort((a, b) => b.size - a.size);
            return v;
        }).sort((a, b) => {
            const numberA = /Village ([0-9]+)/.exec(a.name);
            const numberB = /Village ([0-9]+)/.exec(b.name);
            if (numberA && numberB) {
                return parseInt(numberA[1]) - parseInt(numberB[1]);
            }
            else {
                return (a.name || "").localeCompare((b.name || ""));
            }
        });
        const unassignedBookings = bookings.filter(b => b.villageId === null).map(b => {
            return { ...b, size: participants.filter(p => p.bookingId === b.id).length };
        }).sort((a, b) => b.size - a.size);
        const unassignedBoxes = unassignedBookings.map(b => React.createElement(react_beautiful_dnd_1.Draggable, { key: b.id, draggableId: 'b' + b.id }, (provided, snapshot) => {
            const style = {
                ...provided.draggableStyle,
                cursor: 'pointer'
            };
            const participantList = b.participants.length < 6 ? b.participants.map(p => React.createElement("li", { key: p.id }, p.name)) : null;
            return (React.createElement("div", { ref: provided.innerRef, style: style, ...provided.dragHandleProps },
                React.createElement(reactstrap_1.Card, { className: "mb-3" },
                    React.createElement(reactstrap_1.CardBody, null,
                        React.createElement(reactstrap_1.CardTitle, null, (event.bigCampMode ? b.district : b.userName) + " (" + b.size + ")"),
                        React.createElement("p", null, b.campWith),
                        React.createElement("ul", null, participantList)))));
        }));
        const villageBoxes = villages.map(v => {
            const groups = woodcraft_js_1.woodcraft.reduce((a, w) => {
                const people = v.bookings.reduce((acc, c) => {
                    const current = c.participants.filter((p) => p.ageGroup === '' ? false : p.ageGroup === w.singular);
                    acc += current.length;
                    return acc;
                }, 0);
                if (people === 0)
                    return a;
                return a + ` ${w.name}: ${people}`;
            }, '');
            const bookings = v.bookings.map(b => React.createElement(react_beautiful_dnd_1.Draggable, { key: b.id, draggableId: 'b' + b.id }, (provided, snapshot) => {
                const style = {
                    ...provided.draggableStyle,
                    cursor: 'pointer'
                };
                return (React.createElement("div", { ref: provided.innerRef, style: style, ...provided.dragHandleProps }, (event.bigCampMode ? b.district : b.userName) + ' (' + b.size + ')'));
            }));
            return React.createElement(react_beautiful_dnd_1.Droppable, { key: v.id, droppableId: 'v' + v.id }, (provided, snapshot) => (React.createElement(reactstrap_1.Card, null,
                React.createElement(reactstrap_1.CardBody, null,
                    React.createElement(reactstrap_1.Button, { outline: true, color: "warning", onClick: this.deleteVillage(v.id), className: "float-right", "aria-label": "Close" },
                        React.createElement("span", { "aria-hidden": "true" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }))),
                    React.createElement(reactstrap_1.CardTitle, { onClick: this.renameVillage(v.id, v.name) }, v.name),
                    React.createElement("div", { ref: provided.innerRef, style: { minHeight: "20px" } },
                        bookings,
                        provided.placeholder),
                    React.createElement("p", null,
                        React.createElement("b", { style: { color: Villages.textColour(v.participants) } },
                            "Total: ",
                            v.participants),
                        React.createElement("br", null),
                        React.createElement("span", { style: { fontSize: "80%" } }, groups))))));
        });
        villageBoxes.push(React.createElement(reactstrap_1.Card, { key: "new" },
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement(reactstrap_1.CardTitle, null, "Add Village"),
                React.createElement(reactstrap_1.Input, { type: "text", placeholder: "Name", value: this.state.newVillageName, onChange: this.updateVillageName }),
                React.createElement(reactstrap_1.Button, { className: "mt-2", disabled: this.state.newVillageName === '', color: "success", onClick: this.addVillage },
                    React.createElement("span", { "aria-hidden": "true" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_2.faPlus })),
                    " Add"))));
        const villageCardDecks = villageBoxes.reduce((a, c) => {
            a[a.length - 1].length > 2 ? a.push([c]) : a[a.length - 1].push(c);
            return a;
        }, [[]])
            .map((a, i) => React.createElement(reactstrap_1.CardDeck, { className: "mb-3", key: i }, a));
        return (React.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: this.onDragEnd },
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h4", null, "Drag and drop to configure villages"))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { sm: 3 },
                    React.createElement("h5", null, "Unassigned:"),
                    React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "empty" }, (provided, snapshot) => (React.createElement("div", { ref: provided.innerRef, className: "unassignedVillages" },
                        unassignedBoxes,
                        provided.placeholder)))),
                React.createElement(reactstrap_1.Col, { sm: 9 }, villageCardDecks))));
    }
}
exports["default"] = (0, permission_1.manageWholeEventCheck)(Villages);


/***/ }),

/***/ "./src/front/manage/index.ts":
/*!***********************************!*\
  !*** ./src/front/manage/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.actions = exports.villages = exports.kp = exports.bookings = exports.participants = exports.containerPage = void 0;
const containerPage_1 = __importDefault(__webpack_require__(/*! ./components/containerPage */ "./src/front/manage/components/containerPage.tsx"));
exports.containerPage = containerPage_1.default;
const participants_1 = __importDefault(__webpack_require__(/*! ./components/participants */ "./src/front/manage/components/participants.tsx"));
exports.participants = participants_1.default;
const bookings_1 = __importDefault(__webpack_require__(/*! ./components/bookings */ "./src/front/manage/components/bookings.tsx"));
exports.bookings = bookings_1.default;
const kp_1 = __importDefault(__webpack_require__(/*! ./components/kp */ "./src/front/manage/components/kp.tsx"));
exports.kp = kp_1.default;
const villages_1 = __importDefault(__webpack_require__(/*! ./components/villages */ "./src/front/manage/components/villages.tsx"));
exports.villages = villages_1.default;
const actions = __importStar(__webpack_require__(/*! ./actions */ "./src/front/manage/actions.ts"));
exports.actions = actions;


/***/ }),

/***/ "./src/front/manage/permission.ts":
/*!****************************************!*\
  !*** ./src/front/manage/permission.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.manageMoneyWrapper = exports.showBookingEditLink = exports.manageWholeEventCheck = exports.manageRolesWrapper = exports.manageWholeEventWrapper = exports.manageEventCheck = void 0;
const redirect_1 = __webpack_require__(/*! redux-auth-wrapper/history4/redirect */ "./node_modules/redux-auth-wrapper/history4/redirect.js");
const P = __importStar(__webpack_require__(/*! ../../shared/permissions */ "./src/shared/permissions.ts"));
const connectedAuthWrapper_1 = __importDefault(__webpack_require__(/*! redux-auth-wrapper/connectedAuthWrapper */ "./node_modules/redux-auth-wrapper/connectedAuthWrapper.js"));
exports.manageEventCheck = (0, redirect_1.connectedRouterRedirect)({
    authenticatedSelector: (state, props) => {
        return P.manageEvent(state.getIn(["User", "user"]).toJS(), state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS());
    },
    redirectPath: "/user",
    wrapperDisplayName: "Manage Event Check"
});
exports.manageWholeEventWrapper = (0, connectedAuthWrapper_1.default)({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        return P.manageWholeEvent(user, event);
    },
    wrapperDisplayName: "manageWholeEventWrapper"
});
exports.manageRolesWrapper = (0, connectedAuthWrapper_1.default)({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        return P.createRole(user, event);
    },
    wrapperDisplayName: "manageWholeEventWrapper"
});
exports.manageWholeEventCheck = (0, redirect_1.connectedRouterRedirect)({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        return P.manageWholeEvent(user, event);
    },
    redirectPath: "/user",
    wrapperDisplayName: "manageWholeEventCheck"
});
exports.showBookingEditLink = (0, connectedAuthWrapper_1.default)({
    authenticatedSelector: (state, props) => {
        return P.editBooking(state.getIn(["User", "user"]).toJS(), props.event, props.booking);
    },
    wrapperDisplayName: "showBookingEditLink"
});
exports.manageMoneyWrapper = (0, connectedAuthWrapper_1.default)({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        return P.viewMoney(user, event);
    },
    wrapperDisplayName: "manageWholeEventWrapper"
});


/***/ }),

/***/ "./src/front/messages/actions.ts":
/*!***************************************!*\
  !*** ./src/front/messages/actions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setWarning = exports.SET_WARNING_MESSAGE = exports.setSuccess = exports.SET_SUCCESS_MESSAGE = void 0;
exports.SET_SUCCESS_MESSAGE = 'MESSAGE_SET_SUCCESS_MESSAGE';
const setSuccess = (message) => {
    return {
        type: exports.SET_SUCCESS_MESSAGE,
        message: message
    };
};
exports.setSuccess = setSuccess;
exports.SET_WARNING_MESSAGE = 'MESSAGE_SET_WARNING_MESSAGE';
const setWarning = (message) => {
    return {
        type: exports.SET_WARNING_MESSAGE,
        message: message
    };
};
exports.setWarning = setWarning;


/***/ }),

/***/ "./src/front/messages/components/messages.tsx":
/*!****************************************************!*\
  !*** ./src/front/messages/components/messages.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class Messages extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.Messages.toObject();
        let success, warning = null;
        if (data.success && new Date().getTime() - data.success.time.getTime() < 10000)
            success = React.createElement(reactstrap_1.UncontrolledAlert, { color: "success" }, data.success.message);
        if (data.warning && new Date().getTime() - data.warning.time.getTime() < 10000)
            warning = React.createElement(reactstrap_1.UncontrolledAlert, { color: "warning" }, data.warning.message);
        if (!success && !warning)
            return null;
        return (React.createElement(reactstrap_1.Col, { sm: 12 },
            success,
            warning));
    }
}
const mapStateToProps = (state) => {
    const Messages = state.get("Messages");
    const router = state.get("router");
    return { Messages, router };
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    doLogin:(credentials) => dispatch(doLogin(credentials))
  }
}
*/
const mapDispatchToProps = {};
var VisibleMessages = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(Messages);
exports["default"] = VisibleMessages;


/***/ }),

/***/ "./src/front/messages/index.ts":
/*!*************************************!*\
  !*** ./src/front/messages/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.messages = exports.reducer = exports.actions = void 0;
const actions = __importStar(__webpack_require__(/*! ./actions */ "./src/front/messages/actions.ts"));
exports.actions = actions;
const reducer_1 = __importDefault(__webpack_require__(/*! ./reducer */ "./src/front/messages/reducer.ts"));
exports.reducer = reducer_1.default;
const messages_1 = __importDefault(__webpack_require__(/*! ./components/messages */ "./src/front/messages/components/messages.tsx"));
exports.messages = messages_1.default;


/***/ }),

/***/ "./src/front/messages/reducer.ts":
/*!***************************************!*\
  !*** ./src/front/messages/reducer.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Immutable = __importStar(__webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js"));
const a = __importStar(__webpack_require__(/*! ./actions */ "./src/front/messages/actions.ts"));
const initalMessageState = Immutable.Map();
function Messages(state = initalMessageState, action) {
    switch (action.type) {
        case a.SET_WARNING_MESSAGE: return state.set("warning", { message: action.message, time: new Date() }).set("success", null);
        case a.SET_SUCCESS_MESSAGE: return state.set("success", { message: action.message, time: new Date() }).set("warning", null);
    }
    return state;
}
exports["default"] = Messages;


/***/ }),

/***/ "./src/front/routes.tsx":
/*!******************************!*\
  !*** ./src/front/routes.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
//import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const app_1 = __importDefault(__webpack_require__(/*! ./app */ "./src/front/app/index.tsx"));
const user = __importStar(__webpack_require__(/*! ./user */ "./src/front/user/index.ts"));
const events = __importStar(__webpack_require__(/*! ./events */ "./src/front/events/index.ts"));
const bookings = __importStar(__webpack_require__(/*! ./bookings */ "./src/front/bookings/index.ts"));
const manage = __importStar(__webpack_require__(/*! ./manage */ "./src/front/manage/index.ts"));
exports["default"] = (React.createElement(app_1.default, null,
    React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: events.listPage }),
        React.createElement(react_router_dom_1.Route, { path: "/user", component: user.userPage }),
        React.createElement(react_router_dom_1.Route, { path: "/event/create", component: events.createPage }),
        React.createElement(react_router_dom_1.Route, { path: "/event/:eventId(\\d+)" },
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/event/:eventId(\\d+)/book", component: bookings.myBookingPage }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/event/:eventId(\\d+)/book/thanks", component: bookings.thanksPage }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/event/:eventId(\\d+)/apply", component: bookings.applyPage }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/event/:eventId(\\d+)/apply/thanks", component: bookings.applyThanksPage }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/event/:eventId(\\d+)/edit", component: events.editPage }),
                React.createElement(react_router_dom_1.Route, { path: "/event/:eventId(\\d+)/manage", component: manage.containerPage /* Loads all Bookings for an event */ }))),
        React.createElement(react_router_dom_1.Route, { path: "/booking/:bookingId", component: bookings.loader }),
        React.createElement(react_router_dom_1.Route, { path: "/cancel", component: bookings.cancelPage }),
        React.createElement(react_router_dom_1.Route, { path: "/guestUUID/:eventId(\\d+)/:guestUUID", component: bookings.myBookingPage }))));


/***/ }),

/***/ "./src/front/user/actions.ts":
/*!***********************************!*\
  !*** ./src/front/user/actions.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UPDATE_LIST = exports.getUserList = exports.updateUser = exports.doLogout = exports.doLogin = exports.getUser = exports.UPDATE_USER = void 0;
const fetch_1 = __importDefault(__webpack_require__(/*! ../fetch */ "./src/front/fetch.ts"));
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
const m = __importStar(__webpack_require__(/*! ../messages */ "./src/front/messages/index.ts"));
const storage_factory_1 = __webpack_require__(/*! storage-factory */ "./node_modules/storage-factory/lib/index.js");
//@ts-ignore
const local = (0, storage_factory_1.storageFactory)(() => localStorage);
exports.UPDATE_USER = 'USER_UPDATE_USER';
const getUser = () => {
    return (dispatch, getState) => {
        (0, fetch_1.default)('/api/user', "GET")
            .then(j => {
            if (j.remoteId)
                local.setItem('userId', j.remoteId.substr(0, 4));
            const user = getState().get('User').toJS();
            if (!user.user || user.user.id !== j.id)
                dispatch((0, exports.updateUser)(j));
        });
    };
};
exports.getUser = getUser;
const doLogin = (credentials) => {
    return (dispatch) => {
        (0, fetch_1.default)('/api/user/login', "POST", credentials)
            .then(j => {
            if (j.remoteId)
                local.setItem('userId', j.remoteId.substr(0, 4));
            dispatch((0, exports.updateUser)(j));
            dispatch(m.actions.setSuccess("Logged in"));
            dispatch((0, react_router_redux_1.push)('/'));
        }, e => {
            if (e.status === 401)
                dispatch(m.actions.setWarning("Invalid e-mail or password"));
        });
    };
};
exports.doLogin = doLogin;
const doLogout = () => {
    return (dispatch) => {
        (0, fetch_1.default)('/api/user/logout', "POST")
            .then(j => {
            dispatch((0, exports.updateUser)(j));
            dispatch(m.actions.setSuccess("Logged out"));
            dispatch((0, react_router_redux_1.push)('/'));
        });
    };
};
exports.doLogout = doLogout;
const updateUser = user => {
    return {
        type: exports.UPDATE_USER,
        user: user
    };
};
exports.updateUser = updateUser;
const getUserList = (eventId) => dispatch => {
    (0, fetch_1.default)('/api/users/' + eventId, 'GET')
        .then(u => dispatch(updateList(u.users)));
};
exports.getUserList = getUserList;
exports.UPDATE_LIST = "USERS_UPDATE_LIST";
const updateList = users => {
    return {
        type: exports.UPDATE_LIST,
        users: users
    };
};


/***/ }),

/***/ "./src/front/user/components/loginStatus.tsx":
/*!***************************************************!*\
  !*** ./src/front/user/components/loginStatus.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/user/actions.ts");
class LoginStatus extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(e) {
        e.preventDefault();
        this.props.doLogout();
    }
    render() {
        const data = this.props.User.toObject();
        if (data.id == 1)
            var link = React.createElement(react_router_dom_1.Link, { to: "/user" }, "Login");
        else
            var link = React.createElement("a", { onClick: this.logout, href: "#" }, "Logout");
        return (React.createElement("p", { className: "text-right" },
            "Logged in as: ",
            React.createElement("b", null, data.userName),
            " (",
            link,
            ")"));
    }
}
const mapStateToProps = (state) => {
    const User = state.getIn(["User", "user"]);
    return { User };
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    doLogin:(credentials) => dispatch(doLogin(credentials))
  }
}
*/
const mapDispatchToProps = { doLogout: actions_1.doLogout };
var VisibleLoginStatus = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(LoginStatus);
exports["default"] = VisibleLoginStatus;


/***/ }),

/***/ "./src/front/user/components/userPage.tsx":
/*!************************************************!*\
  !*** ./src/front/user/components/userPage.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/front/user/actions.ts");
const react_social_login_buttons_1 = __webpack_require__(/*! react-social-login-buttons */ "./node_modules/react-social-login-buttons/lib/index.js");
const SocialLoginButton_1 = __importDefault(__webpack_require__(/*! react-social-login-buttons/lib/buttons/SocialLoginButton */ "./node_modules/react-social-login-buttons/lib/buttons/SocialLoginButton.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_brands_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.js");
const storage_factory_1 = __webpack_require__(/*! storage-factory */ "./node_modules/storage-factory/lib/index.js");
//@ts-ignore
const local = (0, storage_factory_1.storageFactory)(() => localStorage);
class UserPage extends React.Component {
    render() {
        const data = this.props.User.toObject();
        return data.id === 1 ? React.createElement(LoginForm, { doLogin: this.props.doLogin, env: this.props.env }) :
            React.createElement(UserProfile, { user: data });
    }
}
const mapStateToProps = (state) => {
    const User = state.getIn(["User", "user"]);
    const env = state.get("App");
    return { User, env };
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    doLogin:(credentials) => dispatch(doLogin(credentials))
  }
}
*/
const mapDispatchToProps = { doLogin: actions_1.doLogin };
const VisibleUserPage = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(UserPage);
exports["default"] = VisibleUserPage;
const MyYahooLoginButton = (props) => {
    const { style, ...buttonProps } = props;
    const customProps = {
        style: { background: "#2f2268", ...style },
        activeStyle: { background: "#16094F" }
    };
    return React.createElement(SocialLoginButton_1.default, { ...{ ...customProps, ...buttonProps } },
        React.createElement(react_fontawesome_1.FontAwesomeIcon, { style: { verticalAlign: 'middle', width: "1em", marginLeft: "0.6em", marginRight: "0.6em" }, icon: free_brands_svg_icons_1.faYahoo }),
        React.createElement("span", { style: { verticalAlign: 'middle' } }, "Login with Yahoo!"));
};
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submit = this.submit.bind(this);
    }
    updateEmail(e) {
        this.setState({ email: e.target.value });
    }
    updatePassword(e) {
        this.setState({ password: e.target.value });
    }
    submit(e) {
        e.preventDefault();
        this.props.doLogin(this.state);
        this.setState({ password: "" });
    }
    render() {
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(react_router_dom_1.Route, { path: '/user/facebook', render: () => React.createElement(reactstrap_1.Col, { sm: 12 },
                    React.createElement(reactstrap_1.UncontrolledAlert, { color: "warning" }, "The supplied e-mail address was previously used with Facebook, please log in using Facebook to access your bookings")) }),
            React.createElement(react_router_dom_1.Route, { path: '/user/microsoft', render: () => React.createElement(reactstrap_1.Col, { sm: 12 },
                    React.createElement(reactstrap_1.UncontrolledAlert, { color: "warning" }, "The supplied e-mail address was previously used with Microsoft, please log in using Microsoft to access your bookings")) }),
            React.createElement(react_router_dom_1.Route, { path: '/user/google', render: () => React.createElement(reactstrap_1.Col, { sm: 12 },
                    React.createElement(reactstrap_1.UncontrolledAlert, { color: "warning" }, "The supplied e-mail address was previously used with Google, please log in using Google to access your bookings")) }),
            React.createElement(react_router_dom_1.Route, { path: '/user/yahoo', render: () => React.createElement(reactstrap_1.Col, { sm: 12 },
                    React.createElement(reactstrap_1.UncontrolledAlert, { color: "warning" }, "The supplied e-mail address was previously used with Yahoo, please log in using Yahoo to access your bookings")) }),
            React.createElement(reactstrap_1.Col, { sm: this.props.env === 'dev' ? 7 : 12 },
                React.createElement(reactstrap_1.Card, null,
                    React.createElement(reactstrap_1.CardBody, null,
                        React.createElement(reactstrap_1.CardTitle, null, "Social Login"),
                        React.createElement(reactstrap_1.CardText, null, "Please use one of the following services to authenticate:"),
                        React.createElement(reactstrap_1.Row, null,
                            React.createElement(reactstrap_1.Col, { sm: this.props.env === 'dev' ? 6 : 5 },
                                React.createElement(react_social_login_buttons_1.GoogleLoginButton, { onClick: () => {
                                        // @ts-ignore
                                        window.location = '/api/auth/google/redirect';
                                    }, style: local.getItem('userId') && local.getItem('userId') !== 'goog' ? { filter: 'grayscale(50%)', opacity: 0.5 } : {} }),
                                React.createElement(react_social_login_buttons_1.FacebookLoginButton, { text: "Login with Facebook", onClick: () => {
                                        // @ts-ignore
                                        window.location = '/api/auth/facebook/redirect';
                                    }, style: local.getItem('userId') && local.getItem('userId') !== 'face' ? { filter: 'grayscale(50%)', opacity: 0.5 } : {} }),
                                React.createElement(react_social_login_buttons_1.MicrosoftLoginButton, { onClick: () => {
                                        // @ts-ignore
                                        window.location = '/api/auth/microsoft/redirect';
                                    }, style: local.getItem('userId') && local.getItem('userId') !== 'micr' ? { filter: 'grayscale(50%)', opacity: 0.5 } : {} }),
                                React.createElement(MyYahooLoginButton, { onClick: () => {
                                        // @ts-ignore
                                        window.location = '/api/auth/yahoo/redirect';
                                    }, style: local.getItem('userId') && local.getItem('userId') !== 'yaho' ? { filter: 'grayscale(50%)', opacity: 0.5 } : {} })))))),
            this.props.env === 'dev' ?
                React.createElement(reactstrap_1.Col, { sm: 5 },
                    React.createElement(reactstrap_1.Card, null,
                        React.createElement(reactstrap_1.CardBody, null,
                            React.createElement(reactstrap_1.CardTitle, null, "Local Login"),
                            React.createElement(reactstrap_1.CardText, null, "Only use this if Ralph has told you to."),
                            React.createElement(reactstrap_1.Form, null,
                                React.createElement(reactstrap_1.FormGroup, { row: true },
                                    React.createElement(reactstrap_1.Label, { for: "email", sm: 4 }, "Email Address"),
                                    React.createElement(reactstrap_1.Col, null,
                                        React.createElement(reactstrap_1.Input, { type: "email", name: "email", placeholded: "e-mail", value: this.state.email, onChange: this.updateEmail }))),
                                React.createElement(reactstrap_1.FormGroup, { row: true },
                                    React.createElement(reactstrap_1.Label, { for: "password", sm: 4 }, "Password"),
                                    React.createElement(reactstrap_1.Col, null,
                                        React.createElement(reactstrap_1.Input, { type: "password", name: "password", placeholded: "password", value: this.state.password, onChange: this.updatePassword }))),
                                React.createElement(reactstrap_1.FormGroup, { row: true },
                                    React.createElement(reactstrap_1.Col, { sm: { size: 8, offset: 4 } },
                                        React.createElement(reactstrap_1.Button, { type: "submit", onClick: this.submit, color: "primary" }, "Submit"))))))) : null));
    }
}
class UserProfile extends React.Component {
    render() {
        return (React.createElement("div", { className: "col-sm-12" },
            React.createElement("p", null,
                "Logged in as ",
                this.props.user.userName,
                ", email: ",
                this.props.user.email,
                " ")));
    }
}


/***/ }),

/***/ "./src/front/user/index.ts":
/*!*********************************!*\
  !*** ./src/front/user/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loginStatus = exports.userPage = exports.reducer = exports.actions = void 0;
const actions = __importStar(__webpack_require__(/*! ./actions */ "./src/front/user/actions.ts"));
exports.actions = actions;
const reducer_1 = __importDefault(__webpack_require__(/*! ./reducer */ "./src/front/user/reducer.ts"));
exports.reducer = reducer_1.default;
const userPage_1 = __importDefault(__webpack_require__(/*! ./components/userPage */ "./src/front/user/components/userPage.tsx"));
exports.userPage = userPage_1.default;
const loginStatus_1 = __importDefault(__webpack_require__(/*! ./components/loginStatus */ "./src/front/user/components/loginStatus.tsx"));
exports.loginStatus = loginStatus_1.default;


/***/ }),

/***/ "./src/front/user/reducer.ts":
/*!***********************************!*\
  !*** ./src/front/user/reducer.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Immutable = __importStar(__webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js"));
const a = __importStar(__webpack_require__(/*! ./actions */ "./src/front/user/actions.ts"));
//const initalUserState = Immutable.fromJS({id:0, name:"Guest", roles:[]});
const initalUserState = Immutable.fromJS({ user: null, list: [] });
function User(state = initalUserState, action) {
    switch (action.type) {
        case a.UPDATE_USER:
            return state.set('user', Immutable.fromJS(action.user));
        case a.UPDATE_LIST:
            return state.set("list", Immutable.fromJS(action.users));
    }
    return state;
}
exports["default"] = User;


/***/ }),

/***/ "./src/shared/fee/big.tsx":
/*!********************************!*\
  !*** ./src/shared/fee/big.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFeesOwed = exports.emailHTML = exports.ThanksRow = exports.BookingForm = exports.Config = exports.selection = exports.name = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));
const map_1 = __importDefault(__webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"));
const reduce_1 = __importDefault(__webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js"));
const react_markdown_1 = __importDefault(__webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js"));
//this implements a pricing policy for large camps
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_html_email_1 = __webpack_require__(/*! react-html-email */ "./node_modules/react/index.js");
let bucketKey = Math.random() * 10000;
exports.name = "big";
exports.selection = "Big Camp Pricing Policy";
class Config extends React.Component {
    constructor(props) {
        super(props);
        this.addBucket = this.addBucket.bind(this);
        this.deleteBucket = this.deleteBucket.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.update = this.update.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.updateAmountPartial = this.updateAmountPartial.bind(this);
        if (!this.props.fee.woodchips)
            this.props.update({
                buckets: [{
                        id: "bucket" + bucketKey,
                        date: new Date(),
                        amount: 0
                    }], woodchips: 0.5, cancel: 50, desc: ''
            });
        bucketKey++;
    }
    update(field) {
        return e => {
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { [field]: { $set: e.target.value } }));
            e.preventDefault();
        };
    }
    updateDate(id) {
        return e => {
            const buckets = (0, cloneDeep_1.default)(this.props.fee.buckets);
            buckets.forEach(b => {
                if (b.id === id)
                    b.date = e.target.value;
            });
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
            e.preventDefault();
        };
    }
    updateAmount(id) {
        return e => {
            const buckets = (0, cloneDeep_1.default)(this.props.fee.buckets);
            buckets.forEach(b => {
                if (b.id === id)
                    b.amount = e.target.value;
            });
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
            e.preventDefault();
        };
    }
    updateAmountPartial(id) {
        return o => {
            return e => {
                const buckets = (0, cloneDeep_1.default)(this.props.fee.buckets);
                buckets.forEach(b => {
                    if (b.id === id) {
                        b.amount = typeof (b.amount) !== 'object' ? {} : b.amount;
                        b.amount[o] = e.target.value;
                    }
                });
                this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
                e.preventDefault();
            };
        };
    }
    addBucket(e) {
        const buckets = [...(this.props.fee.buckets || [])];
        buckets.push({ id: "bucket" + bucketKey, date: new Date(), amount: 0 });
        bucketKey++;
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
        e.preventDefault();
    }
    deleteBucket(id) {
        return e => {
            const buckets = (0, cloneDeep_1.default)(this.props.fee.buckets).filter(b => b.id !== id);
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
            e.preventDefault();
        };
    }
    render() {
        //Thou shalt not ever use JS numbers for currency...
        const dateBuckets = this.props.fee.buckets || [];
        const bucketRows = dateBuckets.map(b => {
            const feeBoxes = (this.props.event.partialDates === 'whole' || !this.props.event.partialDatesData) ?
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.InputGroup, null,
                        React.createElement("div", { className: "input-group-prepend" },
                            React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                        React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "35", value: b.amount, onChange: this.updateAmount(b.id) }))) :
                React.createElement(React.Fragment, null, this.props.event.partialDatesData.map(o => React.createElement(reactstrap_1.FormGroup, { key: o.id, row: true },
                    React.createElement(reactstrap_1.Label, { sm: 6 }, o.name),
                    React.createElement(reactstrap_1.Col, { sm: 6 },
                        React.createElement(reactstrap_1.InputGroup, null,
                            React.createElement("div", { className: "input-group-prepend" },
                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "35", value: b.amount[o.name] || 0, onChange: this.updateAmountPartial(b.id)(o.name) }))))));
            return React.createElement("tr", { key: b.id },
                React.createElement("td", null,
                    React.createElement(reactstrap_1.Input, { type: "date", onChange: this.updateDate(b.id), value: (0, moment_1.default)(b.date).format("YYYY-MM-DD") })),
                React.createElement("td", null, feeBoxes),
                React.createElement("td", null,
                    React.createElement(reactstrap_1.Button, { onClick: this.deleteBucket(b.id), color: "warning" },
                        React.createElement("span", { style: { color: 'white' } },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes })))));
        });
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, null, "Description (Markdown supported):"),
                        React.createElement(reactstrap_1.Input, { type: "textarea", name: "description", value: this.props.fee.desc, onChange: this.update('desc') })))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h4", null, "Date buckets"),
                    React.createElement(reactstrap_1.Table, null,
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "Up Until Date"),
                                React.createElement("th", null, "Fee"),
                                React.createElement("th", null))),
                        React.createElement("tbody", null, bucketRows)),
                    React.createElement(reactstrap_1.Button, { onClick: this.addBucket }, "Add Bucket"))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.FormGroup, { row: true },
                        React.createElement(reactstrap_1.Label, { sm: 4 }, "Woodchip Multiplier"),
                        React.createElement(reactstrap_1.Col, { sm: 2 },
                            React.createElement(reactstrap_1.InputGroup, null,
                                React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "0.5", value: this.props.fee.woodchips, onChange: this.update('woodchips') }))),
                        React.createElement(reactstrap_1.Label, { sm: 4 }, "Cancellation Fee:"),
                        React.createElement(reactstrap_1.Col, { sm: 2 },
                            React.createElement(reactstrap_1.InputGroup, null,
                                React.createElement("div", { className: "input-group-prepend" },
                                    React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "50", value: this.props.fee.cancel, onChange: this.update('cancel') }))))))));
    }
}
exports.Config = Config;
class BookingForm extends React.Component {
    render() {
        //this.props.participants
        //this.props.event.startDate
        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.participants, this.props.booking);
        const tableLines = feesOwed.map(l => React.createElement("tr", { key: l.line },
            React.createElement("td", null, l.line),
            React.createElement("td", null,
                "\u00A3",
                l.total)));
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { sm: 12 },
                React.createElement(react_markdown_1.default, { children: this.props.event.feeData.desc })),
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null),
                    React.createElement("tbody", null,
                        tableLines,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("b", null, "Total:")),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    "\u00A3",
                                    feesOwed.reduce((a, c) => {
                                        return a + c.total;
                                    }, 0)))))))));
    }
}
exports.BookingForm = BookingForm;
class ThanksRow extends React.Component {
    render() {
        //this.props.participants
        //this.props.event.startDate
        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.booking.participants, this.props.booking);
        const tableLines = feesOwed.map(l => React.createElement("tr", { key: l.line },
            React.createElement("td", null, l.line),
            React.createElement("td", null,
                "\u00A3",
                l.total)));
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null),
                    React.createElement("tbody", null,
                        tableLines,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("b", null, "Total:")),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    "\u00A3",
                                    feesOwed.reduce((a, c) => {
                                        return a + c.total;
                                    }, 0)))))))));
    }
}
exports.ThanksRow = ThanksRow;
function emailHTML(event, booking) {
    const rows = getFeesOwed(event, booking.participants, booking).map((r, i) => React.createElement("tr", { key: i },
        React.createElement("td", null, r.line),
        React.createElement("td", null,
            React.createElement("b", null,
                "\u00A3",
                r.total))));
    const total = rows.length > 1 ? React.createElement("tr", null,
        React.createElement("td", null,
            React.createElement("b", null, "Total")),
        React.createElement("td", null,
            React.createElement("b", null,
                "\u00A3",
                getFeesOwed(event, booking.participants, booking).reduce((a, c) => {
                    return a + c.total;
                }, 0)))) : null;
    return (React.createElement(react_html_email_1.Item, null,
        React.createElement("p", null,
            React.createElement("b", null, "Money:")),
        React.createElement("table", null,
            React.createElement("tbody", null,
                rows,
                total))));
}
exports.emailHTML = emailHTML;
function getFeesOwed(event, participants, booking) {
    switch (event.partialDates) {
        case 'whole':
            return owedWholeEvent(event, participants, booking);
        case 'presets':
            return owedPresetEvent(event, participants, booking);
        default:
            return [{ line: "Unsupported attendance/fee combo", total: 0 }];
    }
}
exports.getFeesOwed = getFeesOwed;
const owedWholeEvent = (event, participants, booking) => {
    const sortedBuckets = event.feeData.buckets.sort((a, b) => a.date < b.date ? 1 : a.date === b.date ? 0 : -1);
    const filteredParticipants = (0, cloneDeep_1.default)(participants)
        .filter(p => p.name && p.age)
        .map(p => {
        if (!p.createdAt)
            p.createdAt = (0, moment_1.default)().format("YYYY-MM-DD");
        return p;
    });
    const rawCosts = filteredParticipants.map(p => sortedBuckets.reduce((a, c) => {
        if (new Date(p.createdAt) < new Date(c.date))
            return {
                type: isWoodchip(event, p) ? 'woodchip' : 'normal',
                date: c.date,
                mask: p.days,
                amount: c.amount * (isWoodchip(event, p) ? event.feeData.woodchips : 1)
            };
        else
            return a;
    }, {}));
    const combinedCosts = rawCosts.reduce((a, c) => {
        if (a[c.date] && a[c.date][c.type])
            a[c.date][c.type].count++;
        else {
            a[c.date] = a[c.date] || {};
            a[c.date][c.type] = { count: 1, amount: c.amount };
        }
        return a;
    }, {});
    return [...linesWithoutPartial(combinedCosts), ...cancelledFee(event, participants, booking)];
};
const owedPresetEvent = (event, participants, booking) => {
    const sortedBuckets = event.feeData.buckets.sort((a, b) => a.date < b.date ? 1 : a.date === b.date ? 0 : -1);
    const filteredParticipants = (0, cloneDeep_1.default)(participants)
        .filter(p => p.name && p.age)
        .map(p => {
        if (!p.createdAt)
            p.createdAt = (0, moment_1.default)().format("YYYY-MM-DD");
        p.days = event.partialDatesData.find(d => d.mask === p.days);
        p.days = p.days ? p.days.name : event.partialDatesData[0].name;
        return p;
    });
    const rawCosts = filteredParticipants.map(p => sortedBuckets.reduce((a, c) => {
        if (new Date(p.createdAt) < new Date(c.date))
            return {
                type: isWoodchip(event, p) ? 'woodchip' : 'normal',
                date: c.date,
                mask: p.days,
                amount: c.amount[p.days] * (isWoodchip(event, p) ? event.feeData.woodchips : 1)
            };
        else
            return a;
    }, {}));
    const combinedCosts = rawCosts.reduce((a, c) => {
        if (a[c.date] && a[c.date][c.mask] && a[c.date][c.mask][c.type])
            a[c.date][c.mask][c.type].count++;
        else {
            a[c.date] = a[c.date] || {};
            a[c.date][c.mask] = a[c.date][c.mask] || {};
            a[c.date][c.mask][c.type] = { count: 1, amount: c.amount };
        }
        return a;
    }, {});
    return [...linesWithPartial(combinedCosts), ...cancelledFee(event, participants, booking)];
};
//@ts-ignore
const linesWithoutPartial = combined => (0, reduce_1.default)(combined, (a, c, i) => [...a, ...(0, map_1.default)(c, (l, t) => {
        if (t === 'normal')
            return {
                line: `${l.count} ${l.count > 1 ? 'people' : 'person'} booked before ${(0, moment_1.default)(i).format('MMMM Do YYYY')} at £${l.amount}`,
                total: l.count * l.amount
            };
        else
            return {
                line: `${l.count} ${l.count > 1 ? 'woodchips' : 'woodchip'} booked before ${(0, moment_1.default)(i).format('MMMM Do YYYY')} at £${l.amount}`,
                total: l.count * l.amount
            };
    })], []);
//@ts-ignore
const linesWithPartial = (combined) => (0, reduce_1.default)(combined, (a, c, i) => [...a, ...(0, reduce_1.default)(c, (a1, c1, i1) => [...a1, ...(0, map_1.default)(c1, (l, t) => {
            if (t === 'normal')
                return {
                    line: `${l.count} ${l.count > 1 ? 'people' : 'person'} booked for ${i1} before ${(0, moment_1.default)(i).format('MMMM Do YYYY')} at £${l.amount}`,
                    total: l.count * l.amount
                };
            else
                return {
                    line: `${l.count} ${l.count > 1 ? 'woodchips' : 'woodchip'} booked for ${i1} before ${(0, moment_1.default)(i).format('MMMM Do YYYY')} at £${l.amount}`,
                    total: l.count * l.amount
                };
        })], [])], []);
const cancelledFee = (event, participants, booking) => {
    if (!booking.maxParticipants || booking.maxParticipants <= participants.length || event.feeData.cancel === 0)
        return [];
    return [{
            line: `${booking.maxParticipants - participants.length} cancelled bookings at £${event.feeData.cancel}`,
            total: (booking.maxParticipants - participants.length) * event.feeData.cancel
        }];
};
const isWoodchip = (e, p) => {
    return Date.parse(e.startDate) - Date.parse(p.age) < 189216000000;
};


/***/ }),

/***/ "./src/shared/fee/cg-preset.tsx":
/*!**************************************!*\
  !*** ./src/shared/fee/cg-preset.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFeesOwed = exports.emailHTML = exports.ThanksRow = exports.BookingForm = exports.Config = exports.selection = exports.name = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const react_markdown_1 = __importDefault(__webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js"));
const payment_lines_1 = __importDefault(__webpack_require__(/*! ./payment-lines */ "./src/shared/fee/payment-lines.ts"));
const react_currency_formatter_1 = __importDefault(__webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js"));
//this implements a pricing policy for large camps
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_html_email_1 = __webpack_require__(/*! react-html-email */ "./node_modules/react/index.js");
let bucketKey = Math.random() * 10000;
exports.name = "cg-preset";
exports.selection = "Common Ground Pricing Policy";
class Config extends React.Component {
    constructor(props) {
        super(props);
        this.addBucket = this.addBucket.bind(this);
        this.deleteBucket = this.deleteBucket.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.update = this.update.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.updateAmountPartial = this.updateAmountPartial.bind(this);
        if (!this.props.fee.desc)
            this.props.update({
                buckets: [{
                        id: "bucket" + bucketKey,
                        date: new Date(),
                        amount: 0
                    }], woodchips: 0.5, cancel: 50, desc: '', orgs: ''
            });
        bucketKey++;
    }
    update(field) {
        return e => {
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { [field]: { $set: e.target.value } }));
            e.preventDefault();
        };
    }
    updateDate(id) {
        return e => {
            const buckets = (0, lodash_1.cloneDeep)(this.props.fee.buckets);
            buckets.forEach(b => {
                if (b.id === id)
                    b.date = e.target.value;
            });
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
            e.preventDefault();
        };
    }
    updateAmount(id) {
        return e => {
            const buckets = (0, lodash_1.cloneDeep)(this.props.fee.buckets);
            buckets.forEach(b => {
                if (b.id === id)
                    b.amount = e.target.value;
            });
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
            e.preventDefault();
        };
    }
    updateAmountPartial(id) {
        return o => {
            return e => {
                const buckets = (0, lodash_1.cloneDeep)(this.props.fee.buckets);
                buckets.forEach(b => {
                    if (b.id === id) {
                        b.amount = typeof (b.amount) !== 'object' ? {} : b.amount;
                        b.amount[o] = e.target.value;
                    }
                });
                this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
                e.preventDefault();
            };
        };
    }
    addBucket(e) {
        const buckets = [...(this.props.fee.buckets || [])];
        buckets.push({ id: "bucket" + bucketKey, date: new Date(), amount: 0 });
        bucketKey++;
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
        e.preventDefault();
    }
    deleteBucket(id) {
        return e => {
            const buckets = (0, lodash_1.cloneDeep)(this.props.fee.buckets).filter(b => b.id !== id);
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
            e.preventDefault();
        };
    }
    render() {
        //Thou shalt not ever use JS numbers for currency...
        const dateBuckets = this.props.fee.buckets || [];
        const bucketRows = dateBuckets.map(b => {
            const feeBoxes = (this.props.event.partialDates === 'whole' || !this.props.event.partialDatesData) ?
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.InputGroup, null,
                        React.createElement("div", { className: "input-group-prepend" },
                            React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                        React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "35", value: b.amount, onChange: this.updateAmount(b.id) }))) :
                React.createElement(React.Fragment, null, this.props.event.partialDatesData.map(o => React.createElement(reactstrap_1.FormGroup, { key: o.id, row: true },
                    React.createElement(reactstrap_1.Label, { sm: 6 }, o.name),
                    React.createElement(reactstrap_1.Col, { sm: 6 },
                        React.createElement(reactstrap_1.InputGroup, null,
                            React.createElement("div", { className: "input-group-prepend" },
                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "35", value: b.amount[o.name] || 0, onChange: this.updateAmountPartial(b.id)(o.name) }))))));
            return React.createElement("tr", { key: b.id },
                React.createElement("td", null,
                    React.createElement(reactstrap_1.Input, { type: "date", onChange: this.updateDate(b.id), value: (0, moment_1.default)(b.date).format("YYYY-MM-DD") })),
                React.createElement("td", null, feeBoxes),
                React.createElement("td", null,
                    React.createElement(reactstrap_1.Button, { onClick: this.deleteBucket(b.id), color: "warning" },
                        React.createElement("span", { style: { color: 'white' } },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes })))));
        });
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, null, "Description (Markdown supported):"),
                        React.createElement(reactstrap_1.Input, { type: "textarea", name: "description", value: this.props.fee.desc, onChange: this.update('desc') })))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, null, "Organisation level fees:"),
                        React.createElement(reactstrap_1.Input, { type: "textarea", name: "orgs", value: this.props.fee.orgs, onChange: this.update('orgs') })))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h4", null, "Date buckets"),
                    React.createElement(reactstrap_1.Table, null,
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "Up Until Date"),
                                React.createElement("th", null, "Fee"),
                                React.createElement("th", null))),
                        React.createElement("tbody", null, bucketRows)),
                    React.createElement(reactstrap_1.Button, { onClick: this.addBucket }, "Add Bucket"))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.FormGroup, { row: true },
                        React.createElement(reactstrap_1.Label, { sm: 4 }, "Food Opt Out Discount:"),
                        React.createElement(reactstrap_1.Col, { sm: 2 },
                            React.createElement(reactstrap_1.InputGroup, null,
                                React.createElement("div", { className: "input-group-prepend" },
                                    React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "30", value: this.props.fee.foodOptOut, onChange: this.update('foodOptOut') })))),
                    React.createElement(reactstrap_1.FormGroup, { row: true },
                        React.createElement(reactstrap_1.Label, { sm: 4 }, "Cancellation Fee:"),
                        React.createElement(reactstrap_1.Col, { sm: 2 },
                            React.createElement(reactstrap_1.InputGroup, null,
                                React.createElement("div", { className: "input-group-prepend" },
                                    React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "50", value: this.props.fee.cancel, onChange: this.update('cancel') }))))))));
    }
}
exports.Config = Config;
class BookingForm extends React.Component {
    render() {
        //this.props.participants
        //this.props.event.startDate
        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.participants, this.props.booking);
        const tableLines = feesOwed.map((l, i) => React.createElement("tr", { key: `${l.line} ${i}` },
            React.createElement("td", null, l.line),
            React.createElement("td", null,
                React.createElement(react_currency_formatter_1.default, { quantity: l.total, currency: "GBP" }))));
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { sm: 12 },
                React.createElement(react_markdown_1.default, { children: this.props.event.feeData.desc })),
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null),
                    React.createElement("tbody", null,
                        tableLines,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("b", null, "Total:")),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    React.createElement(react_currency_formatter_1.default, { quantity: feesOwed.reduce((a, c) => {
                                            return a + c.total;
                                        }, 0), currency: "GBP" })))))))));
    }
}
exports.BookingForm = BookingForm;
class ThanksRow extends React.Component {
    render() {
        //this.props.participants
        //this.props.event.startDate
        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.booking.participants, this.props.booking);
        const tableLines = feesOwed.map((l, i) => React.createElement("tr", { key: `${l.line} ${i}` },
            React.createElement("td", null, l.line),
            React.createElement("td", null,
                React.createElement(react_currency_formatter_1.default, { quantity: l.total, currency: "GBP" }))));
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null),
                    React.createElement("tbody", null,
                        tableLines,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("b", null, "Total:")),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    React.createElement(react_currency_formatter_1.default, { quantity: feesOwed.reduce((a, c) => {
                                            return a + c.total;
                                        }, 0), currency: "GBP" })))))))));
    }
}
exports.ThanksRow = ThanksRow;
function emailHTML(event, booking) {
    const feesOwed = getFeesOwed(event, booking.participants, booking);
    const rows = feesOwed.map((r, i) => React.createElement("tr", { key: i },
        React.createElement("td", null, r.line),
        React.createElement("td", null,
            React.createElement("b", null,
                React.createElement(react_currency_formatter_1.default, { quantity: r.total, currency: "GBP" })))));
    const total = React.createElement("tr", null,
        React.createElement("td", null,
            React.createElement("b", null, "Total")),
        React.createElement("td", null,
            React.createElement("b", null,
                React.createElement(react_currency_formatter_1.default, { quantity: feesOwed.reduce((a, c) => {
                        return a + c.total;
                    }, 0), currency: "GBP" }))));
    return (React.createElement(react_html_email_1.Item, null,
        React.createElement("table", null,
            React.createElement("tbody", null,
                rows,
                total))));
}
exports.emailHTML = emailHTML;
function getFeesOwed(event, participants, booking, payments = true) {
    return owedPresetEvent(event, participants, booking, payments);
}
exports.getFeesOwed = getFeesOwed;
const owedPresetEvent = (event, participants, booking, payments) => {
    const orgFees = parseOrgFees(event);
    if (orgFees[booking.organisationId])
        return [...underFives(event, participants), ...orgFeesLines(participants, orgFees, booking, event), ...cancelledFee(event, participants, booking)];
    const sortedBuckets = event.feeData.buckets.sort((a, b) => a.date < b.date ? 1 : a.date === b.date ? 0 : -1);
    const filteredParticipants = (0, lodash_1.cloneDeep)(participants)
        .filter(p => p.name && p.age)
        .filter(p => !isUnderFive(event, p))
        .map(p => {
        if (!p.updatedAt)
            p.updatedAt = (0, moment_1.default)().format("YYYY-MM-DD");
        p.days = event.partialDatesData.find(d => d.mask === p.days);
        p.days = p.days ? p.days.name : event.partialDatesData[0].name;
        return p;
    });
    const rawCosts = filteredParticipants.map(p => sortedBuckets.reduce((a, c) => {
        if (new Date(p.updatedAt) < new Date(c.date))
            return {
                date: c.date,
                mask: p.days,
                amount: c.amount[p.days] - (booking.externalExtra.foodOptOut ? event.feeData.foodOptOut : 0)
            };
        else
            return a;
    }, {}));
    const combinedCosts = rawCosts.reduce((a, c) => {
        if (a[c.date] && a[c.date][c.mask] && a[c.date][c.mask][c.type])
            a[c.date][c.mask][c.type].count++;
        else {
            a[c.date] = a[c.date] || {};
            a[c.date][c.mask] = a[c.date][c.mask] || {};
            a[c.date][c.mask][c.type] = { count: 1, amount: c.amount };
        }
        return a;
    }, {});
    return [...underFives(event, participants), ...linesWithPartial(combinedCosts, booking), ...cancelledFee(event, participants, booking), ...(payments ? (0, payment_lines_1.default)(event, participants, booking) : [])];
};
const orgFeesLines = (participants, orgFees, booking, event) => {
    const filteredParticipants = (0, lodash_1.cloneDeep)(participants)
        .filter(p => p.name && p.age)
        .filter(p => !isUnderFive(event, p));
    if (filteredParticipants.length > 0)
        return [{
                line: `${filteredParticipants.length} ${filteredParticipants.length > 1 ? 'people' : 'person'} for £${orgFees[booking.organisationId]}`,
                total: filteredParticipants.length * orgFees[booking.organisationId]
            }];
    else
        return [];
};
const parseOrgFees = event => {
    if (event.feeData.orgs.length < 2)
        return {};
    const lines = event.feeData.orgs.split("\n");
    return lines.reduce((a, l) => {
        const parts = l.split(':');
        parts[1].split(',').forEach(p => {
            a[parseInt(p)] = parseInt(parts[0]);
        });
        return a;
    }, {});
};
const underFives = (event, participants) => {
    const filteredParticipants = (0, lodash_1.cloneDeep)(participants)
        .filter(p => p.name && p.age)
        .filter(p => isUnderFive(event, p));
    if (filteredParticipants.length > 0)
        return [{
                line: `${filteredParticipants.length} ${filteredParticipants.length > 1 ? 'people' : 'person'} under five for free`,
                total: 0
            }];
    else
        return [];
};
//@ts-ignore
const linesWithPartial = (combined, booking) => (0, lodash_1.reduce)(combined, (a, c, i) => [...a, ...(0, lodash_1.reduce)(c, (a1, c1, i1) => [...a1, ...(0, lodash_1.map)(c1, (l, t) => {
            return {
                line: `${l.count} ${l.count > 1 ? 'people' : 'person'} booked for ${i1}${booking.externalExtra.foodOptOut ? ' with food opt-out' : ''} before ${(0, moment_1.default)(i).format('MMMM Do YYYY')} at £${l.amount}`,
                total: l.count * l.amount
            };
        })], [])], []);
const cancelledFee = (event, participants, booking) => {
    if (!booking.maxParticipants || booking.maxParticipants <= participants.length || event.feeData.cancel === 0)
        return [];
    return [{
            line: `${booking.maxParticipants - participants.length} cancelled bookings at £${event.feeData.cancel}`,
            total: (booking.maxParticipants - participants.length) * event.feeData.cancel
        }];
};
const isUnderFive = (e, p) => {
    return Date.parse(e.startDate) - Date.parse(p.age) < 157784630000;
};


/***/ }),

/***/ "./src/shared/fee/ealing-cg.tsx":
/*!**************************************!*\
  !*** ./src/shared/fee/ealing-cg.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFeesOwed = exports.emailHTML = exports.ThanksRow = exports.BookingForm = exports.Config = exports.selection = exports.name = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_html_email_1 = __webpack_require__(/*! react-html-email */ "./node_modules/react/index.js");
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const react_currency_formatter_1 = __importDefault(__webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js"));
//this implements Ealing's camp pricing policy.
exports.name = "ealing";
exports.selection = "Ealing Pricing Policy";
class Config extends React.Component {
    constructor(props) {
        super(props);
        this.updateStandardFee = this.updateStandardFee.bind(this);
        this.updateDiscountFee = this.updateDiscountFee.bind(this);
        this.updateUnaccompaniedFee = this.updateUnaccompaniedFee.bind(this);
        this.updateUnaccompaniedDiscountFee = this.updateUnaccompaniedDiscountFee.bind(this);
        this.updateStandardFeeHalf = this.updateStandardFeeHalf.bind(this);
        this.updateDiscountFeeHalf = this.updateDiscountFeeHalf.bind(this);
        this.updateUnaccompaniedFeeHalf = this.updateUnaccompaniedFeeHalf.bind(this);
        this.updateUnaccompaniedDiscountFeeHalf = this.updateUnaccompaniedDiscountFeeHalf.bind(this);
    }
    updateStandardFee(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amount: { $set: parseFloat(e.target.value) } }));
    }
    updateDiscountFee(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amountDiscount: { $set: parseFloat(e.target.value) } }));
    }
    updateUnaccompaniedFee(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amountUnaccompanied: { $set: parseFloat(e.target.value) } }));
    }
    updateUnaccompaniedDiscountFee(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amountUnaccompaniedDiscount: { $set: parseFloat(e.target.value) } }));
    }
    updateStandardFeeHalf(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amountHalf: { $set: parseFloat(e.target.value) } }));
    }
    updateDiscountFeeHalf(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amountDiscountHalf: { $set: parseFloat(e.target.value) } }));
    }
    updateUnaccompaniedFeeHalf(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amountUnaccompaniedHalf: { $set: parseFloat(e.target.value) } }));
    }
    updateUnaccompaniedDiscountFeeHalf(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amountUnaccompaniedDiscountHalf: { $set: parseFloat(e.target.value) } }));
    }
    render() {
        //Thou shalt not ever use JS numbers for currency...
        const amount = this.props.fee.amount || 35;
        const unaccompanied = this.props.fee.amountUnaccompanied || 50;
        const unaccompaniedDiscount = this.props.fee.amountUnaccompaniedDiscount || 25;
        const discount = this.props.fee.amountDiscount || 17;
        const amountHalf = this.props.fee.amountHalf || 35;
        const unaccompaniedHalf = this.props.fee.amountUnaccompaniedHalf || 50;
        const unaccompaniedDiscountHalf = this.props.fee.amountUnaccompaniedDiscountHalf || 25;
        const discountHalf = this.props.fee.amountDiscountHalf || 17;
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("p", null, "Whole camp"),
                    React.createElement(reactstrap_1.Table, null,
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null),
                                React.createElement("th", null, "Standard Rates"),
                                React.createElement("th", null, "Discounted Rates"))),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "Unaccompanied Elfins, Pioneers & Venturers"),
                                React.createElement("td", null,
                                    React.createElement(reactstrap_1.FormGroup, null,
                                        React.createElement(reactstrap_1.InputGroup, null,
                                            React.createElement("div", { className: "input-group-prepend" },
                                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "50", value: unaccompanied, onChange: this.updateUnaccompaniedFee })))),
                                React.createElement("td", null,
                                    React.createElement(reactstrap_1.FormGroup, null,
                                        React.createElement(reactstrap_1.InputGroup, null,
                                            React.createElement("div", { className: "input-group-prepend" },
                                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "25", value: unaccompaniedDiscount, onChange: this.updateUnaccompaniedDiscountFee }))))),
                            React.createElement("tr", null,
                                React.createElement("td", null, "Elfins, Pioneers & Venturers accompanied by a responsible adult, DFs and Adults"),
                                React.createElement("td", null,
                                    React.createElement(reactstrap_1.FormGroup, null,
                                        React.createElement(reactstrap_1.InputGroup, null,
                                            React.createElement("div", { className: "input-group-prepend" },
                                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "35", value: amount, onChange: this.updateStandardFee })))),
                                React.createElement("td", null,
                                    React.createElement(reactstrap_1.FormGroup, null,
                                        React.createElement(reactstrap_1.InputGroup, null,
                                            React.createElement("div", { className: "input-group-prepend" },
                                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "17", value: discount, onChange: this.updateDiscountFee }))))))))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("p", null, "Half camp"),
                    React.createElement(reactstrap_1.Table, null,
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null),
                                React.createElement("th", null, "Standard Rates"),
                                React.createElement("th", null, "Discounted Rates"))),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "Unaccompanied Elfins, Pioneers & Venturers"),
                                React.createElement("td", null,
                                    React.createElement(reactstrap_1.FormGroup, null,
                                        React.createElement(reactstrap_1.InputGroup, null,
                                            React.createElement("div", { className: "input-group-prepend" },
                                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "50", value: unaccompaniedHalf, onChange: this.updateUnaccompaniedFeeHalf })))),
                                React.createElement("td", null,
                                    React.createElement(reactstrap_1.FormGroup, null,
                                        React.createElement(reactstrap_1.InputGroup, null,
                                            React.createElement("div", { className: "input-group-prepend" },
                                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "25", value: unaccompaniedDiscountHalf, onChange: this.updateUnaccompaniedDiscountFeeHalf }))))),
                            React.createElement("tr", null,
                                React.createElement("td", null, "Elfins, Pioneers & Venturers accompanied by a responsible adult, DFs and Adults"),
                                React.createElement("td", null,
                                    React.createElement(reactstrap_1.FormGroup, null,
                                        React.createElement(reactstrap_1.InputGroup, null,
                                            React.createElement("div", { className: "input-group-prepend" },
                                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "35", value: amountHalf, onChange: this.updateStandardFeeHalf })))),
                                React.createElement("td", null,
                                    React.createElement(reactstrap_1.FormGroup, null,
                                        React.createElement(reactstrap_1.InputGroup, null,
                                            React.createElement("div", { className: "input-group-prepend" },
                                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "17", value: discountHalf, onChange: this.updateDiscountFeeHalf })))))))))));
    }
}
exports.Config = Config;
class BookingForm extends React.Component {
    render() {
        const accompanied = this.props.participants.find(p => (0, moment_1.default)(this.props.event.startDate).diff((0, moment_1.default)(p.age), 'years') > 15) === undefined ? false : true;
        const amount = this.props.feeData.amount || 35;
        const unaccompanied = this.props.feeData.amountUnaccompanied || 50;
        const unaccompaniedDiscount = this.props.feeData.amountUnaccompaniedDiscount || 25;
        const discount = this.props.feeData.amountDiscount || 17;
        const amountHalf = this.props.feeData.amountHalf || 35;
        const unaccompaniedHalf = this.props.feeData.amountUnaccompaniedHalf || 50;
        const unaccompaniedDiscountHalf = this.props.feeData.amountUnaccompaniedDiscountHalf || 25;
        const discountHalf = this.props.feeData.amountDiscountHalf || 17;
        const feesOwed = getFeesOwed(this.props.event, this.props.booking.participants, this.props.booking);
        const tableLines = feesOwed.map(l => React.createElement("tr", { key: l.line },
            React.createElement("td", null, l.line),
            React.createElement("td", null,
                React.createElement(react_currency_formatter_1.default, { quantity: l.total, currency: "GBP" }))));
        return (React.createElement(reactstrap_1.Col, null,
            React.createElement(reactstrap_1.Table, null,
                React.createElement("thead", null),
                React.createElement("tbody", null,
                    tableLines,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("b", null, "Total:")),
                        React.createElement("td", null,
                            React.createElement("b", null,
                                React.createElement(react_currency_formatter_1.default, { quantity: feesOwed.reduce((a, c) => {
                                        return a + c.total;
                                    }, 0), currency: "GBP" }),
                                " (discount: ",
                                React.createElement(react_currency_formatter_1.default, { quantity: feesOwed.reduce((a, c) => {
                                        return a + c.discountTotal;
                                    }, 0), currency: "GBP" }),
                                ")"))))),
            React.createElement("p", null,
                "The ",
                React.createElement("b", null, "discounted donation"),
                " is offered to all families/individuals where there is no wage earner and/or the family/individual is on a low wage. This would include DFs and students as well as adults and families. Cost should never be a reason for people being unable to attend camp so please contact us if you need further discount.")));
        /*
            return (<div className="col-sm-12">
                <table className="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Suggested Donation</th>
                        <th>Discounted Donation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Unaccompanied Elfins, Pioneers &amp; Venturers</td>
                        <td>£{unaccompanied.toFixed(2)}</td>
                        <td>£{unaccompaniedDiscount.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Elfins, Pioneers &amp; Venturers accompanied by a responsible adult, DFs and Adults</td>
                        <td>£{amount.toFixed(2)}</td>
                        <td>£{discount.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td><b>My
                            Booking</b> ({this.props.participants.length} {this.props.participants.length < 2 ? "person" : "people"}, {accompanied ? "Accompanied" : "Unaccompanied"})
                        </td>
                        <td><b>£{total.toFixed(2)}</b></td>
                        <td><b>£{totalDiscounted.toFixed(2)}</b></td>
                    </tr>
                    </tbody>
                </table>
                <p>In order for us to utilise Gift Aid the camp price has been changed to a suggested donation. If you have
                    the means to donate more than the donations listed above then please do so as this will allow us to
                    further subsidise poorer individuals and families. The <b>discounted donation</b> is offered to all
                    families/individuals where there is no wage earner and/or the family/individual is on a low wage. This
                    would include DFs and students as well as adults and families. Cost should never be a reason for people
                    being unable to attend camp so please contact us if you need further discount. Please make cheques
                    payable to Ealing District Woodcraft Folk.</p>
            </div>)
         */
    }
}
exports.BookingForm = BookingForm;
class ThanksRow extends React.Component {
    render() {
        //this.props.participants
        //this.props.event.startDate
        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.booking.participants, this.props.booking);
        const tableLines = feesOwed.map(l => React.createElement("tr", { key: l.line },
            React.createElement("td", null, l.line),
            React.createElement("td", null,
                React.createElement(react_currency_formatter_1.default, { quantity: l.total, currency: "GBP" }))));
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null),
                    React.createElement("tbody", null,
                        tableLines,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("b", null, "Total:")),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    React.createElement(react_currency_formatter_1.default, { quantity: feesOwed.reduce((a, c) => {
                                            return a + c.total;
                                        }, 0), currency: "GBP" }),
                                    " (discount: ",
                                    React.createElement(react_currency_formatter_1.default, { quantity: feesOwed.reduce((a, c) => {
                                            return a + c.discountTotal;
                                        }, 0), currency: "GBP" }),
                                    ")"))))))));
    }
}
exports.ThanksRow = ThanksRow;
function emailHTML(event, booking) {
    const rows = getFeesOwed(event, booking.participants, booking).map((r, i) => React.createElement("tr", { key: i },
        React.createElement("td", null, r.line),
        React.createElement("td", null,
            React.createElement("b", null,
                "\u00A3",
                r.total))));
    const total = rows.length > 1 ? React.createElement("tr", null,
        React.createElement("td", null,
            React.createElement("b", null, "Total")),
        React.createElement("td", null,
            React.createElement("b", null,
                "\u00A3",
                getFeesOwed(event, booking.participants, booking).reduce((a, c) => {
                    return a + c.total;
                }, 0),
                " (discount: \u00A3",
                getFeesOwed(event, booking.participants, booking).reduce((a, c) => {
                    return a + c.discountTotal;
                }, 0),
                ")"))) : null;
    return (React.createElement(react_html_email_1.Item, null,
        React.createElement("p", null,
            React.createElement("b", null, "Money:")),
        React.createElement("table", null,
            React.createElement("tbody", null,
                rows,
                total))));
}
exports.emailHTML = emailHTML;
function getFeesOwed(event, participants, booking) {
    const accompanied = participants.find(p => (0, moment_1.default)(event.startDate).diff((0, moment_1.default)(p.age), 'years') > 15) !== undefined;
    const amount = event.feeData.amount || 35;
    const unaccompanied = event.feeData.amountUnaccompanied || 50;
    const unaccompaniedDiscount = event.feeData.amountUnaccompaniedDiscount || 25;
    const discount = event.feeData.amountDiscount || 17;
    const amountHalf = event.feeData.amountHalf || 35;
    const unaccompaniedHalf = event.feeData.amountUnaccompaniedHalf || 50;
    const unaccompaniedDiscountHalf = event.feeData.amountUnaccompaniedDiscountHalf || 25;
    const discountHalf = event.feeData.amountDiscountHalf || 17;
    const filteredParticipants = (0, cloneDeep_1.default)(participants)
        .filter(p => p.name && p.age)
        .filter(p => !isUnderFive(event, p))
        .map(p => {
        if (!p.updatedAt)
            p.updatedAt = (0, moment_1.default)().format("YYYY-MM-DD");
        p.days = event.partialDatesData.find(d => d.mask === p.days);
        p.days = p.days ? p.days.name : event.partialDatesData[0].name;
        return p;
    });
    const lines = event.partialDatesData.map(d => {
        const people = filteredParticipants.filter(p => p.days === d.name).length;
        const isWhole = d.mask === event.partialDatesData[0].mask;
        if (isWhole) {
            if (accompanied) {
                const total = people * amount;
                const discountTotal = people * discount;
                const line = `${people} ${people < 2 ? "person" : "people"}, accompanied for the whole camp (Discount: £${discountTotal})`;
                return { line: line, total: total, discountTotal: discountTotal };
            }
            else {
                const total = people * unaccompanied;
                const discountTotal = people * unaccompaniedDiscount;
                const line = `${people} ${people < 2 ? "person" : "people"}, unaccompanied for the whole camp (Discount: £${discountTotal})`;
                return { line: line, total: total, discountTotal: discountTotal };
            }
        }
        else {
            if (accompanied) {
                const total = people * amountHalf;
                const discountTotal = people * discountHalf;
                const line = `${people} ${people < 2 ? "person" : "people"}, accompanied for half the camp (Discount: £${discountTotal})`;
                return { line: line, total: total, discountTotal: discountTotal };
            }
            else {
                const total = people * unaccompaniedHalf;
                const discountTotal = people * unaccompaniedDiscountHalf;
                const line = `${people} ${people < 2 ? "person" : "people"}, unaccompanied for half the camp (Discount: £${discountTotal})`;
                return { line: line, total: total, discountTotal: discountTotal };
            }
        }
    }).filter(l => l.total > 0);
    return [...lines, ...underFives(event, participants)];
    /*
    const total = participants.length * (accompanied ? amount : unaccompanied);
    const totalDiscounted = participants.length * (accompanied ? discount : unaccompaniedDiscount);

    const line = `${participants.length} ${participants.length < 2 ? "person" : "people"}, ${accompanied ? "Accompanied" : "Unaccompanied"} (Discount: £${totalDiscounted})`;

    return [{line: line, total: total.toFixed(2)}];

     */
}
exports.getFeesOwed = getFeesOwed;
const underFives = (event, participants) => {
    const filteredParticipants = (0, cloneDeep_1.default)(participants)
        .filter(p => p.name && p.age)
        .filter(p => isUnderFive(event, p));
    if (filteredParticipants.length > 0)
        return [{
                line: `${filteredParticipants.length} ${filteredParticipants.length > 1 ? 'people' : 'person'} under five for free`,
                total: 0
            }];
    else
        return [];
};
const isUnderFive = (e, p) => {
    return Date.parse(e.startDate) - Date.parse(p.age) < 157784630000;
};


/***/ }),

/***/ "./src/shared/fee/ealing.tsx":
/*!***********************************!*\
  !*** ./src/shared/fee/ealing.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFeesOwed = exports.emailHTML = exports.ThanksRow = exports.BookingForm = exports.Config = exports.selection = exports.name = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_html_email_1 = __webpack_require__(/*! react-html-email */ "./node_modules/react/index.js");
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
//this implements Ealing's camp pricing policy.
exports.name = "ealing";
exports.selection = "Ealing Pricing Policy";
class Config extends React.Component {
    constructor(props) {
        super(props);
        this.updateStandardFee = this.updateStandardFee.bind(this);
        this.updateDiscountFee = this.updateDiscountFee.bind(this);
        this.updateUnaccompaniedFee = this.updateUnaccompaniedFee.bind(this);
        this.updateUnaccompaniedDiscountFee = this.updateUnaccompaniedDiscountFee.bind(this);
    }
    updateStandardFee(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amount: { $set: parseFloat(e.target.value) } }));
    }
    updateDiscountFee(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amountDiscount: { $set: parseFloat(e.target.value) } }));
    }
    updateUnaccompaniedFee(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amountUnaccompanied: { $set: parseFloat(e.target.value) } }));
    }
    updateUnaccompaniedDiscountFee(e) {
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { amountUnaccompaniedDiscount: { $set: parseFloat(e.target.value) } }));
    }
    render() {
        //Thou shalt not ever use JS numbers for currency...
        const amount = this.props.fee.amount || 35;
        const unaccompanied = this.props.fee.amountUnaccompanied || 50;
        const unaccompaniedDiscount = this.props.fee.amountUnaccompaniedDiscount || 25;
        const discount = this.props.fee.amountDiscount || 17;
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null),
                            React.createElement("th", null, "Standard Rates"),
                            React.createElement("th", null, "Discounted Rates"))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "Unaccompanied Elfins, Pioneers & Venturers"),
                            React.createElement("td", null,
                                React.createElement(reactstrap_1.FormGroup, null,
                                    React.createElement(reactstrap_1.InputGroup, null,
                                        React.createElement("div", { className: "input-group-prepend" },
                                            React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                        React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "50", value: unaccompanied, onChange: this.updateUnaccompaniedFee })))),
                            React.createElement("td", null,
                                React.createElement(reactstrap_1.FormGroup, null,
                                    React.createElement(reactstrap_1.InputGroup, null,
                                        React.createElement("div", { className: "input-group-prepend" },
                                            React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                        React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "25", value: unaccompaniedDiscount, onChange: this.updateUnaccompaniedDiscountFee }))))),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Elfins, Pioneers & Venturers accompanied by a responsible adult, DFs and Adults"),
                            React.createElement("td", null,
                                React.createElement(reactstrap_1.FormGroup, null,
                                    React.createElement(reactstrap_1.InputGroup, null,
                                        React.createElement("div", { className: "input-group-prepend" },
                                            React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                        React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "35", value: amount, onChange: this.updateStandardFee })))),
                            React.createElement("td", null,
                                React.createElement(reactstrap_1.FormGroup, null,
                                    React.createElement(reactstrap_1.InputGroup, null,
                                        React.createElement("div", { className: "input-group-prepend" },
                                            React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                        React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "17", value: discount, onChange: this.updateDiscountFee }))))))))));
    }
}
exports.Config = Config;
class BookingForm extends React.Component {
    render() {
        const accompanied = this.props.participants.find(p => (0, moment_1.default)(this.props.event.startDate).diff((0, moment_1.default)(p.age), 'years') > 15) === undefined ? false : true;
        const amount = this.props.feeData.amount || 35;
        const unaccompanied = this.props.feeData.amountUnaccompanied || 50;
        const unaccompaniedDiscount = this.props.feeData.amountUnaccompaniedDiscount || 25;
        const discount = this.props.feeData.amountDiscount || 17;
        const total = this.props.participants.length * (accompanied ? amount : unaccompanied);
        const totalDiscounted = this.props.participants.length * (accompanied ? discount : unaccompaniedDiscount);
        return (React.createElement("div", { className: "col-sm-12" },
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null),
                        React.createElement("th", null, "Suggested Donation"),
                        React.createElement("th", null, "Discounted Donation"))),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "Unaccompanied Elfins, Pioneers & Venturers"),
                        React.createElement("td", null,
                            "\u00A3",
                            unaccompanied.toFixed(2)),
                        React.createElement("td", null,
                            "\u00A3",
                            unaccompaniedDiscount.toFixed(2))),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Elfins, Pioneers & Venturers accompanied by a responsible adult, DFs and Adults"),
                        React.createElement("td", null,
                            "\u00A3",
                            amount.toFixed(2)),
                        React.createElement("td", null,
                            "\u00A3",
                            discount.toFixed(2))),
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("b", null, "My Booking"),
                            " (",
                            this.props.participants.length,
                            " ",
                            this.props.participants.length < 2 ? "person" : "people",
                            ", ",
                            accompanied ? "Accompanied" : "Unaccompanied",
                            ")"),
                        React.createElement("td", null,
                            React.createElement("b", null,
                                "\u00A3",
                                total.toFixed(2))),
                        React.createElement("td", null,
                            React.createElement("b", null,
                                "\u00A3",
                                totalDiscounted.toFixed(2)))))),
            React.createElement("p", null,
                "In order for us to utilise Gift Aid the camp price has been changed to a suggested donation. If you have the means to donate more than the donations listed above then please do so as this will allow us to further subsidise poorer individuals and families. The ",
                React.createElement("b", null, "discounted donation"),
                " is offered to all families/individuals where there is no wage earner and/or the family/individual is on a low wage. This would include DFs and students as well as adults and families. Cost should never be a reason for people being unable to attend camp so please contact us if you need further discount. Please make cheques payable to Ealing District Woodcraft Folk.")));
    }
}
exports.BookingForm = BookingForm;
class ThanksRow extends React.Component {
    render() {
        const accompanied = this.props.booking.participants.find(p => (0, moment_1.default)(this.props.event.startDate).diff((0, moment_1.default)(p.age), 'years') > 15) === undefined ? false : true;
        const amount = this.props.event.feeData.amount || 35;
        const unaccompanied = this.props.event.feeData.amountUnaccompanied || 50;
        const unaccompaniedDiscount = this.props.event.feeData.amountUnaccompaniedDiscount || 25;
        const discount = this.props.event.feeData.amountDiscount || 17;
        const total = this.props.booking.participants.length * (accompanied ? amount : unaccompanied);
        const totalDiscounted = this.props.booking.participants.length * (accompanied ? discount : unaccompaniedDiscount);
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null),
                            React.createElement("th", null, "Suggested Donation"),
                            React.createElement("th", null, "Discounted Donation"))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "Unaccompanied Elfins, Pioneers & Venturers"),
                            React.createElement("td", null,
                                "\u00A3",
                                unaccompanied.toFixed(2)),
                            React.createElement("td", null,
                                "\u00A3",
                                unaccompaniedDiscount.toFixed(2))),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Elfins, Pioneers & Venturers accompanied by a responsible adult, DFs and Adults"),
                            React.createElement("td", null,
                                "\u00A3",
                                amount.toFixed(2)),
                            React.createElement("td", null,
                                "\u00A3",
                                discount.toFixed(2))),
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("b", null, "My Booking"),
                                " (",
                                this.props.booking.participants.length,
                                " ",
                                this.props.booking.participants.length < 2 ? "person" : "people",
                                ", ",
                                accompanied ? "Accompanied" : "Unaccompanied",
                                ")"),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    "\u00A3",
                                    total.toFixed(2))),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    "\u00A3",
                                    totalDiscounted.toFixed(2)))))))));
    }
}
exports.ThanksRow = ThanksRow;
function emailHTML(event, booking) {
    const rows = getFeesOwed(event, booking.participants, booking).map((r, i) => React.createElement("tr", { key: i },
        React.createElement("td", null, r.line),
        React.createElement("td", null,
            React.createElement("b", null,
                "\u00A3",
                r.total))));
    return (React.createElement(react_html_email_1.Item, null,
        React.createElement("p", null,
            React.createElement("b", null, "Money:")),
        React.createElement("table", null,
            React.createElement("tbody", null, rows))));
}
exports.emailHTML = emailHTML;
function getFeesOwed(event, participants, booking) {
    const accompanied = participants.find(p => (0, moment_1.default)(event.startDate).diff((0, moment_1.default)(p.age), 'years') > 15) === undefined ? false : true;
    const amount = event.feeData.amount || 35;
    const unaccompanied = event.feeData.amountUnaccompanied || 50;
    const unaccompaniedDiscount = event.feeData.amountUnaccompaniedDiscount || 25;
    const discount = event.feeData.amountDiscount || 17;
    const total = participants.length * (accompanied ? amount : unaccompanied);
    const totalDiscounted = participants.length * (accompanied ? discount : unaccompaniedDiscount);
    const line = `${participants.length} ${participants.length < 2 ? "person" : "people"}, ${accompanied ? "Accompanied" : "Unaccompanied"} (Discount: £${totalDiscounted})`;
    return [{ line: line, total: total.toFixed(2) }];
}
exports.getFeesOwed = getFeesOwed;


/***/ }),

/***/ "./src/shared/fee/feeFactory.ts":
/*!**************************************!*\
  !*** ./src/shared/fee/feeFactory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const feeMatrix = {
    free: {
        whole: __webpack_require__(/*! ./free */ "./src/shared/fee/free.tsx"),
        free: __webpack_require__(/*! ./free */ "./src/shared/fee/free.tsx"),
        presets: __webpack_require__(/*! ./free */ "./src/shared/fee/free.tsx")
    },
    flat: {
        whole: __webpack_require__(/*! ./flat */ "./src/shared/fee/flat.tsx"),
        free: __webpack_require__(/*! ./flat */ "./src/shared/fee/flat.tsx"),
        presets: __webpack_require__(/*! ./flat */ "./src/shared/fee/flat.tsx")
    },
    ealing: {
        whole: __webpack_require__(/*! ./ealing */ "./src/shared/fee/ealing.tsx"),
        free: __webpack_require__(/*! ./ealing */ "./src/shared/fee/ealing.tsx"),
        presets: __webpack_require__(/*! ./ealing-cg */ "./src/shared/fee/ealing-cg.tsx"),
    },
    big: {
        whole: __webpack_require__(/*! ./big */ "./src/shared/fee/big.tsx"),
        free: __webpack_require__(/*! ./free */ "./src/shared/fee/free.tsx"),
        presets: __webpack_require__(/*! ./big */ "./src/shared/fee/big.tsx")
    },
    vcamp: {
        whole: __webpack_require__(/*! ./free */ "./src/shared/fee/free.tsx"),
        free: __webpack_require__(/*! ./vcamp-free */ "./src/shared/fee/vcamp-free.tsx"),
        presets: __webpack_require__(/*! ./free */ "./src/shared/fee/free.tsx")
    },
    commonground: {
        whole: __webpack_require__(/*! ./free */ "./src/shared/fee/free.tsx"),
        free: __webpack_require__(/*! ./free */ "./src/shared/fee/free.tsx"),
        presets: __webpack_require__(/*! ./cg-preset */ "./src/shared/fee/cg-preset.tsx")
    }
};
function getFeeModel(event) {
    return feeMatrix[event.feeModel][event.partialDates];
}
;
exports["default"] = getFeeModel;


/***/ }),

/***/ "./src/shared/fee/flat.tsx":
/*!*********************************!*\
  !*** ./src/shared/fee/flat.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFeesOwed = exports.emailHTML = exports.ThanksRow = exports.BookingForm = exports.Config = exports.selection = exports.name = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
//This event has a flat per participant cost.
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_currency_formatter_1 = __importDefault(__webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js"));
const react_html_email_1 = __webpack_require__(/*! react-html-email */ "./node_modules/react/index.js");
const payment_lines_1 = __importDefault(__webpack_require__(/*! ./payment-lines */ "./src/shared/fee/payment-lines.ts"));
exports.name = "flat";
exports.selection = "Flat fee per participant";
class Config extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }
    update(e) {
        const fee = { amount: e.target.value };
        this.props.update(fee);
    }
    render() {
        const amount = this.props.fee.amount || "";
        return (React.createElement(reactstrap_1.FormGroup, { row: true },
            React.createElement(reactstrap_1.Label, { sm: 3 }, "Fee per participant:"),
            React.createElement(reactstrap_1.Col, { sm: 9 },
                React.createElement(reactstrap_1.InputGroup, null,
                    React.createElement("div", { className: "input-group-prepend" },
                        React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                    React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "35", value: amount, onChange: this.update })))));
    }
}
exports.Config = Config;
class BookingForm extends React.Component {
    render() {
        const participants = this.props.participants ? this.props.participants.length : 0;
        const total = this.props.feeData.amount * participants;
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement("p", null,
                    "This event costs \u00A3",
                    this.props.feeData.amount,
                    " per person."),
                React.createElement("p", null,
                    "You have booked ",
                    React.createElement("b", null, participants),
                    " ",
                    `${participants > 1 ? 'people' : 'person'}`,
                    " for a total of ",
                    React.createElement("b", null,
                        "\u00A3",
                        total)))));
    }
}
exports.BookingForm = BookingForm;
class ThanksRow extends React.Component {
    render() {
        const participants = this.props.booking.participants ? this.props.booking.participants.length : 0;
        const total = this.props.event.feeData.amount * participants;
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement("p", null,
                    "This event costs \u00A3",
                    this.props.event.feeData.amount,
                    " per person."),
                React.createElement("p", null,
                    "You have booked ",
                    React.createElement("b", null, participants),
                    " ",
                    `${participants > 1 ? 'people' : 'person'}`,
                    " for a total of ",
                    React.createElement("b", null,
                        "\u00A3",
                        total)))));
    }
}
exports.ThanksRow = ThanksRow;
function emailHTML(event, booking) {
    const rows = getFeesOwed(event, booking.participants, booking).map((r, i) => React.createElement("tr", { key: i },
        React.createElement("td", null,
            r.line,
            ": "),
        React.createElement("td", null,
            React.createElement("b", null,
                React.createElement(react_currency_formatter_1.default, { quantity: r.total, currency: "GBP" })))));
    const total = rows.length > 1 ? React.createElement("tr", null,
        React.createElement("td", null,
            React.createElement("b", null, "Total")),
        React.createElement("td", null,
            React.createElement("b", null,
                React.createElement(react_currency_formatter_1.default, { quantity: getFeesOwed(event, booking.participants, booking).reduce((a, c) => {
                        return a + c.total;
                    }, 0), currency: "GBP" })))) : null;
    return (React.createElement(react_html_email_1.Item, null,
        React.createElement("p", null,
            React.createElement("b", null, "Money:")),
        React.createElement("table", null,
            React.createElement("tbody", null,
                rows,
                total))));
}
exports.emailHTML = emailHTML;
function getFeesOwed(event, participants, booking, payments = true) {
    const people = participants.length;
    const result = {
        line: `${people} ${people > 1 ? 'people' : 'person'} at £${event.feeData.amount}`,
        total: event.feeData.amount * people
    };
    return [result, ...(payments ? (0, payment_lines_1.default)(event, participants, booking) : [])];
}
exports.getFeesOwed = getFeesOwed;


/***/ }),

/***/ "./src/shared/fee/free.tsx":
/*!*********************************!*\
  !*** ./src/shared/fee/free.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emailHTML = exports.ThanksRow = exports.BookingForm = exports.Config = exports.selection = exports.name = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_html_email_1 = __webpack_require__(/*! react-html-email */ "./node_modules/react/index.js");
//this represents a free event whereby no fees are expected/managed by the system.
exports.name = "free";
exports.selection = "Free Event (don't manage fees)";
const Config = () => React.createElement("p", null, "Nothing to decide3");
exports.Config = Config;
const BookingForm = (props) => React.createElement("p", null, "This is free event, no money involved");
exports.BookingForm = BookingForm;
const ThanksRow = (props) => null;
exports.ThanksRow = ThanksRow;
function emailHTML(event, booking) {
    return (React.createElement(react_html_email_1.Item, null));
}
exports.emailHTML = emailHTML;


/***/ }),

/***/ "./src/shared/fee/payment-lines.ts":
/*!*****************************************!*\
  !*** ./src/shared/fee/payment-lines.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
function paymentLines(event, participants, booking) {
    if (!booking.payments)
        return [];
    const adjustments = booking.payments.filter(p => p.type === "adjustment");
    const payments = booking.payments.filter(p => p.type === "payment");
    return [...adjustments.map(a => {
            return { total: a.amount, line: a.note };
        }),
        ...payments.map(p => {
            return { total: -p.amount, line: `Payment recorded ${(0, moment_1.default)(p.createdAt).format('L')} ${p.note}` };
        })
    ];
}
exports["default"] = paymentLines;


/***/ }),

/***/ "./src/shared/fee/vcamp-free.tsx":
/*!***************************************!*\
  !*** ./src/shared/fee/vcamp-free.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFeesOwed = exports.emailHTML = exports.ThanksRow = exports.BookingForm = exports.Config = exports.selection = exports.name = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const immutability_helper_1 = __importDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));
const cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));
const map_1 = __importDefault(__webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"));
const reduce_1 = __importDefault(__webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js"));
const react_markdown_1 = __importDefault(__webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js"));
const popcount_1 = __importDefault(__webpack_require__(/*! @f/popcount */ "./node_modules/@f/popcount/lib/index.js"));
//this implements a pricing policy for large camps
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_html_email_1 = __webpack_require__(/*! react-html-email */ "./node_modules/react/index.js");
let bucketKey = Math.random() * 10000;
exports.name = "big";
exports.selection = "Big Camp Pricing Policy";
class Config extends React.Component {
    constructor(props) {
        super(props);
        this.addBucket = this.addBucket.bind(this);
        this.deleteBucket = this.deleteBucket.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.update = this.update.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
    }
    update(field) {
        return e => {
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { [field]: { $set: e.target.value } }));
            e.preventDefault();
        };
    }
    updateDate(id) {
        return e => {
            const buckets = (0, cloneDeep_1.default)(this.props.fee.buckets);
            buckets.forEach(b => {
                if (b.id === id)
                    b.date = e.target.value;
            });
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
            e.preventDefault();
        };
    }
    updateAmount(id) {
        return item => e => {
            const buckets = (0, cloneDeep_1.default)(this.props.fee.buckets);
            buckets.forEach(b => {
                if (b.id === id)
                    b[item] = e.target.value;
            });
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
            e.preventDefault();
        };
    }
    addBucket(e) {
        const buckets = [...(this.props.fee.buckets || [])];
        buckets.push({ id: "bucket" + bucketKey, date: new Date() });
        bucketKey++;
        this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
        e.preventDefault();
    }
    deleteBucket(id) {
        return e => {
            const buckets = (0, cloneDeep_1.default)(this.props.fee.buckets).filter(b => b.id !== id);
            this.props.update((0, immutability_helper_1.default)(this.props.fee, { buckets: { $set: buckets } }));
            e.preventDefault();
        };
    }
    render() {
        //Thou shalt not ever use JS numbers for currency...
        const dateBuckets = this.props.fee.buckets || [];
        const bucketRows = dateBuckets.map(b => {
            const feeBoxes = React.createElement(React.Fragment, null,
                React.createElement(reactstrap_1.FormGroup, { row: true },
                    React.createElement(reactstrap_1.Label, { sm: 4 }, "Whole Event:"),
                    React.createElement(reactstrap_1.Col, { sm: 8 },
                        React.createElement(reactstrap_1.InputGroup, null,
                            React.createElement("div", { className: "input-group-prepend" },
                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", value: b.whole, onChange: this.updateAmount(b.id)('whole') })))),
                React.createElement("p", null, "Partial attendance fee = A + B * (nights attending)"),
                React.createElement(reactstrap_1.FormGroup, { row: true },
                    React.createElement(reactstrap_1.Label, { sm: 2 }, "A:"),
                    React.createElement(reactstrap_1.Col, { sm: 4 },
                        React.createElement(reactstrap_1.InputGroup, null,
                            React.createElement("div", { className: "input-group-prepend" },
                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "35", value: b.a, onChange: this.updateAmount(b.id)('a') }))),
                    React.createElement(reactstrap_1.Label, { sm: 2 }, "B:"),
                    React.createElement(reactstrap_1.Col, { sm: 4 },
                        React.createElement(reactstrap_1.InputGroup, null,
                            React.createElement("div", { className: "input-group-prepend" },
                                React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                            React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "35", value: b.b, onChange: this.updateAmount(b.id)('b') })))));
            return React.createElement("tr", { key: b.id },
                React.createElement("td", null,
                    React.createElement(reactstrap_1.Input, { type: "date", onChange: this.updateDate(b.id), value: (0, moment_1.default)(b.date).format("YYYY-MM-DD") })),
                React.createElement("td", null, feeBoxes),
                React.createElement("td", null,
                    React.createElement(reactstrap_1.Button, { onClick: this.deleteBucket(b.id), color: "warning" },
                        React.createElement("span", { style: { color: 'white' } },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes })))));
        });
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, null, "Description (Markdown supported):"),
                        React.createElement(reactstrap_1.Input, { type: "textarea", name: "description", value: this.props.fee.desc, onChange: this.update('desc') })))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h4", null, "Date buckets"),
                    React.createElement(reactstrap_1.Table, null,
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "Up Until Date"),
                                React.createElement("th", null, "Fee"),
                                React.createElement("th", null))),
                        React.createElement("tbody", null, bucketRows)),
                    React.createElement(reactstrap_1.Button, { onClick: this.addBucket }, "Add Bucket"))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.FormGroup, { row: true },
                        React.createElement(reactstrap_1.Label, { sm: 4 }, "Cancellation Fee:"),
                        React.createElement(reactstrap_1.Col, { sm: 2 },
                            React.createElement(reactstrap_1.InputGroup, null,
                                React.createElement("div", { className: "input-group-prepend" },
                                    React.createElement("span", { className: "input-group-text" }, "\u00A3")),
                                React.createElement(reactstrap_1.Input, { type: "number", className: "form-control", placeholder: "50", value: this.props.fee.cancel, onChange: this.update('cancel') }))))))));
    }
}
exports.Config = Config;
class BookingForm extends React.Component {
    render() {
        //this.props.participants
        //this.props.event.startDate
        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.participants, this.props.booking);
        const tableLines = feesOwed.map(l => React.createElement("tr", { key: l.line },
            React.createElement("td", null, l.line),
            React.createElement("td", null,
                "\u00A3",
                l.total)));
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { sm: 12 },
                React.createElement(react_markdown_1.default, { children: this.props.event.feeData.desc })),
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null),
                    React.createElement("tbody", null,
                        tableLines,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("b", null, "Total:")),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    "\u00A3",
                                    feesOwed.reduce((a, c) => {
                                        return a + c.total;
                                    }, 0)))))))));
    }
}
exports.BookingForm = BookingForm;
class ThanksRow extends React.Component {
    render() {
        //this.props.participants
        //this.props.event.startDate
        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.booking.participants, this.props.booking);
        const tableLines = feesOwed.map(l => React.createElement("tr", { key: l.line },
            React.createElement("td", null, l.line),
            React.createElement("td", null,
                "\u00A3",
                l.total)));
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.Table, null,
                    React.createElement("thead", null),
                    React.createElement("tbody", null,
                        tableLines,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("b", null, "Total:")),
                            React.createElement("td", null,
                                React.createElement("b", null,
                                    "\u00A3",
                                    feesOwed.reduce((a, c) => {
                                        return a + c.total;
                                    }, 0)))))))));
    }
}
exports.ThanksRow = ThanksRow;
function emailHTML(event, booking) {
    const rows = getFeesOwed(event, booking.participants, booking).map((r, i) => React.createElement("tr", { key: i },
        React.createElement("td", null, r.line),
        React.createElement("td", null,
            React.createElement("b", null,
                "\u00A3",
                r.total))));
    const total = rows.length > 1 ? React.createElement("tr", null,
        React.createElement("td", null,
            React.createElement("b", null, "Total")),
        React.createElement("td", null,
            React.createElement("b", null,
                "\u00A3",
                getFeesOwed(event, booking.participants, booking).reduce((a, c) => {
                    return a + c.total;
                }, 0)))) : null;
    return (React.createElement(react_html_email_1.Item, null,
        React.createElement("p", null,
            React.createElement("b", null, "Money:")),
        React.createElement("table", null,
            React.createElement("tbody", null,
                rows,
                total))));
}
exports.emailHTML = emailHTML;
function getFeesOwed(event, participants, booking) {
    switch (event.partialDates) {
        case 'whole':
            return owedWholeEvent(event, participants, booking);
        case 'presets':
            return owedPresetEvent(event, participants, booking);
        case 'free':
            return owedFreeEvent(event, participants, booking);
        default:
            return [{ line: "Unsupported attendance/fee combo", total: 0 }];
    }
}
exports.getFeesOwed = getFeesOwed;
const owedFreeEvent = (event, participants, booking) => {
    const wholeMask = 2 ** ((0, moment_1.default)(event.endDate).diff((0, moment_1.default)(event.startDate), 'days') + 1) - 1;
    const sortedBuckets = event.feeData.buckets.sort((a, b) => a.date < b.date ? 1 : a.date === b.date ? 0 : -1);
    const filteredParticipants = (0, cloneDeep_1.default)(participants)
        .filter(p => p.name && p.age && (p.days > 0))
        .map(p => {
        if (!p.updatedAt)
            p.updatedAt = (0, moment_1.default)().format("YYYY-MM-DD");
        return p;
    });
    const rawCosts = filteredParticipants.map(p => sortedBuckets.reduce((a, c) => {
        if (new Date(p.updatedAt) < new Date(c.date))
            return {
                type: p.days === wholeMask ? 'whole' : 'partial',
                days: (0, popcount_1.default)(p.days),
                date: c.date,
                fee: p.days === wholeMask ? parseInt(c.whole) : parseInt(c.a) + (parseInt(c.b) * ((0, popcount_1.default)(p.days) - 1))
            };
        else
            return a;
    }, {}));
    const combinedCosts = rawCosts.reduce((a, c) => {
        a[c.date] = a[c.date] || {};
        a[c.date][c.days] = a[c.date][c.days] || { count: 0, fee: c.fee, type: c.type };
        a[c.date][c.days].count++;
        return a;
    }, {});
    //@ts-ignore
    const lines = (0, reduce_1.default)(combinedCosts, (a, c, i) => [...a, ...(0, reduce_1.default)(c, (a1, c1, i1) => [...a1, {
                //@ts-ignore
                line: `${c1.count} ${c1.count > 1 ? 'people' : 'person'} booked for ${c1.type === 'whole' ? 'whole event' : `${i1 - 1} nights`} before ${(0, moment_1.default)(i).format('MMMM Do YYYY')} at £${c1.fee}`,
                total: c1.count * c1.fee
            }], [])], []);
    return lines;
};
const owedWholeEvent = (event, participants, booking) => {
    const sortedBuckets = event.feeData.buckets.sort((a, b) => a.date < b.date ? 1 : a.date === b.date ? 0 : -1);
    const filteredParticipants = (0, cloneDeep_1.default)(participants)
        .filter(p => p.name && p.age)
        .map(p => {
        if (!p.updatedAt)
            p.updatedAt = (0, moment_1.default)().format("YYYY-MM-DD");
        return p;
    });
    const rawCosts = filteredParticipants.map(p => sortedBuckets.reduce((a, c) => {
        if (new Date(p.updatedAt) < new Date(c.date))
            return {
                type: isWoodchip(event, p) ? 'woodchip' : 'normal',
                date: c.date,
                mask: p.days,
                amount: c.amount * (isWoodchip(event, p) ? event.feeData.woodchips : 1)
            };
        else
            return a;
    }, {}));
    const combinedCosts = rawCosts.reduce((a, c) => {
        if (a[c.date] && a[c.date][c.type])
            a[c.date][c.type].count++;
        else {
            a[c.date] = a[c.date] || {};
            a[c.date][c.type] = { count: 1, amount: c.amount };
        }
        return a;
    }, {});
    return [...linesWithoutPartial(combinedCosts), ...cancelledFee(event, participants, booking)];
};
const owedPresetEvent = (event, participants, booking) => {
    const sortedBuckets = event.feeData.buckets.sort((a, b) => a.date < b.date ? 1 : a.date === b.date ? 0 : -1);
    const filteredParticipants = (0, cloneDeep_1.default)(participants)
        .filter(p => p.name && p.age)
        .map(p => {
        if (!p.updatedAt)
            p.updatedAt = (0, moment_1.default)().format("YYYY-MM-DD");
        p.days = event.partialDatesData.find(d => d.mask === p.days);
        p.days = p.days ? p.days.name : event.partialDatesData[0].name;
        return p;
    });
    const rawCosts = filteredParticipants.map(p => sortedBuckets.reduce((a, c) => {
        if (new Date(p.updatedAt) < new Date(c.date))
            return {
                type: isWoodchip(event, p) ? 'woodchip' : 'normal',
                date: c.date,
                mask: p.days,
                amount: c.amount[p.days] * (isWoodchip(event, p) ? event.feeData.woodchips : 1)
            };
        else
            return a;
    }, {}));
    const combinedCosts = rawCosts.reduce((a, c) => {
        if (a[c.date] && a[c.date][c.mask] && a[c.date][c.mask][c.type])
            a[c.date][c.mask][c.type].count++;
        else {
            a[c.date] = a[c.date] || {};
            a[c.date][c.mask] = a[c.date][c.mask] || {};
            a[c.date][c.mask][c.type] = { count: 1, amount: c.amount };
        }
        return a;
    }, {});
    return [...linesWithPartial(combinedCosts), ...cancelledFee(event, participants, booking)];
};
//@ts-ignore
const linesWithoutPartial = combined => (0, reduce_1.default)(combined, (a, c, i) => [...a, ...(0, map_1.default)(c, (l, t) => {
        if (t === 'normal')
            return {
                line: `${l.count} ${l.count > 1 ? 'people' : 'person'} booked before ${(0, moment_1.default)(i).format('MMMM Do YYYY')} at £${l.amount}`,
                total: l.count * l.amount
            };
        else
            return {
                line: `${l.count} ${l.count > 1 ? 'woodchips' : 'woodchip'} booked before ${(0, moment_1.default)(i).format('MMMM Do YYYY')} at £${l.amount}`,
                total: l.count * l.amount
            };
    })], []);
//@ts-ignore
const linesWithPartial = (combined) => (0, reduce_1.default)(combined, (a, c, i) => [...a, ...(0, reduce_1.default)(c, (a1, c1, i1) => [...a1, ...(0, map_1.default)(c1, (l, t) => {
            if (t === 'normal')
                return {
                    line: `${l.count} ${l.count > 1 ? 'people' : 'person'} booked for ${i1} before ${(0, moment_1.default)(i).format('MMMM Do YYYY')} at £${l.amount}`,
                    total: l.count * l.amount
                };
            else
                return {
                    line: `${l.count} ${l.count > 1 ? 'woodchips' : 'woodchip'} booked for ${i1} before ${(0, moment_1.default)(i).format('MMMM Do YYYY')} at £${l.amount}`,
                    total: l.count * l.amount
                };
        })], [])], []);
const cancelledFee = (event, participants, booking) => {
    if (!booking.maxParticipants || booking.maxParticipants <= participants.length || event.feeData.cancel === 0)
        return [];
    return [{
            line: `${booking.maxParticipants - participants.length} cancelled bookings at £${event.feeData.cancel}`,
            total: (booking.maxParticipants - participants.length) * event.feeData.cancel
        }];
};
const isWoodchip = (e, p) => {
    return Date.parse(e.startDate) - Date.parse(p.age) < 189216000000;
};


/***/ }),

/***/ "./src/shared/paymentReference.ts":
/*!****************************************!*\
  !*** ./src/shared/paymentReference.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//take a database id and output a payment reference.
function paymentReference(id) {
    if (!id || id === 0)
        throw new Error("Bad ID being used");
    return `CG-${(id * 66138411253) % 8933}`;
}
exports["default"] = paymentReference;


/***/ }),

/***/ "./src/shared/permissions.ts":
/*!***********************************!*\
  !*** ./src/shared/permissions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

//shared permission checks
//these functions are then wrapped by the client and server ready for use
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addPayment = exports.viewMoney = exports.createRole = exports.getUserList = exports.addVillage = exports.assignVillage = exports.bookIntoOrganisation = exports.editBooking = exports.decideApplication = exports.manageWholeEvent = exports.manageEvent = exports.viewVillage = exports.viewOrganisation = exports.viewBooking = exports.deleteBooking = exports.bookEvent = exports.applyToBookEvent = exports.createEvent = exports.editEvent = exports.isAdmin = void 0;
const isAdmin = (user) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can always
    return false;
};
exports.isAdmin = isAdmin;
const editEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can always
    return user.id === event.userId;
};
exports.editEvent = editEvent;
const createEvent = user => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can always
    return false;
};
exports.createEvent = createEvent;
const applyToBookEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin"))
        return false; //admin does not need to apply
    if (event.userId === user.id)
        return false; //owner can
    if (user.id === 1)
        return false; //guest can't apply
    if (user.roles.find(role => role.name === "book" && role.eventId === event.id))
        return false; //are we approved?
    if (user.applications.find(a => a.eventId === event.id))
        return false; //did we apply already?
    if (event.bookingPolicy === 'approved')
        return true; //event needs to be approved
    return false;
};
exports.applyToBookEvent = applyToBookEvent;
const bookEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can
    if (event.userId === user.id)
        return true; //owner can
    if (event.bookingPolicy === 'guest')
        return true; //anyone can book
    if (event.bookingPolicy === 'approved' && user.roles.find(role => role.name === "book" && role.eventId === event.id))
        return true; //booking approved
    if (event.bookingPolicy === 'registered'
        && user.roles.find(role => role.name === "book" && role.eventId === event.id))
        return true; //book role can book after deadline
    if (event.bookingPolicy === 'registered' && user.id !== 1 && new Date(event.bookingDeadline) > new Date())
        return true; //non guest can book registered events
    if (user.roles.find(role => role.eventId === event.id
        && role.name === "Manage"))
        return true; //anyone with event management permissions can.
    return false;
};
exports.bookEvent = bookEvent;
const deleteBooking = (user, event, booking) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can
    if (booking.userId === user.id)
        return true; //owner can
    if (event.userId === user.id)
        return true; //event owner can
    if (user.roles.find(role => role.eventId === booking.eventId
        && role.name === "Manage"
        && (role.villageId === null || role.villageId === booking.villageId)
        && (role.organisationId === null || role.organisationId === booking.organisationId)))
        return true; //event manager
};
exports.deleteBooking = deleteBooking;
const viewBooking = (user, booking) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can
    if (booking.userId === user.id)
        return true; //owner can
    if (booking.event.userId === user.id)
        return true; //event owner can
    if (user.roles.find(role => role.eventId === booking.eventId
        && (role.name === "Manage" || role.name === 'View')
        && (role.villageId === null || role.villageId === booking.villageId)
        && (role.organisationId === null || role.organisationId === booking.organisationId)))
        return true; //event manager
    return false;
};
exports.viewBooking = viewBooking;
const viewOrganisation = (user, event, organisation) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can
    if (event.userId === user.id)
        return true; //owner can
    if (user.roles.find(role => role.eventId === event.id
        && (role.organisationId === null || role.organisationId === organisation.id)))
        return true;
    return false;
};
exports.viewOrganisation = viewOrganisation;
const viewVillage = (user, event, village) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can
    if (event.userId === user.id)
        return true; //owner can
    if (user.roles.find(role => role.eventId === event.id
        && (role.villageId === null || role.villageId === village.id)))
        return true;
    return false;
};
exports.viewVillage = viewVillage;
const manageEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can always
    if (event.userId === user.id)
        return true; //event owner can manage
    if (user.roles.find(role => role.eventId === event.id && role.name !== "book"))
        return true; //do we have an event management role?
    return false;
};
exports.manageEvent = manageEvent;
const manageWholeEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can always
    if (event.userId === user.id)
        return true; //event owner can manage
    if (user.roles.find(role => role.eventId === event.id && role.name !== "book" && role.villageId === null && role.organisationId === null))
        return true; //do we have a whole event management role?
    return false;
};
exports.manageWholeEvent = manageWholeEvent;
const decideApplication = (user, event) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //admin can always
    if (event.userId === user.id)
        return true; //event owner can manage
    if (user.roles.find(role => role.eventId === event.id
        && role.name === "Manage"
        && role.villageId === null
        && role.organisationId === null))
        return true; //event manager
    return false;
};
exports.decideApplication = decideApplication;
const editBooking = (user, event, booking) => {
    if (user.roles.find(role => role.name === "admin"))
        return true; //naturally...
    if (booking.eventId !== event.id)
        return false; //do the booking/event match?
    if (user.id === booking.userId)
        return true; //booking owner can edit
    if (user.id === event.userId)
        return true; //event owner can edit
    if (user.roles.find(role => role.eventId === booking.eventId
        && role.name === "Manage"
        && (role.villageId === null || role.villageId === booking.villageId)
        && (role.organisationId === null || role.organisationId === booking.organisationId)))
        return true; //event/org/village manager can
    if (user.roles.find(role => role.eventId === event.id
        && role.name === "book"))
        return true; //do we have a book role?
    return false;
};
exports.editBooking = editBooking;
const bookIntoOrganisation = (user, event, booking, organisation) => {
    if (booking !== null && booking.organisationId === organisation.id)
        return true; //always allow previous org
    if (user.roles.find(r => r.name === "book"
        && r.eventId === event.id
        && r.organisationId !== null
        && r.organisationId !== organisation.id))
        return false; //we have a book role for another org in the event.
    return true;
};
exports.bookIntoOrganisation = bookIntoOrganisation;
const assignVillage = (user, event) => {
    return (0, exports.manageEvent)(user, event); //for now the same as an event manager, this will change
};
exports.assignVillage = assignVillage;
const addVillage = (user, event) => {
    return (0, exports.manageEvent)(user, event); //for now the same as an event manager, this will change
};
exports.addVillage = addVillage;
const getUserList = (user, event) => {
    if (user.id === event.userId)
        return true; //event owner can
    if (user.roles.find(role => role.name === "admin"))
        return true;
    if (user.roles.find(role => role.name === "create"))
        return true;
    if (user.roles.find(role => (role.name === "Manage" || role.name === "View") && role.organisationId === null && role.villageId === null))
        return true;
    return false;
};
exports.getUserList = getUserList;
const createRole = (user, event) => {
    if (user.roles.find(role => role.name === "admin"))
        return true;
    if (event === null)
        return false;
    if (user.id === event.userId)
        return true; //event owner can
    if (user.roles.find(role => role.eventId === event.id && role.name === "Manage" && role.villageId === null && role.organisationId === null))
        return true;
    return false;
};
exports.createRole = createRole;
const viewMoney = (user, event) => {
    if (user.roles.find(role => role.name === "admin"))
        return true;
    if (user.id === event.userId)
        return true; //event owner
    if (user.roles.find(role => role.name === "Money" && role.eventId === event.id))
        return true;
    return false;
};
exports.viewMoney = viewMoney;
const addPayment = (user, booking) => {
    if (user.roles.find(role => role.name === "admin"))
        return true;
    if (user.id === booking.event.userId)
        return true; //event owner can
    if (user.roles.find(role => role.name === "Money" && role.eventId === booking.event.id && role.organisationId === null))
        return true; //global money role
    if (user.roles.find(role => role.name === "Money" && role.eventId === booking.event.id && role.organisationId === booking.organisationId))
        return true; //org money
    return false;
};
exports.addPayment = addPayment;


/***/ }),

/***/ "./src/shared/woodcraft.js":
/*!*********************************!*\
  !*** ./src/shared/woodcraft.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "woodcraft": () => (/* binding */ woodcraft)
/* harmony export */ });
const moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
//this file contains age groups, etc

const woodcraft = [
    {
        name: "Woodchips",
        singular: "Woodchip",
        filter: age => {
            return age < 6
        },
        getAge: event => Moment(event.startDate).subtract(3, 'years').toISOString()
    },
    {
        name: "Elfins",
        singular: "Elfin",
        filter: age => {
            return age > 5 && age < 10
        },
        getAge: event => Moment(event.startDate).subtract(7, 'years').toISOString()
    },
    {
        name: "Pioneers",
        singular: "Pioneer",
        filter: age => {
            return age > 9 && age < 13
        },
        getAge: event => Moment(event.startDate).subtract(11, 'years').toISOString()
    },
    {
        name: "Venturers",
        singular: "Venturer",
        filter: age => {
            return age > 12 && age < 16
        },
        getAge: event => Moment(event.startDate).subtract(14, 'years').toISOString()
    },
    {
        name: "DFs/Adults",
        singular: "DF/Adult",
        filter: age => {
            return age > 15
        },
        getAge: event => Moment(event.startDate).subtract(19, 'years').toISOString()
    },
];

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "{}" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = {};

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
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
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbookings_serverless"] = self["webpackChunkbookings_serverless"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/front/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.app.js.map