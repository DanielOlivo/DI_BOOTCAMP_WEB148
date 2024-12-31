import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeOn: true,
    completedOn: true,
    titleFilter: '',
    date: 'all'
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleActive: (state) => {
            state.activeOn = !state.activeOn
        },
        toggleCompleted: (state) => {
            state.completedOn = !state.completedOn
        },
        updDate: (state, action) => {
            console.log('updDate', action.payload, 'length', action.payload.length)
            state.date = action.payload
        },
        updTitle: (state, action) => {
            state.titleFilter = action.payload
        }

    }
})

export const {toggleActive, toggleCompleted, updDate, updTitle} = filterSlice.actions;
export default filterSlice.reducer;