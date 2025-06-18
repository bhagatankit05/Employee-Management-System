import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full py-5 mt-10 px-4"
    >
      {/* Task 1 - High Priority */}
      <div className="flex flex-col justify-between bg-red-300 w-full rounded-xl p-5 shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-white text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm text-gray-700">18-June-2025</h4>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-900">Make Notes on Notion</h2>
          <p className="text-sm text-gray-800 mt-2">
            Summarize key learnings and topics from today's lectures on Notion.
          </p>
        </div>
      </div>

      {/* Task 2 - Medium Priority */}
      <div className="flex flex-col justify-between bg-yellow-300 w-full rounded-xl p-5 shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="bg-yellow-500 text-white text-sm px-3 py-1 rounded">Medium</h3>
          <h4 className="text-sm text-gray-700">20-June-2025</h4>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-900">Submit Internship Report</h2>
          <p className="text-sm text-gray-800 mt-2">
            Complete and upload your final internship report in the college portal.
          </p>
        </div>
      </div>

      {/* Task 3 - Urgent */}
      <div className="flex flex-col justify-between bg-orange-300 w-full rounded-xl p-5 shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="bg-orange-500 text-white text-sm px-3 py-1 rounded">Urgent</h3>
          <h4 className="text-sm text-gray-700">25-June-2025</h4>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-900">Prepare for Final Exam</h2>
          <p className="text-sm text-gray-800 mt-2">
            Revise important chapters and practice past year papers.
          </p>
        </div>
      </div>

      {/* Task 4 - Low Priority */}
      <div className="flex flex-col justify-between bg-green-300 w-full rounded-xl p-5 shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="bg-green-600 text-white text-sm px-3 py-1 rounded">Low</h3>
          <h4 className="text-sm text-gray-700">28-June-2025</h4>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-900">Update Portfolio Website</h2>
          <p className="text-sm text-gray-800 mt-2">
            Add new projects and improve the design section with animations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
