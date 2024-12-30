import { configureStore } from "@reduxjs/toolkit";
import monthReducer from '../features/datePicker/pickerSlice'
import taskReducer from '../features/tasks/taskSlice'

export default configureStore({
    reducer: {
        month: monthReducer,
        tasks: taskReducer 
    }
})