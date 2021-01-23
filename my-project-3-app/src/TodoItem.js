import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';

function TodoItem (props) {
    return (
        <div>
             <li className={'p-2'}>
                <input type="checkbox" className={"mr-1 align-middle"}/>
                <span>{props.task.todo}</span>
            </li>
        </div>
    )
}

export default TodoItem;