webpackHotUpdate("static/development/pages/canvas-prototype-wip.js",{

/***/ "./pages/canvas-prototype-wip.js":
/*!***************************************!*\
  !*** ./pages/canvas-prototype-wip.js ***!
  \***************************************/
/*! exports provided: Index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/canvas */ "./components/canvas.js");
/* harmony import */ var pizzicato__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pizzicato */ "./node_modules/pizzicato/distr/Pizzicato.min.js");
/* harmony import */ var pizzicato__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pizzicato__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
var _jsxFileName = "/Users/oponder/code/oliver_ponder/everipixel/pages/canvas-prototype-wip.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var WIDTH = 1000;
var HEIGHT = 1000;
var SCALE = 1;

var getMousePos = function getMousePos(ctx, evt) {
  var rect = ctx.canvas.getBoundingClientRect();
  var x = Math.floor((evt.clientX - rect.left) / SCALE);
  var y = Math.floor((evt.clientY - rect.top) / SCALE); // Ensure we never get numbers out of the bounds of the canvas.
  // This can happen if the mouse moves quickly off the canvas.

  x = Math.min(WIDTH - 1, x);
  y = Math.min(HEIGHT - 1, y);
  x = Math.max(0, x);
  y = Math.max(0, y);
  return {
    x: x,
    y: y
  };
};

var multiplyPixels = function multiplyPixels(ctx, factor) {
  // Brighten the canvas
  // get raw pixel values
  var imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
  var pixels = imageData.data; // modify each pixel

  for (var i = 0; i < pixels.length; i += 4) {
    // red is pixels[i];
    // green is pixels[i + 1];
    // blue is pixels[i + 2];
    // alpha is pixels[i + 3];
    // all values are integers between 0 and 255
    // do with them whatever you like. Here we are reducing the color volume to 75%
    // without affecting the alpha channel
    pixels[i] = pixels[i] * factor;
    pixels[i + 1] = pixels[i + 1] * factor;
    pixels[i + 2] = pixels[i + 2] * factor;
  } // write modified pixels back to canvas


  ctx.putImageData(imageData, 0, 0);
};

