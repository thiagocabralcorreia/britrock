"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/lu */ \"./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.tsx\");\n/* harmony import */ var _data_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/links */ \"./data/links.ts\");\n/* harmony import */ var _DropdownMenuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropdownMenuButton */ \"./components/DropdownMenuButton.tsx\");\n/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownMenu */ \"./components/DropdownMenu.tsx\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Layout({\n  children\n}) {\n  _s();\n\n  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const closeDropdownMenu = () => {\n      if (window.innerWidth >= 1024) {\n        setIsOpen(false);\n      }\n    };\n\n    closeDropdownMenu();\n    window.addEventListener(\"resize\", closeDropdownMenu);\n    return () => {\n      window.removeEventListener(\"resize\", closeDropdownMenu);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"flex content-between\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DropdownMenuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onClick: () => setIsOpen(!isOpen),\n      isOpen: isOpen\n    }), _data_links__WEBPACK_IMPORTED_MODULE_3__.links.map(({\n      id,\n      href,\n      name\n    }) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        key: id,\n        href: href,\n        className: \"hidden lg:block header-link p-4 transition ease-out duration-900 text-lg hover:text-tertiary\"\n      }, name);\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"ml-8\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"flex items-center\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_6__.LuLogOut, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      className: \"hidden lg:block header-link transition ease-out duration-900 text-lg hover:text-tertiary\"\n    }, \"Logout\")))),\n    dropdownMenu: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DropdownMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      show: isOpen,\n      onClose: () => setIsOpen(false)\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, children));\n}\n\n_s(Layout, \"vl0Rt3/A8evyRPW1OQ1AhRk4UhU=\");\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUyxNQUFULENBQWdCO0VBQUVDO0FBQUYsQ0FBaEIsRUFBNkQ7RUFBQTs7RUFDMUUsTUFBTSxDQUFDQyxNQUFELEVBQVNDLFNBQVQsSUFBc0JWLCtDQUFRLENBQUMsS0FBRCxDQUFwQztFQUVBRCxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNWSxpQkFBaUIsR0FBRyxNQUFNO01BQzlCLElBQUlDLE1BQU0sQ0FBQ0MsVUFBUCxJQUFxQixJQUF6QixFQUErQjtRQUM3QkgsU0FBUyxDQUFDLEtBQUQsQ0FBVDtNQUNEO0lBQ0YsQ0FKRDs7SUFNQUMsaUJBQWlCO0lBRWpCQyxNQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxpQkFBbEM7SUFFQSxPQUFPLE1BQU07TUFDWEMsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0osaUJBQXJDO0lBQ0QsQ0FGRDtFQUdELENBZFEsRUFjTixFQWRNLENBQVQ7RUFnQkEsb0JBQ0UscUZBQ0UsMkRBQUMsK0NBQUQ7SUFDRSxRQUFRLGVBQ047TUFBSyxTQUFTLEVBQUM7SUFBZixnQkFDRSwyREFBQywyREFBRDtNQUNFLE9BQU8sRUFBRSxNQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUQxQjtNQUVFLE1BQU0sRUFBRUE7SUFGVixFQURGLEVBS0dMLDhDQUFLLENBQUNZLEdBQU4sQ0FBVSxDQUFDO01BQUVDLEVBQUY7TUFBTUMsSUFBTjtNQUFZQztJQUFaLENBQUQsS0FBK0I7TUFDeEMsb0JBQ0UsMkRBQUMsa0RBQUQ7UUFDRSxHQUFHLEVBQUVGLEVBRFA7UUFFRSxJQUFJLEVBQUVDLElBRlI7UUFHRSxTQUFTLEVBQUM7TUFIWixHQU1HQyxJQU5ILENBREY7SUFVRCxDQVhBLENBTEgsZUFpQkU7TUFBSyxTQUFTLEVBQUM7SUFBZixnQkFDRTtNQUFLLFNBQVMsRUFBQztJQUFmLGdCQUNFLDJEQUFDLG9EQUFELE9BREYsZUFFRTtNQUNFLFNBQVMsRUFBQztJQURaLEdBR0MsUUFIRCxDQUZGLENBREYsQ0FqQkYsQ0FGSjtJQWdDRSxZQUFZLGVBQ1YsMkRBQUMscURBQUQ7TUFBYyxJQUFJLEVBQUVWLE1BQXBCO01BQTRCLE9BQU8sRUFBRSxNQUFNQyxTQUFTLENBQUMsS0FBRDtJQUFwRDtFQWpDSixFQURGLGVBcUNFLHdFQUFNRixRQUFOLENBckNGLENBREY7QUF5Q0Q7O0dBNUR1QkQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LnRzeD9hZjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBMdUxvZ091dCB9IGZyb20gXCJyZWFjdC1pY29ucy9sdVwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG5pbXBvcnQgeyBJTGluaywgbGlua3MgfSBmcm9tIFwiLi4vZGF0YS9saW5rc1wiO1xuaW1wb3J0IERyb3Bkb3duTWVudUJ1dHRvbiBmcm9tIFwiLi9Ecm9wZG93bk1lbnVCdXR0b25cIjtcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSBcIi4vRHJvcGRvd25NZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjbG9zZURyb3Bkb3duTWVudSA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KSB7XG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsb3NlRHJvcGRvd25NZW51KCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjbG9zZURyb3Bkb3duTWVudSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2xvc2VEcm9wZG93bk1lbnUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2xpbmtzLm1hcCgoeyBpZCwgaHJlZiwgbmFtZSB9OiBJTGluaykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBoZWFkZXItbGluayBwLTQgdHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi05MDAgdGV4dC1sZ1xuICAgICAgaG92ZXI6dGV4dC10ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMdUxvZ091dCAvPlxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgaGVhZGVyLWxpbmsgdHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi05MDAgdGV4dC1sZ1xuICAgICAgaG92ZXI6dGV4dC10ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIGRyb3Bkb3duTWVudT17XG4gICAgICAgICAgPERyb3Bkb3duTWVudSBzaG93PXtpc09wZW59IG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9IC8+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkx1TG9nT3V0IiwiSGVhZGVyIiwibGlua3MiLCJEcm9wZG93bk1lbnVCdXR0b24iLCJEcm9wZG93bk1lbnUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzT3BlbiIsInNldElzT3BlbiIsImNsb3NlRHJvcGRvd25NZW51Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaWQiLCJocmVmIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.tsx\n"));

/***/ })

});