requirejs.config({
	baseUrl: 'app',
	paths: {
		jquery: 'base/jquery',
		three: 'base/three',
		bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
		async: '../bower_components/asyncjs/lib/async',
		underscore: '../bower_components/underscore/underscore',
		eventable: '../bower_components/Eventable/eventable',
		
		"jquery-lib": '../bower_components/jquery/dist/jquery.min',
		"three-lib": '../bower_components/threejs/build/three.min'
	}
});
window.exports = {};