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
          <div>
            <button className="button-complete task-button">
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button">
              <i className="fa fa-edit"></i>
            </button>
            <button className="button-delete task-button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
