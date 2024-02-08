import React from "react";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  deleteTask: Function;
  filterTask: Function;
};

export function ToDoList({ title, tasks, deleteTask, filterTask }: PropsType) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        {tasks.map(function (item) {
          return (
            <li key={item.id}>
              <input type="checkbox" checked={item.isDone} />
              <span>{item.title}</span>
              <button onClick={() => deleteTask(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => filterTask("All")}>All</button>
      <button onClick={() => filterTask("Active")}>Active</button>
      <button onClick={() => filterTask("Complited")}>Complited</button>
    </div>
  );
}
