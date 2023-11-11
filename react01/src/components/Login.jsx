import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        email: "",
      },
      error: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state.form;
    console.log(name, email);
    // Lưu vào trong 1 storage
  };
  handleChangeValue = (e) => {
    console.log(e.target.name, e.target.value);
    // Update dữ liệu nhận được vào state form
    const data = { ...this.state.form };
    data[e.target.name] = e.target.value;
    this.setState({ form: data });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Tên</label>
            <input
              type="text"
              name="name"
              placeholder="Tên...."
              onChange={this.handleChangeValue}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email...."
              onChange={this.handleChangeValue}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
