import React, {useState, useEffect} from 'react';
import { Tabs } from "antd";
import TodosList from "./TodosList";

const { TabPane } = Tabs;

const TASKS_STATUSES = ["All", "Active", "Completed"];

function TodosPage (props) {

    const [form, showForm] = useState(false);
    const [todo, setTodo] = useState("");

    const toggleButton = () => {
        showForm(!form);
    }

    const onChangeTodo = (event) => {
        setTodo(event.target.value);
    }

    const onCreateTask = (event) => {
        props.onCreateTask({
            todo
        });
        event.preventDefault();
    };

    const renderTaskLists = () => {
        const {tasks} = props;
        return TASKS_STATUSES.map((status, id) => {
            const statusTasks = tasks.filter(task => task.status === status);
            return (
                <div key={id}>
                    <TodosList 
                    key={status} 
                    status={status} 
                    tasks={statusTasks}
                    onStatusChange={props.onStatusChange}/>
                </div>
            )
        })
    }  

    return (
        <div>
            <div className="flex justify-center mt-10">
            <button onClick={toggleButton} 
            className={"bg-green-500 hover:bg-green-700 text-white font-black py-2 px-4 rounded-full"}>
                +</button>
            </div>

            {form && (
            // Test onSubmit on another element
            <form onSubmit={onCreateTask} className={"p-5 m-5 border md:m-12 lg:m-20"}>
                <div className={"flex justify-center items-center"}>
                    <input type="text" className={"p-2 mr-5 border rounded w-full"}
                    placeholder={"Task..."}
                    onChange={onChangeTodo}/>
                    <button type="submit">Add</button>
                </div>
            </form>
            )}
            
            <div>
                {renderTaskLists()}
            </div>                                    

            <div className={"mt-10"}></div>
            
            <Tabs defaultActiveKey="1" type={"card"}>
                <TabPane tab="All" key="All">
                    {/* {renderTaskLists()} */}
                </TabPane>
                <TabPane tab="Active" key="Active">
                    {/* {renderTaskLists()} */}
                </TabPane>
                <TabPane tab="Completed" key="Completed">
                    {/* {renderTaskLists()} */}
                </TabPane>
            </Tabs>
            
            <div className={"mt-10"}></div>

        </div>
    );
}

export default TodosPage;