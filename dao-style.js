/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(1);
	
	__webpack_require__(5);
	
	__webpack_require__(7);
	
	__webpack_require__(9);
	
	__webpack_require__(11);
	
	var _classHelper = __webpack_require__(19);
	
	var _classHelper2 = _interopRequireDefault(_classHelper);
	
	var _index = __webpack_require__(20);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(49);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _index5 = __webpack_require__(57);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _index7 = __webpack_require__(64);
	
	var _index8 = _interopRequireDefault(_index7);
	
	var _daoInputDirective = __webpack_require__(67);
	
	var _daoInputDirective2 = _interopRequireDefault(_daoInputDirective);
	
	var _daoDemoDirective = __webpack_require__(71);
	
	var _daoDemoDirective2 = _interopRequireDefault(_daoDemoDirective);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by yeting on 15/10/18.
	 */
	
	var app = angular.module('daoStyle', [_index2.default, _index4.default, _index6.default, _index8.default]);
	
	var appHelp = (0, _classHelper2.default)('daoStyle');
	
	app.directive('daoInput', _daoInputDirective2.default);
	
	appHelp.directive('daoDemoBlock', _daoDemoDirective2.default);
	
	exports.default = 'daoStyle';

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?minimize!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./dao.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?minimize!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./dao.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-button.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-button.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-btn{padding:0 16px;min-width:65px;height:33px;border:1px solid #ccd1d9;border-radius:16px;background-color:transparent;color:#434a54;font-size:14px;line-height:24px;outline:none;cursor:pointer}.dao-btn:focus,.dao-btn:hover{border:1px solid #aab2bd}.dao-btn.btn-disabled,.dao-btn[disabled]{color:#ccd1d9;border:1px solid #ccd1d9}.dao-btn.btn-disabled:focus,.dao-btn.btn-disabled:hover,.dao-btn[disabled]:focus,.dao-btn[disabled]:hover{border:1px solid #ccd1d9}.dao-btn.btn-primary{color:#fff;border:1px solid #5d9cec;background-color:#5d9cec}.dao-btn.btn-primary:focus,.dao-btn.btn-primary:hover{border:1px solid #4a89dc;background-color:#4a89dc}", ""]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-layout.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-layout.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "html.dao.layout body{height:100%;margin:0}.dao.layout,.dao.layout .layout-wrap{overflow:hidden;height:100%;margin:0}.dao.layout .layout-wrap{display:flex;flex-direction:row}.dao.layout .layout-sidebar{display:flex;flex:none}.dao.layout .layout-content{overflow:auto;flex:auto}.dao.layout .layout-content .content-body{padding:20px 40px}.dao.layout .layout-content.has-topbar{display:flex;flex-direction:column}.dao.layout .layout-content.has-topbar.has-topbar-fixed>.content-topbar{flex:none}.dao.layout .layout-content.has-topbar.has-topbar-fixed>.content-body{flex:auto;overflow:auto}", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-nav.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-nav.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.left-nav{width:60px;background-color:#3d444f}.dao.left-nav .nav-logo{margin:10px auto;width:40px;height:40px}.dao.left-nav .nav-item{display:flex;justify-content:center;cursor:pointer;width:30px;height:30px;padding:14px 15px}.dao.left-nav .nav-item svg{width:100%;height:100%;fill:#9ba3af;transition:fill .2s}.dao.left-nav .nav-item svg:hover{fill:#fff}.dao.top-nav{width:100%;height:40px;background-color:#fff;box-shadow:0 2px 5px #e4e7ed}.dao.top-nav *{box-sizing:border-box}.dao.left-nav .dao.tooltip.in{transform:translateX(5px);animation:tooltipMove .3s ease-out;opacity:1}@keyframes tooltipMove{0%{transform:translateX(-5px);opacity:0}to{transform:translateX(5px);opacity:1}}.dao.left-nav .dao.tooltip.in .tooltip-inner{padding:11px 16px;font-size:14px;background-color:#1f2126;border-radius:6px}.dao.left-nav .dao.tooltip.in .tooltip-arrow{border-width:7px;border-radius:0 0 0 3px;border-color:transparent transparent #1f2126 #1f2126;transform:rotate(45deg);margin-top:-7px}", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(12);
	
	__webpack_require__(15);
	
	__webpack_require__(16);
	
	__webpack_require__(17);
	
	__webpack_require__(18);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(13);;
	var image = "<symbol viewBox=\"0 0 47 45\" id=\"auto-messages\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M44.063,-0.000 C44.063,-0.000 33.781,6.839 33.781,6.839 C33.781,6.839 33.781,31.349 33.781,31.349 C33.781,31.349 44.063,38.188 44.063,38.188 C44.858,38.188 45.547,37.897 46.128,37.316 C46.710,36.734 47.000,36.046 47.000,35.250 C47.000,35.250 47.000,2.937 47.000,2.937 C47.000,2.142 46.710,1.453 46.128,0.872 C45.547,0.290 44.858,-0.000 44.063,-0.000 ZM-0.000,19.094 C-0.000,21.848 0.841,24.081 2.524,25.795 C4.207,27.509 6.318,28.610 8.858,29.100 C8.828,29.130 8.812,29.169 8.812,29.215 C8.812,29.260 8.812,29.314 8.812,29.375 C8.812,29.375 8.812,41.125 8.812,41.125 C8.812,41.921 9.103,42.609 9.684,43.191 C10.266,43.772 10.954,44.063 11.750,44.063 C11.750,44.063 16.156,44.063 16.156,44.063 C16.952,44.063 17.640,43.772 18.222,43.191 C18.803,42.609 19.094,41.921 19.094,41.125 C19.094,41.125 19.094,29.375 19.094,29.375 C19.094,29.375 23.500,29.375 23.500,29.375 C23.500,29.375 23.500,8.812 23.500,8.812 C23.500,8.812 11.750,8.812 11.750,8.812 C10.128,8.812 8.606,9.042 7.183,9.501 C5.760,9.960 4.513,10.633 3.442,11.520 C2.371,12.408 1.530,13.486 0.918,14.756 C0.306,16.026 -0.000,17.472 -0.000,19.094 ZM26.437,29.375 C26.437,29.375 30.844,29.375 30.844,29.375 C30.844,29.375 30.844,8.812 30.844,8.812 C30.844,8.812 26.437,8.812 26.437,8.812 C26.437,8.812 26.437,29.375 26.437,29.375 Z\" id=\"auto-messages_path-1\" class=\"cls-2\" fill-rule=\"evenodd\"/> </symbol>";
	module.exports = sprite.add(image, "auto-messages");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var Sprite = __webpack_require__(14);
	var globalSprite = new Sprite();
	
	if (document.body) {
	  globalSprite.elem = globalSprite.render(document.body);
	} else {
	  document.addEventListener('DOMContentLoaded', function () {
	    globalSprite.elem = globalSprite.render(document.body);
	  }, false);
	}
	
	module.exports = globalSprite;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * List of SVG attributes to fix url target in them
	 * @type {string[]}
	 */
	var fixAttributes = [
	  'clipPath',
	  'colorProfile',
	  'src',
	  'cursor',
	  'fill',
	  'filter',
	  'marker',
	  'markerStart',
	  'markerMid',
	  'markerEnd',
	  'mask',
	  'stroke'
	];
	
	/**
	 * Query to find'em
	 * @type {string}
	 */
	var fixAttributesQuery = '[' + fixAttributes.join('],[') + ']';
	/**
	 * @type {RegExp}
	 */
	var URI_FUNC_REGEX = /^url\((.*)\)$/;
	
	/**
	 * Convert array-like to array
	 * @param {Object} arrayLike
	 * @returns {Array.<*>}
	 */
	function arrayFrom(arrayLike) {
	  return Array.prototype.slice.call(arrayLike, 0);
	}
	
	/**
	 * Handles forbidden symbols which cannot be directly used inside attributes with url(...) content.
	 * Adds leading slash for the brackets
	 * @param {string} url
	 * @return {string} encoded url
	 */
	function encodeUrlForEmbedding(url) {
	  return url.replace(/\(|\)/g, "\\$&");
	}
	
	/**
	 * Replaces prefix in `url()` functions
	 * @param {Element} svg
	 * @param {string} currentUrlPrefix
	 * @param {string} newUrlPrefix
	 */
	function baseUrlWorkAround(svg, currentUrlPrefix, newUrlPrefix) {
	  var nodes = svg.querySelectorAll(fixAttributesQuery);
	
	  if (!nodes) {
	    return;
	  }
	
	  arrayFrom(nodes).forEach(function (node) {
	    if (!node.attributes) {
	      return;
	    }
	
	    arrayFrom(node.attributes).forEach(function (attribute) {
	      if (fixAttributes.indexOf(attribute.localName) !== -1) {
	        var match = URI_FUNC_REGEX.exec(node.getAttribute(attribute.localName));
	
	        // Do not touch urls with unexpected prefix
	        if (match && match[1].indexOf(currentUrlPrefix) === 0) {
	          var referenceUrl = encodeUrlForEmbedding(newUrlPrefix + match[1].split(currentUrlPrefix)[1]);
	          node.setAttribute(attribute.localName, 'url(' + referenceUrl + ')');
	        }
	      }
	    });
	  });
	}
	
	/**
	 * Because of Firefox bug #353575 gradients and patterns don't work if they are within a symbol.
	 * To workaround this we move the gradient definition outside the symbol element
	 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
	 * @param {Element} svg
	 */
	var FirefoxSymbolBugWorkaround = function (svg) {
	  var defs = svg.querySelector('defs');
	
	  var moveToDefsElems = svg.querySelectorAll('symbol linearGradient, symbol radialGradient, symbol pattern');
	  for (var i = 0, len = moveToDefsElems.length; i < len; i++) {
	    defs.appendChild(moveToDefsElems[i]);
	  }
	};
	
	/**
	 * @type {string}
	 */
	var DEFAULT_URI_PREFIX = '#';
	
	/**
	 * @type {string}
	 */
	var xLinkHref = 'xlink:href';
	/**
	 * @type {string}
	 */
	var xLinkNS = 'http://www.w3.org/1999/xlink';
	/**
	 * @type {string}
	 */
	var svgOpening = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + xLinkNS + '"';
	/**
	 * @type {string}
	 */
	var svgClosing = '</svg>';
	/**
	 * @type {string}
	 */
	var contentPlaceHolder = '{content}';
	
	/**
	 * Representation of SVG sprite
	 * @constructor
	 */
	function Sprite() {
	  var baseElement = document.getElementsByTagName('base')[0];
	  var currentUrl = window.location.href.split('#')[0];
	  var baseUrl = baseElement && baseElement.href;
	  this.urlPrefix = baseUrl && baseUrl !== currentUrl ? currentUrl + DEFAULT_URI_PREFIX : DEFAULT_URI_PREFIX;
	
	  this.content = [];
	  this.isFirefox = /firefox\//i.test(navigator.userAgent);
	  this.isIE = /(trident|edge)\//i.test(navigator.userAgent);
	
	  if (!this.isIE && baseUrl) {
	    window.addEventListener('spriteLoaderLocationUpdated', function (e) {
	      var currentPrefix = this.urlPrefix;
	      var newUrlPrefix = e.detail.newUrl.split(DEFAULT_URI_PREFIX)[0] + DEFAULT_URI_PREFIX;
	      baseUrlWorkAround(this.svg, currentPrefix, newUrlPrefix);
	      this.urlPrefix = newUrlPrefix;
	
	      if (this.isFirefox) {
	        var nodes = arrayFrom(document.querySelectorAll('use[*|href]'));
	        nodes.forEach(function (node) {
	          var href = node.getAttribute(xLinkHref);
	          if (href && href.indexOf(currentPrefix) === 0) {
	            node.setAttributeNS(xLinkNS, xLinkHref, newUrlPrefix + href.split(DEFAULT_URI_PREFIX)[1]);
	          }
	        });
	      }
	    }.bind(this));
	  }
	}
	
	Sprite.styles = ['position:absolute', 'width:0', 'height:0', 'visibility:hidden'];
	
	Sprite.spriteTemplate = svgOpening + ' style="'+ Sprite.styles.join(';') +'"><defs>' + contentPlaceHolder + '</defs>' + svgClosing;
	Sprite.symbolTemplate = svgOpening + '>' + contentPlaceHolder + svgClosing;
	
	/**
	 * @type {Array<String>}
	 */
	Sprite.prototype.content = null;
	
	/**
	 * @param {String} content
	 * @param {String} id
	 */
	Sprite.prototype.add = function (content, id) {
	  if (this.svg) {
	    this.appendSymbol(content);
	  }
	
	  this.content.push(content);
	
	  return DEFAULT_URI_PREFIX + id;
	};
	
	/**
	 *
	 * @param content
	 * @param template
	 * @returns {Element}
	 */
	Sprite.prototype.wrapSVG = function (content, template) {
	  var svgString = template.replace(contentPlaceHolder, content);
	
	  var svg = new DOMParser().parseFromString(svgString, 'image/svg+xml').documentElement;
	
	  if (!this.isIE && this.urlPrefix) {
	    baseUrlWorkAround(svg, DEFAULT_URI_PREFIX, this.urlPrefix);
	  }
	
	  return svg;
	};
	
	Sprite.prototype.appendSymbol = function (content) {
	  var symbol = this.wrapSVG(content, Sprite.symbolTemplate).childNodes[0];
	
	  this.svg.querySelector('defs').appendChild(symbol);
	  if (this.isFirefox) {
	    FirefoxSymbolBugWorkaround(this.svg);
	  }
	};
	
	/**
	 * @returns {String}
	 */
	Sprite.prototype.toString = function () {
	  var wrapper = document.createElement('div');
	  wrapper.appendChild(this.render());
	  return wrapper.innerHTML;
	};
	
	/**
	 * @param {HTMLElement} [target]
	 * @param {Boolean} [prepend=true]
	 * @returns {HTMLElement} Rendered sprite node
	 */
	Sprite.prototype.render = function (target, prepend) {
	  target = target || null;
	  prepend = typeof prepend === 'boolean' ? prepend : true;
	
	  var svg = this.wrapSVG(this.content.join(''), Sprite.spriteTemplate);
	
	  if (this.isFirefox) {
	    FirefoxSymbolBugWorkaround(svg);
	  }
	
	  if (target) {
	    if (prepend && target.childNodes[0]) {
	      target.insertBefore(svg, target.childNodes[0]);
	    } else {
	      target.appendChild(svg);
	    }
	  }
	
	  this.svg = svg;
	
	  return svg;
	};
	
	module.exports = Sprite;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(13);;
	var image = "<symbol viewBox=\"0 0 46 46\" id=\"conversation\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M26.469,0.000 C31.719,0.000 36.203,1.805 39.922,5.414 C43.641,9.024 45.500,13.344 45.500,18.375 C45.500,21.802 44.479,25.083 42.438,28.219 C42.438,28.219 42.328,28.328 42.328,28.328 C42.255,28.401 42.219,28.474 42.219,28.547 C42.000,28.984 41.891,29.422 41.891,29.859 C41.891,29.859 43.750,37.953 43.750,37.953 C43.750,37.953 36.203,35.109 36.203,35.109 C35.766,34.964 35.401,34.891 35.109,34.891 C34.891,34.891 34.562,34.964 34.125,35.109 C34.125,35.109 33.906,35.219 33.906,35.219 C33.323,35.438 32.448,35.693 31.281,35.984 C29.750,36.422 28.146,36.641 26.469,36.641 C21.219,36.641 16.753,34.854 13.070,31.281 C9.388,27.708 7.547,23.406 7.547,18.375 C7.547,17.063 7.656,15.787 7.875,14.547 C8.750,10.391 10.937,6.927 14.438,4.156 C17.938,1.385 21.948,0.000 26.469,0.000 ZM2.734,37.516 C2.661,37.443 2.625,37.406 2.625,37.406 C2.625,37.406 2.625,37.188 2.625,37.188 C0.875,34.635 -0.000,31.828 -0.000,28.766 C-0.000,24.099 1.786,20.234 5.359,17.172 C5.068,18.776 4.922,20.016 4.922,20.891 C4.922,25.922 6.781,30.242 10.500,33.852 C14.219,37.461 18.703,39.266 23.953,39.266 C25.630,39.266 27.234,39.047 28.766,38.609 C25.484,42.474 21.292,44.406 16.188,44.406 C14.219,44.406 12.104,43.969 9.844,43.094 C9.844,43.094 9.734,43.094 9.734,43.094 C9.443,42.948 9.151,42.875 8.859,42.875 C8.641,42.875 8.312,42.948 7.875,43.094 C7.875,43.094 1.750,45.500 1.750,45.500 C1.750,45.500 3.063,38.609 3.063,38.609 C3.063,38.245 2.953,37.880 2.734,37.516 Z\" id=\"conversation_path-1\" class=\"cls-2\" fill-rule=\"evenodd\"/> </symbol>";
	module.exports = sprite.add(image, "conversation");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(13);;
	var image = "<symbol viewBox=\"0 0 200 200\" id=\"dont-starve\" ><title>dont-starve</title><rect width=\"200\" height=\"200\" fill=\"#93c1d1\"/><path d=\"M321.556,1612.9c0,1.628,1.32,3.446,1.632,5.327,0.11,0.664,1.132,1.376,1.272,2.055a90.267,90.267,0,0,0,5.117,16.663,69.932,69.932,0,0,0,9.648,15.663c4.843,6.149,17.1,15.173,20.98,15.173,2.309,0,14.441-10.977,20.986-32.9,0.777-2.6,1.859-10.517,2.95-17.184,0.983-6.01,1.872-11,1.872-11L384,1602.342l2.012-26.073-32.172,12.942-38.014-6.322,1.462,19.764A15.5,15.5,0,0,1,321.556,1612.9Z\" transform=\"translate(-250 -1500)\" fill=\"#fff\"/><ellipse cx=\"342.34\" cy=\"1620.189\" rx=\"7.111\" ry=\"8.141\" transform=\"translate(-684.93 -1342.022) rotate(-16.063)\" fill=\"#93c1d1\" opacity=\"0.3\"/><ellipse cx=\"367.641\" cy=\"1618.685\" rx=\"7.413\" ry=\"8.246\" transform=\"translate(-683.526 -1335.08) rotate(-16.063)\" fill=\"#93c1d1\" opacity=\"0.3\"/><path d=\"M330.9,1611.223l17.3,1.992a0.7,0.7,0,0,0,.825-0.641l-0.105-2.74a0.681,0.681,0,0,0-.773-0.589l-17.216,1.239A0.369,0.369,0,1,0,330.9,1611.223Z\" transform=\"translate(-250 -1500)\" fill=\"#212223\"/><path d=\"M362.072,1608.185l-0.83,3.567a0.624,0.624,0,0,0,.7.72l16.921-1.125a0.356,0.356,0,0,0,.049-0.711l-16.058-2.916A0.667,0.667,0,0,0,362.072,1608.185Z\" transform=\"translate(-250 -1500)\" fill=\"#212223\"/><ellipse cx=\"94.844\" cy=\"120.984\" rx=\"2.482\" ry=\"3.552\" fill=\"#212223\"/><ellipse cx=\"365.41\" cy=\"1618.565\" rx=\"3.177\" ry=\"1.816\" transform=\"translate(-1541.707 203.659) rotate(-80.218)\" fill=\"#212223\"/><path d=\"M345.126,1627.1l3.754-2.457a0.259,0.259,0,0,1,.3.425l-3.592,2.688a0.4,0.4,0,0,1-.479-0.641Z\" transform=\"translate(-250 -1500)\" fill=\"#212223\"/><path d=\"M362.157,1623.7l2.657,1.77a0.4,0.4,0,0,1-.444.666l-0.025-.018-2.512-1.97A0.277,0.277,0,0,1,362.157,1623.7Z\" transform=\"translate(-250 -1500)\" fill=\"#212223\"/><path d=\"M359.425,1638.265l-0.711-15.923a0.25,0.25,0,0,0-.5.009l-0.128,14.6-2.494-1.836a0.394,0.394,0,0,0-.506.6l3.229,3.076a0.657,0.657,0,0,0,1.11-.505v-0.024Z\" transform=\"translate(-250 -1500)\" fill=\"#212223\"/><path d=\"M352.282,1644.834l10.462-3.514a0.252,0.252,0,0,1,.175.471l-10.22,4.167a0.6,0.6,0,0,1-.453-1.112Z\" transform=\"translate(-250 -1500)\" fill=\"#212223\"/><path d=\"M398.98,1597l-7.929-2.587s16.392-18.776,16.392-22.074-24.949-39.771-29.856-40.11c-7.41-.511-10.007,20.538-3.213,20.538,4.2,0,6.116-4.731,6.116-4.731s-3.431,2.963-5.322,1.248c-1.461-1.325-.566-10.709,3.614-10.709,2.607,0,4.88,9.463,3.918,14.772-0.967,5.333-8.766,14.454-14.647,14.454-5.681,0-2.951-8.328,0-10.15,0,0-21.114-18.485-30.014-18.485-11.028,0-10.805,24.624-10.805,24.624s3.463-11.3,6.42-11.3c3.471,0,12.495,20.919-6.406,19.558-5.9-.425-13.552-10.162-13.552-17.091a21.655,21.655,0,0,1,9.031-18.118c-8.076,0-33.969,35.638-33.969,39.894s19.836,26.441,19.836,26.441l-5.631,6.056a1.179,1.179,0,0,0,.151,1.742l9.941,7.531a4.414,4.414,0,0,0,2.228.874l8.69,0.864s-2.149-11,1.2-19.876a0.961,0.961,0,0,0,.043-0.921c-1.8-2.662-6.632-10.257-5.461-11.987,1.192-1.762,18.8-.867,33,4.932A2.281,2.281,0,0,0,355,1592.1c11.63-8.691,25.03-9.794,26.8-9.145,1.473,0.539.713,10.836-1.192,16.645a1.038,1.038,0,0,0,.114.858c2.345,4,2.934,17.2,2.934,17.2l15.618-19.225A0.947,0.947,0,0,0,398.98,1597Z\" transform=\"translate(-250 -1500)\" fill=\"#212223\"/><path d=\"M327.042,1629.037s-2.283,5.25-4.708,5.716c-2.729.524-8.405-13.232-6.529-17.187,1.038-2.187,8.64,1.983,8.64,1.983Z\" transform=\"translate(-250 -1500)\" fill=\"#fff\"/><path d=\"M381.262,1625.319s3.238,3.983,4.966,3.561c1.611-.393,4.082-7.48,4.565-10.095s0.794-7.1-.675-7.651-7.347,7.49-7.347,7.49Z\" transform=\"translate(-250 -1500)\" fill=\"#fff\"/></symbol>";
	module.exports = sprite.add(image, "dont-starve");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(13);;
	var image = "<symbol viewBox=\"0 0 46 46\" id=\"manual-messages\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M12.250,19.250 C11.229,19.250 10.391,19.578 9.734,20.234 C9.078,20.891 8.750,21.729 8.750,22.750 C8.750,23.771 9.078,24.609 9.734,25.266 C10.391,25.922 11.229,26.250 12.250,26.250 C13.271,26.250 14.109,25.922 14.766,25.266 C15.422,24.609 15.750,23.771 15.750,22.750 C15.750,21.729 15.422,20.891 14.766,20.234 C14.109,19.578 13.271,19.250 12.250,19.250 ZM22.750,19.250 C21.729,19.250 20.891,19.578 20.234,20.234 C19.578,20.891 19.250,21.729 19.250,22.750 C19.250,23.771 19.578,24.609 20.234,25.266 C20.891,25.922 21.729,26.250 22.750,26.250 C23.771,26.250 24.609,25.922 25.266,25.266 C25.922,24.609 26.250,23.771 26.250,22.750 C26.250,21.729 25.922,20.891 25.266,20.234 C24.609,19.578 23.771,19.250 22.750,19.250 ZM33.250,19.250 C32.229,19.250 31.391,19.578 30.734,20.234 C30.078,20.891 29.750,21.729 29.750,22.750 C29.750,23.771 30.078,24.609 30.734,25.266 C31.391,25.922 32.229,26.250 33.250,26.250 C34.271,26.250 35.109,25.922 35.766,25.266 C36.422,24.609 36.750,23.771 36.750,22.750 C36.750,21.729 36.422,20.891 35.766,20.234 C35.109,19.578 34.271,19.250 33.250,19.250 ZM22.750,43.859 C16.479,43.859 11.120,41.727 6.672,37.461 C2.224,33.195 -0.000,28.036 -0.000,21.984 C-0.000,15.932 2.224,10.755 6.672,6.453 C11.120,2.151 16.479,0.000 22.750,0.000 C29.021,0.000 34.380,2.151 38.828,6.453 C43.276,10.755 45.500,15.932 45.500,21.984 C45.500,26.287 44.297,30.224 41.891,33.797 C41.818,33.870 41.745,33.943 41.672,34.016 C41.599,34.089 41.562,34.162 41.562,34.234 C41.271,34.818 41.125,35.365 41.125,35.875 C41.125,35.875 43.531,45.500 43.531,45.500 C43.531,45.500 34.344,42.109 34.344,42.109 C34.052,41.964 33.615,41.891 33.031,41.891 C32.812,41.891 32.411,41.964 31.828,42.109 C31.755,42.109 31.719,42.128 31.719,42.164 C31.719,42.201 31.682,42.219 31.609,42.219 C28.911,43.312 25.958,43.859 22.750,43.859 Z\" id=\"manual-messages_path-1\" class=\"cls-2\" fill-rule=\"evenodd\"/> </symbol>";
	module.exports = sprite.add(image, "manual-messages");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(13);;
	var image = "<symbol viewBox=\"0 0 58 53\" id=\"users\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M-0.012,52.500 C-0.012,52.172 0.006,51.739 0.042,51.201 C0.079,50.663 0.279,49.798 0.644,48.604 C1.009,47.410 1.519,46.484 2.175,45.828 C2.813,45.190 4.080,44.488 5.976,43.723 C7.872,42.957 10.014,42.150 12.403,41.303 C14.791,40.455 16.541,39.749 17.653,39.184 C19.057,38.473 20.146,37.434 20.921,36.066 C21.696,34.699 22.083,33.277 22.083,31.801 C22.083,30.798 21.482,29.613 20.279,28.246 C19.057,26.842 18.068,24.933 17.311,22.518 C16.555,20.102 16.177,17.318 16.177,14.164 C16.177,11.794 16.514,9.684 17.188,7.834 C17.863,5.984 18.783,4.503 19.950,3.391 C21.117,2.279 22.443,1.436 23.929,0.861 C25.415,0.287 27.006,0.000 28.701,0.000 C30.397,0.000 31.978,0.287 33.446,0.861 C34.913,1.436 36.235,2.279 37.411,3.391 C38.587,4.503 39.512,5.984 40.187,7.834 C40.861,9.684 41.198,11.794 41.198,14.164 C41.198,17.318 40.825,20.102 40.077,22.518 C39.330,24.933 38.345,26.842 37.124,28.246 C35.902,29.632 35.292,30.816 35.292,31.801 C35.292,33.259 35.684,34.677 36.467,36.053 C37.251,37.429 38.345,38.473 39.749,39.184 C40.861,39.749 42.611,40.455 44.999,41.303 C47.388,42.150 49.521,42.957 51.399,43.723 C53.276,44.488 54.534,45.190 55.172,45.828 C55.829,46.484 56.339,47.369 56.704,48.480 C57.068,49.592 57.269,50.540 57.305,51.324 C57.305,51.324 57.387,52.500 57.387,52.500 C57.387,52.500 -0.012,52.500 -0.012,52.500 Z\" id=\"users_path-1\" class=\"cls-2\" fill-rule=\"evenodd\"/> </symbol>";
	module.exports = sprite.add(image, "users");

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by yeting on 15/10/18.
	 */
	
	function register(appName) {
	
	  var app = angular.module(appName);
	
	  return {
	    directive: directive,
	    controller: controller,
	    service: service,
	    provider: provider,
	    factory: factory
	  };
	
	  function directive(name, constructorFn) {
	
	    constructorFn = _normalizeConstructor(constructorFn);
	
	    if (!constructorFn.prototype.compile) {
	      // create an empty compile function if none was defined.
	      constructorFn.prototype.compile = function () {};
	    }
	
	    var originalCompileFn = _cloneFunction(constructorFn.prototype.compile);
	
	    // Decorate the compile method to automatically return the link method (if it exists)
	    // and bind it to the context of the constructor (so `this` works correctly).
	    // This gets around the problem of a non-lexical "this" which occurs when the directive class itself
	    // returns `this.link` from within the compile function.
	    _override(constructorFn.prototype, 'compile', function () {
	      return function () {
	        originalCompileFn.apply(this, arguments);
	
	        if (constructorFn.prototype.link) {
	          return constructorFn.prototype.link.bind(this);
	        }
	      };
	    });
	
	    var factoryArray = _createFactoryArray(constructorFn);
	
	    app.directive(name, factoryArray);
	    return this;
	  }
	
	  function controller(name, constructorFn) {
	    app.controller(name, constructorFn);
	    return this;
	  }
	
	  function service(name, constructorFn) {
	    app.service(name, constructorFn);
	    return this;
	  }
	
	  function provider(name, constructorFn) {
	    app.provider(name, constructorFn);
	    return this;
	  }
	
	  function factory(name, constructorFn) {
	    constructorFn = _normalizeConstructor(constructorFn);
	    var factoryArray = _createFactoryArray(constructorFn);
	    app.factory(name, factoryArray);
	    return this;
	  }
	
	  /**
	   * If the constructorFn is an array of type ['dep1', 'dep2', ..., constructor() {}]
	   * we need to pull out the array of dependencies and add it as an $inject property of the
	   * actual constructor function.
	   * @param input
	   * @returns {*}
	   * @private
	   */
	  function _normalizeConstructor(input) {
	    var constructorFn;
	
	    if (input.constructor === Array) {
	      //
	      var injected = input.slice(0, input.length - 1);
	      constructorFn = input[input.length - 1];
	      constructorFn.$inject = injected;
	    } else {
	      constructorFn = input;
	    }
	
	    return constructorFn;
	  }
	
	  /**
	   * Convert a constructor function into a factory function which returns a new instance of that
	   * constructor, with the correct dependencies automatically injected as arguments.
	   *
	   * In order to inject the dependencies, they must be attached to the constructor function with the
	   * `$inject` property annotation.
	   *
	   * @param constructorFn
	   * @returns {Array.<T>}
	   * @private
	   */
	  function _createFactoryArray(constructorFn) {
	    // get the array of dependencies that are needed by this component (as contained in the `$inject` array)
	    var args = constructorFn.$inject || [];
	    var factoryArray = args.slice(); // create a copy of the array
	    // The factoryArray uses Angular's array notation whereby each element of the array is the name of a
	    // dependency, and the final item is the factory function itself.
	    factoryArray.push(function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      //return new constructorFn(...args);
	      var instance = new (Function.prototype.bind.apply(constructorFn, [null].concat(args)))();
	      for (var key in instance) {
	        instance[key] = instance[key];
	      }
	
	      return instance;
	    });
	
	    return factoryArray;
	  }
	
	  /**
	   * Clone a function
	   * @param original
	   * @returns {Function}
	   */
	  function _cloneFunction(original) {
	    return function () {
	      return original.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Override an object's method with a new one specified by `callback`.
	   * @param object
	   * @param methodName
	   * @param callback
	   */
	  function _override(object, methodName, callback) {
	    object[methodName] = callback(object[methodName]);
	  }
	}
	
	exports.default = register;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dialog = __webpack_require__(21);
	
	var dialog = _interopRequireWildcard(_dialog);
	
	__webpack_require__(36);
	
	var _daoDialogHeader = __webpack_require__(38);
	
	var _daoDialogHeader2 = _interopRequireDefault(_daoDialogHeader);
	
	var _daoMultiStep = __webpack_require__(40);
	
	var _daoMultiStep2 = _interopRequireDefault(_daoMultiStep);
	
	var _daoStep = __webpack_require__(47);
	
	var _daoStep2 = _interopRequireDefault(_daoStep);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	angular.module('dao.dialog', ['dao.multiStep']).factory('$daoDialogStack', dialog.DaoDialogStack).provider('$daoDialog', dialog.DaoDialogProvider).directive('daoDialogBackdrop', dialog.daoDialogBackdrop).directive('daoDialogWindow', dialog.daoDialogWindow).directive('daoDialogAnimationClass', dialog.daoDialogAnimationClass).directive('daoDialogTransclude', dialog.daoDialogTransclude);
	
	angular.module('dao.multiStep', []).directive('daoDialogHeader', _daoDialogHeader2.default).directive('daoMultiStep', _daoMultiStep2.default).directive('daoStep', _daoStep2.default);
	
	exports.default = 'dao.dialog';

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	DaoDialogStack.$inject = ["$animate", "$animateCss", "$document", "$compile", "$rootScope", "$q"];
	daoDialogBackdrop.$inject = ["$animate", "$injector", "$daoDialogStack"];
	daoDialogWindow.$inject = ["$daoDialogStack", "$q", "$animate", "$animateCss"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.stackedMap = exports.multiMap = undefined;
	exports.DaoDialogProvider = DaoDialogProvider;
	exports.DaoDialogStack = DaoDialogStack;
	exports.daoDialogBackdrop = daoDialogBackdrop;
	exports.daoDialogWindow = daoDialogWindow;
	exports.daoDialogAnimationClass = daoDialogAnimationClass;
	exports.daoDialogTransclude = daoDialogTransclude;
	
	var _keys = __webpack_require__(22);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _daoBackdrop = __webpack_require__(34);
	
	var _daoBackdrop2 = _interopRequireDefault(_daoBackdrop);
	
	var _daoWindow = __webpack_require__(35);
	
	var _daoWindow2 = _interopRequireDefault(_daoWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isFunction = angular.isFunction;
	var isArray = angular.isArray;
	var forEach = angular.forEach;
	var isString = angular.isString;
	var extend = angular.extend;
	
	var multiMap = exports.multiMap = {
	  createNew: function createNew() {
	    var map = {};
	
	    return {
	      entries: function entries() {
	        return (0, _keys2.default)(map).map(function (key) {
	          return {
	            key: key,
	            value: map[key]
	          };
	        });
	      },
	
	      get: function get(key) {
	        return map[key];
	      },
	
	      hasKey: function hasKey(key) {
	        return !!map[key];
	      },
	
	      keys: function keys() {
	        return (0, _keys2.default)(map);
	      },
	
	      put: function put(key, value) {
	        if (!map[key]) {
	          map[key] = [];
	        }
	
	        map[key].push(value);
	      },
	
	      remove: function remove(key, value) {
	        var values = map[key];
	
	        if (!values) {
	          return;
	        }
	
	        var idx = values.indexOf(value);
	
	        if (idx !== -1) {
	          values.splice(idx, 1);
	        }
	
	        if (!values.length) {
	          delete map[key];
	        }
	      }
	    };
	  }
	};
	
	var stackedMap = exports.stackedMap = {
	  createNew: function createNew() {
	    var stack = [];
	
	    return {
	      add: function add(key, value) {
	        stack.push({
	          key: key,
	          value: value
	        });
	      },
	
	      get: function get(key) {
	        for (var i = 0; i < stack.length; i++) {
	          if (key === stack[i].key) {
	            return stack[i];
	          }
	        }
	      },
	
	      keys: function keys() {
	        var keys = [];
	        for (var i = 0; i < stack.length; i++) {
	          keys.push(stack[i].key);
	        }
	
	        return keys;
	      },
	
	      top: function top() {
	        return stack[stack.length - 1];
	      },
	
	      remove: function remove(key) {
	        var idx = -1;
	        for (var i = 0; i < stack.length; i++) {
	          if (key === stack[i].key) {
	            idx = i;
	            break;
	          }
	        }
	
	        return stack.splice(idx, 1)[0];
	      },
	
	      removeTop: function removeTop() {
	        return stack.splice(stack.length - 1, 1)[0];
	      },
	
	      length: function length() {
	        return stack.length;
	      }
	    };
	  }
	};
	
	function DaoDialogProvider() {
	  var $dialogProvider = {
	    options: {
	      animation: true,
	      backdrop: true, //can also be false or 'static'
	      keyboard: true
	    },
	    /*@ngInject*/
	    $get: ["$injector", "$rootScope", "$q", "$document", "$templateRequest", "$controller", "$daoDialogStack", function $get($injector, $rootScope, $q, $document, $templateRequest, $controller, $daoDialogStack) {
	      var $dialog = {};
	
	      function getTemplatePromise(options) {
	        return options.template ? $q.when(options.template) : $templateRequest(angular.isFunction(options.templateUrl) ? options.templateUrl() : options.templateUrl);
	      }
	
	      function getResolvePromises(resolves) {
	        var promisesArr = [];
	        angular.forEach(resolves, function (value) {
	          if (angular.isFunction(value) || angular.isArray(value)) {
	            promisesArr.push($q.when($injector.invoke(value)));
	          } else if (angular.isString(value)) {
	            promisesArr.push($q.when($injector.get(value)));
	          } else {
	            promisesArr.push($q.when(value));
	          }
	        });
	
	        return promisesArr;
	      }
	
	      var promiseChain = null;
	      $dialog.getPromiseChain = function () {
	        return promiseChain;
	      };
	
	      $dialog.open = function (dialogOptions) {
	        var dialogResultDeferred = $q.defer();
	        var dialogOpenedDeferred = $q.defer();
	        var dialogRenderDeferred = $q.defer();
	
	        //prepare an instance of a dialog to be injected into controllers and returned to a caller
	        var dialogInstance = {
	          result: dialogResultDeferred.promise,
	          opened: dialogOpenedDeferred.promise,
	          rendered: dialogRenderDeferred.promise,
	          close: function close(result) {
	            return $daoDialogStack.close(dialogInstance, result);
	          },
	
	          dismiss: function dismiss(reason) {
	            return $daoDialogStack.dismiss(dialogInstance, reason);
	          }
	        };
	
	        //merge and clean up options
	        dialogOptions = angular.extend({}, $dialogProvider.options, dialogOptions);
	        dialogOptions.resolve = dialogOptions.resolve || {};
	        dialogOptions.appendTo = dialogOptions.appendTo || $document.find('body').eq(0);
	
	        //verify options
	        if (!dialogOptions.template && !dialogOptions.templateUrl) {
	          throw new Error('One of template or templateUrl options is required.');
	        }
	
	        var templateAndResolvePromise = $q.all([getTemplatePromise(dialogOptions)].concat(getResolvePromises(dialogOptions.resolve)));
	
	        function resolveWithTemplate() {
	          return templateAndResolvePromise;
	        }
	
	        // Wait for the resolution of the existing promise chain.
	        // Then switch to our own combined promise dependency (regardless of how the previous dialog fared).
	        // Then add to $daoDialogStack and resolve opened.
	        // Finally clean up the chain variable if no subsequent dialog has overwritten it.
	        var samePromise;
	        samePromise = promiseChain = $q.all([promiseChain]).then(resolveWithTemplate, resolveWithTemplate).then(function resolveSuccess(tplAndVars) {
	
	          var dialogScope = (dialogOptions.scope || $rootScope).$new();
	          dialogScope.$close = dialogInstance.close;
	          dialogScope.$dismiss = dialogInstance.dismiss;
	
	          dialogScope.$on('$destroy', function () {
	            if (!dialogScope.$$daoDestructionScheduled) {
	              dialogScope.$dismiss('$daoUnscheduledDestruction');
	            }
	          });
	
	          var ctrlInstance,
	              ctrlLocals = {};
	          var resolveIter = 1;
	
	          //controllers
	          if (dialogOptions.controller) {
	            ctrlLocals.$scope = dialogScope;
	            ctrlLocals.$daoDialogInstance = dialogInstance;
	            angular.forEach(dialogOptions.resolve, function (value, key) {
	              ctrlLocals[key] = tplAndVars[resolveIter++];
	            });
	
	            ctrlInstance = $controller(dialogOptions.controller, ctrlLocals);
	            if (dialogOptions.controllerAs) {
	              if (dialogOptions.bindToController) {
	                angular.extend(ctrlInstance, dialogScope);
	              }
	
	              dialogScope[dialogOptions.controllerAs] = ctrlInstance;
	            }
	          }
	
	          $daoDialogStack.open(dialogInstance, {
	            scope: dialogScope,
	            deferred: dialogResultDeferred,
	            renderDeferred: dialogRenderDeferred,
	            content: tplAndVars[0],
	            animation: dialogOptions.animation,
	            backdrop: dialogOptions.backdrop,
	            keyboard: dialogOptions.keyboard,
	            backdropClass: dialogOptions.backdropClass,
	            windowTopClass: dialogOptions.windowTopClass,
	            windowClass: dialogOptions.windowClass,
	            windowTemplateUrl: dialogOptions.windowTemplateUrl,
	            size: dialogOptions.size,
	            openedClass: dialogOptions.openedClass,
	            appendTo: dialogOptions.appendTo
	          });
	          dialogOpenedDeferred.resolve(true);
	        }, function resolveError(reason) {
	
	          dialogOpenedDeferred.reject(reason);
	          dialogResultDeferred.reject(reason);
	        }).finally(function () {
	          if (promiseChain === samePromise) {
	            promiseChain = null;
	          }
	        });
	
	        return dialogInstance;
	      };
	
	      return $dialog;
	    }]
	  };
	
	  return $dialogProvider;
	}
	
	/*@ngInject*/
	function DaoDialogStack($animate, $animateCss, $document, $compile, $rootScope, $q) {
	
	  var OPENED_DIALOG_CLASS = 'dialog-open';
	
	  var backdropDomEl;
	  var backdropScope;
	  var openedWindows = stackedMap.createNew();
	  var openedClasses = multiMap.createNew();
	  var $daoDialogStack = {
	    NOW_CLOSING_EVENT: 'dialog.stack.now-closing'
	  };
	
	  //Dialog focus behavior
	  var focusableElementList;
	  var focusIndex = 0;
	  var tababbleSelector = 'a[href], area[href], input:not([disabled]), ' + 'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' + 'iframe, object, embed, *[tabindex], *[contenteditable=true]';
	
	  function backdropIndex() {
	    var topBackdropIndex = -1;
	    var opened = openedWindows.keys();
	    for (var i = 0; i < opened.length; i++) {
	      if (openedWindows.get(opened[i]).value.backdrop) {
	        topBackdropIndex = i;
	      }
	    }
	
	    return topBackdropIndex;
	  }
	
	  $rootScope.$watch(backdropIndex, function (newBackdropIndex) {
	    if (backdropScope) {
	      backdropScope.index = newBackdropIndex;
	    }
	  });
	
	  function removeDialogWindow(dialogInstance, elementToReceiveFocus) {
	    var dialogWindow = openedWindows.get(dialogInstance).value;
	    var appendToElement = dialogWindow.appendTo;
	
	    //clean up the stack
	    openedWindows.remove(dialogInstance);
	
	    removeAfterAnimate(dialogWindow.dialogDomEl, dialogWindow.dialogScope, function () {
	      var dialogBodyClass = dialogWindow.openedClass || OPENED_DIALOG_CLASS;
	      openedClasses.remove(dialogBodyClass, dialogInstance);
	      appendToElement.toggleClass(dialogBodyClass, openedClasses.hasKey(dialogBodyClass));
	      toggleTopWindowClass(true);
	    });
	
	    checkRemoveBackdrop();
	
	    //move focus to specified element if available, or else to body
	    if (elementToReceiveFocus && elementToReceiveFocus.focus) {
	      elementToReceiveFocus.focus();
	    } else {
	      appendToElement.focus();
	    }
	  }
	
	  // Add or remove "windowTopClass" from the top window in the stack
	  function toggleTopWindowClass(toggleSwitch) {
	    var dialogWindow;
	
	    if (openedWindows.length() > 0) {
	      dialogWindow = openedWindows.top().value;
	      dialogWindow.dialogDomEl.toggleClass(dialogWindow.windowTopClass || '', toggleSwitch);
	    }
	  }
	
	  function checkRemoveBackdrop() {
	    //remove backdrop if no longer needed
	    if (backdropDomEl && backdropIndex() === -1) {
	      var backdropScopeRef = backdropScope;
	      removeAfterAnimate(backdropDomEl, backdropScope, function () {
	        backdropScopeRef = null;
	      });
	
	      backdropDomEl = undefined;
	      backdropScope = undefined;
	    }
	  }
	
	  function removeAfterAnimate(domEl, scope, done) {
	    var asyncDeferred;
	    var asyncPromise = null;
	    var setIsAsync = function setIsAsync() {
	      if (!asyncDeferred) {
	        asyncDeferred = $q.defer();
	        asyncPromise = asyncDeferred.promise;
	      }
	
	      return function asyncDone() {
	        asyncDeferred.resolve();
	      };
	    };
	
	    scope.$broadcast($daoDialogStack.NOW_CLOSING_EVENT, setIsAsync);
	
	    // Note that it's intentional that asyncPromise might be null.
	    // That's when setIsAsync has not been called during the
	    // NOW_CLOSING_EVENT broadcast.
	    return $q.when(asyncPromise).then(afterAnimating);
	
	    function afterAnimating() {
	      if (afterAnimating.done) {
	        return;
	      }
	
	      afterAnimating.done = true;
	
	      $animateCss(domEl, {
	        event: 'leave'
	      }).start().then(function () {
	        domEl.remove();
	      });
	
	      scope.$destroy();
	      if (done) {
	        done();
	      }
	    }
	  }
	
	  $document.bind('keydown', function (evt) {
	    if (evt.isDefaultPrevented()) {
	      return evt;
	    }
	
	    var dialog = openedWindows.top();
	    if (dialog && dialog.value.keyboard) {
	      switch (evt.which) {
	        case 27:
	          {
	            evt.preventDefault();
	            $rootScope.$apply(function () {
	              $daoDialogStack.dismiss(dialog.key, 'escape key press');
	            });
	
	            break;
	          }
	
	        case 9:
	          {
	            $daoDialogStack.loadFocusElementList(dialog);
	            var focusChanged = false;
	            if (evt.shiftKey) {
	              if ($daoDialogStack.isFocusInFirstItem(evt)) {
	                focusChanged = $daoDialogStack.focusLastFocusableElement();
	              }
	            } else {
	              if ($daoDialogStack.isFocusInLastItem(evt)) {
	                focusChanged = $daoDialogStack.focusFirstFocusableElement();
	              }
	            }
	
	            if (focusChanged) {
	              evt.preventDefault();
	              evt.stopPropagation();
	            }
	
	            break;
	          }
	      }
	    }
	  });
	
	  $daoDialogStack.open = function (dialogInstance, dialog) {
	    var dialogOpener = $document[0].activeElement;
	    var dialogBodyClass = dialog.openedClass || OPENED_DIALOG_CLASS;
	
	    toggleTopWindowClass(false);
	
	    openedWindows.add(dialogInstance, {
	      deferred: dialog.deferred,
	      renderDeferred: dialog.renderDeferred,
	      dialogScope: dialog.scope,
	      backdrop: dialog.backdrop,
	      keyboard: dialog.keyboard,
	      openedClass: dialog.openedClass,
	      windowTopClass: dialog.windowTopClass,
	      animation: dialog.animation,
	      appendTo: dialog.appendTo
	    });
	
	    openedClasses.put(dialogBodyClass, dialogInstance);
	
	    var appendToElement = dialog.appendTo;
	    var currBackdropIndex = backdropIndex();
	
	    if (!appendToElement.length) {
	      throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
	    }
	
	    if (currBackdropIndex >= 0 && !backdropDomEl) {
	      backdropScope = $rootScope.$new(true);
	      backdropScope.dialogOptions = dialog;
	      backdropScope.index = currBackdropIndex;
	      var angularBackgroundDomEl = angular.element('<div dao-dialog-backdrop="dialog-backdrop"></div>');
	      angularBackgroundDomEl.attr('backdrop-class', dialog.backdropClass);
	      if (dialog.animation) {
	        angularBackgroundDomEl.attr('dialog-animation', 'true');
	      }
	
	      backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
	      $animate.enter(backdropDomEl, appendToElement);
	    }
	
	    var angularDomEl = angular.element('<div dao-dialog-window="dialog-window"></div>');
	    angularDomEl.attr({
	      'template-url': dialog.windowTemplateUrl,
	      'window-class': dialog.windowClass,
	      'window-top-class': dialog.windowTopClass,
	      size: dialog.size,
	      index: openedWindows.length() - 1,
	      animate: 'animate'
	    }).html(dialog.content);
	    if (dialog.animation) {
	      angularDomEl.attr('dialog-animation', 'true');
	    }
	
	    $animate.enter(angularDomEl, appendToElement).then(function () {
	      $compile(angularDomEl)(dialog.scope);
	      $animate.addClass(appendToElement, dialogBodyClass);
	    });
	
	    openedWindows.top().value.dialogDomEl = angularDomEl;
	    openedWindows.top().value.dialogOpener = dialogOpener;
	
	    $daoDialogStack.clearFocusListCache();
	  };
	
	  function broadcastClosing(dialogWindow, resultOrReason, closing) {
	    return !dialogWindow.value.dialogScope.$broadcast('dialog.closing', resultOrReason, closing).defaultPrevented;
	  }
	
	  $daoDialogStack.close = function (dialogInstance, result) {
	    var dialogWindow = openedWindows.get(dialogInstance);
	    if (dialogWindow && broadcastClosing(dialogWindow, result, true)) {
	      dialogWindow.value.dialogScope.$$daoDestructionScheduled = true;
	      dialogWindow.value.deferred.resolve(result);
	      removeDialogWindow(dialogInstance, dialogWindow.value.dialogOpener);
	      return true;
	    }
	
	    return !dialogWindow;
	  };
	
	  $daoDialogStack.dismiss = function (dialogInstance, reason) {
	    var dialogWindow = openedWindows.get(dialogInstance);
	    if (dialogWindow && broadcastClosing(dialogWindow, reason, false)) {
	      dialogWindow.value.dialogScope.$$daoDestructionScheduled = true;
	      dialogWindow.value.deferred.reject(reason);
	      removeDialogWindow(dialogInstance, dialogWindow.value.dialogOpener);
	      return true;
	    }
	
	    return !dialogWindow;
	  };
	
	  $daoDialogStack.dismissAll = function (reason) {
	    var topDialog = this.getTop();
	    while (topDialog && this.dismiss(topDialog.key, reason)) {
	      topDialog = this.getTop();
	    }
	  };
	
	  $daoDialogStack.getTop = function () {
	    return openedWindows.top();
	  };
	
	  $daoDialogStack.dialogRendered = function (dialogInstance) {
	    var dialogWindow = openedWindows.get(dialogInstance);
	    if (dialogWindow) {
	      dialogWindow.value.renderDeferred.resolve();
	    }
	  };
	
	  $daoDialogStack.focusFirstFocusableElement = function () {
	    if (focusableElementList.length > 0) {
	      focusableElementList[0].focus();
	      return true;
	    }
	
	    return false;
	  };
	
	  $daoDialogStack.focusLastFocusableElement = function () {
	    if (focusableElementList.length > 0) {
	      focusableElementList[focusableElementList.length - 1].focus();
	      return true;
	    }
	
	    return false;
	  };
	
	  $daoDialogStack.isFocusInFirstItem = function (evt) {
	    if (focusableElementList.length > 0) {
	      return (evt.target || evt.srcElement) === focusableElementList[0];
	    }
	
	    return false;
	  };
	
	  $daoDialogStack.isFocusInLastItem = function (evt) {
	    if (focusableElementList.length > 0) {
	      return (evt.target || evt.srcElement) === focusableElementList[focusableElementList.length - 1];
	    }
	
	    return false;
	  };
	
	  $daoDialogStack.clearFocusListCache = function () {
	    focusableElementList = [];
	    focusIndex = 0;
	  };
	
	  $daoDialogStack.loadFocusElementList = function (dialogWindow) {
	    if (focusableElementList === undefined || !focusableElementList.length) {
	      if (dialogWindow) {
	        var dialogDomE1 = dialogWindow.value.dialogDomEl;
	        if (dialogDomE1 && dialogDomE1.length) {
	          focusableElementList = dialogDomE1[0].querySelectorAll(tababbleSelector);
	        }
	      }
	    }
	  };
	
	  return $daoDialogStack;
	}
	
	/*@ngInject*/
	function daoDialogBackdrop($animate, $injector, $daoDialogStack) {
	
	  var $animateCss = null;
	
	  if ($injector.has('$animateCss')) {
	    $animateCss = $injector.get('$animateCss');
	  }
	
	  return {
	    replace: true,
	    template: _daoBackdrop2.default,
	    // templateUrl: 'components/dao-dialog/dao-backdrop.html',
	    compile: function compile(tElement, tAttrs) {
	      tElement.addClass(tAttrs.backdropClass);
	      return linkFn;
	    }
	  };
	
	  function linkFn(scope, element, attrs) {
	    // Temporary fix for prefixing
	    // element.addClass('modal-backdrop');
	
	    if (attrs.dialogInClass) {
	      if ($animateCss) {
	        $animateCss(element, {
	          addClass: attrs.dialogInClass
	        }).start();
	      } else {
	        $animate.addClass(element, attrs.dialogInClass);
	      }
	
	      scope.$on($daoDialogStack.NOW_CLOSING_EVENT, function (e, setIsAsync) {
	        var done = setIsAsync();
	        if (scope.dialogOptions.animation) {
	          if ($animateCss) {
	            $animateCss(element, {
	              removeClass: attrs.dialogInClass
	            }).start().then(done);
	          } else {
	            $animate.removeClass(element, attrs.dialogInClass).then(done);
	          }
	        } else {
	          done();
	        }
	      });
	    }
	  }
	}
	
	/*@ngInject*/
	function daoDialogWindow($daoDialogStack, $q, $animate, $animateCss) {
	  return {
	    scope: {
	      index: '@'
	    },
	    replace: true,
	    transclude: true,
	    // templateUrl: function(tElement, tAttrs) {
	    //   return tAttrs.templateUrl || 'components/dao-dialog/dao-window.html';
	    // },
	    template: _daoWindow2.default,
	
	    link: function link(scope, element, attrs) {
	      element.addClass(attrs.windowClass || '');
	      element.addClass(attrs.windowTopClass || '');
	      scope.size = attrs.size;
	
	      scope.close = function (evt) {
	        var dialog = $daoDialogStack.getTop();
	
	        if (dialog && dialog.value.backdrop && dialog.value.backdrop !== 'static' && (evt.target === evt.currentTarget || evt.target.classList.contains('dialog-overlay-inner'))) {
	          evt.preventDefault();
	          evt.stopPropagation();
	          $daoDialogStack.dismiss(dialog.key, 'backdrop click');
	        }
	      };
	
	      // moved from template to fix issue #2280
	      element.on('click', scope.close);
	
	      // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	      // We can detect that by using this property in the template associated with this directive and then use
	      // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	      scope.$isRendered = true;
	
	      // Deferred object that will be resolved when this dialog is render.
	      var dialogRenderDeferObj = $q.defer();
	
	      // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	      // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in dialog's template.
	      attrs.$observe('dialogRender', function (value) {
	        if (value === 'true') {
	          dialogRenderDeferObj.resolve();
	        }
	      });
	
	      dialogRenderDeferObj.promise.then(function () {
	        var animationPromise = null;
	
	        if (attrs.dialogInClass) {
	          animationPromise = $animateCss(element, {
	            addClass: attrs.dialogInClass
	          }).start();
	
	          scope.$on($daoDialogStack.NOW_CLOSING_EVENT, function (e, setIsAsync) {
	            var done = setIsAsync();
	            if ($animateCss) {
	              $animateCss(element, {
	                removeClass: attrs.dialogInClass
	              }).start().then(done);
	            } else {
	              $animate.removeClass(element, attrs.dialogInClass).then(done);
	            }
	          });
	        }
	
	        $q.when(animationPromise).then(function () {
	          var inputWithAutofocus = element[0].querySelector('[autofocus]');
	          /**
	           * Auto-focusing of a freshly-opened dialog element causes any child elements
	           * with the autofocus attribute to lose focus. This is an issue on touch
	           * based devices which will show and then hide the onscreen keyboard.
	           * Attempts to refocus the autofocus element via JavaScript will not reopen
	           * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	           * the dialog element if the dialog does not contain an autofocus element.
	           */
	          if (inputWithAutofocus) {
	            inputWithAutofocus.focus();
	          } else {
	            element[0].focus();
	          }
	        });
	
	        // Notify {@link $daoDialogStack} that dialog is rendered.
	        var dialog = $daoDialogStack.getTop();
	        if (dialog) {
	          $daoDialogStack.dialogRendered(dialog.key);
	        }
	      });
	    }
	  };
	}
	
	function daoDialogAnimationClass() {
	  return {
	    compile: function compile(tElement, tAttrs) {
	      if (tAttrs.dialogAnimation) {
	        tElement.addClass(tAttrs.daoDialogAnimationClass);
	      }
	    }
	  };
	}
	
	function daoDialogTransclude() {
	  return {
	    link: function link($scope, $element, $attrs, controller, $transclude) {
	      $transclude($scope.$parent, function (clone) {
	        $element.empty();
	        $element.append(clone);
	      });
	    }
	  };
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	module.exports = __webpack_require__(30).Object.keys;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(25);
	
	__webpack_require__(27)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(26);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(28)
	  , core    = __webpack_require__(30)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(30)
	  , ctx       = __webpack_require__(31)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 29 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 30 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao backdrop\" ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"></div>"

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao dialog dialog-overlay\" dialog-render={{$isRendered}} tabindex=-1 role=dialog ng-style=\"{'z-index': 1050 + index*10, display: 'flex'}\"><div class=dialog-overlay-inner><div class=\"dialog-container show-dialog\" dao-dialog-transclude></div></div></div>"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-dialog.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-dialog.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.backdrop{background-color:rgba(61,65,66,.6)}.dao.backdrop,.dao.dialog.dialog-overlay{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;min-height:100%}.dao.dialog.dialog-overlay{display:flex;justify-content:center;background-color:transparent}.dao.dialog .dialog-overlay-inner{padding:100px 22px;box-sizing:border-box;max-height:100%;width:100%;overflow:auto}.dao.dialog .dialog-container{max-width:554px;background:#e6e9ed;border-radius:4px;box-shadow:0 3px 30px rgba(16,17,18,.3);margin:0 auto}.dao.dialog .dialog-container.show-dialog{animation:showDialog .3s}@keyframes showDialog{0%{transform:scale(.7);-webkit-transform:scale(.7)}45%{transform:scale(1.05);-webkit-transform:scale(1.05)}80%{transform:scale(.95);-webkit-transform:scale(.95)}to{transform:scale(1);-webkit-transform:scale(1)}}.dao.dialog .dialog-header{display:flex;justify-content:space-between;padding:20px 22px;background-color:#e6e9ed;border-radius:4px 4px 0 0;box-shadow:inset 0 -1px 0 rgba(204,209,217,.5);color:#434a54;font-size:18px;font-weight:300;line-height:24px}.dao.dialog .dialog-header .dao-close{cursor:pointer}.dao.dialog .dialog-header .dao-close svg{width:17px;height:17px;fill:#aab2bd}.dao.dialog .dialog-header .dao-close svg:hover{fill:#656d78}.dao.dialog .dialog-body{padding:20px 22px;background-color:#fff;color:#434a54;font-size:14px;font-weight:400;line-height:21px}.dao.dialog .dialog-footer{display:flex;justify-content:flex-end;padding:14px 22px;background-color:#e6e9ed;border-radius:0 0 4px 4px;box-shadow:inset 0 1px 0 rgba(204,209,217,.5)}.dao.dialog .dialog-footer .dao-btn{border:1px solid #aab2bd;color:#434a54}.dao.dialog .dialog-footer .dao-btn:focus,.dao.dialog .dialog-footer .dao-btn:hover{border:1px solid #656d78}.dao.dialog .dialog-footer .dao-btn.btn-disabled,.dao.dialog .dialog-footer .dao-btn[disabled]{color:#ccd1d9;border:1px solid #aab2bd}.dao.dialog .dialog-footer .dao-btn.btn-disabled:focus,.dao.dialog .dialog-footer .dao-btn.btn-disabled:hover,.dao.dialog .dialog-footer .dao-btn[disabled]:focus,.dao.dialog .dialog-footer .dao-btn[disabled]:hover{border:1px solid #aab2bd}.dao.dialog .dialog-footer .dao-btn.btn-primary{color:#fff;border:1px solid #5d9cec}.dao.dialog .dialog-footer .dao-btn.btn-primary:focus,.dao.dialog .dialog-footer .dao-btn.btn-primary:hover{border:1px solid #4a89dc}.dao.dialog .dao-multi-step{overflow:hidden}.dao.dialog .dao-multi-step .dao-step{max-width:554px;background-color:#fff;overflow:hidden;border-radius:0 0 4px 4px}@keyframes shake{0%{transform:translateY(-100%)}40%{transform:translateY(4%)}50%{transform:translateY(-3%)}65%{transform:translateY(2%)}80%{transform:translateY(-1%)}to{transform:translateY(0)}}.dao.dialog .dao-multi-step .dao-step.dao-animate.ng-enter{animation:shake .6s}.dao.dialog .dao-multi-step .dialog-footer{display:block;overflow:hidden}.dao.dialog .dao-multi-step .dialog-footer .dao-btn{float:left}.dao.dialog .dao-multi-step .dialog-footer .dao-btn.btn-primary{float:right}", ""]);
	
	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoDialogHeader = __webpack_require__(39);
	
	var _daoDialogHeader2 = _interopRequireDefault(_daoDialogHeader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*ngInject*/
	function DaoDialogHeader() {
	  return {
	    restrict: 'EA',
	    template: _daoDialogHeader2.default,
	    transclude: true
	  };
	}
	
	exports.default = DaoDialogHeader;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=dialog-header><ng-transclude></ng-transclude><div ng-click=\"$dismiss('close')\" class=dao-close><svg preserveaspectratio=xMidYMid width=34 height=34 viewbox=\"0 0 34 34\"><path d=\"M17.000,0.001 C7.612,0.001 0.001,7.612 0.001,17.000 C0.001,26.388 7.612,33.999 17.000,33.999 C26.388,33.999 33.999,26.388 33.999,17.000 C33.999,7.612 26.388,0.001 17.000,0.001 ZM24.166,21.666 C24.166,21.666 21.666,24.166 21.666,24.166 C21.666,24.166 17.000,19.500 17.000,19.500 C17.000,19.500 12.334,24.166 12.334,24.166 C12.334,24.166 9.834,21.666 9.834,21.666 C9.834,21.666 14.500,17.000 14.500,17.000 C14.500,17.000 9.834,12.335 9.834,12.335 C9.834,12.335 12.334,9.834 12.334,9.834 C12.334,9.834 17.000,14.500 17.000,14.500 C17.000,14.500 21.666,9.834 21.666,9.834 C21.666,9.834 24.166,12.335 24.166,12.335 C24.166,12.335 19.500,17.000 19.500,17.000 C19.500,17.000 24.166,21.666 24.166,21.666 Z\" id=path-1 fill-rule=evenodd></path></svg></div></div>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(41);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(42);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _daoMultiStep = __webpack_require__(46);
	
	var _daoMultiStep2 = _interopRequireDefault(_daoMultiStep);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var forEach = angular.forEach;
	
	/*@ngInject*/
	function DaoMultiStep() {
	  return {
	    restrict: 'EA',
	    controller: DaoMultiStepController,
	    controllerAs: 'multi',
	    scope: {
	      preStep: '=',
	      nextStep: '='
	    },
	    template: _daoMultiStep2.default,
	    bindToController: true,
	    transclude: true
	  };
	}
	
	/*@ngInject*/
	
	var DaoMultiStepController = function () {
	  DaoMultiStepController.$inject = ["$scope"];
	  function DaoMultiStepController($scope) {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, DaoMultiStepController);
	
	    this.steps = [];
	    this.currentIndex = 0;
	
	    $scope.$watch('multi.currentIndex', function (value) {
	      _this.activeStep();
	    });
	
	    this.preStep = function () {
	      var step_length = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	      _this.currentIndex = _this.currentIndex - step_length;
	    };
	
	    this.nextStep = function () {
	      var step_length = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	      _this.currentIndex = _this.currentIndex + step_length;
	    };
	  }
	
	  (0, _createClass3.default)(DaoMultiStepController, [{
	    key: 'activeStep',
	    value: function activeStep() {
	      var currentStep = this.steps[this.currentIndex];
	
	      if (this.steps.length == 0) return;
	
	      forEach(this.steps, function (step) {
	        if (step !== currentStep) {
	          step.isActive = false;
	        }
	      });
	
	      currentStep.isActive = true;
	    }
	  }, {
	    key: 'addStep',
	    value: function addStep(stepScope) {
	      var _this2 = this;
	
	      this.steps.push(stepScope);
	
	      this.activeStep();
	
	      stepScope.$on('$destroy', function (event) {
	        _this2.removeStep(stepScope);
	      });
	    }
	  }, {
	    key: 'removeStep',
	    value: function removeStep(step) {
	      var index = this.steps.indexOf(step);
	      if (index !== -1) {
	        this.steps.splice(index, 1);
	      }
	    }
	  }]);
	  return DaoMultiStepController;
	}();
	
	exports.default = DaoMultiStep;

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty = __webpack_require__(43);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(45);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-multi-step ng-transclude></div>"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoStep = __webpack_require__(48);
	
	var _daoStep2 = _interopRequireDefault(_daoStep);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*ngInject*/
	function DaoStep() {
	  return {
	    restrict: 'EA',
	    require: '^daoMultiStep',
	    scope: {
	      daoAnimate: '@'
	    },
	    link: linkFun,
	    template: _daoStep2.default,
	    transclude: true
	  };
	}
	
	function linkFun(scope, element, attrs, daoMultiStepCtrl) {
	
	  daoMultiStepCtrl.addStep(scope);
	
	  scope.$watch('isActive', function (value) {
	    element.toggleClass('active', !!value);
	  });
	}
	
	exports.default = DaoStep;

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div ng-if=isActive class=dao-step ng-class=\"{'dao-animate':daoAnimate}\" ng-transclude></div>"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tooltip = __webpack_require__(50);
	
	var tooltip = _interopRequireWildcard(_tooltip);
	
	__webpack_require__(54);
	
	var _position = __webpack_require__(56);
	
	var position = _interopRequireWildcard(_position);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	
	var moduleName = 'dao.tooltip';
	angular.module(moduleName, ['dao.position']).provider('$daoTooltip', tooltip.$daoTooltip).directive('daoTooltipTemplateTransclude', tooltip.daoTooltipTemplateTransclude).directive('daoTooltipClasses', tooltip.daoTooltipClasses).directive('daoTooltipPopup', tooltip.daoTooltipPopup).directive('daoTooltip', tooltip.daoTooltip).directive('daoTooltipTemplatePopup', tooltip.daoTooltipTemplatePopup).directive('daoTooltipTemplate', tooltip.daoTooltipTemplate).directive('daoTooltipHtmlPopup', tooltip.daoTooltipHtmlPopup).directive('daoTooltipHtml', tooltip.daoTooltipHtml);
	
	angular.module('dao.position', []).factory('$daoPosition', position.$daoPosition);
	
	exports.default = moduleName;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	daoTooltipTemplateTransclude.$inject = ["$animate", "$sce", "$compile", "$templateRequest"];
	daoTooltip.$inject = ["$daoTooltip"];
	daoTooltipTemplate.$inject = ["$daoTooltip"];
	daoTooltipHtml.$inject = ["$daoTooltip"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.stackedMap = undefined;
	exports.$daoTooltip = $daoTooltip;
	exports.daoTooltipTemplateTransclude = daoTooltipTemplateTransclude;
	exports.daoTooltipClasses = daoTooltipClasses;
	exports.daoTooltipPopup = daoTooltipPopup;
	exports.daoTooltip = daoTooltip;
	exports.daoTooltipTemplatePopup = daoTooltipTemplatePopup;
	exports.daoTooltipTemplate = daoTooltipTemplate;
	exports.daoTooltipHtmlPopup = daoTooltipHtmlPopup;
	exports.daoTooltipHtml = daoTooltipHtml;
	
	var _tooltipTemplatePopup = __webpack_require__(51);
	
	var _tooltipTemplatePopup2 = _interopRequireDefault(_tooltipTemplatePopup);
	
	var _tooltipHtmlPopup = __webpack_require__(52);
	
	var _tooltipHtmlPopup2 = _interopRequireDefault(_tooltipHtmlPopup);
	
	var _tooltipPopup = __webpack_require__(53);
	
	var _tooltipPopup2 = _interopRequireDefault(_tooltipPopup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stackedMap = exports.stackedMap = {
	  createNew: function createNew() {
	    var stack = [];
	
	    return {
	      add: function add(key, value) {
	        stack.push({
	          key: key,
	          value: value
	        });
	      },
	
	      get: function get(key) {
	        for (var i = 0; i < stack.length; i++) {
	          if (key === stack[i].key) {
	            return stack[i];
	          }
	        }
	      },
	
	      keys: function keys() {
	        var keys = [];
	        for (var i = 0; i < stack.length; i++) {
	          keys.push(stack[i].key);
	        }
	
	        return keys;
	      },
	
	      top: function top() {
	        return stack[stack.length - 1];
	      },
	
	      remove: function remove(key) {
	        var idx = -1;
	        for (var i = 0; i < stack.length; i++) {
	          if (key === stack[i].key) {
	            idx = i;
	            break;
	          }
	        }
	
	        return stack.splice(idx, 1)[0];
	      },
	
	      removeTop: function removeTop() {
	        return stack.splice(stack.length - 1, 1)[0];
	      },
	
	      length: function length() {
	        return stack.length;
	      }
	    };
	  }
	};
	
	/*@ngInject*/
	function $daoTooltip() {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    animation: true,
	    popupDelay: 0,
	    popupCloseDelay: 0,
	    useContentExp: false
	  };
	
	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'outsideClick': 'outsideClick',
	    'focus': 'blur',
	    'none': ''
	  };
	
	  // The options specified to the provider globally.
	  var globalOptions = {};
	
	  /**
	   * `options({})` allows global configuration of all tooltips in the
	   * application.
	   *
	   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
	   *     // place tooltips left instead of top by default
	   *     $tooltipProvider.options( { placement: 'left' } );
	   *   });
	   */
	  this.options = function (value) {
	    angular.extend(globalOptions, value);
	  };
	
	  /**
	   * This allows you to extend the set of trigger mappings available. E.g.:
	   *
	   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
	   */
	  this.setTriggers = function setTriggers(triggers) {
	    angular.extend(triggerMap, triggers);
	  };
	
	  /**
	   * This is a helper function for translating camel-case to snake-case.
	   */
	  function snake_case(name) {
	    var regexp = /[A-Z]/g;
	    var separator = '-';
	    return name.replace(regexp, function (letter, pos) {
	      return (pos ? separator : '') + letter.toLowerCase();
	    });
	  }
	
	  /**
	   * Returns the actual instance of the $tooltip service.
	   * TODO support multiple triggers
	   */
	
	  /*@ngInject*/
	  this.$get = function ($window, $compile, $timeout, $document, $daoPosition, $interpolate, $rootScope, $parse) {
	    var openedTooltips = stackedMap.createNew();
	    $document.on('keypress', function (e) {
	      if (e.which === 27) {
	        var last = openedTooltips.top();
	        if (last) {
	          last.value.close();
	          openedTooltips.removeTop();
	          last = null;
	        }
	      }
	    });
	
	    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
	      options = angular.extend({}, defaultOptions, globalOptions, options);
	
	      /**
	       * Returns an object of show and hide triggers.
	       *
	       * If a trigger is supplied,
	       * it is used to show the tooltip; otherwise, it will use the `trigger`
	       * option passed to the `$tooltipProvider.options` method; else it will
	       * default to the trigger supplied to this directive factory.
	       *
	       * The hide trigger is based on the show trigger. If the `trigger` option
	       * was passed to the `$tooltipProvider.options` method, it will use the
	       * mapped trigger from `triggerMap` or the passed trigger if the map is
	       * undefined; otherwise, it uses the `triggerMap` value of the show
	       * trigger; else it will just use the show trigger.
	       */
	      function getTriggers(trigger) {
	        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
	        var hide = show.map(function (trigger) {
	          return triggerMap[trigger] || trigger;
	        });
	
	        return {
	          show: show,
	          hide: hide
	        };
	      }
	
	      var directiveName = snake_case(ttType);
	
	      var startSym = $interpolate.startSymbol();
	      var endSym = $interpolate.endSymbol();
	      var template = '<div ' + directiveName + '-popup ' + 'title="' + startSym + 'title' + endSym + '" ' + (options.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + startSym + 'content' + endSym + '" ') + 'placement="' + startSym + 'placement' + endSym + '" ' + 'popup-class="' + startSym + 'popupClass' + endSym + '" ' + 'animation="animation" ' + 'is-open="isOpen"' + 'origin-scope="origScope" ' + 'style="visibility: hidden; display: block; top: -9999px; left: -9999px;"' + '>' + '</div>';
	
	      return {
	        compile: function compile(tElem, tAttrs) {
	          var tooltipLinker = $compile(template);
	
	          return function link(scope, element, attrs, tooltipCtrl) {
	            var tooltip;
	            var tooltipLinkedScope;
	            var transitionTimeout;
	            var showTimeout;
	            var hideTimeout;
	            var positionTimeout;
	            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
	            var triggers = getTriggers(undefined);
	            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
	            var ttScope = scope.$new(true);
	            var repositionScheduled = false;
	            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
	            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
	            var observers = [];
	
	            var positionTooltip = function positionTooltip() {
	              // check if tooltip exists and is not empty
	              if (!tooltip || !tooltip.html()) {
	                return;
	              }
	
	              if (!positionTimeout) {
	                positionTimeout = $timeout(function () {
	                  // Reset the positioning.
	                  tooltip.css({
	                    top: 0,
	                    left: 0
	                  });
	
	                  // Now set the calculated positioning.
	                  var ttCss = $daoPosition.positionElements(element, tooltip, ttScope.placement, appendToBody);
	                  ttCss.top += 'px';
	                  ttCss.left += 'px';
	                  ttCss.visibility = 'visible';
	                  tooltip.css(ttCss);
	
	                  positionTimeout = null;
	                }, 0, false);
	              }
	            };
	
	            // Set up the correct scope to allow transclusion later
	            ttScope.origScope = scope;
	
	            // By default, the tooltip is not open.
	            // TODO add ability to start tooltip opened
	            ttScope.isOpen = false;
	            openedTooltips.add(ttScope, {
	              close: hide
	            });
	
	            function toggleTooltipBind() {
	              if (!ttScope.isOpen) {
	                showTooltipBind();
	              } else {
	                hideTooltipBind();
	              }
	            }
	
	            // Show the tooltip with delay if specified, otherwise show it immediately
	            function showTooltipBind() {
	              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
	                return;
	              }
	
	              cancelHide();
	              prepareTooltip();
	
	              if (ttScope.popupDelay) {
	                // Do nothing if the tooltip was already scheduled to pop-up.
	                // This happens if show is triggered multiple times before any hide is triggered.
	                if (!showTimeout) {
	                  showTimeout = $timeout(show, ttScope.popupDelay, false);
	                }
	              } else {
	                show();
	              }
	            }
	
	            function hideTooltipBind() {
	              cancelShow();
	
	              if (ttScope.popupCloseDelay) {
	                if (!hideTimeout) {
	                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
	                }
	              } else {
	                hide();
	              }
	            }
	
	            // Show the tooltip popup element.
	            function show() {
	              cancelShow();
	              cancelHide();
	
	              // Don't show empty tooltips.
	              if (!ttScope.content) {
	                return angular.noop;
	              }
	
	              createTooltip();
	
	              // And show the tooltip.
	              ttScope.$evalAsync(function () {
	                ttScope.isOpen = true;
	                assignIsOpen(true);
	                positionTooltip();
	              });
	            }
	
	            function cancelShow() {
	              if (showTimeout) {
	                $timeout.cancel(showTimeout);
	                showTimeout = null;
	              }
	
	              if (positionTimeout) {
	                $timeout.cancel(positionTimeout);
	                positionTimeout = null;
	              }
	            }
	
	            // Hide the tooltip popup element.
	            function hide() {
	              if (!ttScope) {
	                return;
	              }
	
	              // First things first: we don't show it anymore.
	              ttScope.$evalAsync(function () {
	                ttScope.isOpen = false;
	                assignIsOpen(false);
	
	                // And now we remove it from the DOM. However, if we have animation, we
	                // need to wait for it to expire beforehand.
	                // FIXME: this is a placeholder for a port of the transitions library.
	                // The fade transition in TWBS is 150ms.
	                if (ttScope.animation) {
	                  if (!transitionTimeout) {
	                    transitionTimeout = $timeout(removeTooltip, 150, false);
	                  }
	                } else {
	                  removeTooltip();
	                }
	              });
	            }
	
	            function cancelHide() {
	              if (hideTimeout) {
	                $timeout.cancel(hideTimeout);
	                hideTimeout = null;
	              }
	
	              if (transitionTimeout) {
	                $timeout.cancel(transitionTimeout);
	                transitionTimeout = null;
	              }
	            }
	
	            function createTooltip() {
	              // There can only be one tooltip element per directive shown at once.
	              if (tooltip) {
	                return;
	              }
	
	              tooltipLinkedScope = ttScope.$new();
	              tooltip = tooltipLinker(tooltipLinkedScope, function (tooltip) {
	                if (appendToBody) {
	                  $document.find('body').append(tooltip);
	                } else {
	                  element.after(tooltip);
	                }
	              });
	
	              prepObservers();
	            }
	
	            function removeTooltip() {
	              cancelShow();
	              cancelHide();
	              unregisterObservers();
	
	              if (tooltip) {
	                tooltip.remove();
	                tooltip = null;
	              }
	
	              if (tooltipLinkedScope) {
	                tooltipLinkedScope.$destroy();
	                tooltipLinkedScope = null;
	              }
	            }
	
	            /**
	             * Set the inital scope values. Once
	             * the tooltip is created, the observers
	             * will be added to keep things in synch.
	             */
	            function prepareTooltip() {
	              ttScope.title = attrs[prefix + 'Title'];
	              if (contentParse) {
	                ttScope.content = contentParse(scope);
	              } else {
	                ttScope.content = attrs[ttType];
	              }
	
	              ttScope.popupClass = attrs[prefix + 'Class'];
	              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
	
	              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
	              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
	              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
	              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
	            }
	
	            function assignIsOpen(isOpen) {
	              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
	                isOpenParse.assign(scope, isOpen);
	              }
	            }
	
	            ttScope.contentExp = function () {
	              return ttScope.content;
	            };
	
	            /**
	             * Observe the relevant attributes.
	             */
	            attrs.$observe('disabled', function (val) {
	              if (val) {
	                cancelShow();
	              }
	
	              if (val && ttScope.isOpen) {
	                hide();
	              }
	            });
	
	            if (isOpenParse) {
	              scope.$watch(isOpenParse, function (val) {
	                if (ttScope && !val === ttScope.isOpen) {
	                  toggleTooltipBind();
	                }
	              });
	            }
	
	            function prepObservers() {
	              observers.length = 0;
	
	              if (contentParse) {
	                observers.push(scope.$watch(contentParse, function (val) {
	                  ttScope.content = val;
	                  if (!val && ttScope.isOpen) {
	                    hide();
	                  }
	                }));
	
	                observers.push(tooltipLinkedScope.$watch(function () {
	                  if (!repositionScheduled) {
	                    repositionScheduled = true;
	                    tooltipLinkedScope.$$postDigest(function () {
	                      repositionScheduled = false;
	                      if (ttScope && ttScope.isOpen) {
	                        positionTooltip();
	                      }
	                    });
	                  }
	                }));
	              } else {
	                observers.push(attrs.$observe(ttType, function (val) {
	                  ttScope.content = val;
	                  if (!val && ttScope.isOpen) {
	                    hide();
	                  } else {
	                    positionTooltip();
	                  }
	                }));
	              }
	
	              observers.push(attrs.$observe(prefix + 'Title', function (val) {
	                ttScope.title = val;
	                if (ttScope.isOpen) {
	                  positionTooltip();
	                }
	              }));
	
	              observers.push(attrs.$observe(prefix + 'Placement', function (val) {
	                ttScope.placement = val ? val : options.placement;
	                if (ttScope.isOpen) {
	                  positionTooltip();
	                }
	              }));
	            }
	
	            function unregisterObservers() {
	              if (observers.length) {
	                angular.forEach(observers, function (observer) {
	                  observer();
	                });
	
	                observers.length = 0;
	              }
	            }
	
	            // hide tooltips/popovers for outsideClick trigger
	            function bodyHideTooltipBind(e) {
	              if (!ttScope || !ttScope.isOpen || !tooltip) {
	                return;
	              }
	
	              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
	              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
	                hideTooltipBind();
	              }
	            }
	
	            var unregisterTriggers = function unregisterTriggers() {
	              triggers.show.forEach(function (trigger) {
	                if (trigger === 'outsideClick') {
	                  element[0].removeEventListener('click', toggleTooltipBind);
	                } else {
	                  element[0].removeEventListener(trigger, showTooltipBind);
	                  element[0].removeEventListener(trigger, toggleTooltipBind);
	                }
	              });
	
	              triggers.hide.forEach(function (trigger) {
	                trigger.split(' ').forEach(function (hideTrigger) {
	                  if (trigger === 'outsideClick') {
	                    $document[0].removeEventListener('click', bodyHideTooltipBind);
	                  } else {
	                    element[0].removeEventListener(hideTrigger, hideTooltipBind);
	                  }
	                });
	              });
	            };
	
	            function prepTriggers() {
	              var val = attrs[prefix + 'Trigger'];
	              unregisterTriggers();
	
	              triggers = getTriggers(val);
	
	              if (triggers.show !== 'none') {
	                triggers.show.forEach(function (trigger, idx) {
	                  // Using raw addEventListener due to jqLite/jQuery bug - #4060
	                  if (trigger === 'outsideClick') {
	                    element[0].addEventListener('click', toggleTooltipBind);
	                    $document[0].addEventListener('click', bodyHideTooltipBind);
	                  } else if (trigger === triggers.hide[idx]) {
	                    element[0].addEventListener(trigger, toggleTooltipBind);
	                  } else if (trigger) {
	                    element[0].addEventListener(trigger, showTooltipBind);
	                    triggers.hide[idx].split(' ').forEach(function (trigger) {
	                      element[0].addEventListener(trigger, hideTooltipBind);
	                    });
	                  }
	
	                  element.on('keypress', function (e) {
	                    if (e.which === 27) {
	                      hideTooltipBind();
	                    }
	                  });
	                });
	              }
	            }
	
	            prepTriggers();
	
	            var animation = scope.$eval(attrs[prefix + 'Animation']);
	            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;
	
	            var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
	            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;
	
	            // if a tooltip is attached to <body> we need to remove it on
	            // location change as its parent scope will probably not be destroyed
	            // by the change.
	            if (appendToBody) {
	              scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
	                if (ttScope.isOpen) {
	                  hide();
	                }
	              });
	            }
	
	            // Make sure tooltip is destroyed and removed.
	            scope.$on('$destroy', function onDestroyTooltip() {
	              unregisterTriggers();
	              removeTooltip();
	              openedTooltips.remove(ttScope);
	              ttScope = null;
	            });
	          };
	        }
	      };
	    };
	  };
	  this.$get.$inject = ["$window", "$compile", "$timeout", "$document", "$daoPosition", "$interpolate", "$rootScope", "$parse"];
	}
	/*@ngInject*/
	function daoTooltipTemplateTransclude($animate, $sce, $compile, $templateRequest) {
	  return {
	    link: function link(scope, elem, attrs) {
	      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);
	
	      var changeCounter = 0,
	          currentScope,
	          previousElement,
	          currentElement;
	
	      var cleanupLastIncludeContent = function cleanupLastIncludeContent() {
	        if (previousElement) {
	          previousElement.remove();
	          previousElement = null;
	        }
	
	        if (currentScope) {
	          currentScope.$destroy();
	          currentScope = null;
	        }
	
	        if (currentElement) {
	          $animate.leave(currentElement).then(function () {
	            previousElement = null;
	          });
	
	          previousElement = currentElement;
	          currentElement = null;
	        }
	      };
	
	      scope.$watch($sce.parseAsResourceUrl(attrs.daoTooltipTemplateTransclude), function (src) {
	        var thisChangeId = ++changeCounter;
	
	        if (src) {
	          //set the 2nd param to true to ignore the template request error so that the inner
	          //contents and scope can be cleaned up.
	          $templateRequest(src, true).then(function (response) {
	            if (thisChangeId !== changeCounter) {
	              return;
	            }
	
	            var newScope = origScope.$new();
	            var template = response;
	
	            var clone = $compile(template)(newScope, function (clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });
	
	            currentScope = newScope;
	            currentElement = clone;
	
	            currentScope.$emit('$includeContentLoaded', src);
	          }, function () {
	
	            if (thisChangeId === changeCounter) {
	              cleanupLastIncludeContent();
	              scope.$emit('$includeContentError', src);
	            }
	          });
	
	          scope.$emit('$includeContentRequested', src);
	        } else {
	          cleanupLastIncludeContent();
	        }
	      });
	
	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}
	/*@ngInject*/
	function daoTooltipClasses() {
	  return {
	    restrict: 'A',
	    link: function link(scope, element, attrs) {
	      if (scope.placement) {
	        element.addClass(scope.placement);
	      }
	
	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }
	
	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	}
	/*@ngInject*/
	function daoTooltipPopup() {
	  return {
	    replace: true,
	    scope: {
	      content: '@',
	      placement: '@',
	      popupClass: '@',
	      animation: '&',
	      isOpen: '&'
	    },
	    // templateUrl: 'components/dao-tooltip/tooltip-popup.html',
	    template: _tooltipPopup2.default
	  };
	}
	/*@ngInject*/
	function daoTooltip($daoTooltip) {
	  return $daoTooltip('daoTooltip', 'tooltip', 'mouseenter');
	}
	/*@ngInject*/
	function daoTooltipTemplatePopup() {
	  return {
	    replace: true,
	    scope: {
	      contentExp: '&',
	      placement: '@',
	      popupClass: '@',
	      animation: '&',
	      isOpen: '&',
	      originScope: '&'
	    },
	    template: _tooltipTemplatePopup2.default
	  };
	}
	/*@ngInject*/
	function daoTooltipTemplate($daoTooltip) {
	  return $daoTooltip('daoTooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}
	/*@ngInject*/
	function daoTooltipHtmlPopup() {
	  return {
	    replace: true,
	    scope: {
	      contentExp: '&',
	      placement: '@',
	      popupClass: '@',
	      animation: '&',
	      isOpen: '&'
	    },
	    template: _tooltipHtmlPopup2.default
	  };
	}
	/*@ngInject*/
	// templateUrl: 'components/dao-tooltip/tooltip-html-popup.html',
	function daoTooltipHtml($daoTooltip) {
	  return $daoTooltip('daoTooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao tooltip\" tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=tooltip-arrow></div><div class=tooltip-inner dao-tooltip-template-transclude=contentExp() tooltip-template-transclude-scope=originScope()></div></div>"

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao tooltip\" tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=tooltip-arrow></div><div class=tooltip-inner ng-bind-html=contentExp()></div></div>"

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao tooltip\" tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=tooltip-arrow></div><div class=tooltip-inner ng-bind=content></div></div>"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./tooltip.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./tooltip.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.tooltip{position:absolute;z-index:1070;display:block;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.42857;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:12px;opacity:0;filter:alpha(opacity=0)}.dao.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.dao.tooltip.top{margin-top:-3px;padding:5px 0}.dao.tooltip.right{margin-left:3px;padding:0 5px}.dao.tooltip.bottom{margin-top:3px;padding:5px 0}.dao.tooltip.left{margin-left:-3px;padding:0 5px}.dao.tooltip .tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.dao.tooltip .tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.dao.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.dao.tooltip.top-left .tooltip-arrow{bottom:0;right:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.dao.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.dao.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.dao.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.dao.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.dao.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.dao.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}", ""]);
	
	// exports


/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	$daoPosition.$inject = ["$document", "$window"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$daoPosition = $daoPosition;
	/*@ngInject*/function $daoPosition($document, $window) {
	  function getStyle(el, cssprop) {
	    if (el.currentStyle) {
	      //IE
	      return el.currentStyle[cssprop];
	    } else if ($window.getComputedStyle) {
	      return $window.getComputedStyle(el)[cssprop];
	    }
	
	    // finally try and get inline style
	    return el.style[cssprop];
	  }
	
	  /**
	   * Checks if a given element is statically positioned
	   * @param element - raw DOM element
	   */
	  function isStaticPositioned(element) {
	    return (getStyle(element, 'position') || 'static') === 'static';
	  }
	
	  /**
	   * returns the closest, non-statically positioned parentOffset of a given element
	   * @param element
	   */
	  var parentOffsetEl = function parentOffsetEl(element) {
	    var docDomEl = $document[0];
	    var offsetParent = element.offsetParent || docDomEl;
	    while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent)) {
	      offsetParent = offsetParent.offsetParent;
	    }
	
	    return offsetParent || docDomEl;
	  };
	
	  return {
	    /**
	     * Provides read-only equivalent of jQuery's position function:
	     * http://api.jquery.com/position/
	     */
	    position: function position(element) {
	      var elBCR = this.offset(element);
	      var offsetParentBCR = { top: 0, left: 0 };
	      var offsetParentEl = parentOffsetEl(element[0]);
	      if (offsetParentEl !== $document[0]) {
	        offsetParentBCR = this.offset(angular.element(offsetParentEl));
	        offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
	        offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
	      }
	
	      var boundingClientRect = element[0].getBoundingClientRect();
	      return {
	        width: boundingClientRect.width || element.prop('offsetWidth'),
	        height: boundingClientRect.height || element.prop('offsetHeight'),
	        top: elBCR.top - offsetParentBCR.top,
	        left: elBCR.left - offsetParentBCR.left
	      };
	    },
	
	    /**
	     * Provides read-only equivalent of jQuery's offset function:
	     * http://api.jquery.com/offset/
	     */
	    offset: function offset(element) {
	      var boundingClientRect = element[0].getBoundingClientRect();
	      return {
	        width: boundingClientRect.width || element.prop('offsetWidth'),
	        height: boundingClientRect.height || element.prop('offsetHeight'),
	        top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
	        left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
	      };
	    },
	
	    /**
	     * Provides coordinates for the targetEl in relation to hostEl
	     */
	    positionElements: function positionElements(hostEl, targetEl, positionStr, appendToBody) {
	      var positionStrParts = positionStr.split('-');
	      var pos0 = positionStrParts[0],
	          pos1 = positionStrParts[1] || 'center';
	
	      var hostElPos, targetElWidth, targetElHeight, targetElPos;
	
	      hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
	
	      targetElWidth = targetEl.prop('offsetWidth');
	      targetElHeight = targetEl.prop('offsetHeight');
	
	      var shiftWidth = {
	        center: function center() {
	          return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
	        },
	
	        left: function left() {
	          return hostElPos.left;
	        },
	
	        right: function right() {
	          return hostElPos.left + hostElPos.width;
	        }
	      };
	
	      var shiftHeight = {
	        center: function center() {
	          return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
	        },
	
	        top: function top() {
	          return hostElPos.top;
	        },
	
	        bottom: function bottom() {
	          return hostElPos.top + hostElPos.height;
	        }
	      };
	
	      switch (pos0) {
	        case 'right':
	          targetElPos = {
	            top: shiftHeight[pos1](),
	            left: shiftWidth[pos0]()
	          };
	          break;
	        case 'left':
	          targetElPos = {
	            top: shiftHeight[pos1](),
	            left: hostElPos.left - targetElWidth
	          };
	          break;
	        case 'bottom':
	          targetElPos = {
	            top: shiftHeight[pos0](),
	            left: shiftWidth[pos1]()
	          };
	          break;
	        default:
	          targetElPos = {
	            top: hostElPos.top - targetElHeight,
	            left: shiftWidth[pos1]()
	          };
	      }
	
	      return targetElPos;
	    }
	  };
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popover = __webpack_require__(58);
	
	var popover = _interopRequireWildcard(_popover);
	
	__webpack_require__(62);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	
	var moduleName = 'dao.popover';
	angular.module(moduleName, []).directive('daoPopoverTemplatePopup', popover.daoPopoverTemplatePopup).directive('daoPopoverTemplate', popover.daoPopoverTemplate).directive('daoPopoverHtmlPopup', popover.daoPopoverHtmlPopup).directive('daoPopoverHtml', popover.daoPopoverHtml).directive('daoPopoverPopup', popover.daoPopoverPopup).directive('daoPopover', popover.daoPopover);
	
	exports.default = moduleName;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	daoPopoverTemplate.$inject = ["$daoTooltip"];
	daoPopoverHtml.$inject = ["$daoTooltip"];
	daoPopover.$inject = ["$daoTooltip"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.daoPopoverTemplatePopup = daoPopoverTemplatePopup;
	exports.daoPopoverTemplate = daoPopoverTemplate;
	exports.daoPopoverHtmlPopup = daoPopoverHtmlPopup;
	exports.daoPopoverHtml = daoPopoverHtml;
	exports.daoPopoverPopup = daoPopoverPopup;
	exports.daoPopover = daoPopover;
	
	var _popover = __webpack_require__(59);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _popoverTemplate = __webpack_require__(60);
	
	var _popoverTemplate2 = _interopRequireDefault(_popoverTemplate);
	
	var _popoverHtml = __webpack_require__(61);
	
	var _popoverHtml2 = _interopRequireDefault(_popoverHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*@ngInject*/
	function daoPopoverTemplatePopup() {
	  return {
	    replace: true,
	    scope: {
	      title: '@',
	      contentExp: '&',
	      placement: '@',
	      popupClass: '@',
	      animation: '&',
	      isOpen: '&',
	      originScope: '&'
	    },
	    template: _popoverTemplate2.default
	  };
	}
	
	/*@ngInject*/
	function daoPopoverTemplate($daoTooltip) {
	  return $daoTooltip('daoPopoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}
	
	/*@ngInject*/
	function daoPopoverHtmlPopup() {
	  return {
	    replace: true,
	    scope: {
	      contentExp: '&',
	      title: '@',
	      placement: '@',
	      popupClass: '@',
	      animation: '&',
	      isOpen: '&'
	    },
	    template: _popoverHtml2.default
	  };
	}
	
	/*@ngInject*/
	function daoPopoverHtml($daoTooltip) {
	  return $daoTooltip('daoPopoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}
	
	/*@ngInject*/
	function daoPopoverPopup() {
	  return {
	    replace: true,
	    scope: {
	      title: '@',
	      content: '@',
	      placement: '@',
	      popupClass: '@',
	      animation: '&',
	      isOpen: '&'
	    },
	    template: _popover2.default
	  };
	}
	
	/*@ngInject*/
	function daoPopover($daoTooltip) {
	  return $daoTooltip('daoPopover', 'popover', 'click');
	}

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao popover\" tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=arrow></div><div class=popover-inner><h3 class=popover-title ng-bind=title ng-if=title></h3><div class=popover-content ng-bind=content></div></div></div>"

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao popover\" tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=arrow></div><div class=popover-inner><h3 class=popover-title ng-bind=title ng-if=title></h3><div class=popover-content dao-tooltip-template-transclude=contentExp() tooltip-template-transclude-scope=originScope()></div></div></div>"

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao popover\" tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=arrow></div><div class=popover-inner><h3 class=popover-title ng-bind=title ng-if=title></h3><div class=popover-content ng-bind-html=contentExp()></div></div></div>"

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./popover.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./popover.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.42857;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:14px;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.2)}.dao.popover.top{margin-top:-10px}.dao.popover.right{margin-left:10px}.dao.popover.bottom{margin-top:10px}.dao.popover.left{margin-left:-10px}.dao.popover .popover-title{margin:0;padding:20px 22px;font-size:14px;background-color:#e6e9ed;box-shadow:inset 0 -1px 0 rgba(204,209,217,.5);border-radius:5px 5px 0 0}.dao.popover .popover-content{padding:20px 22px}.dao.popover>.arrow,.dao.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.dao.popover>.arrow{border-width:11px}.dao.popover>.arrow:after{border-width:10px;content:\"\"}.dao.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,.25);bottom:-11px}.dao.popover.top>.arrow:after{content:\" \";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.dao.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,.25)}.dao.popover.right>.arrow:after{content:\" \";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.dao.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25);top:-11px}.dao.popover.bottom>.arrow:after{content:\" \";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.dao.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.dao.popover.left>.arrow:after{content:\" \";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}", ""]);
	
	// exports


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leftNav = __webpack_require__(65);
	
	var moduleName = 'dao.nav'; /**
	                             * Created by yeting on 16/1/15.
	                             */
	
	angular.module(moduleName, []).directive('leftNav', _leftNav.LeftNavDirective);
	
	exports.default = moduleName;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LeftNavDirective = LeftNavDirective;
	
	var _leftNav = __webpack_require__(66);
	
	var _leftNav2 = _interopRequireDefault(_leftNav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function LeftNavDirective() {
	  /*ngInject*/
	
	  return {
	    restrict: 'E',
	    scope: {},
	    template: _leftNav2.default,
	    replace: true
	  };
	
	  //function LeftNavLink() {
	  //}
	  //
	  //function LeftNavCompile() {
	  //}
	}
	
	//function LeftNavController() {
	//}

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao left-nav\"><div class=nav-logo></div><div class=nav-item tooltip-placement=right dao-tooltip=用户><svg><use xlink:href=#users></use></svg></div><div class=nav-item tooltip-placement=right dao-tooltip=对话><svg><use xlink:href=#conversation></use></svg></div><div class=nav-item tooltip-placement=right dao-tooltip=手动消息><svg><use xlink:href=#manual-messages></use></svg></div><div class=nav-item tooltip-placement=right dao-tooltip=自动消息><svg><use xlink:href=#auto-messages></use></svg></div></div>"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoInput = __webpack_require__(68);
	
	var _daoInput2 = _interopRequireDefault(_daoInput);
	
	__webpack_require__(69);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DaoInputDirective() {
	  /*ngInject*/
	
	  return {
	    restrict: 'E',
	    scope: {
	      state: '=',
	      message: '@',
	      placeholder: '@',
	      hasButton: '@'
	    },
	    template: _daoInput2.default,
	    transclude: true,
	    compile: DaoInputCompile,
	    link: DaoInputLink
	  };
	}
	
	//controller: DaoInputController,
	//controllerAs: 'vm',
	//bindToController: true,
	function DaoInputCompile() {}
	
	function DaoInputLink() {}
	
	//function DaoInputController() {
	//  var vm = this;
	//
	//  console.log(vm);
	//}
	
	exports.default = DaoInputDirective;

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao input\" ng-class=\"[state,{'has-button': hasButton}]\"><input type=text placeholder={{::placeholder}}><ng-transclude></ng-transclude><div ng-bind-html=message></div></div>"

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-input.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-input.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.input input{margin:0;max-width:100%;flex:1 0 auto;width:456px;outline:0;text-align:left;line-height:1.2142em;background:#fff;padding:.67861429em 1em;border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);border-radius:0;transition:box-shadow .1s ease,border-color .1s ease;box-shadow:none}.dao.input.has-button input{width:356px}.dao.input.has-button button{margin-left:25px}.dao.input.success{color:#2ecc71}.dao.input.success input{border-color:#2ecc71}.dao.input.warning{color:#fc6e51}.dao.input.warning input{border-color:#fc6e51}.dao.input.error{color:#ed5565}.dao.input.error input{border-color:#ed5565}.dao.input.focus input,.dao.input input:focus{border-color:#85b7d9;background:#fff;color:rgba(0,0,0,.8);box-shadow:none}.dao.input.disabled input,.dao.input input[disabled]{background:#e6e9ed;pointer-events:none}", ""]);
	
	// exports


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(41);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _daoDemo = __webpack_require__(72);
	
	var _daoDemo2 = _interopRequireDefault(_daoDemo);
	
	__webpack_require__(73);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DaoDemoBlockDirective = function DaoDemoBlockDirective() {
	  'ngInject';
	
	  (0, _classCallCheck3.default)(this, DaoDemoBlockDirective);
	  this.scope = {
	    title: '@'
	  }; // 独立作用域
	  this.template = _daoDemo2.default; // html 模版
	  this.restrict = 'E';
	  this.transclude = true;
	
	  this.controller = DaoDemoBlockController;
	  this.controllerAs = 'dao';
	  this.bindToController = true;
	};
	
	var DaoDemoBlockController = function DaoDemoBlockController() {
	  'ngInject';
	
	  (0, _classCallCheck3.default)(this, DaoDemoBlockController);
	};
	
	exports.default = DaoDemoBlockDirective;

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao demo-block\"><h4 class=demo-block-header>{{dao.title}}</h4><div ng-transclude></div></div>"

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-demo.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-demo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.demo-block{padding:10px}", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=dao-style.js.map