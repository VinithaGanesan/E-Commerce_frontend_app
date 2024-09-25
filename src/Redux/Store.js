import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer/auth/authSlice";
import AdminProductsSlice from "./Reducer/admin/productSlice";
import AdminOrdersSlice from "./Reducer/admin/ordersSlice";
import ShoppingProductSlice from "./Reducer/shop/productSlice";
import shoppingCartSlice from "./Reducer/shop/cartSlice";
import shopAddressSlice from "./Reducer/shop/addressSlice";
import shoppingOrderSlice from "./Reducer/shop/orderSlice";
import searchSlice from "./Reducer/shop/searchSlice";
import reviewSlice from "./Reducer/shop/reviewSlice";
import commonSlice from "./Reducer/common/commonSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: AdminProductsSlice,
    adminOrders: AdminOrdersSlice,
    shopProducts: ShoppingProductSlice,
    shopCart: shoppingCartSlice,
    shopAddress: shopAddressSlice,
    shopOrder: shoppingOrderSlice,
    shopSearch: searchSlice,
    shopReview: reviewSlice,
    commonFeature: commonSlice,
  },
});

export default store;
