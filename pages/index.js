import React, { Component } from 'react';
import { Canvas } from '../components/canvas';
import Pizzicato  from 'pizzicato';
import { List } from 'react-virtualized';

const WIDTH = 50;
const HEIGHT = 50;
const SCALE = 10;

let getMousePos = (ctx, evt) => {
  var rect = ctx.canvas.getBoundingClientRect();

  var x = Math.floor((evt.clientX - rect.left) / SCALE);
  var y = Math.floor((evt.clientY - rect.top) / SCALE);

  // Ensure we never get numbers out of the bounds of the canvas.
  // This can happen if the mouse moves quickly off the canvas.
  x = Math.min(WIDTH-1, x);
  y = Math.min(HEIGHT-1, y);

  x = Math.max(0, x);
  y = Math.max(0, y);

  return {x, y};
};

let multiplyPixels = (ctx, factor) => {
  // Brighten the canvas
  // get raw pixel values
  var imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
  var pixels = imageData.data;
  // modify each pixel
  for(var i = 0; i < pixels.length; i += 4) {
     // red is pixels[i];
     // green is pixels[i + 1];
     // blue is pixels[i + 2];
     // alpha is pixels[i + 3];
     // all values are integers between 0 and 255
     // do with them whatever you like. Here we are reducing the color volume to 75%
     // without affecting the alpha channel
     pixels[i] = pixels[i] * factor;
     pixels[i+1] = pixels[i+1] * factor;
     pixels[i+2] = pixels[i+2] * factor;
  }
  // write modified pixels back to canvas
  ctx.putImageData(imageData, 0, 0);
}

let multiplyPixel = (ctx, x, y, factor) => {
  // Brighten the canvas
  // get raw pixel values
  var imageData = ctx.getImageData(x, y, 1, 1);
  var pixels = imageData.data;
  // modify each pixel
  for(var i = 0; i < pixels.length; i += 4) {
     // red is pixels[i];
     // green is pixels[i + 1];
     // blue is pixels[i + 2];
     // alpha is pixels[i + 3];
     // all values are integers between 0 and 255
     // do with them whatever you like. Here we are reducing the color volume to 75%
     // without affecting the alpha channel
     pixels[i] = pixels[i] * factor;
     pixels[i+1] = pixels[i+1] * factor;
     pixels[i+2] = pixels[i+2] * factor;
  }
  // write modified pixels back to canvas
  ctx.putImageData(imageData, x, y);
}

export class Index extends Component {
  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {
      this.dragStartSound = new Pizzicato.Sound("/static/dragstart.mp3");
      this.draggingSound = new Pizzicato.Sound("/static/dragging.mp3");
      this.dragStopSound = new Pizzicato.Sound("/static/dragend.mp3");
      this.dragFailSound = new Pizzicato.Sound("/static/dragfail.mp3");
    }

