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
	
	__webpack_require__(10);
	
	__webpack_require__(12);
	
	__webpack_require__(14);
	
	__webpack_require__(16);
	
	__webpack_require__(19);
	
	__webpack_require__(21);
	
	var _classHelper = __webpack_require__(58);
	
	var _classHelper2 = _interopRequireDefault(_classHelper);
	
	var _index = __webpack_require__(59);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(88);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _index5 = __webpack_require__(93);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _index7 = __webpack_require__(102);
	
	var _index8 = _interopRequireDefault(_index7);
	
	var _index9 = __webpack_require__(109);
	
	var _index10 = _interopRequireDefault(_index9);
	
	var _index11 = __webpack_require__(116);
	
	var _index12 = _interopRequireDefault(_index11);
	
	var _daoTableDirective = __webpack_require__(118);
	
	var _daoTableDirective2 = _interopRequireDefault(_daoTableDirective);
	
	var _daoDemoDirective = __webpack_require__(122);
	
	var _daoDemoDirective2 = _interopRequireDefault(_daoDemoDirective);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = angular.module('daoStyle', [_index2.default, _index4.default, _index6.default, _index8.default, _index10.default, _index12.default]); /**
	                                                                                                                                                 * Created by yeting on 15/10/18.
	                                                                                                                                                 */
	
	var appHelp = (0, _classHelper2.default)('daoStyle');
	
	app.directive('daoTable', _daoTableDirective2.default);
	
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
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}.fade{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-property:height,visibility;transition-property:height,visibility;-webkit-transition-duration:.35s;transition-duration:.35s;-webkit-transition-timing-function:ease;transition-timing-function:ease}body{font-family:-apple-system,BlinkMacSystemFont,Neue Haas Grotesk Text Pro,Arial Nova,Segoe UI,Helvetica Neue,\\.PingFang SC,PingFang SC,Microsoft YaHei,Microsoft JhengHei,Source Han Sans SC,Noto Sans CJK SC,Source Han Sans CN,Noto Sans SC,Source Han Sans TC,Noto Sans CJK TC,Hiragino Sans GB,sans-serif;-webkit-font-smoothing:antialiased}", ""]);
	
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

	'use strict';
	
	__webpack_require__(6);
	
	__webpack_require__(8);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-button-group.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-button-group.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-btn-group,.dao-btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.dao-btn-group-vertical>.dao-btn,.dao-btn-group>.dao-btn{position:relative;float:left}.dao-btn-group-vertical>.dao-btn.active,.dao-btn-group-vertical>.dao-btn:active,.dao-btn-group-vertical>.dao-btn:focus,.dao-btn-group-vertical>.dao-btn:hover,.dao-btn-group>.dao-btn.active,.dao-btn-group>.dao-btn:active,.dao-btn-group>.dao-btn:focus,.dao-btn-group>.dao-btn:hover{z-index:2}.dao-btn-group .dao-btn+.dao-btn,.dao-btn-group .dao-btn+.dao-btn-group,.dao-btn-group .dao-btn-group+.dao-btn,.dao-btn-group .dao-btn-group+.dao-btn-group{margin-left:-1px}.dao-btn-group>.dao-btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.dao-btn-group>.dao-btn:first-child{margin-left:0}.dao-btn-group>.dao-btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.dao-btn-group>.dao-btn:last-child:not(:first-child),.dao-btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.dao-btn-group>.dao-btn-group{float:left}.dao-btn-group>.dao-btn-group:not(:first-child):not(:last-child)>.dao-btn{border-radius:0}.dao-btn-group>.dao-btn-group:first-child:not(:last-child)>.dao-btn:last-child,.dao-btn-group>.dao-btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.dao-btn-group>.dao-btn-group:last-child:not(:first-child)>.dao-btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;outline:none!important;padding:6px 18px;font-size:14px;line-height:20px;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dao-btn.active.focus,.dao-btn.active:focus,.dao-btn.focus,.dao-btn:active.focus,.dao-btn:active:focus,.dao-btn:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.dao-btn.focus,.dao-btn:focus,.dao-btn:hover{color:#333;text-decoration:none}.dao-btn.active,.dao-btn:active{outline:0;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.dao-btn+.dao-btn{margin-left:5px}a.dao-btn.disabled,fieldset[disabled] a.dao-btn{pointer-events:none}.dao-btn.blue{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.1);border-color:#217ef2;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.08),0 1px 1px rgba(0,0,0,.08);background-image:linear-gradient(0deg,hsla(0,0%,100%,.06) 0,hsla(0,0%,100%,.06)),linear-gradient(0deg,rgba(9,109,236,.5) 0,rgba(71,153,255,.5));background-color:#3890ff}.dao-btn.blue:hover{background-image:linear-gradient(0deg,rgba(9,109,236,.5) 0,rgba(71,153,255,.5))}.dao-btn.blue:active{background-image:none;box-shadow:inset 0 0 8px rgba(0,0,0,.04)}.color-card.blue>div{display:block;float:left;height:50px;width:50px}.color-card.blue>div:first-child{background-color:#4799ff}.color-card.blue>div:nth-child(2){background-color:#3890ff}.color-card.blue>div:nth-child(3){background-color:#217ef2}.color-card.blue>div:nth-child(4){background-color:#096dec}.dao-btn.green{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.1);border-color:#279a5b;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.08),0 1px 1px rgba(0,0,0,.08);background-image:linear-gradient(0deg,hsla(0,0%,100%,.06) 0,hsla(0,0%,100%,.06)),linear-gradient(0deg,rgba(30,133,76,.5) 0,rgba(36,208,113,.5));background-color:#22c36a}.dao-btn.green:hover{background-image:linear-gradient(0deg,rgba(30,133,76,.5) 0,rgba(36,208,113,.5))}.dao-btn.green:active{background-image:none;box-shadow:inset 0 0 8px rgba(0,0,0,.04)}.color-card.green>div{display:block;float:left;height:50px;width:50px}.color-card.green>div:first-child{background-color:#24d071}.color-card.green>div:nth-child(2){background-color:#22c36a}.color-card.green>div:nth-child(3){background-color:#279a5b}.color-card.green>div:nth-child(4){background-color:#1e854c}.dao-btn.yellow{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.1);border-color:#e7a217;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.08),0 1px 1px rgba(0,0,0,.08);background-image:linear-gradient(0deg,hsla(0,0%,100%,.06) 0,hsla(0,0%,100%,.06)),linear-gradient(0deg,rgba(208,144,16,.5) 0,rgba(248,184,58,.5));background-color:#f7b32b}.dao-btn.yellow:hover{background-image:linear-gradient(0deg,rgba(208,144,16,.5) 0,rgba(248,184,58,.5))}.dao-btn.yellow:active{background-image:none;box-shadow:inset 0 0 8px rgba(0,0,0,.04)}.color-card.yellow>div{display:block;float:left;height:50px;width:50px}.color-card.yellow>div:first-child{background-color:#f8b83a}.color-card.yellow>div:nth-child(2){background-color:#f7b32b}.color-card.yellow>div:nth-child(3){background-color:#e7a217}.color-card.yellow>div:nth-child(4){background-color:#d09010}.dao-btn.orange{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.1);border-color:#de5e18;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.08),0 1px 1px rgba(0,0,0,.08);background-image:linear-gradient(0deg,hsla(0,0%,100%,.06) 0,hsla(0,0%,100%,.06)),linear-gradient(0deg,rgba(199,81,17,.5) 0,rgba(246,120,52,.5));background-color:#f56e25}.dao-btn.orange:hover{background-image:linear-gradient(0deg,rgba(199,81,17,.5) 0,rgba(246,120,52,.5))}.dao-btn.orange:active{background-image:none;box-shadow:inset 0 0 8px rgba(0,0,0,.04)}.color-card.orange>div{display:block;float:left;height:50px;width:50px}.color-card.orange>div:first-child{background-color:#f67834}.color-card.orange>div:nth-child(2){background-color:#f56e25}.color-card.orange>div:nth-child(3){background-color:#de5e18}.color-card.orange>div:nth-child(4){background-color:#c75111}.dao-btn.red{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.1);border-color:#e1342b;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.08),0 1px 1px rgba(0,0,0,.08);background-image:linear-gradient(0deg,hsla(0,0%,100%,.06) 0,hsla(0,0%,100%,.06)),linear-gradient(0deg,rgba(213,34,24,.5) 0,rgba(242,86,77,.5));background-color:#f1483f}.dao-btn.red:hover{background-image:linear-gradient(0deg,rgba(213,34,24,.5) 0,rgba(242,86,77,.5))}.dao-btn.red:active{background-image:none;box-shadow:inset 0 0 8px rgba(0,0,0,.04)}.color-card.red>div{display:block;float:left;height:50px;width:50px}.color-card.red>div:first-child{background-color:#f2564d}.color-card.red>div:nth-child(2){background-color:#f1483f}.color-card.red>div:nth-child(3){background-color:#e1342b}.color-card.red>div:nth-child(4){background-color:#d52218}.dao-btn.purple{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.1);border-color:#6142d0;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.08),0 1px 1px rgba(0,0,0,.08);background-image:linear-gradient(0deg,hsla(0,0%,100%,.06) 0,hsla(0,0%,100%,.06)),linear-gradient(0deg,rgba(78,44,200,.5) 0,rgba(126,97,228,.5));background-color:#7354e2}.dao-btn.purple:hover{background-image:linear-gradient(0deg,rgba(78,44,200,.5) 0,rgba(126,97,228,.5))}.dao-btn.purple:active{background-image:none;box-shadow:inset 0 0 8px rgba(0,0,0,.04)}.color-card.purple>div{display:block;float:left;height:50px;width:50px}.color-card.purple>div:first-child{background-color:#7e61e4}.color-card.purple>div:nth-child(2){background-color:#7354e2}.color-card.purple>div:nth-child(3){background-color:#6142d0}.color-card.purple>div:nth-child(4){background-color:#4e2cc8}.dao-btn.grey{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.1);border-color:#bec0c3;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.08),0 1px 1px rgba(0,0,0,.08);background-image:linear-gradient(0deg,hsla(0,0%,100%,.06) 0,hsla(0,0%,100%,.06)),linear-gradient(0deg,hsla(215,8%,69%,.5) 0,rgba(213,217,224,.5));background-color:#ccd1d9}.dao-btn.grey:hover{background-image:linear-gradient(0deg,hsla(215,8%,69%,.5) 0,rgba(213,217,224,.5))}.dao-btn.grey:active{background-image:none;box-shadow:inset 0 0 8px rgba(0,0,0,.04)}.color-card.grey>div{display:block;float:left;height:50px;width:50px}.color-card.grey>div:first-child{background-color:#d5d9e0}.color-card.grey>div:nth-child(2){background-color:#ccd1d9}.color-card.grey>div:nth-child(3){background-color:#bec0c3}.color-card.grey>div:nth-child(4){background-color:#abb0b7}.color-card:after,.color-card:before{content:\" \";display:table}.color-card:after{clear:both}.dao-btn.ghost{color:#3d444f;text-shadow:0 1px 0 hsla(0,0%,100%,.9);border-color:#ccd1d9;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.9),0 1px 0 hsla(0,0%,100%,.9);background:none}.dao-btn.ghost:hover{background-color:rgba(204,209,217,.1);box-shadow:0 1px 0 hsla(0,0%,100%,.9)}.dao-btn.ghost.active,.dao-btn.ghost:active{background-color:rgba(204,209,217,.15);box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.07),inset 0 0 4px 0 rgba(0,0,0,.08),0 1px 0 hsla(0,0%,100%,.9)}.dao-btn.disabled,.dao-btn[disabled],fieldset[disabled] .dao-btn{cursor:not-allowed;color:#ccd1d9;text-shadow:0 1px 0 hsla(0,0%,100%,.9);border-color:#ccd1d9!important;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.9),0 1px 0 hsla(0,0%,100%,.9)!important;background:none!important}.dao-btn.dao-icon{padding:8px 6px;line-height:16px}.dao-btn.dao-icon svg{display:block;width:16px;height:16px;top:0;margin:0}.dao-btn svg{width:16px;height:16px;vertical-align:text-bottom;margin-right:8px;fill:currentColor}", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "html.dao-layout{overflow:hidden}html.dao-layout *{box-sizing:border-box}.dao-layout,html.dao-layout body{height:100%;margin:0;overflow:hidden}.dao-layout{z-index:900}.dao-layout-wrap{display:flex;overflow:hidden;flex-direction:row;height:100%;margin:0}.dao-layout-sidebar{display:flex;flex:none}.dao-layout-content{overflow:auto;flex:auto;min-width:800px}.dao-layout-content .content-body{position:relative}.dao-layout-content.has-topbar{display:flex;flex-direction:column}.dao-layout-content.has-topbar.has-topbar-fixed>.content-topbar{flex:none;z-index:1}.dao-layout-content.has-topbar.has-topbar-fixed>.content-body{flex:auto;overflow:auto}", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-left-nav{width:60px;background-color:#1f2126}.dao-left-nav .dao-nav-logo{padding:10px;margin-top:15px;width:60px;height:60px;cursor:pointer}.dao-left-nav .dao-nav-logo img,.dao-left-nav .dao-nav-logo svg{width:100%;height:100%;border-radius:3px}.dao-left-nav .dao-nav-logo+.dao-popover{padding:0;max-width:none;border:none;background-color:rgba(31,33,38,.9);color:#fff;font-size:13px;transform:translateX(-5px);animation:tooltipHide .3s ease-in;opacity:0}.dao-left-nav .dao-nav-logo+.dao-popover.in{transform:translateX(5px);animation:tooltipShow .3s ease-out;opacity:1}.dao-left-nav .dao-nav-logo+.dao-popover .arrow{top:26px!important;border-width:7px;border-radius:0 0 0 3px;border-color:transparent transparent #1f2126 #1f2126;transform:rotate(45deg);margin-top:-7px}.dao-left-nav .dao-nav-logo+.dao-popover .arrow:after{display:none}.dao-left-nav .dao-nav-logo+.dao-popover .dao-popover-inner .dao-popover-content{padding:0}.dao-left-nav .dao-nav-item{display:flex;justify-content:center;cursor:pointer;width:60px;height:60px;padding:14px}.dao-left-nav .dao-nav-item svg{width:100%;height:100%;fill:#9ba3af;-webkit-filter:drop-shadow(0 1px 0 rgba(0,0,0,.1));transition:fill .2s}.dao-left-nav .dao-nav-item.active svg,.dao-left-nav .dao-nav-item svg:hover{fill:#fff}.dao-top-nav{width:100%;height:40px;background-color:#fff;box-shadow:0 1px 2px 1px rgba(204,209,217,.6)}.dao-top-nav .dao-nav-item{display:flex;justify-content:center;align-items:center;float:left;height:100%;line-height:40px;font-size:13px;padding:0 14px;text-shadow:0 2px 0 hsla(0,0%,100%,.8);color:#595f69;font-weight:500;cursor:pointer}.dao-top-nav .dao-nav-item.active{background-color:#f5f7fa}.dao-top-nav .dao-nav-item.active .dao-numeric-badge{background-color:#3890ff}.dao-top-nav .dao-nav-item .dao-numeric-badge{margin-left:4px}.dao-left-nav .dao-tooltip.right{transition:none}.dao-left-nav .dao-tooltip.right .dao-tooltip-inner{padding:11px 16px;font-size:14px;background-color:#1f2126;border-radius:6px}.dao-left-nav .dao-tooltip.right .dao-tooltip-arrow{border-width:7px;border-radius:0 0 0 3px;border-color:transparent transparent #1f2126 #1f2126;transform:rotate(45deg);margin-top:-7px}.dao-left-nav .dao-tooltip.right.in{transform:translateX(5px);animation:tooltipShow .3s ease-out;opacity:1}@keyframes tooltipShow{0%{transform:translateX(-5px)}to{transform:translateX(5px)}}@keyframes tooltipHide{0%{transform:translateX(5px)}to{transform:translateX(-5px)}}", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-numeric-badge.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-numeric-badge.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-numeric-badge{display:inline-block;box-sizing:border-box;color:#fff;background-color:#ccd1d9;font-family:Helvetica,sans-serif;text-align:center;text-shadow:none;font-weight:400;font-size:12px;line-height:16px;height:16px;min-width:16px;padding:0 4px;border-radius:8px}.dao-numeric-badge.active{background-color:#3890ff}", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-dropdown.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-dropdown.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent}.dao-dropdown,.dropup{position:relative}.dao-dropdown .dropdown-toggle:focus,.dropup .dropdown-toggle:focus{outline:0}.dao-dropdown .dropdown-menu,.dropup .dropdown-menu{position:absolute;top:calc(100% + 10px);z-index:1000;float:left;min-width:160px;padding:12px 0;margin:2px 0 0;list-style:none;font-size:14px;text-align:left;background-color:#fff;border:1px solid rgba(61,68,79,.06);border-radius:5px;box-shadow:0 5px 12px 0 rgba(61,68,79,.3);background-clip:padding-box;transition:all .3s cubic-bezier(.34,1.61,.7,1);transform-origin:50% -10px;transform:scale(0);opacity:0}.dao-dropdown .dropdown-menu:before,.dropup .dropdown-menu:before{content:\"\";position:absolute;display:block;width:31px;height:11px;top:-11px;background-image:url(" + __webpack_require__(18) + ");background-size:100% 100%}.dao-dropdown .dropdown-menu.pull-right,.dropup .dropdown-menu.pull-right{right:0;left:auto}.dao-dropdown .dropdown-menu .divider,.dropup .dropdown-menu .divider{height:1px;padding:0;margin:9px 0;overflow:hidden;background-color:#e5e5e5;cursor:default}.dao-dropdown .dropdown-menu .divider:focus,.dao-dropdown .dropdown-menu .divider:hover,.dropup .dropdown-menu .divider:focus,.dropup .dropdown-menu .divider:hover{background-color:#e5e5e5}.dao-dropdown .dropdown-menu>ul,.dropup .dropdown-menu>ul{padding:0;margin:0;max-height:275px;overflow:auto}.dao-dropdown .dropdown-menu li,.dropup .dropdown-menu li{display:block;padding:5px 15px;clear:both;font-weight:400;line-height:20px;color:#333;white-space:nowrap;cursor:pointer}.dao-dropdown .dropdown-menu li a,.dropup .dropdown-menu li a{color:#333;text-decoration:none}.dao-dropdown .dropdown-menu li a .dao-numeric-badge,.dropup .dropdown-menu li a .dao-numeric-badge{height:14px;line-height:14px;float:right;margin-top:3px}.dao-dropdown .dropdown-menu li:focus,.dao-dropdown .dropdown-menu li:hover,.dropup .dropdown-menu li:focus,.dropup .dropdown-menu li:hover{text-decoration:none;color:#fff;background-color:#3890ff}.dao-dropdown .dropdown-menu li:focus .dao-numeric-badge,.dao-dropdown .dropdown-menu li:hover .dao-numeric-badge,.dropup .dropdown-menu li:focus .dao-numeric-badge,.dropup .dropdown-menu li:hover .dao-numeric-badge{background-color:#fff;color:#3890ff}.dao-dropdown .dropdown-menu li:focus a,.dao-dropdown .dropdown-menu li:hover a,.dropup .dropdown-menu li:focus a,.dropup .dropdown-menu li:hover a{color:#fff;text-decoration:none}.dao-dropdown .dropdown-menu li.active,.dao-dropdown .dropdown-menu li.active:focus,.dao-dropdown .dropdown-menu li.active:hover,.dropup .dropdown-menu li.active,.dropup .dropdown-menu li.active:focus,.dropup .dropdown-menu li.active:hover{text-decoration:none;outline:0;color:#fff;background-color:#3890ff}.dao-dropdown .dropdown-menu li.active .dao-numeric-badge,.dao-dropdown .dropdown-menu li.active:focus .dao-numeric-badge,.dao-dropdown .dropdown-menu li.active:hover .dao-numeric-badge,.dropup .dropdown-menu li.active .dao-numeric-badge,.dropup .dropdown-menu li.active:focus .dao-numeric-badge,.dropup .dropdown-menu li.active:hover .dao-numeric-badge{background-color:#fff;color:#3890ff}.dao-dropdown .dropdown-menu li.active:focus a,.dao-dropdown .dropdown-menu li.active:hover a,.dao-dropdown .dropdown-menu li.active a,.dropup .dropdown-menu li.active:focus a,.dropup .dropdown-menu li.active:hover a,.dropup .dropdown-menu li.active a{color:#fff;text-decoration:none}.dao-dropdown .dropdown-menu>.disabled>a,.dao-dropdown .dropdown-menu>.disabled>a:focus,.dao-dropdown .dropdown-menu>.disabled>a:hover,.dropup .dropdown-menu>.disabled>a,.dropup .dropdown-menu>.disabled>a:focus,.dropup .dropdown-menu>.disabled>a:hover{color:#777}.dao-dropdown .dropdown-menu>.disabled>a:focus,.dao-dropdown .dropdown-menu>.disabled>a:hover,.dropup .dropdown-menu>.disabled>a:focus,.dropup .dropdown-menu>.disabled>a:hover{text-decoration:none;background-color:transparent;background-image:none;cursor:not-allowed}.dao-dropdown.open>.arrow,.dropup.open>.arrow{display:block}.dao-dropdown.open>.dropdown-menu,.dropup.open>.dropdown-menu{transform:scale(1);filter:none;opacity:1}.dao-dropdown.open>a,.dropup.open>a{outline:0}.dao-dropdown .dropdown-menu-right,.dropup .dropdown-menu-right{left:auto;right:0}.dao-dropdown .dropdown-menu-left,.dropup .dropdown-menu-left{left:0;right:auto}.dao-dropdown .dropdown-header,.dropup .dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:20px;color:#777;white-space:nowrap}.dao-dropdown .dropdown-backdrop,.dropup .dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.dao-dropdown .pull-right>.dropdown-menu,.dropup .pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dao-dropdown .caret{border-top:0;border-bottom:4px dashed;content:\"\"}.dropup .dropdown-menu,.navbar-fixed-bottom .dao-dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAVBAMAAAADRiu8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURSBSUkxpcTlCUT1BST1CTj5FUO3t7/z9/cfLy+rq7P///848ExgAAAAKdFJOUwEABQkZEY7mQH1GZ/oeAAAAx0lEQVQoz22QwRGCQAxFAxXEDhzogEAFIjOekQ48WYAH71qKM26Vko2bhF1y3P/m/WTh4AZkKveEkKcZowBCNhlQ5AAbYCcH8MBeLnsIkJ7qhufoiQikgjUclqUzJAEacx6JRhUMoOrb5f18vOZGCQGsvr+EEL5jp4tUDKAW0HhfgXA72aoMWN5PnIfPSLpGhYCpgAYRrIqzEagXtHQVAStm8v8RBa0JooL0kr+ATCAK91+FoFBw7gWiIFXUXLARiKJLilLgFT+JoG4f8niLPgAAAABJRU5ErkJggg=="

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-label.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-label.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".labels .label{margin:4px 6px 4px 0}.label{display:inline-block;line-height:1;vertical-align:baseline;padding:8px 12px;min-height:1em;min-width:1em;text-align:center}.label .icon{width:16px;height:16px;vertical-align:bottom;fill:#ccd1d9;margin-right:8px}.label .icon.icon-link{cursor:pointer}.label .icon.icon-link:hover{fill:#b8bcc3}.label .icon.icon-right{margin-left:8px;margin-right:0}.label-ghost{border:1px solid #d4d9e0;border-radius:50em;background:transparent}.label-link{cursor:pointer}", ""]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(22);
	
	__webpack_require__(25);
	
	__webpack_require__(26);
	
	__webpack_require__(27);
	
	__webpack_require__(28);
	
	__webpack_require__(29);
	
	__webpack_require__(30);
	
	__webpack_require__(31);
	
	__webpack_require__(32);
	
	__webpack_require__(33);
	
	__webpack_require__(34);
	
	__webpack_require__(35);
	
	__webpack_require__(36);
	
	__webpack_require__(37);
	
	__webpack_require__(38);
	
	__webpack_require__(39);
	
	__webpack_require__(40);
	
	__webpack_require__(41);
	
	__webpack_require__(42);
	
	__webpack_require__(43);
	
	__webpack_require__(44);
	
	__webpack_require__(45);
	
	__webpack_require__(46);
	
	__webpack_require__(47);
	
	__webpack_require__(48);
	
	__webpack_require__(49);
	
	__webpack_require__(50);
	
	__webpack_require__(51);
	
	__webpack_require__(52);
	
	__webpack_require__(53);
	
	__webpack_require__(54);
	
	__webpack_require__(55);
	
	__webpack_require__(56);
	
	__webpack_require__(57);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 64 64\" id=\"icon_chat\" > <title>chat</title> <g> <circle cx=\"36.079\" cy=\"32.971\" r=\"3.275\" opacity=\"0.25\"/> <circle cx=\"24.847\" cy=\"32.971\" r=\"3.275\" opacity=\"0.25\"/> <circle cx=\"13.615\" cy=\"32.971\" r=\"3.275\" opacity=\"0.25\"/> <path d=\"M63.43,32.107c0-10.073-9.522-18.238-21.267-18.238a24.565,24.565,0,0,0-5.341.6c6.928,3.6,11.558,10.134,11.558,17.591,0,7.5-4.685,14.061-11.682,17.652a24.554,24.554,0,0,0,5.465.63,24.138,24.138,0,0,0,9.229-1.8,27.487,27.487,0,0,0,9.41,2.222,21.838,21.838,0,0,1-3.111-6.2A16.875,16.875,0,0,0,63.43,32.107Z\" opacity=\"0.5\"/> <g opacity=\"0.9\"> <path d=\"M24.4,11.5C11.164,11.5.43,20.708,0.43,32.063A19.024,19.024,0,0,0,6.9,46.106,24.617,24.617,0,0,1,3.393,53.1,30.987,30.987,0,0,0,14,50.592a27.212,27.212,0,0,0,10.4,2.032c13.241,0,23.975-9.205,23.975-20.56S37.646,11.5,24.4,11.5ZM13.615,36.246a3.275,3.275,0,1,1,3.275-3.275A3.275,3.275,0,0,1,13.615,36.246Zm11.232,0a3.275,3.275,0,1,1,3.275-3.275A3.275,3.275,0,0,1,24.847,36.246Zm11.232,0a3.275,3.275,0,1,1,3.275-3.275A3.275,3.275,0,0,1,36.079,36.246Z\"/> </g> </g> </symbol>";
	module.exports = sprite.add(image, "icon_chat");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Sprite = __webpack_require__(24);
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 64 64\" id=\"icon_megaphone-alt\" > <title>icon</title> <g> <path d=\"M44.309,24.476a58.976,58.976,0,0,0,0,13.054A6.537,6.537,0,0,0,44.309,24.476Z\" opacity=\"0.25\"/> <path d=\"M53.693,6.822c-4.472,0-8.229,7.477-9.379,17.657a6.536,6.536,0,0,1,0,13.052c1.149,10.18,4.907,17.657,9.379,17.657,5.385,0,9.751-10.827,9.751-24.183S59.078,6.822,53.693,6.822Z\" opacity=\"0.5\"/> <path d=\"M12,20c-2.449,0-4.435,4.925-4.435,11S9.554,42,12,42h8.87c-2.449,0-4.435-4.925-4.435-11s1.986-11,4.435-11H12Z\" opacity=\"0.9\"/> <g opacity=\"0.9\"> <path d=\"M6.568,31A23.844,23.844,0,0,1,7.69,23.567c-0.113,0-.222.006-0.336,0.006,0,0-5.989-.232-5.989,7.43s5.989,7.43,5.989,7.43c0.114,0,.222.006,0.335,0.006A23.842,23.842,0,0,1,6.568,31Z\"/> <path d=\"M43.947,31c0-12.91,4.079-23.455,9.215-24.145-6,.662-14.97,12.036-33.949,15.633A17.945,17.945,0,0,0,17.438,31a17.945,17.945,0,0,0,1.774,8.512c18.979,3.6,27.95,14.971,33.949,15.633C48.026,54.458,43.947,43.913,43.947,31Z\"/> </g> <path d=\"M12,43V56.244A1.769,1.769,0,0,0,13.785,58h5.437A1.769,1.769,0,0,0,21,56.244V43H12Z\" opacity=\"0.9\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_megaphone-alt");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 64 64\" id=\"icon_megaphone\" > <title>icon</title> <g> <path d=\"M44.309,24.476a58.976,58.976,0,0,0,0,13.054A6.537,6.537,0,0,0,44.309,24.476Z\" opacity=\"0.25\"/> <path d=\"M53.693,6.822c-4.472,0-8.229,7.477-9.379,17.657a6.536,6.536,0,0,1,0,13.052c1.149,10.18,4.907,17.657,9.379,17.657,5.385,0,9.751-10.827,9.751-24.183S59.078,6.822,53.693,6.822Z\" opacity=\"0.5\"/> <g opacity=\"0.9\"> <path d=\"M6.568,31A23.844,23.844,0,0,1,7.69,23.567c-0.113,0-.222.006-0.336,0.006,0,0-5.989-.232-5.989,7.43s5.989,7.43,5.989,7.43c0.114,0,.222.006,0.335,0.006A23.842,23.842,0,0,1,6.568,31Z\"/> <path d=\"M43.947,31c0-12.91,4.079-23.455,9.215-24.145-6,.662-14.97,12.036-33.949,15.633A17.945,17.945,0,0,0,17.438,31a17.945,17.945,0,0,0,1.774,8.512c18.979,3.6,27.95,14.971,33.949,15.633C48.026,54.458,43.947,43.913,43.947,31Z\"/> </g> <path d=\"M20.873,42c-2.449,0-4.435-4.925-4.435-11s1.986-11,4.435-11H12c-2.449,0-4.435,4.925-4.435,11S9.554,42,12,42V56.244A1.769,1.769,0,0,0,13.785,58h5.437A1.769,1.769,0,0,0,21,56.244V42h-0.13Z\" opacity=\"0.9\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_megaphone");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 64 64\" id=\"icon_paper-plane\" > <title>paper-plane</title> <g> <polygon points=\"22.96 52.593 27.808 46.688 25.387 45.166 22.96 52.593\" opacity=\"0.25\"/> <polygon points=\"61.5 5.648 19.192 41.697 22.96 52.593 25.387 45.166 61.5 5.648\" opacity=\"0.5\"/> <polygon points=\"61.5 5.648 2.5 34.626 19.192 41.697 61.5 5.648\" opacity=\"0.9\"/> <polygon points=\"61.5 5.648 25.387 45.166 46.356 58.352 61.5 5.648\" opacity=\"0.9\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_paper-plane");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 64 64\" id=\"icon_users\" > <title>users</title> <g> <path d=\"M59.316,50.948a42.668,42.668,0,0,1-4.191-1.7,6.077,6.077,0,0,1-2.376-2.163,6.93,6.93,0,0,1-1.076-2.992h3.721l0.157-.336a11.58,11.58,0,0,0,.37-1.3q0.235-.964.482-2.376c0.164-.941.4-2.256,0.578-3.945s0.362-3.556.467-5.6a18.786,18.786,0,0,0-.372-4.617,12.3,12.3,0,0,0-1.143-3.463A9.639,9.639,0,0,0,54.1,20.03a9.787,9.787,0,0,0-2.14-1.6,11.974,11.974,0,0,0-2.286-.919,13.557,13.557,0,0,0-2.578-.493H47.033q-0.09,0-.314-0.011t-0.314-.011a6.223,6.223,0,0,0-2.846.359,3.828,3.828,0,0,0-1.905,2.2,1.576,1.576,0,0,0-.112.359,0.091,0.091,0,0,1-.067.022,1.973,1.973,0,0,0-1.558-.011A4.3,4.3,0,0,0,38,21.094a5.643,5.643,0,0,0-1.513,2.6,16.037,16.037,0,0,0-.684,3.732,41.684,41.684,0,0,0-.034,4.471q0.1,2.488.325,4.415t0.538,3.967q0.314,2.04.448,2.723t0.224,1.087h3.721a6.91,6.91,0,0,1-1.087,2.981,6.13,6.13,0,0,1-2.387,2.174c-0.311.156-.705,0.331-1.137,0.516,1.481,0.555,2.857,1.093,4.11,1.61a11.589,11.589,0,0,1,3.653,2.072,6.46,6.46,0,0,1,1.5,2.607,10.873,10.873,0,0,1,.589,2.795l0.052,1.136H63V52.34C61.867,51.892,60.643,51.429,59.316,50.948Z\" opacity=\"0.5\"/> <path d=\"M7.775,46.887a48.551,48.551,0,0,1-5.107,2.079Q1.812,49.275,1,49.575V59.969L46.324,60l-0.053-1.156a10.871,10.871,0,0,0-.589-2.795,6.461,6.461,0,0,0-1.5-2.608,11.59,11.59,0,0,0-3.653-2.072q-2.74-1.13-6.206-2.382a48.539,48.539,0,0,1-5.1-2.086,7.45,7.45,0,0,1-3.169-3.079,8.54,8.54,0,0,1-1.126-4.206A5.758,5.758,0,0,1,26.7,36.125a10.846,10.846,0,0,0,1.776-3.331q2.473-.992,2.475-4.163a5.619,5.619,0,0,0-.777-3.359q0.216-1.478.487-4.541a9.4,9.4,0,0,0-.789-4.555A12.626,12.626,0,0,0,27.2,12.211,13.721,13.721,0,0,0,23.21,9.454a10.884,10.884,0,0,0-9.376-.006A13.721,13.721,0,0,0,9.841,12.2,12.626,12.626,0,0,0,7.165,16.16a9.4,9.4,0,0,0-.8,4.554q0.267,3.063.481,4.541a5.619,5.619,0,0,0-.782,3.358q0,3.171,2.469,4.167a10.847,10.847,0,0,0,1.771,3.333,5.758,5.758,0,0,1,1.771,3.494,8.541,8.541,0,0,1-1.131,4.2A7.451,7.451,0,0,1,7.775,46.887Z\" opacity=\"0.9\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_users");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_archive\" > <title>archive</title> <g> <path d=\"M2.1,2H29.9A2.1,2.1,0,0,1,32,4.1V8a0,0,0,0,1,0,0H0A0,0,0,0,1,0,8V4.1A2.1,2.1,0,0,1,2.1,2Z\"/> <path d=\"M2,10V27.9A2.1,2.1,0,0,0,4.1,30H27.9A2.1,2.1,0,0,0,30,27.9V10H2Zm20,7a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1v2Z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_archive");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_browser\" > <title>browser</title> <path d=\"M29.9,4H2.1A2.1,2.1,0,0,0,0,6.1V25.9A2.1,2.1,0,0,0,2.1,28H29.9A2.1,2.1,0,0,0,32,25.9V6.1A2.1,2.1,0,0,0,29.9,4ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6ZM3,6A1,1,0,1,1,2,7,1,1,0,0,1,3,6ZM30,26H2V10H30V26ZM30,8H10V6H30V8Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_browser");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_building\" > <title>building</title> <path d=\"M23.9,2H6.1A2.1,2.1,0,0,0,4,4.1V27.9A2.1,2.1,0,0,0,6.1,30H23.9A2.1,2.1,0,0,0,26,27.9V4.1A2.1,2.1,0,0,0,23.9,2ZM12,6h2V8H12V6Zm0,4h2v2H12V10Zm0,4h2v2H12V14Zm0,4h2v2H12V18Zm-2,6H8V22h2v2Zm0-4H8V18h2v2Zm0-4H8V14h2v2Zm0-4H8V10h2v2Zm0-4H8V6h2V8Zm8,20H12V24h6v4Zm0-8H16V18h2v2Zm0-4H16V14h2v2Zm0-4H16V10h2v2Zm0-4H16V6h2V8Zm4,16H20V22h2v2Zm0-4H20V18h2v2Zm0-4H20V14h2v2Zm0-4H20V10h2v2Zm0-4H20V6h2V8Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_building");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_calendar\" > <title>calendar</title> <g> <path d=\"M27.9,4H24V2H20V4H12V2H8V4H4.1A2.1,2.1,0,0,0,2,6.1V27.9A2.1,2.1,0,0,0,4.1,30H27.9A2.1,2.1,0,0,0,30,27.9V6.1A2.1,2.1,0,0,0,27.9,4ZM28,28H4V11H28V28Z\"/> <rect x=\"19\" y=\"19\" width=\"5\" height=\"5\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_calendar");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_city\" > <title>city</title> <path d=\"M27.9,14H22.1A2.1,2.1,0,0,0,20,16.1V2.1A2.1,2.1,0,0,0,17.9,0H14.1A2.1,2.1,0,0,0,12,2.1v6A2.1,2.1,0,0,0,9.9,6H4.1A2.1,2.1,0,0,0,2,8.1V30H30V16.1A2.1,2.1,0,0,0,27.9,14ZM6,28H4V24H6v4Zm0-6H4V20H6v2Zm0-4H4V16H6v2Zm0-4H4V12H6v2Zm0-4H4V8H6v2Zm4,18H8V24h2v4Zm0-6H8V20h2v2Zm0-4H8V16h2v2Zm0-4H8V12h2v2Zm0-4H8V8h2v2Zm8,18H14V24h4v4Zm0-6H14V20h4v2Zm0-4H14V16h4v2Zm0-4H14V12h4v2Zm0-4H14V8h4v2Zm0-4H14V4h4V6Zm6,22H22V24h2v4Zm0-6H22V20h2v2Zm0-4H22V16h2v2Zm4,10H26V24h2v4Zm0-6H26V20h2v2Zm0-4H26V16h2v2Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_city");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_close-circled\" > <title>close-circled</title> <path d=\"M16,1.2A14.8,14.8,0,1,0,30.8,16,14.8,14.8,0,0,0,16,1.2Zm6.859,19.538-2.121,2.121L16,18.121l-4.738,4.738L9.141,20.738,13.879,16,9.141,11.262l2.121-2.121L16,13.879l4.738-4.738,2.121,2.121L18.121,16Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_close-circled");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_desktop\" > <title>desktop</title> <path d=\"M29.9,2H2.1A2.1,2.1,0,0,0,0,4.1V21.9A2.1,2.1,0,0,0,2.1,24H13l-0.8,4H10v2H22V28H19.8L19,24H29.9A2.1,2.1,0,0,0,32,21.9V4.1A2.1,2.1,0,0,0,29.9,2ZM30,20H2V4H30V20Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_desktop");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_down-arrow\" > <title>down-arrow</title> <polygon points=\"8 12 24 12 16 22 8 12\"/> </symbol>";
	module.exports = sprite.add(image, "icon_down-arrow");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_eye\" > <title>eye</title> <g> <path d=\"M16,5.6C7.163,5.6,0,16,0,16S7.163,26.4,16,26.4,32,16,32,16,24.836,5.6,16,5.6Zm0,17.6A7.2,7.2,0,1,1,23.2,16,7.2,7.2,0,0,1,16,23.2Z\"/> <path d=\"M16,16h4.3a4.3,4.3,0,1,1-1.585-3.334Z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_eye");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_filter\" > <title>filter</title> <path d=\"M27.26,4H4.74A1.737,1.737,0,0,0,3.5,6.957L14,17.592V26.4a2.1,2.1,0,0,0,.615,1.485l1.849,1.849A0.9,0.9,0,0,0,18,29.1V17.592L28.5,6.957A1.737,1.737,0,0,0,27.26,4Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_filter");

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_folder-move\" > <title>folder-move</title> <path d=\"M29.9,6H12L10,4H2.1A2.1,2.1,0,0,0,0,6.1V25.9A2.1,2.1,0,0,0,2.1,28H29.9A2.1,2.1,0,0,0,32,25.9V8.1A2.1,2.1,0,0,0,29.9,6ZM16,25L9,18h5V10h4v8h5Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_folder-move");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_folder\" > <title>folder</title> <path d=\"M29.9,6H12L10,4H2.1A2.1,2.1,0,0,0,0,6.1V25.9A2.1,2.1,0,0,0,2.1,28H29.9A2.1,2.1,0,0,0,32,25.9V8.1A2.1,2.1,0,0,0,29.9,6Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_folder");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_foot\" > <title>foot</title> <g> <circle cx=\"19.9\" cy=\"4.32\" r=\"2.92\"/> <circle cx=\"13.612\" cy=\"5.341\" r=\"1.84\"/> <circle cx=\"9.741\" cy=\"8.16\" r=\"1.5\"/> <circle cx=\"7.3\" cy=\"11.4\" r=\"1.45\"/> <path d=\"M22.076,24.07a3.915,3.915,0,0,1-3.084,6.43,3.6,3.6,0,0,1-2.3-.722,4.433,4.433,0,0,1-1.443-1.968l-4.921-8.661a7.238,7.238,0,0,1-.722-1.64,8.144,8.144,0,0,1-.328-2.165,6.627,6.627,0,0,1,2.034-4.855,6.627,6.627,0,0,1,4.855-2.034,7.01,7.01,0,0,1,3.477.919,6.685,6.685,0,0,1,2.493,2.559,6.89,6.89,0,0,1,.919,3.412,6.717,6.717,0,0,1-1.115,3.871A4.832,4.832,0,0,0,22.076,24.07Z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_foot");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_globe-alt\" > <title>globe-alt</title> <path d=\"M16,1.2A14.8,14.8,0,1,0,30.8,16,14.8,14.8,0,0,0,16,1.2ZM3.314,16a12.634,12.634,0,0,1,.369-3H9.965a21.026,21.026,0,0,0,0,6H3.684A12.634,12.634,0,0,1,3.314,16Zm8.55,0a19.918,19.918,0,0,1,.238-3h7.8a19.952,19.952,0,0,1,.237,3,19.826,19.826,0,0,1-.239,3H12.1A19.927,19.927,0,0,1,11.864,16Zm10.171-3h6.282a12.362,12.362,0,0,1,0,6H22.035a22.1,22.1,0,0,0,.215-3A22.085,22.085,0,0,0,22.035,13Zm5.611-2H21.677a22.213,22.213,0,0,0-3.271-7.45A12.724,12.724,0,0,1,27.646,11ZM16,3.837A20.1,20.1,0,0,1,19.5,11h-7A20.118,20.118,0,0,1,16,3.837Zm-2.416-.286A22.23,22.23,0,0,0,10.322,11H4.354A12.724,12.724,0,0,1,13.586,3.551ZM4.354,21h5.969a22.243,22.243,0,0,0,3.271,7.451A12.724,12.724,0,0,1,4.354,21Zm11.639,7.153A20.111,20.111,0,0,1,12.5,21H19.5A20.156,20.156,0,0,1,15.993,28.153Zm2.412,0.3A22.194,22.194,0,0,0,21.677,21h5.969A12.724,12.724,0,0,1,18.405,28.451Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_globe-alt");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_globe\" > <title>globe</title> <path d=\"M24.965,24.965a12.49,12.49,0,0,0,3.344-5.835l-1.352-.142a5.911,5.911,0,0,1-1.637-3.2q-0.071-.64-0.071-1.992a11.257,11.257,0,0,0-.142-2.063,5.553,5.553,0,0,0-.961-1.779,9.973,9.973,0,0,1-.961-1.494q-0.213-.5-0.676-1.494T21.763,5.469a0.816,0.816,0,0,1,.249.071,0.764,0.764,0,0,1,.249.142,6,6,0,0,1,1-.142A11.844,11.844,0,0,0,17.85,3.477V4.046l0.285,0.64-1,.925L16.5,5.4l-0.712-.712-0.712-.854-1-.356a13.264,13.264,0,0,0-3.2.925V4.9a2.754,2.754,0,0,1,.783-0.285,4.411,4.411,0,0,0,.854-0.285,2.681,2.681,0,0,1,1.138.64q-0.071.071-.783,0.676a3.022,3.022,0,0,0-.783.818,0.833,0.833,0,0,0,.249.32,0.685,0.685,0,0,1,.249.391q0,0.213-.036.6t-0.036.6a18.445,18.445,0,0,1,1.565-1.494,1.974,1.974,0,0,1,1.565.6,3.03,3.03,0,0,1,1.067,1.245,0.716,0.716,0,0,1-.285.6,11.281,11.281,0,0,1-1.138,1.032q-0.783.64-.925,0.783a4.577,4.577,0,0,1-.64.462,2.748,2.748,0,0,0-.712.6,0.619,0.619,0,0,0-.071.64q0.712,1.423.356,1.708a0.282,0.282,0,0,1-.356.036,0.886,0.886,0,0,1-.32-0.249q-0.107-.142-0.285-0.356t-0.249-.285q-0.427-.5-2.7-0.5,0,2.277,1.067,3.06,2.917,2.135,3.344,2.348a3.262,3.262,0,0,0,1.708,0,2.383,2.383,0,0,1,1.637.071,22.96,22.96,0,0,0,3.344,2.063,4.051,4.051,0,0,1,1.423.961q0.783,0.747.427,1.245a15.577,15.577,0,0,0-1,1.637,4.227,4.227,0,0,1-1.423,1.779,4.955,4.955,0,0,0-1.494,2.063A12.607,12.607,0,0,0,24.965,24.965ZM14.435,28.594l0.391-.783,0.391-.783a1.334,1.334,0,0,0,.142-0.6,0.791,0.791,0,0,0-.356-0.6q-1.138-1-1.637-1.494a3.246,3.246,0,0,1-.427-0.818,1.521,1.521,0,0,1-.213-0.818,5.975,5.975,0,0,0,.569-1.708,1.466,1.466,0,0,0-.925-1.565,6.478,6.478,0,0,1-1-.712q-0.5-.427-1.1-0.925T9.312,17a4.214,4.214,0,0,1-1.423-1.352q-0.64-1.85-.712-1.992A4.484,4.484,0,0,1,6.394,11.7a6.735,6.735,0,0,1,.071-2.17q0-.5-0.142-1.779A12.1,12.1,0,0,0,3.335,16a12.21,12.21,0,0,0,3.7,8.965A12.48,12.48,0,0,0,14.435,28.594ZM16,1.2A14.256,14.256,0,0,1,26.46,5.54,14.256,14.256,0,0,1,30.8,16a14.256,14.256,0,0,1-4.34,10.46A14.256,14.256,0,0,1,16,30.8,14.256,14.256,0,0,1,5.54,26.46,14.256,14.256,0,0,1,1.2,16,14.256,14.256,0,0,1,5.54,5.54,14.256,14.256,0,0,1,16,1.2Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_globe");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_hashtag\" > <title>hashtag</title> <g> <path d=\"M27.9,2H4.1A2.1,2.1,0,0,0,2,4.1V27.9A2.1,2.1,0,0,0,4.1,30H27.9A2.1,2.1,0,0,0,30,27.9V4.1A2.1,2.1,0,0,0,27.9,2ZM25,14H20.984L19.9,18H24v2H19.357l-1.335,4.921H15.731L17.065,20h-4.3l-1.335,4.921H9.139L10.473,20H7V18h4.016L12.1,14H8V12h4.643l1.335-4.922h2.292L14.935,12h4.3l1.335-4.922h2.292L21.527,12H25v2Z\"/> <polygon points=\"13.308 18 17.608 18 18.692 14 14.392 14 13.308 18\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_hashtag");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_id\" > <title>id</title> <path d=\"M29.9,4H2.1A2.1,2.1,0,0,0,0,6.1V25.9A2.1,2.1,0,0,0,2.1,28H29.9A2.1,2.1,0,0,0,32,25.9V6.1A2.1,2.1,0,0,0,29.9,4ZM4.012,19.751a2.342,2.342,0,0,1,.127-0.6,1.393,1.393,0,0,1,.324-0.562,2.5,2.5,0,0,1,.788-0.446q0.591-.243,1.338-0.513a10.458,10.458,0,0,0,1.1-.449,1.606,1.606,0,0,0,.683-0.663,1.841,1.841,0,0,0,.243-0.906,1.241,1.241,0,0,0-.382-0.753,2.336,2.336,0,0,1-.382-0.718,0.866,0.866,0,0,1-.533-0.9,1.211,1.211,0,0,1,.168-0.724q-0.046-.319-0.1-0.979a2.027,2.027,0,0,1,.171-0.982A2.723,2.723,0,0,1,8.129,9.7a2.958,2.958,0,0,1,.86-0.594,2.346,2.346,0,0,1,2.021,0,2.958,2.958,0,0,1,.86.594,2.723,2.723,0,0,1,.576.854,2.027,2.027,0,0,1,.171.982q-0.058.66-.1,0.979a1.211,1.211,0,0,1,.168.724,0.866,0.866,0,0,1-.533.9,2.336,2.336,0,0,1-.382.718,1.241,1.241,0,0,0-.382.753,1.841,1.841,0,0,0,.243.906,1.606,1.606,0,0,0,.683.663,10.458,10.458,0,0,0,1.1.449q0.747,0.269,1.338.513a2.5,2.5,0,0,1,.788.446,1.393,1.393,0,0,1,.324.562,2.342,2.342,0,0,1,.127.6L16,20H4ZM28,24H4V22H28v2Zm0-4H18V18H28v2Zm0-4H18V14H28v2Zm0-4H18V10H28v2Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_id");

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_inbox\" > <title>inbox</title> <path d=\"M27.879,3.515A2,2,0,0,0,25.938,2H6.062a2,2,0,0,0-1.94,1.515L0,20v7.9A2.1,2.1,0,0,0,2.1,30H29.9A2.1,2.1,0,0,0,32,27.9V20ZM28.658,20H21a1,1,0,0,0-1,1v2a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V21a1,1,0,0,0-1-1H3.342a1,1,0,0,1-.97-1.243L5.91,4.606A0.8,0.8,0,0,1,6.686,4H25.314a0.8,0.8,0,0,1,.776.606l3.538,14.151A1,1,0,0,1,28.658,20Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_inbox");

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_location\" > <title>location</title> <path d=\"M16,1.849A10.438,10.438,0,0,0,5.562,12.287C5.562,22,16,30,16,30s10.438-8,10.438-17.713A10.438,10.438,0,0,0,16,1.849Zm0,15.645a5.207,5.207,0,1,1,5.207-5.207A5.207,5.207,0,0,1,16,17.494Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_location");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_mail\" > <title>mail</title> <g> <polygon points=\"0 9.5 0 25 9.538 15.462 0 9.5\"/> <path d=\"M20.615,16.615L16,19.5l-4.615-2.885L0.615,27.385A2.093,2.093,0,0,0,2.1,28H29.9a2.093,2.093,0,0,0,1.485-.615Z\"/> <polygon points=\"32 25 32 9.5 22.462 15.462 32 25\"/> <path d=\"M29.9,4H2.1A2.1,2.1,0,0,0,0,6.1V7L16,17,32,7V6.1A2.1,2.1,0,0,0,29.9,4Z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_mail");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_mobile\" > <title>mobile</title> <path d=\"M21.9,2H10.1A2.1,2.1,0,0,0,8,4.1V27.9A2.1,2.1,0,0,0,10.1,30H21.9A2.1,2.1,0,0,0,24,27.9V4.1A2.1,2.1,0,0,0,21.9,2ZM16,29.3A1.3,1.3,0,1,1,17.3,28,1.3,1.3,0,0,1,16,29.3ZM22,26H10V6H22V26Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_mobile");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_pencil-edit\" > <title>pencil-edit</title> <g> <path d=\"M20,2H4.1A2.1,2.1,0,0,0,2,4.1V27.9A2.1,2.1,0,0,0,4.1,30H27.9A2.1,2.1,0,0,0,30,27.9V12l-2,2V28H4V4H18Z\"/> <path d=\"M30,4.979a0.984,0.984,0,0,0-.054-0.328,4.287,4.287,0,0,0-2.6-2.6A0.984,0.984,0,0,0,27.021,2H25.757L24.343,3.414l4.243,4.243L30,6.243V4.979Z\"/> <polygon points=\"22.984 4.774 11.615 16.142 9.494 22.506 15.858 20.385 27.226 9.016 22.984 4.774\"/> </g> </symbol>";
	module.exports = sprite.add(image, "icon_pencil-edit");

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_plus\" > <title>plus</title> <polygon points=\"28 14 18 14 18 4 14 4 14 14 4 14 4 18 14 18 14 28 18 28 18 18 28 18 28 14\"/> </symbol>";
	module.exports = sprite.add(image, "icon_plus");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_science\" > <title>science</title> <path d=\"M26.45,16c2.868-2.838,4.461-5.774,3.233-7.9s-4.567-2.215-8.458-1.15C20.2,3.048,18.455.2,16,.2s-4.2,2.848-5.225,6.75C6.884,5.885,3.544,5.974,2.317,8.1S2.682,13.162,5.55,16c-2.868,2.838-4.461,5.774-3.233,7.9s4.567,2.215,8.458,1.15c1.024,3.9,2.77,6.75,5.225,6.75s4.2-2.848,5.225-6.75c3.891,1.065,7.231.976,8.458-1.15S29.318,18.838,26.45,16Zm1.5-6.9c0.67,1.16-.23,3.406-2.558,5.909a35.489,35.489,0,0,0-3.252-2.555,35.48,35.48,0,0,0-.587-4.094C24.887,7.6,27.281,7.94,27.951,9.1ZM18.5,20.33c-0.852.492-1.686,0.927-2.5,1.315-0.814-.389-1.648-0.823-2.5-1.315s-1.646-1-2.389-1.508C11.041,17.924,11,16.984,11,16s0.041-1.924.111-2.823c0.743-.51,1.537-1.015,2.389-1.508s1.686-.927,2.5-1.315c0.814,0.389,1.648.823,2.5,1.315s1.646,1,2.389,1.508C20.959,14.076,21,15.016,21,16s-0.041,1.924-.111,2.823C20.146,19.333,19.352,19.838,18.5,20.33ZM20.715,20.5a27.173,27.173,0,0,1-.51,2.784,27.149,27.149,0,0,1-2.666-.95c0.543-.282,1.083-0.572,1.611-0.877S20.2,20.829,20.715,20.5Zm-6.254,1.834a27.149,27.149,0,0,1-2.666.95,27.173,27.173,0,0,1-.51-2.784c0.516,0.329,1.037.652,1.565,0.957S13.918,22.051,14.461,22.333Zm-4.715-4.5A27.178,27.178,0,0,1,7.59,16a27.178,27.178,0,0,1,2.156-1.834C9.719,14.778,9.7,15.39,9.7,16S9.719,17.222,9.746,17.834ZM11.285,11.5a27.175,27.175,0,0,1,.51-2.784,27.163,27.163,0,0,1,2.666.95c-0.543.282-1.083,0.572-1.611,0.877S11.8,11.171,11.285,11.5Zm6.254-1.834a27.163,27.163,0,0,1,2.666-.95,27.175,27.175,0,0,1,.51,2.784c-0.516-.329-1.037-0.652-1.565-0.957S18.082,9.949,17.539,9.667Zm4.715,4.5A27.178,27.178,0,0,1,24.41,16a27.178,27.178,0,0,1-2.156,1.834C22.281,17.222,22.3,16.61,22.3,16S22.281,14.778,22.254,14.166ZM16,2.2c1.339,0,2.834,1.9,3.839,5.17A35.5,35.5,0,0,0,16,8.909,35.5,35.5,0,0,0,12.161,7.37C13.166,4.1,14.661,2.2,16,2.2ZM4.049,9.1c0.67-1.16,3.064-1.5,6.4-.739a35.48,35.48,0,0,0-.587,4.094,35.489,35.489,0,0,0-3.252,2.555C4.279,12.505,3.379,10.26,4.049,9.1Zm0,13.8c-0.67-1.16.23-3.405,2.558-5.909a35.489,35.489,0,0,0,3.252,2.555,35.479,35.479,0,0,0,.587,4.094C7.113,24.4,4.719,24.06,4.049,22.9ZM16,29.8c-1.339,0-2.834-1.9-3.839-5.17A35.5,35.5,0,0,0,16,23.091a35.5,35.5,0,0,0,3.839,1.539C18.834,27.9,17.339,29.8,16,29.8Zm11.951-6.9c-0.67,1.16-3.064,1.5-6.4.74a35.479,35.479,0,0,0,.587-4.094,35.489,35.489,0,0,0,3.252-2.555C27.721,19.495,28.621,21.74,27.951,22.9Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_science");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_search\" > <title>search</title> <path d=\"M31.164,28.336l-8.39-8.39a12.024,12.024,0,1,0-2.828,2.828l8.39,8.39ZM3.5,13A9.5,9.5,0,1,1,13,22.5,9.511,9.511,0,0,1,3.5,13Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_search");

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_setting\" > <title>setting</title> <path d=\"M26.519,16a10.54,10.54,0,0,0-.125-1.54l3.344-2.69L26.515,6.225,22.535,7.767a10.494,10.494,0,0,0-2.673-1.544L19.207,2H12.793L12.138,6.223A10.494,10.494,0,0,0,9.465,7.767L5.485,6.225,2.263,11.77l3.344,2.69A10.54,10.54,0,0,0,5.481,16a10.541,10.541,0,0,0,.125,1.54L2.263,20.23l3.222,5.545,3.979-1.542a10.5,10.5,0,0,0,2.673,1.544L12.793,30h6.414l0.655-4.223a10.5,10.5,0,0,0,2.673-1.544l3.979,1.542,3.222-5.545-3.344-2.69A10.541,10.541,0,0,0,26.519,16ZM15.967,21.207A5.207,5.207,0,1,1,21.174,16,5.207,5.207,0,0,1,15.967,21.207Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_setting");

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_tag\" > <title>tag</title> <path d=\"M29.222,15.222L16.615,2.615A2.1,2.1,0,0,0,15.13,2H8.87a2.1,2.1,0,0,0-1.485.615l-4.77,4.77A2.1,2.1,0,0,0,2,8.87v6.26a2.1,2.1,0,0,0,.615,1.485L15.222,29.222a2.1,2.1,0,0,0,2.97,0l11.03-11.03A2.1,2.1,0,0,0,29.222,15.222ZM9,11.8A2.8,2.8,0,1,1,11.8,9,2.8,2.8,0,0,1,9,11.8Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_tag");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_twitter\" > <title>twitter</title> <path d=\"M31.125,3.5a13.352,13.352,0,0,1-4.188,1.563A6.568,6.568,0,0,0,17.5,4.938a6.313,6.313,0,0,0-1.938,4.625,6.164,6.164,0,0,0,.188,1.5,18.166,18.166,0,0,1-7.531-2A18.1,18.1,0,0,1,2.25,4.188,6.126,6.126,0,0,0,1.312,7.5,6.156,6.156,0,0,0,4.25,12.938a5.679,5.679,0,0,1-2.938-.812V12.25a6.373,6.373,0,0,0,1.469,4.125,6.492,6.492,0,0,0,3.781,2.313,8.331,8.331,0,0,1-1.75.188,6.36,6.36,0,0,1-1.25-.125,6.891,6.891,0,0,0,2.344,3.281,6.014,6.014,0,0,0,3.781,1.281,12.756,12.756,0,0,1-8.125,2.813q-0.75,0-1.562-.062A18.409,18.409,0,0,0,10.062,29a18.723,18.723,0,0,0,8-1.687,16.843,16.843,0,0,0,5.906-4.406,20.788,20.788,0,0,0,3.531-6,18.4,18.4,0,0,0,1.25-6.594V9.5A13.416,13.416,0,0,0,32,6.063a13.275,13.275,0,0,1-3.75,1.063A6.513,6.513,0,0,0,31.125,3.5Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_twitter");

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(23);;
	var image = "<symbol viewBox=\"0 0 32 32\" id=\"icon_user\" > <title>user</title> <path d=\"M30.971,29.277a5.857,5.857,0,0,0-.319-1.506,3.481,3.481,0,0,0-.811-1.4,6.245,6.245,0,0,0-1.969-1.115q-1.477-.608-3.345-1.281a26.158,26.158,0,0,1-2.751-1.122,4.015,4.015,0,0,1-1.709-1.658,4.6,4.6,0,0,1-.608-2.266,3.1,3.1,0,0,1,.956-1.882,5.845,5.845,0,0,0,.956-1.8A2.164,2.164,0,0,0,22.7,13a3.028,3.028,0,0,0-.42-1.81q0.116-.8.261-2.447a5.066,5.066,0,0,0-.427-2.454,6.8,6.8,0,0,0-1.441-2.136,7.394,7.394,0,0,0-2.15-1.484,5.865,5.865,0,0,0-5.052,0,7.394,7.394,0,0,0-2.15,1.484A6.8,6.8,0,0,0,9.883,6.292a5.066,5.066,0,0,0-.427,2.454Q9.6,10.4,9.717,11.193A3.028,3.028,0,0,0,9.3,13a2.164,2.164,0,0,0,1.332,2.244,5.845,5.845,0,0,0,.956,1.8,3.1,3.1,0,0,1,.956,1.882,4.6,4.6,0,0,1-.608,2.266,4.015,4.015,0,0,1-1.709,1.658,26.158,26.158,0,0,1-2.751,1.122q-1.868.673-3.345,1.281a6.245,6.245,0,0,0-1.969,1.115,3.481,3.481,0,0,0-.811,1.4,5.857,5.857,0,0,0-.319,1.506L1,29.9H31Z\"/> </symbol>";
	module.exports = sprite.add(image, "icon_user");

