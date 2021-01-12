const share = document.querySelector(".user__share");
const socialDesk = document.querySelector(".social-desktop");
share.addEventListener("click", showSocial);

function showSocial(e) {
	if (window.innerWidth > 576) {
		socialDesk.classList.toggle("show");
		share.classList.toggle("clic");
	} else {
		console.log("mostrar social mobil");
	}
}
