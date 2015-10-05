if (window.File && window.FileReader && window.FileList && window.Blob) {
	// Great success! All the File APIs are supported.
	console.log("API FILE SUPPORT OK!")

	function handleFile(evt){
		var files = evt.target.files;
		var file = files[0];
		console.log(file.name + " " + file.size+ " bytes loaded");

		var reader = new FileReader();
		reader.onload = function(progressEvent){
			var lines = this.result.split('\n');
			for(var line = 0; line < lines.length; line++){
				console.log(lines[line]);
			}
		};
		reader.readAsText(file);

	}
	document.getElementById('file').addEventListener('change', handleFile, false);

} else {
	alert('The File APIs are not fully supported in this browser.');
}