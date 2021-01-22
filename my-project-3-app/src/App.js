import './App.css';
import React, {Component} from "react";
import Nav from "./Nav";
import "antd/dist/antd.css";
// import { createStore, combineReducers } from "redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About"
import Todos from "./Todos";
import Contact from "./Contact";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {value:"", items: []}
  }
  render() {
    return (
      <Router>
        <p class="flex justify-start font-bold text-lg">QuickStart Project 3 Task Manager</p>
        <Nav/>
  
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/todos">
            <Todos/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;