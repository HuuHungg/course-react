import React, { useState } from "react";
import Counter from "./components/Counter";
import Login from "./components/Login";
import TodoForm from "./components/ Todo/TodoForm";
import TodoList from "./components/ Todo/ TodoList";

const App = () => {
  // return <Counter />
  // return <Login />
  const [name, setName] = useState("");
  const handleGetName = (name) => {
    setName(name);
  };
  return (
    <div>
      <TodoList name={name} />
      <hr />
      <TodoForm onGetName={handleGetName} />
    </div>
  );
};

export default App;
