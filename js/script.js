(() => {
	"use strict";
	const hamburger = document.querySelector("button.hamburger");
	const navList = document.querySelector("header nav ul");
	hamburger.addEventListener("click", function switchNavigation(e) {
		navList.classList.toggle("mobile-opened");
	});
})();
