"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[itemID]",{

/***/ "./pages/[itemID].js":
/*!***************************!*\
  !*** ./pages/[itemID].js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_shopComponents_itemDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/shopComponents/itemDetail */ \"./src/components/shopComponents/itemDetail.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_app_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/app/globals.css */ \"./src/app/globals.css\");\n/* harmony import */ var _src_app_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_app_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Item = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { itemID } = router.query;\n    const [currentID, setCurrentID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (itemID) {\n            setCurrentID(itemID);\n        }\n    }, []);\n    console.log(\"BURADAYIM LAN: \" + currentID);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shopComponents_itemDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        itemID: currentID\n    }, void 0, false, {\n        fileName: \"/Users/altaytaneri/Desktop/JagaadFinalProject/pages/[itemID].js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Item, \"Bmo8wR/UPtJGEGlP4Qpi3ZX6b0I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baXRlbUlEXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnRTtBQUNiO0FBQ1g7QUFDUjtBQUVoQyxNQUFNSyxPQUFPOztJQUNYLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVHLE1BQU0sRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQy9CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixJQUFHSSxRQUFRO1lBQ1RHLGFBQWFIO1FBQ2Y7SUFDRixHQUFHLEVBQUU7SUFFTEksUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkg7SUFDaEMscUJBQ0UsOERBQUNULDZFQUFVQTtRQUFDTyxRQUFRRTs7Ozs7O0FBRXhCO0dBZk1KOztRQUNXRCxrREFBU0E7OztLQURwQkM7QUFpQk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2l0ZW1JRF0uanM/ZTU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbURldGFpbCBmcm9tICdAL2NvbXBvbmVudHMvc2hvcENvbXBvbmVudHMvaXRlbURldGFpbCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCAnLi4vc3JjL2FwcC9nbG9iYWxzLmNzcyc7XG5cbmNvbnN0IEl0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGl0ZW1JRCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbY3VycmVudElELCBzZXRDdXJyZW50SURdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihpdGVtSUQpIHtcbiAgICAgIHNldEN1cnJlbnRJRChpdGVtSUQpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKFwiQlVSQURBWUlNIExBTjogXCIgKyBjdXJyZW50SUQpO1xuICByZXR1cm4gKFxuICAgIDxJdGVtRGV0YWlsIGl0ZW1JRD17Y3VycmVudElEfS8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbTsiXSwibmFtZXMiOlsiSXRlbURldGFpbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJJdGVtIiwicm91dGVyIiwiaXRlbUlEIiwicXVlcnkiLCJjdXJyZW50SUQiLCJzZXRDdXJyZW50SUQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[itemID].js\n"));

/***/ })

});