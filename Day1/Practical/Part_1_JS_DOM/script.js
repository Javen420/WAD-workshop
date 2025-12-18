const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("titleInput");
const descriptionInput = document.getElementById("descriptionInput");
const datetimeInput = document.getElementById("datetimeInput");
const taskList = document.getElementById("taskList");

// In-memory task storage (frontend only)
let tasks = [
  {
    id: 1,
    title: "Feed my dog",
    description: "Use the new food",
    datetime: "2025-12-16T18:30"
  },
  {
    id: 2,
    title: "Workout",
    description: "50 jumping jacks",
    datetime: "2025-12-17T07:00"
  }
];

/**
 * Render tasks to the page
 */
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${task.title}</strong><br>
      ${task.description}<br>
      <em>${new Date(task.datetime).toLocaleString()}</em>
    `;

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(document.createElement("br"));
    li.appendChild(btn);

    taskList.appendChild(li);
  });
}

/**
 * Add a task (frontend only)
 */
function addTask(task) {
  task.id = Date.now();
  tasks.push(task);
  renderTasks();
}

/**
 * Delete a task (frontend only)
 */
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Handle form submit
taskForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!titleInput.value || !datetimeInput.value) {
    alert("Title and date/time required");
    return;
  }

  addTask({
    title: titleInput.value.trim(),
    description: descriptionInput.value.trim(),
    datetime: datetimeInput.value
  });

  taskForm.reset();
});

// Initial render
renderTasks();
