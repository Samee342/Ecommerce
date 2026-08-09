import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, updateUserProfile } from "./authAction";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("authToken");
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, profileImageURL: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        ((state.loading = false), (state.user = action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.payload));
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        ((state.loading = false), (state.user = action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        ((state.loading = false),
          (state.error = action.payload || "Registration failed"));
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        ((state.loading = false), (state.user = action.payload));
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.payload));
      });
  },
});
export const { logoutUser, updateUser } = authSlice.actions;
export default authSlice.reducer;
