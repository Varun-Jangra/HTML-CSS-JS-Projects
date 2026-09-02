const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const delBtn = document.querySelectorAll(".delete");
const columns = [todo, progress, done];
let dragElemnet = null;
let taskData = {};

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    dragElemnet = task;
  });
});

function addDragEventsOnColumn(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });
  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    column.appendChild(dragElemnet);
    column.classList.remove("hover-over");
    columns.forEach((col) => {
      const tasks = col.querySelectorAll(".task");
      const count = col.querySelector(".right");

      count.innerText = tasks.length;
    });
  });
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

const toggleModalButton = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal .bg");
const addTaskButton = document.querySelector("#add-new-task");

toggleModalButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("active");
});

addTaskButton.addEventListener("click", () => {
  const titleInput = document.querySelector("#task-title-input");
  const descInput = document.querySelector("#task-desc-input");

  const taksTite = document.querySelector("#task-title-input").value;
  const taskDesc = document.querySelector("#task-desc-input").value;
  const div = document.createElement("div");

  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `
  <h2>${taksTite}</h2>
  <p>${taskDesc}</p>
  <button>Delete</button>`;

  todo.appendChild(div);

  columns.forEach((col) => {
    const tasks = col.querySelectorAll(".task");
    const count = col.querySelector(".right");

    
    count.innerText = tasks.length;
  });

  div.addEventListener("drag", (e) => {
    dragElemnet = div;
  });

  titleInput.value = "";
  descInput.value = "";

  modal.classList.remove("active");
});

delBtn.addEventListener("click", function () {});
