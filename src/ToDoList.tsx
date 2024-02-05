import React from "react";

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
};

export function ToDoList({ title, tasks }: PropsType) {
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}
