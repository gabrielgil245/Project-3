import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';
import { Button } from "antd";

function ToggleButton () {
    
    const [taskForm, showTaskForm] = useState(false);

    const toggleForm = () => {
        showTaskForm(!taskForm)
    }
    
    return (
        <div>
            <div className="flex justify-center mt-10">
                <button onClick={toggleForm} 
                className={"bg-green-500 hover:bg-green-700 text-white font-black py-2 px-4 rounded-full"}>
                    +</button>
            </div>
            
            {taskForm && (
            <div className={"p-5 m-5 border md:m-12 lg:m-20"}>
                <div className={"flex justify-center items-center"}>
                    <input type="text" className={"p-2 mr-5 border rounded w-full"}
                    placeholder={"Task..."}/>
                    <Button type="primary">Add</Button>
                </div>
            </div>
            )}
        </div>
    )
}

export default ToggleButton;