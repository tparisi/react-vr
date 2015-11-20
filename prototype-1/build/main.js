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

},{"./views/VRView.js":"/Users/Tony/Dev/Github/react-vr/prototype-1/app/views/VRView.js","react":"react"}],"/Users/Tony/Dev/Github/react-vr/prototype-1/app/main.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, null), document.body);
},{"./App.js":"/Users/Tony/Dev/Github/react-vr/prototype-1/app/App.js","react":"react"}],"/Users/Tony/Dev/Github/react-vr/prototype-1/app/views/VRCanvas.js":[function(require,module,exports){
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
	},
	render: function() {
		return (
			React.createElement("canvas", {width: this.state.width, height: this.state.height, className: "vr_canvas"})
			);
	}
	
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

},{"./VRCanvas.js":"/Users/Tony/Dev/Github/react-vr/prototype-1/app/views/VRCanvas.js","react":"react"}]},{},["/Users/Tony/Dev/Github/react-vr/prototype-1/app/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQXBwLmpzIiwiYXBwL21haW4uanMiLCJhcHAvdmlld3MvVlJDYW52YXMuanMiLCJhcHAvdmlld3MvVlJWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVlJWaWV3ID0gcmVxdWlyZSgnLi92aWV3cy9WUlZpZXcuanMnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBcHBcIixcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuXHRcdHJldHVybiB7IHVybDogXCJoZWxsby53dnJcIiB9O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFZSVmlldywge3dpZHRoOiBcIjcwMFwifSlcblx0XHQpO1xuXHR9XG5cdFxufSk7XG5cdFxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKTtcblJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCksIGRvY3VtZW50LmJvZHkpOyIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFZSQ2FudmFzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlZSQ2FudmFzXCIsXG5cdGNhbnZhczpudWxsLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXG5cdFx0cmV0dXJuIHsgdXJsOiBcIlwiLCB3aWR0aDp0aGlzLnByb3BzLndpZHRoID8gdGhpcy5wcm9wcy53aWR0aCA6IDMwMCwgXG5cdFx0XHRoZWlnaHQ6dGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IDMwMCB9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMuY2FudmFzID0gUmVhY3QuZmluZERPTU5vZGUodGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwge3dpZHRoOiB0aGlzLnN0YXRlLndpZHRoLCBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LCBjbGFzc05hbWU6IFwidnJfY2FudmFzXCJ9KVxuXHRcdFx0KTtcblx0fVxuXHRcbn0pO1xuXHRcbm1vZHVsZS5leHBvcnRzID0gVlJDYW52YXM7XG4iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVlJDYW52YXMgPSByZXF1aXJlKCcuL1ZSQ2FudmFzLmpzJyk7XG5cbnZhciBWUlZpZXcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVlJWaWV3XCIsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cblx0XHRyZXR1cm4geyB1cmw6IFwiXCIsIHdpZHRoOnRoaXMucHJvcHMud2lkdGggPyB0aGlzLnByb3BzLndpZHRoIDogMzAwLCBcblx0XHRcdGhlaWdodDp0aGlzLnByb3BzLmhlaWdodCA/IHRoaXMucHJvcHMuaGVpZ2h0IDogMzAwIH07XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ2cl92aWV3XCJ9LCBcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChWUkNhbnZhcywge3dpZHRoOiB0aGlzLnN0YXRlLndpZHRoLCBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0fVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXHRcbn0pO1xuXHRcbm1vZHVsZS5leHBvcnRzID0gVlJWaWV3O1xuIl19
