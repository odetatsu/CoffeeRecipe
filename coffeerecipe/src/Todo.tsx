import React from 'react';
import TodoItem from './TodoItem';


const Todo = ({ todo, toggleTodo }: { todo: TodoItem , toggleTodo: Function }) => {
    const handleTodoClick = () =>
    {
        toggleTodo(todo.RECIPE_KEY);
    }
    return (
        <div><label><input type="checkbox" checked={todo.ACTIVE_FLG} readOnly onChange={handleTodoClick } /></label>{todo.RECIPE_NAME}</div>
    );
};

export default Todo;
