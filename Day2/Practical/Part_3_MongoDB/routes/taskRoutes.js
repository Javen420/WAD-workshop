const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ datetime: 1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// POST new task
router.post("/", async (req, res) => {
  const { title, description, datetime } = req.body;

  if (!title || !datetime) {
    return res.status(400).json({ error: "Title and date/time required" });
  }

  try {
    const task = new Task({
      title,
      description,
      datetime
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

// DELETE task by ID
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;
