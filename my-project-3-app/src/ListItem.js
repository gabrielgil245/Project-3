import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';

function ListItem (props) {
    console.log(props)
    return (
        <div>
            <li className={'p-2 border-b'}>
                <input type="checkbox" className={"mr-1 align-middle"}/>
                <span className={"text-gray-700 font-semibold"}>{props.text}</span>
            </li>
        </div>
    )
}

export default ListItem;