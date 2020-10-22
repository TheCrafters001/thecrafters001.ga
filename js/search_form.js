
// ---------- script properties ----------


var results_location = "/search_results.html";


// ---------- end of script properties ----------


function search_form(jse_Form) {
	if (jse_Form.d.value.length > 0) {
		document.cookie = "q=" + escape(jse_Form.d.value);
		window.location = results_location;
	}
}
