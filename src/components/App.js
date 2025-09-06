

import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Todo from "./Todo";


const App = () => {

   const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add new todo
  const addTodo = () => {
    if (task.trim() === "") return; // ignore empty input
    setTodos([...todos, task]);
    setTask("");
  };

  // Delete todo by index
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (

     <div className="app">
      <h1>React To-Do List</h1>

      {/* Input + Button */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {/* Render Todo Component */}
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
   


export default App
