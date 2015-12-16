/** @jsx React.DOM */
var React = require('react');
var VRView = require('./views/VRView.js');

var App = React.createClass({
	getInitialState: function() {

		return { url: "../360videos/MythBusters+-+Sharks+Everywhere!+(360+Video)-3WIS6N_9gjA.mp4" };
	},
	render: function() {
		return (
			<VRView url={this.state.url}></VRView>
		);
	}
	
});
	
module.exports = App;
