define(['three', 'services/scene'], function(t, scene){
	var draw = function(geometry){
		var material = new THREE.LineBasicMaterial({
			color: 0x0000ff
		});
		var line = new THREE.Line( geometry, material );
		scene.add( line );
	},
		drawX = function(length){
		
		var geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vector3( 0, 0, 0 ) );
		geometry.vertices.push( new THREE.Vector3( length, 0, 0 ) );
		geometry.vertices.push( new THREE.Vector3( 0.95*length, 0.05*length, 0 ) );
		geometry.vertices.push( new THREE.Vector3( length, 0, 0 ) );
		geometry.vertices.push( new THREE.Vector3( 0.95*length, -0.05*length, 0 ) );
		
		draw(geometry);
	},
		drawY = function(length){
		
		var geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vector3( 0, 0, 0 ) );
		geometry.vertices.push( new THREE.Vector3( 0, -length, 0 ) );
		geometry.vertices.push( new THREE.Vector3( 0.05*length, -0.95*length, 0 ) );
		geometry.vertices.push( new THREE.Vector3( 0, -length, 0 ) );
		geometry.vertices.push( new THREE.Vector3( -0.05*length, -0.95*length, 0 ) );
		
		draw(geometry);
	},
		drawZ = function(length){
		
		var geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vector3( 0, 0, 0 ) );
		geometry.vertices.push( new THREE.Vector3( 0, 0, length) );
		geometry.vertices.push( new THREE.Vector3( 0.05*length, 0.05*length, 0.95*length ) );
		geometry.vertices.push( new THREE.Vector3( 0, 0, length) );
		geometry.vertices.push( new THREE.Vector3( -0.05*length, -0.05*length, 0.95*length ) );
		
		draw(geometry);
	}
	return function(lx, ly, lz){
		drawX(lx);
		drawY(ly);
		drawZ(lz);
	};
})