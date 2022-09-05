webpackHotUpdate_N_E('pages/merch/payment/secure-payment', {
  /***/ './src/components/merch/payment/index.tsx':
    /*!************************************************!*\
  !*** ./src/components/merch/payment/index.tsx ***!
  \************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _stripe_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stripe-handler */ "./src/components/merch/payment/stripe-handler.tsx");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _artist_utils_api_payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @artist/utils/api/payment */ "./src/utils/api/payment.ts");\n/* harmony import */ var _artist_hooks_use_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @artist/hooks/use-order */ "./src/hooks/use-order.ts");\n/* harmony import */ var _artist_utils_api_stripe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @artist/utils/api/stripe */ "./src/utils/api/stripe.ts");\n/* harmony import */ var _components_merch_shipping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/merch/shipping */ "./src/components/merch/shipping/index.tsx");\n/* harmony import */ var _artist_utils_normalizers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @artist/utils/normalizers */ "./src/utils/normalizers.ts");\n/* harmony import */ var _components_merch_payment_payment_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/merch/payment/payment-details */ "./src/components/merch/payment/payment-details.tsx");\nvar _jsxFileName = "/Users/volod34/WebStormProjects/newage/trac/platform/frontend/ssr-artist/src/components/merch/payment/index.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nconst Payment = ({\n  className\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();\n  const stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["useStripe"])();\n  const {\n    orderId\n  } = router.query; // tslint:disable-next-line:no-console\n\n  console.log("orderId_m: ", orderId); // eslint-disable-line no-console\n\n  const {\n    order\n  } = Object(_artist_hooks_use_order__WEBPACK_IMPORTED_MODULE_6__["useOrder"])(orderId); // tslint:disable-next-line:no-console\n\n  console.log("order: ", order); // eslint-disable-line no-console\n\n  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  const [clientSecret, setClientSecret] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);\n  const {\n    total,\n    shippingAddress,\n    products,\n    shippingPrice,\n    tax\n  } = order || {}; //TODO get order from server by id. saveOrder via useOrder(orderId)\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    if (!clientSecret && orderId && order && total) {\n      const {\n        firstName,\n        lastName,\n        email\n      } = shippingAddress || {};\n      const currency = "USD";\n      const description = `Payment for order ${orderId}`;\n      const customer = {\n        name: `${firstName} ${lastName}`,\n        email\n      };\n      Object(_artist_utils_api_payment__WEBPACK_IMPORTED_MODULE_5__["createPaymentIntentCustomer"])({\n        amount: total,\n        currency,\n        description,\n        customer,\n        orderId\n      }).then(intent => setClientSecret(intent.client_secret));\n    }\n  }, [total, order, orderId, clientSecret]);\n\n  const handleSuccess = async paymentData => {\n    setError(false);\n    if (!(stripe && clientSecret && orderId && order && paymentData.cardElement)) return;\n    const paymentMethod = await Object(_artist_utils_api_stripe__WEBPACK_IMPORTED_MODULE_7__["handlePaymentData"])(stripe, paymentData);\n\n    if (!paymentMethod) {\n      return setError(true);\n    }\n\n    const result = await Object(_artist_utils_api_stripe__WEBPACK_IMPORTED_MODULE_7__["proceedPayment"])(stripe, clientSecret, paymentMethod);\n\n    if (result.error) {\n      return setError(true);\n    }\n\n    await router.push(`./confirmation?orderId=${orderId}`);\n  };\n\n  if (!order) return null;\n  return __jsx("div", {\n    className: className,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, (products === null || products === void 0 ? void 0 : products.length) && __jsx(PaymentTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx("h1", {\n    className: "title",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, products.length > 1 ? `${products.length} products` : "1 product"), total && __jsx("h1", {\n    className: "title",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 21\n    }\n  }, "$", Object(_artist_utils_normalizers__WEBPACK_IMPORTED_MODULE_9__["centsToDollars"])(total))), __jsx(PaymentContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, __jsx(_components_merch_shipping__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    shippingAddress: shippingAddress,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }), __jsx(_stripe_handler__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    error: error,\n    onSuccess: handleSuccess,\n    customBtnLabel: total && `Pay Now ${Object(_artist_utils_normalizers__WEBPACK_IMPORTED_MODULE_9__["centsToDollars"])(total)}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(_components_merch_payment_payment_details__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    products: products,\n    total: total,\n    shippingCost: Object(_artist_utils_normalizers__WEBPACK_IMPORTED_MODULE_9__["centsToDollars"])(shippingPrice !== null && shippingPrice !== void 0 ? shippingPrice : 0),\n    taxCost: Object(_artist_utils_normalizers__WEBPACK_IMPORTED_MODULE_9__["centsToDollars"])(tax !== null && tax !== void 0 ? tax : 0),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Payment, "HPCUpIYmBG1KVMJX+4R5CjETnHM=", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["useStripe"], _artist_hooks_use_order__WEBPACK_IMPORTED_MODULE_6__["useOrder"]];\n});\n\n_c = Payment;\n/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Payment).withConfig({\n  displayName: "payment",\n  componentId: "apkp9u-0"\n})(["width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;max-width:430px;margin:0 auto;font-family:\'Sen\',sans-serif;.errorMsg{font-weight:bold;color:", ";font-size:12px;font-family:\'Sen\',sans-serif;}"], ({\n  theme\n}) => theme.colors.error));\nconst PaymentTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "payment__PaymentTitle",\n  componentId: "apkp9u-1"\n})(["margin:16px 0;width:100%;display:flex;justify-content:space-between;align-items:center;.title{font-size:40px;line-height:48px;font-weight:400;margin:0;color:", ";font-family:\'Sen\',sans-serif;}"], ({\n  theme\n}) => theme.colors.primary);\n_c2 = PaymentTitle;\nconst PaymentContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "payment__PaymentContainer",\n  componentId: "apkp9u-2"\n})(["height:auto;width:100%;padding:30px;background:", ";border:", ";border-radius:4px;@media (max-width:", "){padding:10px;}"], ({\n  theme\n}) => theme.colors.cartItemBackground, ({\n  theme\n}) => `1px solid ${theme.colors.itemBackgroundHover}`, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`);\n_c3 = PaymentContainer;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, "Payment");\n$RefreshReg$(_c2, "PaymentTitle");\n$RefreshReg$(_c3, "PaymentContainer");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWVyY2gvcGF5bWVudC9pbmRleC50c3g/ZDQ1YyJdLCJuYW1lcyI6WyJQYXltZW50IiwiY2xhc3NOYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RyaXBlIiwidXNlU3RyaXBlIiwib3JkZXJJZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIm9yZGVyIiwidXNlT3JkZXIiLCJlcnJvciIsInNldEVycm9yIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsaWVudFNlY3JldCIsInNldENsaWVudFNlY3JldCIsInRvdGFsIiwic2hpcHBpbmdBZGRyZXNzIiwicHJvZHVjdHMiLCJzaGlwcGluZ1ByaWNlIiwidGF4IiwidXNlRWZmZWN0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsImN1cnJlbmN5IiwiZGVzY3JpcHRpb24iLCJjdXN0b21lciIsIm5hbWUiLCJjcmVhdGVQYXltZW50SW50ZW50Q3VzdG9tZXIiLCJhbW91bnQiLCJ0aGVuIiwiaW50ZW50IiwiY2xpZW50X3NlY3JldCIsImhhbmRsZVN1Y2Nlc3MiLCJwYXltZW50RGF0YSIsImNhcmRFbGVtZW50IiwicGF5bWVudE1ldGhvZCIsImhhbmRsZVBheW1lbnREYXRhIiwicmVzdWx0IiwicHJvY2VlZFBheW1lbnQiLCJwdXNoIiwibGVuZ3RoIiwiY2VudHNUb0RvbGxhcnMiLCJzdHlsZWQiLCJ0aGVtZSIsImNvbG9ycyIsIlBheW1lbnRUaXRsZSIsImRpdiIsInByaW1hcnkiLCJQYXltZW50Q29udGFpbmVyIiwiY2FydEl0ZW1CYWNrZ3JvdW5kIiwiaXRlbUJhY2tncm91bmRIb3ZlciIsImJyZWFrcG9pbnRzIiwidGFibGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNQSxPQUFtQyxHQUFHLENBQUM7QUFB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RjtBQTJCRCxDQXZGRDs7R0FBTXRCLE87VUFDV0cscUQsRUFDQUUsaUUsRUFJR00sZ0U7OztLQU5kWCxPO0FBeUZTOEMsZ0lBQU0sQ0FBQzlDLE9BQUQsQ0FBckI7QUFBQTtBQUFBO0FBQUEsbVBBWWEsQ0FBQztBQUFFK0M7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhcEMsS0FaekM7QUFrQkEsTUFBTXFDLFlBQVksR0FBR0gseURBQU0sQ0FBQ0ksR0FBVjtBQUFBO0FBQUE7QUFBQSx5TUFZTCxDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUcsT0FadkIsQ0FBbEI7TUFBTUYsWTtBQWlCTixNQUFNRyxnQkFBZ0IsR0FBR04seURBQU0sQ0FBQ0ksR0FBVjtBQUFBO0FBQUE7QUFBQSxpSUFJTixDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUssa0JBSnRCLEVBS1YsQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FBZ0IsYUFBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFNLG1CQUFvQixFQUxuRCxFQVFDLENBQUM7QUFBRVA7QUFBRixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsTUFBTyxJQVI1QyxDQUF0QjtNQUFNSixnQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21lcmNoL3BheW1lbnQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIEN1c3RvbWVyTWV0YWRhdGEsXG4gIFN0cmlwZVBheW1lbnREYXRhXG59IGZyb20gXCJAYXJ0aXN0L3R5cGVzL3N0cmlwZS9wYXltZW50LWRhdGFcIjtcbmltcG9ydCBTdHJpcGVIYW5kbGVyIGZyb20gXCIuL3N0cmlwZS1oYW5kbGVyXCI7XG5pbXBvcnQgeyB1c2VTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgY3JlYXRlUGF5bWVudEludGVudEN1c3RvbWVyIH0gZnJvbSBcIkBhcnRpc3QvdXRpbHMvYXBpL3BheW1lbnRcIjtcbmltcG9ydCB7IHVzZU9yZGVyIH0gZnJvbSBcIkBhcnRpc3QvaG9va3MvdXNlLW9yZGVyXCI7XG5pbXBvcnQgeyBoYW5kbGVQYXltZW50RGF0YSwgcHJvY2VlZFBheW1lbnQgfSBmcm9tIFwiQGFydGlzdC91dGlscy9hcGkvc3RyaXBlXCI7XG5pbXBvcnQgU2hpcHBpbmdJbmZvIGZyb20gXCJAY29tcG9uZW50cy9tZXJjaC9zaGlwcGluZ1wiO1xuaW1wb3J0IHsgY2VudHNUb0RvbGxhcnMgfSBmcm9tIFwiQGFydGlzdC91dGlscy9ub3JtYWxpemVyc1wiO1xuaW1wb3J0IFBheW1lbnREZXRhaWxzIGZyb20gXCJAY29tcG9uZW50cy9tZXJjaC9wYXltZW50L3BheW1lbnQtZGV0YWlsc1wiO1xuXG5pbnRlcmZhY2UgUGF5bWVudEN0cmxQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgUGF5bWVudDogUmVhY3QuRkM8UGF5bWVudEN0cmxQcm9wcz4gPSAoeyBjbGFzc05hbWUgfTogUGF5bWVudEN0cmxQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XG4gIGNvbnN0IHsgb3JkZXJJZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICBjb25zb2xlLmxvZyhcIm9yZGVySWRfbTogXCIsIG9yZGVySWQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgY29uc3QgeyBvcmRlciB9ID0gdXNlT3JkZXIob3JkZXJJZCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gIGNvbnNvbGUubG9nKFwib3JkZXI6IFwiLCBvcmRlcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NsaWVudFNlY3JldCwgc2V0Q2xpZW50U2VjcmV0XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7IHRvdGFsLCBzaGlwcGluZ0FkZHJlc3MsIHByb2R1Y3RzLCBzaGlwcGluZ1ByaWNlLCB0YXggfSA9IG9yZGVyIHx8IHt9O1xuICBcbiAgLy9UT0RPIGdldCBvcmRlciBmcm9tIHNlcnZlciBieSBpZC4gc2F2ZU9yZGVyIHZpYSB1c2VPcmRlcihvcmRlcklkKVxuICBcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWNsaWVudFNlY3JldCAmJiBvcmRlcklkICYmIG9yZGVyICYmIHRvdGFsKSB7XG4gICAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsIH0gPSBzaGlwcGluZ0FkZHJlc3MgfHwge307XG4gICAgICBjb25zdCBjdXJyZW5jeSA9IFwiVVNEXCI7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGBQYXltZW50IGZvciBvcmRlciAke29yZGVySWR9YDtcbiAgICAgIGNvbnN0IGN1c3RvbWVyOiBDdXN0b21lck1ldGFkYXRhID0ge1xuICAgICAgICBuYW1lOiBgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YCxcbiAgICAgICAgZW1haWxcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNyZWF0ZVBheW1lbnRJbnRlbnRDdXN0b21lcih7XG4gICAgICAgIGFtb3VudDogdG90YWwsXG4gICAgICAgIGN1cnJlbmN5LFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY3VzdG9tZXIsXG4gICAgICAgIG9yZGVySWRcbiAgICAgIH0pLnRoZW4oKGludGVudCkgPT4gc2V0Q2xpZW50U2VjcmV0KGludGVudC5jbGllbnRfc2VjcmV0KSk7XG4gICAgfVxuICB9LCBbdG90YWwsIG9yZGVyLCBvcmRlcklkLCBjbGllbnRTZWNyZXRdKTtcbiAgXG4gIGNvbnN0IGhhbmRsZVN1Y2Nlc3MgPSBhc3luYyAocGF5bWVudERhdGE6IFN0cmlwZVBheW1lbnREYXRhKSA9PiB7XG4gICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgIFxuICAgIGlmIChcbiAgICAgICEoc3RyaXBlICYmIGNsaWVudFNlY3JldCAmJiBvcmRlcklkICYmIG9yZGVyICYmIHBheW1lbnREYXRhLmNhcmRFbGVtZW50KVxuICAgIClcbiAgICAgIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBwYXltZW50TWV0aG9kID0gYXdhaXQgaGFuZGxlUGF5bWVudERhdGEoc3RyaXBlLCBwYXltZW50RGF0YSk7XG4gICAgXG4gICAgaWYgKCFwYXltZW50TWV0aG9kKSB7XG4gICAgICByZXR1cm4gc2V0RXJyb3IodHJ1ZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2NlZWRQYXltZW50KHN0cmlwZSwgY2xpZW50U2VjcmV0LCBwYXltZW50TWV0aG9kKTtcbiAgICBcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICByZXR1cm4gc2V0RXJyb3IodHJ1ZSk7XG4gICAgfVxuICAgIFxuICAgIGF3YWl0IHJvdXRlci5wdXNoKGAuL2NvbmZpcm1hdGlvbj9vcmRlcklkPSR7b3JkZXJJZH1gKTtcbiAgfTtcbiAgXG4gIGlmICghb3JkZXIpIHJldHVybiBudWxsO1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtwcm9kdWN0cz8ubGVuZ3RoICYmIChcbiAgICAgICAgPFBheW1lbnRUaXRsZT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGggPiAxID8gYCR7cHJvZHVjdHMubGVuZ3RofSBwcm9kdWN0c2AgOiBcIjEgcHJvZHVjdFwifVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAge3RvdGFsICYmIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPiR7Y2VudHNUb0RvbGxhcnModG90YWwpfTwvaDE+fVxuICAgICAgICA8L1BheW1lbnRUaXRsZT5cbiAgICAgICl9XG4gICAgICA8UGF5bWVudENvbnRhaW5lcj5cbiAgICAgICAgPFNoaXBwaW5nSW5mbyBzaGlwcGluZ0FkZHJlc3M9e3NoaXBwaW5nQWRkcmVzc30gLz5cbiAgICAgICAgPFN0cmlwZUhhbmRsZXJcbiAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgb25TdWNjZXNzPXtoYW5kbGVTdWNjZXNzfVxuICAgICAgICAgIGN1c3RvbUJ0bkxhYmVsPXt0b3RhbCAmJiBgUGF5IE5vdyAke2NlbnRzVG9Eb2xsYXJzKHRvdGFsKX1gfVxuICAgICAgICA+XG4gICAgICAgICAgPFBheW1lbnREZXRhaWxzXG4gICAgICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XG4gICAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgICBzaGlwcGluZ0Nvc3Q9e2NlbnRzVG9Eb2xsYXJzKHNoaXBwaW5nUHJpY2UgPz8gMCl9XG4gICAgICAgICAgICB0YXhDb3N0PXtjZW50c1RvRG9sbGFycyh0YXggPz8gMCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHJpcGVIYW5kbGVyPlxuICAgICAgPC9QYXltZW50Q29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKFBheW1lbnQpYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1mYW1pbHk6ICdTZW4nLCBzYW5zLXNlcmlmO1xuXG4gIC5lcnJvck1zZyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmVycm9yfTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdTZW4nLCBzYW5zLXNlcmlmO1xuICB9XG5gO1xuXG5jb25zdCBQYXltZW50VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDE2cHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgZm9udC1mYW1pbHk6ICdTZW4nLCBzYW5zLXNlcmlmO1xuICB9XG5gO1xuXG5jb25zdCBQYXltZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuY2FydEl0ZW1CYWNrZ3JvdW5kfTtcbiAgYm9yZGVyOiAkeyh7IHRoZW1lIH0pID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuaXRlbUJhY2tncm91bmRIb3Zlcn1gfTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLnRhYmxldH1weGB9KSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/merch/payment/index.tsx\n'
      );

      /***/
    },
});