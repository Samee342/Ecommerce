const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "products",
  initialState: {
    refresh: false,
  },
  reducers: {
    refreshList: (state, actions) => {
      state.refresh = actions.payload;
    },
  },
});
export const { refreshList } = productSlice.actions;
export default productSlice.reducer;
