import React, { Component } from 'react'

export default class DienThoaiItem extends Component {
  render() {
    let {thumbnail_url,name,price}=this.props.dienThoai;
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
    )
  }
}
