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
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);

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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      copied = _useState10[0],
      setCopied = _useState10[1];

  function toggleCreateAccount() {
    setLoginToggle(false);
    setCreateAccountPage(0);
    setCopied(false);
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
              setPrivateKey(privateKey);
              setCreateAccountPage(2);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }))();

    setCreateAccountPage(1);
  }

  function copyToClipboard() {
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default()(privateKey);
    setCopied(true);
  }

  function showCreateAccountPage() {
    if (createAccountPage === 0) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Create Account  ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: toggleCreateAccount,
        className: "pullRight close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "[X]")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "There is actually no such thing as creating an account! That's the beauty of the blockchain. All you need is a private key. And the servers will never see that private key."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Now, normally there is a wallet app that keeps these keys safe for you. However, I've had some trouble integrating Everitoken's app (called everiSigner). So for now, private key creation is done by everiPixel itself."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "While everiPixel is a prototype, this should be ok. But I do intend to use something like everiSigner eventually to give you more confidence that your private key is safe."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "primary",
        onClick: advanceCreateAccount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Continue and make me a private key!"));
    } else if (createAccountPage === 1) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Creating Private Key"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Please wait a moment"));
    } else if (createAccountPage === 2) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Private Key Created! ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: toggleCreateAccount,
        className: "pullRight close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "[X]")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "You are now logged in."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Please copy your private key to the clipboard and save it somewhere."), copied ? "Copied to clipboard!" : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        class: "primary",
        onClick: copyToClipboard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
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
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "everi", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Pixel")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597" + " " + "user pullRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, props.loggedIn ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Logged in as: ", props.loggedIn, " | ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: logout,
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Logout")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: toggleLogin,
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Login"), " | ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: toggleCreateAccount,
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Create Account")), loginToggle ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597" + " " + "createAccount overlayWindow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Login ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: toggleLogin,
    className: "jsx-3096650597" + " " + "pullRight close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "[X]")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Private Key"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
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
      lineNumber: 113
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: commitPrivateKey,
    className: "jsx-3096650597" + " " + "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Save"))) : undefined, createAccountToggle ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597" + " " + "createAccount overlayWindow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, showCreateAccountPage(createAccountPage)) : undefined), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3096650597",
    css: "h1.jsx-3096650597{color:#858585;font-size:24px;margin:0;display:inline;}h1.jsx-3096650597 span.jsx-3096650597{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFJTyxBQUd5QixBQVFqQixXQUFDLEdBUGlCLGVBQ04sU0FDTSxlQUNqQiIsImZpbGUiOiIvVXNlcnMvb3BvbmRlci9jb2RlL29saXZlcl9wb25kZXIvZXZlcmlwaXhlbC9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICBsZXQgW3ByaXZhdGVLZXksIHNldFByaXZhdGVLZXldID0gdXNlU3RhdGUoXCJcIik7XG4gIGxldCBbY3JlYXRlQWNjb3VudFRvZ2dsZSwgc2V0Q3JlYXRlQWNjb3VudFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbY3JlYXRlQWNjb3VudFBhZ2UsIHNldENyZWF0ZUFjY291bnRQYWdlXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW2xvZ2luVG9nZ2xlLCBzZXRMb2dpblRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUNyZWF0ZUFjY291bnQoKSB7XG4gICAgc2V0TG9naW5Ub2dnbGUoZmFsc2UpO1xuICAgIHNldENyZWF0ZUFjY291bnRQYWdlKDApO1xuICAgIHNldENvcGllZChmYWxzZSk7XG4gICAgc2V0Q3JlYXRlQWNjb3VudFRvZ2dsZSghY3JlYXRlQWNjb3VudFRvZ2dsZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVMb2dpbigpIHtcbiAgICBzZXRDcmVhdGVBY2NvdW50VG9nZ2xlKGZhbHNlKTtcbiAgICBzZXRMb2dpblRvZ2dsZSghbG9naW5Ub2dnbGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWR2YW5jZUNyZWF0ZUFjY291bnQoKSB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBwcml2YXRlS2V5ID0gYXdhaXQgcHJvcHMuRVZUV3JhcHBlci5yYW5kb21Qcml2YXRlS2V5KCk7XG4gICAgICBwcm9wcy5vbkxvZ2luKHByaXZhdGVLZXkpO1xuICAgICAgc2V0UHJpdmF0ZUtleShwcml2YXRlS2V5KTtcbiAgICAgIHNldENyZWF0ZUFjY291bnRQYWdlKDIpO1xuICAgIH0pKCk7XG5cbiAgICBzZXRDcmVhdGVBY2NvdW50UGFnZSgxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcbiAgICBjb3B5KHByaXZhdGVLZXkpO1xuICAgIHNldENvcGllZCh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDcmVhdGVBY2NvdW50UGFnZSgpIHtcbiAgICBpZiAoY3JlYXRlQWNjb3VudFBhZ2UgPT09IDApIHtcbiAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDM+Q3JlYXRlIEFjY291bnQgIDxhIG9uQ2xpY2s9e3RvZ2dsZUNyZWF0ZUFjY291bnR9IGNsYXNzTmFtZT1cInB1bGxSaWdodCBjbG9zZVwiPltYXTwvYT48L2gzPlxuICAgICAgICA8cD5UaGVyZSBpcyBhY3R1YWxseSBubyBzdWNoIHRoaW5nIGFzIGNyZWF0aW5nIGFuIGFjY291bnQhIFRoYXQncyB0aGUgYmVhdXR5XG4gICAgICAgIG9mIHRoZSBibG9ja2NoYWluLiBBbGwgeW91IG5lZWQgaXMgYSBwcml2YXRlIGtleS4gQW5kIHRoZSBzZXJ2ZXJzIHdpbGwgbmV2ZXJcbiAgICAgICAgc2VlIHRoYXQgcHJpdmF0ZSBrZXkuPC9wPlxuXG4gICAgICAgIDxwPk5vdywgbm9ybWFsbHkgdGhlcmUgaXMgYSB3YWxsZXQgYXBwIHRoYXQga2VlcHMgdGhlc2Uga2V5cyBzYWZlIGZvciB5b3UuXG4gICAgICAgIEhvd2V2ZXIsIEkndmUgaGFkIHNvbWUgdHJvdWJsZSBpbnRlZ3JhdGluZ1xuICAgICAgICBFdmVyaXRva2VuJ3MgYXBwIChjYWxsZWQgZXZlcmlTaWduZXIpLiBTbyBmb3Igbm93LCBwcml2YXRlIGtleSBjcmVhdGlvblxuICAgICAgICBpcyBkb25lIGJ5IGV2ZXJpUGl4ZWwgaXRzZWxmLjwvcD5cblxuICAgICAgICA8cD5XaGlsZSBldmVyaVBpeGVsIGlzIGEgcHJvdG90eXBlLCB0aGlzIHNob3VsZCBiZSBvay4gQnV0IEkgZG8gaW50ZW5kIHRvIHVzZVxuICAgICAgICBzb21ldGhpbmcgbGlrZSBldmVyaVNpZ25lciBldmVudHVhbGx5IHRvIGdpdmUgeW91IG1vcmUgY29uZmlkZW5jZSB0aGF0IHlvdXJcbiAgICAgICAgcHJpdmF0ZSBrZXkgaXMgc2FmZS48L3A+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5XCIgb25DbGljaz17YWR2YW5jZUNyZWF0ZUFjY291bnR9PkNvbnRpbnVlIGFuZCBtYWtlIG1lIGEgcHJpdmF0ZSBrZXkhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICB9IGVsc2UgaWYgKGNyZWF0ZUFjY291bnRQYWdlID09PSAxKXtcbiAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDM+Q3JlYXRpbmcgUHJpdmF0ZSBLZXk8L2gzPlxuICAgICAgICA8cD5QbGVhc2Ugd2FpdCBhIG1vbWVudDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIH0gZWxzZSBpZiAoY3JlYXRlQWNjb3VudFBhZ2UgPT09IDIpIHtcbiAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDM+UHJpdmF0ZSBLZXkgQ3JlYXRlZCEgPGEgb25DbGljaz17dG9nZ2xlQ3JlYXRlQWNjb3VudH0gY2xhc3NOYW1lPVwicHVsbFJpZ2h0IGNsb3NlXCI+W1hdPC9hPjwvaDM+XG4gICAgICAgIDxwPllvdSBhcmUgbm93IGxvZ2dlZCBpbi48L3A+XG4gICAgICAgIDxwPlBsZWFzZSBjb3B5IHlvdXIgcHJpdmF0ZSBrZXkgdG8gdGhlIGNsaXBib2FyZCBhbmQgc2F2ZSBpdCBzb21ld2hlcmUuPC9wPlxuICAgICAgICB7XG4gICAgICAgICAgY29waWVkID8gXCJDb3BpZWQgdG8gY2xpcGJvYXJkIVwiIDogPGJ1dHRvbiBjbGFzcz1cInByaW1hcnlcIiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PkNvcHkgeW91ciBwcml2YXRlIGtleSB0byB0aGUgY2xpcGJvYXJkLjwvYnV0dG9uPlxuICAgICAgICB9XG5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByaXZhdGVLZXlDaGFuZ2UoZSkge1xuICAgIHNldFByaXZhdGVLZXkoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tbWl0UHJpdmF0ZUtleShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvZ2luVG9nZ2xlKGZhbHNlKTtcbiAgICBwcm9wcy5vbkxvZ2luKHByaXZhdGVLZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIHNldFByaXZhdGVLZXkoXCJcIik7XG4gICAgdmFyIGMgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxvZ291dD8gTWFrZSBzdXJlIHlvdSBzYXZlZCB5b3VyIHByaXZhdGUga2V5IHNvbWV3aGVyZSwgdGhlcmUncyBubyB3YXkgdG8gcmVjb3ZlciBpdC5cIilcbiAgICBpZiAoYykge1xuICAgICAgcHJvcHMub25Mb2dvdXQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICA8aDE+ZXZlcmk8c3Bhbj5QaXhlbDwvc3Bhbj48L2gxPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyIHB1bGxSaWdodFwiPlxuXG5cbiAgICAgIHtcbiAgICAgICAgcHJvcHMubG9nZ2VkSW4gP1xuICAgICAgICA8ZGl2PkxvZ2dlZCBpbiBhczoge3Byb3BzLmxvZ2dlZElufSB8IDxhIG9uQ2xpY2s9e2xvZ291dH0+TG9nb3V0PC9hPjwvZGl2PlxuICAgICAgICA6XG4gICAgICAgIDxkaXY+PGEgb25DbGljaz17dG9nZ2xlTG9naW59PkxvZ2luPC9hPiB8IDxhIG9uQ2xpY2s9e3RvZ2dsZUNyZWF0ZUFjY291bnR9PkNyZWF0ZSBBY2NvdW50PC9hPjwvZGl2PlxuICAgICAgfVxuXG4gICAgICB7XG4gICAgICAgIGxvZ2luVG9nZ2xlID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZUFjY291bnQgb3ZlcmxheVdpbmRvd1wiPlxuICAgICAgICAgICAgPGgzPkxvZ2luIDxhIG9uQ2xpY2s9e3RvZ2dsZUxvZ2lufSBjbGFzc05hbWU9XCJwdWxsUmlnaHQgY2xvc2VcIj5bWF08L2E+PC9oMz5cbiAgICAgICAgICAgIDxsYWJlbD5Qcml2YXRlIEtleTwvbGFiZWw+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPGlucHV0IGF1dG9Gb2N1cyB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcml2YXRlS2V5fSBvbkNoYW5nZT17aGFuZGxlUHJpdmF0ZUtleUNoYW5nZX0vPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnlcIiBvbkNsaWNrPXtjb21taXRQcml2YXRlS2V5fT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgICB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAge1xuICAgICAgICBjcmVhdGVBY2NvdW50VG9nZ2xlID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZUFjY291bnQgb3ZlcmxheVdpbmRvd1wiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93Q3JlYXRlQWNjb3VudFBhZ2UoY3JlYXRlQWNjb3VudFBhZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgICB1bmRlZmluZWRcbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgY29sb3I6ICM4NTg1ODU7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBoMSBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxufVxuIl19 */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/components/header.js */",
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.9d29bfb6e9a056f8dbbf.hot-update.js.map