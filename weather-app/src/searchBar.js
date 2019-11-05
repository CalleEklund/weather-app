import React, { Component } from "react";
import "./styles/searchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
      selected: "Lat,Lon"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleClick(e) {
    e.preventDefault();
    const searchBar = this.state.searchBar;
    const selected = this.state.selected;
    this.props.handleSearch(searchBar, selected);
  }
  render() {
    return (
      <form className="search-form">
        <h1 className="title">Weather info</h1>
        <h4 className="sub-title">
          Search By{" "}
          <select
            name="selected"
            onChange={this.handleChange}
            value={this.state.selectVal}
          >
            <option value="Lat,Lon">Lat,Lon</option>
            <option value="City Name">City Name</option>
            <option value="Postal Code,Country Code">Postal Code</option>
          </select>
        </h4>
        <div className="searchBar">
          <input
            type="text"
            name="searchBar"
            placeholder="Search..."
            value={this.state.searchBarVal}
            onChange={this.handleChange}
          />
          <button
            className="searchBtn"
            onClick={e => this.handleClick(e)}
            name="btn"
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
