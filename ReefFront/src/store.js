import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './slice'


export default configureStore({
  reducer: {
    auth_token: tokenReducer,
  },
})