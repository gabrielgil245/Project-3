import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';

const TASKS_STATUSES = ["All", "Active", "Completed"];

function TodoItem (props) {
    
    function onStatusChange(event) {
        props.onStatusChange(props.task.id, event.target.value)
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
                <input type="checkbox" className={"mr-1 align-middle"}/>
                <span>{props.task.todo}</span>
            </li>
        </>
    )
}

export default TodoItem;