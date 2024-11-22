import { createSlice } from '@reduxjs/toolkit'

export const TokenSlice = createSlice({
  name: 'auth_token',
  initialState: {
    value: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = TokenSlice.actions

export default TokenSlice.reducer