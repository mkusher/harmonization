requirejs(['jquery', 
	    'three',
	    'services/scene', 
	    'services/camera', 
	    'services/character',
	    'services/renderer',
	    'helpers/axis'
	    ], 
function($, t, scene, camera, character, renderer, axis){
	
	var axisHelper = new t.AxisHelper( 500 ),
		dragging = false, 
		coords = {x: 0, y: 0, z: 0},
		vector = new t.Vector3(100,-100,0),
		speedX = 2,
		speedY = 1.5;
	scene.add( axisHelper );
	
	$(renderer.domElement).mousedown(function(e){
		dragging = true;
		coords = {x: e.pageX, y: e.pageY};
	});
	$(document).mouseup(function(e){
		dragging = false;
	})
	.mousemove(function(e){
		var delta;
		if(dragging){
			delta = new t.Vector3(
				speedX*(- e.pageX + coords.x),
				speedY*(e.pageY - coords.y),
				vector.z
			);
			coords = {
				x: e.pageX,
				y: e.pageY
			};
			vector.add(delta);
			camera.lookAt(vector);
			renderer.render( scene, camera );
		}
	});
	camera.lookAt(vector);
	
	renderer.render( scene, camera );
});