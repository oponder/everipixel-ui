webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/oponder/code/oliver_ponder/everipixel/components/header.js";



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Header(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      privateKey = _useState2[0],
      setPrivateKey = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      createAccountToggle = _useState4[0],
      setCreateAccountToggle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      createAccountPage = _useState6[0],
      setCreateAccountPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loginToggle = _useState8[0],
      setLoginToggle = _useState8[1];

  function toggleCreateAccount() {
    setLoginToggle(false);
    setCreateAccountPage(0);
    setCreateAccountToggle(!createAccountToggle);
  }

  function toggleLogin() {
    setCreateAccountToggle(false);
    setLoginToggle(!loginToggle);
  }

  function advanceCreateAccount() {
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var privateKey;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return props.EVTWrapper.randomPrivateKey();

            case 2:
              privateKey = _context.sent;
              props.onLogin(privateKey);
              setCreateAccountPage(2);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }))();

    setCreateAccountPage(1);
  }

  function showCreateAccountPage() {
    if (createAccountPage === 0) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Create Account  ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: toggleCreateAccount,
        className: "pullRight close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "[X]")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "There is actually no such thing as creating an account! That's the beauty of the blockchain. All you need is a private key. And the servers will never see that private key."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Now, normally there is a wallet app that keeps these keys safe for you. However, I've had some trouble integrating Everitoken's app (called everiSigner). So for now, private key creation is done by everiPixel itself."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "While everiPixel is a prototype, this should be ok. But I do intend to use something like everiSigner eventually to give you more confidence that your private key is safe."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "primary",
        onClick: advanceCreateAccount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Continue and make me a private key!"));
    } else if (createAccountPage === 1) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Creating Private Key"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Please wait a moment"));
    } else if (createAccountPage === 2) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Private Key Created! ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: toggleCreateAccount,
        className: "pullRight close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "[X]")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "You are now logged in."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Please copy your private key to the clipboard and save it somewhere."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Copy your private key to the clipboard."));
    }
  }

  function handlePrivateKeyChange(e) {
    setPrivateKey(e.target.value);
  }

  function commitPrivateKey(e) {
    e.preventDefault();
    setLoginToggle(false);
    props.onLogin(privateKey);
  }

  function logout() {
    setPrivateKey("");
    var c = confirm("Are you sure you want to logout? Make sure you saved your private key somewhere, there's no way to recover it.");

    if (c) {
      props.onLogout();
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "everi", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Pixel")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597" + " " + "user pullRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, props.loggedIn ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Logged in as: ", props.loggedIn, " | ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: logout,
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Logout")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: toggleLogin,
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Login"), " | ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: toggleCreateAccount,
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Create Account")), loginToggle ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597" + " " + "createAccount overlayWindow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Login ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: toggleLogin,
    className: "jsx-3096650597" + " " + "pullRight close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "[X]")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Private Key"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    autoFocus: true,
    type: "text",
    value: privateKey,
    onChange: handlePrivateKeyChange,
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: commitPrivateKey,
    className: "jsx-3096650597" + " " + "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Save"))) : undefined, createAccountToggle ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597" + " " + "createAccount overlayWindow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, showCreateAccountPage(createAccountPage)) : undefined), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3096650597",
    css: "h1.jsx-3096650597{color:#858585;font-size:24px;margin:0;display:inline;}h1.jsx-3096650597 span.jsx-3096650597{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlITyxBQUd5QixBQVFqQixXQUFDLEdBUGlCLGVBQ04sU0FDTSxlQUNqQiIsImZpbGUiOiIvVXNlcnMvb3BvbmRlci9jb2RlL29saXZlcl9wb25kZXIvZXZlcmlwaXhlbC9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICBsZXQgW3ByaXZhdGVLZXksIHNldFByaXZhdGVLZXldID0gdXNlU3RhdGUoXCJcIik7XG4gIGxldCBbY3JlYXRlQWNjb3VudFRvZ2dsZSwgc2V0Q3JlYXRlQWNjb3VudFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbY3JlYXRlQWNjb3VudFBhZ2UsIHNldENyZWF0ZUFjY291bnRQYWdlXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW2xvZ2luVG9nZ2xlLCBzZXRMb2dpblRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ3JlYXRlQWNjb3VudCgpIHtcbiAgICBzZXRMb2dpblRvZ2dsZShmYWxzZSk7XG4gICAgc2V0Q3JlYXRlQWNjb3VudFBhZ2UoMCk7XG4gICAgc2V0Q3JlYXRlQWNjb3VudFRvZ2dsZSghY3JlYXRlQWNjb3VudFRvZ2dsZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVMb2dpbigpIHtcbiAgICBzZXRDcmVhdGVBY2NvdW50VG9nZ2xlKGZhbHNlKTtcbiAgICBzZXRMb2dpblRvZ2dsZSghbG9naW5Ub2dnbGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWR2YW5jZUNyZWF0ZUFjY291bnQoKSB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBwcml2YXRlS2V5ID0gYXdhaXQgcHJvcHMuRVZUV3JhcHBlci5yYW5kb21Qcml2YXRlS2V5KCk7XG4gICAgICBwcm9wcy5vbkxvZ2luKHByaXZhdGVLZXkpO1xuICAgICAgc2V0Q3JlYXRlQWNjb3VudFBhZ2UoMik7XG4gICAgfSkoKTtcblxuICAgIHNldENyZWF0ZUFjY291bnRQYWdlKDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0NyZWF0ZUFjY291bnRQYWdlKCkge1xuICAgIGlmIChjcmVhdGVBY2NvdW50UGFnZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxoMz5DcmVhdGUgQWNjb3VudCAgPGEgb25DbGljaz17dG9nZ2xlQ3JlYXRlQWNjb3VudH0gY2xhc3NOYW1lPVwicHVsbFJpZ2h0IGNsb3NlXCI+W1hdPC9hPjwvaDM+XG4gICAgICAgIDxwPlRoZXJlIGlzIGFjdHVhbGx5IG5vIHN1Y2ggdGhpbmcgYXMgY3JlYXRpbmcgYW4gYWNjb3VudCEgVGhhdCdzIHRoZSBiZWF1dHlcbiAgICAgICAgb2YgdGhlIGJsb2NrY2hhaW4uIEFsbCB5b3UgbmVlZCBpcyBhIHByaXZhdGUga2V5LiBBbmQgdGhlIHNlcnZlcnMgd2lsbCBuZXZlclxuICAgICAgICBzZWUgdGhhdCBwcml2YXRlIGtleS48L3A+XG5cbiAgICAgICAgPHA+Tm93LCBub3JtYWxseSB0aGVyZSBpcyBhIHdhbGxldCBhcHAgdGhhdCBrZWVwcyB0aGVzZSBrZXlzIHNhZmUgZm9yIHlvdS5cbiAgICAgICAgSG93ZXZlciwgSSd2ZSBoYWQgc29tZSB0cm91YmxlIGludGVncmF0aW5nXG4gICAgICAgIEV2ZXJpdG9rZW4ncyBhcHAgKGNhbGxlZCBldmVyaVNpZ25lcikuIFNvIGZvciBub3csIHByaXZhdGUga2V5IGNyZWF0aW9uXG4gICAgICAgIGlzIGRvbmUgYnkgZXZlcmlQaXhlbCBpdHNlbGYuPC9wPlxuXG4gICAgICAgIDxwPldoaWxlIGV2ZXJpUGl4ZWwgaXMgYSBwcm90b3R5cGUsIHRoaXMgc2hvdWxkIGJlIG9rLiBCdXQgSSBkbyBpbnRlbmQgdG8gdXNlXG4gICAgICAgIHNvbWV0aGluZyBsaWtlIGV2ZXJpU2lnbmVyIGV2ZW50dWFsbHkgdG8gZ2l2ZSB5b3UgbW9yZSBjb25maWRlbmNlIHRoYXQgeW91clxuICAgICAgICBwcml2YXRlIGtleSBpcyBzYWZlLjwvcD5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnlcIiBvbkNsaWNrPXthZHZhbmNlQ3JlYXRlQWNjb3VudH0+Q29udGludWUgYW5kIG1ha2UgbWUgYSBwcml2YXRlIGtleSE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIH0gZWxzZSBpZiAoY3JlYXRlQWNjb3VudFBhZ2UgPT09IDEpe1xuICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxoMz5DcmVhdGluZyBQcml2YXRlIEtleTwvaDM+XG4gICAgICAgIDxwPlBsZWFzZSB3YWl0IGEgbW9tZW50PC9wPlxuICAgICAgPC9kaXY+XG4gICAgfSBlbHNlIGlmIChjcmVhdGVBY2NvdW50UGFnZSA9PT0gMikge1xuICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxoMz5Qcml2YXRlIEtleSBDcmVhdGVkISA8YSBvbkNsaWNrPXt0b2dnbGVDcmVhdGVBY2NvdW50fSBjbGFzc05hbWU9XCJwdWxsUmlnaHQgY2xvc2VcIj5bWF08L2E+PC9oMz5cbiAgICAgICAgPHA+WW91IGFyZSBub3cgbG9nZ2VkIGluLjwvcD5cbiAgICAgICAgPHA+UGxlYXNlIGNvcHkgeW91ciBwcml2YXRlIGtleSB0byB0aGUgY2xpcGJvYXJkIGFuZCBzYXZlIGl0IHNvbWV3aGVyZS48L3A+XG4gICAgICAgIDxidXR0b24+Q29weSB5b3VyIHByaXZhdGUga2V5IHRvIHRoZSBjbGlwYm9hcmQuPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcml2YXRlS2V5Q2hhbmdlKGUpIHtcbiAgICBzZXRQcml2YXRlS2V5KGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbW1pdFByaXZhdGVLZXkoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2dpblRvZ2dsZShmYWxzZSk7XG4gICAgcHJvcHMub25Mb2dpbihwcml2YXRlS2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICBzZXRQcml2YXRlS2V5KFwiXCIpO1xuICAgIHZhciBjID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsb2dvdXQ/IE1ha2Ugc3VyZSB5b3Ugc2F2ZWQgeW91ciBwcml2YXRlIGtleSBzb21ld2hlcmUsIHRoZXJlJ3Mgbm8gd2F5IHRvIHJlY292ZXIgaXQuXCIpXG4gICAgaWYgKGMpIHtcbiAgICAgIHByb3BzLm9uTG9nb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgPGgxPmV2ZXJpPHNwYW4+UGl4ZWw8L3NwYW4+PC9oMT5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlciBwdWxsUmlnaHRcIj5cblxuXG4gICAgICB7XG4gICAgICAgIHByb3BzLmxvZ2dlZEluID9cbiAgICAgICAgPGRpdj5Mb2dnZWQgaW4gYXM6IHtwcm9wcy5sb2dnZWRJbn0gfCA8YSBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvYT48L2Rpdj5cbiAgICAgICAgOlxuICAgICAgICA8ZGl2PjxhIG9uQ2xpY2s9e3RvZ2dsZUxvZ2lufT5Mb2dpbjwvYT4gfCA8YSBvbkNsaWNrPXt0b2dnbGVDcmVhdGVBY2NvdW50fT5DcmVhdGUgQWNjb3VudDwvYT48L2Rpdj5cbiAgICAgIH1cblxuICAgICAge1xuICAgICAgICBsb2dpblRvZ2dsZSA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGVBY2NvdW50IG92ZXJsYXlXaW5kb3dcIj5cbiAgICAgICAgICAgIDxoMz5Mb2dpbiA8YSBvbkNsaWNrPXt0b2dnbGVMb2dpbn0gY2xhc3NOYW1lPVwicHVsbFJpZ2h0IGNsb3NlXCI+W1hdPC9hPjwvaDM+XG4gICAgICAgICAgICA8bGFiZWw+UHJpdmF0ZSBLZXk8L2xhYmVsPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIDxpbnB1dCBhdXRvRm9jdXMgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJpdmF0ZUtleX0gb25DaGFuZ2U9e2hhbmRsZVByaXZhdGVLZXlDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5XCIgb25DbGljaz17Y29tbWl0UHJpdmF0ZUtleX0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIHtcbiAgICAgICAgY3JlYXRlQWNjb3VudFRvZ2dsZSA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGVBY2NvdW50IG92ZXJsYXlXaW5kb3dcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvd0NyZWF0ZUFjY291bnRQYWdlKGNyZWF0ZUFjY291bnRQYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICB9XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGNvbG9yOiAjODU4NTg1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmZcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/components/header.js */",
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.df7327982f4dac6bca1c.hot-update.js.map