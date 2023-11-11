import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const title = "Hoc React";
  const status = true;
  const handleClick = (e) => {
    console.log(e);
  };
  const handleClick2 = (text) => {
    console.log(text);
  };
  const isLogin = true;
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
  ];
  const UserItem = () => {
    return <h3>NameSpace</h3>;
  };
  return (
    <div className="content" id="content">
      <Header />
      {users.map(({ id, name }, index) => (
        // <h3 key={id}>{name}</h3>
        <UserItem key={id} />
      ))}
      {/* {isLogin ? (
        <div>
          <h2>Chao mung ban x`da quay tro lai</h2>
          <h3>Hi</h3>
        </div>
      ) : (
        <h3>Vui long dang nhap</h3>
      )} */}
      <h1 className="content"> Hoc React rat kho</h1>
      {/* Pacer dữ liệu */}
      <h2 className={`title${status ? " success" : ""}`}>{title}</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClick2("F8");
        }}
      >
        Click me 2
      </button>
      <Footer></Footer>
    </div>
  );
}
