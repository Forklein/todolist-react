import './App.css';
import React from 'react';
import { Counter } from './features/counter/Counter';
import { useState, useEffect } from 'react';

function App() {
  const [todolist, setTodolist] = useState([]);
  useEffect(() => {
    // alert('Hi Forklein');
  }, [todolist]);

  const staticTodolist = [
    {
      name: 'Sveglia',
      id: 1,
    },
    {
      name: 'Colazione',
      id: 2,
    },
    {
      name: 'Programmare',
      id: 3,
    },
  ]


  return (
    <div className="container">
      {staticTodolist.map((todo) => <li>{todo.name}</li>)}
    </div>
  );
}

export default App;
