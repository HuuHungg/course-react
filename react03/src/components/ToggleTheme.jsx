import React, { useContext, useState } from "react";
import { MyContext } from "../App";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(MyContext);
  return (
    <div>
      <button
        onClick={() => {
          toggleTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? "Dark" : "light"}
      </button>
    </div>
  );
};

export default ToggleTheme;
