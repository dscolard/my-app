import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// eslint-disable-next-line
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Features from "./components/DataQuality";
import Metrics from "./components/Metrics";

const routing = (
  <Router>
    <Route path="/" component={App} />
    <Route exact path="/" component={Metrics} />
    <Route path="/About" component={About} />
    <Route path="/DataQuality" component={Features} />
    <Route path="/Metrics" component={Metrics} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
