(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Tony/Dev/Github/react-vr/prototype-1/app/App.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var VRView = require('./views/VRView.js');

var App = React.createClass({displayName: "App",
	getInitialState: function() {

		return { url: "hello.wvr" };
	},
	render: function() {
		return (
			React.createElement(VRView, {width: "700"})
		);
	}
	
});
	
module.exports = App;

},{"./views/VRView.js":"/Users/Tony/Dev/Github/react-vr/prototype-1/app/views/VRView.js","react":"react"}],"/Users/Tony/Dev/Github/react-vr/prototype-1/app/views/VRCanvas.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

var VRCanvas = React.createClass({displayName: "VRCanvas",
	canvas:null,
	getInitialState: function() {

		return { url: "", width:this.props.width ? this.props.width : 300, 
			height:this.props.height ? this.props.height : 300 };
	},
	componentDidMount:function() {

		this.canvas = React.findDOMNode(this);
		this.initVR();
	},
	render: function() {
		return (
			React.createElement("canvas", {width: this.state.width, height: this.state.height, className: "vr_canvas"})
			);
	},
	initVR: function() {
	},
	
});
	
module.exports = VRCanvas;

},{"react":"react"}],"/Users/Tony/Dev/Github/react-vr/prototype-1/app/views/VRView.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var VRCanvas = require('./VRCanvas.js');

var VRView = React.createClass({displayName: "VRView",
	getInitialState: function() {

		return { url: "", width:this.props.width ? this.props.width : 300, 
			height:this.props.height ? this.props.height : 300 };
	},
	render: function() {
		return (
			React.createElement("div", {className: "vr_view"}, 
				React.createElement(VRCanvas, {width: this.state.width, height: this.state.height}
				)
			)
		);
	}
	
});
	
module.exports = VRView;

},{"./VRCanvas.js":"/Users/Tony/Dev/Github/react-vr/prototype-1/app/views/VRCanvas.js","react":"react"}],"/Users/Tony/Dev/Github/react-vr/prototype-1/specs/App-spec.js":[function(require,module,exports){
var App = require('./../app/App.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe("App", function() {

  it("should render text: Hello world!", function() {
    var app = TestUtils.renderIntoDocument(React.createElement(App));
    expect(React.findDOMNode(app).textContent).toEqual('Hello world!');
  });

});


},{"./../app/App.js":"/Users/Tony/Dev/Github/react-vr/prototype-1/app/App.js","react/addons":"react/addons"}]},{},["/Users/Tony/Dev/Github/react-vr/prototype-1/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQXBwLmpzIiwiYXBwL3ZpZXdzL1ZSQ2FudmFzLmpzIiwiYXBwL3ZpZXdzL1ZSVmlldy5qcyIsInNwZWNzL0FwcC1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVlJWaWV3ID0gcmVxdWlyZSgnLi92aWV3cy9WUlZpZXcuanMnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBcHBcIixcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuXHRcdHJldHVybiB7IHVybDogXCJoZWxsby53dnJcIiB9O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFZSVmlldywge3dpZHRoOiBcIjcwMFwifSlcblx0XHQpO1xuXHR9XG5cdFxufSk7XG5cdFxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBWUkNhbnZhcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJWUkNhbnZhc1wiLFxuXHRjYW52YXM6bnVsbCxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuXHRcdHJldHVybiB7IHVybDogXCJcIiwgd2lkdGg6dGhpcy5wcm9wcy53aWR0aCA/IHRoaXMucHJvcHMud2lkdGggOiAzMDAsIFxuXHRcdFx0aGVpZ2h0OnRoaXMucHJvcHMuaGVpZ2h0ID8gdGhpcy5wcm9wcy5oZWlnaHQgOiAzMDAgfTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKSB7XG5cblx0XHR0aGlzLmNhbnZhcyA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdHRoaXMuaW5pdFZSKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwge3dpZHRoOiB0aGlzLnN0YXRlLndpZHRoLCBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LCBjbGFzc05hbWU6IFwidnJfY2FudmFzXCJ9KVxuXHRcdFx0KTtcblx0fSxcblx0aW5pdFZSOiBmdW5jdGlvbigpIHtcblx0fSxcblx0XG59KTtcblx0XG5tb2R1bGUuZXhwb3J0cyA9IFZSQ2FudmFzO1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFZSQ2FudmFzID0gcmVxdWlyZSgnLi9WUkNhbnZhcy5qcycpO1xuXG52YXIgVlJWaWV3ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlZSVmlld1wiLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXG5cdFx0cmV0dXJuIHsgdXJsOiBcIlwiLCB3aWR0aDp0aGlzLnByb3BzLndpZHRoID8gdGhpcy5wcm9wcy53aWR0aCA6IDMwMCwgXG5cdFx0XHRoZWlnaHQ6dGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IDMwMCB9O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidnJfdmlld1wifSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoVlJDYW52YXMsIHt3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCwgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodH1cblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblx0XG59KTtcblx0XG5tb2R1bGUuZXhwb3J0cyA9IFZSVmlldztcbiIsInZhciBBcHAgPSByZXF1aXJlKCcuLy4uL2FwcC9BcHAuanMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0L2FkZG9ucycpO1xudmFyIFRlc3RVdGlscyA9IFJlYWN0LmFkZG9ucy5UZXN0VXRpbHM7XG5cbmRlc2NyaWJlKFwiQXBwXCIsIGZ1bmN0aW9uKCkge1xuXG4gIGl0KFwic2hvdWxkIHJlbmRlciB0ZXh0OiBIZWxsbyB3b3JsZCFcIiwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwcCA9IFRlc3RVdGlscy5yZW5kZXJJbnRvRG9jdW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChBcHApKTtcbiAgICBleHBlY3QoUmVhY3QuZmluZERPTU5vZGUoYXBwKS50ZXh0Q29udGVudCkudG9FcXVhbCgnSGVsbG8gd29ybGQhJyk7XG4gIH0pO1xuXG59KTtcblxuIl19
