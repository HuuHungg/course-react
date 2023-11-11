import { useState } from "react";
import Content from "./Content";
import { color } from "../../libs/color";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log(countRef);
  const handleIncrement = () => {
    setCount(count + 1);
    // countRef.current++;
    // a.current++;
    // console.log(countRef);
  };
  const inputRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    console.log(buttonRef.current);
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nhap tu khoa" />
      <h1>Count:{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <Button ref={buttonRef} />
      {/* <Content count={count} /> */}
    </div>
  );
};

export default color(Counter);

// Hook useRef()
