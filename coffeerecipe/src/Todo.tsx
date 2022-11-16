import React from 'react';
import TodoItem from './TodoItem';


const Todo = ({ todo, toggleTodo }: { todo: TodoItem , toggleTodo: Function }) => {
    const handleTodoClick = () =>
    {
        toggleTodo(todo.id);
    }
    return (
        <div><label><input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick } /></label>{todo.name}</div>
    );
};

export default Todo;
