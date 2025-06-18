import React from "react";

const AllTask = () => {
  return (
    <div className="bg-[#1C1C1C] p-6 mt-6 rounded-lg shadow-lg min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center">📋 All Assigned Tasks</h2>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Task 1 */}
        <div className="bg-gray-800 p-5 rounded-lg hover:shadow-xl justify-between  transition">
          <h2 className="text-xl font-semibold text-blue-300 mb-1">Write Blog Post</h2>
          <h3 className="text-sm text-gray-300">Topic: JavaScript Array Methods</h3>
        </div>

        {/* Task 2 */}
        <div className="bg-gray-800 p-5 rounded-lg hover:shadow-xl justify-between transition">
          <h2 className="text-xl font-semibold text-blue-300 mb-1">Fix UI Bugs</h2>
          <h3 className="text-sm text-gray-300">Resolve dashboard layout and color issues</h3>
        </div>

        {/* Task 3 */}
        <div className="bg-gray-800 p-5 rounded-lg hover:shadow-xl justify-between transition">
          <h2 className="text-xl font-semibold text-blue-300 mb-1">Create Task API</h2>
          <h3 className="text-sm text-gray-300">Develop API to handle task creation & updates</h3>
        </div>

        {/* Task 4 */}
        <div className="bg-gray-800 p-5 rounded-lg hover:shadow-xl justify-between transition">
          <h2 className="text-xl font-semibold text-blue-300 mb-1">Design Login Page</h2>
          <h3 className="text-sm text-gray-300">Use Tailwind & React Hooks for responsive login form</h3>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
