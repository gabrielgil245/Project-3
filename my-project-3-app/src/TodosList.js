import React from 'react';
import TodoItem from "./TodoItem";

const TodosList = (props) => {
    return (
        <div className={"bg-gray-200"}>
            <ul>
                <div className={"flex justify-center text-lg font-bold bg-gray-400"}>
                    {props.status}
                </div>
                {props.tasks.map(task => (
                    <TodoItem key={task.id} 
                    task={task} 
                    onStatusChange={props.onStatusChange}
                    onRemoveTask={props.onRemoveTask}/>    
                ))}               
            </ul>
        </div>
    )
}

export default TodosList;