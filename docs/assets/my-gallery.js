let allFiguresImage = document.querySelectorAll('.c-gallery-big-img-container .c-gallery-figure-container');

if(allFiguresImage.length === 5) {
	allFiguresImage[2].style["display"] = "block";
	allFiguresImage[2].style["opacity"] = "1";
}

document.querySelectorAll('.c-gallery-small-img')
	.forEach(img => img.addEventListener('click', clickImagetoBigContainer, false));

document.querySelectorAll('.c-gallery-figure-img').forEach(img => img.addEventListener('click', growImage, false));


function clickImagetoBigContainer(e) {
	e.preventDefault();
	let labelImg = this.parentNode.className;
	let currentShownImg = document.querySelector(`.c-gallery-big-img-container .${labelImg}`);

	//loop that all elements Figure
	//set previus picture with opacity 0 and after display none!
	allFiguresImage.forEach(f => {
		if(currentShownImg.style.display !== 'block' && f.style.display === 'block') {
			f.animate([
				{ opacity: '1' },
				{ opacity: '0' },
				], {
					duration: 1000,
					easeing: "ease-out",
					delay: 0,
					fill: "forwards",
			});
			//slow display none because animation with opacity!
			setTimeout(function() {
				f.style["display"] = "none";
			}, 1000);
		}
	});

	//show clicked image!!!
	currentShownImg.style["display"] = "block";
	currentShownImg.animate([
		{ opacity: '0' },
		{ opacity: '1' },
		], {
			duration: 1000,
			easeing: "ease-out",
			delay: 0,
			fill: "forwards",
	});
}

function growImage(e) {
	e.preventDefault();
	let img = this.src;
	let title = this.parentNode.querySelector('.o-h4').textContent;
	let content = this.parentNode.querySelector('.o-p').textContent;
	
	let imgGrowContainer = document.querySelector('.c-grow-image');
	imgGrowContainer.style["display"] = "flex";
	document.querySelector('.c-grow-image-title').textContent = title;
	document.querySelector('.c-grow-image-img').src = img;
	document.querySelector('.c-grow-image-content').textContent = content;
}

document.querySelector('.c-grow-image .fa-times').addEventListener('click', function(e) {
	e.preventDefault();
	this.parentNode.parentNode.parentNode.style["display"] = "none";
},false);