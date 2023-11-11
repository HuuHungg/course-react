import React from "react";
import Input from "./components/Input";

const App = () => {
  return (
    <div>
      <Input name="Tên" type="text" />
      <Input name="Email" type="email" />
      <Input name="Phone" type="number" />
    </div>
  );
};

export default App;
