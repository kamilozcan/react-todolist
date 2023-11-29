import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ input, setInput, toDo, setToDo }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault(); // cancels the event if it is canceable.
    setToDo([...toDo, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
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
        Add
      </button>
    </form>
  );
};
