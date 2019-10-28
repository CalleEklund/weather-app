import React from "react";
import Header from "./header";
import Weathercard from "./weathercard"
import "./styles/main.css";
function main() {
  return (
    <div className="main-content">
      <Header />
      <Weathercard />
    </div>
  );
}

export default main;
