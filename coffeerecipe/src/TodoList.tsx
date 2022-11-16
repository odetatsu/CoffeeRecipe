import React from 'react';
import Todo from './Todo';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }: { todos: TodoItem[],toggleTodo:Function }) => {
    return <>
        {todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />)}
        </>
};

export default TodoList;
