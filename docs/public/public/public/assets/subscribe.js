

document.querySelector('.c-footer-subscribe-btn').addEventListener('click', function(e) {
	e.preventDefault();
	let inp = document.querySelector('.c-footer-subscribe-input');
	let toastr = document.querySelector('.c-toastr-container');
	let toastrTitle = document.querySelector('.c-toastr-title');
	let toastrContent = document.querySelectorAll('.c-toastr-content')[0];
	let toastrContent2 = document.querySelectorAll('.c-toastr-content')[1];
	let toastrIcon = document.querySelector('.c-toastr-icons');
	toastrIcon.innerHTML = "";

	if(inp.value === undefined || inp.value === '') {
		toastr.style["background"] = "linear-gradient(rgba(217,75,107, 0.35), rgba(217,75,107, 0.15), rgba(217,75,107, 0.05))";
		//error title
		toastrTitle.textContent = "Failed!";
		toastrTitle.style["color"] = "#D94B6B"
		//error content (email)
		toastrContent.textContent = "input is empty!";
		toastrContent2.textContent = "";
		//error icon 
		toastrIcon.appendChild(createIcon('far fa-times-circle', '#D94B6B'));
		// toastr animation function
		toastrAnimation();
		setToastrDisplayNone();
		return;
	} 
	
	if(!inp.value.match('^[A-Za-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$')) {
		toastr.style["background"] = "linear-gradient(rgba(217,75,107, 0.35), rgba(217,75,107, 0.15), rgba(217,75,107, 0.05))";
		//error title
		toastrTitle.textContent = "Failed!";
		toastrTitle.style["color"] = "#D94B6B"
		//error content (email)
		toastrContent.textContent = "email is invalid!";
		toastrContent2.textContent = "";
		//error icon 
		toastrIcon.appendChild(createIcon('far fa-times-circle', '#D94B6B'));
		// toastr animation function
		toastrAnimation();
		setToastrDisplayNone();
		//clear input success
		return;
	}
	
	//success background
	toastr.style["background"] = "linear-gradient(rgba(0,183,74, 0.25), rgba(0,183,74, 0.15), rgba(0,183,74, 0.05))";
	//success title
	toastrTitle.textContent = "Successfully!";
	toastrTitle.style["color"] = "#01D38D";
	//success content (email)
	toastrContent.textContent = inp.value;
	toastrContent2.textContent = "was subscribed!";
	//success icon 
	toastrIcon.appendChild(createIcon('far fa-check-circle', '#01D38D'));
	// toastr animation function
	toastrAnimation();
	setToastrDisplayNone();
	//clear input success
	inp.value = "";
});

function createIcon(name, color) {
	let i = document.createElement('i');
	i.className = name;
	i.style["color"] = color;
	return i;
}

function setToastrDisplayNone() {
	setTimeout(function() {
		document.querySelector('.c-toastr').style["display"] = "none";
	}, 5500);
}