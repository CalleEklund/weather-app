import React, { Component } from "react";
import "./styles/header.css";

class header extends Component {
  constructor() {
    super();
    this.state = {
      searchBox: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(this.state.searchBox);
  }
  handleChange(e) {
    this.setState({ searchBox: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="title">Weather info</h1>
        <div className="searchBar">
          <input
            type="text"
            name="searchBar"
            value={this.state.searchBox}
            onChange={this.handleChange}
          />
          <button className="searchBtn" onClick={this.handleSubmit} />
        </div>
      </React.Fragment>
    );
  }
}

export default header;
