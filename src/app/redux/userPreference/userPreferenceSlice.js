import { createSlice } from "@reduxjs/toolkit";
const userPreferenceSlice = createSlice({
  name: "userPreference",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme == "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = userPreferenceSlice.actions;

export default userPreferenceSlice.reducer;
