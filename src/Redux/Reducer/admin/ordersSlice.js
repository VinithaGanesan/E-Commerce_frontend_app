import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOrderofAllUsers = createAsyncThunk(
  "/product/getAllOrderofAllUsers",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/admin/orders/get`
    );
    return response?.data;
  }
);

export const getOrderDetailsForAdmin = createAsyncThunk(
  "/product/getOrderDetailsForAdmin",
  async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/admin/orders/details/${id}`
    );
    return response?.data;
  }
);

export const updateOrderStatus = createAsyncThunk(
  "/product/updateOrderStatus",
  async ({ id, orderStatus }) => {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/admin/orders/update/${id}`,
      { orderStatus }
    );
    return response?.data;
  }
);

const AdminOrdersSlice = createSlice({
  name: "adminOrders",
  initialState: {
    isLoading: false,
    orderList: [],
    orderDetails: null,
  },
  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrderofAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrderofAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      })
      .addCase(getAllOrderofAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      })
      .addCase(getOrderDetailsForAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetailsForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getOrderDetailsForAdmin.rejected, (state) => {
        state.isLoading = false;
        state.orderDetails = null;
      });
  },
});

export const { resetOrderDetails } = AdminOrdersSlice.actions;
export default AdminOrdersSlice.reducer;
