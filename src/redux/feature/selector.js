// const selectCartModule = (state) => state.cart;

// export const selectProductAmount = (state, id) =>
//   selectCartModule(state)[id] || 0;

// export const selectCartArray = (state) => {
//   const cart = selectCartModule(state);
//   return Object.keys(cart).map((id) => ({ id, count: cart[id] }));
// };

// export const selectTotalProductCount = (state) => {
//   const cart = selectCartModule(state);
//   return Object.values(cart).reduce((total, count) => total + count, 0);
// };

const selectCartModule = (state) => state.cart;

export const selectProduct = (state, id) => selectCartModule(state)[id] || null;

export const selectTotalProductCount = (state) => {
  const cart = selectCartModule(state);
  return Object.values(cart).reduce(
    (total, product) => total + product.count,
    0
  );
};

export const selectTotalProductInfo = (state) => {
  const cart = selectCartModule(state);
  return cart;
};
