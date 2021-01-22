import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';
import {
    Link,
    NavLink
} from "react-router-dom";

function Nav (props) {
    return (
        <div>
            <div className={"flex justify-center items-center p-2 bg-blue-400 text-lg"}>
                <span>
                    <NavLink to="/about" activeClassName="font-bold">
                        <span className={"p-10 cursor-point text-white"}>About</span>
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/todos" activeClassName="font-bold">
                        <span className={"p-10 cursor-point text-white"}>Todos</span>
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/contact" activeClassName="font-bold">
                        <span className={"p-10 cursor-point text-white"}>Contact</span>
                    </NavLink>
                </span>
            </div>
        </div>
    );
}

export default Nav;