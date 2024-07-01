import React, { useEffect, useState } from 'react';
import "./style.css";

const Faq = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json()) // Transform response to JSON
      .then((data) => setTodos(data)) // Set the state with the JSON data
      .catch((error) => console.error('Error fetching todos:', error)); // Handle any errors
  }, []);

  return (
    <div className="app">
      <h2>Random Data using Api</h2>
       
        {todos.map((todo) => (
   
          <li key={todo.id}>{todo.title}</li>  
       
        ))}
     
    </div>
  );
};

export default Faq;
