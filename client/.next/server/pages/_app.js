/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, pageProps);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQyxHQUFULENBQWE7RUFBRUMsU0FBRjtFQUFhQztBQUFiLENBQWIsRUFBaUQ7RUFDOUQsb0JBQU8sMkRBQUMsU0FBRCxFQUFlQSxTQUFmLENBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaXRpc2gtYmVlcnMvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaXRpc2gtYmVlcnMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzPzk5ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIb2lzdHMgYSBuYW1lIGZyb20gYSBtb2R1bGUgb3IgcHJvbWlzZWQgbW9kdWxlLlxuICpcbiAqIEBwYXJhbSBtb2R1bGUgdGhlIG1vZHVsZSB0byBob2lzdCB0aGUgbmFtZSBmcm9tXG4gKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSB0byBob2lzdFxuICogQHJldHVybnMgdGhlIHZhbHVlIG9uIHRoZSBtb2R1bGUgKG9yIHByb21pc2VkIG1vZHVsZSlcbiAqLyBcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImhvaXN0XCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBob2lzdDtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIGhvaXN0KG1vZHVsZSwgbmFtZSkge1xuICAgIC8vIElmIHRoZSBuYW1lIGlzIGF2YWlsYWJsZSBpbiB0aGUgbW9kdWxlLCByZXR1cm4gaXQuXG4gICAgaWYgKG5hbWUgaW4gbW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGVbbmFtZV07XG4gICAgfVxuICAgIC8vIElmIGEgcHJvcGVydHkgY2FsbGVkIGB0aGVuYCBleGlzdHMsIGFzc3VtZSBpdCdzIGEgcHJvbWlzZSBhbmRcbiAgICAvLyByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5hbWUuXG4gICAgaWYgKFwidGhlblwiIGluIG1vZHVsZSAmJiB0eXBlb2YgbW9kdWxlLnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbW9kdWxlLnRoZW4oKG1vZCk9PmhvaXN0KG1vZCwgbmFtZSkpO1xuICAgIH1cbiAgICAvLyBJZiB3ZSdyZSB0cnlpbmcgdG8gaG9pc2UgdGhlIGRlZmF1bHQgZXhwb3J0LCBhbmQgdGhlIG1vZHVsZSBpcyBhIGZ1bmN0aW9uLFxuICAgIC8vIHJldHVybiB0aGUgbW9kdWxlIGl0c2VsZi5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJmdW5jdGlvblwiICYmIG5hbWUgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWxwZXJzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module */ \"./node_modules/next/dist/server/future/route-modules/pages/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.tsx\");\n\n        // Next.js Route Loader\n        \n        \n\n        // Import the userland code.\n        \n\n        // Re-export the component (should be the default export).\n        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"default\"));\n\n        // Re-export methods.\n        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"getStaticProps\")\n        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"getStaticPaths\")\n        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"getServerSideProps\")\n        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"config\")\n        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"reportWebVitals\")\n\n        // Re-export legacy methods.\n        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"unstable_getStaticProps\")\n        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"unstable_getStaticPaths\")\n        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"unstable_getStaticParams\")\n        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"unstable_getServerProps\")\n        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__.hoist)(private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__, \"unstable_getServerSideProps\")\n\n        // Create and export the route module that will be consumed.\n        const options = {\"definition\":{\"kind\":\"PAGES\",\"page\":\"/_app\",\"pathname\":\"/_app\",\"bundlePath\":\"\",\"filename\":\"\"}}\n        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({ ...options, userland: private_next_pages_app__WEBPACK_IMPORTED_MODULE_2__ })\n        \n        \n    //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9wYWdlPSUyRl9hcHAmYWJzb2x1dGVQYWdlUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfYXBwJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQSxRQUFvRjtBQUNwRixRQUF5Rjs7QUFFekY7QUFDQSxRQUEyRDs7QUFFM0Q7QUFDQSxRQUFRLGlFQUFlLGdHQUFLLENBQUMsbURBQVEsWUFBWTs7QUFFakQ7QUFDQSxRQUFlLHVCQUF1QixnR0FBSyxDQUFDLG1EQUFRO0FBQ3BELFFBQWUsdUJBQXVCLGdHQUFLLENBQUMsbURBQVE7QUFDcEQsUUFBZSwyQkFBMkIsZ0dBQUssQ0FBQyxtREFBUTtBQUN4RCxRQUFlLGVBQWUsZ0dBQUssQ0FBQyxtREFBUTtBQUM1QyxRQUFlLHdCQUF3QixnR0FBSyxDQUFDLG1EQUFROztBQUVyRDtBQUNBLFFBQWUsZ0NBQWdDLGdHQUFLLENBQUMsbURBQVE7QUFDN0QsUUFBZSxnQ0FBZ0MsZ0dBQUssQ0FBQyxtREFBUTtBQUM3RCxRQUFlLGlDQUFpQyxnR0FBSyxDQUFDLG1EQUFRO0FBQzlELFFBQWUsZ0NBQWdDLGdHQUFLLENBQUMsbURBQVE7QUFDN0QsUUFBZSxvQ0FBb0MsZ0dBQUssQ0FBQyxtREFBUTs7QUFFakU7QUFDQSx5QkFBeUIsY0FBYztBQUN2QyxnQ0FBZ0MsMkZBQVcsR0FBRyxvQkFBb0IsdURBQUU7QUFDcEU7QUFDQSxRQUE4QjtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaXRpc2gtYmVlcnMvPzRjN2IiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIC8vIE5leHQuanMgUm91dGUgTG9hZGVyXG4gICAgICAgIGltcG9ydCBSb3V0ZU1vZHVsZSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy9tb2R1bGVcIlxuICAgICAgICBpbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2hlbHBlcnNcIlxuXG4gICAgICAgIC8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbiAgICAgICAgaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCJcblxuICAgICAgICAvLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIilcblxuICAgICAgICAvLyBSZS1leHBvcnQgbWV0aG9kcy5cbiAgICAgICAgZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U3RhdGljUHJvcHNcIilcbiAgICAgICAgZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U3RhdGljUGF0aHNcIilcbiAgICAgICAgZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFNlcnZlclNpZGVQcm9wc1wiKVxuICAgICAgICBleHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpXG4gICAgICAgIGV4cG9ydCBjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBob2lzdCh1c2VybGFuZCwgXCJyZXBvcnRXZWJWaXRhbHNcIilcblxuICAgICAgICAvLyBSZS1leHBvcnQgbGVnYWN5IG1ldGhvZHMuXG4gICAgICAgIGV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1Byb3BzXCIpXG4gICAgICAgIGV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1BhdGhzXCIpXG4gICAgICAgIGV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXNcIilcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U2VydmVyUHJvcHNcIilcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wc1wiKVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1wiZGVmaW5pdGlvblwiOntcImtpbmRcIjpcIlBBR0VTXCIsXCJwYWdlXCI6XCIvX2FwcFwiLFwicGF0aG5hbWVcIjpcIi9fYXBwXCIsXCJidW5kbGVQYXRoXCI6XCJcIixcImZpbGVuYW1lXCI6XCJcIn19XG4gICAgICAgIGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFJvdXRlTW9kdWxlKHsgLi4ub3B0aW9ucywgdXNlcmxhbmQgfSlcbiAgICAgICAgXG4gICAgICAgIGV4cG9ydCB7IHJvdXRlTW9kdWxlIH1cbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/dist/server/future/route-modules/pages/module.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-modules/pages/module.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    PagesRouteModule: function() {\n        return PagesRouteModule;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _routemodule = __webpack_require__(/*! ../route-module */ \"../route-module\");\nconst _render = __webpack_require__(/*! ../../../render */ \"../../../render\");\nclass PagesRouteModule extends _routemodule.RouteModule {\n    setup() {\n        throw new Error(\"Method not implemented.\");\n    }\n    handle() {\n        throw new Error(\"Method not implemented.\");\n    }\n    async render(req, res, pathname, query, renderOpts) {\n        const result = await (0, _render.renderToHTML)(req, res, pathname, query, renderOpts);\n        return result;\n    }\n}\nconst _default = PagesRouteModule;\n\n//# sourceMappingURL=module.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy9tb2R1bGUuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixNQUFNLENBR0w7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscUJBQXFCLG1CQUFPLENBQUMsd0NBQWlCO0FBQzlDLGdCQUFnQixtQkFBTyxDQUFDLHdDQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaXRpc2gtYmVlcnMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy9tb2R1bGUuanM/YzljZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhZ2VzUm91dGVNb2R1bGU6IG51bGwsXG4gICAgZGVmYXVsdDogbnVsbFxufSk7XG5mdW5jdGlvbiBfZXhwb3J0KHRhcmdldCwgYWxsKSB7XG4gICAgZm9yKHZhciBuYW1lIGluIGFsbClPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogYWxsW25hbWVdXG4gICAgfSk7XG59XG5fZXhwb3J0KGV4cG9ydHMsIHtcbiAgICBQYWdlc1JvdXRlTW9kdWxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFBhZ2VzUm91dGVNb2R1bGU7XG4gICAgfSxcbiAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0O1xuICAgIH1cbn0pO1xuY29uc3QgX3JvdXRlbW9kdWxlID0gcmVxdWlyZShcIi4uL3JvdXRlLW1vZHVsZVwiKTtcbmNvbnN0IF9yZW5kZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vcmVuZGVyXCIpO1xuY2xhc3MgUGFnZXNSb3V0ZU1vZHVsZSBleHRlbmRzIF9yb3V0ZW1vZHVsZS5Sb3V0ZU1vZHVsZSB7XG4gICAgc2V0dXAoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBoYW5kbGUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBhc3luYyByZW5kZXIocmVxLCByZXMsIHBhdGhuYW1lLCBxdWVyeSwgcmVuZGVyT3B0cykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoMCwgX3JlbmRlci5yZW5kZXJUb0hUTUwpKHJlcSwgcmVzLCBwYXRobmFtZSwgcXVlcnksIHJlbmRlck9wdHMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmNvbnN0IF9kZWZhdWx0ID0gUGFnZXNSb3V0ZU1vZHVsZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/server/future/route-modules/pages/module.js\n");

/***/ }),

/***/ "../route-module":
/*!************************************************************************!*\
  !*** external "next/dist/server/future/route-modules/route-module.js" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ "../../../render":
/*!*********************************************!*\
  !*** external "next/dist/server/render.js" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app&preferredRegion=&middlewareConfig=e30%3D!"));
module.exports = __webpack_exports__;

})();