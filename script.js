var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function addEventListenersToListElements()
{
	var liArray = document.querySelectorAll("li");
	liArray.forEach(element => {
		element.addEventListener("click",()=>element.classList.toggle("done"));
	});
	
	var buttonsForDeletingItems = ul.querySelectorAll("button");
	buttonsForDeletingItems.forEach(element => {
		element.addEventListener("click",()=>element.parentElement.remove());
	});
}

function createListElement() {
	// Create new li
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	// Create button & append to li
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteButton);
	// Append li to list
	ul.appendChild(li);
	input.value = "";
	// Add event listeners
	addEventListenersToListElements();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

addEventListenersToListElements();