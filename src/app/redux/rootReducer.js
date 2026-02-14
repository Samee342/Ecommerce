import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/app/redux/auth/authSlice";
import productReducer from "@/app/redux/product/productSlice";
import userPreferenceReducer from "@/app/redux/userPreference/userPreferenceSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  userPreference: userPreferenceReducer,
  product: productReducer,
});

export default rootReducer;
