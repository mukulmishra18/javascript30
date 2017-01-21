var lastChecked;
const items = document.querySelectorAll('input');

function handleClick(e) {
	// check if shiftkey is pressed and we are checking the box
	var inBetween = false;
	if (e.shiftKey && this.checked) {
		// loop over every single check box
		items.forEach(item => {
			console.log(item);
			if (item === this || item === lastChecked) {
				inBetween = !inBetween;
			}

			if (inBetween) {
				item.checked = true;
			}
		});
	}

	lastChecked = this;
}

items.forEach(item => item.addEventListener('click', handleClick));
