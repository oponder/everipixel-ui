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
var SCALE = 0.5;

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
        css: "h1.jsx-4179034185{color:#858585;font-size:24px;margin:0;}h1.jsx-4179034185 span.jsx-4179034185{color:#fff;}.header.jsx-4179034185{border-bottom:1px solid #222222;padding:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL3BhZ2VzL2NhbnZhcy1wcm90b3R5cGUtd2lwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThTVyxBQUc2QixBQU9qQixBQUdtQyxXQUhsQyxHQU5pQixlQUNOLEdBU0ksTUFSZixPQVNxQixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL29wb25kZXIvY29kZS9vbGl2ZXJfcG9uZGVyL2V2ZXJpcGl4ZWwvcGFnZXMvY2FudmFzLXByb3RvdHlwZS13aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYW52YXMnO1xuaW1wb3J0IFBpenppY2F0byAgZnJvbSAncGl6emljYXRvJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZCc7XG5cbmNvbnN0IFdJRFRIID0gMTAwMDtcbmNvbnN0IEhFSUdIVCA9IDEwMDA7XG5jb25zdCBTQ0FMRSA9IDAuNTtcblxubGV0IGdldE1vdXNlUG9zID0gKGN0eCwgZXZ0KSA9PiB7XG4gIHZhciByZWN0ID0gY3R4LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICB2YXIgeCA9IE1hdGguZmxvb3IoKGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIFNDQUxFKTtcbiAgdmFyIHkgPSBNYXRoLmZsb29yKChldnQuY2xpZW50WSAtIHJlY3QudG9wKSAvIFNDQUxFKTtcblxuICAvLyBFbnN1cmUgd2UgbmV2ZXIgZ2V0IG51bWJlcnMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGNhbnZhcy5cbiAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHRoZSBtb3VzZSBtb3ZlcyBxdWlja2x5IG9mZiB0aGUgY2FudmFzLlxuICB4ID0gTWF0aC5taW4oV0lEVEgtMSwgeCk7XG4gIHkgPSBNYXRoLm1pbihIRUlHSFQtMSwgeSk7XG5cbiAgeCA9IE1hdGgubWF4KDAsIHgpO1xuICB5ID0gTWF0aC5tYXgoMCwgeSk7XG5cbiAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbmxldCBtdWx0aXBseVBpeGVscyA9IChjdHgsIGZhY3RvcikgPT4ge1xuICAvLyBCcmlnaHRlbiB0aGUgY2FudmFzXG4gIC8vIGdldCByYXcgcGl4ZWwgdmFsdWVzXG4gIHZhciBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG4gIC8vIG1vZGlmeSBlYWNoIHBpeGVsXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBwaXhlbHMubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgLy8gcmVkIGlzIHBpeGVsc1tpXTtcbiAgICAgLy8gZ3JlZW4gaXMgcGl4ZWxzW2kgKyAxXTtcbiAgICAgLy8gYmx1ZSBpcyBwaXhlbHNbaSArIDJdO1xuICAgICAvLyBhbHBoYSBpcyBwaXhlbHNbaSArIDNdO1xuICAgICAvLyBhbGwgdmFsdWVzIGFyZSBpbnRlZ2VycyBiZXR3ZWVuIDAgYW5kIDI1NVxuICAgICAvLyBkbyB3aXRoIHRoZW0gd2hhdGV2ZXIgeW91IGxpa2UuIEhlcmUgd2UgYXJlIHJlZHVjaW5nIHRoZSBjb2xvciB2b2x1bWUgdG8gNzUlXG4gICAgIC8vIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBhbHBoYSBjaGFubmVsXG4gICAgIHBpeGVsc1tpXSA9IHBpeGVsc1tpXSAqIGZhY3RvcjtcbiAgICAgcGl4ZWxzW2krMV0gPSBwaXhlbHNbaSsxXSAqIGZhY3RvcjtcbiAgICAgcGl4ZWxzW2krMl0gPSBwaXhlbHNbaSsyXSAqIGZhY3RvcjtcbiAgfVxuICAvLyB3cml0ZSBtb2RpZmllZCBwaXhlbHMgYmFjayB0byBjYW52YXNcbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xufVxuXG5sZXQgbXVsdGlwbHlQaXhlbCA9IChjdHgsIHgsIHksIGZhY3RvcikgPT4ge1xuICAvLyBCcmlnaHRlbiB0aGUgY2FudmFzXG4gIC8vIGdldCByYXcgcGl4ZWwgdmFsdWVzXG4gIHZhciBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpO1xuICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG4gIC8vIG1vZGlmeSBlYWNoIHBpeGVsXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBwaXhlbHMubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgLy8gcmVkIGlzIHBpeGVsc1tpXTtcbiAgICAgLy8gZ3JlZW4gaXMgcGl4ZWxzW2kgKyAxXTtcbiAgICAgLy8gYmx1ZSBpcyBwaXhlbHNbaSArIDJdO1xuICAgICAvLyBhbHBoYSBpcyBwaXhlbHNbaSArIDNdO1xuICAgICAvLyBhbGwgdmFsdWVzIGFyZSBpbnRlZ2VycyBiZXR3ZWVuIDAgYW5kIDI1NVxuICAgICAvLyBkbyB3aXRoIHRoZW0gd2hhdGV2ZXIgeW91IGxpa2UuIEhlcmUgd2UgYXJlIHJlZHVjaW5nIHRoZSBjb2xvciB2b2x1bWUgdG8gNzUlXG4gICAgIC8vIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBhbHBoYSBjaGFubmVsXG4gICAgIHBpeGVsc1tpXSA9IHBpeGVsc1tpXSAqIGZhY3RvcjtcbiAgICAgcGl4ZWxzW2krMV0gPSBwaXhlbHNbaSsxXSAqIGZhY3RvcjtcbiAgICAgcGl4ZWxzW2krMl0gPSBwaXhlbHNbaSsyXSAqIGZhY3RvcjtcbiAgfVxuICAvLyB3cml0ZSBtb2RpZmllZCBwaXhlbHMgYmFjayB0byBjYW52YXNcbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHgsIHkpO1xufVxuXG5leHBvcnQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5kcmFnU3RhcnRTb3VuZCA9IG5ldyBQaXp6aWNhdG8uU291bmQoXCIvc3RhdGljL2RyYWdzdGFydC5tcDNcIik7XG4gICAgICB0aGlzLmRyYWdnaW5nU291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnZ2luZy5tcDNcIik7XG4gICAgICB0aGlzLmRyYWdTdG9wU291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnZW5kLm1wM1wiKTtcbiAgICAgIHRoaXMuZHJhZ0ZhaWxTb3VuZCA9IG5ldyBQaXp6aWNhdG8uU291bmQoXCIvc3RhdGljL2RyYWdmYWlsLm1wM1wiKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgc2VsZWN0aW9uOiB7fSxcbiAgICAgIGN1cnJlbnRNb3VzZVBvc2l0aW9uOiB7eDogMCwgeTogMH0sXG4gICAgfVxuICB9XG5cbiAgY2FudmFzUmVhZHkgPSAoY3R4KSA9PiB7XG4gICAgY29uc29sZS5sb2coY3R4KTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwwLFdJRFRILEhFSUdIVCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Fc2MsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbkVzYywgZmFsc2UpO1xuICB9XG5cbiAgb25Fc2MgPSAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIC8vIFJldHVybiBjYW52YXMgdG8gb3JpZ2luYWwgYnJpZ2h0bmVzcy5cbiAgICB0aGlzLmN0eC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsMClcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0aW9uOiB7fVxuICAgIH0pXG4gIH1cblxuICBtb3VzZU1vdmUgPSAoY3R4LCBldnQsIGRyYWdnaW5nKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZHJhZ2dpbmcpIHtcbiAgICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGN0eCwgZXZ0KTtcblxuICAgICAgdmFyIHgxID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDE7XG4gICAgICB2YXIgeTEgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MTtcbiAgICAgIHZhciB4MiA9IG1vdXNlUG9zLng7XG4gICAgICB2YXIgeTIgPSBtb3VzZVBvcy55O1xuXG4gICAgICBpZiAoeDEgPiB4Mikge1xuICAgICAgICB4MSA9IHgyO1xuICAgICAgICB4MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxO1xuICAgICAgfVxuXG4gICAgICBpZiAoeTEgPiB5Mikge1xuICAgICAgICB5MSA9IHkyO1xuICAgICAgICB5MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0aW9uOiB7eDE6IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxLCB5MTogdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTEsIHgyOiBtb3VzZVBvcy54LCB5MjogbW91c2VQb3MueX1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgd2lkdGggPSB4MiAtIHgxO1xuICAgICAgbGV0IGhlaWdodCA9IHkyIC0geTE7XG5cbiAgICAgIGlmICh3aWR0aCA+PSAwICYmIGhlaWdodCA+PSAwKSB7XG4gICAgICAgIGxldCBpbWFnZURhdGEgPSB0aGlzLnNlbGVjdGlvbkNvbnRleHQuZ2V0SW1hZ2VEYXRhKFxuICAgICAgICAgIHgxLFxuICAgICAgICAgIHkxLFxuICAgICAgICAgIHdpZHRoKzEsXG4gICAgICAgICAgaGVpZ2h0KzEsXG4gICAgICAgIClcblxuICAgICAgICBsZXQgc2VsZWN0aW9uQ3R4ID0gdGhpcy5yZWZzLnNlbGVjdGlvbkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHNlbGVjdGlvbkN0eC5jbGVhclJlY3QoMCwgMCwgMTAwLCAxMDApO1xuXG4gICAgICAgIGN0eC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsIDApXG4gICAgICAgIG11bHRpcGx5UGl4ZWxzKGN0eCwgMC41KVxuICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgeDEsIHkxKVxuICAgICAgICBzZWxlY3Rpb25DdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwwLDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjdHgsIGV2dCk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50TW91c2VQb3NpdGlvbjogbW91c2VQb3NcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5ob3ZlcmluZykge1xuICAgICAgICAvLyBtdWx0aXBseVBpeGVsKGN0eCwgdGhpcy5zdGF0ZS5jdXJyZW50TW91c2VQb3NpdGlvbi54LCB0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLnksIDIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBseVBpeGVscyhjdHgsIDAuNSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaG92ZXJpbmc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXQgPSAoY3R4LCBldnQpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kcmFnZ2luZykge1xuICAgICAgdGhpcy5tb3VzZVVwKGN0eCwgZXZ0KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRNb3VzZVBvc2l0aW9uOiB7eDowLCB5OjB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyaW5nKSB7XG4gICAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBob3ZlcmluZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93biA9IChjdHgsIGV2dCkgPT4ge1xuICAgIC8vIFJldHVybiBjYW52YXMgdG8gb3JpZ2luYWwgYnJpZ2h0bmVzcy5cbiAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLDApXG5cbiAgICB0aGlzLnNlbGVjdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5zZWxlY3Rpb25DYW52YXMud2lkdGggPSBXSURUSDtcbiAgICB0aGlzLnNlbGVjdGlvbkNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XG4gICAgdGhpcy5zZWxlY3Rpb25Db250ZXh0ID0gdGhpcy5zZWxlY3Rpb25DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuc2VsZWN0aW9uQ29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsIDApO1xuXG4gICAgdGhpcy5kcmFnU3RhcnRTb3VuZC5wbGF5KCk7XG4gICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY3R4LCBldnQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dpbmc6IHRydWUsXG4gICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAgeDE6IG1vdXNlUG9zLngsXG4gICAgICAgIHkxOiBtb3VzZVBvcy55LFxuICAgICAgICB4MjogbW91c2VQb3MueCxcbiAgICAgICAgeTI6IG1vdXNlUG9zLnlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERhcmtlbiB0aGUgY2FudmFzLlxuICAgIG11bHRpcGx5UGl4ZWxzKGN0eCwgMC41MCk7XG4gICAgdGhpcy5tb3VzZU1vdmUoY3R4LGV2dCk7XG4gIH1cblxuICBtb3VzZVVwID0gKGN0eCwgZXZ0KSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZHJhZ2dpbmcpIHtcbiAgICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGN0eCwgZXZ0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIHNlbGVjdGlvbjogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zZWxlY3Rpb24sIHt4MjogbW91c2VQb3MueCwgeTI6IG1vdXNlUG9zLnl9KVxuICAgICAgfSk7XG5cbiAgICAgIGxldCB3aWR0aCA9IG1vdXNlUG9zLnggLSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MTtcbiAgICAgIGxldCBoZWlnaHQgPSBtb3VzZVBvcy55IC0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTFcblxuICAgICAgbGV0IHNlbGVjdGlvbkN0eCA9IHRoaXMucmVmcy5zZWxlY3Rpb25DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgc2VsZWN0aW9uQ3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAsIDEwMCk7XG5cbiAgICAgIGlmICh3aWR0aCAhPT0gMCAmJiBoZWlnaHQgIT09IDApIHtcbiAgICAgICAgLy8gR3JhYiB0aGUgc2VsZWN0ZWQgcmVnaW9uIGFuZCBwdXQgaXQgaW4gdGhlIHNlbGVjdGlvbiBwcmV2aWV3LlxuICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YShcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MSxcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MSxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIClcblxuICAgICAgICBzZWxlY3Rpb25DdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwwLDApO1xuXG4gICAgICAgIHRoaXMuZHJhZ1N0b3BTb3VuZC5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYWdTdG9wU291bmQucGxheSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdGVkUGl4ZWxzID0gKCkgPT4ge1xuICAgIHZhciBwaXhlbHMgPSBbXTtcblxuICAgIHZhciB4MSA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxO1xuICAgIHZhciB5MSA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxO1xuICAgIHZhciB4MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngyO1xuICAgIHZhciB5MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkyO1xuXG4gICAgaWYgKHgxID4geDIpIHtcbiAgICAgIHgxID0geDI7XG4gICAgICB4MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxO1xuICAgIH1cblxuICAgIGlmICh5MSA+IHkyKSB7XG4gICAgICB5MSA9IHkyO1xuICAgICAgeTIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciB5ID0geTE7IHkgPD0geTI7IHkrKykge1xuICAgICAgZm9yICh2YXIgeCA9IHgxOyB4IDw9IHgyOyB4KyspIHtcbiAgICAgICAgcGl4ZWxzLnB1c2goKHkqKFdJRFRIKSkreClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGl4ZWxzO1xuICB9XG5cbiAgcm93UmVuZGVyZXIgPSAoe1xuICAgIGtleSwgICAgICAgICAvLyBVbmlxdWUga2V5IHdpdGhpbiBhcnJheSBvZiByb3dzXG4gICAgaW5kZXgsICAgICAgIC8vIEluZGV4IG9mIHJvdyB3aXRoaW4gY29sbGVjdGlvblxuICAgIGlzU2Nyb2xsaW5nLCAvLyBUaGUgTGlzdCBpcyBjdXJyZW50bHkgYmVpbmcgc2Nyb2xsZWRcbiAgICBpc1Zpc2libGUsICAgLy8gVGhpcyByb3cgaXMgdmlzaWJsZSB3aXRoaW4gdGhlIExpc3QgKGVnIGl0IGlzIG5vdCBhbiBvdmVyc2Nhbm5lZCByb3cpXG4gICAgc3R5bGUgICAgICAgIC8vIFN0eWxlIG9iamVjdCB0byBiZSBhcHBsaWVkIHRvIHJvdyAodG8gcG9zaXRpb24gaXQpXG4gIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgPlxuICAgICAgICBQaXhlbCAje3RoaXMuc2VsZWN0ZWRQaXhlbHMoKVtpbmRleF19XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgxPmV2ZXJpPHNwYW4+UGl4ZWw8L3NwYW4+PC9oMT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBjb2xvcjogIzg1ODU4NTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHNwYW4ge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjIyMjI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q2FudmFzXG4gICAgICAgIHdpZHRoPXtXSURUSH1cbiAgICAgICAgaGVpZ2h0PXtIRUlHSFR9XG4gICAgICAgIG9uUmVhZHk9e3RoaXMuY2FudmFzUmVhZHl9XG4gICAgICAgIG9uTW91c2VPdXQ9e3RoaXMubW91c2VPdXR9XG4gICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLm1vdXNlTW92ZX1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMubW91c2VEb3dufVxuICAgICAgICBvbk1vdXNlVXA9e3RoaXMubW91c2VVcH1cbiAgICAgICAgc2NhbGU9e1NDQUxFfVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uUHJldmlld1wiPlxuICAgICAgICAgICAgPGNhbnZhcyB3aWR0aD1cIjEwMHB4XCIgaGVpZ2h0PVwiMTAwcHhcIiByZWY9XCJzZWxlY3Rpb25DYW52YXNcIj48L2NhbnZhcz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNlbGVjdGlvbi54MSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIFNlbGVjdGlvbiZuYnNwO1xuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmNsZWFyU2VsZWN0aW9ufT5bRVNDXTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgXCJObyBzZWxlY3Rpb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxID09PSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MiAmJiB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MSA9PSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MikgP1xuICAgICAgICAgICAgICAgIDxkaXY+KHt0aGlzLnN0YXRlLnNlbGVjdGlvbi54MX0se3RoaXMuc3RhdGUuc2VsZWN0aW9uLnkxfSk8L2Rpdj5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8ZGl2Pih7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDF9LHt0aGlzLnN0YXRlLnNlbGVjdGlvbi55MX0pIHRvICh7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDJ9LHt0aGlzLnN0YXRlLnNlbGVjdGlvbi55Mn0pPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8ZGl2Pih7dGhpcy5zdGF0ZS5jdXJyZW50TW91c2VQb3NpdGlvbi54fSx7dGhpcy5zdGF0ZS5jdXJyZW50TW91c2VQb3NpdGlvbi55fSk8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpeGVsTGlzdFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZHJhZ2dpbmcgPyBcIlwiIDogICA8TGlzdFxuICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgcm93Q291bnQ9e3RoaXMuc2VsZWN0ZWRQaXhlbHMoKS5sZW5ndGh9XG4gICAgICAgICAgICByb3dIZWlnaHQ9ezIwfVxuICAgICAgICAgICAgcm93UmVuZGVyZXI9e3RoaXMucm93UmVuZGVyZXJ9IC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5waXhlbExpc3Qge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5waXhlbExpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6MTBweDsgLy8gbWFuYWdlIHNjcm9sbGJhciB3aWR0aCBoZXJlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGl4ZWxMaXN0Ojotd2Via2l0LXNjcm9sbGJhciAqIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjsgLy8gbWFuYWdlIHNjcm9sbGJhciBiYWNrZ3JvdW5kIGNvbG9yIGhlcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5waXhlbExpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDUwLDUwLDUwLDEpICFpbXBvcnRhbnQ7IC8vIG1hbmFnZSBzY3JvbGxiYXIgdGh1bWIgYmFja2dyb3VuZCBjb2xvciBoZXJlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxlY3Rpb25QcmV2aWV3IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyMjIyO1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODU4NTg1O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjIyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/pages/canvas-prototype-wip.js */",
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
        css: ".controls.jsx-1921656205{float:left;color:#fff;font-size:16px;width:320px;}.pixelList.jsx-1921656205{height:600px;overflow-y:scroll;}.pixelList.jsx-1921656205::-webkit-scrollbar{width:10px;}.pixelList.jsx-1921656205::-webkit-scrollbar *.jsx-1921656205{background:#222;}.pixelList.jsx-1921656205::-webkit-scrollbar-thumb{background:rgba(50,50,50,1) !important;}.selectionPreview.jsx-1921656205{width:100px;height:100px;border:1px solid #222222;float:left;margin-right:20px;margin-bottom:10px;}h2.jsx-1921656205{color:#858585;font-size:16px;margin:0;margin-bottom:10px;}hr.jsx-1921656205{clear:both;border-color:#222;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcG9uZGVyL2NvZGUvb2xpdmVyX3BvbmRlci9ldmVyaXBpeGVsL3BhZ2VzL2NhbnZhcy1wcm90b3R5cGUtd2lwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFYVyxBQUcwQixBQU9FLEFBS0gsQUFHTSxBQUdzQixBQUkxQixBQVNFLEFBT0gsV0FyQ0EsQUFZYixBQTJCRCxDQWpCZ0IsQ0FmSyxDQXdCSCxFQWhCakIsTUFkaUIsR0FzQlUsSUFTaEIsQUFPWCxFQS9CQSxNQU5jLENBK0JPLENBZnJCLFVBZkEsQ0FxQmEsT0FVYixJQVRvQixrQkFDQyxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL29wb25kZXIvY29kZS9vbGl2ZXJfcG9uZGVyL2V2ZXJpcGl4ZWwvcGFnZXMvY2FudmFzLXByb3RvdHlwZS13aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYW52YXMnO1xuaW1wb3J0IFBpenppY2F0byAgZnJvbSAncGl6emljYXRvJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZCc7XG5cbmNvbnN0IFdJRFRIID0gMTAwMDtcbmNvbnN0IEhFSUdIVCA9IDEwMDA7XG5jb25zdCBTQ0FMRSA9IDAuNTtcblxubGV0IGdldE1vdXNlUG9zID0gKGN0eCwgZXZ0KSA9PiB7XG4gIHZhciByZWN0ID0gY3R4LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICB2YXIgeCA9IE1hdGguZmxvb3IoKGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIFNDQUxFKTtcbiAgdmFyIHkgPSBNYXRoLmZsb29yKChldnQuY2xpZW50WSAtIHJlY3QudG9wKSAvIFNDQUxFKTtcblxuICAvLyBFbnN1cmUgd2UgbmV2ZXIgZ2V0IG51bWJlcnMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGNhbnZhcy5cbiAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHRoZSBtb3VzZSBtb3ZlcyBxdWlja2x5IG9mZiB0aGUgY2FudmFzLlxuICB4ID0gTWF0aC5taW4oV0lEVEgtMSwgeCk7XG4gIHkgPSBNYXRoLm1pbihIRUlHSFQtMSwgeSk7XG5cbiAgeCA9IE1hdGgubWF4KDAsIHgpO1xuICB5ID0gTWF0aC5tYXgoMCwgeSk7XG5cbiAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbmxldCBtdWx0aXBseVBpeGVscyA9IChjdHgsIGZhY3RvcikgPT4ge1xuICAvLyBCcmlnaHRlbiB0aGUgY2FudmFzXG4gIC8vIGdldCByYXcgcGl4ZWwgdmFsdWVzXG4gIHZhciBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG4gIC8vIG1vZGlmeSBlYWNoIHBpeGVsXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBwaXhlbHMubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgLy8gcmVkIGlzIHBpeGVsc1tpXTtcbiAgICAgLy8gZ3JlZW4gaXMgcGl4ZWxzW2kgKyAxXTtcbiAgICAgLy8gYmx1ZSBpcyBwaXhlbHNbaSArIDJdO1xuICAgICAvLyBhbHBoYSBpcyBwaXhlbHNbaSArIDNdO1xuICAgICAvLyBhbGwgdmFsdWVzIGFyZSBpbnRlZ2VycyBiZXR3ZWVuIDAgYW5kIDI1NVxuICAgICAvLyBkbyB3aXRoIHRoZW0gd2hhdGV2ZXIgeW91IGxpa2UuIEhlcmUgd2UgYXJlIHJlZHVjaW5nIHRoZSBjb2xvciB2b2x1bWUgdG8gNzUlXG4gICAgIC8vIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBhbHBoYSBjaGFubmVsXG4gICAgIHBpeGVsc1tpXSA9IHBpeGVsc1tpXSAqIGZhY3RvcjtcbiAgICAgcGl4ZWxzW2krMV0gPSBwaXhlbHNbaSsxXSAqIGZhY3RvcjtcbiAgICAgcGl4ZWxzW2krMl0gPSBwaXhlbHNbaSsyXSAqIGZhY3RvcjtcbiAgfVxuICAvLyB3cml0ZSBtb2RpZmllZCBwaXhlbHMgYmFjayB0byBjYW52YXNcbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xufVxuXG5sZXQgbXVsdGlwbHlQaXhlbCA9IChjdHgsIHgsIHksIGZhY3RvcikgPT4ge1xuICAvLyBCcmlnaHRlbiB0aGUgY2FudmFzXG4gIC8vIGdldCByYXcgcGl4ZWwgdmFsdWVzXG4gIHZhciBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpO1xuICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG4gIC8vIG1vZGlmeSBlYWNoIHBpeGVsXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBwaXhlbHMubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgLy8gcmVkIGlzIHBpeGVsc1tpXTtcbiAgICAgLy8gZ3JlZW4gaXMgcGl4ZWxzW2kgKyAxXTtcbiAgICAgLy8gYmx1ZSBpcyBwaXhlbHNbaSArIDJdO1xuICAgICAvLyBhbHBoYSBpcyBwaXhlbHNbaSArIDNdO1xuICAgICAvLyBhbGwgdmFsdWVzIGFyZSBpbnRlZ2VycyBiZXR3ZWVuIDAgYW5kIDI1NVxuICAgICAvLyBkbyB3aXRoIHRoZW0gd2hhdGV2ZXIgeW91IGxpa2UuIEhlcmUgd2UgYXJlIHJlZHVjaW5nIHRoZSBjb2xvciB2b2x1bWUgdG8gNzUlXG4gICAgIC8vIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBhbHBoYSBjaGFubmVsXG4gICAgIHBpeGVsc1tpXSA9IHBpeGVsc1tpXSAqIGZhY3RvcjtcbiAgICAgcGl4ZWxzW2krMV0gPSBwaXhlbHNbaSsxXSAqIGZhY3RvcjtcbiAgICAgcGl4ZWxzW2krMl0gPSBwaXhlbHNbaSsyXSAqIGZhY3RvcjtcbiAgfVxuICAvLyB3cml0ZSBtb2RpZmllZCBwaXhlbHMgYmFjayB0byBjYW52YXNcbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHgsIHkpO1xufVxuXG5leHBvcnQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5kcmFnU3RhcnRTb3VuZCA9IG5ldyBQaXp6aWNhdG8uU291bmQoXCIvc3RhdGljL2RyYWdzdGFydC5tcDNcIik7XG4gICAgICB0aGlzLmRyYWdnaW5nU291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnZ2luZy5tcDNcIik7XG4gICAgICB0aGlzLmRyYWdTdG9wU291bmQgPSBuZXcgUGl6emljYXRvLlNvdW5kKFwiL3N0YXRpYy9kcmFnZW5kLm1wM1wiKTtcbiAgICAgIHRoaXMuZHJhZ0ZhaWxTb3VuZCA9IG5ldyBQaXp6aWNhdG8uU291bmQoXCIvc3RhdGljL2RyYWdmYWlsLm1wM1wiKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgc2VsZWN0aW9uOiB7fSxcbiAgICAgIGN1cnJlbnRNb3VzZVBvc2l0aW9uOiB7eDogMCwgeTogMH0sXG4gICAgfVxuICB9XG5cbiAgY2FudmFzUmVhZHkgPSAoY3R4KSA9PiB7XG4gICAgY29uc29sZS5sb2coY3R4KTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwwLFdJRFRILEhFSUdIVCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Fc2MsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbkVzYywgZmFsc2UpO1xuICB9XG5cbiAgb25Fc2MgPSAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIC8vIFJldHVybiBjYW52YXMgdG8gb3JpZ2luYWwgYnJpZ2h0bmVzcy5cbiAgICB0aGlzLmN0eC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsMClcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0aW9uOiB7fVxuICAgIH0pXG4gIH1cblxuICBtb3VzZU1vdmUgPSAoY3R4LCBldnQsIGRyYWdnaW5nKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZHJhZ2dpbmcpIHtcbiAgICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGN0eCwgZXZ0KTtcblxuICAgICAgdmFyIHgxID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDE7XG4gICAgICB2YXIgeTEgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MTtcbiAgICAgIHZhciB4MiA9IG1vdXNlUG9zLng7XG4gICAgICB2YXIgeTIgPSBtb3VzZVBvcy55O1xuXG4gICAgICBpZiAoeDEgPiB4Mikge1xuICAgICAgICB4MSA9IHgyO1xuICAgICAgICB4MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxO1xuICAgICAgfVxuXG4gICAgICBpZiAoeTEgPiB5Mikge1xuICAgICAgICB5MSA9IHkyO1xuICAgICAgICB5MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0aW9uOiB7eDE6IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxLCB5MTogdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTEsIHgyOiBtb3VzZVBvcy54LCB5MjogbW91c2VQb3MueX1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgd2lkdGggPSB4MiAtIHgxO1xuICAgICAgbGV0IGhlaWdodCA9IHkyIC0geTE7XG5cbiAgICAgIGlmICh3aWR0aCA+PSAwICYmIGhlaWdodCA+PSAwKSB7XG4gICAgICAgIGxldCBpbWFnZURhdGEgPSB0aGlzLnNlbGVjdGlvbkNvbnRleHQuZ2V0SW1hZ2VEYXRhKFxuICAgICAgICAgIHgxLFxuICAgICAgICAgIHkxLFxuICAgICAgICAgIHdpZHRoKzEsXG4gICAgICAgICAgaGVpZ2h0KzEsXG4gICAgICAgIClcblxuICAgICAgICBsZXQgc2VsZWN0aW9uQ3R4ID0gdGhpcy5yZWZzLnNlbGVjdGlvbkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHNlbGVjdGlvbkN0eC5jbGVhclJlY3QoMCwgMCwgMTAwLCAxMDApO1xuXG4gICAgICAgIGN0eC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsIDApXG4gICAgICAgIG11bHRpcGx5UGl4ZWxzKGN0eCwgMC41KVxuICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgeDEsIHkxKVxuICAgICAgICBzZWxlY3Rpb25DdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwwLDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjdHgsIGV2dCk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50TW91c2VQb3NpdGlvbjogbW91c2VQb3NcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5ob3ZlcmluZykge1xuICAgICAgICAvLyBtdWx0aXBseVBpeGVsKGN0eCwgdGhpcy5zdGF0ZS5jdXJyZW50TW91c2VQb3NpdGlvbi54LCB0aGlzLnN0YXRlLmN1cnJlbnRNb3VzZVBvc2l0aW9uLnksIDIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBseVBpeGVscyhjdHgsIDAuNSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaG92ZXJpbmc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXQgPSAoY3R4LCBldnQpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kcmFnZ2luZykge1xuICAgICAgdGhpcy5tb3VzZVVwKGN0eCwgZXZ0KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRNb3VzZVBvc2l0aW9uOiB7eDowLCB5OjB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyaW5nKSB7XG4gICAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBob3ZlcmluZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93biA9IChjdHgsIGV2dCkgPT4ge1xuICAgIC8vIFJldHVybiBjYW52YXMgdG8gb3JpZ2luYWwgYnJpZ2h0bmVzcy5cbiAgICBjdHgucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLDApXG5cbiAgICB0aGlzLnNlbGVjdGlvbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5zZWxlY3Rpb25DYW52YXMud2lkdGggPSBXSURUSDtcbiAgICB0aGlzLnNlbGVjdGlvbkNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XG4gICAgdGhpcy5zZWxlY3Rpb25Db250ZXh0ID0gdGhpcy5zZWxlY3Rpb25DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuc2VsZWN0aW9uQ29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsIDApO1xuXG4gICAgdGhpcy5kcmFnU3RhcnRTb3VuZC5wbGF5KCk7XG4gICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY3R4LCBldnQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dpbmc6IHRydWUsXG4gICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAgeDE6IG1vdXNlUG9zLngsXG4gICAgICAgIHkxOiBtb3VzZVBvcy55LFxuICAgICAgICB4MjogbW91c2VQb3MueCxcbiAgICAgICAgeTI6IG1vdXNlUG9zLnlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERhcmtlbiB0aGUgY2FudmFzLlxuICAgIG11bHRpcGx5UGl4ZWxzKGN0eCwgMC41MCk7XG4gICAgdGhpcy5tb3VzZU1vdmUoY3R4LGV2dCk7XG4gIH1cblxuICBtb3VzZVVwID0gKGN0eCwgZXZ0KSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZHJhZ2dpbmcpIHtcbiAgICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGN0eCwgZXZ0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIHNlbGVjdGlvbjogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zZWxlY3Rpb24sIHt4MjogbW91c2VQb3MueCwgeTI6IG1vdXNlUG9zLnl9KVxuICAgICAgfSk7XG5cbiAgICAgIGxldCB3aWR0aCA9IG1vdXNlUG9zLnggLSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MTtcbiAgICAgIGxldCBoZWlnaHQgPSBtb3VzZVBvcy55IC0gdGhpcy5zdGF0ZS5zZWxlY3Rpb24ueTFcblxuICAgICAgbGV0IHNlbGVjdGlvbkN0eCA9IHRoaXMucmVmcy5zZWxlY3Rpb25DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgc2VsZWN0aW9uQ3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAsIDEwMCk7XG5cbiAgICAgIGlmICh3aWR0aCAhPT0gMCAmJiBoZWlnaHQgIT09IDApIHtcbiAgICAgICAgLy8gR3JhYiB0aGUgc2VsZWN0ZWQgcmVnaW9uIGFuZCBwdXQgaXQgaW4gdGhlIHNlbGVjdGlvbiBwcmV2aWV3LlxuICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YShcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MSxcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MSxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIClcblxuICAgICAgICBzZWxlY3Rpb25DdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwwLDApO1xuXG4gICAgICAgIHRoaXMuZHJhZ1N0b3BTb3VuZC5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYWdTdG9wU291bmQucGxheSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdGVkUGl4ZWxzID0gKCkgPT4ge1xuICAgIHZhciBwaXhlbHMgPSBbXTtcblxuICAgIHZhciB4MSA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxO1xuICAgIHZhciB5MSA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkxO1xuICAgIHZhciB4MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngyO1xuICAgIHZhciB5MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLnkyO1xuXG4gICAgaWYgKHgxID4geDIpIHtcbiAgICAgIHgxID0geDI7XG4gICAgICB4MiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxO1xuICAgIH1cblxuICAgIGlmICh5MSA+IHkyKSB7XG4gICAgICB5MSA9IHkyO1xuICAgICAgeTIgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciB5ID0geTE7IHkgPD0geTI7IHkrKykge1xuICAgICAgZm9yICh2YXIgeCA9IHgxOyB4IDw9IHgyOyB4KyspIHtcbiAgICAgICAgcGl4ZWxzLnB1c2goKHkqKFdJRFRIKSkreClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGl4ZWxzO1xuICB9XG5cbiAgcm93UmVuZGVyZXIgPSAoe1xuICAgIGtleSwgICAgICAgICAvLyBVbmlxdWUga2V5IHdpdGhpbiBhcnJheSBvZiByb3dzXG4gICAgaW5kZXgsICAgICAgIC8vIEluZGV4IG9mIHJvdyB3aXRoaW4gY29sbGVjdGlvblxuICAgIGlzU2Nyb2xsaW5nLCAvLyBUaGUgTGlzdCBpcyBjdXJyZW50bHkgYmVpbmcgc2Nyb2xsZWRcbiAgICBpc1Zpc2libGUsICAgLy8gVGhpcyByb3cgaXMgdmlzaWJsZSB3aXRoaW4gdGhlIExpc3QgKGVnIGl0IGlzIG5vdCBhbiBvdmVyc2Nhbm5lZCByb3cpXG4gICAgc3R5bGUgICAgICAgIC8vIFN0eWxlIG9iamVjdCB0byBiZSBhcHBsaWVkIHRvIHJvdyAodG8gcG9zaXRpb24gaXQpXG4gIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgPlxuICAgICAgICBQaXhlbCAje3RoaXMuc2VsZWN0ZWRQaXhlbHMoKVtpbmRleF19XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgxPmV2ZXJpPHNwYW4+UGl4ZWw8L3NwYW4+PC9oMT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBjb2xvcjogIzg1ODU4NTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHNwYW4ge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjIyMjI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q2FudmFzXG4gICAgICAgIHdpZHRoPXtXSURUSH1cbiAgICAgICAgaGVpZ2h0PXtIRUlHSFR9XG4gICAgICAgIG9uUmVhZHk9e3RoaXMuY2FudmFzUmVhZHl9XG4gICAgICAgIG9uTW91c2VPdXQ9e3RoaXMubW91c2VPdXR9XG4gICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLm1vdXNlTW92ZX1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMubW91c2VEb3dufVxuICAgICAgICBvbk1vdXNlVXA9e3RoaXMubW91c2VVcH1cbiAgICAgICAgc2NhbGU9e1NDQUxFfVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uUHJldmlld1wiPlxuICAgICAgICAgICAgPGNhbnZhcyB3aWR0aD1cIjEwMHB4XCIgaGVpZ2h0PVwiMTAwcHhcIiByZWY9XCJzZWxlY3Rpb25DYW52YXNcIj48L2NhbnZhcz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNlbGVjdGlvbi54MSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIFNlbGVjdGlvbiZuYnNwO1xuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmNsZWFyU2VsZWN0aW9ufT5bRVNDXTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgXCJObyBzZWxlY3Rpb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2VsZWN0aW9uLngxID09PSB0aGlzLnN0YXRlLnNlbGVjdGlvbi54MiAmJiB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MSA9PSB0aGlzLnN0YXRlLnNlbGVjdGlvbi55MikgP1xuICAgICAgICAgICAgICAgIDxkaXY+KHt0aGlzLnN0YXRlLnNlbGVjdGlvbi54MX0se3RoaXMuc3RhdGUuc2VsZWN0aW9uLnkxfSk8L2Rpdj5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8ZGl2Pih7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDF9LHt0aGlzLnN0YXRlLnNlbGVjdGlvbi55MX0pIHRvICh7dGhpcy5zdGF0ZS5zZWxlY3Rpb24ueDJ9LHt0aGlzLnN0YXRlLnNlbGVjdGlvbi55Mn0pPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8ZGl2Pih7dGhpcy5zdGF0ZS5jdXJyZW50TW91c2VQb3NpdGlvbi54fSx7dGhpcy5zdGF0ZS5jdXJyZW50TW91c2VQb3NpdGlvbi55fSk8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpeGVsTGlzdFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZHJhZ2dpbmcgPyBcIlwiIDogICA8TGlzdFxuICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgcm93Q291bnQ9e3RoaXMuc2VsZWN0ZWRQaXhlbHMoKS5sZW5ndGh9XG4gICAgICAgICAgICByb3dIZWlnaHQ9ezIwfVxuICAgICAgICAgICAgcm93UmVuZGVyZXI9e3RoaXMucm93UmVuZGVyZXJ9IC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5waXhlbExpc3Qge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5waXhlbExpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6MTBweDsgLy8gbWFuYWdlIHNjcm9sbGJhciB3aWR0aCBoZXJlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGl4ZWxMaXN0Ojotd2Via2l0LXNjcm9sbGJhciAqIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjsgLy8gbWFuYWdlIHNjcm9sbGJhciBiYWNrZ3JvdW5kIGNvbG9yIGhlcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5waXhlbExpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDUwLDUwLDUwLDEpICFpbXBvcnRhbnQ7IC8vIG1hbmFnZSBzY3JvbGxiYXIgdGh1bWIgYmFja2dyb3VuZCBjb2xvciBoZXJlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxlY3Rpb25QcmV2aWV3IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyMjIyO1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODU4NTg1O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjIyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/oponder/code/oliver_ponder/everipixel/pages/canvas-prototype-wip.js */",
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
//# sourceMappingURL=canvas-prototype-wip.js.c481f50b88343c0dc0e5.hot-update.js.map