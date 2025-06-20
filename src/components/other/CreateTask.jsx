import { set } from "mongoose";
import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      assignTo: assignTo,
      category: category,
      active: false,
      newTask: true,
      completed: true,
      failed: true,
    });
    const data = JSON.parse(localStorage.getItem("employee"));
    data.forEach(function (elem) {
      if (assignTo === elem.name) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask += 1;
        console.log(elem);
      }
    }

    );
    setTaskTitle("");// Clear the input field
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory(""); 
    




  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
        Create New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Task Title */}
        <div>
          <label className="block text-sm font-medium mb-2 text-white">Task Title</label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            placeholder="e.g. Make a Personal Portfolio"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2 text-white">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Write a short task description..."
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md h-28 resize-none text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-sm font-medium mb-2 text-white">Due Date</label>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Assign To */}
        <div>
          <label className="block text-sm font-medium mb-2 text-white">Assign To</label>
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            type="text"
            placeholder="e.g. Employee Name"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-2 text-white">Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="e.g. Design, Development, Testing"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
