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
	
	var _classHelper = __webpack_require__(1);
	
	var _classHelper2 = _interopRequireDefault(_classHelper);
	
	var _index = __webpack_require__(2);
	
	var _index2 = _interopRequireDefault(_index);
	
	__webpack_require__(33);
	
	var _index3 = __webpack_require__(35);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _index5 = __webpack_require__(43);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _daoInputDirective = __webpack_require__(50);
	
	var _daoInputDirective2 = _interopRequireDefault(_daoInputDirective);
	
	var _daoDemoDirective = __webpack_require__(54);
	
	var _daoDemoDirective2 = _interopRequireDefault(_daoDemoDirective);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = angular.module('daoStyle', [_index2.default, _index4.default, _index6.default]); /**
	                                                                                            * Created by yeting on 15/10/18.
	                                                                                            */
	
	var appHelp = (0, _classHelper2.default)('daoStyle');
	
	app.directive('daoInput', _daoInputDirective2.default);
	
	appHelp.directive('daoDemoBlock', _daoDemoDirective2.default);
	
	exports.default = 'daoStyle';

/***/ },
/* 1 */
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dialog = __webpack_require__(3);
	
	var dialog = _interopRequireWildcard(_dialog);
	
	__webpack_require__(18);
	
	var _daoDialogHeader = __webpack_require__(22);
	
	var _daoDialogHeader2 = _interopRequireDefault(_daoDialogHeader);
	
	var _daoMultiStep = __webpack_require__(24);
	
	var _daoMultiStep2 = _interopRequireDefault(_daoMultiStep);
	
	var _daoStep = __webpack_require__(31);
	
	var _daoStep2 = _interopRequireDefault(_daoStep);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	angular.module('dao.dialog', ['dao.multiStep']).factory('$daoDialogStack', dialog.DaoDialogStack).provider('$daoDialog', dialog.DaoDialogProvider).directive('daoDialogBackdrop', dialog.daoDialogBackdrop).directive('daoDialogWindow', dialog.daoDialogWindow).directive('daoDialogAnimationClass', dialog.daoDialogAnimationClass).directive('daoDialogTransclude', dialog.daoDialogTransclude);
	
	angular.module('dao.multiStep', []).directive('daoDialogHeader', _daoDialogHeader2.default).directive('daoMultiStep', _daoMultiStep2.default).directive('daoStep', _daoStep2.default);
	
	exports.default = 'dao.dialog';

