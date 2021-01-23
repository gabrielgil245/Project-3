import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';
import TodoItem from "./TodoItem";

const TodosList = (props) => {
    return (
        <div className={"bg-gray-200"}>
            <ul>
                {props.tasks.map(task => (
                    <TodoItem key={task.id} task={task}/>    
                ))}               
            </ul>
        </div>
    )
}

export default TodosList;