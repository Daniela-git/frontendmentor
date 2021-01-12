//variables
const share = document.querySelector(".user__share");
const socialDesk = document.querySelector(".social-desktop");
const user_img = document.querySelector(".user__img");
const user_info = document.querySelector(".user__info");
const socialMobil = document.querySelector(".social__mobil");
const user = document.querySelector(".user");

//listeners
share.addEventListener("click", showSocial);

//functions
function showSocial(e) {
	if (window.innerWidth > 576) {
		socialDesk.classList.toggle("show");
		share.classList.toggle("clic");
	} else {
		console.log("mostrar social mobil");
		user_img.classList.toggle("none");
		user_info.classList.toggle("none");
		socialMobil.classList.toggle("none");
		user.classList.toggle("social-mobile");
		share.classList.toggle("clic");
	}
}
