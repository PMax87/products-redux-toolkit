import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductReducer";
export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;