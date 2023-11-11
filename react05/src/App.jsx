import React from "react";
import { useState } from "react";
import moment from "moment/moment";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [histories, setHistories] = useState([]);
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setHistories([
      ...histories,
      {
        amount: +amount,
        createdAt: moment().format("DD/MM/YYYY HH:mm:ss"),
      },
    ]);
    setAmount(0);
  };

  const total = histories.reduce((prev, curr) => {
    console.log("Tính Tổng");
    return prev + curr.amount;
  }, 0);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="nhap tien..."
          onChange={handleChange}
          value={amount}
        />
        <button>Add</button>
      </form>
      <h2>History </h2>
      {histories.map((item, index) => (
        <h3 key={index}>
          {item.amount.toLocaleString} - {item.createdAt}
        </h3>
      ))}
      <h2>Tổng: {total.toLocaleString()}</h2>
    </div>
  );
};

export default App;
