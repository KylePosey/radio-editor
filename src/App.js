import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

import Main from "./pages";
import Projects from "./pages/projects"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends React.Component {


  render() {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>

    );
  }
}

export default App;
