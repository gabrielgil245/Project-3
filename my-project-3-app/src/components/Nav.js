import React from 'react';
import {
    NavLink
} from "react-router-dom";

function Nav (props) {
    return (
        <div>
            <div className={"grid grid-cols-9 bg-blue-400 text-lg"}>
                <span className={"col-span-3 flex justify-center py-2"}>
                    <NavLink to="/about" activeClassName="font-bold">
                        <span className={"cursor-point text-white hover:underline"}>About</span>
                    </NavLink>
                </span>
                <span className={"col-span-3 flex justify-center py-2"}>
                    <NavLink to="/todos" activeClassName="font-bold">
                        <span className={"cursor-point text-white hover:underline"}>Todos</span>
                    </NavLink>
                </span>
                <span className={"col-span-3 flex justify-center py-2"}>
                    <NavLink to="/contact" activeClassName="font-bold">
                        <span className={"cursor-point text-white hover:underline"}>Contact</span>
                    </NavLink>
                </span>
            </div>
        </div>
    );
}

export default Nav;