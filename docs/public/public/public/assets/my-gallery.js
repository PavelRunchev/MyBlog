
document.querySelectorAll('.c-gallery-small-img')
	.forEach(img => img.addEventListener('click', clickImagetoBigContainer, false));

let allFiguresImage = document.querySelectorAll('.c-gallery-figure-container');
document.querySelectorAll('.c-gallery-figure-img').forEach(img => img.addEventListener('click', growImage, false));
allFiguresImage[2].style["display"] = "block";
allFiguresImage[2].style["opacity"] = "1";


function clickImagetoBigContainer(e) {
	e.preventDefault();
	clearAllImages();
	let labelImg = this.parentNode.className;
	let currentShownImg = document.querySelector(`.c-gallery-big-img-container .${labelImg}`);
	currentShownImg.style["display"] = "block";
	currentShownImg.style["opacity"] = "1";
}

function clearAllImages() {
	allFiguresImage.forEach(img => {
		img.style["opacity"] = "0"
		img.style["display"] = "none";
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