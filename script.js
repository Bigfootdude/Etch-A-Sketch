

function buttonCall() {
	let pixelCount = prompt('How many pixels to put into the screen!');
	pixelCount = parseInt(pixelCount);
	if (pixelCount >= 16 && pixelCount <= 100) {
		screen(pixelCount);
	} else if (pixelCount < 16) {
		screen(16);
	} else if (pixelCount > 100) {
		screen (100);
	}
}

function screen(pixels) {
	const canvas = document.querySelector('#canvas');
	canvas.innerHTML = '';
	for (y=0; y<pixels; y++) {
		wide = 900 / pixels; 
		high = 900 / pixels;
	for (i=0;i<pixels;i++) {
		const pop = document.createElement('div');
		pop.className = `pixels`;
		pop.style = `height: ${high}px; width: ${wide}px;`;
		pop.setAttribute("onmouseover","style.backgroundColor = 'black'");
		canvas.appendChild(pop);
		}
	}
}

screen(16);
