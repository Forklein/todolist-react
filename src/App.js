import './App.css';
import React from 'react';
import { Counter } from './features/counter/Counter';
import { useState, useEffect } from 'react';

function App() {
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
  ];

  const [todolist, setTodolist] = useState([]);
  useEffect(() => {
    setTodolist(staticTodolist);
  }, []);

  const [input, setInput] = useState('');

  const saveValue = (e) => {
    setInput(e.target.value);
  }

  const getValue = () => {
    todolist.push({ name: input, id: 4 });
  }


  return (
    <div className="container text-center">
      <h1>My TodoList</h1>
      <div className="box my-2">
        <div className="row">
          <div className="col-6 mx-auto">
            <input type="text" value={input} onChange={saveValue}></input>
            <button onClick={getValue} className="btn btn-success mx-2">Add</button>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {todolist.map((todo) => <li key={todo.id} className="list-group-item">{todo.name}</li>)}
      </ul>
    </div >
  );
}

export default App;
