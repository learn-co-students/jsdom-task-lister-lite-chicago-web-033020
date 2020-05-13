document.querySelector("#create-task-form").addEventListener("submit", function(event) {
  // does not submit form 
  event.preventDefault();

  // --- inside of form, target #new-task-description and get the value
  const getTask = event.target.querySelector("#new-task-description").value;
  // console.log(getTask);

  // --- assign content to be added
  const taskContent = document.createTextNode(getTask);
  // console.log(taskContent);

  // --- get list
  const getList = document.querySelector("#list");

  // --- create li node
  const createListItem = document.createElement("li");

  // -- create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";

  // --- add event listener on button to delete li  
  deleteButton.addEventListener("click",function(event){
    event.target.parentNode.remove()
  })
  
  // --- add delete button to li's
  createListItem.append(deleteButton);
  
  // --- add li to list, add content to li
  getList.appendChild(createListItem).append(taskContent);

  // --- reset text field
  document.getElementById("create-task-form").reset();
});