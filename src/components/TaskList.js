import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {

  const renderTasks = tasks.map((task, index) => {
    return <Task key={index} task={task} handleDelete={handleDelete}/>
  })

  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;


//render using a map to task component