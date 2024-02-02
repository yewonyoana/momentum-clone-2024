const saveBtn = document.querySelector("#meme-save");
const textInput = document.querySelector("#meme-text");
const fileInput = document.querySelector("#meme-file");
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraseBtn = document.querySelector("#eraser-btn");
// make collection into an array
const colorOptions = Array.from(
	document.getElementsByClassName("color-option")
);
const color = document.querySelector("#color");
const lineWidth = document.querySelector("#line-width");
const canvas = document.querySelector("canvas");
// brush of the canvas
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 450;
const CANVAS_HEIGHT = 450;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

function onMove(event) {
	if (isPainting) {
		ctx.lineTo(event.offsetX, event.offsetY);
		ctx.stroke();
		return;
	}
	ctx.beginPath();
	ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
	isPainting = true;
}
function cancelPainting() {
	isPainting = false;
}

function onLineWidthChange(event) {
	ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
	ctx.strokeStyle = event.target.value;
	ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
	const colorValue = event.target.dataset.color;
	ctx.strokeStyle = colorValue;
	ctx.fillStyle = colorValue;
	color.value = colorValue;
}

function onModeClick() {
	if (isFilling) {
		isFilling = false;
		modeBtn.innerHTML = '<i class="fa-solid fa-fill"></i>';
	} else {
		isFilling = true;
		modeBtn.innerHTML = '<i class="fa-solid fa-paintbrush"></i>';
	}
}

function onCanvasClick() {
	if (isFilling) {
		ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
}

function onDestroyClick() {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
	ctx.strokeStyle = "white";
	isFilling = false;
	modeBtn.innerHTML = '<i class="fa-solid fa-fill"></i>';
}

function onFileChange(event) {
	const file = event.target.files[0];
	const url = URL.createObjectURL(file);
	const image = new Image();
	image.src = url;
	image.onload = function () {
		ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		fileInput.value = null;
	};
}

function onDoubleClick(event) {
	const text = textInput.value;
	if (text !== "") {
		ctx.save();
		ctx.lineWidth = 1;
		ctx.font = "50px";
		ctx.fillText(text, event.offsetX, event.offsetY);
		ctx.restore();
	}
}

function onSaveClick() {
	const url = canvas.toDataURL();
	const a = document.createElement("a");
	a.href = url;
	a.download = "내그림.png";
	a.click();
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraseBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
