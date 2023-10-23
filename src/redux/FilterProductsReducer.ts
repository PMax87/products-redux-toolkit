import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products } from "./ProductsReducer";

export interface ProductsFilterState {
  products: Products[];
  filters: {
    skipNumberForPage: number;
  };
}

const initialState: ProductsFilterState = {
  products: [],
  filters: {
    skipNumberForPage: 0,
  },
};

export const productsFilterSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    onChangeSkipNumber: (state, action: PayloadAction<number>) => {
      state.filters.skipNumberForPage = action.payload;
    },
    setProductsByPage: (state, action: PayloadAction<Products[]>) => {
        const products = action.payload !== undefined ? action.payload : []
        state.products = products
    }
  },
});

export const { onChangeSkipNumber, setProductsByPage } = productsFilterSlice.actions;
export default productsFilterSlice.reducer;
