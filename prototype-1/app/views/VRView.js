/** @jsx React.DOM */
var React = require('react');
var VRCanvas = require('./VRCanvas.js');

var VRView = React.createClass({
	getInitialState: function() {

		return { url: "", width:this.props.width ? this.props.width : 300, 
			height:this.props.height ? this.props.height : 300 };
	},
	componentDidMount: function() {

	},
	render: function() {
		return (
			<div className="vr_view">
				<VRCanvas width={this.state.width} height={this.state.height}>
				</VRCanvas>
			</div>
		);
	}
	
});
	
module.exports = VRView;
