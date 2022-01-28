import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import filterReducer from '../features/todos/filterSlice';

const myLog = store => next => action => {
  console.log(action.type);
  console.log(store.getState());

  const res = next(action);
  console.log(action.payload);
  return res;
}

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myLog)
});
