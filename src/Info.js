import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  static defaultProps = {
    info: {
      firstname: "George",
      lastname: "Martin",
      number: "000-000-0000"
    }
  };
  render() {
    const { firstname, lastname, number } = this.props.info;
    return (
      <div className="Info">
        <div className="Info-firstname">{firstname}</div>
        <div className="Info-lastname">{lastname}</div>
        <div className="Info-number">{number}</div>
        <button className="Info-button-modify">Modify</button>
        <button className="Info-button-delete">Delete</button>
      </div>
    );
  }
}

export default Info;