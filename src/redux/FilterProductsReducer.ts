import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products } from "./ProductsReducer";

export interface GetDataFromApi {
  products: Products[];
  skip: number;
  limit: number;
  total: number;
}

export interface ProductsFilterState {
  products: Products[];
  skip: number;
  total: number;
  limit: number;
  filters: {
    setGridView: boolean;
  };
}

const initialState: ProductsFilterState = {
  products: [],
  skip: 0,
  total: 0,
  limit: 0,
  filters: {
    setGridView: false,
  },
};

export const productsFilterSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    onChangeSkipNumber: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
    },
    setProductsByPage: (state, action) => {
      const products = action.payload !== undefined ? action.payload : [];
      state.products = products;
    },
  },
});

export const { onChangeSkipNumber, setProductsByPage } =
  productsFilterSlice.actions;
export default productsFilterSlice.reducer;
