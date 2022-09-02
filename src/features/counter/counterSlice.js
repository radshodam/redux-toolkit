import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    //? Redux Toolkit allows us to write "mutating" logic in reducers. It
    //* doesn't actually mutate the state because it uses the Immer library,
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
