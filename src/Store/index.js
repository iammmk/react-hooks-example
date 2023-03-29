import { configureStore } from "@reduxjs/toolkit";
import AmountSlice from "./Slices/AmountSlice";

const store = configureStore({
  reducer: {
    amount: AmountSlice,
  },
});

export default store;
