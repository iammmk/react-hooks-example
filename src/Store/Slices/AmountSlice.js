import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: 0,
  reducers: {
    depositAmount(state, action) {
      return state + action.payload;
    },
    withdrawAmount(state, action) {
      return state - action.payload;
    },
    clearAmount(state, action) {
      return 0;
    },
  },
});

export default amountSlice.reducer;
export const { depositAmount, withdrawAmount, clearAmount } =
  amountSlice.actions;
