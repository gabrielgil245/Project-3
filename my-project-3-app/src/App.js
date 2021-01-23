import './App.css';
import React, {useState, useEffect, Component} from "react";
import {connect} from "react-redux";
import Nav from "./Nav";
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from "./About"
import Todos from "./Todos";
import Contact from "./Contact";

function App(props) {

  return (
    <Router>
      <p class="flex justify-start font-bold text-lg">QuickStart Project 3 Task Manager</p>
              
      <Nav/>     

      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/todos">
          <Todos tasks={props.tasks}/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);