import React, { Component } from "react";

export default class HandlingEvent extends Component {
  sayHello = () => {
    alert("Hello");
  };
  sayHi = (name) => {
    alert("Hi " + name);
  };
  render() {
    return (
      <div className="container py-5">
        <button className="btn btn-success" onClick={this.sayHello}>
          Click me
        </button>
        <button className="btn btn-warning" onClick={()=>{this.sayHi("123")}}>
          say hi
        </button>
      </div>
    );
  }
}
