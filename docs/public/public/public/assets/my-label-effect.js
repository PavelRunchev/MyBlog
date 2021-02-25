
document.querySelectorAll('.c-sign-in-input').
	forEach(l => l.addEventListener('focus', focusLabel, false));

document.querySelectorAll('.c-sign-in-input').
	forEach(l => l.addEventListener('focusout', focusLabelOut, false));

function focusLabel(e) {
	e.preventDefault();
	let label = this.parentNode.querySelector('.c-sign-in-label');
	label.style["color"] = "#EE7A07";
	label.style["transform"] = "scale(0.9) translate(-20px, -30px)";
}

function focusLabelOut(e) {
	e.preventDefault();
	let label = this.parentNode.querySelector('.c-sign-in-label');
	let input = this.value;

	if(input !== '') {
		console.log('focus with content')
		label.style["color"] = "#EE7A07";
		label.style["transform"] = "scale(0.9) translate(-20px, -30px)";
	} else {
		console.log('focus without content')
		label.style["color"] = "#6B6B6B";
		label.style["transform"] = "scale(1) translate(0px, 0px)";
	}
}