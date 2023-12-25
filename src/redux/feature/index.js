import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const { id, ...productData } = payload;
      const product = state[id] || { count: 0, ...productData };
      product.count += 1;
      state[id] = product;
    },
    removeProduct: (state, { payload }) => {
      const product = state[payload];
      if (!product) {
        return;
      }
      if (product.count === 1) {
        delete state[payload];
        return;
      }
      product.count -= 1;
    },
    deleteProduct: (state, { payload }) => {
      const product = state[payload];
      if (!product) {
        return;
      }
      delete state[payload];
      return;
    },
    reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
