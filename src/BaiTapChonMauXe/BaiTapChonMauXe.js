import React, { Component } from "react";

export default class BaiTapChonMauXe extends Component {
  state = {
    img: "./img/imgBlackCar.jpg",
  };
  handleChangeCar = (value) => {
    this.setState({ img: value });
  };
  render() {
    return (
      <div className="container p-5">
        <div className="d-flex">
          <img
            style={{
              width: "40%",
              height: "100%",
            }}
            src={this.state.img}
            alt=""
          />
          <button className="btn btn-danger"  onClick={()=>{this.handleChangeCar("./img/imgRedCar.jpg")}}>Red</button>
          <button className="btn btn-dark" onClick={()=>{this.handleChangeCar("./img/imgBlackCar.jpg")}}>Black</button>
          <button className="btn btn-secondary" onClick={()=>{this.handleChangeCar("./img/imgSilverCar.jpg")}}>Silver</button>
        </div>
      </div>
    );
  }
}