/***/ },
/* 3 */
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
	
	var _keys = __webpack_require__(4);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _daoBackdrop = __webpack_require__(16);
	
	var _daoBackdrop2 = _interopRequireDefault(_daoBackdrop);
	
	var _daoWindow = __webpack_require__(17);
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	module.exports = __webpack_require__(12).Object.keys;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(7);
	
	__webpack_require__(9)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(8);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(10)
	  , core    = __webpack_require__(12)
	  , fails   = __webpack_require__(15);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(12)
	  , ctx       = __webpack_require__(13)
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
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(14);
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
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao backdrop\" ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"></div>"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao dialog dialog-overlay\" dialog-render={{$isRendered}} tabindex=-1 role=dialog ng-style=\"{'z-index': 1050 + index*10, display: 'flex'}\"><div class=dialog-overlay-inner><div class=\"dialog-container show-dialog\" dao-dialog-transclude></div></div></div>"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {"singleton":true});
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.backdrop{background-color:rgba(61,65,66,.6)}.dao.backdrop,.dao.dialog.dialog-overlay{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;min-height:100%}.dao.dialog.dialog-overlay{display:flex;justify-content:center;background-color:transparent}.dao.dialog .dialog-overlay-inner{padding:100px 22px;box-sizing:border-box;max-height:100%;width:100%;overflow:auto}.dao.dialog .dialog-container{max-width:554px;background:#e6e9ed;border-radius:4px;box-shadow:0 3px 30px rgba(16,17,18,.3);margin:0 auto}.dao.dialog .dialog-container.show-dialog{animation:showDialog .3s}@keyframes showDialog{0%{transform:scale(.7);-webkit-transform:scale(.7)}45%{transform:scale(1.05);-webkit-transform:scale(1.05)}80%{transform:scale(.95);-webkit-transform:scale(.95)}to{transform:scale(1);-webkit-transform:scale(1)}}.dao.dialog .dialog-header{display:flex;justify-content:space-between;padding:20px 22px;background-color:#e6e9ed;border-radius:4px 4px 0 0;box-shadow:inset 0 -1px 0 rgba(204,209,217,.5);color:#434a54;font-size:18px;font-weight:300;line-height:24px}.dao.dialog .dialog-header .dao-close{cursor:pointer}.dao.dialog .dialog-header .dao-close svg{width:17px;height:17px;fill:#aab2bd}.dao.dialog .dialog-header .dao-close svg:hover{fill:#656d78}.dao.dialog .dialog-body{padding:20px 22px;background-color:#fff;color:#434a54;font-size:14px;font-weight:400;line-height:21px}.dao.dialog .dialog-footer{display:flex;justify-content:flex-end;padding:14px 22px;background-color:#e6e9ed;border-radius:0 0 4px 4px;box-shadow:inset 0 1px 0 rgba(204,209,217,.5)}.dao.dialog .dialog-footer .dao-btn{border:1px solid #aab2bd;color:#434a54}.dao.dialog .dialog-footer .dao-btn:focus,.dao.dialog .dialog-footer .dao-btn:hover{border:1px solid #656d78}.dao.dialog .dialog-footer .dao-btn.btn-disabled,.dao.dialog .dialog-footer .dao-btn[disabled]{color:#ccd1d9;border:1px solid #aab2bd}.dao.dialog .dialog-footer .dao-btn.btn-disabled:focus,.dao.dialog .dialog-footer .dao-btn.btn-disabled:hover,.dao.dialog .dialog-footer .dao-btn[disabled]:focus,.dao.dialog .dialog-footer .dao-btn[disabled]:hover{border:1px solid #aab2bd}.dao.dialog .dialog-footer .dao-btn.btn-primary{color:#fff;border:1px solid #5d9cec}.dao.dialog .dialog-footer .dao-btn.btn-primary:focus,.dao.dialog .dialog-footer .dao-btn.btn-primary:hover{border:1px solid #4a89dc}.dao.dialog .dao-multi-step{overflow:hidden}.dao.dialog .dao-multi-step .dao-step{max-width:554px;background-color:#fff;overflow:hidden;border-radius:0 0 4px 4px}@keyframes shake{0%{transform:translateY(-100%)}40%{transform:translateY(4%)}50%{transform:translateY(-3%)}65%{transform:translateY(2%)}80%{transform:translateY(-1%)}to{transform:translateY(0)}}.dao.dialog .dao-multi-step .dao-step.dao-animate.ng-enter{animation:shake .6s}.dao.dialog .dao-multi-step .dialog-footer{display:block;overflow:hidden}.dao.dialog .dao-multi-step .dialog-footer .dao-btn{float:left}.dao.dialog .dao-multi-step .dialog-footer .dao-btn.btn-primary{float:right}", ""]);
	
	// exports


/***/ },
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoDialogHeader = __webpack_require__(23);
	
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
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=dialog-header><ng-transclude></ng-transclude><div ng-click=\"$dismiss('close')\" class=dao-close><svg preserveaspectratio=xMidYMid width=34 height=34 viewbox=\"0 0 34 34\"><path d=\"M17.000,0.001 C7.612,0.001 0.001,7.612 0.001,17.000 C0.001,26.388 7.612,33.999 17.000,33.999 C26.388,33.999 33.999,26.388 33.999,17.000 C33.999,7.612 26.388,0.001 17.000,0.001 ZM24.166,21.666 C24.166,21.666 21.666,24.166 21.666,24.166 C21.666,24.166 17.000,19.500 17.000,19.500 C17.000,19.500 12.334,24.166 12.334,24.166 C12.334,24.166 9.834,21.666 9.834,21.666 C9.834,21.666 14.500,17.000 14.500,17.000 C14.500,17.000 9.834,12.335 9.834,12.335 C9.834,12.335 12.334,9.834 12.334,9.834 C12.334,9.834 17.000,14.500 17.000,14.500 C17.000,14.500 21.666,9.834 21.666,9.834 C21.666,9.834 24.166,12.335 24.166,12.335 C24.166,12.335 19.500,17.000 19.500,17.000 C19.500,17.000 24.166,21.666 24.166,21.666 Z\" id=path-1 fill-rule=evenodd></path></svg></div></div>"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(25);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(26);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _daoMultiStep = __webpack_require__(30);
	
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
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty = __webpack_require__(27);
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(28), __esModule: true };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(29);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 29 */
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
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=dao-multi-step ng-transclude></div>"

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoStep = __webpack_require__(32);
	
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
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div ng-if=isActive class=dao-step ng-class=\"{'dao-animate':daoAnimate}\" ng-transclude></div>"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {"singleton":true});
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao-btn{padding:0 16px;min-width:65px;height:33px;border:1px solid #ccd1d9;border-radius:16px;background-color:transparent;color:#434a54;font-size:14px;line-height:24px;outline:none;cursor:pointer}.dao-btn:focus,.dao-btn:hover{border:1px solid #aab2bd}.dao-btn.btn-disabled,.dao-btn[disabled]{color:#ccd1d9;border:1px solid #ccd1d9}.dao-btn.btn-disabled:focus,.dao-btn.btn-disabled:hover,.dao-btn[disabled]:focus,.dao-btn[disabled]:hover{border:1px solid #ccd1d9}.dao-btn.btn-primary{color:#fff;border:1px solid #5d9cec;background-color:#5d9cec}.dao-btn.btn-primary:focus,.dao-btn.btn-primary:hover{border:1px solid #4a89dc;background-color:#4a89dc}", ""]);
	
	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tooltip = __webpack_require__(36);
	
	var tooltip = _interopRequireWildcard(_tooltip);
	
	__webpack_require__(40);
	
	var _position = __webpack_require__(42);
	
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
/* 36 */
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
	
	var _tooltipTemplatePopup = __webpack_require__(37);
	
	var _tooltipTemplatePopup2 = _interopRequireDefault(_tooltipTemplatePopup);
	
	var _tooltipHtmlPopup = __webpack_require__(38);
	
	var _tooltipHtmlPopup2 = _interopRequireDefault(_tooltipHtmlPopup);
	
	var _tooltipPopup = __webpack_require__(39);
	
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
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=tooltip tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=tooltip-arrow></div><div class=tooltip-inner dao-tooltip-template-transclude=contentExp() tooltip-template-transclude-scope=originScope()></div></div>"

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=tooltip tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=tooltip-arrow></div><div class=tooltip-inner ng-bind-html=contentExp()></div></div>"

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=tooltip tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=tooltip-arrow></div><div class=tooltip-inner ng-bind=content></div></div>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {"singleton":true});
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".tooltip{position:absolute;z-index:1070;display:block;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.42857;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:12px;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:5px 0}.tooltip.right{margin-left:3px;padding:0 5px}.tooltip.bottom{margin-top:3px;padding:5px 0}.tooltip.left{margin-left:-3px;padding:0 5px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px}.tooltip.top-left .tooltip-arrow,.tooltip.top-right .tooltip-arrow{bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{left:5px}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}", ""]);
	
	// exports


