import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    plus: (state) => {
      state.value += 1;
    },
  },
});

export const { plus } = counterSlice.actions;
export default counterSlice.reducer;
