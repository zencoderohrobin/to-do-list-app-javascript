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

  updateCounters();
}
