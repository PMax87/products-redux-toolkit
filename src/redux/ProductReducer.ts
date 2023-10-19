import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Products {
  id: string;
  title: string;
  price: string;
  descrpition: string;
  thumbnail: string;
  stock: number;
}

export interface ProductsState {
  products: Products[];
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
