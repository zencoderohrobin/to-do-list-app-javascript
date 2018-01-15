function updateCounters() {
  var totalCount = document.getElementById('total-count');
  var totalTodos = document.getElementsByClassName('todo').length;
  totalCount.innerHTML = totalTodos;

  console.log('Counters updated!');
}

updateCounters();
