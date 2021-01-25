import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    };

    return (
        <form>
            <li className={"grid grid-cols-9 gaps-3 p-4 bg-gray-200"}>
                <div className="flex justify-center items-center col-span-1">
                    <input onClick={completeHandler} 
                    type="checkbox"
                    className={"cursor-pointer"}></input>
                </div>
                <div className={"flex items-center col-span-7 break-all font-semibold"}>
                    <span className={todo.completed ? "line-through" : ""}>
                        {text}
                    </span>
                </div>
                <div className={"flex justify-center col-span-1"}>
                    <span className={"flex items-center"}>
                        <FontAwesomeIcon 
                        icon={faTrash}
                        className="text-xl cursor-pointer" 
                        style={{color: "red"}}
                        onClick={deleteHandler}
                        />
                    </span>
                </div>
            </li>
        </form>
    )
}

export default TodoItem;

// React-Redux
// const TASKS_STATUSES = ["Not Started", "Active", "Completed"];
// function TodoItem (props) {
//     function onStatusChange(event) {
//         props.onStatusChange(props.task.id, event.target.value)
//     }
//     function onRemoveTask() {
//         props.onRemoveTask(props.task.id)
//     }
//     return (
//         <>
//             <div>
//                 <form className={"grid grid-cols-6 flex items-center p-2"} onChange={onStatusChange}>
//                     <select className={"col-span-2 text-sm"} defaultValue={props.task.status}>
//                         {TASKS_STATUSES.map(status => (
//                             <option className={"text-xs"} value={status} key={status}>{status}</option>
//                         ))}
//                     </select>
//                     <li className={'col-span-3 p-2'}>
//                         <span>{props.task.todo}</span>
//                     </li>
//                     <li className={'col-span-1 flex justify-end p-2'}>
//                         <span>
//                             <FontAwesomeIcon 
//                             icon={faTrash}
//                             className="text-lg cursor-pointer" 
//                             style={{color: "red"}}
//                             onClick={() => onRemoveTask(props.task.id)}
//                             />
//                         </span>
//                     </li>
//                 </form>
                
//             </div>    
//         </>
//     )
// }
// export default TodoItem;