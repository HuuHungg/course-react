import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";

// React Render giao diện
const rootEl = document.querySelector("#root");

// Tạo element từ React
// const h1 = React.createElement('h1',
// {
//   className:"title"
// },
//   React.createElement("span", {}, "Hoc React that kho")
// )

// const li = [...Array(10).keys()].map((index) => {
//   return React.createElement("li", {}, `Item ${index +  1}`)
// });

// const ul = React.createElement(
//   "ul",
//   {
//   className: "menu"
// },...li);

// const h2 = React.createElement("h2", {
//   className: "sub-title",
//   onClick: (e) => {
//     console.log("Hello F8");
//     e.target.style.color="red"
//   }
// }, "Hoc React rat rat kho")

// const div = React.createElement("div",
//   {
//     id:"content",
//     className:"content",
//     "data-index": "123"
//   }, h1, h2, ul);
// console.log(div);

//Render UI
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
