import React, { Component } from "react";
import "./styles/main.css";
import SearchBar from "./searchBar";
import WeatherCard from "./weathercard";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
      querySelect: "",
      data: {},
      isLoaded: false,
      error: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(searchText, query) {
    this.setState(
      {
        searchWord: searchText,
        querySelect: query
      },
      function getApiData() {
        let apiurl = "https://api.weatherbit.io/v2.0/current?";
        if (this.state.querySelect === "Lat,Lon") {
          const lat = this.state.searchWord.split(",")[0];
          const lon = this.state.searchWord.split(",")[1];

          apiurl += "lat=" + lat + "&lon=" + lon;
        } else if (this.state.querySelect === "City Name") {
          apiurl += "city=" + this.state.searchWord;
        } else {
          const post = this.state.searchWord.split(",")[0];
          const countryCode = this.state.searchWord.split(",")[1];
          apiurl += "postal_code=" + post + "&country=" + countryCode;
        }
        apiurl += "&key=APIKEY";
        fetch(apiurl)
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                data: result.data
              });
            },
            error => {
              this.setState({
                data: [],
                isLoaded: true,
                error
              });
            }
          );
      }
    );
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <SearchBar handleSearch={this.handleSearch} />
          <p className="error">Error: {this.state.error.message}</p>
        </div>
      );
    } else {
      if (Array.isArray(this.state.data)) {
        return (
          <div>
            <SearchBar handleSearch={this.handleSearch} />
            <WeatherCard data={this.state.data} error={this.state.error} />
          </div>
        );
      } else {
        return (
          <div>
            <SearchBar handleSearch={this.handleSearch} />
          </div>
        );
      }
    }
  }
}

export default Main;
