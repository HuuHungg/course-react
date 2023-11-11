import React from "react";

const Products = ({ name, price, attrName, attrValue, onGetData }) => {
  console.log(name, price);
  console.log(attrName, attrValue);
  return (
    <div>
      <h2 style={{ color: "red" }}>Product</h2>
      <button
        onClick={() => {
          onGetData("Hello  F8");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Products;
