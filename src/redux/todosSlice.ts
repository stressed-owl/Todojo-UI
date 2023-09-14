import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/API";
import { Todo, TodosState } from "../interfaces";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  try {
    const response = await API.get("/todos");
    return { todos: response.data };
  } catch (error) {
    return { error: error };
  }
});

export const addTodo = createAsyncThunk("addTodo", async (todo: Todo) => {
  try {
    const response = await API.post("/todos", todo);
    return { todo: response.data };
  } catch (error) {
    return { error: error };
  }
});

export const deleteTodo = createAsyncThunk("deleteTodo", async (id: number) => {
  try {
    const response = await API.delete(`/todos/${id}`);
    return { id: response.data };
  } catch (error) {
    return { error: error };
  }
});

export const updateTodo = createAsyncThunk("updateTodo", async (id: number) => {
  try {
    const response = await API.put(`/todos/${id}`);
    return response.data;
  } catch (error) {
    return { error: error };
  }
});

const initialState = {
  todos: [],
  loading: false,
  error: null,
} as TodosState;

const todosSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload.todos;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload.todo);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos.filter((todo) => todo.id !== action.payload.id);
      });
  },
});

export default todosSlice.reducer;
