/** @jsx React.DOM */
var React = require('react');
var VRView = require('./views/VRView.js');

var App = React.createClass({
	getInitialState: function() {

		return { url: "hello.wvr" };
	},
	render: function() {
		return (
			<VRView></VRView>
		);
	}
	
});
	
module.exports = App;
