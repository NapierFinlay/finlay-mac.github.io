var stats = ["HP: ???", "ATK: ???", "DEF: ???", "SPE: ???", "INT: ???"];

let back = document.getElementById("color-back").style.backgroundColor

// https://www.w3schools.com/js/js_functions.asp
function showStats() {
	var displayDiv = document.getElementById("variableDisplay");
	var listHTML = "<ul>";

	// https://www.w3schools.com/jsref/jsref_foreach.asp
	stats.forEach(function(variable) {
		listHTML += "<li>" + variable + "</li>";
	});

  listHTML += "</ul>";
  displayDiv.innerHTML = listHTML;
}

// https://www.w3schools.com/jsref/met_document_addeventlistener.asp
document.getElementById("statsButton").addEventListener("click", showStats);

