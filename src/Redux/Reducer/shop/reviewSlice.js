import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addReview = createAsyncThunk(
  "/search/addReview",
  async (formdata) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/shop/review/add`,
      formdata
    );
    return response?.data;
  }
);

export const getReviews = createAsyncThunk("/search/getReviews", async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/shop/review/${id}`
  );
  return response?.data;
});

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState: {
    isLoading: false,
    reviews: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.reviews = [];
      });
  },
});

export const {} = reviewSlice.actions;

export default reviewSlice.reducer;
