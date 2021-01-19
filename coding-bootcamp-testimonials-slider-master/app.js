//values
const info = [
	{
		text:
			"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
		name: "Tanya Sinclair",
		charge: "UX Engineer",
		img: "./images/image-tanya.jpg",
	},
	{
		text:
			"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
		name: "John Tarkpor",
		charge: "Junior Front-end Developer",
		img: "./images/image-john.jpg",
	},
];
const slider = document.querySelector(".slider");
const testimonial = document.querySelector(".testimonial");
const content = document.querySelector(".content");
const testimonial__text = document.querySelector(".testimonial__text");
const testimonial__foot = document.querySelector(".testimonial__foot");
const image = document.querySelector(".img");
//listeners
slider.addEventListener("click", getId);

//functions
function getId(e) {
	if (e.target.dataset.slide == "next") {
		let id = Number(testimonial.dataset.id) + 1;
		if (id >= info.length) {
			id = 0;
		}
		changeInfo(id);
	} else {
		let id = Number(testimonial.dataset.id) - 1;
		if (id < 0) {
			id = info.length - 1;
		}
		changeInfo(id);
	}
}

function changeInfo(id) {
	let { text, name, charge, img } = info[id];

	testimonial.dataset.id = id;
	testimonial__text.innerHTML = `<p class="testimonial__text">${text}</p>`;
	testimonial__foot.innerHTML = `<h6 class="testimonial__foot">
                                  ${name}<span>${charge}</span></h6>`;
	image.src = img;
}
