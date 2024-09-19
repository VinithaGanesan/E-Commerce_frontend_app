import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const addNewProduct = createAsyncThunk(
  "/product/addnewproduct",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/admin/products/add-product",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  }
);

export const fetchAllProducts = createAsyncThunk(
  "/product/fetchAllProducts",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/admin/products/get-allproducts"
    );
    return response?.data;
  }
);

export const editProduct = createAsyncThunk(
  "/product/editProduct",
  async ({ id, formData }) => {
    const response = await axios.put(
      `http://localhost:5000/api/admin/products/edit-product/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "/product/deleteProduct",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/api/admin/products/delete-product/${id}`
    );
    return response?.data;
  }
);

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState: {
    isLoading: false,
    productList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
      });
  },
});

export const {} = AdminProductsSlice.actions;
export default AdminProductsSlice.reducer;
