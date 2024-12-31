import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice.js'
import filterReducer from '../features/filter/filterSlice.js'

export default configureStore({
    reducer: {
        todo: todoReducer,
        filter: filterReducer
    }
})