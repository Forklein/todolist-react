import './App.scss';
import React from 'react';
import { Counter } from './features/counter/Counter';
import { connect } from 'react-redux';
import { useState, useEffect, useRef } from 'react';

function App({ dispatch, todolist }) {
  // const staticTodolist = [
  //   {
  //     name: 'Sveglia',
  //     id: 1,
  //   },
  //   {
  //     name: 'Colazione',
  //     id: 2,
  //   },
  //   {
  //     name: 'Programmare',
  //     id: 3,
  //   },
  // ];

  // const [todolist, setTodolist] = useState([]);
  // useEffect(() => {
  //   setTodolist(staticTodolist);
  // }, []);

  const input = useRef('');

  // const getValue = () => {
  //   alert(input.current.value);
  // }

  // const addTodo = () => {
  //   const newTodo = {
  //     name: input.current.value,
  //     id: todolist.length + 1
  //   }
  //   setTodolist([...todolist, newTodo]);
  // }

  const addTodo = () => {
    // const newTodo = {
    //   name: input.current.value,
    //   id: todolist.length + 1
    // }
    if (input.current.value.length > 0) {
      dispatch(
        {
          type: 'addTodo',
          payload: {
            name: input.current.value,
            id: todolist.length + 1
          }
        }
      );
    } else {
      alert('Please enter characters')
    }
  }

  const delTodo = (name) => {
    dispatch({
      type: 'delTodo',
      payload: {
        name
      }
    })
  }

  return (
    <div className="container text-center">
      <h1>My TodoList</h1>
      <div className="box my-2">
        <div className="row">
          <div className="col-6 mx-auto">
            <input type="text" ref={input}></input>
            <button onClick={addTodo} className="btn btn-success mx-2">Add</button>
          </div>
        </div>
      </div>
      <div className="todolist p-5 col-8 mx-auto">
        <ul className="list-group list-group-flush">
          {todolist.map((todo) => <li key={todo.id} className="list-group-item"><p className="fw-bold">{todo.name}</p> <i onClick={(e) => delTodo(todo.name)} className="fas fa-trash-alt fa-2x"></i></li>)}
        </ul>
      </div>
    </div >
  );
}

const matchStateToProps = (state) => {
  return { todolist: [...state] }
}

export default connect(matchStateToProps)(App);
