var atoms = "fewfwfwfwefwg";

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
// 1 -  6        Record name     "ATOM  "                                            
// 7 - 11        Integer         Atom serial number.                   
// 13 - 16        Atom            Atom name.                            
// 17             Character       Alternate location indicator.         
// 18 - 20        Residue name    Residue name.                         
// 22             Character       Chain identifier.                     
// 23 - 26        Integer         Residue sequence number.              
// 27             AChar           Code for insertion of residues.       
// 31 - 38        Real(8.3)       Orthogonal coordinates for X in Angstroms.                       
// 39 - 46        Real(8.3)       Orthogonal coordinates for Y in Angstroms.                            
// 47 - 54        Real(8.3)       Orthogonal coordinates for Z in Angstroms.                            
// 55 - 60        Real(6.2)       Occupancy.                            
// 61 - 66        Real(6.2)       Temperature factor (Default = 0.0).
	
					var recordName = lines[line].substring(0, 3);
					var serialNumber = lines[line].substring(6, 10);
					var name = lines[line].substring(12, 15);
					var locationIndicator = lines[line].substring(15, 16);
					var residueName = lines[line].substring(17, 19);
					var chainIdentifier = lines[line].substring(21, 22);
					var residueSequenceNumber = lines[line].substring(22, 25);
					var insertionResidueCode = lines[line].substring(25, 26);
					var x = lines[line].substring(31, 38);
					var y = lines[line].substring(39, 43);
					var z = lines[line].substring(47, 54);
					var size = lines[line].substring(55, 60);

					console.log(
						"recordName:" + recordName 
						+ " serialNumber:" + serialNumber 
						+ " name:" + name 
						+ " locationIndicator:" + locationIndicator 
						+ " residueName:" + residueName 
						+ " chainIdentifier:" + chainIdentifier
						+ " residueSequenceNumber:" + residueSequenceNumber
						+ " insertionResidueCode:" + insertionResidueCode
						+ " x:" + x
						+ " y:" + y
						+ " z:" + z
						+ " size:" + size
					);
					atoms = "couille";
				
			}
		};
		reader.readAsText(file);

	}
	document.getElementById('file').addEventListener('change', handleFile, false);

} else {
	alert('The File APIs are not fully supported in this browser.');
}