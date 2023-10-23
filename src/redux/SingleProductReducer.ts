import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SingleProductApiResponse {
  singleProduct?: SingleProduct;
}

export interface SingleProductState {
  singleProduct: SingleProduct;
}

export interface SingleProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  images: string[];
  category: string;
  rating: number;
  stock: number;
  brand: string;
}

const initialState: SingleProductState = {
  singleProduct: {
    id: "",
    title: "",
    price: 0,
    description: "",
    thumbnail: "",
    images: [],
    category: "",
    rating: 0,
    stock: 0,
    brand: "",
  },
};

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    setSingleProduct: (state, action: PayloadAction<SingleProduct>) => {
      state.singleProduct = { ...action.payload };
      //   (state.singleProduct.id = action.payload.id),
      //     (state.singleProduct.title = action.payload.title),
      //     (state.singleProduct.price = action.payload.price),
      //     (state.singleProduct.description = action.payload.description);
      //   (state.singleProduct.thumbnail = action.payload.thumbnail),
      //     (state.singleProduct.images = action.payload.images),
      //     (state.singleProduct.category = action.payload.category);
      //   (state.singleProduct.rating = action.payload.rating),
      //     (state.singleProduct.stock = action.payload.stock);
    },
  },
});

export const { setSingleProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;
