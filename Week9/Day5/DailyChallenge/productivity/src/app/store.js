import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/tasks/taskSlice'
import categoryReducer from '../features/categories/categorySlice'

export default configureStore({
    reducer: {
        tasks: taskReducer,
        categories: categoryReducer
    }
})