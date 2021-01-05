//values
let questions = document.querySelectorAll(".question");

//event listeners
questions.forEach(function (question){
	const title = question.querySelector("h2")
	title.addEventListener('click',showAns)
});

//function
function showAns(e) {
	let title = e.target.parentNode;
	title.children[1].classList.toggle("active");
	title.children[0].classList.toggle("active");
  let question = title.parentNode;
  question.children[1].classList.toggle("active")
}
