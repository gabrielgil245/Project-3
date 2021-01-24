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
        <form onChange={onStatusChange}>
            <select defaultValue={props.task.status}>
                {TASKS_STATUSES.map(status => (
                    <option value={status} key={status}>{status}</option>
                ))}
            </select>
        </form>
             <li className={'p-2'}>
                 <div className="grid grid-cols-2">
                    <span className="flex justify-start">{props.task.todo}</span>
                    <span className="flex justify-end">
                        <FontAwesomeIcon 
                        icon={faTrash}
                        className="cursor-pointer" 
                        style={{color: "red"}}
                        onClick={() => onRemoveTask(props.task.id)}
                        />
                    </span>
                 </div>
            </li>
        </>
    )
}

export default TodoItem;