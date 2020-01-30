import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import About from './components/About';
import Features from './components/Features';
import Home from './components/home';
import FAQ from './components/FAQ';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/About" component={About} />
        <Route path="/Features" component={Features} />
        <Route path="/FAQ" component={FAQ}/>
      </div>
    </Router>
  )


  ReactDOM.render(routing, document.getElementById('root'))
  serviceWorker.unregister();
