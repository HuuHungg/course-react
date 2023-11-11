import React, { useState } from "react";
import { createContext } from "react";
import ToggleUsd from "./ToggleUsd";
import ToggleVn from "./ToggleVn";

export const ConvertContext = createContext();
const Convert = () => {
  const [data, setData] = useState({ vnd: 0, usd: 0 });
  const handleDispatch = (action) => {
    let vnd, usd;
    if (action.type === "vnd") {
      // Chuyển đổi tỉ giá từ vnd -> usd
      vnd = action.payload;
      usd = vnd / 24500;
      console.log(vnd, usd);
    } else {
      usd = action.payload;
      vnd = usd * 24500;
    }
    setData({
      vnd,
      usd,
    });
    // setData({ ...data, [action.type]: action.payload });
  };
  console.log(data);
  return (
    <ConvertContext.Provider
      value={{
        data,
        dispatch: handleDispatch,
      }}
    >
      <ToggleUsd />
      <hr />
      <ToggleVn />
    </ConvertContext.Provider>
  );
};

export default Convert;
