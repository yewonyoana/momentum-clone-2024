const loginPage = document.querySelector("#login-page");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const mainPage = document.querySelector("#main-page");
const splashScreen = document.querySelector("#splash-screen");

// 1. uppercase is convention 2. uppercase variables only contain strings 3. used to save not-so-important string
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	// prevents default action
	event.preventDefault();
	loginPage.classList.add(HIDDEN_CLASSNAME);
	// saves username
	const usernameThatTheUserWrote = loginInput.value;
	// saving username to local storage (API that allows to save, get, and delete data from a small browser data base)
	// 1. "username" = name of key in local storage 2. username = value (username variable)
	localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
	showSplashScreen();
	// username coming from loginInput.value
	paintGreetings(usernameThatTheUserWrote);
	mainPage.classList.remove(HIDDEN_CLASSNAME);
}

function showSplashScreen() {
	splashScreen.style.backgroundColor = "white";
	splashScreen.classList.remove(HIDDEN_CLASSNAME);
	splashScreen.style.animation = "fadeIn 1s";
	setTimeout(hideSplashScreen);
}

function hideSplashScreen() {
	splashScreen.style.backgroundColor = "white";
	splashScreen.style.animation = "fadeOut 2s";
	setTimeout(() => {
		splashScreen.classList.add(HIDDEN_CLASSNAME);
	}, 1000);
}

// for showing greeting
function paintGreetings(username) {
	greeting.innerText = `${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// no username in local storage
if (savedUsername === null) {
	// show the form, hide the greeting
	loginPage.classList.remove(HIDDEN_CLASSNAME);
	loginPage.addEventListener("submit", onLoginSubmit);
} else {
	// hide the form, show the greeting
	// username coming from local storage
	paintGreetings(savedUsername);
	mainPage.classList.remove(HIDDEN_CLASSNAME);
}
