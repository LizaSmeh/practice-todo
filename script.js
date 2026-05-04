function createForm() {
  const title = document.createElement("h1");
  title.textContent = "To-Do List";
  document.body.appendChild(title);

  const container = document.createElement("div");
  container.classList.add("todo-container");
  document.body.appendChild(container);

  const form = document.createElement("form");
  form.classList.add("todo-form");
  container.appendChild(form);

  form.innerHTML = `<label>Название задачи:</label><input id='task-name' type='text'>
    <label>Дедлайн:</label><input id='deadline' type='date'>
    <label>Ответсвенный:</label><input id='responsible' type='text'>
    <button type='submit'>Submit</button>`;

  const taskList = document.createElement("ul");
  taskList.classList.add("task-list");
  container.appendChild(taskList);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameTask = document.getElementById("task-name").value;
    const deadline = document.getElementById("deadline").value;
    const responsible = document.getElementById("responsible").value;

    if (!nameTask || !deadline || !responsible) {
      alert("Заполните все поля!");
      return;
    }

    const li = document.createElement("li");
    li.classList.add("task-item");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const containerLi = document.createElement("div");

    containerLi.innerHTML = `<strong>${nameTask}</strong> <br>Дедлайн: ${deadline} <br>Ответсвенный: ${responsible}</div>`;

    checkbox.addEventListener("change", function () {
      li.classList.toggle("completed", checkbox.checked);
    });
    li.appendChild(checkbox);
    li.appendChild(containerLi);
    taskList.appendChild(li);
    form.reset();
  });
}

createForm();
