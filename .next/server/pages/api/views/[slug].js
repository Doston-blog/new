"use strict";
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
exports.id = "pages/api/views/[slug]";
exports.ids = ["pages/api/views/[slug]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3ByaXNtYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFLOUMsTUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQU0sSUFBSSxJQUFJRCx3REFBWSxFQUFFO0FBRWxELGlFQUFlQyxNQUFNLEVBQUM7QUFDdEIsSUFBSUUsSUFBcUMsRUFBRUQsTUFBTSxDQUFDRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy1ibG9nLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XHJcbn1cclxuY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/views/[slug].ts":
/*!***************************************!*\
  !*** ./src/pages/api/views/[slug].ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./src/lib/prisma.ts\");\n\nasync function handler(req, res) {\n    try {\n        const slug = req.query.slug.toString();\n        if (req.method === \"POST\") {\n            const newOrUpdatedViews = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].views.upsert({\n                where: {\n                    slug\n                },\n                create: {\n                    slug\n                },\n                update: {\n                    count: {\n                        increment: 1\n                    }\n                }\n            });\n            return res.status(200).json({\n                total: newOrUpdatedViews.count.toString()\n            });\n        }\n        if (req.method === \"GET\") {\n            const views = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].views.findUnique({\n                where: {\n                    slug\n                }\n            });\n            return res.status(200).json({\n                total: views?.count.toString()\n            });\n        }\n    } catch (e) {\n        return res.status(500).json({\n            message: e.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3ZpZXdzL1tzbHVnXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUN5QztBQUUxQixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxJQUFJO1FBQ0YsTUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxRQUFRLEVBQUU7UUFFdEMsSUFBSUosR0FBRyxDQUFDSyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQ3pCLE1BQU1DLGlCQUFpQixHQUFHLE1BQU1SLGdFQUFtQixDQUFDO2dCQUNsRFcsS0FBSyxFQUFFO29CQUFFUCxJQUFJO2lCQUFFO2dCQUNmUSxNQUFNLEVBQUU7b0JBQ05SLElBQUk7aUJBQ0w7Z0JBQ0RTLE1BQU0sRUFBRTtvQkFDTkMsS0FBSyxFQUFFO3dCQUNMQyxTQUFTLEVBQUUsQ0FBQztxQkFDYjtpQkFDRjthQUNGLENBQUM7WUFFRixPQUFPWixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUMxQkMsS0FBSyxFQUFFVixpQkFBaUIsQ0FBQ00sS0FBSyxDQUFDUixRQUFRLEVBQUU7YUFDMUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJSixHQUFHLENBQUNLLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDeEIsTUFBTUUsS0FBSyxHQUFHLE1BQU1ULG9FQUF1QixDQUFDO2dCQUMxQ1csS0FBSyxFQUFFO29CQUNMUCxJQUFJO2lCQUNMO2FBQ0YsQ0FBQztZQUVGLE9BQU9ELEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUssRUFBRVQsS0FBSyxFQUFFSyxLQUFLLENBQUNSLFFBQVEsRUFBRTthQUFFLENBQUMsQ0FBQztTQUNqRTtLQUNGLENBQUMsT0FBT2MsQ0FBQyxFQUFPO1FBQ2YsT0FBT2pCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUksT0FBTyxFQUFFRCxDQUFDLENBQUNDLE9BQU87U0FBRSxDQUFDLENBQUM7S0FDckQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy1ibG9nLy4vc3JjL3BhZ2VzL2FwaS92aWV3cy9bc2x1Z10udHM/NzVkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNsdWcgPSByZXEucXVlcnkuc2x1Zy50b1N0cmluZygpO1xyXG5cclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICBjb25zdCBuZXdPclVwZGF0ZWRWaWV3cyA9IGF3YWl0IHByaXNtYS52aWV3cy51cHNlcnQoe1xyXG4gICAgICAgIHdoZXJlOiB7IHNsdWcgfSxcclxuICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgIHNsdWcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGU6IHtcclxuICAgICAgICAgIGNvdW50OiB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudDogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIHRvdGFsOiBuZXdPclVwZGF0ZWRWaWV3cy5jb3VudC50b1N0cmluZygpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICBjb25zdCB2aWV3cyA9IGF3YWl0IHByaXNtYS52aWV3cy5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgc2x1ZyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRvdGFsOiB2aWV3cz8uY291bnQudG9TdHJpbmcoKSB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGUubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzbHVnIiwicXVlcnkiLCJ0b1N0cmluZyIsIm1ldGhvZCIsIm5ld09yVXBkYXRlZFZpZXdzIiwidmlld3MiLCJ1cHNlcnQiLCJ3aGVyZSIsImNyZWF0ZSIsInVwZGF0ZSIsImNvdW50IiwiaW5jcmVtZW50Iiwic3RhdHVzIiwianNvbiIsInRvdGFsIiwiZmluZFVuaXF1ZSIsImUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/views/[slug].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/views/[slug].ts"));
module.exports = __webpack_exports__;

})();