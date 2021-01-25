import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TASKS_STATUSES = ["Not Started", "Active", "Completed"];

function TodoItemCopy ({text, todo, todos, setTodos}) {
    
    // function onStatusChange(event) {
    //     props.onStatusChange(props.task.id, event.target.value)
    // }

    // function onRemoveTask() {
    //     props.onRemoveTask(props.task.id)
    // }
    
    //TEST TO BE DELETED LATER
    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    };

    return (
        <>
            <div>
                <form>
                    <li>
                        <input onClick={completeHandler} type="checkbox"></input>
                    </li>
                    <li>
                        <span className={todo.completed ? "line-through" : ""}>{text}</span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon 
                            icon={faTrash}
                            className="text-lg cursor-pointer" 
                            style={{color: "red"}}
                            onClick={deleteHandler}
                            />
                        </span>
                    </li>
                </form>
                
            </div>    
        </>
    )
}

export default TodoItemCopy;