
import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState : {
    isLoggedIn : false,
    favoritePosts : [],
    search : ''
  },

  reducers: {
    login: (state,action) => {
        state.isLoggedIn = action.payload;
    },
    logout: (state) => {
        state.isLoggedIn = false;
    },
    addFavorite: (state,action) => {
      state.favoritePosts.push(action.payload)
  },
    setSearch : (state, action) => {
      state.search = action.payload
    } 
},
})

// Action creators are generated for each case reducer function
export const { login, logout, addFavorite, setSearch } = accountSlice.actions

export const  selectUser = state => state.account.isLoggedIn

export default accountSlice.reducer