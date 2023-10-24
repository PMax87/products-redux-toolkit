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
  categories: string[];
  category: string;
  skip: number;
  total: number;
  limit: number;
  filters: {
    setGridView: boolean;
  };
}

const initialState: ProductsFilterState = {
  products: [],
  categories: [],
  category: "smartphones",
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
      state.total = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      console.log(action.payload);
      const tempCategories = action.payload !== undefined ? action.payload : [];
      state.categories = ["all", ...tempCategories];
    },
    setChangeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      const products = state.products.filter(
        (product) => product.category === action.payload
      );
      state.products = products;
    },
    setProductsOfACategory: (state, action: PayloadAction<Products[]>) => {
      const products = action.payload !== undefined ? action.payload : [];
      state.products = products;
    },
  },
});

export const {
  changeSkipNumber,
  setProductsByPage,
  changeLimitNumber,
  setTotalProducts,
  setCategories,
  setChangeCategory,
  setProductsOfACategory,
} = productsFilterSlice.actions;
export default productsFilterSlice.reducer;
