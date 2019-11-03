import React, { Component } from "react";
import ReactDOM from "react-dom";

const DATA = {
  data: [
    {
      rh: 46,
      pod: "d",
      lon: -78.63861,
      pres: 1005,
      timezone: "America/New_York",
      ob_time: "2019-11-02 21:00",
      country_code: "US",
      clouds: 100,
      ts: 1572728400,
      solar_rad: 38.1,
      state_code: "NC",
      city_name: "Raleigh",
      wind_spd: 0.45,
      last_ob_time: "2019-11-02T21:00:00",
      wind_cdir_full: "west-southwest",
      wind_cdir: "WSW",
      slp: 1017.3,
      vis: 5,
      h_angle: 60,
      sunset: "22:18",
      dni: 572.88,
      dewpt: 4.4,
      snow: 0,
      uv: 1.00717,
      precip: 0,
      wind_dir: 249,
      sunrise: "11:38",
      ghi: 190.45,
      dhi: 63.9,
      aqi: 37,
      lat: 35.7721,
      weather: { icon: "c01d", code: "800", description: "Clear sky" },
      datetime: "2019-11-02:21",
      temp: 16.1,
      station: "1327W",
      elev_angle: 13.57,
      app_temp: 16.1
    }
  ],
  count: 1
};
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
      selected: "Lat/Lon"
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
      <form>
        <h1 className="title">Weather info</h1>
        <h4 className="sub-title">
          Search By{" "}
          <select
            name="selected"
            onChange={this.handleChange}
            value={this.state.selectVal}
          >
            <option value="Lat,Lon">Lat/Lon</option>
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
          >
            Click!
          </button>
        </div>
      </form>
    );
  }
}
/*
    
      
      */
class WeatherCard extends Component {
  render() {
    //console.log(this.props.data[0]);
    return <div className="weather-card"></div>;
  }
  /*
      const short = this.props.data.data[0];
      const weatherpic =
        "https://www.weatherbit.io/static/img/icons/" +
        short.weather.icon +
        ".png";
      return (
        <div className="weather-card">
          <ol>
            <li>Temp (Feels like): {short.app_temp}°C</li>
            <li>Wind speed: {short.wind_spd}m/s</li>
            <li>Pressure: {short.pres}</li>
            <li>Last Observation time: {short.ob_time.slice(5)}</li>
            <li>Cloudiness: {short.clouds}</li>
          </ol>
          <img src={weatherpic} alt="Weather" />
        </div>
      );*/
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
      querySelect: "",
      data: {},
      isLoaded: false,
      error: null
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
          apiurl += "&lat=" + lat + "&lon=" + lon;
        } else if (this.state.querySelect === "City Name") {
          apiurl += "&city=" + this.state.searchWord;
        } else {
          const post = this.state.searchWord.split(",")[0];
          const countryCode = this.state.searchWord.split(",")[1];
          apiurl += "&postal_code=" + post + "&country=" + countryCode;
        }
        apiurl += "&key=63bcd73a709f4efd937739832f624b9c";
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
    console.log(this.state.data);
    return <SearchBar handleSearch={this.handleSearch} />;
    /*
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch} />
        <WeatherCard
          data={this.state.data}
          error={this.state.error}
          isLoaded={this.state.isLoaded}
        />
      </div>
    );*/
  }
}

ReactDOM.render(
  <div>
    <Main />
  </div>,
  document.getElementById("root")
);
