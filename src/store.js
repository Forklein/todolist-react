import { createReducer } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import { createStore } from 'redux';

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

const reducer = (state, action) => {
    switch (action.type) {
        case 'addTodo':
            const newTodo = {
                name: action.payload.name.trim(),
                id: action.payload.id
            }
            return [...state, newTodo];
        case 'delTodo':
            const newState = state.filter((el) => {
                if (!el.name.includes(action.payload.name)) {
                    return true;
                }
            })
            return newState;
        default:
            return state;
    }
}


export const store = createStore(reducer, staticTodolist);
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()