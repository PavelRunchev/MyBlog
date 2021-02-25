
function toastrAnimation() {
	let toastr = document.querySelector('.c-toastr');
	toastr.style["display"] = "block";
	toastr.animate([
		{ opacity: '0' },
		{ opacity: '0.5' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '1' },
		{ opacity: '0.5' },
		{ opacity: '0',
		 	display: 'none' }
		], {
			duration: 5000,
			easeing: "ease-out",
			delay: 300,
			fill: "forwards",
	});
}