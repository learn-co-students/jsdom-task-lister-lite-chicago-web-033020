const [tasks, description, importance, submit, sort] = ['tasks', 'new-task-description', 'importance', 'submit', 'sort'].map(
  (elm) => {return document.getElementById(elm)}
)
const impMap = {
  "Urgent": "red",
  "High": "orange",
  "Medium": "green",
  "Low": "blue",
  "Trivial": "purple"
}

const toDos = []

function makeLi(color, text = "") {
  const elm = document.createElement('li')
  elm.appendChild(document.createTextNode(text))
  elm.style.color = color
  elm.appendChild(makeButton())
  return elm
}

function makeButton(text='Delete') {
  const butt = document.createElement('input')
  butt.type = 'button'
  butt.value = text
  return butt
}

function timeToInt(kid) {
  return parseInt(parseInt(kid.time.hour) * 60 + parseInt(kid.time.minute))
}

document.addEventListener("DOMContentLoaded",
  () => {

    submit.addEventListener("click",
      (e) => {
        e.preventDefault()
        const comment = makeLi(impMap[importance.value], description.value)
        tasks.appendChild(comment)
        console.log(`Appended task "${comment.innerHTML}" to list`)
        const hour = parseInt(document.getElementById('hour').value)
        const minute = parseInt(document.getElementById('minute').value)
        const toDo =
          {"time":
            {"hour": hour,
              "minute": minute},
            "description": description.value,
            "importance": importance.value
          }
        toDos.push(toDo)
        description.value = ""
        importance.value = ""
      }
    )

    sort.addEventListener("click",
      function() {
        while (tasks.firstChild) {
          tasks.removeChild(tasks.firstChild)
        }
        for (const toDo of toDos.sort(
          function(a, b) {
            const x = timeToInt(a)
            const y = timeToInt(b)
            return (x > y ? 1 : (x < y ? -1 : 0))
          }
        )) {
          tasks.appendChild(makeLi(impMap[toDo.importance], toDo.description))
        }
      }
    )

  }
)