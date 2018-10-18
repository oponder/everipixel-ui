import React, { Component } from 'react';

export class Canvas extends Component {
  componentDidMount() {
    this.ctx = this.refs.canvas.getContext("2d");

    var ctx = this.ctx;
    const { width, height } = this.props;
    const opts = {
      width,
      height,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

    var img1 = new Image();
    img1.src = '/static/pixelart.jpg';

    img1.onload = function () {
      ctx.drawImage(img1, 0, 0);
    };

    // this.initRatio();
  }

  componentDidUpdate(oldProps) {
    const { width, height } = this.props;
    if (oldProps.width !== width || oldProps.height !== height) {
      this.initRatio();
    }
  }

  initRatio() {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStoreRatio = this.getBackingRatio();
    const ratio = this.getRatio();

    if (devicePixelRatio !== backingStoreRatio) {
      this.ctx.scale(ratio, ratio);
    }
  }

  clear() {
    cache = {};
    const { width, height } = this.props;
    this.ctx.clearRect(0, 0, width, height);
  }

  getBackingRatio() {
    if (!this.ctx) return 1;
    return this.ctx.webkitBackingStorePixelRatio ||
      this.ctx.mozBackingStorePixelRatio ||
      this.ctx.msBackingStorePixelRatio ||
      this.ctx.oBackingStorePixelRatio ||
      this.ctx.backingStorePixelRatio || 1;
  }

  getRatio() {
    const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

    return devicePixelRatio / this.getBackingRatio();
  }

  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(this.ctx, e);
    }
  }

  handleMouseMove(e) {
    if (this.props.onMouseMove) {
      this.props.onMouseMove(this.ctx, e);
    }
  }

  handleMouseDown(e) {
    if (this.props.onMouseDown) {
      this.props.onMouseDown(this.ctx, e);
    }
  }

  handleMouseUp(e) {
    if (this.props.onMouseUp) {
      this.props.onMouseUp(this.ctx, e);
    }
  }

  handleMouseOut(e) {
    if (this.props.onMouseOut) {
      this.props.onMouseOut(this.ctx, e);
    }
  }

  render() {
    const { width, height, scale } = this.props;

    return <div style={{
      width: (width)*scale,
      height: (height)*scale,
      position: "relative",
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
      border: "1px solid #222",
      float: "left",
    }}>
    <div style={{
      transform:"scale("+scale+","+scale+")",
      transformOrigin: "top left",
      float: "left",
    }}>
    <canvas
      className="canvas"
      width={width}
      height={height}
      style={{
        width: width,
        height: height,
        backgroundColor: "rgba(0,0,0,1)",
        display: "block",
        imageRendering: "pixelated"
      }}
      onClick={this.handleClick.bind(this)}
      onMouseMove={this.handleMouseMove.bind(this)}
      onMouseDown={this.handleMouseDown.bind(this)}
      onMouseUp={this.handleMouseUp.bind(this)}
      onMouseOut={this.handleMouseOut.bind(this)}
      ref="canvas"
    >
    </canvas>
    </div>
    </div>;
  }
}
