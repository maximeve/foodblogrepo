
import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState : {
    isLoggedIn : false
  },
  reducers: {
    login: (state,action) => {
        state.isLoggedIn = action.payload;
    },
    logout: (state) => {
        state.isLoggedIn = false;
    }
},
})

// Action creators are generated for each case reducer function
export const { login, logout } = accountSlice.actions

export const  selectUser = state => state.account.isLoggedIn

export default accountSlice.reducer