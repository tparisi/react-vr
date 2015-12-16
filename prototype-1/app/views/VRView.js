/** @jsx React.DOM */
var React = require('react');
var VRCanvas = require('./VRCanvas.js');

var VRView = React.createClass({
	getInitialState: function() {

		return { url: "../360videos/MythBusters+-+Sharks+Everywhere!+(360+Video)-3WIS6N_9gjA.mp4", width:this.props.width ? this.props.width : 300, 
			height:this.props.height ? this.props.height : 300 };
	},
	componentDidMount: function() {

	},
	render: function() {
		return (
			<div className="vr_view">
				<VRCanvas url={this.state.url}>
				</VRCanvas>
			</div>
		);
	}
	
});
	
module.exports = VRView;
