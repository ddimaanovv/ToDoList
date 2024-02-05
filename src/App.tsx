import React from "react";
import "./App.css";
import { ToDoList } from "./ToDoList";

let tasks1 = [
  { id: 1, title: "CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "HTML", isDone: false },
];
let tasks2 = [
  { id: 1, title: "Terminator", isDone: false },
  { id: 2, title: "Potter", isDone: true },
  { id: 3, title: "Gladiator", isDone: true },
];

function App() {
  return (
    <div className="App">
      <ToDoList title="What to Learn" tasks={tasks1} />
      <ToDoList title="What to see" tasks={tasks2} />
    </div>
  );
}

export default App;
