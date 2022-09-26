import React from "react";
import Task from './Task';

function TaskList({tasks, deleteTask = null}) {
  const taskList = tasks.map((task) => {
    return <Task key={task.text} category={task.category} text={task.text} deleteTask={deleteTask} />
  })

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
