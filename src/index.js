document.addEventListener("DOMContentLoaded", () => {
  // your code here
  debugger;
  const subForm = document.querySelector('#create-task-form');
  const ul = document.querySelector('#tasks');
  tasklist = {}
  function submitThis(e){
    function sortList() {
      var list, i, switching, b, shouldSwitch;
      list = document.getElementById("tasks");
      switching = true;
      /* Make a loop that will continue until
      no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("li");
        // Loop through all list items:
        for (i = 0; i < (b.length - 1); i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Check if the next item should
          switch place with the current item: */
          if (b[i].value > b[i + 1].value) {
            /* If next item is alphabetically lower than current item,
            mark as a switch and break the loop: */
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark the switch as done: */
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }
      }
    }
    


    function delTask(e){
      // alert(`You clicked ${button.id}`)
      let lix = button.parentNode;
      let ulx = lix.parentNode;
      ulx.removeChild(lix);
    }

    function selectPri(e){
      let lix = priority.parentNode;
      if (priority.selectedIndex === 0) {
        lix.style.color = "green";
        lix.value = 0;
      } else if (priority.selectedIndex === 1) {
        lix.style.color = "blue";
        lix.value = 1;
      } else {
        lix.style.color = "red";
        lix.value = 2;
      }
      sortList();
    }
    e.preventDefault();

    let li = document.createElement('li');
    li.innerHTML = e.target.newtaskdescription.value;
    li.style.color = "green";
    li.value = 0;
    var button = document.createElement("button");
    var priority = document.createElement("select");
    var op = new Option();
    op.value = 1;
    op.text = "Low";
    priority.options.add(op);
    var op = new Option();
    op.value = 2;
    op.text = "Medium";
    priority.options.add(op);
    var op = new Option();
    op.value = 3;
    op.text = "High";
    priority.options.add(op);
    priority.setAttribute("id",`priority${document.getElementsByTagName("li").length}`);
    priority.addEventListener("change", selectPri);

    button.innerHTML = " X ";
    button.setAttribute("id",`button${document.getElementsByTagName("li").length}`);

    li.appendChild(button);
    button.addEventListener("click", delTask);

    li.appendChild(priority);

    li.setAttribute("id",`task${document.getElementsByTagName("li").length}`);
    ul.appendChild(li);
    sortList();
  }

  subForm.addEventListener("submit", submitThis);

});
