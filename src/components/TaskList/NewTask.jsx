import React from "react";

const NewTask = ()=>{
        return(
           <div className="flex flex-col justify-between bg-yellow-300 w-full rounded-xl p-5 shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="bg-yellow-500 text-white text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm text-gray-700">{data.date}</h4>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-900">{data.title}</h2>
          <p className="text-sm text-gray-800 mt-2">
            {data.description}
          </p>
        </div>
        <div className="mt-5 flex justify-between">
             <button className="bg-green-500 py-1 px-2 text-sm">Accept Task</button>
                
        </div>
      </div>
        )
}
export default NewTask