const tasks = defaultTasks();
const list = document.getElementById("task-list");
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");

function render() {
  list.innerHTML = "";
  tasks.forEach(function (task, index) {
    const item = document.createElement("li");
    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = task.done;
    box.addEventListener("change", function () {
      toggleTask(tasks, index);
      render();
    });
    const label = document.createElement("span");
    label.textContent = task.title;
    if (task.done) label.className = "done";
    
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Supprimer";
    remove.addEventListener("click", function () {
      removeTask(tasks, index);
      render();
    });
    
    item.appendChild(box);
    item.appendChild(label);
    item.appendChild(remove);
    list.appendChild(item);
  });
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask(tasks, input.value);
  input.value = "";
  render();
});
render();