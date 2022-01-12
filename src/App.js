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
    <div className="container text-center">
      <h1>My TodoList</h1>
      <ul className="list-group list-group-flush">
        {staticTodolist.map((todo) => <li key={todo.id} className="list-group-item">{todo.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
