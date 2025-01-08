import { Meal, ApiResponse, transform, CategoryData } from "../../types/declarations";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
// import { fetchSearchByName } from "../../api/api";

export const fetchMeals = createAsyncThunk(
    'food/searchMeals',
    async(name: string) => {
        const url = "http://www.themealdb.com/api/json/v1/1/search.php?s=" +name
        const response = await fetch(url)
        console.log(response)
        const json = await response.json()
        console.log('json', json)
        const meals: ApiResponse[] = json.meals

        return meals.map(transform)
    }
)

export const fetchCategories = createAsyncThunk(
    'food/fetchCategories',
    async() => {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
        const response = await fetch(url)
        const {categories} = await response.json()
        return categories as CategoryData[]
    }
)

type FoodSliceState = {
    status: 'idle' | 'pending' | 'fullfilled' | 'rejected'
    items: Meal[] | CategoryData[]
    error?: boolean
    errorMessage?: string
}

const initialState: FoodSliceState = {
    status: 'idle',
    items: []
}

export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMeals.pending, (state, action) => {
            state.status = 'pending'
            state.items = []
        })
        .addCase(fetchMeals.fulfilled, (state, action) => {
            state.status = 'fullfilled'
            state.items = action.payload
        })
        .addCase(fetchMeals.rejected, (state, action) => {
            state.error = true;
            state.status = 'rejected'
            state.errorMessage = action.error.message
        })
        .addCase(fetchCategories.pending, (state, action) => {
            state.status = 'pending'
            state.items = []
        })
        .addCase(fetchCategories.fulfilled, (state,action) => {
            state.items = action.payload
            state.status = 'fullfilled'
        })
    }
})

export default foodSlice.reducer;