var multiplyPixel = function multiplyPixel(ctx, x, y, factor) {
  // Brighten the canvas
  // get raw pixel values
  var imageData = ctx.getImageData(x, y, 1, 1);
  var pixels = imageData.data; // modify each pixel

  for (var i = 0; i < pixels.length; i += 4) {
    // red is pixels[i];
    // green is pixels[i + 1];
    // blue is pixels[i + 2];
    // alpha is pixels[i + 3];
    // all values are integers between 0 and 255
    // do with them whatever you like. Here we are reducing the color volume to 75%
    // without affecting the alpha channel
    pixels[i] = pixels[i] * factor;
    pixels[i + 1] = pixels[i + 1] * factor;
    pixels[i + 2] = pixels[i + 2] * factor;
  } // write modified pixels back to canvas


  ctx.putImageData(imageData, x, y);
};

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "canvasReady", function (ctx) {
      console.log(ctx);
      _this.ctx = ctx;
      _this.imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEsc", function (event) {
      if (event.keyCode === 27) {
        _this.clearSelection();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearSelection", function () {
      // Return canvas to original brightness.
      _this.ctx.putImageData(_this.imageData, 0, 0);

      _this.setState({
        selection: {}
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseMove", function (ctx, evt, dragging) {
      if (_this.state.dragging) {
        var mousePos = getMousePos(ctx, evt);
        var x1 = _this.state.selection.x1;
        var y1 = _this.state.selection.y1;
        var x2 = mousePos.x;
        var y2 = mousePos.y;

        if (x1 > x2) {
          x1 = x2;
          x2 = _this.state.selection.x1;
        }

        if (y1 > y2) {
          y1 = y2;
          y2 = _this.state.selection.y1;
        }

        _this.setState({
          selection: {
            x1: _this.state.selection.x1,
            y1: _this.state.selection.y1,
            x2: mousePos.x,
            y2: mousePos.y
          }
        });

        var width = x2 - x1;
        var height = y2 - y1;

        if (width >= 0 && height >= 0) {
          var imageData = _this.selectionContext.getImageData(x1, y1, width + 1, height + 1);

          var selectionCtx = _this.refs.selectionCanvas.getContext("2d");

          selectionCtx.clearRect(0, 0, 100, 100);
          ctx.putImageData(_this.imageData, 0, 0);
          multiplyPixels(ctx, 0.5);
          ctx.putImageData(imageData, x1, y1);
          selectionCtx.putImageData(imageData, 0, 0);
        }
      } else {
        var _mousePos = getMousePos(ctx, evt);

        _this.setState({
          currentMousePosition: _mousePos
        });

        if (_this.state.hovering) {// multiplyPixel(ctx, this.state.currentMousePosition.x, this.state.currentMousePosition.y, 2)
        } else {
          multiplyPixels(ctx, 0.5);

          _this.setState({
            hovering: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseOut", function (ctx, evt) {
      if (_this.state.dragging) {
        _this.mouseUp(ctx, evt);
      }

      _this.setState({
        currentMousePosition: {
          x: 0,
          y: 0
        }
      });

      if (_this.state.hovering) {
        ctx.putImageData(_this.imageData, 0, 0);

        _this.setState({
          hovering: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseDown", function (ctx, evt) {
      // Return canvas to original brightness.
      ctx.putImageData(_this.imageData, 0, 0);
      _this.selectionCanvas = document.createElement("canvas");
      _this.selectionCanvas.width = WIDTH;
      _this.selectionCanvas.height = HEIGHT;
      _this.selectionContext = _this.selectionCanvas.getContext("2d");

      _this.selectionContext.putImageData(_this.imageData, 0, 0);

      _this.dragStartSound.play();

      var mousePos = getMousePos(ctx, evt);

      _this.setState({
        dragging: true,
        selection: {
          x1: mousePos.x,
          y1: mousePos.y,
          x2: mousePos.x,
          y2: mousePos.y
        }
      }); // Darken the canvas.


      multiplyPixels(ctx, 0.50);

      _this.mouseMove(ctx, evt);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseUp", function (ctx, evt) {
      if (_this.state.dragging) {
        var mousePos = getMousePos(ctx, evt);

        _this.setState({
          dragging: false,
          selection: Object.assign({}, _this.state.selection, {
            x2: mousePos.x,
            y2: mousePos.y
          })
        });

        var width = mousePos.x - _this.state.selection.x1;
        var height = mousePos.y - _this.state.selection.y1;

        var selectionCtx = _this.refs.selectionCanvas.getContext("2d");

        selectionCtx.clearRect(0, 0, 100, 100);

        if (width !== 0 && height !== 0) {
          // Grab the selected region and put it in the selection preview.
          var imageData = ctx.getImageData(_this.state.selection.x1, _this.state.selection.y1, width, height);
          selectionCtx.putImageData(imageData, 0, 0);

          _this.dragStopSound.play();
        } else {
          _this.dragStopSound.play();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectedPixels", function () {
      var pixels = [];
      var x1 = _this.state.selection.x1;
      var y1 = _this.state.selection.y1;
      var x2 = _this.state.selection.x2;
      var y2 = _this.state.selection.y2;

      if (x1 > x2) {
        x1 = x2;
        x2 = _this.state.selection.x1;
      }

      if (y1 > y2) {
        y1 = y2;
        y2 = _this.state.selection.y1;
      }

      for (var y = y1; y <= y2; y++) {
        for (var x = x1; x <= x2; x++) {
          pixels.push(y * WIDTH + x);
        }
      }

      return pixels;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rowRenderer", function (_ref) {
      var key = _ref.key,
          index = _ref.index,
          isScrolling = _ref.isScrolling,
          isVisible = _ref.isVisible,
          style = _ref.style;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: key,
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "Pixel #", _this.selectedPixels()[index]);
    });

    if (typeof window !== 'undefined') {
      _this.dragStartSound = new pizzicato__WEBPACK_IMPORTED_MODULE_3___default.a.Sound("/static/dragstart.mp3");
      _this.draggingSound = new pizzicato__WEBPACK_IMPORTED_MODULE_3___default.a.Sound("/static/dragging.mp3");
      _this.dragStopSound = new pizzicato__WEBPACK_IMPORTED_MODULE_3___default.a.Sound("/static/dragend.mp3");
      _this.dragFailSound = new pizzicato__WEBPACK_IMPORTED_MODULE_3___default.a.Sound("/static/dragfail.mp3");
    }

    _this.state = {
      dragging: false,
      selection: {},
      currentMousePosition: {
        x: 0,
        y: 0
      }
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.onEsc, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.onEsc, false);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4179034185" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4179034185",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "everi", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4179034185",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "Pixel")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4179034185",
        css: "h1.jsx-4179034185{color:#858585;font-size:24px;margin:0;}h1.jsx-4179034185 span.jsx-4179034185{color:#fff;}.header.jsx-4179034185{border-bottom:1px solid #222222;padding:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL3BhZ2VzL2NhbnZhcy1wcm90b3R5cGUtd2lwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThTVyxBQUc2QixBQU9qQixBQUdtQyxXQUhsQyxHQU5pQixlQUNOLEdBU0ksTUFSZixPQVNxQixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL29wb25kZXIvY29kZS9vbGl2ZXJfcG9uZGVyL2V2ZXJpcGl4ZWwvcGFnZXMvY2FudmFzLXByb3RvdHlwZS13aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYW52YXMnO1xuaW1wb3J0IFBpenppY2F0byAgZnJvbSAncGl6emljYXRvJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZCc7XG5cbmNvbnN0IFdJRFRIID0gMTAwMDtcbmNvbnN0IEhFSUdIVCA9IDEwMDA7XG5jb25zdCBTQ0FMRSA9IDE7XG5cbmxldCBnZXRNb3VzZVBvcyA9IChjdHgsIGV2dCkgPT4ge1xuICB2YXIgcmVjdCA9IGN0eC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgdmFyIHggPSBNYXRoLmZsb29yKChldnQuY2xpZW50WCAtIHJlY3QubGVmdCkgLyBTQ0FMRSk7XG4gIHZhciB5ID0gTWF0aC5mbG9vcigoZXZ0LmNsaWVudFkgLSByZWN0LnRvcCkgLyBTQ0FMRSk7XG5cbiAgLy8gRW5zdXJlIHdlIG5ldmVyIGdldCBudW1iZXJzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBjYW52YXMuXG4gIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB0aGUgbW91c2UgbW92ZXMgcXVpY2tseSBvZmYgdGhlIGNhbnZhcy5cbiAgeCA9IE1hdGgubWluKFdJRFRILTEsIHgpO1xuICB5ID0gTWF0aC5taW4oSEVJR0hULTEsIHkpO1xuXG4gIHggPSBNYXRoLm1heCgwLCB4KTtcbiAgeSA9IE1hdGgubWF4KDAsIHkpO1xuXG4gIHJldHVybiB7eCwgeX07XG59O1xuXG5sZXQgbXVsdGlwbHlQaXhlbHMgPSAoY3R4LCBmYWN0b3IpID0+IHtcbiAgLy8gQnJpZ2h0ZW4gdGhlIGNhbnZhc1xuICAvLyBnZXQgcmF3IHBpeGVsIHZhbHVlc1xuICB2YXIgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuICAvLyBtb2RpZnkgZWFjaCBwaXhlbFxuICBmb3IodmFyIGkgPSAwOyBpIDwgcGl4ZWxzLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgIC8vIHJlZCBpcyBwaXhlbHNbaV07XG4gICAgIC8vIGdyZWVuIGlzIHBpeGVsc1tpICsgMV07XG4gICAgIC8vIGJsdWUgaXMgcGl4ZWxzW2kgKyAyXTtcbiAgICAgLy8gYWxwaGEgaXMgcGl4ZWxzW2kgKyAzXTtcbiAgICAgLy8gYWxsIHZhbHVlcyBhcmUgaW50ZWdlcnMgYmV0d2VlbiAwIGFuZCAyNTVcbiAgICAgLy8gZG8gd2l0aCB0aGVtIHdoYXRldmVyIHlvdSBsaWtlLiBIZXJlIHdlIGFyZSByZWR1Y2luZyB0aGUgY29sb3Igdm9sdW1lIHRvIDc1JVxuICAgICAvLyB3aXRob3V0IGFmZmVjdGluZyB0aGUgYWxwaGEgY2hhbm5lbFxuICAgICBwaXhlbHNbaV0gPSBwaXhlbHNbaV0gKiBmYWN0b3I7XG4gICAgIHBpeGVsc1tpKzFdID0gcGl4ZWxzW2krMV0gKiBmYWN0b3I7XG4gICAgIHBpeGVsc1tpKzJdID0gcGl4ZWxzW2krMl0gKiBmYWN0b3I7XG4gIH1cbiAgLy8gd3JpdGUgbW9kaWZpZWQgcGl4ZWxzIGJhY2sgdG8gY2FudmFzXG4gIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcbn1cblxubGV0IG11bHRpcGx5UGl4ZWwgPSAoY3R4LCB4LCB5LCBmYWN0b3IpID0+IHtcbiAgLy8gQnJpZ2h0ZW4gdGhlIGNhbnZhc1xuICAvLyBnZXQgcmF3IHBpeGVsIHZhbHVlc1xuICB2YXIgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKTtcbiAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuICAvLyBtb2RpZnkgZWFjaCBwaXhlbFxuICBmb3IodmFyIGkgPSAwOyBpIDwgcGl4ZWxzLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgIC8vIHJlZCBpcyBwaXhlbHNbaV07XG4gICAgIC8vIGdyZWVuIGlzIHBpeGVsc1tpICsgMV07XG4gICAgIC8vIGJsdWUgaXMgcGl4ZWxzW2kgKyAyXTtcbiAgICAgLy8gYWxwaGEgaXMgcGl4ZWxzW2kgKyAzXTtcbiAgICAgLy8gYWxsIHZhbHVlcyBhcmUgaW50ZWdlcnMgYmV0d2VlbiAwIGFuZCAyNTVcbiAgICAgLy8gZG8gd2l0aCB0aGVtIHdoYXRldmVyIHlvdSBsaWtlLiBIZXJlIHdlIGFyZSByZWR1Y2luZyB0aGUgY29sb3Igdm9sdW1lIHRvIDc1JVxuICAgICAvLyB3aXRob3V0IGFmZmVjdGluZyB0aGUgYWxwaGEgY2hhbm5lbFxuICAgICBwaXhlbHNbaV0gPSBwaXhlbHNbaV0gKiBmYWN0b3I7XG4gICAgIHBpeGVsc1tpKzFdID0gcGl4ZWxzW2krMV0gKiBmYWN0b3I7XG4gICAgIHBpeGVsc1tpKzJdID0gcGl4ZWxzW2krMl0gKiBmYWN0b3I7XG4gIH1cbiAgLy8gd3JpdGUgbW9kaWZpZWQgcGl4ZWxzIGJhY2sgdG8gY2FudmFzXG4gIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB4LCB5KTtcbn1cblxuZXhwb3J0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0U291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnc3RhcnQubXAzXCIpO1xuICAgICAgdGhpcy5kcmFnZ2luZ1NvdW5kID0gbmV3IFBpenppY2F0by5Tb3VuZChcIi9zdGF0aWMvZHJhZ2dpbmcubXAzXCIpO1xuICAgICAgdGhpcy5kcmFnU3RvcFNvdW5kID0gbmV3IFBpenppY2F0by5Tb3VuZChcIi9zdGF0aWMvZHJhZ2VuZC5tcDNcIik7XG4gICAgICB0aGlzLmRyYWdGYWlsU291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnZmFpbC5tcDNcIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIHNlbGVjdGlvbjoge30sXG4gICAgICBjdXJyZW50TW91c2VQb3NpdGlvbjoge3g6IDAsIHk6IDB9LFxuICAgIH1cbiAgfVxuXG4gIGNhbnZhc1JlYWR5ID0gKGN0eCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN0eCk7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5pbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsMCxXSURUSCxIRUlHSFQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uRXNjLCBmYWxzZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Fc2MsIGZhbHNlKTtcbiAgfVxuXG4gIG9uRXNjID0gKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICAvLyBSZXR1cm4gY2FudmFzIHRvIG9yaWdpbmFsIGJyaWdodG5lc3MuXG4gICAgdGhpcy5jdHgucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLDApXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGlvbjoge31cbiAgICB9KVxuICB9XG5cbiAgbW91c2VNb3ZlID0gKGN0eCwgZXZ0LCBkcmFnZ2luZykgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmRyYWdnaW5nKSB7XG4gICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjdHgsIGV2dCk7XG5cbiAgICAgIHZhciB4MSA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxO1xuICAgICAgdmFyIHkxID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTE7XG4gICAgICB2YXIgeDIgPSBtb3VzZVBvcy54O1xuICAgICAgdmFyIHkyID0gbW91c2VQb3MueTtcblxuICAgICAgaWYgKHgxID4geDIpIHtcbiAgICAgICAgeDEgPSB4MjtcbiAgICAgICAgeDIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MTtcbiAgICAgIH1cblxuICAgICAgaWYgKHkxID4geTIpIHtcbiAgICAgICAgeTEgPSB5MjtcbiAgICAgICAgeTIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGlvbjoge3gxOiB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MSwgeTE6IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxLCB4MjogbW91c2VQb3MueCwgeTI6IG1vdXNlUG9zLnl9XG4gICAgICB9KTtcblxuICAgICAgbGV0IHdpZHRoID0geDIgLSB4MTtcbiAgICAgIGxldCBoZWlnaHQgPSB5MiAtIHkxO1xuXG4gICAgICBpZiAod2lkdGggPj0gMCAmJiBoZWlnaHQgPj0gMCkge1xuICAgICAgICBsZXQgaW1hZ2VEYXRhID0gdGhpcy5zZWxlY3Rpb25Db250ZXh0LmdldEltYWdlRGF0YShcbiAgICAgICAgICB4MSxcbiAgICAgICAgICB5MSxcbiAgICAgICAgICB3aWR0aCsxLFxuICAgICAgICAgIGhlaWdodCsxLFxuICAgICAgICApXG5cbiAgICAgICAgbGV0IHNlbGVjdGlvbkN0eCA9IHRoaXMucmVmcy5zZWxlY3Rpb25DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBzZWxlY3Rpb25DdHguY2xlYXJSZWN0KDAsIDAsIDEwMCwgMTAwKTtcblxuICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKVxuICAgICAgICBtdWx0aXBseVBpeGVscyhjdHgsIDAuNSlcbiAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHgxLCB5MSlcbiAgICAgICAgc2VsZWN0aW9uQ3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsMCwwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY3R4LCBldnQpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudE1vdXNlUG9zaXRpb246IG1vdXNlUG9zXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuaG92ZXJpbmcpIHtcbiAgICAgICAgLy8gbXVsdGlwbHlQaXhlbChjdHgsIHRoaXMuc3RhdGUuY3VycmVudE1vdXNlUG9zaXRpb24ueCwgdGhpcy5zdGF0ZS5jdXJyZW50TW91c2VQb3NpdGlvbi55LCAyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHlQaXhlbHMoY3R4LCAwLjUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhvdmVyaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0ID0gKGN0eCwgZXZ0KSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMubW91c2VVcChjdHgsIGV2dCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50TW91c2VQb3NpdGlvbjoge3g6MCwgeTowfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5ob3ZlcmluZykge1xuICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaG92ZXJpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24gPSAoY3R4LCBldnQpID0+IHtcbiAgICAvLyBSZXR1cm4gY2FudmFzIHRvIG9yaWdpbmFsIGJyaWdodG5lc3MuXG4gICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwwKVxuXG4gICAgdGhpcy5zZWxlY3Rpb25DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuc2VsZWN0aW9uQ2FudmFzLndpZHRoID0gV0lEVEg7XG4gICAgdGhpcy5zZWxlY3Rpb25DYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xuICAgIHRoaXMuc2VsZWN0aW9uQ29udGV4dCA9IHRoaXMuc2VsZWN0aW9uQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKTtcblxuICAgIHRoaXMuZHJhZ1N0YXJ0U291bmQucGxheSgpO1xuICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGN0eCwgZXZ0KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYWdnaW5nOiB0cnVlLFxuICAgICAgc2VsZWN0aW9uOiB7XG4gICAgICAgIHgxOiBtb3VzZVBvcy54LFxuICAgICAgICB5MTogbW91c2VQb3MueSxcbiAgICAgICAgeDI6IG1vdXNlUG9zLngsXG4gICAgICAgIHkyOiBtb3VzZVBvcy55XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEYXJrZW4gdGhlIGNhbnZhcy5cbiAgICBtdWx0aXBseVBpeGVscyhjdHgsIDAuNTApO1xuICAgIHRoaXMubW91c2VNb3ZlKGN0eCxldnQpO1xuICB9XG5cbiAgbW91c2VVcCA9IChjdHgsIGV2dCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmRyYWdnaW5nKSB7XG4gICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjdHgsIGV2dCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICBzZWxlY3Rpb246IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuc2VsZWN0aW9uLCB7eDI6IG1vdXNlUG9zLngsIHkyOiBtb3VzZVBvcy55fSlcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgd2lkdGggPSBtb3VzZVBvcy54IC0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDE7XG4gICAgICBsZXQgaGVpZ2h0ID0gbW91c2VQb3MueSAtIHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxXG5cbiAgICAgIGxldCBzZWxlY3Rpb25DdHggPSB0aGlzLnJlZnMuc2VsZWN0aW9uQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHNlbGVjdGlvbkN0eC5jbGVhclJlY3QoMCwgMCwgMTAwLCAxMDApO1xuXG4gICAgICBpZiAod2lkdGggIT09IDAgJiYgaGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgIC8vIEdyYWIgdGhlIHNlbGVjdGVkIHJlZ2lvbiBhbmQgcHV0IGl0IGluIHRoZSBzZWxlY3Rpb24gcHJldmlldy5cbiAgICAgICAgbGV0IGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDEsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTEsXG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICApXG5cbiAgICAgICAgc2VsZWN0aW9uQ3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsMCwwKTtcblxuICAgICAgICB0aGlzLmRyYWdTdG9wU291bmQucGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmFnU3RvcFNvdW5kLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWxlY3RlZFBpeGVscyA9ICgpID0+IHtcbiAgICB2YXIgcGl4ZWxzID0gW107XG5cbiAgICB2YXIgeDEgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MTtcbiAgICB2YXIgeTEgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MTtcbiAgICB2YXIgeDIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MjtcbiAgICB2YXIgeTIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MjtcblxuICAgIGlmICh4MSA+IHgyKSB7XG4gICAgICB4MSA9IHgyO1xuICAgICAgeDIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MTtcbiAgICB9XG5cbiAgICBpZiAoeTEgPiB5Mikge1xuICAgICAgeTEgPSB5MjtcbiAgICAgIHkyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTE7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgeSA9IHkxOyB5IDw9IHkyOyB5KyspIHtcbiAgICAgIGZvciAodmFyIHggPSB4MTsgeCA8PSB4MjsgeCsrKSB7XG4gICAgICAgIHBpeGVscy5wdXNoKCh5KihXSURUSCkpK3gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBpeGVscztcbiAgfVxuXG4gIHJvd1JlbmRlcmVyID0gKHtcbiAgICBrZXksICAgICAgICAgLy8gVW5pcXVlIGtleSB3aXRoaW4gYXJyYXkgb2Ygcm93c1xuICAgIGluZGV4LCAgICAgICAvLyBJbmRleCBvZiByb3cgd2l0aGluIGNvbGxlY3Rpb25cbiAgICBpc1Njcm9sbGluZywgLy8gVGhlIExpc3QgaXMgY3VycmVudGx5IGJlaW5nIHNjcm9sbGVkXG4gICAgaXNWaXNpYmxlLCAgIC8vIFRoaXMgcm93IGlzIHZpc2libGUgd2l0aGluIHRoZSBMaXN0IChlZyBpdCBpcyBub3QgYW4gb3ZlcnNjYW5uZWQgcm93KVxuICAgIHN0eWxlICAgICAgICAvLyBTdHlsZSBvYmplY3QgdG8gYmUgYXBwbGllZCB0byByb3cgKHRvIHBvc2l0aW9uIGl0KVxuICB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgID5cbiAgICAgICAgUGl4ZWwgI3t0aGlzLnNlbGVjdGVkUGl4ZWxzKClbaW5kZXhdfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMT5ldmVyaTxzcGFuPlBpeGVsPC9zcGFuPjwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM4NTg1ODU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSBzcGFuIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyMjIyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENhbnZhc1xuICAgICAgICB3aWR0aD17V0lEVEh9XG4gICAgICAgIGhlaWdodD17SEVJR0hUfVxuICAgICAgICBvblJlYWR5PXt0aGlzLmNhbnZhc1JlYWR5fVxuICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLm1vdXNlT3V0fVxuICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5tb3VzZU1vdmV9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZVVwPXt0aGlzLm1vdXNlVXB9XG4gICAgICAgIHNjYWxlPXtTQ0FMRX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblByZXZpZXdcIj5cbiAgICAgICAgICAgIDxjYW52YXMgd2lkdGg9XCIxMDBweFwiIGhlaWdodD1cIjEwMHB4XCIgcmVmPVwic2VsZWN0aW9uQ2FudmFzXCI+PC9jYW52YXM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDEgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBTZWxlY3Rpb24mbmJzcDtcbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5jbGVhclNlbGVjdGlvbn0+W0VTQ108L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIFwiTm8gc2VsZWN0aW9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICh0aGlzLnN0YXRlLnNlbGVjdGlvbi54MSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNlbGVjdGlvbi54MSA9PT0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDIgJiYgdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTEgPT0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTIpID9cbiAgICAgICAgICAgICAgICA8ZGl2Pih7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDF9LHt0aGlzLnN0YXRlLnNlbGVjdGlvbi55MX0pPC9kaXY+XG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPGRpdj4oe3RoaXMuc3RhdGUuc2VsZWN0aW9uLngxfSx7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTF9KSB0byAoe3RoaXMuc3RhdGUuc2VsZWN0aW9uLngyfSx7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTJ9KTwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPGRpdj4oe3RoaXMuc3RhdGUuY3VycmVudE1vdXNlUG9zaXRpb24ueH0se3RoaXMuc3RhdGUuY3VycmVudE1vdXNlUG9zaXRpb24ueX0pPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaXhlbExpc3RcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRyYWdnaW5nID8gXCJcIiA6ICAgPExpc3RcbiAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgIHJvd0NvdW50PXt0aGlzLnNlbGVjdGVkUGl4ZWxzKCkubGVuZ3RofVxuICAgICAgICAgICAgcm93SGVpZ2h0PXsyMH1cbiAgICAgICAgICAgIHJvd1JlbmRlcmVyPXt0aGlzLnJvd1JlbmRlcmVyfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY29udHJvbHMge1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGl4ZWxMaXN0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGl4ZWxMaXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgIHdpZHRoOjEwcHg7IC8vIG1hbmFnZSBzY3JvbGxiYXIgd2lkdGggaGVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBpeGVsTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIgKiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7IC8vIG1hbmFnZSBzY3JvbGxiYXIgYmFja2dyb3VuZCBjb2xvciBoZXJlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGl4ZWxMaXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSg1MCw1MCw1MCwxKSAhaW1wb3J0YW50OyAvLyBtYW5hZ2Ugc2Nyb2xsYmFyIHRodW1iIGJhY2tncm91bmQgY29sb3IgaGVyZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0aW9uUHJldmlldyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBjb2xvcjogIzg1ODU4NTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIyMlxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/pages/canvas-prototype-wip.js */",
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_canvas__WEBPACK_IMPORTED_MODULE_2__["Canvas"], {
        width: WIDTH,
        height: HEIGHT,
        onReady: this.canvasReady,
        onMouseOut: this.mouseOut,
        onMouseMove: this.mouseMove,
        onMouseDown: this.mouseDown,
        onMouseUp: this.mouseUp,
        scale: SCALE,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1921656205" + " " + "controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1921656205" + " " + "selection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1921656205" + " " + "selectionPreview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        width: "100px",
        height: "100px",
        ref: "selectionCanvas",
        className: "jsx-1921656205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1921656205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, this.state.selection.x1 !== undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1921656205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Selection\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.clearSelection,
        className: "jsx-1921656205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, "[ESC]")) : "No selection"), this.state.selection.x1 !== undefined ? this.state.selection.x1 === this.state.selection.x2 && this.state.selection.y1 == this.state.selection.y2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1921656205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, "(", this.state.selection.x1, ",", this.state.selection.y1, ")") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1921656205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "(", this.state.selection.x1, ",", this.state.selection.y1, ") to (", this.state.selection.x2, ",", this.state.selection.y2, ")") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1921656205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, "(", this.state.currentMousePosition.x, ",", this.state.currentMousePosition.y, ")")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-1921656205",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1921656205" + " " + "pixelList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, this.state.dragging ? "" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_4__["List"], {
        width: 300,
        height: 300,
        rowCount: this.selectedPixels().length,
        rowHeight: 20,
        rowRenderer: this.rowRenderer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1921656205",
        css: ".controls.jsx-1921656205{float:left;color:#fff;font-size:16px;width:320px;}.pixelList.jsx-1921656205{height:600px;overflow-y:scroll;}.pixelList.jsx-1921656205::-webkit-scrollbar{width:10px;}.pixelList.jsx-1921656205::-webkit-scrollbar *.jsx-1921656205{background:#222;}.pixelList.jsx-1921656205::-webkit-scrollbar-thumb{background:rgba(50,50,50,1) !important;}.selectionPreview.jsx-1921656205{width:100px;height:100px;border:1px solid #222222;float:left;margin-right:20px;margin-bottom:10px;}h2.jsx-1921656205{color:#858585;font-size:16px;margin:0;margin-bottom:10px;}hr.jsx-1921656205{clear:both;border-color:#222;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL3BhZ2VzL2NhbnZhcy1wcm90b3R5cGUtd2lwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFYVyxBQUcwQixBQU9FLEFBS0gsQUFHTSxBQUdzQixBQUkxQixBQVNFLEFBT0gsV0FyQ0EsQUFZYixBQTJCRCxDQWpCZ0IsQ0FmSyxDQXdCSCxFQWhCakIsTUFkaUIsR0FzQlUsSUFTaEIsQUFPWCxFQS9CQSxNQU5jLENBK0JPLENBZnJCLFVBZkEsQ0FxQmEsT0FVYixJQVRvQixrQkFDQyxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL29wb25kZXIvY29kZS9vbGl2ZXJfcG9uZGVyL2V2ZXJpcGl4ZWwvcGFnZXMvY2FudmFzLXByb3RvdHlwZS13aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYW52YXMnO1xuaW1wb3J0IFBpenppY2F0byAgZnJvbSAncGl6emljYXRvJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZCc7XG5cbmNvbnN0IFdJRFRIID0gMTAwMDtcbmNvbnN0IEhFSUdIVCA9IDEwMDA7XG5jb25zdCBTQ0FMRSA9IDE7XG5cbmxldCBnZXRNb3VzZVBvcyA9IChjdHgsIGV2dCkgPT4ge1xuICB2YXIgcmVjdCA9IGN0eC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgdmFyIHggPSBNYXRoLmZsb29yKChldnQuY2xpZW50WCAtIHJlY3QubGVmdCkgLyBTQ0FMRSk7XG4gIHZhciB5ID0gTWF0aC5mbG9vcigoZXZ0LmNsaWVudFkgLSByZWN0LnRvcCkgLyBTQ0FMRSk7XG5cbiAgLy8gRW5zdXJlIHdlIG5ldmVyIGdldCBudW1iZXJzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBjYW52YXMuXG4gIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB0aGUgbW91c2UgbW92ZXMgcXVpY2tseSBvZmYgdGhlIGNhbnZhcy5cbiAgeCA9IE1hdGgubWluKFdJRFRILTEsIHgpO1xuICB5ID0gTWF0aC5taW4oSEVJR0hULTEsIHkpO1xuXG4gIHggPSBNYXRoLm1heCgwLCB4KTtcbiAgeSA9IE1hdGgubWF4KDAsIHkpO1xuXG4gIHJldHVybiB7eCwgeX07XG59O1xuXG5sZXQgbXVsdGlwbHlQaXhlbHMgPSAoY3R4LCBmYWN0b3IpID0+IHtcbiAgLy8gQnJpZ2h0ZW4gdGhlIGNhbnZhc1xuICAvLyBnZXQgcmF3IHBpeGVsIHZhbHVlc1xuICB2YXIgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuICAvLyBtb2RpZnkgZWFjaCBwaXhlbFxuICBmb3IodmFyIGkgPSAwOyBpIDwgcGl4ZWxzLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgIC8vIHJlZCBpcyBwaXhlbHNbaV07XG4gICAgIC8vIGdyZWVuIGlzIHBpeGVsc1tpICsgMV07XG4gICAgIC8vIGJsdWUgaXMgcGl4ZWxzW2kgKyAyXTtcbiAgICAgLy8gYWxwaGEgaXMgcGl4ZWxzW2kgKyAzXTtcbiAgICAgLy8gYWxsIHZhbHVlcyBhcmUgaW50ZWdlcnMgYmV0d2VlbiAwIGFuZCAyNTVcbiAgICAgLy8gZG8gd2l0aCB0aGVtIHdoYXRldmVyIHlvdSBsaWtlLiBIZXJlIHdlIGFyZSByZWR1Y2luZyB0aGUgY29sb3Igdm9sdW1lIHRvIDc1JVxuICAgICAvLyB3aXRob3V0IGFmZmVjdGluZyB0aGUgYWxwaGEgY2hhbm5lbFxuICAgICBwaXhlbHNbaV0gPSBwaXhlbHNbaV0gKiBmYWN0b3I7XG4gICAgIHBpeGVsc1tpKzFdID0gcGl4ZWxzW2krMV0gKiBmYWN0b3I7XG4gICAgIHBpeGVsc1tpKzJdID0gcGl4ZWxzW2krMl0gKiBmYWN0b3I7XG4gIH1cbiAgLy8gd3JpdGUgbW9kaWZpZWQgcGl4ZWxzIGJhY2sgdG8gY2FudmFzXG4gIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcbn1cblxubGV0IG11bHRpcGx5UGl4ZWwgPSAoY3R4LCB4LCB5LCBmYWN0b3IpID0+IHtcbiAgLy8gQnJpZ2h0ZW4gdGhlIGNhbnZhc1xuICAvLyBnZXQgcmF3IHBpeGVsIHZhbHVlc1xuICB2YXIgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKTtcbiAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuICAvLyBtb2RpZnkgZWFjaCBwaXhlbFxuICBmb3IodmFyIGkgPSAwOyBpIDwgcGl4ZWxzLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgIC8vIHJlZCBpcyBwaXhlbHNbaV07XG4gICAgIC8vIGdyZWVuIGlzIHBpeGVsc1tpICsgMV07XG4gICAgIC8vIGJsdWUgaXMgcGl4ZWxzW2kgKyAyXTtcbiAgICAgLy8gYWxwaGEgaXMgcGl4ZWxzW2kgKyAzXTtcbiAgICAgLy8gYWxsIHZhbHVlcyBhcmUgaW50ZWdlcnMgYmV0d2VlbiAwIGFuZCAyNTVcbiAgICAgLy8gZG8gd2l0aCB0aGVtIHdoYXRldmVyIHlvdSBsaWtlLiBIZXJlIHdlIGFyZSByZWR1Y2luZyB0aGUgY29sb3Igdm9sdW1lIHRvIDc1JVxuICAgICAvLyB3aXRob3V0IGFmZmVjdGluZyB0aGUgYWxwaGEgY2hhbm5lbFxuICAgICBwaXhlbHNbaV0gPSBwaXhlbHNbaV0gKiBmYWN0b3I7XG4gICAgIHBpeGVsc1tpKzFdID0gcGl4ZWxzW2krMV0gKiBmYWN0b3I7XG4gICAgIHBpeGVsc1tpKzJdID0gcGl4ZWxzW2krMl0gKiBmYWN0b3I7XG4gIH1cbiAgLy8gd3JpdGUgbW9kaWZpZWQgcGl4ZWxzIGJhY2sgdG8gY2FudmFzXG4gIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB4LCB5KTtcbn1cblxuZXhwb3J0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0U291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnc3RhcnQubXAzXCIpO1xuICAgICAgdGhpcy5kcmFnZ2luZ1NvdW5kID0gbmV3IFBpenppY2F0by5Tb3VuZChcIi9zdGF0aWMvZHJhZ2dpbmcubXAzXCIpO1xuICAgICAgdGhpcy5kcmFnU3RvcFNvdW5kID0gbmV3IFBpenppY2F0by5Tb3VuZChcIi9zdGF0aWMvZHJhZ2VuZC5tcDNcIik7XG4gICAgICB0aGlzLmRyYWdGYWlsU291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnZmFpbC5tcDNcIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIHNlbGVjdGlvbjoge30sXG4gICAgICBjdXJyZW50TW91c2VQb3NpdGlvbjoge3g6IDAsIHk6IDB9LFxuICAgIH1cbiAgfVxuXG4gIGNhbnZhc1JlYWR5ID0gKGN0eCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN0eCk7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5pbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsMCxXSURUSCxIRUlHSFQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uRXNjLCBmYWxzZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Fc2MsIGZhbHNlKTtcbiAgfVxuXG4gIG9uRXNjID0gKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICAvLyBSZXR1cm4gY2FudmFzIHRvIG9yaWdpbmFsIGJyaWdodG5lc3MuXG4gICAgdGhpcy5jdHgucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLDApXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGlvbjoge31cbiAgICB9KVxuICB9XG5cbiAgbW91c2VNb3ZlID0gKGN0eCwgZXZ0LCBkcmFnZ2luZykgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmRyYWdnaW5nKSB7XG4gICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjdHgsIGV2dCk7XG5cbiAgICAgIHZhciB4MSA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxO1xuICAgICAgdmFyIHkxID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTE7XG4gICAgICB2YXIgeDIgPSBtb3VzZVBvcy54O1xuICAgICAgdmFyIHkyID0gbW91c2VQb3MueTtcblxuICAgICAgaWYgKHgxID4geDIpIHtcbiAgICAgICAgeDEgPSB4MjtcbiAgICAgICAgeDIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MTtcbiAgICAgIH1cblxuICAgICAgaWYgKHkxID4geTIpIHtcbiAgICAgICAgeTEgPSB5MjtcbiAgICAgICAgeTIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGlvbjoge3gxOiB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MSwgeTE6IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxLCB4MjogbW91c2VQb3MueCwgeTI6IG1vdXNlUG9zLnl9XG4gICAgICB9KTtcblxuICAgICAgbGV0IHdpZHRoID0geDIgLSB4MTtcbiAgICAgIGxldCBoZWlnaHQgPSB5MiAtIHkxO1xuXG4gICAgICBpZiAod2lkdGggPj0gMCAmJiBoZWlnaHQgPj0gMCkge1xuICAgICAgICBsZXQgaW1hZ2VEYXRhID0gdGhpcy5zZWxlY3Rpb25Db250ZXh0LmdldEltYWdlRGF0YShcbiAgICAgICAgICB4MSxcbiAgICAgICAgICB5MSxcbiAgICAgICAgICB3aWR0aCsxLFxuICAgICAgICAgIGhlaWdodCsxLFxuICAgICAgICApXG5cbiAgICAgICAgbGV0IHNlbGVjdGlvbkN0eCA9IHRoaXMucmVmcy5zZWxlY3Rpb25DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBzZWxlY3Rpb25DdHguY2xlYXJSZWN0KDAsIDAsIDEwMCwgMTAwKTtcblxuICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKVxuICAgICAgICBtdWx0aXBseVBpeGVscyhjdHgsIDAuNSlcbiAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHgxLCB5MSlcbiAgICAgICAgc2VsZWN0aW9uQ3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsMCwwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY3R4LCBldnQpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudE1vdXNlUG9zaXRpb246IG1vdXNlUG9zXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuaG92ZXJpbmcpIHtcbiAgICAgICAgLy8gbXVsdGlwbHlQaXhlbChjdHgsIHRoaXMuc3RhdGUuY3VycmVudE1vdXNlUG9zaXRpb24ueCwgdGhpcy5zdGF0ZS5jdXJyZW50TW91c2VQb3NpdGlvbi55LCAyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHlQaXhlbHMoY3R4LCAwLjUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhvdmVyaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0ID0gKGN0eCwgZXZ0KSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMubW91c2VVcChjdHgsIGV2dCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50TW91c2VQb3NpdGlvbjoge3g6MCwgeTowfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5ob3ZlcmluZykge1xuICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaG92ZXJpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24gPSAoY3R4LCBldnQpID0+IHtcbiAgICAvLyBSZXR1cm4gY2FudmFzIHRvIG9yaWdpbmFsIGJyaWdodG5lc3MuXG4gICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwwKVxuXG4gICAgdGhpcy5zZWxlY3Rpb25DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuc2VsZWN0aW9uQ2FudmFzLndpZHRoID0gV0lEVEg7XG4gICAgdGhpcy5zZWxlY3Rpb25DYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xuICAgIHRoaXMuc2VsZWN0aW9uQ29udGV4dCA9IHRoaXMuc2VsZWN0aW9uQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKTtcblxuICAgIHRoaXMuZHJhZ1N0YXJ0U291bmQucGxheSgpO1xuICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGN0eCwgZXZ0KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYWdnaW5nOiB0cnVlLFxuICAgICAgc2VsZWN0aW9uOiB7XG4gICAgICAgIHgxOiBtb3VzZVBvcy54LFxuICAgICAgICB5MTogbW91c2VQb3MueSxcbiAgICAgICAgeDI6IG1vdXNlUG9zLngsXG4gICAgICAgIHkyOiBtb3VzZVBvcy55XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEYXJrZW4gdGhlIGNhbnZhcy5cbiAgICBtdWx0aXBseVBpeGVscyhjdHgsIDAuNTApO1xuICAgIHRoaXMubW91c2VNb3ZlKGN0eCxldnQpO1xuICB9XG5cbiAgbW91c2VVcCA9IChjdHgsIGV2dCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmRyYWdnaW5nKSB7XG4gICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjdHgsIGV2dCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICBzZWxlY3Rpb246IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuc2VsZWN0aW9uLCB7eDI6IG1vdXNlUG9zLngsIHkyOiBtb3VzZVBvcy55fSlcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgd2lkdGggPSBtb3VzZVBvcy54IC0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDE7XG4gICAgICBsZXQgaGVpZ2h0ID0gbW91c2VQb3MueSAtIHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxXG5cbiAgICAgIGxldCBzZWxlY3Rpb25DdHggPSB0aGlzLnJlZnMuc2VsZWN0aW9uQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHNlbGVjdGlvbkN0eC5jbGVhclJlY3QoMCwgMCwgMTAwLCAxMDApO1xuXG4gICAgICBpZiAod2lkdGggIT09IDAgJiYgaGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgIC8vIEdyYWIgdGhlIHNlbGVjdGVkIHJlZ2lvbiBhbmQgcHV0IGl0IGluIHRoZSBzZWxlY3Rpb24gcHJldmlldy5cbiAgICAgICAgbGV0IGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDEsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTEsXG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICApXG5cbiAgICAgICAgc2VsZWN0aW9uQ3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsMCwwKTtcblxuICAgICAgICB0aGlzLmRyYWdTdG9wU291bmQucGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmFnU3RvcFNvdW5kLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWxlY3RlZFBpeGVscyA9ICgpID0+IHtcbiAgICB2YXIgcGl4ZWxzID0gW107XG5cbiAgICB2YXIgeDEgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MTtcbiAgICB2YXIgeTEgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MTtcbiAgICB2YXIgeDIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MjtcbiAgICB2YXIgeTIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MjtcblxuICAgIGlmICh4MSA+IHgyKSB7XG4gICAgICB4MSA9IHgyO1xuICAgICAgeDIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MTtcbiAgICB9XG5cbiAgICBpZiAoeTEgPiB5Mikge1xuICAgICAgeTEgPSB5MjtcbiAgICAgIHkyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTE7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgeSA9IHkxOyB5IDw9IHkyOyB5KyspIHtcbiAgICAgIGZvciAodmFyIHggPSB4MTsgeCA8PSB4MjsgeCsrKSB7XG4gICAgICAgIHBpeGVscy5wdXNoKCh5KihXSURUSCkpK3gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBpeGVscztcbiAgfVxuXG4gIHJvd1JlbmRlcmVyID0gKHtcbiAgICBrZXksICAgICAgICAgLy8gVW5pcXVlIGtleSB3aXRoaW4gYXJyYXkgb2Ygcm93c1xuICAgIGluZGV4LCAgICAgICAvLyBJbmRleCBvZiByb3cgd2l0aGluIGNvbGxlY3Rpb25cbiAgICBpc1Njcm9sbGluZywgLy8gVGhlIExpc3QgaXMgY3VycmVudGx5IGJlaW5nIHNjcm9sbGVkXG4gICAgaXNWaXNpYmxlLCAgIC8vIFRoaXMgcm93IGlzIHZpc2libGUgd2l0aGluIHRoZSBMaXN0IChlZyBpdCBpcyBub3QgYW4gb3ZlcnNjYW5uZWQgcm93KVxuICAgIHN0eWxlICAgICAgICAvLyBTdHlsZSBvYmplY3QgdG8gYmUgYXBwbGllZCB0byByb3cgKHRvIHBvc2l0aW9uIGl0KVxuICB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgID5cbiAgICAgICAgUGl4ZWwgI3t0aGlzLnNlbGVjdGVkUGl4ZWxzKClbaW5kZXhdfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMT5ldmVyaTxzcGFuPlBpeGVsPC9zcGFuPjwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM4NTg1ODU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSBzcGFuIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyMjIyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENhbnZhc1xuICAgICAgICB3aWR0aD17V0lEVEh9XG4gICAgICAgIGhlaWdodD17SEVJR0hUfVxuICAgICAgICBvblJlYWR5PXt0aGlzLmNhbnZhc1JlYWR5fVxuICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLm1vdXNlT3V0fVxuICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5tb3VzZU1vdmV9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZVVwPXt0aGlzLm1vdXNlVXB9XG4gICAgICAgIHNjYWxlPXtTQ0FMRX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblByZXZpZXdcIj5cbiAgICAgICAgICAgIDxjYW52YXMgd2lkdGg9XCIxMDBweFwiIGhlaWdodD1cIjEwMHB4XCIgcmVmPVwic2VsZWN0aW9uQ2FudmFzXCI+PC9jYW52YXM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDEgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBTZWxlY3Rpb24mbmJzcDtcbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5jbGVhclNlbGVjdGlvbn0+W0VTQ108L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIFwiTm8gc2VsZWN0aW9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICh0aGlzLnN0YXRlLnNlbGVjdGlvbi54MSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNlbGVjdGlvbi54MSA9PT0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDIgJiYgdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTEgPT0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTIpID9cbiAgICAgICAgICAgICAgICA8ZGl2Pih7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDF9LHt0aGlzLnN0YXRlLnNlbGVjdGlvbi55MX0pPC9kaXY+XG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPGRpdj4oe3RoaXMuc3RhdGUuc2VsZWN0aW9uLngxfSx7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTF9KSB0byAoe3RoaXMuc3RhdGUuc2VsZWN0aW9uLngyfSx7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTJ9KTwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPGRpdj4oe3RoaXMuc3RhdGUuY3VycmVudE1vdXNlUG9zaXRpb24ueH0se3RoaXMuc3RhdGUuY3VycmVudE1vdXNlUG9zaXRpb24ueX0pPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaXhlbExpc3RcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRyYWdnaW5nID8gXCJcIiA6ICAgPExpc3RcbiAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgIHJvd0NvdW50PXt0aGlzLnNlbGVjdGVkUGl4ZWxzKCkubGVuZ3RofVxuICAgICAgICAgICAgcm93SGVpZ2h0PXsyMH1cbiAgICAgICAgICAgIHJvd1JlbmRlcmVyPXt0aGlzLnJvd1JlbmRlcmVyfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY29udHJvbHMge1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGl4ZWxMaXN0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGl4ZWxMaXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgIHdpZHRoOjEwcHg7IC8vIG1hbmFnZSBzY3JvbGxiYXIgd2lkdGggaGVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBpeGVsTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIgKiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7IC8vIG1hbmFnZSBzY3JvbGxiYXIgYmFja2dyb3VuZCBjb2xvciBoZXJlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGl4ZWxMaXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSg1MCw1MCw1MCwxKSAhaW1wb3J0YW50OyAvLyBtYW5hZ2Ugc2Nyb2xsYmFyIHRodW1iIGJhY2tncm91bmQgY29sb3IgaGVyZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0aW9uUHJldmlldyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBjb2xvcjogIzg1ODU4NTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIyMlxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/pages/canvas-prototype-wip.js */",
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/canvas-prototype-wip")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=canvas-prototype-wip.js.2c4e48b03c248ae749f8.hot-update.js.map