import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    setComponent: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setComponent } = builderSlice.actions;

export default builderSlice.reducer;
