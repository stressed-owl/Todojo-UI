import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import vacanciesSlice from "./vacancySlice";
import contactSlice from "./contactSlice";

const rootReducer = combineReducers({
  todos: todosSlice,
  vacancies: vacanciesSlice,
  contact: contactSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
