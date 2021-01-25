import React from 'react';
import TodoItemCopy from './TodoItemCopy';

const TodosListCopy = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className={"bg-gray-200"}>
            <ul>
                {filteredTodos.map(todo => (
                    <TodoItemCopy todos={todos}  
                    setTodos={setTodos} 
                    todo={todo}
                    text={todo.text} 
                    key={todo.id}/>
                ))}
            </ul>
        </div>
    )
}

export default TodosListCopy;