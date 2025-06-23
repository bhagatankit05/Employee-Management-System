import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-6 mt-6 rounded-xl shadow-xl min-h-screen text-white">
      {/* Header Row */}
      <div className="bg-red-600 px-4 py-3 flex justify-between rounded-md mb-6 shadow-lg font-semibold text-white text-center">
        <h2 className="w-1/5 text-base bg-red-800 py-2 rounded-md">Employee Name</h2>
        <h2 className="w-1/5 text-base bg-red-800 py-2 rounded-md">New Task</h2>
        <h2 className="w-1/5 text-base bg-red-800 py-2 rounded-md">Active Task</h2>
        <h2 className="w-1/5 text-base bg-red-800 py-2 rounded-md">Completed Task</h2>
        <h2 className="w-1/5 text-base bg-red-800 py-2 rounded-md">Failed Task</h2>
      </div>

      {/* Scrollable Task Rows */}
      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
        {userData?.map((elem, index) => (
          <div
            key={index}
            className="border border-emerald-700 bg-[#2A2A2A] px-4 py-3 flex justify-between rounded-lg hover:bg-[#333333] transition duration-300 ease-in-out shadow-md text-center"
          >
            <h2 className="w-1/5 text-base font-medium text-white">{elem.name}</h2>
            <h2 className="w-1/5 text-base font-medium text-blue-400">{elem.taskCount.newTask}</h2>
            <h2 className="w-1/5 text-base font-medium text-yellow-400">{elem.taskCount.active}</h2>
            <h2 className="w-1/5 text-base font-medium text-green-300">{elem.taskCount.completed}</h2>
            <h2 className="w-1/5 text-base font-medium text-red-500">{elem.taskCount.failed}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