/***/ },
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popover = __webpack_require__(44);
	
	var popover = _interopRequireWildcard(_popover);
	
	__webpack_require__(48);
	
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
/* 44 */
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
	
	var _popover = __webpack_require__(45);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _popoverTemplate = __webpack_require__(46);
	
	var _popoverTemplate2 = _interopRequireDefault(_popoverTemplate);
	
	var _popoverHtml = __webpack_require__(47);
	
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
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao popover\" tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=arrow></div><div class=popover-inner><h3 class=popover-title ng-bind=title ng-if=title></h3><div class=popover-content ng-bind=content></div></div></div>"

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao popover\" tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=arrow></div><div class=popover-inner><h3 class=popover-title ng-bind=title ng-if=title></h3><div class=popover-content dao-tooltip-template-transclude=contentExp() tooltip-template-transclude-scope=originScope()></div></div></div>"

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao popover\" tooltip-animation-class=fade dao-tooltip-classes ng-class=\"{ in: isOpen() }\"><div class=arrow></div><div class=popover-inner><h3 class=popover-title ng-bind=title ng-if=title></h3><div class=popover-content ng-bind-html=contentExp()></div></div></div>"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {"singleton":true});
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.42857;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:14px;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.2)}.dao.popover.top{margin-top:-10px}.dao.popover.right{margin-left:10px}.dao.popover.bottom{margin-top:10px}.dao.popover.left{margin-left:-10px}.dao.popover-title{margin:0;padding:20px 22px;font-size:14px;background-color:#e6e9ed;box-shadow:inset 0 -1px 0 rgba(204,209,217,.5);border-radius:5px 5px 0 0}.dao.popover-content{padding:20px 22px}.dao.popover>.arrow,.dao.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.dao.popover>.arrow{border-width:11px}.dao.popover>.arrow:after{border-width:10px;content:\"\"}.dao.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,.25);bottom:-11px}.dao.popover.top>.arrow:after{content:\" \";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.dao.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,.25)}.dao.popover.right>.arrow:after{content:\" \";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.dao.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25);top:-11px}.dao.popover.bottom>.arrow:after{content:\" \";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.dao.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.dao.popover.left>.arrow:after{content:\" \";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}", ""]);
	
	// exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _daoInput = __webpack_require__(51);
	
	var _daoInput2 = _interopRequireDefault(_daoInput);
	
	__webpack_require__(52);
	
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
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao input\" ng-class=\"[state,{'has-button': hasButton}]\"><input type=text placeholder={{::placeholder}}><ng-transclude></ng-transclude><div ng-bind-html=message></div></div>"

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {"singleton":true});
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.input input{margin:0;max-width:100%;flex:1 0 auto;width:456px;outline:0;text-align:left;line-height:1.2142em;background:#fff;padding:.67861429em 1em;border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);border-radius:0;transition:box-shadow .1s ease,border-color .1s ease;box-shadow:none}.dao.input.has-button input{width:356px}.dao.input.has-button button{margin-left:25px}.dao.input.success{color:#2ecc71}.dao.input.success input{border-color:#2ecc71}.dao.input.warning{color:#fc6e51}.dao.input.warning input{border-color:#fc6e51}.dao.input.error{color:#ed5565}.dao.input.error input{border-color:#ed5565}.dao.input.focus input,.dao.input input:focus{border-color:#85b7d9;background:#fff;color:rgba(0,0,0,.8);box-shadow:none}.dao.input.disabled input,.dao.input input[disabled]{background:#e6e9ed;pointer-events:none}", ""]);
	
	// exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(25);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _daoDemo = __webpack_require__(55);
	
	var _daoDemo2 = _interopRequireDefault(_daoDemo);
	
	__webpack_require__(56);
	
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
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dao demo-block\"><h4 class=demo-block-header>{{dao.title}}</h4><div ng-transclude></div></div>"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {"singleton":true});
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".dao.demo-block{padding:10px}", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=dao-style.js.map