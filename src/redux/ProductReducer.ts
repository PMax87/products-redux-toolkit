import { createSlice } from "@reduxjs/toolkit";

export interface ProductsApiResponse {
  prdocuts: Products[];
}

export interface GetProductsApiResponse {
  products: Products[];
}

export interface ProductsState {
  products: Products[];
}

export interface Products {
  id: string;
  title: string;
  price: string;
  descrpition: string;
  thumbnail: string;
  stock: number;
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
