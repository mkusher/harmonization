define(['three'], function(t){
	var camera = new t.OrthographicCamera( -650, 650, -350, 350, 1, 1000000 );
	camera.position.z = 1000;
	return camera;
});