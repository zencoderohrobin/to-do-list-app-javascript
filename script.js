function updateCounters() {
  var totalCount = document.getElementById('total-count');
  var totalTodos = document.getElementsByClassName('todo').length;
  totalCount.innerHTML = totalTodos;

  var completedCount = document.getElementById('completed-count');
  var completedTodos = document.getElementsByClassName('completed').length;
  completedCount.innerHTML = completedTodos;

  var todoCount = document.getElementById('todo-count');
  var uncompletedTodos = totalTodos - completedTodos;
  todoCount.innerHTML = uncompletedTodos;

  console.log('Counters updated!');
}

updateCounters();

function toggleDone() {
  var checkbox = this;

  if (checkbox.checked) {
    checkbox.parentElement.className = 'todo completed';
  } else {
    checkbox.parentElement.className = 'todo';
  }

  console.log('Toggle done state!');
  updateCounters();
}

function submitTodo() {
  var inputField = document.getElementById('new-todo');
  var newTodoTitle = inputField.value;
  createTodo(newTodoTitle);

  inputField.value = null;

  console.log('New todo item submited!');
  updateCounters();

  function createTodo(title) {
    // create a list item
    var listItem = document.createElement('li');
    listItem.className = 'todo';

    // create a checkbox and add it to the list item
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'todo-' + nextTodoId();
    checkbox.checked = false;

    // assign the toggleDone function on the checkbox's onchange event
    checkbox.onchange = toggleDone.bind(checkbox);
    listItem.appendChild(checkbox);

    //create some whitespace to put between the checkbox and the label
    var space = document.createTextNode(' ');
    listItem.appendChild(space);

    // create a label that holds the title and add it to the list item
    var label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.innerHTML = title;
    listItem.appendChild(label);

    // add the list item with the checkbox, the whitespace and the label to
    //  the list
    var list = document.getElementById('todolist');
    list.appendChild(listItem);
  }

  // every todo has it's own id so we can add that to the corresponding label's
  // 'for' attribute to make sure that when we click the label, the checkbox
  // toggles
  function nextTodoId() {
    return document.getElementsByClassName('todo').length + 1;
  }
}
