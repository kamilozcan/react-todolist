import React, { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { ToDoList } from "./components/ToDoList";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("toDo")) || [];
  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState(initialState);
  const [editToDo, setEditToDo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            toDo={toDo}
            setToDo={setToDo}
            editToDo={editToDo}
            setEditToDo={setEditToDo}
          />
        </div>
        <div>
          <ToDoList toDo={toDo} setToDo={setToDo} setEditToDo={setEditToDo} />
        </div>
      </div>
    </div>
  );
};

export default App;
