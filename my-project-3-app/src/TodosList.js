import React from 'react';
import TodoItem from "./TodoItem";

const TodosList = (props) => {
    return (
        <div className={"bg-gray-200"}>
            <ul>
                <div className={"pl-2"}>
                    {props.status}
                </div>
                {props.tasks.map(task => (
                    <TodoItem key={task.id} 
                    task={task} 
                    onStatusChange={props.onStatusChange}/>    
                ))}               
            </ul>
        </div>
    )
}

export default TodosList;