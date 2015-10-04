var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var molecules = [];

var initSceneCameraAndLight = function ()
{
	var scene = new BABYLON.Scene(engine);
	var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
	camera.setTarget(BABYLON.Vector3.Zero());
	camera.attachControl(canvas, true);
	var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
	light.intensity = 0.7;
}

var createMol = function (radius, x, y, z)
{
	var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, radius, scene);

}

var createScene = function () 
{
	
	sphere.position.y = 1;
	var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
	return scene;
};

var scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});