(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/Components/Nav.jsx":
/*!*****************************************!*\
  !*** ./resources/js/Components/Nav.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink */ "./resources/js/Components/NavLink.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Nav() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
      className: "flex space-x-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: "home",
          children: "Home"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: "users.index",
          children: "Users"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_NavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: "settings",
          children: "Settings"
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/NavLink.jsx":
/*!*********************************************!*\
  !*** ./resources/js/Components/NavLink.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavLink)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function NavLink(_ref) {
  var children = _ref.children,
      name = _ref.name;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
    href: route(name),
    className: "\n      text-black hover:underline\n      ".concat(route().current(name) ? "font-bold underline" : "", "\n    "),
    children: children
  });
}

/***/ }),

/***/ "./resources/js/Layouts/Default.jsx":
/*!******************************************!*\
  !*** ./resources/js/Layouts/Default.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Default)
/* harmony export */ });
/* harmony import */ var _Components_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Nav */ "./resources/js/Components/Nav.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Default(_ref) {
  var children = _ref.children;

  var _usePage = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)(),
      auth = _usePage.props.auth,
      component = _usePage.component;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: component
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
      className: "p-6 bg-gray-200",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
        className: "flex justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
            className: "font-bold text-lg",
            children: "My App"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            className: "text-sm ml-4",
            children: ["Welcome Back, ", auth.user.name, "!"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Components_Nav__WEBPACK_IMPORTED_MODULE_0__["default"], {})]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
      className: "p-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "max-w-3xl mx-auto",
        children: children
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var _Layouts_Default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layouts/Default */ "./resources/js/Layouts/Default.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _window$document$getE;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");







var appName = ((_window$document$getE = window.document.getElementsByTagName("title")[0]) === null || _window$document$getE === void 0 ? void 0 : _window$document$getE.innerText) || "Laravel";
(0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.createInertiaApp)({
  title: function title(_title) {
    return "".concat(_title, " - ").concat(appName);
  },
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
      var _page$layout;

      var _yield$import, page;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              _yield$import = _context.sent;
              page = _yield$import["default"];
              (_page$layout = page.layout) !== null && _page$layout !== void 0 ? _page$layout : page.layout = function (page) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Layouts_Default__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: page
                });
              };
              return _context.abrupt("return", page);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props;
    return (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(App, _objectSpread({}, props)), el);
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__.InertiaProgress.init({
  color: "#2563eb",
  showSpinner: true
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/Login": [
		"./resources/js/Pages/Auth/Login.jsx",
		"resources_js_Pages_Auth_Login_jsx"
	],
	"./Auth/Login.jsx": [
		"./resources/js/Pages/Auth/Login.jsx",
		"resources_js_Pages_Auth_Login_jsx"
	],
	"./Home": [
		"./resources/js/Pages/Home.jsx",
		"resources_js_Pages_Home_jsx"
	],
	"./Home.jsx": [
		"./resources/js/Pages/Home.jsx",
		"resources_js_Pages_Home_jsx"
	],
	"./Settings": [
		"./resources/js/Pages/Settings.jsx",
		"resources_js_Pages_Settings_jsx"
	],
	"./Settings.jsx": [
		"./resources/js/Pages/Settings.jsx",
		"resources_js_Pages_Settings_jsx"
	],
	"./Users/Create": [
		"./resources/js/Pages/Users/Create.jsx",
		"resources_js_Pages_Users_Create_jsx"
	],
	"./Users/Create.jsx": [
		"./resources/js/Pages/Users/Create.jsx",
		"resources_js_Pages_Users_Create_jsx"
	],
	"./Users/Index": [
		"./resources/js/Pages/Users/Index.jsx",
		"/js/vendor",
		"resources_js_Pages_Users_Index_jsx"
	],
	"./Users/Index.jsx": [
		"./resources/js/Pages/Users/Index.jsx",
		"/js/vendor",
		"resources_js_Pages_Users_Index_jsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);