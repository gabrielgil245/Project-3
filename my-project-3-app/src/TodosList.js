import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';
import TodoItem from "./TodoItem"; 

function TodosList (props) {
    const [todos, setTodos] = useState([
        {text: "Task 1"},
        {text: "Task 2"},
        {text: "Task 3"}
    ]);
    
    return (
        <div className={"bg-gray-200 mt-5 p-5"}>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))}
                
                {/* {todos.map((task, index) => {
                    return <ListItem text={task.text} key={index}/>
                })} */}
            </ul>
        </div>
    )
}

export default TodosList;