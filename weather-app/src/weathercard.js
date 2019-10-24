import React, { Component } from "react";

class weathercard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
/*Weather test case (key => 63bcd73a709f4efd937739832f624b9c):
    https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=63bcd73a709f4efd937739832f624b9c

*/
componentDidMount() {
  fetch("https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=63bcd73a709f4efd937739832f624b9c")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

render() {
  const { error, isLoaded, items } = this.state;
  return (
    <React.Fragment>
    <h1>Test</h1>
    {console.log(items)}
    
    </React.Fragment>
  );
}
  }

  export default weathercard