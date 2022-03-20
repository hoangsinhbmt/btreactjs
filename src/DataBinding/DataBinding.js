import React, { Component } from 'react'

export default class DataBinding extends Component {
   username = "Sinh";
   job = "Dev";
   renderContent = () =>{
     <div>Hello {this.username} - Job: {this.job}</div>
  }
  render() {
    return (
        <div>
         {this.renderContent()}
        </div>
    )
  }
}
