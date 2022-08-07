import React, {useState, useRef, useEffect} from 'react'
import {v4 as uuidv4 } from 'uuid'
import ToDoList from './ToDoList'
const LOCAL_STORAGE_KEY = 'todosApp.todos'

export default function ToDoListComponent() {
  const [todos, setTodos] = useState(()=>{
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const todoNameRef = useRef()
  
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) 
    //const checkVal = (storedTodos) ? true : false
    if (storedTodos) setTodos(storedTodos)
  }, [])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === "") return 
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  return (
    <>
      <hr />
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Todo</button>
      <div>{todos.filter(todo => !todo.complete ).length} left todo</div>
    </>
  ) 
}
