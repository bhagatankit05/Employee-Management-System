import React from "react";

const CreateTask = () =>{
        return(
            <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
          Create New Task
        </h2>

        <form className="space-y-6">
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Task Title</label>
            <input
              type="text"
              placeholder="e.g. Make a Personal Portfolio"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              placeholder="Write a short task description..."
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-2">Due Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm font-medium mb-2">Assign To</label>
            <input
              type="text"
              placeholder="e.g. Employee Name"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        )
}
export default CreateTask