import { configureStore } from '@reduxjs/toolkit'
import { scoreSlice } from './score/scoreSlice'
export const makeStore = () => {
  return configureStore({
    reducer: scoreSlice,
  })
} 