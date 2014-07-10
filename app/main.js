requirejs(['jquery', 
	    'services/scene', 
	    'services/camera', 
	    'services/character',
	    'services/renderer'
	    ], 
	    function($, scene, camera, character, renderer){
	var geometry, material, mesh;
	
	geometry = new THREE.Geometry( );
	
	geometry.vertices.push( new THREE.Vector3( 0, 0, 0 ) );
	geometry.vertices.push( new THREE.Vector3( 500, 0, 0 ) );
	geometry.vertices.push( new THREE.Vector3( 250, 5, 0 ) );
	geometry.vertices.push( new THREE.Vector3( 250, -5, 0 ) );
	
	geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geometry.faces.push( new THREE.Face3( 0, 1, 3 ) );
	
	geometry.computeBoundingSphere();
	material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
	mesh = new THREE.Mesh( geometry, material );
	
	
	scene.add( mesh );
	
	renderer.render( scene, camera );
});