const workBtn = document.querySelector("#work-btn");
const playBtn = document.querySelector("#play-btn");
const memoBox = document.querySelector("#memo-box");
const memeBox = document.querySelector("#meme-box");

const SWITCH_CLASSNAME = "switch";

function onWorkBtn() {
	memeBox.classList.add(SWITCH_CLASSNAME);
	memoBox.classList.remove(SWITCH_CLASSNAME);
}

function onPlayBtn() {
	memoBox.classList.add(SWITCH_CLASSNAME);
	memeBox.classList.remove(SWITCH_CLASSNAME);
}

workBtn.addEventListener("click", onWorkBtn);
playBtn.addEventListener("click", onPlayBtn);

if (onWorkBtn === null) {
	memoBox.classList.add(SWITCH_CLASSNAME);
	memeBox.classList.remove(SWITCH_CLASSNAME);
} else {
	memoBox.classList.add(SWITCH_CLASSNAME);
	memoBox.classList.remove(SWITCH_CLASSNAME);
}
