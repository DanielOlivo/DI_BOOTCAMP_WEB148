import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initState = {
    posts: [],
    isLoading: false,
    error: null
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchContent',
    async (url) => {
        // try{
            console.log('res...')
            const res = await axios.get(url)
            console.log('res', res)
            const data = await res.data;
            console.log('data', data)
            return data
        // }
        // catch(err){
        //     console.log('err', err)
        //     // if(!err.response){
        //     //     throw err
        //     // }
        //     return rejectWithValue(err.message)
        // }
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            console.log('fullfilled', action.payload)
            state.posts = action.payload
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            console.log('rejected', action.error.message)
            state.isLoading = false
            // state.error = action.error.message
            state.error = action.error.message
            console.log('state', state.error)
        })
    }
})

export default postSlice.reducer