import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    // Khai báo State
    this.state = {
      count: 0,
    };
    this.message = "";
  }
  handleIncrement = () => {
    //Để thay đổi state -> dùng hàm setState
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDecrement = () => {
    //Để thay đổi state -> dùng hàm setState
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    if (this.state.count === 5) {
      this.message = "Thành công";
    }
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        {this.message && <h2>{this.message}</h2>}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default App;

//Trong class component chứa các thành phần của React
// State
// LifeCycle

// State là gì ? -> Trạng thái
// Nếu muốn thay đổi dữ liệu của 1 compoent => Dùng State => Nội bộ trong 1 component
// Khi state thay đổi => Component sẽ bị re-render
// Không được thay đổi trực tiếp biến state mà phải thông qua hàm riêng để thay đổi
// Muốn component update lại UI -> Thay đổi State
