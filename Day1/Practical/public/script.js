const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("titleInput");
const descriptionInput = document.getElementById("descriptionInput");
const datetimeInput = document.getElementById("datetimeInput");
const taskList = document.getElementById("taskList");

// Load tasks on page load
async function loadTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();
  renderTasks(tasks);
}

// Render tasks
function renderTasks(tasks) {
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
    btn.onclick = () => deleteTask(task.id);

    li.appendChild(document.createElement("br"));
    li.appendChild(btn);

    taskList.appendChild(li);
  });
}

// Add task
async function addTask(task) {
  await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });

  loadTasks();
}

// Delete task
async function deleteTask(id) {
  await fetch(`/api/tasks/${id}`, { method: "DELETE" });
  loadTasks();
}

// Form submit
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

// Initial load
loadTasks();
