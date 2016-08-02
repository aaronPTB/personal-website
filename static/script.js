window.onload = function() {
	//What panel the window is currently over
	var current_state = 0;
	var window_positions  = [0, 1, 2.5, 3.5]
	var renderable_items = document.getElementsByClassName("card");

	//Declared here, will be added to after all helpers are defined
	var renderable_item_position_dict = {};

	//Check if item is on the screen
	function checkVisible(element) {
	  var rect = element.getBoundingClientRect();
		//If the objects bottom is above the screen or
		//if the objects top is below the screen
	  return !(rect.bottom < 0 || rect.top - window.innerHeight >= 0);
	}

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
			window.scrollTo(0,window.innerHeight*window_positions[panel_number]);
		}
	}

	function getScaledPosition() {
		return window.pageYOffset/window.innerHeight;
	}
	//Finds what state the top navigation panel should be in
	//By comparing scroll pos to window_positions
	function windowState(position) {
		loc = position + .2;
		state = -1;
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

	//TODO: Adds to renderable_item_position_dict to reduce overhead

	//allows for some nifty animations upon scrolling
	window.onscroll = function() {
		var pos   = getScaledPosition()

		Array.prototype.forEach.call(renderable_items, function(element) {
				if (checkVisible(element)) {
					element.style.transform = "translateY(20px) scale(1,1)";
					element.style.opacity   = 1;
				}
				else{
					element.style.transform = "translateY(0px) scale(.8,.8)";
					element.style.opacity   = 0;
				}
				//element.style.backgroundColor=
		})

		var state = windowState(pos);
		if (state != current_state) {
			var underline = document.getElementById("underline");

			underline.style.left  = [20,101,195,283][state];
			underline.style.width = getLocElementWidth(state);

			current_state = state;
		}
	}
}
