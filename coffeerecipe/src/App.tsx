import React, { useCallback, useMemo, useReducer } from 'react';
import TodoList from './TodoList';
import { useState, useRef, useEffect } from "react";
import TodoItem from './TodoItem';
import {v4 as uuidv4 } from 'uuid'
import { Action } from '@reduxjs/toolkit';
import useLocalStrage from './useLocalStrage';

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
    useEffect(() => {
        console.log("hello hooks");
    }, [todos])

    const reducer = (state: number, action: Action) => {
        switch (action.type) {
            case "increment":
                return state + 1;
            case "dicrement":
                return state - 1
            default:
                return state;

        }
    }
    const [state, dispatch] = useReducer(reducer, 0)
    //useMeo
    const [count01, setCount01] = useState(0);
    const [count02, setCount02] = useState(0);

    //const square = () => {
    //    let i = 0;
    //    while(i < 200000){
    //        i++;
    //    }

    //    return count02 * count02;
    //}
    const square = useMemo(() => {
        let i = 0;
        while (i < 2000000000) {
            i++;
        }

        return count02 * count02;
    }, [count02]);

    //カスタムフック関数のメモ化
    
    const [age, setAge] = useLocalStrage("age", 24);

  return (
      <div>
          <TodoList todos={todos} toggleTodo={toggleTodo }/>
          <input type="text" ref={todoNameRef}/>
          <button onClick={handleAddTodo } >add task</button>
          <button onClick={handleClear}>delete complete task</button>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
          <p>{state}</p>
          <div>tasks:{todos.filter((todo) => !todo.completed).length}</div>

          <hr />
          <h1>usememo</h1>
          <div>{count01}</div>
          <div>{count02}</div>
          <div>{square}</div>

          <button onClick={() => setCount01(count01 + 1)}>+</button>
          <button onClick={() => setCount02(count02 + 2)}>+</button>

         < hr />
          <h1>カスタムフック</h1>
          <p>{age}</p>
          <button onClick={() => setAge(90  )}>+</button>


    </div>
  );
}

export default App;
