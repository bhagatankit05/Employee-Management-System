import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"


const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full py-5 mt-10 px-4">
        {
          data.tasks.map((elem)=>{
              if(elem.active){
                return </AcceptTask>
             }
             if(elem.newTask){
              return <NewTask/>
             }
             if(elem.completed){
              return <CompleteTask/>
             }
             if(elem.failed){
              return <FailedTask/>
             }
          })
        }
    </div>
  );
};

export default TaskList;
