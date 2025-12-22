import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/app/redux/auth/authSlice";
import userPreferenceReducer from "@/app/redux/userPreference/userPreferenceSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  userPreference: userPreferenceReducer,
});

export default rootReducer;
