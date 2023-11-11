import React, { useState } from "react";

// Không thể gọi hook ở đây

const Counter = () => {
  // Gọi hook ở đây
  const [count, setCount] = useState(0);
  const handlerIncrement = () => {
    // setCount(count + 1);
    setCount((count) => count + 1);
  };

  const handlerDecrement = () => {
    // setCount(count - 1);
    // Không thể gọi Hook ở đây
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handlerDecrement}>-</button>
      <button onClick={handlerIncrement}>+</button>
    </div>
  );
};

export default Counter;
