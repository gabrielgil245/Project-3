import './App.css';
import React, {useState, useEffect} from "react";
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

//TEST TO BE DELETED LATER
import TodosPageCopy from "./TodosPageCopy";
import TodosListCopy from "./TodosListCopy";

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

  //TEST TO BE DELETED LATER 
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
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/todos">
          <TodosPage tasks={props.tasks} 
          onStatusChange={onStatusChange}
          onCreateTask={onCreateTask}
          onRemoveTask={onRemoveTask}/>
          {/* <TodosPageCopy inputText={inputText} 
          setInputText={setInputText} 
          todos={todos} 
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}/>
          <TodosListCopy
          todos={todos} 
          setTodos={setTodos}
          filteredTodos={filteredTodos}/> */}
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