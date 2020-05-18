document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.querySelector('#create-task-form')

  input.addEventListener('submit', event => {
    event.preventDefault();

    const tasksList = document.querySelector('#tasks');
    const liTag = document.createElement('li');
    const taskDescription = event.target[0].value;
    const taskPriority = event.target[1].value;
    console.log(taskPriority)
    taskDescription.style.color = changeTaskColor(taskPriority)
    liTag.innerHTML = `${taskDescription}
    <button data-description="${taskDescription}" data-priority=${taskPriority}>X</button>`
    // liTag.innerHTML.style.color = `${changeTaskColor(taskPriority)}`

    liTag.addEventListener('click', event => {
      event.target.parentNode.remove()
    })
    tasksList.appendChild(liTag);
    input.reset();

  })
});

    // const taskInput = {
    //   task: event.target[0].value
    // };

    // const reqObject = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(taskInput)
    // }

    // fetch()

    // console.log(event.target[0].value)

    // const buttons = document.querySelectorAll('button')
    // buttons.forEach(button => {
    //   button.addEventListener('click', event => {
    //     tasksList.forEach(task => {
    //       if task.innerHTML === button.dataset.description {
    //         task.remove()
    //       }
    //     }) 
    //   })
    // })
 

  function changeTaskColor(taskPriority) {
    if (taskPriority === 'low') {
      return 'green'
    } else if (taskPriority === 'medium') {
      return 'yellow'
    } else if (taskPriority === 'high') {
      return 'red'
    }
  }