/***/ },
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dialog = __webpack_require__(60);
	
	var dialog = _interopRequireWildcard(_dialog);
	
	__webpack_require__(75);
	
	var _daoDialogHeader = __webpack_require__(77);
	
	var _daoDialogHeader2 = _interopRequireDefault(_daoDialogHeader);
	
	var _daoMultiStep = __webpack_require__(79);
	
	var _daoMultiStep2 = _interopRequireDefault(_daoMultiStep);
	
	var _daoStep = __webpack_require__(86);
	
	var _daoStep2 = _interopRequireDefault(_daoStep);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	angular.module('dao.dialog', ['dao.multiStep']).factory('$daoDialogStack', dialog.DaoDialogStack).provider('$daoDialog', dialog.DaoDialogProvider).directive('daoDialogBackdrop', dialog.daoDialogBackdrop).directive('daoDialogWindow', dialog.daoDialogWindow).directive('daoDialogAnimationClass', dialog.daoDialogAnimationClass).directive('daoDialogTransclude', dialog.daoDialogTransclude);
	
	angular.module('dao.multiStep', []).directive('daoDialogHeader', _daoDialogHeader2.default).directive('daoMultiStep', _daoMultiStep2.default).directive('daoStep', _daoStep2.default);
	
	exports.default = 'dao.dialog';

