import PropTypes from "prop-types";
import { useState } from "react";

const URL = "https://task-server-roan-eight.vercel.app/data";
const TaskForm = ({ onTaskCreated }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "Pending",
    due_date: "",
    created_at: "",
    updated_at: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the current date in the format "YYYY-MM-DD"
    const currentDate = new Date().toISOString().split("T")[0];

    const newTask = {
      ...task,
      created_at: currentDate, // Set the created_at date
      updated_at: currentDate, // Set the updated_at date
      id: Date.now(), // Generate a unique ID based on timestamp
    };

    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      alert("Task created successfully!");

      // Notify the parent component that a new task was created
      onTaskCreated(newTask); // Pass the new task back to the parent

      // Reset form fields
      setTask({
        title: "",
        description: "",
        priority: "Low",
        status: "Pending",
        due_date: "",
        created_at: "",
        updated_at: "",
      });
    } else {
      alert("Error creating task");
    }
  };

  return (
    <div className="bg-white shadow-lg mx-auto p-8 rounded-lg max-w-lg">
      <h2 className="mb-6 font-semibold text-2xl text-blue-600 text-center">
        Add Task
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Title"
            className="border-gray-300 shadow-sm p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Description"
            className="border-gray-300 shadow-sm p-3 border rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="gap-4 grid grid-cols-2 mb-4">
          <div>
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="border-gray-300 shadow-sm p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <select
              name="status"
              value={task.status}
              onChange={handleChange}
              className="border-gray-300 shadow-sm p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <input
            type="date"
            name="due_date"
            value={task.due_date}
            onChange={handleChange}
            className="border-gray-300 shadow-sm p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 shadow-md p-3 rounded-md w-full font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  onTaskCreated: PropTypes.func.isRequired,
};

export default TaskForm;
