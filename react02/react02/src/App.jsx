import React, { useReducer } from "react";
import { reducer } from "./reducer";
const App = () => {
  const initialState = {
    count2: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 10,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 10,
    });
  };
  return (
    <div>
      <h1>Count: {state.count2} </h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default App;
