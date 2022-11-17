// selector
const todoBtn = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

//event listners
todoBtn.addEventListener("click", addTask);
todoList.addEventListener("click", checkOrDelete);
//function
function addTask(e) {
  e.preventDefault(); // to prevent form from submiting
  console.log(todoInput.value);

  // create li
  const todoli = document.createElement("li");
  todoli.classList.add("todo");

  // create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");

  //add input value to div
  todoDiv.innerHTML = todoInput.value;

  //create button complete
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = ' <i class="fa-solid fa-check"></i>';

  // create trash button
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  //add div + button 1 + button 2 in li
  todoli.appendChild(todoDiv);
  todoli.appendChild(completeBtn);
  todoli.appendChild(trashBtn);

  // todo li in ul
  todoList.appendChild(todoli);

  // remove input value
  todoInput.value = "";
}
function checkOrDelete(e) {
  const item = e.target;
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
}
