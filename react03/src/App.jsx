import "./assets/style.css";
import React, { useContext, useState } from "react";
import ShowCounter from "./components/showCounter";
import ToggleTheme from "./components/ToggleTheme";
import Convert from "./components/Convert";
export const MyContext = React.createContext();

const App = () => {
  const step1 = 10;
  const step2 = 5;
  const [theme, setTheme] = useState("light");
  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  const data = {
    // message: "Hello F8",
    // theme,
    // toggleTheme,
  };

  return (
    <MyContext.Provider value={data}>
      <Convert />
      {/* <ToggleTheme />
      <ShowCounter step1={step1} step2={step2} /> */}
    </MyContext.Provider>
  );
};

export default App;

// Đối tượng conText: React.createContext
// Provider -> Gửi dữ liệu
// Consumer -> Nhận dữ liệu (UseContext)
