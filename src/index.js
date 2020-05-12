document.addEventListener("DOMContentLoaded", () => {
  let todoForm = document.getElementById('create-task-form');
  let todoInput = document.getElementById('new-task-description');
  let todoList = document.getElementById('tasks');

  function addTodo(event) {
    event.preventDefault();
    let todoInputText = todoInput.value;
    let newTodoItem = document.createElement('li');
    let deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.innerText = 'X';

    deleteTodoBtn.addEventListener('click', function(e) {
      deleteTodoBtn.parentElement.remove();
    });

    newTodoItem.innerText = todoInputText;
    newTodoItem.appendChild(deleteTodoBtn);
    todoList.appendChild(newTodoItem);
  }

  todoForm.addEventListener('submit', addTodo);
});
