import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const increment = createAsyncThunk(
    'age/increment',
    async(age) => {
        await wait(4000);
        return age + 1
    }
)

export const decrement = createAsyncThunk(
    'age/decrement',
    async(age) => {
        await wait(4000);
        return age - 1
    }
)

const initialState = {
    age: 20,
    onLoading: false
}

export const counterSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(increment.pending, (state, action) => {
            state.onLoading = true
        })
        builder.addCase(decrement.pending, (state, action) => {
            state.onLoading = true
        })
        builder.addCase(increment.fulfilled, (state, action) => {
            state.onLoading = false
            state.age = action.payload
        })
        builder.addCase(decrement.fulfilled, (state, action) => {
            state.onLoading = false
            state.age = action.payload
        })
    }
})

export default counterSlice.reducer

function wait(ms){
    return new Promise(res => setTimeout(res, ms));
}