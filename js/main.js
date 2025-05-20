let input = document.querySelector(".header__input");
let addBtn = document.querySelector(".header__add-btn");
let sectionTodos = document.querySelector(".section-todos-row");

function createRandomTodoID(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

// Стандратное отображение даты
function addZero(num) {
  if (num > 0 && num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

// Функция создание задачи
function createNewTodo(title) {
  // Дата и время создания
  let date = new Date();
  let fullDate = `${addZero(date.getDate())}.${addZero(
    date.getMonth() + 1
  )}.${date.getFullYear()}`;
  let fullTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;

  return {
    id: createRandomTodoID(1, 100),
    title,
    isChecked: false,
    created_at_date: fullDate,
    created_at_time: fullTime,
  };
}

// Добавление новой задачи
addBtn.addEventListener("click", function () {
  // Создание задачи
  if (input.value.length > 0) {
    let newTask = createNewTodo(input.value);

    let newTodoItem = document.createElement("div");
    newTodoItem.classList.add("todo-item");

    let todoItemInfo = document.createElement("div");
    todoItemInfo.classList.add("todo-item__info");

    let p = document.createElement("p");
    p.innerHTML = newTask.title;

    let customCheckbox = document.createElement("span");
    customCheckbox.classList.add("custom-checkbox");

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Удалить";
    deleteButton.classList.add("todo-item__btn-del");

    todoItemInfo.appendChild(customCheckbox);

    todoItemInfo.appendChild(p);

    newTodoItem.appendChild(todoItemInfo);
    newTodoItem.appendChild(deleteButton);

    //   console.log(newTodoItem);

    // Обработчик клика по задаче
    newTodoItem.addEventListener("click", function () {
      this.classList.toggle("active");
    });

    deleteButton.addEventListener("click", function (event) {
      event.stopPropagation();
      this.parentElement.remove();
    });

    sectionTodos.append(newTodoItem);

    input.value = "";
  } else {
    return alert("Введие что-нибудть в поле ввода.");
  }
});

let todoItems = document.querySelectorAll(".todo-item");
