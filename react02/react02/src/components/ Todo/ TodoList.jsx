import React, { useEffect, useState } from "react";

const TodoList = ({ name }) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      name: "Work 1",
    },
    {
      id: 2,
      name: "Work 2",
    },
  ]);
  useEffect(() => {
    setTodo([...todo, { id: todo.length + 1, name: name }]);
  }, [name]);
  return (
    <div>
      {todo.map(({ id, name }) => {
        return <h3 key={id}>{name}</h3>;
      })}
    </div>
  );
};

export default TodoList;
