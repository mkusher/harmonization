define(['three'], function(t){
	var renderer = new t.CanvasRenderer(),
		root;
	
	root = document.getElementById("scene");
	
	renderer.setSize( root.offsetWidth , root.offsetHeight );
	root.appendChild( renderer.domElement );
	return renderer;
})