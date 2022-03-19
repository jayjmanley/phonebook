import React, { Component } from "react";
import Info from "./Info";

class List extends Component {
  static defaultProps = {
    data: []
  };

  render() {
    const { data } = this.props;
    const list = data.map(info => <Info key={info.id} info={info} />);
    return <div className="List">{list}</div>;
  }
}

export default List;