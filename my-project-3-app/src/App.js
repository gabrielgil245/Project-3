import './App.css';
import React, {useState, useEffect, Component} from "react";
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
import TodosList from "./TodosList";
import Contact from "./Contact";

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todo]);
  }

  return (
    <Router>
      <p class="flex justify-start font-bold text-lg">QuickStart Project 3 Task Manager</p>
              
      <Nav/>     

      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/todos">
          <Todos addTodo={addTodo}/>
          <TodosList todos={todos} />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;