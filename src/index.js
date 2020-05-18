document.addEventListener("DOMContentLoaded", () => {

  const taskContainer = document.getElementById('tasks')
  const taskForm = document.getElementById('create-task-form');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputField = event.target.querySelector('#new-task-description')
    const inputString = inputField.value

    const taskListItem = document.createElement('li')
    taskListItem.textContent = inputString

    taskContainer.appendChild(taskListItem)

  })

});
