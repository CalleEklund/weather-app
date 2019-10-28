import React, { Component } from 'react';
import Header from "./header";
import Weathercard from "./weathercard"
import "./styles/main.css";

class Main extends Component {
  constructor(props){
    super(props);
  }
  state = { inputData: [], }

  handleData = (input) => {
    this.setState({inputData:input});    
  }

  render() { 
    return ( 
  <div className="main-content">
    <Header onSelectQuery={this.handleData}/>
    
    <Weathercard />
  </div> );
  }
}
 
export default Main;