    this.state = {
      dragging: false,
      selection: {},
      currentMousePosition: {x: 0, y: 0},
    }
  }

  canvasReady = (ctx) => {
    console.log(ctx);
    this.ctx = ctx;
    this.imageData = ctx.getImageData(0,0,WIDTH,HEIGHT);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.onEsc, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.onEsc, false);
  }

  onEsc = (event) => {
    if(event.keyCode === 27) {
      this.clearSelection();
    }
  }

  clearSelection = () => {
    // Return canvas to original brightness.
    this.ctx.putImageData(this.imageData, 0,0)

    this.setState({
      selection: {}
    })
  }

  mouseMove = (ctx, evt, dragging) => {
    if (this.state.dragging) {
      let mousePos = getMousePos(ctx, evt);

      var x1 = this.state.selection.x1;
      var y1 = this.state.selection.y1;
      var x2 = mousePos.x;
      var y2 = mousePos.y;

      if (x1 > x2) {
        x1 = x2;
        x2 = this.state.selection.x1;
      }

      if (y1 > y2) {
        y1 = y2;
        y2 = this.state.selection.y1;
      }

      this.setState({
        selection: {x1: this.state.selection.x1, y1: this.state.selection.y1, x2: mousePos.x, y2: mousePos.y}
      });

      let width = x2 - x1;
      let height = y2 - y1;

      if (width >= 0 && height >= 0) {
        let imageData = this.selectionContext.getImageData(
          x1,
          y1,
          width+1,
          height+1,
        )

        let selectionCtx = this.refs.selectionCanvas.getContext("2d");
        selectionCtx.clearRect(0, 0, 100, 100);

        ctx.putImageData(this.imageData, 0, 0)
        multiplyPixels(ctx, 0.5)
        ctx.putImageData(imageData, x1, y1)
        selectionCtx.putImageData(imageData,0,0);
      }
    } else {
      let mousePos = getMousePos(ctx, evt);

      this.setState({
        currentMousePosition: mousePos
      });

      if (this.state.hovering) {
        // multiplyPixel(ctx, this.state.currentMousePosition.x, this.state.currentMousePosition.y, 2)
      } else {
        multiplyPixels(ctx, 0.5)
        this.setState({
          hovering: true
        });
      }
    }
  }

  mouseOut = (ctx, evt) => {
    if (this.state.dragging) {
      this.mouseUp(ctx, evt);
    }

    this.setState({
      currentMousePosition: {x:0, y:0}
    })

    if (this.state.hovering) {
      ctx.putImageData(this.imageData, 0, 0);
      this.setState({
        hovering: false
      });
    }
  }

  mouseDown = (ctx, evt) => {
    // Return canvas to original brightness.
    ctx.putImageData(this.imageData, 0,0)

    this.selectionCanvas = document.createElement("canvas");
    this.selectionCanvas.width = WIDTH;
    this.selectionCanvas.height = HEIGHT;
    this.selectionContext = this.selectionCanvas.getContext("2d");
    this.selectionContext.putImageData(this.imageData, 0, 0);

    this.dragStartSound.play();
    let mousePos = getMousePos(ctx, evt);
    this.setState({
      dragging: true,
      selection: {
        x1: mousePos.x,
        y1: mousePos.y,
        x2: mousePos.x,
        y2: mousePos.y
      }
    });

    // Darken the canvas.
    multiplyPixels(ctx, 0.50);
    this.mouseMove(ctx,evt);
  }

  mouseUp = (ctx, evt) => {
    if (this.state.dragging) {
      let mousePos = getMousePos(ctx, evt);
      this.setState({
        dragging: false,
        selection: Object.assign({}, this.state.selection, {x2: mousePos.x, y2: mousePos.y})
      });

      let width = mousePos.x - this.state.selection.x1;
      let height = mousePos.y - this.state.selection.y1

      let selectionCtx = this.refs.selectionCanvas.getContext("2d");
      selectionCtx.clearRect(0, 0, 100, 100);

      if (width !== 0 && height !== 0) {
        // Grab the selected region and put it in the selection preview.
        let imageData = ctx.getImageData(
          this.state.selection.x1,
          this.state.selection.y1,
          width,
          height,
        )

        selectionCtx.putImageData(imageData,0,0);

        this.dragStopSound.play();
      } else {
        this.dragStopSound.play();
      }
    }
  }

  selectedPixels = () => {
    var pixels = [];

    var x1 = this.state.selection.x1;
    var y1 = this.state.selection.y1;
    var x2 = this.state.selection.x2;
    var y2 = this.state.selection.y2;

    if (x1 > x2) {
      x1 = x2;
      x2 = this.state.selection.x1;
    }

    if (y1 > y2) {
      y1 = y2;
      y2 = this.state.selection.y1;
    }

    for (var y = y1; y <= y2; y++) {
      for (var x = x1; x <= x2; x++) {
        pixels.push((y*(WIDTH))+x)
      }
    }

    return pixels;
  }

  rowRenderer = ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
  }) => {
    return (
      <div
        key={key}
        style={style}
      >
        Pixel #{this.selectedPixels()[index]}
      </div>
    )
  }

  render() {
    return <div className="main">
      <div className="header">
        <h1>everi<span>Pixel</span></h1>
        <style jsx>
          {`
            h1 {
              color: #858585;
              font-size: 24px;
              margin: 0;
            }

            h1 span {
              color: #fff
            }

            .header {
              border-bottom: 1px solid #222222;
              padding: 20px;
              margin-bottom: 20px;
            }
          `}
        </style>
      </div>

      <Canvas
        width={WIDTH}
        height={HEIGHT}
        onReady={this.canvasReady}
        onMouseOut={this.mouseOut}
        onMouseMove={this.mouseMove}
        onMouseDown={this.mouseDown}
        onMouseUp={this.mouseUp}
        scale={SCALE}
      />

      <div className="controls">
        <div className="selection">
          <div className="selectionPreview">
            <canvas width="100px" height="100px" ref="selectionCanvas"></canvas>
          </div>
          <h2>
            {
              (this.state.selection.x1 !== undefined) ?
              <div>
              Selection&nbsp;
              <span onClick={this.clearSelection}>[ESC]</span>
              </div>
              :
              "No selection"
            }
          </h2>
          {
            (this.state.selection.x1 !== undefined) ?
              (this.state.selection.x1 === this.state.selection.x2 && this.state.selection.y1 == this.state.selection.y2) ?
                <div>({this.state.selection.x1},{this.state.selection.y1})</div>
              :
              <div>({this.state.selection.x1},{this.state.selection.y1}) to ({this.state.selection.x2},{this.state.selection.y2})</div>
            :
            <div>({this.state.currentMousePosition.x},{this.state.currentMousePosition.y})</div>
          }
        </div>
        <hr/>
        <div className="pixelList">
          {
            this.state.dragging ? "" :   <List
            width={300}
            height={300}
            rowCount={this.selectedPixels().length}
            rowHeight={20}
            rowRenderer={this.rowRenderer} />
          }
        </div>


        <style jsx>
          {`
            .controls {
              float: left;
              color: #fff;
              font-size: 16px;
              width: 320px;
            }

            .pixelList {
              height: 600px;
              overflow-y: scroll;
            }

            .pixelList::-webkit-scrollbar {
              width:10px; // manage scrollbar width here
            }
            .pixelList::-webkit-scrollbar * {
              background: #222; // manage scrollbar background color here
            }
            .pixelList::-webkit-scrollbar-thumb {
              background:rgba(50,50,50,1) !important; // manage scrollbar thumb background color here
            }

            .selectionPreview {
              width: 100px;
              height: 100px;
              border: 1px solid #222222;
              float: left;
              margin-right: 20px;
              margin-bottom: 10px;
            }

            h2 {
              color: #858585;
              font-size: 16px;
              margin: 0;
              margin-bottom: 10px;
            }

            hr {
              clear: both;
              border-color: #222
            }
          `}
        </style>

      </div>

    </div>
  }
}

export default Index
