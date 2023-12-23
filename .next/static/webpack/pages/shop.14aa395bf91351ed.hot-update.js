"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shop",{

/***/ "./src/components/shopComponents/itemList.jsx":
/*!****************************************************!*\
  !*** ./src/components/shopComponents/itemList.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _itemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemCard */ \"./src/components/shopComponents/itemCard.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ItemList = (param)=>{\n    let { items, itemsPerPage } = param;\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const indexOfLastItem = currentPage * itemsPerPage;\n    const indexOfFirstItem = indexOfLastItem - itemsPerPage;\n    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);\n    const paginate = (pageNumber)=>setCurrentPage(pageNumber);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-x-8 gap-y-8 grid-cols-4 place-items-center\",\n                children: currentItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\".concat(item.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_itemCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            item: item\n                        }, item.id, false, {\n                            fileName: \"/Users/altaytaneri/Desktop/JagaadFinalProject/src/components/shopComponents/itemList.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/altaytaneri/Desktop/JagaadFinalProject/src/components/shopComponents/itemList.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/altaytaneri/Desktop/JagaadFinalProject/src/components/shopComponents/itemList.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-4 justify-center mt-12 mb-6\",\n                children: Array.from({\n                    length: Math.ceil(items.length / itemsPerPage)\n                }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>paginate(index + 1),\n                        className: currentPage === index + 1 ? \"border cursor-pointer bg-[#FBEBB5] mx-[5px] my-0 px-3 py-2 rounded-[5px] border-solid border-[#ccc] text-black\" : \"border cursor-pointer bg-[#FFF9E5] mx-[5px] my-0 px-3 py-2 rounded-[5px] border-solid border-[#ccc] text-black\",\n                        children: index + 1\n                    }, index + 1, false, {\n                        fileName: \"/Users/altaytaneri/Desktop/JagaadFinalProject/src/components/shopComponents/itemList.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/altaytaneri/Desktop/JagaadFinalProject/src/components/shopComponents/itemList.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/altaytaneri/Desktop/JagaadFinalProject/src/components/shopComponents/itemList.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ItemList, \"6xAUoJ2motYJ38x4zeUWisA+X/4=\");\n_c = ItemList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemList);\nvar _c;\n$RefreshReg$(_c, \"ItemList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaG9wQ29tcG9uZW50cy9pdGVtTGlzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBQ047QUFDTDtBQUU3QixNQUFNSSxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNUSxrQkFBa0JGLGNBQWNEO0lBQ3RDLE1BQU1JLG1CQUFtQkQsa0JBQWtCSDtJQUMzQyxNQUFNSyxlQUFlTixNQUFNTyxLQUFLLENBQUNGLGtCQUFrQkQ7SUFFbkQsTUFBTUksV0FBVyxDQUFDQyxhQUFlTixlQUFlTTtJQUVoRCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDWkwsYUFBYU0sR0FBRyxDQUFDLENBQUNDLHFCQUNqQiw4REFBQ2Ysa0RBQUlBO3dCQUFDZ0IsTUFBTSxJQUFZLE9BQVJELEtBQUtFLEVBQUU7a0NBQ3JCLDRFQUFDbEIsaURBQVFBOzRCQUFlZ0IsTUFBTUE7MkJBQWZBLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7OzswQkFJNUIsOERBQUNMO2dCQUFJQyxXQUFVOzBCQUNaSyxNQUFNQyxJQUFJLENBQ1Q7b0JBQUVDLFFBQVFDLEtBQUtDLElBQUksQ0FBQ3BCLE1BQU1rQixNQUFNLEdBQUdqQjtnQkFBYyxHQUNqRCxDQUFDb0IsR0FBR0Msc0JBQ0YsOERBQUNDO3dCQUVDQyxTQUFTLElBQU1oQixTQUFTYyxRQUFRO3dCQUNoQ1gsV0FDRVQsZ0JBQWdCb0IsUUFBUSxJQUNwQixtSEFDQTtrQ0FHTEEsUUFBUTt1QkFSSkEsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQWUzQjtHQXRDTXZCO0tBQUFBO0FBdUNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Nob3BDb21wb25lbnRzL2l0ZW1MaXN0LmpzeD9jNWU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSXRlbUNhcmQgZnJvbSBcIi4vaXRlbUNhcmRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSXRlbUxpc3QgPSAoeyBpdGVtcywgaXRlbXNQZXJQYWdlIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCBpbmRleE9mTGFzdEl0ZW0gPSBjdXJyZW50UGFnZSAqIGl0ZW1zUGVyUGFnZTtcbiAgY29uc3QgaW5kZXhPZkZpcnN0SXRlbSA9IGluZGV4T2ZMYXN0SXRlbSAtIGl0ZW1zUGVyUGFnZTtcbiAgY29uc3QgY3VycmVudEl0ZW1zID0gaXRlbXMuc2xpY2UoaW5kZXhPZkZpcnN0SXRlbSwgaW5kZXhPZkxhc3RJdGVtKTtcblxuICBjb25zdCBwYWdpbmF0ZSA9IChwYWdlTnVtYmVyKSA9PiBzZXRDdXJyZW50UGFnZShwYWdlTnVtYmVyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLXgtOCBnYXAteS04IGdyaWQtY29scy00IHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICB7Y3VycmVudEl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgPEl0ZW1DYXJkIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQganVzdGlmeS1jZW50ZXIgbXQtMTIgbWItNlwiPlxuICAgICAgICB7QXJyYXkuZnJvbShcbiAgICAgICAgICB7IGxlbmd0aDogTWF0aC5jZWlsKGl0ZW1zLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSkgfSxcbiAgICAgICAgICAoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXtpbmRleCArIDF9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGluZGV4ICsgMSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPT09IGluZGV4ICsgMVxuICAgICAgICAgICAgICAgICAgPyBcImJvcmRlciBjdXJzb3ItcG9pbnRlciBiZy1bI0ZCRUJCNV0gbXgtWzVweF0gbXktMCBweC0zIHB5LTIgcm91bmRlZC1bNXB4XSBib3JkZXItc29saWQgYm9yZGVyLVsjY2NjXSB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgIDogXCJib3JkZXIgY3Vyc29yLXBvaW50ZXIgYmctWyNGRkY5RTVdIG14LVs1cHhdIG15LTAgcHgtMyBweS0yIHJvdW5kZWQtWzVweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bI2NjY10gdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW1MaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJdGVtQ2FyZCIsIkxpbmsiLCJJdGVtTGlzdCIsIml0ZW1zIiwiaXRlbXNQZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImluZGV4T2ZMYXN0SXRlbSIsImluZGV4T2ZGaXJzdEl0ZW0iLCJjdXJyZW50SXRlbXMiLCJzbGljZSIsInBhZ2luYXRlIiwicGFnZU51bWJlciIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJocmVmIiwiaWQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJNYXRoIiwiY2VpbCIsIl8iLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/shopComponents/itemList.jsx\n"));

/***/ })

});