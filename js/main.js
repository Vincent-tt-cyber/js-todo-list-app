let input = document.querySelector(".header__input");
let addBtn = document.querySelector(".header__add-btn");

let todoItems = document.querySelectorAll(".todo-item");

for (let todoItem of todoItems) {
  todoItem.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
