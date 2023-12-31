import React from "react";

export const ToDoList = ({ toDo, setToDo, setEditToDo }) => {
  const handleComplete = (todo) => {
    setToDo(
      toDo.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findToDo = toDo.find((todo) => todo.id === id);
    setEditToDo(findToDo);
  };

  const handleDelete = ({ id }) => {
    setToDo(toDo.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {toDo.map((todo) => (
        <li className="todo-list" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
