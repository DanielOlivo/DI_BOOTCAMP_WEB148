import {createSlice}  from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: nanoid(),
        title: 'task 1',
        date: new Date(),
        active: true
    }
]

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.push({...action.payload, id: nanoid(), active: true})
        },
        update: (state, action) => {
            const idx = state.findIndex(({id}) => action.payload.id);
            state[idx] = {...state[idx], ...action.payload} 
        },
        remove: (state, action) => {
            return state.filter(({id}) => id != action.payload)
        }
    }
})

export const {add, update, remove} = todoSlice.actions;
export default todoSlice.reducer