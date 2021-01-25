import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";

const TodosPage = (props) => {
    const inputTextHandler = (event) => {
        console.log(event.target.value);
        props.setInputText(event.target.value);
        // if setInputText takes the place of the parameters, 
        // then props not needed
    };
    const submitTodoHandler = (event) => {
        event.preventDefault();
        props.setTodos([
            ...props.todos, 
            {text: props.inputText, completed: false, id: uuidv4()}
        ]);
        props.setInputText("");
    }
    const statusHandler = (event) => {
        props.setStatus(event.target.value)
    }

    return (
        <div>
            <form className={"grid grid-cols-12 gap-3 border p-4 m-3 my-7 md:m-10"}>
                <input value={props.inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className={"col-span-12 md:col-span-11 p-1 border"}
                placeholder={"Task..."}/>
                <button onClick={submitTodoHandler} 
                type="submit"
                className={"col-start-5 col-span-4 md:col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded cursor-pointer"}>
                    Add
                </button>
            </form>
            <div className={"grid grid-cols-12 mt-3"}>
                <button onClick={statusHandler} 
                value="All"
                className={"col-span-4 bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white font-bold p-1"}>
                    All
                </button>
                <button onClick={statusHandler} 
                value="Active"
                className={"col-span-4 bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white font-bold p-1"}>
                    Active
                </button>
                <button onClick={statusHandler} 
                value="Completed"
                className={"col-span-4 bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white font-bold p-1"}>
                    Completed
                </button>
            </div>
        </div>
    )
}

export default TodosPage;

// React-Redux
// const TASKS_STATUSES = ["Not Started", "Active", "Completed"];
//
// function TodosPage (props) {
//     const [form, showForm] = useState(false);
//     const [todo, setTodo] = useState("");
//     const toggleButton = () => {
//         showForm(!form);
//     }
//     const onChangeTodo = (event) => {
//         setTodo(event.target.value);
//     }
//     const onCreateTask = (event) => {
//         props.onCreateTask({
//             todo
//         });
//         event.preventDefault();
//         resetForm();
//     }
//     const resetForm = () => {
//         setTodo("")
//         showForm(false);
//     }
//     const renderTaskLists = () => {
//         const {tasks} = props;
//         return TASKS_STATUSES.map((status, id) => {
//             const statusTasks = tasks.filter(task => task.status === status);
//             return (
//                 <div key={id}>
//                     <TodosList 
//                     key={status} 
//                     status={status} 
//                     tasks={statusTasks}
//                     onStatusChange={props.onStatusChange}
//                     onRemoveTask={props.onRemoveTask}/>
//                 </div>
//             )
//         })
//     }  
//     return (
//         <div>
//             <div className={"flex justify-center m-10"}>
//             <button onClick={toggleButton} 
//             className={"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"}>
//                 Add Todo</button>
//             </div>
//             {form && (
//             // Test onSubmit on another element
//             <form onSubmit={onCreateTask} className={"border p-3 m-2 md:m-12"}>
//                 <div className={"grid grid-cols-12 gap-x-4"}>
//                     <input type="text" className={"col-span-9 p-2 mr-5 border rounded w-full"}
//                     placeholder={"Task..."}
//                     onChange={onChangeTodo}/>
//                     <button className={"col-span-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} type="submit">Add</button>
//                 </div>
//             </form>
//             )}    
//             <div className="break-words grid md:grid-cols-3 gap-4">
//                 {renderTaskLists()}
//             </div>                                    
//             <div className={"mt-10"}></div>
//         </div>
//     );
// }
// export default TodosPage;