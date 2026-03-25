import { configureStore } from '@reduxjs/toolkit'
import beachesState from './beachesSlice'
import restaurantsState from './restaurantsSlice'

export const store = configureStore({
  reducer: {
    beachesState,
    restaurantsState
  },
})