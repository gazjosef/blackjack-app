import React, { Component } from "react";
import NavBar from "./components/layout/NavBar/NavBar";
import Dealer from "./components/Dealer/Dealer";
import Player from "./components/Player/Player";
import Buttons from "./components/Buttons/Buttons";
import Rules from "./components/Rules/Rules";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Dealer />
        <Player />
        <Buttons />
        <Rules />
      </div>
    );
  }
}

export default App;
