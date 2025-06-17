import React from "react";

const TaskListNumbers = () => {
    return (

        <div className="flex mt-10 justify-between gap-10 screen">
            <div className="py-5 px-10 w-[45%] bg-red-400 rounded-xl">
                <h2 className="text-slate-300 text-3xl font-semibold bg-red-400">0</h2>
                <h3 className="text-slate-200 text-xl font-medium  bg-red-400">New task</h3>
            </div>

            <div className="py-5 px-10 w-[45%] bg-green-400 rounded-xl">
                <h2 className="text-slate-300 text-3xl font-semibold bg-green-400 ">0</h2>
                <h3 className="text-slate-200 text-xl font-medium   bg-green-400 ">New task</h3>
            </div>


            <div className="py-5 px-10 w-[45%] bg-blue-400 rounded-xl">
                <h2 className="text-slate-300 text-3xl font-semibold bg-blue-400">0</h2>
                <h3 className="text-slate-200 text-xl font-medium  bg-blue-400">New task</h3>
            </div>


            <div className="py-5 px-10 w-[45%] bg-yellow-400 rounded-xl">
                <h2 className="text-slate-300 text-3xl font-semibold bg-yellow-400">0</h2>
                <h3 className="text-slate-200 text-xl font-medium  bg-yellow-400">New task</h3>
            </div>



        </div>

    )
}
export default TaskListNumbers