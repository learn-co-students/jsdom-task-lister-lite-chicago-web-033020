document.getElementById("create-task-form").addEventListener("submit", function(event){
  event.preventDefault();
  let task = event.target.description.value
  console.log(task)
  const newTask = document.createElement("li")
  const taskContent = document.createTextNode(task)
  const uLists = document.getElementById("tasks")
  const button = document.createElement("button")
  button.textContent = "X"
  button.id = task
  button.addEventListener("click",function(event){
    event.target.parentNode.remove()
  })
  uLists.appendChild(newTask)
  newTask.append(taskContent, button)
  document.getElementById("create-task-form").reset()
})



