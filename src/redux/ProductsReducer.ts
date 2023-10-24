import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ProductsApiResponse {
  products?: Products[];
}

export interface GetProductsApiResponse {
  products?: Products[];
}

export interface ProductsState {
  products: Products[];
}

export interface Products {
  id: string;
  title: string;
  price: number;
  descrpition: string;
  thumbnail: string;
  stock: number;
  rating: number;
  category: string;
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    set3PopularProducts: (state, action: PayloadAction<Products[]>) => {
      const tempPrd = action.payload !== undefined ? action.payload : [];
      const sortedProducts = tempPrd.sort((a, b) => b.rating - a.rating);
      const top3Products = sortedProducts.slice(0, 3);
      state.products = top3Products;
    },
  },
});

export const { set3PopularProducts } = productsSlice.actions;
export default productsSlice.reducer;
