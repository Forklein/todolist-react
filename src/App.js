import './App.scss';
import React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, delTodo, toggleTodo } from './features/todos/todosSlice';
import { filterTodo } from './features/todos/filterSlice';


import Alert from './components/alert';


function App() {
  // { dispatch, todolist } Redux senza toolkit
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

  // const addTodo = () => {
  //   if (input.current.value.length > 0) {
  //     dispatch(
  //       {
  //         type: 'addTodo',
  //         payload: {
  //           name: input.current.value,
  //           id: todos.length + 1
  //         }
  //       }
  //     );
  //     setIsAdd(true);
  //   } else {
  //     alert('Please enter characters')
  //   }
  // }

  // const delTodo = (name) => {
  //   dispatch(delTodo({
  //     type: 'delTodo',
  //     payload: {
  //       name
  //     }
  //   }))
  //   setIsDelete(true);
  // }


  const [isDelete, setIsDelete] = useState(false);
  const [isAdd, setIsAdd] = useState(false);


  const todos = useSelector(state => state.todos);
  const activeFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  //Filter todos
  const filteredTodo = todos.filter(todo => {
    if (activeFilter === 'All') {
      return true;
    }
    if (activeFilter === 'Completed') {
      return todo.isDone;
    }
    return !todo.isDone;
  })

  const closeArea = () => {
    setIsDelete(false);
    setIsAdd(false);
  }

  const input = useRef('');

  const add = () => {
    dispatch(addTodo({ name: input.current.value, id: todos.length + 1, isDone: false }));
    setIsAdd(true);
  }

  const del = (todo) => {
    dispatch(delTodo({ id: todo }));
    setIsDelete(true);
  }

  const toggle = (todo) => {
    dispatch(toggleTodo({ id: todo }))
  }

  const getFilter = (todo) => {
    dispatch(filterTodo(todo))
  }

  return (
    <div className="container text-center p-3">
      <h1 className="text-white">My TodoList</h1>
      <div className="box my-2">
        <div className="row">
          <div className="col-6 mx-auto">
            <input type="text" ref={input}></input>
            <button onClick={add} className="btn btn-success mx-2">Add</button>
          </div>
        </div>
      </div>
      {isDelete ? <Alert color='danger' message="Todo deleted" closeArea={closeArea} /> : ''}
      {isAdd ? <Alert color='success' message="Todo created" closeArea={closeArea} /> : ''}
      <div className="todolist col-8 mx-auto">
        <div className="info text-white my-2">
          <details>
            <summary>Current Todolist</summary>
            <p className="m-0">{todos.length} Element</p>
          </details>
        </div>
        <div className="actions">
          <button onClick={(e) => getFilter('All')} className="btn btn-primary">All</button>
          <button onClick={(e) => getFilter('Todo')} className="btn btn-primary mx-2 my-2">Todo</button>
          <button onClick={(e) => getFilter('Completed')} className="btn btn-primary">Completed</button>
        </div>
        <ul className="list-group list-group-flush">
          {filteredTodo.map((todo) =>
            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center mb-2">
              <i onClick={(e) => toggle(todo.id)} className={todo.isDone ? "far fa-check-square fa-2x text-success" : "far fa-check-square fa-2x text-white"}></i>
              <p className="fw-bold m-0">{todo.name}</p>
              <i onClick={(e) => del(todo.id)} className="fas fa-trash-alt fa-2x"></i>
            </li>
          )}
        </ul>
      </div>
    </div >
  );
}

// const matchStateToProps = (state) => {
//   return { todolist: [...state] }
// }

export default App;
// connect(matchStateToProps)(App) Con redux senza toolkit
