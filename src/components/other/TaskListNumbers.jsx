import React from "react";

const TaskListNumbers = ({ data }) => {
    // Safely handle missing or incomplete data
    if (!data || !data.taskCount) {
        return <div className="text-red-500 text-center mt-10">No task data available.</div>;
    }

    return (
        <div className="flex mt-10 justify-between gap-10 screen flex-wrap">
            <div className="py-5 px-10 w-[45%] bg-red-400 rounded-xl">
                <h2 className="text-slate-300 text-3xl font-semibold bg-red-400">{data.taskCount.newTask}</h2>
                <h3 className="text-slate-200 text-xl font-medium bg-red-400">New task</h3>
            </div>

            <div className="py-5 px-10 w-[45%] bg-green-400 rounded-xl">
                <h2 className="text-slate-300 text-3xl font-semibold bg-green-400">{data.taskCount.completed}</h2>
                <h3 className="text-slate-200 text-xl font-medium bg-green-400">Completed Task</h3>
            </div>

            <div className="py-5 px-10 w-[45%] bg-blue-400 rounded-xl">
                <h2 className="text-slate-300 text-3xl font-semibold bg-blue-400">{data.taskCount.failed}</h2>
                <h3 className="text-slate-200 text-xl font-medium bg-blue-400">Failed Task</h3>
            </div>

            <div className="py-5 px-10 w-[45%] bg-yellow-400 rounded-xl">
                <h2 className="text-slate-300 text-3xl font-semibold bg-yellow-400">{data.taskCount.active}</h2>
                <h3 className="text-slate-200 text-xl font-medium bg-yellow-400">Accepted task</h3>
            </div>
        </div>
    );
};

export default TaskListNumbers;
