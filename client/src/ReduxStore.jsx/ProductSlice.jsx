import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Product: [],
  isLoading: false,
  error: null,
};

export const Productlice = createSlice({
  name: "Product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetch_Data.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetch_Data.fulfilled, (state, action) => {
      state.isLoading = false;
      state.Product = action.payload;
    });
    builder.addCase(fetch_Data.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export const fetch_Data = createAsyncThunk("Product/fetch_Data", async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_REACT_API}/get-product`
  );
  return data.product;
});

export default Productlice.reducer;
