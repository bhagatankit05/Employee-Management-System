import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authdata = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-6 mt-6 rounded-lg shadow-lg min-h-screen text-white">
      {/* Header Row */}
      <div className="bg-red-500 px-4 py-2 flex justify-between rounded-lg mb-4 shadow-md font-semibold text-center">
        <h2 className="w-1/5 text-lg font-medium bg-red-800 py-1">Employee Name</h2>
        <h2 className="w-1/5 text-lg font-medium bg-red-800 py-1">New Task</h2>
        <h2 className="w-1/5 text-lg font-medium bg-red-800 py-1">Active Task</h2>
        <h2 className="w-1/5 text-lg font-medium bg-red-800 py-1">Completed Task</h2>
        <h2 className="w-1/5 text-lg font-medium bg-red-800 py-1">Failed Task</h2>
      </div>

      {/* Task Rows Scrollable */}
      <div className="">
        {authdata.employee.map((elem, index) => (
          <div
            key={index}
            className="border-2 border-emerald-700  px-4 py-2 flex justify-between rounded-lg mb-4 shadow-md text-center"
          >
            <h2 className="text-lg font-medium  w-1/5 text-white py-1">{elem.name}</h2>
            <h2 className="text-lg font-medium w-1/5 text-blue-500 py-1">{elem.taskCount.newTask}</h2>
            <h2 className="text-lg font-medium w-1/5 text-yellow-500 py-1">{elem.taskCount.active}</h2>
            <h2 className="text-lg font-medium w-1/5 text-slate-200 py-1">{elem.taskCount.completed}</h2>
            <h2 className="text-lg font-medium w-1/5 text-red-600 py-1">{elem.taskCount.failed}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
