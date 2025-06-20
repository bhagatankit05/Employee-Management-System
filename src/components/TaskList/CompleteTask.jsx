import React from "react";

const CompleteTask = ({data}) =>{
    return (
         <div className="flex flex-col justify-between bg-orange-300 w-full rounded-xl p-5 shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="bg-orange-500 text-white text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm text-gray-700">{data.date}</h4>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-900">{data.title}</h2>
          <p className="text-sm text-gray-800 mt-2">
            {data.description}
          </p>
        </div>
        <div className="mt-5">
            <button className="w-full">Complete</button>
        </div>
      </div>
    )
}
export default CompleteTask