const logout = document.querySelector("#logout");

function handleLogout() {
	localStorage.removeItem(USERNAME_KEY);
	window.location.reload();
}

logout.addEventListener("click", handleLogout);
