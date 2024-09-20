import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer/auth/authSlice";
import AdminProductsSlice from "./Reducer/admin/productSlice";
import ShoppingProductSlice from "./Reducer/shop/productSlice";
import shoppingCartSlice from "./Reducer/shop/cartSlice";
import shopAddressSlice from "./Reducer/shop/addressSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: AdminProductsSlice,
    shopProducts: ShoppingProductSlice,
    shopCart: shoppingCartSlice,
    shopAddress: shopAddressSlice,
  },
});

export default store;
