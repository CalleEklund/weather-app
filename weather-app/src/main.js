import React from "react";
import Header from "./header";
import Weathercard from "./weathercard"
import "./main.css";
function main() {
  return (
    <React.Fragment>
      <Header />
      <Weathercard />
    </React.Fragment>
  );
}

export default main;
