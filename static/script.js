window.onload = function() {
	//What panel the window is currently over
	var current_state = 0;
	var window_positions  = [0.98, 1.83, 2.63, 3.59]

	//Find the rendered width of a specific loc element
	function getLocElementWidth(index) {
		if (index < window_positions.length) {
			var loc_element = document.getElementById("loc-" + index);
			elm_width = getComputedStyle(loc_element).width;
			return loc_element ? elm_width : "0px";
		}
	}

	//Binding a button to a panel will cause the screen to
	//scroll to the upon clicking it
	function bindButtonToPanel(element_id, panel_number) {
		var element = document.getElementById(element_id);
		element.onclick = function() {
			window.scrollTo(0,window.innerHeight*window_positions[panel_number - 1]);
		}
	}

	//Finds what state the top navigation panel should be in
	//By comparing scroll pos to window_positions
	function windowState(position) {
		loc = position/window.innerHeight + .2;
		state = 0;
		for (var i = 0; i < window_positions.length; i++) {
			if (loc > window_positions[i]) {
				state = state + 1;
			}
			else {
				break;
			}
		}
		return state;
	}

	bindButtonToPanel("loc-0", 0);
	bindButtonToPanel("loc-1", 1);
	bindButtonToPanel("loc-2", 2);
	bindButtonToPanel("loc-3", 3);

	//allows for some nifty animations upon scrolling
	window.onscroll = function() {
		var pos = window.pageYOffset;

		state = windowState(pos);
		if (state != current_state) {
			var underline = document.getElementById("underline");

			underline.style.left  = [13,92,180,270][state];
			underline.style.width = getLocElementWidth(state);

			current_state = state;
		}
	}
}
