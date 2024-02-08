import React, { useState } from "react";
import "./App.css";
import { TaskType, ToDoList } from "./ToDoList";

let tasks1: Array<TaskType> = [
  { id: 1, title: "CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "HTML", isDone: false },
];

type FilterType = "All" | "Active" | "Complited";

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>(tasks1);
  let [filter, setFilter] = useState<FilterType>("All");

  function deleteTask(id: number) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function filterTask(filter: FilterType) {
    setFilter(filter);
  }

  let filteredTasks = tasks;
  if (filter === "Active") {
    filteredTasks = tasks.filter((t) => t.isDone !== true);
  } else if (filter === "Complited") {
    filteredTasks = tasks.filter((t) => t.isDone === true);
  }

  return (
    <div className="App">
      <ToDoList
        title="What to Learn"
        tasks={filteredTasks}
        deleteTask={deleteTask}
        filterTask={filterTask}
      />
      {/* <ToDoList title="What to see" tasks={tasks2} /> */}
    </div>
  );
}

export default App;
