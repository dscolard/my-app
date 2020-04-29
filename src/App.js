import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import firebase from "firebase";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}
export default App;
