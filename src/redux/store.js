import { configureStore } from '@reduxjs/toolkit'
import { beaches } from './beachesSlice'

export const store = configureStore({
  reducer: {
    beaches
  },
})