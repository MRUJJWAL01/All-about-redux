import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: 0,
};
const ProductSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    getProduct: (state, action) => {
      state.products = action.payload;
    },
    deleteProduct: (state, action) => {
      state.products.splice(action.payload, 1);
    },
  },
});
export const { getProduct, deleteProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
