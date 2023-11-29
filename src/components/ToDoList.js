import React from "react";

export const ToDoList = ({ toDo, setToDo }) => {
  return (
    <div>
      {toDo.map((toDo) => (
        <li className="todo-list" key={toDo.id}>
          <input
            type="text"
            value={toDo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
        </li>
      ))}
    </div>
  );
};
