import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [editId, setEditId] = useState(null);

  // Add or Update Task
  const handleSubmit = () => {
    if (taskText.trim() === "") return;

    if (editId !== null) {
      setTasks(
        tasks.map((task) =>
          task.id === editId ? { ...task, text: taskText } : task
        )
      );
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }

    setTaskText("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit Task
  const editTask = (task) => {
    setTaskText(task.text);
    setEditId(task.id);
  };

  // Toggle Complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Task Manager</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId !== null ? "Update" : "Add"}
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "10px 0" }}>
            <span
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
                marginRight: "10px",
              }}
            >
              {task.text}
            </span>

            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => editTask(task)}>
              Edit
            </button>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;