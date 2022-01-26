import { createSlice } from "@reduxjs/toolkit";

const staticTodolist = [
    {
        name: 'Sveglia',
        id: 1,
        isDone: false
    },
    {
        name: 'Colazione',
        id: 2,
        isDone: false
    },
    {
        name: 'Programmare',
        id: 3,
        isDone: false
    },
];

export const todosSlice = createSlice(
    {
        name: 'todos',
        initialState: staticTodolist,
        reducers: {
            addTodo(state, action) {
                // const newTodo = {
                //     name: action.payload.name.trim(),
                //     id: action.payload.id
                // }
                // return [...state, newTodo];
                // state.push(action.payload);
                return [...state, action.payload]
            },
            delTodo(state, action) {
                return state.filter((element) => element.id !== action.payload.id);
            },
            toggleTodo(state, action) {
                state.map((element) => {
                    if (element.id === action.payload.id) {
                        element.isDone = !element.isDone;
                    }
                    return element;
                })
            }
        }
    }
);

// Esportare actions(3) e reducers
const { actions, reducer } = todosSlice;
export const { addTodo, delTodo, toggleTodo } = actions;
export default reducer;