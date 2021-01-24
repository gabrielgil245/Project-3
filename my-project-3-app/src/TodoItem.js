import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TASKS_STATUSES = ["All", "Active", "Completed"];

function TodoItem (props) {
    
    function onStatusChange(event) {
        props.onStatusChange(props.task.id, event.target.value)
    }

    function onRemoveTask() {
        props.onRemoveTask(props.task.id)
    }
    
    return (
        <>
            <div>
                <form className={"grid grid-cols-6 flex items-center p-2"} onChange={onStatusChange}>
                    <select className={"col-span-2 text-sm"} defaultValue={props.task.status}>
                        {TASKS_STATUSES.map(status => (
                            <option className={"text-xs"} value={status} key={status}>{status}</option>
                        ))}
                    </select>
                    <li className={'col-span-3 p-2'}>
                        <span>{props.task.todo}</span>
                    </li>
                    <li className={'col-span-1 flex justify-end p-2'}>
                        <span>
                            <FontAwesomeIcon 
                            icon={faTrash}
                            className="text-lg cursor-pointer" 
                            style={{color: "red"}}
                            onClick={() => onRemoveTask(props.task.id)}
                            />
                        </span>
                    </li>
                </form>
                
            </div>    
        </>
    )
}

export default TodoItem;