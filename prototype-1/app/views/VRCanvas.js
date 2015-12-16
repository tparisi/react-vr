/** @jsx React.DOM */
var React = require('react');
var THREE = require('../three/three.js');

var VRCanvas = React.createClass({
	canvas:null,
	getInitialState: function() {

		return { url: "", width:this.props.width ? this.props.width : 300, 
			height:this.props.height ? this.props.height : 300 };
	},
	componentDidMount:function() {

		this.container = React.findDOMNode(this);
		this.initVR();
	},
	render: function() {
		return (
			<div className="vr_canvas"></div>
			);
	},
	initVR: function() {
		// Create the Three.js renderer and attach it to our canvas
	    this.renderer = new THREE.WebGLRenderer( { antialias: true} );

	    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

	    // Set the viewport size
	    this.container.appendChild(this.renderer.domElement);

	    var that = this;
	    
		window.addEventListener( 'resize', function() {
	    	that.refreshSize();
	    }, false );

	},
	refreshSize: function() {

		var fullWidth = this.container.clientWidth,
            fullHeight = this.container.clientHeight;

		this.renderer.setSize(fullWidth, fullHeight);

	},	
});
	
module.exports = VRCanvas;
