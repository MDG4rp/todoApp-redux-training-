import { configureStore } from '@reduxjs/toolkit'
import {toDoReducer} from './toDoSlice'

export default configureStore({
  reducer: {
    toDo: toDoReducer
  },
})