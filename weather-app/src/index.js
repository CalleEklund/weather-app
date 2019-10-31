import React, { Component } from 'react';    
import ReactDOM from "react-dom";

class SearchBar extends Component {
    render() { 
        return ( 
            <form>
                <h1 className="title">Weather info</h1>
                <h4 className="sub-title">Search By 
                <select
                name="selectedValue"
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
                    placeholder="Search..."
                />
                <button className="searchBtn">Click!</button>
                </div>
            </form>
         );
    }
}

class WeatherCard extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="weather-card">
            <ol>
            <li>Temp (Feels like): {items.data[0].app_temp}°C</li>
            <li>Wind speed: {items.data[0].wind_spd}m/s</li>
            <li>Pressure: {items.data[0].pres}</li>
            <li>Last Observation time: {items.data[0].ob_time.slice(5)}</li>
            <li>Cloudiness: {items.data[0].clouds}</li>
            </ol>
            <img src={search.png} alt="Weather"/>
      </div> );
    }
}
 




ReactDOM.render(<div>
                <SearchBar/>
                <WeatherCard data={this.props.data}/>
                </div>, document.getElementById("root"));

const DATA = [{"data":[{"rh":92,"pod":"d","lon":-78.63861,"pres":1001.1,"timezone":"America\/New_York","ob_time":"2019-10-31 12:20","country_code":"US","clouds":75,"ts":1572524400,"solar_rad":21.7,"state_code":"NC","city_name":"Raleigh","wind_spd":4.02,"last_ob_time":"2019-10-31T12:20:00","wind_cdir_full":"southwest","wind_cdir":"SW","slp":1016.5,"vis":5,"h_angle":-75,"sunset":"22:20","dni":224.77,"dewpt":21.5,"snow":0,"uv":1.20576,"precip":0,"wind_dir":215,"sunrise":"11:36","ghi":32.87,"dhi":28.3,"aqi":25,"lat":35.7721,"weather":{"icon":"c04d","code":"804","description":"Overcast clouds"},"datetime":"2019-10-31:12","temp":22.8,"station":"0425W","elev_angle":3.57,"app_temp":23.6}],"count":1}]

