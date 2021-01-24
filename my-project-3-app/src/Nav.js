import React from 'react';
import {
    NavLink
} from "react-router-dom";

function Nav (props) {
    return (
        <div>
            <div className={"grid grid-cols-9 py-2 bg-blue-400 text-lg"}>
                <span className={"col-span-3 flex justify-center"}>
                    <NavLink to="/about" activeClassName="font-bold">
                        <span className={"cursor-point text-white"}>About</span>
                    </NavLink>
                </span>
                <span className={"col-span-3 flex justify-center"}>
                    <NavLink to="/todos" activeClassName="font-bold">
                        <span className={"cursor-point text-white"}>Todos</span>
                    </NavLink>
                </span>
                <span className={"col-span-3 flex justify-center"}>
                    <NavLink to="/contact" activeClassName="font-bold">
                        <span className={"cursor-point text-white"}>Contact</span>
                    </NavLink>
                </span>
            </div>
        </div>
    );
}

export default Nav;