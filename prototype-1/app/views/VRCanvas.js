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

		// Initialize THREE
		this.initThreeJS();

        // Create the scene content
        this.initScene();

        var that = this;

        // Run the run loop
        window.requestAnimationFrame(function() {
        	that.run();
        });

	},

	render: function() {
		return (
			<div className="vr_canvas"></div>
			);
	},

	initThreeJS: function() {
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

	initScene: function() {
	    // Create a new Three.js scene
	    var scene = new THREE.Scene();

	    // Add  a camera so we can view the scene
	    // Note that this camera's FOV is ignored in favor of the
	    // Oculus-supplied FOV for each used inside VREffect.
	    // See VREffect.js h/t Michael Blix
        var camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 4000 );
		scene.add(camera);

        // Create a texture-mapped cube and add it to the scene
        // First, create the texture map
        var mapUrl = "../images/webvr-logo-512.jpeg";
        var map = THREE.ImageUtils.loadTexture(mapUrl);

        // Now, create a Basic material; pass in the map
        var material = new THREE.MeshBasicMaterial({ map: map });

        // Create the cube geometry
        var geometry = new THREE.BoxGeometry(2, 2, 2);

        // And put the geometry and material together into a mesh
        cube = new THREE.Mesh(geometry, material);

        // Move the mesh back from the camera and tilt it toward the viewer
        cube.position.z = -6;
        cube.rotation.x = Math.PI / 5;
        cube.rotation.y = Math.PI / 5;

        // Finally, add the mesh to our scene
        scene.add( cube );

        this.scene = scene;
        this.camera = camera;
	},

	run: function() {

		var that = this;
		window.requestAnimationFrame(function() {
			that.run();
		});

		this.main();
	},

	main: function() {

		this.update();
		this.present();
	},

	update : function() {


	},

	present : function() {

		this.renderer.render(this.scene, this.camera);

	},

	refreshSize: function() {

		var fullWidth = this.container.clientWidth,
            fullHeight = this.container.clientHeight;

		this.renderer.setSize(fullWidth, fullHeight);

	},	
});
	
module.exports = VRCanvas;
