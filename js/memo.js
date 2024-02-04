const memoForm = document.getElementById("memo-form");
const memoInput = memoForm.querySelector("input");
const memoList = document.getElementById("memo-list");

const MEMOS_KEY = "memos";

let memos = [];

function saveMemos() {
	localStorage.setItem(MEMOS_KEY, JSON.stringify(memos));
}

function deleteMemo(event) {
	const li = event.target.parentElement;
	li.remove();
	memos = memos.filter((memo) => memo.id !== parseInt(li.id));
	saveMemos();
}

function paintMemo(newMemo) {
	const li = document.createElement("li");
	li.id = newMemo.id;
	const span = document.createElement("span");
	const button = document.createElement("button");
	button.innerText = "x";
	button.addEventListener("click", deleteMemo);
	li.appendChild(span);
	li.appendChild(button);
	span.innerText = newMemo.text;
	memoList.appendChild(li);
}

function handleMemoSubmit(event) {
	event.preventDefault();
	const newMemo = memoInput.value;
	memoInput.value = "";
	const newMemoObj = {
		text: newMemo,
		id: Date.now(),
	};
	memos.push(newMemoObj);
	paintMemo(newMemoObj);
	saveMemos();
}

memoForm.addEventListener("submit", handleMemoSubmit);

const savedMemos = localStorage.getItem(MEMOS_KEY);

if (savedMemos !== null) {
	const parsedMemos = JSON.parse(savedMemos);
	memos = parsedMemos;
	parsedMemos.forEach(paintMemo);
}
