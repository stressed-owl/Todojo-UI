import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";

const rootReducer = combineReducers({
  todos: todosSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
