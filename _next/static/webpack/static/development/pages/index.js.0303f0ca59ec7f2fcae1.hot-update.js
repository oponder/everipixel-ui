webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: Index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/canvas */ "./components/canvas.js");
/* harmony import */ var pizzicato__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pizzicato */ "./node_modules/pizzicato/distr/Pizzicato.min.js");
/* harmony import */ var pizzicato__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pizzicato__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _lib_evt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/evt */ "./lib/evt.js");

var _jsxFileName = "/Users/oponder/code/oliver_ponder/everipixel/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var feathers = __webpack_require__(/*! @feathersjs/feathers */ "./node_modules/@feathersjs/feathers/lib/index.js");

var socketio = __webpack_require__(/*! @feathersjs/socketio-client */ "./node_modules/@feathersjs/socketio-client/lib/index.js");

var io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

var WIDTH = 50;
var HEIGHT = 50;
var SCALE = 10;
var SERVERURL = "http://35.240.173.157:8000";
var EVTIP = "35.240.176.101";
var PALETTE = ['#FFFFFF', '#E4E4E4', '#888888', '#222222', '#FFA7D1', '#E50000', '#E59500', '#A06A42', '#E5D900', '#94E044', '#02BE01', '#00D3DD', '#0083C7', '#0000EA', '#CF6EE4', '#820080'];

