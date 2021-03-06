key_is_down = {};

function button_down() {
	switch (scene_state) {
		case "splash":
			selectScene("gameplay");
			break;
		case "gameplay":
			gamestate.button();
			break;
	}
}

function handleKeyInput(key, dir) {

	if (!game_started) return false;

	if (dir == "down") {
		key_is_down[key] = true;
		switch(key) {
			case "button":
				button_down();
				break;
			default:
				break;
		}
	} else if (dir == "up") {
		key_is_down[key] = false;
		switch(key) {
			case "button":
				// button_up();
				break;
			default:
				break;
		}
	}

}


function onKeyDown(e) {
	if (e.keyCode == 32) {  // button
		e.preventDefault();
		handleKeyInput("button", "down");
	}
}

function onKeyUp(e) {
	if (e.keyCode == 32) {  // button
		e.preventDefault();
		handleKeyInput("button", "up");
	}
}


document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
