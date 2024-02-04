const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// array to save to do
let toDos = [];

// saving todo to local storage
function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// deleting the todo
// event tells user which button was clicked
function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove();
	// function to keep the to do that wasn't clicked
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
}

// painting todo from handleToDoSubmit
function paintToDo(newToDo) {
	// creating li and span to add to do
	const li = document.createElement("li");
	li.id = newToDo.id;
	const span = document.createElement("span");
	// change text of the span to the to do
	span.innerText = `🫧 ${newToDo.text}`;
	// adding delete button
	const button = document.createElement("button");
	button.innerText = "✓";
	button.addEventListener("click", deleteToDo);
	// adding the span inside the li
	li.appendChild(span);
	// adding the button next to the li
	li.appendChild(button);
	// adding the new li to the todo list
	toDoList.appendChild(li);
}

// submitting a todo
function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	const newToDoObj = {
		text: newToDo,
		id: Date.now(),
	};
	// adding the new to do into the array
	toDos.push(newToDoObj);
	// painting to do onto the screen
	paintToDo(newToDoObj);
	// save the to do
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// turn string into an alive array
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
	// takes the string from the local storage and turns it into a live object
	const parsedToDos = JSON.parse(savedToDos);
	// restore previous to dos
	toDos = parsedToDos;
	// allows to execute function for each item in an array
	parsedToDos.forEach(paintToDo);
}
