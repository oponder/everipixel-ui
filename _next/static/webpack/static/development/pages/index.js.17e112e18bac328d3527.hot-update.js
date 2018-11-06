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
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Create Account  ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: toggleCreateAccount,
        className: "pullRight close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "[X]")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "There is actually no such thing as creating an account! That's the beauty of the blockchain. All you need is a private key. And the servers will never see that private key."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Now, normally there is a wallet app that keeps these keys safe for you. However, I've had some trouble integrating Everitoken's app (called everiSigner). So for now, private key creation is done by everiPixel itself."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "While everiPixel is a prototype, this should be ok. But I do intend to use something like everiSigner eventually to give you more confidence that your private key is safe."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "primary",
        onClick: advanceCreateAccount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Continue and make me a private key!"));
    } else if (createAccountPage === 1) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Creating Private Key"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Please wait a moment"));
    } else if (createAccountPage === 2) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Private Key Created! ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: toggleCreateAccount,
        className: "pullRight close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "[X]")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "You are now logged in."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Please copy your private key to the clipboard and save it somewhere."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        class: "primary",
        onClick: copyToClipboard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "everi", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Pixel")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597" + " " + "user pullRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, props.loggedIn ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Logged in as: ", props.loggedIn, " | ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: logout,
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Logout")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: toggleLogin,
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Login"), " | ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: toggleCreateAccount,
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Create Account")), loginToggle ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597" + " " + "createAccount overlayWindow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Login ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: toggleLogin,
    className: "jsx-3096650597" + " " + "pullRight close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "[X]")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Private Key"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "jsx-3096650597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
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
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: commitPrivateKey,
    className: "jsx-3096650597" + " " + "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Save"))) : undefined, createAccountToggle ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3096650597" + " " + "createAccount overlayWindow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, showCreateAccountPage(createAccountPage)) : undefined), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3096650597",
    css: "h1.jsx-3096650597{color:#858585;font-size:24px;margin:0;display:inline;}h1.jsx-3096650597 span.jsx-3096650597{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJTyxBQUd5QixBQVFqQixXQUFDLEdBUGlCLGVBQ04sU0FDTSxlQUNqQiIsImZpbGUiOiIvVXNlcnMvb3BvbmRlci9jb2RlL29saXZlcl9wb25kZXIvZXZlcmlwaXhlbC9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICBsZXQgW3ByaXZhdGVLZXksIHNldFByaXZhdGVLZXldID0gdXNlU3RhdGUoXCJcIik7XG4gIGxldCBbY3JlYXRlQWNjb3VudFRvZ2dsZSwgc2V0Q3JlYXRlQWNjb3VudFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbY3JlYXRlQWNjb3VudFBhZ2UsIHNldENyZWF0ZUFjY291bnRQYWdlXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW2xvZ2luVG9nZ2xlLCBzZXRMb2dpblRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUNyZWF0ZUFjY291bnQoKSB7XG4gICAgc2V0TG9naW5Ub2dnbGUoZmFsc2UpO1xuICAgIHNldENyZWF0ZUFjY291bnRQYWdlKDApO1xuICAgIHNldENyZWF0ZUFjY291bnRUb2dnbGUoIWNyZWF0ZUFjY291bnRUb2dnbGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTG9naW4oKSB7XG4gICAgc2V0Q3JlYXRlQWNjb3VudFRvZ2dsZShmYWxzZSk7XG4gICAgc2V0TG9naW5Ub2dnbGUoIWxvZ2luVG9nZ2xlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkdmFuY2VDcmVhdGVBY2NvdW50KCkge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgcHJpdmF0ZUtleSA9IGF3YWl0IHByb3BzLkVWVFdyYXBwZXIucmFuZG9tUHJpdmF0ZUtleSgpO1xuICAgICAgcHJvcHMub25Mb2dpbihwcml2YXRlS2V5KTtcbiAgICAgIHNldFByaXZhdGVLZXkocHJpdmF0ZUtleSk7XG4gICAgICBzZXRDcmVhdGVBY2NvdW50UGFnZSgyKTtcbiAgICB9KSgpO1xuXG4gICAgc2V0Q3JlYXRlQWNjb3VudFBhZ2UoMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoKSB7XG4gICAgY29weShwcml2YXRlS2V5KTtcbiAgICBzZXRDb3BpZWQodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Q3JlYXRlQWNjb3VudFBhZ2UoKSB7XG4gICAgaWYgKGNyZWF0ZUFjY291bnRQYWdlID09PSAwKSB7XG4gICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGgzPkNyZWF0ZSBBY2NvdW50ICA8YSBvbkNsaWNrPXt0b2dnbGVDcmVhdGVBY2NvdW50fSBjbGFzc05hbWU9XCJwdWxsUmlnaHQgY2xvc2VcIj5bWF08L2E+PC9oMz5cbiAgICAgICAgPHA+VGhlcmUgaXMgYWN0dWFsbHkgbm8gc3VjaCB0aGluZyBhcyBjcmVhdGluZyBhbiBhY2NvdW50ISBUaGF0J3MgdGhlIGJlYXV0eVxuICAgICAgICBvZiB0aGUgYmxvY2tjaGFpbi4gQWxsIHlvdSBuZWVkIGlzIGEgcHJpdmF0ZSBrZXkuIEFuZCB0aGUgc2VydmVycyB3aWxsIG5ldmVyXG4gICAgICAgIHNlZSB0aGF0IHByaXZhdGUga2V5LjwvcD5cblxuICAgICAgICA8cD5Ob3csIG5vcm1hbGx5IHRoZXJlIGlzIGEgd2FsbGV0IGFwcCB0aGF0IGtlZXBzIHRoZXNlIGtleXMgc2FmZSBmb3IgeW91LlxuICAgICAgICBIb3dldmVyLCBJJ3ZlIGhhZCBzb21lIHRyb3VibGUgaW50ZWdyYXRpbmdcbiAgICAgICAgRXZlcml0b2tlbidzIGFwcCAoY2FsbGVkIGV2ZXJpU2lnbmVyKS4gU28gZm9yIG5vdywgcHJpdmF0ZSBrZXkgY3JlYXRpb25cbiAgICAgICAgaXMgZG9uZSBieSBldmVyaVBpeGVsIGl0c2VsZi48L3A+XG5cbiAgICAgICAgPHA+V2hpbGUgZXZlcmlQaXhlbCBpcyBhIHByb3RvdHlwZSwgdGhpcyBzaG91bGQgYmUgb2suIEJ1dCBJIGRvIGludGVuZCB0byB1c2VcbiAgICAgICAgc29tZXRoaW5nIGxpa2UgZXZlcmlTaWduZXIgZXZlbnR1YWxseSB0byBnaXZlIHlvdSBtb3JlIGNvbmZpZGVuY2UgdGhhdCB5b3VyXG4gICAgICAgIHByaXZhdGUga2V5IGlzIHNhZmUuPC9wPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2FkdmFuY2VDcmVhdGVBY2NvdW50fT5Db250aW51ZSBhbmQgbWFrZSBtZSBhIHByaXZhdGUga2V5ITwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgfSBlbHNlIGlmIChjcmVhdGVBY2NvdW50UGFnZSA9PT0gMSl7XG4gICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGgzPkNyZWF0aW5nIFByaXZhdGUgS2V5PC9oMz5cbiAgICAgICAgPHA+UGxlYXNlIHdhaXQgYSBtb21lbnQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICB9IGVsc2UgaWYgKGNyZWF0ZUFjY291bnRQYWdlID09PSAyKSB7XG4gICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGgzPlByaXZhdGUgS2V5IENyZWF0ZWQhIDxhIG9uQ2xpY2s9e3RvZ2dsZUNyZWF0ZUFjY291bnR9IGNsYXNzTmFtZT1cInB1bGxSaWdodCBjbG9zZVwiPltYXTwvYT48L2gzPlxuICAgICAgICA8cD5Zb3UgYXJlIG5vdyBsb2dnZWQgaW4uPC9wPlxuICAgICAgICA8cD5QbGVhc2UgY29weSB5b3VyIHByaXZhdGUga2V5IHRvIHRoZSBjbGlwYm9hcmQgYW5kIHNhdmUgaXQgc29tZXdoZXJlLjwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnlcIiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PkNvcHkgeW91ciBwcml2YXRlIGtleSB0byB0aGUgY2xpcGJvYXJkLjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJpdmF0ZUtleUNoYW5nZShlKSB7XG4gICAgc2V0UHJpdmF0ZUtleShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21taXRQcml2YXRlS2V5KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9naW5Ub2dnbGUoZmFsc2UpO1xuICAgIHByb3BzLm9uTG9naW4ocHJpdmF0ZUtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgc2V0UHJpdmF0ZUtleShcIlwiKTtcbiAgICB2YXIgYyA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbG9nb3V0PyBNYWtlIHN1cmUgeW91IHNhdmVkIHlvdXIgcHJpdmF0ZSBrZXkgc29tZXdoZXJlLCB0aGVyZSdzIG5vIHdheSB0byByZWNvdmVyIGl0LlwiKVxuICAgIGlmIChjKSB7XG4gICAgICBwcm9wcy5vbkxvZ291dCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgIDxoMT5ldmVyaTxzcGFuPlBpeGVsPC9zcGFuPjwvaDE+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXIgcHVsbFJpZ2h0XCI+XG5cblxuICAgICAge1xuICAgICAgICBwcm9wcy5sb2dnZWRJbiA/XG4gICAgICAgIDxkaXY+TG9nZ2VkIGluIGFzOiB7cHJvcHMubG9nZ2VkSW59IHwgPGEgb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L2E+PC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgPGRpdj48YSBvbkNsaWNrPXt0b2dnbGVMb2dpbn0+TG9naW48L2E+IHwgPGEgb25DbGljaz17dG9nZ2xlQ3JlYXRlQWNjb3VudH0+Q3JlYXRlIEFjY291bnQ8L2E+PC9kaXY+XG4gICAgICB9XG5cbiAgICAgIHtcbiAgICAgICAgbG9naW5Ub2dnbGUgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlQWNjb3VudCBvdmVybGF5V2luZG93XCI+XG4gICAgICAgICAgICA8aDM+TG9naW4gPGEgb25DbGljaz17dG9nZ2xlTG9naW59IGNsYXNzTmFtZT1cInB1bGxSaWdodCBjbG9zZVwiPltYXTwvYT48L2gzPlxuICAgICAgICAgICAgPGxhYmVsPlByaXZhdGUgS2V5PC9sYWJlbD5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8aW5wdXQgYXV0b0ZvY3VzIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ByaXZhdGVLZXl9IG9uQ2hhbmdlPXtoYW5kbGVQcml2YXRlS2V5Q2hhbmdlfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NvbW1pdFByaXZhdGVLZXl9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICB7XG4gICAgICAgIGNyZWF0ZUFjY291bnRUb2dnbGUgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlQWNjb3VudCBvdmVybGF5V2luZG93XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3dDcmVhdGVBY2NvdW50UGFnZShjcmVhdGVBY2NvdW50UGFnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgfVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBjb2xvcjogIzg1ODU4NTtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmXG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG59XG4iXX0= */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/components/header.js */",
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.17e112e18bac328d3527.hot-update.js.map