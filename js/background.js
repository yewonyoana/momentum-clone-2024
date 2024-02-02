const mainBox = document.querySelector("#main-box");

const images = [
	"02.jpeg",
	"03.jpeg",
	"04.jpeg",
	"05.jpeg",
	"06.jpeg",
	"07.jpeg",
	"08.jpeg",
	"09.jpeg",
];

const todaysImage = images[Math.floor(Math.random() * images.length)];

// 1. changing background of the whole document
// // create element in html using javascript
// const backgroundImage = document.createElement("img");

// backgroundImage.src = `/images/${todaysImage}`;

// //appendChild = add an html to the body
// document.body.appendChild(backgroundImage);

// 2. changing background of an element inside the body
function changeMainBackgroundImg() {
	mainBox.style.background = `url(/images/${todaysImage}) center/cover no-repeat`;
}

changeMainBackgroundImg();
