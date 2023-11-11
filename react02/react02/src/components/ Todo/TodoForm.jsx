import React, { useEffect, useState } from "react";

const TodoForm = ({ onGetName }) => {
  const [name, setName] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    onGetName(name);
    setName("");
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form action="" onSubmit={handlerSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name..."
        onChange={handleChange}
        value={name}
      />
    </form>
  );
};

export default TodoForm;
