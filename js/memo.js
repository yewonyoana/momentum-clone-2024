const memoForm = document.getElementById("memo-form");
const memoInput = memoForm.querySelector("input");
const memoList = document.getElementById("memo-list");

const memos = [];

function saveMemos() {
	localStorage.setItem("memos", JSON.stringify(memos));
}

function deleteMemo(event) {
	const li = event.target.parentElement;
	li.remove();
}

function paintMemo(newMemo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	button.innerText = "𝗑";
	button.addEventListener("click", deleteMemo);
	li.appendChild(span);
	li.appendChild(button);
	span.innerText = newMemo;
	memoList.appendChild(li);
}

function handleMemoSubmit(event) {
	event.preventDefault();
	const newMemo = memoInput.value;
	memoInput.value = "";
	memos.push(newMemo);
	paintMemo(newMemo);
	saveMemos();
}

memoForm.addEventListener("submit", handleMemoSubmit);
