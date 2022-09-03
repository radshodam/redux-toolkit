import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todos: [
    { id: 0, title: "one", description: "example todo", completed: false },
  ],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTod: (state, action) => {
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
});

// Action creators are generated for each case reducer function
export const { addTod, toggleTodos, deleteTodos } = todosSlice.actions;

export default todosSlice.reducer;
