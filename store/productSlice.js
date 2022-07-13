import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  status: "idle",
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://103.28.121.57/api/products");
    return response.json();
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProduct.fulfilled]: (state, action) => {},
    [fetchProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
