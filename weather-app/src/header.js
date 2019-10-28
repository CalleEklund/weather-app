import React, { Component } from "react";
import "./styles/header.css";

class header extends Component {
  constructor() {
    super();
    this.state = {
      searchBar: "",
      selectedValue: "Lat/Lon",
      isPressed: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    var data = [this.state.searchBar,this.state.selectedValue];
    this.props.onSelectQuery(data);
    //console.log(this.state.selectedValue,this.state.searchBar);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ 
     [name]: value
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="title">Weather info</h1>
        <h4 className="sub-title">Search By 
        <select
        name="selectedValue"
        value={this.state.value}
        onChange={this.handleChange}
        >
          <option value="Lat/Lon">Lat/Lon</option>
          <option value="City Name">City Name</option>
          <option value="Postal Code">Postal Code</option>
        </select>
        </h4>
        <div className="searchBar">
          <input
            type="text"
            name="searchBar"
            value={this.state.searchBox}
            onChange={this.handleChange}
          />
          <button className="searchBtn"/>
        </div>
      </React.Fragment>
    );
  }
}

export default header;
