"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Users_Create_jsx"],{

/***/ "./resources/js/Pages/Users/Create.jsx":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Users/Create.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Create)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Create() {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.useForm)({
    name: "",
    email: "",
    password: ""
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors;

  function handleChange(_ref) {
    var target = _ref.target;
    setData(target.id, target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    post(route("users.store"));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Head, {
      title: "Create User"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
      className: "w-max m-auto",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        className: "text-4xl font-bold my-10",
        children: "Create User"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex border rounded text-gray-500 mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          className: "border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg",
          type: "text",
          placeholder: "username",
          id: "name",
          value: data.name,
          onChange: handleChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "text-sm mb-4 w-max text-red-400",
        children: errors === null || errors === void 0 ? void 0 : errors.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex border rounded text-gray-500 mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          className: "border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg",
          type: "text",
          placeholder: "email",
          id: "email",
          value: data.email,
          onChange: handleChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "text-sm mb-4 w-max text-red-400",
        children: errors === null || errors === void 0 ? void 0 : errors.email
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex border rounded text-gray-500 mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          className: "border-transparent focus:border-transparent focus:ring-0 px-4 h-full py-2 text-lg",
          type: "password",
          placeholder: "password",
          id: "password",
          value: data.password,
          onChange: handleChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "text-sm mb-4 w-max text-red-400",
        children: errors === null || errors === void 0 ? void 0 : errors.password
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "w-full border rounded mb-4 text-white " + (processing ? " bg-blue-300 hover:bg-blue-300 cursor-not-allowed" : " bg-blue-500 hover:bg-blue-600 cursor-pointer"),
        type: "submit",
        disabled: processing,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-5 my-auto",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "border-transparent focus:border-transparent focus:ring-0 px-2 h-full py-2 text-lg bg-transparent",
            children: "Create"
          })]
        })
      })]
    })]
  });
}

/***/ })

}]);