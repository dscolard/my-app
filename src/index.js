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
import Metrics from "./components/Metrics";
import References from "./components/References";

const routing = (
  <Router>
    <Route path="/" component={App} />
    <Route exact path="/" component={Metrics} />
    <Route path="/About" component={About} />
    <Route path="/References" component={References} />
    <Route path="/Metrics" component={Metrics} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
