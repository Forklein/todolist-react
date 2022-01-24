import { createSlice } from "@reduxjs/toolkit";

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

export const todosSlice = createSlice(
    {
        name: 'todos',
        initialState: staticTodolist,
        reducers: {
            addTodo(state, action) {
                const newTodo = {
                    name: action.payload.name.trim(),
                    id: action.payload.id
                }
                return [...state, newTodo];
            },
            delTodo(state, action) {
                return state.filter((element) => element.name !== action.payload.name);
            }
        }
    }
);

// Esportare actions(2) e reducers
const { actions, reducers } = todosSlice;
export const { addTodo, delTodo } = actions;
export default reducers;