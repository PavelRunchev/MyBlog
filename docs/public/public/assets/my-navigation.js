let btnBars = document.querySelector('.c-navigation-btn-bars');
let list = document.querySelector('.c-navigation-list');
let underNav = document.querySelector('.c-nav-under');

//show / hide - bars btn!
window.matchMedia('(max-width: 992px)').addListener(showBars);
function showBars(e) {
	e.preventDefault();
	
	if(e.matches) {
		btnBars.style["display"] = "block";
		if(underNav.style.display === 'grid') underNav.style["top"] = "99px";
	} else { 
		btnBars.style["display"] = "none";
		if(underNav.style.display === 'grid') underNav.style["top"] = "73px";
	}
}

//show / hide - list(items)
window.matchMedia('(max-width: 992px').addListener(showList);
function showList(e) {
	e.preventDefault();

	if(e.matches) list.style["display"] = "none";
	else list.style["display"] = "flex";
}

btnBars.addEventListener('click', showNavigation, false);
function showNavigation(e) {
	e.preventDefault();

	if(list.style.display === "" || list.style.display === "none") {
		list.style.display = "flex";
		//after click burger btn show navigation
		if(underNav.style.display === 'grid') underNav.style["top"] = "339px";
	} else if(list.style.display === "flex") {
		list.style.display = "none";
		//after click burger btn hide navigation
		if(underNav.style.display === 'grid') underNav.style["top"] = "99px";
	}
}


//Under Navigation
document.querySelectorAll('.c-navigation-link')[3]
	.addEventListener('click', showNavigationUnder, false);

function showNavigationUnder(e) {
	e.preventDefault();
	
	if(underNav.style.display === "" || underNav.style.display === "none") {
		underNav.style["display"] = "grid";
		underNav.animate([
			{ opacity: '0' },
			{ opacity: '1' }
			], {
				duration: 500,
				easeing: "ease-out",
				delay: 100,
				fill: "forwards",
		});
	}
}

document.querySelector('.c-nav-under').addEventListener("mouseleave", hideNavigationUnder, false);

function hideNavigationUnder(e) {
	e.preventDefault();

	underNav.animate([
		{ opacity: '1' },
		{ opacity: '0' }
		], {
			duration: 300,
			easeing: "ease-out",
			delay: 100,
			fill: "forwards",
	});

	setTimeout(function() {
		underNav.style["display"] ="none";
	}, 500);
}

//only mobile and tablet screen, hide under navigation!
document.querySelector('.c-nav-under').addEventListener('touchmove', function(e) {
	if(underNav.style.display === 'grid') {
		underNav.animate([
			{ opacity: '1' },
			{ opacity: '0' }
			], {
				duration: 300,
				easeing: "ease-out",
				delay: 100,
				fill: "forwards",
		});
	
		setTimeout(function() {
			underNav.style["display"] ="none";
		}, 500);
	}
}, { passive: true });


