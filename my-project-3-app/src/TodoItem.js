import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';

function TodoItem (todo) {
    console.log(todo)
    return (
        <div>
            <li className={'p-2 border-b'}>
                <input type="checkbox" className={"mr-1 align-middle"}/>
                <li 
                    style={{
                        textDecoration: todo.completed ? 
                        "line-through" : null
                    }}
                    className={"text-gray-700 font-semibold"}>{todo.task}</li>
                <button>X</button>
            </li>
        </div>
    )
}

export default TodoItem;