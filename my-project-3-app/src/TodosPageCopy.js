import React, {useState} from 'react';
import TodosListCopy from './TodosListCopy';

//TEST TO BE DELETED
import { v4 as uuidv4 } from "uuid";

const TodosPageCopy = (props) => {
    
    const inputTextHandler = (event) => {
        console.log(event.target.value);
        props.setInputText(event.target.value);
        // if setInputText takes the place of the parameters, 
        // then props not needed
    };
    const submitTodoHandler = (event) => {
        event.preventDefault();
        props.setTodos([
            ...props.todos, 
            {text: props.inputText, completed: false, id: uuidv4()}
        ]);
        props.setInputText("");
    }
    const statusHandler = (event) => {
        props.setStatus(event.target.value)
    }

    return (
        <form>
            <input value={props.inputText} onChange={inputTextHandler} type="text" className="border" />
            <button onClick={submitTodoHandler} type="submit">
                Add
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos">
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
                </select>
            </div>
        </form>
    )
}

export default TodosPageCopy;