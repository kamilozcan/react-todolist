import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { ToDoList } from "./components/ToDoList";

const App = () => {
  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState([]);
  const [editToDo, setEditToDo] = useState(null);

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