var truncate = function truncate(fullStr, strLen, separator) {
  if (!fullStr) {
    return undefined;
  }

  ;
  if (fullStr.length <= strLen) return fullStr;
  separator = separator || '...';
  var sepLen = separator.length,
      charsToShow = strLen - sepLen,
      frontChars = Math.ceil(charsToShow / 2),
      backChars = Math.floor(charsToShow / 2);
  return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEsc", function (event) {
      if (event.keyCode === 27) {
        _this.clearSelection();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearSelection", function () {
      _this.state.selection.selected = false;
      _this.pixels = undefined; //

      _this.setState({
        selection: {},
        currentMousePosition: {
          x: 0,
          y: 0,
          id: 0
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setMousePos", function (pixel) {
      _this.setState({
        currentMousePosition: pixel
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectPixel",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pixel) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.dragStopSound.play();

                _this.state.selection.selected = false;

                _this.setState({
                  selection: pixel,
                  selectedColor: pixel.color
                });

                pixel.selected = true;
                _context.next = 6;
                return _this.refreshPixel(pixel);

              case 6:
                _this.pixels = undefined; // force redraw

                _this.setState({
                  pixels: _this.state.pixels
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "refreshPixel",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(pixel) {
        var _ref3, err, response, colorMetas;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.EVTWrapper.getToken("pixeltoken", pixel.id.toString());

              case 2:
                _ref3 = _context2.sent;
                err = _ref3.err;
                response = _ref3.response;

                if (err != null && err.name === "tokendb_key_not_found") {
                  pixel.available = true;
                  pixel.color = "#000";
                } else if (err === null) {
                  colorMetas = response.metas.filter(function (meta) {
                    return meta.key.startsWith("color");
                  }).sort(function (a, b) {
                    var bN = parseInt(b.key.replace("color", ""));
                    var aN = parseInt(a.key.replace("color", ""));

                    if (isNaN(bN)) {
                      return -1;
                    }

                    return bN - aN;
                  });
                  pixel.owner = response.owner[0];

                  if (colorMetas[0]) {
                    pixel.color = colorMetas[0].value;
                  }
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initializePixels", function () {
      var pixels = [];

      for (var y = 0; y < HEIGHT; y += 1) {
        for (var x = 0; x < WIDTH; x += 1) {
          var pixel = {
            x: x,
            y: y,
            color: "#000",
            id: (y * WIDTH + x).toString()
          };
          pixels.push(pixel);
        }
      }

      return pixels;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "claimPixel",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(pixel) {
        var response, body;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch(SERVERURL + '/claim', {
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    "id": pixel.id,
                    "owner": _this.EVTWrapper.publicKey
                  }),
                  method: "POST"
                });

              case 2:
                response = _context3.sent;
                _context3.next = 5;
                return response.text();

              case 5:
                body = _context3.sent;

                if (!(response.status === 201)) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 9;
                return _this.refreshPixel(pixel);

              case 9:
                _this.pixels = undefined; // force redraw

                _this.setState({
                  pixels: _this.state.pixels
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectColor",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(color) {
        var _this$commitColor, err, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this.state.selection.color = color;
                _this.pixels = undefined; // force redraw

                _this.setState({
                  selectedColor: color
                });

                _this$commitColor = _this.commitColor(color, _this.state.selection.id), err = _this$commitColor.err, response = _this$commitColor.response;

                if (err !== null) {// Unable to set the color.
                }

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "commitColor",
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(color, pixelID) {
        var _ref7, err, response, colorMetas, nextColorIndex, _ref8;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this.EVTWrapper.getToken("pixeltoken", pixelID);

              case 2:
                _ref7 = _context5.sent;
                err = _ref7.err;
                response = _ref7.response;

                if (!(err !== null)) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", {
                  err: err,
                  response: response
                });

              case 7:
                colorMetas = response.metas.filter(function (meta) {
                  return meta.key.startsWith("color");
                }).map(function (meta) {
                  return parseInt(meta.key.replace("color", ""));
                }).filter(function (index) {
                  return !isNaN(index);
                }).sort(function (a, b) {
                  return b - a;
                });
                nextColorIndex = isNaN(colorMetas[0] + 1) ? 0 : colorMetas[0] + 1;
                _context5.next = 11;
                return _this.EVTWrapper.addMeta("pixeltoken", _this.state.selection.id, 'color' + nextColorIndex, color);

              case 11:
                _ref8 = _context5.sent;
                err = _ref8.err;
                response = _ref8.response;

                if (err != null) {} // Error setting meta.
                // Let hte server refresh it's state too.


                _context5.next = 17;
                return fetch(SERVERURL + '/board/' + pixelID.toString(), {
                  headers: {
                    "Content-Type": "application/json"
                  },
                  method: "GET"
                });

              case 17:
                return _context5.abrupt("return", {
                  err: err,
                  response: response
                });

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLogin", function (privateKey) {
      _this.EVTWrapper = new _lib_evt__WEBPACK_IMPORTED_MODULE_7__["default"]({
        privateKey: privateKey
      });
      localStorage.setItem('login', privateKey);

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLogout", function () {
      _this.EVTWrapper = new _lib_evt__WEBPACK_IMPORTED_MODULE_7__["default"]({});
      localStorage.removeItem('login');

      _this.forceUpdate();
    });

    if (typeof window !== 'undefined') {
      _this.dragStartSound = new pizzicato__WEBPACK_IMPORTED_MODULE_5___default.a.Sound("/static/dragstart.mp3");
      _this.draggingSound = new pizzicato__WEBPACK_IMPORTED_MODULE_5___default.a.Sound("/static/dragging.mp3");
      _this.dragStopSound = new pizzicato__WEBPACK_IMPORTED_MODULE_5___default.a.Sound("/static/dragend.mp3");
      _this.dragFailSound = new pizzicato__WEBPACK_IMPORTED_MODULE_5___default.a.Sound("/static/dragfail.mp3");
    }

    _this.EVTWrapper = new _lib_evt__WEBPACK_IMPORTED_MODULE_7__["default"]({});
    _this.state = {
      dragging: false,
      selection: {},
      currentMousePosition: {
        x: 0,
        y: 0,
        id: 0
      },
      pixels: _this.initializePixels(),
      selectedColor: ''
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener("keydown", this.onEsc, false);
      var privateKey = localStorage.getItem('login');

      if (privateKey) {
        this.EVTWrapper = new _lib_evt__WEBPACK_IMPORTED_MODULE_7__["default"]({
          privateKey: privateKey
        });
      }

      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response, body;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return fetch(SERVERURL + '/board', {
                  headers: {
                    "Content-Type": "application/json"
                  },
                  method: "GET"
                });

              case 2:
                response = _context6.sent;
                _context6.next = 5;
                return response.text();

              case 5:
                body = _context6.sent;
                body = JSON.parse(body);
                body.board.map(function (pixel, i) {
                  if (pixel) {
                    _this2.state.pixels[i].color = pixel;
                  } else {
                    _this2.state.pixels[i].color = "#000";
                  }
                });
                _this2.pixels = undefined;

                _this2.forceUpdate();

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }))();

      var socket = io(SERVERURL);
      var app = feathers();
      app.configure(socketio(socket));
      app.service('board').on('status', function (message) {
        _this2.state.pixels[message.id].color = message.color;
        _this2.pixels = undefined;

        _this2.forceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.onEsc, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      this.pixels = this.pixels || this.state.pixels.map(function (pixel) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: 'pixel' + (pixel.selected ? ' selected' : ''),
          key: pixel.id,
          style: {
            backgroundColor: pixel.color,
            width: SCALE + "px",
            height: SCALE + "px",
            float: "left",
            color: pixel.color,
            fontSize: "14px"
          },
          onMouseEnter: _this3.setMousePos.bind(_this3, pixel),
          onClick: _this3.selectPixel.bind(_this3, pixel),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onLogin: this.handleLogin,
        onLogout: this.handleLogout,
        loggedIn: truncate(this.EVTWrapper.publicKey, 25, "..."),
        EVTWrapper: this.EVTWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1197919809", [SCALE * WIDTH]]]) + " " + "pixels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, this.pixels, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1197919809",
        css: ".pixels.__jsx-style-dynamic-selector{float:left;margin-right:10px;width:".concat(SCALE * WIDTH, "px;border:1px solid #222;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZTYSxBQUc0QixXQUNPLGtCQUNtQixxQ0FDZixzQkFDSCxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL29wb25kZXIvY29kZS9vbGl2ZXJfcG9uZGVyL2V2ZXJpcGl4ZWwvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tICcuLi9jb21wb25lbnRzL2NhbnZhcyc7XG5pbXBvcnQgUGl6emljYXRvICBmcm9tICdwaXp6aWNhdG8nO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkJztcbmltcG9ydCBFVlRXcmFwcGVyIGZyb20gJy4uL2xpYi9ldnQnO1xuXG5jb25zdCBmZWF0aGVycyA9IHJlcXVpcmUoJ0BmZWF0aGVyc2pzL2ZlYXRoZXJzJyk7XG5jb25zdCBzb2NrZXRpbyA9IHJlcXVpcmUoJ0BmZWF0aGVyc2pzL3NvY2tldGlvLWNsaWVudCcpO1xuY29uc3QgaW8gPSByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50Jyk7XG5cbmNvbnN0IFdJRFRIID0gNTA7XG5jb25zdCBIRUlHSFQgPSA1MDtcbmNvbnN0IFNDQUxFID0gMTA7XG5cbmNvbnN0IFNFUlZFUlVSTCA9IFwiaHR0cDovLzM1LjI0MC4xNzMuMTU3OjgwMDBcIlxuY29uc3QgRVZUSVAgPSBcIjM1LjI0MC4xNzYuMTAxXCJcblxuY29uc3QgUEFMRVRURSA9IFtcbiAgICAgICAgICAgICAgICAgJyNGRkZGRkYnLCAnI0U0RTRFNCcsICcjODg4ODg4JywgJyMyMjIyMjInLFxuICAgICAgICAgICAgICAgICAnI0ZGQTdEMScsICcjRTUwMDAwJywgJyNFNTk1MDAnLCAnI0EwNkE0MicsXG4gICAgICAgICAgICAgICAgICcjRTVEOTAwJywgJyM5NEUwNDQnLCAnIzAyQkUwMScsICcjMDBEM0REJyxcbiAgICAgICAgICAgICAgICAgJyMwMDgzQzcnLCAnIzAwMDBFQScsICcjQ0Y2RUU0JywgJyM4MjAwODAnLFxuICAgICAgICAgICAgICAgIF07XG5cbnZhciB0cnVuY2F0ZSA9IGZ1bmN0aW9uIChmdWxsU3RyLCBzdHJMZW4sIHNlcGFyYXRvcikge1xuICBpZiAoIWZ1bGxTdHIpIHsgcmV0dXJuIHVuZGVmaW5lZCB9O1xuICBpZiAoZnVsbFN0ci5sZW5ndGggPD0gc3RyTGVuKSByZXR1cm4gZnVsbFN0cjtcblxuICBzZXBhcmF0b3IgPSBzZXBhcmF0b3IgfHwgJy4uLic7XG5cbiAgdmFyIHNlcExlbiA9IHNlcGFyYXRvci5sZW5ndGgsXG4gICAgICBjaGFyc1RvU2hvdyA9IHN0ckxlbiAtIHNlcExlbixcbiAgICAgIGZyb250Q2hhcnMgPSBNYXRoLmNlaWwoY2hhcnNUb1Nob3cvMiksXG4gICAgICBiYWNrQ2hhcnMgPSBNYXRoLmZsb29yKGNoYXJzVG9TaG93LzIpO1xuXG4gIHJldHVybiBmdWxsU3RyLnN1YnN0cigwLCBmcm9udENoYXJzKSArXG4gICAgICAgICBzZXBhcmF0b3IgK1xuICAgICAgICAgZnVsbFN0ci5zdWJzdHIoZnVsbFN0ci5sZW5ndGggLSBiYWNrQ2hhcnMpO1xufTtcblxuZXhwb3J0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0U291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnc3RhcnQubXAzXCIpO1xuICAgICAgdGhpcy5kcmFnZ2luZ1NvdW5kID0gbmV3IFBpenppY2F0by5Tb3VuZChcIi9zdGF0aWMvZHJhZ2dpbmcubXAzXCIpO1xuICAgICAgdGhpcy5kcmFnU3RvcFNvdW5kID0gbmV3IFBpenppY2F0by5Tb3VuZChcIi9zdGF0aWMvZHJhZ2VuZC5tcDNcIik7XG4gICAgICB0aGlzLmRyYWdGYWlsU291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnZmFpbC5tcDNcIik7XG4gICAgfVxuXG4gICAgdGhpcy5FVlRXcmFwcGVyID0gbmV3IEVWVFdyYXBwZXIoe30pO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIHNlbGVjdGlvbjoge30sXG4gICAgICBjdXJyZW50TW91c2VQb3NpdGlvbjoge3g6IDAsIHk6IDAsIGlkOiAwfSxcbiAgICAgIHBpeGVsczogdGhpcy5pbml0aWFsaXplUGl4ZWxzKCksXG4gICAgICBzZWxlY3RlZENvbG9yOiAnJyxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Fc2MsIGZhbHNlKTtcbiAgICBsZXQgcHJpdmF0ZUtleSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9naW4nKTtcblxuICAgIGlmIChwcml2YXRlS2V5KSB7XG4gICAgICB0aGlzLkVWVFdyYXBwZXIgPSBuZXcgRVZUV3JhcHBlcih7cHJpdmF0ZUtleX0pO1xuICAgIH1cblxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChTRVJWRVJVUkwgKyAnL2JvYXJkJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgfSk7XG5cbiAgICAgIGxldCBib2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgYm9keSA9IEpTT04ucGFyc2UoYm9keSk7XG5cbiAgICAgIGJvZHkuYm9hcmQubWFwKChwaXhlbCwgaSkgPT4ge1xuICAgICAgICBpZiAocGl4ZWwpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnBpeGVsc1tpXS5jb2xvciA9IHBpeGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhdGUucGl4ZWxzW2ldLmNvbG9yID0gXCIjMDAwXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnBpeGVscyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcblxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBzb2NrZXQgPSBpbyhTRVJWRVJVUkwpO1xuICAgIGNvbnN0IGFwcCA9IGZlYXRoZXJzKCk7XG4gICAgYXBwLmNvbmZpZ3VyZShzb2NrZXRpbyhzb2NrZXQpKTtcblxuICAgIGFwcC5zZXJ2aWNlKCdib2FyZCcpLm9uKCdzdGF0dXMnLCBtZXNzYWdlID0+IHtcbiAgICAgIHRoaXMuc3RhdGUucGl4ZWxzW21lc3NhZ2UuaWRdLmNvbG9yID0gbWVzc2FnZS5jb2xvcjtcbiAgICAgIHRoaXMucGl4ZWxzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uRXNjLCBmYWxzZSk7XG4gIH1cblxuICBvbkVzYyA9IChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnBpeGVscyA9IHVuZGVmaW5lZDsgLy9cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGlvbjoge30sXG4gICAgICBjdXJyZW50TW91c2VQb3NpdGlvbjoge3g6IDAsIHk6IDAsIGlkOiAwfSxcbiAgICB9KVxuICB9XG5cbiAgc2V0TW91c2VQb3MgPSAocGl4ZWwpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRNb3VzZVBvc2l0aW9uOiBwaXhlbFxuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0UGl4ZWwgPSBhc3luYyAocGl4ZWwpID0+IHtcbiAgICB0aGlzLmRyYWdTdG9wU291bmQucGxheSgpO1xuXG4gICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24uc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0aW9uOiBwaXhlbCxcbiAgICAgIHNlbGVjdGVkQ29sb3I6IHBpeGVsLmNvbG9yXG4gICAgfSlcblxuICAgIHBpeGVsLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGF3YWl0IHRoaXMucmVmcmVzaFBpeGVsKHBpeGVsKTtcblxuICAgIHRoaXMucGl4ZWxzID0gdW5kZWZpbmVkOyAvLyBmb3JjZSByZWRyYXdcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGl4ZWxzOiB0aGlzLnN0YXRlLnBpeGVsc1xuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUGl4ZWwgPSBhc3luYyAocGl4ZWwpID0+IHtcbiAgICB2YXIge2VyciwgcmVzcG9uc2V9ID0gYXdhaXQgdGhpcy5FVlRXcmFwcGVyLmdldFRva2VuKFwicGl4ZWx0b2tlblwiLCBwaXhlbC5pZC50b1N0cmluZygpKTtcbiAgICBpZiAoZXJyICE9IG51bGwgJiYgZXJyLm5hbWUgPT09IFwidG9rZW5kYl9rZXlfbm90X2ZvdW5kXCIpIHtcbiAgICAgIHBpeGVsLmF2YWlsYWJsZSA9IHRydWU7XG4gICAgICBwaXhlbC5jb2xvciA9IFwiIzAwMFwiO1xuICAgIH0gZWxzZSBpZiAoZXJyID09PSBudWxsKSB7XG4gICAgICBsZXQgY29sb3JNZXRhcyA9IHJlc3BvbnNlLm1ldGFzXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihtZXRhID0+IG1ldGEua2V5LnN0YXJ0c1dpdGgoXCJjb2xvclwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJOID0gcGFyc2VJbnQoYi5rZXkucmVwbGFjZShcImNvbG9yXCIsIFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhTiA9IHBhcnNlSW50KGEua2V5LnJlcGxhY2UoXCJjb2xvclwiLCBcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oYk4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiTiAtIGFOO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICBwaXhlbC5vd25lciA9IHJlc3BvbnNlLm93bmVyWzBdO1xuXG4gICAgICBpZiAoY29sb3JNZXRhc1swXSkge1xuICAgICAgICBwaXhlbC5jb2xvciA9IGNvbG9yTWV0YXNbMF0udmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGl6ZVBpeGVscyA9ICgpID0+IHtcbiAgICB2YXIgcGl4ZWxzID0gW107XG5cbiAgICBmb3IodmFyIHkgPSAwOyB5IDwgSEVJR0hUOyB5ICs9IDEpIHtcbiAgICAgIGZvcih2YXIgeCA9IDA7IHggPCBXSURUSDsgeCArPSAxKSB7XG4gICAgICAgIHZhciBwaXhlbCA9IHt4LCB5LCBjb2xvcjogXCIjMDAwXCIsIGlkOiAoKHkqV0lEVEgpK3gpLnRvU3RyaW5nKCkgfTtcbiAgICAgICAgcGl4ZWxzLnB1c2gocGl4ZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwaXhlbHM7XG4gIH1cblxuICBjbGFpbVBpeGVsID0gYXN5bmMgKHBpeGVsKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goU0VSVkVSVVJMICsgJy9jbGFpbScsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XCJpZFwiOiBwaXhlbC5pZCwgXCJvd25lclwiOiB0aGlzLkVWVFdyYXBwZXIucHVibGljS2V5fSksXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgfSk7XG5cbiAgICBsZXQgYm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoUGl4ZWwocGl4ZWwpO1xuXG4gICAgICB0aGlzLnBpeGVscyA9IHVuZGVmaW5lZDsgLy8gZm9yY2UgcmVkcmF3XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwaXhlbHM6IHRoaXMuc3RhdGUucGl4ZWxzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdENvbG9yID0gYXN5bmMgKGNvbG9yKSA9PiB7XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24uY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnBpeGVscyA9IHVuZGVmaW5lZDsgLy8gZm9yY2UgcmVkcmF3XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZENvbG9yOiBjb2xvclxuICAgIH0pO1xuXG5cbiAgICB2YXIge2VyciwgcmVzcG9uc2V9ID0gdGhpcy5jb21taXRDb2xvcihjb2xvciwgdGhpcy5zdGF0ZS5zZWxlY3Rpb24uaWQpO1xuICAgIGlmIChlcnIgIT09IG51bGwpIHtcbiAgICAgIC8vIFVuYWJsZSB0byBzZXQgdGhlIGNvbG9yLlxuICAgIH1cbiAgfVxuXG4gIGNvbW1pdENvbG9yID0gYXN5bmMgKGNvbG9yLCBwaXhlbElEKSA9PiB7XG4gICAgdmFyIHtlcnIsIHJlc3BvbnNlfSA9IGF3YWl0IHRoaXMuRVZUV3JhcHBlci5nZXRUb2tlbihcInBpeGVsdG9rZW5cIiwgcGl4ZWxJRCk7XG4gICAgaWYgKGVyciAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtlcnIsIHJlc3BvbnNlfVxuICAgIH1cblxuICAgIGxldCBjb2xvck1ldGFzID0gcmVzcG9uc2UubWV0YXNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihtZXRhID0+IG1ldGEua2V5LnN0YXJ0c1dpdGgoXCJjb2xvclwiKSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChtZXRhID0+IHBhcnNlSW50KG1ldGEua2V5LnJlcGxhY2UoXCJjb2xvclwiLCBcIlwiKSkpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaW5kZXggPT4gIWlzTmFOKGluZGV4KSlcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcblxuICAgIGxldCBuZXh0Q29sb3JJbmRleCA9IGlzTmFOKGNvbG9yTWV0YXNbMF0rMSkgPyAwIDogY29sb3JNZXRhc1swXSsxO1xuXG4gICAgdmFyIHtlcnIsIHJlc3BvbnNlfSA9IGF3YWl0IHRoaXMuRVZUV3JhcHBlci5hZGRNZXRhKFwicGl4ZWx0b2tlblwiLCB0aGlzLnN0YXRlLnNlbGVjdGlvbi5pZCwgJ2NvbG9yJytuZXh0Q29sb3JJbmRleCwgY29sb3IpO1xuICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgLy8gRXJyb3Igc2V0dGluZyBtZXRhLlxuICAgIH1cblxuICAgIC8vIExldCBodGUgc2VydmVyIHJlZnJlc2ggaXQncyBzdGF0ZSB0b28uXG4gICAgYXdhaXQgZmV0Y2goU0VSVkVSVVJMICsgJy9ib2FyZC8nK3BpeGVsSUQudG9TdHJpbmcoKSwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtlcnIsIHJlc3BvbnNlfVxuICB9XG5cbiAgaGFuZGxlTG9naW4gPSAocHJpdmF0ZUtleSkgPT4ge1xuICAgIHRoaXMuRVZUV3JhcHBlciA9IG5ldyBFVlRXcmFwcGVyKHtwcml2YXRlS2V5fSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2luJywgcHJpdmF0ZUtleSk7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIHRoaXMuRVZUV3JhcHBlciA9IG5ldyBFVlRXcmFwcGVyKHt9KTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbG9naW4nKTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5waXhlbHMgPSB0aGlzLnBpeGVscyB8fCB0aGlzLnN0YXRlLnBpeGVscy5tYXAoKHBpeGVsKSA9PiB7XG4gICAgICByZXR1cm4gPGRpdlxuICAgICAgICBjbGFzc05hbWU9eydwaXhlbCcgKyAocGl4ZWwuc2VsZWN0ZWQgPyAnIHNlbGVjdGVkJyA6ICcnKX1cbiAgICAgICAga2V5PXtwaXhlbC5pZH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBpeGVsLmNvbG9yLFxuICAgICAgICAgIHdpZHRoOlNDQUxFK1wicHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFNDQUxFK1wicHhcIixcbiAgICAgICAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgICAgICAgY29sb3I6IHBpeGVsLmNvbG9yLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIlxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuc2V0TW91c2VQb3MuYmluZCh0aGlzLHBpeGVsKX1cbiAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RQaXhlbC5iaW5kKHRoaXMscGl4ZWwpfVxuICAgICAgPjwvZGl2PlxuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIG9uTG9naW49e3RoaXMuaGFuZGxlTG9naW59XG4gICAgICAgIG9uTG9nb3V0PXt0aGlzLmhhbmRsZUxvZ291dH1cbiAgICAgICAgbG9nZ2VkSW49e3RydW5jYXRlKHRoaXMuRVZUV3JhcHBlci5wdWJsaWNLZXksIDI1LCBcIi4uLlwiKX1cbiAgICAgICAgRVZUV3JhcHBlcj17dGhpcy5FVlRXcmFwcGVyfVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGl4ZWxzXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5waXhlbHNcbiAgICAgICAgICB9XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5waXhlbHMge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogJHtTQ0FMRSAqIFdJRFRIfXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2VsZWN0aW9uXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3Rpb24ueCAhPT0gdW5kZWZpbmVkID8gXCIgc2VsZWN0ZWRcIiA6IFwiXCIpfSA+XG5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNlbGVjdGlvbi54ICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgUGl4ZWwgI3t0aGlzLnN0YXRlLnNlbGVjdGlvbi5pZH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPHNwYW4+UGl4ZWwgI3t0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLmlkfSZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2VsZWN0aW9uLnggIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICAgIDxkaXY+KHt0aGlzLnN0YXRlLnNlbGVjdGlvbi54fSx7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueX0pPC9kaXY+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8ZGl2Pih7dGhpcy5zdGF0ZS5jdXJyZW50TW91c2VQb3NpdGlvbi54fSx7dGhpcy5zdGF0ZS5jdXJyZW50TW91c2VQb3NpdGlvbi55fSk8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3Rpb24ueCAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZXJcIj5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi5vd25lciA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIFwiT3duZXI6IFwiICsgdHJ1bmNhdGUodGhpcy5zdGF0ZS5zZWxlY3Rpb24ub3duZXIsIDI1LCBcIi4uLlwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoci8+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24uY29sb3IgP1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi5vd25lciA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgIDxoMj5Ob2JvZHkgb3ducyB0aGlzIHBpeGVsIHlldCE8L2gyPlxuICAgICAgICAgICAgICAgICAgPHA+WW91IGNhbiBjbGFpbSBpdCBmb3IgeW91cnNlbGYgYW5kIHNldCBpdCB0byBhbnkgY29sb3IgeW91IHdhbnQhPC9wPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkVWVFdyYXBwZXIucHVibGljS2V5ID9cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmNsYWltUGl4ZWwuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnNlbGVjdGlvbil9PkNMQUlNIFBJWEVMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkNsaWNrIGxvZ2luIGFib3ZlIG9yIGNyZWF0ZSBhY2NvdW50IHRvIGNsYWltIHRoaXMgcGl4ZWwhPGJyLz48YnIvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuY2xlYXJTZWxlY3Rpb259PkRFU0VMRUNUIFtFU0NdPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi5vd25lciA9PT0gdGhpcy5FVlRXcmFwcGVyLnB1YmxpY0tleSA/XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBZb3Ugb3duIHRoaXMgcGl4ZWwhXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFsZXR0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtQQUxFVFRFLm1hcCgoY29sb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSAnY29sb3ItcGlja2VyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHNlbGVjdGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtjb2xvcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOmNvbG9yfX0gb25DbGljaz17dGhpcy5zZWxlY3RDb2xvci5iaW5kKHRoaXMsIGNvbG9yKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuRVZUV3JhcHBlci5wdWJsaWNLZXkgPyBcIlNvbWVvbmUgZWxzZSBvd25zIHRoaXMgcGl4ZWwuXCIgOiBcIllvdSBhcmUgbm90IGxvZ2dlZCBpblwifSA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmNsZWFyU2VsZWN0aW9ufT5ERVNFTEVDVCBbRVNDXTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnNlbGVjdGlvblByZXZpZXcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjIyMjI7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29sb3ItcGlja2VyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYm94O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29sb3ItcGlja2VyOmhvdmVyLCAuY29sb3ItcGlja2VyLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBhbGV0dGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHhcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zZWxlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODU4NTg1O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMyMjJcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5vd25lciBzcGFuIHtcblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmRldGFpbC1ib3gge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0sIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5kZXRhaWwtYm94IGgyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPlxuICAgICAgICA8c3Bhbj5BdHRlbnRpb246PC9zcGFuPiBldmVyaVBpeGVsIGlzIGEgcHJvdG90eXBlIHJ1bm5pbmcgYWdhaW5zdCBhIHNlbGYgaG9zdGVkIGV2ZXJpVG9rZW4gYmxvY2tjaGFpbi5cbiAgICAgICAgdGhlIHN0YXRlIG9mIHRoZSBib2FyZCBjb3VsZCBiZSBjbGVhcmVkIGF0IGFueSB0aW1lLlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uXCI+XG4gICAgICAgICAgPGgyPldoYXQgaXMgdGhpcz88L2gyPlxuICAgICAgICAgIDxwPmV2ZXJpUGl4ZWwgaXMgYSBkZW1vbnN0cmF0aW9uIG9mIDxhIGhyZWY9XCJodHRwczovL2V2ZXJpdG9rZW4uaW8vXCI+ZXZlcmlUb2tlbidzPC9hPiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZXZlcml0b2tlbi5pby9kZXZlbG9wZXJzL2tleV9jb25jZXB0cy9ub24tZnVuZ2libGVfdG9rZW5zX2FuZF9kb21haW5zXCI+Tm9uIEZ1bmdpYmxlIFRva2VuPC9hPiBmZWF0dXJlLjwvcD5cbiAgICAgICAgICA8cD5BYm92ZSBpcyBhIGNhbnZhcyBvZiA1MHg1MCBwaXhlbHMsIGVhY2ggb2Ygd2hpY2ggY2FuIGJlIG93bmVkIGFuZCB0cmFuc2ZlcmVkIGluZGl2aWR1YWxseS48L3A+XG4gICAgICAgICAgPHA+Q3VycmVudGx5IHBpeGVscyBjYW4gYmUgY2xhaW1lZCBmcmVlbHkgYnkgYW55b25lIGFuZCBzZXQgdG8gYW55IGNvbG9yIHlvdSB3YW50LjwvcD5cblxuICAgICAgICAgIDxoMj5XaHkgZGlkIHlvdSBtYWtlIHRoaXM/PC9oMj5cbiAgICAgICAgICA8cD5UaGlzIHByb2plY3Qgd2FzIG1hZGUgZm9yIGV2ZXJpVG9rZW4ncyBnbG9iYWwgaGFja2F0aG9uIGluIDIwMTguPC9wPlxuICAgICAgICAgIDxwPkl0IHdhcyBzdWJtaXR0ZWQgdG8gdGhlIE9wZW4gQ2hhbGxlbmdlLCB3aGljaCB3YXMgdG8gXCJCdWlsZCBhbnl0aGluZyByZWxhdGVkIHRvIHRoZSBldmVyaVRva2VuIHB1YmxpYyBjaGFpbi5cIjwvcD5cblxuICAgICAgICAgIDxoMj5XaGF0IGlzIHRoZSBmdXR1cmUgZm9yIHRoaXMgcHJvamVjdD88L2gyPlxuICAgICAgICAgIDxwPkN1cnJlbnRseSwgeW91J2QgaGF2ZSB0byBrbm93IHF1aXRlIGEgYml0IGFib3V0IGV2ZXJpVG9rZW4ncyBBUEkgYmVmb3JlIHlvdSB3b3VsZCBiZSBhYmxlIHRvIHRyYW5zZmVyIGEgcGl4ZWwgdG8gc29tZW9uZSBlbHNlLjwvcD5cbiAgICAgICAgICA8cD5TbyBJIHBsYW4gdG8gaW1wbGVtZW50IHdheXMgdG8gZWFzaWx5IHRyYW5zZmVyLCBzZWxsLCBhbmQgYXVjdGlvbiBwaXhlbHM8L3A+XG5cbiAgICAgICAgICA8cD5UaGUgY2FudmFzIGl0c2VsZiBjYW4gYmUgaW1wcm92ZWQgYXMgd2VsbCwgbXkgYW1iaXRpb24gaXMgdG8gZ2V0IGEgMTAwMHgxMDAwIHBpeGVsIGNhbnZhcywgdGhvdWdoIHRoYXQgbWlnaHQgcmVxdWlyZVxuICAgICAgICAgIHNvbWUgbW9yZSBjb29wZXJhdGlvbiB3aXRoIHRoZSBldmVyaVRva2VuIHRlYW0uPC9wPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/pages/index.js */"),
        dynamic: [SCALE * WIDTH],
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321" + " " + "controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321" + " " + ("selection" + (this.state.selection.x !== undefined ? " selected" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, this.state.selection.x !== undefined ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "Pixel #", this.state.selection.id) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "Pixel #", this.state.currentMousePosition.id, "\xA0")), this.state.selection.x !== undefined ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, "(", this.state.selection.x, ",", this.state.selection.y, ")") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, "(", this.state.currentMousePosition.x, ",", this.state.currentMousePosition.y, ")"), this.state.selection.x !== undefined ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321" + " " + "owner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, this.state.selection.owner === undefined ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }) : "Owner: " + truncate(this.state.selection.owner, 25, "..."))) : ''), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }), this.state.selection.color ? this.state.selection.owner === undefined ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321" + " " + "detail-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "Nobody owns this pixel yet!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, "You can claim it for yourself and set it to any color you want!"), this.EVTWrapper.publicKey ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.claimPixel.bind(this, this.state.selection),
        className: "jsx-907296321" + " " + "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, "CLAIM PIXEL") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "Click login above or create account to claim this pixel!", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.clearSelection,
        className: "jsx-907296321" + " " + "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "DESELECT [ESC]")) : this.state.selection.owner === this.EVTWrapper.publicKey ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "You own this pixel!", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321" + " " + "palette",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, PALETTE.map(function (color) {
        var className = 'color-picker';

        if (color === _this3.state.selectedColor) {
          className += ' selected';
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: color,
          style: {
            backgroundColor: color
          },
          onClick: _this3.selectColor.bind(_this3, color),
          className: "jsx-907296321" + " " + (className || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        });
      }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, this.EVTWrapper.publicKey ? "Someone else owns this pixel." : "You are not logged in", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-907296321",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.clearSelection,
        className: "jsx-907296321" + " " + "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, "DESELECT [ESC]")) : "", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "907296321",
        css: ".controls.jsx-907296321{float:left;color:#fff;font-size:16px;width:400px;}.selected.jsx-907296321{color:#fff !important;}.selectionPreview.jsx-907296321{width:100px;height:100px;border:1px solid #222222;float:left;margin-right:20px;margin-bottom:10px;}.color-picker.jsx-907296321{width:20px;height:20px;float:left;display:box;cursor:pointer;margin-right:2px;opacity:0.8;}.color-picker.jsx-907296321:hover,.color-picker.selected.jsx-907296321{border-bottom:4px solid #fff;opacity:1;}.palette.jsx-907296321{margin-top:10px;}.selection.jsx-907296321{color:#858585;}h2.jsx-907296321{font-size:16px;margin:0;margin-bottom:10px;}hr.jsx-907296321{clear:both;border-color:#222;}.detail-box.jsx-907296321{font-family:system,-apple-system,system-ui;color:#aaa;}.detail-box.jsx-907296321 h2.jsx-907296321{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlZYSxBQUc0QixBQVFkLEFBR2UsQUFTRCxBQVVrQixBQU1oQyxBQUdpQixBQUlDLEFBTUosQUFTa0MsQUFNaEQsV0EvRGMsQUFvQkMsQUE4QmYsQUFhQyxDQXBEZSxFQTRCZixDQUlXLENBUlgsTUFsQ2lCLEFBTWpCLENBY2EsQ0F1QlEsQ0FoQ00sSUFrQmYsQUFvQlosS0E1QmMsR0FwQkEsRUE2QmQsSUFjQSxBQWFhLEdBbkNJLEdBcEJqQixDQVVhLElBOENiLE9BN0NvQixBQVVELGlCQUNMLENBVk8sV0FXckIsUUFWQSIsImZpbGUiOiIvVXNlcnMvb3BvbmRlci9jb2RlL29saXZlcl9wb25kZXIvZXZlcmlwaXhlbC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IENhbnZhcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2FudmFzJztcbmltcG9ydCBQaXp6aWNhdG8gIGZyb20gJ3BpenppY2F0byc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQnO1xuaW1wb3J0IEVWVFdyYXBwZXIgZnJvbSAnLi4vbGliL2V2dCc7XG5cbmNvbnN0IGZlYXRoZXJzID0gcmVxdWlyZSgnQGZlYXRoZXJzanMvZmVhdGhlcnMnKTtcbmNvbnN0IHNvY2tldGlvID0gcmVxdWlyZSgnQGZlYXRoZXJzanMvc29ja2V0aW8tY2xpZW50Jyk7XG5jb25zdCBpbyA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKTtcblxuY29uc3QgV0lEVEggPSA1MDtcbmNvbnN0IEhFSUdIVCA9IDUwO1xuY29uc3QgU0NBTEUgPSAxMDtcblxuY29uc3QgU0VSVkVSVVJMID0gXCJodHRwOi8vMzUuMjQwLjE3My4xNTc6ODAwMFwiXG5jb25zdCBFVlRJUCA9IFwiMzUuMjQwLjE3Ni4xMDFcIlxuXG5jb25zdCBQQUxFVFRFID0gW1xuICAgICAgICAgICAgICAgICAnI0ZGRkZGRicsICcjRTRFNEU0JywgJyM4ODg4ODgnLCAnIzIyMjIyMicsXG4gICAgICAgICAgICAgICAgICcjRkZBN0QxJywgJyNFNTAwMDAnLCAnI0U1OTUwMCcsICcjQTA2QTQyJyxcbiAgICAgICAgICAgICAgICAgJyNFNUQ5MDAnLCAnIzk0RTA0NCcsICcjMDJCRTAxJywgJyMwMEQzREQnLFxuICAgICAgICAgICAgICAgICAnIzAwODNDNycsICcjMDAwMEVBJywgJyNDRjZFRTQnLCAnIzgyMDA4MCcsXG4gICAgICAgICAgICAgICAgXTtcblxudmFyIHRydW5jYXRlID0gZnVuY3Rpb24gKGZ1bGxTdHIsIHN0ckxlbiwgc2VwYXJhdG9yKSB7XG4gIGlmICghZnVsbFN0cikgeyByZXR1cm4gdW5kZWZpbmVkIH07XG4gIGlmIChmdWxsU3RyLmxlbmd0aCA8PSBzdHJMZW4pIHJldHVybiBmdWxsU3RyO1xuXG4gIHNlcGFyYXRvciA9IHNlcGFyYXRvciB8fCAnLi4uJztcblxuICB2YXIgc2VwTGVuID0gc2VwYXJhdG9yLmxlbmd0aCxcbiAgICAgIGNoYXJzVG9TaG93ID0gc3RyTGVuIC0gc2VwTGVuLFxuICAgICAgZnJvbnRDaGFycyA9IE1hdGguY2VpbChjaGFyc1RvU2hvdy8yKSxcbiAgICAgIGJhY2tDaGFycyA9IE1hdGguZmxvb3IoY2hhcnNUb1Nob3cvMik7XG5cbiAgcmV0dXJuIGZ1bGxTdHIuc3Vic3RyKDAsIGZyb250Q2hhcnMpICtcbiAgICAgICAgIHNlcGFyYXRvciArXG4gICAgICAgICBmdWxsU3RyLnN1YnN0cihmdWxsU3RyLmxlbmd0aCAtIGJhY2tDaGFycyk7XG59O1xuXG5leHBvcnQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5kcmFnU3RhcnRTb3VuZCA9IG5ldyBQaXp6aWNhdG8uU291bmQoXCIvc3RhdGljL2RyYWdzdGFydC5tcDNcIik7XG4gICAgICB0aGlzLmRyYWdnaW5nU291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnZ2luZy5tcDNcIik7XG4gICAgICB0aGlzLmRyYWdTdG9wU291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnZW5kLm1wM1wiKTtcbiAgICAgIHRoaXMuZHJhZ0ZhaWxTb3VuZCA9IG5ldyBQaXp6aWNhdG8uU291bmQoXCIvc3RhdGljL2RyYWdmYWlsLm1wM1wiKTtcbiAgICB9XG5cbiAgICB0aGlzLkVWVFdyYXBwZXIgPSBuZXcgRVZUV3JhcHBlcih7fSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgc2VsZWN0aW9uOiB7fSxcbiAgICAgIGN1cnJlbnRNb3VzZVBvc2l0aW9uOiB7eDogMCwgeTogMCwgaWQ6IDB9LFxuICAgICAgcGl4ZWxzOiB0aGlzLmluaXRpYWxpemVQaXhlbHMoKSxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcnLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbkVzYywgZmFsc2UpO1xuICAgIGxldCBwcml2YXRlS2V5ID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dpbicpO1xuXG4gICAgaWYgKHByaXZhdGVLZXkpIHtcbiAgICAgIHRoaXMuRVZUV3JhcHBlciA9IG5ldyBFVlRXcmFwcGVyKHtwcml2YXRlS2V5fSk7XG4gICAgfVxuXG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFNFUlZFUlVSTCArICcvYm9hcmQnLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgICB9KTtcblxuICAgICAgbGV0IGJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICBib2R5ID0gSlNPTi5wYXJzZShib2R5KTtcblxuICAgICAgYm9keS5ib2FyZC5tYXAoKHBpeGVsLCBpKSA9PiB7XG4gICAgICAgIGlmIChwaXhlbCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUucGl4ZWxzW2ldLmNvbG9yID0gcGl4ZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5waXhlbHNbaV0uY29sb3IgPSBcIiMwMDBcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucGl4ZWxzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuXG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHNvY2tldCA9IGlvKFNFUlZFUlVSTCk7XG4gICAgY29uc3QgYXBwID0gZmVhdGhlcnMoKTtcbiAgICBhcHAuY29uZmlndXJlKHNvY2tldGlvKHNvY2tldCkpO1xuXG4gICAgYXBwLnNlcnZpY2UoJ2JvYXJkJykub24oJ3N0YXR1cycsIG1lc3NhZ2UgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5waXhlbHNbbWVzc2FnZS5pZF0uY29sb3IgPSBtZXNzYWdlLmNvbG9yO1xuICAgICAgdGhpcy5waXhlbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Fc2MsIGZhbHNlKTtcbiAgfVxuXG4gIG9uRXNjID0gKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMucGl4ZWxzID0gdW5kZWZpbmVkOyAvL1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0aW9uOiB7fSxcbiAgICAgIGN1cnJlbnRNb3VzZVBvc2l0aW9uOiB7eDogMCwgeTogMCwgaWQ6IDB9LFxuICAgIH0pXG4gIH1cblxuICBzZXRNb3VzZVBvcyA9IChwaXhlbCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudE1vdXNlUG9zaXRpb246IHBpeGVsXG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RQaXhlbCA9IGFzeW5jIChwaXhlbCkgPT4ge1xuICAgIHRoaXMuZHJhZ1N0b3BTb3VuZC5wbGF5KCk7XG5cbiAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3Rpb246IHBpeGVsLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogcGl4ZWwuY29sb3JcbiAgICB9KVxuXG4gICAgcGl4ZWwuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgYXdhaXQgdGhpcy5yZWZyZXNoUGl4ZWwocGl4ZWwpO1xuXG4gICAgdGhpcy5waXhlbHMgPSB1bmRlZmluZWQ7IC8vIGZvcmNlIHJlZHJhd1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwaXhlbHM6IHRoaXMuc3RhdGUucGl4ZWxzXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hQaXhlbCA9IGFzeW5jIChwaXhlbCkgPT4ge1xuICAgIHZhciB7ZXJyLCByZXNwb25zZX0gPSBhd2FpdCB0aGlzLkVWVFdyYXBwZXIuZ2V0VG9rZW4oXCJwaXhlbHRva2VuXCIsIHBpeGVsLmlkLnRvU3RyaW5nKCkpO1xuICAgIGlmIChlcnIgIT0gbnVsbCAmJiBlcnIubmFtZSA9PT0gXCJ0b2tlbmRiX2tleV9ub3RfZm91bmRcIikge1xuICAgICAgcGl4ZWwuYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIHBpeGVsLmNvbG9yID0gXCIjMDAwXCI7XG4gICAgfSBlbHNlIGlmIChlcnIgPT09IG51bGwpIHtcbiAgICAgIGxldCBjb2xvck1ldGFzID0gcmVzcG9uc2UubWV0YXNcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG1ldGEgPT4gbWV0YS5rZXkuc3RhcnRzV2l0aChcImNvbG9yXCIpKVxuICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYk4gPSBwYXJzZUludChiLmtleS5yZXBsYWNlKFwiY29sb3JcIiwgXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFOID0gcGFyc2VJbnQoYS5rZXkucmVwbGFjZShcImNvbG9yXCIsIFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihiTikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJOIC0gYU47XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgIHBpeGVsLm93bmVyID0gcmVzcG9uc2Uub3duZXJbMF07XG5cbiAgICAgIGlmIChjb2xvck1ldGFzWzBdKSB7XG4gICAgICAgIHBpeGVsLmNvbG9yID0gY29sb3JNZXRhc1swXS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplUGl4ZWxzID0gKCkgPT4ge1xuICAgIHZhciBwaXhlbHMgPSBbXTtcblxuICAgIGZvcih2YXIgeSA9IDA7IHkgPCBIRUlHSFQ7IHkgKz0gMSkge1xuICAgICAgZm9yKHZhciB4ID0gMDsgeCA8IFdJRFRIOyB4ICs9IDEpIHtcbiAgICAgICAgdmFyIHBpeGVsID0ge3gsIHksIGNvbG9yOiBcIiMwMDBcIiwgaWQ6ICgoeSpXSURUSCkreCkudG9TdHJpbmcoKSB9O1xuICAgICAgICBwaXhlbHMucHVzaChwaXhlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBpeGVscztcbiAgfVxuXG4gIGNsYWltUGl4ZWwgPSBhc3luYyAocGl4ZWwpID0+IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChTRVJWRVJVUkwgKyAnL2NsYWltJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcImlkXCI6IHBpeGVsLmlkLCBcIm93bmVyXCI6IHRoaXMuRVZUV3JhcHBlci5wdWJsaWNLZXl9KSxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICB9KTtcblxuICAgIGxldCBib2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlZnJlc2hQaXhlbChwaXhlbCk7XG5cbiAgICAgIHRoaXMucGl4ZWxzID0gdW5kZWZpbmVkOyAvLyBmb3JjZSByZWRyYXdcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBpeGVsczogdGhpcy5zdGF0ZS5waXhlbHNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Q29sb3IgPSBhc3luYyAoY29sb3IpID0+IHtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMucGl4ZWxzID0gdW5kZWZpbmVkOyAvLyBmb3JjZSByZWRyYXdcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkQ29sb3I6IGNvbG9yXG4gICAgfSk7XG5cblxuICAgIHZhciB7ZXJyLCByZXNwb25zZX0gPSB0aGlzLmNvbW1pdENvbG9yKGNvbG9yLCB0aGlzLnN0YXRlLnNlbGVjdGlvbi5pZCk7XG4gICAgaWYgKGVyciAhPT0gbnVsbCkge1xuICAgICAgLy8gVW5hYmxlIHRvIHNldCB0aGUgY29sb3IuXG4gICAgfVxuICB9XG5cbiAgY29tbWl0Q29sb3IgPSBhc3luYyAoY29sb3IsIHBpeGVsSUQpID0+IHtcbiAgICB2YXIge2VyciwgcmVzcG9uc2V9ID0gYXdhaXQgdGhpcy5FVlRXcmFwcGVyLmdldFRva2VuKFwicGl4ZWx0b2tlblwiLCBwaXhlbElEKTtcbiAgICBpZiAoZXJyICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4ge2VyciwgcmVzcG9uc2V9XG4gICAgfVxuXG4gICAgbGV0IGNvbG9yTWV0YXMgPSByZXNwb25zZS5tZXRhc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG1ldGEgPT4gbWV0YS5rZXkuc3RhcnRzV2l0aChcImNvbG9yXCIpKVxuICAgICAgICAgICAgICAgICAgICAubWFwKG1ldGEgPT4gcGFyc2VJbnQobWV0YS5rZXkucmVwbGFjZShcImNvbG9yXCIsIFwiXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpbmRleCA9PiAhaXNOYU4oaW5kZXgpKVxuICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuXG4gICAgbGV0IG5leHRDb2xvckluZGV4ID0gaXNOYU4oY29sb3JNZXRhc1swXSsxKSA/IDAgOiBjb2xvck1ldGFzWzBdKzE7XG5cbiAgICB2YXIge2VyciwgcmVzcG9uc2V9ID0gYXdhaXQgdGhpcy5FVlRXcmFwcGVyLmFkZE1ldGEoXCJwaXhlbHRva2VuXCIsIHRoaXMuc3RhdGUuc2VsZWN0aW9uLmlkLCAnY29sb3InK25leHRDb2xvckluZGV4LCBjb2xvcik7XG4gICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAvLyBFcnJvciBzZXR0aW5nIG1ldGEuXG4gICAgfVxuXG4gICAgLy8gTGV0IGh0ZSBzZXJ2ZXIgcmVmcmVzaCBpdCdzIHN0YXRlIHRvby5cbiAgICBhd2FpdCBmZXRjaChTRVJWRVJVUkwgKyAnL2JvYXJkLycrcGl4ZWxJRC50b1N0cmluZygpLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge2VyciwgcmVzcG9uc2V9XG4gIH1cblxuICBoYW5kbGVMb2dpbiA9IChwcml2YXRlS2V5KSA9PiB7XG4gICAgdGhpcy5FVlRXcmFwcGVyID0gbmV3IEVWVFdyYXBwZXIoe3ByaXZhdGVLZXl9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9naW4nLCBwcml2YXRlS2V5KTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5FVlRXcmFwcGVyID0gbmV3IEVWVFdyYXBwZXIoe30pO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2dpbicpO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnBpeGVscyA9IHRoaXMucGl4ZWxzIHx8IHRoaXMuc3RhdGUucGl4ZWxzLm1hcCgocGl4ZWwpID0+IHtcbiAgICAgIHJldHVybiA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17J3BpeGVsJyArIChwaXhlbC5zZWxlY3RlZCA/ICcgc2VsZWN0ZWQnIDogJycpfVxuICAgICAgICBrZXk9e3BpeGVsLmlkfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGl4ZWwuY29sb3IsXG4gICAgICAgICAgd2lkdGg6U0NBTEUrXCJweFwiLFxuICAgICAgICAgIGhlaWdodDogU0NBTEUrXCJweFwiLFxuICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICAgICAgICBjb2xvcjogcGl4ZWwuY29sb3IsXG4gICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zZXRNb3VzZVBvcy5iaW5kKHRoaXMscGl4ZWwpfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdFBpeGVsLmJpbmQodGhpcyxwaXhlbCl9XG4gICAgICA+PC9kaXY+XG4gICAgfSk7XG5cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgb25Mb2dpbj17dGhpcy5oYW5kbGVMb2dpbn1cbiAgICAgICAgb25Mb2dvdXQ9e3RoaXMuaGFuZGxlTG9nb3V0fVxuICAgICAgICBsb2dnZWRJbj17dHJ1bmNhdGUodGhpcy5FVlRXcmFwcGVyLnB1YmxpY0tleSwgMjUsIFwiLi4uXCIpfVxuICAgICAgICBFVlRXcmFwcGVyPXt0aGlzLkVWVFdyYXBwZXJ9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaXhlbHNcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBpeGVsc1xuICAgICAgICAgIH1cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLnBpeGVscyB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAke1NDQUxFICogV0lEVEh9cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzZWxlY3Rpb25cIiArICh0aGlzLnN0YXRlLnNlbGVjdGlvbi54ICE9PSB1bmRlZmluZWQgPyBcIiBzZWxlY3RlZFwiIDogXCJcIil9ID5cblxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2VsZWN0aW9uLnggIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBQaXhlbCAje3RoaXMuc3RhdGUuc2VsZWN0aW9uLmlkfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8c3Bhbj5QaXhlbCAje3RoaXMuc3RhdGUuY3VycmVudE1vdXNlUG9zaXRpb24uaWR9Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3Rpb24ueCAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgICAgPGRpdj4oe3RoaXMuc3RhdGUuc2VsZWN0aW9uLnh9LHt0aGlzLnN0YXRlLnNlbGVjdGlvbi55fSk8L2Rpdj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxkaXY+KHt0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLnh9LHt0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLnl9KTwvZGl2PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNlbGVjdGlvbi54ICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lclwiPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLm93bmVyID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgXCJPd25lcjogXCIgKyB0cnVuY2F0ZSh0aGlzLnN0YXRlLnNlbGVjdGlvbi5vd25lciwgMjUsIFwiLi4uXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGhyLz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi5jb2xvciA/XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLm93bmVyID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWJveFwiPlxuICAgICAgICAgICAgICAgICAgPGgyPk5vYm9keSBvd25zIHRoaXMgcGl4ZWwgeWV0ITwvaDI+XG4gICAgICAgICAgICAgICAgICA8cD5Zb3UgY2FuIGNsYWltIGl0IGZvciB5b3Vyc2VsZiBhbmQgc2V0IGl0IHRvIGFueSBjb2xvciB5b3Ugd2FudCE8L3A+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRVZUV3JhcHBlci5wdWJsaWNLZXkgP1xuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuY2xhaW1QaXhlbC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUuc2VsZWN0aW9uKX0+Q0xBSU0gUElYRUw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q2xpY2sgbG9naW4gYWJvdmUgb3IgY3JlYXRlIGFjY291bnQgdG8gY2xhaW0gdGhpcyBwaXhlbCE8YnIvPjxici8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5jbGVhclNlbGVjdGlvbn0+REVTRUxFQ1QgW0VTQ108L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLm93bmVyID09PSB0aGlzLkVWVFdyYXBwZXIucHVibGljS2V5ID9cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFlvdSBvd24gdGhpcyBwaXhlbCFcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWxldHRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge1BBTEVUVEUubWFwKChjb2xvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICdjb2xvci1waWNrZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgc2VsZWN0ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2NvbG9yfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6Y29sb3J9fSBvbkNsaWNrPXt0aGlzLnNlbGVjdENvbG9yLmJpbmQodGhpcywgY29sb3IpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5FVlRXcmFwcGVyLnB1YmxpY0tleSA/IFwiU29tZW9uZSBlbHNlIG93bnMgdGhpcyBwaXhlbC5cIiA6IFwiWW91IGFyZSBub3QgbG9nZ2VkIGluXCJ9IDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuY2xlYXJTZWxlY3Rpb259PkRFU0VMRUNUIFtFU0NdPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc2VsZWN0aW9uUHJldmlldyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb2xvci1waWNrZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBib3g7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb2xvci1waWNrZXI6aG92ZXIsIC5jb2xvci1waWNrZXIuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucGFsZXR0ZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnNlbGVjdGlvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4NTg1ODU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIyMlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm93bmVyIHNwYW4ge1xuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZGV0YWlsLWJveCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmRldGFpbC1ib3ggaDIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+XG4gICAgICAgIDxzcGFuPkF0dGVudGlvbjo8L3NwYW4+IGV2ZXJpUGl4ZWwgaXMgYSBwcm90b3R5cGUgcnVubmluZyBhZ2FpbnN0IGEgc2VsZiBob3N0ZWQgZXZlcmlUb2tlbiBibG9ja2NoYWluLlxuICAgICAgICB0aGUgc3RhdGUgb2YgdGhlIGJvYXJkIGNvdWxkIGJlIGNsZWFyZWQgYXQgYW55IHRpbWUuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25cIj5cbiAgICAgICAgICA8aDI+V2hhdCBpcyB0aGlzPzwvaDI+XG4gICAgICAgICAgPHA+ZXZlcmlQaXhlbCBpcyBhIGRlbW9uc3RyYXRpb24gb2YgPGEgaHJlZj1cImh0dHBzOi8vZXZlcml0b2tlbi5pby9cIj5ldmVyaVRva2VuJ3M8L2E+IDxhIGhyZWY9XCJodHRwczovL3d3dy5ldmVyaXRva2VuLmlvL2RldmVsb3BlcnMva2V5X2NvbmNlcHRzL25vbi1mdW5naWJsZV90b2tlbnNfYW5kX2RvbWFpbnNcIj5Ob24gRnVuZ2libGUgVG9rZW48L2E+IGZlYXR1cmUuPC9wPlxuICAgICAgICAgIDxwPkFib3ZlIGlzIGEgY2FudmFzIG9mIDUweDUwIHBpeGVscywgZWFjaCBvZiB3aGljaCBjYW4gYmUgb3duZWQgYW5kIHRyYW5zZmVyZWQgaW5kaXZpZHVhbGx5LjwvcD5cbiAgICAgICAgICA8cD5DdXJyZW50bHkgcGl4ZWxzIGNhbiBiZSBjbGFpbWVkIGZyZWVseSBieSBhbnlvbmUgYW5kIHNldCB0byBhbnkgY29sb3IgeW91IHdhbnQuPC9wPlxuXG4gICAgICAgICAgPGgyPldoeSBkaWQgeW91IG1ha2UgdGhpcz88L2gyPlxuICAgICAgICAgIDxwPlRoaXMgcHJvamVjdCB3YXMgbWFkZSBmb3IgZXZlcmlUb2tlbidzIGdsb2JhbCBoYWNrYXRob24gaW4gMjAxOC48L3A+XG4gICAgICAgICAgPHA+SXQgd2FzIHN1Ym1pdHRlZCB0byB0aGUgT3BlbiBDaGFsbGVuZ2UsIHdoaWNoIHdhcyB0byBcIkJ1aWxkIGFueXRoaW5nIHJlbGF0ZWQgdG8gdGhlIGV2ZXJpVG9rZW4gcHVibGljIGNoYWluLlwiPC9wPlxuXG4gICAgICAgICAgPGgyPldoYXQgaXMgdGhlIGZ1dHVyZSBmb3IgdGhpcyBwcm9qZWN0PzwvaDI+XG4gICAgICAgICAgPHA+Q3VycmVudGx5LCB5b3UnZCBoYXZlIHRvIGtub3cgcXVpdGUgYSBiaXQgYWJvdXQgZXZlcmlUb2tlbidzIEFQSSBiZWZvcmUgeW91IHdvdWxkIGJlIGFibGUgdG8gdHJhbnNmZXIgYSBwaXhlbCB0byBzb21lb25lIGVsc2UuPC9wPlxuICAgICAgICAgIDxwPlNvIEkgcGxhbiB0byBpbXBsZW1lbnQgd2F5cyB0byBlYXNpbHkgdHJhbnNmZXIsIHNlbGwsIGFuZCBhdWN0aW9uIHBpeGVsczwvcD5cblxuICAgICAgICAgIDxwPlRoZSBjYW52YXMgaXRzZWxmIGNhbiBiZSBpbXByb3ZlZCBhcyB3ZWxsLCBteSBhbWJpdGlvbiBpcyB0byBnZXQgYSAxMDAweDEwMDAgcGl4ZWwgY2FudmFzLCB0aG91Z2ggdGhhdCBtaWdodCByZXF1aXJlXG4gICAgICAgICAgc29tZSBtb3JlIGNvb3BlcmF0aW9uIHdpdGggdGhlIGV2ZXJpVG9rZW4gdGVhbS48L3A+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/pages/index.js */",
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, "Attention:"), " everiPixel is a prototype running against a self hosted everiToken blockchain. the state of the board could be cleared at any time."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "explanation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, "What is this?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, "everiPixel is a demonstration of ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://everitoken.io/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, "everiToken's"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://www.everitoken.io/developers/key_concepts/non-fungible_tokens_and_domains",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, "Non Fungible Token"), " feature."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, "Above is a canvas of 50x50 pixels, each of which can be owned and transfered individually."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, "Currently pixels can be claimed freely by anyone and set to any color you want."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, "Why did you make this?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, "This project was made for everiToken's global hackathon in 2018."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }, "It was submitted to the Open Challenge, which was to \"Build anything related to the everiToken public chain.\""), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, "What is the future for this project?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, "Currently, you'd have to know quite a bit about everiToken's API before you would be able to transfer a pixel to someone else."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, "So I plan to implement ways to easily transfer, sell, and auction pixels"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, "The canvas itself can be improved as well, my ambition is to get a 1000x1000 pixel canvas, though that might require some more cooperation with the everiToken team."))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.0303f0ca59ec7f2fcae1.hot-update.js.map