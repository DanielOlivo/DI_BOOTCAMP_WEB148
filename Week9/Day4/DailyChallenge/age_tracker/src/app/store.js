import { configureStore } from "@reduxjs/toolkit";
import ageReducer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        age: ageReducer
    }
})