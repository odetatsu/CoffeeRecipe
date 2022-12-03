import React, { useCallback, useMemo, useReducer } from 'react';
import TodoList from './TodoList';
import { useState, useRef, useEffect } from "react";
import TodoItem from './TodoItem';
import {v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';
import { useSelector } from './store';
import axios, { AxiosResponse } from 'axios';
import todo from "./todo.json";

type todo = typeof todo;

const baseURL = "/recipes?name=User"

function App() {

    const [todos, setTodos] = useState<todo[]>([]);

    const todoNameRef = useRef<HTMLInputElement>(null);


    const handleAddTodo = () => {
        axios.get(baseURL).then((response:AxiosResponse<todo[]>) => {
            console.log(response.data);

            //setTodos(response.data);
          });

    };

    const toggleTodo = (id:number) => {
        const newTodos = todos.slice(0);
        const todo: todo = todos.find((todo) => todo.RECIPE_KEY === id) as todo;
        //todo.ACTIVE_FLG = !todo.ACTIVE_FLG;
        setTodos(newTodos);

    }
    const handleClear = () =>
    {
        const newTodos = todos.filter((todo) => !todo.ACTIVE_FLG);
        setTodos(newTodos);

    }
    useEffect(() => {
        console.log("hello hooks");
    }, [todos])


    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState("2");
  return (
      <div>
          <TodoList todos={todos} toggleTodo={toggleTodo }/>
          <input type="text" ref={todoNameRef}/>
          <button onClick={handleAddTodo } >add task</button>
          <button onClick={handleClear}>delete complete task</button>

          <input type="text" onChange={(e) => setIncrementAmount(e.target.value)} />

          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>+</button>

          <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>+</button>

          <p>{count}</p>
          <div>tasks:{todos.filter((todo) => !todo.ACTIVE_FLG).length}</div>

    </div>
  );
}

export default App;
