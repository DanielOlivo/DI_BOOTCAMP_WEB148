import { Meal, ApiResponse, transform } from "../../types/declarations";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
// import { fetchSearchByName } from "../../api/api";

export const fetchMeals = createAsyncThunk(
    'food/searchMeals',
    async(name: string) => {
        const url = "http://www.themealdb.com/api/json/v1/1/search.php?s=" +name
        // const url = "api/json/v1/1/search.php?s=" +name
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     // mode: 'no-cors',
        // }

        // const response = await fetch(url, options)
        const response = await fetch(url, {
            // method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // mode: 'cors'
        })
        console.log(response)
        // console.log(response.body)
        // console.log('gonna to make json')
        // console.log('data', data)
        const json = await response.json()
        console.log('json', json)
        const meals: ApiResponse[] = json.meals

        return meals.map(transform)
    }
)

type FoodSliceState = {
    status: 'idle' | 'pending' | 'fullfilled' | 'rejected'
    items: Meal[]
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
    }
})

export default foodSlice.reducer;