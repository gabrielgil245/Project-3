import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';
import { Tabs } from "antd";
import ToggleButton from "./ToggleButton";
import AddButton from "./AddButton";
import TodosList from "./TodosList";
import TodoItem from "./TodoItem";

const { TabPane } = Tabs;

function Todos ({addTodo}) {

    const [taskForm, showTaskForm] = useState(false);

    const toggleForm = () => {
        showTaskForm(!taskForm)
    }

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(event) {
        setTodo({...todo, task: event.target.value});
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: todo.id});
            setTodo({...todo, task: ""});
        }
    }

    return (
        <div>
            <ToggleButton/>

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
                    <AddButton/>
                </div>
            </div>
            )}

            <TodosList todo={todo} />

            <form onSubmit={handleSubmit}>
                <input 
                    name="task" 
                    type="text" 
                    value={todo.task} 
                    placeholder="Task..."
                    onChange={handleTaskInputChange}
                    className="border rounded ml-5"/>
                    
                <button type="submit" className="border rounded bg-blue-400 text-white p-1 m-1">Add</button>
            </form>

            {/* <form onSubmit={handleSubmit}>
                <input 
                    name="task" 
                    type="text" 
                    value={todo.task} 
                    onChange={handleTaskInputChange}
                    className="border rounded"/>
                    
                <button type="submit" className="border rounded bg-blue-400 text-white p-1 m-1">Add</button>
            </form> */}
            
                                    
            <div className={"mt-10"}></div>
            
            <Tabs defaultActiveKey="1" type={"card"}>
                <TabPane tab="All" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Active" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Completed" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
            
            <div className={"mt-10"}></div>

        </div>
    );
}

export default Todos;