import React, { Component } from "react";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    number: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      firstname: "",
      lastname: "",
      number: ""
    });
  };

  render() {
    const { firstname, lastname, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="George"
          name="First Name"
          value={firstname}
          onChange={this.handleChange}
        />
        <input
          placeholder="Martin"
          name="Last Name"
          value={lastname}
          onChange={this.handleChange}
        />
        <input
          placeholder="Number"
          name="number"
          value={number}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;