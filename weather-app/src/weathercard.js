import React, { Component } from "react";
import "./styles/weathercard.css"
class weathercard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: true,
        items: []
      };
    }
  
/*Weather test case (key => 63bcd73a709f4efd937739832f624b9c):
    https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=63bcd73a709f4efd937739832f624b9c

*/
componentDidMount() {
  this.test()
}
test(){
  fetch('https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=63bcd73a709f4efd937739832f624b9c')
  .then(response => response.json())
  .then(data => this.setState({ 
    isLoaded: false,
    items: data
   }));
}
/**
 * What the weathercard is supposed to display:
 * temp: Temperature (default Celcius).
 * app_temp: Apparent/"Feels Like" temperature (default Celcius).
 * wind_spd: Wind speed (Default m/s).
 * pres: Pressure (mb). 
 * ob_time: Last observation time (YYYY-MM-DD HH:MM).
 * clouds: Cloud coverage (%).
 */
render() { 
  const {isLoaded, items } = this.state;
    if(isLoaded){
      return (<div>Loading...</div>)
    }
    if(!items){
      return (<div>Did not get any response from API</div>)
    }
    //console.log(items.data[0]);
    const weatherpic = "https://www.weatherbit.io/static/img/icons/"+items.data[0].weather.icon+".png";
    //console.log(weatherpic);
  return (
    <React.Fragment>
      
    <div className="weather-card">
      <ol>
        <li>Temp (Feels like): {items.data[0].app_temp}°C</li>
        <li>Wind speed: {items.data[0].wind_spd}m/s</li>
        <li>Pressure: {items.data[0].pres}</li>
        <li>Last Observation time: {items.data[0].ob_time.slice(5)}</li>
        <li>Cloudiness: {items.data[0].clouds}</li>
      </ol>
      <img src={weatherpic} alt="Weather"/>
      
    </div>
    </React.Fragment>
  );
}
  }

  export default weathercard