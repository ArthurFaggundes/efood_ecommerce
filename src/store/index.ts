import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../store/reducers/cart'
import api from '../services/api'

import checkoutReducer from '../store/reducers/checkout'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
