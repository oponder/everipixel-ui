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
var SCALE = 10;

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
        css: "h1.jsx-4179034185{color:#858585;font-size:24px;margin:0;}h1.jsx-4179034185 span.jsx-4179034185{color:#fff;}.header.jsx-4179034185{border-bottom:1px solid #222222;padding:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL3BhZ2VzL2NhbnZhcy1wcm90b3R5cGUtd2lwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThTVyxBQUc2QixBQU9qQixBQUdtQyxXQUhsQyxHQU5pQixlQUNOLEdBU0ksTUFSZixPQVNxQixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL29wb25kZXIvY29kZS9vbGl2ZXJfcG9uZGVyL2V2ZXJpcGl4ZWwvcGFnZXMvY2FudmFzLXByb3RvdHlwZS13aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYW52YXMnO1xuaW1wb3J0IFBpenppY2F0byAgZnJvbSAncGl6emljYXRvJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZCc7XG5cbmNvbnN0IFdJRFRIID0gMTAwMDtcbmNvbnN0IEhFSUdIVCA9IDEwMDA7XG5jb25zdCBTQ0FMRSA9IDEwO1xuXG5sZXQgZ2V0TW91c2VQb3MgPSAoY3R4LCBldnQpID0+IHtcbiAgdmFyIHJlY3QgPSBjdHguY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIHZhciB4ID0gTWF0aC5mbG9vcigoZXZ0LmNsaWVudFggLSByZWN0LmxlZnQpIC8gU0NBTEUpO1xuICB2YXIgeSA9IE1hdGguZmxvb3IoKGV2dC5jbGllbnRZIC0gcmVjdC50b3ApIC8gU0NBTEUpO1xuXG4gIC8vIEVuc3VyZSB3ZSBuZXZlciBnZXQgbnVtYmVycyBvdXQgb2YgdGhlIGJvdW5kcyBvZiB0aGUgY2FudmFzLlxuICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgdGhlIG1vdXNlIG1vdmVzIHF1aWNrbHkgb2ZmIHRoZSBjYW52YXMuXG4gIHggPSBNYXRoLm1pbihXSURUSC0xLCB4KTtcbiAgeSA9IE1hdGgubWluKEhFSUdIVC0xLCB5KTtcblxuICB4ID0gTWF0aC5tYXgoMCwgeCk7XG4gIHkgPSBNYXRoLm1heCgwLCB5KTtcblxuICByZXR1cm4ge3gsIHl9O1xufTtcblxubGV0IG11bHRpcGx5UGl4ZWxzID0gKGN0eCwgZmFjdG9yKSA9PiB7XG4gIC8vIEJyaWdodGVuIHRoZSBjYW52YXNcbiAgLy8gZ2V0IHJhdyBwaXhlbCB2YWx1ZXNcbiAgdmFyIGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcbiAgLy8gbW9kaWZ5IGVhY2ggcGl4ZWxcbiAgZm9yKHZhciBpID0gMDsgaSA8IHBpeGVscy5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAvLyByZWQgaXMgcGl4ZWxzW2ldO1xuICAgICAvLyBncmVlbiBpcyBwaXhlbHNbaSArIDFdO1xuICAgICAvLyBibHVlIGlzIHBpeGVsc1tpICsgMl07XG4gICAgIC8vIGFscGhhIGlzIHBpeGVsc1tpICsgM107XG4gICAgIC8vIGFsbCB2YWx1ZXMgYXJlIGludGVnZXJzIGJldHdlZW4gMCBhbmQgMjU1XG4gICAgIC8vIGRvIHdpdGggdGhlbSB3aGF0ZXZlciB5b3UgbGlrZS4gSGVyZSB3ZSBhcmUgcmVkdWNpbmcgdGhlIGNvbG9yIHZvbHVtZSB0byA3NSVcbiAgICAgLy8gd2l0aG91dCBhZmZlY3RpbmcgdGhlIGFscGhhIGNoYW5uZWxcbiAgICAgcGl4ZWxzW2ldID0gcGl4ZWxzW2ldICogZmFjdG9yO1xuICAgICBwaXhlbHNbaSsxXSA9IHBpeGVsc1tpKzFdICogZmFjdG9yO1xuICAgICBwaXhlbHNbaSsyXSA9IHBpeGVsc1tpKzJdICogZmFjdG9yO1xuICB9XG4gIC8vIHdyaXRlIG1vZGlmaWVkIHBpeGVscyBiYWNrIHRvIGNhbnZhc1xuICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG59XG5cbmxldCBtdWx0aXBseVBpeGVsID0gKGN0eCwgeCwgeSwgZmFjdG9yKSA9PiB7XG4gIC8vIEJyaWdodGVuIHRoZSBjYW52YXNcbiAgLy8gZ2V0IHJhdyBwaXhlbCB2YWx1ZXNcbiAgdmFyIGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoeCwgeSwgMSwgMSk7XG4gIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcbiAgLy8gbW9kaWZ5IGVhY2ggcGl4ZWxcbiAgZm9yKHZhciBpID0gMDsgaSA8IHBpeGVscy5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAvLyByZWQgaXMgcGl4ZWxzW2ldO1xuICAgICAvLyBncmVlbiBpcyBwaXhlbHNbaSArIDFdO1xuICAgICAvLyBibHVlIGlzIHBpeGVsc1tpICsgMl07XG4gICAgIC8vIGFscGhhIGlzIHBpeGVsc1tpICsgM107XG4gICAgIC8vIGFsbCB2YWx1ZXMgYXJlIGludGVnZXJzIGJldHdlZW4gMCBhbmQgMjU1XG4gICAgIC8vIGRvIHdpdGggdGhlbSB3aGF0ZXZlciB5b3UgbGlrZS4gSGVyZSB3ZSBhcmUgcmVkdWNpbmcgdGhlIGNvbG9yIHZvbHVtZSB0byA3NSVcbiAgICAgLy8gd2l0aG91dCBhZmZlY3RpbmcgdGhlIGFscGhhIGNoYW5uZWxcbiAgICAgcGl4ZWxzW2ldID0gcGl4ZWxzW2ldICogZmFjdG9yO1xuICAgICBwaXhlbHNbaSsxXSA9IHBpeGVsc1tpKzFdICogZmFjdG9yO1xuICAgICBwaXhlbHNbaSsyXSA9IHBpeGVsc1tpKzJdICogZmFjdG9yO1xuICB9XG4gIC8vIHdyaXRlIG1vZGlmaWVkIHBpeGVscyBiYWNrIHRvIGNhbnZhc1xuICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgeCwgeSk7XG59XG5cbmV4cG9ydCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRyYWdTdGFydFNvdW5kID0gbmV3IFBpenppY2F0by5Tb3VuZChcIi9zdGF0aWMvZHJhZ3N0YXJ0Lm1wM1wiKTtcbiAgICAgIHRoaXMuZHJhZ2dpbmdTb3VuZCA9IG5ldyBQaXp6aWNhdG8uU291bmQoXCIvc3RhdGljL2RyYWdnaW5nLm1wM1wiKTtcbiAgICAgIHRoaXMuZHJhZ1N0b3BTb3VuZCA9IG5ldyBQaXp6aWNhdG8uU291bmQoXCIvc3RhdGljL2RyYWdlbmQubXAzXCIpO1xuICAgICAgdGhpcy5kcmFnRmFpbFNvdW5kID0gbmV3IFBpenppY2F0by5Tb3VuZChcIi9zdGF0aWMvZHJhZ2ZhaWwubXAzXCIpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICBzZWxlY3Rpb246IHt9LFxuICAgICAgY3VycmVudE1vdXNlUG9zaXRpb246IHt4OiAwLCB5OiAwfSxcbiAgICB9XG4gIH1cblxuICBjYW52YXNSZWFkeSA9IChjdHgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdHgpO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLDAsV0lEVEgsSEVJR0hUKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbkVzYywgZmFsc2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uRXNjLCBmYWxzZSk7XG4gIH1cblxuICBvbkVzYyA9IChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgLy8gUmV0dXJuIGNhbnZhcyB0byBvcmlnaW5hbCBicmlnaHRuZXNzLlxuICAgIHRoaXMuY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwwKVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3Rpb246IHt9XG4gICAgfSlcbiAgfVxuXG4gIG1vdXNlTW92ZSA9IChjdHgsIGV2dCwgZHJhZ2dpbmcpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kcmFnZ2luZykge1xuICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY3R4LCBldnQpO1xuXG4gICAgICB2YXIgeDEgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MTtcbiAgICAgIHZhciB5MSA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxO1xuICAgICAgdmFyIHgyID0gbW91c2VQb3MueDtcbiAgICAgIHZhciB5MiA9IG1vdXNlUG9zLnk7XG5cbiAgICAgIGlmICh4MSA+IHgyKSB7XG4gICAgICAgIHgxID0geDI7XG4gICAgICAgIHgyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDE7XG4gICAgICB9XG5cbiAgICAgIGlmICh5MSA+IHkyKSB7XG4gICAgICAgIHkxID0geTI7XG4gICAgICAgIHkyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3Rpb246IHt4MTogdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDEsIHkxOiB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MSwgeDI6IG1vdXNlUG9zLngsIHkyOiBtb3VzZVBvcy55fVxuICAgICAgfSk7XG5cbiAgICAgIGxldCB3aWR0aCA9IHgyIC0geDE7XG4gICAgICBsZXQgaGVpZ2h0ID0geTIgLSB5MTtcblxuICAgICAgaWYgKHdpZHRoID49IDAgJiYgaGVpZ2h0ID49IDApIHtcbiAgICAgICAgbGV0IGltYWdlRGF0YSA9IHRoaXMuc2VsZWN0aW9uQ29udGV4dC5nZXRJbWFnZURhdGEoXG4gICAgICAgICAgeDEsXG4gICAgICAgICAgeTEsXG4gICAgICAgICAgd2lkdGgrMSxcbiAgICAgICAgICBoZWlnaHQrMSxcbiAgICAgICAgKVxuXG4gICAgICAgIGxldCBzZWxlY3Rpb25DdHggPSB0aGlzLnJlZnMuc2VsZWN0aW9uQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgc2VsZWN0aW9uQ3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAsIDEwMCk7XG5cbiAgICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMClcbiAgICAgICAgbXVsdGlwbHlQaXhlbHMoY3R4LCAwLjUpXG4gICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB4MSwgeTEpXG4gICAgICAgIHNlbGVjdGlvbkN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLDAsMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGN0eCwgZXZ0KTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRNb3VzZVBvc2l0aW9uOiBtb3VzZVBvc1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyaW5nKSB7XG4gICAgICAgIC8vIG11bHRpcGx5UGl4ZWwoY3R4LCB0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLngsIHRoaXMuc3RhdGUuY3VycmVudE1vdXNlUG9zaXRpb24ueSwgMilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5UGl4ZWxzKGN0eCwgMC41KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBob3ZlcmluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCA9IChjdHgsIGV2dCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLm1vdXNlVXAoY3R4LCBldnQpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudE1vdXNlUG9zaXRpb246IHt4OjAsIHk6MH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuaG92ZXJpbmcpIHtcbiAgICAgIGN0eC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsIDApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhvdmVyaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duID0gKGN0eCwgZXZ0KSA9PiB7XG4gICAgLy8gUmV0dXJuIGNhbnZhcyB0byBvcmlnaW5hbCBicmlnaHRuZXNzLlxuICAgIGN0eC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsMClcblxuICAgIHRoaXMuc2VsZWN0aW9uQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNhbnZhcy53aWR0aCA9IFdJRFRIO1xuICAgIHRoaXMuc2VsZWN0aW9uQ2FudmFzLmhlaWdodCA9IEhFSUdIVDtcbiAgICB0aGlzLnNlbGVjdGlvbkNvbnRleHQgPSB0aGlzLnNlbGVjdGlvbkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5zZWxlY3Rpb25Db250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XG5cbiAgICB0aGlzLmRyYWdTdGFydFNvdW5kLnBsYXkoKTtcbiAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjdHgsIGV2dCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICAgIHNlbGVjdGlvbjoge1xuICAgICAgICB4MTogbW91c2VQb3MueCxcbiAgICAgICAgeTE6IG1vdXNlUG9zLnksXG4gICAgICAgIHgyOiBtb3VzZVBvcy54LFxuICAgICAgICB5MjogbW91c2VQb3MueVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGFya2VuIHRoZSBjYW52YXMuXG4gICAgbXVsdGlwbHlQaXhlbHMoY3R4LCAwLjUwKTtcbiAgICB0aGlzLm1vdXNlTW92ZShjdHgsZXZ0KTtcbiAgfVxuXG4gIG1vdXNlVXAgPSAoY3R4LCBldnQpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kcmFnZ2luZykge1xuICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY3R4LCBldnQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0aW9uOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnNlbGVjdGlvbiwge3gyOiBtb3VzZVBvcy54LCB5MjogbW91c2VQb3MueX0pXG4gICAgICB9KTtcblxuICAgICAgbGV0IHdpZHRoID0gbW91c2VQb3MueCAtIHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxO1xuICAgICAgbGV0IGhlaWdodCA9IG1vdXNlUG9zLnkgLSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MVxuXG4gICAgICBsZXQgc2VsZWN0aW9uQ3R4ID0gdGhpcy5yZWZzLnNlbGVjdGlvbkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBzZWxlY3Rpb25DdHguY2xlYXJSZWN0KDAsIDAsIDEwMCwgMTAwKTtcblxuICAgICAgaWYgKHdpZHRoICE9PSAwICYmIGhlaWdodCAhPT0gMCkge1xuICAgICAgICAvLyBHcmFiIHRoZSBzZWxlY3RlZCByZWdpb24gYW5kIHB1dCBpdCBpbiB0aGUgc2VsZWN0aW9uIHByZXZpZXcuXG4gICAgICAgIGxldCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKFxuICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxLFxuICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxLFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgKVxuXG4gICAgICAgIHNlbGVjdGlvbkN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLDAsMCk7XG5cbiAgICAgICAgdGhpcy5kcmFnU3RvcFNvdW5kLnBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhZ1N0b3BTb3VuZC5wbGF5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0ZWRQaXhlbHMgPSAoKSA9PiB7XG4gICAgdmFyIHBpeGVscyA9IFtdO1xuXG4gICAgdmFyIHgxID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDE7XG4gICAgdmFyIHkxID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTE7XG4gICAgdmFyIHgyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDI7XG4gICAgdmFyIHkyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTI7XG5cbiAgICBpZiAoeDEgPiB4Mikge1xuICAgICAgeDEgPSB4MjtcbiAgICAgIHgyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDE7XG4gICAgfVxuXG4gICAgaWYgKHkxID4geTIpIHtcbiAgICAgIHkxID0geTI7XG4gICAgICB5MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxO1xuICAgIH1cblxuICAgIGZvciAodmFyIHkgPSB5MTsgeSA8PSB5MjsgeSsrKSB7XG4gICAgICBmb3IgKHZhciB4ID0geDE7IHggPD0geDI7IHgrKykge1xuICAgICAgICBwaXhlbHMucHVzaCgoeSooV0lEVEgpKSt4KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwaXhlbHM7XG4gIH1cblxuICByb3dSZW5kZXJlciA9ICh7XG4gICAga2V5LCAgICAgICAgIC8vIFVuaXF1ZSBrZXkgd2l0aGluIGFycmF5IG9mIHJvd3NcbiAgICBpbmRleCwgICAgICAgLy8gSW5kZXggb2Ygcm93IHdpdGhpbiBjb2xsZWN0aW9uXG4gICAgaXNTY3JvbGxpbmcsIC8vIFRoZSBMaXN0IGlzIGN1cnJlbnRseSBiZWluZyBzY3JvbGxlZFxuICAgIGlzVmlzaWJsZSwgICAvLyBUaGlzIHJvdyBpcyB2aXNpYmxlIHdpdGhpbiB0aGUgTGlzdCAoZWcgaXQgaXMgbm90IGFuIG92ZXJzY2FubmVkIHJvdylcbiAgICBzdHlsZSAgICAgICAgLy8gU3R5bGUgb2JqZWN0IHRvIGJlIGFwcGxpZWQgdG8gcm93ICh0byBwb3NpdGlvbiBpdClcbiAgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICA+XG4gICAgICAgIFBpeGVsICN7dGhpcy5zZWxlY3RlZFBpeGVscygpW2luZGV4XX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8aDE+ZXZlcmk8c3Bhbj5QaXhlbDwvc3Bhbj48L2gxPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODU4NTg1O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEgc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjIyMjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxDYW52YXNcbiAgICAgICAgd2lkdGg9e1dJRFRIfVxuICAgICAgICBoZWlnaHQ9e0hFSUdIVH1cbiAgICAgICAgb25SZWFkeT17dGhpcy5jYW52YXNSZWFkeX1cbiAgICAgICAgb25Nb3VzZU91dD17dGhpcy5tb3VzZU91dH1cbiAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMubW91c2VNb3ZlfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5tb3VzZURvd259XG4gICAgICAgIG9uTW91c2VVcD17dGhpcy5tb3VzZVVwfVxuICAgICAgICBzY2FsZT17U0NBTEV9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25QcmV2aWV3XCI+XG4gICAgICAgICAgICA8Y2FudmFzIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIHJlZj1cInNlbGVjdGlvbkNhbnZhc1wiPjwvY2FudmFzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgU2VsZWN0aW9uJm5ic3A7XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuY2xlYXJTZWxlY3Rpb259PltFU0NdPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICBcIk5vIHNlbGVjdGlvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDEgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDEgPT09IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngyICYmIHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxID09IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkyKSA/XG4gICAgICAgICAgICAgICAgPGRpdj4oe3RoaXMuc3RhdGUuc2VsZWN0aW9uLngxfSx7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTF9KTwvZGl2PlxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxkaXY+KHt0aGlzLnN0YXRlLnNlbGVjdGlvbi54MX0se3RoaXMuc3RhdGUuc2VsZWN0aW9uLnkxfSkgdG8gKHt0aGlzLnN0YXRlLnNlbGVjdGlvbi54Mn0se3RoaXMuc3RhdGUuc2VsZWN0aW9uLnkyfSk8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIDxkaXY+KHt0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLnh9LHt0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLnl9KTwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGl4ZWxMaXN0XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcmFnZ2luZyA/IFwiXCIgOiAgIDxMaXN0XG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICByb3dDb3VudD17dGhpcy5zZWxlY3RlZFBpeGVscygpLmxlbmd0aH1cbiAgICAgICAgICAgIHJvd0hlaWdodD17MjB9XG4gICAgICAgICAgICByb3dSZW5kZXJlcj17dGhpcy5yb3dSZW5kZXJlcn0gLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBpeGVsTGlzdCB7XG4gICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBpeGVsTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICB3aWR0aDoxMHB4OyAvLyBtYW5hZ2Ugc2Nyb2xsYmFyIHdpZHRoIGhlcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5waXhlbExpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyICoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyOyAvLyBtYW5hZ2Ugc2Nyb2xsYmFyIGJhY2tncm91bmQgY29sb3IgaGVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBpeGVsTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoNTAsNTAsNTAsMSkgIWltcG9ydGFudDsgLy8gbWFuYWdlIHNjcm9sbGJhciB0aHVtYiBiYWNrZ3JvdW5kIGNvbG9yIGhlcmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbGVjdGlvblByZXZpZXcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjIyMjI7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM4NTg1ODU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBociB7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMyMjJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/pages/canvas-prototype-wip.js */",
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
        css: ".controls.jsx-1921656205{float:left;color:#fff;font-size:16px;width:320px;}.pixelList.jsx-1921656205{height:600px;overflow-y:scroll;}.pixelList.jsx-1921656205::-webkit-scrollbar{width:10px;}.pixelList.jsx-1921656205::-webkit-scrollbar *.jsx-1921656205{background:#222;}.pixelList.jsx-1921656205::-webkit-scrollbar-thumb{background:rgba(50,50,50,1) !important;}.selectionPreview.jsx-1921656205{width:100px;height:100px;border:1px solid #222222;float:left;margin-right:20px;margin-bottom:10px;}h2.jsx-1921656205{color:#858585;font-size:16px;margin:0;margin-bottom:10px;}hr.jsx-1921656205{clear:both;border-color:#222;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL3BhZ2VzL2NhbnZhcy1wcm90b3R5cGUtd2lwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFYVyxBQUcwQixBQU9FLEFBS0gsQUFHTSxBQUdzQixBQUkxQixBQVNFLEFBT0gsV0FyQ0EsQUFZYixBQTJCRCxDQWpCZ0IsQ0FmSyxDQXdCSCxFQWhCakIsTUFkaUIsR0FzQlUsSUFTaEIsQUFPWCxFQS9CQSxNQU5jLENBK0JPLENBZnJCLFVBZkEsQ0FxQmEsT0FVYixJQVRvQixrQkFDQyxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL29wb25kZXIvY29kZS9vbGl2ZXJfcG9uZGVyL2V2ZXJpcGl4ZWwvcGFnZXMvY2FudmFzLXByb3RvdHlwZS13aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYW52YXMnO1xuaW1wb3J0IFBpenppY2F0byAgZnJvbSAncGl6emljYXRvJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZCc7XG5cbmNvbnN0IFdJRFRIID0gMTAwMDtcbmNvbnN0IEhFSUdIVCA9IDEwMDA7XG5jb25zdCBTQ0FMRSA9IDEwO1xuXG5sZXQgZ2V0TW91c2VQb3MgPSAoY3R4LCBldnQpID0+IHtcbiAgdmFyIHJlY3QgPSBjdHguY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIHZhciB4ID0gTWF0aC5mbG9vcigoZXZ0LmNsaWVudFggLSByZWN0LmxlZnQpIC8gU0NBTEUpO1xuICB2YXIgeSA9IE1hdGguZmxvb3IoKGV2dC5jbGllbnRZIC0gcmVjdC50b3ApIC8gU0NBTEUpO1xuXG4gIC8vIEVuc3VyZSB3ZSBuZXZlciBnZXQgbnVtYmVycyBvdXQgb2YgdGhlIGJvdW5kcyBvZiB0aGUgY2FudmFzLlxuICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgdGhlIG1vdXNlIG1vdmVzIHF1aWNrbHkgb2ZmIHRoZSBjYW52YXMuXG4gIHggPSBNYXRoLm1pbihXSURUSC0xLCB4KTtcbiAgeSA9IE1hdGgubWluKEhFSUdIVC0xLCB5KTtcblxuICB4ID0gTWF0aC5tYXgoMCwgeCk7XG4gIHkgPSBNYXRoLm1heCgwLCB5KTtcblxuICByZXR1cm4ge3gsIHl9O1xufTtcblxubGV0IG11bHRpcGx5UGl4ZWxzID0gKGN0eCwgZmFjdG9yKSA9PiB7XG4gIC8vIEJyaWdodGVuIHRoZSBjYW52YXNcbiAgLy8gZ2V0IHJhdyBwaXhlbCB2YWx1ZXNcbiAgdmFyIGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcbiAgLy8gbW9kaWZ5IGVhY2ggcGl4ZWxcbiAgZm9yKHZhciBpID0gMDsgaSA8IHBpeGVscy5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAvLyByZWQgaXMgcGl4ZWxzW2ldO1xuICAgICAvLyBncmVlbiBpcyBwaXhlbHNbaSArIDFdO1xuICAgICAvLyBibHVlIGlzIHBpeGVsc1tpICsgMl07XG4gICAgIC8vIGFscGhhIGlzIHBpeGVsc1tpICsgM107XG4gICAgIC8vIGFsbCB2YWx1ZXMgYXJlIGludGVnZXJzIGJldHdlZW4gMCBhbmQgMjU1XG4gICAgIC8vIGRvIHdpdGggdGhlbSB3aGF0ZXZlciB5b3UgbGlrZS4gSGVyZSB3ZSBhcmUgcmVkdWNpbmcgdGhlIGNvbG9yIHZvbHVtZSB0byA3NSVcbiAgICAgLy8gd2l0aG91dCBhZmZlY3RpbmcgdGhlIGFscGhhIGNoYW5uZWxcbiAgICAgcGl4ZWxzW2ldID0gcGl4ZWxzW2ldICogZmFjdG9yO1xuICAgICBwaXhlbHNbaSsxXSA9IHBpeGVsc1tpKzFdICogZmFjdG9yO1xuICAgICBwaXhlbHNbaSsyXSA9IHBpeGVsc1tpKzJdICogZmFjdG9yO1xuICB9XG4gIC8vIHdyaXRlIG1vZGlmaWVkIHBpeGVscyBiYWNrIHRvIGNhbnZhc1xuICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG59XG5cbmxldCBtdWx0aXBseVBpeGVsID0gKGN0eCwgeCwgeSwgZmFjdG9yKSA9PiB7XG4gIC8vIEJyaWdodGVuIHRoZSBjYW52YXNcbiAgLy8gZ2V0IHJhdyBwaXhlbCB2YWx1ZXNcbiAgdmFyIGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoeCwgeSwgMSwgMSk7XG4gIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcbiAgLy8gbW9kaWZ5IGVhY2ggcGl4ZWxcbiAgZm9yKHZhciBpID0gMDsgaSA8IHBpeGVscy5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAvLyByZWQgaXMgcGl4ZWxzW2ldO1xuICAgICAvLyBncmVlbiBpcyBwaXhlbHNbaSArIDFdO1xuICAgICAvLyBibHVlIGlzIHBpeGVsc1tpICsgMl07XG4gICAgIC8vIGFscGhhIGlzIHBpeGVsc1tpICsgM107XG4gICAgIC8vIGFsbCB2YWx1ZXMgYXJlIGludGVnZXJzIGJldHdlZW4gMCBhbmQgMjU1XG4gICAgIC8vIGRvIHdpdGggdGhlbSB3aGF0ZXZlciB5b3UgbGlrZS4gSGVyZSB3ZSBhcmUgcmVkdWNpbmcgdGhlIGNvbG9yIHZvbHVtZSB0byA3NSVcbiAgICAgLy8gd2l0aG91dCBhZmZlY3RpbmcgdGhlIGFscGhhIGNoYW5uZWxcbiAgICAgcGl4ZWxzW2ldID0gcGl4ZWxzW2ldICogZmFjdG9yO1xuICAgICBwaXhlbHNbaSsxXSA9IHBpeGVsc1tpKzFdICogZmFjdG9yO1xuICAgICBwaXhlbHNbaSsyXSA9IHBpeGVsc1tpKzJdICogZmFjdG9yO1xuICB9XG4gIC8vIHdyaXRlIG1vZGlmaWVkIHBpeGVscyBiYWNrIHRvIGNhbnZhc1xuICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgeCwgeSk7XG59XG5cbmV4cG9ydCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRyYWdTdGFydFNvdW5kID0gbmV3IFBpenppY2F0by5Tb3VuZChcIi9zdGF0aWMvZHJhZ3N0YXJ0Lm1wM1wiKTtcbiAgICAgIHRoaXMuZHJhZ2dpbmdTb3VuZCA9IG5ldyBQaXp6aWNhdG8uU291bmQoXCIvc3RhdGljL2RyYWdnaW5nLm1wM1wiKTtcbiAgICAgIHRoaXMuZHJhZ1N0b3BTb3VuZCA9IG5ldyBQaXp6aWNhdG8uU291bmQoXCIvc3RhdGljL2RyYWdlbmQubXAzXCIpO1xuICAgICAgdGhpcy5kcmFnRmFpbFNvdW5kID0gbmV3IFBpenppY2F0by5Tb3VuZChcIi9zdGF0aWMvZHJhZ2ZhaWwubXAzXCIpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICBzZWxlY3Rpb246IHt9LFxuICAgICAgY3VycmVudE1vdXNlUG9zaXRpb246IHt4OiAwLCB5OiAwfSxcbiAgICB9XG4gIH1cblxuICBjYW52YXNSZWFkeSA9IChjdHgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdHgpO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLDAsV0lEVEgsSEVJR0hUKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbkVzYywgZmFsc2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uRXNjLCBmYWxzZSk7XG4gIH1cblxuICBvbkVzYyA9IChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgLy8gUmV0dXJuIGNhbnZhcyB0byBvcmlnaW5hbCBicmlnaHRuZXNzLlxuICAgIHRoaXMuY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwwKVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3Rpb246IHt9XG4gICAgfSlcbiAgfVxuXG4gIG1vdXNlTW92ZSA9IChjdHgsIGV2dCwgZHJhZ2dpbmcpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kcmFnZ2luZykge1xuICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY3R4LCBldnQpO1xuXG4gICAgICB2YXIgeDEgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MTtcbiAgICAgIHZhciB5MSA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxO1xuICAgICAgdmFyIHgyID0gbW91c2VQb3MueDtcbiAgICAgIHZhciB5MiA9IG1vdXNlUG9zLnk7XG5cbiAgICAgIGlmICh4MSA+IHgyKSB7XG4gICAgICAgIHgxID0geDI7XG4gICAgICAgIHgyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDE7XG4gICAgICB9XG5cbiAgICAgIGlmICh5MSA+IHkyKSB7XG4gICAgICAgIHkxID0geTI7XG4gICAgICAgIHkyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3Rpb246IHt4MTogdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDEsIHkxOiB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MSwgeDI6IG1vdXNlUG9zLngsIHkyOiBtb3VzZVBvcy55fVxuICAgICAgfSk7XG5cbiAgICAgIGxldCB3aWR0aCA9IHgyIC0geDE7XG4gICAgICBsZXQgaGVpZ2h0ID0geTIgLSB5MTtcblxuICAgICAgaWYgKHdpZHRoID49IDAgJiYgaGVpZ2h0ID49IDApIHtcbiAgICAgICAgbGV0IGltYWdlRGF0YSA9IHRoaXMuc2VsZWN0aW9uQ29udGV4dC5nZXRJbWFnZURhdGEoXG4gICAgICAgICAgeDEsXG4gICAgICAgICAgeTEsXG4gICAgICAgICAgd2lkdGgrMSxcbiAgICAgICAgICBoZWlnaHQrMSxcbiAgICAgICAgKVxuXG4gICAgICAgIGxldCBzZWxlY3Rpb25DdHggPSB0aGlzLnJlZnMuc2VsZWN0aW9uQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgc2VsZWN0aW9uQ3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAsIDEwMCk7XG5cbiAgICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMClcbiAgICAgICAgbXVsdGlwbHlQaXhlbHMoY3R4LCAwLjUpXG4gICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB4MSwgeTEpXG4gICAgICAgIHNlbGVjdGlvbkN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLDAsMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGN0eCwgZXZ0KTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRNb3VzZVBvc2l0aW9uOiBtb3VzZVBvc1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyaW5nKSB7XG4gICAgICAgIC8vIG11bHRpcGx5UGl4ZWwoY3R4LCB0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLngsIHRoaXMuc3RhdGUuY3VycmVudE1vdXNlUG9zaXRpb24ueSwgMilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5UGl4ZWxzKGN0eCwgMC41KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBob3ZlcmluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCA9IChjdHgsIGV2dCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLm1vdXNlVXAoY3R4LCBldnQpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudE1vdXNlUG9zaXRpb246IHt4OjAsIHk6MH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuaG92ZXJpbmcpIHtcbiAgICAgIGN0eC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsIDApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhvdmVyaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duID0gKGN0eCwgZXZ0KSA9PiB7XG4gICAgLy8gUmV0dXJuIGNhbnZhcyB0byBvcmlnaW5hbCBicmlnaHRuZXNzLlxuICAgIGN0eC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsMClcblxuICAgIHRoaXMuc2VsZWN0aW9uQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNhbnZhcy53aWR0aCA9IFdJRFRIO1xuICAgIHRoaXMuc2VsZWN0aW9uQ2FudmFzLmhlaWdodCA9IEhFSUdIVDtcbiAgICB0aGlzLnNlbGVjdGlvbkNvbnRleHQgPSB0aGlzLnNlbGVjdGlvbkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5zZWxlY3Rpb25Db250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XG5cbiAgICB0aGlzLmRyYWdTdGFydFNvdW5kLnBsYXkoKTtcbiAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjdHgsIGV2dCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICAgIHNlbGVjdGlvbjoge1xuICAgICAgICB4MTogbW91c2VQb3MueCxcbiAgICAgICAgeTE6IG1vdXNlUG9zLnksXG4gICAgICAgIHgyOiBtb3VzZVBvcy54LFxuICAgICAgICB5MjogbW91c2VQb3MueVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGFya2VuIHRoZSBjYW52YXMuXG4gICAgbXVsdGlwbHlQaXhlbHMoY3R4LCAwLjUwKTtcbiAgICB0aGlzLm1vdXNlTW92ZShjdHgsZXZ0KTtcbiAgfVxuXG4gIG1vdXNlVXAgPSAoY3R4LCBldnQpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kcmFnZ2luZykge1xuICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY3R4LCBldnQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0aW9uOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnNlbGVjdGlvbiwge3gyOiBtb3VzZVBvcy54LCB5MjogbW91c2VQb3MueX0pXG4gICAgICB9KTtcblxuICAgICAgbGV0IHdpZHRoID0gbW91c2VQb3MueCAtIHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxO1xuICAgICAgbGV0IGhlaWdodCA9IG1vdXNlUG9zLnkgLSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MVxuXG4gICAgICBsZXQgc2VsZWN0aW9uQ3R4ID0gdGhpcy5yZWZzLnNlbGVjdGlvbkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBzZWxlY3Rpb25DdHguY2xlYXJSZWN0KDAsIDAsIDEwMCwgMTAwKTtcblxuICAgICAgaWYgKHdpZHRoICE9PSAwICYmIGhlaWdodCAhPT0gMCkge1xuICAgICAgICAvLyBHcmFiIHRoZSBzZWxlY3RlZCByZWdpb24gYW5kIHB1dCBpdCBpbiB0aGUgc2VsZWN0aW9uIHByZXZpZXcuXG4gICAgICAgIGxldCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKFxuICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxLFxuICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxLFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgKVxuXG4gICAgICAgIHNlbGVjdGlvbkN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLDAsMCk7XG5cbiAgICAgICAgdGhpcy5kcmFnU3RvcFNvdW5kLnBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhZ1N0b3BTb3VuZC5wbGF5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0ZWRQaXhlbHMgPSAoKSA9PiB7XG4gICAgdmFyIHBpeGVscyA9IFtdO1xuXG4gICAgdmFyIHgxID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDE7XG4gICAgdmFyIHkxID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTE7XG4gICAgdmFyIHgyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDI7XG4gICAgdmFyIHkyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTI7XG5cbiAgICBpZiAoeDEgPiB4Mikge1xuICAgICAgeDEgPSB4MjtcbiAgICAgIHgyID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDE7XG4gICAgfVxuXG4gICAgaWYgKHkxID4geTIpIHtcbiAgICAgIHkxID0geTI7XG4gICAgICB5MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxO1xuICAgIH1cblxuICAgIGZvciAodmFyIHkgPSB5MTsgeSA8PSB5MjsgeSsrKSB7XG4gICAgICBmb3IgKHZhciB4ID0geDE7IHggPD0geDI7IHgrKykge1xuICAgICAgICBwaXhlbHMucHVzaCgoeSooV0lEVEgpKSt4KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwaXhlbHM7XG4gIH1cblxuICByb3dSZW5kZXJlciA9ICh7XG4gICAga2V5LCAgICAgICAgIC8vIFVuaXF1ZSBrZXkgd2l0aGluIGFycmF5IG9mIHJvd3NcbiAgICBpbmRleCwgICAgICAgLy8gSW5kZXggb2Ygcm93IHdpdGhpbiBjb2xsZWN0aW9uXG4gICAgaXNTY3JvbGxpbmcsIC8vIFRoZSBMaXN0IGlzIGN1cnJlbnRseSBiZWluZyBzY3JvbGxlZFxuICAgIGlzVmlzaWJsZSwgICAvLyBUaGlzIHJvdyBpcyB2aXNpYmxlIHdpdGhpbiB0aGUgTGlzdCAoZWcgaXQgaXMgbm90IGFuIG92ZXJzY2FubmVkIHJvdylcbiAgICBzdHlsZSAgICAgICAgLy8gU3R5bGUgb2JqZWN0IHRvIGJlIGFwcGxpZWQgdG8gcm93ICh0byBwb3NpdGlvbiBpdClcbiAgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICA+XG4gICAgICAgIFBpeGVsICN7dGhpcy5zZWxlY3RlZFBpeGVscygpW2luZGV4XX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8aDE+ZXZlcmk8c3Bhbj5QaXhlbDwvc3Bhbj48L2gxPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODU4NTg1O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEgc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjIyMjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxDYW52YXNcbiAgICAgICAgd2lkdGg9e1dJRFRIfVxuICAgICAgICBoZWlnaHQ9e0hFSUdIVH1cbiAgICAgICAgb25SZWFkeT17dGhpcy5jYW52YXNSZWFkeX1cbiAgICAgICAgb25Nb3VzZU91dD17dGhpcy5tb3VzZU91dH1cbiAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMubW91c2VNb3ZlfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5tb3VzZURvd259XG4gICAgICAgIG9uTW91c2VVcD17dGhpcy5tb3VzZVVwfVxuICAgICAgICBzY2FsZT17U0NBTEV9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25QcmV2aWV3XCI+XG4gICAgICAgICAgICA8Y2FudmFzIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIHJlZj1cInNlbGVjdGlvbkNhbnZhc1wiPjwvY2FudmFzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgU2VsZWN0aW9uJm5ic3A7XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuY2xlYXJTZWxlY3Rpb259PltFU0NdPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICBcIk5vIHNlbGVjdGlvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDEgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDEgPT09IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngyICYmIHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxID09IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkyKSA/XG4gICAgICAgICAgICAgICAgPGRpdj4oe3RoaXMuc3RhdGUuc2VsZWN0aW9uLngxfSx7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTF9KTwvZGl2PlxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxkaXY+KHt0aGlzLnN0YXRlLnNlbGVjdGlvbi54MX0se3RoaXMuc3RhdGUuc2VsZWN0aW9uLnkxfSkgdG8gKHt0aGlzLnN0YXRlLnNlbGVjdGlvbi54Mn0se3RoaXMuc3RhdGUuc2VsZWN0aW9uLnkyfSk8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIDxkaXY+KHt0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLnh9LHt0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLnl9KTwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGl4ZWxMaXN0XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcmFnZ2luZyA/IFwiXCIgOiAgIDxMaXN0XG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICByb3dDb3VudD17dGhpcy5zZWxlY3RlZFBpeGVscygpLmxlbmd0aH1cbiAgICAgICAgICAgIHJvd0hlaWdodD17MjB9XG4gICAgICAgICAgICByb3dSZW5kZXJlcj17dGhpcy5yb3dSZW5kZXJlcn0gLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBpeGVsTGlzdCB7XG4gICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBpeGVsTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICB3aWR0aDoxMHB4OyAvLyBtYW5hZ2Ugc2Nyb2xsYmFyIHdpZHRoIGhlcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5waXhlbExpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyICoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyOyAvLyBtYW5hZ2Ugc2Nyb2xsYmFyIGJhY2tncm91bmQgY29sb3IgaGVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBpeGVsTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoNTAsNTAsNTAsMSkgIWltcG9ydGFudDsgLy8gbWFuYWdlIHNjcm9sbGJhciB0aHVtYiBiYWNrZ3JvdW5kIGNvbG9yIGhlcmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbGVjdGlvblByZXZpZXcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjIyMjI7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM4NTg1ODU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBociB7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMyMjJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/pages/canvas-prototype-wip.js */",
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
//# sourceMappingURL=canvas-prototype-wip.js.a5420a5982660554e58e.hot-update.js.map