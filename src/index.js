document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('form')
  
  taskForm.addEventListener('submit', function(event){
    event.preventDefault()

    const formInput = event.target[0].value
    const inputContainer = document.querySelector('#tasks')

    inputContainer.innerHTML += `<li>${formInput}</li>`

    event.target.reset()
  })




















});
