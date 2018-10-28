import React, { Component } from 'react';
import { Canvas } from '../components/canvas';
import Pizzicato  from 'pizzicato';
import { List } from 'react-virtualized';
import EVTWrapper from '../lib/evt';

const WIDTH = 50;
const HEIGHT = 50;
const SCALE = 10;

let publicKey = "EVT4x8iBHKikKyqJcU6M7qxDRy93kCNAiTHHQtaDDTwJ76wj2mwiq";
let privateKey = "5KfPZG1DyCWvXnBKtFqRZtrcxM2r9YWmW5v7BeGT6EykBPnxqwe";

var truncate = function (fullStr, strLen, separator) {
  if (fullStr.length <= strLen) return fullStr;

  separator = separator || '...';

  var sepLen = separator.length,
      charsToShow = strLen - sepLen,
      frontChars = Math.ceil(charsToShow/2),
      backChars = Math.floor(charsToShow/2);

  return fullStr.substr(0, frontChars) +
         separator +
         fullStr.substr(fullStr.length - backChars);
};

export class Index extends Component {
  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {
      this.dragStartSound = new Pizzicato.Sound("/static/dragstart.mp3");
      this.draggingSound = new Pizzicato.Sound("/static/dragging.mp3");
      this.dragStopSound = new Pizzicato.Sound("/static/dragend.mp3");
      this.dragFailSound = new Pizzicato.Sound("/static/dragfail.mp3");
    }

    this.EVTWrapper = new EVTWrapper({publicKey, privateKey});

    this.state = {
      dragging: false,
      selection: {},
      currentMousePosition: {x: 0, y: 0, id: 0},
      pixels: this.initializePixels(),
    }
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
    this.state.selection.selected = false;
    this.pixels = undefined; //
    this.setState({
      selection: {},
      currentMousePosition: {x: 0, y: 0, id: 0},
    })
  }

  setMousePos = (pixel) => {
    this.setState({
      currentMousePosition: pixel
    });
  }

  selectPixel = async (pixel) => {
    this.dragStopSound.play();

    this.state.selection.selected = false;

    this.setState({
      selection: pixel
    })

    pixel.selected = true;

    await this.refreshPixel(pixel);

    this.pixels = undefined; // force redraw

    this.setState({
      pixels: this.state.pixels
    })
  }

  refreshPixel = async (pixel) => {
    var {err, response} = await this.EVTWrapper.getToken("pixeltoken", pixel.id.toString());
    if (err != null && err.name === "tokendb_key_not_found") {
      console.log(pixel.id.toString() + " is available");
      pixel.available = true;
    } else if (err === null) {
      pixel.owner = response.owner[0];
    }
  }

  initializePixels = () => {
    var pixels = [];

    for(var y = 0; y < HEIGHT; y += 1) {
      for(var x = 0; x < WIDTH; x += 1) {
        var pixel = {x, y, color: "#000", id: (y*WIDTH)+x };
        pixels.push(pixel);
      }
    }

    return pixels;
  }

  claimPixel = async (pixel) => {
    let response = await fetch('http://localhost:3030/claim', {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"id": pixel.id, "owner": publicKey}),
      method: "POST"
    });

    let body = await response.text();
    console.log(body);

    if (response.status === 201) {
      await this.refreshPixel(pixel);

      this.pixels = undefined; // force redraw

      this.setState({
        pixels: this.state.pixels
      })
    }
  }

  render() {
    this.pixels = this.pixels || this.state.pixels.map((pixel) => {
      return <div
        className={'pixel' + (pixel.selected ? ' selected' : '')}
        key={pixel.id}
        style={{
          backgroundColor: pixel.owner ? "#f00" : pixel.color,
          width:SCALE+"px",
          height: SCALE+"px",
          float: "left",
          color: pixel.color,
          fontSize: "14px"
        }}
        onMouseEnter={this.setMousePos.bind(this,pixel)}
        onClick={this.selectPixel.bind(this,pixel)}
      >

      </div>
    })


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

      <div className="pixels">
        {
          this.pixels
        }
        <style jsx>
          {`
            .pixels {
              float: left;
              margin-right: 10px;
              width: ${SCALE * WIDTH}px;
              border: 1px solid #222;
              margin-left: 20px;
            }
          `}
        </style>
      </div>

      <div className="controls">
        <div className={"selection" + (this.state.selection.x !== undefined ? " selected" : "")} >
          <div className="selectionPreview">
            <canvas width="100px" height="100px" ref="selectionCanvas"></canvas>
          </div>
          <h2>
            {
              (this.state.selection.x !== undefined) ?
              <div>
                Pixel #{this.state.selection.id}
              </div>
              :
              <span>Pixel #{this.state.currentMousePosition.id}&nbsp;</span>
            }
          </h2>
          {
            (this.state.selection.x !== undefined) ?
              <div>({this.state.selection.x},{this.state.selection.y})</div>
              :
            <div>({this.state.currentMousePosition.x},{this.state.currentMousePosition.y})</div>
          }

          {
            (this.state.selection.x !== undefined) ?
            <div className="owner">
              <br/>
              <span>
                {
                  this.state.selection.owner === undefined ?
                    <div>

                    </div>
                    :
                    "Owner: " + truncate(this.state.selection.owner, 25, "...")
                }
              </span>
            </div>
            :
            ''
          }
        </div>

        <hr/>
        {
          this.state.selection.color ?
            this.state.selection.owner === undefined ?
              <div className="detail-box">
                <h2>Nobody owns this pixel yet!</h2>
                <p>You can claim it for yourself and set it to any color you want!</p>
                <p>You'll be the true owner of this little pixel, nobody can take it from you.</p>

                <button className="primary" onClick={this.claimPixel.bind(this, this.state.selection)}>CLAIM PIXEL</button>
                <button className="secondary" onClick={this.clearSelection}>DESELECT [ESC]</button>
              </div>
            :
              this.state.selection.owner === publicKey ?
                "You own this pixel!"
              :
                <button className="secondary" onClick={this.clearSelection}>DESELECT [ESC]</button>
          :
          ""
        }

        <style jsx>
          {`
            .controls {
              float: left;
              color: #fff;
              font-size: 16px;
              width: 400px;
            }

            .selected {
              color: #fff !important
            }

            .selectionPreview {
              width: 100px;
              height: 100px;
              border: 1px solid #222222;
              float: left;
              margin-right: 20px;
              margin-bottom: 10px;
            }

            .selection {
              color: #858585;
            }

            h2 {
              font-size: 16px;
              margin: 0;
              margin-bottom: 10px;
            }

            hr {
              clear: both;
              border-color: #222
            }

            .owner span {

            }

            .detail-box {
              font-family: system, -apple-system, system-ui;
              color: #aaa;
            }

            .detail-box h2 {
              color: #fff
            }
          `}
        </style>

      </div>

    </div>
  }
}

export default Index
