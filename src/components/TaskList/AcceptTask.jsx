import React from "react";
const AcceptTask = () =>{
    return(
        <div>
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
            <div className="flex justify-between mt-5">
                <button className="bg-green-500 py-1 px-2 text-sm"> Mark as completed</button>
                <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask