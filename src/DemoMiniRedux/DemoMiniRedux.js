import React, { Component } from "react";
import { connect } from "react-redux";

class DemoMiniRedux extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.props.tangSoLuong}>Tăng</button>
        <span>{this.props.number}</span>
        <button className="btn btn-danger" onClick={this.props.giamSoLuong}>Giảm</button>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    number: state.numberReducer.number,
  };
};
let mapDispatchToProps=(dispatch)=>{
  return {
    tangSoLuong:()=>{
      dispatch({
        type:"Tăng",
        payload: 5,
      })
    },
    giamSoLuong:()=>{
      dispatch({
        type:"Giảm",
        payload: 5,
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DemoMiniRedux);
