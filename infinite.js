window.onload=function() {
	// Get the Object by ID
	var a = document.getElementById("glob");
	// Get the SVG document inside the Object tag
	var svgDoc = a.contentDocument;
	// Get one of the SVG items by ID;
	var svgItem = svgDoc.getElementById("yes");
	// Set the colour to something else
	svgItem.setAttribute("rx", "80");
};