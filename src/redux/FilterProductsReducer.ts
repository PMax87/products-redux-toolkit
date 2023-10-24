import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products } from "./ProductsReducer";

export interface GetDataFromApi {
  products: Products[];
  skip: number;
  limit: number;
  total: number;
}

export interface GetCategoriesFromApi {
  data: Categories;
}

export interface Categories {
  data: string[];
}

export interface ProductsFilterState {
  products: Products[];
  categories: Categories[];
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
  category: "all",
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
      state.categories = tempCategories;
    },
    setChangeCategory: (state, action) => {
      console.log(action.payload);
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
} = productsFilterSlice.actions;
export default productsFilterSlice.reducer;
