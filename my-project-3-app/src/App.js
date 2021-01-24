import './App.css';
import React from "react";
import {connect} from "react-redux";
import Nav from "./Nav";
import "antd/dist/antd.css";
import {createTask, editTask, removeTask} from "./actions/main";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import About from "./About"
import TodosPage from "./TodosPage";
import Contact from "./Contact";

function App(props) {

  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, {status}))
  }

  const onCreateTask = ({todo}) => {
    props.dispatch(createTask({todo}));
  }

  const onRemoveTask = (id) => {
    props.dispatch(removeTask(id))
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
          <TodosPage tasks={props.tasks} 
          onStatusChange={onStatusChange}
          onCreateTask={onCreateTask}
          onRemoveTask={onRemoveTask}/>
        </Route>
        <Redirect exact from= "/" to="/todos"/>
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
  };
};

export default connect(mapStateToProps)(App);