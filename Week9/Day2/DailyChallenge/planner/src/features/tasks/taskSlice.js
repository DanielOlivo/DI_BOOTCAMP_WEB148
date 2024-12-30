import { createSlice } from "@reduxjs/toolkit";
import { extract, now } from "../../utils/dateExtract";
import { nanoid } from "@reduxjs/toolkit";

const item = {
    id: nanoid(),
    date: now(),
    title: 'homework',
    details: 'make a planner app with React-Redux',
    isDone: false
}

const initialState = {
    all: [ item ],
    selected: [ item ]
}

export const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            const {title, details, date} = action.payload;
            state.all.push({title, details, date, isDone: false, id: nanoid()})
            state.selected = state.all.filter(({date: dt}) => 
                date.year == dt.year && date.month == dt.month && date.date == dt.date);
        },
        edit: (state, action) => {
            const {title, details, id, date} = action.payload
            const task = state.all.find(t => t.id === id);
            task.title = title;
            task.details = details
            task.date = date
            state.selected = state.all.filter(({date}) => 
                task.date.year == date.year 
                && task.date.month == date.month 
                && date == date.date);
            console.log('task', task.title, task.details)
        },
        remove: (state, action) => {
            const itemId = action.payload
            state.all = state.all.filter(({id}) => id !== itemId);
            state.selected = state.selected.filter(({id}) => id !== itemId);
        },
        selectDay: (state, action) => {
            const {year, month, date} = action.payload;
            state.selected = state.all.filter((item) => 
                year == item.date.year 
                && month == item.date.month 
                && date == item.date.date);
            console.log('selected', state.selected)
        }
    }
})


export const {add, edit, remove, selectDay} = taskSlice.actions;
export default taskSlice.reducer;