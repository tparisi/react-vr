/** @jsx React.DOM */
var React = require('react');

var VRCanvas = React.createClass({
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
			<canvas width={this.state.width} height={this.state.height} className="vr_canvas"></canvas>
			);
	}
	
});
	
module.exports = VRCanvas;
