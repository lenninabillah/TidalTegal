// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('active');
};

// Hilangkan menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
});

document.querySelector('.cta').addEventListener('click', function (event) {
	event.preventDefault();
	document.querySelector('#about-judul').scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});

function openPage(pageName, elmnt, color) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}
	document.getElementById(pageName).style.display = "block";
	elmnt.style.backgroundColor = color;
}

var elements = document.getElementsByClassName("column");
var i;

function gridView() {
	for (i = 0; i < elements.length; i++) {
		elements[i].style.width = "50%";
	}
}

var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}