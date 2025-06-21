import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data.title);

  return (
    <div>
      <div className="flex flex-col justify-between bg-slate-100 w-full rounded-xl p-5 shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="bg-indigo-600 text-white text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm text-slate-600">{data.date}</h4>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-slate-900">{data.title}</h2>
          <p className="text-sm text-slate-700 mt-2">{data.description}</p>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 text-sm rounded">
          Mark as Completed
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 text-sm rounded">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
