var panels = document.querySelectorAll('.panel');

function panelActive(e) {
	//console.log(e);
	this.classList.toggle('open');
}

function openActive(e) {
	console.log(e.propertyName);
	if(e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('click', panelActive));
panels.forEach(panel => panel.addEventListener('transitionend', openActive));