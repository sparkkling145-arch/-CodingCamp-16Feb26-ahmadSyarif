// Array untuk menyimpan todos
let todos = [];

function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoDate = document.getElementById('todo-date');
  const todoList = document.getElementById('todo-list');

 
  if (todoInput.value.trim() === '' || todoDate.value === '') {
    alert('Please enter a todo item and select a due date.');
    return;
  }

 
  const newTodo = {
    text: todoInput.value,
    date: todoDate.value
  };

 
  todos.push(newTodo);

  
  todoList.innerHTML = ''; 
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = `${todo.text} (due: ${todo.date})`;
    todoList.appendChild(li);
  });

 
  todoInput.value = '';
  todoDate.value = '';
}

function clearTodos() {
  const todoList = document.getElementById('todo-list');
  todos = [];
  todoList.innerHTML = '<li>No todos available</li>';
}

function filterTodos() {
  const todoDate = document.getElementById('todo-date').value;
  const todoList = document.getElementById('todo-list');

  if (todoDate === '') {
    alert('Please select a date to filter.');
    return;
  }

  const filtered = todos.filter(todo => todo.date === todoDate);

  if (filtered.length === 0) {
    todoList.innerHTML = `<li>No todos found for ${todoDate}</li>`;
  } else {
    renderTodos(todoList, filtered);
  }

}

function renderTodos(todoList, list) {
  todoList.innerHTML = '';
  list.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = `${todo.text} (due: ${todo.date})`;
    todoList.appendChild(li);
  });
}

