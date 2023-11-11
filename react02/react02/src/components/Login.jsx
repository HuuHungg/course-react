import React, { Fragment, useEffect, useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const [user, setUser] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   useEffect(() => {
  //     console.log("1.ComponentDidMount");
  //     return () => {
  //       console.log("ComponentWillUnmount");
  //     };
  //   }, []);
  //   // Cứ component re-render là sẽ chạy
  //   useEffect(() => {
  //     console.log("2.Component re-render");
  //   });

  //   // những biến nào thay đổi thì sẽ thay đổi, Còn nếu không phải biến đấy thay đổi thì nó sẽ không thay đổi
  //   useEffect(() => {
  //     console.log("3. Hello F8");
  //   }, [form.email]);

  const [todo, setTodo] = useState([]);
  const getTodo = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const todo = await response.json();
    setTodo(todo);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <h2>Todo list</h2>
      {todo.map(({ title, id }) => {
        return <h3 key={id}>{title}</h3>;
      })}
      {/* <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password..."
            name="password"
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form> */}
    </div>
  );
};

export default Login;
