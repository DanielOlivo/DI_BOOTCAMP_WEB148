import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: {
        sport: 'red',
        job: 'blue',
        important: 'orange',
        books: 'green'
    }
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    }
})

export const  selectAllCategories = (state) => state.categories.categories
export const selectCategoryList = (state) => Object.keys(state.categories.categories)

export default categorySlice.reducer;