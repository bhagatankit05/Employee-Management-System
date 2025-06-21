import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex flex-col justify-between bg-slate-100 w-full rounded-xl p-5 shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="bg-indigo-600 text-white text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm text-slate-600">{data.date}</h4>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-slate-900">{data.title}</h2>
        <p className="text-sm text-slate-700 mt-2">{data.description}</p>
      </div>
      <div className="mt-5">
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded transition duration-200">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
