import React, { useState, useEffect } from "react";

const ComponentA = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [taskInput, setTaskInput] = useState(""); // State for the input field

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    if (taskInput.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { id: Date.now(), title: taskInput }]);
    setTaskInput(""); // Clear input field
  };

  // Delete a task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="p-4">
      {/* Task Input */}
      <div className="mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task title"
          className="border p-2 mr-2"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b p-2"
          >
            <span>{task.title}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentA;
