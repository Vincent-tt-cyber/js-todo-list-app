let input = document.querySelector(".header__input");
let addBtn = document.querySelector(".header__add-btn");

function createRandomTodoID(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

// Создание задачи
function createNewTodo(title) {
  return {
    id: createRandomTodoID(1, 100),
    title,
  };
}

addBtn.addEventListener("click", function () {
  // Создание задачи
  let newTask = createNewTodo(input.value);
});

let todoItems = document.querySelectorAll(".todo-item");

for (let todoItem of todoItems) {
  todoItem.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
