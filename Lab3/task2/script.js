const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function addTask() {
  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    todoText.classList.toggle("done", checkbox.checked);
  });

  const todoText = document.createElement("div");
  todoText.className = "todo-text";
  todoText.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.type = "button";
  deleteBtn.setAttribute("aria-label", "Delete");

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "bin-icon.png";
  deleteIcon.alt = "";
  deleteIcon.className = "delete-icon";
  deleteBtn.appendChild(deleteIcon);

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(todoText);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  todoInput.value = "";
  todoInput.focus();
}

addBtn.addEventListener("click", addTask);
todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});
