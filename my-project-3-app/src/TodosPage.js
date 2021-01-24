import React, {useState} from 'react';
import TodosList from "./TodosList";

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
        resetForm();
    }

    const resetForm = () => {
        setTodo("")
        showForm(false);
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
                    onStatusChange={props.onStatusChange}
                    onRemoveTask={props.onRemoveTask}/>
                </div>
            )
        })
    }  

    return (
        <div>
            <div className="flex justify-center m-10">
            <button onClick={toggleButton} 
            className={"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"}>
                Add Todo</button>
            </div>

            {form && (
            // Test onSubmit on another element
            <form onSubmit={onCreateTask} className={"border p-3 m-2 md:m-12"}>
                <div className={"grid grid-cols-12 gap-x-4"}>
                    <input type="text" className={"col-span-9 p-2 mr-5 border rounded w-full"}
                    placeholder={"Task..."}
                    onChange={onChangeTodo}/>
                    <button className={"col-span-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} type="submit">Add</button>
                </div>
            </form>
            )}
            
            <div className="break-words grid md:grid-cols-3">
                {renderTaskLists()}
            </div>                                    

            <div className={"mt-10"}></div>
        </div>
    );
}

export default TodosPage;