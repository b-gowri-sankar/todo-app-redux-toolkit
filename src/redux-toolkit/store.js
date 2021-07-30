import { configureStore } from '@reduxjs/toolkit'
import taskSlicer from './counterSlice'

export const store = configureStore({
    reducer: {
      task: taskSlicer
  },
})