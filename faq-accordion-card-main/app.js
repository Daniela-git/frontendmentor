//values
let questions = document.querySelectorAll(".question");

//event listeners
questions.forEach((question) => question.addEventListener("click", showAns));

//function
function showAns(e) {
	let question_title = e.target.parentNode;
	question_title.children[0].classList.toggle("active");
	question_title.children[1].classList.toggle("unactive");
	question_title.children[2].classList.toggle("unactive");
  let question = question_title.parentNode;
  question.children[1].classList.toggle("active")
}
