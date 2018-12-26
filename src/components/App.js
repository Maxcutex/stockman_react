import React, { Component } from "react";
import "../App.css";
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import PriceBar from "./common/PriceBar";
import Header from "./common/Header";
import Home from "./Home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <PriceBar />
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
