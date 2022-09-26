import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const tasksToShow = tasks.filter((task) => {
    return (selectedCategory == 'All' ||
      selectedCategory == task.category)
  })

  function onTaskFormSubmit(task){
    setTasks([...tasks, task])
  }

  function deleteTask(text){
    const newTasks = tasks.filter((task) => task.text != text)

    setTasks(newTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selectedCategory} setSelected={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasksToShow} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
