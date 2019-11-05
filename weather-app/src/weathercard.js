import React, { Component } from "react";
class WeatherCard extends Component {
  render() {
    const short = this.props.data[0];
    const weatherpic =
      "https://www.weatherbit.io/static/img/icons/" +
      short.weather.icon +
      ".png";
    return (
      <div className="weather-card">
        <ol>
          <h4>
            {short.city_name}, {short.country_code}
          </h4>
          <li>Temp (Feels like): {short.app_temp}°C</li>
          <li>Wind speed: {short.wind_spd}m/s</li>
          <li>Pressure: {short.pres}</li>
          <li>Last Observation time: {short.ob_time.slice(5)}</li>
          <li>Cloudiness: {short.clouds}</li>
          <li>Description: {short.weather.description}</li>
        </ol>
        <img src={weatherpic} alt="Weather" />
      </div>
    );
  }
}
export default WeatherCard;
