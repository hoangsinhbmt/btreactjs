import { Modal, Button } from "antd";
import Item from "antd/lib/list/Item";
import React, { Component } from "react";

export default class ModelGioHang extends Component {
  state = {
    isModalVisible: false,
  };
  showModal = () => {
    // setIsModalVisible(true);
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    // setIsModalVisible(false);
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    // setIsModalVisible(false);
    this.setState({ isModalVisible: false });
  };
  renderSanPham = () => {
    console.log(this.props.gioHang);
    return this.props.gioHang.map((sp) => {
      return (
        <tr>
          <td>{sp.id}</td>
          <td>
            <img src={sp.thumbnail_url} />
          </td>
          <td>{sp.name}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleThayDoiSOLuong(sp.id  * -1);
              }}
            >
              -
            </button>
            {sp.soluong}
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.handleThayDoiSOLuong(sp.id);
              }}
            >
              +
            </button>
          </td>
          <td>
            {sp.price.toLocaleString()}
          </td>
          <td>
            {(sp.price*sp.soluong).toLocaleString()}
          </td>
        </tr>
      );
    });
  };
  renderSoLuong = ()=>{
    let count=0;
    this.props.gioHang.forEach((item) =>{
      count += item.soluong;
    });
    return count;
  };
  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Giỏ hàng
          ({this.renderSoLuong()})
        </Button>
        <Modal
          title="Giỏ hàng"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
        >
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã sản phẩn</th>
                  <th>Hình</th>
                  <th>Tên</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderSanPham()}</tbody>
            </table>
          </div>
        </Modal>
      </>
    );
  }
}
