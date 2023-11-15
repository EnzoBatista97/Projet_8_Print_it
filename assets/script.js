const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des variables

const bulletPoint = document.getElementById("bullet_point");
let bannerImg = document.querySelector(".banner-img");
let bannerImgName = bannerImg.src.substring(bannerImg.src.lastIndexOf("/") + 1, bannerImg.src.length);

// Boucles

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div");
	dot.className = "dot";
	bulletPoint.appendChild(dot);

	if(bannerImgName === slides[i].image) {
		dot.className += " dot_selected";
	}
}


// Functions

//* Rend l'élément sélectionné avec les dots *//

function addDotToSelectedElement(element) {
	element.classList.add("dot_selected");
}

//* Retire le précédent élément sélectionné avec les dots *//

function removeDotFromUnselectedElement(element) {
	element.classList.remove("dot_selected");
}

//* On change l'image et le texte *//

function changeSlide(bannerP,nextSlide) {
	bannerImgName = nextSlide.image;
	bannerP.innerHTML = nextSlide.text;
}

function changeImgSrc(imgSrc) {
	bannerImg.src = "./assets/images/slideshow/" + imgSrc.image;
}

// Events

let arrowLeft = document.querySelector(".arrow_left");
		arrowLeft.addEventListener('click', function() {

		let index = 0;
		let bannerP = document.querySelector("#banner p");
		let dot = document.getElementsByClassName("dot");

		for (let i = 0; i < slides.length; i++) {

			if(bannerImgName === slides[0].image) {

			changeImgSrc(slides[slides.length - 1]);
			index = slides.length - 1;

			addDotToSelectedElement (dot[index]);
			removeDotFromUnselectedElement(dot[0]);

		}	else if(bannerImgName === slides[i].image) {

				changeImgSrc(slides[i - 1]);
				addDotToSelectedElement(dot[i - 1]);
				removeDotFromUnselectedElement(dot[i]);
				index = i - 1;
			}
	}
		changeSlide(bannerP, slides[index]);

});

let arrowRight = document.querySelector(".arrow_right");
		arrowRight.addEventListener('click', function() {

		let index = 0;
		let bannerP = document.querySelector("#banner p");
		let dot = document.getElementsByClassName("dot");
	
		for (let i = 0; i < slides.length; i++) {

			if(bannerImgName === slides[slides.length - 1].image) {

			changeImgSrc(slides[0]);
			addDotToSelectedElement(dot[0]);
			removeDotFromUnselectedElement(dot[slides.length - 1]);

		} 	else if(bannerImgName === slides[i].image) {

			changeImgSrc(slides[i + 1]);
			index = i + 1;

			addDotToSelectedElement(dot[index]);
			removeDotFromUnselectedElement(dot[i]);
		} 
	}
		changeSlide(bannerP, slides[index]);

});