/***/ },
/* 60 */
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
	
	var _keys = __webpack_require__(61);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _daoBackdrop = __webpack_require__(73);
	
	var _daoBackdrop2 = _interopRequireDefault(_daoBackdrop);
	
	var _daoWindow = __webpack_require__(74);
	
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
	
	        if (dialog && dialog.value.backdrop && dialog.value.backdrop !== 'static' && (evt.target === evt.currentTarget || evt.target.classList.contains('dao-dialog-overlay-inner'))) {
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	module.exports = __webpack_require__(69).Object.keys;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(64);
	
	__webpack_require__(66)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(65);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(67)
	  , core    = __webpack_require__(69)
	  , fails   = __webpack_require__(72);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(68)
	  , core      = __webpack_require__(69)
	  , ctx       = __webpack_require__(70)
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
/* 68 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 69 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(71);
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
/* 71 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-backdrop ng-style=\"{'z-index': 10002 + (index && 1 || 0) + index*10}\"></div>"

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao-dialog dao-dialog-overlay\" dialog-render={{$isRendered}} tabindex=-1 role=dialog ng-style=\"{'z-index': 10010 + index*10, display: 'flex'}\"><div class=dao-dialog-overlay-inner><div class=\"dao-dialog-container show-dialog\" dao-dialog-transclude></div></div></div>"

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(76);
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-backdrop{background-color:rgba(61,65,66,.6)}.dao-backdrop,.dao-dialog.dao-dialog-overlay{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;min-height:100%}.dao-dialog.dao-dialog-overlay{display:flex;justify-content:center;background-color:transparent}.dao-dialog .dao-dialog-overlay-inner{padding:100px 22px;box-sizing:border-box;max-height:100%;width:100%;overflow:auto}.dao-dialog .dao-dialog-container{max-width:554px;background:#e6e9ed;border-radius:4px;box-shadow:0 3px 30px rgba(16,17,18,.3);margin:0 auto}.dao-dialog .dao-dialog-container.show-dialog{animation:showDialog .3s}@keyframes showDialog{0%{transform:scale(.7);-webkit-transform:scale(.7)}45%{transform:scale(1.05);-webkit-transform:scale(1.05)}80%{transform:scale(.95);-webkit-transform:scale(.95)}to{transform:scale(1);-webkit-transform:scale(1)}}.dao-dialog .dao-dialog-header{display:flex;justify-content:space-between;padding:20px 22px;background-color:#e6e9ed;border-radius:4px 4px 0 0;box-shadow:inset 0 -1px 0 rgba(204,209,217,.5);color:#434a54;font-size:18px;font-weight:300;line-height:24px}.dao-dialog .dao-dialog-header .dao-close{cursor:pointer}.dao-dialog .dao-dialog-header .dao-close svg{width:17px;height:17px;fill:#aab2bd}.dao-dialog .dao-dialog-header .dao-close svg:hover{fill:#656d78}.dao-dialog .dao-dialog-body{padding:20px 22px;background-color:#fff;color:#434a54;font-size:14px;font-weight:400;line-height:21px}.dao-dialog .dao-dialog-footer{display:flex;justify-content:flex-end;padding:14px 22px;background-color:#e6e9ed;border-radius:0 0 4px 4px;box-shadow:inset 0 1px 0 rgba(204,209,217,.5)}.dao-dialog .dao-multi-step{overflow:hidden}.dao-dialog .dao-multi-step .dao-step{max-width:554px;background-color:#fff;overflow:hidden;border-radius:0 0 4px 4px}@keyframes shake{0%{transform:translateY(-100%)}40%{transform:translateY(4%)}50%{transform:translateY(-3%)}65%{transform:translateY(2%)}80%{transform:translateY(-1%)}to{transform:translateY(0)}}.dao-dialog .dao-multi-step .dao-step.dao-animate.ng-enter{animation:shake .6s}.dao-dialog .dao-multi-step .dao-dialog-footer{display:block;overflow:hidden}", ""]);
	
	// exports


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoDialogHeader = __webpack_require__(78);
	
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
/* 78 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-dialog-header><ng-transclude></ng-transclude><div ng-click=\"$dismiss('close')\" class=dao-close><svg preserveaspectratio=xMidYMid width=34 height=34 viewbox=\"0 0 34 34\"><path d=\"M17.000,0.001 C7.612,0.001 0.001,7.612 0.001,17.000 C0.001,26.388 7.612,33.999 17.000,33.999 C26.388,33.999 33.999,26.388 33.999,17.000 C33.999,7.612 26.388,0.001 17.000,0.001 ZM24.166,21.666 C24.166,21.666 21.666,24.166 21.666,24.166 C21.666,24.166 17.000,19.500 17.000,19.500 C17.000,19.500 12.334,24.166 12.334,24.166 C12.334,24.166 9.834,21.666 9.834,21.666 C9.834,21.666 14.500,17.000 14.500,17.000 C14.500,17.000 9.834,12.335 9.834,12.335 C9.834,12.335 12.334,9.834 12.334,9.834 C12.334,9.834 17.000,14.500 17.000,14.500 C17.000,14.500 21.666,9.834 21.666,9.834 C21.666,9.834 24.166,12.335 24.166,12.335 C24.166,12.335 19.500,17.000 19.500,17.000 C19.500,17.000 24.166,21.666 24.166,21.666 Z\" id=path-1 fill-rule=evenodd></path></svg></div></div>"

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(80);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(81);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _daoMultiStep = __webpack_require__(85);
	
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
/* 80 */
/***/ function(module, exports) {

	"use strict";
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty = __webpack_require__(82);
	
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(84);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 84 */
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
/* 85 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-multi-step ng-transclude></div>"

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoStep = __webpack_require__(87);
	
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
/* 87 */
/***/ function(module, exports) {

	module.exports = "<div ng-if=isActive class=dao-step ng-class=\"{'dao-animate':daoAnimate}\" ng-transclude></div>"

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoInputDirective = __webpack_require__(89);
	
	var _daoInputDirective2 = _interopRequireDefault(_daoInputDirective);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module('dao.input', []).directive('daoInput', _daoInputDirective2.default);
	
	exports.default = 'dao.input';

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	DaoInputDirective.$inject = ["$compile"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoInput = __webpack_require__(90);
	
	var _daoInput2 = _interopRequireDefault(_daoInput);
	
	__webpack_require__(91);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DaoInputDirective($compile) {
	  "ngInject";
	
	  return {
	    restrict: 'A',
	
	    template: _daoInput2.default,
	    replace: true,
	    transclude: 'element',
	    //compile: DaoInputCompile,
	    link: DaoInputLink
	  };
	
	  //controller: DaoInputController,
	  //controllerAs: 'vm',
	  //bindToController: true,
	  function DaoInputCompile(el, attrs, transcludeFn) {
	    return DaoInputLink;
	  }
	
	  function DaoInputLink(scope, el) {
	    var input = el.find('input');
	    input.removeAttr('dao-input');
	    $compile(input)(scope, function (_el, _scope) {
	      input.replaceWith(_el);
	    });
	  }
	}
	
	//function DaoInputController() {
	//  var vm = this;
	//
	//  console.log(vm);
	//}
	
	exports.default = DaoInputDirective;

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao input\" ng-class=\"[state,{'has-button': hasButton}]\"><div ng-transclude></div><div ng-bind-html=message></div></div>"

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.input input{margin:0;max-width:100%;flex:1 0 auto;width:456px;outline:0;text-align:left;line-height:1.2142em;background:#fff;padding:.67861429em 1em;border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);border-radius:0;transition:box-shadow .1s ease,border-color .1s ease;box-shadow:none}.dao.input.has-button input{width:356px}.dao.input.has-button button{margin-left:25px}.dao.input.success{color:#2ecc71}.dao.input.success input{border-color:#2ecc71}.dao.input.warning{color:#fc6e51}.dao.input.warning input{border-color:#fc6e51}.dao.input.error{color:#ed5565}.dao.input.error input{border-color:#ed5565}.dao.input.search{position:relative}.dao.input.search .search-icon{position:absolute;fill:#9ba3af;width:16px;height:16px;left:12px;top:9px}.dao.input.search input{height:34px;line-height:32px;margin-right:15px;width:200px;text-indent:24px;box-shadow:none;border-radius:17px;border:1px solid #ccd1d9}.dao.input.focus input,.dao.input input:focus{border-color:#85b7d9;background:#fff;color:rgba(0,0,0,.8);box-shadow:none}.dao.input.disabled input,.dao.input input[disabled]{background:#e6e9ed;pointer-events:none}", ""]);
	
	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoPosition = __webpack_require__(94);
	
	var position = _interopRequireWildcard(_daoPosition);
	
	var _daoStackedMap = __webpack_require__(95);
	
	var stackedMap = _interopRequireWildcard(_daoStackedMap);
	
	var _daoTooltip = __webpack_require__(96);
	
	var tooltip = _interopRequireWildcard(_daoTooltip);
	
	__webpack_require__(100);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	angular.module('dao.position', []).factory('$daoPosition', position.$daoPosition);
	
	angular.module('dao.stackedMap', []).factory('$daoStackedMap', stackedMap.$daoStackedMap);
	
	var moduleName = 'dao.tooltip';
	angular.module(moduleName, ['dao.position', 'dao.stackedMap']).provider('$daoTooltip', tooltip.$daoTooltip).directive('daoTooltipTemplateTransclude', tooltip.daoTooltipTemplateTransclude).directive('daoTooltipClasses', tooltip.daoTooltipClasses).directive('daoTooltipPopup', tooltip.daoTooltipPopup).directive('daoTooltip', tooltip.daoTooltip).directive('daoTooltipTemplatePopup', tooltip.daoTooltipTemplatePopup).directive('daoTooltipTemplate', tooltip.daoTooltipTemplate).directive('daoTooltipHtmlPopup', tooltip.daoTooltipHtmlPopup).directive('daoTooltipHtml', tooltip.daoTooltipHtml);
	
	exports.default = moduleName;

/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * A set of utility methods for working with the DOM.
	 * It is meant to be used where we need to absolute-position elements in
	 * relation to another element (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	
	'use strict';
	
	$daoPosition.$inject = ["$document", "$window"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$daoPosition = $daoPosition;
	/*@ngInject*/function $daoPosition($document, $window) {
	  /**
	   * Used by scrollbarWidth() function to cache scrollbar's width.
	   * Do not access this variable directly, use scrollbarWidth() instead.
	   */
	  var SCROLLBAR_WIDTH;
	  var OVERFLOW_REGEX = {
	    normal: /(auto|scroll)/,
	    hidden: /(auto|scroll|hidden)/
	  };
	  var PLACEMENT_REGEX = {
	    auto: /\s?auto?\s?/i,
	    primary: /^(top|bottom|left|right)$/,
	    secondary: /^(top|bottom|left|right|center)$/,
	    vertical: /^(top|bottom)$/
	  };
	
	  return {
	
	    /**
	     * Provides a raw DOM element from a jQuery/jQLite element.
	     *
	     * @param {element} elem - The element to convert.
	     *
	     * @returns {element} A HTML element.
	     */
	    getRawNode: function getRawNode(elem) {
	      return elem[0] || elem;
	    },
	
	    /**
	     * Provides a parsed number for a style property.  Strips
	     * units and casts invalid numbers to 0.
	     *
	     * @param {string} value - The style value to parse.
	     *
	     * @returns {number} A valid number.
	     */
	    parseStyle: function parseStyle(value) {
	      value = parseFloat(value);
	      return isFinite(value) ? value : 0;
	    },
	
	    /**
	     * Provides the closest positioned ancestor.
	     *
	     * @param {element} element - The element to get the offest parent for.
	     *
	     * @returns {element} The closest positioned ancestor.
	     */
	    offsetParent: function offsetParent(elem) {
	      elem = this.getRawNode(elem);
	
	      var offsetParent = elem.offsetParent || $document[0].documentElement;
	
	      function isStaticPositioned(el) {
	        return ($window.getComputedStyle(el).position || 'static') === 'static';
	      }
	
	      while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
	        offsetParent = offsetParent.offsetParent;
	      }
	
	      return offsetParent || $document[0].documentElement;
	    },
	
	    /**
	     * Provides the scrollbar width, concept from TWBS measureScrollbar()
	     * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
	     *
	     * @returns {number} The width of the browser scollbar.
	     */
	    scrollbarWidth: function scrollbarWidth() {
	      if (angular.isUndefined(SCROLLBAR_WIDTH)) {
	        var scrollElem = angular.element('<div style="position: absolute; top: -9999px; width: 50px; height: 50px; overflow: scroll;"></div>');
	        $document.find('body').append(scrollElem);
	        SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
	        SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
	        scrollElem.remove();
	      }
	
	      return SCROLLBAR_WIDTH;
	    },
	
	    /**
	     * Provides the closest scrollable ancestor.
	     * A port of the jQuery UI scrollParent method:
	     * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
	     *
	     * @param {element} elem - The element to find the scroll parent of.
	     * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
	     *   default is false.
	     *
	     * @returns {element} A HTML element.
	     */
	    scrollParent: function scrollParent(elem, includeHidden) {
	      elem = this.getRawNode(elem);
	
	      var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
	      var documentEl = $document[0].documentElement;
	      var elemStyle = $window.getComputedStyle(elem);
	      var excludeStatic = elemStyle.position === 'absolute';
	      var scrollParent = elem.parentElement || documentEl;
	
	      if (scrollParent === documentEl || elemStyle.position === 'fixed') {
	        return documentEl;
	      }
	
	      while (scrollParent.parentElement && scrollParent !== documentEl) {
	        var spStyle = $window.getComputedStyle(scrollParent);
	        if (excludeStatic && spStyle.position !== 'static') {
	          excludeStatic = false;
	        }
	
	        if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
	          break;
	        }
	        scrollParent = scrollParent.parentElement;
	      }
	
	      return scrollParent;
	    },
	
	    /**
	     * Provides read-only equivalent of jQuery's position function:
	     * http://api.jquery.com/position/ - distance to closest positioned
	     * ancestor.  Does not account for margins by default like jQuery position.
	     *
	     * @param {element} elem - The element to caclulate the position on.
	     * @param {boolean=} [includeMargins=false] - Should margins be accounted
	     * for, default is false.
	     *
	     * @returns {object} An object with the following properties:
	     *   <ul>
	     *     <li>**width**: the width of the element</li>
	     *     <li>**height**: the height of the element</li>
	     *     <li>**top**: distance to top edge of offset parent</li>
	     *     <li>**left**: distance to left edge of offset parent</li>
	     *   </ul>
	     */
	    position: function position(elem, includeMagins) {
	      elem = this.getRawNode(elem);
	
	      var elemOffset = this.offset(elem);
	      if (includeMagins) {
	        var elemStyle = $window.getComputedStyle(elem);
	        elemOffset.top -= this.parseStyle(elemStyle.marginTop);
	        elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
	      }
	      var parent = this.offsetParent(elem);
	      var parentOffset = {
	        top: 0,
	        left: 0
	      };
	
	      if (parent !== $document[0].documentElement) {
	        parentOffset = this.offset(parent);
	        parentOffset.top += parent.clientTop - parent.scrollTop;
	        parentOffset.left += parent.clientLeft - parent.scrollLeft;
	      }
	
	      return {
	        width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
	        height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
	        top: Math.round(elemOffset.top - parentOffset.top),
	        left: Math.round(elemOffset.left - parentOffset.left)
	      };
	    },
	
	    /**
	     * Provides read-only equivalent of jQuery's offset function:
	     * http://api.jquery.com/offset/ - distance to viewport.  Does
	     * not account for borders, margins, or padding on the body
	     * element.
	     *
	     * @param {element} elem - The element to calculate the offset on.
	     *
	     * @returns {object} An object with the following properties:
	     *   <ul>
	     *     <li>**width**: the width of the element</li>
	     *     <li>**height**: the height of the element</li>
	     *     <li>**top**: distance to top edge of viewport</li>
	     *     <li>**right**: distance to bottom edge of viewport</li>
	     *   </ul>
	     */
	    offset: function offset(elem) {
	      elem = this.getRawNode(elem);
	
	      var elemBCR = elem.getBoundingClientRect();
	      return {
	        width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
	        height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
	        top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
	        left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
	      };
	    },
	
	    /**
	     * Provides offset distance to the closest scrollable ancestor
	     * or viewport.  Accounts for border and scrollbar width.
	     *
	     * Right and bottom dimensions represent the distance to the
	     * respective edge of the viewport element.  If the element
	     * edge extends beyond the viewport, a negative value will be
	     * reported.
	     *
	     * @param {element} elem - The element to get the viewport offset for.
	     * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
	     * of the first scrollable element, default is false.
	     * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
	     * be accounted for, default is true.
	     *
	     * @returns {object} An object with the following properties:
	     *   <ul>
	     *     <li>**top**: distance to the top content edge of viewport element</li>
	     *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
	     *     <li>**left**: distance to the left content edge of viewport element</li>
	     *     <li>**right**: distance to the right content edge of viewport element</li>
	     *   </ul>
	     */
	    viewportOffset: function viewportOffset(elem, useDocument, includePadding) {
	      elem = this.getRawNode(elem);
	      includePadding = includePadding !== false ? true : false;
	
	      var elemBCR = elem.getBoundingClientRect();
	      var offsetBCR = {
	        top: 0,
	        left: 0,
	        bottom: 0,
	        right: 0
	      };
	
	      var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
	      var offsetParentBCR = offsetParent.getBoundingClientRect();
	
	      offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
	      offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
	      if (offsetParent === $document[0].documentElement) {
	        offsetBCR.top += $window.pageYOffset;
	        offsetBCR.left += $window.pageXOffset;
	      }
	      offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
	      offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;
	
	      if (includePadding) {
	        var offsetParentStyle = $window.getComputedStyle(offsetParent);
	        offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
	        offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
	        offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
	        offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
	      }
	
	      return {
	        top: Math.round(elemBCR.top - offsetBCR.top),
	        bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
	        left: Math.round(elemBCR.left - offsetBCR.left),
	        right: Math.round(offsetBCR.right - elemBCR.right)
	      };
	    },
	
	    /**
	     * Provides an array of placement values parsed from a placement string.
	     * Along with the 'auto' indicator, supported placement strings are:
	     *   <ul>
	     *     <li>top: element on top, horizontally centered on host element.</li>
	     *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
	     *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
	     *     <li>bottom: element on bottom, horizontally centered on host element.</li>
	     *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
	     *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
	     *     <li>left: element on left, vertically centered on host element.</li>
	     *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
	     *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
	     *     <li>right: element on right, vertically centered on host element.</li>
	     *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
	     *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
	     *   </ul>
	     * A placement string with an 'auto' indicator is expected to be
	     * space separated from the placement, i.e: 'auto bottom-left'  If
	     * the primary and secondary placement values do not match 'top,
	     * bottom, left, right' then 'top' will be the primary placement and
	     * 'center' will be the secondary placement.  If 'auto' is passed, true
	     * will be returned as the 3rd value of the array.
	     *
	     * @param {string} placement - The placement string to parse.
	     *
	     * @returns {array} An array with the following values
	     * <ul>
	     *   <li>**[0]**: The primary placement.</li>
	     *   <li>**[1]**: The secondary placement.</li>
	     *   <li>**[2]**: If auto is passed: true, else undefined.</li>
	     * </ul>
	     */
	    parsePlacement: function parsePlacement(placement) {
	      var autoPlace = PLACEMENT_REGEX.auto.test(placement);
	      if (autoPlace) {
	        placement = placement.replace(PLACEMENT_REGEX.auto, '');
	      }
	
	      placement = placement.split('-');
	
	      placement[0] = placement[0] || 'top';
	      if (!PLACEMENT_REGEX.primary.test(placement[0])) {
	        placement[0] = 'top';
	      }
	
	      placement[1] = placement[1] || 'center';
	      if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
	        placement[1] = 'center';
	      }
	
	      if (autoPlace) {
	        placement[2] = true;
	      } else {
	        placement[2] = false;
	      }
	
	      return placement;
	    },
	
	    /**
	     * Provides coordinates for an element to be positioned relative to
	     * another element.  Passing 'auto' as part of the placement parameter
	     * will enable smart placement - where the element fits. i.e:
	     * 'auto left-top' will check to see if there is enough space to the left
	     * of the hostElem to fit the targetElem, if not place right (same for secondary
	     * top placement).  Available space is calculated using the viewportOffset
	     * function.
	     *
	     * @param {element} hostElem - The element to position against.
	     * @param {element} targetElem - The element to position.
	     * @param {string=} [placement=top] - The placement for the targetElem,
	     *   default is 'top'. 'center' is assumed as secondary placement for
	     *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
	     *   <ul>
	     *     <li>top</li>
	     *     <li>top-right</li>
	     *     <li>top-left</li>
	     *     <li>bottom</li>
	     *     <li>bottom-left</li>
	     *     <li>bottom-right</li>
	     *     <li>left</li>
	     *     <li>left-top</li>
	     *     <li>left-bottom</li>
	     *     <li>right</li>
	     *     <li>right-top</li>
	     *     <li>right-bottom</li>
	     *   </ul>
	     * @param {boolean=} [appendToBody=false] - Should the top and left values returned
	     *   be calculated from the body element, default is false.
	     *
	     * @returns {object} An object with the following properties:
	     *   <ul>
	     *     <li>**top**: Value for targetElem top.</li>
	     *     <li>**left**: Value for targetElem left.</li>
	     *     <li>**placement**: The resolved placement.</li>
	     *   </ul>
	     */
	    positionElements: function positionElements(hostElem, targetElem, placement, appendToBody) {
	      hostElem = this.getRawNode(hostElem);
	      targetElem = this.getRawNode(targetElem);
	
	      // need to read from prop to support tests.
	      var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
	      var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');
	
	      placement = this.parsePlacement(placement);
	
	      var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
	      var targetElemPos = {
	        top: 0,
	        left: 0,
	        placement: ''
	      };
	
	      if (placement[2]) {
	        var viewportOffset = this.viewportOffset(hostElem);
	
	        var targetElemStyle = $window.getComputedStyle(targetElem);
	        var adjustedSize = {
	          width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
	          height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
	        };
	
	        placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' : placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' : placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' : placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' : placement[0];
	
	        placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' : placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' : placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' : placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' : placement[1];
	
	        if (placement[1] === 'center') {
	          if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	            var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
	            if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
	              placement[1] = 'left';
	            } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
	              placement[1] = 'right';
	            }
	          } else {
	            var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
	            if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
	              placement[1] = 'top';
	            } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
	              placement[1] = 'bottom';
	            }
	          }
	        }
	      }
	
	      switch (placement[0]) {
	        case 'top':
	          targetElemPos.top = hostElemPos.top - targetHeight;
	          break;
	        case 'bottom':
	          targetElemPos.top = hostElemPos.top + hostElemPos.height;
	          break;
	        case 'left':
	          targetElemPos.left = hostElemPos.left - targetWidth;
	          break;
	        case 'right':
	          targetElemPos.left = hostElemPos.left + hostElemPos.width;
	          break;
	      }
	
	      switch (placement[1]) {
	        case 'top':
	          targetElemPos.top = hostElemPos.top;
	          break;
	        case 'bottom':
	          targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
	          break;
	        case 'left':
	          targetElemPos.left = hostElemPos.left;
	          break;
	        case 'right':
	          targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
	          break;
	        case 'center':
	          if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	            targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
	          } else {
	            targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
	          }
	          break;
	      }
	
	      targetElemPos.top = Math.round(targetElemPos.top);
	      targetElemPos.left = Math.round(targetElemPos.left);
	      targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];
	
	      return targetElemPos;
	    },
	
	    /**
	     * Provides a way for positioning tooltip & dropdown
	     * arrows when using placement options beyond the standard
	     * left, right, top, or bottom.
	     *
	     * @param {element} elem - The tooltip/dropdown element.
	     * @param {string} placement - The placement for the elem.
	     */
	    positionArrow: function positionArrow(elem, placement) {
	      elem = this.getRawNode(elem);
	
	      var innerElem = elem.querySelector('.dao-tooltip-inner, .dao-popover-inner');
	      if (!innerElem) {
	        return;
	      }
	
	      var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');
	
	      var arrowElem = isTooltip ? elem.querySelector('.dao-tooltip-arrow') : elem.querySelector('.arrow');
	      if (!arrowElem) {
	        return;
	      }
	
	      placement = this.parsePlacement(placement);
	      if (placement[1] === 'center') {
	        // no adjustment necessary - just reset styles
	        angular.element(arrowElem).css({
	          top: '',
	          bottom: '',
	          right: '',
	          left: '',
	          margin: ''
	        });
	        return;
	      }
	
	      var borderProp = 'border-' + placement[0] + '-width';
	      var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];
	
	      var borderRadiusProp = 'border-';
	      if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	        borderRadiusProp += placement[0] + '-' + placement[1];
	      } else {
	        borderRadiusProp += placement[1] + '-' + placement[0];
	      }
	      borderRadiusProp += '-radius';
	      var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];
	
	      var arrowCss = {
	        top: 'auto',
	        bottom: 'auto',
	        left: 'auto',
	        right: 'auto',
	        margin: 0
	      };
	
	      switch (placement[0]) {
	        case 'top':
	          arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
	          break;
	        case 'bottom':
	          arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
	          break;
	        case 'left':
	          arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
	          break;
	        case 'right':
	          arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
	          break;
	      }
	
	      arrowCss[placement[1]] = borderRadius;
	
	      angular.element(arrowElem).css(arrowCss);
	    }
	  };
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$daoStackedMap = $daoStackedMap;
	/*@ngInject*/function $daoStackedMap() {
	  return {
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
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	daoTooltipTemplateTransclude.$inject = ["$animate", "$sce", "$compile", "$templateRequest"];
	daoTooltipClasses.$inject = ["$daoPosition"];
	daoTooltip.$inject = ["$daoTooltip"];
	daoTooltipTemplate.$inject = ["$daoTooltip"];
	daoTooltipHtml.$inject = ["$daoTooltip"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$daoTooltip = $daoTooltip;
	exports.daoTooltipTemplateTransclude = daoTooltipTemplateTransclude;
	exports.daoTooltipClasses = daoTooltipClasses;
	exports.daoTooltipPopup = daoTooltipPopup;
	exports.daoTooltip = daoTooltip;
	exports.daoTooltipTemplatePopup = daoTooltipTemplatePopup;
	exports.daoTooltipTemplate = daoTooltipTemplate;
	exports.daoTooltipHtmlPopup = daoTooltipHtmlPopup;
	exports.daoTooltipHtml = daoTooltipHtml;
	
	var _tooltipTemplatePopup = __webpack_require__(97);
	
	var _tooltipTemplatePopup2 = _interopRequireDefault(_tooltipTemplatePopup);
	
	var _tooltipHtmlPopup = __webpack_require__(98);
	
	var _tooltipHtmlPopup2 = _interopRequireDefault(_tooltipHtmlPopup);
	
	var _tooltipPopup = __webpack_require__(99);
	
	var _tooltipPopup2 = _interopRequireDefault(_tooltipPopup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	'use strict'; /**
	               * The $tooltip service creates tooltip- and popover-like directives as well as
	               * houses global options for them.
	               */
	
	/*@ngInject*/function $daoTooltip() {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    placementClassPrefix: '',
	    animation: true,
	    popupDelay: 0,
	    popupCloseDelay: 0,
	    useContentExp: false,
	    templateType: 'url'
	  };
	
	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'outsideClick': 'outsideClick',
	    'focus': 'blur',
	    'outsideHover': 'outsideHover',
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
	   * This is a helper function for translating camel-case to snake_case.
	   */
	  function snake_case(name) {
	    var regexp = /[A-Z]/g;
	    var separator = '-';
	    return name.replace(regexp, function (letter, pos) {
	      return (pos ? separator : '') + letter.toLowerCase();
	    });
	  };
	
	  /**
	   * Returns the actual instance of the $tooltip service.
	   * TODO support multiple triggers
	   */
	
	  /*@ngInject*/
	  this.$get = function ($window, $compile, $timeout, $document, $daoPosition, $interpolate, $rootScope, $parse, $daoStackedMap) {
	    var openedTooltips = $daoStackedMap.createNew();
	    $document.on('keypress', keypressListener);
	
	    $rootScope.$on('$destroy', function () {
	      $document.off('keypress', keypressListener);
	    });
	
	    function keypressListener(e) {
	      if (e.which === 27) {
	        var last = openedTooltips.top();
	        if (last) {
	          last.value.close();
	          openedTooltips.removeTop();
	          last = null;
	        }
	      }
	    }
	
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
	      var template = '<div ' + directiveName + '-popup ' + 'title="' + startSym + 'title' + endSym + '" ' + (options.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + startSym + 'content' + endSym + '" ') + 'placement="' + startSym + 'placement' + endSym + '" ' + 'popup-class="' + startSym + 'popupClass' + endSym + '" ' + 'template-type="' + startSym + 'templateType' + endSym + '" ' + 'animation="animation" ' + 'is-open="isOpen"' + 'origin-scope="origScope" ' + 'style="visibility: hidden; display: block; top: -9999px; left: -9999px;"' + '>' + '</div>';
	
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
	                  var ttPosition = $daoPosition.positionElements(element, tooltip, ttScope.placement, appendToBody);
	                  tooltip.css({
	                    top: ttPosition.top + 'px',
	                    left: ttPosition.left + 'px',
	                    visibility: 'visible'
	                  });
	
	                  // If the placement class is prefixed, still need
	                  // to remove the TWBS standard class.
	                  if (options.placementClassPrefix) {
	                    tooltip.removeClass('top bottom left right');
	                  }
	
	                  tooltip.removeClass(options.placementClassPrefix + 'top ' + options.placementClassPrefix + 'top-left ' + options.placementClassPrefix + 'top-right ' + options.placementClassPrefix + 'bottom ' + options.placementClassPrefix + 'bottom-left ' + options.placementClassPrefix + 'bottom-right ' + options.placementClassPrefix + 'left ' + options.placementClassPrefix + 'left-top ' + options.placementClassPrefix + 'left-bottom ' + options.placementClassPrefix + 'right ' + options.placementClassPrefix + 'right-top ' + options.placementClassPrefix + 'right-bottom');
	
	                  var placement = ttPosition.placement.split('-');
	                  tooltip.addClass(placement[0] + ' ' + options.placementClassPrefix + ttPosition.placement);
	                  $daoPosition.positionArrow(tooltip, ttPosition.placement);
	
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
	            function showTooltipBind(e) {
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
	
	            function hideTooltipBind(e) {
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
	                if (ttScope) {
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
	             * Set the initial scope values. Once
	             * the tooltip is created, the observers
	             * will be added to keep things in sync.
	             */
	            function prepareTooltip() {
	              ttScope.title = attrs[prefix + 'Title'];
	              if (contentParse) {
	                ttScope.content = contentParse(scope);
	              } else {
	                ttScope.content = attrs[ttType];
	              }
	              // for popover template
	              ttScope.templateType = attrs['templateType'] ? attrs['templateType'] : 'url';
	
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
	
	            function bodyShowTooltipBind(e) {
	              tooltip.off('mouseenter', showTooltipBind);
	              tooltip.off('mouseleave', hideTooltipBind);
	
	              tooltip.on('mouseenter', showTooltipBind);
	              tooltip.on('mouseleave', hideTooltipBind);
	            }
	
	            var unregisterTriggers = function unregisterTriggers() {
	              triggers.show.forEach(function (trigger) {
	                if (trigger === 'outsideClick') {
	                  element.off('click', toggleTooltipBind);
	                } else if (trigger === 'outsideHover') {
	                  element.off('mouseenter', showTooltipBind);
	                  element.off('mouseleave', hideTooltipBind);
	                } else {
	                  element.off(trigger, showTooltipBind);
	                  element.off(trigger, toggleTooltipBind);
	                }
	              });
	              triggers.hide.forEach(function (trigger) {
	                if (trigger === 'outsideClick') {
	                  $document.off('click', bodyHideTooltipBind);
	                } else if (trigger === 'outsideHover') {
	                  element.off('mouseleave', bodyShowTooltipBind);
	                } else {
	                  element.off(trigger, hideTooltipBind);
	                }
	              });
	            };
	
	            function prepTriggers() {
	              var val = attrs[prefix + 'Trigger'];
	              unregisterTriggers();
	
	              triggers = getTriggers(val);
	
	              if (triggers.show !== 'none') {
	                triggers.show.forEach(function (trigger, idx) {
	                  if (trigger === 'outsideClick') {
	                    element.on('click', toggleTooltipBind);
	                    $document.on('click', bodyHideTooltipBind);
	                  } else if (trigger === 'outsideHover') {
	                    element.on('mouseenter', showTooltipBind);
	                    element.on('mouseleave', hideTooltipBind);
	                    element.on('mouseleave', bodyShowTooltipBind);
	                  } else if (trigger === triggers.hide[idx]) {
	                    element.on(trigger, toggleTooltipBind);
	                  } else if (trigger) {
	                    element.on(trigger, showTooltipBind);
	                    element.on(triggers.hide[idx], hideTooltipBind);
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
	
	            var appendToBodyVal;
	            var appendKey = prefix + 'AppendToBody';
	            if (appendKey in attrs && attrs[appendKey] === undefined) {
	              appendToBodyVal = true;
	            } else {
	              appendToBodyVal = scope.$eval(attrs[appendKey]);
	            }
	
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
	  this.$get.$inject = ["$window", "$compile", "$timeout", "$document", "$daoPosition", "$interpolate", "$rootScope", "$parse", "$daoStackedMap"];
	}
	
	// This is mostly ngInclude code but with a custom scope
	/*@ngInject*/function daoTooltipTemplateTransclude($animate, $sce, $compile, $templateRequest) {
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
	      if (attrs.templateType == 'url') {
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
	      } else {
	        scope.$watch(attrs.daoTooltipTemplateTransclude, function (template) {
	
	          var thisChangeId = ++changeCounter;
	
	          if (template) {
	
	            if (thisChangeId !== changeCounter) {
	              return;
	            }
	
	            var newScope = origScope.$new();
	
	            var clone = $compile(template)(newScope, function (clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });
	
	            currentScope = newScope;
	            currentElement = clone;
	          } else {
	            cleanupLastIncludeContent();
	          }
	        });
	      };
	
	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}
	
	/**
	 * Note that it's intentional that these classes are *not* applied through $animate.
	 * They must not be animated as they're expected to be present on the tooltip on
	 * initialization.
	 */
	/*@ngInject*/function daoTooltipClasses($daoPosition) {
	  return {
	    restrict: 'A',
	    link: function link(scope, element, attrs) {
	      // need to set the primary position so the
	      // arrow has space during position measure.
	      // tooltip.positionTooltip()
	      if (scope.placement) {
	        // // There are no top-left etc... classes
	        // // in TWBS, so we need the primary position.
	        var position = $daoPosition.parsePlacement(scope.placement);
	        element.addClass(position[0]);
	      } else {
	        element.addClass('top');
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
	
	/*@ngInject*/function daoTooltipPopup() {
	  return {
	    replace: true,
	    scope: {
	      content: '@',
	      placement: '@',
	      popupClass: '@',
	      animation: '&',
	      isOpen: '&'
	    },
	    template: _tooltipPopup2.default
	  };
	}
	
	/*@ngInject*/function daoTooltip($daoTooltip) {
	  return $daoTooltip('daoTooltip', 'tooltip', 'mouseenter');
	}
	
	/*@ngInject*/function daoTooltipTemplatePopup() {
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
	
	/*@ngInject*/function daoTooltipTemplate($daoTooltip) {
	  return $daoTooltip('daoTooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}
	
	/*@ngInject*/function daoTooltipHtmlPopup() {
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
	
	/*@ngInject*/function daoTooltipHtml($daoTooltip) {
	  return $daoTooltip('daoTooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-tooltip tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=dao-tooltip-arrow></div><div class=dao-tooltip-inner dao-tooltip-template-transclude=contentExp() tooltip-template-transclude-scope=originScope()></div></div>"

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-tooltip tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=dao-tooltip-arrow></div><div class=dao-tooltip-inner ng-bind-html=contentExp()></div></div>"

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-tooltip tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=dao-tooltip-arrow></div><div class=dao-tooltip-inner ng-bind=content></div></div>"

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(101);
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-tooltip{position:absolute;z-index:1070;display:block;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.42857;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:12px;opacity:0;filter:alpha(opacity=0)}.dao-tooltip.in{opacity:.9;filter:alpha(opacity=90)}.dao-tooltip.top{margin-top:-3px;padding:5px 0}.dao-tooltip.right{margin-left:3px;padding:0 5px}.dao-tooltip.bottom{margin-top:3px;padding:5px 0}.dao-tooltip.left{margin-left:-3px;padding:0 5px}.dao-tooltip .dao-tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.dao-tooltip .dao-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.dao-tooltip.top .dao-tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.dao-tooltip.top-left .dao-tooltip-arrow{bottom:0;right:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.dao-tooltip.top-right .dao-tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.dao-tooltip.right .dao-tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.dao-tooltip.left .dao-tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.dao-tooltip.bottom .dao-tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.dao-tooltip.bottom-left .dao-tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.dao-tooltip.bottom-right .dao-tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}", ""]);
	
	// exports


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoPopover = __webpack_require__(103);
	
	var popover = _interopRequireWildcard(_daoPopover);
	
	__webpack_require__(107);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	
	var moduleName = 'dao.popover';
	angular.module(moduleName, ['dao.tooltip']).directive('daoPopoverTemplatePopup', popover.daoPopoverTemplatePopup).directive('daoPopoverTemplate', popover.daoPopoverTemplate).directive('daoPopoverHtmlPopup', popover.daoPopoverHtmlPopup).directive('daoPopoverHtml', popover.daoPopoverHtml).directive('daoPopoverPopup', popover.daoPopoverPopup).directive('daoPopover', popover.daoPopover);
	
	exports.default = moduleName;

/***/ },
/* 103 */
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
	
	var _popover = __webpack_require__(104);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _popoverTemplate = __webpack_require__(105);
	
	var _popoverTemplate2 = _interopRequireDefault(_popoverTemplate);
	
	var _popoverHtml = __webpack_require__(106);
	
	var _popoverHtml2 = _interopRequireDefault(_popoverHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	'use strict';
	
	/*@ngInject*/function daoPopoverTemplatePopup() {
	  return {
	    replace: true,
	    scope: { title: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&', templateType: '@' },
	    template: _popoverTemplate2.default
	  };
	}
	
	/*@ngInject*/function daoPopoverTemplate($daoTooltip) {
	  return $daoTooltip('daoPopoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}
	
	/*@ngInject*/function daoPopoverHtmlPopup() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', title: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    template: _popoverHtml2.default
	  };
	}
	
	/*@ngInject*/function daoPopoverHtml($daoTooltip) {
	  return $daoTooltip('daoPopoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}
	
	/*@ngInject*/function daoPopoverPopup() {
	  return {
	    replace: true,
	    scope: { title: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    template: _popover2.default
	  };
	}
	
	/*@ngInject*/function daoPopover($daoTooltip) {
	  return $daoTooltip('daoPopover', 'popover', 'click');
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-popover tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=arrow></div><div class=dao-popover-inner><h3 class=dao-popover-title ng-bind=title ng-if=title></h3><div class=dao-popover-content ng-bind=content></div></div></div>"

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-popover tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=arrow></div><div class=dao-popover-inner><h3 class=dao-popover-title ng-bind=title ng-if=title></h3><div class=dao-popover-content dao-tooltip-template-transclude=contentExp() tooltip-template-transclude-scope=originScope() template-type={{templateType}}></div></div></div>"

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-popover tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=arrow></div><div class=dao-popover-inner><h3 class=dao-popover-title ng-bind=title ng-if=title></h3><div class=dao-popover-content ng-bind-html=contentExp()></div></div></div>"

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(108);
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.42857;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:14px;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.2)}.dao-popover.top{margin-top:-10px}.dao-popover.right{margin-left:10px}.dao-popover.bottom{margin-top:10px}.dao-popover.left{margin-left:-10px}.dao-popover .dao-popover-title{margin:0;padding:8px 14px;font-size:14px;background-color:#e6e9ed;box-shadow:inset 0 -1px 0 rgba(204,209,217,.5);border-radius:5px 5px 0 0}.dao-popover .dao-popover-content{padding:9px 14px;overflow:hidden}.dao-popover>.arrow,.dao-popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.dao-popover>.arrow{border-width:11px}.dao-popover>.arrow:after{border-width:10px;content:\"\"}.dao-popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,.25);bottom:-11px}.dao-popover.top>.arrow:after{content:\" \";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.dao-popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,.25)}.dao-popover.right>.arrow:after{content:\" \";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.dao-popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25);top:-11px}.dao-popover.bottom>.arrow:after{content:\" \";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.dao-popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.dao-popover.left>.arrow:after{content:\" \";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}", ""]);
	
	// exports


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(110);
	
	var _multiSteps = __webpack_require__(112);
	
	var _multiSteps2 = _interopRequireDefault(_multiSteps);
	
	var _step = __webpack_require__(114);
	
	var _step2 = _interopRequireDefault(_step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleName = 'dao.panelMultiStep'; /**
	                                        * Created by yeting on 16/1/25.
	                                        */
	
	angular.module(moduleName, []).directive('daoPanelMultiSteps', _multiSteps2.default).directive('daoPanelStep', _step2.default);
	
	exports.default = moduleName;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(111);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./multi-step.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./multi-step.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-multi-step .multi-step-sidebar{background-color:transparent;width:200px}.dao-multi-step .multi-step-content{background-color:#fff;border:1px solid #e4e7ed}.dao-multi-step .multi-step-content-body{display:none;min-height:300px}.dao-multi-step .multi-step-content-body.active{display:block}.dao-multi-step .multi-step-item{padding:18px 15px;border-top:1px solid #e4e7ed;border-left:1px solid #e4e7ed;border-bottom:0}.dao-multi-step .multi-step-item:last-child{border-bottom:1px solid #e4e7ed}.dao-multi-step .multi-step-item.active,.dao-multi-step .multi-step-item:hover{background-color:#fff;border-right:1px solid #fff;cursor:pointer}.dao-multi-step .multi-step-item.active{cursor:auto}.dao-multi-step .multi-step-item.success .multi-step-order{border:1px solid #00a755}.dao-multi-step .multi-step-order{display:inline-block;width:26px;height:26px;border-radius:13px;border:1px solid #e4e7ed;line-height:24px;text-align:center;margin-right:8px}", ""]);
	
	// exports


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(80);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(81);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _multiSteps = __webpack_require__(113);
	
	var _multiSteps2 = _interopRequireDefault(_multiSteps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MultiStepsDirective() {
	  /*ngInject*/
	
	  return {
	    restrict: 'E',
	    scope: {
	      currentIndex: '='
	    },
	    template: _multiSteps2.default,
	
	    controller: MultiStepsController,
	    controllerAs: 'vm',
	    bindToController: true,
	    transclude: true
	  };
	} /**
	   * Created by yeting on 16/1/25.
	   */
	
	var MultiStepsController = function () {
	  MultiStepsController.$inject = ["$scope"];
	  function MultiStepsController($scope) {
	    'ngInject';
	
	    (0, _classCallCheck3.default)(this, MultiStepsController);
	    this.steps = [];
	    this.currentIndex = 1;
	    this.$scope = $scope;
	    this.activate();
	  }
	
	  (0, _createClass3.default)(MultiStepsController, [{
	    key: 'activate',
	    value: function activate() {
	      var _this = this;
	
	      this.$scope.$watch('vm.currentIndex', function (value) {
	        if (typeof value !== 'number' || value > _this.steps.length) {
	          _this.currentIndex = 1;
	          return;
	        }
	
	        var currentStep = _this.steps[value - 1];
	        _this.activeStep(currentStep);
	      });
	    }
	  }, {
	    key: 'activeStep',
	    value: function activeStep(step) {
	      this.steps.forEach(function (stepScope) {
	        if (stepScope !== step) {
	          stepScope.isActive = false;
	        }
	      });
	      step.isActive = true;
	      this.currentIndex = this.steps.indexOf(step) + 1;
	    }
	  }, {
	    key: 'addStep',
	    value: function addStep(stepScope) {
	      var _this2 = this;
	
	      this.steps.push(stepScope);
	
	      if (!stepScope.index) {
	        stepScope.index = this.steps.indexOf(stepScope) + 1;
	        if (stepScope.index === 1) {
	          stepScope.isActive = true;
	        }
	      }
	
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
	  return MultiStepsController;
	}();
	
	exports.default = MultiStepsDirective;

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao-layout-wrap dao-multi-step\"><div class=dao-layout-sidebar><div class=multi-step-sidebar><div class=multi-step-item ng-class=\"{'active' : step.isActive , 'success' : step.isSuccessful }\" ng-click=vm.activeStep(step) ng-repeat=\"step in vm.steps\"><div class=multi-step-order>{{ step.index }}</div>{{ step.title }}</div></div></div><div class=dao-layout-content><div class=\"content-body multi-step-content\" ng-transclude></div></div></div>"

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _step = __webpack_require__(115);
	
	var _step2 = _interopRequireDefault(_step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function StepDirective() {
	  /*ngInject*/
	
	  return {
	    restrict: 'E',
	    require: '^daoPanelMultiSteps',
	    scope: {
	      index: '@',
	      title: '@',
	      isSuccessful: '='
	    },
	    template: _step2.default,
	    replace: true,
	    link: StepLink,
	    transclude: true
	  };
	
	  function StepLink(scope, element, attrs, daoMultiStepCtrl) {
	    daoMultiStepCtrl.addStep(scope);
	
	    scope.$watch('isActive', function (value) {
	      element.toggleClass('active', !!value);
	    });
	  }
	} /**
	   * Created by yeting on 16/1/25.
	   */
	
	exports.default = StepDirective;

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "<div class=multi-step-content-body ng-transclude></div>"

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoDropdown = __webpack_require__(117);
	
	var dropdown = _interopRequireWildcard(_daoDropdown);
	
	__webpack_require__(16);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	
	var moduleName = 'dao.dropdown';
	angular.module(moduleName, ['dao.position'])
	// .directive('daoDropdownTemplatePopup', dropdown.daoDropdownTemplatePopup)
	// .directive('daoDropdownTemplate', dropdown.daoDropdownTemplate)
	// .directive('daoDropdownHtmlPopup', dropdown.daoDropdownHtmlPopup)
	// .directive('daoDropdownHtml', dropdown.daoDropdownHtml)
	// .directive('daoDropdownPopup', dropdown.daoDropdownPopup)
	// .directive('daoDropdown', dropdown.daoDropdown);
	
	.constant('daoDropdownConfig', dropdown.daoDropdownConfig).service('daoDropdownService', dropdown.daoDropdownService).controller('DaoDropdownController', dropdown.DaoDropdownController).directive('daoDropdown', dropdown.daoDropdown).directive('daoDropdownMenu', dropdown.daoDropdownMenu).directive('daoDropdownToggle', dropdown.daoDropdownToggle);
	
	exports.default = moduleName;

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';
	
	daoDropdownService.$inject = ["$document", "$rootScope"];
	DaoDropdownController.$inject = ["$scope", "$element", "$attrs", "$parse", "daoDropdownConfig", "daoDropdownService", "$animate", "$daoPosition", "$document", "$compile", "$templateRequest"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.daoDropdownService = daoDropdownService;
	exports.DaoDropdownController = DaoDropdownController;
	exports.daoDropdown = daoDropdown;
	exports.daoDropdownMenu = daoDropdownMenu;
	exports.daoDropdownToggle = daoDropdownToggle;
	var daoDropdownConfig = exports.daoDropdownConfig = {
	  appendToOpenClass: 'dao-dropdown-open',
	  openClass: 'open'
	};
	
	/*@ngInject*/function daoDropdownService($document, $rootScope) {
	  var openScope = null;
	
	  this.open = function (dropdownScope) {
	    if (!openScope) {
	      $document.on('click', closeDropdown);
	      $document.on('keydown', keybindFilter);
	    }
	
	    if (openScope && openScope !== dropdownScope) {
	      openScope.isOpen = false;
	    }
	
	    openScope = dropdownScope;
	  };
	
	  this.close = function (dropdownScope) {
	    if (openScope === dropdownScope) {
	      openScope = null;
	      $document.off('click', closeDropdown);
	      $document.off('keydown', keybindFilter);
	    }
	  };
	
	  var closeDropdown = function closeDropdown(evt) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) {
	      return;
	    }
	
	    if (evt && openScope.getAutoClose() === 'disabled') {
	      return;
	    }
	
	    if (evt && evt.which === 3) {
	      return;
	    }
	
	    var toggleElement = openScope.getToggleElement();
	    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
	      return;
	    }
	
	    var dropdownElement = openScope.getDropdownElement();
	    if (evt && openScope.getAutoClose() === 'outsideClick' && dropdownElement && dropdownElement[0].contains(evt.target)) {
	      return;
	    }
	
	    openScope.isOpen = false;
	
	    if (!$rootScope.$$phase) {
	      openScope.$apply();
	    }
	  };
	
	  var keybindFilter = function keybindFilter(evt) {
	    if (evt.which === 27) {
	      openScope.focusToggleElement();
	      closeDropdown();
	    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      openScope.focusDropdownEntry(evt.which);
	    }
	  };
	}
	
	/*@ngInject*/function DaoDropdownController($scope, $element, $attrs, $parse, daoDropdownConfig, daoDropdownService, $animate, $daoPosition, $document, $compile, $templateRequest) {
	  var self = this,
	      scope = $scope.$new(),
	      // create a child scope so we are not polluting original one
	  templateScope,
	      appendToOpenClass = daoDropdownConfig.appendToOpenClass,
	      openClass = daoDropdownConfig.openClass,
	      getIsOpen,
	      setIsOpen = angular.noop,
	      toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	      appendToBody = false,
	      appendTo = null,
	      keynavEnabled = false,
	      selectedOption = null,
	      body = $document.find('body');
	
	  $element.addClass('dao-dropdown');
	
	  this.init = function () {
	    if ($attrs.isOpen) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;
	
	      $scope.$watch(getIsOpen, function (value) {
	        scope.isOpen = !!value;
	      });
	    }
	
	    if (angular.isDefined($attrs.dropdownAppendTo)) {
	      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
	      if (appendToEl) {
	        appendTo = angular.element(appendToEl);
	      }
	    }
	
	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	    keynavEnabled = angular.isDefined($attrs.keyboardNav);
	
	    if (appendToBody && !appendTo) {
	      appendTo = body;
	    }
	
	    if (appendTo && self.dropdownMenu) {
	      appendTo.append(self.dropdownMenu);
	      $element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };
	
	  this.toggle = function (open) {
	    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	  };
	
	  // Allow other directives to watch status
	  this.isOpen = function () {
	    return scope.isOpen;
	  };
	
	  scope.getToggleElement = function () {
	    return self.toggleElement;
	  };
	
	  scope.getAutoClose = function () {
	    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
	  };
	
	  scope.getElement = function () {
	    return $element;
	  };
	
	  scope.isKeynavEnabled = function () {
	    return keynavEnabled;
	  };
	
	  scope.focusDropdownEntry = function (keyCode) {
	    var elems = self.dropdownMenu ? //If append to body is used.
	    angular.element(self.dropdownMenu).find('a') : $element.find('ul').eq(0).find('a');
	
	    switch (keyCode) {
	      case 40:
	        {
	          if (!angular.isNumber(self.selectedOption)) {
	            self.selectedOption = 0;
	          } else {
	            self.selectedOption = self.selectedOption === elems.length - 1 ? self.selectedOption : self.selectedOption + 1;
	          }
	          break;
	        }
	      case 38:
	        {
	          if (!angular.isNumber(self.selectedOption)) {
	            self.selectedOption = elems.length - 1;
	          } else {
	            self.selectedOption = self.selectedOption === 0 ? 0 : self.selectedOption - 1;
	          }
	          break;
	        }
	    }
	    elems[self.selectedOption].focus();
	  };
	
	  scope.getDropdownElement = function () {
	    return self.dropdownMenu;
	  };
	
	  scope.focusToggleElement = function () {
	    if (self.toggleElement) {
	      self.toggleElement[0].focus();
	    }
	  };
	
	  scope.$watch('isOpen', function (isOpen, wasOpen) {
	    if (appendTo && self.dropdownMenu) {
	      var pos = $daoPosition.positionElements($element, self.dropdownMenu, 'bottom-left', true),
	          css,
	          rightalign;
	
	      css = {
	        top: pos.top + 'px',
	        display: isOpen ? 'block' : 'none'
	      };
	
	      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	      if (!rightalign) {
	        css.left = pos.left + 'px';
	        css.right = 'auto';
	      } else {
	        css.left = 'auto';
	        css.right = window.innerWidth - (pos.left + $element.prop('offsetWidth')) + 'px';
	      }
	
	      // Need to adjust our positioning to be relative to the appendTo container
	      // if it's not the body element
	      if (!appendToBody) {
	        var appendOffset = $daoPosition.offset(appendTo);
	
	        css.top = pos.top - appendOffset.top + 'px';
	
	        if (!rightalign) {
	          css.left = pos.left - appendOffset.left + 'px';
	        } else {
	          css.right = window.innerWidth - (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
	        }
	      }
	
	      self.dropdownMenu.css(css);
	    } else if (self.dropdownMenu) {
	
	      var pos = $daoPosition.positionElements($element, self.dropdownMenu, 'bottom-left', true);
	
	      var eleWidth = $element.prop('offsetWidth');
	      var menuWidth = self.dropdownMenu.prop('offsetWidth');
	
	      var leftalign = self.dropdownMenu.hasClass('dropdown-menu-left');
	      var rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	
	      var arrowOffset = eleWidth / 2 - 15.5;
	
	      $element.find('style').remove();
	
	      var style = document.createElement('style');
	      style.innerHTML = "";
	
	      var _pos = $element[0].getBoundingClientRect();
	      var el_id = "dao-dropdown" + Math.round(_pos.left) + "-" + Math.round(_pos.top) + "-" + Math.round(Math.random() * 10000);
	
	      if (!leftalign && !rightalign) {
	        style.innerHTML += "#" + el_id + ".dao-dropdown>.dropdown-menu{transform-origin:50% -10px !important;" + "left:" + (eleWidth - menuWidth) / 2 + "px !important}" + "#" + el_id + " .dropdown-menu:before{left: 50% !important; transform: translateX(-50%) !important}";
	      } else if (leftalign) {
	        style.innerHTML += "#" + el_id + ".dao-dropdown>.dropdown-menu{transform-origin:" + eleWidth / 2 + "px -10px !important;}" + "#" + el_id + " .dropdown-menu:before{left:" + arrowOffset + "px !important}";
	      } else if (rightalign) {
	        style.innerHTML += "#" + el_id + ".dao-dropdown>.dropdown-menu{transform-origin:" + (menuWidth - eleWidth / 2) + "px -10px !important;}" + "#" + el_id + " .dropdown-menu:before{right:" + arrowOffset + "px !important}";
	      }
	
	      $element.attr("id", el_id);
	
	      $element.append(style);
	    }
	
	    var openContainer = appendTo ? appendTo : $element;
	
	    $animate[isOpen ? 'addClass' : 'removeClass'](openContainer, appendTo ? appendToOpenClass : openClass).then(function () {
	      if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	        toggleInvoker($scope, { open: !!isOpen });
	      }
	    });
	
	    if (isOpen) {
	      if (self.dropdownMenuTemplateUrl) {
	        $templateRequest(self.dropdownMenuTemplateUrl).then(function (tplContent) {
	          templateScope = scope.$new();
	          $compile(tplContent.trim())(templateScope, function (dropdownElement) {
	            var newEl = dropdownElement;
	            self.dropdownMenu.replaceWith(newEl);
	            self.dropdownMenu = newEl;
	          });
	        });
	      }
	
	      scope.focusToggleElement();
	      daoDropdownService.open(scope);
	    } else {
	      if (self.dropdownMenuTemplateUrl) {
	        if (templateScope) {
	          templateScope.$destroy();
	        }
	        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
	        self.dropdownMenu.replaceWith(newEl);
	        self.dropdownMenu = newEl;
	      }
	
	      daoDropdownService.close(scope);
	      self.selectedOption = null;
	    }
	
	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen($scope, isOpen);
	    }
	  });
	
	  $scope.$on('$locationChangeSuccess', function () {
	    if (scope.getAutoClose() !== 'disabled') {
	      scope.isOpen = false;
	    }
	  });
	}
	
	/*@ngInject*/function daoDropdown() {
	  return {
	    controller: 'DaoDropdownController',
	    link: function link(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init();
	    }
	  };
	}
	
	/*@ngInject*/function daoDropdownMenu() {
	  return {
	    restrict: 'A',
	    require: '?^daoDropdown',
	    link: function link(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
	        return;
	      }
	
	      element.addClass('dropdown-menu');
	
	      var tplUrl = attrs.templateUrl;
	      if (tplUrl) {
	        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
	      }
	
	      if (!dropdownCtrl.dropdownMenu) {
	        dropdownCtrl.dropdownMenu = element;
	      }
	    }
	  };
	}
	
	/*@ngInject*/function daoDropdownToggle() {
	  return {
	    require: '?^daoDropdown',
	    link: function link(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }
	
	      element.addClass('dropdown-toggle');
	
	      dropdownCtrl.toggleElement = element;
	
	      var toggleDropdown = function toggleDropdown(event) {
	        event.preventDefault();
	
	        if (!element.hasClass('disabled') && !attrs.disabled) {
	          scope.$apply(function () {
	            dropdownCtrl.toggle();
	          });
	        }
	      };
	
	      element.bind('click', toggleDropdown);
	
	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function (isOpen) {
	        element.attr('aria-expanded', !!isOpen);
	      });
	
	      scope.$on('$destroy', function () {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoTable = __webpack_require__(119);
	
	var _daoTable2 = _interopRequireDefault(_daoTable);
	
	__webpack_require__(120);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DaoTableDirective() {
	  /*ngInject*/
	
	  return {
	    restrict: 'EA',
	    scope: {},
	    template: _daoTable2.default
	  };
	}
	
	exports.default = DaoTableDirective;

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {"singleton":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-table.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?minimize!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./dao-table.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-table-container{padding-top:16px}.dao-table-toolbar{margin-bottom:16px}.dao-table-toolbar .btn-group{display:inline-block}.dao-table-toolbar .dao-btn-group{margin-left:5px}.dao-table-toolbar .table-count{margin-left:18px;display:inline-block;color:#9ba3af}.dao-table-toolbar .table-filters{float:right}.dao-table-toolbar .table-filters .search{display:inline-block;vertical-align:middle}table.dao-table.slat{width:100%}table.dao-table.slat th{text-align:left;font-size:16px;color:#9ba3af;padding:10px;font-weight:400}table.dao-table.slat th.right{text-align:right;padding-right:24px}table.dao-table.slat th span{vertical-align:middle}table.dao-table.slat th .th-icon{vertical-align:middle;fill:#9ba3af;width:16px;height:16px}table.dao-table.slat tbody{background:#fff;border:1px solid #e4e7ed}table.dao-table.slat tr{border-bottom:1px solid #f1f3f6}table.dao-table.slat tr.selected{background:#fffced}table.dao-table.slat tr:hover{background:rgba(245,247,250,.8)}table.dao-table.slat td{white-space:nowrap;padding:20px 10px;vertical-align:middle}table.dao-table.slat td.left{text-align:left;width:20%}table.dao-table.slat td.right{text-align:right;width:15%}table.dao-table.slat td.checkbox{min-width:50px;width:50px;display:table-cell;margin:0}table.dao-table.slat td.checkbox input[type=checkbox]{position:relative;margin:0}table.dao-table.slat td:first-child{padding-left:24px}table.dao-table.slat td:last-child{padding-right:24px}table.dao-table.slat .item{font-weight:400}table.dao-table.slat .item-minor{color:#9ba3af;font-size:13px;margin-top:4px}table.dao-table.slat .item-major{color:#595f69;font-size:16px}table.dao-table.slat .item-link a{color:#3890ff;text-decoration:none}table.dao-table.slat .item-name{font-weight:600;font-size:15px;color:#3890ff}table.dao-table.slat .item-name a{color:#3890ff;text-decoration:none}table.dao-table.slat .item-single-line{height:43px}table.dao-table.slat .item-danger{color:#f1483f}table.dao-table.slat .item-success{color:#22c36a}", ""]);
	
	// exports


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(80);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _daoDemo = __webpack_require__(123);
	
	var _daoDemo2 = _interopRequireDefault(_daoDemo);
	
	__webpack_require__(124);
	
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
/* 123 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao demo-block\"><h4 class=demo-block-header>{{dao.title}}</h4><div ng-transclude></div></div>"

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(125);
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.demo-block{padding:10px;border:0}", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=dao-style.js.map