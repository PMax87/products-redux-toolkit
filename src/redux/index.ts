import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductsReducer";
import NavbarReducer from "./NavbarReducer";
import SingleProductReducer from "./SingleProductReducer";
export const store = configureStore({
  reducer: {
    products: ProductReducer,
    navbar: NavbarReducer,
    singleProducts: SingleProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
