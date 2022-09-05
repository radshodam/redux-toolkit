import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//?createAsyncThunk on toolkit

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);

//add todos by payload
export const addAsyncTodos = createAsyncThunk(
  "todos/addAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3001/todos", {
        id: Date.now(),
        title: payload.title,
        description: payload.description,
        completed: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
//add toggle by payload
// method put for updated
export const toggleAsyncTodos = createAsyncThunk(
  "todos/toggleAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/todos/${payload.id}`,
        {
          completed: payload.completed,
        }
      );
      console.log("response", response);
      return response.data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
//deleted toggle by payload
// method delete for updated
export const deleteAsyncTodos = createAsyncThunk(
  "todos/deleteAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/todos/${payload.id}`
      );
      console.log("response", response);
      return { id: payload.id };;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);

//?initial State
export const initialState = {
  todos: [],
  loading: false,
  error: null,
};
export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodos: (state, action) => {
      const selectedTodo = state.todos.find(
        (item) => item.id === action.payload.id
      );
      selectedTodo.completed = !selectedTodo.completed;
    },

    deleteTodos: (state, action) => {
      let filtred = state.todos.filter((item) => item.id !== action.payload.id);
      debugger;
      state.todos = filtred;
    },
  },
  //?extraReducers for async actions that
  extraReducers: {
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload, loading: false };
    },
    [getAsyncTodos.pending]: (state, action) => {
      return { ...state, loading: true, todos: [] };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.error.message,
      };
    },
    //?add todos just fulfilled example : you can add pending for loading
    [addAsyncTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    //?add toggleAsync just fulfilled example : you can add pending for loading
    [toggleAsyncTodos.fulfilled]: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      console.log("selectedTodo", selectedTodo);
      selectedTodo.completed = action.payload.completed;
    },
    //?add deleteAsync just fulfilled example : you can add pending for loading
    [deleteAsyncTodos.fulfilled]: (state, action) => {
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );

      state.todos = filteredTodos;
    },
  },
});

// Action creators are generated for each case reducer function
//?if was async no need export :: addAsyncTodos or toggleAsync and deleteAsync
export const { addTodos, toggleTodos, deleteTodos } = todosSlice.actions;

export default todosSlice.reducer;
