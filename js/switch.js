const workBtn = document.querySelector("#work-btn");
const playBtn = document.querySelector("#play-btn");
const nameBtn = document.querySelector("#greeting");
const memoBox = document.querySelector("#memo-box");
const memeBox = document.querySelector("#meme-box");

const SWITCH_CLASSNAME = "switch";

function onWorkBtnClick() {
	memeBox.classList.add(SWITCH_CLASSNAME);
	memoBox.classList.remove(SWITCH_CLASSNAME);
	workBtn.style.opacity = 0.1;
	playBtn.style.opacity = 1;
}

function onPlayBtnClick() {
	memoBox.classList.add(SWITCH_CLASSNAME);
	memeBox.classList.remove(SWITCH_CLASSNAME);
	playBtn.style.opacity = 0.1;
	workBtn.style.opacity = 1;
}

function onNameBtnClick() {
	memoBox.classList.add(SWITCH_CLASSNAME);
	memeBox.classList.add(SWITCH_CLASSNAME);
	workBtn.style.opacity = 1;
	playBtn.style.opacity = 1;
}

workBtn.addEventListener("click", onWorkBtnClick);
playBtn.addEventListener("click", onPlayBtnClick);
nameBtn.addEventListener("click", onNameBtnClick);

// if (onWorkBtn === null) {
// 	memoBox.classList.add(SWITCH_CLASSNAME);
// 	memeBox.classList.remove(SWITCH_CLASSNAME);
// } else {
// 	memoBox.classList.add(SWITCH_CLASSNAME);
// 	memoBox.classList.remove(SWITCH_CLASSNAME);
// }
