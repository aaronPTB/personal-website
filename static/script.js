window.onload = function() {
	//What panel the window is currently over
	var current_state = 0;

	//Find the rendered width of a specific loc element
	function getLocElementWidth(index) {
		var loc_element = document.getElementById("loc-" + index);
		elm_width = getComputedStyle(loc_element).width;
		return loc_element ? elm_width : "0px";
	}

	//Binding a button to a panel will cause the screen to
	//scroll to the upon clicking it
	function bindButtonToPanel(element_id, panel_number) {
		var element = document.getElementById(element_id);
		element.onclick = function() {
			window.scrollTo(0,window.innerHeight*panel_number * .98);
		}
	}

	bindButtonToPanel("loc-0", 0);
	bindButtonToPanel("loc-1", 1);
	bindButtonToPanel("loc-2", 2);
	bindButtonToPanel("loc-3", 3);

	//allows for some nifty animations upon scrolling
	window.onscroll = function() {
		var pos = window.pageYOffset;

		//Figure out current panel based on scroll pos
		state = Math.floor(pos/(.98 * window.innerHeight));

		if (state != current_state) {
			var underline = document.getElementById("underline");
			
			underline.style.left  = [16,95,183,275][state];
			underline.style.width = getLocElementWidth(state); 

			current_state = state;
		}
	}
}