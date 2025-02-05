import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "../features/graphSlice";

export const store = configureStore({
  reducer: {
    graph: graphReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
