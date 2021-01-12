const share = document.querySelector(".user__share");
const social = document.querySelector(".social");
share.addEventListener("click", showSocial);

function showSocial(e) {
	console.log("social");
	social.classList.toggle("none");
	share.classList.toggle("clic");
}
