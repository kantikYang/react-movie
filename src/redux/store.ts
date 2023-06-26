import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './movieApi';
import { cartReducer } from './feature';
import { logger } from './middleware/logger';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware, logger]),
  devTools: process.env.NODE_ENV !== 'production',
});
