import React from "react";
import { useDispatch } from "../core/hook";
import { useState } from "react";

const TodoForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "todo/app",
      payload: name,
    });
    setName("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name..."
        onChange={handleChange}
        value={name}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
