import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/app/redux/auth/authSlice";
import cartReducer from "@/app/redux/cart/cartSlice";
import productReducer from "@/app/redux/product/productSlice";
import userPreferenceReducer from "@/app/redux/userPreference/userPreferenceSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  userPreference: userPreferenceReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
