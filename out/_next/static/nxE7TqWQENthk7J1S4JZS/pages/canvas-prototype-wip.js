(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{335:function(e,t,n){__NEXT_REGISTER_PAGE("/canvas-prototype-wip",function(){return e.exports=n(336),{page:e.exports.default}})},336:function(e,t,n){"use strict";n.r(t),n.d(t,"Index",function(){return w});var a=n(35),o=n.n(a),s=n(0),r=n.n(s),i=n(153),c=n(32),l=n.n(c),u=n(154);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=1e3,y=1e3,b=function(e,t){var n=e.canvas.getBoundingClientRect(),a=Math.floor((t.clientX-n.left)/.5),o=Math.floor((t.clientY-n.top)/.5);return a=Math.min(x-1,a),o=Math.min(y-1,o),{x:a=Math.max(0,a),y:o=Math.max(0,o)}},j=function(e,t){for(var n=e.getImageData(0,0,x,y),a=n.data,o=0;o<a.length;o+=4)a[o]=a[o]*t,a[o+1]=a[o+1]*t,a[o+2]=a[o+2]*t;e.putImageData(n,0,0)},w=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,o=f(t).call(this,e),n=!o||"object"!==d(o)&&"function"!=typeof o?g(a):o,v(g(g(n)),"canvasReady",function(e){console.log(e),n.ctx=e,n.imageData=e.getImageData(0,0,x,y)}),v(g(g(n)),"onEsc",function(e){27===e.keyCode&&n.clearSelection()}),v(g(g(n)),"clearSelection",function(){n.ctx.putImageData(n.imageData,0,0),n.setState({selection:{}})}),v(g(g(n)),"mouseMove",function(e,t,a){if(n.state.dragging){var o=b(e,t),s=n.state.selection.x1,r=n.state.selection.y1,i=o.x,c=o.y;s>i&&(s=i,i=n.state.selection.x1),r>c&&(r=c,c=n.state.selection.y1),n.setState({selection:{x1:n.state.selection.x1,y1:n.state.selection.y1,x2:o.x,y2:o.y}});var l=i-s,u=c-r;if(l>=0&&u>=0){var d=n.selectionContext.getImageData(s,r,l+1,u+1),p=n.refs.selectionCanvas.getContext("2d");p.clearRect(0,0,100,100),e.putImageData(n.imageData,0,0),j(e,.5),e.putImageData(d,s,r),p.putImageData(d,0,0)}}else{var f=b(e,t);n.setState({currentMousePosition:f}),n.state.hovering||(j(e,.5),n.setState({hovering:!0}))}}),v(g(g(n)),"mouseOut",function(e,t){n.state.dragging&&n.mouseUp(e,t),n.setState({currentMousePosition:{x:0,y:0}}),n.state.hovering&&(e.putImageData(n.imageData,0,0),n.setState({hovering:!1}))}),v(g(g(n)),"mouseDown",function(e,t){e.putImageData(n.imageData,0,0),n.selectionCanvas=document.createElement("canvas"),n.selectionCanvas.width=x,n.selectionCanvas.height=y,n.selectionContext=n.selectionCanvas.getContext("2d"),n.selectionContext.putImageData(n.imageData,0,0),n.dragStartSound.play();var a=b(e,t);n.setState({dragging:!0,selection:{x1:a.x,y1:a.y,x2:a.x,y2:a.y}}),j(e,.5),n.mouseMove(e,t)}),v(g(g(n)),"mouseUp",function(e,t){if(n.state.dragging){var a=b(e,t);n.setState({dragging:!1,selection:Object.assign({},n.state.selection,{x2:a.x,y2:a.y})});var o=a.x-n.state.selection.x1,s=a.y-n.state.selection.y1,r=n.refs.selectionCanvas.getContext("2d");if(r.clearRect(0,0,100,100),0!==o&&0!==s){var i=e.getImageData(n.state.selection.x1,n.state.selection.y1,o,s);r.putImageData(i,0,0),n.dragStopSound.play()}else n.dragStopSound.play()}}),v(g(g(n)),"selectedPixels",function(){var e=[],t=n.state.selection.x1,a=n.state.selection.y1,o=n.state.selection.x2,s=n.state.selection.y2;t>o&&(t=o,o=n.state.selection.x1),a>s&&(a=s,s=n.state.selection.y1);for(var r=a;r<=s;r++)for(var i=t;i<=o;i++)e.push(r*x+i);return e}),v(g(g(n)),"rowRenderer",function(e){var t=e.key,a=e.index,o=(e.isScrolling,e.isVisible,e.style);return r.a.createElement("div",{key:t,style:o},"Pixel #",n.selectedPixels()[a])}),"undefined"!=typeof window&&(n.dragStartSound=new l.a.Sound("/static/dragstart.mp3"),n.draggingSound=new l.a.Sound("/static/dragging.mp3"),n.dragStopSound=new l.a.Sound("/static/dragend.mp3"),n.dragFailSound=new l.a.Sound("/static/dragfail.mp3")),n.state={dragging:!1,selection:{},currentMousePosition:{x:0,y:0}},n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,s["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onEsc,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onEsc,!1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"jsx-4179034185 header"},r.a.createElement("h1",{className:"jsx-4179034185"},"everi",r.a.createElement("span",{className:"jsx-4179034185"},"Pixel")),r.a.createElement(o.a,{styleId:"4179034185",css:["h1.jsx-4179034185{color:#858585;font-size:24px;margin:0;}","h1.jsx-4179034185 span.jsx-4179034185{color:#fff;}",".header.jsx-4179034185{border-bottom:1px solid #222222;padding:20px;margin-bottom:20px;}"]})),r.a.createElement(i.a,{width:x,height:y,onReady:this.canvasReady,onMouseOut:this.mouseOut,onMouseMove:this.mouseMove,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp,scale:.5}),r.a.createElement("div",{className:"jsx-1921656205 controls"},r.a.createElement("div",{className:"jsx-1921656205 selection"},r.a.createElement("div",{className:"jsx-1921656205 selectionPreview"},r.a.createElement("canvas",{width:"100px",height:"100px",ref:"selectionCanvas",className:"jsx-1921656205"})),r.a.createElement("h2",{className:"jsx-1921656205"},void 0!==this.state.selection.x1?r.a.createElement("div",{className:"jsx-1921656205"},"Selection ",r.a.createElement("span",{onClick:this.clearSelection,className:"jsx-1921656205"},"[ESC]")):"No selection"),void 0!==this.state.selection.x1?this.state.selection.x1===this.state.selection.x2&&this.state.selection.y1==this.state.selection.y2?r.a.createElement("div",{className:"jsx-1921656205"},"(",this.state.selection.x1,",",this.state.selection.y1,")"):r.a.createElement("div",{className:"jsx-1921656205"},"(",this.state.selection.x1,",",this.state.selection.y1,") to (",this.state.selection.x2,",",this.state.selection.y2,")"):r.a.createElement("div",{className:"jsx-1921656205"},"(",this.state.currentMousePosition.x,",",this.state.currentMousePosition.y,")")),r.a.createElement("hr",{className:"jsx-1921656205"}),r.a.createElement("div",{className:"jsx-1921656205 pixelList"},this.state.dragging?"":r.a.createElement(u.a,{width:300,height:300,rowCount:this.selectedPixels().length,rowHeight:20,rowRenderer:this.rowRenderer})),r.a.createElement(o.a,{styleId:"1921656205",css:[".controls.jsx-1921656205{float:left;color:#fff;font-size:16px;width:320px;}",".pixelList.jsx-1921656205{height:600px;overflow-y:scroll;}",".pixelList.jsx-1921656205::-webkit-scrollbar{width:10px;}",".pixelList.jsx-1921656205::-webkit-scrollbar *.jsx-1921656205{background:#222;}",".pixelList.jsx-1921656205::-webkit-scrollbar-thumb{background:rgba(50,50,50,1) !important;}",".selectionPreview.jsx-1921656205{width:100px;height:100px;border:1px solid #222222;float:left;margin-right:20px;margin-bottom:10px;}","h2.jsx-1921656205{color:#858585;font-size:16px;margin:0;margin-bottom:10px;}","hr.jsx-1921656205{clear:both;border-color:#222;}"]})))}}])&&p(n.prototype,a),c&&p(n,c),t}();t.default=w}},[[335,1,0]]]);