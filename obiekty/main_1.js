const todoTitleInp = document.querySelector("#todoTitleInp");
const todoDateInp = document.querySelector("#todoDateInp");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoListDisplay = document.querySelector("#.todoListDisplay");
const form = document.querySelector("form");

const todoArr = [];

addTodoBtn.addEventListener("click", function (evt) {
  evt.preventDefault;

  const todo = {
    todoName: todoTitleInp.value,
    todoDate: todoDateInp.value,
  };

  todoArr.push(todo);

  const element = document.createElement("li");
  element.innerHTML = todo.todoName;
  todoListDisplay.append(element);
  form.reset;
});
