var ToDos = [];

document.getElementsByClassName('submitButton')[0].addEventListener("click", (event) => {
	event.preventDefault();
	let ToDo = document.getElementsByClassName('newTodo')[0].value;
	ToDos.push(ToDo);
	document.getElementsByClassName('newTodo')[0].value = "";
	document.getElementsByClassName('listOfTodos')[0].innerHTML += `<label class="list-group-item checkbox todoListItem">
	<li class="">
		<input name="todo" type="checkbox" value="todo${ToDos.length}">${ToDo}
	</li>
</label>`;
});

function markCheckboxes(checkbox, index) {
	checkbox.checked = true;
}

function unmarkCheckboxes(checkbox, index) {
	checkbox.checked = false;
}

document.getElementsByClassName('clearButton')[0].addEventListener("click", (event) => {
	event.preventDefault();
	document.getElementsByName('todo').forEach(unmarkCheckboxes);
});

document.getElementsByClassName('markAllButton')[0].addEventListener("click", (event) => {
	event.preventDefault();
	document.getElementsByName('todo').forEach(markCheckboxes);
});

document.getElementsByClassName('deleteButton')[0].addEventListener("click", (event) => {
	event.preventDefault();
	let ToDo = document.getElementsByClassName('newTodo')[0].value;
	ToDos.length = 0;
	document.getElementsByClassName('newTodo')[0].value = "";
	document.getElementsByClassName('listOfTodos')[0].innerHTML = "";
});

