import React, { Component } from "react";
import HandlingEvent from "../HandlingEvent/HandlingEvent";

export default class DieuKien extends Component {
  isLogin = true;
  rendercontent() {
    if (this.isLogin) {
      return <p>Hello</p>;
    } else {
      return <button className="btn btn-success">Dang nhap</button>;
    }
  }
  handleLogin() {
    this.isLogin = true;
  }
  render() {
    console.log("isLogin", this.isLogin);
    return <div>{this.rendercontent()}</div>;
  }
}
