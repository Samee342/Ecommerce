import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const calculateTotal = (products) => {
  return products.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item._id === product._id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      state.totalPrice = calculateTotal(state.products);
    },

    increaseQuantity: (state, action) => {
      const product = action.payload;
      const item = state.products.find((item) => item._id === product._id);

      if (item) {
        item.quantity += 1;
      }

      state.totalPrice = calculateTotal(state.products);
    },

    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const item = state.products.find((item) => item._id === product._id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      state.totalPrice = calculateTotal(state.products);
    },

    removeFromCart: (state, action) => {
      const product = action.payload;

      state.products = state.products.filter(
        (item) => item._id !== product._id,
      );

      state.totalPrice = calculateTotal(state.products);
    },

    clearCart: () => initialState,
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
