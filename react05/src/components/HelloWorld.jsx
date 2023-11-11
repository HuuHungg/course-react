import { MyContext } from "../App";
import { useContext2 } from "../../libs/hook";
import React from "react";

const HelloWorld = () => {
  useContext2(MyContext);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default HelloWorld;
