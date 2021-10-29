import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../store/accountStore/accountSlice'

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
})

