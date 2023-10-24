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
  limit: 10,
  filters: {
    setGridView: false,
  },
};

export const productsFilterSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    changeSkipNumber: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
    },
    changeLimitNumber: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setProductsByPage: (state, action: PayloadAction<Products[]>) => {
      const products = action.payload !== undefined ? action.payload : [];
      state.products = products;
    },
    setTotalProducts: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.total = action.payload;
    },
  },
});

export const {
  changeSkipNumber,
  setProductsByPage,
  changeLimitNumber,
  setTotalProducts,
} = productsFilterSlice.actions;
export default productsFilterSlice.reducer;
