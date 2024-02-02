const currentDate = document.querySelector("#date");
const weekday = ["일", "월", "화", "수", "목", "금", "토"];

function getDate() {
	const today = new Date();
	const year = String(today.getFullYear());
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const date = String(today.getDate()).padStart(2, "0");
	const day = today.getDay();

	currentDate.innerText = `${year}/${month}/${date} ${weekday[day]}요일`;
}

getDate();
