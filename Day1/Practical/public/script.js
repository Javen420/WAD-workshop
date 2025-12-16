let tasks = [
  { id: 1, name: "Feed my dog" },
  { id: 2, name: "Eat more veggies" },
  { id: 3, name: "Do 50 jumping jacks" }
];

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskTableBody = document.getElementById("taskTableBody");
const taskList = document.getElementById("taskList");

/**
 * Render tasks to table and list
 */
function renderTasks() {
  taskTableBody.innerHTML = "";
  taskList.innerHTML = "";

  tasks.forEach(task => {
    // Table row
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${task.id}</td>
      <td>${task.name}</td>
      <td>
        <button data-id="${task.id}">Delete</button>
      </td>
    `;

    row.querySelector("button").addEventListener("click", () => {
      deleteTask(task.id);
    });

    taskTableBody.appendChild(row);

    // Ordered list item
    const li = document.createElement("li");
    li.innerHTML = `
      ${task.name}
      <button>Delete</button>
    `;

    li.querySelector("button").addEventListener("click", () => {
      deleteTask(task.id);
    });

    taskList.appendChild(li);
  });
}

/**
 * Add a new task
 */
function addTask(name) {
  const newTask = {
    id: Date.now(),
    name
  };

  tasks.push(newTask);
  renderTasks();
}

/**
 * Delete a task by ID
 */
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

/**
 * Form submit handler
 */
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskName = taskInput.value.trim();
  if (!taskName) return;

  addTask(taskName);
  taskInput.value = "";
});

// Initial render
renderTasks();
