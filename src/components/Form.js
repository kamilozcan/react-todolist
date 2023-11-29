import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({
  input,
  setInput,
  toDo,
  setToDo,
  editToDo,
  setEditToDo,
}) => {
  const updateToDo = (title, id, completed) => {
    const newToDo = toDo.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setToDo(newToDo);
    setEditToDo("");
  };

  useEffect(() => {
    if (editToDo) {
      setInput(editToDo.title);
    } else {
      setInput("");
    }
  }, [setInput, editToDo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editToDo) {
      setToDo([...toDo, { id: uuidv4(), title: input, completed: false }]);
      setInput(""); // cancels the event if it is canceable.
    } else {
      updateToDo(input, editToDo.id, editToDo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a ToDo ..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editToDo ? "OK" : 'Add'}
      </button>
    </form>
  );
};
