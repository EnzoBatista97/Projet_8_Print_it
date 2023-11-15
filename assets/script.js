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

// Events

let arrowLeft = document.querySelector(".arrow_left");
		arrowLeft.addEventListener('click', function() {
			console.log("Vous avez cliqué sur la fleche gauche");
});

let arrowRight = document.querySelector(".arrow_right");
		arrowRight.addEventListener('click', function() {
			console.log("Vous avez cliqué sur la fleche droite");
});