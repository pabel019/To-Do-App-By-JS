/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let inCompleteTasks = document.querySelector("#items");
let completeTask = document.querySelector(".complete-list ul");

// create task
let createTask = function (task) {
	let listItem = document.createElement("li");
	let checkBox = document.createElement("input");
	let label = document.createElement("label");

	checkBox.type = "checkbox";
	label.innerText = task;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);

	return listItem;
};

// add Task

let addTask = function (event) {
	event.preventDefault();
	let listItem = createTask(newTask.value);
	inCompleteTasks.appendChild(listItem);

	newTask.value = "";

	// bind function with incompleteTask
	bindInCompleteTask(listItem, completeTasks);
};

let completeTasks = function () {
	let listItem = this.parentNode;
	let deleteBtn = document.createElement("delete");
	deleteBtn.innerText = "delete";
	deleteBtn.className = "delete";
	deleteBtn.style.cursor = "pointer";
	listItem.appendChild(deleteBtn);

	let checkbox = listItem.querySelector("input[type ='checkbox']");
	checkbox.remove();
	completeTask.appendChild(listItem);

	bindCompleteTask(listItem, deleteTask);
};

let bindCompleteTask = function (taskItem, deleteButtonClicked) {
	let deleteButton = taskItem.querySelector(".delete");
	deleteButton.onclick = deleteButtonClicked;
};

let deleteTask = function () {
	let listItem = this.parentNode;
	let ul = listItem.parentNode;
	ul.removeChild(listItem);
};
// bind function with incomplete task

let bindInCompleteTask = function (taskItem, checkButtonClicked) {
	let checkBox = taskItem.querySelector("input[type = 'checkbox']");
	checkBox.onchange = checkButtonClicked;
};

for (let i = 0; i < inCompleteTasks.children.length; i++) {
	bindInCompleteTask(inCompleteTasks.children[i], completeTasks);
}
for (let i = 0; i < completeTask.children.length; i++) {
	bindCompleteTask(completeTask.children[i], deleteTask);
}
form.addEventListener("submit", addTask);
