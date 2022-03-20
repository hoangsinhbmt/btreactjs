import React, { Component } from "react";
import { dataLiftingStateUp } from "./data";
import DienThoaiItem from "./DienThoaiItem";

export default class LiftingStateUp extends Component {
  state = {
    data: dataLiftingStateUp,
    ThongTinChiTiet: dataLiftingStateUp[0],
  };
  renderContent = () => {
    return this.state.data.map((item, index) => {
      return (
        <DienThoaiItem
          handleClick={this.handleShowThongTin}
          dienThoai={item}
          key={item.id}
        />
      );
    });
  };
  handleShowThongTin = (value) => {
    this.setState({ ThongTinChiTiet: value });
  };
  render() {
    let { name, price, thumbnail_url,short_description } = this.state.ThongTinChiTiet;
    return (
      <div className="container p-5 text-justify">
        <div className="my-5 row">
          <div className="col-3">
            <img style={{ width: "100%" }} src={thumbnail_url} alt="" />
          </div>
          <div className="col-7 ">
            <p className="card-title"> Tên: {name}</p>
            <p className="card-text">
              <p className="text-danger"> Giá: {price.toLocaleString()}</p>
            </p>
            <p className="card-text">{short_description}</p>
          </div>
        </div>
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}
