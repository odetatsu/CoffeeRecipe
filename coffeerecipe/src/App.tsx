import React from 'react';
import TodoList from './TodoList';
import { useState, useRef } from "react";
import TodoItem from './TodoItem';
import {v4 as uuidv4 } from 'uuid'
function App() {

    const [todos, setTodos] = useState<TodoItem[]>([]);

    const todoNameRef = useRef<HTMLInputElement>(null);


    const handleAddTodo = () => {
        //タスクを追加。
        let todoCopy = todos.slice(0);

        const newname: string = todoNameRef.current?.value as string;
        let newTodoItem: TodoItem = { id: uuidv4(), name: newname, completed:false };
 

        todoCopy.push(newTodoItem);

        setTodos(todoCopy);
    };

    const toggleTodo = (id:string) => {
        const newTodos = todos.slice(0);
        const todo: TodoItem = todos.find((todo) => todo.id === id) as TodoItem;
        todo.completed = !todo.completed;
        setTodos(newTodos);

    }
    const handleClear = () =>
    {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);

    }
  return (
      <div>
          <TodoList todos={todos} toggleTodo={toggleTodo }/>
          <input type="text" ref={todoNameRef}/>
          <button onClick={handleAddTodo } >add task</button>
          <button onClick={handleClear}>delete complete task</button>
          <div>tasks:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
