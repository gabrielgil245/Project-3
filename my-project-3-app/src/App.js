import './App.css';
import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import Nav from "./components/Nav";
import "antd/dist/antd.css";
import {createTask, editTask, removeTask} from "./actions/main";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import About from "./About"
import TodosPage from "./components/TodosPage";
import TodosList from "./components/TodosList";
import Contact from "./Contact";

function App(props) {

  // React-Redux
  // const onStatusChange = (id, status) => {
  //   props.dispatch(editTask(id, {status}))
  // }

  // const onCreateTask = ({todo}) => {
  //   props.dispatch(createTask({todo}));
  // }

  // const onRemoveTask = (id) => {
  //   props.dispatch(removeTask(id))
  // }

  // React Hooks
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } 
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  useEffect (() => {
    getLocalTodos();
  }, []);

  useEffect (() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <Router>
      <p class="flex justify-center md:justify-start p-2 m-2 font-bold text-lg md:text-3xl">
        React/Redux Todo List App
      </p>  
      <Nav/>     
      <Switch>
        <Route path="/Project-3/about">
          <About/>
        </Route>
        <Route path="/Project-3/todos">
          
          {/* Primarily React */}
          <TodosPage inputText={inputText} 
          setInputText={setInputText} 
          todos={todos} 
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}/>
          <TodosList
          todos={todos} 
          setTodos={setTodos}
          filteredTodos={filteredTodos}/>
          
          {/* React Redux */}
          {/* <TodosPage tasks={props.tasks} 
          onStatusChange={onStatusChange}
          onCreateTask={onCreateTask}
          onRemoveTask={onRemoveTask}/> */}
          
        </Route>
        <Redirect exact from= "/" to="/Project-3/todos"/>
        <Redirect exact from= "/Project-3/" to="/Project-3/todos"/>
        <Route path="/Project-3/contact">
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