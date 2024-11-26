import { createSlice } from '@reduxjs/toolkit'

export const TokenSlice = createSlice({
  name: 'auth_token',
  initialState: {
    email: "placeholder@gmail.com",
    token: "xxxxxx-xxxxx-xxxxx",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    } 
  },
})

// Action creators are generated for each case reducer function
export const { setToken, setEmail } = TokenSlice.actions

export default TokenSlice.reducer