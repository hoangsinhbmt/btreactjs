import React, { Component } from "react";
import { data } from "./data";

export default class RenderWidthMap extends Component {
  renderContent = () => {
    return data.map((item, index) => {
      let {thumbnail_url,name,price}=item;
      return (
        <div className="col-4 p-3">
          <div classname="card">
            <div className="card">
              <img className="card-img-top" src={thumbnail_url} alt />
              <div className="card-body">
                <p className="card-title">{name}</p>
                <p className="text-danger">Giá: {price.toLocaleString()} đồng</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container p-5">
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}
