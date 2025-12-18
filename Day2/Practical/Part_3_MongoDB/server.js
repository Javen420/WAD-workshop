const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// In-memory tasks
let tasks = [
  {
    id: 1,
    title: "Feed my dog",
    description: "Use the new food",
    datetime: "2025-12-16T18:30"
  }
];

// API: get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// API: add task
app.post("/api/tasks", (req, res) => {
  const { title, description, datetime } = req.body;

  if (!title || !datetime) {
    return res.status(400).json({ error: "Title and date/time required" });
  }

  const task = {
    id: Date.now(),
    title,
    description: description || "",
    datetime
  };

  tasks.push(task);
  res.status(201).json(task);
});

// API: delete task
app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.sendStatus(204);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
