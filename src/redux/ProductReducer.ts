import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ProductsApiResponse {
  products?: Products[];
}

export interface GetProductsApiResponse {
  products?: Products[];
}

export interface ProductsState {
  products?: Products[];
}

export interface Products {
  id: string;
  title: string;
  price: string;
  descrpition: string;
  thumbnail: string;
  stock: number;
}

export interface FeaturedProducts {
  id: string;
  image: string;
  title: string;
  description: string;
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductsState>) => {
      if (action.payload !== undefined) {
        state.products = action.payload.products;
      } else {
        state.products = [];
      }
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
