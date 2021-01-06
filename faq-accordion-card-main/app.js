//values
let questions = document.querySelectorAll(".question");

//event listeners
questions.forEach(function (question){
	const title = question.querySelector("h2")
	title.addEventListener('click',showAns)
});

//function
function showAns(e) {
	removeActives(e.target)
	let title = e.target.parentNode;
	title.children[1].classList.toggle("active");
	title.children[0].classList.toggle("active");
  let question = title.parentNode;
  question.children[1].classList.toggle("active")
}

function removeActives(active){
	questions.forEach((question)=>{
		const title = question.querySelector("h2")
		if (active.innerText !== title.innerText) {
			const img = question.querySelector("svg")
			const text = question.querySelector("p")
			title.classList.remove("active")
			img.classList.remove("active")
			text.classList.remove("active")
		}
	})
}