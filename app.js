var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);

var initSceneCameraAndLight = function(){
	var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
	camera.setTarget(BABYLON.Vector3.Zero());
	camera.attachControl(canvas, true);
	var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
	light.intensity = 0.7;
};

var createAtom = function(size, x, y , z){
	var sphere = BABYLON.Mesh.CreateSphere("atom", 16, size, scene);
	sphere.position.x = x;
	sphere.position.y = y;
	sphere.position.z = z;
};

var createScene = function() {
	initSceneCameraAndLight();
	console.log(atoms);
	// var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
	// sphere.position.y = 1;
	// var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
	createAtom(1, 1.2, 1.2, 1.5);
};

createScene();

var loadScene = function(){
	console.log(atoms);
};

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});