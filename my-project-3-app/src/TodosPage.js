import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';
import { Tabs } from "antd";
import { Button } from "antd";
import ToggleButton from "./ToggleButton";
import TodosList from "./TodosList";

const { TabPane } = Tabs;

const TASKS_STATUSES = ["All", "Active", "Completed"];

function TodosPage (props) {

    const [taskForm, showTaskForm] = useState(false);
    const [todo, setTodo] = useState("");

    const toggleForm = () => {
        showTaskForm(!taskForm);
    }

    const onChangeTodo = (event) => {
        setTodo(event.target.value);
    }

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
            {/* <ToggleButton/> */}

            <div className="flex justify-center mt-10">
            <button onClick={toggleForm} 
            className={"bg-green-500 hover:bg-green-700 text-white font-black py-2 px-4 rounded-full"}>
                +</button>
            </div>

            {taskForm && (
            <div className={"p-5 m-5 border md:m-12 lg:m-20"}>
                <div className={"flex justify-center items-center"}>
                    <input type="text" className={"p-2 mr-5 border rounded w-full"}
                    placeholder={"Task..."}
                    onChange={onChangeTodo}/>
                    <Button type="submit primary">Add</Button>
                </div>
            </div>
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